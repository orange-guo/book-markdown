"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[44],{26221:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(74848),t=s(28453);const r={authors:["xiangcheng.kuo"],tags:["snap"]},l="\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",o={permalink:"/zh-CN/blog/2023/02/17/snap-install-specify-version",source:"@site/blog/2023-02-17/snap-install-specify-version.md",title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",description:"\u5728\u4f7f\u7528snap\u5b89\u88c5\u5e94\u7528\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u7248\u672c\uff0c\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684\u5e94\u7528.",date:"2023-02-17T00:00:00.000Z",tags:[{inline:!0,label:"snap",permalink:"/zh-CN/blog/tags/snap"}],readingTime:1.02,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["snap"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528aliyundrive-webdav\u548crclone\u5b9e\u73b0\u963f\u91cc\u4e91\u76d8\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730",permalink:"/zh-CN/blog/2023/02/18/use-aliyundrive-webdav-with-rclone-to-mount-files"},nextItem:{title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",permalink:"/zh-CN/blog/2023/02/16/linux-swapfile"}},i={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["\u5728\u4f7f\u7528",(0,a.jsx)(e.code,{children:"snap"}),"\u5b89\u88c5\u5e94\u7528\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u7248\u672c\uff0c\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684\u5e94\u7528.",(0,a.jsx)("br",{}),"\n\u6709\u4e9b\u573a\u666f\u4e0b\u9700\u8981\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",(0,a.jsx)("br",{}),"\n\u4f8b\u5982",(0,a.jsx)(e.code,{children:"UI"}),"\u9879\u76ee\u76ee\u524d\u4ec5\u652f\u6301",(0,a.jsx)(e.code,{children:"nodejs"}),"\u7684",(0,a.jsx)(e.code,{children:"v12"}),"\u7248\u672c, \u90a3\u4e48\u5c31\u4e0d\u80fd\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684",(0,a.jsx)(e.code,{children:"nodejs"}),(0,a.jsx)("br",{}),"\n\u8fd9\u4e2a\u4f8b\u5b50\u4ec5\u4f5c\u4e3a\u53c2\u8003, \u56e0\u4e3a\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528",(0,a.jsx)(e.code,{children:"nvm"}),"\u6765\u7ba1\u7406",(0,a.jsx)(e.code,{children:"nodejs"}),"\u7684\u7248\u672c",(0,a.jsx)("br",{}),"\n\u5728",(0,a.jsx)(e.code,{children:"python"}),"\u4e2d,\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(e.code,{children:"pyenv virtualenv"}),"\u6765\u7ba1\u7406python\u7684\u7248\u672c",(0,a.jsx)("br",{}),"\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.jsx)(e.code,{children:"snap"}),"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528"]}),"\n",(0,a.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,a.jsxs)(e.p,{children:["\u901a\u8fc7",(0,a.jsx)(e.code,{children:"snap"}),"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528, \u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"snap install <app> --channel=<channel>\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u4ee5nodejs\u4e3a\u4f8b, \u5b89\u88c5",(0,a.jsx)(e.code,{children:"v12"}),"\u7248\u672c\u7684\u5e94\u7528, \u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"snap install node --channel=12/stable\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://manpages.org/snap",children:"man snap"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var a=s(96540);const t={},r=a.createContext(t);function l(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);