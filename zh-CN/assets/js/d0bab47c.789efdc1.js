"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,h=m["".concat(u,".").concat(g)]||m[g]||c[g]||n;return a?l.createElement(h,i(i({ref:t},p),{},{components:a})):l.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=a(83117),r=(a(67294),a(3905));const n={},i="Golang",o={unversionedId:"curated-list/language/golang",id:"curated-list/language/golang",title:"Golang",description:"Web",source:"@site/docs/curated-list/language/golang.md",sourceDirName:"curated-list/language",slug:"/curated-list/language/golang",permalink:"/zh-CN/docs/curated-list/language/golang",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/curated-list/language/golang.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705632810,formattedLastUpdatedAt:"2024\u5e741\u670819\u65e5",frontMatter:{},sidebar:"curatedList",previous:{title:"Clojure",permalink:"/zh-CN/docs/curated-list/language/clojure"},next:{title:"Java",permalink:"/zh-CN/docs/curated-list/language/java"}},u={},s=[{value:"Web",id:"web",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Logging",id:"logging",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Middleware Client",id:"middleware-client",level:2},{value:"Database",id:"database",level:2},{value:"Gprc &amp; Protobuf",id:"gprc--protobuf",level:2},{value:"Json",id:"json",level:2},{value:"Yaml",id:"yaml",level:2},{value:"Testing",id:"testing",level:2},{value:"Functional",id:"functional",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Value Mapping",id:"value-mapping",level:2},{value:"Command line",id:"command-line",level:3},{value:"Build",id:"build",level:2},{value:"Notification",id:"notification",level:2},{value:"Systemd",id:"systemd",level:2},{value:"Profiler",id:"profiler",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Articles",id:"articles",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"golang"},"Golang"),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gin-gonic/gin"},"gin"),(0,r.kt)("br",null),"Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/labstack/echo"},"echo"),(0,r.kt)("br",null),"High performance, minimalist Go web framework"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/danielgtaylor/huma"},"huma"),(0,r.kt)("br",null),"A modern web framework for Go")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spf13/viper"},"viper"),(0,r.kt)("br",null),"Go configuration with fangs")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sirupsen/logrus"},"logus"),(0,r.kt)("br",null),"Structured, pluggable logging for Go.")),(0,r.kt)("h2",{id:"libraries"},"Libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://goplus.org/"},"gop"),(0,r.kt)("br",null),"For engineering, STEM education, and data science")),(0,r.kt)("h2",{id:"middleware-client"},"Middleware Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus/client_golang"},"prometheus-client-golang"),(0,r.kt)("br",null),"Prometheus instrumentation library for Go applications"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/moby/moby"},"moby"),(0,r.kt)("br",null),"Moby Project - a collaborative project for the container ecosystem to assemble container-based systems")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm"},"gorm"),(0,r.kt)("br",null),"The fantastic ORM library for Golang"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gorm.io/gen/"},"gorm-gen"),(0,r.kt)("br",null),"GORM Gen is a code generation tool for GORM ORM library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dgraph-io/badger"},"badger"),(0,r.kt)("br",null),"Fast key-value DB in Go.")),(0,r.kt)("h2",{id:"gprc--protobuf"},"Gprc & Protobuf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrusty/protoc-gen-jsonschema"},"protoc-gen-jsonschema"),(0,r.kt)("br",null),"Protobuf to JSON-Schema compiler")),(0,r.kt)("h2",{id:"json"},"Json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/invopop/jsonschema"},"jsonschema"),(0,r.kt)("br",null),"Generate JSON Schemas from Go types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/omissis/go-jsonschema"},"go-jsonschema"),(0,r.kt)("br",null),"A tool to generate Go data types from JSON Schema definitions.")),(0,r.kt)("h2",{id:"yaml"},"Yaml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PrasadG193/yaml2go"},"yaml2go"),(0,r.kt)("br",null),"Converts YAML specs into Go Lang type definitions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/go-yaml/yaml"},"yaml"),(0,r.kt)("br",null),"YAML support for the Go language.")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uber-go/mock"},"mock"),(0,r.kt)("br",null),"GoMock is a mocking framework for the Go programming language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/smartystreets/goconvey"},"goconvey"),(0,r.kt)("br",null),"Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onsi/ginkgo"},"ginkgo"),(0,r.kt)("br",null),"A Modern Testing Framework for Go")),(0,r.kt)("h2",{id:"functional"},"Functional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/samber/lo"},"lo"),(0,r.kt)("br",null),"\ud83d\udca5 A Lodash-style Go library based on Go 1.18+ Generics (map, filter, contains, find...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/samber/mo"},"mo"),(0,r.kt)("br",null),"\ud83e\udd84 Monads and popular FP abstractions, powered by Go 1.18+ Generics (Option, Result, Either...)")),(0,r.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/wire"},"wire"),(0,r.kt)("br",null),"Compile-time Dependency Injection for Go"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uber-go/dig"},"dig"),(0,r.kt)("br",null),"A reflection based dependency injection toolkit for Go."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uber-go/fx"},"fx"),(0,r.kt)("br",null),"A dependency injection based application framework for Go.")),(0,r.kt)("h2",{id:"value-mapping"},"Value Mapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mitchellh/mapstructure"},"mapstructure"),(0,r.kt)("br",null),"Go library for decoding generic map values into native Go structures and vice versa."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jinzhu/copier"},"copier"),(0,r.kt)("br",null),"Copier for golang, copy value from struct to struct and more")),(0,r.kt)("h3",{id:"command-line"},"Command line"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/urfave/cli"},"urfave/cli"),(0,r.kt)("br",null),"A simple, fast, and fun package for building command line apps in Go"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra"),(0,r.kt)("br",null),"A Commander for modern Go CLI interactions")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Masterminds/glide"},"glide"),(0,r.kt)("br",null),"Package Management for Golang")),(0,r.kt)("h2",{id:"notification"},"Notification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nikoksr/notify"},"notify"),(0,r.kt)("br",null),"A dead simple Go library for sending notifications to various messaging services.")),(0,r.kt)("h2",{id:"systemd"},"Systemd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kardianos/service"},"service"),(0,r.kt)("br",null),"Run go programs as a service on major platforms.")),(0,r.kt)("h2",{id:"profiler"},"Profiler"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/pprof"},"pprof"),(0,r.kt)("br",null),"pprof is a tool for visualization and analysis of profiling data")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gobyexample.com/"},"Go by Example"),(0,r.kt)("br",null),"Go by Example is a hands-on introduction to Go using annotated example programs. Check out the first example or browse the full list below."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gosamples.dev/"},"Go Tutorials & Examples"),(0,r.kt)("br",null),"Learn Go programming by example. GOSAMPLES is a library of Go tutorials and examples that helps you solve everyday code problems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/thediveo/enumflag"},"enumflag"),(0,r.kt)("br",null),"enumflag is a Go package for the Go standard library's flag package to support command-line flags of type enum.")),(0,r.kt)("h2",{id:"articles"},"Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/how-use-go-channels/"},"How to use Go channels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.codecentric.de/wissens-hub/blog/gomock-tutorial"},"Testing with GoMock: A Tutorial"))))}c.isMDXComponent=!0}}]);