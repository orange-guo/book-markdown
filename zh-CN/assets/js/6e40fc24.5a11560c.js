"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(o,".").concat(d)]||s[d]||c[d]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(83117),l=(n(67294),n(3905));const i={},r='"Simple Made Easy" - Rich Hickey (2011)',p={unversionedId:"note/talk-transcripts/simple-made-easy",id:"note/talk-transcripts/simple-made-easy",title:'"Simple Made Easy" - Rich Hickey (2011)',description:"\u6b64\u6587\u7ae0\u4e3aRich Hickey\u57282011\u5e74Strange Loop\u5927\u4f1a\u4e0a\u7684\u6f14\u8bb2\u7684\u6f14\u8bb2\u7684\u7b14\u8bb0, \u4e3b\u8981\u8bb2\u8ff0\u4e86Simple\u548cEasy\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u505a\u5230Simple.",source:"@site/docs/note/talk-transcripts/simple-made-easy.mdx",sourceDirName:"note/talk-transcripts",slug:"/note/talk-transcripts/simple-made-easy",permalink:"/zh-CN/docs/note/talk-transcripts/simple-made-easy",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/talk-transcripts/simple-made-easy.mdx",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705472791,formattedLastUpdatedAt:"2024\u5e741\u670817\u65e5",frontMatter:{},sidebar:"note",previous:{title:"Hammock Driven Development - Rich Hickey",permalink:"/zh-CN/docs/note/talk-transcripts/hammock-driven-development"}},o={},u=[{value:"Simple And Easy",id:"simple-and-easy",level:2},{value:"Simple",id:"simple",level:3},{value:"Easy",id:"easy",level:3},{value:"Simple\u548cEasy\u7684\u533a\u522b",id:"simple\u548ceasy\u7684\u533a\u522b",level:3},{value:"\u590d\u6742\u6027(Complexity)",id:"\u590d\u6742\u6027complexity",level:2},{value:"\u590d\u6742\u6027\u5bfc\u81f4\u7684\u95ee\u9898",id:"\u590d\u6742\u6027\u5bfc\u81f4\u7684\u95ee\u9898",level:3},{value:"\u590d\u6742\u6027\u7684\u8868\u73b0\u5f62\u5f0f",id:"\u590d\u6742\u6027\u7684\u8868\u73b0\u5f62\u5f0f",level:3},{value:"\u7b80\u5355\u6027(Simplicity)",id:"\u7b80\u5355\u6027simplicity",level:2},{value:"\u907f\u514d\u590d\u6742\u6027, \u8ffd\u6c42\u7b80\u5355\u6027",id:"\u907f\u514d\u590d\u6742\u6027-\u8ffd\u6c42\u7b80\u5355\u6027",level:3},{value:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u539f\u5219\u548c\u65b9\u6cd5",id:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u539f\u5219\u548c\u65b9\u6cd5",level:3},{value:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u4f8b\u5b50",id:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u4f8b\u5b50",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"simple-made-easy---rich-hickey-2011"},'"Simple Made Easy" - Rich Hickey (2011)'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u6587\u7ae0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Rich Hickey"),"\u57282011\u5e74",(0,l.kt)("inlineCode",{parentName:"p"},"Strange Loop"),"\u5927\u4f1a\u4e0a\u7684\u6f14\u8bb2\u7684\u6f14\u8bb2\u7684\u7b14\u8bb0, \u4e3b\u8981\u8bb2\u8ff0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),"\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u505a\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),".",(0,l.kt)("br",null))),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LKtk3HCgTa8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Simplicity is prerequisite for reliability. - Edsger W. Dijkstra",(0,l.kt)("br",null),"\u7b80\u5355\u662f\u53ef\u9760\u7684\u524d\u63d0. - Edsger W. Dijkstra")),(0,l.kt)("h2",{id:"simple-and-easy"},"Simple And Easy"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u7684\u5b9a\u4e49\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e0d\u590d\u6742(not complex)"),", \u6ca1\u6709\u591a\u4f59\u7684\u90e8\u5206\u6216\u5173\u7cfb. ",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"easy"},"Easy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),"\u7684\u5b9a\u4e49\u662f\u63a5\u8fd1",(0,l.kt)("inlineCode",{parentName:"p"},"near"),", \u5373\u7b26\u5408\u6211\u4eec\u7684\u7ecf\u9a8c, \u77e5\u8bc6, \u80fd\u529b, \u6216\u504f\u597d. ",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"simple\u548ceasy\u7684\u533a\u522b"},"Simple\u548cEasy\u7684\u533a\u522b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),"\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u7ef4\u5ea6, \u4ed6\u4eec\u4e4b\u95f4\u6ca1\u6709\u5fc5\u7136\u7684\u8054\u7cfb. ",(0,l.kt)("br",null),"\n\u4e00\u4e2a\u4e8b\u7269\u53ef\u4ee5\u540c\u65f6\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),", \u4e5f\u53ef\u4ee5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),"\u4f46\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),", \u4e5f\u53ef\u4ee5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Easy"),"\u4f46\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Simple"),". ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\u4f8b\u5982: ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a\u719f\u7ec3\u638c\u63e1",(0,l.kt)("inlineCode",{parentName:"li"},"Java"),"\u7a0b\u5e8f\u5458\u6765\u8bf4, ",(0,l.kt)("inlineCode",{parentName:"li"},"Java"),"\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Easy"),"\u7684, \u4f46\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Simple"),"\u7684(\u56e0\u4e3a\u8bed\u8a00\u91cc\u8bbe\u8ba1\u5230\u5f88\u591a\u62bd\u8c61\u7684\u6982\u5ff5)."),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a\u4e0d\u719f\u6089",(0,l.kt)("inlineCode",{parentName:"li"},"Java"),"\u7684\u7a0b\u5e8f\u5458\u6765\u8bf4, ",(0,l.kt)("inlineCode",{parentName:"li"},"Java"),"\u65e2\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Easy"),"\u7684, \u4e5f\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Simple"),"\u7684.")),(0,l.kt)("h2",{id:"\u590d\u6742\u6027complexity"},"\u590d\u6742\u6027(Complexity)"),(0,l.kt)("h3",{id:"\u590d\u6742\u6027\u5bfc\u81f4\u7684\u95ee\u9898"},"\u590d\u6742\u6027\u5bfc\u81f4\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u590d\u6742\u6027\u662f\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u7684\u4e3b\u8981\u969c\u788d, \u5b83\u4f1a\u5bfc\u81f4\u5982\u4e0b\u95ee\u9898:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4f4e\u6548(inefficiency)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u9519\u8bef(error)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u9760(unreliability)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u7ef4\u62a4(unmaintainability)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u6269\u5c55(unscalability)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u91cd\u7528(unreusability)"))),(0,l.kt)("h3",{id:"\u590d\u6742\u6027\u7684\u8868\u73b0\u5f62\u5f0f"},"\u590d\u6742\u6027\u7684\u8868\u73b0\u5f62\u5f0f"),(0,l.kt)("p",null,"\u590d\u6742\u6027\u6709\u4ee5\u4e0b\u51e0\u79cd\u8868\u73b0\u5f62\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6df7\u4e71(conjoined)"),(0,l.kt)("br",null),"\u5b9a\u4e49: \u591a\u4e2a\u4e0d\u76f8\u5173\u6216\u4e0d\u5fc5\u8981\u7684\u4e8b\u7269\u5728\u4e00\u8d77, \u4f7f\u5b83\u4eec\u96be\u4ee5\u5206\u5f00\u6216\u533a\u5206.",(0,l.kt)("br",null),"\u6848\u4f8b: \u8ba2\u5355(Order)\u7684`\u521b\u5efa`\u3001`\u652f\u4ed8`\u3001`\u53d1\u8d27`\u3001`\u8bc4\u4ef7`\u7b49\u529f\u80fd\u90fd\u653e\u5728\u4e00\u4e2a\u7c7b\u6216\u4e00\u4e2a\u65b9\u6cd5\u91cc\uff0c\u5c31\u4f1a\u9020\u6210\u6df7\u4e71\u7684\u590d\u6742\u6027.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class OrderService {\n\n    public void create();\n\n    public void pay();\n\n    public void deliver();\n\n    public void evaluate();\n\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u7f20\u7ed5(entangled\uff09"),(0,l.kt)("br",null),"\u5b9a\u4e49: \u591a\u4e2a\u76f8\u5173\u6216\u5fc5\u8981\u7684\u4e8b\u7269\u5f7c\u6b64\u4ea4\u7ec7\u6216\u4f9d\u8d56, \u4f7f\u5b83\u4eec\u96be\u4ee5\u72ec\u7acb\u6216\u4fee\u6539.",(0,l.kt)("br",null),"\u6848\u4f8b: \u7528\u6237(Use)\u7684`\u57fa\u672c\u4fe1\u606f`, `\u6743\u9650`, `\u89d2\u8272`, `\u79ef\u5206`\u7b49\u5c5e\u6027\u548c\u884c\u4e3a\u90fd\u8026\u5408\u5728\u4e00\u8d77\uff0c\u5c31\u4f1a\u9020\u6210\u7f20\u7ed5\u7684\u590d\u6742\u6027.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class User {\n\n    private String name;\n\n    private String password;\n\n    private String email;\n\n    private String phone;\n\n    private String address;\n\n    private List<String> roles;\n\n    private List<String> permissions;\n\n    private int points;\n\n    public void login() {\n        // ...\n    }\n\n    public void logout() {\n        // ...\n    }\n\n    public void register() {\n        // ...\n    }\n\n    public void changePassword() {\n        // ...\n    }\n\n    public void changeEmail() {\n        // ...\n    }\n\n    public void changePhone() {\n        // ...\n    }\n\n    public void changeAddress() {\n        // ...\n    }\n\n    public void changeRoles() {\n        // ...\n    }\n\n    public void changePermissions() {\n        // ...\n    }\n\n    public void changePoints() {\n        // ...\n    }\n\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u91cd\u53e0(overlapping)"),(0,l.kt)("br",null),"\u5b9a\u4e49: \u591a\u4e2a\u76f8\u4f3c\u6216\u91cd\u590d\u7684\u4e8b\u7269\u5b58\u5728\u4e8e\u540c\u4e00\u4e2a\u8303\u56f4\u6216\u5c42\u6b21\uff0c\u4f7f\u5b83\u4eec\u96be\u4ee5\u533a\u5206\u6216\u7ba1\u7406.",(0,l.kt)("br",null),"\u6848\u4f8b: \u5546\u54c1(Product)\u7684\u540d\u79f0, \u4ef7\u683c, \u5e93\u5b58, \u63cf\u8ff0, \u56fe\u7247, \u5206\u7c7b, \u6807\u7b7e\u7b49\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u5b9a\u4e49\u5728\u540c\u4e00\u4e2a\u7c7b\u6216\u540c\u4e00\u4e2a\u5c42\u6b21\u4e0a\uff0c\u5c31\u4f1a\u9020\u6210\u91cd\u53e0\u7684\u590d\u6742\u6027.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Product {\n\n    private String name;\n\n    private BigDecimal price;\n\n    private int stock;\n\n    private String description;\n\n    private String image;\n\n    private String category;\n\n    private List<String> tags;\n\n    public void create() {\n        // ...\n    }\n\n    public void update() {\n        // ...\n    }\n\n    public void delete() {\n        // ...\n    }\n\n    public void get() {\n        // ...\n    }\n\n    public void list() {\n        // ...\n    }\n\n    public void search() {\n        // ...\n    }\n\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6a21\u7cca(ambiguous)"),(0,l.kt)("br",null),"\u5b9a\u4e49\uff1a\u591a\u4e2a\u4e0d\u660e\u786e\u6216\u4e0d\u786e\u5b9a\u7684\u4e8b\u7269\u8868\u8fbe\u6216\u4f7f\u7528\uff0c\u4f7f\u5b83\u4eec\u96be\u4ee5\u7406\u89e3\u6216\u9884\u6d4b.",(0,l.kt)("br",null),"\u6848\u4f8b: \u4e00\u4e2a\u65e5\u671f(Date)\u7684\u683c\u5f0f\u3001\u65f6\u533a\u3001\u8bed\u8a00\u7b49\u53c2\u6570\u90fd\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u6216\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u5c31\u4f1a\u9020\u6210\u6a21\u7cca\u7684\u590d\u6742\u6027.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Date {\n\n    public void format() {\n        // ...\n    }\n\n    public void parse() {\n        // ...\n    }\n\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u9690\u6666(opaque)"),(0,l.kt)("br",null),"\u5b9a\u4e49: \u591a\u4e2a\u96be\u4ee5\u89c2\u5bdf\u6216\u68c0\u6d4b\u7684\u4e8b\u7269\u9690\u85cf\u6216\u5c01\u88c5\uff0c\u4f7f\u5b83\u4eec\u96be\u4ee5\u6d4b\u8bd5\u6216\u8c03\u8bd5.",(0,l.kt)("br",null),"\u6848\u4f8b: \u4e00\u4e2a\u7b97\u6cd5(Algorithm)\u7684\u5b9e\u73b0\u7ec6\u8282\u3001\u8f93\u5165\u8f93\u51fa\u3001\u9519\u8bef\u5904\u7406\u7b49\u90fd\u9690\u85cf\u5728\u4e00\u4e2a\u9ed1\u76d2\uff08Black Box\uff09\u91cc\uff0c\u5c31\u4f1a\u9020\u6210\u9690\u6666\u7684\u590d\u6742\u6027.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Algorithm {\n\n    public void execute() {\n        // ...\n    }\n\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u53d8\u5316(variable)"),(0,l.kt)("br",null),"\u5b9a\u4e49: \u591a\u4e2a\u6613\u53d8\u6216\u4e0d\u7a33\u5b9a\u7684\u4e8b\u7269\u5f15\u5165\u6216\u4f9d\u8d56\uff0c\u4f7f\u5b83\u4eec\u96be\u4ee5\u63a7\u5236\u6216\u9002\u5e94.",(0,l.kt)("br",null),"\u6848\u4f8b: `org.springframework.web.context.request.RequestContextHolder`.",(0,l.kt)("br",null),"\u8fd9\u4e2a\u7c7b\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u57fa\u4e8e`ThreadLocal`\u7684, \u800c`ThreadLocal`\u662f\u4e00\u4e2a\u7ebf\u7a0b\u7ea7\u522b\u7684\u53d8\u91cf\uff0c\u5b83\u7684\u503c\u53ea\u80fd\u5728\u5f53\u524d\u7ebf\u7a0b\u4e2d\u5171\u4eab\uff0c\u6240\u4ee5\u5b83\u7684\u503c\u662f\u4e0d\u7a33\u5b9a\u7684\uff0c\u8fd9\u5c31\u4f1a\u9020\u6210\u53d8\u5316\u7684\u590d\u6742\u6027.")),(0,l.kt)("h2",{id:"\u7b80\u5355\u6027simplicity"},"\u7b80\u5355\u6027(Simplicity)"),(0,l.kt)("h3",{id:"\u907f\u514d\u590d\u6742\u6027-\u8ffd\u6c42\u7b80\u5355\u6027"},"\u907f\u514d\u590d\u6742\u6027, \u8ffd\u6c42\u7b80\u5355\u6027"),(0,l.kt)("p",null,"\u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u907f\u514d\u590d\u6742\u6027, \u8ffd\u6c42\u7b80\u5355\u6027.\n\u7b80\u5355\u6027\u6709\u591a\u79cd\u4f18\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7406\u89e3(understandable)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6d4b\u8bd5(testable)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7ec4\u5408(composable)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u6784(refactorable)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55(extensible)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u7528(reusable)")),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u539f\u5219\u548c\u65b9\u6cd5"},"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u539f\u5219\u548c\u65b9\u6cd5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u7b80\u5355\u6027, \u6211\u4eec\u9700\u8981\u4e00\u4e9b\u539f\u5219\u548c\u65b9\u6cd5."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5206\u89e3(decompose)"),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61(abstract)"),(0,l.kt)("li",{parentName:"ul"},"\u5c01\u88c5(encapsulate)"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5316(modularize)"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5316(standardize)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u5316(minimize)"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u4f8b\u5b50"},"\u5b9e\u73b0\u7b80\u5355\u6027\u7684\u4f8b\u5b50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7eaf\u51fd\u6570(Pure Function)"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u636e\u7ed3\u6784(Data Structure)\u800c\u4e0d\u662f\u5bf9\u8c61(Object)"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u503c(Value)\u800c\u4e0d\u662f\u53d8\u91cf(Variable)"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0d\u53ef\u53d8(Immutable)\u800c\u4e0d\u662f\u53ef\u53d8(Mutable)")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LKtk3HCgTa8&t=14s"},'"Simple Made Easy" - Rich Hickey (2011)')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.to/ruthmoog/on-simple-made-easy-by-rich-hickey-2olo"},"On 'Simple Made Easy' by Rich Hickey")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.infoq.com/presentations/Simple-Made-Easy/"},"Simple Made Easy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://paulrcook.com/blog/simple-made-easy"},"Simple Made Easy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md"},"Simple Made Easy"))))}c.isMDXComponent=!0}}]);