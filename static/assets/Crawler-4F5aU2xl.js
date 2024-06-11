import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-F13nrP2r.js";import{d as a,s as t,e as l,M as o,z as r,r as s,H as i,o as p,c as n,w as u,a as m,K as d,y as c,t as g,F as h,l as _,_ as f}from"./index-KWTKF9N9.js";import{_ as j}from"./Search.vue_vue_type_script_setup_true_lang-MwhZHz4J.js";import{u as b}from"./useSearch-uQSWs8o5.js";import{u as y}from"./useTable-CuwOU5m7.js";import{E as x}from"./el-card-9F69xyLv.js";import{E as v}from"./el-pagination-ooblyvhx.js";import"./el-tag-MzjVikBY.js";import"./el-popper-pnFa2Ecw.js";import{E as w,a as H}from"./el-col-t_F-vIr3.js";import{_ as S,E as k,a as z}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import"./el-checkbox-U1iRgEY7.js";import"./el-tooltip-w40geAFS.js";import{E as P}from"./el-text-bFj0OZ8x.js";import{E}from"./el-divider-685xvbVJ.js";import{_ as I}from"./Dialog.vue_vue_type_style_index_0_lang-T5U2It3I.js";import{u as C}from"./useCrudSchemas-BjcgjN1n.js";import{c as R}from"./index-8I8eRaaM.js";import"./useForm-56lhuV1Q.js";import"./el-form-item-i8ZQhvu8.js";import"./castArray-9Ouy5Ghy.js";import"./el-radio-group-MC2AFabc.js";/* empty css                          */import"./el-input-number-Rb_QWPs-.js";import"./el-select-v2-0dTEd5GK.js";import"./raf-kE1zktlZ.js";import"./useInput-CGBP5_dt.js";import"./debounce-QvfGQs-0.js";import"./el-switch-tqt83myp.js";import"./el-progress-FyGDfwQU.js";import"./InputPassword-ytPGiHvf.js";import"./style.css_vue_type_style_index_0_src_true_lang-T2eDEypv.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-Z2SkzOTF.js";import"./IconPicker-f4TkQ97P.js";import"./el-tab-pane-fTldm5Oi.js";import"./tsxHelper-NOZkKkVH.js";import"./index-JT69SAQu.js";import"./useIcon-Ry17CHl2.js";import"./el-image-viewer-S1bd3VyN.js";import"./el-dropdown-item-bjCsATwt.js";import"./refs-WVQk01D0.js";import"./index-BS1c_xid.js";import"./tree-1FtpebiE.js";import"./index-XFn6QxJu.js";const U=f(a({__name:"Crawler",setup(a){const{t:f}=_(),{searchRegister:U}=b(),W=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:D,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),A=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],F=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"method",example:'method="POST"',explain:f("searchHelp.method")},{keyword:"body",example:'body="username=admin"',explain:f("searchHelp.crawlerBody")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],L=s(!1),D=()=>{L.value=!0},M=s(!0),T=s("inline"),q=s("left"),B=s(""),N=e=>{B.value=e.search,ae()},V=s(!1),J=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"method",label:"Method",minWidth:15},{field:"url",label:"URL",minWidth:60},{field:"body",label:f("crawler.postParameter"),minWidth:60}]),{allSchemas:K}=C(J),{tableRegister:G,tableState:O,tableMethods:Q}=y({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=O,t=await R(B.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:X,dataList:Y,total:Z,currentPage:$,pageSize:ee}=O,{getList:ae}=Q;function te(){return{background:"var(--el-fill-color-light)"}}ee.value=20,i((()=>{oe(),window.addEventListener("resize",oe)}));const le=s(0),oe=()=>{const e=window.innerHeight||document.documentElement.clientHeight;le.value=.7*e};return(a,t)=>(p(),n(h,null,[l(m(e),{style:{height:"80px"}},{default:u((()=>[l(m(j),{schema:W,"is-col":M.value,layout:T.value,"show-reset":!1,"button-position":q.value,"search-loading":V.value,onSearch:N,onReset:N,onRegister:m(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(x),null,{default:u((()=>[l(m(S),{pageSize:m(ee),"onUpdate:pageSize":t[0]||(t[0]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[1]||(t[1]=e=>d($)?$.value=e:null),columns:m(K).tableColumns,data:m(Y),"max-height":le.value,stripe:"",border:!0,loading:m(X),resizable:!0,onRegister:m(G),headerCellStyle:te,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(m(w),{":span":24},{default:u((()=>[l(m(x),null,{default:u((()=>[l(m(v),{pageSize:m(ee),"onUpdate:pageSize":t[2]||(t[2]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[3]||(t[3]=e=>d($)?$.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m(Z)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(m(I),{modelValue:L.value,"onUpdate:modelValue":t[4]||(t[4]=e=>L.value=e),title:m(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.operator")),1)])),_:1}),l(m(E),{direction:"vertical"}),l(m(P),{size:"small",type:"danger"},{default:u((()=>[c(g(m(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:A},{default:u((()=>[l(m(z),{prop:"operator",label:m(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(m(z),{prop:"meaning",label:m(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"15px"}},{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:F},{default:u((()=>[l(m(z),{prop:"keyword",label:m(f)("searchHelp.keywords")},null,8,["label"]),l(m(z),{prop:"example",label:m(f)("searchHelp.example")},null,8,["label"]),l(m(z),{prop:"explain",label:m(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-cce00434"]]);export{U as default};