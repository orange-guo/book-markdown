"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[71421],{63063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var o=t(95066),r=t(74848),a=t(28453);const l={authors:["orange"],tags:["troubleshooting","java","gradle","gradle-dependency"]},i="\u5728gradle\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5176\u4ed6gradle\u516c\u5171\u5e93\u9879\u76ee\u65f6\u62a5\u9519",s={authorsImageUrls:[void 0]},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728\u522b\u7684\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5185\u90e8\u516c\u5171\u5e93\u65f6\u62a5\u9519, \u62a5\u9519\u4fe1\u606f\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",children:"FAILURE: Build failed with an exception.\n\n* What went wrong:\nExecution failed for task ':extractIncludeProto'.\n> Could not resolve all files for configuration ':compileProtoPath'.\n   > Could not resolve com.fastonetech.library:fastone-bom:1.1.0-SNAPSHOT.\n     Required by:\n         project :\n      > No matching variant of com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT:20221123.055858-93 was found. The consumer was configured to find a runtime of a platform, preferably only the resources files but:\n          - Variant 'apiElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a component, packaged as a jar:\n              - Incompatible because this component declares an API of a library and the consumer needed a runtime of a platform\n          - Variant 'runtimeElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a runtime of a component, packaged as a jar:\n              - Incompatible because this component declares a library and the consumer needed a platform\n   > Could not find com.fastonetech.library:filter-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:rpc-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:security-spring-boot-starter:.\n     Required by:\n         project :\n   > Could not find com.fastonetech.library:prometheus-querying-client:.\n     Required by:\n         project :\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:n},e.children)}},95066:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/01/19/error-importing-other-gradle-common-library-projects-using-platform","source":"@site/blog/2022-01-19-error-importing-other-gradle-common-library-projects-using-platform.md","title":"\u5728gradle\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5176\u4ed6gradle\u516c\u5171\u5e93\u9879\u76ee\u65f6\u62a5\u9519","description":"\u5728\u522b\u7684\u9879\u76ee\u4e2d\u4f7f\u7528platform\u5bfc\u5165\u5185\u90e8\u516c\u5171\u5e93\u65f6\u62a5\u9519, \u62a5\u9519\u4fe1\u606f\u5982\u4e0b:","date":"2022-01-19T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/blog/tags/troubleshooting"},{"inline":true,"label":"java","permalink":"/blog/tags/java"},{"inline":true,"label":"gradle","permalink":"/blog/tags/gradle"},{"inline":true,"label":"gradle-dependency","permalink":"/blog/tags/gradle-dependency"}],"readingTime":1.49,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","java","gradle","gradle-dependency"]},"unlisted":false,"prevItem":{"title":"spring-boot\u9879\u76ee\u4e2dyml\u914d\u7f6e\u6587\u4ef6\u5bf9duration\u914d\u7f6e\u5728\u4e0d\u7ed9\u5b9a\u5355\u4f4d\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3a\u6beb\u79d2","permalink":"/blog/2022/03/07/spring-boot-project-yaml-configuration-defaults-duration-to-milliseconds"},"nextItem":{"title":"JavaDelegate\u91cc\u8c03\u7528Service\u7684\u65b9\u6cd5\u5e76\u4e14Service\u65b9\u6cd5\u4e0a\u6709@Transactional\u6ce8\u89e3\u4f46DB\u4fee\u6539\u672a\u751f\u6548","permalink":"/blog/2021/06/15/camunda-java-delegate-transactional-service-method-db-changes-not-applied"}}')}}]);