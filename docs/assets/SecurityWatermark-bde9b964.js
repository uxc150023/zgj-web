import{c as e}from"./table-e0a114b8.js";import{_ as a}from"./searchForm-96cc0cf8.js";/* empty css                                                             */import{g as t,j as l,P as o}from"./chunk-vform-d740b35c.js";/* empty css                                                                   */import{c as n}from"./pagination-3c925a2b.js";import{c as i}from"./JyTabs-726242c5.js";import{c as r}from"./Layout-e90710df.js";import{c as s}from"./batch-6eb7c760.js";import{c as d}from"./documentsDetails-8b022303.js";import{b as p,r as b,a9 as m,a1 as c,C as u,F as X,G as h,B as y,N as f,H as v,u as w,O as g,Q as _,J as k,R as x,I as A,V as D,W as j}from"./chunk-element-plus-a77de3d2.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-63de8919.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e63dfdb7.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const B={class:"PrintControlManagement-SecurityWatermark"},C=(e=>(D("data-v-60b130f0"),e=e(),j(),e))((()=>v("div",{class:"title"}," 防伪水印验证 ",-1))),T={class:"batch"},L={class:"ap-box"},J=t({props:{type:{type:String,default:"0"}},emits:[],setup(t,{emit:D}){const j=l(),J=p({componentsTabs:{data:[{label:"未验证",name:"1"},{label:"已验证",name:"2"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"盖章码/申请人员/文件名称"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"所属部门",type:"derivable",defaultAttribute:{placeholder:"+选择部门"}},{id:"picker",label:"申请时间",type:"picker",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"shenqingr",label:"用印状态",type:"radioButton",data:[{name:"审批已完成"},{name:"智能用印中"},{name:"待上传文件归档"},{name:"已完成"}]},{id:"shenqingr",label:"用印模式",type:"radioButton",data:[{name:"智能用印"},{name:"远程盖章"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"7",label:"用印状态",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"取消水印验证"}]}],data:[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:l})=>{if("2"==a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"操作记录",name:"operating-record"},{label:"领用记录",name:"Record-of-requisition"}]},JyElMessageBox:{show:!1,header:{data:""},content:{data:""}}}),S=b(!1);function E(e,a,t,l){"2"==a.property&&(J.componentsDocumentsDetails.show=!0)}function M(){J.componentsDocumentsDetails.show=!1}function q(e){"1"==e?(J.componentsTable.header=[{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"7",label:"用印状态",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"取消水印验证"}]}],J.componentsTable.data=[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}]):"2"==e&&(J.componentsTable.header=[{width:50,type:"selection"},{prop:"0",label:"序号",width:60},{prop:"1",label:"单据编号",sortable:!0,"min-width":150},{prop:"2",label:"单据名称",sortable:!0,"min-width":150},{prop:"3",label:"用印文件类型",sortable:!0,"min-width":150},{prop:"7",label:"用印状态",sortable:!0,"min-width":150},{prop:"8",label:"水印验证节点",sortable:!0,"min-width":150},{prop:"9",label:"验证状态",sortable:!0,"min-width":150},{prop:"10",label:"验证次数",sortable:!0,"min-width":150},{prop:"4",label:"申请人",sortable:!0,"min-width":150},{prop:"5",label:"申请部门",sortable:!0,"min-width":150},{prop:"6",label:"申请时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"查看验证记录"}]}],J.componentsTable.data=[{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"盖前验证",9:"正常",10:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"盖中验证",9:"有异常",10:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"盖后验证",9:"正常",10:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"归档验证",9:"有异常",10:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:"",8:"盖前验证",9:"有异常",10:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""},{1:"XXXXXXX",2:"用印申请",3:"",4:"往往",5:"",6:"2022/10/30  15:00:00",7:""}]),"1"==e?J.componentsSearchForm.data=[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"盖章码/申请人员/文件名称"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"文件类型",type:"derivable",defaultAttribute:{placeholder:"+文件类型"}},{id:"derivable",label:"申请人",type:"derivable",defaultAttribute:{placeholder:"+申请人"}},{id:"derivable",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+申请部门"}},{id:"shenqingr",label:"用印状态",type:"checkButton",data:[{name:"待审批"},{name:"待文件核验"},{name:"待智能用印"},{name:"智能用印中"},{name:"已完成用印"},{name:"待上传文件归档"},{name:"已完成归档"}]},{id:"shenqingr",label:"用印模式",type:"checkButton",data:[{name:"智能用印"},{name:"远程盖章"},{name:"实时视频盖章"}]},{id:"wdyy",label:"",type:"checkbox",checkbox:[{defaultAttribute:{label:"我的申请单据"},style:{}}]}]:"2"==e&&(J.componentsSearchForm.data=[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"盖章码/申请人员/文件名称"}},{id:"picker",label:"申请时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"文件类型",type:"derivable",defaultAttribute:{placeholder:"+文件类型"}},{id:"derivable",label:"申请人",type:"derivable",defaultAttribute:{placeholder:"+申请人"}},{id:"derivable",label:"申请部门",type:"derivable",defaultAttribute:{placeholder:"+申请部门"}},{id:"shenqingr",label:"用印状态",type:"checkButton",data:[{name:"待审批"},{name:"待文件核验"},{name:"待智能用印"},{name:"智能用印中"},{name:"已完成用印"},{name:"待上传文件归档"},{name:"已完成归档"}]},{id:"shenqingr",label:"用印模式",type:"checkButton",data:[{name:"智能用印"},{name:"远程盖章"},{name:"实时视频盖章"}]},{id:"shenqingr",label:"水印验证节点",type:"checkButton",data:[{name:"盖前"},{name:"盖中"},{name:"盖后"},{name:"归档"}]},{id:"shenqingr",label:"水印验证状态",type:"checkButton",data:[{name:"正常"},{name:"有异常"}]},{id:"wdyy",label:"",type:"checkbox",checkbox:[{defaultAttribute:{label:"我的申请单据"},style:{}}]}])}function F(e,a,t,l){"取消水印验证"===t.name&&(J.JyElMessageBox.header.data="取消水印验证",J.JyElMessageBox.content.data="请问确认要取消水印验证吗？",J.JyElMessageBox.show=!0),"查看验证记录"===t.name&&j.push({name:"WaterCheckRecord"})}function U(e,a){"derivable"===e.type&&(S.value=!0)}return m((()=>{q("1")})),c((()=>{})),(t,l)=>{const p=u("JyElMessageBox");return X(),h("div",B,[y(r,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:f((()=>[C])),tabs:f((()=>[v("div",null,[y(i,{activeName:"1",data:w(J).componentsTabs.data,onTabChange:q},null,8,["data"])])])),searchForm:f((()=>[v("div",null,[y(w(a),{data:w(J).componentsSearchForm.data,butData:w(J).componentsSearchForm.butData,style:g(w(J).componentsSearchForm.style),onClickElement:U},null,8,["data","butData","style"])])])),batch:f((()=>[v("div",T,[y(s)])])),table:f((()=>[v("div",null,[y(w(e),{defaultAttribute:w(J).componentsTable.defaultAttribute,data:w(J).componentsTable.data,paginationData:w(J).componentsPagination.data,isSelection:"",header:w(J).componentsTable.header,onCellClick:E,onCustomClick:F},null,8,["defaultAttribute","data","paginationData","header"])])])),pagination:f((()=>[y(n,{data:w(J).componentsPagination.data,defaultAttribute:w(J).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),v("div",L,[y(d,{show:w(J).componentsDocumentsDetails.show,visible:w(J).componentsDocumentsDetails.visible,onClickClose:M},null,8,["show","visible"])]),S.value?(X(),_(w(o),{key:0,show:S.value,"onUpdate:show":l[0]||(l[0]=e=>S.value=e)},null,8,["show"])):k("",!0),y(p,{modelValue:w(J).JyElMessageBox.show,"onUpdate:modelValue":l[1]||(l[1]=e=>w(J).JyElMessageBox.show=e),show:w(J).JyElMessageBox.show,defaultAttribute:{}},{header:f((()=>[x(A(w(J).JyElMessageBox.header.data),1)])),content:f((()=>[x(A(w(J).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-60b130f0"]]);export{J as default};
