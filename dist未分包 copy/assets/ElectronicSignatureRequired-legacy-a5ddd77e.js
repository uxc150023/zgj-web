System.register(["./table-legacy-3557b439.js","./searchForm-legacy-661aae1d.js","./pagination-legacy-abc2a695.js","./JyTabs-legacy-3f34f463.js","./Layout-legacy-b2631a91.js","./batch-legacy-5a4e36c5.js","./documentsDetails-legacy-b3398eb5.js","./main-legacy-80c027be.js","./sangedian-legacy-5b82475d.js","./ketanchude-legacy-3429c6dd.js","./KDocumentTypeDialog-legacy-9730cc30.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-f9de9560.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-fafff2de.js","./portion-legacy-b0849eee.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-2c813e37.js","./yuan-hui-legacy-3805e29d.js"],(function(e,t){"use strict";var a,l,n,o,i,c,d,r,s,u,b,p,m,h,y,X,g,f,v,_,A,D,w,j,C=document.createElement("style");return C.textContent=".PrintControlManagement-ElectronicSignatureRequired[data-v-6d6e926d]{margin:0%}.PrintControlManagement-ElectronicSignatureRequired .title[data-v-6d6e926d]{display:flex;align-items:center;justify-content:space-between}.PrintControlManagement-ElectronicSignatureRequired .batch[data-v-6d6e926d]{display:flex;align-items:center}.PrintControlManagement-ElectronicSignatureRequired .batch .batch-desc[data-v-6d6e926d]{margin-right:.8571428571rem}\n",document.head.appendChild(C),{setters:[e=>{a=e.c},e=>{l=e._},e=>{n=e.c},e=>{o=e.c},e=>{i=e.c},e=>{c=e.c},e=>{d=e.c},e=>{r=e._,s=e.v,u=e.h,b=e.j,p=e.k,m=e.o,h=e.c,y=e.a,X=e.w,g=e.m,f=e.u,v=e.n,_=e.f,A=e.b3,D=e.l,w=e.y,j=e.z},null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"PrintControlManagement-ElectronicSignatureRequired"},C=(e=>(w("data-v-6d6e926d"),e=e(),j(),e))((()=>g("div",{class:"title"},[g("div",null,"待电子签章")],-1))),k={class:"batch"},x={class:"ap-box"};e("default",r({setup(e){const r=s(!1),w=u({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/用印编码"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"印章名称",type:"derivable",defaultAttribute:{placeholder:"+印章名称"}},{id:"derivable",label:"申请人",type:"derivable",defaultAttribute:{placeholder:"+申请人"}},{id:"derivable",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+申请部门"}}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"文件名称",sortable:!0,"min-width":150},{prop:"3",label:"印章名称",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":150},{prop:"7",label:"签章情况",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"签署"}]}],data:[{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30",7:"",8:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("2"===t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"印章详情",name:"Particulars-of-Seal"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[]}});function j(e,t,a,l){"2"===t.property&&(w.componentsDocumentsDetails.show=!0)}function S(){w.componentsDocumentsDetails.show=!1}function B(e){w.componentsBatch.selectionData=e,w.componentsBatch.selectionData.length>0?w.componentsBatch.defaultAttribute.disabled=!1:w.componentsBatch.defaultAttribute.disabled=!0}function P(e,t){"derivable"===e.type&&(r.value=!0)}return b((()=>{})),p((()=>{})),(e,s)=>(m(),h("div",t,[y(i,{Layout:"title,searchForm,table,pagination,batch"},{title:X((()=>[C])),tabs:X((()=>[g("div",null,[y(o,{activeName:"1",data:f(w).componentsTabs.data},null,8,["data"])])])),searchForm:X((()=>[g("div",null,[y(f(l),{data:f(w).componentsSearchForm.data,butData:f(w).componentsSearchForm.butData,style:v(f(w).componentsSearchForm.style),onClickElement:P},null,8,["data","butData","style"])])])),batch:X((()=>[g("div",k,[y(c,{data:f(w).componentsBatch.data,defaultAttribute:f(w).componentsBatch.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:X((()=>[g("div",null,[y(f(a),{defaultAttribute:f(w).componentsTable.defaultAttribute,data:f(w).componentsTable.data,header:f(w).componentsTable.header,paginationData:f(w).componentsPagination.data,isSelection:"",onCellClick:j,onSelectionChange:B},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:X((()=>[y(n,{data:f(w).componentsPagination.data,defaultAttribute:f(w).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),g("div",x,[y(d,{show:f(w).componentsDocumentsDetails.show,visible:f(w).componentsDocumentsDetails.visible,onClickClose:S},null,8,["show","visible"])]),r.value?(m(),_(f(A),{key:0,show:r.value,"onUpdate:show":s[0]||(s[0]=e=>r.value=e)},null,8,["show"])):D("",!0)]))}},[["__scopeId","data-v-6d6e926d"]]))}}}));
