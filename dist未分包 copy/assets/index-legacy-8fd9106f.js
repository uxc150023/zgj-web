System.register(["./table-legacy-3557b439.js","./searchForm-legacy-661aae1d.js","./pagination-legacy-abc2a695.js","./Layout-legacy-b2631a91.js","./batch-legacy-5a4e36c5.js","./main-legacy-80c027be.js","./sangedian-legacy-5b82475d.js","./ketanchude-legacy-3429c6dd.js","./KDocumentTypeDialog-legacy-9730cc30.js"],(function(e,t){"use strict";var a,l,n,i,o,c,d,r,s,u,p,b,m,h,y,f,g,A,w=document.createElement("style");return w.textContent=".title[data-v-ef7c436e]{display:flex;align-items:center;justify-content:space-between}\n",document.head.appendChild(w),{setters:[e=>{a=e.c},e=>{l=e._},e=>{n=e.c},e=>{i=e.c},e=>{o=e.c},e=>{c=e._,d=e.h,r=e.r,s=e.o,u=e.c,p=e.a,b=e.w,m=e.m,h=e.u,y=e.n,f=e.g,g=e.y,A=e.z},null,null,null],execute:function(){const t={class:"title"},w=(e=>(g("data-v-ef7c436e"),e=e(),A(),e))((()=>m("div",null,"固件版本管理",-1))),k=f("+ 新建"),v={class:"batch"};e("default",c({setup(e){const c=d({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入"}},{id:"name",label:"强制升级",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[]},{id:"picker",label:"创建时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"name2",label:"状态",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"固件版本号",sortable:!0,"min-width":150},{prop:"2",label:"固件版本号",sortable:!0,"min-width":150},{prop:"3",label:"状态",sortable:!0,"min-width":150},{prop:"4",label:"可升级的固件版本号",sortable:!0,"min-width":220},{prop:"5",label:"是否强制",sortable:!0,"min-width":150},{prop:"6",label:"创建人",sortable:!0,"min-width":150},{prop:"7",label:"创建时间",sortable:!0,"min-width":180},{prop:"8",label:"版本说明",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":170,rankDisplayData:[{name:"修改"},{name:"删除"},{name:"固件下载"}]}],data:[{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.1.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"否",6:"岳海涛",7:"2021-04-13 11:00:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除"}]}});function f(e){c.componentsBatch.selectionData=e,c.componentsBatch.selectionData.length>0?c.componentsBatch.defaultAttribute.disabled=!1:c.componentsBatch.defaultAttribute.disabled=!0}return(e,d)=>{const g=r("el-button");return s(),u("div",null,[p(h(i),{Layout:"title,searchForm,table,pagination,tabs,batch"},{title:b((()=>[m("div",t,[w,m("div",null,[p(g,{type:"primary"},{default:b((()=>[k])),_:1})])])])),searchForm:b((()=>[m("div",null,[p(h(l),{data:h(c).componentsSearchForm.data,butData:h(c).componentsSearchForm.butData,style:y(h(c).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:b((()=>[m("div",v,[p(o,{data:h(c).componentsBatch.data,defaultAttribute:h(c).componentsBatch.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:b((()=>[m("div",null,[p(h(a),{defaultAttribute:h(c).componentsTable.defaultAttribute,isSelection:"",data:h(c).componentsTable.data,header:h(c).componentsTable.header,paginationData:h(c).componentsPagination.data,onSelectionChange:f},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:b((()=>[p(h(n),{data:h(c).componentsPagination.data,defaultAttribute:h(c).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1})])}}},[["__scopeId","data-v-ef7c436e"]]))}}}));
