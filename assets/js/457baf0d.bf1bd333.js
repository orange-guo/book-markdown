"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(83117),n=(a(67294),a(3905));const l={authors:["xiangcheng.kuo"],tags:["java","curated-list"]},i="Java",o={unversionedId:"curated-list/language/java",id:"curated-list/language/java",title:"Java",description:"Project",source:"@site/docs/curated-list/language/java.md",sourceDirName:"curated-list/language",slug:"/curated-list/language/java",permalink:"/docs/curated-list/language/java",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/curated-list/language/java.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"curated-list",permalink:"/docs/tags/curated-list"}],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705632810,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{authors:["xiangcheng.kuo"],tags:["java","curated-list"]},sidebar:"curatedList",previous:{title:"Golang",permalink:"/docs/curated-list/language/golang"},next:{title:"Kotlin",permalink:"/docs/curated-list/language/kotlin"}},s={},u=[{value:"Project",id:"project",level:2},{value:"Testing",id:"testing",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Language Extension",id:"language-extension",level:3},{value:"Framework",id:"framework",level:3},{value:"Console",id:"console",level:3},{value:"Command Execution",id:"command-execution",level:3},{value:"Observation",id:"observation",level:3},{value:"Reactive",id:"reactive",level:3},{value:"Data access",id:"data-access",level:3},{value:"Curated list",id:"curated-list",level:3},{value:"Reference",id:"reference",level:2},{value:"Article",id:"article",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"java"},"Java"),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://approvaltests.com/"},"approval-tests"),(0,n.kt)("br",null),"Unit testing asserts can be difficult to use. Approval tests simplify this by taking a snapshot of the results, and confirming that they have not changed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/"},"Testcontainers"),(0,n.kt)("br",null),"Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.")),(0,n.kt)("h3",{id:"workflow"},"Workflow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://conductor.netflix.com/"},"conductor"),(0,n.kt)("br",null),"Conductor is a platform created by Netflix to orchestrate workflows that span across microservices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.flowable.com/"},"flowable"),(0,n.kt)("br",null),"A compact and highly efficient workflow and Business Process Management (BPM) platform for developers, system admins and business users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/camunda/camunda-bpm-platform"},"camunda"),(0,n.kt)("br",null),"Flexible framework for workflow and decision automation with BPMN and DMN. Integration with Spring, Spring Boot, CDI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Activiti/Activiti"},"Activiti"),(0,n.kt)("br",null),"Activiti is a light-weight workflow and Business Process Management (BPM) Platform targeted at business people, developers and system admins. Its core is a super-fast and rock-solid BPMN 2 process engine for Java. It's open-source and distributed under the Apache license. Activiti runs in any Java application, on a server, on a cluster or in the\u2026"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airflow.apache.org/"},"Airflow"),(0,n.kt)("br",null),"Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.")),(0,n.kt)("h3",{id:"language-extension"},"Language Extension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Project Lombok"),(0,n.kt)("br",null),"Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.",(0,n.kt)("br",null),"Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://manifold.systems/"},"Manifold"),(0,n.kt)("br",null),"Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator Overloading, Templates, a Preprocessor, and more.")),(0,n.kt)("h3",{id:"framework"},"Framework"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helidon.io/"},"helidon"),(0,n.kt)("br",null),"Helidon is a cloud-native, open\u2011source set of Java libraries for writing microservices that run on a fast web core powered by Netty."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://micronaut.io/"},"micronaut"),(0,n.kt)("br",null),"A MODERN, JVM-BASED, FULL-STACK FRAMEWORK FOR BUILDING MODULAR, EASILY TESTABLE MICROSERVICE AND SERVERLESS APPLICATIONS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vertx.io/"},"vert.x"),(0,n.kt)("br",null),"Eclipse Vert.x\u2122 Reactive applications on the JVM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://quarkus.io/"},"quarkus"),(0,n.kt)("br",null),"A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://javalin.io/"},"javalin"),(0,n.kt)("br",null),"A simple web framework for Java and Kotlin")),(0,n.kt)("h3",{id:"console"},"Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jline/jline3"},"jline"),(0,n.kt)("br",null),"JLine is a Java library for handling console input.")),(0,n.kt)("h3",{id:"command-execution"},"Command Execution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/commons-exec"},"commons-exec"),(0,n.kt)("br",null),"Apache Commons Exec."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeroturnaround/zt-exec"},"zt-exec"),(0,n.kt)("br",null),"ZeroTurnaround Process Executor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/mina-sshd"},"mina-sshd"),(0,n.kt)("br",null),"Apache MINA sshd is a comprehensive Java library for client- and server-side SSH."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hierynomus/sshj"},"sshj"),(0,n.kt)("br",null),"ssh, scp and sftp for java.")),(0,n.kt)("h3",{id:"observation"},"Observation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://micrometer.io/"},"micrometer"),(0,n.kt)("br",null),"Micrometer provides a simple facade over the instrumentation clients for the most popular monitoring systems, allowing you to instrument your JVM-based application code without vendor lock-in. Think SLF4J, but for metrics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"OpenTelemetry"),(0,n.kt)("br",null),"OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software\u2019s performance and behavior.")),(0,n.kt)("h3",{id:"reactive"},"Reactive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://projectreactor.io/"},"reactor"),(0,n.kt)("br",null),"Reactor is a fourth-generation reactive library, based on the Reactive Streams specification, for building non-blocking applications on the JVM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rsocket.io/"},"rsocket"),(0,n.kt)("br",null),"Application protocol providing Reactive Streams semantics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://r2dbc.io/"},"r2dbc"),(0,n.kt)("br",null),"The Reactive Relational Database Connectivity (R2DBC) project brings reactive programming APIs to relational databases.")),(0,n.kt)("h3",{id:"data-access"},"Data access"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jooq.org/"},"jOOQ"),(0,n.kt)("br",null),"jOOQ generates Java code from your database and lets you build type safe SQL queries through its fluent API.")),(0,n.kt)("h3",{id:"curated-list"},"Curated list"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akullpp/awesome-java"},"awesome-java"),(0,n.kt)("br",null),"A curated list of awesome frameworks, libraries and software for the Java programming language.")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"article"},"Article"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.baeldung.com/jvm-measuring-object-sizes"},"Measuring Object Sizes in the JVM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-kubernetes-watch"},"Using Watch with the Kubernetes API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redspider.gitbook.io/concurrent/"},"\u6df1\u5165\u6d45\u51faJava\u591a\u7ebf\u7a0b"))))}m.isMDXComponent=!0}}]);