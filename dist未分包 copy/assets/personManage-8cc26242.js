import{_ as e}from"./back-27ff22b1.js";import{J as a}from"./JyTable-96032540.js";import{_ as t,I as s,C as o,v as l,h as r,i as c,Y as n,r as i,o as d,c as u,a as m,w as h,m as p,t as b,u as g,f as y,b3 as v,l as w,g as f,y as x,z as S}from"./main-5d732c2e.js";import{a as B}from"./authorityManagement-31aa3ecc.js";import"./sangedian-b1ee72e5.js";import"./Layout-db7f64fa.js";import"./searchForm-a97b647c.js";import"./ketanchude-65de0c89.js";import"./KDocumentTypeDialog-1f624042.js";import"./pagination-569fa38f.js";import"./batch-e7262433.js";import"./index-b9b96043.js";const k=[{prop:"userName",label:"姓名",sortable:!0,flex:!0,"min-width":150,show:!0},{prop:"accountNo",label:"账号",sortable:!0,"min-width":150,show:!0},{prop:"hostOrganName",label:"所属部门",sortable:!0,"min-width":150,show:!0},{prop:"userTitle",label:"职位",sortable:!0,"min-width":150,show:!0},{prop:"caozuo",label:"操作",fixed:"right",width:220,show:!0,rankDisplayData:[{name:"t-zgj-role.Removal"}]}],j=e=>(x("data-v-d7ae183b"),e=e(),S(),e),C={class:"PrintControlManagement-LibraryOfSeals"},E={class:"breadcrumb"},I=f(" 权限管理 "),J=f(" 人员管理 "),M={class:"title"},T={class:"title"},_={class:"title-desc"},D=f(" 人员管理"),A={class:"role"},z={class:"title-more"},U={class:"title-more-add"},q=f("+ 新增人员"),R=j((()=>p("div",{class:"title-more-down"},null,-1))),F={class:"header-div"},N=["src"],L={class:"content-div"},O=t({setup(t){const x=s(),S=o(),j=l(null),O=l({}),P=l(S.query.roleName),V=r({sealIds:"",msg:"",tabsShow:[],searchSelected:[],typeList:[],activeTab:"",JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},type:"删除"},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"searchKey",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"姓名/账号/职位"}},{id:"hostOrganId",label:"所属部门",type:"derivable",inCommonUse:!0,defaultAttribute:{placeholder:"+所属部门"}}],butData:[{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:k,data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:s})=>{if(""===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量移除"}]}}),$=()=>{V.activeTab="user",V.tabsShow=["user"],H.value=!0};O.value={roleId:S.query.roleId};const H=l(!1);let K="";const Y=(e,a,t,s)=>{"t-zgj-role.Removal"===t.name&&(V.JyElMessageBox.header.data="移除",V.JyElMessageBox.content.data="请问确定要移除吗？",V.JyElMessageBox.show=!0,V.JyElMessageBox.type="移除",K=a.userId)},W=()=>{x.go(-1)},Z=()=>{B.roleDelete(`${O.value.roleId}/${K}`).then((e=>{n.success("操作成功"),V.JyElMessageBox.show=!1,j.value.reloadData()}))};c((()=>V.searchSelected),(e=>{if(e&&0!==e.length)if("user"===V.activeTab){const a=[];e.forEach((e=>{a.push(e.id)})),B.addRoleUser({roleId:O.value.roleId,userIds:a}).then((e=>{n.success("操作成功"),V.JyElMessageBox.show=!1,V.searchSelected=[],j.value.reloadData()}))}else V.activeTab}));const G=(e,a)=>{const t=[];a.forEach((e=>{t.push(e.userId)})),B.batchDeleteRoleUser({roleId:O.value.roleId,userIds:t}).then((()=>{n.success("操作成功"),j.value.reloadData()}))},Q=e=>{"hostOrganId"===e.id&&(V.activeTab="organ",V.tabsShow=["organ"],H.value=!0)};return(t,s)=>{const o=i("el-breadcrumb-item"),l=i("el-breadcrumb"),r=i("el-button"),c=i("JyElMessageBox");return d(),u("div",C,[m(a,{url:"/role/user/page",ref_key:"table",ref:j,hasTree:!1,breadcrumb:!0,needAutoRequest:!0,componentsSearchForm:g(V).componentsSearchForm,componentsTableHeader:g(V).componentsTable.header,componentsBatch:g(V).componentsBatch,queryParams:O.value,tableClick:"",onCellClick:t.cellClick,onCustomClick:Y,onClickBatchButton:G,onClickElement:Q},{breadcrumb:h((()=>[p("div",E,[m(l,{separator:"/"},{default:h((()=>[m(o,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:h((()=>[I])),_:1}),m(o,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:h((()=>[J])),_:1})])),_:1})])])),title:h((()=>[p("div",M,[p("div",T,[p("div",_,[p("img",{class:"title-desc-img",src:e,alt:"",onClick:W}),D,p("span",A,"（"+b(P.value)+"）",1)])]),p("div",z,[p("div",U,[m(r,{type:"primary",onClick:$},{default:h((()=>[q])),_:1})]),R])])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams","onCellClick"]),H.value?(d(),y(g(v),{key:0,show:H.value,"onUpdate:show":s[0]||(s[0]=e=>H.value=e),searchSelected:g(V).searchSelected,"onUpdate:searchSelected":s[1]||(s[1]=e=>g(V).searchSelected=e),tabsShow:g(V).tabsShow,activeTab:g(V).activeTab},null,8,["show","searchSelected","tabsShow","activeTab"])):w("",!0),m(c,{modelValue:g(V).JyElMessageBox.show,"onUpdate:modelValue":s[3]||(s[3]=e=>g(V).JyElMessageBox.show=e),show:g(V).JyElMessageBox.show,defaultAttribute:{}},{header:h((()=>[p("div",F,[p("img",{src:g(V).JyElMessageBox.header.icon,alt:""},null,8,N),p("span",null,b(g(V).JyElMessageBox.header.data),1)])])),content:h((()=>[p("div",L,b(g(V).JyElMessageBox.content.data),1)])),footer:h((()=>[m(r,{type:"primary",onClick:Z},{default:h((()=>[f(b(t.$t("t-zgj-operation.submit")),1)])),_:1}),m(r,{onClick:s[2]||(s[2]=e=>g(V).JyElMessageBox.show=!1)},{default:h((()=>[f(b(t.$t("t-zgj-operation.cancel")),1)])),_:1})])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-d7ae183b"]]);export{O as default};
