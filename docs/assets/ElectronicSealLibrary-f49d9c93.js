import{c as e}from"./table-e0a114b8.js";import{_ as t}from"./searchForm-96cc0cf8.js";/* empty css                                                             */import{g as a}from"./chunk-vform-d740b35c.js";/* empty css                                                                   */import{c as l}from"./pagination-3c925a2b.js";import{c as o}from"./JyTabs-726242c5.js";import{c as n}from"./Layout-e90710df.js";import{c as s}from"./batch-6eb7c760.js";import{c as i}from"./documentsDetails-8b022303.js";import{b as r,a9 as c,a1 as d,C as p,F as m,G as u,B as b,N as y,H as h,u as _,O as f,R as v,V as g,W as j}from"./chunk-element-plus-a77de3d2.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-63de8919.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e63dfdb7.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const D={class:"PrintControlManagement-ElectronicSealLibrary"},A={class:"title"},k=(e=>(g("data-v-42ba527f"),e=e(),j(),e))((()=>h("div",null,"电子印章库",-1))),w={class:"title-more"},x={class:"title-more-add"},C=v("同步电子签章"),T={class:"batch"},S={class:"ap-box"},F=a({props:{type:{type:String,default:"0"}},emits:[],setup(a,{emit:v}){const g=r({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"印章名称"}},{id:"picker",label:"更新时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"select",label:"印章类型",type:"select",value:"",options:[{label:"电子章",value:"1"}]},{id:"select",label:"印章状态",type:"select",value:"",options:[{label:"正常",value:"1"},{label:"异常",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"印章名称",sortable:!0,"min-width":150},{prop:"2",label:"印膜",sortable:!0,"min-width":150},{prop:"3",label:"有效期",sortable:!0,"min-width":150},{prop:"4",label:"更新时间",sortable:!0,"min-width":150}],data:[{1:"印章",2:"",3:"",4:""},{1:"印章",2:"",3:"",4:""},{1:"印章",2:"",3:"",4:""},{1:"印章",2:"",3:"",4:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"印章详情",name:"Particulars-of-Seal"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]}});function j(e,t,a,l){"1"==t.property&&(g.componentsDocumentsDetails.show=!0)}function F(){g.componentsDocumentsDetails.show=!1}return c((()=>{})),d((()=>{})),(a,r)=>{const c=p("el-button");return m(),u("div",D,[b(n,{Layout:"title,searchForm,table,pagination,batch"},{title:y((()=>[h("div",A,[k,h("div",w,[h("div",x,[b(c,{type:"primary"},{default:y((()=>[C])),_:1})])])])])),tabs:y((()=>[h("div",null,[b(o,{activeName:"1",data:_(g).componentsTabs.data},null,8,["data"])])])),searchForm:y((()=>[h("div",null,[b(_(t),{data:_(g).componentsSearchForm.data,butData:_(g).componentsSearchForm.butData,style:f(_(g).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:y((()=>[h("div",T,[b(s)])])),table:y((()=>[h("div",null,[b(_(e),{defaultAttribute:_(g).componentsTable.defaultAttribute,data:_(g).componentsTable.data,header:_(g).componentsTable.header,paginationData:_(g).componentsPagination.data,onCellClick:j},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:y((()=>[b(l,{data:_(g).componentsPagination.data,defaultAttribute:_(g).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),h("div",S,[b(i,{show:_(g).componentsDocumentsDetails.show,visible:_(g).componentsDocumentsDetails.visible,onClickClose:F},null,8,["show","visible"])])])}}},[["__scopeId","data-v-42ba527f"]]);export{F as default};
