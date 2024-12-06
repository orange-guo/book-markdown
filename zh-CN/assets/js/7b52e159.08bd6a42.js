"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[21133],{39419:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var n=e(10520),r=e(74848),a=e(28453);const i={authors:["orange"],tags:["troubleshooting","java","protobuf","grpc"]},l="protobuf\u7f16\u8bd1\u62a5\u9519\u627e\u4e0d\u5230proto\u6587\u4ef6",s={authorsImageUrls:[void 0]},d=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function p(o){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...o.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728\u65b0\u589e",(0,r.jsx)(t.code,{children:"submodule/api-contract/protobuf/node_manager/v1/"}),"\u5230",(0,r.jsx)(t.code,{children:"srcDirs"}),"\u540e, \u7f16\u8bd1\u62a5\u9519, \u7f16\u8bd1\u8f93\u51fa\u5982\u4e0b"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:'> Task :generateProto FAILED\n\nFAILURE: Build failed with an exception.\n\n* What went wrong:\nExecution failed for task \':generateProto\'.\n> protoc: stdout: . stderr: nodemanager/v1/volume.proto: File not found.\n  nodemanager/v1/tag.proto: File not found.\n  nodemanager/v1/firewall.proto: File not found.\n  node.proto:10:1: Import "nodemanager/v1/volume.proto" was not found or had errors.\n  node.proto:11:1: Import "nodemanager/v1/tag.proto" was not found or had errors.\n  node.proto:12:1: Import "nodemanager/v1/firewall.proto" was not found or had errors.\n  node.proto:153:12: "Tag" is not defined.\n  node.proto:177:12: "VolumeSpec" is not defined.\n  node.proto:195:12: "Tag" is not defined.\n  node.proto:212:12: "Tag" is not defined.\n  node.proto:214:12: "RegisterVolumeSpec" is not defined.\n  node.proto:269:12: "Tag" is not defined.\n  node.proto:277:12: "nodemanager.v1.FirewallRule" seems to be defined in "firewall.proto", which is not imported by "node.proto".  To use it here, please add the necessary import.\n  node.proto:299:12: "Volume" is not defined.\n\n\n* Try:\n> Run with --stacktrace option to get the stack trace.\n> Run with --info or --debug option to get more log output.\n> Run with --scan to get full insights.\n\n* Get more help at https://help.gradle.org\n\nBUILD FAILED in 4s\n3 actionable tasks: 1 executed, 2 up-to-date\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,r.jsx)(t.p,{children:"\u5bf9\u4e8e\u5b58\u5728import\u7684proto\u6587\u4ef6, \u9700\u8981\u786e\u4fdd\u5176\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u8fd9\u6837\u751f\u6210\u51fa\u7684\u8def\u5f84\u624d\u662f\u6b63\u786e\u7684, \u4f46\u662f\u7531\u4e8e\u6839\u76ee\u5f55\u5e76\u4e0d\u662f\u6240\u6709\u7684\u6587\u4ef6\u90fd\u662f\u6211\u4eec\u5173\u5fc3\u7684,\n\u6211\u4eec\u9700\u8981\u53ea\u5bfc\u5165\u7279\u5b9a\u7684\u6587\u4ef6"}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(t.p,{children:["maven\u4e2d\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(t.code,{children:"<includes>"}),"\u6765\u6307\u5b9a\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6\ngradle\u4e2d\u7684\u89e3\u51b3\u65b9\u6848\u5982\u4e0b, protobuf\u7f16\u8bd1\u524d\u5c06\u539f\u59cb\u7684",(0,r.jsx)(t.code,{children:"protobuf"}),"\u6587\u4ef6\u62f7\u8d1d\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55, \u62f7\u8d1d\u7684\u65f6\u5019\u53eacopy\u7279\u5b9a\u6587\u4ef6, \u7136\u540e\u518d\u7f16\u8bd1"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'sourceSets {\n\t// make sure the protobuf files we specified are right\n\tval sourceProtobufPath = "${rootProject.rootDir}/api-contract/protobuf"\n\tval targetPath = "$buildDir/protobuf"\n\tcopy {\n\t\tfrom(sourceProtobufPath) {\n\t\t\tinclude("nott/v1/nottd/*.proto")\n\t\t\tinclude("nott/v1/nottm/*.proto")\n\t\t}\n\t\tinto(targetPath)\n\t}\n\tmain {\n\t\tproto {\n\t\t\tsrcDir(targetPath)\n\t\t}\n\t}\n\ttest {\n\t\tproto {\n\t\t\tsrcDir(targetPath)\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"https://github.com/google/protobuf-gradle-plugin/issues/405",children:[":generateProto"," fails with directory not found when importing other proto definitions"]})}),"\n"]})]})}function u(o={}){const{wrapper:t}={...(0,a.R)(),...o.components};return t?(0,r.jsx)(t,{...o,children:(0,r.jsx)(p,{...o})}):p(o)}},28453:(o,t,e)=>{e.d(t,{R:()=>i,x:()=>l});var n=e(96540);const r={},a=n.createContext(r);function i(o){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function l(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:i(o.components),n.createElement(a.Provider,{value:t},o.children)}},10520:o=>{o.exports=JSON.parse('{"permalink":"/zh-CN/blog/2022/08/22/protobuf-compilation-error-could-not-find-proto-file","source":"@site/blog/2022-08-22-protobuf-compilation-error-could-not-find-proto-file.md","title":"protobuf\u7f16\u8bd1\u62a5\u9519\u627e\u4e0d\u5230proto\u6587\u4ef6","description":"\u5728\u65b0\u589esubmodule/api-contract/protobuf/node_manager/v1/\u5230srcDirs\u540e, \u7f16\u8bd1\u62a5\u9519, \u7f16\u8bd1\u8f93\u51fa\u5982\u4e0b","date":"2022-08-22T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/zh-CN/blog/tags/troubleshooting"},{"inline":true,"label":"java","permalink":"/zh-CN/blog/tags/java"},{"inline":true,"label":"protobuf","permalink":"/zh-CN/blog/tags/protobuf"},{"inline":true,"label":"grpc","permalink":"/zh-CN/blog/tags/grpc"}],"readingTime":1.935,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","java","protobuf","grpc"]},"unlisted":false,"prevItem":{"title":"protobuf\u751f\u6210\u7684java\u4ee3\u7801\u7f16\u8bd1\u62a5\u9519\u627e\u4e0d\u5230symbol","permalink":"/zh-CN/blog/2022/09/04/protobuf-generated-java-code-compilation-error-symbol-not-found"},"nextItem":{"title":"FeignClient\u4e2dPageable\u88ab\u5f53\u4f5cbody\u4f20\u8f93","permalink":"/zh-CN/blog/2022/07/07/feignclient-pageable-treated-as-body-during-transmission"}}')}}]);