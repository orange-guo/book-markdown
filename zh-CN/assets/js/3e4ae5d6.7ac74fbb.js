"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[283],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,i(i({ref:e},p),{},{components:n})):a.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6696:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const l={},i="Kotlin",o={unversionedId:"curated-list/language/kotlin",id:"curated-list/language/kotlin",title:"Kotlin",description:"- kotlin.link",source:"@site/docs/curated-list/language/kotlin.md",sourceDirName:"curated-list/language",slug:"/curated-list/language/kotlin",permalink:"/zh-CN/docs/curated-list/language/kotlin",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/curated-list/language/kotlin.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705633047,formattedLastUpdatedAt:"2024\u5e741\u670819\u65e5",frontMatter:{},sidebar:"curatedList",previous:{title:"Java",permalink:"/zh-CN/docs/curated-list/language/java"},next:{title:"Language",permalink:"/zh-CN/docs/curated-list/language/languages"}},u={},s=[{value:"Samples",id:"samples",level:2},{value:"Web",id:"web",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Utility",id:"utility",level:2},{value:"Test",id:"test",level:2},{value:"Logging",id:"logging",level:2},{value:"Database",id:"database",level:2},{value:"Command line",id:"command-line",level:2},{value:"Articles",id:"articles",level:2}],p={toc:s},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kotlin"},"Kotlin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kotlin.link/"},"kotlin.link")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KotlinBy/awesome-kotlin"},"awesome-kotlin"),(0,r.kt)("br",null),"A curated list of awesome Kotlin related stuff Inspired by awesome-java."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/arrow-kt/arrow"},"arrow"),(0,r.kt)("br",null),"\u039brrow - Functional companion to Kotlin's Standard Library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines"},"kotlinx.coroutines"),(0,r.kt)("br",null),"Library support for Kotlin coroutines")),(0,r.kt)("h2",{id:"samples"},"Samples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nomisRev/ktor-arrow-example"},"ktor-arrow-example"),(0,r.kt)("br",null),'Real World implementation - "The mother of all demo apps". Written in Kotlin, with Ktor, Arrow, SqlDelight, KotlinX Serialization, etc.')),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ktor.io/"},"ktor"),(0,r.kt)("br",null),"Create asynchronous client and server applications. Anything from microservices to multiplatform HTTP client apps in a simple way. Open Source, free, and fun!")),(0,r.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/InsertKoinIO/koin"},"koin"),(0,r.kt)("br",null),"Koin - a pragmatic lightweight dependency injection framework for Kotlin & Kotlin Multiplatform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kosi-libs.org/"},"Kodein"),(0,r.kt)("br",null),"Painless Kotlin Dependency Injection")),(0,r.kt)("h2",{id:"utility"},"Utility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/renatoathaydes/kunion"},"kunion"),(0,r.kt)("br",null),"Union types for Kotlin")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kotest.io/"},"kotest"),(0,r.kt)("br",null),"Kotest is a flexible and elegant multi-platform test framework for Kotlin with extensive assertions and integrated property testing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mockk.io/"},"mockk"),(0,r.kt)("br",null),"mocking library for Kotlin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mockito/mockito-kotlin"},"mockito-kotlin"),(0,r.kt)("br",null),"sing Mockito with Kotlin")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oshai/kotlin-logging"},"kotlin-logging"),(0,r.kt)("br",null),"Lightweight Multiplatform logging framework for Kotlin. A convenient and performant logging facade.")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ctripcorp/SQLlin"},"SQLlin"),(0,r.kt)("br",null),"A DSL SQLite library for Kotlin Multiplatform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ktorm.org/"},"ktorm"),(0,r.kt)("br",null),"Ktorm is a lightweight and efficient ORM Framework for Kotlin directly based on pure JDBC. It provides strong-typed and flexible SQL DSL and convenient sequence APIs to reduce our duplicated effort on database operations. All the SQL statements, of course, are generated automatically."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/Exposed"},"exposed"),(0,r.kt)("br",null),"Kotlin SQL Framework"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cashapp.github.io/sqldelightSQLDelight"},"sqldelight"),(0,r.kt)("br",null),"SQLDelight generates typesafe kotlin APIs from your SQL statements. It verifies your schema, statements, and migrations at compile-time and provides IDE features like autocomplete and refactoring which make writing and maintaining SQL simple")),(0,r.kt)("h2",{id:"command-line"},"Command line"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ajalt/clikt"},"clikt"),(0,r.kt)("br",null),"Multiplatform command line interface parsing for Kotlin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx-cli"},"kotlinx-cli"),(0,r.kt)("br",null),"Pure Kotlin implementation of a generic CLI parser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xenomachina/kotlin-argparser"},"kotlin-argparser"),(0,r.kt)("br",null),"Easy to use and concise yet powerful and robust command line argument parsing for Kotlin")),(0,r.kt)("h2",{id:"articles"},"Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kt.academy/article/dispatcher-loom"},"Running Kotlin coroutines on Project Loom's virtual threads"))))}m.isMDXComponent=!0}}]);