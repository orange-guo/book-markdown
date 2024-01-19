"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3157],{76144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>t,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var c=s(85893),d=s(11151);const l={authors:["xiangcheng.kuo"],tags:["nvm","nodejs"]},r="\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",o={permalink:"/blog/2023/02/25/nvm",source:"@site/blog/2023-02-25/nvm.md",title:"\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",description:"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d, \u6709\u65f6\u5019\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684nodejs\u6765\u5f00\u53d1\u4e0d\u540c\u7684\u9879\u76ee.",date:"2023-02-25T00:00:00.000Z",formattedDate:"February 25, 2023",tags:[{label:"nvm",permalink:"/blog/tags/nvm"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:1.44,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["nvm","nodejs"]},unlisted:!1,prevItem:{title:"ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",permalink:"/blog/2023/02/26/apt-mirror"},nextItem:{title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",permalink:"/blog/2023/02/24/enable-sshd-password-authentication"}},i={authorsImageUrls:[void 0]},h=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5c06<code>nvm</code>\u6dfb\u52a0\u5230<code>~/.bashrc</code>\u4e2d",id:"\u5c06nvm\u6dfb\u52a0\u5230bashrc\u4e2d",level:3},{value:"<code>node</code>\u5b89\u88c5",id:"node\u5b89\u88c5",level:3},{value:"\u8bbe\u7f6e<code>nodejs</code>\u7684\u9ed8\u8ba4\u7248\u672c",id:"\u8bbe\u7f6enodejs\u7684\u9ed8\u8ba4\u7248\u672c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d, \u6709\u65f6\u5019\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684",(0,c.jsx)(n.code,{children:"nodejs"}),"\u6765\u5f00\u53d1\u4e0d\u540c\u7684\u9879\u76ee.",(0,c.jsx)("br",{}),"\n\u4f8b\u5982, \u6709\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"UI"}),"\u9879\u76ee, \u9700\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684",(0,c.jsx)(n.code,{children:"v12"}),"\u7248\u672c, \u800c\u53e6\u4e00\u4e2a\u9879\u76ee\u9700\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684",(0,c.jsx)(n.code,{children:"v14"}),"\u7248\u672c.",(0,c.jsx)("br",{}),"\n\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"nvm"}),"\u6765\u5b9e\u73b0",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684\u591a\u7248\u672c\u7ba1\u7406.",(0,c.jsx)("br",{}),"\n\u672c\u6587\u5c06\u4ee5",(0,c.jsx)(n.code,{children:"nodejs-v18"}),"\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,c.jsx)(n.code,{children:"nvm"}),"\u6765\u5b9e\u73b0",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684\u591a\u7248\u672c\u7ba1\u7406"]}),"\n",(0,c.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,c.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5c06",(0,c.jsx)(n.code,{children:"github"}),"\u4e0a\u7684",(0,c.jsx)(n.code,{children:"nvm"}),"\u9879\u76ee\u514b\u9686\u5230\u672c\u5730"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:nvm-sh/nvm.git\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c",(0,c.jsx)(n.code,{children:"nvm"}),"\u7684\u5b89\u88c5\u811a\u672c"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fdb\u5165",(0,c.jsx)(n.code,{children:"nvm"}),"\u9879\u76ee\u7684\u6839\u76ee\u5f55, \u6267\u884c",(0,c.jsx)(n.code,{children:"install.sh"}),"\u811a\u672c"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./install.sh\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u5c06nvm\u6dfb\u52a0\u5230bashrc\u4e2d",children:["\u5c06",(0,c.jsx)(n.code,{children:"nvm"}),"\u6dfb\u52a0\u5230",(0,c.jsx)(n.code,{children:"~/.bashrc"}),"\u4e2d"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u914d\u7f6e",(0,c.jsx)(n.code,{children:"~/.bashrc"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8ffd\u52a0\u4ee5\u4e0b\u5185\u5bb9\u5230",(0,c.jsx)(n.code,{children:"~/.bashrc"}),"\u6587\u4ef6\u4e2d"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'export NVM_DIR=$DEV_SOFTWARE_HOME/Nvm\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u91cd\u65b0\u52a0\u8f7d",(0,c.jsx)(n.code,{children:"~/.bashrc"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"node\u5b89\u88c5",children:[(0,c.jsx)(n.code,{children:"node"}),"\u5b89\u88c5"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5b89\u88c5",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684",(0,c.jsx)(n.code,{children:"v18"}),"\u7248\u672c"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"nvm install 18\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c",(0,c.jsx)(n.code,{children:"node -v"}),"\u547d\u4ee4, \u67e5\u770b",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684\u7248\u672c"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u8bbe\u7f6enodejs\u7684\u9ed8\u8ba4\u7248\u672c",children:["\u8bbe\u7f6e",(0,c.jsx)(n.code,{children:"nodejs"}),"\u7684\u9ed8\u8ba4\u7248\u672c"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7f16\u8f91",(0,c.jsx)(n.code,{children:"~/.bashrc"}),"\u6587\u4ef6, \u8ffd\u52a0\u4ee5\u4e0b\u5185\u5bb9"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"nvm alias default 18\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u91cd\u65b0\u52a0\u8f7d",(0,c.jsx)(n.code,{children:"~/.bashrc"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var c=s(67294);const d={},l=c.createContext(d);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);