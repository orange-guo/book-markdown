"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[84148],{75190:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(74848),l=a(28453);const o={authors:["xiangcheng.kuo"],tags:["problem-solving","grpc","tls","aws","network-loadbalancer"]},r="grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",c={permalink:"/blog/2023/03/27/grpc-tls-handshake-failed",source:"@site/blog/2023-03-27/grpc-tls-handshake-failed.md",title:"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",description:"\u8fd1\u671f\u5728\u8bbf\u95ee\u901a\u8fc7\u516c\u7f51\u66b4\u9732\u7684grpc\u670d\u52a1\u65f6\u8fde\u63a5\u65f6\u62a5\u9519, \u5f02\u5e38\u4fe1\u606f\u5982\u4e0b",date:"2023-03-27T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"grpc",permalink:"/blog/tags/grpc"},{inline:!0,label:"tls",permalink:"/blog/tags/tls"},{inline:!0,label:"aws",permalink:"/blog/tags/aws"},{inline:!0,label:"network-loadbalancer",permalink:"/blog/tags/network-loadbalancer"}],readingTime:2.26,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","grpc","tls","aws","network-loadbalancer"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can't contact LDAP server\u65e5\u5fd7\u62a5\u9519",permalink:"/blog/2023/03/28/ldap-idle-timeout"},nextItem:{title:"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",permalink:"/blog/2023/03/25/evans"}},i={authorsImageUrls:[void 0]},d=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u8fd1\u671f\u5728\u8bbf\u95ee\u901a\u8fc7\u516c\u7f51\u66b4\u9732\u7684",(0,t.jsx)(n.code,{children:"grpc"}),"\u670d\u52a1\u65f6\u8fde\u63a5\u65f6\u62a5\u9519, \u5f02\u5e38\u4fe1\u606f\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:'Exception in thread "main" io.grpc.StatusException: UNAVAILABLE: io exception\nChannel Pipeline: [SslHandler#0, ProtocolNegotiators$ClientTlsHandler#0, WriteBufferingAndExceptionHandler#0, DefaultChannelPipeline$TailContext#0]\n\tat io.grpc.Status.asException(Status.java:554)\n\tat io.grpc.kotlin.ClientCalls$rpcImpl$1$1$1.onClose(ClientCalls.kt:296)\n\tat io.grpc.internal.ClientCallImpl.closeObserver(ClientCallImpl.java:576)\n\tat io.grpc.internal.ClientCallImpl.access$300(ClientCallImpl.java:70)\n\tat io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInternal(ClientCallImpl.java:757)\n\tat io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInContext(ClientCallImpl.java:736)\n\tat io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)\n\tat io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:133)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\n\tat java.base/java.lang.Thread.run(Thread.java:833)\nCaused by: io.netty.handler.ssl.NotSslRecordException: not an SSL/TLS record: 485454502f312e312034303320466f7262696464656e0a436f6e74656e742d547970653a20746578742f68746d6c3b20636861727365743d7574662d380a5365727665723a2041444d2f322e312e310a436f6e6e656374696f6e3a20636c6f73650a436f6e74656e742d4c656e6774683a203531320a0a3c68746d6c3e0a3c686561643e0a3c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578746d6c3b636861727365743d5554462d3822202f3e0a2020203c7374796c653e626f64797b6261636b67726f756e642d636f6c6f723a234646464646467d3c2f7374796c653e200a3c7469746c653e7a687935342d48473130302d32e99d9ee6b395e998bbe696ad3c2f7469746c653e0a20203c736372697074206c616e67756167653d226a6176617363726970742220747970653d22746578742f6a617661736372697074223e0a20202020202020202077696e646f772e6f6e6c6f6164203d2066756e6374696f6e202829207b200a2020202020202020202020646f63756d656e742e676574456c656d656e744279496428226d61696e4672616d6522292e7372633d2022687474703a2f2f3230332e39332e3137302e3231393a393038302f6572726f722e68746d6c223b200a2020202020202020202020207d0a3c2f7363726970743e2020200a3c2f686561643e0a20203c626f64793e0a2020202020203c696672616d652069643d226d61696e4672616d6522207372633d2222206672616d65626f726465723d2230222077696474683d223130302522206865696768743d2231303025223e3c2f696672616d653e0a20203c2f626f64793e0a3c2f68746d6c3e\n\tat io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1215)\n\tat io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1285)\n\tat io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:529)\n\tat io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:468)\n\tat io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)\n\tat io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)\n\tat io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)\n\tat io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n\t... 1 more\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(96540);const l={},o=t.createContext(l);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);