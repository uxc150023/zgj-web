System.register(["./main-legacy-80c027be.js","./table-legacy-3557b439.js","./pagination-legacy-abc2a695.js","./Layout-legacy-b2631a91.js","./sangedian-legacy-5b82475d.js"],(function(e,t){"use strict";var l,a,n,i,o,s,c,d,r,u,p,m,f,b,h,v,g,y,X,x,I=document.createElement("style");return I.textContent=".update-license .title[data-v-63d3e308]{display:flex;align-items:center;justify-content:space-between}.update-license .title .title-more[data-v-63d3e308]{height:100%;display:flex;align-items:center}.update-license .title .title-more .title-more-add[data-v-63d3e308]{margin-right:.5rem;height:100%;display:flex;align-items:center}.update-license .title .title-more .title-more-down[data-v-63d3e308]{height:100%;display:flex;align-items:center}.update-license .custom-input[data-v-63d3e308]{margin:.5rem 0rem;display:flex;flex-flow:wrap;justify-content:center;align-content:flex-start}.update-license .custom-input .custom-input-val[data-v-63d3e308]{display:flex;align-items:center;width:60%}.update-license .custom-input .custom-input-val .custom-input-val-input[data-v-63d3e308]{width:calc(100% - 4rem);padding-right:.5rem;box-sizing:border-box}.update-license .custom-input .custom-input-desc[data-v-63d3e308]{display:flex;align-items:center;width:60%;margin:1rem 0;color:var(--jy-color-text-2)}.update-license .custom-table[data-v-63d3e308]{margin:1rem 0 .5rem}.update-license .custom-pagination[data-v-63d3e308]{width:100%;display:flex;justify-content:flex-end;padding:1.5rem 0rem 1.5rem 0;box-sizing:border-box}.update-license .licenseInfo .licenseInfo-title[data-v-63d3e308]{margin-bottom:1rem}.update-license .licenseInfo .licenseInfo-title .licenseInfo-title-cont[data-v-63d3e308]{padding:1rem;box-sizing:border-box;background-color:var(--jy-color-fill--2);border-radius:var(--jy-border-radius-4)}.update-license .licenseInfo .licenseInfo-title .licenseInfo-title-cont .licenseInfo-title-cont-title[data-v-63d3e308]{font-size:var(--jy-font-size-body-2)}.update-license .licenseInfo .licenseInfo-title .licenseInfo-title-cont .licenseInfo-title-cont-v[data-v-63d3e308]{padding:.5rem 0;box-sizing:border-box;font-size:var(--jy-font-size-title-3);font-weight:500}.update-license .licenseInfo .licenseInfo-title .licenseInfo-title-cont .licenseInfo-title-cont-desc[data-v-63d3e308]{color:var(--jy-color-text-3)}.update-license .licenseInfo .licenseInfo-authorization .licenseInfo-authorization-title[data-v-63d3e308]{color:var(--jy-color-text-1);margin-bottom:.5rem}.update-license .licenseInfo .licenseInfo-authorization .licenseInfo-authorization-cont[data-v-63d3e308]{padding:1rem;box-sizing:border-box;border-radius:var(--jy-border-radius-4);border:1px solid var(--jy-color-border-1)}.update-license .licenseInfo .licenseInfo-authorization .licenseInfo-authorization-cont .licenseInfo-authorization-cont-list[data-v-63d3e308]{display:flex;padding:.5rem 0rem;box-sizing:border-box}.update-license .licenseInfo .licenseInfo-authorization .licenseInfo-authorization-cont .licenseInfo-authorization-cont-list .licenseInfo-authorization-cont-list-label[data-v-63d3e308]{width:10rem;text-align:right;color:var(--jy-color-text-3)}.update-license .licenseInfo .licenseInfo-authorization .licenseInfo-authorization-cont .licenseInfo-authorization-cont-list .licenseInfo-authorization-cont-list-value[data-v-63d3e308]{color:var(--jy-color-text-1)}\n",document.head.appendChild(I),{setters:[e=>{l=e._,a=e.h,n=e.v,i=e.r,o=e.o,s=e.c,c=e.a,d=e.w,r=e.m,u=e.u,p=e.F,m=e.e,f=e.t,b=e.g,h=e.M,v=e.y,g=e.z},e=>{y=e.c},e=>{X=e.c},e=>{x=e.c},null],execute:function(){const t=e=>(v("data-v-63d3e308"),e=e(),g(),e),I={class:"update-license"},z=t((()=>r("div",{class:"title"},[r("div",null,"更新license"),r("div",{class:"title-more"})],-1))),w={class:"custom"},j={class:"custom-input"},A={class:"custom-input-val"},J={class:"custom-input-val-input"},B=b(" 获取 "),C=t((()=>r("div",{class:"custom-input-desc"},"说明：请输入新的许可证密钥（license）来获取系统使用权限 ",-1))),k={class:"custom-table"},M={class:"custom-pagination"},S={class:"licenseInfo"},E=t((()=>r("div",{class:"licenseInfo-title"},[r("div",{class:"licenseInfo-title-cont"},[r("div",{class:"licenseInfo-title-cont-title"},"系统版本"),r("div",{class:"licenseInfo-title-cont-v"},"V1.2.5"),r("div",{class:"licenseInfo-title-cont-desc"}," 产品识别码：254455FJFHS4585SKJAHDK444--4444555SJJXHHU887 ")])],-1))),T={class:"licenseInfo-authorization"},D=t((()=>r("div",{class:"licenseInfo-authorization-title"},"授权信息",-1))),H={class:"licenseInfo-authorization-cont"},U={class:"licenseInfo-authorization-cont-list-label"},V={class:"licenseInfo-authorization-cont-list-value"},_={setup(e){const t=a({cache:{setLicense:"",authorizationMessage:{list:[{label:"license",value:"254455FJFHS4585SKJAHDK444--4444555SJJXHHU887"},{label:"授权用户",value:"章管家"},{label:"license过期时间",value:"永不过期"},{label:"内部单位数",value:"不限"},{label:"外部单位数",value:"不限"},{label:"内部个人用户数",value:"不限"},{label:"外部个人用户数",value:"不限"},{label:"应用接入数",value:"不限"}]}},componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"企业名称/企业编码/联系人/联系方式"}},{id:"name",label:"所属部门",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"}}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"license密钥",sortable:!0,"min-width":150,fixed:!0,"show-overflow-tooltip":!0},{prop:"2",label:"更新人",sortable:!0,"min-width":150},{prop:"3",label:"更新时间",sortable:!0,"min-width":180}],data:[{1:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",2:"王往",3:"2022-12-26 18:00:00"},{1:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",2:"里斯",3:"2022-12-26 18:00:00"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:l,columnIndex:a})=>{if("1"===t.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:400,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsDocumentsDetails:{show:!1,visible:[{label:"往来企业详情",name:"Current-Business-Details"},{label:"流程记录",name:"operating-record"}]},JyElMessageBox:{show:!1,header:{data:""},content:{data:""}}}),l=n(!1);function v(e,t,l,a){t.property}function g(e,l,a,n){a.name,"删除"===a.name&&(t.JyElMessageBox.header.data="提示？",t.JyElMessageBox.content.data="您确定要删除该记录吗？",t.JyElMessageBox.show=!0)}function _(){l.value=!0}return(e,a)=>{const n=i("el-input"),F=i("el-button"),L=h,K=i("JyElMessageBox");return o(),s("div",I,[c(u(x),{Layout:"title,custom"},{title:d((()=>[z])),custom:d((()=>[r("div",w,[r("div",j,[r("div",A,[r("div",J,[c(n,{modelValue:u(t).cache.setLicense,"onUpdate:modelValue":a[0]||(a[0]=e=>u(t).cache.setLicense=e),placeholder:"输入license"},null,8,["modelValue"])]),c(F,{class:"custom-input-val-button",type:"primary",onClick:_},{default:d((()=>[B])),_:1})]),C]),r("div",k,[c(u(y),{defaultAttribute:u(t).componentsTable.defaultAttribute,data:u(t).componentsTable.data,header:u(t).componentsTable.header,paginationData:u(t).componentsPagination.data,isSelection:!1,onCellClick:v,onCustomClick:g},null,8,["defaultAttribute","data","header","paginationData"])]),r("div",M,[c(u(X),{data:u(t).componentsPagination.data,defaultAttribute:u(t).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])])])),_:1}),c(L,{"onUpdate:show":a[1]||(a[1]=e=>l.value=e),show:l.value,title:"license信息",centerBtn:!0,confirmText:e.$t("t-zgj-operation.submit"),concelText:e.$t("t-zgj-operation.cancel"),width:1e3,height:700},{default:d((()=>[r("div",S,[E,r("div",T,[D,r("div",H,[(o(!0),s(p,null,m(u(t).cache.authorizationMessage.list,((e,t)=>(o(),s("div",{key:t,class:"licenseInfo-authorization-cont-list"},[r("div",U,f(e.label)+"： ",1),r("div",V,f(e.value),1)])))),128))])])])])),_:1},8,["show","confirmText","concelText"]),c(K,{modelValue:u(t).JyElMessageBox.show,"onUpdate:modelValue":a[2]||(a[2]=e=>u(t).JyElMessageBox.show=e),show:u(t).JyElMessageBox.show,defaultAttribute:{}},{header:d((()=>[b(f(u(t).JyElMessageBox.header.data),1)])),content:d((()=>[b(f(u(t).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])])}}};e("default",l(_,[["__scopeId","data-v-63d3e308"]]))}}}));
