"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},l="\u65b9\u6cd5\u8bba",o={unversionedId:"collection/software-engineering/methodologies",id:"collection/software-engineering/methodologies",title:"\u65b9\u6cd5\u8bba",description:"FinOps",source:"@site/docs/collection/software-engineering/methodologies.md",sourceDirName:"collection/software-engineering",slug:"/collection/software-engineering/methodologies",permalink:"/zh-CN/docs/collection/software-engineering/methodologies",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/software-engineering/methodologies.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1683598467,formattedLastUpdatedAt:"2023\u5e745\u67089\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"Software Engineering",permalink:"/zh-CN/docs/category/software-engineering"},next:{title:"Principles",permalink:"/zh-CN/docs/collection/software-engineering/principles"}},p={},s=[{value:"FinOps",id:"finops",level:2},{value:"DevOps",id:"devops",level:2},{value:"GitOps",id:"gitops",level:2},{value:"Chaos Engineering",id:"chaos-engineering",level:2},{value:"Cloud Native",id:"cloud-native",level:2},{value:"Continuous delivery(CD)",id:"continuous-deliverycd",level:2},{value:"Extreme programming(XP)",id:"extreme-programmingxp",level:2},{value:"Agile software development(\u654f\u6377\u8f6f\u4ef6\u5f00\u53d1)",id:"agile-software-development\u654f\u6377\u8f6f\u4ef6\u5f00\u53d1",level:2},{value:"Twelve-Factor App(\u5341\u4e8c\u8981\u7d20\u5e94\u7528)",id:"twelve-factor-app\u5341\u4e8c\u8981\u7d20\u5e94\u7528",level:2},{value:"Architecture Decision Record(\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55)",id:"architecture-decision-record\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55",level:2},{value:"Infrastructure as Code(IaC)",id:"infrastructure-as-codeiac",level:2},{value:"Microservices(\u5fae\u670d\u52a1)",id:"microservices\u5fae\u670d\u52a1",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u65b9\u6cd5\u8bba"},"\u65b9\u6cd5\u8bba"),(0,i.kt)("h2",{id:"finops"},"FinOps"),(0,i.kt)("p",null,"FinOps\u662f\u4e00\u79cd\u65b9\u6cd5\u8bba, \u65e8\u5728\u5e2e\u52a9\u4f01\u4e1a\u7ba1\u7406\u4e91\u8ba1\u7b97\u6210\u672c, \u4ee5\u4fbf\u66f4\u597d\u5730\u63a7\u5236\u4e91\u8ba1\u7b97\u6210\u672c."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/learn/what-is-finops"},"What is Cloud FinOps?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.finops.org/"},"FinOps"))),(0,i.kt)("h2",{id:"devops"},"DevOps"),(0,i.kt)("p",null,"DevOps \u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5, \u5b83\u5c06\u8f6f\u4ef6\u5f00\u53d1(Dev)\u548c\u4fe1\u606f\u6280\u672f\u8fd0\u8425(Ops)\u7ed3\u5408\u5728\u4e00\u8d77, \u4ee5\u4fbf\u66f4\u5feb\u5730\u5f00\u53d1\u548c\u4ea4\u4ed8\u8f6f\u4ef6."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DevOps"},"DevOps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/devops"},"What Is DevOps?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/devops"},"Azure DevOps"))),(0,i.kt)("h2",{id:"gitops"},"GitOps"),(0,i.kt)("p",null,"GitOps \u662f\u4e00\u79cd\u65b9\u6cd5\u8bba, \u65e8\u5728\u901a\u8fc7 Git \u7ba1\u7406\u96c6\u7fa4\u914d\u7f6e, \u4ee5\u4fbf\u66f4\u597d\u5730\u7ba1\u7406\u96c6\u7fa4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.weave.works/technologies/gitops/"},"What is GitOps?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gitops.tech/"},"GitOps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://toolkit.fluxcd.io/"},"GitOps Toolkit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.weave.works/blog/gitops-principles"},"GitOps Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/topics/devops/what-is-gitops"},"GitOps: How to implement a GitOps workflow"))),(0,i.kt)("h2",{id:"chaos-engineering"},"Chaos Engineering"),(0,i.kt)("p",null,"Chaos Engineering \u662f\u4e00\u79cd\u65b9\u6cd5\u8bba, \u65e8\u5728\u901a\u8fc7\u5f15\u5165\u6545\u969c\u6765\u6d4b\u8bd5\u7cfb\u7edf\u7684\u5f39\u6027, \u4ee5\u4fbf\u66f4\u597d\u5730\u7ba1\u7406\u7cfb\u7edf."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Chaos_engineering"},"Chaos Engineering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://principlesofchaos.org/"},"Chaos Engineering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.chaosiq.io/"},"Chaos Engineering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chaos-mesh.org/"},"Chaos Engineering")),(0,i.kt)("li",{parentName:"ul"},"[Chaos Engineering]","(")),(0,i.kt)("h2",{id:"cloud-native"},"Cloud Native"),(0,i.kt)("p",null,"\u4e91\u539f\u751f\u662f\u4e00\u79cd\u6784\u5efa\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5b83\u5229\u7528\u4e91\u8ba1\u7b97\u7684\u4f18\u52bf\uff0c\u4ee5\u6700\u5927\u9650\u5ea6\u5730\u63d0\u9ad8\u6548\u7387\u548c\u964d\u4f4e\u6210\u672c\u3002",(0,i.kt)("br",null),"\n\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u662f\u4e00\u7ec4\u5bb9\u5668\u5316\u7684\u3001\u53ef\u81ea\u52a8\u7ba1\u7406\u548c\u53ef\u7ec4\u5408\u7684\u5fae\u670d\u52a1\uff0c\u8fd9\u4e9b\u5fae\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u81ea\u52a8\u5316\u90e8\u7f72\u7ba1\u9053\u5feb\u901f\u4ea4\u4ed8\u548c\u90e8\u7f72\u3002",(0,i.kt)("br",null),"\n\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fd8\u53ef\u4ee5\u5229\u7528\u4e91\u63d0\u4f9b\u5546\u7684\u670d\u52a1\uff0c\u5982\u670d\u52a1\u53d1\u73b0\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u7f13\u5b58\u3001\u6d88\u606f/\u961f\u5217\u3001\u76d1\u63a7\u548c\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/what-is/cloud-native/"},"What Is Cloud Native?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition"},"What is Cloud Native?"))),(0,i.kt)("h2",{id:"continuous-deliverycd"},"Continuous delivery(CD)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Continuous delivery"),"\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u5b9e\u8df5\uff0c\u65e8\u5728\u901a\u8fc7\u81ea\u52a8\u5316\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u8f6f\u4ef6\u6765\u7f29\u77ed\u8f6f\u4ef6\u5f00\u53d1\u7684\u751f\u547d\u5468\u671f\u3002",(0,i.kt)("br",null),"\n\u5b83\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"DevOps"),"\u7684\u4e00\u90e8\u5206\uff0c\u65e8\u5728\u901a\u8fc7\u81ea\u52a8\u5316\u548c\u6301\u7eed\u76d1\u63a7\u6765\u51cf\u5c11\u4eba\u4e3a\u9519\u8bef\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"Continuous delivery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Continuous Delivery"))),(0,i.kt)("h2",{id:"extreme-programmingxp"},"Extreme programming(XP)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Extreme programming"),"\u662f\u4e00\u79cd\u654f\u6377\u5f00\u53d1\u7684\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u662f\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"p"},"\u6781\u7aef"),"\u7684\u654f\u6377\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u7684\u6838\u5fc3\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u6301\u7eed\u96c6\u6210"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"\u6301\u7eed\u4ea4\u4ed8"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Extreme_programming"},"Extreme programming"))),(0,i.kt)("h2",{id:"agile-software-development\u654f\u6377\u8f6f\u4ef6\u5f00\u53d1"},"Agile software development(\u654f\u6377\u8f6f\u4ef6\u5f00\u53d1)"),(0,i.kt)("p",null,"\u654f\u6377\u8f6f\u4ef6\u5f00\u53d1\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u9f13\u52b1\u56e2\u961f\u5728\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4fdd\u6301\u7075\u6d3b\u6027\u548c\u53cd\u5e94\u8fc5\u901f\u3002\u654f\u6377\u5f00\u53d1\u7684\u6838\u5fc3\u662f\u8fed\u4ee3\u5f00\u53d1\uff0c\u6bcf\u4e2a\u8fed\u4ee3\u90fd\u662f\u4e00\u4e2a\u77ed\u5468\u671f\uff0c\u901a\u5e38\u662f2-4\u5468\u3002\u5728\u6bcf\u4e2a\u8fed\u4ee3\u4e2d\uff0c\u56e2\u961f\u4f1a\u5b8c\u6210\u4e00\u4e9b\u529f\u80fd\uff0c\u7136\u540e\u5c06\u5176\u4ea4\u4ed8\u7ed9\u7528\u6237\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u8ba9\u56e2\u961f\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4fdd\u6301\u7075\u6d3b\u6027\uff0c\u4ee5\u4fbf\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5bf9\u9700\u6c42\u8fdb\u884c\u8c03\u6574\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/agile"},"What is Agile?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Agile_software_development"},"Agile software development"))),(0,i.kt)("h2",{id:"twelve-factor-app\u5341\u4e8c\u8981\u7d20\u5e94\u7528"},"Twelve-Factor App(\u5341\u4e8c\u8981\u7d20\u5e94\u7528)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Twelve-Factor App"),"\u662f\u4e00\u79cd\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u53ef\u4ee5\u4f7f\u5e94\u7528\u7a0b\u5e8f\u5728\u4e91\u8ba1\u7b97\u65f6\u4ee3\u66f4\u5bb9\u6613\u5730\u6784\u5efa\u548c\u90e8\u7f72\u3002\n\u5b83\u662f\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"DevOps"),"\u7406\u5ff5\u7684\uff0c\u65e8\u5728\u4f7f\u5e94\u7528\u7a0b\u5e8f\u66f4\u5bb9\u6613\u5730\u5728\u73b0\u4ee3\u4e91\u8ba1\u7b97\u5e73\u53f0\u4e0a\u8fd0\u884c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://12factor.net/"},"Twelve-Factor App"))),(0,i.kt)("h2",{id:"architecture-decision-record\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55"},"Architecture Decision Record(\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55)"),(0,i.kt)("p",null,"\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55\uff08Architecture Decision Record\uff0cADR\uff09\u662f\u4e00\u79cd\u8bb0\u5f55\u67b6\u6784\u51b3\u7b56\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u8bb0\u5f55\u9879\u76ee\u4e2d\u7684\u91cd\u8981\u51b3\u7b56\uff0c\u4ee5\u4fbf\u4e8e\u9879\u76ee\u6210\u5458\u4e4b\u95f4\u5171\u4eab\u548c\u7406\u89e3\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"},"https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://adr.github.io/"},"https://adr.github.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.atspotify.com/2020/04/when-should-i-write-an-architecture-decision-record/"},"https://engineering.atspotify.com/2020/04/when-should-i-write-an-architecture-decision-record/"))),(0,i.kt)("h2",{id:"infrastructure-as-codeiac"},"Infrastructure as Code(IaC)"),(0,i.kt)("p",null,"Infrastructure as Code(IaC)\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u5c06\u57fa\u7840\u67b6\u6784\u89c6\u4e3a\u4ee3\u7801\uff0c\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u6765\u7ba1\u7406\u548c\u914d\u7f6e\u57fa\u7840\u67b6\u6784\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"},"Infrastructure as code"))),(0,i.kt)("h2",{id:"microservices\u5fae\u670d\u52a1"},"Microservices(\u5fae\u670d\u52a1)"),(0,i.kt)("p",null,"\u5fae\u670d\u52a1\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u5c06\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u4e00\u7ec4\u5c0f\u578b\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,i.kt)("br",null),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,i.kt)("br",null),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,i.kt)("br",null),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,i.kt)("br",null),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,i.kt)("br",null),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,i.kt)("br",null),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c \u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,i.kt)("br",null),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,i.kt)("br",null),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microservices.io/"},"What are microservices?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/microservices/"},"What are Microservices?"))))}m.isMDXComponent=!0}}]);