Search.setIndex({docnames:["_themes/README","changelog","custodian","custodian.ansible","custodian.cli","custodian.feff","custodian.lobster","custodian.nwchem","custodian.qchem","custodian.vasp","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["_themes/README.rst","changelog.rst","custodian.rst","custodian.ansible.rst","custodian.cli.rst","custodian.feff.rst","custodian.lobster.rst","custodian.nwchem.rst","custodian.qchem.rst","custodian.vasp.rst","index.rst","modules.rst"],objects:{"":{custodian:[2,0,0,"-"]},"custodian.ansible":{actions:[3,0,0,"-"],interpreter:[3,0,0,"-"]},"custodian.ansible.actions":{DictActions:[3,1,1,""],FileActions:[3,1,1,""],get_nested_dict:[3,3,1,""]},"custodian.ansible.actions.DictActions":{add_to_set:[3,2,1,""],inc:[3,2,1,""],pop:[3,2,1,""],pull:[3,2,1,""],pull_all:[3,2,1,""],push:[3,2,1,""],push_all:[3,2,1,""],rename:[3,2,1,""],set:[3,2,1,""],unset:[3,2,1,""]},"custodian.ansible.actions.FileActions":{file_copy:[3,2,1,""],file_create:[3,2,1,""],file_delete:[3,2,1,""],file_modify:[3,2,1,""],file_move:[3,2,1,""]},"custodian.ansible.interpreter":{Modder:[3,1,1,""]},"custodian.ansible.interpreter.Modder":{modify:[3,2,1,""],modify_object:[3,2,1,""]},"custodian.cli":{converge_geometry:[4,0,0,"-"],converge_kpoints:[4,0,0,"-"],cstdn:[4,0,0,"-"],run_nwchem:[4,0,0,"-"],run_vasp:[4,0,0,"-"]},"custodian.cli.converge_geometry":{do_run:[4,3,1,""],get_runs:[4,3,1,""]},"custodian.cli.converge_kpoints":{do_run:[4,3,1,""],get_runs:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.cstdn":{main:[4,3,1,""],print_example:[4,3,1,""],run:[4,3,1,""]},"custodian.cli.run_nwchem":{do_run:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.run_vasp":{do_run:[4,3,1,""],get_jobs:[4,3,1,""],load_class:[4,3,1,""],main:[4,3,1,""]},"custodian.custodian":{Custodian:[2,1,1,""],CustodianError:[2,5,1,""],ErrorHandler:[2,1,1,""],Job:[2,1,1,""],MaxCorrectionsError:[2,5,1,""],MaxCorrectionsPerHandlerError:[2,5,1,""],MaxCorrectionsPerJobError:[2,5,1,""],NonRecoverableError:[2,5,1,""],ReturnCodeError:[2,5,1,""],ValidationError:[2,5,1,""],Validator:[2,1,1,""]},"custodian.custodian.Custodian":{LOG_FILE:[2,4,1,""],from_spec:[2,2,1,""],run:[2,2,1,""],run_interrupted:[2,2,1,""]},"custodian.custodian.ErrorHandler":{check:[2,2,1,""],correct:[2,2,1,""],is_monitor:[2,4,1,""],is_terminating:[2,4,1,""],max_num_corrections:[2,4,1,""],n_applied_corrections:[2,2,1,""],raise_on_max:[2,4,1,""],raises_runtime_error:[2,4,1,""]},"custodian.custodian.Job":{name:[2,2,1,""],postprocess:[2,2,1,""],run:[2,2,1,""],setup:[2,2,1,""],terminate:[2,2,1,""]},"custodian.custodian.Validator":{check:[2,2,1,""]},"custodian.feff":{handlers:[5,0,0,"-"],interpreter:[5,0,0,"-"],jobs:[5,0,0,"-"]},"custodian.feff.handlers":{UnconvergedErrorHandler:[5,1,1,""]},"custodian.feff.handlers.UnconvergedErrorHandler":{check:[5,2,1,""],correct:[5,2,1,""],is_monitor:[5,4,1,""]},"custodian.feff.interpreter":{FeffModder:[5,1,1,""]},"custodian.feff.interpreter.FeffModder":{apply_actions:[5,2,1,""]},"custodian.feff.jobs":{FeffJob:[5,1,1,""]},"custodian.feff.jobs.FeffJob":{postprocess:[5,2,1,""],run:[5,2,1,""],setup:[5,2,1,""]},"custodian.lobster":{handlers:[6,0,0,"-"],jobs:[6,0,0,"-"]},"custodian.lobster.handlers":{ChargeSpillingValidator:[6,1,1,""],EnoughBandsValidator:[6,1,1,""],LobsterFilesValidator:[6,1,1,""]},"custodian.lobster.handlers.ChargeSpillingValidator":{check:[6,2,1,""]},"custodian.lobster.handlers.EnoughBandsValidator":{check:[6,2,1,""]},"custodian.lobster.handlers.LobsterFilesValidator":{check:[6,2,1,""]},"custodian.lobster.jobs":{LobsterJob:[6,1,1,""]},"custodian.lobster.jobs.LobsterJob":{postprocess:[6,2,1,""],run:[6,2,1,""],setup:[6,2,1,""]},"custodian.nwchem":{handlers:[7,0,0,"-"],jobs:[7,0,0,"-"]},"custodian.nwchem.handlers":{NwchemErrorHandler:[7,1,1,""]},"custodian.nwchem.handlers.NwchemErrorHandler":{check:[7,2,1,""],correct:[7,2,1,""]},"custodian.nwchem.jobs":{NwchemJob:[7,1,1,""]},"custodian.nwchem.jobs.NwchemJob":{postprocess:[7,2,1,""],run:[7,2,1,""],setup:[7,2,1,""]},"custodian.qchem":{handlers:[8,0,0,"-"],jobs:[8,0,0,"-"]},"custodian.qchem.handlers":{QChemErrorHandler:[8,1,1,""],QChemSCFErrorHandler:[8,1,1,""]},"custodian.qchem.handlers.QChemErrorHandler":{check:[8,2,1,""],correct:[8,2,1,""],is_monitor:[8,4,1,""]},"custodian.qchem.handlers.QChemSCFErrorHandler":{check:[8,2,1,""],correct:[8,2,1,""],is_monitor:[8,4,1,""]},"custodian.qchem.jobs":{QCJob:[8,1,1,""],perturb_coordinates:[8,3,1,""],vector_list_diff:[8,3,1,""]},"custodian.qchem.jobs.QCJob":{current_command:[8,2,1,""],opt_with_frequency_flattener:[8,2,1,""],postprocess:[8,2,1,""],run:[8,2,1,""],setup:[8,2,1,""]},"custodian.utils":{backup:[2,3,1,""],get_execution_host_info:[2,3,1,""]},"custodian.vasp":{handlers:[9,0,0,"-"],interpreter:[9,0,0,"-"],jobs:[9,0,0,"-"],validators:[9,0,0,"-"]},"custodian.vasp.handlers":{AliasingErrorHandler:[9,1,1,""],CheckpointHandler:[9,1,1,""],DriftErrorHandler:[9,1,1,""],FrozenJobErrorHandler:[9,1,1,""],LrfCommutatorHandler:[9,1,1,""],MeshSymmetryErrorHandler:[9,1,1,""],NonConvergingErrorHandler:[9,1,1,""],PositiveEnergyErrorHandler:[9,1,1,""],PotimErrorHandler:[9,1,1,""],StdErrHandler:[9,1,1,""],StoppedRunHandler:[9,1,1,""],UnconvergedErrorHandler:[9,1,1,""],VaspErrorHandler:[9,1,1,""],WalltimeHandler:[9,1,1,""]},"custodian.vasp.handlers.AliasingErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],error_msgs:[9,4,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.CheckpointHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""],is_terminating:[9,4,1,""]},"custodian.vasp.handlers.DriftErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""]},"custodian.vasp.handlers.FrozenJobErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.LrfCommutatorHandler":{check:[9,2,1,""],correct:[9,2,1,""],error_msgs:[9,4,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.MeshSymmetryErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.NonConvergingErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],from_dict:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.PositiveEnergyErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.PotimErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.StdErrHandler":{check:[9,2,1,""],correct:[9,2,1,""],error_msgs:[9,4,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.StoppedRunHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""],is_terminating:[9,4,1,""]},"custodian.vasp.handlers.UnconvergedErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.VaspErrorHandler":{check:[9,2,1,""],correct:[9,2,1,""],error_msgs:[9,4,1,""],is_monitor:[9,4,1,""]},"custodian.vasp.handlers.WalltimeHandler":{check:[9,2,1,""],correct:[9,2,1,""],is_monitor:[9,4,1,""],is_terminating:[9,4,1,""],raises_runtime_error:[9,4,1,""]},"custodian.vasp.interpreter":{VaspModder:[9,1,1,""]},"custodian.vasp.interpreter.VaspModder":{apply_actions:[9,2,1,""]},"custodian.vasp.jobs":{GenerateVaspInputJob:[9,1,1,""],VaspJob:[9,1,1,""],VaspNEBJob:[9,1,1,""]},"custodian.vasp.jobs.GenerateVaspInputJob":{postprocess:[9,2,1,""],run:[9,2,1,""],setup:[9,2,1,""]},"custodian.vasp.jobs.VaspJob":{constrained_opt_run:[9,2,1,""],double_relaxation_run:[9,2,1,""],full_opt_run:[9,2,1,""],metagga_opt_run:[9,2,1,""],postprocess:[9,2,1,""],run:[9,2,1,""],setup:[9,2,1,""],terminate:[9,2,1,""]},"custodian.vasp.jobs.VaspNEBJob":{postprocess:[9,2,1,""],run:[9,2,1,""],setup:[9,2,1,""]},"custodian.vasp.validators":{VaspAECCARValidator:[9,1,1,""],VaspFilesValidator:[9,1,1,""],VaspNpTMDValidator:[9,1,1,""],VasprunXMLValidator:[9,1,1,""],check_broken_chgcar:[9,3,1,""]},"custodian.vasp.validators.VaspAECCARValidator":{check:[9,2,1,""]},"custodian.vasp.validators.VaspFilesValidator":{check:[9,2,1,""]},"custodian.vasp.validators.VaspNpTMDValidator":{check:[9,2,1,""]},"custodian.vasp.validators.VasprunXMLValidator":{check:[9,2,1,""]},custodian:{ansible:[3,0,0,"-"],cli:[4,0,0,"-"],custodian:[2,0,0,"-"],feff:[5,0,0,"-"],lobster:[6,0,0,"-"],nwchem:[7,0,0,"-"],qchem:[8,0,0,"-"],utils:[2,0,0,"-"],vasp:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"1ev":9,"1x1x1":[1,9],"abstract":[2,10],"case":[9,10],"catch":[1,2,9],"class":[1,2,3,5,6,7,8,9,10],"default":[1,2,3,5,7,8,9],"final":[2,5,9,10],"float":[6,8,9],"function":[1,2,9],"import":[1,10],"int":[2,8,9],"long":[9,10],"new":[1,3,10],"return":[1,2,3,5,6,7,8,9,10],"static":[1,3,9,10],"switch":[1,9],"true":[2,3,5,6,7,8,9,10],"try":8,AND:10,Added:1,BUT:10,But:9,EOS:9,FOR:10,For:[1,2,3,7,9,10],NOT:10,Not:7,One:9,PBS:[1,9],Such:10,THE:10,The:[0,1,2,3,7,8,9,10],There:[2,9,10],These:2,USE:10,Use:9,Used:[2,5,8,9],Useful:[1,9],Using:10,WITH:10,Will:1,__init__:[2,10],_add_to_set:3,_each:3,_file_copi:[2,3,9,10],_file_delet:3,_file_mov:3,_inc:3,_pop:3,_pull:3,_pull_al:3,_push:3,_push_al:3,_renam:3,_set:[3,9,10],_theme:0,_unset:3,abov:10,absolut:9,abspath:0,access:3,accordingli:9,accur:9,action:[2,5,7,8,9,10,11],action_keyword:3,activ:9,actual:[2,3,5,7,8,9],actual_cont:3,add:[0,10],add_files_to_gzip:6,add_to_set:3,added:[9,10],addit:10,addon:0,address:[1,8],adopt:3,aeccar:9,affect:9,aflow:[1,9],after:[1,2,8,9,10],again:10,aimd:9,aka:8,algo:[1,9],algorithm:[8,9],alias:9,aliasing_incar:9,aliasingerrorhandl:[2,9,10],all:[1,2,5,8,9,10],alloc:9,allow:[2,3,8,9,10],alreadi:9,also:[0,9,10],altern:[0,9],alwai:10,ambigu:3,amin:9,amount:9,analysi:[2,8,9,10],ani:[2,3,5,7,8,9,10],annot:10,ansibl:[2,5,7,9,11],anubhav:10,api:[1,3],append:[0,5,7,8,9],appli:[2,5,6,8,9],applic:10,apply_act:[5,9],approxim:9,arbitrari:1,archiv:5,area:10,arg:[4,7,9,10],argument:[3,9,10],aris:10,around:9,arrang:9,as_dict:3,aspect:10,assimil:1,associ:10,atom:9,atom_relax:9,attempt:9,attribut:2,author:10,auto:[9,10],auto_continu:9,auto_gamma:[1,9],auto_npar:[1,9],automat:[1,5,9],avail:[6,10],averag:9,avoid:[3,5,9],b3lyp:7,back:[2,5,9],background:1,backup:[1,2,5,6,7,8,9],backward:[1,9],bad:2,badvasprunxmlhandl:1,band:[1,6,9],base:[1,2,3,5,6,7,8,9,10],basi:[9,10],basic:[4,5,7,8,9],becaus:3,becom:10,been:[2,6,8,9,10],befor:[2,8,9],begin:2,being:[7,9],below:[6,10],better:9,between:[2,9,10],bfg:9,biaxial:9,bisect:9,bit:9,bleed:10,bool:[2,3,5,6,7,8,9],bracket:9,brion:[1,9],brmix:[1,9],buffer:[1,9],buffer_tim:9,bug:[1,10],buggi:10,bye:3,calcul:[1,5,6,8,9],call:[1,2,5,6,7,8,9],callabl:2,can:[0,1,2,3,8,9,10],cannot:[2,9],care:9,caus:[1,2,9,10],ceder:10,cell:9,center:1,certain:[6,9,10],chanc:10,chang:[5,7,9],charg:[6,9,10],charge_spilling_limit:6,chargespillingvalid:6,check:[0,1,2,5,6,7,8,9,10],check_broken_chgcar:9,check_connect:8,checkpoint:[1,2,9,10],checkpointhandl:9,chemistri:10,chevrier:10,chgcar:9,chk:2,chk_:9,chkpt:9,cholia:10,claim:10,classifi:2,classmethod:[2,8,9],cleanup:[1,2,8,9,10],cli:[2,11],clone:10,cluster:[1,6,9],cluster_nam:2,code:[1,2,9,10],codestyl:10,cohp:6,collinear:9,combiant:9,combin:[4,9],come:[1,10],command:[1,6,7,8,9,10],commatsci:10,common:[2,8,9,10],common_param:2,commonli:1,compat:[1,9],compil:[1,9],complet:[2,9,10],complex:[9,10],complianc:10,compon:10,comprehens:[1,10],compris:10,comput:10,conceiv:9,concret:10,condit:10,conf:0,configur:10,connect:[8,10],consid:[2,6,9,10],consider:9,consolid:1,constrain:9,constrained_opt_run:9,construct:2,constructor:[5,9],consult:10,contain:[0,5,10],contcar:[2,9,10],contcar_onli:9,content:[0,10,11],continu:9,contract:10,control:1,converg:[1,4,5,8,9,10],converge_geometri:[2,11],converge_kpoint:[1,2,10,11],copi:[2,3,5,6,7,8,9,10],copy_magmom:9,copyright:10,core:[1,8,9],correct:[1,2,5,7,8,9,10],correspond:9,corrupt:9,could:[2,9],counter:2,cours:2,crash:9,creat:[2,3,6,9,10],creation:[1,2],criteria:9,critic:1,cstdn:[1,2,11],current:[1,2,5,7,8,9,10],current_command:8,custodian:1,custodian_exampl:10,custodian_param:[2,10],custodianerror:2,custom:[2,9],customiz:[2,10],dacek:1,dai:10,damag:10,dan:10,dat:5,data:[9,10],date:1,dav:9,david:1,davidson:10,de_threshold:9,deal:10,def:10,defin:[2,9,10],delet:[3,9],delta:8,demonstr:10,densiti:9,dentet:[1,9],denteterrorhandl:10,deped:1,depend:3,deprec:[1,7],deriv:9,describ:[2,5,7,8,9],desir:[2,9],dest:[2,3,9,10],detail:10,detect:[2,5,6,7,8,9,10],determin:9,develop:10,dft:[1,7,9],diagon:9,dict:[2,3,5,7,8,9,10],dictact:[3,5,9],diff_thresh:9,differ:[2,5,8,9,10],difficult:[2,9],diis_gdm:8,dir:1,direct:[5,7,9],directori:[1,2,5,8,9,10],distribut:10,do_run:4,doc:[0,1],docs_rst:8,document:[0,1,3,10],doe:[2,3,5,9],doesn:2,doi:10,done:10,doubl:[1,9,10],double_relaxation_run:[9,10],drift:9,drifterrorhandl:[1,9],driv:0,dtbdyn:9,due:[9,10],dure:[1,2,7,8,9,10],dwaraknath:1,each:[2,9,10],earli:2,easiest:10,easili:3,edddav:9,eddiag:9,eddrmm:9,eddrrm:9,edfiffg:9,edg:10,ediff:9,ediffg:9,edwav:9,effect:[1,9],either:[2,8,9],electron:[1,9],electronic_step_stop:9,element:9,elf:9,elf_kpar:9,elf_ncl:9,els:8,enabl:1,enaug_multipli:9,encount:[1,2,10],end:[2,5,6,7,8,9],energi:[9,10],enforc:10,enough:6,enoughbandsvalid:6,ensembl:9,ensur:2,environ:9,environment:10,equal:2,equival:9,err1:2,err2:2,error:[1,2,3,5,6,7,8,9,10],error_dict:2,error_msg:9,errorhandl:[1,2,5,7,8,9,10],errors_subset_to_catch:[1,9],errors_subset_to_detect:9,especi:[1,9,10],estim:9,etc:[2,8,9],evalu:9,even:[2,10],event:[1,2,10],ever:9,everi:[1,2,9],exampl:[1,2,3,7,9],examplehandl:10,examplejob:10,exce:9,exceed:9,except:2,exceptino:1,excess:9,exclud:9,execut:[2,5,9],exist:[0,6,9],exit:[1,2],expand:[1,10],expect:[9,10],explicit:2,express:10,fail:[2,9,10],failur:[1,2,8],fairli:10,fall:9,fals:[2,5,7,8,9,10],fast:[1,9],faster:[1,2],fatal:9,featur:[1,10],fed:9,feff:[2,11],feff_cmd:5,feff_out:5,feffinp:5,feffinput:5,feffinput_kei:5,feffjob:5,feffmodd:5,few:[1,6,9],fft:9,figur:10,file:[1,2,3,5,6,7,8,9,10],file_copi:3,file_cr:3,file_delet:3,file_modifi:3,file_mov:3,fileact:[3,5,9],filenam:[2,3,5,6,9],find:9,fine:[1,9,10],finish:[1,2,6,9],firework:10,first:[1,2,8,9],fit:10,fix:[1,2,8],flag:[1,2],flask:0,flatten:10,flexibl:[1,9,10],fluctuat:9,folder:[0,1,9],follow:[0,2,3,9,10],forc:9,form:[5,9],format:[2,10],former:2,found:[2,8,9],framework:10,free:10,frequenc:[8,10],from:[1,2,3,5,6,8,9,10],from_dict:[3,9],from_spec:2,frozen:[1,9],frozenjoberrorhandl:9,full:[3,5,9,10],full_opt_run:9,furnish:10,gamma:[1,9],gamma_vasp_cmd:9,gave:2,gener:[2,5,7,9,10],generate_kpoints_tran:9,generatevaspinputjob:9,genom:10,geoffroi:10,geom_max_cycl:8,geometri:[4,8,9],gerbrand:10,get:9,get_execution_host_info:2,get_job:4,get_nested_dict:3,get_run:4,gga:9,git:0,github:10,give:9,given:[2,10],gracefulli:[1,2,10],grad_not_orth:9,gradient:9,grain:[1,10],grant:10,grid:9,group:9,guess:9,guid:0,guidelin:9,guido:1,gunter:10,gzip:[1,2,5,6,7,9],gzipped_output:[2,7,10],gzipped_prefix:5,had:6,half_kpt:9,half_kpts_first_relax:9,halv:9,handl:[1,2,8,9,10],handler:[1,2,10,11],hanld:1,happen:9,has:[1,2,8,9,10],hautier:10,have:[1,2,5,6,9,10],hdlr:[2,10],hello:3,here:10,herebi:10,hermitian:9,hessian:1,high:[9,10],higher:9,highli:[9,10],his:0,hit:9,holder:10,hopefulli:10,host:2,hostnam:2,hour:9,howev:3,hse:9,html_theme:0,html_theme_path:0,http:10,hundr:10,ideal:10,ignor:[3,5,9],immedi:[1,2],implement:[1,2,3,7,9,10],impli:10,imposs:10,improv:[1,2],inc:3,incar:[1,9,10],includ:[1,3,9,10],incompat:1,incorrect:1,incorrect_shift:9,increas:9,increment:[1,10],indefinit:10,index:10,indic:[1,2,3,5,6,7,8,9],individu:2,infinit:9,inform:[3,5,10],init:9,initi:[2,3,5,7,8,9,10],initial_strain:9,initio:10,inp:5,input:[5,6,7,8,9,10],input_dict:3,input_fil:[7,8],input_filenam:9,input_set:9,insert:3,instal:10,instanc:2,instead:[1,3,7,9],insuffici:10,integ:9,intend:0,interfac:2,intern:9,interpret:[2,11],interrupt:1,interuppt:2,interv:9,introdc:1,introduc:8,inv_rot_mat:9,invers:9,involv:10,ionic:9,is_monitor:[1,2,5,8,9],is_termin:[1,2,9],ismear:10,issu:[1,10],istart:9,isym:1,iter:8,its:[1,2],jain:10,jit:10,job1:2,job2:2,job3:2,job:[1,2,4,11],jobid:10,jobs_common_param:[2,10],json:[1,2,5,6,7,8,9,10],just:[9,10],kei:[2,3,9,10],kenneth:0,keyword:3,kill:9,kind:[9,10],known:10,kocher:10,konverg:9,kpar:9,kpoint:[1,9,10],kpoints_tran:9,kr_small:0,kristin:10,kwarg:[8,9],labort:9,langevin:9,languag:3,lapack:9,larg:[0,9,10],larger:8,last:[1,8,9],latest:[1,10],latter:2,lattic:9,lattice_direct:9,lbnl:10,lead:2,leav:9,length:2,less:9,let:[2,10],level:9,liabil:10,liabl:10,librari:[0,10],like:[1,3,9,10],limit:[6,9,10],line:[1,9,10],linear:4,link:[2,8,10],list:[2,3,5,6,7,9,10],list_of_actions_taken:[2,5,7,8,9],list_of_error:[2,5,7,8,9],load:[2,9],load_class:4,lobster:[2,11],lobster_cmd:6,lobsterfilesvalid:6,lobsterin:6,lobsterjob:6,lobsterout:6,lobter:6,log1:5,log_fil:2,longer:1,look:[6,9],lpead:9,lrf_comm:9,lrf_commut:9,lrfcommutatorhandl:9,lstop:9,lwave:9,machinefil:10,made:1,magmom:9,mai:[1,2,9,10],main:[4,10],major:[1,10],make:[2,3,9],manag:[2,10],mani:[1,9,10],master:[4,8,9],match:9,materi:10,matrix:9,max:[8,9],max_cor:8,max_drift:9,max_error:[1,2,9,10],max_errors_per_handl:2,max_errors_per_job:2,max_iter:8,max_molecule_perturb_scal:8,max_num_correct:2,max_step:[4,9],maxcorrectionserror:2,maxcorrectionsperhandlererror:2,maxcorrectionsperjoberror:2,maximum:[2,8,9],mdalgo:9,mean:[2,3,5,8,9,10],meant:10,measur:[2,5,7,8,9],mechan:[1,2,10],memori:9,merchant:10,merg:10,mesh:9,meshsymmetryerrorhandl:[9,10],meshsymmetryhandl:2,messag:[1,2,7,9],metagga:9,metagga_opt_run:9,method:[1,2,5,6,7,8,9,10],michael:10,might:9,min:9,minima:8,minimum:9,minor:[1,10],minut:2,misc:1,miscellan:1,miss:9,mit:10,mitsuhiko:0,mkhorton:10,mod:[3,4],modder:[3,5,9],moddermodif:[5,9],mode:[1,2,3,4,5,9,10],modif:[3,10],modifi:[3,5,9,10],modify_object:3,modul:[10,11],mol:[7,8],molecul:8,molecule_perturb_scal:8,mongo:3,monitor:[1,2,5,7,8,9],monitor_freq:2,monti:[1,2],more:[1,2,9,10],most:[0,10],mostli:3,move:[1,2,3],mpi:8,mpirun:[9,10],mpnonscfset:9,msonabl:2,much:[1,2],multi:[1,9],multimod:8,must:[1,2,3,9],n_applied_correct:2,name:[2,4,5,7,8,9,10],natoms_large_cel:9,nearing:9,neb:9,neb_std_err:9,neb_vasp:9,necessari:[1,7,9,10],necessarili:9,need:[1,2,5,7,9,10],neg:[8,9],negative_freq_vec:8,nelect:1,nest:3,new_file_nam:3,next:9,ngx:9,ngy:9,ngz:9,nice:2,nicht:9,nicht_konv:9,nionic_step:9,njob:10,nkpt:9,nois:9,non:[1,2,3,5,8,9],nonconvergingerrorhandl:9,none:[2,3,5,7,8,9,10],noninfring:10,nonrecoverableerror:2,normal:[1,6,9],notat:3,note:[2,3,9],notic:[2,10],now:[1,10],npar:[1,9],npt:9,nsw:10,number:[1,2,8,9,10],numer:9,nwchem:[1,2,4,10,11],nwchem_cmd:7,nwchemerrorhandl:7,nwchemjob:7,nwout:7,obj:3,object:[2,3,5,9,10],obtain:10,obvious:10,occur:[2,8,9],off:1,offici:1,often:[9,10],okai:6,old_coord:8,older:[9,10],onc:[1,2,9],one:[0,2,9,10],ong:[1,10],onli:[1,2,3,5,7,9,10],open:10,openmp:8,oper:9,opt:2,opt_with_frequency_flatten:8,optim:[1,8,9,10],option:[1,2,7],order:[2,10],org:10,orig:[5,6,7,8,9],orthogon:9,oszicar:9,other:[1,2,6,9,10],otherwis:[2,10],out:[0,5,7,9,10],out_of_memori:9,outcar:9,outlin:10,output:[1,2,5,6,7,8,9,10],output_fil:[5,6,7,8,9],output_filenam:[5,6,7,9],output_vasprun:9,outsid:2,over:[2,8],overhaul:10,overrid:[7,9],overridden:2,overview:10,owner:3,packag:[1,10,11],page:0,parallel:[2,8,9],param:[2,9,10],paramet:[2,3,5,6,7,8,9,10],particular:[1,2,9,10],particularli:[1,10],partit:2,pass:[2,5,9,10],passthrough:[8,9],path:[0,2,3,9,10],pathnam:3,pbs_nodefil:10,pbs_walltim:9,pbswalltimehand:1,pbswalltimehandl:1,pep8:10,per:[1,2,9],perform:[1,2,3,4,5,7,8,9,10],permiss:10,permit:10,person:10,persson:10,perturb:8,perturb_coordin:8,petretto:1,ping:[1,10],pip:10,place:3,pleas:[7,10],plugin:10,point:9,point_group:9,poll:[2,9],polling_time_step:2,pop:[3,9],popen:[2,5,8,9],portion:10,poscar:[2,9,10],poscarerrorhandl:10,posit:[8,9],positiveenergyerrorhandl:9,posmap:9,possibl:[1,2],post:[1,2,8,9],postprocess:[2,5,6,7,8,9,10],potcar:9,potenti:[2,10],potim:[1,9],potimerrorhandl:9,pre:[2,8,9],preced:3,precis:1,precondit:9,prefer:3,prefix:[2,5],present:[7,9,10],preserv:9,prevent:9,pricel:[1,9],print:3,print_exampl:4,prior:8,prioriti:2,probabl:9,problem:9,process:[2,8,9],product:[1,9],progress:[1,9],project:[0,10],proper:9,properli:[1,9],properti:[2,8,10],provid:[1,2,9,10],pssyevx:9,publish:10,pull:3,pull_al:3,purpos:[9,10],push:3,push_al:3,put:[0,10],pvasp:9,py3k:[1,10],pycodestyl:10,pymatgen:[1,3,7,9,10],pymatpro:3,pypi:10,pytest:10,python:[1,2,10],qchem:[1,2,10,11],qchem_command:8,qchemerrorhandl:8,qchemscferrorhandl:8,qcjob:8,qcjob_kwarg:8,qclog:8,qclog_fil:8,qcscratch:8,qin:8,qout:8,queue:2,quick:9,quickli:2,rais:[2,3,5,9],raise_on_max:2,raises_runtime_error:[2,9],random:10,rang:10,rate:10,rather:9,rca_dii:8,rca_gdm_thresh:8,reach:[2,9],read:9,real:10,real_opt:9,real_optlai:9,reason:9,recalcul:8,recommend:[1,9,10],record:[8,9],recov:10,recoveri:10,redirect:[7,8,9],refactor:1,refer:3,refin:10,regular:9,reitz:0,rel:10,relat:[0,2,5,7,8,9],relax1:[2,9,10],relax2:[2,10],relax:[1,9,10],releas:[1,10],relev:6,reli:9,remain:[2,9],renam:[3,5,7,9],repars:[5,9],repo:[8,10],repositori:0,request:[1,2],requir:[1,2],rerun:[2,10],research:10,reset:2,restart:[2,9,10],restor:1,restrict:10,resubmit:1,result:[2,8,9],returncodeerror:2,reversed_direct:8,rewrit:[5,9],rhosyg:9,richard:[1,10],right:10,robust:[1,2,9,10],root:2,rot_mat:1,rot_matrix:9,rotat:9,routin:9,rpa:9,rspher:9,rudimentari:1,run:[1,2,4,5,6,7,8,9,10],run_interrupt:2,run_nwchem:[1,2,11],run_vasp:[1,2,11],runtim:2,runtimeerror:[1,2],sai:[2,9],samblau:10,same:10,sampl:[2,10],satisfi:9,save:[2,8],save_nam:8,save_scratch:8,saved_scratch:8,sbesselit:9,scale:[8,10],scf:[5,8],scf_max_cycl:8,scheme:[8,9],scienc:10,scratch:[1,2,8],scratch_dir:[1,2,8,10],scratch_link:2,script:[1,4,10],search:1,sec:[2,9],second:[2,9],see:[3,5,8,9,10],self:10,sell:10,sensic:9,sensit:9,sent:2,sentri:10,separ:1,sequenc:[1,2,3,5,9,10],seri:[2,5,9,10],serializ:[2,5,7,8,9],seriou:9,server:10,set:[1,2,3,5,7,8,9,10],settings_overrid:[2,7,9,10],setup:[1,2,5,6,7,8,9,10],sever:10,sge:9,shall:10,shift:[1,9],should:[1,2,3,5,6,7,8,9,10],shreya:10,shyam:1,shyamd:1,shyue:[1,8,10],signal:2,signific:[1,9],significantli:1,similarli:10,simpl:[1,2],simpli:[2,3,5,9,10],simplifi:9,simul:[3,10],singl:[1,2],situat:[9,10],skip:2,skip_over_error:2,slightli:9,slow:[1,9],slurm:9,small:[0,9],softwar:10,some:[1,2,6,8,9,10],someth:9,sometim:[2,9],sort:2,sourc:[2,3,4,5,6,7,8,9,10],space:[1,2,9],spec:2,special:[3,9],specif:[1,2,10],specifi:[1,2,9,10],speed:[1,9],speedup:9,sphinx:10,spill:6,split:10,spuriou:1,sqrt:[1,9],stabl:1,standard:[0,5,6,7,8,9],star:9,start:[1,2,8,9,10],static3:10,std_err:9,std_err_lobst:6,std_feff_err:5,stderr:9,stderr_fil:[5,6,9],stderrhandl:9,stdout:[7,9],step:[1,2,9],steve:1,stop:[2,9],stopcar:9,stoppedrunhandl:9,store:[2,9],str:[2,3,5,6,7,8,9],strain:9,strict:[3,5,9],string:[2,3,8],structur:[2,8,9],style:[1,7,9],sub:[1,9,10],subclass:[2,10],subdir:9,subject:10,sublicens:10,submodul:[0,11],subpackag:11,subprocess:[5,8,9],subroutin:9,subsequ:9,subset:[1,9],subspac:9,subspacematrix:9,substanti:10,success:[1,2],suffici:[9,10],suffix:[2,8,9,10],sum:10,summar:10,supercomput:1,suppli:[3,5,9,10],support:[1,2,3,5,9,10],sure:9,symbol:2,symmetri:[1,9],symprec:9,syntax:3,sys:0,system:[1,2,4,9,10],take:[3,10],taken:[2,5,7,8,9],tar:[2,5],target:[4,10],task:[1,2],tempfil:2,temporari:2,tend:10,tensil:9,term:10,termin:[1,2,6,9,10],terminate_func:2,terminate_on_nonzero_returncod:2,test:[7,10],tet:9,tetirr:9,tetrahedron:9,than:[8,9],thei:10,theme:0,thermostat:9,thi:[0,1,2,3,4,5,6,7,8,9,10],those:10,though:10,thousand:10,thre:9,three:10,threshhold:9,threshold:[6,8,9],through:[2,10],throughput:10,time:[1,2,9,10],timeout:9,tmp:[2,10],to_averag:9,todo:7,toler:9,too:[1,6,9],too_few_band:9,tool:1,tort:10,total:[2,9,10],transfer:10,transpar:1,treat:9,tri:[1,2],tripl:[1,9],triple_product:9,tune:9,tupl:2,turn:1,two:[9,10],txt:[5,6,9],type:[1,2,9,10],typic:9,unabl:9,unconverg:[1,5],unconvergederrorhandl:[5,9,10],under:10,underscor:3,unfix:[2,5,7,8,9],unfortun:9,uniform:10,uniqu:2,unit:10,unittest:10,univers:3,unlik:[5,9],unrecover:2,unrecoverable_error:1,unset:3,unsupport:[3,5,9],until:[8,9],updat:[1,9,10],upon:[2,6,9],use:[0,2,3,5,7,9,10],used:[0,1,5,7,9],useful:[1,2,9,10],user:[2,8],uses:[0,1,2,10],using:[1,2,3,9,10],usual:[2,3,6,9],util:[1,11],valid:[1,2,6,10,11],validationerror:2,valu:[9,10],valueerror:[3,5,9],variabl:[1,9,10],variou:4,variuo:4,vasp:[1,2,4,6,10,11],vasp_cmd:[2,9,10],vasp_command:4,vasp_job_kwarg:9,vaspaeccarvalid:9,vasperrorhandl:[1,2,9,10],vaspfilesvalid:9,vaspinput:9,vaspinput_kei:9,vaspjob:[1,2,9,10],vaspmodd:9,vaspnebjob:9,vaspnptmdvalid:9,vasprun:9,vasprunxmlvalid:[2,9,10],vastli:1,vecs1:8,vecs2:8,vector:9,vector_list_diff:8,veri:[0,9,10],version:9,versu:9,via:[2,9,10],vibrat:8,vienna:10,vincent:10,vldr:[2,10],vol:9,vol_change_tol:9,wai:[1,2,10],wait:[1,2],wall:[1,9],wall_tim:9,walltim:[1,9],walltimehandl:[1,9],want:[2,9],warn:9,waroqui:1,warranti:10,wavecar:9,wavefunct:9,well:[1,10],what:[3,9],whatev:[5,9],when:[1,2,5,7,8,9,10],where:[1,2,7,9,10],whether:[1,2,3,5,7,8,9,10],which:[1,2,3,5,7,9,10],whom:10,wildcard:2,william:10,wish:9,without:[3,5,9,10],won:[6,9],work:[1,2,9,10],workflow:[2,10],world:[3,10],wors:9,would:[9,10],wouldn:9,wrap:9,wrapper:10,write:[9,10],written:[9,10],xiaohui:1,xml:9,xrang:10,yaml:[1,2],yet:7,yield:2,you:[0,2,9,10],your:[0,9,10],zbrent:[1,9],zero:[1,2],zheev:9,zhegv:9,zpotrf:9},titles:["krTheme Sphinx Style","Change Log","custodian package","custodian.ansible package","custodian.cli package","custodian.feff package","custodian.lobster package","custodian.nwchem package","custodian.qchem package","custodian.vasp package","Custodian","custodian"],titleterms:{action:3,ansibl:3,api:10,calcul:10,chang:[1,10],cite:10,cli:4,content:[2,3,4,5,6,7,8,9],control:10,converge_geometri:4,converge_kpoint:4,cstdn:[4,10],custodian:[2,3,4,5,6,7,8,9,10,11],depend:10,development:10,doc:10,electron:10,exampl:10,feff:5,get:10,handler:[5,6,7,8,9],how:10,interpret:[3,5,9],job:[5,6,7,8,9,10],krtheme:0,licens:10,lobster:6,log:[1,10],modul:[2,3,4,5,6,7,8,9],nwchem:7,option:10,packag:[2,3,4,5,6,7,8,9],practic:10,qchem:8,refer:10,requir:10,run_nwchem:4,run_vasp:4,simpl:10,spec:10,sphinx:0,stabl:10,structur:10,style:0,submodul:[2,3,4,5,6,7,8,9],subpackag:[2,3,5,6,7,8,9],usag:10,util:2,v2017:1,v2019:[1,10],valid:9,vasp:9,version:[1,10],yaml:10}})