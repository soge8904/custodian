"""
This module implements error handlers for Nwchem runs. Currently tested only
for B3LYP DFT jobs.
"""

from pymatgen.io.nwchem import NwInput, NwOutput

from custodian.ansible.interpreter import Modder
from custodian.custodian import ErrorHandler
from custodian.utils import backup


class NwchemErrorHandler(ErrorHandler):
    """
    Error handler for Nwchem Jobs. Currently tested only for B3LYP DFT jobs
    generated by pymatgen.
    """

    def __init__(self, output_filename="mol.nwout"):
        """Initialize with an output file name.

        Args:
            output_filename (str): This is the file where the stdout for nwchem
                is being redirected. The error messages that are checked are
                present in the stdout. Defaults to "mol.nwout", which is the
                default redirect used by :class:`custodian.nwchem.jobs
                .NwchemJob`.
        """
        self.output_filename = output_filename

    def check(self):
        """Check for errors."""
        out = NwOutput(self.output_filename)
        self.errors = []
        self.input_file = out.job_info["input"]
        if out.data[-1]["has_error"]:
            self.errors.extend(out.data[-1]["errors"])
        self.errors = list(set(self.errors))
        self.ntasks = len(out.data)
        return len(self.errors) > 0

    def _mod_input(self, search_string_func, mod_string_func):
        with open(self.input_file) as file:
            lines = []
            for line in file:
                if search_string_func(line):
                    lines.append(mod_string_func(line))
                else:
                    lines.append(line)

        with open(self.input_file, "w") as fout:
            fout.write("".join(lines))

    def correct(self):
        """Correct errors."""
        backup("*.nw*")
        actions = []
        nwi = NwInput.from_file(self.input_file)
        for e in self.errors:
            if e == "autoz error":
                action = {"_set": {"geometry_options": ["units", "angstroms", "noautoz"]}}
                actions.append(action)
            elif e == "Bad convergence":
                t = nwi.tasks[self.ntasks - 1]
                if "cgmin" in t.theory_directives:
                    nwi.tasks.pop(self.ntasks - 1)
                else:
                    t.theory_directives["cgmin"] = ""
                for t in nwi.tasks:
                    if t.operation.startswith("freq"):
                        # You cannot calculate hessian with cgmin.
                        t.theory_directives["nocgmin"] = ""
                action = {"_set": {"tasks": [t.as_dict() for t in nwi.tasks]}}
                actions.append(action)
            else:
                # For unimplemented errors, this should just cause the job to
                # die.
                return {"errors": self.errors, "actions": None}

        m = Modder()
        for action in actions:
            nwi = m.modify_object(action, nwi)
        nwi.write_file(self.input_file)
        return {"errors": self.errors, "actions": actions}

    def __str__(self):
        return "NwchemErrorHandler"
