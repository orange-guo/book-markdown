"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[38110],{72064:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=s(74848),t=s(28453);const c={authors:["xiangcheng.kuo"],tags:["postgresql"]},r="\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",i={permalink:"/blog/2023/02/13/postgres-max-connections",source:"@site/blog/2023-02-13/postgres-max-connections.md",title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",description:"postgresql\u9ed8\u8ba4\u8fde\u63a5\u6570\u91cf\u6709\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u591f\u7528\u7684\u60c5\u51b5, \u8fd9\u65f6\u5c31\u9700\u8981\u4fee\u6539postgresql\u7684\u6700\u5927\u8fde\u63a5\u6570",date:"2023-02-13T00:00:00.000Z",tags:[{inline:!0,label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:.51,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["postgresql"]},unlisted:!1,prevItem:{title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",permalink:"/blog/2023/02/14/ssh-prompt"},nextItem:{title:"\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",permalink:"/blog/2023/02/12/postgres-pgdump"}},a={authorsImageUrls:[void 0]},l=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u901a\u8fc7<code>ALTER SYSTEM</code>\u4fee\u6539",id:"\u901a\u8fc7alter-system\u4fee\u6539",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u91cd\u7f6e<code>max_connections</code>",id:"\u91cd\u7f6emax_connections",level:3},{value:"\u67e5\u770b<code>max_connections</code>",id:"\u67e5\u770bmax_connections",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"postgresql"}),"\u9ed8\u8ba4\u8fde\u63a5\u6570\u91cf\u6709\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u591f\u7528\u7684\u60c5\u51b5, \u8fd9\u65f6\u5c31\u9700\u8981\u4fee\u6539",(0,o.jsx)(n.code,{children:"postgresql"}),"\u7684\u6700\u5927\u8fde\u63a5\u6570"]}),"\n",(0,o.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(n.h3,{id:"\u901a\u8fc7alter-system\u4fee\u6539",children:["\u901a\u8fc7",(0,o.jsx)(n.code,{children:"ALTER SYSTEM"}),"\u4fee\u6539"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ALTER SYSTEM SET max_connections = 1000;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,o.jsxs)(n.h3,{id:"\u91cd\u7f6emax_connections",children:["\u91cd\u7f6e",(0,o.jsx)(n.code,{children:"max_connections"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ALTER SYSTEM RESET max_connections;\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"\u67e5\u770bmax_connections",children:["\u67e5\u770b",(0,o.jsx)(n.code,{children:"max_connections"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"SHOW max_connections;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/8288823/query-a-parameter-postgresql-conf-setting-like-max-connections",children:'Query a parameter (postgresql.conf setting) like "max_connections"'})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/47252026/how-to-increase-max-connection-in-the-official-postgresql-docker-image",children:"How to increase max_connection in the official PostgreSQL Docker image"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://linuxhint.com/tuning-postgres-max-connections/",children:"Tuning Postgres Max Connections"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var o=s(96540);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);