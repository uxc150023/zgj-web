import{g as e,_ as a,E as o,Q as t,a3 as l}from"./chunk-vform-ec6574e8.js";import s from"./index-eee6b18f.js";import{c as n}from"./tree-0985e479.js";import{J as d}from"./JyTable-8de6d2e9.js";import{a as r}from"./actionMoreDialog-6b54a55f.js";import{a as i}from"./index-bd96bee1.js";import{_ as m}from"./index-6bc53c26.js";import{a as p,be as c,at as u,a9 as h,aQ as y,W as w,X as b,ap as g,ai as f,Y as D,an as T,ao as v,u as F,ah as A,am as I,ba as k,bb as j}from"./chunk-ant-design-vue-a1de3c57.js";import"./chunk-element-plus-636450f3.js";/* empty css                                                             */import"./sangedian-6ea00dcf.js";import"./Layout-58d8fae6.js";import"./searchForm-bc074dfc.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-21febff4.js";import"./pagination-35741a8b.js";import"./batch-21ddcba8.js";import"./index-e7b1e71f.js";import"./cha-kong-c10eac4e.js";import"./index-a02cc9a9.js";import"./yuan-hui-31c99901.js";import"./index-09e205e2.js";import"./home-back-d5b479fa.js";import"./logo-ad08cc7e.js";import"./request-util-82325ac7.js";const M=e=>(k("data-v-0ca073b5"),e=e(),j(),e),V={class:"title"},x=M((()=>D("div",null,"表单管理",-1))),U={class:"header-div"},C=["src"],_={class:"content-div"},N=T(" 提交 "),B=T("取消"),E=M((()=>D("div",{class:"from-label"},"表单名称",-1))),L=T(" 提交 "),J=T("取消"),q=e({setup(e){const k=p(!1),j=p([]),M=c((()=>a((()=>import("./index-49226b20.js")),["assets/index-49226b20.js","assets/chunk-vform-ec6574e8.js","assets/chunk-ant-design-vue-a1de3c57.js","assets/chunk-ant-design-vue-106ae610.css","assets/chunk-element-plus-636450f3.js","assets/chunk-element-plus-27fc09b8.css","assets/chunk-vform-f011519b.css","assets/index-c9b91a43.js","assets/index-bd96bee1.js","assets/index-f4c08e8f.css","assets/index-09e205e2.js","assets/home-back-d5b479fa.js","assets/logo-ad08cc7e.js","assets/request-util-82325ac7.js","assets/index-17174844.css","assets/index-fbfce9ba.css"]))),q=p([]),P=p(null),z=p(null),R=p(null),S=p(null),W=p({formMessageId:"",formName:""}),Y=u({componentsAddForm:{dialogVisible:!1,addTitle:"新增",data:{}},componentsSearchForm:{data:[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"updateTime",label:"更新时间",type:"picker",requestType:"array",startRequest:"updateStartTime",endRequest:"updateEndTime",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:"left",show:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150,show:!0},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150,show:!0},{prop:"relationFlow",label:"是否关联流程","min-width":150,type:"format",statusList:[{label:"是",key:"1"},{label:"否",key:"0"}],show:!0},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150,show:!0},{prop:"modifyDatetimeStr",label:"更新时间",width:190,sortable:!0,show:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}],show:!0}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除"}],butDatas:[{name:"知道了",type:"",clickName:ee}]},componentsTree:{data:[],defaultAttribute:{"check-on-click-node":!1,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0,"highlight-current":!0,"node-key":"applyTypeId","current-node-key":"2"},defaultProps:{label:"applyTypeName",children:"children"},value:""},JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},data:{}},showFormDialog:{show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showRelatedfFlow:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showDeleteForm:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}}),$=(e,a)=>{1!==a.level?(z.value=e.applyTypeId?{applyTypeId:e.applyTypeId}:null,"5"===e.applyTypePid?(Y.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],Y.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"modifyDatetime",label:"更新时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"modifyDatetime",label:"是否关联流程",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]):(Y.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],Y.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"modifyDatetime",label:"更新时间",type:"picker",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"2",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]),P.value.reloadData()):S.value.setCurrentKey("5"===e.applyTypeId?"6":"2")};function H(){Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="新建",Y.componentsAddForm.data={}}async function K(e,a,o,t){"t-zgj-Edit"===o.name&&le(a.formMessageId,a,"edit"),"t-zgj-Delete"===o.name&&le(a.formMessageId,a,"delete"),"t-zgj-qyWechat.Copy"===o.name&&(W.value={...W.value,...a},Y.showFormDialog.header.data="表单复制",Y.showFormDialog.show=!0,Y.componentsAddForm.data.formName=`${W.value.formName}-副本`)}function Q(){const e={formMessageId:Y.JyElMessageBox.data.tableId};i.formDelete(e).then((a=>{a.data.length>0?(Y.showToastDialog.header.data="删除",Y.showToastDialog.content.data="当前表单关联了以下流程，不允许删除",Y.showToastDialog.show=!0,Y.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",Y.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ee}]):i.formPage(e).then((e=>{P.value.reloadData()}))})),Y.JyElMessageBox.show=!1}function X(e,a){Y.componentsBatch.selectionData=a,R.value={header:{data:"批量删除"},content:{data:"是否删除表单？"}},Y.showToastDialog.show=!0}const G=(e,a,o,t)=>{"formName"===a.property&&(k.value=!0,j.value=[{value:"detail",params:{formMessageId:e.formMessageId}},{value:"record",params:{operationId:e.formMessageId}},{value:"version",params:{formMessageId:e.formMessageId}}])},O=()=>{P.value.reloadData()},Z=()=>{const e=Y.componentsBatch.selectionData,a={formMessageIds:[]};e.forEach((e=>{a.formMessageIds.push(e.formMessageId)})),i.batchDelete(a).then((e=>{e.data.length>0?(Y.showToastDialog.header.data="删除",Y.showToastDialog.content.data="选中的以下表单已关联了流程，不允许删除",Y.showToastDialog.show=!0,Y.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",Y.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ee}]):(Y.showToastDialog.show=!1,P.value.reloadData())}))};function ee(){Y.showToastDialog.show=!1}function ae(){Y.showFormDialog.show=!1}const oe=p(null);async function te(){try{await oe.value.validate(),W.value.formName=Y.componentsAddForm.data.formName,await async function(){const e=await i.copy({formMessageId:W.value.formMessageId,formName:W.value.formName});l("表单复制成功"),await P.value.reloadData(),Y.componentsAddForm.data.formMessageId=e.data}(),Y.showFormDialog.show=!1,Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="修改"}catch(e){o(e)}}async function le(e,a,o){const l=await t.flowList({formMessageId:e});l.data&&0!==l.data.length?(Y.showRelatedfFlow.show=!0,R.value={header:"提示",content:"当前表单被已启用的以下流程所使用，仅当以下流程停用才允许"+("edit"===o?"修改":"删除"),selectionData:l.data}):"edit"===o?(Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="修改",Y.componentsAddForm.data=a):(Y.JyElMessageBox.header.data="删除",Y.JyElMessageBox.content.data="请问确定要删除该表单吗？",Y.JyElMessageBox.show=!0,Y.JyElMessageBox.data.tableId=a.formMessageId)}return h((()=>{i.listApplyTypeTree().then((e=>{const{data:a}=e,o=[];q.value=a,a.forEach((e=>{if(null===e.applyTypePid)e.children=[],e.disabled=!1,o.push(e);else{const a=o.findIndex((a=>a.applyTypeId===e.applyTypePid));a>-1&&o[a].children.push(e)}})),Y.componentsTree.data=o,Y.componentsTree.value=o[0].children[0].applyTypeId,z.value={applyTypeId:"2"},P.value.reloadData()}))})),(e,a)=>{const o=y("el-button"),t=y("JyElMessageBox"),l=y("el-input"),i=y("el-form-item"),p=y("el-form"),c=s;return w(),b("div",null,[g(d,{url:"/form/page",ref_key:"table",ref:P,hasTree:!0,needAutoRequest:!1,componentsSearchForm:F(Y).componentsSearchForm,componentsTableHeader:F(Y).componentsTable.header,componentsBatch:F(Y).componentsBatch,queryParams:z.value,statusColoum:"flag",openValue:"0",tableClick:"formName",onCellClick:G,onCustomClick:K,onClickBatchButton:X},{title:f((()=>[D("div",V,[x,D("div",null,[g(o,{type:"primary",onClick:H},{default:f((()=>[T("+ "+v(e.$t("t-zgj-add")),1)])),_:1})])])])),tree:f((()=>[D("div",null,[F(Y).componentsTree.value?(w(),A(F(n),{key:0,ref_key:"tree",ref:S,modelValue:F(Y).componentsTree.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F(Y).componentsTree.value=e),data:F(Y).componentsTree.data,defaultAttribute:F(Y).componentsTree.defaultAttribute,defaultProps:F(Y).componentsTree.defaultProps,onCurrentChange:$},null,8,["modelValue","data","defaultAttribute","defaultProps"])):I("",!0)])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams"]),F(Y).componentsAddForm.dialogVisible?(w(),A(F(M),{key:0,modelValue:F(Y).componentsAddForm.dialogVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>F(Y).componentsAddForm.dialogVisible=e),addTitle:F(Y).componentsAddForm.addTitle,columnData:F(Y).componentsAddForm.data,onClose:a[2]||(a[2]=e=>F(Y).componentsAddForm.dialogVisible=!1),onReloadData:O,optionData:F(Y).componentsTree.data},null,8,["modelValue","addTitle","columnData","optionData"])):I("",!0),g(t,{modelValue:F(Y).JyElMessageBox.show,"onUpdate:modelValue":a[4]||(a[4]=e=>F(Y).JyElMessageBox.show=e),show:F(Y).JyElMessageBox.show,defaultAttribute:{}},{header:f((()=>[D("div",U,[D("img",{src:F(Y).JyElMessageBox.header.icon,alt:""},null,8,C),D("span",null,v(F(Y).JyElMessageBox.header.data),1)])])),content:f((()=>[D("div",_,v(F(Y).JyElMessageBox.content.data),1)])),footer:f((()=>[g(o,{type:"primary",onClick:Q},{default:f((()=>[N])),_:1}),g(o,{onClick:a[3]||(a[3]=e=>F(Y).JyElMessageBox.show=!1)},{default:f((()=>[B])),_:1})])),_:1},8,["modelValue","show"]),g(t,{modelValue:F(Y).showFormDialog.show,"onUpdate:modelValue":a[6]||(a[6]=e=>F(Y).showFormDialog.show=e),show:F(Y).showFormDialog.show,defaultAttribute:{}},{header:f((()=>[T(v(F(Y).showFormDialog.header.data),1)])),content:f((()=>[g(p,{ref_key:"formRef",ref:oe,"label-position":"left","label-width":"100px",model:F(Y).componentsAddForm.data,"hide-required-asterisk":""},{default:f((()=>[g(i,{prop:"formName",rules:[{required:!0,message:"表单名称不能为空",trigger:"blur"}]},{label:f((()=>[E])),default:f((()=>[g(l,{modelValue:F(Y).componentsAddForm.data.formName,"onUpdate:modelValue":a[5]||(a[5]=e=>F(Y).componentsAddForm.data.formName=e),placeholder:"请输入",style:{width:"210px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),footer:f((()=>[g(o,{type:"primary",onClick:te},{default:f((()=>[L])),_:1}),g(o,{onClick:ae},{default:f((()=>[J])),_:1})])),_:1},8,["modelValue","show"]),g(F(r),{"onUpdate:modelValue":a[7]||(a[7]=e=>F(Y).showToastDialog.show=!1),show:F(Y).showToastDialog.show,selectionData:F(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"formName",onSureAction:Z},null,8,["show","selectionData","showToastDialogContent"]),g(c,{"onUpdate:modelValue":a[8]||(a[8]=e=>F(Y).showRelatedfFlow.show=!1),show:F(Y).showRelatedfFlow.show,selectionData:F(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName"},null,8,["show","selectionData","showToastDialogContent"]),g(F(r),{"onUpdate:modelValue":a[9]||(a[9]=e=>F(Y).showDeleteForm.show=!1),show:F(Y).showDeleteForm.show,selectionData:F(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName",onSureAction:a[10]||(a[10]=e=>F(Y).showDeleteForm.show=!1)},null,8,["show","selectionData","showToastDialogContent"]),g(m,{modelValue:k.value,"onUpdate:modelValue":a[11]||(a[11]=e=>k.value=e),modulesName:"system_form_management",detailParams:j.value},null,8,["modelValue","detailParams"])])}}},[["__scopeId","data-v-0ca073b5"]]);export{q as default};
