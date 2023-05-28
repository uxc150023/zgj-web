System.register(["./index-legacy-c06ecc2a.js","./main-legacy-80c027be.js","./index-legacy-4d440234.js","./yuan-hui-legacy-3805e29d.js","./index-legacy-9192b6ea.js"],(function(e,a){"use strict";var l,t,r,o,n,i,s,d,u,p,m,c,y,N,v,b,E,T,f,A,S,g,M,h,O,_,I,w,L,R,j,D,k,U=document.createElement("style");return U.textContent=".flow-detail[data-v-87eaee9d]{padding-top:28px}.flow-detail .info-list[data-v-87eaee9d]{margin:0%}.flow-detail .info-list .cont .cont-details[data-v-87eaee9d]{display:flex;flex-flow:wrap;padding:8px 0;box-sizing:border-box}.flow-detail .info-list .cont .cont-details .cont-list[data-v-87eaee9d]{display:flex;width:50%;padding:8px 0;box-sizing:border-box}.flow-detail .info-list .cont .cont-details .cont-list .cont-list-label[data-v-87eaee9d]{width:100px;display:flex;justify-content:flex-end;color:var(--jy-color-text-3);flex-shrink:0}.flow-detail .info-list .cont .cont-details .cont-list .cont-list-value[data-v-87eaee9d]{display:flex;align-items:center}.flow-detail .info-list .cont .cont-details .cont-list .cont-list-value img[data-v-87eaee9d]{margin-right:8px}.flow-detail[data-v-e5d8fa81],.table[data-v-2615465a],.table[data-v-54566026]{padding-top:28px}.detail-drawer .el-drawer__header{margin-bottom:0}\n",document.head.appendChild(U),{setters:[e=>{l=e.default},e=>{t=e.a7,r=e._,o=e.v,n=e.s,i=e.j,s=e.o,d=e.c,u=e.a,p=e.m,m=e.F,c=e.e,y=e.n,N=e.t,v=e.l,b=e.g,E=e.u,T=e.f,f=e.q,A=e.b4,S=e.aa,g=e.r,M=e.w,h=e.b5,O=e.h,_=e.i,I=e.V,w=e.aR,L=e.x},e=>{R=e.default},e=>{j=e.y,D=e.a},e=>{k=e._}],execute:function(){const a={SYSTEM_FLOW_MANAGEMENT:"system_flow_management",SYSTEM_FORM_MANAGEMENT:"system_form_management",RULEBUSINESSMANAGEMENT:"rule_business_management",DEALINGUNIT:"dealing_unit",UNITANDDEPARTMENT:"unit_and_department"},U={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};U.URLS=[{value:"detail",urlName:"baseInfo"},{value:"version",urlName:"queryHisVersion"},{value:"record",urlName:"viewOperation"}],U.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo","FlowDetail"]},{name:"t-zgj-detail-operation.Record",value:"record",children:["RecordTable"]},{name:"t-zgj-detail-flow.Version",value:"version",children:["VersionTable"]}],U.INFO=[{label:"流程名称",key:"flowName"},{label:"流程编码",key:"flowNo"},{label:"业务类型",key:"applyTypeName"},{label:"文件类型",key:["fileTypeScope"],handleKey:"fileScope"},{label:"流程状态",key:"flag",type:"status",customStyle:!0},{label:"流程适用范围",key:["organScope","organUserScope"],handleKey:"flowScope"},{label:"创建人",key:"createUserName"},{label:"创建时间",key:"createDatetime"},{label:"更新时间",key:"modifyDatetime"},{label:"流程说明",key:"readme"},{label:"关联表单",key:"formMessageName"}],U.TABLEHEADERS={version:[{label:"版本号",prop:"flowVerison"},{label:"版本时间",prop:"modifyDatetime"}],record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const B={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};B.URLS=[{value:"detail",urlName:"baseInfo"},{value:"version",urlName:"queryHisVersion"},{value:"record",urlName:"viewOperation"}],B.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]},{name:"t-zgj-detail-operation.Record",value:"record",children:["RecordTable"]},{name:"t-zgj-detail-flow.Version",value:"version",children:["VersionTable"]}],B.INFO=[{label:"表单名称",key:"formName"},{label:"表单编码",key:"formNo"},{label:"业务类型",key:"applyTypeName"},{label:"用印类型",key:"sealUseTypeName"},{label:"表单状态",key:"flag",type:"status",customStyle:!0},{label:"创建时间",key:"createDatetimeStr"},{label:"创建人",key:"createUserName"},{label:"更新时间",key:"modifyDatetimeStr"},{label:"表单说明",key:"readme"}],B.TABLEHEADERS={version:[{label:"版本号",prop:"formVerison"},{label:"版本时间",prop:"modifyDatetime"}],record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const x={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};x.URLS=[{value:"detail",urlName:"baseInfo"},{value:"record",urlName:"viewOperation"}],x.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]}],x.INFO=[{label:"业务规则名称",key:"ruleBusinessName"},{label:"业务规则编码",key:"ruleBusinessNo"},{label:"用印类型",key:"sealUseTypeName"},{label:"关联文件类型",key:["fileTypeList"],handleKey:"filteType"},{label:"业务规则状态",key:"flag",type:"status",customStyle:!0},{label:"创建人",key:"createUserName"},{label:"创建时间",key:"createDatetime"},{label:"更新时间",key:"modifyDatetime"}],x.TABLEHEADERS={record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const G={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};G.URLS=[{value:"detail",urlName:"baseInfo"}],G.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]}],G.INFO=[{label:"企业名称",key:"relatedCompanyName"},{label:"企业编码",key:"relatedCompanyNo"},{label:"企业所属部门",key:"organName"},{label:"联系人",key:"contactName"},{label:"备注",key:"readme"}],G.TABLEHEADERS={};const F={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};F.URLS=[{value:"detail",urlName:"baseInfo"},{value:"organizer",urlName:"uninUser"},{value:"record",urlName:"viewOperation"}],F.TABS=[{name:"t-zgj-detail-unit.UnitAndDepart",value:"detail",children:["BaseInfo"]},{name:"t-zgj-detail-unit.UnitUser",value:"organizer",children:["VersionTable"]}],F.INFO=[{label:"部门名称",key:"organName"},{label:"组织类型",key:"organTypeName"},{label:"部门主管",key:"organLeaderName"},{label:"部门编码",key:"organNo"},{label:"部门人数",key:"organUserNum"},{label:"上级部门",key:"organPName"},{label:"备注",key:"readme"}],F.TABLEHEADERS={organizer:[{label:"人员列表",prop:"userName"},{label:"账号",prop:"accountNo"}],record:[{label:"操作人",prop:"operator"},{label:"操作时间",prop:"operateDatetime"},{label:"操作记录",prop:"operateAction"},{label:"操作说明",prop:"operateDesc"}]};const q=[];q.push({[a.SYSTEM_FLOW_MANAGEMENT]:U,[a.SYSTEM_FORM_MANAGEMENT]:B,[a.RULEBUSINESSMANAGEMENT]:x,[a.DEALINGUNIT]:G,[a.UNITANDDEPARTMENT]:F});const V=(e,a)=>q[q.findIndex((a=>a[e]))][e].URLS[a].urlName,P=(e,a)=>q[q.findIndex((a=>a[e]))][e].URLS.findIndex((e=>e.value===a));let H={};H={[a.SYSTEM_FLOW_MANAGEMENT]:{[V(a.SYSTEM_FLOW_MANAGEMENT,P(a.SYSTEM_FLOW_MANAGEMENT,"detail"))]:e=>t({method:"GET",url:"/flow/query",params:e}),[V(a.SYSTEM_FLOW_MANAGEMENT,P(a.SYSTEM_FLOW_MANAGEMENT,"version"))]:e=>t({method:"GET",url:"/flow/queryHisVersion",params:e}),[V(a.SYSTEM_FLOW_MANAGEMENT,P(a.SYSTEM_FLOW_MANAGEMENT,"record"))]:e=>t({method:"GET",url:"/flow/viewOperation",params:e})},[a.SYSTEM_FORM_MANAGEMENT]:{[V(a.SYSTEM_FORM_MANAGEMENT,P(a.SYSTEM_FORM_MANAGEMENT,"detail"))]:e=>t({method:"GET",url:"/form/query",params:e}),[V(a.SYSTEM_FORM_MANAGEMENT,P(a.SYSTEM_FORM_MANAGEMENT,"version"))]:e=>t({method:"GET",url:"/form/queryHisVersion",params:e}),[V(a.SYSTEM_FORM_MANAGEMENT,P(a.SYSTEM_FORM_MANAGEMENT,"record"))]:e=>t({method:"GET",url:"/form/queryOperation",params:e})},[a.RULEBUSINESSMANAGEMENT]:{[V(a.RULEBUSINESSMANAGEMENT,P(a.RULEBUSINESSMANAGEMENT,"detail"))]:e=>t({method:"GET",url:`/biz/rule/view/${e}`})},[a.DEALINGUNIT]:{[V(a.DEALINGUNIT,P(a.DEALINGUNIT,"detail"))]:e=>t({method:"GET",url:`/tenant/relatedCompany/detail/${e}`})},[a.UNITANDDEPARTMENT]:{[V(a.UNITANDDEPARTMENT,P(a.UNITANDDEPARTMENT,"detail"))]:e=>t({method:"GET",url:`/organ/${e}`}),[V(a.UNITANDDEPARTMENT,P(a.UNITANDDEPARTMENT,"organizer"))]:e=>t({method:"GET",url:`/organ/userInfoList/${e}`})}};const Y=H,z={class:"flow-detail"},C={class:"info-list"},W={class:"cont"},$={class:"cont-details"},K={class:"cont-list-label"},J=["src"],Q={name:"BaseInfo"},X=r(Object.assign(Q,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=o({yuanLv:j,yuanHui:D,warning:"/assets/detail-warning-52514a54.svg",danger:"/assets/detail-danger-a1cea784.svg"}),t=["var(--jy-success-6)","var(--jy-color-text-4)","var(--jy-warning-6)","var(--jy-primary-6)","var(--jy-danger-6)"],r=n({get:()=>a.requestObj.info}),T=o({});i((()=>{Y[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(r.value.forEach((a=>{for(const l in e.data)if(a.handleKey&&a.key.includes(l)&&Array.isArray(a.key))f(a.handleKey,e.data[l]);else if(l===a.key){if(a.customStyle){a.valStyle=S(a,e.data[l]),a.iconPath=g(a,e.data[l]),a.value=M(a,e.data[l]);continue}a.value=e.data[l]}})),r.value.forEach((e=>{e.handleKey&&(e.value=A(T.value[e.handleKey]))})))}))}));const f=(e,a)=>{a&&Array.isArray(a)&&(T.value.hasOwnProperty(e)?T.value[e]=T.value[e].concat(a):T.value[e]=a)},A=(e,a)=>{if(!e||!Array.isArray(e))return"";const l=[];return e.forEach((e=>l.push(e.name))),a?a+","+l.join(","):l.join(",")},S=(e,a)=>{let l={};return"status"===e.type&&(l="1"===a?{color:t[0]}:{color:t[1]}),l},g=(e,a)=>{let l="";return"status"===e.type&&(l="1"===a?"yuanLv":"yuanHui"),l},M=(e,a)=>{let l="";return"status"===e.type&&(l="1"===a?"启用":"停用"),l};return(e,a)=>{const t=R;return s(),d("div",z,[u(t,{label:"基本信息"}),p("div",C,[p("div",W,[p("div",$,[(s(!0),d(m,null,c(E(r),(a=>(s(),d("div",{class:"cont-list",style:y(a.lineStyle),key:a.label},[p("div",K,N(e.$t(a.label))+"： ",1),p("div",{class:"cont-list-value",style:y(a.valStyle)},[a.iconPath?(s(),d("img",{key:0,src:l.value[a.iconPath],style:y(a.iconStyle)},null,12,J)):v("",!0),b(" "+N(a.value),1)],4)],4)))),128))])])])])}}}),[["__scopeId","data-v-87eaee9d"]]),Z={class:"flow-detail"},ee={name:"FlowDetail"},ae=r(Object.assign(ee,{props:{importParams:{type:Object,default:()=>({})}},setup(e){const a=e,l=o({}),t=o(null);return i((()=>{A.flowDetail({modelId:a.importParams.modelId,definitionId:a.importParams.definitionId,edit:!0}).then((async e=>{t.value=null,S((()=>{t.value=e.data.data}))}))})),(e,a)=>{const r=R,o=k;return s(),d("div",Z,[u(r,{label:"审批流程"}),t.value?(s(),T(o,f({key:0,id:"flow"},{readable:!0,mapable:!1,scroll:!1,scrollY:!1,top:"50"},{node:t.value,wrapStyle:l.value}),null,16,["node","wrapStyle"])):v("",!0)])}}}),[["__scopeId","data-v-e5d8fa81"]]),le={name:"RecordTable"},te=r(Object.assign(le,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=o([]),t=o(!1),r=n({get:()=>a.requestObj.tableHeaders[a.requestObj.value]});return i((()=>{t.value=!0,Y[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(l.value=e.data),t.value=!1})).catch((()=>{t.value=!1}))})),(e,a)=>{const o=g("el-table-column"),n=h;return s(),T(n,{data:l.value,loading:t.value,ref:"recordTableRef",highlightCurrentRow:!0,class:"table"},{default:M((()=>[u(o,{type:"index",label:"序号",width:"60"}),(s(!0),d(m,null,c(E(r),(a=>(s(),T(o,{key:a.prop,prop:a.prop,width:a.width},{header:M((()=>[b(N(e.$t(a.label)),1)])),_:2},1032,["prop","width"])))),128))])),_:1},8,["data","loading"])}}}),[["__scopeId","data-v-2615465a"]]),re={name:"VersionTable"},oe=r(Object.assign(re,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=o([]),t=o(!1),r=n({get:()=>a.requestObj.tableHeaders[a.requestObj.value]});return i((()=>{t.value=!0,Y[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(l.value=e.data),t.value=!1})).catch((()=>{t.value=!1}))})),(e,a)=>{const o=g("el-table-column"),n=h;return s(),T(n,{data:l.value,loading:t.value,ref:"versionTableRef",highlightCurrentRow:!0,class:"table"},{default:M((()=>[u(o,{type:"index",label:"序号",width:"60"}),(s(!0),d(m,null,c(E(r),(a=>(s(),T(o,{key:a.prop,prop:a.prop,width:a.width},{header:M((()=>[b(N(e.$t(a.label)),1)])),_:2},1032,["prop","width"])))),128))])),_:1},8,["data","loading"])}}}),[["__scopeId","data-v-54566026"]]),ne={key:0},ie={name:"DetailDrawer"};e("_",Object.assign(ie,{props:{modelValue:{type:Boolean,defult:!1},modulesName:{type:String,default:""},detailParams:{type:Array,default:()=>[]},importParams:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,r={BaseInfo:X,FlowDetail:ae,VersionTable:oe,RecordTable:te},i=o({urlName:"",params:"",modulesName:""}),p=q.findIndex((e=>e[t.modulesName])),N=q[p][t.modulesName],b=O({...N,componentList:[],componentName:"",updateActive:!1}),f=o(b.TABS.length>0&&b.TABS[0].value),A=n({get:()=>t.modelValue,set(e){a("update:modelValue",e)}}),S=o(0),g=()=>0!==b.componentList.length&&-1!==b.componentList.findIndex((e=>e.value===f.value)),h=e=>{const a=b.componentList;return e&&Array.isArray(e.children)?(0===b.componentList.length?e.children.forEach((l=>{a.push({value:e.value,copName:l})})):e.children.forEach((l=>{-1===a.findIndex((e=>e.copName===l))&&a.push({value:e.value,copName:l})})),a):[]},R=()=>{const{urlName:e,value:a}=b.URLS.find((e=>e.value===f.value)),l=t.detailParams.find((e=>e.value===f.value));i.value={value:a,urlName:e,params:l.params,modulesName:t.modulesName,info:b.INFO,tableHeaders:b.TABLEHEADERS}};return _((()=>t.modelValue),(e=>{e?(f.value=b.TABS.length>0&&b.TABS[0].value,R()):(b.componentList=[],b.updateActive=!1,f.value=null)})),_((()=>f.value),(()=>{!g()&&f.value&&(t.modelValue&&R(),(()=>{S.value=b.TABS.findIndex((e=>e.value===f.value));const e=b.TABS[S.value];e.value===f.value&&(0!==b.componentList.length&&g()||(b.componentList=h(e)),b.updateActive=!0)})())}),{immediate:!0}),(a,t)=>{const o=l;return s(),T(o,{modelValue:E(A),"onUpdate:modelValue":t[1]||(t[1]=e=>L(A)?A.value=e:null),direction:"rtl",onClose:a.clickClose,title:"详情",class:"detail-drawer",size:"800px"},{default:M((()=>[u(I,{active:f.value,label:E(b).TABS,"onUpdate:active":t[0]||(t[0]=e=>f.value=e),border:!0},null,8,["active","label"]),E(b).updateActive?(s(),d("div",ne,[(s(!0),d(m,null,c(E(b).componentList,((a,l)=>(s(),d("div",{key:l},[(s(),T(w(r[a.copName]),{requestObj:i.value,importParams:e.importParams,style:y({display:a.value===f.value?"block":"none"})},null,8,["requestObj","importParams","style"]))])))),128))])):v("",!0)])),_:1},8,["modelValue","onClose"])}}}))}}}));
