"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6407],{1318:function(e,t,n){var l,a,r=n(7294);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}t.Z=function(e){return r.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 19 18"},e),l||(l=r.createElement("path",{fill:"#fff",d:"M11.322 4.447 15.875 9l-4.553 4.552"})),a||(a=r.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:1.5,d:"M11.322 4.447 15.875 9l-4.553 4.552M3.125 9h12.623"})))}},8904:function(e,t,n){var l,a,r=n(7294);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}t.Z=function(e){return r.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 19 18"},e),l||(l=r.createElement("path",{fill:"#383e66",d:"M11.322 4.448 15.875 9l-4.553 4.553"})),a||(a=r.createElement("path",{stroke:"#383e66",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:1.5,d:"M11.322 4.448 15.875 9l-4.553 4.553M3.125 9h12.623"})))}},6407:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(5893),a=n(9678),r=n(7404),i=n(4242),o=n(1034),s=n(1336),c=n(1664),x=n.n(c),p=n(7294),d=n(7851),u=n(9349);let g=[{cardTheme:i.xy.DARK,bgClass:"bg-purple"},{cardTheme:i.xy.LIGHT,bgClass:"bg-white"},{cardTheme:i.xy.DARK,bgClass:"bg-primary"}];function m(e){let{productCategory:t,defaultCath:n,cls:i}=e,[c,m]=(0,p.useState)([]),f=t?t[0]:{},h=async()=>{console.log("defaultCath",n);let e=await (0,o.TO)({limit:3,category:n?null==n?void 0:n.id:(null==f?void 0:f.id)?null==f?void 0:f.id:142});console.log("Gotttt here",e),m(e)};return(0,p.useEffect)(()=>{h()},[]),(0,l.jsx)(l.Fragment,{children:c&&c.length>0&&(0,l.jsx)("section",{className:(0,d.m)("bg-sectionBg pb-[36px] lg:pb-[64px]",i),children:(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)(r.Z,{heading:"Money Tips"}),(0,l.jsx)("div",{className:"mt-[44px] grid sm:grid-cols-2 md:flex flex-wrap md:flex-nowrap gap-4 lg:gap-[23px] md:justify-center",children:null==c?void 0:c.map((e,t)=>{var r,i,o,c;let x=g[t],p=(0,u.LU)(0,(null===(r=e.categories)||void 0===r?void 0:r.length)-1),d=n||((null===(i=e.categories)||void 0===i?void 0:i.length)?s.D$.find(t=>t.id===e.categories[p]):s.D$[0]);return console.log("Blog Cath",e.categories),(0,l.jsx)(a.Z,{cardTheme:null==x?void 0:x.cardTheme,image:(null==e?void 0:null===(o=e.article_image)||void 0===o?void 0:o.guid)||"https://cms.mintyn.com/wp-content/uploads/2023/10/blog-placeholder.webp",cls:null==x?void 0:x.bgClass,cath:d,heading:null==e?void 0:null===(c=e.title)||void 0===c?void 0:c.rendered,slug:null==e?void 0:e.slug,date:(0,u._f)(null==e?void 0:e.date)},t)})}),(0,l.jsx)(x(),{prefetch:!1,href:{pathname:"/blog",query:(null==f?void 0:f.slug)?{title:f.slug}:null},className:"btn-primary h-[60px] mx-auto py-4 px-[28px] lg:mt-[64px] mt-[36px]",children:"View more"})]})})})}},9678:function(e,t,n){n.d(t,{Z:function(){return x}});var l=n(5893),a=n(4242),r=n(1664),i=n.n(r);n(7294);var o=n(7851),s=n(1318),c=n(8904);function x(e){let{cls:t,cath:n,slug:r,heading:x,date:p,image:d,cardTheme:u}=e;return console.log(d,"IMAGE"),(0,l.jsxs)(i(),{href:"/blog/".concat(null==n?void 0:n.slug,"/").concat(r),prefetch:!1,className:(0,o.m)("w-full md:max-w-[235px] lg:min-w-[300px] lg:max-w-[300px] rounded-3xl md:flex-1 flex flex-col xl:max-w-[unset] xl:min-w-[unset] [@media(min-width:1440px)]:max-w-[366px] [@media(min-width:1440px)]:min-w-[340px]",t),children:[(0,l.jsx)("div",{style:{background:"url(".concat(d,")")},className:"h-[200px]  w-full rounded-t-3xl bg-cover bg-no-repeat bg-center bg- "}),(0,l.jsxs)("div",{className:"flex-1 pt-5 pb-6 px-4 md:pt-[31px] md:pb-3 md:px-[17px] lg:pt-[42px] lg:pb-[48px] lg:px-[23px] flex flex-col gap-2 lg:gap-4 ".concat(u===a.xy.DARK?"text-white":"text-primary"),children:[(0,l.jsx)("h2",{className:"w-fit flex items-center justify-center h-[29px] lg:h-[unset] lg:block rounded-[11px] px-2 lg:px-3 lg:py-2 lg:rounded-[15px] text-base lg:text-xl font-medium min-w-[86px] lg:min-w-[116px] text-center ".concat(u===a.xy.DARK?"bg-white text-primary":"bg-primary text-white"),children:null==n?void 0:n.name}),(0,l.jsx)("h3",{className:"text-base lg:text-xl font-semibold",children:x}),(0,l.jsxs)("p",{className:"text-[12px] lg:text-base",children:[p," •"]}),(0,l.jsxs)("span",{className:"flex items-center gap-[10px] text-[12px] lg:text-base",children:["Read more"," ",u===a.xy.DARK?(0,l.jsx)(s.Z,{className:"lg:w-[18px] lg:h-[18px] w-[13px] h-[13px]"}):(0,l.jsx)(c.Z,{className:"lg:w-[18px] lg:h-[18px] w-[13px] h-[13px]"})]})]})]})}},7404:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(5893);n(7294);var a=n(7851),r=n(9349);function i(e){let{cls:t,textCls:n,heading:i,id:o,text:s,as:c="h2",noId:x}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{id:x?void 0:(0,r.a5)(o||i).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,""),className:(0,a.m)("text-[#101828] text-3xl md:text-4xl lg:text-[50px] font-semibold text-center md:max-w-[689px] lg:max-w-[1082px] tracking-[-1px] lg:leading-[60px] mx-auto",t),children:x?i:(0,r.D7)(i)}),s&&(0,l.jsx)("p",{className:(0,a.m)("text-[#1A1919] text-base lg:text-2xl mt-[20px] text-center mb-[46px]",n),children:s})]})}},4242:function(e,t,n){n.d(t,{JW:function(){return a},MR:function(){return i},br:function(){return r},pn:function(){return o},xy:function(){return l}});let l={LIGHT:"LIGHT",DARK:"DARK"},a="IDLE",r="LOADING",i="SUCCESS",o="ERROR"},1336:function(e,t,n){n.d(t,{D$:function(){return l}});let l=[{id:0,name:"All Categories",slug:"all-categories"},{id:2,name:"Bank Account",slug:"bank-account"},{id:3,name:"Gift Card",slug:"gift-cards"},{id:141,name:"Utility Bills",slug:"utility-bills"},{id:5,name:"Loans",slug:"loans"}]},1034:function(e,t,n){n.d(t,{TO:function(){return r},Wx:function(){return i}});var l=n(5121);async function a(e){try{let t=await l.Z.get(e);return t.data}catch(e){console.error(e)}}async function r(e){let{limit:t,category:n}=e;console.log("Payload",e);let l="https://cms.mintyn.com/wp-json/wp/v2/posts?per_page=".concat(t).concat(n?"&categories=".concat(n):""),r=await a(l);return r?r.length<1?await a("https://cms.mintyn.com/wp-json/wp/v2/posts?per_page=".concat(t)):r:[]}async function i(e){let t=await a("https://cms.mintyn.com/wp-json/wp/v2/faq?faq_category=".concat(e));return t}n(1336)}}]);