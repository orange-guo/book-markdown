"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[36243],{30742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),o=t(28453);const r={authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},i="\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",c={permalink:"/zh-CN/blog/2023/02/15/testcontainers-hostname",source:"@site/blog/2023-02-15/testcontainers-hostname.md",title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",description:"\u5728\u4f7f\u7528TestContainers\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",date:"2023-02-15T00:00:00.000Z",tags:[{inline:!0,label:"testcontainers",permalink:"/zh-CN/blog/tags/testcontainers"},{inline:!0,label:"docker",permalink:"/zh-CN/blog/tags/docker"}],readingTime:1.265,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},unlisted:!1,prevItem:{title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",permalink:"/zh-CN/blog/2023/02/16/linux-swapfile"},nextItem:{title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",permalink:"/zh-CN/blog/2023/02/14/ssh-prompt"}},a={authorsImageUrls:[void 0]},l=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528",(0,s.jsx)(n.code,{children:"TestContainers"}),"\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",(0,s.jsx)("br",{}),"\n\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u5bb9\u5668\u4f9d\u8d56\u4e8e\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668, \u90a3\u4e48\u9700\u8981\u5728\u542f\u52a8\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u65f6, \u6307\u5b9a",(0,s.jsx)(n.code,{children:"hostname"}),".",(0,s.jsx)("br",{}),"\n\u8fd9\u6837\u6709\u4f9d\u8d56\u9700\u6c42\u7684\u5bb9\u5668\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"hostname"}),"\u6765\u8bbf\u95ee\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668.",(0,s.jsx)("br",{}),"\n\u4ee5\u4fbf\u4e8e\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u80fd\u591f\u6b63\u786e\u7684\u89e3\u6790\u4f9d\u8d56\u5bb9\u5668\u7684",(0,s.jsx)(n.code,{children:"hostname"}),".\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728",(0,s.jsx)(n.code,{children:"TestContainers"}),"\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668",(0,s.jsx)(n.code,{children:"hostname"}),"\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898."]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u542f\u52a8\u5bb9\u5668\u65f6, \u901a\u8fc7",(0,s.jsx)(n.code,{children:"withNetworkAliases"}),"\u65b9\u6cd5\u6307\u5b9a\u5bb9\u5668\u7684",(0,s.jsx)(n.code,{children:"hostname"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'withNetworkAliases("ldap")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f, \u8fd9\u79cd\u5b9e\u73b0\u65b9\u5f0f\u662f\u91c7\u7528",(0,s.jsx)(n.code,{children:"docker"}),"\u7684",(0,s.jsx)(n.code,{children:"--network-alias"}),"\u53c2\u6570\u5b9e\u73b0\u7684, \u8be5\u53c2\u6570\u7684\u4f5c\u7528\u662f\u4e3a\u5bb9\u5668\u6307\u5b9a",(0,s.jsx)(n.code,{children:"hostname"}),(0,s.jsx)("br",{}),"\n\u53e6\u5916\u9700\u8981\u786e\u4fdd\u9700\u8981\u4e92\u76f8\u8bbf\u95ee\u7684\u5bb9\u5668\u8981\u5728\u540c\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"network"}),"\u4e2d, \u5426\u5219\u65e0\u6cd5\u4e92\u76f8\u8bbf\u95ee.",(0,s.jsx)("br",{}),"\n\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u6765\u914d\u7f6e",(0,s.jsx)(n.code,{children:"network"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val network = Network.newNetwork()\ncontainer.withNetwork(network)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/run/#network-settings",children:"Network settings"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);