System.register(["./JyTabs-legacy-c8c76c45.js","./documentsDetails-legacy-8c032a4c.js","./RecordSealToReview-legacy-8ad20d94.js","./chunk-vform-legacy-f1b551df.js","./index-legacy-2e4f160d.js","./chunk-ant-design-vue-legacy-78f2abeb.js","./ketanchude-legacy-4abaf206.js","./index-legacy-dc05f884.js","./ModelApi-legacy-c0ef5047.js","./request-util-legacy-680a8f33.js","./ApproverApi-legacy-443f9787.js","./chunk-element-plus-legacy-3362d1f8.js","./JyTable-legacy-7e059877.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./cha-kong-legacy-1ebc7b7b.js","./table-legacy-0b33412c.js","./sangedian-legacy-75d81ddc.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-1381b1de.js","./portion-legacy-cfca188a.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-c3216d6b.js","./yuan-hui-legacy-0c1e3d03.js","./index-legacy-ed44ba95.js","./home-back-legacy-d9a8ace4.js","./logo-legacy-7450937f.js","./Layout-legacy-262a6687.js","./searchForm-legacy-04a651fb.js","./KDocumentTypeDialog-legacy-0ecc1f11.js","./pagination-legacy-4c7c1f23.js","./batch-legacy-ff825cb6.js"],(function(e,a){"use strict";var t,o,l,n,i,s,r,d,c,p,m,u,f,b,g,v,h,y,x,I,S,D,w,k,_,C,j,T,A,z,B,R,V,q,F,M,L,N,P,O,U,W,J,E,$,K,G=document.createElement("style");return G.textContent=".el-scrollbar-nomal[data-v-4f77a3f6]{height:calc(100% - 200px);padding:10px 24px 68px 0}.el-scrollbar-add[data-v-4f77a3f6]{height:calc(100% - 260px)}.el-form-item__content[data-v-4f77a3f6]{margin-bottom:12px}[data-v-4f77a3f6] .content-custom{padding:0}.top-container[data-v-4f77a3f6]{height:100%}.approval-footer[data-v-4f77a3f6]{border-radius:4px;position:absolute;bottom:0px;width:100%;min-height:220px;left:0;box-sizing:border-box;padding:20px 24px 12px;background:#ffffff;box-shadow:0 -9px 22px rgba(0,0,0,.03);overflow:auto;z-index:8}.approval-footer .footer-approver[data-v-4f77a3f6]{font:size 14px;color:rgba(0,0,0,.45);margin-right:16px}.approval-footer .footer-btns[data-v-4f77a3f6]{text-align:center;padding-top:6px}.hidePoper{display:none}.approval-footer .el-divider{margin:8px 0 16px}.approval-footer .hasContent .el-input__wrapper,.approval-footer .hasContent .el-input__inner{-webkit-text-fill-color:#000}.approval-footer .contentBoxes{display:flex;justify-content:space-between;width:100%}.approval-footer .contentBoxes .xian{color:rgba(0,0,0,.45);font-size:12px}.approval-footer .ap-box-contBox{width:100%;position:relative;display:flex;align-items:center}.approval-footer .ap-box-contBox .el-input__suffix{display:none}.approval-footer .ap-box-contBox .el-select .el-input.is-disabled .el-input__wrapper,.approval-footer .ap-box-contBox .el-select .el-input.is-disabled .el-input__inner{cursor:pointer}.approval-footer .ap-box-contBox .el-input.is-disabled .el-input__wrapper{background-color:#fff}.approval-footer .ap-box-contBox .ap-box-contBox-icon{position:absolute;right:.8rem;cursor:pointer;height:14px;display:flex;align-items:center}.approval-footer .ap-box-contBox .ap-box-contBox-icon .ap-box-contBox-icon-img{height:100%}.approval-footer .ap-box-contBox :deep .el-input__inner{padding-right:1.5rem;box-sizing:border-box}.el-range-editor.is-disabled input{background-color:transparent}.approvalFlow-approvalFlow[data-v-8d5de101]{margin:0%}.approvalFlow-approvalFlow .title[data-v-8d5de101]{display:flex;align-items:center;justify-content:space-between}.approvalFlow-approvalFlow .batch[data-v-8d5de101]{display:flex;align-items:center}.approvalFlow-approvalFlow .batch .batch-desc[data-v-8d5de101]{margin-right:.8571428571rem}.select-person[data-v-8d5de101]{display:flex;align-items:center}.select-person>span[data-v-8d5de101]{font-size:14px;font-weight:700;margin-right:20px}.select-person>div[data-v-8d5de101]{cursor:pointer}.components-documentsDetails[data-v-8d5de101]{margin:0%}.components-documentsDetails .ap-cont[data-v-8d5de101]{height:100%}.components-documentsDetails .ap-title[data-v-8d5de101]{width:100%;display:flex;align-items:center;justify-content:space-between}.components-documentsDetails .ap-title .title-name-span[data-v-8d5de101]{font-size:var(--jy-font-size-title-2)}.components-documentsDetails .ap-title .title-cion-img[data-v-8d5de101]{width:1rem;margin-right:1rem;cursor:pointer}.components-documentsDetails .ap-title .quanping[data-v-8d5de101]{width:1.2rem}.components-documentsDetails .ap-Tabs[data-v-8d5de101]{display:flex}.components-documentsDetails .ap-Tabs .ap-Tabs-cont[data-v-8d5de101]{flex-grow:1}.components-documentsDetails .ap-Tabs .ap-Tabs-sub[data-v-8d5de101]{width:5rem;margin-bottom:14px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;border-bottom:1px solid var(--jy-color-border-2)}.components-documentsDetails .ap-Tabs .ap-Tabs-sub .ap-Tabs-sub-icon[data-v-8d5de101]{margin-right:.5rem}.components-documentsDetails .ap-Tabs .ap-Tabs-sub .ap-Tabs-sub-text[data-v-8d5de101]{cursor:pointer;color:var(-color-text-2)}.components-documentsDetails .ap-cont-tabsCont[data-v-8d5de101]{width:calc(100% + 18px);height:calc(100% - 80px)}.components-documentsDetails .ap-cont-tabsCont .arco-scrollbar[data-v-8d5de101]{height:100%}.components-documentsDetails .ap-cont-tabsCont .scrollbar-div[data-v-8d5de101]{padding-right:18px;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title[data-v-8d5de101]{border-bottom:1px solid var(--jy-color-border-2);padding:0rem 0 0rem .8rem;box-sizing:border-box;background:url(../../assets/svg/shuxian-after.svg) no-repeat left center;display:flex;justify-content:space-between;align-items:center;height:2.3rem}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-label[data-v-8d5de101]{font-size:var(--jy-font-size-title-1);font-weight:var(--jy-font-weight-400)}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-xiazai[data-v-8d5de101]{display:flex;align-items:center}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-xiazai .ap-cont-box-title-xiazai-icon[data-v-8d5de101]{margin-right:.5rem}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-xiazai .ap-cont-box-title-xiazai-text[data-v-8d5de101]{color:var(--jy-color-text-2)}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-but .ap-cont-box-title-but-box[data-v-8d5de101]{display:flex;align-items:center}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-title .ap-cont-box-title-but .ap-cont-box-title-but-icon[data-v-8d5de101]{width:.8rem;margin-right:.2rem}.components-documentsDetails .ap-cont-tabsCont .ap-cont-box-details[data-v-8d5de101]{padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Printing .sealDetails-basic-information .sealDetails-basic-information-details[data-v-8d5de101]{display:flex;flex-flow:wrap;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Printing .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list[data-v-8d5de101]{display:flex;align-items:center;width:50%;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Printing .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-label[data-v-8d5de101]{width:4.5rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-documentsDetails .ap-cont-tabsCont .Details-of-Printing .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-value[data-v-8d5de101]{padding:0rem 0 0rem .5rem;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Particulars-of-Seal .sealDetails-basic-information .sealDetails-basic-information-details[data-v-8d5de101]{display:flex;flex-flow:wrap;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Particulars-of-Seal .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list[data-v-8d5de101]{display:flex;align-items:center;width:50%;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Particulars-of-Seal .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-label[data-v-8d5de101]{width:7rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-documentsDetails .ap-cont-tabsCont .Particulars-of-Seal .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-value[data-v-8d5de101]{padding:0rem 0 0rem .5rem;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Document .sealDetails-basic-information .sealDetails-basic-information-details[data-v-8d5de101]{display:flex;flex-flow:wrap;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Document .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list[data-v-8d5de101]{display:flex;align-items:center;width:50%;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Details-of-Document .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-label[data-v-8d5de101]{width:7rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-documentsDetails .ap-cont-tabsCont .Details-of-Document .sealDetails-basic-information .sealDetails-basic-information-details .sealDetails-basic-information-list .sealDetails-basic-information-list-value[data-v-8d5de101]{padding:0rem 0 0rem .5rem;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .ap-cont-ma[data-v-8d5de101]{height:3rem;display:flex;align-items:center}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .ap-cont-ma .ap-cont-ma-text[data-v-8d5de101]{color:var(--jy-color-text-3)}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .ap-cont-ma .ap-cont-ma-value[data-v-8d5de101]{color:var(--jy-primary-6);font-size:var(--jy-font-size-title-2)}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-list[data-v-8d5de101]{display:flex;align-items:center;justify-content:space-between;height:2.5rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-list .SealInformation-details-list-cont[data-v-8d5de101]{display:flex;align-items:center}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-list .SealInformation-details-list-cont .SealInformation-details-list-cont-icon[data-v-8d5de101]{display:flex;align-items:center;margin-right:.5rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-list .SealInformation-details-list-cont .SealInformation-details-list-cont-val[data-v-8d5de101]{display:flex;align-items:center}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-list .SealInformation-details-list-cont .SealInformation-details-list-cont-val .iconPathValue[data-v-8d5de101]{margin-right:.5rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-title[data-v-8d5de101]{display:flex;align-items:center;height:2.5rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-title .SealInformation-details-image-title-icon[data-v-8d5de101]{display:flex;align-items:center;margin-right:.5rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont[data-v-8d5de101]{display:flex;flex-flow:wrap}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list[data-v-8d5de101]{width:50%;display:flex;min-width:25rem;padding:.5rem 0;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-img[data-v-8d5de101]{position:relative;width:auto}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-img .SealInformation-details-image-cont-list-img-icon[data-v-8d5de101]{position:absolute;right:0%;top:0%;width:40%}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-img .SealInformation-details-image-cont-list-img-time[data-v-8d5de101]{position:absolute;bottom:0%;text-align:center;width:100%;background-color:var(--jy-color-fill-65);color:var(--jy-in-common-use-1);height:2rem;display:flex;align-items:center;justify-content:center}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont[data-v-8d5de101]{flex-grow:1;padding:0 .5rem;box-sizing:border-box;display:flex;align-content:space-between;flex-flow:wrap}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont .SealInformation-details-image-cont-list-cont-list[data-v-8d5de101]{width:100%;display:flex}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont .SealInformation-details-image-cont-list-cont-list .SealInformation-details-image-cont-list-cont-list-label[data-v-8d5de101]{width:4.5rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont .SealInformation-details-image-cont-list-cont-list .SealInformation-details-image-cont-list-cont-list-subValue[data-v-8d5de101]{display:flex;align-items:center;padding-left:.5rem;box-sizing:border-box}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont .SealInformation-details-image-cont-list-cont-list .SealInformation-details-image-cont-list-cont-list-subValue .SealInformation-details-image-cont-list-cont-list-subValue-icon[data-v-8d5de101]{margin-right:.2rem}.components-documentsDetails .ap-cont-tabsCont .Record-of-requisition .SealInformation .SealInformation-details-image .SealInformation-details-image-cont .SealInformation-details-image-cont-list .SealInformation-details-image-cont-list-cont .SealInformation-details-image-cont-list-cont-list .SealInformation-details-image-cont-list-cont-list-subValue .SealInformation-details-image-cont-list-cont-list-subValue-text[data-v-8d5de101]{color:var(--jy-danger-6)}\n",document.head.appendChild(G),{setters:[e=>{t=e.c},e=>{o=e.c},e=>{l=e.R},e=>{n=e.g,i=e.o,s=e.P,r=e.Q,d=e.n,c=e.a9,p=e.H},e=>{m=e.default},e=>{u=e.a,f=e.at,b=e.e,g=e.b,v=e.a9,h=e.aQ,y=e.W,x=e.X,I=e.ap,S=e.ai,D=e.aj,w=e.ak,k=e.ad,_=e.u,C=e.Y,j=e.ah,T=e.af,A=e.am,z=e.a3,B=e.aE,R=e.an,V=e.ao,q=e.ba,F=e.bb,M=e.d},e=>{L=e._},e=>{N=e.b,P=e.l,O=e._,U=e.a},e=>{W=e.M},e=>{J=e.R},e=>{E=e.A},e=>{$=e.E},e=>{K=e.J},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){class a{static findPage(e){return J.getAndLoadData("/ruTask/page",e)}static findList(e){return J.getAndLoadData("/ruTask/list",e)}static add(e){return J.post("/ruTask/add",e)}static edit(e){return J.post("/ruTask/edit",e)}static delete(e){return J.post("/ruTask/delete",e)}static detail(e){return J.getAndLoadData("/ruTask/detail",e)}static preList(e){return J.getAndLoadData("/ruTask/pre",e)}}class G{static detailByTaskId(e){return J.getAndLoadData("/nodeAttr/detailByTaskId",e)}}const H=e=>(q("data-v-4f77a3f6"),e=e(),F(),e),Q={class:"top-container"},X={key:0,class:"top-container"},Y={class:"approval-footer"},Z=R("同意"),ee=R("不同意"),ae=R("转交"),te={class:"contentBoxes"},oe={class:"ap-box-contBox"},le=[H((()=>C("img",{class:"ap-box-contBox-icon-img",src:L,alt:""},null,-1)))],ne={class:"select-box-contBox"},ie={key:0,class:"contentBoxes"},se={class:"ap-box-contBox"},re=[H((()=>C("img",{class:"ap-box-contBox-icon-img",src:L,alt:""},null,-1)))],de={class:"footer-btns"},ce={props:{show:{type:Boolean,default:!1},title:{type:String,default:""},params:{type:Object,default:()=>({})}},emits:["update:show","on-confirm","on-cancel"],setup(e,{emit:t}){const o=e,{toUgroup:l}=N(),{backApprovalTypeDatas:n}=P(),p=u(!1),q=u("first"),F=u([{name:"用印详情",value:"first"},{name:"审批流程",value:"second"},{name:"操作记录",value:"third"}]),M=u(null),L=u(!1);u(0);const U=u(null),J=u(null),K=u([]),H=u([]),ce=u({height:"calc(100% - 270px)",overflow:"hidden"}),pe=u(""),me=f({searchSelected:[],carbonSelected:[],approverSelected:[],nextApproverSelected:[],form:{remark:"同意",carbon:!1,suggest:"1",nextApprover:"",nextApproverIds:[],addSignMode:[2,3].includes(o.params.approvalMode)?3:4===o.params.approvalMode?4:3,destTaskId:"",backType:"",adminId:"",approver:""},rules:{suggest:[{required:!0,message:"请选择审批选项",trigger:"blur"}],nextApprover:[{required:!0,message:"请选择下一步审批人"}]}}),ue=e=>{t("on-cancel",!1)},fe=b({get:()=>o.show,set(e){t("update:show",e)}}),be=()=>{J.value.disableWidgets(o.params.disableWidgets),J.value.hideWidgets(o.params.hideWidgets),J.value.setFormData(o.params.formData)},ge=()=>{M.value.validate((e=>{if(e){L.value=!0;const e=c;let a={},t={};const l=o.params.formData,n=u(null);J.value.getFormData().then((async i=>{n.value=i;for(const o in n.value)e.indexOf(o)>-1?a={...a,[o]:i[o]?i[o]:l[o]}:t={...t,[o]:l[o]};const s=await r.formQuery({formMessageId:l.formMessageId}),d=await r.queryIdByGunsId({gunsSysId:o.params.instanceId});await r.editForm({formMessageId:l.formMessageId,formVersionId:l.formVersionId,flowVersionId:l.flowVersionId,flowMessageId:l.flowMessageId,applyTypeId:s.data.applyTypeId,sealUseTypeId:s.data.sealUseTypeId,gunsSysId:o.params.instanceId,sealUseApplyId:d.data,customApplyField:"{}"===JSON.stringify(t)?null:t,...a}),"1"===me.form.suggest?he({...a,formMessageId:l.formMessageId,formVersionId:l.formVersionId,flowVersionId:l.flowVersionId,flowMessageId:l.flowMessageId}):"2"===me.form.suggest?ve():"3"===me.form.suggest?xe():"4"===me.form.suggest?ye():"5"===me.form.suggest?Ie():me.form.suggest}))}}))},ve=e=>{const a={instanceId:o.params.instanceId,modelId:o.params.modelId,formData:o.params.formData,definitionId:o.params.definitionId,remark:me.form.remark,suggest:2};E.reject(a).then((e=>{"00000"===e.code&&($.success("提交成功"),t("on-confirm")),L.value=!1})).catch((()=>{L.value=!1}))},he=e=>{const a={instanceId:o.params.instanceId,modelId:o.params.modelId,formData:e,definitionId:o.params.definitionId,remark:me.form.remark,suggest:1};E.agree(a).then((e=>{"00000"===e.code&&($.success("提交成功！"),t("on-confirm",e)),L.value=!1})).catch((()=>{L.value=!1}))},ye=()=>{const e=[];me.approverSelected.forEach((a=>{e.push(a.value)}));const a={taskId:o.params.taskId,assigneeList:e,addSignMode:me.form.addSignMode,whisper:me.form.remark};E.addSign(a).then((e=>{"00000"===e.code&&($.success("加签成功！"),t("on-confirm",e)),L.value=!1})).catch((()=>{L.value=!1}))},xe=()=>{const e=[];me.approverSelected.forEach((a=>{e.push(a.value)}));const a={taskId:o.params.taskId,assigneeList:e,whisper:me.form.remark};E.turn(a).then((e=>{"00000"===e.code&&($.success("转交成功！"),t("on-confirm",e)),L.value=!1})).catch((()=>{L.value=!1}))},Ie=async()=>{try{const e={instanceId:o.params.instanceId,modelId:o.params.modelId,definitionId:o.params.definitionId,taskId:o.params.taskId,suggest:1,remark:me.form.remark};E.consultSubmit(e).then((e=>{L.value=!1,we()})).catch((()=>{L.value=!1}))}catch(e){L.value=!1}},Se=async()=>{try{const e={taskId:o.params.taskId,instanceId:o.params.instanceId},t=await G.detailByTaskId(e),i=t.allowBackType,s=t.backApprovalType;if(s){const e=l(s);n.forEach((a=>{e.includes(a.value)&&K.value.push(a)}))}if(2===i){const t=await a.preList(e);t&&t.length>0&&(H.value=[],t.forEach((e=>{H.value.push({label:e.approverWrapper,value:e.taskId,popovers:[{title:e.nodeName,content:`任务类型:${e.taskTypeWrapper}`},{content:`接收时间:${e.createTime}`},{content:`审批时间:${e.updateTime}`}]})})))}}finally{}},De=e=>{pe.value=e,"carbon"===e?me.searchSelected=me.carbonSelected.map((e=>({id:e.value,name:e.label,type:"user"}))):"approver"===e?me.searchSelected=me.approverSelected.map((e=>({id:e.value,name:e.label,type:"user"}))):"nextApprover"===e&&(me.searchSelected=me.nextApproverSelected.map((e=>({id:e.value,name:e.label,type:"user"})))),p.value=!0},we=e=>{t("on-cancel",e),fe.value=!1},ke=e=>{"1"===e?(me.form.remark="同意",me.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}],nextApprover:[{required:!0,message:"请选择下一步审批人"}]}):"2"===e?(me.form.remark="不同意",me.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}]}):me.form.remark="请审批","3"!==e&&"4"!==e&&"5"!==e||(me.rules={suggest:[{required:!0,message:"请选择审批选项",trigger:"change"}],approver:[{required:!0,message:"请选择审批人",trigger:"change"}]}),"6"===e&&Se()},_e=e=>{if("approver"===pe.value)me.approverSelected=e.map((e=>({label:e.name,value:e.id}))),me.form.approver=e;else if("carbon"===pe.value)me.carbonSelected=e.map((e=>({label:e.name,value:e.id})));else if("nextApprover"===pe.value){me.nextApproverSelected=e.map((e=>({label:e.name,value:e.id})));const a=[];e.forEach((e=>{a.push(e.name),me.form.nextApproverIds.push(e.id)})),me.form.nextApprover=a.join(",")}},Ce=e=>{me.searchSelected=je(me.searchSelected,e)},je=(e,a)=>Array.isArray(e)&&0!==e.length?e.filter((e=>e.id!==a)):e,Te=u(null);return g((()=>o.show),(()=>{o.show&&(W.predictionDesign({formData:o.params.formData,instanceId:o.params.instanceId,definitionId:o.params.definitionId}).then((e=>{Te.value=e.data})),(async()=>{await a.findList({instanceId:o.params.instanceId})})())})),v((()=>{})),(e,a)=>{const t=m,l=h("el-scrollbar"),n=h("el-radio"),r=h("el-radio-group"),c=h("el-form-item"),u=h("el-option"),f=h("el-select"),b=h("el-checkbox"),g=h("el-input"),v=h("el-form"),N=h("el-button"),P=d;return y(),x(z,null,[I(P,{"onUpdate:show":a[12]||(a[12]=e=>fe.value=e),show:_(fe),"destroy-on-close":"",title:e.$t(o.title),oneBtn:!1,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),height:650,width:930,footer:!1,onClose:ue,noScroll:!1},{noScroll:S((()=>[I(i,{label:F.value,active:q.value,"onUpdate:active":a[0]||(a[0]=e=>q.value=e),border:!1},null,8,["label","active"]),D(I(l,{class:k(["el-scrollbar-nomal",{"el-scrollbar-add":"3"===_(me).form.suggest||"4"===_(me).form.suggest||"5"===_(me).form.suggest}]),always:""},{default:S((()=>[I(t,{mode:"render",formJson:o.params.formJson,formData:o.params.formData,ref_key:"formInformation",ref:J,onOnLoaded:be},null,8,["formJson","formData"])])),_:1},8,["class"]),[[w,"first"===q.value]]),D(C("div",Q,[Te.value?(y(),j(O,T({key:0,ref_key:"flowDesign",ref:U},{readable:!0,mapable:!1,scroll:!0,top:"20"},{node:Te.value,wrapStyle:ce.value}),null,16,["node","wrapStyle"])):A("",!0)],512),[[w,"second"===q.value]]),"third"===q.value?(y(),x("div",X)):A("",!0),C("div",Y,[I(v,{model:_(me).form,rules:_(me).rules,ref_key:"vFormRef",ref:M,"label-width":"110px"},{default:S((()=>[I(c,{label:"审批选项",prop:"suggest"},{default:S((()=>[I(r,{onChange:ke,modelValue:_(me).form.suggest,"onUpdate:modelValue":a[1]||(a[1]=e=>_(me).form.suggest=e)},{default:S((()=>[I(n,{label:"1"},{default:S((()=>[Z])),_:1}),I(n,{label:"2"},{default:S((()=>[ee])),_:1}),I(n,{label:"3"},{default:S((()=>[ae])),_:1}),(y(!0),x(z,null,B(o.params.buttons.filter((e=>["agree","reject"].includes(e.buttonCode))),(e=>(y(),j(n,{label:e.buttonCode,key:e.buttonCode},{default:S((()=>[R(V(e.buttonName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"5"===_(me).form.suggest||"4"===_(me).form.suggest||"3"===_(me).form.suggest?(y(),j(c,{key:0,label:"审批人",prop:"approver"},{default:S((()=>[C("div",te,[C("div",oe,[I(f,{modelValue:_(me).approverSelected,"onUpdate:modelValue":a[2]||(a[2]=e=>_(me).approverSelected=e),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":6,placeholder:"+请选择审批人",style:{width:"100%"},"popper-class":"hidePoper",class:k({hasContent:_(me).approverSelected.length}),onClick:a[3]||(a[3]=e=>De("approver"))},{default:S((()=>[(y(!0),x(z,null,B(_(me).approverSelected,(e=>(y(),j(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","class"]),C("div",{class:"ap-box-contBox-icon",onClick:a[4]||(a[4]=e=>De("approver"))},le)])])])),_:1})):A("",!0),H.value.length>0?(y(),j(c,{key:1,label:"被退回人",name:"destTaskId",rules:[{required:!0,message:"请选择人员!"}]},{default:S((()=>[I(r,{value:_(me).form.destTaskId,"onUpdate:value":a[5]||(a[5]=e=>_(me).form.destTaskId=e),class:"w-fill",size:e.size},{default:S((()=>[(y(!0),x(z,null,B(H.value,((e,a)=>(y(),j(n,{key:a,value:e.value},{default:S((()=>[C("span",null,V(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","size"])])),_:1})):A("",!0),"6"===_(me).form.suggest?(y(),j(c,{key:2,label:"退回后发起审批",prop:"approver"},{default:S((()=>[I(f,{style:{width:"264px"},modelValue:e.sate.form.adminId,"onUpdate:modelValue":a[6]||(a[6]=a=>e.sate.form.adminId=a),filterable:"",onChange:e.changeAdmin},{default:S((()=>[(y(!0),x(z,null,B(K.value,((a,t)=>(y(),j(u,{key:t,label:a[e.labelName],value:a[e.valueName]},{default:S((()=>[R(V(a[e.labelName]),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})):A("",!0),I(c,{label:"添加抄送",prop:"carbon"},{default:S((()=>[C("div",ne,[I(b,{modelValue:_(me).form.carbon,"onUpdate:modelValue":a[7]||(a[7]=e=>_(me).form.carbon=e),style:{"margin-right":"12px"},size:"mini"},null,8,["modelValue"]),_(me).form.carbon?(y(),x("div",ie,[C("div",se,[I(f,{modelValue:_(me).carbonSelected,"onUpdate:modelValue":a[8]||(a[8]=e=>_(me).carbonSelected=e),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":6,placeholder:"+请选择抄送人",style:{width:"100%"},"popper-class":"hidePoper",class:k({hasContent:_(me).carbonSelected.length}),onClick:a[9]||(a[9]=e=>De("carbon")),onRemoveTag:Ce},{default:S((()=>[(y(!0),x(z,null,B(_(me).carbonSelected,(e=>(y(),j(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","class"]),C("div",{class:"ap-box-contBox-icon",onClick:a[10]||(a[10]=e=>De("carbon"))},re)])])):A("",!0)])])),_:1}),I(c,{label:"审批意见",prop:"remark"},{default:S((()=>[I(g,{modelValue:_(me).form.remark,"onUpdate:modelValue":a[11]||(a[11]=e=>_(me).form.remark=e),maxlength:"100","show-word-limit":"",type:"textarea",placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),C("div",de,[I(N,{type:"primary",loading:L.value,onClick:ge},{default:S((()=>[R(V(e.$t("t-zgj-operation.submit")),1)])),_:1},8,["loading"]),I(N,{onClick:we},{default:S((()=>[R(V(e.$t("t-zgj-operation.cancel")),1)])),_:1})])])])),_:1},8,["show","title","confirmText","concelText"]),p.value?(y(),j(_(s),{key:0,show:p.value,"onUpdate:show":a[13]||(a[13]=e=>p.value=e),tabsShow:["user"],"onUpdate:searchSelected":_e,searchSelected:_(me).searchSelected},null,8,["show","searchSelected"])):A("",!0)],64)}}},pe=n(ce,[["__scopeId","data-v-4f77a3f6"]]),me=[{prop:"instanceTitle",label:"流程名称",sortable:!0,"min-width":190},{prop:"subTypeName",label:"流程类型",sortable:!0,"min-width":150},{prop:"applicantWrapper",label:"申请人",sortable:!0,"min-width":150},{prop:"orgName",label:"申请部门",sortable:!0,"min-width":150},{prop:"createTime",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":80,rankDisplayData:[{name:"t-zgj-Approval",label:"审批"}]}],ue=[{prop:"instanceTitle",label:"流程名称",sortable:!0,"min-width":190},{prop:"subTypeName",label:"流程类型",sortable:!0,"min-width":150},{prop:"applicantWrapper",label:"申请人",sortable:!0,"min-width":150},{prop:"orgName",label:"申请部门",sortable:!0,"min-width":150},{prop:"createTime",label:"申请时间",sortable:!0,"min-width":180},{prop:"updateTime",label:"审批时间",sortable:!0,"min-width":180},{prop:"taskStatusWrapper",label:"审批状态",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":80,rankDisplayData:[{name:"t-zgj-F_WORKFLOW_RE_APPROVAL",label:"重批"}]}];class fe{static findPage(e){return J.getAndLoadData("/nodeButton/page",e)}static findList(e){return J.getAndLoadData("/nodeButton/list",e)}static add(e){return J.post("/nodeButton/add",e)}static edit(e){return J.post("/nodeButton/edit",e)}static delete(e){return J.post("/nodeButton/delete",e)}static detail(e){return J.getAndLoadData("/nodeButton/detail",e)}}class be{static findPage(e){return J.getAndLoadData("/ruInstance/page",e)}static add(e){return J.post("/ruInstance/add",e)}static edit(e){return J.post("/ruInstance/edit",e)}static delete(e){return J.post("/ruInstance/delete",e)}static detail(e){return J.getAndLoadData("/ruInstance/detail",e)}}const ge={class:"approvalFlow-approvalFlow"},ve={class:"title"},he={class:"title-more"},ye={class:"title-more-add"},xe={class:"ap-box"};e("default",n({setup(e){const a=p(),n=u({show:!1,title:"t-zgj-Approval",formJson:l}),i=u(null),s=u(""),r=f({searchSelected:[],approvalModes:{1:"审批中",2:"会签中",3:"会签中",4:"或签中"},params:{formJson:null,formData:{},taskId:"",instanceId:"",approvalMode:"",modelName:"",modelId:"",nodeId:"",definitionId:"",buttons:[],detailData:[],basicInformation:{title:"基本信息",show:!0,data:[{label:"单据名称",value:"上海建筑材料清单合同明细"},{label:"文件类型：",value:"1份"},{label:"金额：",value:"110,88,00"},{label:"申请事由：",value:"20次"},{label:"印章名称：",value:"销售合同"},{label:"常规盖章：",value:"20次"},{label:"盖章码：",value:"554778"},{label:"申请人员：",value:"20次"},{label:"申请时间：",value:"2022-11-12 19:00:12"},{label:"所属部门：",value:"20次"}],labelStyle:{width:"8rem"}}},componentsTabs:{data:[{label:"待审批",name:"todo"},{label:"已审批",name:"done"}],activeName:"todo"},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"approval-process"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"t-zgj-query",label:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"t-zgj-reset",label:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:me,data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:o})=>{if("instanceTitle"===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}},loading:!1},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[]}}),d=u(null),c=e=>{n.value.show=!1},m=e=>{n.value.show=!1,d.value.reloadData()},b=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"单据名称"}},{id:"picker",label:"申请时间",type:"picker",pickerType:"date",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"applyOrganId",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+选择部门"}},{id:"applyTypeId",label:"流程类型",type:"select",options:[{label:"用印申请",value:"1"},{label:"刻章申请",value:"2"},{label:"销毁申请",value:"3"},{label:"停用申请",value:"4"},{label:"变更申请",value:"5"},{label:"启用申请",value:"6"}],defaultAttribute:{multiple:!1}},{id:"relatedCompanyId",label:"往来单位",type:"dialog",defaultAttribute:{type:"JyRelatedCompany",placeholder:"+往来单位"},options:[],values:[]},{id:"sealIds",label:"印章名称",type:"dialog",defaultAttribute:{type:"JySelectSeal",multiple:!1,placeholder:"+选择印章"},options:[],values:[]}],g=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"单据名称"}},{id:"picker",label:"申请时间",type:"picker",pickerType:"date",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"approvalStatus",label:"审批状态",type:"select",options:[{label:"未审批",value:"1"},{label:"已审批",value:"2"}],defaultAttribute:{multiple:!1}},{id:"applyOrganId",label:"申请部门",type:"derivable",defaultAttribute:{type:"organ",placeholder:"+选择部门"},options:[],values:[]},{id:"applyTypeId",label:"流程类型",type:"select",options:[{label:"用印申请",value:"1"},{label:"刻章申请",value:"2"},{label:"销毁申请",value:"3"},{label:"停用申请",value:"4"},{label:"变更申请",value:"5"},{label:"启用申请",value:"6"}],defaultAttribute:{multiple:!1}},{id:"relatedCompanyId",label:"往来单位",type:"dialog",defaultAttribute:{type:"JyRelatedCompany",placeholder:"+往来单位"},options:[],values:[]},{id:"sealIds",label:"印章名称",type:"dialog",defaultAttribute:{type:"JySelectSeal",multiple:!1,placeholder:"+选择印章"},options:[],values:[]}];function v(e){r.componentsTabs.activeName=e,"todo"===e?(r.componentsTable.header=me,r.componentsTable.data=[]):"done"===e&&(r.componentsTable.header=ue,r.componentsTable.data=[]),"todo"===e?r.componentsSearchForm.data=b:"done"===e&&(r.componentsSearchForm.data=g),d.value.reloadData()}function D(){r.componentsDocumentsDetails.show=!1}function w(e,a,t,o){n.value.title=t.name,"t-zgj-Approval"===t.name&&(r.params.instanceId=a.instanceId,r.params.taskId=a.taskId,r.params.approvalMode=a.approvalMode,r.params.instanceStatus=a.instanceStatus,r.params.approvalMode=a.approvalMode,k(a,"t-zgj-Approval")),"t-zgj-F_WORKFLOW_RE_APPROVAL"===t.name&&(r.params.instanceId=a.instanceId,r.params.taskId=a.taskId,r.params.approvalMode=a.approvalMode,r.params.instanceStatus=a.instanceStatus,r.params.approvalMode=a.approvalMode,k(a,"t-zgj-F_WORKFLOW_RE_APPROVAL"))}r.componentsSearchForm.data=b;const k=(e,a)=>{const t={instanceId:e.instanceId};be.detail(t).then((t=>{r.params.formData=JSON.parse(t.formJson),r.params.modelName=t.modelName,r.params.modelId=t.modelId,r.params.nodeId=t.nodeId,r.params.definitionId=t.definitionId,s.value=r.params.formData.formVersionId,1===r.params.instanceStatus&&T(),j(e,a),A(t.privileges)})).catch((()=>{}))},j=(e,a)=>{const t={modelId:e.modelId,definitionId:e.definitionId};U.queryByGunsId(t).then((e=>{r.params.formJson=JSON.parse(e.data),n.value.show=!0,n.value.title=a}))},T=async()=>{const e={modelId:r.params.modelId,definitionId:r.params.definitionId,nodeId:r.params.nodeId},a=await fe.findList(e);a&&(r.params.buttons=a.filter((e=>e.checked)))},A=e=>{const a=[];e.forEach((e=>{e.readable&&a.push(e.fieldKey)}));const t=[];e.forEach((e=>{e.displayable&&t.push(e.fieldKey)})),r.params.disableWidgets=a,r.params.hideWidgets=t},z=(e,a,t,o)=>{"instanceTitle"===a.property&&(r.componentsDocumentsDetails.show=!0)};return M((()=>{a.getMoneyType()})),(e,a)=>{const l=h("el-button");return y(),x("div",ge,[I(K,{url:`/queryTask/${_(r).componentsTabs.activeName}`,ref_key:"table",ref:d,hasTabs:"",componentsSearchForm:_(r).componentsSearchForm,componentsTableHeader:_(r).componentsTable.header,componentsBatch:_(r).componentsBatch,tableClick:"instanceTitle",onCellClick:z,onCustomClick:w,handleApprovalStatus:!0},{title:S((()=>[C("div",ve,[C("div",null,V(e.$t("t-zgj-workflow.ApprovalProcess")),1),C("div",he,[C("div",ye,[I(l,{type:"primary"},{default:S((()=>[R(V(e.$t("t-zgj-F_SEAL_INFO_EXPORT_STANDING_BOOK")),1)])),_:1})])])])])),tabs:S((()=>[C("div",null,[I(t,{activeName:_(r).componentsTabs.activeName,data:_(r).componentsTabs.data,onTabChange:v},null,8,["activeName","data"])])])),_:1},8,["url","componentsSearchForm","componentsTableHeader","componentsBatch"]),C("div",xe,[I(o,{show:_(r).componentsDocumentsDetails.show,visible:_(r).componentsDocumentsDetails.visible,onClickClose:D},null,8,["show","visible"])]),I(pe,{ref_key:"drawer",ref:i,show:n.value.show,"onUpdate:show":a[0]||(a[0]=a=>e.show=a),params:_(r).params,title:n.value.title,onOnCancel:c,onOnConfirm:m},null,8,["show","params","title"])])}}},[["__scopeId","data-v-8d5de101"]]))}}}));
