"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5799],{56589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(74848),o=s(28453);const r={authors:["xiangcheng.kuo"],tags:["snap"]},t="\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",i={permalink:"/blog/2023/02/20/cleanup-old-version-of-snap-package",source:"@site/blog/2023-02-20/cleanup-old-version-of-snap-package.md",title:"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",description:"snap\u9ed8\u8ba4\u4f1a\u4fdd\u7559\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4f46\u662f\u8fd9\u4e9b\u65e7\u7248\u672c\u7684\u5e94\u7528\u5360\u7528\u4e86\u5927\u91cf\u7684\u7a7a\u95f4, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u6e05\u7406\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4ee5\u91ca\u653e\u7a7a\u95f4.",date:"2023-02-20T00:00:00.000Z",tags:[{inline:!0,label:"snap",permalink:"/blog/tags/snap"}],readingTime:.645,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["snap"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/blog/2023/02/21/inject-environment-as-array-into-spring-application"},nextItem:{title:"\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",permalink:"/blog/2023/02/19/enable-nlb-for-eks-service"}},l={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"snap"}),"\u9ed8\u8ba4\u4f1a\u4fdd\u7559\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4f46\u662f\u8fd9\u4e9b\u65e7\u7248\u672c\u7684\u5e94\u7528\u5360\u7528\u4e86\u5927\u91cf\u7684\u7a7a\u95f4, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u6e05\u7406\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4ee5\u91ca\u653e\u7a7a\u95f4."]}),"\n",(0,a.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,a.jsxs)(n.p,{children:["\u65b0\u589e\u811a\u672c\u7528\u4e8e\u6e05\u7406\u65e7\u7248\u672c\u7684",(0,a.jsx)(n.code,{children:"snap"}),"\u5e94\u7528."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="cleanup-old-snaps.sh"',children:'#!/bin/bash\n\nset -eu\n\necho "Old versions of snaps will be removed."\n\nsudo rm -rf /var/lib/snapd/cache/*\nsnap list --all | awk \'/disabled/{print $1, $3}\' | while read -r package revision; do\n  snap remove "$package" --revision="$revision"\ndone\n\necho "Old revisions of snaps are removed."\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.linuxuprising.com/2019/04/how-to-remove-old-snap-versions-to-free.html",children:"How To Remove Old Snap Versions To Free Up Disk Space"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var a=s(96540);const o={},r=a.createContext(o);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);