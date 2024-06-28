"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2394],{17253:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(74848),i=o(28453);const r={authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","consul"]},c="\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException",a={permalink:"/zh-CN/blog/2022/11/24/avoiding-the-concurrent-modification-exception",source:"@site/blog/2022-11-24/avoiding-the-concurrent-modification-exception.md",title:"\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException",description:"\u5728consul\u4e2d\u4fee\u6539\u76f8\u5173\u670d\u52a1\u7684\u914d\u7f6e\u65f6\u5f15\u53d1ConcurrentModificationException\u5e76\u5bfc\u81f4\u534f\u7a0b\u4efb\u52a1\u5f02\u5e38\u9000\u51fa.",date:"2022-11-24T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{inline:!0,label:"kotlin",permalink:"/zh-CN/blog/tags/kotlin"},{inline:!0,label:"java",permalink:"/zh-CN/blog/tags/java"},{inline:!0,label:"consul",permalink:"/zh-CN/blog/tags/consul"}],readingTime:1.315,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","consul"]},unlisted:!1,prevItem:{title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",permalink:"/zh-CN/blog/2022/12/29/testcontainers-connection-reset"}},s={authorsImageUrls:[void 0]},l=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"consul"}),"\u4e2d\u4fee\u6539\u76f8\u5173\u670d\u52a1\u7684\u914d\u7f6e\u65f6\u5f15\u53d1",(0,t.jsx)(n.code,{children:"ConcurrentModificationException"}),"\u5e76\u5bfc\u81f4\u534f\u7a0b\u4efb\u52a1\u5f02\u5e38\u9000\u51fa.",(0,t.jsx)("br",{}),"\n\u76f8\u5173\u62a5\u9519\u5982\u4e0b:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"2022-11-24 10:08:27.954  INFO 1 --- [TaskScheduler-1] b.c.PropertySourceBootstrapConfiguration : Located property source: [BootstrapPropertySource {name='bootstrapProperties-config/mgmt-scheduler/'}, BootstrapPropertySource {name='bootstrapProperties-config/application/'}]\n2022-11-24 10:08:27.968  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : No active profile set, falling back to 1 default profile: \"default\"\n2022-11-24 10:08:27.979  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : Started application in 0.244 seconds (JVM running for 7930.38)\nException in thread \"DefaultDispatcher-worker-6\" java.util.ConcurrentModificationException\nat java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)\nat java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invokeSuspend(ResourceDispatcher.kt:40)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)\nat kotlinx.coroutines.intrinsics.UndispatchedKt.startUndispatchedOrReturn(Undispatched.kt:89)\nat kotlinx.coroutines.CoroutineScopeKt.coroutineScope(CoroutineScope.kt:264)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1.dispatch(ResourceDispatcher.kt:16)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:32)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:27)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1$2$1.invokeSuspend(ResourceDispatcher.kt:19)\nat kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\nat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)\nat kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)\nat kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)\nat kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:749)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)\nSuppressed: kotlinx.coroutines.DiagnosticCoroutineContextException: [StandaloneCoroutine{Cancelling}@19b8b4b6, Dispatchers.IO]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u88ab\u4fee\u6539\u7684\u914d\u7f6e\u6620\u5c04\u5230\u4e86\u4ee3\u7801\u4e2d\u88ab",(0,t.jsx)(n.code,{children:"@ConfigurationProperties"}),"\u6ce8\u89e3\u7684\u7c7b\u4e2d\u7684\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"List"}),"\u7c7b\u578b\u7684\u5c5e\u6027.",(0,t.jsx)("br",{}),"\n\u8be5\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\u6070\u597d\u534f\u7a0b\u4efb\u52a1\u6b63\u5728\u904d\u5386\u8be5\u5c5e\u6027, \u4ece\u800c\u5bfc\u81f4",(0,t.jsx)(n.code,{children:"ConcurrentModificationException"}),"\u5f02\u5e38.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u6b21\u83b7\u53d6\u8be5\u5c5e\u6027\u65f6\u90fd\u8fdb\u884c\u4e00\u6b21\u9632\u5fa1\u6027\u590d\u5236, \u4ece\u800c\u907f\u514d",(0,t.jsx)(n.code,{children:"ConcurrentModificationException"}),"\u5f02\u5e38"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.baeldung.com/java-concurrentmodificationexception",children:"Avoiding the ConcurrentModificationException in Java"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://waltyou.github.io/Effective-Java-50-Make-Defensive-Copies-When-Needed/",children:"\u300aEffective Java\u300b\u5b66\u4e60\u65e5\u5fd7\uff08\u4e03\uff0950\uff1a\u5f53\u9700\u8981\u65f6\u8fdb\u884c\u9632\u5fa1\u6027\u590d\u5236"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var t=o(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);