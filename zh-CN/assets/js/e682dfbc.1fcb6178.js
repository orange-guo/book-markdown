"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8635],{88104:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>r});var t=o(74848),i=o(28453);const c={authors:["xiangcheng.kuo"],tags:["golang","git","gitlab","cicd"]},l="\u5728GitLab\u7684CI/CD\u4e2d\u652f\u6301Go Module\u5f15\u7528\u540c\u4e00\u4ee3\u7801\u5e93\u4e0b\u7684\u5176\u4ed6Go\u4ed3\u5e93",s={permalink:"/zh-CN/blog/2024/04/11/support-gomod-referencing-local-repos-in-gitlab-cicd",source:"@site/blog/2024-04-11/support-gomod-referencing-local-repos-in-gitlab-cicd.md",title:"\u5728GitLab\u7684CI/CD\u4e2d\u652f\u6301Go Module\u5f15\u7528\u540c\u4e00\u4ee3\u7801\u5e93\u4e0b\u7684\u5176\u4ed6Go\u4ed3\u5e93",description:"\u5728Golang\u4e2d, \u4ee3\u7801\u590d\u7528\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7git\u65b9\u5f0f\u5f15\u7528\u4ee3\u7801.",date:"2024-04-11T00:00:00.000Z",tags:[{inline:!0,label:"golang",permalink:"/zh-CN/blog/tags/golang"},{inline:!0,label:"git",permalink:"/zh-CN/blog/tags/git"},{inline:!0,label:"gitlab",permalink:"/zh-CN/blog/tags/gitlab"},{inline:!0,label:"cicd",permalink:"/zh-CN/blog/tags/cicd"}],readingTime:1.52,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["golang","git","gitlab","cicd"]},unlisted:!1,prevItem:{title:"X Window System",permalink:"/zh-CN/blog/2024/06/23/x-window-system"},nextItem:{title:"\u5347\u7ea7spring-cloud-gateway\u52304.1.0\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u7684\u4ee5\u53ca\u5bf9\u5e94\u89e3\u51b3\u65b9\u6848",permalink:"/zh-CN/blog/2024/04/08/troubleshooting-and-solutions-encountered-during-the-upgrade-process-of-spring-cloud-gateway-to-version-4.1.0"}},d={authorsImageUrls:[void 0]},r=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u8bbe\u7f6e<code>GOPRIVATE</code>\u73af\u5883\u53d8\u91cf",id:"\u8bbe\u7f6egoprivate\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4f7f\u7528<code>git config</code>\u7684<code>insteadOf</code>\u6307\u4ee4\u66ff\u6362\u539f\u59cb\u7684<code>https</code>\u8bf7\u6c42\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f",id:"\u4f7f\u7528git-config\u7684insteadof\u6307\u4ee4\u66ff\u6362\u539f\u59cb\u7684https\u8bf7\u6c42\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f",level:3},{value:"\u914d\u7f6e\u88ab\u4f9d\u8d56\u7684\u4ed3\u5e93\u5141\u8bb8\u5176\u4ed6\u9879\u76ee\u901a\u8fc7<code>CI_JOB_TOKEN</code>\u8fdb\u884c\u8bbf\u95ee",id:"\u914d\u7f6e\u88ab\u4f9d\u8d56\u7684\u4ed3\u5e93\u5141\u8bb8\u5176\u4ed6\u9879\u76ee\u901a\u8fc7ci_job_token\u8fdb\u884c\u8bbf\u95ee",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"Golang"}),"\u4e2d, \u4ee3\u7801\u590d\u7528\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7",(0,t.jsx)(n.code,{children:"git"}),"\u65b9\u5f0f\u5f15\u7528\u4ee3\u7801.",(0,t.jsx)("br",{}),"\n\u5982\u679c\u5728",(0,t.jsx)(n.code,{children:"CI/CD"}),"\u4e2d\u5f15\u7528\u540c\u4e00\u4ee3\u7801\u5e93\u4e0b\u7684\u5176\u4ed6",(0,t.jsx)(n.code,{children:"Go"}),"\u4ed3\u5e93, \u7531\u4e8e",(0,t.jsx)(n.code,{children:"Gitlab"}),"\u5bf9\u4ed3\u5e93\u7684\u8bbf\u95ee\u6743\u9650\u9650\u5236, \u8fd8\u9700\u8981\u6267\u884c\u4e00\u4e9b\u914d\u7f6e\u6765\u786e\u4fdd",(0,t.jsx)(n.code,{children:"go mod"}),"\n\u80fd\u591f\u6b63\u786e\u4e0b\u8f7d\u4f9d\u8d56\u9879."]}),"\n",(0,t.jsx)(n.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.h3,{id:"\u8bbe\u7f6egoprivate\u73af\u5883\u53d8\u91cf",children:["\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"GOPRIVATE"}),"\u73af\u5883\u53d8\u91cf"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"GOPRIVATE"}),"\u53d8\u91cf"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export GOPRIVATE=${CI_SERVER_HOST}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,t.jsx)(n.code,{children:"${CI_SERVER_HOST}"}),"\u662fgitlab\u4ee3\u7801\u5e93\u7684\u57df\u540d."]}),"\n",(0,t.jsxs)(n.h3,{id:"\u4f7f\u7528git-config\u7684insteadof\u6307\u4ee4\u66ff\u6362\u539f\u59cb\u7684https\u8bf7\u6c42\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f",children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"git config"}),"\u7684",(0,t.jsx)(n.code,{children:"insteadOf"}),"\u6307\u4ee4\u66ff\u6362\u539f\u59cb\u7684",(0,t.jsx)(n.code,{children:"https"}),"\u8bf7\u6c42\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"go mod"}),"\u901a\u8fc7",(0,t.jsx)(n.code,{children:"git"}),"\u4e0b\u8f7d\u4f9d\u8d56\u9879.",(0,t.jsx)("br",{}),"\n\u5bf9\u4e8e\u79c1\u6709\u7684git\u4ed3\u5e93, \u5982\u679c\u4e0d\u8fdb\u884c\u8ba4\u8bc1, \u5c06\u4f1a\u51fa\u73b0\u9519\u8bef.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0b\u8ff0\u547d\u4ee4\u66ff\u6362\u539f\u59cb\u7684",(0,t.jsx)(n.code,{children:"https"}),"\u8bf7\u6c42\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u4fe1\u606f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git config --global url."https://gitlab-ci-token:${CI_JOB_TOKEN}@${CI_SERVER_HOST}".insteadOf "https://${CI_SERVER_HOST}"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0",(0,t.jsx)(n.code,{children:"insteadOf"}),"\u6307\u4ee4\u4e3a\u539f\u59cb\u7684",(0,t.jsx)(n.code,{children:"https"}),"\u8bf7\u6c42\u6dfb\u52a0\u4e86\u8ba4\u8bc1\u4fe1\u606f.",(0,t.jsx)("br",{}),"\n\u8ba4\u8bc1\u51ed\u8bc1\u6765\u81ea\u4e8e",(0,t.jsx)(n.code,{children:"CI_JOB_TOKEN"}),", \u8fd9\u662fCI/CD\u751f\u547d\u5468\u671f\u4e2d\u81ea\u52a8\u751f\u6210\u7684.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.h3,{id:"\u914d\u7f6e\u88ab\u4f9d\u8d56\u7684\u4ed3\u5e93\u5141\u8bb8\u5176\u4ed6\u9879\u76ee\u901a\u8fc7ci_job_token\u8fdb\u884c\u8bbf\u95ee",children:["\u914d\u7f6e\u88ab\u4f9d\u8d56\u7684\u4ed3\u5e93\u5141\u8bb8\u5176\u4ed6\u9879\u76ee\u901a\u8fc7",(0,t.jsx)(n.code,{children:"CI_JOB_TOKEN"}),"\u8fdb\u884c\u8bbf\u95ee"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"GitLab"}),"\u4e2d\u8fdb\u5165\u88ab\u4f9d\u8d56\u7684\u4ed3\u5e93, \u5728",(0,t.jsx)(n.code,{children:"Settings > CI/CD > Token Access"}),"\u4e2d\u914d\u7f6e\u5141\u8bb8\u5176\u4ed6\u9879\u76ee\u901a\u8fc7",(0,t.jsx)(n.code,{children:"CI_JOB_TOKEN"}),"\u8fdb\u884c\u8bbf\u95ee\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html#add-a-project-to-the-job-token-allowlist",children:"Add a project to the job token allowlist"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var t=o(96540);const i={},c=t.createContext(i);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);