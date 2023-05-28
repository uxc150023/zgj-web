import{_ as e,C as a,v as l,k as n,o as s,c as t,m as i,l as c,F as o,e as d,n as r,g as u,t as v,a as h,w as m,be as g,a9 as y,ac as p,M as f,y as b,z as k,bf as C,r as _,p as w,cw as x,cx as I,cv as S,I as j,V as P,P as O,Q as q,u as A,f as L,b3 as E}from"./main-5d732c2e.js";import{_ as F}from"./back-27ff22b1.js";import{c as U}from"./Layout-db7f64fa.js";import{a as $}from"./authorityManagement-31aa3ecc.js";const B=e=>(b("data-v-ce06d115"),e=e(),k(),e),M={class:"permission-selected"},V={key:0,class:"label"},z=[B((()=>i("svg",{class:"iconpark-icon"},[i("use",{href:"#bumen"})],-1))),u(" 选中部门 ")],D={key:1,class:"permission-selected-role-list"},N={key:0},R={key:1},Q=["onClick"],G={key:0,class:"child-organ"},H=["onClick"],J={key:2,class:"label"},K=[B((()=>i("svg",{class:"iconpark-icon"},[i("use",{href:"#yuangong"})],-1))),u(" 选中员工")],T={key:3,class:"permission-selected-role-list"},W={class:"organ"},X={class:"role-container-a"},Y=B((()=>i("svg",{class:"iconpark-icon"},[i("use",{href:"#yuangong"})],-1))),Z=["onClick"],ee=B((()=>i("svg",{class:"iconpark-icon"},[i("use",{href:"#role-active"})],-1))),ae={key:4,class:"empty"},le=[B((()=>i("div",{class:"box"},[i("div",null,[i("img",{src:C})])],-1)))],ne={class:"permission-selected-role-list"},se={class:"role-container",ref:"roleRef"},te=B((()=>i("svg",{class:"iconpark-icon"},[i("use",{href:"#yuangong"})],-1))),ie={name:"Selected"},ce=e(Object.assign(ie,{setup(e){const b=a(),k=l({organs:[],users:[]}),C=l(!1),_=l([]),w=e=>e.map((e=>e.name)).join(" > "),x=async e=>{try{C.value=!0;const a=await p.userListByOrgan(e);_.value=a.data}catch(a){y(a)}};return(async()=>{try{const e=await g.systemOrganOrPerson.getRoleDataScopeEcho(b.query.roleId);k.value=e.data}catch(e){y(e)}})(),n((()=>{})),(e,a)=>{const l=f;return s(),t(o,null,[i("div",M,[k.value.organs.length?(s(),t("p",V,z)):c("",!0),k.value.organs.length?(s(),t("div",D,[(s(!0),t(o,null,d(k.value.organs,((e,a)=>(s(),t("div",{key:a},[i("div",{class:"organ",style:r(["0"===e.includeChild?"margin-bottom: 24px":"",{display:"flex","justify-content":"space-between"}])},[i("p",null,[u(v(w(e.organInfo))+" ",1),"0"===e.includeChild?(s(),t("span",N,"（不包含下级）")):(s(),t("span",R,"（包含下级）"))]),"0"===e.includeChild?(s(),t("a",{key:0,onClick:a=>x(e.organInfo[0].id)},"查看员工 》",8,Q)):c("",!0)],4),"0"!==e.includeChild?(s(),t("div",G,[(s(!0),t(o,null,d(e.subOrganInfoList,((e,a)=>(s(),t("div",{class:"organ",style:{"margin-bottom":"24px",display:"flex","justify-content":"space-between"},key:a},[i("p",null,v(w(e)),1),i("a",{onClick:a=>x(e[e.length-1].id)},"查看员工 》",8,H)])))),128))])):c("",!0)])))),128))])):c("",!0),k.value.users.length?(s(),t("p",J,K)):c("",!0),k.value.users.length?(s(),t("div",T,[(s(!0),t(o,null,d(k.value.users,((e,a)=>(s(),t("div",{key:a},[i("div",W,v(w(e.organInfo)),1),i("div",{class:"role-container",ref_for:!0,ref:"roleRef"},[i("div",X,[(s(!0),t(o,null,d(e.userInfo.slice(0,9),((e,a)=>(s(),t("div",{key:a,class:"role"},[Y,u(" "+v(e.name),1)])))),128))]),e.userInfo.length>3?(s(),t("div",{key:0,class:"role sum",onClick:a=>{return l=e.userInfo,C.value=!0,void(_.value=l);var l}},[ee,u(" +"+v(e.userInfo.length),1)],8,Z)):c("",!0)],512)])))),128))])):c("",!0),k.value.users.length||k.value.organs.length?c("",!0):(s(),t("div",ae,le))]),h(l,{"onUpdate:show":a[0]||(a[0]=e=>C.value=e),show:C.value,"destroy-on-close":"",title:"成员信息",width:900,footer:!1},{default:m((()=>[i("div",ne,[i("div",se,[(s(!0),t(o,null,d(_.value,((e,a)=>(s(),t("div",{key:a,class:"role"},[te,u(" "+v(e.name),1)])))),128))],512)])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-ce06d115"]]),oe=e=>(b("data-v-0a5af12b"),e=e(),k(),e),de={class:"Functions-container"},re={class:"container1 container"},ue={key:0,class:"container2 container"},ve={class:"left"},he=["onClick"],me=[oe((()=>i("use",{href:"#down"},null,-1)))],ge={class:"right"},ye={key:0},pe=oe((()=>i("template",null,null,-1))),fe=u("   "),be={key:0,class:"container3 container"},ke={class:"left"},Ce=["onClick"],_e=[oe((()=>i("use",{href:"#down"},null,-1)))],we={class:"right"},xe={key:0},Ie=u("   "),Se={key:0,class:"container4 container"},je={class:"left"},Pe=["onClick"],Oe=[oe((()=>i("use",{href:"#down"},null,-1)))],qe={class:"right"},Ae={key:0},Le=u("   "),Ee={key:0,class:"container5 container"},Fe={class:"left"},Ue={class:"right"},$e={key:0},Be=u("   "),Me={class:"bottom-btns"},Ve=u("确认"),ze=u("重置"),De={name:""},Ne=e(Object.assign(De,{setup(e){const r=l([]),g=l([]),f=l([]),b=l([]),k=a(),C=(e,a)=>!(!e||!e.length)&&!!e.find((e=>e.type===a)),j=(e,a)=>{a.putAway?(document.getElementsByClassName(`${e}-model`)[0].classList.add("height-0"),a.putAway=!1):(document.getElementsByClassName(`${e}-model`)[0].classList.remove("height-0"),a.putAway=!0)},P=e=>{const a=g.value.includes(e.id);if(a&&"point"!==e.type){if(e.children){const a=x([e],"children","id");g.value=Array.from(new Set([...g.value,...a]))}O(e).forEach((e=>{const a=x([e],"children","id");g.value.filter((e=>a.includes(e))).length===a.length-1&&g.value.push(e.id)}))}if(!a&&"point"!==e.type&&e.children){const a=x([e],"children","id");g.value=g.value.filter((e=>!a.includes(e)))}},O=e=>{const a=[];for(;"-1"!==e.pid;)e=I(r.value,"children","id",e.pid)[0],a.push(e);return a},q=e=>{if(g.value.includes(e.id))return!1;const a=x([e],"children").filter((e=>"point"!==e.type)).map((e=>e.id));return!!g.value.filter((e=>a.includes(e))).length},A=async()=>{try{await p.roleFunctionEdit({roleId:k.query.roleId,functionIds:g.value}),S("角色权限修改成功")}catch(e){y(e)}};return n((()=>{(async()=>{try{const e=await p.getAllPublic();r.value=e.data,f.value=r.value.map((e=>e.id)),b.value.push(f.value[0])}catch(e){y(e)}})(),(async()=>{try{const e=await p.getSelectedFunctionIds(k.query.roleId);g.value=e.data}catch(e){y(e)}})()})),(e,a)=>{const l=_("el-checkbox"),n=_("el-checkbox-group"),y=_("el-scrollbar"),p=_("el-button");return s(),t("div",de,[h(y,{height:"calc(100vh - 300px)",style:{padding:"10px 24px 24px 24px"}},{default:m((()=>[h(n,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e)},{default:m((()=>[(s(!0),t(o,null,d(r.value,(e=>(s(),t(o,{key:e.id},[i("div",re,[h(l,{label:e.id,indeterminate:q(e),onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","indeterminate","onChange"])]),(s(!0),t(o,null,d(e.children,(e=>(s(),t(o,{key:e.id},["point"!==e.type?(s(),t("div",ue,[i("div",ve,[C(e.children,"menu")||C(e.children,"tab")?(s(),t("svg",{key:0,class:"iconpark-icon",onClick:a=>j(e.id,e)},me,8,he)):c("",!0),h(l,{label:e.id,indeterminate:q(e),onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","indeterminate","onChange"])]),i("div",ge,[(s(!0),t(o,null,d(e.children,((e,a)=>(s(),t(o,{key:a},["point"===e.type?(s(),t("div",ye,[pe,h(l,{label:e.id,onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","onChange"]),fe])):c("",!0)],64)))),128))])])):c("",!0),i("div",{class:w(["model height-0",[`${e.id}-model`]])},[(s(!0),t(o,null,d(e.children,(e=>(s(),t(o,{key:e.id},["point"!==e.type?(s(),t("div",be,[i("div",ke,[C(e.children,"menu")||C(e.children,"tab")?(s(),t("svg",{key:0,class:"iconpark-icon",onClick:a=>j(e.id,e)},_e,8,Ce)):c("",!0),h(l,{label:e.id,indeterminate:q(e),onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","indeterminate","onChange"])]),i("div",we,[(s(!0),t(o,null,d(e.children,((e,a)=>(s(),t(o,{key:a},["point"===e.type?(s(),t("div",xe,[h(l,{label:e.id,onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","onChange"]),Ie])):c("",!0)],64)))),128))])])):c("",!0),i("div",{class:w(["model height-0",[`${e.id}-model`]])},[(s(!0),t(o,null,d(e.children,(e=>(s(),t(o,{key:e.id},["point"!==e.type?(s(),t("div",Se,[i("div",je,[C(e.children,"menu")||C(e.children,"tab")?(s(),t("svg",{key:0,class:"iconpark-icon",onClick:a=>j(e.id,e)},Oe,8,Pe)):c("",!0),h(l,{label:e.id,indeterminate:q(e),onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","indeterminate","onChange"])]),i("div",qe,[(s(!0),t(o,null,d(e.children,((e,a)=>(s(),t(o,{key:a},["point"===e.type?(s(),t("div",Ae,[h(l,{label:e.id,onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","onChange"]),Le])):c("",!0)],64)))),128))])])):c("",!0),i("div",{class:w(["model height-0",[`${e.id}-model`]])},[(s(!0),t(o,null,d(e.children,(e=>(s(),t(o,{key:e.id},["point"!==e.type?(s(),t("div",Ee,[i("div",Fe,[h(l,{label:e.id,onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","onChange"])]),i("div",Ue,[(s(!0),t(o,null,d(e.children,((e,a)=>(s(),t(o,{key:a},["point"===e.type?(s(),t("div",$e,[h(l,{label:e.id,onChange:a=>P(e)},{default:m((()=>[u(v(e.name),1)])),_:2},1032,["label","onChange"]),Be])):c("",!0)],64)))),128))])])):c("",!0)],64)))),128))],2)],64)))),128))],2)],64)))),128))],2)],64)))),128))],64)))),128))])),_:1},8,["modelValue"])])),_:1},8,["height"]),i("div",Me,[h(p,{type:"primary",onClick:A},{default:m((()=>[Ve])),_:1}),h(p,null,{default:m((()=>[ze])),_:1})])])}}}),[["__scopeId","data-v-0a5af12b"]]),Re=e=>(b("data-v-ea838dc6"),e=e(),k(),e),Qe={class:"accomplish-container"},Ge={class:"breadcrumb"},He=u(" 权限管理 "),Je=u(" 权限配置 "),Ke={class:"title"},Te={class:"title-desc"},We=u(" 权限配置 "),Xe={class:"role"},Ye=Re((()=>i("div",null,null,-1))),Ze={class:"custom-tabs"},ea={class:"function"},aa={key:0,class:"custom-data"},la={class:"item"},na=Re((()=>i("div",{class:"item-label"},"默认数据权限",-1))),sa={class:"i"},ta={class:"item"},ia=Re((()=>i("div",{class:"item-label"},"自定义数据权限",-1))),ca=u("编辑"),oa={class:"item"},da=Re((()=>i("div",{class:"item-label"},null,-1))),ra={name:"PermissionSelect"},ua=e(Object.assign(ra,{setup(e){const n=j(),o=a(),d=l("first"),r=l(o.query.roleName),g=l([{name:"t-zgj-person.FunctionalPermissions",value:"first"},{name:"t-zgj-person.DataPermissions",value:"second"}]),f=l({roleId:""});f.value={id:o.query.roleId};const b=l([{label:"向上继承",msg:"可以查看下级部门员工创建数据"},{label:"仅自己",msg:"仅可以查看创建人自己的数据"}]),k=l(null),C=l([]);$.getSetting().then((e=>{const a="1"===e.data.userBaseAuth?0:1;k.value=b.value[a]}));(async()=>{try{const e=await p.getAllPublic();C.value=e.data}catch(e){y(e)}})();const w=()=>{n.go(-1)},x=l(["user","organ"]),I=l(!1),S=l([]),B=()=>{I.value=!0},M=e=>{},V=l({padding:"10px 0 0px 0px"});return(e,a)=>{const l=_("el-breadcrumb-item"),n=_("el-breadcrumb"),o=_("el-button");return s(),t("div",Qe,[h(U,{Layout:"breadcrumb,title,custom,fixed",cardStyle:V.value},{breadcrumb:m((()=>[i("div",Ge,[h(n,{separator:"/"},{default:m((()=>[h(l,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:m((()=>[He])),_:1}),h(l,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:m((()=>[Je])),_:1})])),_:1})])])),title:m((()=>[i("div",Ke,[i("div",Te,[i("img",{class:"title-desc-img",src:F,alt:"",onClick:w}),We,i("span",Xe,"（"+v(r.value)+"）",1)]),Ye])])),noScroll:m((()=>[i("div",Ze,[h(P,{active:d.value,label:g.value,"onUpdate:active":a[0]||(a[0]=e=>d.value=e)},null,8,["active","label"])]),O(i("div",ea,[h(A(Ne))],512),[[q,"first"===d.value]]),"second"===d.value?(s(),t("div",aa,[i("div",la,[na,i("div",null,[u(v(k.value.label)+" ",1),i("span",sa," （"+v(k.value.msg)+"） ",1)])]),i("div",ta,[ia,h(o,{type:"primary",onClick:B},{default:m((()=>[ca])),_:1})]),i("div",oa,[da,h(A(ce))])])):c("",!0)])),_:1},8,["cardStyle"]),I.value?(s(),L(E,{key:0,show:I.value,"onUpdate:show":a[1]||(a[1]=e=>I.value=e),tabsShow:x.value,"onUpdate:searchSelected":M,searchSelected:S.value,editDeploy:"",apiModule:"systemOrganOrPerson",queryParams:f.value},null,8,["show","tabsShow","searchSelected","queryParams"])):c("",!0)])}}}),[["__scopeId","data-v-ea838dc6"]]);export{ua as default};
