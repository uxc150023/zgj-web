import{c as t}from"./table-12670e99.js";import{_ as a}from"./searchForm-a97b647c.js";import{c as e}from"./pagination-569fa38f.js";import{c as o}from"./Layout-db7f64fa.js";import{c as l}from"./batch-e7262433.js";import{h as i,o as r,c as n,a as s,w as p,m as d,u as m,n as u}from"./main-5d732c2e.js";import"./sangedian-b1ee72e5.js";import"./ketanchude-65de0c89.js";import"./KDocumentTypeDialog-1f624042.js";const c=d("div",{class:"title"},"固件升级日志",-1),b={class:"batch"},h={setup(h){const y=i({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入"}},{id:"picker",label:"更新时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"印章名称",sortable:!0,"min-width":150},{prop:"2",label:"印章MAC地址",sortable:!0,"min-width":150},{prop:"3",label:"固件版本号",sortable:!0,"min-width":120},{prop:"4",label:"更新人",sortable:!0,"min-width":100},{prop:"5",label:"更新时间",sortable:!0,"min-width":180}],data:[{1:"王锡春测试章",2:"806FB012185A",3:"V2.3.0",4:"易善林",5:"2022-12-09 13:56:46"},{1:"建业测试章",2:"806FB012185B",3:"V2.3.0",4:"易善林",5:"2022-12-09 13:56:46"},{1:"王锡春测试章",2:"806FB012185A",3:"V2.3.0",4:"易善林",5:"2022-03-09 13:56:46"},{1:"技术部测试章",2:"806FB012185A",3:"V2.3.1",4:"刘德华",5:"2021-12-09 13:00:46"},{1:"王锡春测试章",2:"806FB012185A",3:"V2.3.0",4:"易善林",5:"2022-12-09 13:56:00"},{1:"王锡春测试章",2:"806FB012185A",3:"V2.3.0",4:"易善林",5:"2022-12-09 13:56:46"},{1:"建业测试章",2:"806FB012185A",3:"V2.3.0",4:"刘德华",5:"2022-12-09 10:56:00"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsPagination:{data:{amount:30,index:1,pageNumber:6},defaultAttribute:{layout:"prev, pager, next, jumper",total:30,"page-sizes":[10,100,200,300,400],background:!0}}});return(i,h)=>(r(),n("div",null,[s(o,{Layout:"title,searchForm,table,pagination,batch"},{title:p((()=>[c])),searchForm:p((()=>[d("div",null,[s(m(a),{data:m(y).componentsSearchForm.data,butData:m(y).componentsSearchForm.butData,style:u(m(y).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:p((()=>[d("div",b,[s(l)])])),table:p((()=>[d("div",null,[s(m(t),{defaultAttribute:m(y).componentsTable.defaultAttribute,data:m(y).componentsTable.data,paginationData:m(y).componentsPagination.data,header:m(y).componentsTable.header,isSelection:!0},null,8,["defaultAttribute","data","paginationData","header"])])])),pagination:p((()=>[s(e,{data:m(y).componentsPagination.data,defaultAttribute:m(y).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1})]))}};export{h as default};
