"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Microservices(\u5fae\u670d\u52a1)",c={unversionedId:"note/methodology/microservices",id:"note/methodology/microservices",title:"Microservices(\u5fae\u670d\u52a1)",description:"\u4ecb\u7ecd",source:"@site/docs/note/methodology/microservices.md",sourceDirName:"note/methodology",slug:"/note/methodology/microservices",permalink:"/markdowns/docs/note/methodology/microservices",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/methodology/microservices.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677475099,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"note",previous:{title:"Let it Crash(\u8ba9\u5176\u5d29\u6e83)",permalink:"/markdowns/docs/note/methodology/let-it-crash"},next:{title:"Software versioning(\u8f6f\u4ef6\u7248\u672c\u8f6f\u4ef6\u7248\u672c\u63a7\u5236)",permalink:"/markdowns/docs/note/methodology/software-versioning"}},l={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microservices\u5fae\u670d\u52a1"},"Microservices(\u5fae\u670d\u52a1)"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u5c06\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u4e00\u7ec4\u5c0f\u578b\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,o.kt)("br",null),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,o.kt)("br",null),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,o.kt)("br",null),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,o.kt)("br",null),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,o.kt)("br",null),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,o.kt)("br",null),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c \u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,o.kt)("br",null),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,o.kt)("br",null),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://microservices.io/"},"What are microservices?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/microservices/"},"What are Microservices?"))))}m.isMDXComponent=!0}}]);