"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[80968],{72555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var t=r(77002),s=r(74848),a=r(28453);const o={authors:["orange"],tags:["spring"]},i="\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",l={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5bb9\u5668\u542f\u52a8\u65f6, \u9700\u8981\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u914d\u7f6e\u7ed9\u5e94\u7528\u7a0b\u5e8f.",(0,s.jsx)("br",{}),"\n\u4ee5",(0,s.jsx)(n.code,{children:"spring.ldap.urls"}),"\u6b64\u914d\u7f6e\u4e3a\u4f8b, \u5b83\u662f\u4e00\u4e2a\u6570\u7ec4."]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u6b64\u9700\u8981, \u9009\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef.",(0,s.jsx)("br",{}),"\n\u63a8\u8350\u7b2c\u4e8c\u79cd, \u56e0\u4e3a\u4e0b\u6807\u7684\u914d\u7f6e\u65b9\u5f0f\u5bf9\u4e8e\u5217\u8868\u7684\u6570\u91cf\u662f\u975e\u56fa\u5b9a\u7684\u573a\u666f\u662f\u4e0d\u591f\u7075\u6d3b\u7684"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u65b9\u5f0f1: \u4e0b\u6807\u914d\u7f6e"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SPRING_LDAP_URLS[0]=ldap://host-1:389\nSPRING_LDAP_URLS[1]=ldap://host-2:389\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u65b9\u5f0f2: \u65e0\u4e0b\u6807\u914d\u7f6e"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SPRING_LDAP_URLS=ldap://host-1:389,ldap://host-2:389\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.baeldung.com/spring-inject-arrays-lists#reading-properties-programmatically",children:"Inject Arrays and Lists From Spring Properties Files"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}},77002:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/02/21/inject-environment-as-array-into-spring-application","source":"@site/blog/2023-02-21-inject-environment-as-array-into-spring-application.md","title":"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e","description":"\u5bb9\u5668\u542f\u52a8\u65f6, \u9700\u8981\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u914d\u7f6e\u7ed9\u5e94\u7528\u7a0b\u5e8f.","date":"2023-02-21T00:00:00.000Z","tags":[{"inline":true,"label":"spring","permalink":"/blog/tags/spring"}],"readingTime":0.65,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["spring"]},"unlisted":false,"prevItem":{"title":"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362","permalink":"/blog/2023/02/22/springdoc-v2-parameter-object"},"nextItem":{"title":"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4","permalink":"/blog/2023/02/20/cleanup-old-version-of-snap-package"}}')}}]);