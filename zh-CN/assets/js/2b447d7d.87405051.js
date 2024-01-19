"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1728],{39384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(85893),a=n(11151);const r={authors:["xiangcheng.kuo"],tags:["kotlin","coroutines","command-line"]},i="\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",c={permalink:"/zh-CN/blog/2023/04/05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine",source:"@site/blog/2023-04-05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine.md",title:"\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",description:"\u4e4b\u524d\u6709\u4e00\u4e2a\u670d\u52a1\u5185\u90e8\u9700\u8981\u8c03\u7528\u5916\u90e8\u7a0b\u5e8f(rclone), \u4e8e\u662f\u6211\u5199\u4e86\u4e00\u4e2a\u7c7b\u6765\u5c01\u88c5\u547d\u4ee4\u884c\u8c03\u7528, \u8be5\u7c7b\u4e3b\u8981\u662f\u57fa\u4e8ekotlinx.coroutines",date:"2023-04-05T00:00:00.000Z",formattedDate:"2023\u5e744\u67085\u65e5",tags:[{label:"kotlin",permalink:"/zh-CN/blog/tags/kotlin"},{label:"coroutines",permalink:"/zh-CN/blog/tags/coroutines"},{label:"command-line",permalink:"/zh-CN/blog/tags/command-line"}],readingTime:2.86,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["kotlin","coroutines","command-line"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",permalink:"/zh-CN/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app"},nextItem:{title:"\u4e3aDocusaurus\u4e2d\u7684Blog\u542f\u7528\u8bc4\u8bba\u529f\u80fd",permalink:"/zh-CN/blog/2023/04/04/enable-comment-in-docusaurus"}},s={authorsImageUrls:[void 0]},l=[];function u(t){const e={code:"code",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u4e4b\u524d\u6709\u4e00\u4e2a\u670d\u52a1\u5185\u90e8\u9700\u8981\u8c03\u7528\u5916\u90e8\u7a0b\u5e8f(",(0,o.jsx)(e.code,{children:"rclone"}),"), \u4e8e\u662f\u6211\u5199\u4e86\u4e00\u4e2a\u7c7b\u6765\u5c01\u88c5\u547d\u4ee4\u884c\u8c03\u7528, \u8be5\u7c7b\u4e3b\u8981\u662f\u57fa\u4e8e",(0,o.jsx)(e.code,{children:"kotlinx.coroutines"}),"\n\u6765\u5b9e\u73b0\u7684.",(0,o.jsx)("br",{}),"\n\u4ee3\u7801\u5982\u4e0b:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",metastring:'title="CommandExecutorImpl.kt"',children:'import java.io.IOException\nimport java.io.InputStream\n\nclass CommandExecutorImpl : CommandExecutor, LogCapability {\n\n\toverride suspend fun execute(options: CommandExecutionOptions) =\n\t\tcoroutineScope {\n\t\t\tval command: String = options.command.joinToString(separator = " ")\n\t\t\tlogger.info("$ {}", command)\n\t\t\tval process: Process = createProcess(options)\n\n\t\t\tval asyncReadStdOut = asyncRead(input = process.inputStream, consume = options.onNewStdoutRead)\n\t\t\tval asyncReadStderr = asyncRead(input = process.errorStream, consume = options.onNewStderrRead)\n\t\t\ttry {\n\t\t\t\twhile (process.isAlive) {\n\t\t\t\t\tdelay(500)\n\t\t\t\t}\n\t\t\t\tif (process.exitValue() != 0) {\n\t\t\t\t\tthrow IllegalStateException("Process exited with non-zero exit code")\n\t\t\t\t}\n\t\t\t} finally {\n\t\t\t\t// https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block\n\t\t\t\twithContext(NonCancellable) {\n\t\t\t\t\tprocess.destroy()\n\t\t\t\t\tasyncReadStdOut.cancelAndJoin()\n\t\t\t\t\tasyncReadStderr.cancelAndJoin()\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\tprivate suspend fun createProcess(options: CommandExecutionOptions): Process =\n\t\twithContext(Dispatchers.IO) {\n\t\t\tRuntime.getRuntime().exec(options.command.toTypedArray())\n\t\t}\n\n\tprivate fun CoroutineScope.asyncRead(input: InputStream, consume: suspend (String) -> Unit): Job =\n\t\tlaunch {\n\t\t\ttry {\n\t\t\t\tinput.bufferedReader()\n\t\t\t\t\t.lineSequence()\n\t\t\t\t\t.asFlow()\n\t\t\t\t\t.collect { line ->\n\t\t\t\t\t\tconsume(line)\n\t\t\t\t\t}\n\t\t\t} catch (ex: IOException) {\n\t\t\t\tlogger.warn("Error while reading from process", ex)\n\t\t\t\tthrow ex\n\t\t\t}\n\t\t}\n\n\tcompanion object : LogCapability\n\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u6700\u8fd1\u6211\u53d1\u73b0\u5728\u4f7f\u7528\u8be5\u7c7b\u65f6, \u6709\u65f6\u4f1a\u629b\u51fa",(0,o.jsx)(e.code,{children:"java.io.IOException: Stream closed"}),"\u5f02\u5e38",(0,o.jsx)("br",{}),"\n\u5f02\u5e38\u6808\u5982\u4e0b:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",children:"14:10:38.016 [DefaultDispatcher-worker-117] WARN com.fastonetech.billing.sync.infra.command.CommandExecutorImpl - Error while reading from process\njava.io.IOException: Stream closed\n\tat java.base/java.io.BufferedInputStream.getBufIfOpen(BufferedInputStream.java:168)\n\tat java.base/java.io.BufferedInputStream.read(BufferedInputStream.java:334)\n\tat java.base/sun.nio.cs.StreamDecoder.readBytes(StreamDecoder.java:270)\n\tat java.base/sun.nio.cs.StreamDecoder.implRead(StreamDecoder.java:313)\n\tat java.base/sun.nio.cs.StreamDecoder.read(StreamDecoder.java:188)\n\tat java.base/java.io.InputStreamReader.read(InputStreamReader.java:177)\n\tat java.base/java.io.BufferedReader.fill(BufferedReader.java:162)\n\tat java.base/java.io.BufferedReader.readLine(BufferedReader.java:329)\n\tat java.base/java.io.BufferedReader.readLine(BufferedReader.java:396)\n\tat kotlin.io.LinesSequence$iterator$1.hasNext(ReadWrite.kt:79)\n\tat kotlinx.coroutines.flow.FlowKt__BuildersKt$asFlow$$inlined$unsafeFlow$5.collect(SafeCollector.common.kt:114)\n\tat com.fastonetech.billing.sync.infra.command.CommandExecutorImpl$asyncRead$1.invokeSuspend(CommandExecutorImpl.kt:58)\n\tat kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\n\tat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)\n\tat kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)\n\tat kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:750)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)\n\tat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u4e0b\u9762\u5c06\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u539f\u56e0\u548c\u89e3\u51b3\u65b9\u6848."})]})}function d(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>i});var o=n(67294);const a={},r=o.createContext(a);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);