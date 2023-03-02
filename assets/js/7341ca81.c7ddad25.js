"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9141],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||o;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["k8s","aws"]},l="\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",i={permalink:"/markdowns/blog/2023/02/19/",source:"@site/blog/2023-02-19.md",title:"\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0bk8s\u4e2d\u7684Service\u4e3aClusterIP\u7c7b\u578b, \u5373\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee(\u8fd9\u91cc\u7684\u5916\u90e8\u6307\u7684\u662fk8s\u96c6\u7fa4\u5916\u90e8,",date:"2023-02-19T00:00:00.000Z",formattedDate:"February 19, 2023",tags:[{label:"k8s",permalink:"/markdowns/blog/tags/k-8-s"},{label:"aws",permalink:"/markdowns/blog/tags/aws"}],readingTime:1.135,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["k8s","aws"]},prevItem:{title:"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",permalink:"/markdowns/blog/2023/02/20/"},nextItem:{title:"\u4f7f\u7528aliyundrive-webdav\u642d\u914drclone\u5b9e\u73b0\u4ee5\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u64cd\u4f5c\u963f\u91cc\u4e91\u76d8\u4e2d\u7684\u6587\u4ef6",permalink:"/markdowns/blog/2023/02/18/"}},p={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u66f4\u65b0<code>Service</code>, \u8ffd\u52a0<code>annotations</code>\u4ee5\u53ca\u4fee\u6539<code>type</code>\u4e3a<code>LoadBalancer</code>",id:"\u66f4\u65b0service-\u8ffd\u52a0annotations\u4ee5\u53ca\u4fee\u6539type\u4e3aloadbalancer",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP"),"\u7c7b\u578b, \u5373\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee(\u8fd9\u91cc\u7684\u5916\u90e8\u6307\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u5916\u90e8,\n\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u6240\u5728\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"VPC"),"\u5916\u90e8).",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"NodeProt"),"\u4e5f\u5b58\u5728\u540c\u6837\u7684\u95ee\u9898, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee.",(0,r.kt)("br",null),"\n\u4e3a\u4e86\u80fd\u591f\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", \u9700\u8981\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"nlb"),"\u4ee5\u5b9e\u73b0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"aws-eks"),"\u6258\u7ba1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u542f\u7528\u5916\u90e8\u8bbf\u95ee\u80fd\u529b."),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u4e0a\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"aws-load-balancer-controller"),", \u5426\u5219\u8be5\u529f\u80fd\u65e0\u6cd5\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u66f4\u65b0service-\u8ffd\u52a0annotations\u4ee5\u53ca\u4fee\u6539type\u4e3aloadbalancer"},"\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"h3"},"Service"),", \u8ffd\u52a0",(0,r.kt)("inlineCode",{parentName:"h3"},"annotations"),"\u4ee5\u53ca\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"h3"},"type"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"h3"},"LoadBalancer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip\n    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n    service.beta.kubernetes.io/aws-load-balancer-type: external\nspec:\n  type: LoadBalancer\n")),(0,r.kt)("p",null,"\u7a0d\u7b49\u7247\u523b\u540e\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get svc"),"\u67e5\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\u4fe1\u606f, \u53ef\u4ee5\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancer"),"\u4fe1\u606f\u4e2d\u5305\u542b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hostname"),"\u4fe1\u606f.\n\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"hostname"),"\u5373\u53ef\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"."),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"Installing the AWS Load Balancer Controller add-on")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html"},"Network load balancing on Amazon EKS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/guide/service/nlb/"},"Network Load Balancer"))))}d.isMDXComponent=!0}}]);