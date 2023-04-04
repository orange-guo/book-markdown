"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["docusaurus","giscus","github"]},s="\u4e3aDocusaurus\u4e2d\u7684Blog\u542f\u7528\u8bc4\u8bba\u529f\u80fd",i={permalink:"/markdowns/blog/2023/04/04/enable-comment-in-docusaurus",source:"@site/blog/2023-04-04/enable-comment-in-docusaurus.md",title:"\u4e3aDocusaurus\u4e2d\u7684Blog\u542f\u7528\u8bc4\u8bba\u529f\u80fd",description:"\u6700\u8fd1\u60f3\u5728Docusaurus\u4e2d\u542f\u7528\u8bc4\u8bba\u529f\u80fd, \u4f46\u662f\u5b98\u65b9\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u4e2a\u529f\u80fd, \u6240\u4ee5\u53ea\u80fd\u81ea\u5df1\u52a8\u624b\u4e86.",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[{label:"docusaurus",permalink:"/markdowns/blog/tags/docusaurus"},{label:"giscus",permalink:"/markdowns/blog/tags/giscus"},{label:"github",permalink:"/markdowns/blog/tags/github"}],readingTime:4.75,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["docusaurus","giscus","github"]},nextItem:{title:"Gitlab\u4e2d\u5e38\u89c1\u7684\u6807\u7b7e",permalink:"/markdowns/blog/2023/03/31/gitlab-labels"}},u={authorsImageUrls:[void 0]},l=[{value:"\u914d\u7f6e<code>Giscus</code>",id:"\u914d\u7f6egiscus",level:2},{value:"\u9a8c\u8bc1\u914d\u7f6e",id:"\u9a8c\u8bc1\u914d\u7f6e",level:2},{value:"\u83b7\u53d6\u542f\u7528\u8bc4\u8bba\u529f\u80fd\u6240\u9700\u7684\u53c2\u6570",id:"\u83b7\u53d6\u542f\u7528\u8bc4\u8bba\u529f\u80fd\u6240\u9700\u7684\u53c2\u6570",level:2},{value:"\u5b89\u88c5<code>Giscus</code>\u7ec4\u4ef6",id:"\u5b89\u88c5giscus\u7ec4\u4ef6",level:2},{value:"\u901a\u8fc7<code>Swizzling</code>\u6269\u5c55<code>Docusaurus</code>\u4e2d\u7684<code>BlogPostItem</code>\u7ec4\u4ef6",id:"\u901a\u8fc7swizzling\u6269\u5c55docusaurus\u4e2d\u7684blogpostitem\u7ec4\u4ef6",level:2},{value:"\u6548\u679c",id:"\u6548\u679c",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],p={toc:l},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6700\u8fd1\u60f3\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u542f\u7528\u8bc4\u8bba\u529f\u80fd, \u4f46\u662f\u5b98\u65b9\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u4e2a\u529f\u80fd, \u6240\u4ee5\u53ea\u80fd\u81ea\u5df1\u52a8\u624b\u4e86.",(0,r.kt)("br",null),"\n\u63a5\u4e0b\u6765\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u542f\u7528\u8bc4\u8bba\u529f\u80fd."),(0,r.kt)("p",null,"\u76ee\u524d\u7684\u89e3\u51b3\u65b9\u6848\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u6765\u5b9e\u73b0, \u5b83\u662f\u4e00\u4e2a\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Github Discussions"),"\u7684\u8bc4\u8bba\u7cfb\u7edf\u5b9e\u73b0\u7684\u8bc4\u8bba\u65b9\u6848.",(0,r.kt)("br",null),"\n\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u662f\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Github Discussions"),"\u6765\u5b9e\u73b0\u7684, \u6240\u4ee5\u9700\u8981\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Github"),"\u767b\u5f55\u8d26\u53f7\u8fdb\u884c\u8bc4\u8bba,\n\u53e6\u5916\u9700\u8981\u4e00\u4e2a\u516c\u5171\u7684\u4ed3\u5e93\u6765\u5b58\u653e\u8bc4\u8bba\u6570\u636e.",(0,r.kt)("br",null),"\n\u5982\u679c\u4f60\u7684\u535a\u5ba2\u662f\u79c1\u6709\u9879\u76ee, \u53ef\u4ee5\u8003\u8651\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u516c\u5171\u7684\u4ed3\u5e93\u7528\u4e8e\u5b58\u653e\u8bc4\u8bba\u6570\u636e, \u8fd9\u6837\u4f60\u539f\u6765\u7684\u535a\u5ba2\u9879\u76ee\u8fd8\u53ef\u4ee5\u4e3a\u79c1\u6709\u9879\u76ee.",(0,r.kt)("br",null),"\n\u4ee5\u4e0b\u5185\u5bb9\u4f1a\u5047\u8bbe\u4f60\u62e5\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"github"),"\u76f8\u5173\u77e5\u8bc6",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u914d\u7f6egiscus"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"h2"},"Giscus")),(0,r.kt)("p",null,"\u8fdb\u5165",(0,r.kt)("a",{parentName:"p",href:"https://giscus.app/"},"Giscus"),"\u5b98\u7f51\u6d4f\u89c8\u6587\u6863, \u7136\u540e\u6839\u636e\u6587\u6863\u4e2d\u7684\u8981\u6c42\u8fdb\u884c\u914d\u7f6e.",(0,r.kt)("br",null),"\n\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51c6\u5907\u4e00\u4e2a\u516c\u5171\u7684\u4ed3\u5e93",(0,r.kt)("br",null),"\u8be5\u4ed3\u5e93\u4e3b\u8981\u7528\u4e8e\u5b58\u653e\u8bc4\u8bba\u6570\u636e, \u5982\u679c\u4f60\u7684\u535a\u5ba2\u662f\u79c1\u6709\u9879\u76ee\u53ef\u4ee5\u8003\u8651\u521b\u5efa\u4e00\u4e2a\u516c\u5171\u7684\u4ed3\u5e93\u7528\u4e8e\u5b58\u653e\u8bc4\u8bba\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u516c\u5171\u7684\u4ed3\u5e93\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"Github Discussions"),",\n\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository"},"Enabling or disabling GitHub Discussions for a repository")),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/giscus"},"giscus-github-app")),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"Giscus-github-app"),"\u914d\u7f6e\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u4ed3\u5e93, \u5728\u521a\u624d\u7684\u5b89\u88c5\u9875\u9762\u4e2d\u53ef\u4ee5\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"Configure"),"\u6309\u94ae, \u70b9\u51fb\u8be5\u6309\u94ae\u8fdb\u5165\u914d\u7f6e\u9875\u9762")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u662f\u5927\u81f4\u7684\u914d\u7f6e\u6b65\u9aa4, \u8fd8\u6709\u4e00\u4e9b\u7ec6\u8282\u4f8b\u5982\u5173\u4e8e\u8bc4\u8bba\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Discussion"),"\u4e4b\u95f4\u7684\u6620\u5c04\u8fd9\u4e2a\u53ef\u4ee5\u5728\u521a\u624d\u7684\u5b98\u7f51\u9875\u9762\u4e2d\u67e5\u770b\u5177\u4f53\u7684\u914d\u7f6e\u8bf4\u660e.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u914d\u7f6e"},"\u9a8c\u8bc1\u914d\u7f6e"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u914d\u7f6e\u505a\u597d\u4e4b\u540e, \u4f60\u9700\u8981\u5bf9\u4f60\u7684\u914d\u7f6e\u8fdb\u884c\u9a8c\u8bc1, \u4ee5\u786e\u4fdd\u4f60\u7684\u914d\u7f6e\u662f\u6b63\u786e\u7684.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://giscus.app/"},"giscus"),"\u9875\u9762\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Repository"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u9a8c\u8bc1\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"repo")),(0,r.kt)("h2",{id:"\u83b7\u53d6\u542f\u7528\u8bc4\u8bba\u529f\u80fd\u6240\u9700\u7684\u53c2\u6570"},"\u83b7\u53d6\u542f\u7528\u8bc4\u8bba\u529f\u80fd\u6240\u9700\u7684\u53c2\u6570"),(0,r.kt)("p",null,"\u4e3a\u4e86\u540e\u7eed\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u542f\u7528\u8bc4\u8bba\u529f\u80fd, \u8fd8\u9700\u8981\u83b7\u53d6\u4e00\u4e9b\u53c2\u6570, \u8fd9\u4e9b\u53c2\u6570\u540e\u7eed\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u4f7f\u7528.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://giscus.app/"},"giscus"),"\u9875\u9762\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Enable giscus"),"\u4f1a\u6839\u636e\u4f60\u7684\u914d\u7f6e\u751f\u6210\u4e00\u6bb5\u4ee3\u7801, \u8be5\u4ee3\u7801\u5305\u542b\u4e86\u4f60\u9700\u8981\u7684\u53c2\u6570.",(0,r.kt)("br",null),"\n\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n<script src="https://giscus.app/client.js"\n        data-repo="[ENTER REPO HERE]"\n        data-repo-id="[ENTER REPO ID HERE]"\n        data-category="[ENTER CATEGORY NAME HERE]"\n        data-category-id="[ENTER CATEGORY ID HERE]"\n        data-mapping="pathname"\n        data-strict="0"\n        data-reactions-enabled="1"\n        data-emit-metadata="0"\n        data-input-position="bottom"\n        data-theme="preferred_color_scheme"\n        data-lang="en"\n        crossorigin="anonymous"\n        async>\n<\/script>\n')),(0,r.kt)("h2",{id:"\u5b89\u88c5giscus\u7ec4\u4ef6"},"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"h2"},"Giscus"),"\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u7ec4\u4ef6\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u7ec4\u4ef6, \u7528\u4e8e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u542f\u7528\u8bc4\u8bba\u529f\u80fd.",(0,r.kt)("br",null),"\n\u6211\u4eec\u9700\u8981\u5728\u9879\u76ee\u4e2d\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @giscus/react\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7swizzling\u6269\u5c55docusaurus\u4e2d\u7684blogpostitem\u7ec4\u4ef6"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"h2"},"Swizzling"),"\u6269\u5c55",(0,r.kt)("inlineCode",{parentName:"h2"},"Docusaurus"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"h2"},"BlogPostItem"),"\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u63d0\u4f9b\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/swizzling"},"Swizzling"),"\u529f\u80fd, \u53ef\u4ee5\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\n\u4e2d\u7684\u7ec4\u4ef6\u8fdb\u884c\u6269\u5c55\u5e76\u589e\u52a0\u65b0\u7684\u529f\u80fd.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostPage"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u7528\u4e8e\u5c55\u793a\u535a\u5ba2\u6587\u7ae0\u7684\u7ec4\u4ef6, \u8be5\u7ec4\u4ef6\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"\u4e2d.",(0,r.kt)("br",null),"\n\u4e3a\u4e86\u7ed9\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u4e2d\u542f\u7528\u8bc4\u8bba\u529f\u80fd, \u9700\u8981\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostPage"),"\u8fdb\u884c\u4fee\u6539.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle"),"\u547d\u4ee4\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostItem"),"\u7ec4\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme/BlogPostItem/index.js"),"\u6587\u4ef6\u4f1a\u88ab\u521b\u5efa",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9\u8be5\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91",(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u8be5\u6587\u4ef6\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus"),"\u7ec4\u4ef6\u53c2\u6570\u9700\u8981\u6839\u636e\u4f60\u7684\u914d\u7f6e\u8fdb\u884c\u4fee\u6539, \u914d\u7f6e\u7684\u53c2\u6570\u5728\u4e0a\u4e00\u8282\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\u4e86")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/theme/BlogPostItem/index.js"',title:'"src/theme/BlogPostItem/index.js"'},'import React from \'react\'\nimport BlogPostItem from \'@theme-original/BlogPostItem\'\nimport Giscus from "@giscus/react"\nimport {useBlogPost} from \'@docusaurus/theme-common/internal\'\nimport {useColorMode} from \'@docusaurus/theme-common\'\nimport useDocusaurusContext from \'@docusaurus/useDocusaurusContext\'\n\nexport default function BlogPostItemWrapper(props) {\n  const {i18n: {defaultLocale, localeConfigs}} = useDocusaurusContext()\n\n  const {colorMode} = useColorMode()\n\n  const {metadata, isBlogPostPage} = useBlogPost()\n  return (\n      <>\n        <BlogPostItem {...props} />\n        {(isBlogPostPage) && (\n            <Giscus\n                repo="xxx"\n                repoId="xxx"\n                category="xxx"\n                categoryId="xxx"\n                mapping="xxx"\n                strict="xxx"\n                reactionsEnabled="xxx"\n                emitMetadata="xxx"\n                inputPosition="xxx"\n                theme={colorMode}\n                lang={defaultLocale}\n                crossorigin="anonymous"\n                term="Welcome to @giscus/react component!"\n                loading="lazy"\n                async\n            />\n        )}\n      </>\n  );\n}\n')),(0,r.kt)("h2",{id:"\u6548\u679c"},"\u6548\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"enable-comment-in-docusaurus.png",src:n(8002).Z,width:"2559",height:"1371"})),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://giscus.app/"},"Giscus\u5b98\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/giscus"},"Giscus\u7684github-app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository"},"\u542f\u7528Github\u4e2d\u7684Discussions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/7759"},"\u5173\u4e8euseBlogPost\u51fd\u6570\u7684github-issue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/swizzling"},"Swizzling\u7684\u76f8\u5173\u4ecb\u7ecd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.wjwei.blog/docs/Potpourri/giscus-docusaurus"},"\u5728Docusaurus\u4e0a\u914d\u7f6eGiscus\u8bc4\u8bba\u7cfb\u7edf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus"},"How to add Giscus comments to Docusaurus"))))}m.isMDXComponent=!0},8002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-comment-in-docusaurus-8038867947841e387691a062cc401be6.png"}}]);