"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3532],{42889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var i=n(74848),r=n(28453);const u={authors:["xiangcheng.kuo"],tags:["apt","ubuntu","linux"]},s="ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",c={permalink:"/blog/2023/02/26/apt-mirror",source:"@site/blog/2023-02-26/apt-mirror.md",title:"ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",description:"\u672c\u6587\u8bb0\u5f55\u4e86ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90, \u4ee5\u53ca\u5982\u4f55\u914d\u7f6eapt\u6e90.",date:"2023-02-26T00:00:00.000Z",tags:[{inline:!0,label:"apt",permalink:"/blog/tags/apt"},{inline:!0,label:"ubuntu",permalink:"/blog/tags/ubuntu"},{inline:!0,label:"linux",permalink:"/blog/tags/linux"}],readingTime:3.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["apt","ubuntu","linux"]},unlisted:!1,prevItem:{title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",permalink:"/blog/2023/03/02/clojure-validation"},nextItem:{title:"\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",permalink:"/blog/2023/02/25/nvm"}},a={authorsImageUrls:[void 0]},o=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u786e\u8ba4<code>codename</code>",id:"\u786e\u8ba4codename",level:3},{value:"\u7f16\u8f91<code>/etc/apt/sources.list</code>",id:"\u7f16\u8f91etcaptsourceslist",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u672c\u6587\u8bb0\u5f55\u4e86",(0,i.jsx)(t.code,{children:"ubuntu"}),"\u4e2d\u5e38\u7528\u7684",(0,i.jsx)(t.code,{children:"apt"}),"\u6e90, \u4ee5\u53ca\u5982\u4f55\u914d\u7f6e",(0,i.jsx)(t.code,{children:"apt"}),"\u6e90."]}),"\n",(0,i.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(t.h3,{id:"\u786e\u8ba4codename",children:["\u786e\u8ba4",(0,i.jsx)(t.code,{children:"codename"})]}),"\n",(0,i.jsxs)(t.p,{children:["\u4e0d\u540c\u7684\u7248\u672c\u7684",(0,i.jsx)(t.code,{children:"ubuntu"}),", ",(0,i.jsx)(t.code,{children:"codename"}),"\u4f1a\u6709\u6240\u4e0d\u540c, \u6bd4\u5982",(0,i.jsx)(t.code,{children:"20.04"}),"\u7684",(0,i.jsx)(t.code,{children:"codename"}),"\u662f",(0,i.jsx)(t.code,{children:"focal"}),", ",(0,i.jsx)(t.code,{children:"22.10"}),"\u7684",(0,i.jsx)(t.code,{children:"codename"}),"\u662f",(0,i.jsx)(t.code,{children:"kinetic"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4",(0,i.jsx)(t.code,{children:"codename"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"lsb_release -a\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u8f93\u51fa\u7ed3\u679c\u53c2\u8003"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-log",children:"No LSB modules are available.\nDistributor ID: Ubuntu\nDescription:    Ubuntu 22.10\nRelease:        22.10\nCodename:       kinetic\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"\u7f16\u8f91etcaptsourceslist",children:["\u7f16\u8f91",(0,i.jsx)(t.code,{children:"/etc/apt/sources.list"})]}),"\n",(0,i.jsxs)(t.p,{children:["\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\u7684",(0,i.jsx)(t.code,{children:"kinetic"}),"\u66ff\u6362\u4e3a\u4e0a\u4e00\u6b65\u4e2d\u7684",(0,i.jsx)(t.code,{children:"codename"}),", \u7136\u540e\u4fdd\u5b58\u5230",(0,i.jsx)(t.code,{children:"/etc/apt/sources.list"}),"\u4e2d."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="/etc/apt/sources.list"',children:'# Jiaotong University\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-updates main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-backports main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-security main restricted universe multiverse\n\n\n# Tsinghua\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\n\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n\n# Ali\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\n\n# Netease\ndeb http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\n\n# \u4e2d\u79d1\u5927\u955c\u50cf\u6e90\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n\n#deb cdrom:[Ubuntu 22.04 LTS _kinetic Jellyfish_ - Release amd64 (20220419)]/ kinetic main restricted\n\n# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to\n# newer versions of the distribution.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted\n\n## Major bug fix updates produced after the final release of the\n## distribution.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu\n## team. Also, please note that software in universe WILL NOT receive any\n## review or updates from the Ubuntu security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic universe\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic universe\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu \n## team, and may not be under a free licence. Please satisfy yourself as to \n## your rights to use the software. Also, please note that software in \n## multiverse WILL NOT receive any review or updates from the Ubuntu\n## security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse\n\n## N.B. software from this repository may not have been tested as\n## extensively as that contained in the main release, although it includes\n## newer versions of some applications which may provide useful features.\n## Also, please note that software in backports WILL NOT receive any review\n## or updates from the Ubuntu security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\ndeb http://security.ubuntu.com/ubuntu kinetic-security main restricted\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security main restricted\ndeb http://security.ubuntu.com/ubuntu kinetic-security universe\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security universe\ndeb http://security.ubuntu.com/ubuntu kinetic-security multiverse\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security multiverse\n\n# This system was installed using small removable media\n# (e.g. netinst, live or single CD). The matching "deb cdrom"\n# entries were disabled at the end of the installation process.\n# For information about how to configure apt package sources,\n# see the sources.list(5) manual.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://launchpad.net/ubuntu/+archivemirrors",children:"Official Archive Mirrors for Ubuntu"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://wiki.debian.org/SourcesList",children:"SourcesList"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},u=i.createContext(r);function s(e){const t=i.useContext(u);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(u.Provider,{value:t},e.children)}}}]);