System.register(["./main-legacy-80c027be.js","./table-legacy-3557b439.js","./searchForm-legacy-661aae1d.js","./tree-legacy-b10542a9.js","./breadcrumb.vue_vue_type_style_index_0_scoped_ccdf856b_lang-legacy-4968fc55.js","./pagination-legacy-abc2a695.js","./JyTabs-legacy-3f34f463.js","./Layout-legacy-b2631a91.js","./batch-legacy-5a4e36c5.js","./documentsDetails-legacy-b3398eb5.js","./WarningOperate-legacy-47450a66.js","./sangedian-legacy-5b82475d.js","./ketanchude-legacy-3429c6dd.js","./KDocumentTypeDialog-legacy-9730cc30.js","./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-8d726e32.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-f9de9560.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-fafff2de.js","./portion-legacy-b0849eee.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-2c813e37.js","./yuan-hui-legacy-3805e29d.js"],(function(e,t){"use strict";var a,l,n,o,i,c,s,r,d,u,p,m,b,y,h,f,g,v,_,w,j,D,x,A,C,k,S=document.createElement("style");return S.textContent=".PrintControlManagement-ProcessSpecificationAlarmNotification[data-v-081df0c0]{margin:0%}.PrintControlManagement-ProcessSpecificationAlarmNotification .title[data-v-081df0c0]{display:flex;align-items:center;justify-content:space-between}.PrintControlManagement-ProcessSpecificationAlarmNotification .batch[data-v-081df0c0]{display:flex;align-items:center}.PrintControlManagement-ProcessSpecificationAlarmNotification .batch .batch-desc[data-v-081df0c0]{margin-right:.8571428571rem}\n",document.head.appendChild(S),{setters:[e=>{a=e._,l=e.h,n=e.v,o=e.j,i=e.k,c=e.r,s=e.o,r=e.c,d=e.a,u=e.w,p=e.m,m=e.u,b=e.n,y=e.f,h=e.M,f=e.y,g=e.z},e=>{v=e.c},e=>{_=e._},e=>{w=e.c},null,e=>{j=e.c},e=>{D=e.c},e=>{x=e.c},e=>{A=e.c},e=>{C=e.c},e=>{k=e.W},null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"PrintControlManagement-ProcessSpecificationAlarmNotification"},S=(e=>(f("data-v-081df0c0"),e=e(),g(),e))((()=>p("div",{class:"title"},[p("div",null,"流程规范告警提醒")],-1))),T={class:"batch"},P={class:"ap-box"};e("default",a({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:a}){const f=l({show:!1,title:"处理",formJson:k}),g=n(null),F=e=>{e?g.value.getFormData().then((e=>{alert(JSON.stringify(e)),f.showDialog=!1})).catch((e=>{ElMessage.error(e)})):g.value.resetForm()},B=l({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"用印单据名称",sortable:!0,"min-width":150},{prop:"2",label:"文件类型",sortable:!0,"min-width":150},{prop:"3",label:"申请人",sortable:!0,"min-width":150},{prop:"4",label:"申请部门",sortable:!0,"min-width":150},{prop:"5",label:"申请时间",sortable:!0,"min-width":180},{prop:"6",label:"操作时间",sortable:!0,"min-width":180},{prop:"7",label:"未用印时长",sortable:!0,"min-width":150},{prop:"8",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称2",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function N(e,t,a,l){"1"==t.property&&(B.componentsDocumentsDetails.show=!0)}function M(){B.componentsDocumentsDetails.show=!1}function J(e,t,a,l){"处理"===a.name&&(f.show=!0)}function z(e){B.componentsBatch.selectionData=e}return o((()=>{})),i((()=>{})),(e,a)=>{const l=c("v-form-render"),n=h;return s(),r("div",t,[d(x,{Layout:"title,searchForm,table,pagination,batch"},{title:u((()=>[S])),tabs:u((()=>[p("div",null,[d(D,{activeName:"1",data:m(B).componentsTabs.data},null,8,["data"])])])),searchForm:u((()=>[p("div",null,[d(m(_),{data:m(B).componentsSearchForm.data,butData:m(B).componentsSearchForm.butData,style:b(m(B).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:u((()=>[p("div",T,[d(A)])])),tree:u((()=>[p("div",null,[d(m(w),{data:m(B).componentsTree.data,defaultAttribute:m(B).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:u((()=>[p("div",null,[d(m(v),{defaultAttribute:m(B).componentsTable.defaultAttribute,data:m(B).componentsTable.data,header:m(B).componentsTable.header,paginationData:m(B).componentsPagination.data,isSelection:!0,onCellClick:N,onCustomClick:J,onSelectionChange:z},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:u((()=>[d(j,{data:m(B).componentsPagination.data,defaultAttribute:m(B).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),p("div",P,[d(C,{show:m(B).componentsDocumentsDetails.show,visible:m(B).componentsDocumentsDetails.visible,onClickClose:M},null,8,["show","visible"])]),(s(),y(n,{"onUpdate:show":a[0]||(a[0]=e=>m(f).show=e),show:m(f).show,title:m(f).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:F,key:m(f).title},{default:u((()=>[d(l,{"form-json":m(f).formJson,"form-data":m(f).formJson,"option-data":m(f).optionData,ref_key:"vFormLibraryRef",ref:g},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-081df0c0"]]))}}}));
