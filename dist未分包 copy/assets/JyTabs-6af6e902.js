/* empty css                                                               */import{_ as a,h as e,i as t,j as n,k as s,r as c,o as l,c as o,m,a as i,w as d,F as p,e as u,f as r,u as v,p as b}from"./main-5d732c2e.js";const f={class:"components-tabs"},_=a({props:{refs:{type:String,default:""},type:{type:String,default:"0"},cancelBottomLine:{type:Boolean,default:!1},data:{type:Array,default:()=>[]},activeName:{type:String,default:""}},emits:["tab-change","getActiveName"],setup(a,{emit:_}){const y=a,N=e({activeName:"",data:[],cancelBottomLine:!1});function g(a,e){_("tab-change",N.activeName)}function B(){N.activeName=y.activeName,N.data=y.data,N.cancelBottomLine=y.cancelBottomLine}return t(y,((a,e)=>{B()})),n((()=>{B(),_("getActiveName",N.activeName)})),s((()=>{})),(a,e)=>{const t=c("el-tab-pane"),n=c("el-tabs");return l(),o("div",f,[m("div",{class:b(["ap-box",{cancelBottomLine:v(N).cancelBottomLine}])},[i(n,{modelValue:v(N).activeName,"onUpdate:modelValue":e[0]||(e[0]=a=>v(N).activeName=a),class:"demo-tabs",onTabChange:g},{default:d((()=>[(l(!0),o(p,null,u(v(N).data,((e,n)=>(l(),r(t,{label:a.$t(e.label),name:e.name,key:n},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])],2)])}}},[["__scopeId","data-v-5e06bfe2"]]);export{_ as c};
