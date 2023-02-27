"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Software versioning(\u8f6f\u4ef6\u7248\u672c\u8f6f\u4ef6\u7248\u672c\u63a7\u5236)",s={unversionedId:"note/methodology/software-versioning",id:"note/methodology/software-versioning",title:"Software versioning(\u8f6f\u4ef6\u7248\u672c\u8f6f\u4ef6\u7248\u672c\u63a7\u5236)",description:"\u4ecb\u7ecd",source:"@site/docs/note/methodology/software-versioning.md",sourceDirName:"note/methodology",slug:"/note/methodology/software-versioning",permalink:"/markdowns/docs/note/methodology/software-versioning",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/methodology/software-versioning.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677475099,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"note",previous:{title:"Microservices(\u5fae\u670d\u52a1)",permalink:"/markdowns/docs/note/methodology/microservices"},next:{title:"Twelve-Factor App(\u5341\u4e8c\u8981\u7d20\u5e94\u7528)",permalink:"/markdowns/docs/note/methodology/twelve-factor-app"}},l={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"software-versioning\u8f6f\u4ef6\u7248\u672c\u8f6f\u4ef6\u7248\u672c\u63a7\u5236"},"Software versioning(\u8f6f\u4ef6\u7248\u672c\u8f6f\u4ef6\u7248\u672c\u63a7\u5236)"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u8f6f\u4ef6\u7248\u672c\u63a7\u5236\u662f\u4e00\u79cd\u7ba1\u7406\u8f6f\u4ef6\u7248\u672c\u7684\u65b9\u6cd5\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u5728\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u7248\u672c\u63a7\u5236\uff0c\u4ee5\u4fbf\u5728\u9700\u8981\u65f6\u53ef\u4ee5\u56de\u6eda\u5230\u65e7\u7248\u672c\u3002\u8f6f\u4ef6\u7248\u672c\u63a7\u5236\u7684\u76ee\u7684\u662f\u4f7f\u8f6f\u4ef6\u5f00\u53d1\u66f4\u52a0\u9ad8\u6548\uff0c\u66f4\u52a0\u5b89\u5168\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_versioning"},"Software versioning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cpl.thalesgroup.com/software-monetization/software-versioning-basics"},"Software Versioning Best Practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://semver.org/"},"Semantic Versioning"))))}f.isMDXComponent=!0}}]);