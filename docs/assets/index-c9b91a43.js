import{H as e,V as t,J as a,K as o,M as r,N as i,O as l}from"./chunk-vform-ec6574e8.js";import{a as s}from"./index-bd96bee1.js";import{E as n}from"./chunk-element-plus-636450f3.js";import{a as u,e as d,d as m,W as p,X as c,ah as f,u as g,n as F}from"./chunk-ant-design-vue-a1de3c57.js";const y={languageMenu:!1,externalLink:!1,formTemplates:!0,widgetNameReadonly:!1,eventCollapse:!0,clearDesignerButton:!1,previewFormButton:!0,importJsonButton:!0,exportJsonButton:!0,exportCodeButton:!1,generateSFCButton:!0,toolbarMaxWidth:420,toolbarMinWidth:300,presetCssCode:"",resetFormJson:!1,productName:"",productTitle:"",logoHeader:!1},v={name:"JyVform"},h=Object.assign(v,{props:{mode:{type:String,default:""},designerConfig:{type:Object,default:()=>y},formJson:{type:Object,default:()=>{}},formData:{type:Object,default:()=>{}},optionData:{type:Object,default:()=>{}},hideModuleList:{type:Array,default:()=>[]},prefabricationFieldList:{type:Array,default:()=>[]},userType:{type:String,default:""}},emits:["formChange","appendButtonClick","buttonClick","on-loaded"],setup(v,{expose:h,emit:b}){const L=v,D=e(),J=u(null),C=u([]),T=u([]),j=u(0),k=d((()=>D.fileTypeList||[])),W=e=>{b("buttonClick",e)},B=e=>{b("appendButtonClick",e)},w=(e,t,a,o,r,i)=>{b("formChange",{fieldName:e,newValue:t,oldValue:a,formModel:o,subFormName:r,subFormRowIndex:i})},M=async e=>{try{const t=await s.formColumnBasic({applyTypeId:e}),a=[...o,...r,...i,...l].map((e=>e.type)).filter((e=>![...t.data.columSys,...t.data.columBiz].includes(e)));C.value=a,j.value++}catch(t){n.error(t)}},O=async e=>{try{const t=await s.getFormTemplate({applyTypeId:e});T.value=t.data.map((e=>JSON.parse(e.formTemplateInfo)));const a=J.value.getFieldWidgets();F((()=>{L.mode||a.length||J.value.setFormJson(JSON.parse(JSON.stringify(T.value[0].jsonUrl)))}))}catch(t){n.error(t)}};return m((()=>{b("on-loaded")})),h({getFormJson:()=>J.value.getFormJson()||"",clearDesigner:()=>{J.value.clearDesigner()},previewForm:()=>{J.value.previewForm()},getFieldWidgets:()=>J.value.getFieldWidgets(),exportJson:()=>{J.value.exportJson()},importJson:e=>{J.value.importJson(e)},getWidgetRef:e=>J.value.getWidgetRef(e),buildFormDataSchema:()=>J.value.buildFormDataSchema(),changeLanguage:()=>{J.value.changeLanguage()},setFormJson:e=>{J.value.setFormJson(e)},validateForm:async()=>{let e=!1;return await J.value.validateForm((t=>{e=t})),e},getFormData:async(e=!0)=>{try{return J.value.getFormData(e)}catch(t){return Promise.reject(t)}},setFormData:e=>{J.value.setFormData(e)},setFieldValue:(e,t)=>{J.value.setFieldValue(e,t)},resetForm:()=>{J.value.resetForm()},setReadMode:()=>{J.value.setReadMode()},showDialog:()=>{J.value.showDialog()},setFormColumnBasic:M,setFormTemplate:O,initDesigner:e=>{M(e),O(e)},disableForm:()=>{J.value.disableForm()},getFieldValue:async e=>{try{return J.value.getFieldValue(e)}catch(t){return Promise.reject(t)}},reloadOptionData:async e=>{try{return J.value.reloadOptionData(e)}catch(t){return Promise.reject(t)}},hideWidgets:(e=null)=>{J.value.hideWidgets(e)},disableWidgets:(e=null)=>{J.value.disableWidgets(e)}}),(e,o)=>(p(),c("div",null,["render"===L.mode?(p(),f(g(t),{key:0,"form-json":L.formJson,"form-data":L.formData,optionData:L.optionData,ref_key:"vFormRef",ref:J,onFormChange:w,onAppendButtonClick:B,onButtonClick:W,fileTypeList:g(k),prefabricationFieldList:L.prefabricationFieldList},null,8,["form-json","form-data","optionData","fileTypeList","prefabricationFieldList"])):(p(),f(g(a),{ref_key:"vFormRef",ref:J,bannedWidgets:C.value,"designer-config":g(y),hideModuleList:v.hideModuleList,prefabricationFieldList:L.prefabricationFieldList,templateList:T.value,fileTypeList:g(k),userType:v.userType,key:j.value},null,8,["bannedWidgets","designer-config","hideModuleList","prefabricationFieldList","templateList","fileTypeList","userType"]))]))}});export{h as default};
