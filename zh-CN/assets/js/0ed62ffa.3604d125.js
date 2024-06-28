"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[21507],{89127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(74848),r=n(28453);const a={authors:["xiangcheng.kuo"],tags:["kotlin","coroutines","command-line"]},i="\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",c={permalink:"/zh-CN/blog/2023/04/05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine",source:"@site/blog/2023-04-05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine.md",title:"\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",description:"\u4e4b\u524d\u6709\u4e00\u4e2a\u670d\u52a1\u5185\u90e8\u9700\u8981\u8c03\u7528\u5916\u90e8\u7a0b\u5e8f(rclone), \u4e8e\u662f\u6211\u5199\u4e86\u4e00\u4e2a\u7c7b\u6765\u5c01\u88c5\u547d\u4ee4\u884c\u8c03\u7528, \u8be5\u7c7b\u4e3b\u8981\u662f\u57fa\u4e8ekotlinx.coroutines",date:"2023-04-05T00:00:00.000Z",tags:[{inline:!0,label:"kotlin",permalink:"/zh-CN/blog/tags/kotlin"},{inline:!0,label:"coroutines",permalink:"/zh-CN/blog/tags/coroutines"},{inline:!0,label:"command-line",permalink:"/zh-CN/blog/tags/command-line"}],readingTime:2.86,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["kotlin","coroutines","command-line"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",permalink:"/zh-CN/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app"},nextItem:{title:"\u4e3aDocusaurus\u4e2d\u7684Blog\u542f\u7528\u8bc4\u8bba\u529f\u80fd",permalink:"/zh-CN/blog/2023/04/04/enable-comment-in-docusaurus"}},s={authorsImageUrls:[void 0]},l=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"Stream Closed\u5f02\u5e38\u6d4b\u8bd5",id:"stream-closed\u5f02\u5e38\u6d4b\u8bd5",level:3},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528<code>Process.waitFor()</code>\u65b9\u6cd5\u66ff\u4ee3<code>delay(500)</code>\u65b9\u6cd5",id:"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528processwaitfor\u65b9\u6cd5\u66ff\u4ee3delay500\u65b9\u6cd5",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u4e4b\u524d\u6709\u4e00\u4e2a\u670d\u52a1\u5185\u90e8\u9700\u8981\u8c03\u7528\u5916\u90e8\u7a0b\u5e8f(",(0,o.jsx)(t.code,{children:"rclone"}),"), \u4e8e\u662f\u6211\u5199\u4e86\u4e00\u4e2a\u7c7b\u6765\u5c01\u88c5\u547d\u4ee4\u884c\u8c03\u7528, \u8be5\u7c7b\u4e3b\u8981\u662f\u57fa\u4e8e",(0,o.jsx)(t.code,{children:"kotlinx.coroutines"}),"\n\u6765\u5b9e\u73b0\u7684.",(0,o.jsx)("br",{}),"\n\u4ee3\u7801\u5982\u4e0b:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",metastring:'title="CommandExecutorImpl.kt"',children:'import java.io.IOException\nimport java.io.InputStream\n\nclass CommandExecutorImpl : CommandExecutor, LogCapability {\n\n\toverride suspend fun execute(options: CommandExecutionOptions) =\n\t\tcoroutineScope {\n\t\t\tval command: String = options.command.joinToString(separator = " ")\n\t\t\tlogger.info("$ {}", command)\n\t\t\tval process: Process = createProcess(options)\n\n\t\t\tval asyncReadStdOut = asyncRead(input = process.inputStream, consume = options.onNewStdoutRead)\n\t\t\tval asyncReadStderr = asyncRead(input = process.errorStream, consume = options.onNewStderrRead)\n\t\t\ttry {\n\t\t\t\twhile (process.isAlive) {\n\t\t\t\t\tdelay(500)\n\t\t\t\t}\n\t\t\t\tif (process.exitValue() != 0) {\n\t\t\t\t\tthrow IllegalStateException("Process exited with non-zero exit code")\n\t\t\t\t}\n\t\t\t} finally {\n\t\t\t\t// https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block\n\t\t\t\twithContext(NonCancellable) {\n\t\t\t\t\tprocess.destroy()\n\t\t\t\t\tasyncReadStdOut.cancelAndJoin()\n\t\t\t\t\tasyncReadStderr.cancelAndJoin()\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\tprivate suspend fun createProcess(options: CommandExecutionOptions): Process =\n\t\twithContext(Dispatchers.IO) {\n\t\t\tRuntime.getRuntime().exec(options.command.toTypedArray())\n\t\t}\n\n\tprivate fun CoroutineScope.asyncRead(input: InputStream, consume: suspend (String) -> Unit): Job =\n\t\tlaunch {\n\t\t\ttry {\n\t\t\t\tinput.bufferedReader()\n\t\t\t\t\t.lineSequence()\n\t\t\t\t\t.asFlow()\n\t\t\t\t\t.collect { line ->\n\t\t\t\t\t\tconsume(line)\n\t\t\t\t\t}\n\t\t\t} catch (ex: IOException) {\n\t\t\t\tlogger.warn("Error while reading from process", ex)\n\t\t\t\tthrow ex\n\t\t\t}\n\t\t}\n\n\tcompanion object : LogCapability\n\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u6700\u8fd1\u6211\u53d1\u73b0\u5728\u4f7f\u7528\u8be5\u7c7b\u65f6, \u6709\u65f6\u4f1a\u629b\u51fa",(0,o.jsx)(t.code,{children:"java.io.IOException: Stream closed"}),"\u5f02\u5e38",(0,o.jsx)("br",{}),"\n\u5f02\u5e38\u6808\u5982\u4e0b:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-log",children:"14:10:38.016 [DefaultDispatcher-worker-117] WARN com.fastonetech.billing.sync.infra.command.CommandExecutorImpl - Error while reading from process\njava.io.IOException: Stream closed\n\tat java.base/java.io.BufferedInputStream.getBufIfOpen(BufferedInputStream.java:168)\n\tat java.base/java.io.BufferedInputStream.read(BufferedInputStream.java:334)\n\tat java.base/sun.nio.cs.StreamDecoder.readBytes(StreamDecoder.java:270)\n\tat java.base/sun.nio.cs.StreamDecoder.implRead(StreamDecoder.java:313)\n\tat java.base/sun.nio.cs.StreamDecoder.read(StreamDecoder.java:188)\n\tat java.base/java.io.InputStreamReader.read(InputStreamReader.java:177)\n\tat java.base/java.io.BufferedReader.fill(BufferedReader.java:162)\n\tat java.base/java.io.BufferedReader.readLine(BufferedReader.java:329)\n\tat java.base/java.io.BufferedReader.readLine(BufferedReader.java:396)\n\tat kotlin.io.LinesSequence$iterator$1.hasNext(ReadWrite.kt:79)\n\tat kotlinx.coroutines.flow.FlowKt__BuildersKt$asFlow$$inlined$unsafeFlow$5.collect(SafeCollector.common.kt:114)\n\tat com.fastonetech.billing.sync.infra.command.CommandExecutorImpl$asyncRead$1.invokeSuspend(CommandExecutorImpl.kt:58)\n\tat kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\n\tat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)\n\tat kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)\n\tat kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:750)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u4e0b\u9762\u5c06\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u539f\u56e0\u548c\u89e3\u51b3\u65b9\u6848."}),"\n",(0,o.jsx)(t.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u6839\u672c\u539f\u56e0\u662f",(0,o.jsx)(t.code,{children:"Process"}),"\u5bf9\u8c61\u88ab\u9500\u6bc1\u540e, \u4ecd\u7136\u5728\u8bfb\u53d6",(0,o.jsx)(t.code,{children:"Process"}),"\u7684",(0,o.jsx)(t.code,{children:"InputStream"}),"\u548c",(0,o.jsx)(t.code,{children:"ErrorStream"}),".",(0,o.jsx)("br",{}),"\n\u6709\u7684\u65f6\u5019\u547d\u4ee4\u6267\u884c\u4f1a\u6bd4\u8f83\u5feb\u8fd9\u4e2a\u65f6\u5019",(0,o.jsx)(t.code,{children:"InputStream"}),"\u548c",(0,o.jsx)(t.code,{children:"ErrorStream"}),"\u8fd8\u6ca1\u8bfb\u5b8c."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u6211\u4eec\u8c03\u7528",(0,o.jsx)(t.code,{children:"process.destroy()"}),"\u524d\u53ea\u5224\u65ad\u4e86",(0,o.jsx)(t.code,{children:"process.exitValue()"}),"\u662f\u5426\u4e3a",(0,o.jsx)(t.code,{children:"0"}),", \u6ca1\u6709\u5224\u65ad",(0,o.jsx)(t.code,{children:"InputStream"}),"\u548c",(0,o.jsx)(t.code,{children:"ErrorStream"}),"\u662f\u5426\u8bfb\u5b8c.",(0,o.jsx)("br",{}),"\n\u8fd9\u4f1a\u5bfc\u81f4\u9500\u6bc1",(0,o.jsx)(t.code,{children:"Process"}),"\u5bf9\u8c61\u5e76\u5bfc\u81f4",(0,o.jsx)(t.code,{children:"InputStream"}),"\u548c",(0,o.jsx)(t.code,{children:"ErrorStream"}),"\u88ab\u5173\u95ed\u4ece\u800c\u629b\u51fa",(0,o.jsx)(t.code,{children:"Stream Closed"}),"\u5f02\u5e38.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u5728",(0,o.jsx)(t.code,{children:"finally"}),"\u5757\u4e2d\u7b49\u5f85",(0,o.jsx)(t.code,{children:"InputStream"}),"\u548c",(0,o.jsx)(t.code,{children:"ErrorStream"}),"\u7684\u8bfb\u53d6\u64cd\u4f5c\u5b8c\u6210\u540e\u518d\u9500\u6bc1",(0,o.jsx)(t.code,{children:"Process"}),"\u5bf9\u8c61."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"while (asyncReadStdOut.isActive || asyncReadStderr.isActive || process.isAlive) {\n\tdelay(500)\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,o.jsx)(t.h3,{id:"stream-closed\u5f02\u5e38\u6d4b\u8bd5",children:"Stream Closed\u5f02\u5e38\u6d4b\u8bd5"}),"\n",(0,o.jsxs)(t.p,{children:["\u4e0b\u9762\u7684\u4ee3\u7801\u662f\u7528\u6765\u590d\u73b0",(0,o.jsx)(t.code,{children:"Stream Closed"}),"\u5f02\u5e38\u7684\u6d4b\u8bd5\u4ee3\u7801:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'runBlocking {\n\tval executor = CommandExecutorImpl()\n\t(1..1000).map {\n\t\tCoroutineScope(Dispatchers.IO).async {\n\t\t\texecutor.execute(\n\t\t\t\toptions = CommandExecutionOptions(\n\t\t\t\t\tcommand = listOf("echo", "1")\n\t\t\t\t)\n\t\t\t)\n\t\t}\n\t}.awaitAll()\n}\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528processwaitfor\u65b9\u6cd5\u66ff\u4ee3delay500\u65b9\u6cd5",children:["\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528",(0,o.jsx)(t.code,{children:"Process.waitFor()"}),"\u65b9\u6cd5\u66ff\u4ee3",(0,o.jsx)(t.code,{children:"delay(500)"}),"\u65b9\u6cd5"]}),"\n",(0,o.jsxs)(t.p,{children:["\u56e0\u4e3a",(0,o.jsx)(t.code,{children:"waitFor"}),"\u65b9\u6cd5\u6bd4\u8f83\u91cd\u91cf\u7ea7\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b, \u800c\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848\u662f\u534f\u7a0b\u76ee\u7684\u662f\u4e3a\u4e86\u4e0d\u963b\u585e\u5f53\u524d\u7ebf\u7a0b, \u6240\u4ee5\u624d\u4f1a\u91c7\u7528",(0,o.jsx)(t.code,{children:"delay"}),"\u65b9\u6cd5."]}),"\n",(0,o.jsx)(t.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://kotlinlang.org/docs/coroutines-guide.html",children:"Coroutines guide"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block",children:"Run non-cancellable block"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);