"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[386],{71851:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(74848),t=n(28453);const o={authors:["xiangcheng.kuo"],tags:["jsch","openssh","sshd","ssh-keygen","rsa"]},a="\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",c={permalink:"/blog/2023/05/05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server",source:"@site/blog/2023-05-05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server.md",title:"\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",description:"\u670d\u52a1\u5efa\u7acbssh\u8fde\u63a5\u5931\u8d25, \u95ee\u9898\u5b9a\u4f4d\u4e3ajsch\u4e0d\u652f\u6301openssh\u683c\u5f0f\u7684\u79c1\u94a5.",date:"2023-05-05T00:00:00.000Z",tags:[{inline:!0,label:"jsch",permalink:"/blog/tags/jsch"},{inline:!0,label:"openssh",permalink:"/blog/tags/openssh"},{inline:!0,label:"sshd",permalink:"/blog/tags/sshd"},{inline:!0,label:"ssh-keygen",permalink:"/blog/tags/ssh-keygen"},{inline:!0,label:"rsa",permalink:"/blog/tags/rsa"}],readingTime:2.555,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["jsch","openssh","sshd","ssh-keygen","rsa"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",permalink:"/blog/2023/05/15/to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview"},nextItem:{title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",permalink:"/blog/2023/04/23/use-kind-create-a-k8s-cluster"}},i={authorsImageUrls:[void 0]},l=[];function h(e){const s={code:"code",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u670d\u52a1\u5efa\u7acb",(0,r.jsx)(s.code,{children:"ssh"}),"\u8fde\u63a5\u5931\u8d25, \u95ee\u9898\u5b9a\u4f4d\u4e3a",(0,r.jsx)(s.code,{children:"jsch"}),"\u4e0d\u652f\u6301",(0,r.jsx)(s.code,{children:"openssh"}),"\u683c\u5f0f\u7684\u79c1\u94a5.",(0,r.jsx)("br",{}),"\n\u5728",(0,r.jsx)(s.code,{children:"OpenSSH 7.8"}),"\u53ca\u4e4b\u540e\u7684\u7248\u672c, ",(0,r.jsx)(s.code,{children:"ssh-keygen"}),"\u547d\u4ee4\u9ed8\u8ba4\u751f\u6210\u7684\u79c1\u94a5\u683c\u5f0f\u4e3a",(0,r.jsx)(s.code,{children:"openssh"}),".",(0,r.jsx)("br",{}),"\n\u8be5\u683c\u5f0f\u7684\u5934\u90e8\u4e3a",(0,r.jsx)(s.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),".",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u5c06\u79c1\u94a5\u8f6c\u6362\u4e3a",(0,r.jsx)(s.code,{children:"rsa"}),"\u683c\u5f0f\u540e, \u53d1\u73b0\u670d\u52a1\u7aef\u8fd8\u9700\u8981\u542f\u7528",(0,r.jsx)(s.code,{children:"rsa"}),"\u8ba4\u8bc1, \u5728\u542f\u7528",(0,r.jsx)(s.code,{children:"rsa"}),"\u8ba4\u8bc1\u540e\u95ee\u9898\u89e3\u51b3.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0b\u9762\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u751f\u6210",(0,r.jsx)(s.code,{children:"rsa"}),"\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528",(0,r.jsx)(s.code,{children:"rsa"}),"\u8ba4\u8bc1."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var r=n(96540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);