import{B as e}from"./chunk-vform-d740b35c.js";const t={userPage:t=>e({method:"GET",url:"/user/page",params:t}),roleEdit:t=>e({method:"POST",url:"/role/edit",data:t}),roleDelete:t=>e({method:"POST",url:`/role/delete/${t}`}),generateBizNo:t=>e({method:"POST",url:`/role/generateBizNo/${t}`}),roleData:t=>e({method:"POST",url:"/role/add",data:t}),batchDelete:t=>e({method:"POST",url:"/role/batchDelete",data:t}),addSetting:t=>e({method:"POST",url:"/role/config/add",data:t}),editSetting:t=>e({method:"POST",url:"/role/config/edit",data:t}),getSetting:t=>e({method:"GET",url:"/role/config/get"}),deleteRoleUser:t=>e({method:"GET",url:`/role/user/delete/${t}`}),addRoleUser:t=>e({method:"POST",url:"/role/user/add",data:t}),batchDeleteRoleUser:t=>e({method:"POST",url:"/role/user/batchDelete",data:t})};export{t as a};
