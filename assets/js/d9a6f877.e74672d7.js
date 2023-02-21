"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[274],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,d=u["".concat(s,".").concat(g)]||u[g]||f[g]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={},a="Configuration Properties",p={unversionedId:"note/spring/configuration-properties",id:"note/spring/configuration-properties",title:"Configuration Properties",description:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4f20\u9012\u6570\u7ec4\u7ed9@ConfigurationProperties\u6ce8\u91ca\u7684\u7c7b\u7684\u7c7b\u578b\u4e3a\u5217\u8868\u7684\u5c5e\u6027",source:"@site/docs/note/spring/configuration-properties.md",sourceDirName:"note/spring",slug:"/note/spring/configuration-properties",permalink:"/markdowns/docs/note/spring/configuration-properties",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/spring/configuration-properties.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1676960710,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{},sidebar:"note",previous:{title:"Spring",permalink:"/markdowns/docs/category/spring"},next:{title:"Others",permalink:"/markdowns/docs/category/others"}},s={},c=[{value:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4f20\u9012\u6570\u7ec4\u7ed9@ConfigurationProperties\u6ce8\u91ca\u7684\u7c7b\u7684\u7c7b\u578b\u4e3a\u5217\u8868\u7684\u5c5e\u6027",id:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4f20\u9012\u6570\u7ec4\u7ed9configurationproperties\u6ce8\u91ca\u7684\u7c7b\u7684\u7c7b\u578b\u4e3a\u5217\u8868\u7684\u5c5e\u6027",level:3}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-properties"},"Configuration Properties"),(0,o.kt)("h3",{id:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4f20\u9012\u6570\u7ec4\u7ed9configurationproperties\u6ce8\u91ca\u7684\u7c7b\u7684\u7c7b\u578b\u4e3a\u5217\u8868\u7684\u5c5e\u6027"},"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4f20\u9012\u6570\u7ec4\u7ed9@ConfigurationProperties\u6ce8\u91ca\u7684\u7c7b\u7684\u7c7b\u578b\u4e3a\u5217\u8868\u7684\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export SPRING_LDAP_URLS="ldap://host1:389,ldap://host2:389"\njava -jar my-app.jar\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-inject-arrays-lists#reading-properties-programmatically"},"Inject Arrays and Lists From Spring Properties Files"))))}u.isMDXComponent=!0}}]);