import{d as a}from"./sangedian-b1ee72e5.js";import{_ as e,v as t,j as l,k as n,r as o,ad as s,o as i,c,P as d,f as u,w as r,l as p,m as f,t as m,F as y,e as w,q as g,b0 as k,a as D,b as h,g as v,y as b,z as S}from"./main-5d732c2e.js";const x={class:"components-table"},C={class:"switch"},$=["index"],_={class:"rankDisplayData"},j=["onClick"],V={key:0,class:"rankDisplayData-more"},z=(a=>(b("data-v-4455e27a"),a=a(),S(),a))((()=>f("span",{class:"el-dropdown-link"},[f("img",{class:"rankDisplayData-node",src:a,alt:""})],-1))),A=e({props:{refs:{type:String,default:""},type:{type:String,default:"0"},loading:{type:Boolean,default:!1},header:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},isSelection:{type:Boolean,default:!1},isNo:{type:Boolean,default:!0},defaultAttribute:{type:Object,default:()=>({})},paginationData:{type:Object,default:()=>({})},statusColoum:{type:String},openValue:{}},emits:["select","select-all","selection-change","cell-click","sort-change","row-click","custom-click"],setup(a,{expose:e,emit:b}){const S=a;e({clearSorts:function(){A.value.clearSort()},getSelectionRows:q});const A=t(null);function R(a,e){b("select",a,e)}function B(a){b("select-all",a)}function N(a){b("selection-change",a)}function T(a,e,t,l){b("cell-click",a,e,t,l)}function E(a){b("sort-change",a)}function O(a,e,t){b("row-click",a,e,t)}function U(a,e,t){b("custom-click",a,e,t)}function q(){return A.value.getSelectionRows()}return l((()=>{})),n((()=>{})),(e,t)=>{const l=o("el-table-column"),n=o("el-switch"),b=o("el-dropdown-item"),F=o("el-dropdown-menu"),G=o("el-dropdown"),I=o("el-table"),P=s("loading");return i(),c("div",x,[d((i(),u(I,g(S.defaultAttribute,{ref_key:"tableRefs",ref:A,data:S.data,style:{width:"100%"},"max-height":"600",onSelect:R,onSelectAll:B,onSelectionChange:N,onCellClick:T,onRowClick:O,onSortChange:E,class:"ap-table",onGetSelectionRows:q}),{default:r((()=>[a.isSelection?(i(),u(l,{key:0,type:"selection",width:"50"})):p("",!0),a.isNo?(i(),u(l,{key:1,label:"序号",type:"index",width:"55",fixed:"left",align:"center"},{default:r((a=>[f("span",null,m((S.paginationData.index?(S.paginationData.index-1)*S.paginationData.pageNumber:0)+a.$index+1),1)])),_:1})):p("",!0),(i(!0),c(y,null,w(S.header,((a,t)=>(i(),c(y,null,[!1!==a.show?(i(),u(l,g({key:0},a,{key:t}),k({_:2},["switch"==a.customDisplayType?{name:"default",fn:r((a=>[f("div",C,[D(n,{modelValue:a.row.switchValue,"onUpdate:modelValue":e=>a.row.switchValue=e},null,8,["modelValue","onUpdate:modelValue"])])]))}:void 0,"format"==a.customDisplayType?{name:"default",fn:r((e=>[f("span",null,m(e.row[a.prop])+" "+m(a.unit),1)]))}:void 0,"flag"==a.prop?{name:"default",fn:r((e=>[f("span",null,m("1"===e.row[a.prop]?"正常":"0"===e.row[a.prop]?"停用":e.row[a.prop]),1)]))}:void 0,"custom"==a.customDisplayType?{name:"default",fn:r((t=>[f("div",{class:"custom",index:t.$index},[h(e.$slots,"custom_"+a.prop,{value:t.row[a.prop]},void 0,!0)],8,$)]))}:void 0,a.rankDisplayData&&a.rankDisplayData.length>0?{name:"default",fn:r((t=>[f("div",_,[(i(!0),c(y,null,w(a.rankDisplayData.slice(0,4),((a,l)=>(i(),c("div",{class:"rankDisplayData-node",key:l,onClick:e=>U(t.$index,t.row,a)},[f("span",null,m("status"===a.name?t.row[S.statusColoum]!==S.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(a.name)),1)],8,j)))),128)),a.rankDisplayData.length>4?(i(),c("div",V,[D(G,null,{dropdown:r((()=>[D(F,null,{default:r((()=>[(i(!0),c(y,null,w(a.rankDisplayData.slice(4),((a,l)=>(i(),u(b,{key:l,onClick:e=>U(t.$index,t.row,a)},{default:r((()=>[v(m("status"===a.name?t.row[S.statusColoum]!==S.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(a.name)),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),default:r((()=>[z])),_:2},1024)])):p("",!0)])]))}:void 0]),1040)):p("",!0)],64)))),256))])),_:3},16,["data"])),[[P,a.loading]])])}}},[["__scopeId","data-v-4455e27a"]]);export{A as c};
