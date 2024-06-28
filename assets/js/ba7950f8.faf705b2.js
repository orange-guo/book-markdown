"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3689],{33237:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(74848),r=n(28453);const o={authors:["xiangcheng.kuo"],tags:["ssh"]},c="\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",i={permalink:"/blog/2023/02/24/enable-sshd-password-authentication",source:"@site/blog/2023-02-24/enable-sshd-password-authentication.md",title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",description:"\u5728ssh\u4e2d, \u9ed8\u8ba4\u662f\u4e0d\u5141\u8bb8\u4f7f\u7528password\u8ba4\u8bc1\u7684, \u4f46\u662f\u6709\u65f6\u5019, \u6211\u4eec\u9700\u8981\u4f7f\u7528password\u8ba4\u8bc1.",date:"2023-02-24T00:00:00.000Z",tags:[{inline:!0,label:"ssh",permalink:"/blog/tags/ssh"}],readingTime:.635,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["ssh"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",permalink:"/blog/2023/02/25/nvm"},nextItem:{title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",permalink:"/blog/2023/02/23/naming-pattern-prefix"}},d={authorsImageUrls:[void 0]},a=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4fee\u6539<code>sshd</code>\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539sshd\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u91cd\u542f<code>ssh</code>\u670d\u52a1",id:"\u91cd\u542fssh\u670d\u52a1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u5728",(0,t.jsx)(s.code,{children:"ssh"}),"\u4e2d, \u9ed8\u8ba4\u662f\u4e0d\u5141\u8bb8\u4f7f\u7528",(0,t.jsx)(s.code,{children:"password"}),"\u8ba4\u8bc1\u7684, \u4f46\u662f\u6709\u65f6\u5019, \u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,t.jsx)(s.code,{children:"password"}),"\u8ba4\u8bc1.",(0,t.jsx)("br",{}),"\n\u4e3a\u4e86\u80fd\u591f\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd, \u6211\u4eec\u9700\u8981\u5bf9",(0,t.jsx)(s.code,{children:"ssh"}),"\u8fdb\u884c\u914d\u7f6e"]}),"\n",(0,t.jsx)(s.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(s.h3,{id:"\u4fee\u6539sshd\u914d\u7f6e\u6587\u4ef6",children:["\u4fee\u6539",(0,t.jsx)(s.code,{children:"sshd"}),"\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,t.jsxs)(s.p,{children:["\u4fee\u6539",(0,t.jsx)(s.code,{children:"/etc/ssh/sshd_config"}),"\u6587\u4ef6, \u5c06",(0,t.jsx)(s.code,{children:"PasswordAuthentication"}),"\u8bbe\u7f6e\u4e3a",(0,t.jsx)(s.code,{children:"yes"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"PasswordAuthentication no\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"\u91cd\u542fssh\u670d\u52a1",children:["\u91cd\u542f",(0,t.jsx)(s.code,{children:"ssh"}),"\u670d\u52a1"]}),"\n",(0,t.jsx)(s.p,{children:"\u4ee5\u4e0b\u6709\u4e24\u79cd\u65b9\u5f0f, \u9009\u62e9\u4e00\u79cd\u5373\u53ef"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u65b9\u5f0f1: systemd"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart sshd\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u65b9\u5f0f2: service"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo service sshd restart\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://serverpilot.io/docs/how-to-enable-ssh-password-authentication/",children:"How to Enable SSH Password Authentication"})}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var t=n(96540);const r={},o=t.createContext(r);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);