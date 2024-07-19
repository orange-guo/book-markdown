"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3055],{58261:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(74848),r=a(28453);const o={authors:["orange"],tags:["problem-solving","java","gradle","gradle-dependency"]},l="\u5728gradle\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5176\u4ed6gradle\u516c\u5171\u5e93\u9879\u76ee\u65f6\u62a5\u9519",i={permalink:"/blog/2022/01/19/error-importing-other-gradle-common-library-projects-using-platform",source:"@site/blog/2022-01-19-error-importing-other-gradle-common-library-projects-using-platform.md",title:"\u5728gradle\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5176\u4ed6gradle\u516c\u5171\u5e93\u9879\u76ee\u65f6\u62a5\u9519",description:"\u5728\u522b\u7684\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5185\u90e8\u516c\u5171\u5e93\u65f6\u62a5\u9519, \u62a5\u9519\u4fe1\u606f\u5982\u4e0b:",date:"2022-01-19T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"java",permalink:"/blog/tags/java"},{inline:!0,label:"gradle",permalink:"/blog/tags/gradle"},{inline:!0,label:"gradle-dependency",permalink:"/blog/tags/gradle-dependency"}],readingTime:1.49,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","java","gradle","gradle-dependency"]},unlisted:!1,prevItem:{title:"spring-boot\u9879\u76ee\u4e2dyml\u914d\u7f6e\u6587\u4ef6\u5bf9duration\u914d\u7f6e\u5728\u4e0d\u7ed9\u5b9a\u5355\u4f4d\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3a\u6beb\u79d2",permalink:"/blog/2022/03/07/spring-boot-project-yaml-configuration-defaults-duration-to-milliseconds"},nextItem:{title:"JavaDelegate\u91cc\u8c03\u7528Service\u7684\u65b9\u6cd5\u5e76\u4e14Service\u65b9\u6cd5\u4e0a\u6709@Transactional\u6ce8\u89e3\u4f46DB\u4fee\u6539\u672a\u751f\u6548",permalink:"/blog/2021/06/15/camunda-java-delegate-transactional-service-method-db-changes-not-applied"}},s={authorsImageUrls:[void 0]},c=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728\u522b\u7684\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5185\u90e8\u516c\u5171\u5e93\u65f6\u62a5\u9519, \u62a5\u9519\u4fe1\u606f\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"FAILURE: Build failed with an exception.\n\n* What went wrong:\nExecution failed for task ':extractIncludeProto'.\n> Could not resolve all files for configuration ':compileProtoPath'.\n   > Could not resolve com.fastonetech.library:fastone-bom:1.1.0-SNAPSHOT.\n     Required by:\n         project :\n      > No matching variant of com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT:20221123.055858-93 was found. The consumer was configured to find a runtime of a platform, preferably only the resources files but:\n          - Variant 'apiElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a component, packaged as a jar:\n              - Incompatible because this component declares an API of a library and the consumer needed a runtime of a platform\n          - Variant 'runtimeElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a runtime of a component, packaged as a jar:\n              - Incompatible because this component declares a library and the consumer needed a platform\n   > Could not find com.fastonetech.library:filter-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:rpc-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:security-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:prometheus-querying-client:.\n     Required by:\n         project :\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,t.jsxs)(n.p,{children:["\u516c\u5171\u5e93\u9879\u76ee\u5e94\u8be5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"org.gradle.java-platform"}),"\u63d2\u4ef6\u800c\u4e0d\u662f",(0,t.jsx)(n.code,{children:"java"}),", \u8fd9\u6837\u624d\u80fd\u4f7f\u7528",(0,t.jsx)(n.code,{children:"platform"}),"\u5bfc\u5165"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u589e\u52a0\u63d2\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'plugin("org.gradle.java-platform")\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5141\u8bb8\u8be5platform\u9879\u76ee\u53ef\u4ee5\u5bfc\u5165\u5176\u4ed6platform\u4f5c\u4e3a\u4f9d\u8d56"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"configure<JavaPlatformExtension> {\n\tallowDependencies()\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53d1\u5e03\u5230Maven\u4ed3\u5e93\u7684\u914d\u7f6e\u8981\u6ce8\u610f\u5e73\u53f0\u548clibrary\u7684\u533a\u522b"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'when (!isPlatform()) {\n\ttrue -> {\n\t\tfrom(components["java"])\n\t\tversionMapping {\n\t\t\tusage("java-api") {\n\t\t\t\tfromResolutionResult()\n\t\t\t}\n\t\t\tusage("java-runtime") {\n\t\t\t\tfromResolutionResult()\n\t\t\t}\n\t\t}\n\t}\n\n\telse -> from(components["javaPlatform"])\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gradle.org/current/userguide/java_platform_plugin.html",children:"The Java Platform Plugin"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(96540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);