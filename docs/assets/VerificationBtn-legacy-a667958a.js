System.register(["./chunk-vform-legacy-9e71fe2f.js","./chunk-element-plus-legacy-cff7802d.js"],(function(e,t){"use strict";var s,n,c,i,a,l,o,r,d,u,m,p,g,f=document.createElement("style");return f.textContent=".verification-btn .btn[data-v-ce2d93e9]{font-size:16px;color:#fafafa;width:150px;border-radius:4px;text-align:center;margin-left:10px}\n",document.head.appendChild(f),{setters:[e=>{s=e.g,n=e.I},e=>{c=e.b,i=e.w,a=e.C,l=e.F,o=e.G,r=e.B,d=e.N,u=e.u,m=e.I,p=e.O,g=e.E}],execute:function(){const t={class:"verification-btn login-input"},f={key:0},y={key:1},b={props:{customStyle:{type:Object,default:()=>({})},customClick:{type:Boolean,default:!1}},emits:"customClickFn",setup(e,{expose:s,emit:b}){const k=e,v=c({timer:60,sendMsg:!1});i((()=>n.global.locale),(()=>{}),{immediate:!0,deep:!0});const C=()=>{k.customClick?b("customClickFn"):x()},x=()=>{if(v.sendMsg)return;v.sendMsg=!0,g.success("短信发送成功");const e=setInterval((()=>{v.timer<=0&&(clearInterval(e),v.sendMsg=!1,v.timer=60),v.timer--}),1e3)};return s({countDown:x}),(e,s)=>{const n=a("el-button");return l(),o("div",t,[r(n,{onClick:C,type:"primary",size:"large",class:"btn",style:p(k.customStyle),disabled:u(v).sendMsg},{default:d((()=>[u(v).sendMsg?(l(),o("span",y,m(u(v).timer)+m(e.$t("t-send-again")),1)):(l(),o("span",f,m(e.$t("t-zgj-getCode")),1))])),_:1},8,["style","disabled"])])}}};e("V",s(b,[["__scopeId","data-v-ce2d93e9"]]))}}}));
