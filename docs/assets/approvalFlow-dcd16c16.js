import{c as e}from"./JyTabs-8b1e13a5.js";import{c as a}from"./documentsDetails-c9f80313.js";import{R as t}from"./RecordSealToReview-dca792f4.js";import{g as l,o,P as s,Q as r,n,a9 as d,H as i}from"./chunk-vform-ec6574e8.js";import p from"./index-c9b91a43.js";import{a as c,at as u,e as m,b as f,a9 as b,aQ as v,W as g,X as h,ap as y,ai as I,aj as k,ak as w,ad as _,u as S,Y as T,ah as A,af as x,am as j,a3 as D,aE as C,an as V,ao as B,ba as M,bb as L,d as N}from"./chunk-ant-design-vue-a1de3c57.js";import{_ as F}from"./ketanchude-a94e84bc.js";import{b as O,l as z,_ as U,a as R}from"./index-09e205e2.js";import{M as W}from"./ModelApi-4ad998aa.js";import{R as J}from"./request-util-82325ac7.js";import{A as P}from"./ApproverApi-6851d92a.js";import{E as q}from"./chunk-element-plus-636450f3.js";import{J as E}from"./JyTable-8de6d2e9.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";import"./table-949645d5.js";import"./sangedian-6ea00dcf.js";/* empty css                                                                         */import"./portion-e822e6a3.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";import"./index-bd96bee1.js";import"./home-back-d5b479fa.js";import"./logo-ad08cc7e.js";import"./Layout-58d8fae6.js";import"./searchForm-bc074dfc.js";import"./KDocumentTypeDialog-21febff4.js";import"./pagination-35741a8b.js";import"./batch-21ddcba8.js";class ${static findPage(e){return J.getAndLoadData("/ruTask/page",e)}static findList(e){return J.getAndLoadData("/ruTask/list",e)}static add(e){return J.post("/ruTask/add",e)}static edit(e){return J.post("/ruTask/edit",e)}static delete(e){return J.post("/ruTask/delete",e)}static detail(e){return J.getAndLoadData("/ruTask/detail",e)}static preList(e){return J.getAndLoadData("/ruTask/pre",e)}}class K{static detailByTaskId(e){return J.getAndLoadData("/nodeAttr/detailByTaskId",e)}}const G=e=>(M("data-v-4f77a3f6"),e=e(),L(),e),H={class:"top-container"},Q={key:0,class:"top-container"},X={class:"approval-footer"},Y=V("同意"),Z=V("不同意"),ee=V("转交"),ae={class:"contentBoxes"},te={class:"ap-box-contBox"},le=[G((()=>T("img",{class:"ap-box-contBox-icon-img",src:F,alt:""},null,-1)))],oe={class:"select-box-contBox"},se={key:0,class:"contentBoxes"},re={class:"ap-box-contBox"},ne=[G((()=>T("img",{class:"ap-box-contBox-icon-img",src:F,alt:""},null,-1)))],de={class:"footer-btns"},ie=l({props:{show:{type:Boolean,default:!1},title:{type:String,default:""},params:{type:Object,default:()=>({})}},emits:["update:show","on-confirm","on-cancel"],setup(e,{emit:a}){const t=e,{toUgroup:l}=O(),{backApprovalTypeDatas:i}=z(),M=c(!1),L=c("first"),N=c([{name:"用印详情",value:"first"},{name:"审批流程",value:"second"},{name:"操作记录",value:"third"}]),F=c(null),R=c(!1);c(0);const J=c(null),E=c(null),G=c([]),ie=c([]),pe=c({height:"calc(100% - 270px)",overflow:"hidden"}),ce=c(""),ue=u({searchSelected:[],carbonSelected:[],approverSelected:[],nextApproverSelected:[],form:{remark:"同意",carbon:!1,suggest:"1",nextApprover:"",nextApproverIds:[],addSignMode:[2,3].includes(t.params.approvalMode)?3:4===t.params.approvalMode?4:3,destTaskId:"",backType:"",adminId:"",approver:""},rules:{suggest:[{required:!0,message:"请选择审批选项",trigger:"blur"}],nextApprover:[{required:!0,message:"请选择下一步审批人"}]}}),me=e=>{a("on-cancel",!1)},fe=m({get:()=>t.show,set(e){a("update:show",e)}}),be=()=>{E.value.disableWidgets(t.params.disableWidgets),E.value.hideWidgets(t.params.hideWidgets),E.value.setFormData(t.params.formData)},ve=()=>{F.value.validate((e=>{if(e){R.value=!0;const e=d;let a={},l={};const o=t.params.formData,s=c(null);E.value.getFormData().then((async n=>{s.value=n;for(const t in s.value){e.indexOf(t)>-1?a={...a,[t]:n[t]?n[t]:o[t]}:l={...l,[t]:o[t]}}const d=await r.formQuery({formMessageId:o.formMessageId}),i=await r.queryIdByGunsId({gunsSysId:t.params.instanceId});await r.editForm({formMessageId:o.formMessageId,formVersionId:o.formVersionId,flowVersionId:o.flowVersionId,flowMessageId:o.flowMessageId,applyTypeId:d.data.applyTypeId,sealUseTypeId:d.data.sealUseTypeId,gunsSysId:t.params.instanceId,sealUseApplyId:i.data,customApplyField:"{}"===JSON.stringify(l)?null:l,...a}),"1"===ue.form.suggest?he({...a,formMessageId:o.formMessageId,formVersionId:o.formVersionId,flowVersionId:o.flowVersionId,flowMessageId:o.flowMessageId}):"2"===ue.form.suggest?ge():"3"===ue.form.suggest?Ie():"4"===ue.form.suggest?ye():"5"===ue.form.suggest?ke():ue.form.suggest}))}}))},ge=e=>{const l={instanceId:t.params.instanceId,modelId:t.params.modelId,formData:t.params.formData,definitionId:t.params.definitionId,remark:ue.form.remark,suggest:2};P.reject(l).then((e=>{"00000"===e.code&&(q.success("提交成功"),a("on-confirm")),R.value=!1})).catch((()=>{R.value=!1}))},he=e=>{const l={instanceId:t.params.instanceId,modelId:t.params.modelId,formData:e,definitionId:t.params.definitionId,remark:ue.form.remark,suggest:1};P.agree(l).then((e=>{"00000"===e.code&&(q.success("提交成功！"),a("on-confirm",e)),R.value=!1})).catch((()=>{R.value=!1}))},ye=()=>{const e=[];ue.approverSelected.forEach((a=>{e.push(a.value)}));const l={taskId:t.params.taskId,assigneeList:e,addSignMode:ue.form.addSignMode,whisper:ue.form.remark};P.addSign(l).then((e=>{"00000"===e.code&&(q.success("加签成功！"),a("on-confirm",e)),R.value=!1})).catch((()=>{R.value=!1}))},Ie=()=>{const e=[];ue.approverSelected.forEach((a=>{e.push(a.value)}));const l={taskId:t.params.taskId,assigneeList:e,whisper:ue.form.remark};P.turn(l).then((e=>{"00000"===e.code&&(q.success("转交成功！"),a("on-confirm",e)),R.value=!1})).catch((()=>{R.value=!1}))},ke=async()=>{try{const e={instanceId:t.params.instanceId,modelId:t.params.modelId,definitionId:t.params.definitionId,taskId:t.params.taskId,suggest:1,remark:ue.form.remark};P.consultSubmit(e).then((e=>{R.value=!1,Se()})).catch((()=>{R.value=!1}))}catch(e){R.value=!1}},we=async()=>{try{const e={taskId:t.params.taskId,instanceId:t.params.instanceId},a=await K.detailByTaskId(e),o=a.allowBackType,s=a.backApprovalType;if(s){const e=l(s);i.forEach((a=>{e.includes(a.value)&&G.value.push(a)}))}if(2===o){const a=await $.preList(e);a&&a.length>0&&(ie.value=[],a.forEach((e=>{ie.value.push({label:e.approverWrapper,value:e.taskId,popovers:[{title:e.nodeName,content:`任务类型:${e.taskTypeWrapper}`},{content:`接收时间:${e.createTime}`},{content:`审批时间:${e.updateTime}`}]})})))}}finally{}},_e=e=>{ce.value=e,"carbon"===e?ue.searchSelected=ue.carbonSelected.map((e=>({id:e.value,name:e.label,type:"user"}))):"approver"===e?ue.searchSelected=ue.approverSelected.map((e=>({id:e.value,name:e.label,type:"user"}))):"nextApprover"===e&&(ue.searchSelected=ue.nextApproverSelected.map((e=>({id:e.value,name:e.label,type:"user"})))),M.value=!0},Se=e=>{a("on-cancel",e),fe.value=!1},Te=e=>{"1"===e?(ue.form.remark="同意",ue.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}],nextApprover:[{required:!0,message:"请选择下一步审批人"}]}):"2"===e?(ue.form.remark="不同意",ue.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}]}):ue.form.remark="请审批","3"!==e&&"4"!==e&&"5"!==e||(ue.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}],approver:[{required:!0,message:"请选择审批人",trigger:"change"}]}),"6"===e&&we()},Ae=e=>{if("approver"===ce.value)ue.approverSelected=e.map((e=>({label:e.name,value:e.id}))),ue.form.approver=e;else if("carbon"===ce.value)ue.carbonSelected=e.map((e=>({label:e.name,value:e.id})));else if("nextApprover"===ce.value){ue.nextApproverSelected=e.map((e=>({label:e.name,value:e.id})));const a=[];e.forEach((e=>{a.push(e.name),ue.form.nextApproverIds.push(e.id)})),ue.form.nextApprover=a.join(",")}},xe=e=>{ue.searchSelected=je(ue.searchSelected,e)},je=(e,a)=>Array.isArray(e)&&0!==e.length?e.filter((e=>e.id!==a)):e,De=c(null);return f((()=>t.show),(()=>{t.show&&(W.predictionDesign({formData:t.params.formData,instanceId:t.params.instanceId,definitionId:t.params.definitionId}).then((e=>{De.value=e.data})),(async()=>{await $.findList({instanceId:t.params.instanceId})})())})),b((()=>{})),(e,a)=>{const l=p,r=v("el-scrollbar"),d=v("el-radio"),i=v("el-radio-group"),c=v("el-form-item"),u=v("el-option"),m=v("el-select"),f=v("el-checkbox"),b=v("el-input"),O=v("el-form"),z=v("el-button"),W=n;return g(),h(D,null,[y(W,{"onUpdate:show":a[12]||(a[12]=e=>fe.value=e),show:S(fe),"destroy-on-close":"",title:e.$t(t.title),oneBtn:!1,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),height:650,width:930,footer:!1,onClose:me,noScroll:!1},{noScroll:I((()=>[y(o,{label:N.value,active:L.value,"onUpdate:active":a[0]||(a[0]=e=>L.value=e),border:!1},null,8,["label","active"]),k(y(r,{class:_(["el-scrollbar-nomal",{"el-scrollbar-add":"3"===S(ue).form.suggest||"4"===S(ue).form.suggest||"5"===S(ue).form.suggest}]),always:""},{default:I((()=>[y(l,{mode:"render",formJson:t.params.formJson,formData:t.params.formData,ref_key:"formInformation",ref:E,onOnLoaded:be},null,8,["formJson","formData"])])),_:1},8,["class"]),[[w,"first"===L.value]]),k(T("div",H,[De.value?(g(),A(U,x({key:0,ref_key:"flowDesign",ref:J},{readable:!0,mapable:!1,scroll:!0,top:"20"},{node:De.value,wrapStyle:pe.value}),null,16,["node","wrapStyle"])):j("",!0)],512),[[w,"second"===L.value]]),"third"===L.value?(g(),h("div",Q)):j("",!0),T("div",X,[y(O,{model:S(ue).form,rules:S(ue).rules,ref_key:"vFormRef",ref:F,"label-width":"110px"},{default:I((()=>[y(c,{label:"审批选项",prop:"suggest"},{default:I((()=>[y(i,{onChange:Te,modelValue:S(ue).form.suggest,"onUpdate:modelValue":a[1]||(a[1]=e=>S(ue).form.suggest=e)},{default:I((()=>[y(d,{label:"1"},{default:I((()=>[Y])),_:1}),y(d,{label:"2"},{default:I((()=>[Z])),_:1}),y(d,{label:"3"},{default:I((()=>[ee])),_:1}),(g(!0),h(D,null,C(t.params.buttons.filter((e=>["agree","reject"].includes(e.buttonCode))),(e=>(g(),A(d,{label:e.buttonCode,key:e.buttonCode},{default:I((()=>[V(B(e.buttonName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"5"===S(ue).form.suggest||"4"===S(ue).form.suggest||"3"===S(ue).form.suggest?(g(),A(c,{key:0,label:"审批人",prop:"approver"},{default:I((()=>[T("div",ae,[T("div",te,[y(m,{modelValue:S(ue).approverSelected,"onUpdate:modelValue":a[2]||(a[2]=e=>S(ue).approverSelected=e),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":6,placeholder:"+请选择审批人",style:{width:"100%"},"popper-class":"hidePoper",class:_({hasContent:S(ue).approverSelected.length}),onClick:a[3]||(a[3]=e=>_e("approver"))},{default:I((()=>[(g(!0),h(D,null,C(S(ue).approverSelected,(e=>(g(),A(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","class"]),T("div",{class:"ap-box-contBox-icon",onClick:a[4]||(a[4]=e=>_e("approver"))},le)])])])),_:1})):j("",!0),ie.value.length>0?(g(),A(c,{key:1,label:"被退回人",name:"destTaskId",rules:[{required:!0,message:"请选择人员!"}]},{default:I((()=>[y(i,{value:S(ue).form.destTaskId,"onUpdate:value":a[5]||(a[5]=e=>S(ue).form.destTaskId=e),class:"w-fill",size:e.size},{default:I((()=>[(g(!0),h(D,null,C(ie.value,((e,a)=>(g(),A(d,{key:a,value:e.value},{default:I((()=>[T("span",null,B(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","size"])])),_:1})):j("",!0),"6"===S(ue).form.suggest?(g(),A(c,{key:2,label:"退回后发起审批",prop:"approver"},{default:I((()=>[y(m,{style:{width:"264px"},modelValue:e.sate.form.adminId,"onUpdate:modelValue":a[6]||(a[6]=a=>e.sate.form.adminId=a),filterable:"",onChange:e.changeAdmin},{default:I((()=>[(g(!0),h(D,null,C(G.value,((a,t)=>(g(),A(u,{key:t,label:a[e.labelName],value:a[e.valueName]},{default:I((()=>[V(B(a[e.labelName]),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})):j("",!0),y(c,{label:"添加抄送",prop:"carbon"},{default:I((()=>[T("div",oe,[y(f,{modelValue:S(ue).form.carbon,"onUpdate:modelValue":a[7]||(a[7]=e=>S(ue).form.carbon=e),style:{"margin-right":"12px"},size:"mini"},null,8,["modelValue"]),S(ue).form.carbon?(g(),h("div",se,[T("div",re,[y(m,{modelValue:S(ue).carbonSelected,"onUpdate:modelValue":a[8]||(a[8]=e=>S(ue).carbonSelected=e),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":6,placeholder:"+请选择抄送人",style:{width:"100%"},"popper-class":"hidePoper",class:_({hasContent:S(ue).carbonSelected.length}),onClick:a[9]||(a[9]=e=>_e("carbon")),onRemoveTag:xe},{default:I((()=>[(g(!0),h(D,null,C(S(ue).carbonSelected,(e=>(g(),A(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","class"]),T("div",{class:"ap-box-contBox-icon",onClick:a[10]||(a[10]=e=>_e("carbon"))},ne)])])):j("",!0)])])),_:1}),y(c,{label:"审批意见",prop:"remark"},{default:I((()=>[y(b,{modelValue:S(ue).form.remark,"onUpdate:modelValue":a[11]||(a[11]=e=>S(ue).form.remark=e),maxlength:"100","show-word-limit":"",type:"textarea",placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),T("div",de,[y(z,{type:"primary",loading:R.value,onClick:ve},{default:I((()=>[V(B(e.$t("t-zgj-operation.submit")),1)])),_:1},8,["loading"]),y(z,{onClick:Se},{default:I((()=>[V(B(e.$t("t-zgj-operation.cancel")),1)])),_:1})])])])),_:1},8,["show","title","confirmText","concelText"]),M.value?(g(),A(S(s),{key:0,show:M.value,"onUpdate:show":a[13]||(a[13]=e=>M.value=e),tabsShow:["user"],"onUpdate:searchSelected":Ae,searchSelected:S(ue).searchSelected},null,8,["show","searchSelected"])):j("",!0)],64)}}},[["__scopeId","data-v-4f77a3f6"]]),pe=[{prop:"instanceTitle",label:"流程名称",sortable:!0,"min-width":190},{prop:"subTypeName",label:"流程类型",sortable:!0,"min-width":150},{prop:"applicantWrapper",label:"申请人",sortable:!0,"min-width":150},{prop:"orgName",label:"申请部门",sortable:!0,"min-width":150},{prop:"createTime",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":80,rankDisplayData:[{name:"t-zgj-Approval",label:"审批"}]}],ce=[{prop:"instanceTitle",label:"流程名称",sortable:!0,"min-width":190},{prop:"subTypeName",label:"流程类型",sortable:!0,"min-width":150},{prop:"applicantWrapper",label:"申请人",sortable:!0,"min-width":150},{prop:"orgName",label:"申请部门",sortable:!0,"min-width":150},{prop:"createTime",label:"申请时间",sortable:!0,"min-width":180},{prop:"updateTime",label:"审批时间",sortable:!0,"min-width":180},{prop:"taskStatusWrapper",label:"审批状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":80,rankDisplayData:[{name:"t-zgj-F_WORKFLOW_RE_APPROVAL",label:"重批"}]}];class ue{static findPage(e){return J.getAndLoadData("/nodeButton/page",e)}static findList(e){return J.getAndLoadData("/nodeButton/list",e)}static add(e){return J.post("/nodeButton/add",e)}static edit(e){return J.post("/nodeButton/edit",e)}static delete(e){return J.post("/nodeButton/delete",e)}static detail(e){return J.getAndLoadData("/nodeButton/detail",e)}}class me{static findPage(e){return J.getAndLoadData("/ruInstance/page",e)}static add(e){return J.post("/ruInstance/add",e)}static edit(e){return J.post("/ruInstance/edit",e)}static delete(e){return J.post("/ruInstance/delete",e)}static detail(e){return J.getAndLoadData("/ruInstance/detail",e)}}const fe={class:"approvalFlow-approvalFlow"},be={class:"title"},ve={class:"title-more"},ge={class:"title-more-add"},he={class:"ap-box"},ye=l({setup(l){const o=i(),s=c({show:!1,title:"t-zgj-Approval",formJson:t}),r=c(null),n=c(""),d=u({searchSelected:[],approvalModes:{1:"审批中",2:"会签中",3:"会签中",4:"或签中"},params:{formJson:null,formData:{},taskId:"",instanceId:"",approvalMode:"",modelName:"",modelId:"",nodeId:"",definitionId:"",buttons:[],detailData:[],basicInformation:{title:"基本信息",show:!0,data:[{label:"单据名称",value:"上海建筑材料清单合同明细"},{label:"文件类型：",value:"1份"},{label:"金额：",value:"110,88,00"},{label:"申请事由：",value:"20次"},{label:"印章名称：",value:"销售合同"},{label:"常规盖章：",value:"20次"},{label:"盖章码：",value:"554778"},{label:"申请人员：",value:"20次"},{label:"申请时间：",value:"2022-11-12 19:00:12"},{label:"所属部门：",value:"20次"}],labelStyle:{width:"8rem"}}},componentsTabs:{data:[{label:"待审批",name:"todo"},{label:"已审批",name:"done"}],activeName:"todo"},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"approval-process"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"t-zgj-query",label:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"t-zgj-reset",label:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:pe,data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:l})=>{if("instanceTitle"===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}},loading:!1},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[]}}),p=c(null),m=e=>{s.value.show=!1},f=e=>{s.value.show=!1,p.value.reloadData()},b=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"单据名称"}},{id:"picker",label:"申请时间",type:"picker",pickerType:"date",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"applyOrganId",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+选择部门"}},{id:"applyTypeId",label:"流程类型",type:"select",options:[{label:"用印申请",value:"1"},{label:"刻章申请",value:"2"},{label:"销毁申请",value:"3"},{label:"停用申请",value:"4"},{label:"变更申请",value:"5"},{label:"启用申请",value:"6"}],defaultAttribute:{multiple:!1}},{id:"relatedCompanyId",label:"往来单位",type:"dialog",defaultAttribute:{type:"JyRelatedCompany",placeholder:"+往来单位"},options:[],values:[]},{id:"sealIds",label:"印章名称",type:"dialog",defaultAttribute:{type:"JySelectSeal",multiple:!1,placeholder:"+选择印章"},options:[],values:[]}],k=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"单据名称"}},{id:"picker",label:"申请时间",type:"picker",pickerType:"date",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"approvalStatus",label:"审批状态",type:"select",options:[{label:"未审批",value:"1"},{label:"已审批",value:"2"}],defaultAttribute:{multiple:!1}},{id:"applyOrganId",label:"申请部门",type:"derivable",defaultAttribute:{type:"organ",placeholder:"+选择部门"},options:[],values:[]},{id:"applyTypeId",label:"流程类型",type:"select",options:[{label:"用印申请",value:"1"},{label:"刻章申请",value:"2"},{label:"销毁申请",value:"3"},{label:"停用申请",value:"4"},{label:"变更申请",value:"5"},{label:"启用申请",value:"6"}],defaultAttribute:{multiple:!1}},{id:"relatedCompanyId",label:"往来单位",type:"dialog",defaultAttribute:{type:"JyRelatedCompany",placeholder:"+往来单位"},options:[],values:[]},{id:"sealIds",label:"印章名称",type:"dialog",defaultAttribute:{type:"JySelectSeal",multiple:!1,placeholder:"+选择印章"},options:[],values:[]}];function w(e){d.componentsTabs.activeName=e,"todo"===e?(d.componentsTable.header=pe,d.componentsTable.data=[]):"done"===e&&(d.componentsTable.header=ce,d.componentsTable.data=[]),"todo"===e?d.componentsSearchForm.data=b:"done"===e&&(d.componentsSearchForm.data=k),p.value.reloadData()}function _(){d.componentsDocumentsDetails.show=!1}function A(e,a,t,l){s.value.title=t.name,"t-zgj-Approval"===t.name&&(d.params.instanceId=a.instanceId,d.params.taskId=a.taskId,d.params.approvalMode=a.approvalMode,d.params.instanceStatus=a.instanceStatus,d.params.approvalMode=a.approvalMode,x(a,"t-zgj-Approval")),"t-zgj-F_WORKFLOW_RE_APPROVAL"===t.name&&(d.params.instanceId=a.instanceId,d.params.taskId=a.taskId,d.params.approvalMode=a.approvalMode,d.params.instanceStatus=a.instanceStatus,d.params.approvalMode=a.approvalMode,x(a,"t-zgj-F_WORKFLOW_RE_APPROVAL"))}d.componentsSearchForm.data=b;const x=(e,a)=>{const t={instanceId:e.instanceId};me.detail(t).then((t=>{d.params.formData=JSON.parse(t.formJson),d.params.modelName=t.modelName,d.params.modelId=t.modelId,d.params.nodeId=t.nodeId,d.params.definitionId=t.definitionId,n.value=d.params.formData.formVersionId,1===d.params.instanceStatus&&D(),j(e,a),C(t.privileges)})).catch((()=>{}))},j=(e,a)=>{const t={modelId:e.modelId,definitionId:e.definitionId};R.queryByGunsId(t).then((e=>{d.params.formJson=JSON.parse(e.data),s.value.show=!0,s.value.title=a}))},D=async()=>{const e={modelId:d.params.modelId,definitionId:d.params.definitionId,nodeId:d.params.nodeId},a=await ue.findList(e);a&&(d.params.buttons=a.filter((e=>e.checked)))},C=e=>{const a=[];e.forEach((e=>{e.readable&&a.push(e.fieldKey)}));const t=[];e.forEach((e=>{e.displayable&&t.push(e.fieldKey)})),d.params.disableWidgets=a,d.params.hideWidgets=t},M=(e,a,t,l)=>{"instanceTitle"===a.property&&(d.componentsDocumentsDetails.show=!0)};return N((()=>{o.getMoneyType()})),(t,l)=>{const o=v("el-button");return g(),h("div",fe,[y(E,{url:`/queryTask/${S(d).componentsTabs.activeName}`,ref_key:"table",ref:p,hasTabs:"",componentsSearchForm:S(d).componentsSearchForm,componentsTableHeader:S(d).componentsTable.header,componentsBatch:S(d).componentsBatch,tableClick:"instanceTitle",onCellClick:M,onCustomClick:A,handleApprovalStatus:!0},{title:I((()=>[T("div",be,[T("div",null,B(t.$t("t-zgj-workflow.ApprovalProcess")),1),T("div",ve,[T("div",ge,[y(o,{type:"primary"},{default:I((()=>[V(B(t.$t("t-zgj-F_SEAL_INFO_EXPORT_STANDING_BOOK")),1)])),_:1})])])])])),tabs:I((()=>[T("div",null,[y(e,{activeName:S(d).componentsTabs.activeName,data:S(d).componentsTabs.data,onTabChange:w},null,8,["activeName","data"])])])),_:1},8,["url","componentsSearchForm","componentsTableHeader","componentsBatch"]),T("div",he,[y(a,{show:S(d).componentsDocumentsDetails.show,visible:S(d).componentsDocumentsDetails.visible,onClickClose:_},null,8,["show","visible"])]),y(ie,{ref_key:"drawer",ref:r,show:s.value.show,"onUpdate:show":l[0]||(l[0]=e=>t.show=e),params:S(d).params,title:s.value.title,onOnCancel:m,onOnConfirm:f},null,8,["show","params","title"])])}}},[["__scopeId","data-v-8d5de101"]]);export{ye as default};
