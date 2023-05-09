"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},l="Gradle\u76f8\u5173\u63d2\u4ef6\u5217\u8868",i={unversionedId:"collection/technologies/gradle-plugins",id:"collection/technologies/gradle-plugins",title:"Gradle\u76f8\u5173\u63d2\u4ef6\u5217\u8868",description:"- Shadow",source:"@site/docs/collection/technologies/gradle-plugins.md",sourceDirName:"collection/technologies",slug:"/collection/technologies/gradle-plugins",permalink:"/zh-CN/docs/collection/technologies/gradle-plugins",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/technologies/gradle-plugins.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1683598205,formattedLastUpdatedAt:"2023\u5e745\u67089\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"\u524d\u7aef\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/zh-CN/docs/collection/technologies/frontend-list"},next:{title:"Java\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/zh-CN/docs/collection/technologies/java-libraries"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gradle\u76f8\u5173\u63d2\u4ef6\u5217\u8868"},"Gradle\u76f8\u5173\u63d2\u4ef6\u5217\u8868"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://imperceptiblethoughts.com/shadow/"},"Shadow"),(0,o.kt)("br",null),"Shadow is a Gradle plugin for combining a project's dependency classes and resources into a single output Jar. The combined Jar is often referred to a fat-jar or uber-jar. Shadow utilizes JarInputStream and JarOutputStream to efficiently process dependent libraries into the output jar without incurring the I/O overhead of expanding the jars to disk.")))}d.isMDXComponent=!0}}]);