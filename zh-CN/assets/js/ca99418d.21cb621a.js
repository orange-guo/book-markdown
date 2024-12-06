"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[87568],{20753:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var r=t(46977),n=t(74848),a=t(28453);const i={authors:["orange"],tags:["troubleshooting","java","protobuf","grpc"]},s="grpc\u670d\u52a1protobuf\u7f16\u8bd1\u62a5\u9519Tried to write the same file twice.",c={authorsImageUrls:[void 0]},l=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function p(e){const o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"\u65b0\u589equota_usage.proto\u6587\u4ef6\u540e\u7f16\u8bd1\u5931\u8d25, \u8f93\u51fa\u4ee5\u4e0b\u9519\u8bef"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'[ERROR] PROTOC FAILED: com/fastonetech/contract/computecloud/deploy/v2/QuotaUsage.java: Tried to write the same file twice.\n[libprotobuf WARNING ../../../../../src/google/protobuf/compiler/java/java_file.cc:232] cmdb/v1/cmdb.proto: The file\'s outer class name, "Cmdb", matches the name of one of the types declared inside it when case is ignored. This can cause compilation issues on Windows / MacOS. Please either rename the type or use the java_outer_classname option to specify a different outer class name for the .proto file to be safe.\n'})}),"\n",(0,n.jsx)(o.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,n.jsxs)(o.p,{children:["\u7f16\u8bd1\u540e\u7684",(0,n.jsx)(o.code,{children:"java class"}),"\u51b2\u7a81"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"protoc"}),"\u7f16\u8bd1\u65f6\u4f1a\u4e00\u5e76\u5c06",(0,n.jsx)(o.code,{children:"proto"}),"\u6587\u4ef6\u7f16\u8bd1\u4e3aclass\u6587\u4ef6",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(o.code,{children:"quota_usage.proto"}),"\u6587\u4ef6\u6700\u7ec8\u4f1a\u88ab\u7f16\u8bd1\u4e3a",(0,n.jsx)(o.code,{children:"QuotaUsage.class"}),", \u4e0e",(0,n.jsx)(o.code,{children:"license.proto"}),"\u4e2d\u7684",(0,n.jsx)(o.code,{children:"message QuotaUsage"}),"\u8f93\u51fa\u4e86\u76f8\u540c\u7684",(0,n.jsx)(o.code,{children:"class"}),"\u540d\u79f0"]}),"\n",(0,n.jsx)(o.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"\u4fee\u6539protobuf\u540d\u79f0"}),"\n",(0,n.jsxs)(o.li,{children:["\u4e3aprotobuf\u6587\u4ef6\u589e\u52a0",(0,n.jsx)(o.code,{children:"java_outer_classname"}),"\u53c2\u6570",(0,n.jsx)(o.code,{children:"option java_outer_classname = newName"})]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,n.jsxs)(o.p,{children:["\u7531\u4e8e\u6211\u4eec\u6240\u6709\u7684proto\u6587\u4ef6\u5185\u90e8\u90fd\u589e\u52a0\u4e86",(0,n.jsx)(o.code,{children:"option java_multiple_files = true;"}),"\n\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u5c06\u4e00\u4e2aproto\u7f16\u8bd1\u540e\u7684class\u6587\u4ef6\u7531\u4e00\u4e2a\u53d8\u4e3a\u591a\u4e2a\n\u540e\u679c\u5219\u662f\u7531\u4e8e\u5728\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u5185\u968f\u7740\u5b9a\u4e49\u8d8a\u6765\u8d8a\u591a\u90a3\u4e48\u91cd\u590d\u7684\u6982\u7387\u4e5f\u4f1a\u52a0\u5927"]})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>s});var r=t(96540);const n={},a=r.createContext(n);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:o},e.children)}},46977:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2022/10/11/grpc-service-protobuf-compilation-error-tried-to-write-the-same-file-twice","source":"@site/blog/2022-10-11-grpc-service-protobuf-compilation-error-tried-to-write-the-same-file-twice.md","title":"grpc\u670d\u52a1protobuf\u7f16\u8bd1\u62a5\u9519Tried to write the same file twice.","description":"\u65b0\u589equota_usage.proto\u6587\u4ef6\u540e\u7f16\u8bd1\u5931\u8d25, \u8f93\u51fa\u4ee5\u4e0b\u9519\u8bef","date":"2022-10-11T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/zh-CN/blog/tags/troubleshooting"},{"inline":true,"label":"java","permalink":"/zh-CN/blog/tags/java"},{"inline":true,"label":"protobuf","permalink":"/zh-CN/blog/tags/protobuf"},{"inline":true,"label":"grpc","permalink":"/zh-CN/blog/tags/grpc"}],"readingTime":1.22,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","java","protobuf","grpc"]},"unlisted":false,"prevItem":{"title":"\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException","permalink":"/zh-CN/blog/2022/11/24/avoiding-the-concurrent-modification-exception"},"nextItem":{"title":"protobuf\u751f\u6210\u7684java\u4ee3\u7801\u7f16\u8bd1\u62a5\u9519\u627e\u4e0d\u5230symbol","permalink":"/zh-CN/blog/2022/09/04/protobuf-generated-java-code-compilation-error-symbol-not-found"}}')}}]);