import{g as e,n as t}from"./chunk-vform-ec6574e8.js";import{c as a}from"./table-949645d5.js";import{_ as l}from"./searchForm-bc074dfc.js";import{c as o}from"./tree-0985e479.js";/* empty css                                                                   */import{c as n}from"./pagination-35741a8b.js";import{c as i}from"./JyTabs-8b1e13a5.js";import{c as s}from"./Layout-58d8fae6.js";import{c as r}from"./batch-21ddcba8.js";import{c}from"./documentsDetails-c9f80313.js";import{W as p}from"./WarningOperate-f5dcff4d.js";import{at as d,a as m,a9 as u,d as b,aQ as h,W as f,X as y,ap as _,ai as v,Y as g,u as j,ae as w,ah as D,ba as x,bb as k}from"./chunk-ant-design-vue-a1de3c57.js";import"./chunk-element-plus-636450f3.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-21febff4.js";/* empty css                                                             *//* empty css                                                               */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e822e6a3.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const A={class:"PrintControlManagement-ProcessSpecificationAlarmNotification"},T=(e=>(x("data-v-081df0c0"),e=e(),k(),e))((()=>g("div",{class:"title"},[g("div",null,"流程规范告警提醒")],-1))),C={class:"batch"},S={class:"ap-box"},F=e({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:x}){const k=d({show:!1,title:"处理",formJson:p}),F=m(null),B=e=>{e?F.value.getFormData().then((e=>{alert(JSON.stringify(e)),k.showDialog=!1})).catch((e=>{ElMessage.error(e)})):F.value.resetForm()},P=d({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"用印单据名称",sortable:!0,"min-width":150},{prop:"2",label:"文件类型",sortable:!0,"min-width":150},{prop:"3",label:"申请人",sortable:!0,"min-width":150},{prop:"4",label:"申请部门",sortable:!0,"min-width":150},{prop:"5",label:"申请时间",sortable:!0,"min-width":180},{prop:"6",label:"操作时间",sortable:!0,"min-width":180},{prop:"7",label:"未用印时长",sortable:!0,"min-width":150},{prop:"8",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称2",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function J(e,t,a,l){"1"==t.property&&(P.componentsDocumentsDetails.show=!0)}function z(){P.componentsDocumentsDetails.show=!1}function N(e,t,a,l){"处理"===a.name&&(k.show=!0)}function U(e){P.componentsBatch.selectionData=e}return u((()=>{})),b((()=>{})),(e,p)=>{const d=h("v-form-render"),m=t;return f(),y("div",A,[_(s,{Layout:"title,searchForm,table,pagination,batch"},{title:v((()=>[T])),tabs:v((()=>[g("div",null,[_(i,{activeName:"1",data:j(P).componentsTabs.data},null,8,["data"])])])),searchForm:v((()=>[g("div",null,[_(j(l),{data:j(P).componentsSearchForm.data,butData:j(P).componentsSearchForm.butData,style:w(j(P).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:v((()=>[g("div",C,[_(r)])])),tree:v((()=>[g("div",null,[_(j(o),{data:j(P).componentsTree.data,defaultAttribute:j(P).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:v((()=>[g("div",null,[_(j(a),{defaultAttribute:j(P).componentsTable.defaultAttribute,data:j(P).componentsTable.data,header:j(P).componentsTable.header,paginationData:j(P).componentsPagination.data,isSelection:!0,onCellClick:J,onCustomClick:N,onSelectionChange:U},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:v((()=>[_(n,{data:j(P).componentsPagination.data,defaultAttribute:j(P).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),g("div",S,[_(c,{show:j(P).componentsDocumentsDetails.show,visible:j(P).componentsDocumentsDetails.visible,onClickClose:z},null,8,["show","visible"])]),(f(),D(m,{"onUpdate:show":p[0]||(p[0]=e=>j(k).show=e),show:j(k).show,title:j(k).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:B,key:j(k).title},{default:v((()=>[_(d,{"form-json":j(k).formJson,"form-data":j(k).formJson,"option-data":j(k).optionData,ref_key:"vFormLibraryRef",ref:F},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-081df0c0"]]);export{F as default};
