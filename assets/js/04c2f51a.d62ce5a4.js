"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5529],{71629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(74848),o=n(28453);const r={authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},i="\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",s={permalink:"/blog/2023/02/08/testcontainers-docker-registry",source:"@site/blog/2023-02-08/testcontainers-docker-registry.md",title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",description:"\u5728docker registry\u914d\u7f6e\u4e86\u8ba4\u8bc1\u540e, \u9879\u76ee\u4e2dCICD\u4e2d\u8fd0\u884c\u7684test case\u5931\u8d25, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b",date:"2023-02-08T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"testcontainers",permalink:"/blog/tags/testcontainers"},{inline:!0,label:"docker",permalink:"/blog/tags/docker"}],readingTime:.99,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},unlisted:!1,prevItem:{title:"JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",permalink:"/blog/2023/02/09/openjdk-project"},nextItem:{title:"\u901a\u8fc7\u8c03\u7528shell\u6a21\u5757\u6765\u89e3\u51b3\u65e7\u7248\u672cansible\u65e0\u6cd5\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u7684\u95ee\u9898",permalink:"/blog/2023/02/07/use-chage-command-to-set-password-never-expire"}},c={authorsImageUrls:[void 0]},l=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\u5728",(0,a.jsx)(t.code,{children:"docker registry"}),"\u914d\u7f6e\u4e86\u8ba4\u8bc1\u540e, \u9879\u76ee\u4e2d",(0,a.jsx)(t.code,{children:"CICD"}),"\u4e2d\u8fd0\u884c\u7684",(0,a.jsx)(t.code,{children:"test case"}),"\u5931\u8d25, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-log",children:'Caused by: org.testcontainers.containers.ContainerFetchException: Can\'t get Docker image: RemoteDockerImage(imageName=hub.fastonetech.com/cce/fastone-auditing:latest, imagePullPolicy=AlwaysPullPolicy(), imageNameSubstitutor=org.testcontainers.utility.ImageNameSubstitutor$LogWrappedImageNameSubstitutor@3b68a50c)\n\tat app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1371)\n\tat app//org.testcontainers.containers.GenericContainer.logger(GenericContainer.java:651)\n\tat app//org.testcontainers.containers.GenericContainer.doStart(GenericContainer.java:331)\n\t... 153 more\nCaused by: org.testcontainers.containers.ContainerFetchException: Failed to pull image: hub.fastonetech.com/cce/fastone-auditing:latest\n\tat app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:119)\n\tat app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:28)\n\tat app//org.testcontainers.utility.LazyFuture.getResolvedValue(LazyFuture.java:17)\n\tat app//org.testcontainers.utility.LazyFuture.get(LazyFuture.java:39)\n\tat app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1369)\n\t... 155 more\nCaused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}\n\n\tat app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.execute(DefaultInvocationBuilder.java:247)\n\tat app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.lambda$executeAndStream$1(DefaultInvocationBuilder.java:269)\n\tat java.base@17.0.1/java.lang.Thread.run(Thread.java:833)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,a.jsxs)(t.p,{children:["\u6839\u636e\u4e0a\u8ff0\u65e5\u5fd7\u4e2d\u7684\u5173\u952e\u4fe1\u606f\u5f97\u51fa\u7531\u4e8e",(0,a.jsx)(t.code,{children:"docker registry"}),"\u672a\u8ba4\u8bc1\u5bfc\u81f4\u8be5\u95ee\u9898\u7684\u51fa\u73b0"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-log",children:'Caused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\u6267\u884c",(0,a.jsx)(t.code,{children:"docker login"}),"\u547d\u4ee4\uff0c\u7136\u540e\u4ece",(0,a.jsx)(t.code,{children:"~/.docker/config.json"}),"\u4e2d\u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f\u4f5c\u4e3a",(0,a.jsx)(t.code,{children:"DOCKER_AUTH_CONFIG"}),"\u73af\u5883\u53d8\u91cf\u7684\u503c"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'docker login -u <username> -p <password> <registry>\nDOCKER_AUTH_CONFIG=""\nDOCKER_AUTH_CONFIG=$(cat ~/.docker/config.json)\nexport DOCKER_AUTH_CONFIG\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.testcontainers.org/supported_docker_environment/#docker-registry-authentication",children:"Docker registry authentication"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);