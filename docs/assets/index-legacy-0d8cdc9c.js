System.register(["./gengduo-caozuo-legacy-e441bcd3.js","./JyTable-legacy-7e059877.js","./chunk-vform-legacy-f1b551df.js","./ketanchude-legacy-4abaf206.js","./chunk-ant-design-vue-legacy-78f2abeb.js","./index-legacy-342f79d7.js","./chunk-element-plus-legacy-3362d1f8.js","./sangedian-legacy-75d81ddc.js","./Layout-legacy-262a6687.js","./searchForm-legacy-04a651fb.js","./KDocumentTypeDialog-legacy-0ecc1f11.js","./pagination-legacy-4c7c1f23.js","./batch-legacy-ff825cb6.js","./index-legacy-ed44ba95.js","./index-legacy-1f87fb02.js","./cha-kong-legacy-1ebc7b7b.js","./index-legacy-96212af9.js","./yuan-hui-legacy-0c1e3d03.js","./index-legacy-dc05f884.js","./home-back-legacy-d9a8ace4.js","./logo-legacy-7450937f.js","./request-util-legacy-680a8f33.js"],(function(e,a){"use strict";var t,o,l,n,d,r,m,s,c,i,p,u,g,y,h,f,C,b,w,v,x,j,A,D,F,I,N,B,E=document.createElement("style");return E.textContent=".el-icon[data-v-7c71dbe5]{color:#aaa;margin-right:5px}.title[data-v-49cd03c2]{display:flex;align-items:center;justify-content:space-between}.title .title-more[data-v-49cd03c2]{height:100%;display:flex;align-items:center}.title .title-more .title-more-add[data-v-49cd03c2]{margin-right:.5rem;height:100%;display:flex;align-items:center}.title .title-more .title-more-down[data-v-49cd03c2]{height:100%;display:flex;align-items:center}.title .title-more .title-more-down img[data-v-49cd03c2]{margin-right:5px}\n",document.head.appendChild(E),{setters:[e=>{t=e._},e=>{o=e.J},e=>{l=e.B,n=e.g,d=e.P,r=e.n},e=>{m=e._},e=>{s=e.a,c=e.at,i=e.b,p=e.e,u=e.aQ,g=e.W,y=e.X,h=e.ap,f=e.ai,C=e.u,b=e.Y,w=e.ah,v=e.am,x=e.a3,j=e.a9,A=e.ao,D=e.an,F=e.ba,I=e.bb},e=>{N=e._},e=>{B=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={getRelatedCompanyList:e=>l({method:"GET",url:"/tenant/relatedCompany/list",params:e}),addRelatedCompany:e=>l({method:"POST",url:"/tenant/relatedCompany/add",data:e}),updateRelatedCompany:e=>l({method:"POST",url:"/tenant/relatedCompany/update",data:e}),deleteRelatedCompany:e=>l({method:"POST",url:"/tenant/relatedCompany/delete",data:e}),batchImportRelatedCompany:e=>l({method:"GET",url:"/tenant/relatedCompany/batchImport",params:e}),detailRelatedCompany:e=>l({method:"GET",url:`/tenant/relatedCompany/detail/${e}`}),detailGetRelatedCompanyNo:e=>l({method:"GET",url:"/tenant/relatedCompany/getRelatedCompanyNo"})},E={class:"select-box-contBox"},V={class:"ap-box-contBox-icon"},_={props:{showAdd:{type:Boolean,default:!1},title:{type:String,default:"t-zgj-add"},column:{type:Object,default:()=>({})}},emits:["update:showAdd","on-confirm","on-cancel"],setup(e,{emit:t}){const o=e,l=s(null),n=s(!1),j=c({searchSelected:[],componentsAddForm:{formData:{relatedCompanyName:"",organId:"",organName:"",contactName:"",contactInformation:"",relatedCompanyId:"",readme:""},formRules:{relatedCompanyName:[{required:!0,message:"请输入企业名称",trigger:"change"}],organId:[{required:!0,message:"请选择所属部门",trigger:"change"}],contactName:[{required:!0,message:"请输入联系人",trigger:"change"}],contactInformation:[{required:!0,message:"请输入正确的手机号",pattern:/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,trigger:"change"}]}}});i((()=>o.column),(e=>{if(e)if("t-zgj-Edit"===o.title){j.searchSelected=[{id:e.organId,idFullPathSet:[e.organId],name:e.organName,type:"organ"}];for(const a in e)j.componentsAddForm.formData[a]=e[a]}else{if(l.value){l.value.resetFields(),j.searchSelected=[];for(const e in j.componentsAddForm.formData)j.componentsAddForm.formData[e]=""}A()}}));const A=()=>{a.detailGetRelatedCompanyNo().then((e=>{200===e.code&&(j.componentsAddForm.formData.relatedCompanyNo=e.data)}))},D=p({get:()=>o.showAdd,set(e){t("update:showAdd",e)}}),F=()=>{t("on-cancel",!1)},I=()=>{l.value.validate((e=>{e&&(j.componentsAddForm.formData.relatedCompanyId&&"t-zgj-Edit"===o.title?a.updateRelatedCompany(j.componentsAddForm.formData).then((e=>{t("on-confirm",e,"修改")})):a.addRelatedCompany(j.componentsAddForm.formData).then((e=>{t("on-confirm",e,"新增")})))}))},N=e=>{n.value=!0},B=e=>{e&&e.length>0&&(j.searchSelected=e,j.componentsAddForm.formData.organName=e[0].name,j.componentsAddForm.formData.organId=e[0].id),n.value=!1};return(e,a)=>{const t=u("el-input"),s=u("el-form-item"),c=u("el-form"),i=r;return g(),y(x,null,[h(i,{"onUpdate:show":a[10]||(a[10]=e=>D.value=e),show:C(D),title:e.$t(o.title),centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:900,height:420,onClose:F,onConfirm:I},{default:f((()=>[h(c,{model:C(j).componentsAddForm.formData,rules:C(j).componentsAddForm.formRules,ref_key:"formRef",ref:l,"label-width":"100px"},{default:f((()=>[h(s,{label:"企业编码",prop:"relatedCompanyNo"},{default:f((()=>[h(t,{type:"hidden",modelValue:C(j).componentsAddForm.formData.relatedCompanyId,"onUpdate:modelValue":a[0]||(a[0]=e=>C(j).componentsAddForm.formData.relatedCompanyId=e)},null,8,["modelValue"]),h(t,{disabled:"",modelValue:C(j).componentsAddForm.formData.relatedCompanyNo,"onUpdate:modelValue":a[1]||(a[1]=e=>C(j).componentsAddForm.formData.relatedCompanyNo=e),placeholder:"请输入企业编码"},null,8,["modelValue"])])),_:1}),h(s,{label:"企业名称",prop:"relatedCompanyName"},{default:f((()=>[h(t,{modelValue:C(j).componentsAddForm.formData.relatedCompanyName,"onUpdate:modelValue":a[2]||(a[2]=e=>C(j).componentsAddForm.formData.relatedCompanyName=e),placeholder:"请输入企业名称",clearable:"",maxlength:"128"},null,8,["modelValue"])])),_:1}),h(s,{label:"所属部门",prop:"organId"},{default:f((()=>[b("div",E,[h(t,{class:"ap-box-contBox-input width-100",readonly:"",modelValue:C(j).componentsAddForm.formData.organName,"onUpdate:modelValue":a[3]||(a[3]=e=>C(j).componentsAddForm.formData.organName=e),placeholder:"请选择",onClick:a[4]||(a[4]=e=>N())},null,8,["modelValue"]),h(t,{type:"hidden",modelValue:C(j).componentsAddForm.formData.organId,"onUpdate:modelValue":a[5]||(a[5]=e=>C(j).componentsAddForm.formData.organId=e)},null,8,["modelValue"]),b("div",V,[b("img",{onClick:a[6]||(a[6]=e=>N()),class:"ap-box-contBox-icon-img",src:m,alt:""})])])])),_:1}),h(s,{label:"联系人",prop:"contactName"},{default:f((()=>[h(t,{modelValue:C(j).componentsAddForm.formData.contactName,"onUpdate:modelValue":a[7]||(a[7]=e=>C(j).componentsAddForm.formData.contactName=e),placeholder:"请输入联系人",clearable:"",maxlength:"64"},null,8,["modelValue"])])),_:1}),h(s,{label:"联系方式",prop:"contactInformation"},{default:f((()=>[h(t,{modelValue:C(j).componentsAddForm.formData.contactInformation,"onUpdate:modelValue":a[8]||(a[8]=e=>C(j).componentsAddForm.formData.contactInformation=e),placeholder:"请输入联系方式",clearable:"",maxlength:"64"},null,8,["modelValue"])])),_:1}),h(s,{label:"备注",prop:"readme"},{default:f((()=>[h(t,{type:"textarea",rows:4,modelValue:C(j).componentsAddForm.formData.readme,"onUpdate:modelValue":a[9]||(a[9]=e=>C(j).componentsAddForm.formData.readme=e),placehoder:"请输入备注",maxlength:"512"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["show","title","confirmText","concelText"]),n.value?(g(),w(d,{key:0,show:n.value,"onUpdate:show":a[11]||(a[11]=e=>n.value=e),tabsShow:["organ"],multiple:!1,"onUpdate:searchSelected":B,searchSelected:C(j).searchSelected},null,8,["show","searchSelected"])):v("",!0)],64)}}},z=n(_,[["__scopeId","data-v-7c71dbe5"]]),S={class:"title"},k={class:"title-more"},J={class:"title-more-add"},M={class:"title-more-down"},R=(e=>(F("data-v-49cd03c2"),e=e(),I(),e))((()=>b("img",{class:"button-icon",src:t,alt:"",srcset:""},null,-1))),T={class:"header-div"},U=["src"];e("default",n({setup(e){const t=s(!1),l=s([]),n=s(!1),d=s(null),r=c({title:"新增",column:{},relatedCompanyIds:[],componetsAddForm:{showAddDialog:!1},componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"relatedCompanyName",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"企业名称/企业编码/联系人/联系方式"}},{id:"organId",requestParams:"organId",label:"所属部门",type:"derivable",inCommonUse:!0,defaultAttribute:{type:"organ",placeholder:"+所属部门",joinStr:",",multiple:!0},values:[]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"t-zgj-query",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"t-zgj-reset",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"relatedCompanyName",label:"企业名称",sortable:!0,"min-width":150,fixed:!0,"show-overflow-tooltip":!0,show:!0},{prop:"relatedCompanyNo",label:"企业编码",sortable:!0,show:!0,"min-width":150},{prop:"organName",label:"所属部门",sortable:!0,show:!0,"min-width":150},{prop:"contactName",label:"联系人",sortable:!0,show:!0,"min-width":150},{prop:"contactInformation",label:"联系方式",sortable:!0,show:!0,"min-width":150},{prop:"readme",label:"备注",sortable:!0,show:!0,"min-width":150,"show-overflow-tooltip":!0},{prop:"7",label:"操作",fixed:"right",width:"120px",show:!0,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"}]}],data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:o})=>{if("relatedCompanyName"===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}},loading:!1},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"t-zgj-seal.BatchDelete"}]},JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},type:"删除"}}),m=()=>{n.value=!1},i=(e,a)=>{200===e.code&&(B.success(`${a}成功！`),n.value=!1,d.value.reloadData())};function p(e,a,o,n){"relatedCompanyName"===a.property&&(t.value=!0,l.value=[{value:"detail",params:e.relatedCompanyId}])}function w(e,t,o,l){r.relatedCompanyIds=[],r.relatedCompanyIds.push(t.relatedCompanyId),"t-zgj-Edit"===o.name&&(r.title="t-zgj-Edit",a.detailRelatedCompany(t.relatedCompanyId).then((e=>{200===e.code&&(r.column=e.data,n.value=!0)}))),"t-zgj-Delete"===o.name&&(r.JyElMessageBox.header.data="t-zgj-Delete",r.JyElMessageBox.content.data="请问确定要删除吗？",r.JyElMessageBox.show=!0)}const v=e=>{a.deleteRelatedCompany({relatedCompanyIds:r.relatedCompanyIds}).then((a=>{200===a.code&&(B.success(`${e}成功！`),r.JyElMessageBox.show=!1,d.value.reloadData())}))},x=(e,a)=>{r.relatedCompanyIds=[];const t=r.componentsBatch.selectionData=a;let o="";const l=[],n=[];t.forEach((e=>{l.push(`[${e.relatedCompanyName}]`),n.push(e.relatedCompanyId)})),r.relatedCompanyIds=n,o=l.join("、"),"t-zgj-seal.BatchDelete"===e.name&&(r.JyElMessageBox.header.data="t-zgj-seal.BatchDelete",r.JyElMessageBox.content.data=`已选中往来企业：${o}，请问确定要批量删除吗？`,r.JyElMessageBox.show=!0,r.JyElMessageBox.type="批量删除")};return j((()=>{})),(e,a)=>{const s=u("el-button"),c=u("el-dropdown-item"),j=u("el-dropdown-menu"),F=u("el-dropdown"),I=u("JyElMessageBox");return g(),y("div",null,[h(o,{url:"/tenant/relatedCompany/list",ref_key:"table",ref:d,needAutoRequest:!0,componentsSearchForm:C(r).componentsSearchForm,componentsTableHeader:C(r).componentsTable.header,componentsBatch:C(r).componentsBatch,tableClick:"relatedCompanyName",onCellClick:p,onCustomClick:w,onClickBatchButton:x},{title:f((()=>[b("div",S,[b("div",null,A(e.$t("t-zgj-F_CUSTOMER_MANAGE")),1),b("div",k,[b("div",J,[h(s,{type:"primary",onClick:a[0]||(a[0]=()=>{n.value=!0,C(r).title="t-zgj-add",C(r).column={}})},{default:f((()=>[D(" + "+A(e.$t("t-zgj-add")),1)])),_:1})]),b("div",M,[h(F,null,{dropdown:f((()=>[h(j,null,{default:f((()=>[h(c,null,{default:f((()=>[D(A(e.$t("t-zgj-importCustomer.title")),1)])),_:1})])),_:1})])),default:f((()=>[h(s,null,{default:f((()=>[R,b("span",null,A(e.$t("t-zgj-table.more.Operation")),1)])),_:1})])),_:1})])])])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch"]),h(N,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),modulesName:"dealing_unit",detailParams:l.value,importParams:e.importParams},null,8,["modelValue","detailParams","importParams"]),h(z,{showAdd:n.value,title:C(r).title,column:C(r).column,onOnCancel:m,onOnConfirm:i},null,8,["showAdd","title","column"]),h(I,{modelValue:C(r).JyElMessageBox.show,"onUpdate:modelValue":a[2]||(a[2]=e=>C(r).JyElMessageBox.show=e),show:C(r).JyElMessageBox.show,defaultAttribute:{},showClose:!1,onConfirmClick:a[3]||(a[3]=a=>{return t=e.$t(C(r).JyElMessageBox.header.data),void v(t);var t})},{header:f((()=>[b("div",T,[b("img",{src:C(r).JyElMessageBox.header.icon,alt:""},null,8,U),b("span",null,A(e.$t(C(r).JyElMessageBox.header.data)),1)])])),content:f((()=>[D(A(C(r).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-49cd03c2"]]))}}}));
