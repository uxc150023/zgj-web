import{g as t}from"./chunk-vform-d740b35c.js";import{C as e,F as s,G as l,H as a,I as n,L as o,Q as c,N as i,R as r,J as p}from"./chunk-element-plus-a77de3d2.js";const u={class:"header"},d={class:"title"},b={class:"button"},f=t({props:{label:{type:String,default:"xxx"},btn:{type:String,default:""},btn1:{type:String,default:""}},emits:["on-click","on-click-cancel"],setup(t,{emit:f}){const k=t;return(t,y)=>{const m=e("el-button");return s(),l("div",null,[a("div",u,[a("span",d,n(k.label),1),o(t.$slots,"tip",{},void 0,!0),a("div",b,[k.btn?(s(),c(m,{key:0,type:"primary",style:{height:"28px"},onClick:y[0]||(y[0]=t=>f("on-click",k.btn))},{default:i((()=>[r(n(k.btn),1)])),_:1})):p("",!0),k.btn1?(s(),c(m,{key:1,onClick:y[1]||(y[1]=t=>f("on-click-cancel")),style:{height:"28px","--el-button-text-color":"var(--jy-color-text-2)"}},{default:i((()=>[r(n(k.btn1),1)])),_:1})):p("",!0),o(t.$slots,"right",{},void 0,!0)])])])}}},[["__scopeId","data-v-f044d874"]]);export{f as default};
