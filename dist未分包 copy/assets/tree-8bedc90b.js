/* empty css                                                             */import{_ as e,v as t,j as a,k as n,r as c,o as r,c as s,a as l,w as o,m as d,l as u,t as i,q as p}from"./main-5d732c2e.js";const f={class:"components-tree"},h=["onClick"],y={key:0,class:"custom-tree-node-icon",src:"/assets/tree-wenjian-d6df0ea4.svg",alt:""},k=e({props:{refs:{type:String,default:""},loadFn:{type:Function},type:{type:String,default:"0"},data:{type:Array,default:()=>[]},defaultProps:{type:Object,default:()=>({children:"children",label:"label"})},defaultAttribute:{type:Object,default:()=>({})},modelValue:{type:String,default:""}},emits:["node-click","check-change","check","current-change","load"],setup(e,{expose:k,emit:g}){const m=e,_=t(null);function b(e,t,a,n){g("node-click",e,t,a,n)}function C(e,t,a){g("check-change",e,t,a)}function v(e,t){g("check",e,t)}function j(e,t){g("current-change",e,t)}return k({setCurrentKey:function(e){_.value.setCurrentKey(e)}}),a((()=>{})),n((()=>{})),(t,a)=>{const n=c("el-tree");return r(),s("div",f,[l(n,p({ref_key:"tree",ref:_},m.defaultAttribute,{refs:e.refs,data:m.data,props:m.defaultProps,load:e.loadFn,onNodeClick:b,onCheckChange:C,onCheck:v,onCurrentChange:j,"current-node-key":m.modelValue}),{default:o((({node:e,data:t})=>[d("span",{class:"custom-tree-node",onClick:e=>{}},[t.children&&0!==t.children.length?u("",!0):(r(),s("img",y)),d("span",null,i(t[m.defaultProps.label]),1)],8,h)])),_:1},16,["refs","data","props","load","current-node-key"])])}}},[["__scopeId","data-v-c843ec9b"]]);export{k as c};
