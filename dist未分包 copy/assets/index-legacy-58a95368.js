System.register(["./table-legacy-3557b439.js","./searchForm-legacy-661aae1d.js","./pagination-legacy-abc2a695.js","./Layout-legacy-b2631a91.js","./main-legacy-80c027be.js","./sangedian-legacy-5b82475d.js","./ketanchude-legacy-3429c6dd.js","./KDocumentTypeDialog-legacy-9730cc30.js"],(function(e,t){"use strict";var a,l,n,o,i,r,u,d,s,p,c,m;return{setters:[e=>{a=e.c},e=>{l=e._},e=>{n=e.c},e=>{o=e.c},e=>{i=e.h,r=e.o,u=e.c,d=e.a,s=e.w,p=e.m,c=e.u,m=e.n},null,null,null],execute:function(){const t=p("div",{class:"title"},"消息日志",-1);e("default",{setup(e){const b=i({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"通知人/通知账号/通知标题/通知内容"}},{id:"name",label:"发送渠道",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{value:"1",label:"全部"}]},{id:"name",label:"发送状态",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{value:"1",label:"全部"}]},{id:"name",label:"通知事件",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{value:"1",label:"全部"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"通知人",sortable:!0,"min-width":150,fixed:!0},{prop:"2",label:"通知账号",sortable:!0,"min-width":150},{prop:"3",label:"通知事件",sortable:!0,"min-width":150},{prop:"4",label:"通知标题",sortable:!0,"min-width":150},{prop:"5",label:"通知内容",sortable:!0,"min-width":150},{prop:"6",label:"发送渠道",sortable:!0,width:180},{prop:"7",label:"发送状态",sortable:!0,"min-width":150}],data:[{1:"通知人",2:"19999999",3:"通知事件",4:"通知标题",5:"通知内容",6:"发送渠道",7:"发送状态"},{1:"通知人",2:"19999999",3:"通知事件",4:"通知标题",5:"通知内容",6:"发送渠道",7:"发送状态"},{1:"通知人",2:"19999999",3:"通知事件",4:"通知标题",5:"通知内容",6:"发送渠道",7:"发送状态"},{1:"通知人",2:"19999999",3:"通知事件",4:"通知标题",5:"通知内容",6:"发送渠道",7:"发送状态"},{1:"通知人",2:"19999999",3:"通知事件",4:"通知标题",5:"通知内容",6:"发送渠道",7:"发送状态"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:l})=>{if("1"===t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}}});return(e,i)=>(r(),u("div",null,[d(o,{Layout:"title,searchForm,table,pagination"},{title:s((()=>[t])),searchForm:s((()=>[p("div",null,[d(c(l),{data:c(b).componentsSearchForm.data,butData:c(b).componentsSearchForm.butData,style:m(c(b).componentsSearchForm.style)},null,8,["data","butData","style"])])])),table:s((()=>[p("div",null,[d(c(a),{defaultAttribute:c(b).componentsTable.defaultAttribute,data:c(b).componentsTable.data,header:c(b).componentsTable.header,paginationData:c(b).componentsPagination.data,isSelection:!0},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:s((()=>[d(n,{data:c(b).componentsPagination.data,defaultAttribute:c(b).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1})]))}})}}}));
