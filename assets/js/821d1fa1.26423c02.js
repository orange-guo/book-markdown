"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[40101],{69937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=s(74848),l=s(28453);const o={authors:["xiangcheng.kuo"],tags:["linux"]},a="\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",c={permalink:"/blog/2023/02/16/linux-swapfile",source:"@site/blog/2023-02-16/linux-swapfile.md",title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",description:"swapfile\u662flinux\u4e2d\u7684\u4e00\u79cd\u865a\u62df\u5185\u5b58, \u4e0ewindows\u4e2d\u7684pagefile\u7c7b\u4f3c.",date:"2023-02-16T00:00:00.000Z",tags:[{inline:!0,label:"linux",permalink:"/blog/tags/linux"}],readingTime:.91,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",permalink:"/blog/2023/02/17/snap-install-specify-version"},nextItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",permalink:"/blog/2023/02/15/testcontainers-hostname"}},t={authorsImageUrls:[void 0]},r=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u542f\u7528<code>swapfile</code>, \u5927\u5c0f\u4e3a<code>4G</code>",id:"\u542f\u7528swapfile-\u5927\u5c0f\u4e3a4g",level:3},{value:"\u7981\u7528<code>swapfile</code>",id:"\u7981\u7528swapfile",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"swapfile"}),"\u662f",(0,i.jsx)(n.code,{children:"linux"}),"\u4e2d\u7684\u4e00\u79cd\u865a\u62df\u5185\u5b58, \u4e0e",(0,i.jsx)(n.code,{children:"windows"}),"\u4e2d\u7684",(0,i.jsx)(n.code,{children:"pagefile"}),"\u7c7b\u4f3c.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"swapfile"}),"\u7684\u4f5c\u7528\u662f\u5f53",(0,i.jsx)(n.code,{children:"RAM"}),"\u4e0d\u8db3\u65f6, \u5c06\u4e00\u90e8\u5206",(0,i.jsx)(n.code,{children:"RAM"}),"\u4e2d\u7684\u6570\u636e\u5199\u5165\u5230",(0,i.jsx)(n.code,{children:"swapfile"}),"\u4e2d, \u4ece\u800c\u91ca\u653e\u51fa",(0,i.jsx)(n.code,{children:"RAM"}),"\u7684\u7a7a\u95f4.",(0,i.jsx)("br",{}),"\n\u4f8b\u5982, \u5e73\u65f6\u4f7f\u7528\u6d4f\u89c8\u5668\u65f6\u4f1a\u5f00\u542f\u9875\u9762, \u8fd9\u4e9b\u9875\u9762\u901a\u5e38\u4f1a\u5360\u7528\u4e00\u5b9a\u7684",(0,i.jsx)(n.code,{children:"RAM"}),"\u7a7a\u95f4.",(0,i.jsx)("br",{}),"\n\u5982\u679c\u5f00\u542f\u4e86\u592a\u591a\u7684\u9875\u9762, \u4f1a\u5bfc\u81f4",(0,i.jsx)(n.code,{children:"RAM"}),"\u4e0d\u8db3, \u8fd9\u65f6\u5c31\u9700\u8981\u5c06\u4e00\u90e8\u5206\u9875\u9762\u7684\u6570\u636e\u5199\u5165\u5230",(0,i.jsx)(n.code,{children:"swapfile"}),"\u4e2d, \u4ece\u800c\u91ca\u653e\u51fa",(0,i.jsx)(n.code,{children:"RAM"}),"\u7684\u7a7a\u95f4",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.h3,{id:"\u542f\u7528swapfile-\u5927\u5c0f\u4e3a4g",children:["\u542f\u7528",(0,i.jsx)(n.code,{children:"swapfile"}),", \u5927\u5c0f\u4e3a",(0,i.jsx)(n.code,{children:"4G"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\nsudo swapon --show\nsudo free -h\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"\u7981\u7528swapfile",children:["\u7981\u7528",(0,i.jsx)(n.code,{children:"swapfile"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo swapoff /swapfile\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://linuxize.com/post/create-a-linux-swap-file/",children:"Create a Linux Swap File"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(96540);const l={},o=i.createContext(l);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);