var e=Object.defineProperty,a=(a,l,t)=>(((a,l,t)=>{l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t})(a,"symbol"!=typeof l?l+"":l,t),t);import l from"./index-eee6b18f.js";import{c as t}from"./tree-0985e479.js";import{c as o}from"./documentsDetails-c9f80313.js";import{a7 as s,a3 as n,E as i,g as d,ae as u,P as r,a4 as p,m as c}from"./chunk-vform-ec6574e8.js";import{a as m}from"./actionMoreDialog-6b54a55f.js";import{a as y,e as h,aQ as f,W as v,ah as T,ai as w,ap as b,u as g,a7 as D,an as _,at as V,d as k,X as I,Y as j,ao as x,am as B,a3 as C,ba as P,bb as N}from"./chunk-ant-design-vue-a1de3c57.js";import{J as S}from"./JyTable-8de6d2e9.js";import"./chunk-element-plus-636450f3.js";/* empty css                                                             */import"./cha-kong-c10eac4e.js";import"./JyTabs-8b1e13a5.js";/* empty css                                                               */import"./table-949645d5.js";import"./sangedian-6ea00dcf.js";/* empty css                                                                         */import"./portion-e822e6a3.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";import"./Layout-58d8fae6.js";import"./searchForm-bc074dfc.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-21febff4.js";import"./pagination-35741a8b.js";import"./batch-21ddcba8.js";import"./index-bd96bee1.js";class F{constructor(){a(this,"fileTypeNo",""),a(this,"fileTypeName",""),a(this,"fileTypeSn",""),a(this,"fileTypePid","-1")}}class U{constructor(){a(this,"fileTypeIds",[])}}class J{constructor(){a(this,"fileTypeId",""),a(this,"organs",[]),a(this,"roles",[]),a(this,"users",[])}}class M{constructor(){a(this,"fileTypeId",""),a(this,"applicantPreview",""),a(this,"applicantDownload","")}}const A=_("提交"),E=_("取消"),O={name:"AddFileType"},q=Object.assign(O,{props:{modelValue:{type:Boolean,default:!1},optionsTree:{type:Array,default:()=>[]},curFromData:{type:Object,default:()=>{}},fileTypePid:{type:String,default:"-1"}},emits:["update:modelValue","refresh","on-closed"],setup(e,{emit:a}){const l=e,t=y(new F),o=y(null),d={fileTypeName:[{required:!0,message:"请输入",trigger:"blur"}]},u=h({get:()=>l.modelValue,set(e){a("update:modelValue",e)}}),r=async()=>{try{await o.value.validate(),t.value.fileTypePid||(t.value.fileTypePid="0"),t.value.fileTypeId?(await s.fileTypeEdit(t.value),n("文件类型修改成功")):(await s.fileTypeAdd(t.value),n("文件类型添加成功")),u.value=!1,t.value=new F,a("refresh")}catch(e){i(e)}},p=async()=>{try{if(l.curFromData.fileTypeId){const e=await await s.getFileTypeInfo(l.curFromData.fileTypeId);t.value={...t.value,...e.data}}else t.value.fileTypePid=l.fileTypePid,(async()=>{try{const e=await s.generateBizNo();t.value.fileTypeNo=e.data||""}catch(e){i(e)}})()}catch(e){i(e)}},c=()=>{u.value=!1},m=()=>{t.value=new F,a("on-closed")};return(a,s)=>{const n=f("el-input"),i=f("el-form-item"),y=f("el-tree-select"),h=f("el-form"),_=f("el-button"),V=f("JyDialog2");return v(),T(V,{title:e.curFromData.fileTypeId?"修改文件类型":"新增文件类型",modelValue:g(u),"onUpdate:modelValue":s[4]||(s[4]=e=>D(u)?u.value=e:null),onOnOpened:p,onOnClosed:m,height:220},{footer:w((()=>[b(_,{type:"primary",onClick:r},{default:w((()=>[A])),_:1}),b(_,{onClick:c},{default:w((()=>[E])),_:1})])),default:w((()=>[b(h,{ref_key:"formRef",ref:o,model:t.value,rules:d,"label-width":"120px",class:"demo-ruleForm"},{default:w((()=>[b(i,{label:"文件类型编码"},{default:w((()=>[b(n,{modelValue:t.value.fileTypeNo,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value.fileTypeNo=e),disabled:""},null,8,["modelValue"])])),_:1}),b(i,{label:"文件类型名称",prop:"fileTypeName"},{default:w((()=>[b(n,{modelValue:t.value.fileTypeName,"onUpdate:modelValue":s[1]||(s[1]=e=>t.value.fileTypeName=e),clearable:"",maxlength:"128"},null,8,["modelValue"])])),_:1}),b(i,{label:"文件类型字号"},{default:w((()=>[b(n,{modelValue:t.value.fileTypeSn,"onUpdate:modelValue":s[2]||(s[2]=e=>t.value.fileTypeSn=e),clearable:"",maxlength:"128"},null,8,["modelValue"])])),_:1}),b(i,{label:"上级文件夹"},{default:w((()=>[b(y,{modelValue:t.value.fileTypePid,"onUpdate:modelValue":s[3]||(s[3]=e=>t.value.fileTypePid=e),data:l.optionsTree,"check-strictly":"",style:{width:"100%"},props:{children:"child",label:"fileTypeName",disabled:e=>(e.fileTypeId===l.curFromData.fileTypeId||e.fileTypePid===l.curFromData.fileTypeId)&&"-1"!==e.fileTypeId},"value-key":"fileTypeId"},null,8,["modelValue","data","props"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","modelValue"])}}}),R=_("提交"),Y=_("取消"),L={name:"PrivacySet"},z=Object.assign(L,{props:{modelValue:{type:Boolean,default:!1},optionsTree:{type:Array,default:()=>[]},fileTypeId:{type:String,default:""}},emits:["update:modelValue","refresh","on-closed"],setup(e,{emit:a}){const l=e,t=y(new M),o=y(null),d={fileTypeName:[{required:!0,message:"请输入",trigger:"blur"}]},u=h({get:()=>l.modelValue,set(e){a("update:modelValue",e)}}),r=async()=>{try{await s.privacySet(t.value),u.value=!1,t.value=new M,n("特殊类型隐私设置成功"),a("refresh")}catch(e){i(e)}},p=()=>{t.value.fileTypeId=l.fileTypeId,(async()=>{try{const e=await s.queryPrivacyByType(l.fileTypeId);t.value={...t.value,...e.data}}catch(e){i(e)}})()},c=()=>{u.value=!1},m=()=>{t.value=new M,a("on-closed")};return(e,a)=>{const l=f("el-switch"),s=f("el-form-item"),n=f("el-form"),i=f("el-button"),y=f("JyDialog2");return v(),T(y,{title:"特殊类型隐私配置",modelValue:g(u),"onUpdate:modelValue":a[2]||(a[2]=e=>D(u)?u.value=e:null),onOnOpened:p,onOnClosed:m,width:500,appendToBody:"",class:"privacy-set-form"},{footer:w((()=>[b(i,{type:"primary",onClick:r},{default:w((()=>[R])),_:1}),b(i,{onClick:c},{default:w((()=>[Y])),_:1})])),default:w((()=>[b(n,{ref_key:"formRef",ref:o,model:t.value,rules:d},{default:w((()=>[b(s,{label:"用印单据上传附件仅申请人能预览",prop:"applicantPreview"},{default:w((()=>[b(l,{modelValue:t.value.applicantPreview,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.applicantPreview=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1}),b(s,{label:"用印单据上传附件仅申请人能预览",prop:"applicantDownload"},{default:w((()=>[b(l,{modelValue:t.value.applicantDownload,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.applicantDownload=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])}}}),K=e=>(P("data-v-9eb8dd83"),e=e(),N(),e),H={class:"fileManagement-documentType"},W={class:"title"},X=K((()=>j("div",null,"文件类型",-1))),G={class:"title-more"},Q={class:"title-more-add"},Z=K((()=>j("div",{class:"title-more-down"},null,-1))),$={class:"components-tree"},ee={class:"ap-box"},ae={name:"DocumentType"},le=d(Object.assign(ae,{setup(e){const a=y(!1),i=y(!1),d=y(new U),h=y(new u),D=y(!1),P=y(!1),N=y({}),F=y(""),M=y([]),A=y(new J),E=y([]),O=y(!1),R=y(null),Y=y(null),L=y(null),K=y([]),ae=V({componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入文件类型名称或编码"}},{id:"beginTime",label:"创建时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{},requestType:"array"}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"fileTypeNo",label:"文件类型编码",sortable:!0,show:!0,"min-width":150},{prop:"fileTypeName",label:"文件类型名称",sortable:!0,show:!0,"min-width":150},{prop:"level",label:"文件类型层级",sortable:!0,show:!0,"min-width":150},{prop:"fileSum",label:"文件数",sortable:!0,show:!0,"min-width":150},{prop:"createUser",label:"创建人",sortable:!0,show:!0,"min-width":150},{prop:"createDatetime",label:"创建时间",show:!0,sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right",show:!0,width:350,rankDisplayData:[{name:"修改",code:1},{name:"删除",code:2},{name:"设置可见范围",code:3},{name:"特殊类型隐私配置",code:4}]}]},componentsTree:{data:[],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0,"highlight-current":!0,"node-key":"fileTypeId","current-node-key":"-1"},defaultProps:{label:"fileTypeName",children:"child",isLeaf:"haveChildren",nodeKey:"fileTypeId"},value:""},componentsDocumentsDetails:{show:!1,visible:[{label:"文件详情",name:"Details-of-Document"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除",code:1}]},JyElMessageBox:{show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showDeleteFTyle:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}}),le=(e,a,l,t)=>{d.value.fileTypeIds=p([e],"child","fileTypeId"),R.value.reloadData()},te=()=>{(async()=>{try{P.value=!0;const e=await s.getFileTypeListPage({...d.value,...h});ae.componentsTable.data=e.data.records||[],h.value.total=e.data&&e.data.total,h.value.pages=e.data&&e.data.pages}catch(e){}P.value=!1})(),(async()=>{try{const e=await s.getTreeList({});ae.componentsTree.data=[],ae.componentsTree.data.push({fileTypeName:"文件类型",fileTypeId:"-1",child:e.data||[]}),ae.componentsTree.value="-1",R.value.reloadData()}catch(e){}})(),N.value={}},oe=async()=>{var e;try{E.value.length?(await s.batchDelete({fileTypeIds:E.value}),n("批量删除成功"),ae.showToastDialog.show=!1):(await s.fileTypeDelete(F.value),n("成功删除文件类型"),ae.JyElMessageBox.show=!1),te()}catch(a){if(a.code&&500===a.code&&(null==(e=a.data)?void 0:e.length)){ae.showToastDialog.show=!1,ae.JyElMessageBox.show=!1,ae.componentsBatch.selectionData=[],ae.showDeleteFTyle.show=!0;const e=K.value.filter((e=>a.data.includes(e.fileTypeId)));L.value={header:"删除失败",content:"以下文件类型已被使用，不允许删除，若文件类型被已启用的文件类型关联或者已发起用印申请，则认为被使用。",selectionData:e}}}},se=async e=>{try{const l=await s.queryVisibleRByFileType(e),t=l.data.roles?l.data.roles:[],o=l.data.organs?l.data.organs:[],n=l.data.users?l.data.users:[];M.value=[...o,...t,...n],i.value=!0,setTimeout((()=>{a.value=!0}),50)}catch(l){}},ne=()=>{a.value=!1,setTimeout((()=>{i.value=!1}),300)},ie=async e=>{e.forEach((a=>{"user"===a.type&&(A.value.users=e.filter((e=>"user"===e.type))),"organ"===a.type&&(A.value.organs=e.filter((e=>"organ"===e.type))),"role"===a.type&&(A.value.roles=e.filter((e=>"role"===e.type)))}));try{await s.viewRangSet(A.value);a.value=!1,n("可见范围设置成功")}catch(l){}},de=()=>{N.value={}},ue=async(e,a)=>{const l=R.value.getSelectionRows();E.value=l.map((e=>e.fileTypeId)),1===e.code&&(ae.componentsBatch.selectionData=a,Y.value={header:{data:"批量删除"},content:{data:"是否删除以下文件类型？"}},ae.showToastDialog.show=!0),2===e.code&&c("待产品确认回显功能")};function re(e,a,l,t){"1"===a.property&&(ae.componentsDocumentsDetails.show=!0)}function pe(){ae.componentsDocumentsDetails.show=!1}function ce(e,a,l,t){F.value=a.fileTypeId,1===l.code&&(D.value=!0,N.value={...N.value,...a}),2===l.code&&(ae.JyElMessageBox.header.data="提示？",ae.JyElMessageBox.content.data="您确定要删除该记录吗？",ae.JyElMessageBox.show=!0),3===l.code&&(A.value.fileTypeId=a.fileTypeId,se(a.fileTypeId)),4===l.code&&(O.value=!0)}return k((()=>{te()})),(e,s)=>{const n=f("el-button"),u=f("JyElMessageBox"),p=l;return v(),I(C,null,[j("div",H,[b(S,{url:"/fileType/page",ref_key:"table",ref:R,method:"POST",hasTree:!0,needAutoRequest:!1,componentsSearchForm:g(ae).componentsSearchForm,componentsTableHeader:g(ae).componentsTable.header,componentsBatch:g(ae).componentsBatch,queryParams:d.value,tableClick:"sealName",onCellClick:re,onCustomClick:ce,onClickBatchButton:ue,onGetResult:s[2]||(s[2]=e=>K.value=e)},{title:w((()=>[j("div",W,[X,j("div",G,[j("div",Q,[b(n,{type:"primary",onClick:s[0]||(s[0]=e=>D.value=!0)},{default:w((()=>[_("+ "+x(e.$t("t-zgj-add")),1)])),_:1})]),Z])])])),tree:w((()=>[j("div",$,[b(g(t),{ref:"tree",modelValue:g(ae).componentsTree.value,"onUpdate:modelValue":s[1]||(s[1]=e=>g(ae).componentsTree.value=e),data:g(ae).componentsTree.data,defaultAttribute:g(ae).componentsTree.defaultAttribute,defaultProps:{children:"child",label:"fileTypeName"},onNodeClick:le},null,8,["modelValue","data","defaultAttribute"])])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams"]),j("div",ee,[b(o,{show:g(ae).componentsDocumentsDetails.show,visible:g(ae).componentsDocumentsDetails.visible,onClickClose:pe},null,8,["show","visible"])]),i.value?(v(),T(g(r),{key:0,show:a.value,"onUpdate:show":ne,"onUpdate:searchSelected":ie,searchSelected:M.value,tabsShow:["user","organ","role"]},null,8,["show","searchSelected"])):B("",!0),b(u,{modelValue:g(ae).JyElMessageBox.show,"onUpdate:modelValue":s[3]||(s[3]=e=>g(ae).JyElMessageBox.show=e),show:g(ae).JyElMessageBox.show,defaultAttribute:{},onConfirmClick:oe},{header:w((()=>[_(x(g(ae).JyElMessageBox.header.data),1)])),content:w((()=>[_(x(g(ae).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])]),b(g(q),{modelValue:D.value,"onUpdate:modelValue":s[4]||(s[4]=e=>D.value=e),optionsTree:g(ae).componentsTree.data,onRefresh:te,curFromData:N.value,onOnClosed:de,fileTypePid:d.value.fileTypeIds[0]},null,8,["modelValue","optionsTree","curFromData","fileTypePid"]),b(g(z),{modelValue:O.value,"onUpdate:modelValue":s[5]||(s[5]=e=>O.value=e),fileTypeId:F.value},null,8,["modelValue","fileTypeId"]),b(g(m),{"onUpdate:modelValue":s[6]||(s[6]=e=>g(ae).showToastDialog.show=!1),show:g(ae).showToastDialog.show,selectionData:g(ae).componentsBatch.selectionData,showToastDialogContent:Y.value,label:"formName",onSureAction:oe,curKey:"fileTypeName"},null,8,["show","selectionData","showToastDialogContent"]),b(p,{"onUpdate:modelValue":s[7]||(s[7]=e=>g(ae).showDeleteFTyle.show=!1),show:g(ae).showDeleteFTyle.show,showToastDialogContent:L.value,label:"fileTypeName"},null,8,["show","showToastDialogContent"])],64)}}}),[["__scopeId","data-v-9eb8dd83"]]);export{le as default};
