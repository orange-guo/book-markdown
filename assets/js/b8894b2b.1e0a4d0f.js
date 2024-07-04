"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[39958],{82591:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(74848),r=n(28453);const c={},t="process",i={id:"software-engineering/ops/linux/commands/process",title:"process",description:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",source:"@site/docs/software-engineering/ops/linux/commands/process.md",sourceDirName:"software-engineering/ops/linux/commands",slug:"/software-engineering/ops/linux/commands/process",permalink:"/docs/software-engineering/ops/linux/commands/process",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/ops/linux/commands/process.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:17200825e5,frontMatter:{},sidebar:"softwareEngineering",previous:{title:"mount",permalink:"/docs/software-engineering/ops/linux/commands/mount"},next:{title:"Projects",permalink:"/docs/software-engineering/ops/linux/commands/projects"}},l={},d=[{value:"\u901a\u8fc7<code>pstree</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",level:2},{value:"\u901a\u8fc7<code>strace</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"process",children:"process"}),"\n",(0,o.jsxs)(s.h2,{id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",children:["\u901a\u8fc7",(0,o.jsx)(s.code,{children:"pstree"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"pstree -p -s <pid> -T\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",children:["\u901a\u8fc7",(0,o.jsx)(s.code,{children:"strace"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"strace -p <pid>\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",children:["\u901a\u8fc7",(0,o.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u7ba1\u9053"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# grep pipe\nlsof|grep FIFO\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",children:["\u901a\u8fc7",(0,o.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"lsof -p <pid>\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://unix.stackexchange.com/questions/252134/lsof-p-pid-vs-lsof-grep-pid",children:"lsof -p PID vs lsof | grep PID"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var o=n(96540);const r={},c=o.createContext(r);function t(e){const s=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);