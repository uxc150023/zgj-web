System.register(["./chunk-vform-legacy-f1b551df.js","./chunk-ant-design-vue-legacy-78f2abeb.js"],(function(e,o){"use strict";var a,t,n,p,r,s,l,i,c,d,m,b,x,f,g,v=document.createElement("style");return v.textContent=".components-approvalSteps[data-v-5ee10caf]{margin:0%}.components-approvalSteps .ap-box .ap-box-list[data-v-5ee10caf]{min-height:10rem;display:flex;padding:1rem 0rem;box-sizing:border-box}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-yindao[data-v-5ee10caf]{width:2rem;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-yindao .ap-box-list-yindao-img[data-v-5ee10caf]{width:2rem;height:2rem}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-yindao .ap-box-list-yindao-line[data-v-5ee10caf]{border-left:1px solid var(--jy-color-Add-1);height:calc(100% - 3rem)}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-cont[data-v-5ee10caf]{width:100%;padding-left:1rem;box-sizing:border-box}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-cont .ap-box-list-cont-title[data-v-5ee10caf]{display:flex;align-items:center;padding-top:.3rem;box-sizing:border-box}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-cont .ap-box-list-cont-title .ap-box-list-cont-title-text[data-v-5ee10caf]{font-size:var(--jy-font-size-title-1)}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-cont .ap-box-list-cont-title .ap-box-list-cont-title-subText[data-v-5ee10caf]{font-size:var(--jy-font-size-body-1)}.components-approvalSteps .ap-box .ap-box-list .ap-box-list-cont .ap-box-list-cont-person[data-v-5ee10caf]{padding:1rem 0;box-sizing:border-box}.components-approvalSteps .ap-box .after[data-v-5ee10caf]{display:flex;justify-content:space-between}.components-approvalSteps .ap-box .after .after-cont[data-v-5ee10caf]{flex-grow:1;display:flex;justify-content:flex-start;flex-flow:wrap;width:calc(100% - 10rem)}.components-approvalSteps .ap-box .after .after-time[data-v-5ee10caf]{width:10rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-approvalSteps .ap-box .flowing .flowing-cont-person[data-v-5ee10caf]{display:flex;justify-content:space-between;margin-bottom:.5rem}.components-approvalSteps .ap-box .flowing .flowing-cont-person .flowing-cont-person-cont[data-v-5ee10caf]{flex-grow:1;display:flex;justify-content:flex-start;flex-flow:wrap;width:calc(100% - 10rem)}.components-approvalSteps .ap-box .flowing .flowing-cont-person .flowing-cont-person-time[data-v-5ee10caf]{width:10rem;display:flex;justify-content:flex-end;color:var(--jy-color-text-3)}.components-approvalSteps .ap-box .flowing .flowing-cont-desc[data-v-5ee10caf]{padding:1rem;box-sizing:border-box;background-color:var(--jy-color-fill--2);border-radius:var(--jy-border-radius-4);color:var(--jy-color-text-3);line-height:150%;margin-bottom:1rem}.components-approvalSteps .ap-box .flowing .flowing-cont-image[data-v-5ee10caf]{padding:0rem 1rem;box-sizing:border-box;margin-bottom:1rem}.components-approvalSteps .ap-box .person-cell[data-v-5ee10caf]{width:auto;display:flex;align-items:center;padding:.5rem;box-sizing:border-box;background-color:var(--jy-color-fill--2);border-radius:var(--jy-border-radius-4);margin-right:.5rem;margin-bottom:.5rem}.components-approvalSteps .ap-box .person-cell .person-cell-jian[data-v-5ee10caf]{width:2rem;height:2rem;background-color:var(--jy-primary-6);border-radius:var(--jy-border-radius-4);color:var(--jy-in-common-use-1);display:flex;align-items:center;justify-content:center;font-size:var(--jy-font-size-body-1);position:relative;margin-right:.5rem}.components-approvalSteps .ap-box .person-cell .person-cell-jian .person-cell-jian-icon[data-v-5ee10caf]{width:1rem;height:1rem;position:absolute;bottom:-.5rem;right:-.5rem}.components-approvalSteps .ap-box .person-cell .person-cell-name[data-v-5ee10caf]{min-width:3rem;color:var(--jy-color-text-2)}.components-approvalSteps .ap-box .statusIcon[data-v-5ee10caf]{position:absolute;top:0%;right:0%;padding-right:.5rem;box-sizing:border-box}.components-approvalSteps .ap-box .statusIcon .statusIcon-img[data-v-5ee10caf]{width:9rem}.components-approvalSteps .ap-box .dengdai[data-v-5ee10caf]{background-color:var(--jy-color-fill-25)!important}\n",document.head.appendChild(v),{setters:[e=>{a=e.g,t=e.a1},e=>{n=e.a9,p=e.d,r=e.aQ,s=e.W,l=e.ah,i=e.ai,c=e.Y,d=e.ao,m=e.an,b=e.am,x=e.ap,f=e.ba,g=e.bb}],execute:function(){const o={class:"header-div"},v=(e=>(f("data-v-5ee10caf"),e=e(),g(),e))((()=>c("img",{src:t,alt:""},null,-1))),y={class:"content-div"},u={props:{JyElMessageBox:{type:Object},oneBtn:{type:Boolean,default:!1},confirmText:{type:String,default:"t-zgj-operation.cancel"}},emits:["submitElMessageBox","update:modelValue"],setup(e,{emit:a}){const t=e,f=()=>{a("submitElMessageBox")},g=()=>{a("update:modelValue")};return n((()=>{})),p((()=>{})),(e,a)=>{const n=r("el-button"),p=r("JyElMessageBox");return s(),l(p,{modelValue:t.JyElMessageBox.show,"onUpdate:modelValue":a[0]||(a[0]=e=>t.JyElMessageBox.show=e),show:t.JyElMessageBox.show,defaultAttribute:{}},{header:i((()=>[c("div",o,[v,c("span",null,d(e.$t(t.JyElMessageBox.header.data)),1)])])),content:i((()=>[c("div",y,d(e.$t(t.JyElMessageBox.content.data)),1)])),footer:i((()=>[t.oneBtn?b("",!0):(s(),l(n,{key:0,type:"primary",onClick:f},{default:i((()=>[m(d(e.$t("t-zgj-select.confirm")),1)])),_:1})),x(n,{type:t.oneBtn?"primary":"",onClick:g},{default:i((()=>[m(d(e.$t(t.confirmText)),1)])),_:1},8,["type"])])),_:1},8,["modelValue","show"])}}};e("a",a(u,[["__scopeId","data-v-5ee10caf"]]))}}}));
