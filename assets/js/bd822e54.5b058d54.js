"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="mgmt-api\u7684Duration\u89e3\u6790\u6ca1\u6709\u548c\u9884\u671f\u5339\u914d",l={unversionedId:"problem/spring/0007",id:"problem/spring/0007",title:"mgmt-api\u7684Duration\u89e3\u6790\u6ca1\u6709\u548c\u9884\u671f\u5339\u914d",description:"\u73b0\u8c61",source:"@site/docs/problem/spring/0007.md",sourceDirName:"problem/spring",slug:"/problem/spring/0007",permalink:"/markdowns/docs/problem/spring/0007",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/spring/0007.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1676370717,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{},sidebar:"problem",previous:{title:"FeignClient\u4e2dPageable\u88ab\u5f53\u4f5cbody\u4f20\u8f93",permalink:"/markdowns/docs/problem/spring/0006"},next:{title:"fastone-auditing\u670d\u52a1\u5347\u7ea7springboot3\u4e2d\u6784\u5efanative-image\u9047\u5230\u7684\u95ee\u9898",permalink:"/markdowns/docs/problem/spring/0008"}},p={},u=[{value:"\u73b0\u8c61",id:"\u73b0\u8c61",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u8c03\u7528\u6808",id:"\u8c03\u7528\u6808",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mgmt-api\u7684duration\u89e3\u6790\u6ca1\u6709\u548c\u9884\u671f\u5339\u914d"},"mgmt-api\u7684Duration\u89e3\u6790\u6ca1\u6709\u548c\u9884\u671f\u5339\u914d"),(0,o.kt)("h2",{id:"\u73b0\u8c61"},"\u73b0\u8c61"),(0,o.kt)("p",null,"ConfigurationProperties\u5bf9\u8c61\u91cc\u914d\u7f6e\u7684Duration\u5bf9\u8c61\u5355\u4f4d\u4e3a\u6beb\u79d2"),(0,o.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,o.kt)("p",null,"SpringBoot\u5185\u90e8Duration\u5355\u4f4d\u662f\u6beb\u79d2, \u82e5\u4e0d\u901a\u8fc7@DurationUnit\u63d0\u4f9b\u7684\u8bdd"),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u589e\u52a0Duration\u5355\u4f4d, \u5f3a\u5236\u5236\u5b9a\u5355\u4f4d\u786e\u4fdd\u884c\u4e3a\u7b26\u5408\u671f\u671b"),(0,o.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,o.kt)("h2",{id:"\u8c03\u7528\u6808"},"\u8c03\u7528\u6808"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BindConverter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List<ConversionService> delegates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List<Converter> converters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StringToDurationConverter (SpringBoot)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NumberToDurationConverter (SpringBoot) \u6b64\u5904\u4f1a\u6839\u636e\u6ce8\u89e3\u53bb\u5224\u65ad\u5355\u4f4d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DurationStyle.SIMPLE.parse"))))}s.isMDXComponent=!0}}]);