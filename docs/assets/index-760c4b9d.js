import{r as e,a1 as o,ad as t}from"./chunk-element-plus-a77de3d2.js";import{B as a}from"./chunk-vform-d740b35c.js";const r=a=>{const r=e(!1),n=e=>{a.value&&(a.value.contains(e.target)?r.value=!1:r.value=!0)};return o((()=>{document.addEventListener("click",n)})),t((()=>{document.removeEventListener("click",n)})),r},n={loginByAccount:e=>a({method:"POST",url:"/login/byAccount",data:e}),sendVerificationCode:e=>a({method:"POST",url:"/login/sendVerificationCode",data:e}),byVerifiableCode:e=>a({method:"POST",url:"/login/byVerifiableCode",data:e}),tenantInfoList:e=>a({method:"GET",url:"/user/tenantInfoList",params:e}),logOut:e=>a({method:"GET",url:"/logout",data:e}),chooseOrgan:e=>a({method:"GET",url:`/user/setLoginTenant/${e}`}),reqGet:e=>a({url:"/login/getCaptchaInfo/blockPuzzle",method:"GET",params:e}),reqChecked:e=>a({url:"/login/checkCaptcha",method:"POST",data:e}),qrCode:e=>a({url:"/login/qrCode",method:"GET",params:e}),qrCodeStatus:e=>a({url:"/login/qrCodeStatus",method:"GET",params:e}),scanQrCode:e=>a({url:"/scan/loginQrCode",method:"GET",params:e}),loginQrCode:e=>a({url:"/confirm/loginQrCode",method:"GET",params:e})};export{n as a,r as u};
