import{d as e,a5 as r,U as s,o as t,c as o,f as a,t as n,e as i,w as l,l as u,H as c}from"./index-BmBszaKw.js";const m={class:"flex justify-center"},p={class:"text-center"},d=["src"],x={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},f=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const{t:f}=u(),v={404:{url:"/assets/404-B3JyPfEa.svg",message:f("error.pageError"),buttonText:f("error.returnToHome")},500:{url:"/assets/500-BGu8fdSB.svg",message:f("error.networkError"),buttonText:f("error.returnToHome")},403:{url:"/assets/403-RqeqO19C.svg",message:f("error.noPermission"),buttonText:f("error.returnToHome")}},y=e,T=r,B=()=>{T("errorClick",y.type)};return(r,u)=>{const f=s("BaseButton");return t(),o("div",m,[a("div",p,[a("img",{width:"350",src:v[e.type].url,alt:""},null,8,d),a("div",x,n(v[e.type].message),1),a("div",g,[i(f,{type:"primary",onClick:B},{default:l((()=>[c(n(v[e.type].buttonText),1)])),_:1})])])])}}});export{f as _};