"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6205],{55202:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=i(74848),t=i(28453);const a={authors:["xiangcheng.kuo"],tags:["intellij-idea"]},r="IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",s={permalink:"/blog/2023/03/14/intellij-idea-language-injection",source:"@site/blog/2023-03-14/intellij-idea-language-injection.md",title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",date:"2023-03-14T00:00:00.000Z",tags:[{inline:!0,label:"intellij-idea",permalink:"/blog/tags/intellij-idea"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["intellij-idea"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",permalink:"/blog/2023/03/15/ldap-client-failover"},nextItem:{title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",permalink:"/blog/2023/03/13/intellij-idea-java-decompiler"}},o={authorsImageUrls:[void 0]},c=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u8fd9\u7bc7\u6587\u7ae0\u662f",(0,l.jsxs)(n.a,{href:"/blog/2023/03/02/clojure-validation",children:["\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"clojure"}),"\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1"]}),"\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",(0,l.jsx)("br",{}),"\n\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u5728",(0,l.jsx)(n.code,{children:"IntelliJ IDEA"}),"\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d",(0,l.jsx)(n.code,{children:"clojure"}),"\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9ad8\u4eae\u95ee\u9898.",(0,l.jsx)("br",{}),"\n\u901a\u8fc7\u8bed\u6cd5\u9ad8\u4eae, \u53ef\u4ee5\u66f4\u52a0\u76f4\u89c2\u7684\u770b\u5230\u8868\u8fbe\u5f0f\u7684\u7ed3\u6784, \u4ee5\u53ca\u8868\u8fbe\u5f0f\u4e2d\u7684\u9519\u8bef. \u4ece\u800c\u66f4\u52a0\u4fbf\u6377\u5730\u5b9e\u73b0\u8868\u8fbe\u5f0f\u7684\u7f16\u5199.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"IntelliJ IDEA"}),"\u4e2d\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u63d2\u4ef6"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cursive"}),"(\u6b64\u63d2\u4ef6\u662f",(0,l.jsx)(n.code,{children:"clojure"}),"\u8bed\u8a00\u7684\u652f\u6301\u63d2\u4ef6, \u5e76\u4e14\u652f\u6301",(0,l.jsx)(n.code,{children:"clojure"}),"\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9ad8\u4eae.)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IntelliLang"}),"(",(0,l.jsx)(n.code,{children:"Make sure that the IntelliLang plugin is enabled before you start working with language injections."}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee3\u7801\u4e2d\u589e\u52a0",(0,l.jsx)(n.code,{children:"@Language"}),"\u6ce8\u89e3, \u5982\u4e0b\u6240\u793a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",metastring:'title="ClojureExpressionConstraint.kt"',children:'annotation class ClojureExpressionConstraint(\n\tval message: String,\n\tval groups: Array<KClass<*>> = [],\n\tval payload: Array<KClass<out Payload>> = [],\n\t@Language("clojure") // to enable syntax highlighting\n\tval value: String,\n)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6548\u679c\u5c55\u793a",children:"\u6548\u679c\u5c55\u793a"}),"\n",(0,l.jsx)(n.p,{children:"\u5b9e\u73b0\u540e\u7684\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"idea-clojure-syntax-highlighting",src:i(6444).A+"",width:"1149",height:"785"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230, \u5f53\u9f20\u6807\u60ac\u6d6e\u5230\u8868\u8fbe\u5f0f\u5f15\u7528\u7684\u5730\u65b9\u65f6, \u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a\u4fe1\u606f.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/using-language-injections.html",children:"Language injections"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},6444:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/intellij-idea-language-injection-501c359e9d86ee3ba5eb7fd6045a5490.jpeg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var l=i(96540);const t={},a=l.createContext(t);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);