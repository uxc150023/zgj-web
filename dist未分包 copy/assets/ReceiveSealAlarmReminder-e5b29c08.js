import{_ as e,h as t,v as a,j as l,k as o,r as n,o as i,c as r,a as s,w as c,m as d,u as p,n as m,f as u,M as b,y as h,z as f}from"./main-5d732c2e.js";import{c as y}from"./table-12670e99.js";import{_}from"./searchForm-a97b647c.js";import{c as v}from"./tree-8bedc90b.js";/* empty css                                                                   */import{c as g}from"./pagination-569fa38f.js";import{c as w}from"./JyTabs-6af6e902.js";import{c as j}from"./Layout-db7f64fa.js";import{c as D}from"./batch-e7262433.js";import{c as x}from"./documentsDetails-5d74be5e.js";import{W as T}from"./WarningOperate-f5dcff4d.js";import"./sangedian-b1ee72e5.js";import"./ketanchude-65de0c89.js";import"./KDocumentTypeDialog-1f624042.js";/* empty css                                                             *//* empty css                                                               */import"./cha-kong-1ced20bc.js";/* empty css                                                                         */import"./portion-92af8719.js";/* empty css                                                                */import"./yuan-hui-e1a80bc6.js";const A={class:"PrintControlManagement-ReceiveSealAlarmReminder"},C=(e=>(h("data-v-5cac1ce8"),e=e(),f(),e))((()=>d("div",{class:"title"},[d("div",null,"领用印章告警提醒")],-1))),k={class:"batch"},S={class:"ap-box"},F=e({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:h}){const f=t({show:!1,title:"处理",formJson:T}),F=a(null),B=e=>{e?F.value.getFormData().then((e=>{alert(JSON.stringify(e)),f.showDialog=!1})).catch((e=>{ElMessage.error(e)})):F.value.resetForm()},P=t({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"印章名称",sortable:!0,"min-width":150},{prop:"2",label:"印章类型",sortable:!0,"min-width":150},{prop:"3",label:"保管人",sortable:!0,"min-width":150},{prop:"4",label:"保管部门",sortable:!0,"min-width":150},{prop:"5",label:"告警风险项",sortable:!0,"min-width":150},{prop:"6",label:"告警内容",sortable:!0,"min-width":150},{prop:"7",label:"操作人",sortable:!0,"min-width":150},{prop:"8",label:"操作地点",sortable:!0,"min-width":150},{prop:"9",label:"操作时间",sortable:!0,"min-width":180},{prop:"10",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"243测试章",2:"243测试章",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"243测试章",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"印章详情",name:"Particulars-of-Seal"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function J(e,t,a,l){"1"==t.property&&(P.componentsDocumentsDetails.show=!0)}function z(){P.componentsDocumentsDetails.show=!1}function R(e,t,a,l){"处理"===a.name&&(f.show=!0)}function L(e){P.componentsBatch.selectionData=e}return l((()=>{})),o((()=>{})),(e,t)=>{const a=n("v-form-render"),l=b;return i(),r("div",A,[s(j,{Layout:"title,searchForm,table,pagination,batch"},{title:c((()=>[C])),tabs:c((()=>[d("div",null,[s(w,{activeName:"1",data:p(P).componentsTabs.data},null,8,["data"])])])),searchForm:c((()=>[d("div",null,[s(p(_),{data:p(P).componentsSearchForm.data,butData:p(P).componentsSearchForm.butData,style:m(p(P).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:c((()=>[d("div",k,[s(D)])])),tree:c((()=>[d("div",null,[s(p(v),{data:p(P).componentsTree.data,defaultAttribute:p(P).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:c((()=>[d("div",null,[s(p(y),{defaultAttribute:p(P).componentsTable.defaultAttribute,data:p(P).componentsTable.data,header:p(P).componentsTable.header,paginationData:p(P).componentsPagination.data,isSelection:!0,onCellClick:J,onCustomClick:R,onSelectionChange:L},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:c((()=>[s(g,{data:p(P).componentsPagination.data,defaultAttribute:p(P).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),d("div",S,[s(x,{show:p(P).componentsDocumentsDetails.show,visible:p(P).componentsDocumentsDetails.visible,onClickClose:z},null,8,["show","visible"])]),(i(),u(l,{"onUpdate:show":t[0]||(t[0]=e=>p(f).show=e),show:p(f).show,title:p(f).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:B,key:p(f).title},{default:c((()=>[s(a,{"form-json":p(f).formJson,"form-data":p(f).formJson,"option-data":p(f).optionData,ref_key:"vFormLibraryRef",ref:F},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-5cac1ce8"]]);export{F as default};
