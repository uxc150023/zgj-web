import{_ as e,h as t,v as a,j as l,k as o,r as n,o as i,c as s,a as r,w as c,m as p,u as d,n as m,f as u,M as b,y as h,z as f}from"./main-5d732c2e.js";import{c as y}from"./table-12670e99.js";import{_}from"./searchForm-a97b647c.js";import{c as v}from"./tree-8bedc90b.js";/* empty css                                                                   */import{c as g}from"./pagination-569fa38f.js";import{c as w}from"./JyTabs-6af6e902.js";import{c as j}from"./Layout-db7f64fa.js";import{c as D}from"./batch-e7262433.js";import{c as x}from"./documentsDetails-5d74be5e.js";import{W as A}from"./WarningOperate-f5dcff4d.js";import"./sangedian-b1ee72e5.js";import"./ketanchude-65de0c89.js";import"./KDocumentTypeDialog-1f624042.js";/* empty css                                                             *//* empty css                                                               */import"./cha-kong-1ced20bc.js";/* empty css                                                                         */import"./portion-92af8719.js";/* empty css                                                                */import"./yuan-hui-e1a80bc6.js";const k={class:"PrintControlManagement-ProcessSpecificationAlarmNotification"},T=(e=>(h("data-v-081df0c0"),e=e(),f(),e))((()=>p("div",{class:"title"},[p("div",null,"流程规范告警提醒")],-1))),C={class:"batch"},S={class:"ap-box"},F=e({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:h}){const f=t({show:!1,title:"处理",formJson:A}),F=a(null),B=e=>{e?F.value.getFormData().then((e=>{alert(JSON.stringify(e)),f.showDialog=!1})).catch((e=>{ElMessage.error(e)})):F.value.resetForm()},P=t({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"用印单据名称",sortable:!0,"min-width":150},{prop:"2",label:"文件类型",sortable:!0,"min-width":150},{prop:"3",label:"申请人",sortable:!0,"min-width":150},{prop:"4",label:"申请部门",sortable:!0,"min-width":150},{prop:"5",label:"申请时间",sortable:!0,"min-width":180},{prop:"6",label:"操作时间",sortable:!0,"min-width":180},{prop:"7",label:"未用印时长",sortable:!0,"min-width":150},{prop:"8",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称2",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function J(e,t,a,l){"1"==t.property&&(P.componentsDocumentsDetails.show=!0)}function z(){P.componentsDocumentsDetails.show=!1}function L(e,t,a,l){"处理"===a.name&&(f.show=!0)}function N(e){P.componentsBatch.selectionData=e}return l((()=>{})),o((()=>{})),(e,t)=>{const a=n("v-form-render"),l=b;return i(),s("div",k,[r(j,{Layout:"title,searchForm,table,pagination,batch"},{title:c((()=>[T])),tabs:c((()=>[p("div",null,[r(w,{activeName:"1",data:d(P).componentsTabs.data},null,8,["data"])])])),searchForm:c((()=>[p("div",null,[r(d(_),{data:d(P).componentsSearchForm.data,butData:d(P).componentsSearchForm.butData,style:m(d(P).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:c((()=>[p("div",C,[r(D)])])),tree:c((()=>[p("div",null,[r(d(v),{data:d(P).componentsTree.data,defaultAttribute:d(P).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:c((()=>[p("div",null,[r(d(y),{defaultAttribute:d(P).componentsTable.defaultAttribute,data:d(P).componentsTable.data,header:d(P).componentsTable.header,paginationData:d(P).componentsPagination.data,isSelection:!0,onCellClick:J,onCustomClick:L,onSelectionChange:N},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:c((()=>[r(g,{data:d(P).componentsPagination.data,defaultAttribute:d(P).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),p("div",S,[r(x,{show:d(P).componentsDocumentsDetails.show,visible:d(P).componentsDocumentsDetails.visible,onClickClose:z},null,8,["show","visible"])]),(i(),u(l,{"onUpdate:show":t[0]||(t[0]=e=>d(f).show=e),show:d(f).show,title:d(f).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:B,key:d(f).title},{default:c((()=>[r(a,{"form-json":d(f).formJson,"form-data":d(f).formJson,"option-data":d(f).optionData,ref_key:"vFormLibraryRef",ref:F},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-081df0c0"]]);export{F as default};
