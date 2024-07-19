"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[98617],{18324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(74848),i=n(28453);const o={authors:["orange"],tags:["problem-solving","testcontainers","docker"]},r="TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",s={permalink:"/blog/2022/12/29/testcontainers-connection-reset",source:"@site/blog/2022-12-29-testcontainers-connection-reset.md",title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",description:"TestContainers\u542f\u52a8\u5b8c\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",date:"2022-12-29T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"testcontainers",permalink:"/blog/tags/testcontainers"},{inline:!0,label:"docker",permalink:"/blog/tags/docker"}],readingTime:5.605,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","testcontainers","docker"]},unlisted:!1,prevItem:{title:"\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",permalink:"/blog/2023/01/30/fix-cannot-execute-update-in-a-readonly-transaction"},nextItem:{title:"Spring Boot\u9879\u76ee\u542f\u7528native\u6784\u5efa\u540e\u7531\u4e8e\u5e8f\u5217\u5316\u5bf9\u8c61\u7f3a\u5c11ReflectionHints\u5bfc\u81f4json\u6570\u636e\u4e3a'{}'",permalink:"/blog/2022/11/29/spring-boot-native-build-serialization-missing-reflectionhints-empty-json-data"}},c={authorsImageUrls:[void 0]},l=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TestContainers"}),"\u542f\u52a8\u5b8c\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-log",children:"feign.RetryableException: Connection reset executing GET http://localhost:32772/javers/api/v1/snapshots?page=0&size=1&sort=commitMetadata.id%2CDESC\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u5173\u952e",(0,a.jsx)(t.code,{children:"cause"}),"\u5982\u4e0b"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-log",children:"Caused by: java.net.SocketException: Connection reset\n\tat java.base/sun.nio.ch.NioSocketImpl.implRead(NioSocketImpl.java:323)\n\tat java.base/sun.nio.ch.NioSocketImpl.read(NioSocketImpl.java:350)\n\tat java.base/sun.nio.ch.NioSocketImpl$1.read(NioSocketImpl.java:803)\n\tat java.base/java.net.Socket$SocketInputStream.read(Socket.java:966)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.streamRead(SessionInputBufferImpl.java:137)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.fillBuffer(SessionInputBufferImpl.java:153)\n\tat org.apache.http.impl.io.SessionInputBufferImpl.readLine(SessionInputBufferImpl.java:280)\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:138)\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:56)\n\tat org.apache.http.impl.io.AbstractMessageParser.parse(AbstractMessageParser.java:259)\n\tat org.apache.http.impl.DefaultBHttpClientConnection.receiveResponseHeader(DefaultBHttpClientConnection.java:163)\n\tat org.apache.http.impl.conn.CPoolProxy.receiveResponseHeader(CPoolProxy.java:157)\n\tat org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:273)\n\tat org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:125)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:272)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat feign.httpclient.ApacheHttpClient.execute(ApacheHttpClient.java:81)\n\tat feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:121)\n\t... 101 more\n"})}),"\n",(0,a.jsx)(t.h3,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,a.jsxs)(t.p,{children:["\u901a\u8fc7\u65e5\u5fd7\u53d1\u73b0\u62a5\u9519\u7684\u65f6\u95f4\u6bd4\u670d\u52a1\u542f\u52a8\u6210\u529f\u7684\u65f6\u95f4\u8981\u65e9, \u8bf4\u660e\u670d\u52a1\u8fd8\u6ca1\u6709\u8fbe\u5230\u53ef\u4ee5\u63a5\u53d7\u8bf7\u6c42\u7684\u72b6\u6001",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.code,{children:"TestContainers"}),"\u5224\u65ad\u5bb9\u5668\u662f\u5426\u542f\u52a8\u6210\u529f\u662f\u6839\u636e",(0,a.jsx)(t.code,{children:"WaitStrategy"}),"\u6765\u5224\u65ad\u7684, \u4ee3\u7801\u5982\u4e0b",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class GenericContainer<SELF extends GenericContainer<SELF>>\n\t\textends FailureDetectingExternalResource\n\t\timplements Container<SELF>, AutoCloseable, WaitStrategyTarget, Startable {\n\n\t@NonNull\n\tprotected org.testcontainers.containers.wait.strategy.WaitStrategy waitStrategy = Wait.defaultWaitStrategy();\n\n}\n\npublic class Wait {\n\n\t/**\n\t * Convenience method to return the default WaitStrategy.\n\t *\n\t * @return a WaitStrategy\n\t */\n\tpublic static WaitStrategy defaultWaitStrategy() {\n\t\treturn forListeningPort();\n\t}\n\n\t/**\n\t * Convenience method to return a WaitStrategy for an exposed or mapped port.\n\t *\n\t * @return the WaitStrategy\n\t * @see HostPortWaitStrategy\n\t */\n\tpublic static HostPortWaitStrategy forListeningPort() {\n\t\treturn new HostPortWaitStrategy();\n\t}\n\n}\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u9ed8\u8ba4\u7684",(0,a.jsx)(t.code,{children:"WaitStrategy"}),"\u662f",(0,a.jsx)(t.code,{children:"HostPortWaitStrategy"}),", \u8fd9\u79cd\u65b9\u5f0f\u6709\u4ee5\u4e0b\u95ee\u9898"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u7aef\u53e3\u88ab\u76d1\u542c\u5e76\u4e0d\u4e00\u5b9a\u8bf4\u660e\u670d\u52a1\u8fdb\u5165\u4e86\u53ef\u4ee5\u53ef\u4ee5\u63a5\u53d7\u8bf7\u6c42\u7684\u72b6\u6001"}),"\n",(0,a.jsxs)(t.li,{children:["\u5728",(0,a.jsx)(t.code,{children:"springboot"}),"\u4e2d",(0,a.jsx)(t.code,{children:"tomcat"}),"\u5f00\u59cb\u76d1\u542c\u7aef\u53e3\u4e4b\u540e\u8fd8\u6709\u522b\u7684\u4e8b\u60c5\u8981\u505a"]}),"\n",(0,a.jsx)(t.li,{children:"\u53ea\u6709\u670d\u52a1\u771f\u6b63\u53ef\u4ee5\u63a5\u53e3\u8bf7\u6c42\u624d\u8bf4\u660e\u5bb9\u5668\u542f\u52a8\u6210\u529f"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"\u5bb9\u5668\u65e5\u5fd7\u5982\u4e0b"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-log",children:"Setting Active Processor Count to 16\nCalculating JVM memory based on 2844780K available memory\nFor more information on this calculation, see https://paketo.io/docs/reference/java-reference/#memory-calculator\nCalculated JVM Memory Configuration: -XX:MaxDirectMemorySize=10M -Xmx2427024K -XX:MaxMetaspaceSize=110555K -XX:ReservedCodeCacheSize=240M -Xss1M (Total Memory: 2844780K, Thread Count: 50, Loaded Class Count: 17105, Headroom: 0%)\nEnabling Java Native Memory Tracking\nAdding 124 container CA certificates to JVM truststore\nSpring Cloud Bindings Enabled\nPicked up JAVA_TOOL_OPTIONS: -Djava.security.properties=/layers/paketo-buildpacks_bellsoft-liberica/java-security-properties/java-security.properties -XX:+ExitOnOutOfMemoryError -XX:ActiveProcessorCount=16 -XX:MaxDirectMemorySize=10M -Xmx2427024K -XX:MaxMetaspaceSize=110555K -XX:ReservedCodeCacheSize=240M -Xss1M -XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=summary -XX:+PrintNMTStatistics -Dorg.springframework.cloud.bindings.boot.enable=true\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v3.0.0)\n\n2022-12-29T12:55:59.290Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Starting FastoneAuditingApplicationKt using Java 17.0.5 with PID 1 (/workspace/BOOT-INF/classes started by cnb in /workspace)\n2022-12-29T12:55:59.295Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : No active profile set, falling back to 1 default profile: \"default\"\n2022-12-29T12:56:00.102Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.\n2022-12-29T12:56:00.158Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 47 ms. Found 4 JPA repository interfaces.\n2022-12-29T12:56:00.479Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 6666 (http)\n2022-12-29T12:56:00.490Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2022-12-29T12:56:00.491Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]\n2022-12-29T12:56:00.547Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2022-12-29T12:56:00.548Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1160 ms\n2022-12-29T12:56:00.654Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : Flyway Community Edition 9.5.1 by Redgate\n2022-12-29T12:56:00.654Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : See what's new here: https://flywaydb.org/documentation/learnmore/releaseNotes#9.5.1\n2022-12-29T12:56:00.655Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : \n2022-12-29T12:56:00.664Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...\n2022-12-29T12:56:00.760Z  INFO 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@4cffcc61\n2022-12-29T12:56:00.762Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.\n2022-12-29T12:56:00.776Z  INFO 1 --- [           main] o.f.c.i.database.base.BaseDatabaseType   : Database: jdbc:postgresql://tc-mGu8Gk79/auditing (PostgreSQL 12.10)\n2022-12-29T12:56:00.795Z  INFO 1 --- [           main] o.f.core.internal.command.DbValidate     : Successfully validated 1 migration (execution time 00:00.008s)\n2022-12-29T12:56:00.803Z  INFO 1 --- [           main] o.f.c.i.s.JdbcTableSchemaHistory         : Creating Schema History table \"public\".\"flyway_schema_history\" ...\n2022-12-29T12:56:00.825Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Current version of schema \"public\": << Empty Schema >>\n2022-12-29T12:56:00.832Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Migrating schema \"public\" to version \"1 - Init\"\n2022-12-29T12:56:00.849Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Successfully applied 1 migration to schema \"public\", now at version v1 (execution time 00:00.027s)\n2022-12-29T12:56:00.903Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]\n2022-12-29T12:56:00.926Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final\n2022-12-29T12:56:01.010Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead\n2022-12-29T12:56:01.085Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.PostgreSQLDialect\n2022-12-29T12:56:01.428Z  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]\n2022-12-29T12:56:01.432Z  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'\n2022-12-29T12:56:02.256Z  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning\n2022-12-29T12:56:02.533Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 6666 (http) with context path ''\n2022-12-29T12:56:02.547Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Started FastoneAuditingApplicationKt in 3.642 seconds (process running for 3.961)\n2022-12-29T12:56:03.536Z  INFO 1 --- [nio-6666-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2022-12-29T12:56:03.537Z  INFO 1 --- [nio-6666-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'\n2022-12-29T12:56:03.538Z  INFO 1 --- [nio-6666-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["2022-12-29T12:56:00.479Z INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized\nwith port(s): 6666 (http)",(0,a.jsx)("br",{}),"\n2022-12-29T12:56:02.547Z INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Started\nFastoneAuditingApplicationKt in 3.642 seconds (process running for 3.961)",(0,a.jsx)("br",{}),"\n\u901a\u5e38\u5728\u8fd9\u4e24\u4e2a\u9636\u6bb5\u4e2d\u95f4\u8fd8\u6709\u522b\u7684\u4e8b\u60c5\u4f1a\u505a, \u5982\u679c\u51fa\u73b0\u6bd4\u8f83\u6781\u7aef\u7684\u60c5\u51b5\u4f8b\u5982\u670d\u52a1\u7ec4\u4ef6\u8fc7\u591a,\u6216\u8005\u673a\u5668\u8d44\u6e90\u4e0d\u8db3,\n\u90a3\u4e48\u8fd9\u4e24\u4e2a\u9636\u6bb5\u4e2d\u95f4\u4f1a\u6709\u6bd4\u8f83\u5927\u7684\u65f6\u95f4\u5dee\u8ddd",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,a.jsxs)(t.p,{children:["\u914d\u7f6e",(0,a.jsx)(t.code,{children:"WaitStrategy"}),"\u4e3a",(0,a.jsx)(t.code,{children:"HttpWaitStrategy"}),", \u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'val server = GenericContainer("hub.fastonetech.com/infra/fastone-auditing:20221223-032350").apply {\n\twithImagePullPolicy(PullPolicy.alwaysPull())\n\twithNetwork(network)\n\twithEnv(\n\t\tmapOf(\n\t\t\t"SERVER_TOMCAT_CONNECTIONTIMEOUT" to "60s",\n\t\t\t"SERVER_PORT" to "6666",\n\t\t\t"SPRING_DATASOURCE_URL" to "jdbc:postgresql://${postgres.networkAliases.first()}/auditing"\n\t\t)\n\t)\n\twithExposedPorts(6666)\n\tdependsOn(postgres)\n\twaitingFor(Wait.forHttp("/javers/api/v1/snapshots")) // We need to wait for the container to be able to respond to the request\n\tstart()\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.tabnine.com/code/java/classes/org.testcontainers.containers.wait.HttpWaitStrategy",children:"HttpWaitStrategy"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);