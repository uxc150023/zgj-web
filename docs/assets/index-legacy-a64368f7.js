!function(){function e(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}System.register(["./chunk-vform-legacy-9e71fe2f.js","./index-legacy-18902ed1.js","./chunk-element-plus-legacy-cff7802d.js","./index-legacy-58f7c896.js","./index-legacy-ce14c29e.js","./home-back-legacy-d9a8ace4.js","./logo-legacy-7450937f.js","./request-util-legacy-a6f10f11.js","./main-legacy-4d8c855f.js"],(function(t,a){"use strict";var r,o,n,l,i,s,c,d,u,f,p,m,h,g,v,y,b,x,w,T,k,P,I,j,C,_,E,V,A,D,U,S,B,N,F=document.createElement("style");return F.textContent='@charset "UTF-8";.layout-contanier[data-v-3faffcb7]{margin:0%;width:100%;height:100%}.layout-contanier .process[data-v-3faffcb7]{width:100%;height:100%}.layout-contanier .process .header[data-v-3faffcb7]{position:relative;z-index:20;display:flex;height:4rem;align-items:center;padding:0% 1rem;box-sizing:border-box;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);background-color:#fff;justify-content:space-between}.layout-contanier .process .header .process-back[data-v-3faffcb7]{color:rgba(0,0,0,.85);display:flex;align-items:center;min-width:110px;font-size:22px}.layout-contanier .process .header .process-back .iconpark[data-v-3faffcb7]{width:1.5rem;height:1.5rem;display:flex;align-items:center;margin-right:.5rem;cursor:pointer}.layout-contanier .process .header .process-back .iconpark .iconpark-icon[data-v-3faffcb7]{width:1.2rem;height:1.2rem}.layout-contanier .process .header .process-back .process-back-text[data-v-3faffcb7]{font-size:22px}.layout-contanier .process .header .process-tabs[data-v-3faffcb7]{display:flex;height:100%;min-width:600px;flex:1;justify-content:center}.layout-contanier .process .header .process-tabs .tabs[data-v-3faffcb7]{display:flex;align-items:center;color:rgba(0,0,0,.45);margin:0% 4%;box-sizing:border-box;height:100%;cursor:pointer;border-bottom:2px solid rgba(0,0,0,0)}.layout-contanier .process .header .process-tabs .tabs .tabs-icon[data-v-3faffcb7]{width:1.2rem;height:1.2rem;border-radius:50%;border:1px solid rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;margin-right:.5rem}.layout-contanier .process .header .process-tabs .tabs .tabs-text[data-v-3faffcb7]{font-size:16px}.layout-contanier .process .header .process-tabs .checked-tabs[data-v-3faffcb7]{border-bottom:2px solid var(--jy-primary-6)}.layout-contanier .process .header .process-tabs .checked-tabs .tabs-icon[data-v-3faffcb7]{background-color:var(--jy-primary-6);border:1px solid var(--jy-primary-6);color:#fff}.layout-contanier .process .header .process-tabs .checked-tabs .tabs-text[data-v-3faffcb7]{color:var(--jy-primary-6)}.layout-contanier .process .header .process-save[data-v-3faffcb7]{min-width:200px;display:flex;justify-content:flex-end;align-items:center}.layout-contanier .process .header .process-save .process-save-down[data-v-3faffcb7]{margin-right:.5rem}.layout-contanier .process .header .process-save .process-save-down .process-save-down-text[data-v-3faffcb7]{color:var(--jy-danger-6);cursor:pointer}.layout-contanier .process .content[data-v-3faffcb7]{width:100%;height:calc(100% - 4rem);background-color:#f2f2f2;display:flex;align-items:flex-start;justify-content:center;position:relative;z-index:0}.popover-cont[data-v-3faffcb7]{padding:.5rem;color:var(--jy-color-text-1)}.popover-cont .popover-cont-title[data-v-3faffcb7]{font-size:var(--jy-font-size-title-1)}.popover-cont .popover-cont-subTitle[data-v-3faffcb7]{color:var(--jy-color-text-3);margin-top:.8rem}.popover-cont .popover-cont-list[data-v-3faffcb7]{margin-top:.2rem}.popover-cont .popover-cont-list .popover-cont-list-li[data-v-3faffcb7]{display:flex;align-items:center;background:rgba(0,0,0,.04);justify-content:space-between;padding:.8rem 1rem;margin:0rem 0rem .5rem}.popover-cont .popover-cont-list .popover-cont-list-li .popover-cont-list-li-name[data-v-3faffcb7]{width:4rem}.popover-cont .popover-cont-list .popover-cont-list-li .popover-cont-list-li-desc[data-v-3faffcb7]{color:var(--jy-color-text-3);width:calc(100% - 7rem);padding:0% .5rem}.popover-cont .popover-cont-list .popover-cont-list-li .popover-cont-list-li-but[data-v-3faffcb7]{color:var(--jy-info-6);width:3rem;cursor:pointer}[data-v-5efd8e73] .add-form-dialog{background:#f2f2f2}[data-v-5efd8e73] .add-form-dialog .el-dialog__header{display:none}[data-v-5efd8e73] .add-form-dialog .el-dialog__body{padding:0;height:100%;overflow:hidden}[data-v-5efd8e73] .add-form-dialog .el-dialog__footer{border-top:1px solid #e9ebec}[data-v-5efd8e73] .add-form-dialog .custom-tabs-label{display:flex;align-items:center;color:rgba(0,0,0,.45)}[data-v-5efd8e73] .add-form-dialog .custom-tabs-label .order{width:20px;height:20px;border-radius:50%;border:1px solid rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;margin-right:14px;color:rgba(0,0,0,.45)}[data-v-5efd8e73] .add-form-dialog .el-tabs__item.is-active .custom-tabs-label{color:var(--jy-primary-6)}[data-v-5efd8e73] .add-form-dialog .el-tabs__item.is-active .order{color:#fff;background:var(--jy-primary-6);border:none}[data-v-5efd8e73] .add-form-dialog .el-tabs__item:hover .custom-tabs-label{color:var(--jy-primary-6)}[data-v-5efd8e73] .add-form-dialog .el-tabs__item:hover .order{color:#fff;background:var(--jy-primary-6);border:none}.form-header[data-v-5efd8e73]{width:100%;height:64px;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;z-index:100;background:#ffffff;padding:0 24px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)}.form-header .backPrev[data-v-5efd8e73]{font-size:22px;color:rgba(0,0,0,.85);cursor:pointer}.form-header .backPrev .iconpark-icon[data-v-5efd8e73]{width:18px;height:18px;margin-right:8px}.form-header .save-btn[data-v-5efd8e73]{background:var(--jy-primary-6);border-radius:2px;color:#fff}.formBase[data-v-5efd8e73]{width:80%;height:85%;background:#fff;margin:72px auto 0;min-width:600px}.formBase .formBase-bg[data-v-5efd8e73]{width:495px;margin:0 auto;padding-top:52px}.formBase .form-title[data-v-5efd8e73]{color:rgba(0,0,0,.85);font-size:22px;margin-bottom:24px;text-align:center}\n',document.head.appendChild(F),{setters:[e=>{r=e.g,o=e.E,n=e.a3,l=e.a8},e=>{i=e.default},e=>{s=e.b,c=e.w,d=e.a9,u=e.a1,f=e.C,p=e.F,m=e.G,h=e.H,g=e.L,v=e.P,y=e.U,b=e.K,x=e.u,w=e.I,T=e.B,k=e.N,P=e.R,I=e.V,j=e.W,C=e.r,_=e.j,E=e.S,V=e.T,A=e.Q,D=e.J,U=e.c,S=e.n},e=>{B=e.a},e=>{N=e.a},null,null,null,null],execute:function(){const a=e=>(I("data-v-3faffcb7"),e=e(),j(),e),F={class:"layout-contanier"},L={class:"process"},M={class:"header"},R={class:"process-back"},z=[a((()=>h("svg",{class:"iconpark-icon"},[h("use",{href:"#Vector8Stroke"})],-1)))],O=a((()=>h("span",{class:"process-back-text"},"新增",-1))),H={class:"process-tabs"},J=["onClick"],$={class:"tabs-icon"},q={class:"tabs-text"},G={class:"process-save"},W=P(" 保存 "),X={class:"content"},Q={props:{type:{type:String,default:"0"},modelValue:{type:Boolean,default:!1},tabsData:{type:Array,default:()=>[]},beforeCutTabs:{type:Function,default:()=>!0}},emits:["close","update:modelValue","clickCutTabs","beforeCutTabs"],setup(e,{emit:t}){const a=e,r=s({props:{},processTabs:{checkedNode:{},data:[{index:"1",label:"基础信息",checked:!0},{index:"2",label:"关联表单"},{index:"3",label:"流程设计"},{index:"4",label:"高级设置"}]}}),o=()=>{const e=r.props;for(const t in a)Object.hasOwnProperty.call(e,t),e[t]=a[t]},n=()=>{t("close")};return c(a,((e,t)=>{o()})),d((()=>{o()})),u((()=>{})),(e,a)=>{const o=f("el-button");return p(),m("div",F,[h("div",L,[h("div",M,[h("div",R,[h("i",{class:"iconpark",onClick:n},z),g(e.$slots,"backTitle",{},(()=>[O]),!0)]),h("div",H,[(p(!0),m(v,null,y(x(r).props.tabsData,((e,a)=>(p(),m("div",{class:b(["tabs",{"checked-tabs":!!e.checked}]),key:a,onClick:a=>((e,a)=>{!1!==r.props.beforeCutTabs(e,a)&&(e.forEach((e=>{e.checked=!1})),a.checked=!0,t("clickCutTabs",e,a))})(x(r).props.tabsData,e)},[h("div",$,w(e.index),1),h("div",q,w(e.label),1)],10,J)))),128))]),h("div",G,[g(e.$slots,"subTitle",{},(()=>[T(o,{class:"process-save-but",type:"primary"},{default:k((()=>[W])),_:1})]),!0)])]),h("div",X,[g(e.$slots,"content",{},void 0,!0)])])])}}},K=r(Q,[["__scopeId","data-v-3faffcb7"]]);class Y{constructor(){e(this,"formName",""),e(this,"applyTypeId","2"),e(this,"sealUseTypeId","1"),e(this,"readme",""),e(this,"formInfo",""),e(this,"imgBase64",""),e(this,"formColumnInfos",[])}}var Z={};!function(e){!function(t){var a=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var a=t(e).toLowerCase();return(r="application/font-woff",o="image/jpeg",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[a]||"";var r,o},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var a=window.atob(e.toDataURL().split(",")[1]),r=a.length,o=new Uint8Array(r),n=0;n<r;n++)o[n]=a.charCodeAt(n);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var a=document.implementation.createHTMLDocument(),r=a.createElement("base");a.head.appendChild(r);var o=a.createElement("a");return a.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;i.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(a){var r,o=new XMLHttpRequest;if(o.onreadystatechange=l,o.ontimeout=s,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),i.impl.options.imagePlaceholder){var n=i.impl.options.imagePlaceholder.split(/,/);n&&n[1]&&(r=n[1])}function l(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];a(e)},t.readAsDataURL(o.response)}else r?a(r):c("cannot fetch resource: "+e+", status: "+o.status)}function s(){r?a(r):c("timeout of "+t+"ms occured while fetching resource: "+e)}function c(e){a("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(a){setTimeout((function(){a(t)}),e)}))}},asArray:function(e){for(var t=[],a=e.length,r=0;r<a;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,a){var r=new Image;r.onload=function(){t(r)},r.onerror=a,r.src=e}))},width:function(e){var t=a(e,"border-left-width"),r=a(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=a(e,"border-top-width"),r=a(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function a(e,t){var a=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(a.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,a,n){return l()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,a,n)}))})),r}));function l(){return!t(e)}},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!a.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?a.resolveUrl(e,r):e})).then(o||a.getAndEncode).then((function(e){return a.dataAsUrl(e,a.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+a.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(a.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{a.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),n=function(){return{inlineAll:function t(o){return o instanceof Element?n(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(a.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function n(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(t){return a.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||a.getAndEncode).then((function(t){return a.dataAsUrl(t,a.mimeType(e.src))})).then((function(t){return new Promise((function(a,r){e.onload=a,e.onerror=r,e.src=t}))}))}}}}(),l={imagePlaceholder:void 0,cacheBust:!1},i={toSvg:s,toPng:function(e,t){return c(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return c(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return c(e,t||{}).then(a.canvasToBlob)},toPixelData:function(e,t){return c(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,a.width(e),a.height(e)).data}))},impl:{fontFaces:o,images:n,util:a,inliner:r,options:{}}};function s(e,t){return function(e){void 0===e.imagePlaceholder?i.impl.options.imagePlaceholder=l.imagePlaceholder:i.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?i.impl.options.cacheBust=l.cacheBust:i.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return d(e,t.filter,!0)})).then(u).then(f).then((function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(a){e.style[a]=t.style[a]}));return e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(a.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||a.width(e),t.height||a.height(e))}))}function c(e,t){return s(e,t).then(a.makeImage).then(a.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||a.width(e),r.height=t.height||a.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function d(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?a.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):n(t,a.asArray(o),r).then((function(){return t}));function n(e,t,a){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return d(t,a)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(n).then(l).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){a.asArray(e).forEach((function(a){t.setProperty(a,e.getPropertyValue(a),e.getPropertyPriority(a))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),n=o.getPropertyValue("content");if(""!==n&&"none"!==n){var l=a.uid();t.className=t.className+" "+l;var i=document.createElement("style");i.appendChild(s(l,r,o)),t.appendChild(i)}function s(e,t,r){var o="."+e+":"+t,n=r.cssText?l(r):i(r);return document.createTextNode(o+"{"+n+"}");function l(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function i(e){return a.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function n(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function l(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var a=t.getAttribute(e);a&&t.style.setProperty(e,a)})))}}(e,t)})):Promise.resolve()}function u(e){return o.resolveAll().then((function(t){var a=document.createElement("style");return e.appendChild(a),a.appendChild(document.createTextNode(t)),e}))}function f(e){return n.inlineAll(e).then((function(){return e}))}e.exports=i}()}({get exports(){return Z},set exports(e){Z=e}});const ee=Z,te=e=>(I("data-v-5efd8e73"),e=e(),j(),e),ae={class:"process-back-text"},re={class:"process-save"},oe=P(" 保存 "),ne={class:"formBase"},le={class:"formBase-bg"},ie=te((()=>h("div",{class:"form-title"},"请填写如下基础信息",-1))),se=P("物理用印"),ce=P("电子签章"),de={key:0,style:{height:"100%",width:"100%"}},ue=P(" 离开当前页面不会被保存，确定离开么？ "),fe={props:{addTitle:{type:String,default:""},columnData:{type:Object,default:()=>{}},formId:{type:String,default:""},modelValue:{type:Boolean,default:!1},optionData:{type:Array,default:()=>[]},applyTypeId:{type:String,default:null},sealUseTypeId:{type:String,default:null}},emits:["update:modelValue","close","reloadData"],setup(e,{emit:t}){const a=e,r=C(null),c=C(new Y),d=C(null),g=C(null),b=C([]),P=C({}),I=C(!1),j=C(!1),F=C(0),L=s({processTabs:{checkedNode:{},data:[{index:"1",label:"基础信息",checked:!0},{index:"2",label:"表单设计",checked:!1}]},isShowFrom:!1}),M=_({get:()=>a.modelValue,set(e){t("update:modelValue",e)}}),R=C([]),z={formName:[{required:!0,message:"请输入",trigger:"blur"}],applyTypeId:[{required:!0,message:"请选择",trigger:"change"}]},O=()=>{},H=async(e,t)=>{try{"2"===t.index&&(F.value++,await d.value.validate()),e.forEach((e=>{e.checked=!1})),t.checked=!0,$()}catch(a){o(a),L.processTabs.data[1].checked=!1,L.processTabs.data[0].checked=!0}},J=async()=>{a.columnData&&a.columnData.formMessageId?(await X(a.columnData.formMessageId),await r.value.setFormJson(P.value.formInfo)):await r.value.setFormColumnBasic(c.value.applyTypeId),S((async()=>{await r.value.setFormTemplate(c.value.applyTypeId),S((()=>{W()}))}))},$=()=>{L.processTabs.data.forEach((e=>{e.checked&&(L.processTabs.checkedNode=e)})),"3"===L.processTabs.checkedNode.index&&S((()=>{}))},q=()=>{F.value>0?j.value=!0:t("close")},G=async()=>{r.value||o("请先完善表单设计"),c.value.formInfo=JSON.stringify(r.value.getFormJson());const e=r.value.getFieldWidgets();if(b.value.filter((t=>!e.map((e=>e.name)).includes(t))).length)return o("请勿删除必要字段，请重新加载模板进行编辑");c.value.formColumnInfos=r.value.getFieldWidgets(),g.value.setFormJson(c.value.formInfo),S((async()=>{I.value=!0;const e=document.getElementById("form-render-wrapper"),o=await ee.toPng(e);c.value.imgBase64=o;try{a.columnData&&a.columnData.formMessageId?(await B.formEdit({...c.value,formMessageId:a.columnData.formMessageId}),n("表单修改成功"),t("reloadData",a.columnData)):(await B.formAdd(c.value),n("表单添加成功"),t("reloadData")),r.value.setFormJson(""),M.value=!1}catch(l){}I.value=!1}))},W=async e=>{try{const e=await B.getFormColumnMust({applyTypeId:c.value.applyTypeId});b.value=e.data||[],R.value=e.data||[]}catch(t){}},X=async e=>{try{const t=await N.getFormJsonById({formMessageId:e});P.value=t.data}catch(t){o(t)}},Q=()=>{a.columnData&&a.columnData.formName&&(c.value={...c.value,...a.columnData}),a.applyTypeId&&(c.value.applyTypeId=a.applyTypeId),a.sealUseTypeId&&(c.value.sealUseTypeId=a.sealUseTypeId)};return u((()=>{$()})),(e,o)=>{const n=f("el-button"),s=f("el-input"),u=f("el-form-item"),b=f("el-option"),P=f("el-option-group"),C=f("el-select"),_=f("el-radio"),S=f("el-radio-group"),B=f("el-form"),N=i,$=l,W=f("el-dialog");return p(),m("div",null,[T(W,{modelValue:x(M),"onUpdate:modelValue":o[6]||(o[6]=e=>U(M)?M.value=e:null),title:"add form",fullscreen:"",class:"add-form-dialog",onOpened:Q},{default:k((()=>[T(x(K),{onClickCutTabs:H,tabsData:x(L).processTabs.data,onClose:q},{backTitle:k((()=>[h("span",ae,w(a.addTitle),1)])),subTitle:k((()=>[h("div",re,[T(n,{class:"process-save-but",type:"primary",onClick:G,loading:I.value},{default:k((()=>[oe])),_:1},8,["loading"])])])),content:k((()=>[E(h("div",ne,[h("div",le,[ie,T(B,{ref_key:"formRef",ref:d,model:c.value,"label-width":"120px",rules:z},{default:k((()=>[T(u,{prop:"formName",label:"表单名称"},{default:k((()=>[T(s,{modelValue:c.value.formName,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value.formName=e),clearable:"",maxlength:"64"},null,8,["modelValue"])])),_:1}),T(u,{label:"业务类型",prop:"applyTypeId"},{default:k((()=>[T(C,{modelValue:c.value.applyTypeId,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value.applyTypeId=e),style:{width:"430px"},onChange:O,disabled:a.applyTypeId},{default:k((()=>[(p(!0),m(v,null,y(a.optionData,(e=>(p(),A(P,{key:e.applyTypeName,label:e.applyTypeName},{default:k((()=>[(p(!0),m(v,null,y(e.children,(e=>(p(),A(b,{key:e.applyTypeId,label:e.applyTypeName,value:e.applyTypeId},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),"2"===c.value.applyTypeId?(p(),A(u,{key:0,label:"用印类型"},{default:k((()=>[T(S,{modelValue:c.value.sealUseTypeId,"onUpdate:modelValue":o[2]||(o[2]=e=>c.value.sealUseTypeId=e),disabled:a.sealUseTypeId},{default:k((()=>[T(_,{label:"1"},{default:k((()=>[se])),_:1}),T(_,{label:"2"},{default:k((()=>[ce])),_:1})])),_:1},8,["modelValue","disabled"])])),_:1})):D("",!0),T(u,{label:"表单说明"},{default:k((()=>[T(s,{modelValue:c.value.readme,"onUpdate:modelValue":o[3]||(o[3]=e=>c.value.readme=e),type:"textarea",maxlength:"100","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])],512),[[V,1==x(L).processTabs.checkedNode.index]]),F.value>0||a.columnData.formMessageId?E((p(),m("div",de,[T(N,{ref_key:"vformRef",ref:r,style:{"margin-top":"0",width:"100%"},prefabricationFieldList:R.value,onOnLoaded:J},null,8,["prefabricationFieldList"])],512)),[[V,"2"===x(L).processTabs.checkedNode.index]]):D("",!0)])),_:1},8,["tabsData"]),T($,{modelValue:j.value,"onUpdate:modelValue":o[4]||(o[4]=e=>j.value=e),mode:1,onOnConfirm:o[5]||(o[5]=e=>t("close"))},{default:k((()=>[ue])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),T(N,{mode:"render",ref_key:"preViewForm",ref:g,style:{width:"1000px",position:"absolute",bottom:"0"}},null,512)])}}};t("default",r(fe,[["__scopeId","data-v-5efd8e73"]]))}}}))}();
