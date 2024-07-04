"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[78446],{41683:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(74848),o=r(28453);const t={},i="Microservices(\u5fae\u670d\u52a1)",c={id:"software-engineering/development/methodologies/microservices",title:"Microservices(\u5fae\u670d\u52a1)",description:"\u7b80\u4ecb",source:"@site/docs/software-engineering/development/methodologies/microservices.md",sourceDirName:"software-engineering/development/methodologies",slug:"/software-engineering/development/methodologies/microservices",permalink:"/docs/software-engineering/development/methodologies/microservices",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/development/methodologies/microservices.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:17200825e5,frontMatter:{},sidebar:"softwareEngineering",previous:{title:"Infrastructure as Code(IaC)",permalink:"/docs/software-engineering/development/methodologies/infrastructure-as-code"},next:{title:"Software versioning(\u8f6f\u4ef6\u7248\u672c\u63a7\u5236)",permalink:"/docs/software-engineering/development/methodologies/software-versioning"}},a={},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"microservices\u5fae\u670d\u52a1",children:"Microservices(\u5fae\u670d\u52a1)"}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["\u5fae\u670d\u52a1\u662f\u4e00\u79cd\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\uff0c\u5b83\u5c06\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u4e00\u7ec4\u5c0f\u578b\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,s.jsx)("br",{}),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,s.jsx)("br",{}),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,s.jsx)("br",{}),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,s.jsx)("br",{}),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002",(0,s.jsx)("br",{}),"\n\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u72ec\u7acb\u4e8e\u5176\u4ed6\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u6269\u5c55\u3002",(0,s.jsx)("br",{}),"\n\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c \u5b83\u5177\u6709\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u6570\u636e\u5b58\u50a8\u3002",(0,s.jsx)("br",{}),"\n\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684RESTful API\u3002",(0,s.jsx)("br",{}),"\n\u5fae\u670d\u52a1\u67b6\u6784\u7684\u76ee\u6807\u662f\u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u5206\u89e3\u4e3a\u4e00\u7ec4\u677e\u6563\u8026\u5408\u7684\u670d\u52a1\u6765\u7b80\u5316\u5f00\u53d1\u548c\u90e8\u7f72\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://microservices.io/",children:"What are microservices?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://aws.amazon.com/microservices/",children:"What are Microservices?"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(96540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);