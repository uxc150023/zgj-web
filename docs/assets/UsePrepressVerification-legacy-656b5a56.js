System.register(["./chunk-vform-legacy-f1b551df.js","./table-legacy-0b33412c.js","./searchForm-legacy-04a651fb.js","./pagination-legacy-4c7c1f23.js","./JyTabs-legacy-c8c76c45.js","./Layout-legacy-262a6687.js","./batch-legacy-ff825cb6.js","./documentsDetails-legacy-8c032a4c.js","./fileCheckUpload-legacy-ac11577e.js","./chunk-ant-design-vue-legacy-78f2abeb.js","./chunk-element-plus-legacy-3362d1f8.js","./sangedian-legacy-75d81ddc.js","./ketanchude-legacy-4abaf206.js","./KDocumentTypeDialog-legacy-0ecc1f11.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-1ebc7b7b.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-1381b1de.js","./portion-legacy-cfca188a.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-c3216d6b.js","./yuan-hui-legacy-0c1e3d03.js"],(function(e,a){"use strict";var l,t,n,o,i,r,s,X,c,d,p,b,m,u,h,y,f,w,g,v,x,D,_,k,j,T,A,C=document.createElement("style");return C.textContent=".PrintControlManagement-UsePrepressVerification[data-v-71ebbe9f]{margin:0%}.PrintControlManagement-UsePrepressVerification .title[data-v-71ebbe9f]{display:flex;align-items:center;justify-content:space-between}.PrintControlManagement-UsePrepressVerification .el-radio-group[data-v-71ebbe9f]{flex-direction:column}\n",document.head.appendChild(C),{setters:[e=>{l=e.g,t=e.j,n=e.P,o=e.n},e=>{i=e.c},e=>{r=e._},e=>{s=e.c},e=>{X=e.c},e=>{c=e.c},e=>{d=e.c},e=>{p=e.c},e=>{b=e.f},e=>{m=e.a,u=e.at,h=e.a9,y=e.d,f=e.W,w=e.X,g=e.ap,v=e.ai,x=e.Y,D=e.u,_=e.ae,k=e.ah,j=e.am,T=e.ba,A=e.bb},null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"PrintControlManagement-UsePrepressVerification"},C=(e=>(T("data-v-71ebbe9f"),e=e(),A(),e))((()=>x("div",{class:"title"}," 用印前核验 ",-1))),L={class:"batch"},P={class:"ap-box"};e("default",l({setup(e){const l=t(),T=m(!1),A=u({showDialog:!1,componentsTabs:{data:[{label:"未核验",name:"1"},{label:"核验中",name:"2"},{label:"核验完成",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入文件名称搜索"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"文件类型",type:"derivable",defaultAttribute:{placeholder:"+文件类型"}},{id:"derivable",label:"申请人",type:"derivable",defaultAttribute:{placeholder:"+申请人"}},{id:"derivable",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+申请部门"}},{id:"wdyy",label:"",type:"checkbox",checkbox:[{defaultAttribute:{label:"我的申请单据"},style:{}}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"上传文件核验"}]}],data:[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:l,columnIndex:t})=>{if("2"===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"操作记录",name:"operating-record"},{label:"领用记录",name:"Record-of-requisition"}]},componentsUploadFile:{show:!1,name:"单据名称",files:[{fileName:"附件名称1.docx",id:"",label:1},{fileName:"附件名称2.doc",id:"",label:2},{fileName:"附件名称3.pdf",id:"",label:3},{fileName:"附件名称3.xls",id:"",label:4},{fileName:"附件名称3.xlsx",id:"",label:5}]},activeName:1});function U(e,a,l,t){"2"===a.property&&(A.componentsDocumentsDetails.show=!0)}function F(){A.componentsDocumentsDetails.show=!1}function N(e){A.activeName=e,"1"===e?(A.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"上传文件核验"}]}],A.componentsTable.data=[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}]):"2"===e?(A.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"7",label:"用印文件份数",sortable:!0,"min-width":150},{prop:"8",label:"已核验文件数",sortable:!0,"min-width":150},{prop:"9",label:"最新一次核验时间",sortable:!0,"min-width":200},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":250,rankDisplayData:[{name:"上传文件核验"},{name:"查看核验记录"}]}],A.componentsTable.data=[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}]):"3"===e&&(A.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"7",label:"最新一次核验时间",sortable:!0,"min-width":200},{prop:"8",label:"核验结果",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":250,rankDisplayData:[{name:"重传文件核验"},{name:"查看核验记录"}]}],A.componentsTable.data=[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"有差异"},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}])}function S(e,a,t,n){t.name,"查看核验记录"===t.name?l.push({name:"OcrCheckRecord",query:{record:`pre${A.activeName}`}}):A.componentsUploadFile.show=!0}function z(e,a){"derivable"===e.type&&(T.value=!0)}return h((()=>{})),y((()=>{})),(e,l)=>{const t=o;return f(),w("div",a,[g(c,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:v((()=>[C])),tabs:v((()=>[x("div",null,[g(X,{activeName:"1",data:D(A).componentsTabs.data,onTabChange:N},null,8,["data"])])])),searchForm:v((()=>[x("div",null,[g(D(r),{data:D(A).componentsSearchForm.data,butData:D(A).componentsSearchForm.butData,style:_(D(A).componentsSearchForm.style),onClickElement:z},null,8,["data","butData","style"])])])),batch:v((()=>[x("div",L,[g(d)])])),table:v((()=>[x("div",null,[g(D(i),{defaultAttribute:D(A).componentsTable.defaultAttribute,data:D(A).componentsTable.data,header:D(A).componentsTable.header,paginationData:D(A).componentsPagination.data,isSelection:"",onCellClick:U,onCustomClick:S},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:v((()=>[g(s,{data:D(A).componentsPagination.data,defaultAttribute:D(A).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),x("div",P,[g(p,{show:D(A).componentsDocumentsDetails.show,visible:D(A).componentsDocumentsDetails.visible,onClickClose:F},null,8,["show","visible"])]),g(t,{"onUpdate:show":l[0]||(l[0]=e=>D(A).componentsUploadFile.show=e),show:D(A).componentsUploadFile.show,title:"上传文件核验",oneBtn:!0,confirmText:e.$t("t-zgj-operation.ocrsubmit"),concelText:e.$t("t-zgj-operation.cancel")},{default:v((()=>[g(b,{data:D(A).componentsUploadFile},null,8,["data"])])),_:1},8,["show","confirmText","concelText"]),T.value?(f(),k(D(n),{key:0,show:T.value,"onUpdate:show":l[1]||(l[1]=e=>T.value=e)},null,8,["show"])):j("",!0)])}}},[["__scopeId","data-v-71ebbe9f"]]))}}}));
