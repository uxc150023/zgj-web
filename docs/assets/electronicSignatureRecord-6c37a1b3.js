import{_ as e}from"./gengduo-caozuo-730fe1cb.js";import{c as t}from"./table-e0a114b8.js";import{_ as a}from"./searchForm-96cc0cf8.js";/* empty css                                                             */import{g as l,P as o}from"./chunk-vform-d740b35c.js";/* empty css                                                                   */import{c as n}from"./pagination-3c925a2b.js";import{c as X}from"./JyTabs-726242c5.js";import{c as i}from"./Layout-e90710df.js";import{c as r}from"./batch-6eb7c760.js";import{c as s}from"./documentsDetails-8b022303.js";import{b as d,r as p,a9 as b,a1 as c,C as m,F as u,G as h,B as y,N as f,H as w,u as v,O as _,Q as g,J as x,R as A,I as D,V as k,W as j}from"./chunk-element-plus-a77de3d2.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-63de8919.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e63dfdb7.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const B=e=>(k("data-v-455925eb"),e=e(),j(),e),T={class:"PrintControlManagement-electronicSignatureRecord"},L={class:"title"},C=B((()=>w("div",null,"电子签章记录",-1))),J={class:"title-more"},E=B((()=>w("div",{class:"title-more-add"},null,-1))),M={class:"title-more-down"},S=B((()=>w("img",{class:"button-icon",src:e,alt:"",srcset:""},null,-1))),F=B((()=>w("span",null,"更多操作",-1))),P=A("导出台账"),z=A("查看已作废的单据"),I={class:"batch"},U={class:"ap-box"},V=l({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:l}){const k=d({componentsTabs:{data:[{label:"待签署",name:"1"},{label:"签署中",name:"2"},{label:"已签署",name:"3"},{label:"不可用",name:"4"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"文件名称/申请人/用印编码"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"文件类型",type:"derivable",defaultAttribute:{placeholder:"+文件类型"}},{id:"derivable",label:"印章名称",type:"derivable",defaultAttribute:{placeholder:"+印章名称"}},{id:"derivable",label:"申请人",type:"derivable",defaultAttribute:{placeholder:"+申请人"}},{id:"derivable",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+申请部门"}},{id:"derivable",label:"往来单位",type:"derivable",defaultAttribute:{placeholder:"+往来单位"}},{id:"name",label:"金额",type:"scopeInput",startAttribute:{placeholder:"最小金额"},endAttribute:{placeholder:"最大金额"}},{id:"wdyy",label:"",type:"checkbox",checkbox:[{defaultAttribute:{label:"我的申请单据"},style:{}}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"文件名称",sortable:!0,"min-width":150},{prop:"3",label:"文件类型",sortable:!0,"min-width":150},{prop:"4",label:"印章名称",sortable:!0,"min-width":150},{prop:"5",label:"申请人",sortable:!0,"min-width":150},{prop:"6",label:"申请部门",sortable:!0,"min-width":150},{prop:"7",label:"申请时间",sortable:!0,"min-width":180},{prop:"8",label:"审批状态",sortable:!0,"min-width":150},{prop:"9",label:"签章状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"作废"}]}],data:[{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("2"==t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量作废"}]},JyElMessageBox:{show:!1,header:{data:""},content:{data:""}}}),j=p(!1);function B(e,t,a,l){"2"==t.property&&(k.componentsDocumentsDetails.show=!0)}function V(){k.componentsDocumentsDetails.show=!1}function N(e){"1"==e||"2"==e||"3"==e?(k.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"文件名称",sortable:!0,"min-width":150},{prop:"3",label:"文件类型",sortable:!0,"min-width":150},{prop:"4",label:"印章名称",sortable:!0,"min-width":150},{prop:"5",label:"申请人",sortable:!0,"min-width":150},{prop:"6",label:"申请部门",sortable:!0,"min-width":150},{prop:"7",label:"申请时间",sortable:!0,"min-width":180},{prop:"8",label:"审批状态",sortable:!0,"min-width":150},{prop:"9",label:"签章状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"作废"}]}],k.componentsTable.data=[{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""}]):"4"==e&&(k.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"文件名称",sortable:!0,"min-width":150},{prop:"3",label:"文件类型",sortable:!0,"min-width":150},{prop:"4",label:"印章名称",sortable:!0,"min-width":150},{prop:"5",label:"申请人",sortable:!0,"min-width":150},{prop:"6",label:"申请部门",sortable:!0,"min-width":150},{prop:"7",label:"申请时间",sortable:!0,"min-width":180},{prop:"8",label:"审批状态",sortable:!0,"min-width":150},{prop:"9",label:"签章状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"撤销"},{name:"作废"}]}],k.componentsTable.data=[{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""},{1:"XXXXXXXXXX",2:"用印申请",3:"",4:"",5:"往往",6:"",7:"2022/10/30  15:00:00",8:"",9:""}])}function R(e,t,a,l){"作废"===a.name&&(k.JyElMessageBox.header.data="提示？",k.JyElMessageBox.content.data="作废后当前记录将从当前表格中消失，请问确定要作废吗？",k.JyElMessageBox.show=!0)}function O(e){k.componentsBatch.selectionData=e,k.componentsBatch.selectionData.length>0?k.componentsBatch.defaultAttribute.disabled=!1:k.componentsBatch.defaultAttribute.disabled=!0}function W(e,t){"derivable"===e.type&&(j.value=!0)}return b((()=>{})),c((()=>{})),(e,l)=>{const d=m("el-button"),p=m("el-dropdown-item"),b=m("el-dropdown-menu"),c=m("el-dropdown"),q=m("JyElMessageBox");return u(),h("div",T,[y(i,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:f((()=>[w("div",L,[C,w("div",J,[E,w("div",M,[y(c,null,{dropdown:f((()=>[y(b,null,{default:f((()=>[y(p,null,{default:f((()=>[P])),_:1}),y(p,null,{default:f((()=>[z])),_:1})])),_:1})])),default:f((()=>[y(d,null,{default:f((()=>[S,F])),_:1})])),_:1})])])])])),tabs:f((()=>[w("div",null,[y(X,{activeName:"1",data:v(k).componentsTabs.data,onTabChange:N},null,8,["data"])])])),searchForm:f((()=>[w("div",null,[y(v(a),{data:v(k).componentsSearchForm.data,butData:v(k).componentsSearchForm.butData,style:_(v(k).componentsSearchForm.style),onClickElement:W},null,8,["data","butData","style"])])])),batch:f((()=>[w("div",I,[y(r,{data:v(k).componentsBatch.data,defaultAttribute:v(k).componentsBatch.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:f((()=>[w("div",null,[y(v(t),{defaultAttribute:v(k).componentsTable.defaultAttribute,data:v(k).componentsTable.data,header:v(k).componentsTable.header,paginationData:v(k).componentsPagination.data,isSelection:"",onCellClick:B,onCustomClick:R,onSelectionChange:O},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:f((()=>[y(n,{data:v(k).componentsPagination.data,defaultAttribute:v(k).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),w("div",U,[y(s,{show:v(k).componentsDocumentsDetails.show,visible:v(k).componentsDocumentsDetails.visible,onClickClose:V},null,8,["show","visible"])]),j.value?(u(),g(v(o),{key:0,show:j.value,"onUpdate:show":l[0]||(l[0]=e=>j.value=e)},null,8,["show"])):x("",!0),y(q,{modelValue:v(k).JyElMessageBox.show,"onUpdate:modelValue":l[1]||(l[1]=e=>v(k).JyElMessageBox.show=e),show:v(k).JyElMessageBox.show,defaultAttribute:{}},{header:f((()=>[A(D(v(k).JyElMessageBox.header.data),1)])),content:f((()=>[A(D(v(k).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-455925eb"]]);export{V as default};
