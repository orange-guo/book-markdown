"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},c="TestContainers",i={unversionedId:"note/java/testcontainers",id:"note/java/testcontainers",title:"TestContainers",description:"\u4e3a\u5bb9\u5668\u6307\u5b9ahostname",source:"@site/docs/note/java/testcontainers.md",sourceDirName:"note/java",slug:"/note/java/testcontainers",permalink:"/markdowns/docs/note/java/testcontainers",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/java/testcontainers.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677475099,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"note",previous:{title:"Concurrent",permalink:"/markdowns/docs/note/java/concurrent"},next:{title:"kubernetes",permalink:"/markdowns/docs/category/kubernetes"}},s={},l=[{value:"\u4e3a\u5bb9\u5668\u6307\u5b9a<code>hostname</code>",id:"\u4e3a\u5bb9\u5668\u6307\u5b9ahostname",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testcontainers"},"TestContainers"),(0,a.kt)("h2",{id:"\u4e3a\u5bb9\u5668\u6307\u5b9ahostname"},"\u4e3a\u5bb9\u5668\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"h2"},"hostname")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Test {\n\n    GenericContainer<?> container = new GenericContainer<>(DockerImageName.parse("redis:3.0.2"))\n            .withCreateContainerCmdModifier(cmd -> cmd.withHostName("the-cache"));\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/features/advanced_options/#customizing-the-container"},"Customizing the container"))))}u.isMDXComponent=!0}}]);