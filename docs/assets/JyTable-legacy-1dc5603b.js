System.register(["./chunk-element-plus-legacy-cff7802d.js","./sangedian-legacy-75d81ddc.js","./Layout-legacy-ddb3d5bb.js","./searchForm-legacy-0db0fcbc.js","./pagination-legacy-34422168.js","./batch-legacy-06a13475.js","./chunk-vform-legacy-9e71fe2f.js","./index-legacy-58f7c896.js"],(function(e,t){"use strict";var a,n,o,l,r,c,s,d,i,u,p,m,b,f,y,h,g,v,k,w,x,F,D,S,T,j,C,E,_,B,A,P,q,V,z,R,$=document.createElement("style");return $.textContent=".rankDisplayData .el-button--info.is-link{--el-button-text-color: var(--jy-info-6)}.rankDisplayData .el-button.is-link:hover{color:var(--jy-info-5)}.rankDisplayData .el-button:active{color:var(--jy-info-6)!important}.components-table[data-v-f53d4a4b]{margin:0%;width:100%}.components-table th[data-v-f53d4a4b]{font-weight:var(--jy-font-weight-400)}.components-table[data-v-f53d4a4b] .el-popper{max-width:50%!important}.components-table[data-v-f53d4a4b] .el-dropdown-item-add{color:var(--jy-secondary-5)!important}.components-table[data-v-f53d4a4b] .el-table thead{color:var(--jy-color-text-1);font-size:var(--jy-font-size-body-2);font-weight:var(--jy-font-weight-400)}.components-table[data-v-f53d4a4b] .el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--jy-primary-6);border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-checkbox__inner:hover{border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--jy-primary-6);border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.current-row>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.el-table__row--striped.current-row>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.el-table__row--striped>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row>td{background-color:var(--jy-background-color-1)}.components-table[data-v-f53d4a4b] .el-table tbody tr:hover>td{background-color:var(--jy-background-color-1)}.components-table .flag-cell[data-v-f53d4a4b]{display:flex;align-items:center}.components-table .flag-cell .diot[data-v-f53d4a4b]{width:8px;height:8px;border-radius:50%;margin-right:5px}.components-table .flag-cell .diot-1[data-v-f53d4a4b]{background:rgba(0,0,0,.45)}.components-table .flag-cell .diot-0[data-v-f53d4a4b]{background:rgba(0,128,0,.65)}.components-table .center[data-v-f53d4a4b]{justify-content:center}#tableId[data-v-f53d4a4b]:fullscreen{padding:50px 50px 10px;background:#ffffff}.pagination[data-v-f53d4a4b]{padding:24px 0}.batch[data-v-f53d4a4b]{padding:8px 0}\n",document.head.appendChild($),{setters:[e=>{a=e.b,n=e.r,o=e.w,l=e.a9,r=e.C,c=e.Y,s=e.F,d=e.G,i=e.B,u=e.N,p=e.L,m=e.H,b=e.u,f=e.O,y=e.S,h=e.Q,g=e.J,v=e.I,k=e.P,w=e.U,x=e._,F=e.K,D=e.T,S=e.R,T=e.n,j=e.V,C=e.W},e=>{E=e.d},e=>{_=e.c},e=>{B=e._},e=>{A=e.c},e=>{P=e.c},e=>{q=e.g,V=e.B,z=e.y},e=>{R=e.a}],execute:function(){const t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],$=(()=>{if("undefined"==typeof document)return!1;const e=t[0],a={};for(const n of t)if((null==n?void 0:n[1])in document){for(const[t,o]of n.entries())a[e[t]]=o;return a}return!1})(),H={change:$.fullscreenchange,error:$.fullscreenerror};let N={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const o=()=>{N.off("change",o),a()};N.on("change",o);const l=e[$.requestFullscreen](t);l instanceof Promise&&l.then(o).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!N.isFullscreen)return void e();const a=()=>{N.off("change",a),e()};N.on("change",a);const n=document[$.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>N.isFullscreen?N.exit():N.request(e,t),onchange(e){N.on("change",e)},onerror(e){N.on("error",e)},on(e,t){const a=H[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=H[e];a&&document.removeEventListener(a,t,!1)},raw:$};Object.defineProperties(N,{isFullscreen:{get:()=>Boolean(document[$.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!==(e=document[$.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[$.fullscreenEnabled])}}),$||(N={isEnabled:!1});const I=N,Y={class:"components-table",id:"tableId"},L={class:"batch"},M={key:0,class:"switch"},O={key:1},U={class:"diot diot-0"},G={class:"diot diot-1"},J=["index"],K={key:5,class:"rankDisplayData"},Q=(e=>(j("data-v-f53d4a4b"),e=e(),C(),e))((()=>m("span",{class:"el-dropdown-link"},[m("img",{class:"rankDisplayData-node",src:E,alt:""})],-1))),W={class:"pagination"},X={props:{url:{type:String,required:!0},componentsSearchForm:{type:Object},componentsTableHeader:{type:Object},componentsBatch:{type:Object},tableClick:{type:String},isSelection:{type:Boolean,default:!0},isNo:{type:Boolean,default:!0},queryParams:{type:Object},hasTree:{type:Boolean,default:!1},hasTabs:{type:Boolean,default:!1},method:{type:String,default:"GET"},needAutoRequest:{type:Boolean,default:!0},statusColoum:{type:String},openValue:{},breadcrumb:{type:Boolean,default:!1},computedData:{type:Array,default:()=>[]},handleApprovalStatus:{type:Boolean,default:!1}},emits:["cellClick","customClick","clickBatchButton","clickElement","getResult"],setup(e,{expose:t,emit:j}){const C=e,E=a({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}}},componentsTable:{data:[],headers:C.componentsTableHeader,defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:n})=>{if(t.property===C.tableClick)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0}}}),q=n(!1),$=n(null),H=n(null),N=n(null);o((()=>C.componentsTableHeader),(()=>{E.componentsTable.headers=C.componentsTableHeader}));const X=(e,t)=>{var a;return null===(a=e.statusList.find((a=>a.key===t[e.prop])))||void 0===a?void 0:a.label},Z=(e,t)=>{j("clickElement",e,t)},ee=n(!1),te=(e,t)=>{"refresh"!==e.name?"fullscreen"!==e.name?j("clickBatchButton",e,E.componentsBatch.selectionData):ae():pe()},ae=()=>{const e=document.getElementById("tableId");I.enabled||(I.isFullscreen?I.exit():I.request(e))};function ne(e){E.componentsTable.headers=e}function oe(e,t,a,n){t.property===C.tableClick&&j("cellClick",e,t,a,n)}function le(e){E.componentsBatch.selectionData=e,E.componentsBatch.selectionData.length>0?E.componentsBatch.defaultAttribute.disabled=!1:E.componentsBatch.defaultAttribute.disabled=!0}function re(e,t,a,n){j("customClick",e,t,a,n)}I.isEnabled&&I.on("change",(()=>{ee.value=I.isFullscreen}));const ce=e=>{e&&"reset"!==e.id||($.value.clearSort(),C.componentsSearchForm.data.forEach((e=>{"checkButton"===e.type?e.data.forEach((e=>{delete e.checked})):"checkbox"===e.type?e.checkbox.forEach((e=>{e.value=!1})):"derivable"===e.type||"dialog"===e.type?(e.options=[],e.values=e.defaultAttribute.multiple?[]:null):"scopeInput"===e.type?(e.startValue=null,e.endValue=null):delete e.value}))),pe()};function se(e){H.value=e,pe()}const de=e=>{E.componentsPagination.data.index=e,me()},ie=e=>{E.componentsPagination.data.pageNumber=e,pe()};function ue(){return $.value.getSelectionRows()}function pe(e){T((()=>{e||(E.componentsPagination.data.index=1,E.componentsTable.data=[],E.componentsPagination.data.amount=0),me()}))}const me=()=>{q.value=!0;const e={};C.componentsSearchForm.data.forEach((t=>{"checkButton"===t.type?e[t.id]=t.data.filter((e=>e.checked)).map((e=>e.id)).join(","):"checkbox"===t.type?e[t.id]=t.checkbox[0].value?t.checkbox[0].value:null:"picker"===t.type?"daterange"===t.defaultAttribute.type&&t.value&&("array"===t.requestType?(e[t.startRequest?t.startRequest:"beginTime"]=t.value[0]+" 00:00:00",e[t.endRequest?t.endRequest:"endTime"]=t.value[1]+" 23:59:59"):e[t.id]=t.value[0]+" 00:00:00,"+t.value[1]+" 23:59:59"):"derivable"===t.type?t.defaultAttribute.multiple?e[t.requestParams]=t.values&&t.values.length?t.defaultAttribute.joinStr?t.values.join(t.defaultAttribute.joinStr):t.values:null:e[t.requestParams]=t.values:"scopeInput"===t.type?(e[t.startAttribute.id]=t.startValue,e[t.endAttribute.id]=t.endValue):"dialog"===t.type?e[t.id]=t.values||null:e[t.id]=t.value}));const t={current:E.componentsPagination.data.index,size:E.componentsPagination.data.pageNumber,pageNo:E.componentsPagination.data.index,pageSize:E.componentsPagination.data.pageNumber,sorts:H.value?H.value.prop+","+("ascending"===H.value.order?"asc":"desc"):"",...e,...C.queryParams};let a={};a="GET"===C.method?{params:t}:{data:t},V({method:C.method,url:C.url,...a}).then((async e=>{var t,a,n;if(E.componentsTable.data=(null===(t=e.data)||void 0===t?void 0:t.records)||(null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.records)||[],E.componentsPagination.data.amount=0===e.data.total?e.data.total:e.data.total||e.data.data.total,E.componentsPagination.defaultAttribute.total=0===e.data.total?e.data.total:e.data.total||e.data.data.total,C.handleApprovalStatus){const e=await R.listApplyTypeTree({});E.componentsTable.data.forEach((t=>{const a=e.data.find((e=>Number(e.applyTypeId)===t.subType));t.subTypeName=a?a.applyTypeName:"",t.createTime=t.createTime&&z(t.createTime).format("YYYY-MM-DD HH:mm"),t.updateTime=t.updateTime&&z(t.updateTime).format("YYYY-MM-DD HH:mm")}))}q.value=!1,C.computedData.length&&C.computedData.forEach((e=>{E.componentsTable.data.forEach((t=>{t[e.computedData]?V({...e.request,params:{[e.computedData]:t[e.computedData]},hideError:!0}).then((a=>{switch(a.data.data.instanceStatus){case 1:t[e.prop]="审批中";break;case 2:t[e.prop]="已完成";break;case 3:t[e.prop]="拒绝";break;case 4:t[e.prop]="挂起";break;case 5:t[e.prop]="作废";break;default:t[e.prop]="未知"}}),(()=>{t[e.prop]="未知"})):t[e.prop]="未知"}))})),j("getResult",E.componentsTable.data)}),(()=>{q.value=!1}))},be=(e,t,a)=>{};return l((()=>{C.needAutoRequest&&pe()})),t({reloadData:pe,clickSubmit:ce,getSelectionRows:ue,setTableHeader:ne,reloadSearchForm:(e,t)=>{N.value.initFormData(e,t)},toggleFull:ae}),(e,t)=>{const a=r("el-table-column"),n=r("el-switch"),o=r("el-button"),l=r("el-dropdown-item"),T=r("el-dropdown-menu"),j=r("el-dropdown"),V=r("el-table"),z=c("loading");return s(),d("div",null,[i(b(_),{Layout:"title,searchForm,table,pagination,batch"+(C.hasTree?",tree":"")+(C.hasTabs?",tabs":"")+(C.breadcrumb?",breadcrumb":"")},{breadcrumb:u((()=>[p(e.$slots,"breadcrumb",{},void 0,!0)])),title:u((()=>[p(e.$slots,"title",{},void 0,!0)])),tabs:u((()=>[p(e.$slots,"tabs",{},void 0,!0)])),searchForm:u((()=>[m("div",null,[i(b(B),{ref_key:"searchForm",ref:N,data:C.componentsSearchForm.data,butData:C.componentsSearchForm.butData,style:f(b(E).componentsSearchForm.style),onClickSubmit:ce,onReloadData:pe,onClickElement:Z},null,8,["data","butData","style"])])])),tree:u((()=>[p(e.$slots,"tree",{},void 0,!0)])),table:u((()=>[m("div",Y,[m("div",L,[i(b(P),{tableHeader:C.componentsTableHeader,data:C.componentsBatch?C.componentsBatch.data:[],defaultAttribute:b(E).componentsBatch.defaultAttribute,onClickBatchButton:te,onSetTableHeader:ne,isFullscreen:ee.value,"onUpdate:isFullscreen":ae},null,8,["tableHeader","data","defaultAttribute","isFullscreen"])]),y((s(),h(V,x(b(E).componentsTable.defaultAttribute,{ref_key:"table",ref:$,data:b(E).componentsTable.data,onSelectionChange:le,onCellClick:oe,onRowClick:be,onCustomClick:re,onSortChange:se,onGetSelectionRows:ue,style:{width:"100%"}}),{default:u((()=>[C.isSelection?(s(),h(a,{key:0,type:"selection",width:"50"})):g("",!0),C.isNo?(s(),h(a,{key:1,label:"序号",type:"index",width:"55",fixed:"left",align:"center"},{default:u((e=>[m("span",null,v((b(E).componentsPagination.data.index?(b(E).componentsPagination.data.index-1)*b(E).componentsPagination.data.pageNumber:0)+e.$index+1),1)])),_:1})):g("",!0),(s(!0),d(k,null,w(b(E).componentsTable.headers,((t,r)=>(s(),d(k,null,[!1!==t.show?(s(),h(a,x({key:0},t,{key:r,"show-overflow-tooltip":""}),{default:u((a=>["switch"==t.customDisplayType?(s(),d("div",M,[i(n,{modelValue:a.row.switchValue,"onUpdate:modelValue":e=>a.row.switchValue=e},null,8,["modelValue","onUpdate:modelValue"])])):g("",!0),"format"==t.customDisplayType?(s(),d("span",O,v(a.row[t.prop])+" "+v(t.unit),1)):g("",!0),"flag"===t.prop?(s(),d("div",{key:2,class:F(["flag-cell",t.align])},[y(m("div",U,null,512),[[D,a.row[C.statusColoum]===C.openValue]]),y(m("div",G,null,512),[[D,a.row[C.statusColoum]!==C.openValue]]),S(" "+v(a.row[C.statusColoum]===C.openValue?e.$t("t-zgj-Enable"):a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-dept.Deactivation"):a.row[t.prop]),1)],2)):g("",!0),"format"===t.type?(s(),d("div",{key:3,class:F(["flag-cell",t.align])},v(X(t,a.row)),3)):g("",!0),"custom"==t.customDisplayType?(s(),d("div",{key:4,class:"custom",index:a.$index},[p(e.$slots,"custom_"+t.prop,{value:a.row},void 0,!0)],8,J)):g("",!0),t.rankDisplayData&&t.rankDisplayData.length>0?(s(),d("div",K,[(s(!0),d(k,null,w(t.rankDisplayData.slice(0,4),((t,n)=>(s(),h(o,{key:n,type:"info",plain:"",onClick:e=>re(a.$index,a.row,t),link:"",text:""},{default:u((()=>[S(v("status"===t.name?a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128)),t.rankDisplayData.length>4?(s(),h(o,{key:0,link:""},{default:u((()=>[i(j,null,{dropdown:u((()=>[i(T,null,{default:u((()=>[(s(!0),d(k,null,w(t.rankDisplayData.slice(4),((t,n)=>(s(),h(l,{key:n,onClick:e=>re(a.$index,a.row,t)},{default:u((()=>[S(v("status"===t.name?a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),default:u((()=>[Q])),_:2},1024)])),_:2},1024)):g("",!0)])):g("",!0)])),_:2},1040)):g("",!0)],64)))),256))])),_:3},16,["data"])),[[z,q.value]]),m("div",W,[i(b(A),{data:b(E).componentsPagination.data,defaultAttribute:b(E).componentsPagination.defaultAttribute,onSizeChange:ie,onCurrentChange:de},null,8,["data","defaultAttribute"])])])])),_:3},8,["Layout"])])}}};e("J",q(X,[["__scopeId","data-v-f53d4a4b"]]))}}}));
