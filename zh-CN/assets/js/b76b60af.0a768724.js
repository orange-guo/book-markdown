"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[32141],{14697:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var c=n(791),r=n(74848),t=n(28453);const l={authors:["orange"],tags:["evans","grpc"]},o="\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",d={authorsImageUrls:[void 0]},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u670d\u52a1\u8c03\u7528",id:"\u670d\u52a1\u8c03\u7528",level:2},{value:"\u5217\u51fa<code>package</code>",id:"\u5217\u51fapackage",level:3},{value:"\u8bbe\u7f6e<code>package</code>",id:"\u8bbe\u7f6epackage",level:3},{value:"\u5217\u51fa<code>service</code>",id:"\u5217\u51faservice",level:3},{value:"\u8bbe\u7f6e<code>service</code>",id:"\u8bbe\u7f6eservice",level:3},{value:"\u8c03\u7528<code>rpc</code>",id:"\u8c03\u7528rpc",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5",(0,r.jsx)(s.code,{children:"grpc"}),"\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,\n\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u5de5\u5177",(0,r.jsx)(s.code,{children:"evans"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(s.p,{children:["\u8fdb\u5165",(0,r.jsx)(s.a,{href:"https://github.com/ktr0731/evans/releases",children:"Releases"}),"\u9875\u9762\u4e0b\u8f7d\u5bf9\u5e94\u7684\u7248\u672c, \u7136\u540e\u8fdb\u884c\u89e3\u538b. ",(0,r.jsx)("br",{}),"\n\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u4e2d\u6709\u4e00\u4e2a",(0,r.jsx)(s.code,{children:"evans"}),"\u7684\u53ef\u6267\u884c\u6587\u4ef6, \u5982\u679c\u60f3\u5728\u4efb\u610f\u4f4d\u7f6e\u90fd\u901a\u8fc7",(0,r.jsx)(s.code,{children:"evans"}),"\u6765\u8c03\u7528, \u90a3\u4e48\u9700\u8981\u505a\u4ee5\u4e0b\u64cd\u4f5c\u5217\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u79cd"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u653e\u5230",(0,r.jsx)(s.code,{children:"/usr/local/bin"}),"\u76ee\u5f55\u4e0b."]}),"\n",(0,r.jsxs)(s.li,{children:["\u5c06",(0,r.jsx)(s.code,{children:"/path/to/evans"}),"\u6dfb\u52a0\u5230",(0,r.jsx)(s.code,{children:"PATH"}),"\u73af\u5883\u53d8\u91cf\u4e2d."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"evans"}),"\u547d\u4ee4\u542f\u52a8, \u7531\u4e8e\u670d\u52a1\u8c03\u7528\u9700\u8981\u77e5\u9053\u5951\u7ea6, \u6240\u4ee5\u9700\u8981\u6307\u5b9a\u5951\u7ea6\u6587\u4ef6, \u6709\u4e24\u79cd\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u7ed9\u5b9aprotobuf\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-log",children:"evans --host <HOST> --port <PORT> --path <PROTOBUF_ROOT> --proto <PROTOBUF_FILE>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5176\u4e2d:",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.code,{children:"<PROTOBUF_ROOT>"}),"\u662fprotobuf\u6587\u4ef6\u7684\u6839\u76ee\u5f55",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.code,{children:"<PROTOBUF_FILE>"}),"\u662fprotobuf\u6587\u4ef6\u76f8\u5bf9\u4e8e",(0,r.jsx)(s.code,{children:"<PROTOBUF_ROOT>"}),"\u7684\u8def\u5f84",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f8b\u5982\u4ee5\u4e0b\u7ed9\u5b9a\u53c2\u6570:",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.code,{children:"--path /Users/kuoxiangcheng/protobuf --proto test/test.proto"}),(0,r.jsx)("br",{}),"\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d",(0,r.jsx)(s.code,{children:"test/test.proto"}),"\u662f\u5904\u4e8e",(0,r.jsx)(s.code,{children:"/Users/kuoxiangcheng/protobuf"}),"\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6.",(0,r.jsx)("br",{}),"\n\u5f53\u591a\u4e2a",(0,r.jsx)(s.code,{children:"protobuf"}),"\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u65f6, \u914d\u7f6e",(0,r.jsx)(s.code,{children:"--path"}),"\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u65b9\u5f0f, \u56e0\u4e3a\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(s.code,{children:"--path"}),"\u6765\u6307\u5b9aprotobuf\u6587\u4ef6\u7684\u6839\u76ee\u5f55"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u901a\u8fc7reflection\u65b9\u5f0f\u8fd0\u884c"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-log",children:"evans --host <HOST> --port <PORT> -r\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u5f53\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u540e, \u4f1a\u8fdb\u5165evans\u7684\u4ea4\u4e92\u5f0f\u754c\u9762, \u5185\u5bb9\u5982\u4e0b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-log",children:"\n  ______\n |  ____|\n | |__    __   __   __ _   _ __    ___\n |  __|   \\ \\ / /  / _. | | '_ \\  / __|\n | |____   \\ V /  | (_| | | | | | \\__ \\\n |______|   \\_/    \\__,_| |_| |_| |___/\n\n more expressive universal gRPC client\n\n\n192.168.16.243:27778>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u670d\u52a1\u8c03\u7528",children:"\u670d\u52a1\u8c03\u7528"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u8fdb\u5165evans\u7684\u4ea4\u4e92\u5f0f\u754c\u9762\u540e, \u540e\u7eed\u8fde\u63a5\u7279\u5b9a\u7684\u670d\u52a1, \u8c03\u7528\u7279\u5b9a\u7684\u65b9\u6cd5, \u4ee5\u53ca\u4f20\u9012\u53c2\u6570\u90fd\u662f\u901a\u8fc7\u4ea4\u4e92\u5f0f\u754c\u9762\u6765\u5b8c\u6210\u7684.",(0,r.jsx)("br",{}),"\n\u63a5\u4e0b\u6765\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\u6765\u5b8c\u6210\u670d\u52a1\u7684\u8c03\u7528"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"package"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"service"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u8c03\u7528",(0,r.jsx)(s.code,{children:"rpc"})]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"\u5217\u51fapackage",children:["\u5217\u51fa",(0,r.jsx)(s.code,{children:"package"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"show package"}),"\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684",(0,r.jsx)(s.code,{children:"package"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"show package\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e, \u4f1a\u5217\u51fa\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684\u6240\u6709",(0,r.jsx)(s.code,{children:"package"}),", \u53c2\u8003\u8f93\u51fa\u5982\u4e0b"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-log",children:"+---------------+\n|    PACKAGE    |\n+---------------+\n| nott.v1.nottd |\n| nott.v1.nottm |\n+---------------+\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"\u8bbe\u7f6epackage",children:["\u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"package"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6839\u636e\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\u9009\u62e9\u4e00\u4e2a\u7279\u5b9a\u7684",(0,r.jsx)(s.code,{children:"package"}),"\u8fdb\u884c\u8bbe\u7f6e.",(0,r.jsx)("br",{}),"\n\u4f8b\u5982: \u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"package"}),"\u4e3a",(0,r.jsx)(s.code,{children:"nott.v1.nottm"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"service nott.v1.nottm\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"\u5217\u51faservice",children:["\u5217\u51fa",(0,r.jsx)(s.code,{children:"service"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u8bbe\u7f6e\u5b8c",(0,r.jsx)(s.code,{children:"package"}),"\u540e, \u8fd8\u9700\u8981\u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"service"}),", \u901a\u8fc7",(0,r.jsx)(s.code,{children:"show service"}),"\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d",(0,r.jsx)(s.code,{children:"package"}),"\u4e0b\u7684\u6240\u6709",(0,r.jsx)(s.code,{children:"service"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"show service\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e, \u4f1a\u5217\u51fa\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684\u6240\u6709",(0,r.jsx)(s.code,{children:"service"}),", \u53c2\u8003\u8f93\u51fa\u5982\u4e0b"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-log",children:"+---------+---------------------+-----------------------+------------------------+\n| SERVICE |         RPC         |     REQUEST TYPE      |     RESPONSE TYPE      |\n+---------+---------------------+-----------------------+------------------------+\n| Nottm   | Register            | RegisterRequest       | RegisterResponse       |\n| Nottm   | ListRegisters       | ListRegistersRequest  | ListRegistersResponse  |\n| Nottm   | UpdateRegister      | UpdateRegisterRequest | UpdateRegisterResponse |\n| Nottm   | RevokeRegister      | RevokeRegisterRequest | RevokeRegisterResponse |\n| Nottm   | Push                | PushRequest           | PushResponse           |\n| Nottm   | Poll                | PollRequest           | PollResponse           |\n| Nottm   | RetrieveSentMessage | PollRequest           | PollResponse           |\n| Nottm   | QueryMessages       | QueryMessagesRequest  | QueryMessagesResponse  |\n| Nottm   | CheckState          | CheckStateRequest     | CheckStateResponse     |\n| Nottm   | QueueStatus         | QueueStatusRequest    | QueueStatusResponse    |\n| Nottm   | InspectNottd        | InspectNottdRequest   | InspectNottdResponse   |\n| Nottm   | InspectNottm        | InspectNottmRequest   | InspectNottmResponse   |\n| Nottm   | RestartNottd        | RestartNottdRequest   | RestartNottdResponse   |\n+---------+---------------------+-----------------------+------------------------+\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"\u8bbe\u7f6eservice",children:["\u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"service"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6839\u636e\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\u9009\u62e9\u4e00\u4e2a\u7279\u5b9a\u7684",(0,r.jsx)(s.code,{children:"service"}),"\u8fdb\u884c\u8bbe\u7f6e.",(0,r.jsx)("br",{}),"\n\u4f8b\u5982: \u8bbe\u7f6e",(0,r.jsx)(s.code,{children:"service"}),"\u4e3a",(0,r.jsx)(s.code,{children:"Nottm"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"service Nottm\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"\u8c03\u7528rpc",children:["\u8c03\u7528",(0,r.jsx)(s.code,{children:"rpc"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u8bbe\u7f6e\u5b8c",(0,r.jsx)(s.code,{children:"service"}),"\u540e, \u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(s.code,{children:"call <RPC>"}),"\u547d\u4ee4\u6765\u8c03\u7528",(0,r.jsx)(s.code,{children:"rpc"}),"\u65b9\u6cd5.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f8b\u5982: \u8c03\u7528",(0,r.jsx)(s.code,{children:"Register"}),"\u65b9\u6cd5"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"call Register\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u7136\u540e\u6839\u636e\u63d0\u793a\u8f93\u5165\u53c2\u6570, \u5f53\u8f93\u5165\u5b8c\u6bd5\u540e, \u4f1a\u8fd4\u56de\u8c03\u7528\u7ed3\u679c.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/ktr0731/evans",children:"evans"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://cloud.tencent.com/developer/article/1892716",children:"\u8d85\u5b9e\u7528\u7684 gRPC \u5ba2\u6237\u7aef\u8c03\u8bd5\u5de5\u5177"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var c=n(96540);const r={},t=c.createContext(r);function l(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(t.Provider,{value:s},e.children)}},791:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2023/03/25/evans","source":"@site/blog/2023-03-25-evans.md","title":"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1","description":"\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5grpc\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,","date":"2023-03-25T00:00:00.000Z","tags":[{"inline":true,"label":"evans","permalink":"/zh-CN/blog/tags/evans"},{"inline":true,"label":"grpc","permalink":"/zh-CN/blog/tags/grpc"}],"readingTime":4.49,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["evans","grpc"]},"unlisted":false,"prevItem":{"title":"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5","permalink":"/zh-CN/blog/2023/03/27/grpc-tls-handshake-failed"},"nextItem":{"title":"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3","permalink":"/zh-CN/blog/2023/03/23/transport-endpoint-is-not-connected"}}')}}]);