import{h as e,i as t,j as o,k as s,r as l,o as a,c as r,a as n,w as p,u,n as d,b as i,l as c,m as f,p as h,g as y,t as m,f as g,q as w}from"./main-5d732c2e.js";const b={class:"container-box"},k={key:0,class:"dialog-header"},v={key:0,class:"dialog-header-icon"},B=[f("svg",{class:"iconpark-icon"},[f("use",{href:"#icon4"})],-1)],V={key:1,class:"dialog-header-cont"},A=[f("svg",{class:"iconpark-icon"},[f("use",{href:"#Vector"})],-1)],C={key:1,class:"cut-off-rule"},O={key:2,class:"cut-off-rule"},j={props:{type:{type:String,default:"0"},oneBtn:{type:Boolean,default:!1},confirmBtnText:{type:String,default:"t-zgj-select.confirm"},modelValue:{type:Boolean,default:!1},"show-cut-off-rule":{type:Boolean,default:!1},"show-close":{type:Boolean,default:!0},"show-icon":{type:Boolean,default:!1},"show-title":{type:Boolean,default:!0},"show-footer":{type:Boolean,default:!0},"show-header":{type:Boolean,default:!0},"custom-content":{type:Boolean,default:!1},defaultAttribute:{type:Object,default:()=>({})}},emits:["close","confirmClick","update:modelValue"],setup(j,{emit:x}){const $=j,T=e({props:{defaultAttribute:{"align-center":!0,"show-close":!1,width:"500px",center:!1}}});function R(){const e=T.props;for(const t in $)Object.hasOwnProperty.call(e,t)?"defaultAttribute"!==t&&(e[t]=$[t]):e[t]=$[t];for(const t in $.defaultAttribute)Object.hasOwnProperty.call($.defaultAttribute,t)&&(e.defaultAttribute[t]=$.defaultAttribute[t])}function _(){T.props.modelValue=!1}function z(){x("confirmClick",T.props.modelValue)}function I(){T.props.modelValue=!1,x("update:modelValue",T.props.modelValue)}return t($,((e,t)=>{R()})),o((()=>{R()})),s((()=>{})),(e,t)=>{const o=l("el-button"),s=l("el-dialog");return a(),r("div",b,[n(s,w({modelValue:u(T).props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>u(T).props.modelValue=e)},u(T).props.defaultAttribute,{onClose:I,"append-to-body":"",class:"components-ElMessageBox"}),{default:p((()=>[u(T).props.customContent?(a(),r("div",{key:0,class:"dialog",style:d({height:u(T).props.defaultAttribute.height})},[i(e.$slots,"default")],4)):(a(),r("div",{key:1,class:"dialog",style:d({height:u(T).props.defaultAttribute.height})},[u(T).props.showHeader&&(u(T).props.showIcon||u(T).props.showTitle||u(T).props.showCutOffRule)?(a(),r("div",k,[u(T).props.showIcon?(a(),r("div",v,B)):c("",!0),u(T).props.showTitle?(a(),r("div",V,[i(e.$slots,"header")])):c("",!0),u(T).props.showClose?(a(),r("div",{key:2,class:"dialog-header-remove",onClick:_},A)):c("",!0)])):c("",!0),u(T).props.showCutOffRule?(a(),r("div",C)):c("",!0),f("div",{class:h(["dialog-content",{"center-content":!!u(T).props.defaultAttribute.center}])},[i(e.$slots,"content")],2),u(T).props.showCutOffRule?(a(),r("div",O)):c("",!0),u(T).props.showFooter?(a(),r("div",{key:3,class:h(["dialog-footer",{"center-footer":!!u(T).props.defaultAttribute.footerCenter}])},[i(e.$slots,"footer",{},(()=>[n(o,{type:"primary",onClick:z},{default:p((()=>[y(m(e.$t($.confirmBtnText)),1)])),_:1}),$.oneBtn?c("",!0):(a(),g(o,{key:0,onClick:_},{default:p((()=>[y(m(e.$t("t-zgj-operation.cancel")),1)])),_:1}))]))],2)):c("",!0)],4))])),_:3},16,["modelValue"])])}}};export{j as default};
