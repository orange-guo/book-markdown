"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const o={},i="File system",s={unversionedId:"software-engineering/infrastructure/file-system",id:"software-engineering/infrastructure/file-system",title:"File system",description:"- rclone",source:"@site/docs/software-engineering/infrastructure/file-system.md",sourceDirName:"software-engineering/infrastructure",slug:"/software-engineering/infrastructure/file-system",permalink:"/docs/software-engineering/infrastructure/file-system",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/infrastructure/file-system.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705634648,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{},sidebar:"softwareEngineering",previous:{title:"Docker",permalink:"/docs/software-engineering/infrastructure/docker"},next:{title:"Keycloak",permalink:"/docs/software-engineering/infrastructure/keycloak"}},c={},l=[],u={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-system"},"File system"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rclone/rclone"},"rclone"),(0,a.kt)("br",null),'\n"rsync for cloud storage"-Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud\nStorage, Yandex Files'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/juicedata/juicefs"},"juicefs"),(0,a.kt)("br",null),"\nJuiceFS is a distributed POSIX file system built on top of Redis and S3."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://min.io/"},"minio"),(0,a.kt)("br",null),"MinIO offers high-performance, S3 compatible object storage. Native to Kubernetes, MinIO is the only object storage suite available on every public cloud, every Kubernetes distribution, the private cloud and the edge. MinIO is software-defined and is 100% open source under GNU AGPL v3."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cognusion/fuse-copyfs"},"fuse-copyfs"),(0,a.kt)("br",null),"CopyFS is the copy-on-write (COW) versioned filesystem for FUSE. Years ago I added features to CopyFS 1.0, then 1.0.1 came out and I never bothered to forward-port my changes. Now I have. Master is 1.3.1M, which is CopyFS 1.0.1 + 1.3M"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-opendal"},"incubator-opendal"),(0,a.kt)("br",null),"Apache OpenDAL: access data freely.")))}p.isMDXComponent=!0}}]);