System.register(["./chunk-vform-legacy-f1b551df.js","./table-legacy-0b33412c.js","./searchForm-legacy-04a651fb.js","./tree-legacy-e229f14b.js","./breadcrumb.vue_vue_type_style_index_0_scoped_ccdf856b_lang-legacy-4968fc55.js","./pagination-legacy-4c7c1f23.js","./JyTabs-legacy-c8c76c45.js","./Layout-legacy-262a6687.js","./batch-legacy-ff825cb6.js","./documentsDetails-legacy-8c032a4c.js","./WarningOperate-legacy-47450a66.js","./chunk-ant-design-vue-legacy-78f2abeb.js","./chunk-element-plus-legacy-3362d1f8.js","./sangedian-legacy-75d81ddc.js","./ketanchude-legacy-4abaf206.js","./KDocumentTypeDialog-legacy-0ecc1f11.js","./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-893f98eb.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-1ebc7b7b.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-1381b1de.js","./portion-legacy-cfca188a.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-c3216d6b.js","./yuan-hui-legacy-0c1e3d03.js"],(function(e,a){"use strict";var t,l,n,o,i,c,r,s,d,u,p,m,b,y,h,g,f,v,_,w,j,C,x,D,A,T,k=document.createElement("style");return k.textContent=".PrintControlManagement-ReceiveSealAlarmReminder[data-v-5cac1ce8]{margin:0%}.PrintControlManagement-ReceiveSealAlarmReminder .title[data-v-5cac1ce8]{display:flex;align-items:center;justify-content:space-between}.PrintControlManagement-ReceiveSealAlarmReminder .batch[data-v-5cac1ce8]{display:flex;align-items:center}.PrintControlManagement-ReceiveSealAlarmReminder .batch .batch-desc[data-v-5cac1ce8]{margin-right:.8571428571rem}\n",document.head.appendChild(k),{setters:[e=>{t=e.g,l=e.n},e=>{n=e.c},e=>{o=e._},e=>{i=e.c},null,e=>{c=e.c},e=>{r=e.c},e=>{s=e.c},e=>{d=e.c},e=>{u=e.c},e=>{p=e.W},e=>{m=e.at,b=e.a,y=e.a9,h=e.d,g=e.aQ,f=e.W,v=e.X,_=e.ap,w=e.ai,j=e.Y,C=e.u,x=e.ae,D=e.ah,A=e.ba,T=e.bb},null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"PrintControlManagement-ReceiveSealAlarmReminder"},k=(e=>(A("data-v-5cac1ce8"),e=e(),T(),e))((()=>j("div",{class:"title"},[j("div",null,"领用印章告警提醒")],-1))),S={class:"batch"},R={class:"ap-box"};e("default",t({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:t}){const A=m({show:!1,title:"处理",formJson:p}),T=b(null),P=e=>{e?T.value.getFormData().then((e=>{alert(JSON.stringify(e)),A.showDialog=!1})).catch((e=>{ElMessage.error(e)})):T.value.resetForm()},F=m({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"印章名称",sortable:!0,"min-width":150},{prop:"2",label:"印章类型",sortable:!0,"min-width":150},{prop:"3",label:"保管人",sortable:!0,"min-width":150},{prop:"4",label:"保管部门",sortable:!0,"min-width":150},{prop:"5",label:"告警风险项",sortable:!0,"min-width":150},{prop:"6",label:"告警内容",sortable:!0,"min-width":150},{prop:"7",label:"操作人",sortable:!0,"min-width":150},{prop:"8",label:"操作地点",sortable:!0,"min-width":150},{prop:"9",label:"操作时间",sortable:!0,"min-width":180},{prop:"10",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"243测试章",2:"243测试章",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"243测试章",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""},{1:"243测试章",2:"",3:"",4:"",5:"",6:"",7:"TradeCode21",8:"",9:"2022/10/30  15:00:00",10:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:l})=>{if("1"==a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"印章详情",name:"Particulars-of-Seal"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function B(e,a,t,l){"1"==a.property&&(F.componentsDocumentsDetails.show=!0)}function J(){F.componentsDocumentsDetails.show=!1}function M(e,a,t,l){"处理"===t.name&&(A.show=!0)}function z(e){F.componentsBatch.selectionData=e}return y((()=>{})),h((()=>{})),(e,t)=>{const p=g("v-form-render"),m=l;return f(),v("div",a,[_(s,{Layout:"title,searchForm,table,pagination,batch"},{title:w((()=>[k])),tabs:w((()=>[j("div",null,[_(r,{activeName:"1",data:C(F).componentsTabs.data},null,8,["data"])])])),searchForm:w((()=>[j("div",null,[_(C(o),{data:C(F).componentsSearchForm.data,butData:C(F).componentsSearchForm.butData,style:x(C(F).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:w((()=>[j("div",S,[_(d)])])),tree:w((()=>[j("div",null,[_(C(i),{data:C(F).componentsTree.data,defaultAttribute:C(F).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:w((()=>[j("div",null,[_(C(n),{defaultAttribute:C(F).componentsTable.defaultAttribute,data:C(F).componentsTable.data,header:C(F).componentsTable.header,paginationData:C(F).componentsPagination.data,isSelection:!0,onCellClick:B,onCustomClick:M,onSelectionChange:z},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:w((()=>[_(c,{data:C(F).componentsPagination.data,defaultAttribute:C(F).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),j("div",R,[_(u,{show:C(F).componentsDocumentsDetails.show,visible:C(F).componentsDocumentsDetails.visible,onClickClose:J},null,8,["show","visible"])]),(f(),D(m,{"onUpdate:show":t[0]||(t[0]=e=>C(A).show=e),show:C(A).show,title:C(A).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:P,key:C(A).title},{default:w((()=>[_(p,{"form-json":C(A).formJson,"form-data":C(A).formJson,"option-data":C(A).optionData,ref_key:"vFormLibraryRef",ref:T},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-5cac1ce8"]]))}}}));
