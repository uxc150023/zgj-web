import{c as e}from"./table-949645d5.js";import{_ as t}from"./searchForm-bc074dfc.js";import{c as a}from"./pagination-35741a8b.js";import{c as o}from"./Layout-58d8fae6.js";import{c as l}from"./JyTabs-8b1e13a5.js";import{c as n}from"./tree-0985e479.js";import{c as i}from"./documentsDetails-c9f80313.js";import{c as s}from"./batch-21ddcba8.js";import{at as r,W as p,X as c,ap as d,ai as m,Y as u,u as b,ae as h}from"./chunk-ant-design-vue-a1de3c57.js";import"./sangedian-6ea00dcf.js";import"./chunk-vform-ec6574e8.js";import"./chunk-element-plus-636450f3.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-21febff4.js";/* empty css                                                               *//* empty css                                                             */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e822e6a3.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const y=u("div",{class:"title"},"消息模板",-1),f={class:"batch"},_={class:"ap-box"},v={setup(v){const g=r({componentsTabs:{data:[{label:"通知事件",name:"1"},{label:"预警事件",name:"2"}]},componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"事件名称/事件描述"}},{id:"name",label:"状态",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{value:"1",label:"全部"}]},{id:"name",label:"渠道类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{value:"1",label:"全部"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"模版名称",sortable:!0,"min-width":150,fixed:!0},{prop:"2",label:"关联事件",sortable:!0,"min-width":150},{prop:"3",label:"事件类别",sortable:!0,"min-width":150},{prop:"4",label:"状态",sortable:!0,"min-width":150},{prop:"5",label:"渠道类型",sortable:!0,"min-width":150},{prop:"6",label:"更新时间",sortable:!0,width:180},{prop:"7",label:"备注",sortable:!0,"min-width":150},{prop:"8",label:"操作",width:80,fixed:"right",rankDisplayData:[{name:"修改"}]}],data:[{1:"模版名称",2:"关联事件",3:"事件类别",4:"启用",5:"渠道类型",6:"2022/10/30 22:22:22",7:"备注"},{1:"模版名称",2:"关联事件",3:"事件类别",4:"启用",5:"渠道类型",6:"2022/10/30 22:22:22",7:"备注"},{1:"模版名称",2:"关联事件",3:"事件类别",4:"启用",5:"渠道类型",6:"2022/10/30 22:22:22",7:"备注"},{1:"模版名称",2:"关联事件",3:"事件类别",4:"启用",5:"渠道类型",6:"2022/10/30 22:22:22",7:"备注"},{1:"模版名称",2:"关联事件",3:"事件类别",4:"启用",5:"渠道类型",6:"2022/10/30 22:22:22",7:"备注"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:o})=>{if("1"===t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsDocumentsDetails:{show:!1,visible:[{label:"模板详情",name:"Template-Details"},{label:"流程记录",name:"operating-record"}]}});function j(e,t,a,o){"1"===t.property&&(g.componentsDocumentsDetails.show=!0)}function D(){g.componentsDocumentsDetails.show=!1}return(r,v)=>(p(),c("div",null,[d(o,{Layout:"title,searchForm,table,pagination,tabs,tree,batch"},{title:m((()=>[y])),tabs:m((()=>[u("div",null,[d(l,{activeName:"1",data:b(g).componentsTabs.data},null,8,["data"])])])),searchForm:m((()=>[u("div",null,[d(b(t),{data:b(g).componentsSearchForm.data,butData:b(g).componentsSearchForm.butData,style:h(b(g).componentsSearchForm.style)},null,8,["data","butData","style"])])])),tree:m((()=>[u("div",null,[d(b(n),{data:b(g).componentsTree.data,defaultAttribute:b(g).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),batch:m((()=>[u("div",f,[d(s)])])),table:m((()=>[u("div",null,[d(b(e),{defaultAttribute:b(g).componentsTable.defaultAttribute,data:b(g).componentsTable.data,header:b(g).componentsTable.header,paginationData:b(g).componentsPagination.data,isSelection:!0,onCellClick:j},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:m((()=>[d(a,{data:b(g).componentsPagination.data,defaultAttribute:b(g).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),u("div",_,[d(i,{show:b(g).componentsDocumentsDetails.show,visible:b(g).componentsDocumentsDetails.visible,onClickClose:D},null,8,["show","visible"])])]))}};export{v as default};
