var e=Object.defineProperty,t=(t,n,a)=>(((t,n,a)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a})(t,"symbol"!=typeof n?n+"":n,a),a);import{_ as n,h as a,i as r,j as o,k as l,r as s,o as i,c as u,m as c,b as d,F as f,e as p,p as m,u as h,t as v,a as y,w as g,g as b,y as w,z as T,v as P,s as x,P as I,Q as k,f as C,l as V,x as A,a9 as D,aa as E,cv as U,cB as N}from"./main-5d732c2e.js";import _ from"./index-bf861a3a.js";import{a as S}from"./index-b9b96043.js";import{a as B}from"./index-60e1d355.js";import"./home-back-426c97de.js";import"./logo-00c7cf54.js";import"./request-util-ecea08f4.js";const j=e=>(w("data-v-3faffcb7"),e=e(),T(),e),F={class:"layout-contanier"},L={class:"process"},M={class:"header"},R={class:"process-back"},O=[j((()=>c("svg",{class:"iconpark-icon"},[c("use",{href:"#Vector8Stroke"})],-1)))],H=j((()=>c("span",{class:"process-back-text"},"新增",-1))),J={class:"process-tabs"},$=["onClick"],q={class:"tabs-icon"},X={class:"tabs-text"},z={class:"process-save"},G=b(" 保存 "),W={class:"content"},Q=n({props:{type:{type:String,default:"0"},modelValue:{type:Boolean,default:!1},tabsData:{type:Array,default:()=>[]},beforeCutTabs:{type:Function,default:()=>!0}},emits:["close","update:modelValue","clickCutTabs","beforeCutTabs"],setup(e,{emit:t}){const n=e,b=a({props:{},processTabs:{checkedNode:{},data:[{index:"1",label:"基础信息",checked:!0},{index:"2",label:"关联表单"},{index:"3",label:"流程设计"},{index:"4",label:"高级设置"}]}}),w=()=>{const e=b.props;for(const t in n)Object.hasOwnProperty.call(e,t),e[t]=n[t]},T=()=>{t("close")};return r(n,((e,t)=>{w()})),o((()=>{w()})),l((()=>{})),(e,n)=>{const a=s("el-button");return i(),u("div",F,[c("div",L,[c("div",M,[c("div",R,[c("i",{class:"iconpark",onClick:T},O),d(e.$slots,"backTitle",{},(()=>[H]),!0)]),c("div",J,[(i(!0),u(f,null,p(h(b).props.tabsData,((e,n)=>(i(),u("div",{class:m(["tabs",{"checked-tabs":!!e.checked}]),key:n,onClick:n=>((e,n)=>{!1!==b.props.beforeCutTabs(e,n)&&(e.forEach((e=>{e.checked=!1})),n.checked=!0,t("clickCutTabs",e,n))})(h(b).props.tabsData,e)},[c("div",q,v(e.index),1),c("div",X,v(e.label),1)],10,$)))),128))]),c("div",z,[d(e.$slots,"subTitle",{},(()=>[y(a,{class:"process-save-but",type:"primary"},{default:g((()=>[G])),_:1})]),!0)])]),c("div",W,[d(e.$slots,"content",{},void 0,!0)])])])}}},[["__scopeId","data-v-3faffcb7"]]);class K{constructor(){t(this,"formName",""),t(this,"applyTypeId","2"),t(this,"sealUseTypeId","1"),t(this,"readme",""),t(this,"formInfo",""),t(this,"imgBase64",""),t(this,"formColumnInfos",[])}}var Y,Z={};Y={get exports(){return Z},set exports(e){Z=e}},function(e){var t=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,a,r=t(e).toLowerCase();return(n="application/font-woff",a="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:a,jpeg:a,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[r]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),a=n.length,r=new Uint8Array(a),o=0;o<a;o++)r[o]=n.charCodeAt(o);t(new Blob([r],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),a=n.createElement("base");n.head.appendChild(a);var r=n.createElement("a");return n.body.appendChild(r),a.href=t,r.href=e,r.href},getAndEncode:function(e){var t=3e4;return l.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var a,r=new XMLHttpRequest;if(r.onreadystatechange=s,r.ontimeout=i,r.responseType="blob",r.timeout=t,r.open("GET",e,!0),r.send(),l.impl.options.imagePlaceholder){var o=l.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(a=o[1])}function s(){if(4===r.readyState)if(200===r.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(r.response)}else a?n(a):u("cannot fetch resource: "+e+", status: "+r.status)}function i(){a?n(a):u("timeout of "+t+"ms occured while fetching resource: "+e)}function u(e){n("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,a=0;a<n;a++)t.push(e[a]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){t(a)},a.onerror=n,a.src=e}))},width:function(e){var t=n(e,"border-left-width"),a=n(e,"border-right-width");return e.scrollWidth+t+a},height:function(e){var t=n(e,"border-top-width"),a=n(e,"border-bottom-width");return e.scrollHeight+t+a}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),n=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,o){return l()?Promise.resolve(e):Promise.resolve(e).then(a).then((function(n){var a=Promise.resolve(e);return n.forEach((function(e){a=a.then((function(n){return r(n,e,t,o)}))})),a}));function l(){return!n(e)}},shouldProcess:n,impl:{readUrls:a,inline:r}};function n(t){return-1!==t.search(e)}function a(n){for(var a,r=[];null!==(a=e.exec(n));)r.push(a[1]);return r.filter((function(e){return!t.isDataUrl(e)}))}function r(e,n,a,r){return Promise.resolve(n).then((function(e){return a?t.resolveUrl(e,a):e})).then(r||t.getAndEncode).then((function(e){return t.dataAsUrl(e,t.mimeType(n))})).then((function(a){return e.replace((r=n,new RegExp("(url\\(['\"]?)("+t.escape(r)+")(['\"]?\\))","g")),"$1"+a+"$3");var r}))}}(),a=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(t.asArray(document.styleSheets)).then((function(e){var n=[];return e.forEach((function(e){try{t.asArray(e.cssRules||[]).forEach(n.push.bind(n))}catch(a){}})),n})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return n.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return n.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),r=function(){return{inlineAll:function a(r){return r instanceof Element?o(r).then((function(){return r instanceof HTMLImageElement?e(r).inline():Promise.all(t.asArray(r.childNodes).map((function(e){return a(e)})))})):Promise.resolve(r);function o(e){var t=e.style.getPropertyValue("background");return t?n.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(n){return t.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(n||t.getAndEncode).then((function(n){return t.dataAsUrl(n,t.mimeType(e.src))})).then((function(t){return new Promise((function(n,a){e.onload=n,e.onerror=a,e.src=t}))}))}}}}(),o={imagePlaceholder:void 0,cacheBust:!1},l={toSvg:s,toPng:function(e,t){return i(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return i(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,n){return i(e,n||{}).then(t.canvasToBlob)},toPixelData:function(e,n){return i(e,n||{}).then((function(n){return n.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data}))},impl:{fontFaces:a,images:r,util:t,inliner:n,options:{}}};function s(e,n){return function(e){void 0===e.imagePlaceholder?l.impl.options.imagePlaceholder=o.imagePlaceholder:l.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?l.impl.options.cacheBust=o.cacheBust:l.impl.options.cacheBust=e.cacheBust}(n=n||{}),Promise.resolve(e).then((function(e){return u(e,n.filter,!0)})).then(c).then(d).then((function(e){return n.bgcolor&&(e.style.backgroundColor=n.bgcolor),n.width&&(e.style.width=n.width+"px"),n.height&&(e.style.height=n.height+"px"),n.style&&Object.keys(n.style).forEach((function(t){e.style[t]=n.style[t]})),e})).then((function(a){return function(e,n,a){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(t.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+a+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(a,n.width||t.width(e),n.height||t.height(e))}))}function i(e,n){return s(e,n).then(t.makeImage).then(t.delay(100)).then((function(a){var r=function(e){var a=document.createElement("canvas");if(a.width=n.width||t.width(e),a.height=n.height||t.height(e),n.bgcolor){var r=a.getContext("2d");r.fillStyle=n.bgcolor,r.fillRect(0,0,a.width,a.height)}return a}(e);return r.getContext("2d").drawImage(a,0,0),r}))}function u(e,n,a){return a||!n||n(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?t.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(a){return function(e,n,a){var r=e.childNodes;return 0===r.length?Promise.resolve(n):o(n,t.asArray(r),a).then((function(){return n}));function o(e,t,n){var a=Promise.resolve();return t.forEach((function(t){a=a.then((function(){return u(t,n)})).then((function(t){t&&e.appendChild(t)}))})),a}}(e,a,n)})).then((function(n){return function(e,n){return n instanceof Element?Promise.resolve().then(a).then(r).then(o).then(l).then((function(){return n})):n;function a(){function a(e,n){function a(e,n){t.asArray(e).forEach((function(t){n.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))}))}e.cssText?n.cssText=e.cssText:a(e,n)}a(window.getComputedStyle(e),n.style)}function r(){function a(a){var r=window.getComputedStyle(e,a),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var l=t.uid();n.className=n.className+" "+l;var s=document.createElement("style");s.appendChild(i(l,a,r)),n.appendChild(s)}function i(e,n,a){var r="."+e+":"+n,o=a.cssText?l(a):s(a);return document.createTextNode(r+"{"+o+"}");function l(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function s(e){return t.asArray(e).map(n).join("; ")+";";function n(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){a(e)}))}function o(){e instanceof HTMLTextAreaElement&&(n.innerHTML=e.value),e instanceof HTMLInputElement&&n.setAttribute("value",e.value)}function l(){n instanceof SVGElement&&(n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=n.getAttribute(e);t&&n.style.setProperty(e,t)})))}}(e,n)})):Promise.resolve()}function c(e){return a.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return r.inlineAll(e).then((function(){return e}))}Y.exports=l}();const ee=Z,te=e=>(w("data-v-5efd8e73"),e=e(),T(),e),ne={class:"process-back-text"},ae={class:"process-save"},re=b(" 保存 "),oe={class:"formBase"},le={class:"formBase-bg"},se=te((()=>c("div",{class:"form-title"},"请填写如下基础信息",-1))),ie=b("物理用印"),ue=b("电子签章"),ce={key:0,style:{height:"100%",width:"100%"}},de=b(" 离开当前页面不会被保存，确定离开么？ "),fe=n({props:{addTitle:{type:String,default:""},columnData:{type:Object,default:()=>{}},formId:{type:String,default:""},modelValue:{type:Boolean,default:!1},optionData:{type:Array,default:()=>[]},applyTypeId:{type:String,default:null},sealUseTypeId:{type:String,default:null}},emits:["update:modelValue","close","reloadData"],setup(e,{emit:t}){const n=e,r=P(null),o=P(new K),d=P(null),m=P(null),b=P([]),w=P({}),T=P(!1),j=P(!1),F=P(0),L=a({processTabs:{checkedNode:{},data:[{index:"1",label:"基础信息",checked:!0},{index:"2",label:"表单设计",checked:!1}]},isShowFrom:!1}),M=x({get:()=>n.modelValue,set(e){t("update:modelValue",e)}}),R=P([]),O={formName:[{required:!0,message:"请输入",trigger:"blur"}],applyTypeId:[{required:!0,message:"请选择",trigger:"change"}]},H=()=>{},J=async(e,t)=>{try{"2"===t.index&&(F.value++,await d.value.validate()),e.forEach((e=>{e.checked=!1})),t.checked=!0,q()}catch(n){D(n),L.processTabs.data[1].checked=!1,L.processTabs.data[0].checked=!0}},$=async()=>{n.columnData&&n.columnData.formMessageId?(await W(n.columnData.formMessageId),await r.value.setFormJson(w.value.formInfo)):await r.value.setFormColumnBasic(o.value.applyTypeId),E((async()=>{await r.value.setFormTemplate(o.value.applyTypeId),E((()=>{G()}))}))},q=()=>{L.processTabs.data.forEach((e=>{e.checked&&(L.processTabs.checkedNode=e)})),"3"===L.processTabs.checkedNode.index&&E((()=>{}))},X=()=>{F.value>0?j.value=!0:t("close")},z=async()=>{r.value||D("请先完善表单设计"),o.value.formInfo=JSON.stringify(r.value.getFormJson());const e=r.value.getFieldWidgets();if(b.value.filter((t=>!e.map((e=>e.name)).includes(t))).length)return D("请勿删除必要字段，请重新加载模板进行编辑");o.value.formColumnInfos=r.value.getFieldWidgets(),m.value.setFormJson(o.value.formInfo),E((async()=>{T.value=!0;const e=document.getElementById("form-render-wrapper"),a=await ee.toPng(e);o.value.imgBase64=a;try{n.columnData&&n.columnData.formMessageId?(await S.formEdit({...o.value,formMessageId:n.columnData.formMessageId}),U("表单修改成功"),t("reloadData",n.columnData)):(await S.formAdd(o.value),U("表单添加成功"),t("reloadData")),r.value.setFormJson(""),M.value=!1}catch(l){}T.value=!1}))},G=async e=>{try{const e=await S.getFormColumnMust({applyTypeId:o.value.applyTypeId});b.value=e.data||[],R.value=e.data||[]}catch(t){}},W=async e=>{try{const t=await B.getFormJsonById({formMessageId:e});w.value=t.data}catch(t){D(t)}},Y=()=>{n.columnData&&n.columnData.formName&&(o.value={...o.value,...n.columnData}),n.applyTypeId&&(o.value.applyTypeId=n.applyTypeId),n.sealUseTypeId&&(o.value.sealUseTypeId=n.sealUseTypeId)};return l((()=>{q()})),(e,a)=>{const l=s("el-button"),b=s("el-input"),w=s("el-form-item"),P=s("el-option"),x=s("el-option-group"),D=s("el-select"),E=s("el-radio"),U=s("el-radio-group"),S=s("el-form"),B=_,q=N,G=s("el-dialog");return i(),u("div",null,[y(G,{modelValue:h(M),"onUpdate:modelValue":a[6]||(a[6]=e=>A(M)?M.value=e:null),title:"add form",fullscreen:"",class:"add-form-dialog",onOpened:Y},{default:g((()=>[y(h(Q),{onClickCutTabs:J,tabsData:h(L).processTabs.data,onClose:X},{backTitle:g((()=>[c("span",ne,v(n.addTitle),1)])),subTitle:g((()=>[c("div",ae,[y(l,{class:"process-save-but",type:"primary",onClick:z,loading:T.value},{default:g((()=>[re])),_:1},8,["loading"])])])),content:g((()=>[I(c("div",oe,[c("div",le,[se,y(S,{ref_key:"formRef",ref:d,model:o.value,"label-width":"120px",rules:O},{default:g((()=>[y(w,{prop:"formName",label:"表单名称"},{default:g((()=>[y(b,{modelValue:o.value.formName,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.formName=e),clearable:"",maxlength:"64"},null,8,["modelValue"])])),_:1}),y(w,{label:"业务类型",prop:"applyTypeId"},{default:g((()=>[y(D,{modelValue:o.value.applyTypeId,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.applyTypeId=e),style:{width:"430px"},onChange:H,disabled:n.applyTypeId},{default:g((()=>[(i(!0),u(f,null,p(n.optionData,(e=>(i(),C(x,{key:e.applyTypeName,label:e.applyTypeName},{default:g((()=>[(i(!0),u(f,null,p(e.children,(e=>(i(),C(P,{key:e.applyTypeId,label:e.applyTypeName,value:e.applyTypeId},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),"2"===o.value.applyTypeId?(i(),C(w,{key:0,label:"用印类型"},{default:g((()=>[y(U,{modelValue:o.value.sealUseTypeId,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.sealUseTypeId=e),disabled:n.sealUseTypeId},{default:g((()=>[y(E,{label:"1"},{default:g((()=>[ie])),_:1}),y(E,{label:"2"},{default:g((()=>[ue])),_:1})])),_:1},8,["modelValue","disabled"])])),_:1})):V("",!0),y(w,{label:"表单说明"},{default:g((()=>[y(b,{modelValue:o.value.readme,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value.readme=e),type:"textarea",maxlength:"100","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])],512),[[k,1==h(L).processTabs.checkedNode.index]]),F.value>0||n.columnData.formMessageId?I((i(),u("div",ce,[y(B,{ref_key:"vformRef",ref:r,style:{"margin-top":"0",width:"100%"},prefabricationFieldList:R.value,onOnLoaded:$},null,8,["prefabricationFieldList"])],512)),[[k,"2"===h(L).processTabs.checkedNode.index]]):V("",!0)])),_:1},8,["tabsData"]),y(q,{modelValue:j.value,"onUpdate:modelValue":a[4]||(a[4]=e=>j.value=e),mode:1,onOnConfirm:a[5]||(a[5]=e=>t("close"))},{default:g((()=>[de])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),y(B,{mode:"render",ref_key:"preViewForm",ref:m,style:{width:"1000px",position:"absolute",bottom:"0"}},null,512)])}}},[["__scopeId","data-v-5efd8e73"]]);export{fe as default};
