"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1498],{1318:function(e,t,i){var n,s,l=i(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 19 18"},e),n||(n=l.createElement("path",{fill:"#fff",d:"M11.322 4.447 15.875 9l-4.553 4.552"})),s||(s=l.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:1.5,d:"M11.322 4.447 15.875 9l-4.553 4.552M3.125 9h12.623"})))}},8904:function(e,t,i){var n,s,l=i(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e){return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 19 18"},e),n||(n=l.createElement("path",{fill:"#383e66",d:"M11.322 4.448 15.875 9l-4.553 4.553"})),s||(s=l.createElement("path",{stroke:"#383e66",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:1.5,d:"M11.322 4.448 15.875 9l-4.553 4.553M3.125 9h12.623"})))}},9744:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(5893);i(7294);var s=i(7851),l=i(1318),r=i(1664),o=i.n(r),a=i(5675),p=i.n(a),m=i(8904),x=i(4242);function d(e){let{image:t,title:i,text:r,cls:a,ctaLabel:d="Learn more",headingCls:h,textCls:c,imageCls:g,linkCls:u,cardTheme:f,href:b="",bgImage:w,bgImageCls:v,imageSizes:y,...k}=e;return(0,n.jsxs)(o(),{prefetch:!1,href:b,className:(0,s.m)("rounded-[24px] bg-primary py-6 px-4 md:p-[32px] lg:py-[69px] lg:px-[56px] flex flex-col md:flex-row gap-4 lg:gap-[75px] text-white group relative",a),...k,children:[w&&(0,n.jsx)(p(),{alt:i,width:300,height:300,src:w,className:(0,s.m)("absolute top-0 left-0 w-full h-full object-contain",v)}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h3",{className:(0,s.m)("lg:text-[32px] md:text-[24px] text-xl font-semibold tracking-[-0.64px] md:leading-[32px]",h),children:i}),(0,n.jsx)("p",{className:(0,s.m)("lg:text-lg mt-6 max-w-[445px] whitespace-pre-line md:mb-[89px]",c),children:r}),(0,n.jsxs)("span",{className:(0,s.m)("flex items-center justify-center lg:text-xl gap-x-[10px] leading-[16px] mt-8 md:mt-auto w-[172px] h-[50px] rounded-3xl font-medium whitespace-nowrap transition-all ".concat(f===x.xy.DARK?"group-hover:text-primary group-hover:bg-white":"group-hover:text-white group-hover:bg-primary"),u),children:[d," ",f===x.xy.LIGHT?(0,n.jsx)(m.Z,{className:"w-[18px] h-[18px] group-hover:[&>path]:stroke-white group-hover:[&>path]:fill-white transition-all"}):(0,n.jsx)(l.Z,{className:"w-[18px] h-[18px] group-hover:[&>path]:stroke-primary group-hover:[&>path]:fill-primary transition-all"})]})]}),(0,n.jsx)(p(),{alt:i,width:900,height:900,src:t,className:(0,s.m)("h-[300px] md:h-[400px] lg:flex-1 w-full max-w-[unset] md:max-w-[300px] lg:max-w-[unset] object-contain ml-auto md:ml-0",g),sizes:y})]})}},4242:function(e,t,i){i.d(t,{JW:function(){return s},MR:function(){return r},br:function(){return l},pn:function(){return o},xy:function(){return n}});let n={LIGHT:"LIGHT",DARK:"DARK"},s="IDLE",l="LOADING",r="SUCCESS",o="ERROR"},1498:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(5893),s=i(7294),l=Object.defineProperty,r=(e,t,i)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,o=(e,t,i)=>(r(e,"symbol"!=typeof t?t+"":t,i),i),a=new Map,p=new WeakMap,m=0,x=void 0,d=class extends s.Component{constructor(e){super(e),o(this,"node",null),o(this,"_unobserveCb",null),o(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),o(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:s,fallbackInView:l}=this.props;this._unobserveCb=function(e,t,i={},n=x){if(void 0===window.IntersectionObserver&&void 0!==n){let s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof i.threshold?i.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:l,elements:r}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var i;return`${t}_${"root"===t?(i=e.root)?(p.has(i)||(m+=1,p.set(i,m.toString())),p.get(i)):"0":e[t]}`}).toString(),i=a.get(t);if(!i){let n;let s=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var i;let l=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(i=s.get(t.target))||i.forEach(e=>{e(l,t)})})},e);n=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:l,elements:s},a.set(t,i)}return i}(i),o=r.get(e)||[];return r.has(e)||r.set(e,o),o.push(t),l.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(r.delete(e),l.unobserve(e)),0===r.size&&(l.disconnect(),a.delete(s))}}(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:s},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}let{as:t,triggerOnce:i,threshold:n,root:l,rootMargin:r,onChange:o,skip:a,trackVisibility:p,delay:m,initialInView:x,fallbackInView:d,...h}=this.props;return s.createElement(t||"div",{ref:this.handleNode,...h},e)}},h=i(9744),c=i(4242);let g=["slide-1","slide-2","slide-3","slide-4"];function u(){let[e,t]=s.useState([]);return(0,n.jsx)("section",{className:"bg-sectionBg relative",children:(0,n.jsxs)("div",{className:"wrapper pt-[28px] pb-[36px] lg:pt-0 lg:pb-0 lg:flex lg:items-start lg:justify-center lg:gap-4 lg:min-h-screen",children:[(0,n.jsx)("div",{className:"hidden lg:sticky lg:h-screen lg:top-[50px] lg:w-[48px] lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-3",children:g.map(t=>(0,n.jsx)(b,{name:t,viewedSlides:e},t))}),(0,n.jsxs)("div",{className:"flex flex-col lg:block gap-y-16",children:[(0,n.jsx)(f,{name:g[0],viewedSlides:e,setViewedSlides:t,children:(0,n.jsx)(h.Z,{cardTheme:c.xy.DARK,cls:"bg-purple pr-0 md:pr-0 lg:pr-0 lg:gap-[45px] lg:py-[45px] md:items-center lg:min-h-[544px] w-full lg:max-h-[544px] overflow-hidden",title:"Make Data Driven Decision with Analytics",headingCls:"max-w-[451px] [@media(min-width:1440px)]:text-[40px] font-bold [@media(min-width:1440px)]:leading-[60px]",text:"Mintyn analytics tools help you make data driven decisions about your business financial performance. View your business performance in one dashboard.",textCls:"xl:text-[20px] max-w-[488px] md:mb-[60px] mr-4 md:mr-0",image:"/new-analytics.png",imageCls:"lg:object-cover max-w-[unset] ml-auto sm:max-w-[390px] mr-[-8px] sm:mr-[-14px]",linkCls:"rounded-[8px] py-4 px-[28px] h-[60px] md:mt-0 [&>svg]:hidden w-[154px]",href:"/analytics-with-spendmapster",bgImage:"/mintyn-logo-bg.png",bgImageCls:"top-[unset] bottom-0 left-[50%] translate-x-[-50%] h-[421px]"})}),(0,n.jsx)(f,{name:g[1],viewedSlides:e,setViewedSlides:t,children:(0,n.jsx)(h.Z,{cardTheme:c.xy.DARK,bgImage:"/mintyn-logo-bg.png",bgImageCls:"top-[unset] bottom-0 left-[50%] translate-x-[-50%] h-[421px]",cls:"bg-red md:pr-0 lg:pr-0 lg:gap-[45px] lg:py-[45px] md:items-center lg:min-h-[544px] w-full lg:max-h-[544px]",title:"Pay multiple people with Mintyn Bulk payment",headingCls:"[@media(min-width:1440px)]:text-[40px] font-bold [@media(min-width:1440px)]:leading-[60px]",text:"Mintyn bulk payment allows you to pay multiple people at a go. This feature can be used to handle your payroll or send money to multiple beneficiaries in a single click.",textCls:"xl:text-[20px] max-w-[508px] md:max-w-[599px] md:mb-[60px]",image:"https://ik.imagekit.io/64s5ihfbp/pay_multiple.webp",imageCls:"lg:object-cover max-w-[unset] ml-0 sm:ml-auto sm:max-w-[390px] md:h-[420px]",linkCls:"rounded-[8px] py-4 px-[28px] h-[60px] md:mt-0 [&>svg]:hidden",href:"/paystream-by-mintyn/",imageSizes:"(max-width: 1400px) 100vw, 1400px"})}),(0,n.jsx)(f,{name:g[2],viewedSlides:e,setViewedSlides:t,children:(0,n.jsx)(h.Z,{cls:"bg-white md:pr-0 lg:pr-0 lg:gap-[0px] lg:py-[45px] md:items-center lg:min-h-[544px] text-primary w-full lg:max-h-[544px]",title:"Mintyn Investment Plans",headingCls:"[@media(min-width:1440px)]:text-[40px] font-bold [@media(min-width:1440px)]:leading-[60px]",text:"Mintyn investment product is a retail and business investment plan that offers competitive return on investment. Investment plans vary with the number of months, you can get started with a minimum amount of N1,000 Naira.",textCls:"xl:text-[20px] max-w-[508px] md:mb-[30px]",image:"https://ik.imagekit.io/64s5ihfbp/investment_plans.webp",imageCls:"lg:object-cover max-w-[unset] ml-0 sm:ml-auto sm:max-w-[390px] md:h-[420px]",linkCls:"rounded-[8px] py-4 px-[28px] h-[60px] md:mt-0 [&>svg]:hidden",href:"/bank-account/savings-account/wealth-management",imageSizes:"(max-width: 1400px) 100vw, 1400px"})}),(0,n.jsx)(f,{name:g[3],viewedSlides:e,setViewedSlides:t,children:(0,n.jsx)(h.Z,{cardTheme:c.xy.DARK,cls:"bg-purple md:pr-0 lg:pr-0 lg:gap-[45px] lg:py-[45px] md:items-center lg:min-h-[544px] w-full lg:max-h-[544px]",title:"Invest in Stocks",headingCls:"max-w-[451px] [@media(min-width:1440px)]:text-[40px] font-bold [@media(min-width:1440px)]:leading-[60px]",text:"In partnership with licensed investment partners, Mintyn stock investment products offer both retail and business customers the opportunity to diversify investment portfolios to maximize returns. ",textCls:"xl:text-[20px] max-w-[529px] md:mb-[30px]",image:"https://ik.imagekit.io/64s5ihfbp/invest_stocks.webp",imageCls:"lg:object-cover max-w-[unset] ml-0 sm:ml-auto sm:max-w-[390px] lg:max-w-[593px]",linkCls:"rounded-[8px] py-4 px-[28px] h-[60px] md:mt-0 [&>svg]:hidden",href:"/bank-account/savings-account/stocks",bgImage:"/mintyn-logo-bg.png",bgImageCls:"top-[unset] bottom-0 left-[50%] translate-x-[-50%] h-[421px]",imageSizes:"(max-width: 1400px) 100vw, 1400px"})})]})]})})}let f=e=>{let{children:t,name:i,viewedSlides:s=[],setViewedSlides:l}=e,r=i===g[0];return(0,n.jsx)("div",{className:"lg:sticky lg:h-screen lg:top-[50px] lg:flex lg:items-center lg:justify-center",children:(0,n.jsx)("div",{className:"flex items-center justify-center h-full w-full",children:(0,n.jsx)(d,{className:"w-full",rootMargin:"0px 100px -120px 0px",threshold:r?0:.5,onChange:(e,t)=>{if(e)l([i,...s]);else{let e=s.filter(e=>e!==i);l(e)}},children:t})})})},b=e=>{let{name:t,viewedSlides:i=[]}=e,s=i.includes(t);return(0,n.jsx)("span",{"data-indicator-name":t,className:"rounded-[50%] bg-[#c0a356] block w-[10px] h-[10px] ".concat(s?"opacity-100":"opacity-50")})}}}]);