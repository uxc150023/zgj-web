System.register(["./chunk-vform-legacy-f1b551df.js","./table-legacy-0b33412c.js","./searchForm-legacy-04a651fb.js","./tree-legacy-e229f14b.js","./breadcrumb.vue_vue_type_style_index_0_scoped_ccdf856b_lang-legacy-4968fc55.js","./pagination-legacy-4c7c1f23.js","./JyTabs-legacy-c8c76c45.js","./Layout-legacy-262a6687.js","./batch-legacy-ff825cb6.js","./documentsDetails-legacy-8c032a4c.js","./WarningOperate-legacy-47450a66.js","./chunk-ant-design-vue-legacy-78f2abeb.js","./chunk-element-plus-legacy-3362d1f8.js","./sangedian-legacy-75d81ddc.js","./ketanchude-legacy-4abaf206.js","./KDocumentTypeDialog-legacy-0ecc1f11.js","./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-893f98eb.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-1ebc7b7b.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-1381b1de.js","./portion-legacy-cfca188a.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-c3216d6b.js","./yuan-hui-legacy-0c1e3d03.js"],(function(e,t){"use strict";var a,l,n,o,i,c,s,r,d,u,p,m,b,y,h,f,g,v,_,j,w,D,x,A,k,C,S=document.createElement("style");return S.textContent=".PrintControlManagement-ProcessSpecificationAlarmNotification[data-v-081df0c0]{margin:0%}.PrintControlManagement-ProcessSpecificationAlarmNotification .title[data-v-081df0c0]{display:flex;align-items:center;justify-content:space-between}.PrintControlManagement-ProcessSpecificationAlarmNotification .batch[data-v-081df0c0]{display:flex;align-items:center}.PrintControlManagement-ProcessSpecificationAlarmNotification .batch .batch-desc[data-v-081df0c0]{margin-right:.8571428571rem}\n",document.head.appendChild(S),{setters:[e=>{a=e.g,l=e.n},e=>{n=e.c},e=>{o=e._},e=>{i=e.c},null,e=>{c=e.c},e=>{s=e.c},e=>{r=e.c},e=>{d=e.c},e=>{u=e.c},e=>{p=e.W},e=>{m=e.at,b=e.a,y=e.a9,h=e.d,f=e.aQ,g=e.W,v=e.X,_=e.ap,j=e.ai,w=e.Y,D=e.u,x=e.ae,A=e.ah,k=e.ba,C=e.bb},null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"PrintControlManagement-ProcessSpecificationAlarmNotification"},S=(e=>(k("data-v-081df0c0"),e=e(),C(),e))((()=>w("div",{class:"title"},[w("div",null,"流程规范告警提醒")],-1))),T={class:"batch"},P={class:"ap-box"};e("default",a({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:a}){const k=m({show:!1,title:"处理",formJson:p}),C=b(null),F=e=>{e?C.value.getFormData().then((e=>{alert(JSON.stringify(e)),k.showDialog=!1})).catch((e=>{ElMessage.error(e)})):C.value.resetForm()},B=m({componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/报警信息"}},{id:"picker",label:"操作时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"wjlx",label:"印章名称",type:"select",options:[{label:"印章名称1",value:"1"},{label:"印章名称2",value:"2"}]},{id:"wjlx",label:"告警风险项",type:"select",options:[{label:"告警风险项1",value:"1"},{label:"告警风险项2",value:"2"}]},{id:"wjlx",label:"处理状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]},{id:"wjlx",label:"处理意见",type:"select",options:[{label:"意见1",value:"1"},{label:"意见2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"用印单据名称",sortable:!0,"min-width":150},{prop:"2",label:"文件类型",sortable:!0,"min-width":150},{prop:"3",label:"申请人",sortable:!0,"min-width":150},{prop:"4",label:"申请部门",sortable:!0,"min-width":150},{prop:"5",label:"申请时间",sortable:!0,"min-width":180},{prop:"6",label:"操作时间",sortable:!0,"min-width":180},{prop:"7",label:"未用印时长",sortable:!0,"min-width":150},{prop:"8",label:"处理状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],data:[{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称2",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""},{1:"测试单据名称1",2:"",3:"往往",4:"",5:"2022/10/30  15:00:00",6:"2022/10/30  15:00:00",7:"",8:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],data:[{name:"批量操作"}]}});function N(e,t,a,l){"1"==t.property&&(B.componentsDocumentsDetails.show=!0)}function J(){B.componentsDocumentsDetails.show=!1}function M(e,t,a,l){"处理"===a.name&&(k.show=!0)}function z(e){B.componentsBatch.selectionData=e}return y((()=>{})),h((()=>{})),(e,a)=>{const p=f("v-form-render"),m=l;return g(),v("div",t,[_(r,{Layout:"title,searchForm,table,pagination,batch"},{title:j((()=>[S])),tabs:j((()=>[w("div",null,[_(s,{activeName:"1",data:D(B).componentsTabs.data},null,8,["data"])])])),searchForm:j((()=>[w("div",null,[_(D(o),{data:D(B).componentsSearchForm.data,butData:D(B).componentsSearchForm.butData,style:x(D(B).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:j((()=>[w("div",T,[_(d)])])),tree:j((()=>[w("div",null,[_(D(i),{data:D(B).componentsTree.data,defaultAttribute:D(B).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:j((()=>[w("div",null,[_(D(n),{defaultAttribute:D(B).componentsTable.defaultAttribute,data:D(B).componentsTable.data,header:D(B).componentsTable.header,paginationData:D(B).componentsPagination.data,isSelection:!0,onCellClick:N,onCustomClick:M,onSelectionChange:z},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:j((()=>[_(c,{data:D(B).componentsPagination.data,defaultAttribute:D(B).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),w("div",P,[_(u,{show:D(B).componentsDocumentsDetails.show,visible:D(B).componentsDocumentsDetails.visible,onClickClose:J},null,8,["show","visible"])]),(g(),A(m,{"onUpdate:show":a[0]||(a[0]=e=>D(k).show=e),show:D(k).show,title:D(k).title,centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:600,onClose:F,key:D(k).title},{default:j((()=>[_(p,{"form-json":D(k).formJson,"form-data":D(k).formJson,"option-data":D(k).optionData,ref_key:"vFormLibraryRef",ref:C},null,8,["form-json","form-data","option-data"])])),_:1},8,["show","title","confirmText","concelText"]))])}}},[["__scopeId","data-v-081df0c0"]]))}}}));
