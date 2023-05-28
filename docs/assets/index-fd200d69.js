import{g as e}from"./chunk-vform-ec6574e8.js";import{e as t,a,b as l,aQ as n,W as s,X as o,ap as i,ai as u,Y as r,ae as c,u as d,ao as v,a7 as f,ba as p,bb as h}from"./chunk-ant-design-vue-a1de3c57.js";import"./chunk-element-plus-636450f3.js";const m=e=>(p("data-v-444f0115"),e=e(),h(),e),g={class:"vertify-box"},y={class:"vertify"},b={class:"content"},w={className:"canvasArea"},C=["width","height"],x=["width","height"],k=["className"],T=[m((()=>r("use",{href:"#btn1",class:"btn1"},null,-1))),m((()=>r("use",{href:"#btn2",class:"btn2"},null,-1)))],N={className:"sliderText"},M=[m((()=>r("div",{className:"loadingIcon"},null,-1))),m((()=>r("span",null,"加载中...",-1)))],R=m((()=>r("svg",{class:"iconpark-icon"},[r("use",{href:"#close"})],-1))),S=[m((()=>r("use",{href:"#flush"},null,-1)))],I=e({props:{title:{type:String,default:"title"},width:{type:Number,default:280},modelValue:{type:Boolean,default:!0},height:{type:Number,default:160},visible:{type:Boolean,default:()=>!0},l:{type:Number,default:42},r:{type:Number,default:9},imgUrl:{type:String,default:""},text:{type:String,default:"拖动滑块完成拼图"},onDraw:()=>{},onCustomVertify:()=>{},onBeforeRefresh:()=>{},onSuccess:()=>{},onFail:()=>{},onRefresh:()=>{}},emits:["update:modelValue","on-closed","click","on-success","on-failed"],setup(e,{emit:p}){const h=e,m=t({get:()=>h.modelValue,set(e){p("update:modelValue",e)}}),I=()=>{p("on-closed")},{text:V,l:X,r:_,imgUrl:D,width:Y,height:A,visible:B,onBeforeRefresh:O,onRefresh:U,onFail:j,onSuccess:F,onCustomVertify:W,onDraw:$}=h,q=a(!0),E=a(0),L=a("sliderContainer"),P=a(V),G=a(null),H=a(null),Q=a(null),z=a(!1),J=a([]),K=a(0),Z=a(0),ee=a(0),te=a(0),ae=Math.PI,le=X+2*_+3,ne=(e,t,a,l)=>{e.beginPath(),e.moveTo(t,a),e.arc(t+X/2,a-_+2,_,.72*ae,2.26*ae),e.lineTo(t+X,a),e.arc(t+X+_-2,a+X/2,_,1.21*ae,2.78*ae),e.lineTo(t+X,a+X),e.lineTo(t,a+X),e.arc(t+_-2,a+X/2,_+.4,2.76*ae,1.24*ae,!0),e.lineTo(t,a),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e.globalCompositeOperation="destination-over","fill"===l?e.fill():e.clip()},se=()=>D||`https://picsum.photos/id/${fe(0,1084)}/${Y}/${A}`,oe=()=>{const e=(e=>{const t=new Image;return t.crossOrigin="Anonymous",t.onload=e,t.onerror=()=>{t.setSrc(se())},t.setSrc=e=>{if(window.navigator.userAgent.indexOf("Trident")>-1){const a=new XMLHttpRequest;a.onloadend=function(e){const a=new FileReader;a.readAsDataURL(e.target.response),a.onloadend=function(e){t.src=e.target.result}},a.open("GET",e),a.responseType="blob",a.send()}else t.src=e},t.setSrc(se()),t})((()=>{q.value=!1,(e=>{const t=G.value.getContext("2d"),a=H.value.getContext("2d");ee.value=fe(le+10,Y-(le+10)),te.value=fe(10+2*_,A-(le+10)),ne(t,ee.value,te.value,"fill"),ne(a,ee.value,te.value,"clip"),t.drawImage(e,0,0,Y,A),a.drawImage(e,0,0,Y,A);const l=te.value-2*_-1,n=a.getImageData(ee.value-3,l,le,le);H.value.width=le,a.putImageData(n,0,l)})(e)}));Q.value=e},ie=()=>{const e=G.value.getContext("2d"),t=H.value.getContext("2d");E.value=0,L.value="sliderContainer",H.value.width=Y,H.value.style.left="0px",e.clearRect(0,0,Y,A),t.clearRect(0,0,Y,A),O&&O(),q.value=!0,Q.value.setSrc(se())},ue=()=>{ie(),"function"==typeof U&&U()},re=()=>{const e=J.value,t=e.reduce(pe)/e.length,a=e.map((e=>e-t)),l=Math.sqrt(a.map(he).reduce(pe)/e.length),n=parseInt(H.value.style.left);return{spliced:Math.abs(n-ee.value)<10,verified:0!==l,left:n,destX:ee.value}},ce=function(e){K.value=e.clientX||e.touches[0].clientX,Z.value=e.clientY||e.touches[0].clientY,z.value=!0},de=e=>{if(!z.value)return!1;e.preventDefault();const t=e.clientX||e.touches[0].clientX,a=e.clientY||e.touches[0].clientY,l=t-K.value,n=a-Z.value;if(l<0||l+38>=Y)return!1;E.value=l;const s=(Y-40-20)/(Y-40)*l;H.value.style.left=s+"px",L.value="sliderContainer sliderContainer_active",J.value.push(n),$&&$(s)},ve=e=>{if(!z.value)return!1;z.value=!1;if((e.clientX||e.changedTouches[0].clientX)===K.value)return!1;L.value="sliderContainer";const{spliced:t,verified:a}=W?W(re()):re();t?a?(L.value="sliderContainer sliderContainer_success","function"==typeof F&&F(),m.value=!1,p("on-success")):(L.value="sliderContainer sliderContainer_fail",P.value="请再试一次",p("on-failed"),ie()):(L.value="sliderContainer sliderContainer_fail","function"==typeof j&&j(),setTimeout(ie.bind(this),1e3))},fe=(e,t)=>Math.round(Math.random()*(t-e)+e),pe=(e,t)=>e+t,he=e=>e*e,me=()=>{oe()};return l((()=>B),(()=>{B&&(Q.value?ie():oe())})),(e,t)=>{const a=n("el-dialog");return s(),o("div",g,[i(a,{modelValue:d(m),"onUpdate:modelValue":t[0]||(t[0]=e=>f(m)?m.value=e:null),width:d(Y),center:"","align-center":"","destroy-on-close":"",onClosed:I,onOpen:me},{default:u((()=>[r("div",y,[r("div",b,[r("div",{className:"vertifyWrap",style:c({width:d(Y)+"px",margin:"0 auto",display:d(B)?"":"none"}),onMousemove:de,onMouseup:ve,onTouchmove:de,onTouchend:ve},[r("div",w,[r("canvas",{ref_key:"canvasRef",ref:G,width:d(Y),height:d(A)},null,8,C),r("canvas",{ref_key:"blockRef",ref:H,className:"block",width:d(Y),height:d(A),onMousedown:ce,onTouchstart:ce},null,40,x)]),r("div",{className:L.value,style:c({pointerEvents:q.value?"none":"auto"})},[r("div",{className:"sliderMask",style:c({width:E.value>0?E.value+8+"px":E.value+"px"})},[(s(),o("svg",{class:"iconpark-icon slider",style:c({left:E.value-10+"px"}),onMousedown:ce,onTouchstart:ce},T,36))],4),r("div",N,v(P.value),1)],12,k),r("div",{className:"loadingContainer",style:c({width:d(Y)+"px",height:d(A)+"px",display:q.value?"":"none"})},M,4)],36),r("div",{class:"vertify-footer"},[R,r("svg",{class:"iconpark-icon",onClick:ue},S)])])])])),_:1},8,["modelValue","width"])])}}},[["__scopeId","data-v-444f0115"]]);export{I as default};
