import{g as e,P as a,n as t}from"./chunk-vform-d740b35c.js";import{c as l}from"./table-e0a114b8.js";import{_ as o}from"./searchForm-96cc0cf8.js";/* empty css                                                             *//* empty css                                                                   */import{c as n}from"./pagination-3c925a2b.js";import{c as i}from"./JyTabs-726242c5.js";import{c as r}from"./Layout-e90710df.js";import{c as s}from"./batch-6eb7c760.js";import{c as d}from"./documentsDetails-8b022303.js";import{R as m}from"./RecordSealToReview-dca792f4.js";import{r as p,b as c,a9 as u,a1 as b,C as h,F as f,G as v,B as y,N as g,H as w,u as _,O as C,Q as T,J as j,R as D,V as x,W as k}from"./chunk-element-plus-a77de3d2.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-63de8919.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";/* empty css                                                                         */import"./portion-e63dfdb7.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const A={widgetList:[{key:94019,type:"radio",icon:"radio-field",formItemFlag:!0,options:{name:"radio40162",label:"审批选项",labelAlign:"",defaultValue:1,columnWidth:"200px",size:"",displayStyle:"inline",buttonStyle:!1,border:!1,labelWidth:null,labelHidden:!1,disabled:!1,hidden:!1,dsEnabled:!1,dsName:"",dataSetName:"",labelKey:"label",valueKey:"value",optionItems:[{label:"同意",value:1},{label:"不同意",value:2},{label:"转交",value:3},{value:4,label:"加签"},{value:5,label:"征询他人意见"},{value:6,label:"退回"}],required:!1,requiredHint:"",validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,onCreated:"",onMounted:"",onChange:"",onValidate:""},id:"radio40162"},{key:15819,type:"textarea",icon:"textarea-field",formItemFlag:!0,options:{name:"textarea73312",label:"审批意见",labelAlign:"",rows:3,defaultValue:"",placeholder:"请输入",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,required:!1,requiredHint:"",validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"textarea73312"}],formConfig:{modelName:"formData",refName:"vForm",rulesName:"rules",labelWidth:80,labelPosition:"left",size:"",labelAlign:"label-left-align",cssCode:"",customClass:"",functions:"",layoutType:"PC",jsonVersion:3,dataSources:[],onFormCreated:"",onFormMounted:"",onFormDataChange:"",onFormValidate:""}},L=e=>(x("data-v-3b2db54e"),e=e(),k(),e),F={class:"PrintControlManagement-handleTask"},S={class:"title"},I=L((()=>w("div",null,"处理任务",-1))),P={class:"title-more"},J={class:"title-more-add"},N=D("导出台账"),z={class:"batch"},V={class:"ap-box"},W={class:"select-person"},q=L((()=>w("span",null,"添加抄送",-1))),H=e({props:{type:{type:String,default:"0"}},emits:[],setup(e,{emit:D}){const x=p(!1),k=c({show:!1,title:"处理",formJson:m}),L=p(null),H=e=>{e?L.value.getFormData().then((e=>{alert(JSON.stringify(e)),fromState.showDialog=!1})).catch((e=>{ElMessage.error(e)})):L.value.resetForm()},R=c({componentsTabs:{data:[{label:"待处理",name:"1"},{label:"已处理",name:"2"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"流程主题/申请人/编码"}},{id:"picker",label:"任务生成时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"derivable",label:"单据申请部门",type:"derivable",defaultAttribute:{placeholder:"+选择部门"}},{id:"wjlx",label:"任务类型",type:"select",options:[{label:"任务类型1",value:"1"},{label:"任务类型2",value:"2"}],defaultAttribute:{multiple:!1}}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"任务单据名称",sortable:!0,"min-width":150},{prop:"2",label:"任务类型",sortable:!0,"min-width":150},{prop:"3",label:"单据申请人",sortable:!0,"min-width":150},{prop:"4",label:"单据申请部门",sortable:!0,"min-width":150},{prop:"5",label:"任务生成时间",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"},{name:"审批"}]}],data:[{1:"TradeCode21",2:"用印复核",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:l})=>{if("1"==a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsTree:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]}});function M(e){"1"==e?(R.componentsTable.header=[{prop:"1",label:"任务单据名称",sortable:!0,"min-width":150},{prop:"2",label:"任务类型",sortable:!0,"min-width":150},{prop:"3",label:"单据申请人",sortable:!0,"min-width":150},{prop:"4",label:"单据申请部门",sortable:!0,"min-width":150},{prop:"5",label:"任务生成时间",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"处理"}]}],R.componentsTable.data=[{1:"TradeCode21",2:"用印复核",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""}]):"2"==e&&(R.componentsTable.header=[{prop:"1",label:"任务单据名称",sortable:!0,"min-width":150},{prop:"2",label:"任务类型",sortable:!0,"min-width":150},{prop:"3",label:"单据申请人",sortable:!0,"min-width":150},{prop:"4",label:"单据申请部门",sortable:!0,"min-width":150},{prop:"5",label:"任务生成时间",sortable:!0,"min-width":150}],R.componentsTable.data=[{1:"TradeCode21",2:"用印复核",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"远程盖章",3:"往往",4:"",5:"2022/10/30",6:""}])}function U(e,a,t,l){"1"==a.property&&(R.componentsDocumentsDetails.show=!0)}function B(){R.componentsDocumentsDetails.show=!1}function E(e,a,t,l){k.show=!0,k.title=t.name,"处理"===t.name&&(k.formJson=m),"审批"===t.name&&(k.formJson=A)}function K(e,a){"derivable"===e.type&&(x.value=!0)}return u((()=>{})),b((()=>{})),(e,m)=>{const p=h("el-button"),c=h("v-form-render"),u=t;return f(),v("div",F,[y(r,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:g((()=>[w("div",S,[I,w("div",P,[w("div",J,[y(p,{type:"primary"},{default:g((()=>[N])),_:1})])])])])),tabs:g((()=>[w("div",null,[y(i,{activeName:"1",data:_(R).componentsTabs.data,onTabChange:M},null,8,["data"])])])),searchForm:g((()=>[w("div",null,[y(_(o),{data:_(R).componentsSearchForm.data,butData:_(R).componentsSearchForm.butData,style:C(_(R).componentsSearchForm.style),onClickElement:K},null,8,["data","butData","style"])])])),batch:g((()=>[w("div",z,[y(s)])])),table:g((()=>[w("div",null,[y(_(l),{defaultAttribute:_(R).componentsTable.defaultAttribute,data:_(R).componentsTable.data,header:_(R).componentsTable.header,paginationData:_(R).componentsPagination.data,isSelection:!0,onCellClick:U,onCustomClick:E},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:g((()=>[y(n,{data:_(R).componentsPagination.data,defaultAttribute:_(R).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),w("div",V,[y(d,{show:_(R).componentsDocumentsDetails.show,visible:_(R).componentsDocumentsDetails.visible,onClickClose:B},null,8,["show","visible"])]),y(u,{"onUpdate:show":m[1]||(m[1]=e=>_(k).show=e),show:_(k).show,title:_(k).title,oneBtn:!1,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),onClose:H},{default:g((()=>[(f(),T(c,{"form-json":_(k).formJson,"form-data":_(k).formJson,"option-data":_(k).optionData,ref_key:"vFormLibraryRef",ref:L,key:_(k).title},null,8,["form-json","form-data","option-data"])),w("div",W,[q,w("div",{onClick:m[0]||(m[0]=e=>x.value=!0)},"+请选择抄送人")])])),_:1},8,["show","title","confirmText","concelText"]),x.value?(f(),T(_(a),{key:0,show:x.value,"onUpdate:show":m[2]||(m[2]=e=>x.value=e)},null,8,["show"])):j("",!0)])}}},[["__scopeId","data-v-3b2db54e"]]);export{H as default};
