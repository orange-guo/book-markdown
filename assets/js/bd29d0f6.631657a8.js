"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i="Docker",l={unversionedId:"collection/curated-list/docker",id:"collection/curated-list/docker",title:"Docker",description:"Project",source:"@site/docs/collection/curated-list/docker.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/docker",permalink:"/docs/collection/curated-list/docker",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/docker.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1695629196,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{},sidebar:"collection",previous:{title:"Command line tools",permalink:"/docs/collection/curated-list/command-line-tools"},next:{title:"Frontend",permalink:"/docs/collection/curated-list/frontend-list"}},c={},u=[{value:"Project",id:"project",level:2},{value:"Docker",id:"docker-1",level:3},{value:"Image",id:"image",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Reference",id:"reference",level:2},{value:"Doc",id:"doc",level:3},{value:"Article",id:"article",level:3}],s={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("h3",{id:"docker-1"},"Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker-snap/docker-snap"},"docker-snap"))),(0,o.kt)("h3",{id:"image"},"Image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/nvidia-docker"},"nvidia-docker"),(0,o.kt)("br",null),"Build and run Docker containers leveraging NVIDIA GPUs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/RadeonOpenCompute/ROCm-docker"},"ROCm-docker"),(0,o.kt)("br",null),"Dockerfiles for the various software layers defined in the Radeon Open Compute Platform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor"},"cadvisor"),(0,o.kt)("br",null),"Analyzes resource usage and performance characteristics of running containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/dcgm-exporter"},"dcgm-exporter"),(0,o.kt)("br",null),"NVIDIA GPU metrics exporter for Prometheus leveraging DCGM"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/amd/amd_smi_exporter"},"amd_smi_exporter"),(0,o.kt)("br",null),"The AMD SMI Exporter exports AMD EPYC CPU & Datacenter GPU metrics to the Prometheus server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/utkuozdemir/nvidia_gpu_exporter"},"nvidia_gpu_exporter"),(0,o.kt)("br",null),"Nvidia GPU exporter for prometheus using nvidia-smi binary")),(0,o.kt)("h3",{id:"runtime"},"Runtime"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/nvidia-container-runtime"},"NVIDIA container runtime"),(0,o.kt)("br",null),"NVIDIA container runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/abuccts/rocm-container-runtime"},"rocm-container-runtime"),(0,o.kt)("br",null),"ROCm container runtime")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"doc"},"Doc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/bind-mounts/#choose-the--v-or---mount-flag"},"Bind mounts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"},"Install Docker Engine on Ubuntu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Install the Compose plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/run/"},"Docker run reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/containers/resource_constraints/"},"Runtime options with Memory, CPUs, and GPUs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/"},"Docker storage drivers"))),(0,o.kt)("h3",{id:"article"},"Article"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bobcares.com/blog/docker-shm-size/"},"Docker shm-size | How To Resize It?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datawookie.dev/blog/2021/11/shared-memory-docker/"},"Shared Memory & Docker"))))}p.isMDXComponent=!0}}]);