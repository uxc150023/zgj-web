System.register(["./main-legacy-80c027be.js","./sangedian-legacy-5b82475d.js","./Layout-legacy-b2631a91.js","./searchForm-legacy-661aae1d.js","./pagination-legacy-abc2a695.js","./batch-legacy-5a4e36c5.js","./index-legacy-1964794f.js"],(function(e,t){"use strict";var a,n,o,l,r,c,s,d,i,u,p,m,b,f,y,h,g,v,k,w,x,F,D,S,j,T,E,_,C,B,A,P,q,z,R,V,$=document.createElement("style");return $.textContent=".rankDisplayData .el-button--info.is-link{--el-button-text-color: var(--jy-info-6)}.rankDisplayData .el-button.is-link:hover{color:var(--jy-info-5)}.rankDisplayData .el-button:active{color:var(--jy-info-6)!important}.components-table[data-v-f53d4a4b]{margin:0%;width:100%}.components-table th[data-v-f53d4a4b]{font-weight:var(--jy-font-weight-400)}.components-table[data-v-f53d4a4b] .el-popper{max-width:50%!important}.components-table[data-v-f53d4a4b] .el-dropdown-item-add{color:var(--jy-secondary-5)!important}.components-table[data-v-f53d4a4b] .el-table thead{color:var(--jy-color-text-1);font-size:var(--jy-font-size-body-2);font-weight:var(--jy-font-weight-400)}.components-table[data-v-f53d4a4b] .el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--jy-primary-6);border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-checkbox__inner:hover{border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--jy-primary-6);border-color:var(--jy-primary-6)}.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.current-row>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.el-table__row--striped.current-row>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row.el-table__row--striped>td,.components-table[data-v-f53d4a4b] .el-table__body tr.hover-row>td{background-color:var(--jy-background-color-1)}.components-table[data-v-f53d4a4b] .el-table tbody tr:hover>td{background-color:var(--jy-background-color-1)}.components-table .flag-cell[data-v-f53d4a4b]{display:flex;align-items:center}.components-table .flag-cell .diot[data-v-f53d4a4b]{width:8px;height:8px;border-radius:50%;margin-right:5px}.components-table .flag-cell .diot-1[data-v-f53d4a4b]{background:rgba(0,0,0,.45)}.components-table .flag-cell .diot-0[data-v-f53d4a4b]{background:rgba(0,128,0,.65)}.components-table .center[data-v-f53d4a4b]{justify-content:center}#tableId[data-v-f53d4a4b]:fullscreen{padding:50px 50px 10px;background:#ffffff}.pagination[data-v-f53d4a4b]{padding:24px 0}.batch[data-v-f53d4a4b]{padding:8px 0}\n",document.head.appendChild($),{setters:[e=>{a=e._,n=e.h,o=e.v,l=e.i,r=e.j,c=e.r,s=e.ad,d=e.o,i=e.c,u=e.a,p=e.w,m=e.b,b=e.m,f=e.u,y=e.n,h=e.P,g=e.f,v=e.l,k=e.t,w=e.F,x=e.e,F=e.q,D=e.p,S=e.Q,j=e.g,T=e.aa,E=e.a7,_=e.a3,C=e.y,B=e.z},e=>{A=e.d},e=>{P=e.c},e=>{q=e._},e=>{z=e.c},e=>{R=e.c},e=>{V=e.a}],execute:function(){const t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],$=(()=>{if("undefined"==typeof document)return!1;const e=t[0],a={};for(const n of t)if((null==n?void 0:n[1])in document){for(const[t,o]of n.entries())a[e[t]]=o;return a}return!1})(),H={change:$.fullscreenchange,error:$.fullscreenerror};let N={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const o=()=>{N.off("change",o),a()};N.on("change",o);const l=e[$.requestFullscreen](t);l instanceof Promise&&l.then(o).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!N.isFullscreen)return void e();const a=()=>{N.off("change",a),e()};N.on("change",a);const n=document[$.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>N.isFullscreen?N.exit():N.request(e,t),onchange(e){N.on("change",e)},onerror(e){N.on("error",e)},on(e,t){const a=H[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=H[e];a&&document.removeEventListener(a,t,!1)},raw:$};Object.defineProperties(N,{isFullscreen:{get:()=>Boolean(document[$.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!==(e=document[$.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[$.fullscreenEnabled])}}),$||(N={isEnabled:!1});const I=N,Y={class:"components-table",id:"tableId"},L={class:"batch"},M={key:0,class:"switch"},O={key:1},G={class:"diot diot-0"},U={class:"diot diot-1"},J=["index"],Q={key:5,class:"rankDisplayData"},K=(e=>(C("data-v-f53d4a4b"),e=e(),B(),e))((()=>b("span",{class:"el-dropdown-link"},[b("img",{class:"rankDisplayData-node",src:A,alt:""})],-1))),W={class:"pagination"},X={props:{url:{type:String,required:!0},componentsSearchForm:{type:Object},componentsTableHeader:{type:Object},componentsBatch:{type:Object},tableClick:{type:String},isSelection:{type:Boolean,default:!0},isNo:{type:Boolean,default:!0},queryParams:{type:Object},hasTree:{type:Boolean,default:!1},hasTabs:{type:Boolean,default:!1},method:{type:String,default:"GET"},needAutoRequest:{type:Boolean,default:!0},statusColoum:{type:String},openValue:{},breadcrumb:{type:Boolean,default:!1},computedData:{type:Array,default:()=>[]},handleApprovalStatus:{type:Boolean,default:!1}},emits:["cellClick","customClick","clickBatchButton","clickElement","getResult"],setup(e,{expose:t,emit:a}){const C=e,B=n({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}}},componentsTable:{data:[],headers:C.componentsTableHeader,defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:n})=>{if(t.property===C.tableClick)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0}}}),A=o(!1),$=o(null),H=o(null),N=o(null);l((()=>C.componentsTableHeader),(()=>{B.componentsTable.headers=C.componentsTableHeader}));const X=(e,t)=>{var a;return null===(a=e.statusList.find((a=>a.key===t[e.prop])))||void 0===a?void 0:a.label},Z=(e,t)=>{a("clickElement",e,t)},ee=o(!1),te=(e,t)=>{"refresh"!==e.name?"fullscreen"!==e.name?a("clickBatchButton",e,B.componentsBatch.selectionData):ae():pe()},ae=()=>{const e=document.getElementById("tableId");I.enabled||(I.isFullscreen?I.exit():I.request(e))};function ne(e){B.componentsTable.headers=e}function oe(e,t,n,o){t.property===C.tableClick&&a("cellClick",e,t,n,o)}function le(e){B.componentsBatch.selectionData=e,B.componentsBatch.selectionData.length>0?B.componentsBatch.defaultAttribute.disabled=!1:B.componentsBatch.defaultAttribute.disabled=!0}function re(e,t,n,o){a("customClick",e,t,n,o)}I.isEnabled&&I.on("change",(()=>{ee.value=I.isFullscreen}));const ce=e=>{e&&"reset"!==e.id||($.value.clearSort(),C.componentsSearchForm.data.forEach((e=>{"checkButton"===e.type?e.data.forEach((e=>{delete e.checked})):"checkbox"===e.type?e.checkbox.forEach((e=>{e.value=!1})):"derivable"===e.type||"dialog"===e.type?(e.options=[],e.values=e.defaultAttribute.multiple?[]:null):"scopeInput"===e.type?(e.startValue=null,e.endValue=null):delete e.value}))),pe()};function se(e){H.value=e,pe()}const de=e=>{B.componentsPagination.data.index=e,me()},ie=e=>{B.componentsPagination.data.pageNumber=e,pe()};function ue(){return $.value.getSelectionRows()}function pe(e){T((()=>{e||(B.componentsPagination.data.index=1,B.componentsTable.data=[],B.componentsPagination.data.amount=0),me()}))}const me=()=>{A.value=!0;const e={};C.componentsSearchForm.data.forEach((t=>{"checkButton"===t.type?e[t.id]=t.data.filter((e=>e.checked)).map((e=>e.id)).join(","):"checkbox"===t.type?e[t.id]=t.checkbox[0].value?t.checkbox[0].value:null:"picker"===t.type?"daterange"===t.defaultAttribute.type&&t.value&&("array"===t.requestType?(e[t.startRequest?t.startRequest:"beginTime"]=t.value[0]+" 00:00:00",e[t.endRequest?t.endRequest:"endTime"]=t.value[1]+" 23:59:59"):e[t.id]=t.value[0]+" 00:00:00,"+t.value[1]+" 23:59:59"):"derivable"===t.type?t.defaultAttribute.multiple?e[t.requestParams]=t.values&&t.values.length?t.defaultAttribute.joinStr?t.values.join(t.defaultAttribute.joinStr):t.values:null:e[t.requestParams]=t.values:"scopeInput"===t.type?(e[t.startAttribute.id]=t.startValue,e[t.endAttribute.id]=t.endValue):"dialog"===t.type?e[t.id]=t.values||null:e[t.id]=t.value}));const t={current:B.componentsPagination.data.index,size:B.componentsPagination.data.pageNumber,pageNo:B.componentsPagination.data.index,pageSize:B.componentsPagination.data.pageNumber,sorts:H.value?H.value.prop+","+("ascending"===H.value.order?"asc":"desc"):"",...e,...C.queryParams};let n={};n="GET"===C.method?{params:t}:{data:t},E({method:C.method,url:C.url,...n}).then((async e=>{var t,n,o;if(B.componentsTable.data=(null===(t=e.data)||void 0===t?void 0:t.records)||(null===(n=e.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.records)||[],B.componentsPagination.data.amount=0===e.data.total?e.data.total:e.data.total||e.data.data.total,B.componentsPagination.defaultAttribute.total=0===e.data.total?e.data.total:e.data.total||e.data.data.total,C.handleApprovalStatus){const e=await V.listApplyTypeTree({});B.componentsTable.data.forEach((t=>{const a=e.data.find((e=>Number(e.applyTypeId)===t.subType));t.subTypeName=a?a.applyTypeName:"",t.createTime=t.createTime&&_(t.createTime).format("YYYY-MM-DD HH:mm"),t.updateTime=t.updateTime&&_(t.updateTime).format("YYYY-MM-DD HH:mm")}))}A.value=!1,C.computedData.length&&C.computedData.forEach((e=>{B.componentsTable.data.forEach((t=>{t[e.computedData]?E({...e.request,params:{[e.computedData]:t[e.computedData]},hideError:!0}).then((a=>{switch(a.data.data.instanceStatus){case 1:t[e.prop]="审批中";break;case 2:t[e.prop]="已完成";break;case 3:t[e.prop]="拒绝";break;case 4:t[e.prop]="挂起";break;case 5:t[e.prop]="作废";break;default:t[e.prop]="未知"}}),(()=>{t[e.prop]="未知"})):t[e.prop]="未知"}))})),a("getResult",B.componentsTable.data)}),(()=>{A.value=!1}))},be=(e,t,a)=>{};return r((()=>{C.needAutoRequest&&pe()})),t({reloadData:pe,clickSubmit:ce,getSelectionRows:ue,setTableHeader:ne,reloadSearchForm:(e,t)=>{N.value.initFormData(e,t)},toggleFull:ae}),(e,t)=>{const a=c("el-table-column"),n=c("el-switch"),o=c("el-button"),l=c("el-dropdown-item"),r=c("el-dropdown-menu"),T=c("el-dropdown"),E=c("el-table"),_=s("loading");return d(),i("div",null,[u(f(P),{Layout:"title,searchForm,table,pagination,batch"+(C.hasTree?",tree":"")+(C.hasTabs?",tabs":"")+(C.breadcrumb?",breadcrumb":"")},{breadcrumb:p((()=>[m(e.$slots,"breadcrumb",{},void 0,!0)])),title:p((()=>[m(e.$slots,"title",{},void 0,!0)])),tabs:p((()=>[m(e.$slots,"tabs",{},void 0,!0)])),searchForm:p((()=>[b("div",null,[u(f(q),{ref_key:"searchForm",ref:N,data:C.componentsSearchForm.data,butData:C.componentsSearchForm.butData,style:y(f(B).componentsSearchForm.style),onClickSubmit:ce,onReloadData:pe,onClickElement:Z},null,8,["data","butData","style"])])])),tree:p((()=>[m(e.$slots,"tree",{},void 0,!0)])),table:p((()=>[b("div",Y,[b("div",L,[u(f(R),{tableHeader:C.componentsTableHeader,data:C.componentsBatch?C.componentsBatch.data:[],defaultAttribute:f(B).componentsBatch.defaultAttribute,onClickBatchButton:te,onSetTableHeader:ne,isFullscreen:ee.value,"onUpdate:isFullscreen":ae},null,8,["tableHeader","data","defaultAttribute","isFullscreen"])]),h((d(),g(E,F(f(B).componentsTable.defaultAttribute,{ref_key:"table",ref:$,data:f(B).componentsTable.data,onSelectionChange:le,onCellClick:oe,onRowClick:be,onCustomClick:re,onSortChange:se,onGetSelectionRows:ue,style:{width:"100%"}}),{default:p((()=>[C.isSelection?(d(),g(a,{key:0,type:"selection",width:"50"})):v("",!0),C.isNo?(d(),g(a,{key:1,label:"序号",type:"index",width:"55",fixed:"left",align:"center"},{default:p((e=>[b("span",null,k((f(B).componentsPagination.data.index?(f(B).componentsPagination.data.index-1)*f(B).componentsPagination.data.pageNumber:0)+e.$index+1),1)])),_:1})):v("",!0),(d(!0),i(w,null,x(f(B).componentsTable.headers,((t,c)=>(d(),i(w,null,[!1!==t.show?(d(),g(a,F({key:0},t,{key:c,"show-overflow-tooltip":""}),{default:p((a=>["switch"==t.customDisplayType?(d(),i("div",M,[u(n,{modelValue:a.row.switchValue,"onUpdate:modelValue":e=>a.row.switchValue=e},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),"format"==t.customDisplayType?(d(),i("span",O,k(a.row[t.prop])+" "+k(t.unit),1)):v("",!0),"flag"===t.prop?(d(),i("div",{key:2,class:D(["flag-cell",t.align])},[h(b("div",G,null,512),[[S,a.row[C.statusColoum]===C.openValue]]),h(b("div",U,null,512),[[S,a.row[C.statusColoum]!==C.openValue]]),j(" "+k(a.row[C.statusColoum]===C.openValue?e.$t("t-zgj-Enable"):a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-dept.Deactivation"):a.row[t.prop]),1)],2)):v("",!0),"format"===t.type?(d(),i("div",{key:3,class:D(["flag-cell",t.align])},k(X(t,a.row)),3)):v("",!0),"custom"==t.customDisplayType?(d(),i("div",{key:4,class:"custom",index:a.$index},[m(e.$slots,"custom_"+t.prop,{value:a.row},void 0,!0)],8,J)):v("",!0),t.rankDisplayData&&t.rankDisplayData.length>0?(d(),i("div",Q,[(d(!0),i(w,null,x(t.rankDisplayData.slice(0,4),((t,n)=>(d(),g(o,{key:n,type:"info",plain:"",onClick:e=>re(a.$index,a.row,t),link:"",text:""},{default:p((()=>[j(k("status"===t.name?a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128)),t.rankDisplayData.length>4?(d(),g(o,{key:0,link:""},{default:p((()=>[u(T,null,{dropdown:p((()=>[u(r,null,{default:p((()=>[(d(!0),i(w,null,x(t.rankDisplayData.slice(4),((t,n)=>(d(),g(l,{key:n,onClick:e=>re(a.$index,a.row,t)},{default:p((()=>[j(k("status"===t.name?a.row[C.statusColoum]!==C.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),default:p((()=>[K])),_:2},1024)])),_:2},1024)):v("",!0)])):v("",!0)])),_:2},1040)):v("",!0)],64)))),256))])),_:3},16,["data"])),[[_,A.value]]),b("div",W,[u(f(z),{data:f(B).componentsPagination.data,defaultAttribute:f(B).componentsPagination.defaultAttribute,onSizeChange:ie,onCurrentChange:de},null,8,["data","defaultAttribute"])])])])),_:3},8,["Layout"])])}}};e("J",a(X,[["__scopeId","data-v-f53d4a4b"]]))}}}));
