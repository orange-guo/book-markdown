"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[40071],{63399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var o=n(31398),r=n(74848),i=n(28453);const s={authors:["orange"],tags:["troubleshooting","testcontainers","docker","ldap-failover"]},a="TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",l={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0<code>fixedExposedPort</code>",id:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0fixedexposedport",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5",(0,r.jsx)(t.code,{children:"java"}),"\u7684",(0,r.jsx)(t.code,{children:"ldap"}),"\u7684",(0,r.jsx)(t.code,{children:"failover"}),"\u6709\u5173.",(0,r.jsx)("br",{}),"\n\u6d4b\u8bd5",(0,r.jsx)(t.code,{children:"failover"}),"\u9700\u8981\u542f\u52a8\u4e24\u4e2a",(0,r.jsx)(t.code,{children:"ldap"}),"\u7684\u5bb9\u5668\u5e76",(0,r.jsx)(t.code,{children:"stop"}),"\u5176\u4e2d\u4e00\u4e2a. ",(0,r.jsx)("br",{}),"\n\u4f46\u662f",(0,r.jsx)(t.code,{children:"stop"}),"\u5b8c\u4e4b\u540e\u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898\u5f53\u4e0b\u6b21\u542f\u52a8\u540e\u5206\u914d\u7684\u7aef\u53e3\u4f1a\u53d8\u5316(\u8fd9\u662f\u7531\u4e8e",(0,r.jsx)(t.code,{children:"docker"}),"\u7684\u5185\u90e8\u673a\u5236\u5bfc\u81f4\u7684).",(0,r.jsx)("br",{}),"\n\u63a5\u4e0b\u6765\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898."]}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(t.h3,{id:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0fixedexposedport",children:["\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0",(0,r.jsx)(t.code,{children:"fixedExposedPort"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val container = FixedHostPortGenericContainer<*>("<your-docker-image>")\ncontainer.withExposedPorts(389)\ncontainer.withFixedExposedPort(\n\tTestSocketUtils.findAvailableTcpPort(),\n\t389\n) // we need to fix the port to make sure the port is the same when the container is restarted\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(t.p,{children:"\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u521b\u5efaFixedHostPortGenericContainer\u7684\u5b9e\u4f8b\u6765\u56fa\u5b9a\u7aef\u53e3\n",(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"FixedHostPortGenericContainer"}),"\u662f",(0,r.jsx)(t.code,{children:"TestContainers"}),"\u63d0\u4f9b\u7684\u4e00\u4e2a",(0,r.jsx)(t.code,{children:"GenericContainer"}),"\u7684\u5b50\u7c7b, \u7528\u6765\u56fa\u5b9a\u5bb9\u5668\u7684\u7aef\u53e3"]}),"\n",(0,r.jsxs)(t.li,{children:["\u4f7f\u7528",(0,r.jsx)(t.code,{children:"TestSocketUtils.findAvailableTcpPort()"}),"\u83b7\u53d6\u4e00\u4e2a\u53ef\u7528\u7684\u7aef\u53e3\n",(0,r.jsx)("br",{}),"\u4f7f\u7528",(0,r.jsx)(t.code,{children:"TestSocketUtils.findAvailableTcpPort()"}),"\u83b7\u53d6\u4e00\u4e2a\u53ef\u7528\u7684\u7aef\u53e3\u786e\u4fdd",(0,r.jsx)(t.code,{children:"host"}),"\u4e0a\u7684\u7aef\u53e3\u6ca1\u6709\u88ab\u5360\u7528"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/util/TestSocketUtils.html",children:"Class TestSocketUtils"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://javadoc.io/static/org.testcontainers/testcontainers/1.15.1/org/testcontainers/containers/FixedHostPortGenericContainer.html",children:"Class FixedHostPortGenericContainer<SELF extends FixedHostPortGenericContainer<SELF>>"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.tabnine.com/code/java/classes/org.testcontainers.containers.FixedHostPortGenericContainer",children:"How to useFixedHostPortGenericContainerinorg.testcontainers.containers"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}},31398:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2023/03/16/testcontainers-fixed-port","source":"@site/blog/2023-03-16-testcontainers-fixed-port.md","title":"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3","description":"\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5java\u7684ldap\u7684failover\u6709\u5173.","date":"2023-03-16T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/zh-CN/blog/tags/troubleshooting"},{"inline":true,"label":"testcontainers","permalink":"/zh-CN/blog/tags/testcontainers"},{"inline":true,"label":"docker","permalink":"/zh-CN/blog/tags/docker"},{"inline":true,"label":"ldap-failover","permalink":"/zh-CN/blog/tags/ldap-failover"}],"readingTime":1.205,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","testcontainers","docker","ldap-failover"]},"unlisted":false,"prevItem":{"title":"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3","permalink":"/zh-CN/blog/2023/03/23/transport-endpoint-is-not-connected"},"nextItem":{"title":"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898","permalink":"/zh-CN/blog/2023/03/15/ldap-client-failover"}}')}}]);