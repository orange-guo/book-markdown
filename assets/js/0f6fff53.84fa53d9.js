"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2574],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={authors:["xiangcheng.kuo"],tags:["aliyundrive","rclone","docker"]},o="\u4f7f\u7528aliyundrive-webdav\u642d\u914drclone\u5b9e\u73b0\u4ee5\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u64cd\u4f5c\u963f\u91cc\u4e91\u76d8\u4e2d\u7684\u6587\u4ef6",i={permalink:"/markdowns/blog/2023/02/18/index",source:"@site/blog/2023-02-18/index.md",title:"\u4f7f\u7528aliyundrive-webdav\u642d\u914drclone\u5b9e\u73b0\u4ee5\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u64cd\u4f5c\u963f\u91cc\u4e91\u76d8\u4e2d\u7684\u6587\u4ef6",description:"aliyun-webdav\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u6839\u636e\u914d\u7f6e\u7684\u963f\u91cc\u4e91\u76d8\u5e10\u53f7\u4fe1\u606f\u5bf9\u5916\u63d0\u4f9bWebDAV\u670d\u52a1.",date:"2023-02-18T00:00:00.000Z",formattedDate:"February 18, 2023",tags:[{label:"aliyundrive",permalink:"/markdowns/blog/tags/aliyundrive"},{label:"rclone",permalink:"/markdowns/blog/tags/rclone"},{label:"docker",permalink:"/markdowns/blog/tags/docker"}],readingTime:2.445,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["aliyundrive","rclone","docker"]},prevItem:{title:"\u901a\u8fc7\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528\u5916\u90e8\u8bbf\u95ee\u80fd\u529b",permalink:"/markdowns/blog/2023/02/19/index"}},c={authorsImageUrls:[void 0]},p=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:3},{value:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u4e2d\u7684<code>refresh_token</code>",id:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u4e2d\u7684refresh_token",level:3},{value:"\u65b0\u589e<code>docker-compose.yml</code>\u6587\u4ef6",id:"\u65b0\u589edocker-composeyml\u6587\u4ef6",level:3},{value:"\u65b0\u589e<code>rclone.conf</code>\u6587\u4ef6",id:"\u65b0\u589ercloneconf\u6587\u4ef6",level:3},{value:"\u65b0\u589e\u811a\u672c<code>start.sh</code>, <code>stop.sh</code>",id:"\u65b0\u589e\u811a\u672cstartsh-stopsh",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aliyun-webdav"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u6839\u636e\u914d\u7f6e\u7684\u963f\u91cc\u4e91\u76d8\u5e10\u53f7\u4fe1\u606f\u5bf9\u5916\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"WebDAV"),"\u670d\u52a1.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"rclone"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u5c06\u5404\u79cd\u7f51\u7edc\u6587\u4ef6\u534f\u8bae\u7684\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u5e76\u901a\u8fc7\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u8fdb\u884c\u6587\u4ef6\u7684\u64cd\u4f5c.",(0,a.kt)("br",null),"\n\u5176\u652f\u6301\u7684\u7f51\u7edc\u6587\u4ef6\u534f\u8bae\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S3"),(0,a.kt)("li",{parentName:"ul"},"WebDAV"),(0,a.kt)("li",{parentName:"ul"},"FTP"),(0,a.kt)("li",{parentName:"ul"},"SFTP"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"aliyun-webdav"),"\u642d\u914d",(0,a.kt)("inlineCode",{parentName:"p"},"rclone"),"\u5b9e\u73b0\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5230\u963f\u91cc\u4e91\u76d8.\n\u672c\u6848\u4f8b\u662f\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu"),"\u5b9e\u73b0\u7684, \u7531\u4e8e\u8be5\u89e3\u51b3\u65b9\u6848\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),", \u56e0\u6b64\u7406\u8bba\u4e0a\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684\u7cfb\u7edf\u4e2d\u5b9e\u73b0."),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h3",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u7cfb\u7edf\u4e2d\u5fc5\u987b\u5b58\u5728\u4ee5\u4e0b\u5de5\u5177"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker"),(0,a.kt)("li",{parentName:"ul"},"docker-compose")),(0,a.kt)("p",null,"\u53e6\u5916\u786e\u4fdd\u5f53\u524d\u7528\u6237\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u6743\u9650, \u5982\u679c\u6ca1\u6709, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\nsudo newgrp docker\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u4e2d\u7684refresh_token"},"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"h3"},"refresh_token")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u767b\u5f55",(0,a.kt)("a",{parentName:"li",href:"https://www.aliyundrive.com/drive"},"\u963f\u91cc\u4e91\u76d8")),(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6d4f\u89c8\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5f00\u53d1\u8005\u5de5\u5177"),"(",(0,a.kt)("inlineCode",{parentName:"li"},"F12"),"\u5feb\u6377\u952e), \u5207\u6362\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Console"),"\u9009\u9879\u5361, \u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4, \u5e76\u6309\u4e0b\u56de\u8f66")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"JSON.parse(localStorage.token).refresh_token\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236\u8f93\u51fa\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token"),"\u503c, \u4f5c\u4e3a\u540e\u7eed\u914d\u7f6e, \u6ce8\u610f\u4e0d\u8981\u5305\u542b\u5f15\u53f7")),(0,a.kt)("h3",{id:"\u65b0\u589edocker-composeyml\u6587\u4ef6"},"\u65b0\u589e",(0,a.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml"),"\u6587\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5185\u5bb9\u4f5c\u4e3a\u53c2\u8003\u5e76\u586b\u5165\u9700\u8981\u7684\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<\u586b\u5199\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u83b7\u53d6\u5230\u7684refresh_token>"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "2"\nservices:\n  aliyundrive:\n    image: messense/aliyundrive-webdav:1.11.0\n    container_name: aliyundrive\n    hostname: aliyundrive\n    ports:\n      - "8080:8080"\n    restart: always\n    environment:\n      REFRESH_TOKEN: <\u586b\u5199\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u83b7\u53d6\u5230\u7684refresh_token>\n\n  rclone:\n    restart: always\n    image: rclone/rclone\n    container_name: rclone\n    hostname: rclone\n    user: "1000:1000"\n    volumes:\n      - "./rclone.conf:/config/rclone/rclone.conf"\n      - "./Aliyundrive:/Aliyundrive:rshared"\n      - "/etc/passwd:/etc/passwd:ro"\n      - "/etc/group:/etc/group:ro"\n    devices:\n      - "/dev/fuse:/dev/fuse"\n    cap_add:\n      - SYS_ADMIN\n    security_opt:\n      - "apparmor:unconfined"\n    command:\n      - "mount"\n      - "--dir-cache-time=1h"\n      - "--buffer-size=64M"\n      - "--vfs-cache-mode=full"\n      - "--transfers=16"\n      - "--allow-non-empty"\n      - "--no-update-modtime"\n      - "aliyundrive:"\n      - "/Aliyundrive"\n\nnetworks:\n  network:\n    driver: bridge\n    ipam:\n      driver: default\n')),(0,a.kt)("h3",{id:"\u65b0\u589ercloneconf\u6587\u4ef6"},"\u65b0\u589e",(0,a.kt)("inlineCode",{parentName:"h3"},"rclone.conf"),"\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="rclone.conf"',title:'"rclone.conf"'},"[aliyundrive]\ntype = webdav\nurl = http://aliyundrive:8080\nvendor = nextcloud\n")),(0,a.kt)("h3",{id:"\u65b0\u589e\u811a\u672cstartsh-stopsh"},"\u65b0\u589e\u811a\u672c",(0,a.kt)("inlineCode",{parentName:"h3"},"start.sh"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"stop.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="start.sh"',title:'"start.sh"'},"mkdir -p ./Aliyundrive\ndocker-compose up -d\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="stop.sh"',title:'"stop.sh"'},"umount ./Aliyundrive\ndocker-compose kill\ndocker-compose rm -f\n")),(0,a.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/messense/aliyundrive-webdav"},"aliyundrive-webdav")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/"},"rclone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"docker-compose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.aliyundrive.com/drive"},"\u963f\u91cc\u4e91\u76d8"))))}d.isMDXComponent=!0}}]);