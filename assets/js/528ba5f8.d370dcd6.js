"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["kubernetes","curated-list"]},l="Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",i={unversionedId:"collection/technolegy/solution/curated-list-kubernetes",id:"collection/technolegy/solution/curated-list-kubernetes",title:"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",description:"- kubernetes",source:"@site/docs/collection/technolegy/solution/curated-list-kubernetes.md",sourceDirName:"collection/technolegy/solution",slug:"/collection/technolegy/solution/curated-list-kubernetes",permalink:"/markdowns/docs/collection/technolegy/solution/curated-list-kubernetes",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/technolegy/solution/curated-list-kubernetes.md",tags:[{label:"kubernetes",permalink:"/markdowns/docs/tags/kubernetes"},{label:"curated-list",permalink:"/markdowns/docs/tags/curated-list"}],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1680620310,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{authors:["xiangcheng.kuo"],tags:["kubernetes","curated-list"]},sidebar:"collection",previous:{title:"Kotlin\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/markdowns/docs/collection/technolegy/solution/curated-list-kotlin"},next:{title:"Python\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/markdowns/docs/collection/technolegy/solution/curated-list-python"}},s={},u=[{value:"See also",id:"see-also",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"},"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes"),(0,o.kt)("br",null),"Production-Grade Container Orchestration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),(0,o.kt)("br",null),"kind is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.",(0,o.kt)("br",null),"kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://k3s.io/"},"k3s"),(0,o.kt)("br",null),"The certified Kubernetes distribution built for IoT & Edge computing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/"},"minikube"),(0,o.kt)("br",null),"minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping application developers and new Kubernetes users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cncf.io/"},"cncf"),(0,o.kt)("br",null),"CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and Prometheus to make cloud native universal and sustainable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://istio.io/"},"istio"),(0,o.kt)("br",null),"Simplify observability, traffic management, security, and policy with the leading service mesh."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://knative.dev/"},"Knative"),(0,o.kt)("br",null),"Knative is an Open-Source Enterprise-level solution to build Serverless and Event Driven Applications Serverless Containers in Kubernetes environments."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dapr.io/"},"dapr"),(0,o.kt)("br",null),"APIs for building portable and reliable microservices",(0,o.kt)("br",null),"Leverage industry best practices and focus on your application\u2019s logic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openfaas.com/"},"openfaas"),(0,o.kt)("br",null),"Serverless Functions, Made Simple.",(0,o.kt)("br",null),"OpenFaaS\xae makes it simple to deploy both functions and existing code to Kubernetes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubevela.io/"},"https://kubevela.io/"),(0,o.kt)("br",null),"Make shipping applications more enjoyable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feiskyer/kubernetes-handbook"},"kubernetes-handbook"),(0,o.kt)("br",null),"Kubernetes Handbook")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tomhuang12/awesome-k8s-resources"},"awesome-k8s-resources"),(0,o.kt)("br",null),"A curated list of awesome Kubernetes tools and resources.")))}d.isMDXComponent=!0}}]);