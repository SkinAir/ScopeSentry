import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CoYqT830.js";import{d as t,l as a,e as i,r as l,o,i as r,w as s,a as m}from"./index-ubEX2FhK.js";import{_ as p}from"./Table.vue_vue_type_script_lang-D1Qh8XyS.js";import{a as n}from"./index-CrvEN7e-.js";import{E as d}from"./el-tag-BH3jtqzv.js";import"./el-card-BeFjUUyC.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BDTZ23-W.js";import"./el-checkbox-BTlumLVj.js";import"./useInput-DtyvbpoF.js";import"./debounce-BVe-Ub-q.js";import"./el-pagination-qAkOkq_g.js";import"./el-image-viewer-B2EERH4x.js";import"./tsxHelper-B2w2bZm3.js";import"./el-dropdown-item-DKIl88b7.js";import"./castArray-QVB7Iual.js";import"./refs-BBDhzfVg.js";import"./index-CsSHR5aA.js";import"./raf-t7Eg7mSF.js";import"./index-CZZ6X4Zq.js";const u=t({__name:"TableImagePreview",setup(t){const{t:u}=a(),j=[{field:"title",label:u("tableDemo.title")},{field:"image_uri",label:u("tableDemo.preview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"importance",label:u("tableDemo.importance"),formatter:(e,t,a)=>i(d,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[u(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:u("tableDemo.pageviews")}],c=l(!0);let b=l([]);return(async e=>{const t=await n(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{c.value=!1}));t&&(b.value=t.data.list)})(),(t,a)=>(o(),r(m(e),{title:m(u)("router.PicturePreview")},{default:s((()=>[i(m(p),{columns:j,data:m(b),loading:c.value,preview:["image_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};