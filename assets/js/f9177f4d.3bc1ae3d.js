"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[31231],{2748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),l=t(28453);const s={authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring","native-image"]},r="\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",o={permalink:"/blog/2023/03/06/problem-build-native-springboot-application",source:"@site/blog/2023-03-06-problem-build-native-springboot-application.md",title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",description:"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u6784\u5efaspring-boot\u5e94\u7528\u4e3anative\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",date:"2023-03-06T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"spring-boot",permalink:"/blog/tags/spring-boot"},{inline:!0,label:"spring",permalink:"/blog/tags/spring"},{inline:!0,label:"native-image",permalink:"/blog/tags/native-image"}],readingTime:7.535,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring","native-image"]},unlisted:!1,prevItem:{title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",permalink:"/blog/2023/03/09/ssh-execution-timeout"},nextItem:{title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",permalink:"/blog/2023/03/05/problem-springboot3-upgrade"}},a={authorsImageUrls:[void 0]},c=[{value:"\u79fb\u9664<code>spring-native</code>\u4f9d\u8d56, \u56e0\u4e3a\u5df2\u88ab<code>spring-core</code>\u63d0\u4f9b\u7684<code>aot</code>\u529f\u80fd\u53d6\u4ee3",id:"\u79fb\u9664spring-native\u4f9d\u8d56-\u56e0\u4e3a\u5df2\u88abspring-core\u63d0\u4f9b\u7684aot\u529f\u80fd\u53d6\u4ee3",level:2},{value:"<code>@RegisterReflectionForBinding</code>\u65e0\u6cd5\u96c6\u6210<code>querysdl</code>\u751f\u6210\u7684<code>Q</code>\u7c7b",id:"registerreflectionforbinding\u65e0\u6cd5\u96c6\u6210querysdl\u751f\u6210\u7684q\u7c7b",level:2},{value:"\u5347\u7ea7<code>graalvm</code>\u7248\u672c",id:"\u5347\u7ea7graalvm\u7248\u672c",level:2},{value:"<code>paketo</code>\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25",id:"paketo\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3},{value:"<code>gradle</code>\u4e2d<code>native</code>\u76f8\u5173\u547d\u4ee4",id:"gradle\u4e2dnative\u76f8\u5173\u547d\u4ee4",level:4},{value:"<code>gradle</code>\u4e2d\u7684<code>BootBuildImage</code>\u914d\u7f6e\u53c2\u8003",id:"gradle\u4e2d\u7684bootbuildimage\u914d\u7f6e\u53c2\u8003",level:4},{value:"<code>binding-tool</code>\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003",id:"binding-tool\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003",level:4},{value:"\u56fa\u5b9a<code>builder</code>\u548c<code>run</code>\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684<code>builder</code>\u548c<code>run</code>\u955c\u50cf",id:"\u56fa\u5b9abuilder\u548crun\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684builder\u548crun\u955c\u50cf",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3},{value:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-2",level:3},{value:"<code>ktor</code>\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"ktor\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-3",level:3},{value:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-4",level:3},{value:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662f<code>native</code>",id:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662fnative",level:2},{value:"\u539f\u59cb\u914d\u7f6e",id:"\u539f\u59cb\u914d\u7f6e",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-5",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531<code>@ConfigurationProperty</code>\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531configurationproperty\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-6",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-6",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6<code>classpath</code>\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6classpath\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-7",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6<code>@Conditional</code>\u6ce8\u89e3\u4e0d\u751f\u6548",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6conditional\u6ce8\u89e3\u4e0d\u751f\u6548",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003-7",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-8",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u6784\u5efa",(0,i.jsx)(n.code,{children:"spring-boot"}),"\u5e94\u7528\u4e3a",(0,i.jsx)(n.code,{children:"native"}),"\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898."]}),"\n",(0,i.jsxs)(n.h2,{id:"\u79fb\u9664spring-native\u4f9d\u8d56-\u56e0\u4e3a\u5df2\u88abspring-core\u63d0\u4f9b\u7684aot\u529f\u80fd\u53d6\u4ee3",children:["\u79fb\u9664",(0,i.jsx)(n.code,{children:"spring-native"}),"\u4f9d\u8d56, \u56e0\u4e3a\u5df2\u88ab",(0,i.jsx)(n.code,{children:"spring-core"}),"\u63d0\u4f9b\u7684",(0,i.jsx)(n.code,{children:"aot"}),"\u529f\u80fd\u53d6\u4ee3"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"spring-native"}),"\u5df2\u88ab",(0,i.jsx)(n.code,{children:"spring-core"}),"\u63d0\u4f9b\u7684",(0,i.jsx)(n.code,{children:"aot"}),"\u529f\u80fd\u53d6\u4ee3, \u6240\u4ee5\u4e0d\u9700\u8981\u5f15\u5165\u8001\u7684",(0,i.jsx)(n.code,{children:"spring-native"}),"\u4f9d\u8d56.",(0,i.jsx)("br",{}),"\n\u5728github",(0,i.jsx)(n.a,{href:"https://github.com/spring-attic/spring-native",children:"spring-native"}),"\u7684\u4e3b\u9875\u4e0a\u6709\u5982\u4e0b\u8bf4\u660e"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This project is now superseded by Spring Boot 3+ official native support, see the related reference documentation for\nmore details."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65b0\u7684",(0,i.jsx)(n.code,{children:"aot"}),"\n\u529f\u80fd\u7684\u6587\u6863\u53ef\u4ee5\u53c2\u9605",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html",children:"GraalVM Native Image Support"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u5185\u90e8\u5de5\u4f5c\u539f\u7406\u4e3b\u8981\u901a\u8fc7",(0,i.jsx)(n.code,{children:"ReflectiveProcessor"}),"\u548c",(0,i.jsx)(n.code,{children:"RuntimeHintsRegistrar"}),"\u7528\u6765\u5e2e\u52a9\u751f\u6210\u53cd\u5c04\u63d0\u793a, \u5e76\u5728",(0,i.jsx)(n.code,{children:"graalvm"}),"\n\u7f16\u8bd1\u671f\u95f4\u4f7f\u7528.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.h2,{id:"registerreflectionforbinding\u65e0\u6cd5\u96c6\u6210querysdl\u751f\u6210\u7684q\u7c7b",children:[(0,i.jsx)(n.code,{children:"@RegisterReflectionForBinding"}),"\u65e0\u6cd5\u96c6\u6210",(0,i.jsx)(n.code,{children:"querysdl"}),"\u751f\u6210\u7684",(0,i.jsx)(n.code,{children:"Q"}),"\u7c7b"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e",(0,i.jsx)(n.code,{children:"querydsl"}),"\u751f\u6210\u7684Q\u7c7b\u4e0d\u80fd\u653e\u5728",(0,i.jsx)(n.code,{children:"@RegisterReflectionForBinding"}),"\u4e0a(\u56e0\u4e3a\u7f16\u8bd1\u4f18\u5148\u7ea7\u539f\u56e0),\n\u5219\u9700\u8981\u91cd\u65b0\u5b9e\u73b0",(0,i.jsx)(n.code,{children:"@RegisterReflectionForBinding"}),"\u7684\u5177\u4f53\u5b9e\u73b0\u903b\u8f91.",(0,i.jsx)("br",{}),"\n\u4e3b\u8981\u662f\u7ee7\u627f",(0,i.jsx)(n.code,{children:"ReflectiveProcessor"}),"\u5e76\u914d\u5408",(0,i.jsx)(n.code,{children:"BindingReflectionHintsRegistrar"}),".",(0,i.jsx)("br",{}),"\n\u53c2\u8003\u4ee3\u7801:",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class ReflectiveProcessorImpl : ReflectiveProcessor {\n\n\toverride fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {\n\t\tval function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)\n\t\tfunction(\n\t\t\tarrayOf(\n\t\t\t\tPage::class.java,\n\t\t\t\tResponseResult::class.java,\n\t\t\t\tSignInRequest::class.java,\n\t\t\t\tSignInResponse::class.java\n\t\t\t)\n\t\t)\n\t}\n\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u5347\u7ea7graalvm\u7248\u672c",children:["\u5347\u7ea7",(0,i.jsx)(n.code,{children:"graalvm"}),"\u7248\u672c"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528\u7684",(0,i.jsx)(n.code,{children:"graalvm"}),"\u7248\u672c\u8fc7\u4e8e\u8001, \u5219\u4f1a\u51fa\u73b0\u5982\u4e0b\u7c7b\u4f3c\u7684\u9519\u8bef"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GraalVM version 22.3 is required but 22.0 has been detected, please upgrade.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u9700\u8981\u5c06",(0,i.jsx)(n.code,{children:"graalvm"}),"\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c"]}),"\n",(0,i.jsxs)(n.h2,{id:"paketo\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25",children:[(0,i.jsx)(n.code,{children:"paketo"}),"\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"./gradlew bootBuildImage"}),"\u6784\u5efa\u955c\u50cf\u65f6, \u8f93\u51fa\u4ee5\u4e0b\u9519\u8bef"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-log",children:"unable to copy from https://github.com/bell-sw/Liberica/releases/download/17.0.5+8/bellsoft-jre17.0.5+8-linux-amd64.tar.gz to /tmp/ee56d911dd187d4965fe2d5280e17b76253eb40eb4e5c8582a17cd46ea0168b1/bellsoft-jre17.0.5+8-linux-amd64.tar.gz\n[creator]     stream error: stream ID 1; PROTOCOL_ERROR; received from peer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,i.jsx)(n.code,{children:"paketo"}),"\u7684\u8fdb\u884c\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u4f9d\u8d56, \u4f46\u662f\u8fd9\u4e9b\u4f9d\u8d56\u5728\u56fd\u5916, \u4e0b\u8f7d\u901f\u5ea6\u4f1a\u53d8\u6162, \u751a\u81f3\u4f1a\u4e0b\u8f7d\u5931\u8d25.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"binding-tool"}),"\u5de5\u5177\u751f\u6210",(0,i.jsx)(n.code,{children:"dependency-mapping"}),"\u5230",(0,i.jsx)(n.code,{children:"bindings"}),"\u5e76\u6620\u5c04\u5230",(0,i.jsx)(n.code,{children:"builder"}),"\u5bb9\u5668\u4e2d"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paketo-buildpacks/bellsoft-liberica/issues/7",children:"Override paketo-buildpacks download URIs"}),".",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dmikusa/binding-tool",children:"binding-tool"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,i.jsxs)(n.h4,{id:"gradle\u4e2dnative\u76f8\u5173\u547d\u4ee4",children:[(0,i.jsx)(n.code,{children:"gradle"}),"\u4e2d",(0,i.jsx)(n.code,{children:"native"}),"\u76f8\u5173\u547d\u4ee4"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./gradlew nativeCompile\n./gradlew bootBuildImage\n./build/native/nativeCompile/fastone-auditing\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"gradle\u4e2d\u7684bootbuildimage\u914d\u7f6e\u53c2\u8003",children:[(0,i.jsx)(n.code,{children:"gradle"}),"\u4e2d\u7684",(0,i.jsx)(n.code,{children:"BootBuildImage"}),"\u914d\u7f6e\u53c2\u8003"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.kts"',children:'tasks.withType<BootBuildImage> {\n\t// https://docs.spring.io/spring-boot/docs/3.0.0/gradle-plugin/reference/htmlsingle/#build-image.examples.caches\n\tbuildCache {\n\t\tvolume {\n\t\t\tname.set("cache-${rootProject.name}.build")\n\t\t}\n\t}\n\tlaunchCache {\n\t\tvolume {\n\t\t\tname.set("cache-${rootProject.name}.launch")\n\t\t}\n\t}\n\tpublish.set(true)\n\tdocker {\n\t\tpublishRegistry {\n\t\t\tusername.set(System.getenv("HARBOR_USERNAME"))\n\t\t\tpassword.set(System.getenv("HARBOR_PASSWORD"))\n\t\t}\n\t}\n\n\tval labels = System.getenv("LABELS")?.replace(",", " ")\n\n\t// https://github.com/paketo-buildpacks/image-labels\n\tmapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(\n\t\twhen (labels) {\n\t\t\tnull -> emptyMap()\n\t\t\telse -> mapOf("BP_IMAGE_LABELS" to labels)\n\t\t}\n\t).let { environment.set(it) }\n\tbindings.set(listOf("${project.projectDir}/bindings:/bindings"))\n\tval formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss")\n\timageName.set("hub.fastonetech.com/infra/${project.name}:${formatter.format(ZonedDateTime.now(ZoneId.of("UTC")))}")\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.developing-your-first-application.native-build-tools.gradle",children:"native-image.developing-your-first-application"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples",children:"build-image.examples"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"binding-tool\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003",children:[(0,i.jsx)(n.code,{children:"binding-tool"}),"\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./bt dm -t buildpack.toml\n./bt dm -b paketo-buildpacks/bellsoft-liberica\n./bt dm -b paketo-buildpacks/syft\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/paketo-buildpacks/bellsoft-liberica/main/buildpack.toml",children:"buildpack.toml"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u56fa\u5b9abuilder\u548crun\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684builder\u548crun\u955c\u50cf",children:["\u56fa\u5b9a",(0,i.jsx)(n.code,{children:"builder"}),"\u548c",(0,i.jsx)(n.code,{children:"run"}),"\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684",(0,i.jsx)(n.code,{children:"builder"}),"\u548c",(0,i.jsx)(n.code,{children:"run"}),"\u955c\u50cf"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f7f\u7528",(0,i.jsx)(n.code,{children:"packeto-builder"}),"\u6784\u5efa\u955c\u50cf\u65f6, \u4f1a\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684",(0,i.jsx)(n.code,{children:"paketo"}),"\u4f9d\u8d56, \u8fd9\u6837\u4f1a\u5bfc\u81f4\u81ea\u5b9a\u4e49",(0,i.jsx)(n.code,{children:"dependency-mapping"}),"\u5931\u6548,\n\u4ece\u800c\u5bfc\u81f4\u6784\u5efa\u5931\u8d25.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,i.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5c1d\u8bd5\u4e0b\u8f7d\u6700\u65b0\u7684",(0,i.jsx)(n.code,{children:"builder"}),"\u548c",(0,i.jsx)(n.code,{children:"run"}),"\u955c\u50cf, \u4f46\u662f\u8fd9\u4e9b\u955c\u50cf\u4e2d\u5305\u542b\u4e86",(0,i.jsx)(n.code,{children:"paketo"}),"\u7684\u4f9d\u8d56, \u4ece\u800c\u5bfc\u81f4\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-1",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898, \u6211\u4eec\u9700\u8981\u56fa\u5b9a",(0,i.jsx)(n.code,{children:"builder"}),"\u548c",(0,i.jsx)(n.code,{children:"run"}),"\u955c\u50cf\u7684\u7248\u672c, \u4ece\u800c\u907f\u514d\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"\u53c2\u8003\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.kts"',children:'tasks.withType<BootBuildImage> {\n\t// TO FIX THE VERSION OF BUILDER AND RUN IMAGE to avoid updating it\'s buildpack version which name is bellsoft\n\tbuilder.set("paketobuildpacks/builder@sha256:317066766dcb7f47535fe5d97b860be6aabab57da5ef056a11f9db855a73f9e8")\n\trunImage.set("paketobuildpacks/run@sha256:e9bae15ccc7e230da6ae6c6cd6eef519b10b5ec2187729f60e70c08415a330a0")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-1",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples.custom-image-builder",children:"Custom Image Builder and Run Image"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u4ee3\u7801\u662f\u56fa\u5b9a\u4e86",(0,i.jsx)(n.code,{children:"builder"}),"\u548c",(0,i.jsx)(n.code,{children:"run"}),"\u955c\u50cf\u7684\u7248\u672c, \u4ece\u800c\u907f\u514d\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",children:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u542b\u6709",(0,i.jsx)(n.code,{children:"kotlinx-coroutines"}),"\u7684",(0,i.jsx)(n.code,{children:"kotlin"}),"\u4ee3\u7801\u7f16\u8bd1\u4e3a",(0,i.jsx)(n.code,{children:"native"}),"\u65f6, \u8fd0\u884c\u540e\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-log",children:"java.lang.NoSuchMethodException: kotlin.internal.jdk8.JDK8PlatformImplementations.<init>()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-2",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"classpath"}),"\u4e0b\u7684",(0,i.jsx)(n.code,{children:"META-INF/native-image/reflect-config.json"}),"\u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\u7528\u4e8e\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n\t{\n\t\t"name": "kotlin.reflect.jvm.internal.ReflectionFactoryImpl",\n\t\t"allDeclaredConstructors": true\n\t},\n\t{\n\t\t"name": "kotlin.KotlinVersion",\n\t\t"allPublicMethods": true,\n\t\t"allDeclaredFields": true,\n\t\t"allDeclaredMethods": true,\n\t\t"allDeclaredConstructors": true\n\t},\n\t{\n\t\t"name": "kotlin.KotlinVersion[]"\n\t},\n\t{\n\t\t"name": "kotlin.KotlinVersion$Companion"\n\t},\n\t{\n\t\t"name": "kotlin.KotlinVersion$Companion[]"\n\t},\n\t{\n\t\t"name": "kotlin.internal.jdk8.JDK8PlatformImplementations",\n\t\t"allPublicMethods": true,\n\t\t"allDeclaredFields": true,\n\t\t"allDeclaredMethods": true,\n\t\t"allDeclaredConstructors": true\n\t}\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-2",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/74612654/how-to-provide-runtimehints-for-internal-classes-in-springboot3",children:"How to provide RuntimeHints for Internal Classes in SpringBoot3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-projects-experimental/spring-native/issues/1646",children:"Kotlin: Native reflection config missing kotlin.internal.jdk8.JDK8PlatformImplementations #1646"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://youtrack.jetbrains.com/issue/KT-51579",children:"PlatformImplementations loading is not compatible with graalvm native-image --no-fallback"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"ktor\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",children:[(0,i.jsx)(n.code,{children:"ktor"}),"\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u542b\u6709",(0,i.jsx)(n.code,{children:"ktor"}),"\u7684",(0,i.jsx)(n.code,{children:"kotlin"}),"\u4ee3\u7801\u7f16\u8bd1\u4e3a",(0,i.jsx)(n.code,{children:"native"}),"\u540e\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-log",children:"Caused by: java.lang.RuntimeException: java.lang.NoSuchFieldException: top\n\tat java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:205)\n\tat java.util.concurrent.atomic.AtomicLongFieldUpdater.newUpdater(AtomicLongFieldUpdater.java:95)\n\tat io.ktor.utils.io.pool.DefaultPool.<clinit>(DefaultPool.kt:97)\n\tat com.oracle.svm.core.hub.ClassInitializationInfo.invokeClassInitializer(ClassInitializationInfo.java:350)\n\tat com.oracle.svm.core.hub.ClassInitializationInfo.initialize(ClassInitializationInfo.java:270)\n\t... 39 more\nCaused by: java.lang.NoSuchFieldException: top\n\tat java.lang.Class.getDeclaredField(DynamicHub.java:2411)\n\tat java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:202)\n\t... 43 more\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-3",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["classpath\u4e0b\u7684",(0,i.jsx)(n.code,{children:"META-INF/native-image/reflect-config.json"}),"\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\u7528\u4e8e\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n\t{\n\t\t"name": "io.ktor.utils.io.pool.DefaultPool",\n\t\t"fields": [\n\t\t\t{\n\t\t\t\t"name": "top",\n\t\t\t\t"allowUnsafeAccess": true\n\t\t\t}\n\t\t]\n\t}\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-3",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/rsocket/rsocket-kotlin/issues/77",children:"GraalVM native-image support broken due to Payload #77"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",children:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u80fd\u591f\u8ba9\u53c2\u4e0e\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u80fd\u591f\u5728",(0,i.jsx)(n.code,{children:"native"}),"\u73af\u5883\u4e0b\u6b63\u5e38\u8fd0\u884c, \u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a."]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-4",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"springframework"}),"\u4e2d\u7684\u7c7b\u63d0\u4f9b\u53cd\u5c04\u63d0\u793a, \u53c2\u8003\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'class ReflectiveProcessorImpl : ReflectiveProcessor {\n\n\toverride fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {\n\t\tval function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)\n\t\tfunction(\n\t\t\tarrayOf(\n\t\t\t\tPage::class.java,\n\t\t\t\tResponseResult::class.java,\n\t\t\t\tSignInRequest::class.java,\n\t\t\t\tSignInResponse::class.java\n\t\t\t)\n\t\t)\n\t}\n\n}\n\nclass RuntimeHintsImpl : RuntimeHintsRegistrar {\n\n\toverride fun registerHints(hints: RuntimeHints, classLoader: ClassLoader?) {\n\t\t// Caused by: com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `java.util.HashSet` (no Creators, like default constructor, exist): no default no-arguments constructor found\n\t\t// at [Source: (InputStreamReader); line: 1, column: 20] (through reference chain: com.fastonetech.lib.web.ResponseResult["data"]->com.fastonetech.billing.sync.infra.client.Page["content"])\n\t\thints.reflection().registerConstructor(\n\t\t\tReflectionUtils.accessibleConstructor(java.util.HashSet::class.java),\n\t\t\tExecutableMode.INVOKE\n\t\t)\n\t}\n\n}\n\n@Reflective(ReflectiveProcessorImpl::class)\n@ImportRuntimeHints(RuntimeHintsImpl::class)\nclass BillingSyncApplication\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-4",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/aot/hint/annotation/Reflective.html",children:"Annotation Interface Reflective"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/context/annotation/ImportRuntimeHints.html",children:"Annotation Interface ImportRuntimeHints"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662fnative",children:["\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662f",(0,i.jsx)(n.code,{children:"native"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u914d\u7f6e\u4e86",(0,i.jsx)(n.code,{children:"bootBuildImage"}),"\u8fd9\u4e2a",(0,i.jsx)(n.code,{children:"task"}),"\u4e2d\u8986\u76d6\u4e86\u73af\u5883\u53d8\u91cf, \u5bfc\u81f4",(0,i.jsx)(n.code,{children:"BP_NATIVE_IMAGE"}),"\u4e3a\u7a7a"]}),"\n",(0,i.jsx)(n.h3,{id:"\u539f\u59cb\u914d\u7f6e",children:"\u539f\u59cb\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'mapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(\n\twhen (labels) {\n\t\tnull -> emptyMap()\n\t\telse -> mapOf("BP_IMAGE_LABELS" to labels)\n\t}\n).let {\n\tenvironment.set(it) // ensure BP_NATIVE_IMAGE exists, and it\'s value is true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-5",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8eenvironment.set\u4f1a\u8986\u76d6\u539f\u6709\u7684\u73af\u5883\u53d8\u91cf, \u6240\u4ee5\u9700\u8981\u663e\u5f0f\u58f0\u660e",(0,i.jsx)(n.code,{children:"BP_NATIVE_IMAGE"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'mapOf("SERVICE_BINDING_ROOT" to "/bindings", "BP_NATIVE_IMAGE" to "true").plus(\n\twhen (labels) {\n\t\tnull -> emptyMap()\n\t\telse -> mapOf("BP_IMAGE_LABELS" to labels)\n\t}\n).let {\n\tenvironment.set(it) // ensure BP_NATIVE_IMAGE exists, and it\'s value is true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-5",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",children:"5.3. Image Customizations\u4e0b\u7684environment\u9ed8\u8ba4\u503c\u4ecb\u7ecd"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531configurationproperty\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519",children:[(0,i.jsx)(n.code,{children:"aot"}),"\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531",(0,i.jsx)(n.code,{children:"@ConfigurationProperty"}),"\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519"]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-6",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e",(0,i.jsx)(n.code,{children:"ConfigurationProperties"}),"\u4e2d\u5d4c\u5957\u7684\u5bf9\u8c61\u52a0\u5165",(0,i.jsx)(n.code,{children:"@NestedConfigurationProperty"}),"\u6ce8\u89e3\u8fdb\u884c\u6807\u8bc6"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-6",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.advanced.nested-configuration-properties",children:"Nested Configuration Properties"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Reflection hints are automatically created for configuration properties by the Spring ahead-of-time engine.\nNested configuration properties which are not inner classes, however, must be annotated with\n@NestedConfigurationProperty, otherwise they won\u2019t be detected and will not be bindable."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6classpath\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519",children:[(0,i.jsx)(n.code,{children:"aot"}),"\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6",(0,i.jsx)(n.code,{children:"classpath"}),"\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519"]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-7",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"RuntimeHintsRegistrar"}),"\u7684",(0,i.jsx)(n.code,{children:"registerHints"}),"\u65b9\u6cd5\u4e2d\u6ce8\u518c\u9759\u6001\u8d44\u6e90"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'hints.resources().registerResource(ClassPathResource("ca.crt"))\nhints.resources().registerResource(ClassPathResource("client.crt"))\nhints.resources().registerResource(ClassPathResource("client.key"))\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6conditional\u6ce8\u89e3\u4e0d\u751f\u6548",children:[(0,i.jsx)(n.code,{children:"aot"}),"\u5e94\u7528\u8fd0\u884c\u65f6",(0,i.jsx)(n.code,{children:"@Conditional"}),"\u6ce8\u89e3\u4e0d\u751f\u6548"]}),"\n",(0,i.jsx)(n.p,{children:"spring-boot-native not supported @ConditionalOnProperty yet"}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-7",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-projects-experimental/spring-native/issues/1613",children:"Possibility of @ConditionalOnProperty support on spring-native"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003-8",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties.server.server.error.include-message",children:"server.error.include-message"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/exception-handling-for-rest-with-spring",children:"Error Handling for REST with Spring"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);