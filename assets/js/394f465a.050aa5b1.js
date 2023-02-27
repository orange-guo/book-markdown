"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2148],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3812:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={},c="Rclone",l={unversionedId:"note/middleware/rclone",id:"note/middleware/rclone",title:"Rclone",description:"\u5728Docker\u4e2d\u4f7f\u7528Rclone",source:"@site/docs/note/middleware/rclone.md",sourceDirName:"note/middleware",slug:"/note/middleware/rclone",permalink:"/markdowns/docs/note/middleware/rclone",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/middleware/rclone.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677475099,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"note",previous:{title:"PostgreSQL",permalink:"/markdowns/docs/note/middleware/postgres"}},i={},d=[{value:"\u5728<code>Docker</code>\u4e2d\u4f7f\u7528Rclone",id:"\u5728docker\u4e2d\u4f7f\u7528rclone",level:2}],p={toc:d};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rclone"},"Rclone"),(0,o.kt)("h2",{id:"\u5728docker\u4e2d\u4f7f\u7528rclone"},"\u5728",(0,o.kt)("inlineCode",{parentName:"h2"},"Docker"),"\u4e2d\u4f7f\u7528Rclone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# perform mount inside Docker container, expose result to host\nmkdir -p ~/data/mount\ndocker run --rm \\\n    --volume ~/.config/rclone:/config/rclone \\\n    --volume ~/data:/data:shared \\\n    --user $(id -u):$(id -g) \\\n    --volume /etc/passwd:/etc/passwd:ro --volume /etc/group:/etc/group:ro \\\n    --device /dev/fuse --cap-add SYS_ADMIN --security-opt apparmor:unconfined \\\n    rclone/rclone \\\n    mount dropbox:Photos /data/mount &\nls ~/data/mount\nkill %1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bobcares.com/blog/rclone-docker/"},"Rclone docker | Explained"))))}s.isMDXComponent=!0}}]);