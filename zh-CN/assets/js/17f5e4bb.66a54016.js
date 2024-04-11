"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[347],{68775:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(85893),o=a(11151);const s={authors:["xiangcheng.kuo"],tags:["problem-solving","grafana","component-upgrade"]},t="\u5347\u7ea7grafana\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u4fee\u590d\u65b9\u6848",l={permalink:"/zh-CN/blog/2024/04/07/upgrading-grafana-issues-and-fixes",source:"@site/blog/2024-04-07/upgrading-grafana-issues-and-fixes.md",title:"\u5347\u7ea7grafana\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u4fee\u590d\u65b9\u6848",description:"\u8bbf\u95eegrafana\u62a5\u9519403 origin not allowed",date:"2024-04-07T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"grafana",permalink:"/zh-CN/blog/tags/grafana"},{label:"component-upgrade",permalink:"/zh-CN/blog/tags/component-upgrade"}],readingTime:1.13,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","grafana","component-upgrade"]},unlisted:!1,prevItem:{title:"\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u89e3\u51b3\u65b9\u6848",permalink:"/zh-CN/blog/2024/04/08/troubleshooting-and-solutions-encountered-during-the-upgrade-process-of-spring-cloud-gateway-to-version-4.1.0"},nextItem:{title:"Gnome\u684c\u9762\u73af\u5883\u542f\u7528Wayland",permalink:"/zh-CN/blog/2024/03/27/gnome-desktop-environment-enabling-wayland"}},d={authorsImageUrls:[void 0]},i=[{value:"\u8bbf\u95eegrafana\u62a5\u9519403 origin not allowed",id:"\u8bbf\u95eegrafana\u62a5\u9519403-origin-not-allowed",level:2},{value:"dashboard\u4e2d\u4f9d\u8d56\u7684panel\u7ec4\u4ef6\u8fc7\u65f6",id:"dashboard\u4e2d\u4f9d\u8d56\u7684panel\u7ec4\u4ef6\u8fc7\u65f6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u8bbf\u95eegrafana\u62a5\u9519403-origin-not-allowed",children:"\u8bbf\u95eegrafana\u62a5\u9519403 origin not allowed"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2aissue",(0,r.jsx)(n.a,{href:"https://github.com/grafana/grafana/issues/45117",children:"Unable to Create/Save Dashboard after v8.3.5 Update"}),"\n\u63d0\u5230\u4e86403\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848, \u8fd9\u4e2a\u95ee\u9898\u662fgrafana\u65b0\u7248\u672c\u5f15\u5165\u4e86",(0,r.jsx)(n.code,{children:"breaking change"}),", \u5982\u679c\u8bf7\u6c42\u7684",(0,r.jsx)(n.code,{children:"host"}),"\n\u548c\u914d\u7f6e\u4e2d\u7684",(0,r.jsx)(n.code,{children:"server.domian"}),"\u4e0d\u5339\u914d, \u5219\u4f1a\u8fd4\u56de403.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u901a\u5e38\u662f",(0,r.jsx)(n.code,{children:"reverse proxy"}),"\u7684\u95ee\u9898, ",(0,r.jsx)(n.code,{children:"reverse proxy"}),"\u8f6c\u53d1\u65f6\u4f1a\u4e22\u5931\u539f\u59cb\u7684\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684",(0,r.jsx)(n.code,{children:"host"}),"\u4fe1\u606f, \u4f20\u9012\u7684",(0,r.jsx)(n.code,{children:"host"}),"\n\u4fe1\u606f\u4e3a",(0,r.jsx)(n.code,{children:"reverse proxy"}),"\u4ee3\u7406\u89c4\u5219\u4e2d\u5bf9\u5e94\u7684",(0,r.jsx)(n.code,{children:"host"}),"\u4fe1\u606f(\u901a\u5e38\u662f\u5185\u7f51\u7684hostname)."]}),"\n",(0,r.jsxs)(n.p,{children:["\u89e3\u51b3\u65b9\u6848\u662f\u4fee\u6539",(0,r.jsx)(n.code,{children:"reverse proxy"}),"\u7684\u914d\u7f6e, \u5728\u8f6c\u53d1\u65f6\u5c06",(0,r.jsx)(n.code,{children:"host"}),"\u66ff\u6362\u4e3a",(0,r.jsx)(n.code,{children:"grafana"}),"\u4e2d\u914d\u7f6e\u7684",(0,r.jsx)(n.code,{children:"server.domain"}),"\u5373\u53ef"]}),"\n",(0,r.jsx)(n.h2,{id:"dashboard\u4e2d\u4f9d\u8d56\u7684panel\u7ec4\u4ef6\u8fc7\u65f6",children:"dashboard\u4e2d\u4f9d\u8d56\u7684panel\u7ec4\u4ef6\u8fc7\u65f6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53",(0,r.jsx)(n.code,{children:"dashboard"}),"\u4e2d\u4f9d\u8d56\u7684",(0,r.jsx)(n.code,{children:"panel"}),"\u8fc7\u65f6\u65f6, panel\u4e0a\u4f1a\u6709\u8b66\u544a\u56fe\u6807\u63d0\u793a\u9700\u8981\u66f4\u65b0, \u89e3\u51b3\u65b9\u6848\u662f\u5728",(0,r.jsx)(n.code,{children:"Dashboard"}),"\u7ba1\u7406\u754c\u9762\u4e2d\u70b9\u51fb",(0,r.jsx)(n.code,{children:"panel"}),"\n\u7684",(0,r.jsx)(n.code,{children:"edit"}),"\u6309\u94ae, \u66ff\u6362\u4e3a\u6700\u65b0\u7684",(0,r.jsx)(n.code,{children:"panel"}),"\u7ec4\u4ef6, \u7136\u540e\u4fdd\u5b58",(0,r.jsx)(n.code,{children:"dashboard"}),"\u5373\u53ef."]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#cookie_samesite",children:"Configure Grafana"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var r=a(67294);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);