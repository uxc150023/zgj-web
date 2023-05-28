import{_ as e,I as a,v as t,h as s,j as l,k as o,r as n,o as r,c as i,a as c,w as d,m as u,P as m,Q as p,t as h,l as y,u as b,p as g,F as v,e as w,f as D,g as f,b3 as k,cF as _,Y as j,y as S,z as x}from"./main-5d732c2e.js";import{_ as I}from"./back-27ff22b1.js";import{c as B}from"./documentsDetails-5d74be5e.js";import{J}from"./JyTable-96032540.js";import"./cha-kong-1ced20bc.js";import"./JyTabs-6af6e902.js";/* empty css                                                               */import"./table-12670e99.js";import"./sangedian-b1ee72e5.js";/* empty css                                                                         */import"./portion-92af8719.js";/* empty css                                                                */import"./yuan-hui-e1a80bc6.js";import"./Layout-db7f64fa.js";import"./searchForm-a97b647c.js";import"./ketanchude-65de0c89.js";import"./KDocumentTypeDialog-1f624042.js";import"./pagination-569fa38f.js";import"./batch-e7262433.js";import"./index-b9b96043.js";const T=[{prop:"sealName",label:"印章名称",sortable:"custom","min-width":210,"show-overflow-tooltip":!0,show:!0},{prop:"sealTypeName",label:"印章类型",sortable:"custom","min-width":150,show:!0},{prop:"sealStateId",label:"印章状态",sortable:"custom","min-width":150,show:!0,customDisplayType:"custom"},{prop:"keepUserName",label:"保管人",sortable:"custom","min-width":150,show:!0},{prop:"keepOrganName",label:"保管部门",sortable:"custom","min-width":150,show:!0},{prop:"createDatetime",label:"创建时间",sortable:"custom","min-width":180,show:!0},{prop:"caozuo",label:"操作",fixed:"right",width:100,show:!0,customDisplayType:"custom"}],z=e=>(S("data-v-f8a387cb"),e=e(),x(),e),C={class:"PrintControlManagement-LibraryOfSeals"},E={class:"breadcrumb"},M=f(" 印章库 "),$=f("已删除的印章 "),A=f(" 已删除的印章 "),N=z((()=>u("div",null,null,-1))),V={class:"flag-cell center"},F={class:"diot diot-0"},U={class:"diot diot-1"},P={key:0},L={key:1},R={key:2},O=["onClick"],q={key:0,class:"rankDisplayData-more"},G={class:"el-dropdown-link"},H=["src"],K={class:"ap-box"},Q={class:"header-div"},Y=["src"],W={class:"content-div"},Z=f(" 提交 "),X=f("取消"),ee={class:"header-div"},ae=["src"],te={class:"content-div"},se=e({setup(e){const S=a(),x=t(null),z=t(null),se=t(!1),le=e=>{e&&(oe.form[x.value+"Id"]=e[0].id,oe.form[x.value+"Name"]=e[0].name)},oe=s({downIcon:"@/assets/svg/sangedian.svg",downIconGray:"@/assets/svg/sangedian-gray.svg",butDatas:[],sealIds:"",msg:"",tabsShow:[],searchSelected:[],title:"新增",typeList:[],JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},type:"删除"},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},componentsTabs:{data:[{label:"待签章",name:"1"},{label:"已签章",name:"2"},{label:"不可用",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"searchKey",label:"印章名称",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入印章名称"}}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:T,data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:s})=>{if("sealName"===a.property||"caozuo"===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},rankDisplayData:[{name:"t-zgj-sealInfoDelete.restore",label:"还原"}],componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsDocumentsDetails:{show:!1,visible:[{label:"印章详情",name:"Particulars-of-Seal"},{label:"保管记录",name:"Record-of-custody"},{label:"操作记录",name:"operating-record"}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"t-zgj-seal.BatchSetVisibility",label:"批量设置可见范围"},{name:"t-zgj-seal.BatchSetAvailable",label:"批量设置可用范围"},{name:"t-zgj-seal.BatchDelete",label:"批量删除"},{name:"t-zgj-view.SealUnbind",label:"印章解绑"}]}});function ne(e,a,t,s){"sealName"===a.property&&(oe.componentsDocumentsDetails.show=!0)}function re(){oe.componentsDocumentsDetails.show=!1}function ie(e,a,t,s){oe.sealIds=a.sealId,"2"!==a.sealStateId&&"t-zgj-sealInfoDelete.restore"===t.name&&(oe.JyElMessageBox.header.data="t-zgj-sealInfoDelete.restore",oe.JyElMessageBox.content.data="请问确定还原该印章吗？",oe.JyElMessageBox.show=!0,oe.JyElMessageBox.type="还原")}const ce=(e,a)=>{a.then((a=>{200===a.code?(j.success(`${e}成功！`),z.value.reloadData()):j.success(`${e}失败，请重试`)}))};function de(){S.go(-1)}return l((()=>{})),o((()=>{z.value.reloadData()})),(e,a)=>{const t=n("el-breadcrumb-item"),s=n("el-breadcrumb"),l=n("el-dropdown-item"),o=n("el-dropdown-menu"),j=n("el-dropdown"),S=n("el-button"),x=n("JyElMessageBox"),T=n("el-scrollbar");return r(),i("div",C,[c(J,{url:"/sealInfo/deleted/page",ref_key:"table",ref:z,breadcrumb:!0,needAutoRequest:!1,componentsSearchForm:b(oe).componentsSearchForm,componentsTableHeader:b(oe).componentsTable.header,onCellClick:ne,onCustomClick:ie,onClickBatchButton:e.clickBatchButton},{breadcrumb:d((()=>[u("div",E,[c(s,{separator:"/"},{default:d((()=>[c(t,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:d((()=>[M])),_:1}),c(t,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:d((()=>[$])),_:1})])),_:1})])])),title:d((()=>[u("div",{class:"title"},[u("div",{class:"title-desc"},[u("img",{style:{cursor:"pointer"},class:"title-desc-img",src:I,alt:"",onClick:de}),A]),N])])),custom_sealStateId:d((a=>[u("div",V,[m(u("div",F,null,512),[[p,"0"===a.value.sealStateId]]),m(u("div",U,null,512),[[p,"1"===a.value.sealStateId||"2"===a.value.sealStateId]]),"0"===a.value.sealStateId?(r(),i("span",P,h(e.$t("t-zgj-seal.normal")),1)):"1"===a.value.sealStateId?(r(),i("span",L,h(e.$t("t-zgj-seal.deactivated")),1)):"2"===a.value.sealStateId?(r(),i("span",R,h(e.$t("t-zgj-seal.destroyed")),1)):y("",!0)])])),custom_caozuo:d((a=>[b(oe).rankDisplayData&&b(oe).rankDisplayData.length>0?(r(),i("div",{key:0,class:g(["rankDisplayData",{"rankDisplayData-add":"2"===a.value.sealStateId}])},[(r(!0),i(v,null,w(b(oe).rankDisplayData.slice(0,4),((t,s)=>(r(),i("div",{class:"rankDisplayData-node",key:s,onClick:e=>ie(0,a.value,t)},[u("span",null,h("status"===t.name?"1"===a.value.sealStateId?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)],8,O)))),128)),b(oe).rankDisplayData.length>4?(r(),i("div",q,[c(j,null,{dropdown:d((()=>[c(o,null,{default:d((()=>[(r(!0),i(v,null,w(b(oe).rankDisplayData.slice(4),((t,s)=>(r(),D(l,{class:g({"el-dropdown-item-add":"2"===a.value.sealStateId}),key:s,onClick:e=>ie(0,a.value,t)},{default:d((()=>[f(h("status"===t.name?"1"===a.value.sealStateId?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)])),default:d((()=>[u("span",G,[u("img",{class:"rankDisplayData-node",src:"2"===a.value.sealStateId?b(oe).downIconGray:b(oe).downIcon,alt:""},null,8,H)])])),_:2},1024)])):y("",!0)],2)):y("",!0)])),_:1},8,["componentsSearchForm","componentsTableHeader","onClickBatchButton"]),u("div",K,[c(b(B),{show:b(oe).componentsDocumentsDetails.show,visible:b(oe).componentsDocumentsDetails.visible,onClickClose:re},null,8,["show","visible"])]),se.value?(r(),D(b(k),{key:0,show:se.value,"onUpdate:show":a[0]||(a[0]=e=>se.value=e),tabsShow:b(oe).tabsShow,"onUpdate:searchSelected":le,searchSelected:b(oe).searchSelected},null,8,["show","tabsShow","searchSelected"])):y("",!0),c(x,{modelValue:b(oe).JyElMessageBox.show,"onUpdate:modelValue":a[3]||(a[3]=e=>b(oe).JyElMessageBox.show=e),show:b(oe).JyElMessageBox.show,defaultAttribute:{}},{header:d((()=>[u("div",Q,[u("img",{src:b(oe).JyElMessageBox.header.icon,alt:""},null,8,Y),u("span",null,h(e.$t(b(oe).JyElMessageBox.header.data)),1)])])),content:d((()=>[u("div",W,h(b(oe).JyElMessageBox.content.data),1)])),footer:d((()=>[c(S,{type:"primary",onClick:a[1]||(a[1]=e=>{return a=b(oe).JyElMessageBox.type,oe.JyElMessageBox.show=!1,void("还原"===a&&ce(a,_.sealRollback(oe.sealIds)));var a})},{default:d((()=>[Z])),_:1}),c(S,{onClick:a[2]||(a[2]=e=>b(oe).JyElMessageBox.show=!1)},{default:d((()=>[X])),_:1})])),_:1},8,["modelValue","show"]),c(x,{modelValue:b(oe).showToastDialog.show,"onUpdate:modelValue":a[4]||(a[4]=e=>b(oe).showToastDialog.show=e),show:b(oe).showToastDialog.show,defaultAttribute:{}},{header:d((()=>[u("div",ee,[u("img",{src:b(oe).showToastDialog.header.icon,alt:""},null,8,ae),u("span",null,h(b(oe).showToastDialog.header.data),1)])])),content:d((()=>[u("div",te,h(b(oe).showToastDialog.content.data),1),c(T,{class:"scrollbar","max-height":"200px"},{default:d((()=>[(r(!0),i(v,null,w(b(oe).componentsBatch.selectionData,(e=>(r(),i("p",{key:e,class:"scrollbar-demo-item"},h(e.sealName),1)))),128))])),_:1})])),footer:d((()=>[(r(!0),i(v,null,w(b(oe).butDatas,(e=>(r(),D(S,{key:e.name,type:e.type,onClick:e.clickName},{default:d((()=>[f(h(e.name),1)])),_:2},1032,["type","onClick"])))),128))])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-f8a387cb"]]);export{se as default};
