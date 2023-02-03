"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u5e38\u7528\u547d\u4ee4",p={unversionedId:"problem/command",id:"problem/command",title:"\u5e38\u7528\u547d\u4ee4",description:"pstree",source:"@site/docs/problem/4-command.md",sourceDirName:"problem",slug:"/problem/command",permalink:"/markdowns/docs/problem/command",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/4-command.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1675437359,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u9047\u5230\u7684\u95ee\u9898",permalink:"/markdowns/docs/problem/dev"},next:{title:"Camunda",permalink:"/markdowns/docs/problem/camunda"}},c={},s=[{value:"pstree",id:"pstree",level:2},{value:"strace",id:"strace",level:2},{value:"mount",id:"mount",level:2},{value:"lsof",id:"lsof",level:2},{value:"ldd",id:"ldd",level:2},{value:"Transport endpoint is not connected",id:"transport-endpoint-is-not-connected",level:2}],i={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("h2",{id:"pstree"},"pstree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pstree -p -s <pid> -T\n")),(0,o.kt)("h2",{id:"strace"},"strace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strace -p <pid>\n")),(0,o.kt)("h2",{id:"mount"},"mount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'NET USE Z: \\\\68.79.39.232\\share "admin" /USER:"fastone"\n')),(0,o.kt)("h2",{id:"lsof"},"lsof"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# grep pipe\nlsof|grep FIFO\n")),(0,o.kt)("h2",{id:"ldd"},"ldd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ldd --version\n")),(0,o.kt)("h2",{id:"transport-endpoint-is-not-connected"},"Transport endpoint is not connected"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/24966676/transport-endpoint-is-not-connected"},"Transport endpoint is not connected"))))}d.isMDXComponent=!0}}]);