"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3831],{37992:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(85893),t=o(11151);const a={authors:["xiangcheng.kuo"],tags:["problem-solving","spring","spring-cloud","spring-cloud-gateway"]},i="\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u89e3\u51b3\u65b9\u6848",s={permalink:"/blog/2024/04/08/troubleshooting-and-solutions-encountered-during-the-upgrade-process-of-spring-cloud-gateway-to-version-4.1.0",source:"@site/blog/2024-04-08/troubleshooting-and-solutions-encountered-during-the-upgrade-process-of-spring-cloud-gateway-to-version-4.1.0.md",title:"\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u89e3\u51b3\u65b9\u6848",description:"\u6b64\u6587\u8bb0\u5f55\u4e86\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u4ee5\u53ca\u5bf9\u5e94\u7684\u89e3\u51b3\u65b9\u6848.",date:"2024-04-08T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"spring",permalink:"/blog/tags/spring"},{label:"spring-cloud",permalink:"/blog/tags/spring-cloud"},{label:"spring-cloud-gateway",permalink:"/blog/tags/spring-cloud-gateway"}],readingTime:1.62,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring","spring-cloud","spring-cloud-gateway"]},unlisted:!1,nextItem:{title:"\u5347\u7ea7grafana\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u4fee\u590d\u65b9\u6848",permalink:"/blog/2024/04/07/upgrading-grafana-issues-and-fixes"}},l={authorsImageUrls:[void 0]},c=[{value:"<code>spring.cloud.gateway.routes</code>\u4e2d\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\u5931\u6548, \u63d0\u793a<code>404 NOT_FOUND &quot;No static resource xxx.&quot;</code>",id:"springcloudgatewayroutes\u4e2d\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\u5931\u6548-\u63d0\u793a404-not_found-no-static-resource-xxx",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6b64\u6587\u8bb0\u5f55\u4e86\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u4ee5\u53ca\u5bf9\u5e94\u7684\u89e3\u51b3\u65b9\u6848."}),"\n",(0,r.jsxs)(n.h2,{id:"springcloudgatewayroutes\u4e2d\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\u5931\u6548-\u63d0\u793a404-not_found-no-static-resource-xxx",children:[(0,r.jsx)(n.code,{children:"spring.cloud.gateway.routes"}),"\u4e2d\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\u5931\u6548, \u63d0\u793a",(0,r.jsx)(n.code,{children:'404 NOT_FOUND "No static resource xxx."'})]}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u9879\u76ee\u4e2d\u7684\u7c7b\u7ee7\u627f\u4e86",(0,r.jsx)(n.code,{children:"org.springframework.cloud.gateway.handler.RoutePredicateHandlerMapping"}),"\n\u4f46\u662f\u65b0\u7248\u672c\u4e0d\u517c\u5bb9\u5bfc\u81f4\u7684.",(0,r.jsx)("br",{}),"\n\u5728\u65b0\u7248\u672c\u4e2d",(0,r.jsx)(n.code,{children:"RoutePredicateHandlerMapping"}),"\u7684",(0,r.jsx)(n.code,{children:"@Bean"}),"\u5b9a\u4e49\u589e\u52a0\u4e86",(0,r.jsx)(n.code,{children:"@ConditionalOnMissingBean"}),".",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5b9a\u4e49\u4f4d\u4e8e",(0,r.jsx)(n.code,{children:"org.springframework.cloud.gateway.config.GatewayAutoConfiguration"}),"\u4e2d.",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"RoutePredicateHandlerMapping"}),"\u662f",(0,r.jsx)(n.code,{children:"HandlerMapping"}),"\u7684\u5b9e\u73b0, \u5bf9\u4e8e\u6ce8\u518c\u5230\u5bb9\u5668\u4e2d\u7684",(0,r.jsx)(n.code,{children:"HandlerMapping"}),", ",(0,r.jsx)(n.code,{children:"spring-mvc-reactive"}),"\n\u4f1a\u81ea\u52a8\u8c03\u7528\u8fd9\u4e9b\u7c7b\u7684\u65b9\u6cd5\u6765\u5c1d\u8bd5\u5904\u7406\u8bf7\u6c42."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u591a\u51fa\u4e86",(0,r.jsx)(n.code,{children:"@ConditionalOnMissingBean"}),"\u8fd9\u4f1a\u5bfc\u81f4\u6846\u67b6\u5185\u7f6e\u7684\u548c\u81ea\u5b9a\u4e49\u7684",(0,r.jsx)(n.code,{children:"RoutePredicateHandlerMapping"}),"\u51fa\u73b0\u4e92\u65a5\u7684\u95ee\u9898, \u5373\u53ea\u4f1a\u88ab\u6ce8\u518c\u4e00\u6b21."]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u662f\u7531\u4e8e\u91cd\u5199\u7684\u65b9\u6cd5\u53ea\u5b9e\u73b0\u4e86\u90e8\u5206\u81ea\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219, \u4ece\u800c\u5bfc\u81f4",(0,r.jsx)(n.code,{children:"spring.cloud.gateway.routes"}),"\u4e2d\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\u5931\u6548."]}),"\n",(0,r.jsx)(n.p,{children:"3.0.2\u4e2d\u7684Bean\u5b9a\u4e49\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\n@Bean\npublic RoutePredicateHandlerMapping routePredicateHandlerMapping(FilteringWebHandler webHandler,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t RouteLocator routeLocator, GlobalCorsProperties globalCorsProperties, Environment environment) {\n\treturn new RoutePredicateHandlerMapping(webHandler, routeLocator, globalCorsProperties, environment);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.4.0\u4e2d\u7684Bean\u5b9a\u4e49\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\n@Bean\n@ConditionalOnMissingBean\npublic RoutePredicateHandlerMapping routePredicateHandlerMapping(FilteringWebHandler webHandler,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t RouteLocator routeLocator, GlobalCorsProperties globalCorsProperties, Environment environment) {\n\treturn new RoutePredicateHandlerMapping(webHandler, routeLocator, globalCorsProperties, environment);\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539\u7ee7\u627f\u7c7b\u91cd\u5199\u7684",(0,r.jsx)(n.code,{children:"protected Mono<Route> lookupRoute(ServerWebExchange exchange)"}),"\u65b9\u6cd5\u7684\u5b9e\u73b0, \u5927\u81f4\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\n@Override\nprotected Mono<Route> lookupRoute(ServerWebExchange exchange) {\n\treturn super.lookupRoute(exchange).switchIfEmpty(Mono.defer(() -> {\n\t\t\t// \u6b64\u5904\u4e3a\u81ea\u5b9a\u4e49\u7684\u8f6c\u53d1\u89c4\u5219\n\t\t}\n\t));\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var r=o(67294);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);