"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[21535],{73904:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=r(74848),o=r(28453);const c={authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},s="springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",a={permalink:"/zh-CN/blog/2023/02/22/springdoc-v2-parameter-object",source:"@site/blog/2023-02-22/springdoc-v2-parameter-object.md",title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",description:"springdoc\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210API\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86UI\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",date:"2023-02-22T00:00:00.000Z",tags:[{inline:!0,label:"springdoc",permalink:"/zh-CN/blog/tags/springdoc"},{inline:!0,label:"spring",permalink:"/zh-CN/blog/tags/spring"}],readingTime:4.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},unlisted:!1,prevItem:{title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",permalink:"/zh-CN/blog/2023/02/23/naming-pattern-prefix"},nextItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/zh-CN/blog/2023/02/21/inject-environment-as-array-into-spring-application"}},i={authorsImageUrls:[void 0]},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"springdoc"}),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210",(0,t.jsx)(n.code,{children:"API"}),"\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"UI"}),"\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",(0,t.jsx)("br",{}),"\n\u540c\u65f6\u5b83\u4e5f\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"spring-webmvc"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"handler"}),"\u4e2d\u7684\u53c2\u6570\u5bf9\u8c61\u5230",(0,t.jsx)(n.code,{children:"API"}),"\u53c2\u6570\u7684\u8f6c\u6362.",(0,t.jsx)("br",{}),"\n\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"spring-data-commons"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"Pageable"}),"\u548c",(0,t.jsx)(n.code,{children:"Sort"}),", ",(0,t.jsx)(n.code,{children:"springdoc"}),"\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd,\n\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u4ee5\u53ca\u5728\u53c2\u6570\u4e2d\u58f0\u660e",(0,t.jsx)(n.code,{children:"@ParameterObject"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="application.yml"',children:"springdoc:\n  model-converters:\n    pageable-converter:\n      enabled: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5df2\u7ecf\u5b58\u5728\u7684\u9879\u76ee, \u5f53\u521a\u5f15\u5165",(0,t.jsx)(n.code,{children:"springdoc"}),"\u65f6, \u9700\u8981\u914d\u7f6e\u5927\u91cf\u7684",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3\u4ee5\u5b9e\u73b0\u53c2\u6570\u8f6c\u6362\u529f\u80fd.",(0,t.jsx)("br",{}),"\n\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u6bd4\u8f83\u7e41\u7410, \u56e0\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u5177\u6709\u4e00\u5b9a\u89c4\u6a21\u7684\u9879\u76ee\u800c\u8a00, \u5176\u5bf9\u5916\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"API"}),"\u5f80\u5f80\u4f1a\u975e\u5e38\u591a,\n\u9700\u8981\u8fdb\u884c\u5927\u91cf\u7684\u4fee\u6539\u529f\u80fd\u624d\u80fd\u5b9e\u73b0\u8be5\u529f\u80fd",(0,t.jsx)("br",{}),"\n\u90a3\u4e48\u6b64\u65f6\u6211\u4eec\u9700\u8981\u4e00\u79cd\u89e3\u51b3\u65b9\u6848, \u5373\u5982\u4f55\u5728\u4e0d\u914d\u7f6e",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"Pageable"}),"\u4ee5\u53ca",(0,t.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);