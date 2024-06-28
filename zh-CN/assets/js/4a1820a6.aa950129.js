"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[31586],{18112:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=s(74848),o=s(28453);const r={authors:["xiangcheng.kuo"],tags:["ssh"]},i="\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",c={permalink:"/zh-CN/blog/2023/02/14/ssh-prompt",source:"@site/blog/2023-02-14/ssh-prompt.md",title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",description:"\u5e73\u65f6\u5728\u5199\u4e00\u4e9b\u811a\u672c\u7684\u65f6\u5019, \u9700\u8981\u9891\u7e41\u5730\u8fde\u63a5\u5728\u4e91\u4e0a\u65b0\u521b\u5efa\u7684\u673a\u5668.",date:"2023-02-14T00:00:00.000Z",tags:[{inline:!0,label:"ssh",permalink:"/zh-CN/blog/tags/ssh"}],readingTime:1.13,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["ssh"]},unlisted:!1,prevItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",permalink:"/zh-CN/blog/2023/02/15/testcontainers-hostname"},nextItem:{title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",permalink:"/zh-CN/blog/2023/02/13/postgres-max-connections"}},a={authorsImageUrls:[void 0]},h=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5e73\u65f6\u5728\u5199\u4e00\u4e9b\u811a\u672c\u7684\u65f6\u5019, \u9700\u8981\u9891\u7e41\u5730\u8fde\u63a5\u5728\u4e91\u4e0a\u65b0\u521b\u5efa\u7684\u673a\u5668.",(0,t.jsx)("br",{}),"\n\u5728ssh\u4e2d\u7b2c\u4e00\u6b21\u8fde\u63a5\u65f6, \u4f1a\u8f93\u51fa\u5982\u4e0b\u63d0\u793a.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"RSA key fingerprint is 96:a9:23:5c:cc:d1:0a:d4:70:22:93:e9:9e:1e:74:2f.\nAre you sure you want to continue connecting (yes/no)? yes\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u6837\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u90fd\u9700\u8981\u8f93\u5165yes\u6765\u786e\u8ba4\u662f\u5426\u8fde\u63a5.",(0,t.jsx)("br",{}),"\n\u56e0\u4e3a\u811a\u672c\u4e0d\u53ef\u4ee5\u4ea4\u4e92, \u4f1a\u5bfc\u81f4\u811a\u672c\u5361\u5728\u8fd9\u4e00\u6b65\u65e0\u6cd5\u6267\u884c\u540e\u7eed\u7684\u64cd\u4f5c.",(0,t.jsx)("br",{}),"\n\u56e0\u6b64\u9700\u8981\u8df3\u8fc7\u8fd9\u4e00\u6b65\u7684\u786e\u8ba4.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728ssh\u8fde\u63a5\u65f6, \u901a\u8fc7",(0,t.jsx)(n.code,{children:"-o StrictHostKeyChecking=no"}),"\u53c2\u6570\u6765\u8df3\u8fc7\u786e\u8ba4.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh -o StrictHostKeyChecking=no -i <your-key> <username>@<hostname>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"man ssh"}),"\u4e2d\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"StrictHostKeyChecking"}),"\u53c2\u6570\u7684\u63cf\u8ff0\u5982\u4e0b:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"The StrictHostKeyChecking option can be used to control logins to machines whose host key is not known or has changed.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/33271/how-to-avoid-ssh-asking-permission",children:"how to avoid ssh asking permission?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect",children:"How to accept 'yes' from shell script \"Are you sure you want to continue connecting (yes/no)?\" using ssh. Without using StrictHostKeyChecking=no"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);