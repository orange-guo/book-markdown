"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["java"]},l="JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",i={permalink:"/markdowns/blog/2023/02/09/",source:"@site/blog/2023-02-09.md",title:"JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",description:"\u4ee5\u4e0b\u5217\u8868\u662f\u622a\u81f3\u5230\u76ee\u524dOpen JDK\u4e2d\u90e8\u5206\u8fdb\u884c\u7684\u5bf9JDK\u7684\u6539\u8fdb\u9879\u76ee",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"java",permalink:"/markdowns/blog/tags/java"}],readingTime:1.79,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["java"]},prevItem:{title:"\u4f7f\u7528pyenv\u5b9e\u73b0python\u591a\u7248\u672c\u7ba1\u7406",permalink:"/markdowns/blog/2023/02/10/"},nextItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",permalink:"/markdowns/blog/2023/02/08/"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u662f\u622a\u81f3\u5230\u76ee\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"Open JDK"),"\u4e2d\u90e8\u5206\u8fdb\u884c\u7684\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"JDK"),"\u7684\u6539\u8fdb\u9879\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Amber"),(0,a.kt)("li",{parentName:"ul"},"Galahad"),(0,a.kt)("li",{parentName:"ul"},"Leyden"),(0,a.kt)("li",{parentName:"ul"},"Lilliput"),(0,a.kt)("li",{parentName:"ul"},"Loom"),(0,a.kt)("li",{parentName:"ul"},"Panama"),(0,a.kt)("li",{parentName:"ul"},"Valhalla")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6539\u8fdb\u9879\u76ee\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u6539\u8fdb",(0,a.kt)("inlineCode",{parentName:"p"},"Java"),"\u7684\u6027\u80fd\u548c\u5f00\u53d1\u4f53\u9a8c.\n\u4ece\u800c\u4f7f",(0,a.kt)("inlineCode",{parentName:"p"},"Java"),"\u80fd\u591f\u66f4\u597d\u5730\u9002\u5e94\u76ee\u524d\u7684\u8f6f\u4ef6\u5f00\u53d1\u9700\u6c42.",(0,a.kt)("br",null),"\n\u4ee5\u4e0b\u662f\u8fd9\u4e9b\u9879\u76ee\u7684\u7b80\u5355\u4ecb\u7ecd."))}m.isMDXComponent=!0}}]);