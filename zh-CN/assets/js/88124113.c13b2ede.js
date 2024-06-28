"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[97779],{77142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(74848),o=a(28453);const c={authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},r="TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",i={permalink:"/zh-CN/blog/2022/12/29/testcontainers-connection-reset",source:"@site/blog/2022-12-29/testcontainers-connection-reset.md",title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",description:"TestContainers\u542f\u52a8\u5b8c\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",date:"2022-12-29T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{inline:!0,label:"testcontainers",permalink:"/zh-CN/blog/tags/testcontainers"},{inline:!0,label:"docker",permalink:"/zh-CN/blog/tags/docker"}],readingTime:5.605,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},unlisted:!1,prevItem:{title:"\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",permalink:"/zh-CN/blog/2023/01/30/fix-cannot-execute-update-in-a-readonly-transaction"},nextItem:{title:"\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException",permalink:"/zh-CN/blog/2022/11/24/avoiding-the-concurrent-modification-exception"}},s={authorsImageUrls:[void 0]},p=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TestContainers"}),"\u542f\u52a8\u5b8c\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:"feign.RetryableException: Connection reset executing GET http://localhost:32772/javers/api/v1/snapshots?page=0&size=1&sort=commitMetadata.id%2CDESC\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5173\u952e",(0,n.jsx)(t.code,{children:"cause"}),"\u5982\u4e0b"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:"Caused by: java.net.SocketException: Connection reset\n\tat java.base/sun.nio.ch.NioSocketImpl.implRead(NioSocketImpl.java:323)\n\tat java.base/sun.nio.ch.NioSocketImpl.read(NioSocketImpl.java:350)\n\tat java.base/sun.nio.ch.NioSocketImpl$1.read(NioSocketImpl.java:803)\n\tat java.base/java.net.Socket$SocketInputStream.read(Socket.java:966)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.streamRead(SessionInputBufferImpl.java:137)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.fillBuffer(SessionInputBufferImpl.java:153)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.readLine(SessionInputBufferImpl.java:280)\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:138)\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:56)\n\tat org.apache.http.impl.io.AbstractMessageParser.parse(AbstractMessageParser.java:259)\n\tat org.apache.http.impl.DefaultBHttpClientConnection.receiveResponseHeader(DefaultBHttpClientConnection.java:163)\n\tat org.apache.http.impl.conn.CPoolProxy.receiveResponseHeader(CPoolProxy.java:157)\n\tat org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:273)\n\tat org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:125)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:272)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat feign.httpclient.ApacheHttpClient.execute(ApacheHttpClient.java:81)\n\tat feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:121)\n\t... 101 more\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(96540);const o={},c=n.createContext(o);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);