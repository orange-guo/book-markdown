"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9423],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(s),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return s?n.createElement(m,o(o({ref:t},c),{},{components:s})):n.createElement(m,o({ref:t},c))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=s[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},3807:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=s(7462),r=(s(7294),s(3905));const a={},o="\u5e38\u7528\u547d\u4ee4",i={unversionedId:"problem/command",id:"problem/command",title:"\u5e38\u7528\u547d\u4ee4",description:"pstree",source:"@site/docs/problem/4-command.md",sourceDirName:"problem",slug:"/problem/command",permalink:"/markdowns/docs/problem/command",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/4-command.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1675266247,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u9047\u5230\u7684\u95ee\u9898",permalink:"/markdowns/docs/problem/dev"},next:{title:"Camunda",permalink:"/markdowns/docs/problem/camunda"}},l={},p=[{value:"pstree",id:"pstree",level:2},{value:"strace",id:"strace",level:2},{value:"mount",id:"mount",level:2},{value:"lsof",id:"lsof",level:2},{value:"ldd",id:"ldd",level:2},{value:"ssh-keygen",id:"ssh-keygen",level:2},{value:"avoid ssh asking permission",id:"avoid-ssh-asking-permission",level:2},{value:"ssh: no matching host key type found. Their offer: ssh-rsa,ssh-dss",id:"ssh-no-matching-host-key-type-found-their-offer-ssh-rsassh-dss",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("h2",{id:"pstree"},"pstree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pstree -p -s <pid> -T\n")),(0,r.kt)("h2",{id:"strace"},"strace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"strace -p <pid>\n")),(0,r.kt)("h2",{id:"mount"},"mount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'NET USE Z: \\\\68.79.39.232\\share "admin" /USER:"fastone"\n')),(0,r.kt)("h2",{id:"lsof"},"lsof"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# grep pipe\nlsof|grep FIFO\n")),(0,r.kt)("h2",{id:"ldd"},"ldd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ldd --version\n")),(0,r.kt)("h2",{id:"ssh-keygen"},"ssh-keygen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key\nssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key"},"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key"},"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t"},"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html"},"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html"))),(0,r.kt)("h2",{id:"avoid-ssh-asking-permission"},"avoid ssh asking permission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"RSA key fingerprint is 96:a9:23:5c:cc:d1:0a:d4:70:22:93:e9:9e:1e:74:2f.\nAre you sure you want to continue connecting (yes/no)? yes\n")),(0,r.kt)("p",null,"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -o StrictHostKeyChecking=no\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/33271/how-to-avoid-ssh-asking-permission"},"how to avoid ssh asking permission?"))),(0,r.kt)("h2",{id:"ssh-no-matching-host-key-type-found-their-offer-ssh-rsassh-dss"},"ssh: no matching host key type found. Their offer: ssh-rsa,ssh-dss"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Unable to negotiate with 52.131.77.121 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss\n")),(0,r.kt)("p",null,"solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -oHostKeyAlgorithms=+ssh-dss\n# The latest OpenSSH version disables RSA, if you run into the error now, you should use +ssh-rsa instead of +ssh-dss\nssh -oHostKeyAlgorithms=+ssh-rsa \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/836048/ssh-returns-no-matching-host-key-type-found-their-offer-ssh-dss"},"SSH returns: no matching host key type found. Their offer: ssh-dss"))))}u.isMDXComponent=!0}}]);