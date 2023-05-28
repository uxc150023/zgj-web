import{_ as e}from"./back-bdc75944.js";import{c as a}from"./Layout-58d8fae6.js";import{j as l,a3 as t}from"./chunk-vform-ec6574e8.js";import{J as s}from"./JyTable-8de6d2e9.js";import{c as o}from"./documentsDetails-c9f80313.js";import{a as n}from"./sealApplyIntellect-fb9fcb38.js";import{s as i}from"./listApprovingJson-a70956ef.js";import{a as p}from"./actionOneDialog-0675accc.js";import{a as r}from"./actionMoreDialog-6b54a55f.js";import{a as m,at as c,aQ as u,W as d,X as h,ap as y,ai as b,Y as g,u as D,an as v}from"./chunk-ant-design-vue-a1de3c57.js";import"./chunk-element-plus-636450f3.js";import"./sangedian-6ea00dcf.js";import"./searchForm-bc074dfc.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-21febff4.js";import"./pagination-35741a8b.js";import"./batch-21ddcba8.js";import"./index-bd96bee1.js";import"./cha-kong-c10eac4e.js";import"./JyTabs-8b1e13a5.js";/* empty css                                                               */import"./table-949645d5.js";/* empty css                                                                         */import"./portion-e822e6a3.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const f={class:"breadcrumb"},w=v(" 用印记录 "),S=v(" 查看已作废单据 "),j={class:"title"},x={class:"title-desc"},A=v(" 查看已作废单据 "),B=g("div",null,null,-1),I={class:"ap-box"},_={name:"VoidApply"},J=Object.assign(_,{setup(v){const _=m(null),J=l(),N=m(null),E=c({componentsTitle:{more:{data:[{name:"查看已作废的单据",codle:"1"}]}},componentsSearchForm:{data:i,butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"useSealFileName",label:"文件名称","min-width":150,fixed:"left",show:!0},{prop:"useSealApplyNo",label:"单据编号",width:180,show:!0},{prop:"fileTypeName",label:"文件类型","min-width":150,show:!0},{prop:"sealName",label:"印章名称","min-width":150,show:!0},{prop:"applyUserName",label:"申请人","min-width":150,show:!0},{prop:"applyOrganName",label:"申请部门","min-width":150,show:!0},{prop:"applyStatus",label:"审批状态",align:"center",width:150,show:!0},{prop:"useSealStateName",label:"用印状态",align:"center",width:150,show:!0},{prop:"applyDatetime",label:"申请时间",width:180,show:!0},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,show:!0,align:"center",rankDisplayData:[{name:"t-zgj-sealInfoDelete.restore"},{name:"t-zgj-File.Delete"}]}]},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"t-zgj-seal.BatchDelete"}]},JyElMessageBox:{type:"",column:{},flag:"",show:!1,header:{data:""},content:{data:""}},computedData:[],showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}});function M(e,a,l,t){"useSealFileName"===a.property&&(E.componentsDocumentsDetails.show=!0,n.sealBaseInfo({useSealApplyId:e.useSealApplyId}).then((e=>{const a=e.data,l=[{label:"文件名称",value:a.useSealFileName},{label:"单据编码",value:a.useSealApplyNo},{label:"文件类型",value:a.fileTypeName},{label:"文件份数",value:(a.useSealFileNum||0)+"份"},{label:"金额",value:a.totalMoney||"-"},{label:"申请事由",value:a.useSealInfo},{label:"盖章码",value:a.sealCode||"-"},{label:"申请人员",value:a.applyUserName},{label:"申请时间",value:a.applyDatetime},{label:"所属部门",value:a.applyOrganName},{label:"单据状态",value:"APPROVAL"===a.useSealStateId?"用印审批中":"USING"===a.useSealStateId?"智能用印中":"",iconPath:"yuanLv",iconStyle:{},valStyle:{color:"var(--jy-success-6)"}}];a.listSeal.length&&(1===a.listSeal.length?l.splice(l.length-5,0,{label:"印章名称",value:a.listSeal[0].useSealApplySealInfoDto.sealName},{label:"常规盖章",value:a.listSeal[0].useSealApplySealNumDto.applySealNum+"次"}):a.listSeal.forEach(((e,a)=>{l.splice(l.length-5,0,{label:`印章${a+1}名称`,value:e.useSealApplySealInfoDto.sealName},{label:"常规盖章",value:e.useSealApplySealNumDto.applySealNum+"次"})}))),E.componentsDocumentsDetails.visible[0].basicInformation={show:!0,data:l}})),n.intellect({useSealApplyId:e.useSealApplyId}).then((e=>{var a;(null==(a=e.data)?void 0:a.length)?E.componentsDocumentsDetails.visible[0].IntelligentPrinting={show:!0,data:e.data}:E.componentsDocumentsDetails.visible[0].IntelligentPrinting={show:!1,data:[]}})),n.attachment({useSealApplyId:e.useSealApplyId}).then((e=>{var a,l;(null==(a=e.data.fileInfos)?void 0:a.length)||(null==(l=e.data.fileInfoAdds)?void 0:l.length)?E.componentsDocumentsDetails.visible[0].accessory={show:!0,printedData:e.data.fileInfos,additionalData:e.data.fileInfoAdds}:E.componentsDocumentsDetails.visible[0].accessory={show:!1,printedData:[],additionalData:[]}})))}function T(e,a,l,t){E.JyElMessageBox.type=l.name,E.JyElMessageBox.column=a,"t-zgj-sealInfoDelete.restore"===l.name&&(E.JyElMessageBox.header.data="提示？",E.JyElMessageBox.content.data="还原后本次申请送审将被还原，请问确定要还原吗？",E.JyElMessageBox.show=!0),"t-zgj-File.Delete"===l.name&&(E.JyElMessageBox.header.data="提示？",E.JyElMessageBox.content.data="删除会把申请单连同对应的附件均删除，删除后可释放存储空间，请问确定要删除么？",E.JyElMessageBox.show=!0)}function k(){E.componentsDocumentsDetails.show=!1}const F=()=>{"t-zgj-sealInfoDelete.restore"===E.JyElMessageBox.type?n.return({sealUseApplyIds:[E.JyElMessageBox.column.useSealApplyId]}).then((()=>{t("还原成功"),N.value.reloadData()})).finally((()=>{E.JyElMessageBox.show=!1})):"t-zgj-File.Delete"===E.JyElMessageBox.type&&n.delete({sealUseApplyIds:[E.JyElMessageBox.column.useSealApplyId]}).then((()=>{N.value.reloadData(),t("删除成功")})).finally((()=>{E.JyElMessageBox.show=!1}))};function C(e,a){E.componentsBatch.selectionData=a,_.value={header:{data:"批量删除"},content:{data:"删除会把申请单，连同对应的附件均删除，删除后可释放存储空间，请问确定批量删除么？"}},E.showToastDialog.show=!0}const U=()=>{const e=E.componentsBatch.selectionData,a=[];e.forEach((e=>{a.push(e.useSealApplyId)})),n.delete({sealUseApplyIds:a}).then((e=>{N.value.reloadData(),t("删除成功"),E.showToastDialog.show=!1}))};return(l,t)=>{const n=u("el-breadcrumb-item"),i=u("el-breadcrumb");return d(),h("div",null,[y(a,{Layout:"breadcrumb,title,custom,fixed,table"},{breadcrumb:b((()=>[g("div",f,[y(i,{separator:"/"},{default:b((()=>[y(n,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:b((()=>[w])),_:1}),y(n,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:b((()=>[S])),_:1})])),_:1})])])),title:b((()=>[g("div",j,[g("div",x,[g("img",{class:"title-desc-img",src:e,alt:"",onClick:t[0]||(t[0]=e=>D(J).go(-1))}),A]),B])])),table:b((()=>[y(s,{url:"/sealApply/listInvalid",ref_key:"jyTable",ref:N,hasTabs:"",componentsSearchForm:D(E).componentsSearchForm,componentsTableHeader:D(E).componentsTable.header,componentsBatch:D(E).componentsBatch,computedData:"listApproving"===l.currentActiveName?D(E).computedData:[],tableClick:"useSealFileName",onCellClick:M,onCustomClick:T,onClickBatchButton:C},null,8,["componentsSearchForm","componentsTableHeader","componentsBatch","computedData"])])),_:1}),g("div",I,[y(o,{show:D(E).componentsDocumentsDetails.show,visible:D(E).componentsDocumentsDetails.visible,onClickClose:k},null,8,["show","visible"])]),y(D(r),{"onUpdate:modelValue":t[1]||(t[1]=e=>D(E).showToastDialog.show=!1),show:D(E).showToastDialog.show,selectionData:D(E).componentsBatch.selectionData,showToastDialogContent:_.value,label:"useSealFileName",onSureAction:U},null,8,["show","selectionData","showToastDialogContent"]),y(p,{modelValue:D(E).JyElMessageBox.show,"onUpdate:modelValue":[t[2]||(t[2]=e=>D(E).JyElMessageBox.show=e),D(E).JyElMessageBox.show],JyElMessageBox:D(E).JyElMessageBox,onSubmitElMessageBox:F},null,8,["modelValue","JyElMessageBox","onUpdate:modelValue"])])}}});export{J as default};
