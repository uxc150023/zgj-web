!function(){function e(e,a,t){return(a=function(e){var a=function(e,a){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,a||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}System.register(["./index-legacy-38d33994.js","./tree-legacy-b10542a9.js","./documentsDetails-legacy-b3398eb5.js","./main-legacy-80c027be.js","./actionMoreDialog-legacy-30fae47d.js","./JyTable-legacy-cb6848b2.js","./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-8d726e32.js","./cha-kong-legacy-f9de9560.js","./JyTabs-legacy-3f34f463.js","./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./table-legacy-3557b439.js","./sangedian-legacy-5b82475d.js","./documentsDetails.vue_vue_type_style_index_0_scoped_204b6fa9_lang-legacy-fafff2de.js","./portion-legacy-b0849eee.js","./portion.vue_vue_type_style_index_0_scoped_3abd16ad_lang-legacy-2c813e37.js","./yuan-hui-legacy-3805e29d.js","./Layout-legacy-b2631a91.js","./searchForm-legacy-661aae1d.js","./ketanchude-legacy-3429c6dd.js","./KDocumentTypeDialog-legacy-9730cc30.js","./pagination-legacy-abc2a695.js","./batch-legacy-5a4e36c5.js","./index-legacy-1964794f.js"],(function(a,t){"use strict";var l,o,n,d,i,s,r,u,c,p,m,y,f,h,v,g,T,b,w,_,D,x,V,k,M,j,I,C,B,P,S,F,N=document.createElement("style");return N.textContent='.privacy-set-form .el-dialog__body{display:flex;justify-content:center}.fileManagement-documentType[data-v-9eb8dd83]{margin:0%}.fileManagement-documentType .title[data-v-9eb8dd83]{display:flex;align-items:center;justify-content:space-between}.fileManagement-documentType .title .title-more[data-v-9eb8dd83]{height:100%;display:flex;align-items:center}.fileManagement-documentType .title .title-more .title-more-add[data-v-9eb8dd83]{margin-right:.5rem;height:100%;display:flex;align-items:center}.fileManagement-documentType .title .title-more .title-more-down[data-v-9eb8dd83]{height:100%;display:flex;align-items:center}.fileManagement-documentType .batch[data-v-9eb8dd83]{display:flex;align-items:center}.fileManagement-documentType .batch .batch-desc[data-v-9eb8dd83]{margin-right:.8571428571rem}.fileManagement-documentType .components-tree[data-v-9eb8dd83]{width:max-content;min-width:100%;margin:0%}.fileManagement-documentType .components-tree .custom-tree-node[data-v-9eb8dd83]{display:flex;align-items:center}.fileManagement-documentType .components-tree .custom-tree-node .custom-tree-node-icon[data-v-9eb8dd83]{margin-right:.4rem}.fileManagement-documentType .components-tree[data-v-9eb8dd83]{margin-bottom:0%}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree-node__content{height:2.2857142857rem;padding-right:10px}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree .el-icon svg{display:none!important;height:0;width:0}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree-node__expand-icon{font-size:16px}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree .el-tree-node__expand-icon.expanded{-webkit-transform:rotate(0deg);transform:rotate(0)}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree .el-tree-node__expand-icon:before{background:url(/assets/tree-fangxiang-zuo-449ab744.svg) no-repeat 0;content:"";display:block;width:18px;height:18px}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree .el-tree-node__expand-icon.expanded:before{background:url(/assets/tree-fangxiang-xia-767e704d.svg) no-repeat 0 0;content:"";display:block;width:18px;height:18px;margin-top:4px}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree .is-leaf.el-tree-node__expand-icon:before{display:block;background:none!important;content:"";width:18px;height:18px}.fileManagement-documentType .components-tree[data-v-9eb8dd83] .el-tree-node__expand-icon.is-leaf{width:0px}\n',document.head.appendChild(N),{setters:[e=>{l=e.default},e=>{o=e.c},e=>{n=e.c},e=>{d=e.v,i=e.s,s=e.r,r=e.o,u=e.f,c=e.w,p=e.a,m=e.u,y=e.x,f=e.g,h=e.cA,v=e.cv,g=e.a9,T=e._,b=e.cJ,w=e.h,_=e.k,D=e.c,x=e.m,V=e.t,k=e.b3,M=e.l,j=e.F,I=e.cw,C=e.K,B=e.y,P=e.z},e=>{S=e.a},e=>{F=e.J},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){class t{constructor(){e(this,"fileTypeNo",""),e(this,"fileTypeName",""),e(this,"fileTypeSn",""),e(this,"fileTypePid","-1")}}class N{constructor(){e(this,"fileTypeIds",[])}}class J{constructor(){e(this,"fileTypeId",""),e(this,"organs",[]),e(this,"roles",[]),e(this,"users",[])}}class U{constructor(){e(this,"fileTypeId",""),e(this,"applicantPreview",""),e(this,"applicantDownload","")}}const A=f("提交"),E=f("取消"),O={name:"AddFileType"},q=Object.assign(O,{props:{modelValue:{type:Boolean,default:!1},optionsTree:{type:Array,default:()=>[]},curFromData:{type:Object,default:()=>{}},fileTypePid:{type:String,default:"-1"}},emits:["update:modelValue","refresh","on-closed"],setup(e,{emit:a}){const l=e,o=d(new t),n=d(null),f={fileTypeName:[{required:!0,message:"请输入",trigger:"blur"}]},T=i({get:()=>l.modelValue,set(e){a("update:modelValue",e)}}),b=async()=>{try{await n.value.validate(),o.value.fileTypePid||(o.value.fileTypePid="0"),o.value.fileTypeId?(await h.fileTypeEdit(o.value),v("文件类型修改成功")):(await h.fileTypeAdd(o.value),v("文件类型添加成功")),T.value=!1,o.value=new t,a("refresh")}catch(e){g(e)}},w=async()=>{try{if(l.curFromData.fileTypeId){const e=await await h.getFileTypeInfo(l.curFromData.fileTypeId);o.value={...o.value,...e.data}}else o.value.fileTypePid=l.fileTypePid,(async()=>{try{const e=await h.generateBizNo();o.value.fileTypeNo=e.data||""}catch(e){g(e)}})()}catch(e){g(e)}},_=()=>{T.value=!1},D=()=>{o.value=new t,a("on-closed")};return(a,t)=>{const d=s("el-input"),i=s("el-form-item"),h=s("el-tree-select"),v=s("el-form"),g=s("el-button"),x=s("JyDialog2");return r(),u(x,{title:e.curFromData.fileTypeId?"修改文件类型":"新增文件类型",modelValue:m(T),"onUpdate:modelValue":t[4]||(t[4]=e=>y(T)?T.value=e:null),onOnOpened:w,onOnClosed:D,height:220},{footer:c((()=>[p(g,{type:"primary",onClick:b},{default:c((()=>[A])),_:1}),p(g,{onClick:_},{default:c((()=>[E])),_:1})])),default:c((()=>[p(v,{ref_key:"formRef",ref:n,model:o.value,rules:f,"label-width":"120px",class:"demo-ruleForm"},{default:c((()=>[p(i,{label:"文件类型编码"},{default:c((()=>[p(d,{modelValue:o.value.fileTypeNo,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value.fileTypeNo=e),disabled:""},null,8,["modelValue"])])),_:1}),p(i,{label:"文件类型名称",prop:"fileTypeName"},{default:c((()=>[p(d,{modelValue:o.value.fileTypeName,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value.fileTypeName=e),clearable:"",maxlength:"128"},null,8,["modelValue"])])),_:1}),p(i,{label:"文件类型字号"},{default:c((()=>[p(d,{modelValue:o.value.fileTypeSn,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value.fileTypeSn=e),clearable:"",maxlength:"128"},null,8,["modelValue"])])),_:1}),p(i,{label:"上级文件夹"},{default:c((()=>[p(h,{modelValue:o.value.fileTypePid,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value.fileTypePid=e),data:l.optionsTree,"check-strictly":"",style:{width:"100%"},props:{children:"child",label:"fileTypeName",disabled:e=>(e.fileTypeId===l.curFromData.fileTypeId||e.fileTypePid===l.curFromData.fileTypeId)&&"-1"!==e.fileTypeId},"value-key":"fileTypeId"},null,8,["modelValue","data","props"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","modelValue"])}}}),R=f("提交"),z=f("取消"),L={name:"PrivacySet"},Y=Object.assign(L,{props:{modelValue:{type:Boolean,default:!1},optionsTree:{type:Array,default:()=>[]},fileTypeId:{type:String,default:""}},emits:["update:modelValue","refresh","on-closed"],setup(e,{emit:a}){const t=e,l=d(new U),o=d(null),n={fileTypeName:[{required:!0,message:"请输入",trigger:"blur"}]},f=i({get:()=>t.modelValue,set(e){a("update:modelValue",e)}}),T=async()=>{try{await h.privacySet(l.value),f.value=!1,l.value=new U,v("特殊类型隐私设置成功"),a("refresh")}catch(e){g(e)}},b=()=>{l.value.fileTypeId=t.fileTypeId,(async()=>{try{const e=await h.queryPrivacyByType(t.fileTypeId);l.value={...l.value,...e.data}}catch(e){g(e)}})()},w=()=>{f.value=!1},_=()=>{l.value=new U,a("on-closed")};return(e,a)=>{const t=s("el-switch"),d=s("el-form-item"),i=s("el-form"),h=s("el-button"),v=s("JyDialog2");return r(),u(v,{title:"特殊类型隐私配置",modelValue:m(f),"onUpdate:modelValue":a[2]||(a[2]=e=>y(f)?f.value=e:null),onOnOpened:b,onOnClosed:_,width:500,appendToBody:"",class:"privacy-set-form"},{footer:c((()=>[p(h,{type:"primary",onClick:T},{default:c((()=>[R])),_:1}),p(h,{onClick:w},{default:c((()=>[z])),_:1})])),default:c((()=>[p(i,{ref_key:"formRef",ref:o,model:l.value,rules:n},{default:c((()=>[p(d,{label:"用印单据上传附件仅申请人能预览",prop:"applicantPreview"},{default:c((()=>[p(t,{modelValue:l.value.applicantPreview,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.applicantPreview=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1}),p(d,{label:"用印单据上传附件仅申请人能预览",prop:"applicantDownload"},{default:c((()=>[p(t,{modelValue:l.value.applicantDownload,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.applicantDownload=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])}}}),K=e=>(B("data-v-9eb8dd83"),e=e(),P(),e),H={class:"fileManagement-documentType"},$={class:"title"},G=K((()=>x("div",null,"文件类型",-1))),Q={class:"title-more"},W={class:"title-more-add"},Z=K((()=>x("div",{class:"title-more-down"},null,-1))),X={class:"components-tree"},ee={class:"ap-box"},ae={name:"DocumentType"};a("default",T(Object.assign(ae,{setup(e){const a=d(!1),t=d(!1),i=d(new N),y=d(new b),g=d(!1),T=d(!1),B=d({}),P=d(""),U=d([]),A=d(new J),E=d([]),O=d(!1),R=d(null),z=d(null),L=d(null),K=d([]),ae=w({componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入文件类型名称或编码"}},{id:"beginTime",label:"创建时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{},requestType:"array"}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"fileTypeNo",label:"文件类型编码",sortable:!0,show:!0,"min-width":150},{prop:"fileTypeName",label:"文件类型名称",sortable:!0,show:!0,"min-width":150},{prop:"level",label:"文件类型层级",sortable:!0,show:!0,"min-width":150},{prop:"fileSum",label:"文件数",sortable:!0,show:!0,"min-width":150},{prop:"createUser",label:"创建人",sortable:!0,show:!0,"min-width":150},{prop:"createDatetime",label:"创建时间",show:!0,sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right",show:!0,width:350,rankDisplayData:[{name:"修改",code:1},{name:"删除",code:2},{name:"设置可见范围",code:3},{name:"特殊类型隐私配置",code:4}]}]},componentsTree:{data:[],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0,"highlight-current":!0,"node-key":"fileTypeId","current-node-key":"-1"},defaultProps:{label:"fileTypeName",children:"child",isLeaf:"haveChildren",nodeKey:"fileTypeId"},value:""},componentsDocumentsDetails:{show:!1,visible:[{label:"文件详情",name:"Details-of-Document"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除",code:1}]},JyElMessageBox:{show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showDeleteFTyle:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}}),te=(e,a,t,l)=>{i.value.fileTypeIds=I([e],"child","fileTypeId"),R.value.reloadData()},le=()=>{(async()=>{try{T.value=!0;const e=await h.getFileTypeListPage({...i.value,...y});ae.componentsTable.data=e.data.records||[],y.value.total=e.data&&e.data.total,y.value.pages=e.data&&e.data.pages}catch(e){}T.value=!1})(),(async()=>{try{const e=await h.getTreeList({});ae.componentsTree.data=[],ae.componentsTree.data.push({fileTypeName:"文件类型",fileTypeId:"-1",child:e.data||[]}),ae.componentsTree.value="-1",R.value.reloadData()}catch(e){}})(),B.value={}},oe=async()=>{try{E.value.length?(await h.batchDelete({fileTypeIds:E.value}),v("批量删除成功"),ae.showToastDialog.show=!1):(await h.fileTypeDelete(P.value),v("成功删除文件类型"),ae.JyElMessageBox.show=!1),le()}catch(a){var e;if(a.code&&500===a.code&&null!==(e=a.data)&&void 0!==e&&e.length){ae.showToastDialog.show=!1,ae.JyElMessageBox.show=!1,ae.componentsBatch.selectionData=[],ae.showDeleteFTyle.show=!0;const e=K.value.filter((e=>a.data.includes(e.fileTypeId)));L.value={header:"删除失败",content:"以下文件类型已被使用，不允许删除，若文件类型被已启用的文件类型关联或者已发起用印申请，则认为被使用。",selectionData:e}}}},ne=async e=>{try{const l=await h.queryVisibleRByFileType(e),o=l.data.roles?l.data.roles:[],n=l.data.organs?l.data.organs:[],d=l.data.users?l.data.users:[];U.value=[...n,...o,...d],t.value=!0,setTimeout((()=>{a.value=!0}),50)}catch(l){}},de=()=>{a.value=!1,setTimeout((()=>{t.value=!1}),300)},ie=async e=>{e.forEach((a=>{"user"===a.type&&(A.value.users=e.filter((e=>"user"===e.type))),"organ"===a.type&&(A.value.organs=e.filter((e=>"organ"===e.type))),"role"===a.type&&(A.value.roles=e.filter((e=>"role"===e.type)))}));try{await h.viewRangSet(A.value);a.value=!1,v("可见范围设置成功")}catch(t){}},se=()=>{B.value={}},re=async(e,a)=>{const t=R.value.getSelectionRows();E.value=t.map((e=>e.fileTypeId)),1===e.code&&(ae.componentsBatch.selectionData=a,z.value={header:{data:"批量删除"},content:{data:"是否删除以下文件类型？"}},ae.showToastDialog.show=!0),2===e.code&&C("待产品确认回显功能")};function ue(e,a,t,l){"1"===a.property&&(ae.componentsDocumentsDetails.show=!0)}function ce(){ae.componentsDocumentsDetails.show=!1}function pe(e,a,t,l){P.value=a.fileTypeId,1===t.code&&(g.value=!0,B.value={...B.value,...a}),2===t.code&&(ae.JyElMessageBox.header.data="提示？",ae.JyElMessageBox.content.data="您确定要删除该记录吗？",ae.JyElMessageBox.show=!0),3===t.code&&(A.value.fileTypeId=a.fileTypeId,ne(a.fileTypeId)),4===t.code&&(O.value=!0)}return _((()=>{le()})),(e,d)=>{const y=s("el-button"),h=s("JyElMessageBox"),v=l;return r(),D(j,null,[x("div",H,[p(F,{url:"/fileType/page",ref_key:"table",ref:R,method:"POST",hasTree:!0,needAutoRequest:!1,componentsSearchForm:m(ae).componentsSearchForm,componentsTableHeader:m(ae).componentsTable.header,componentsBatch:m(ae).componentsBatch,queryParams:i.value,tableClick:"sealName",onCellClick:ue,onCustomClick:pe,onClickBatchButton:re,onGetResult:d[2]||(d[2]=e=>K.value=e)},{title:c((()=>[x("div",$,[G,x("div",Q,[x("div",W,[p(y,{type:"primary",onClick:d[0]||(d[0]=e=>g.value=!0)},{default:c((()=>[f("+ "+V(e.$t("t-zgj-add")),1)])),_:1})]),Z])])])),tree:c((()=>[x("div",X,[p(m(o),{ref:"tree",modelValue:m(ae).componentsTree.value,"onUpdate:modelValue":d[1]||(d[1]=e=>m(ae).componentsTree.value=e),data:m(ae).componentsTree.data,defaultAttribute:m(ae).componentsTree.defaultAttribute,defaultProps:{children:"child",label:"fileTypeName"},onNodeClick:te},null,8,["modelValue","data","defaultAttribute"])])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams"]),x("div",ee,[p(n,{show:m(ae).componentsDocumentsDetails.show,visible:m(ae).componentsDocumentsDetails.visible,onClickClose:ce},null,8,["show","visible"])]),t.value?(r(),u(m(k),{key:0,show:a.value,"onUpdate:show":de,"onUpdate:searchSelected":ie,searchSelected:U.value,tabsShow:["user","organ","role"]},null,8,["show","searchSelected"])):M("",!0),p(h,{modelValue:m(ae).JyElMessageBox.show,"onUpdate:modelValue":d[3]||(d[3]=e=>m(ae).JyElMessageBox.show=e),show:m(ae).JyElMessageBox.show,defaultAttribute:{},onConfirmClick:oe},{header:c((()=>[f(V(m(ae).JyElMessageBox.header.data),1)])),content:c((()=>[f(V(m(ae).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])]),p(m(q),{modelValue:g.value,"onUpdate:modelValue":d[4]||(d[4]=e=>g.value=e),optionsTree:m(ae).componentsTree.data,onRefresh:le,curFromData:B.value,onOnClosed:se,fileTypePid:i.value.fileTypeIds[0]},null,8,["modelValue","optionsTree","curFromData","fileTypePid"]),p(m(Y),{modelValue:O.value,"onUpdate:modelValue":d[5]||(d[5]=e=>O.value=e),fileTypeId:P.value},null,8,["modelValue","fileTypeId"]),p(m(S),{"onUpdate:modelValue":d[6]||(d[6]=e=>m(ae).showToastDialog.show=!1),show:m(ae).showToastDialog.show,selectionData:m(ae).componentsBatch.selectionData,showToastDialogContent:z.value,label:"formName",onSureAction:oe,curKey:"fileTypeName"},null,8,["show","selectionData","showToastDialogContent"]),p(v,{"onUpdate:modelValue":d[7]||(d[7]=e=>m(ae).showDeleteFTyle.show=!1),show:m(ae).showDeleteFTyle.show,showToastDialogContent:L.value,label:"fileTypeName"},null,8,["show","showToastDialogContent"])],64)}}}),[["__scopeId","data-v-9eb8dd83"]]))}}}))}();
