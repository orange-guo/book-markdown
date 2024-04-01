"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5876],{85225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=s(85893),a=s(11151);const t={},r="shell",i={id:"note/infra/linux/shell",title:"shell",description:"\u7528\u4f8b",source:"@site/docs/note/infra/linux/shell.md",sourceDirName:"note/infra/linux",slug:"/note/infra/linux/shell",permalink:"/docs/note/infra/linux/shell",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/infra/linux/shell.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1711945422,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"note",previous:{title:"process",permalink:"/docs/note/infra/linux/process"},next:{title:"ssh",permalink:"/docs/note/infra/linux/ssh"}},h={},c=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"bash\u5355\u5f15\u53f7\u5d4c\u5957",id:"bash\u5355\u5f15\u53f7\u5d4c\u5957",level:3},{value:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c",id:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c",level:3},{value:"Bash\u51fd\u6570\u8fd4\u56de\u503c",id:"bash\u51fd\u6570\u8fd4\u56de\u503c",level:3},{value:"\u6e05\u7a7a\u6587\u4ef6",id:"\u6e05\u7a7a\u6587\u4ef6",level:3},{value:"Bash\u4e2d\u7684\u6570\u7ec4",id:"bash\u4e2d\u7684\u6570\u7ec4",level:3},{value:"\u83b7\u53d6\u7279\u5b9a\u884c",id:"\u83b7\u53d6\u7279\u5b9a\u884c",level:3},{value:"Bash if..else Statement",id:"bash-ifelse-statement",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"shell",children:"shell"}),"\n",(0,l.jsx)(n.h2,{id:"\u7528\u4f8b",children:"\u7528\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"bash\u5355\u5f15\u53f7\u5d4c\u5957",children:"bash\u5355\u5f15\u53f7\u5d4c\u5957"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo 'a'\"'\"'b' # a'b\necho 'a'\\''b'  # a'b\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.cnblogs.com/gongxin12/p/11363060.html#:~:text=%E5%8D%95%E5%BC%95%E5%8F%B7%E6%98%AF%E6%97%A0%E6%B3%95%E5%B5%8C,%E6%B2%A1%E6%9C%89%E8%B4%AA%E5%A9%AA%E6%89%AB%E6%8F%8F%E7%9A%84%E8%AF%B4%E6%B3%95%E3%80%82&text=%E6%9F%A5%E7%9C%8B%E4%BD%A0%E5%9C%A8shell%E4%B8%AD,%E5%A5%97%E5%8D%95%E5%BC%95%E5%8F%B7%E7%9A%84%E5%8A%9E%E6%B3%95%E3%80%82",children:"bash\u5355\u5f15\u53f7\u5d4c\u5957"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c",children:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo \"a b c\" | tr -d ' ' # abc\necho \"a b c\" | sed 's/ //g' # abc\necho \"a b c\" | awk '{print $1$2$3}' # abc\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://linuxhint.com/trim_string_bash/",children:"How to trim string in bash"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://blog.csdn.net/weixin_42170236/article/details/119956202",children:"Shell\uff1a\u7528sed\u547d\u4ee4\u5220\u9664\u7279\u5b9a\u884c"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://blog.51cto.com/u_10742668/1944831",children:"Shell\u53bb\u9664\u7a7a\u683c\u548c\u7a7a\u884c\u7684\u65b9\u6cd5"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://blog.csdn.net/genghaihua/article/details/43308799",children:"shell\u53bb\u6389\u6587\u4ef6\u4e2d\u7a7a\u884c(\u7a7a\u767d\u884c)\u7684\u65b9\u6cd5\u8be6\u89e3"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bash\u51fd\u6570\u8fd4\u56de\u503c",children:"Bash\u51fd\u6570\u8fd4\u56de\u503c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# 1. global variable\nglobal_var=0\nfunction test() {\n  global_var=1\n}\necho $global_var # 0\n\n# 2. local variables\nfunction test() {\n  local local_var=1\n  echo $local_var\n}\necho $(test) # 1\n\n# 3. return code\nfunction test() {\n  return 2\n}\necho $(test) # 2\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.linuxjournal.com/content/return-values-bash-functions",children:"Returning Values from Bash Functions"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/questions/17336915/return-value-in-a-bash-function",children:"Return value in a Bash function"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6e05\u7a7a\u6587\u4ef6",children:"\u6e05\u7a7a\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'echo "" > file \ncp /dev/null file\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://blog.51cto.com/u_10624715/3232522",children:"linux\u51e0\u79cd\u5feb\u901f\u6e05\u7a7a\u6587\u4ef6\u5185\u5bb9\u7684\u65b9\u6cd5"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bash\u4e2d\u7684\u6570\u7ec4",children:"Bash\u4e2d\u7684\u6570\u7ec4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# 1. \u5b9a\u4e49\u6570\u7ec4\narray=(1 2 3 4 5)\n\n# 2. \u83b7\u53d6\u6570\u7ec4\u957f\u5ea6\necho ${#array[@]} # 5\n\n# 3. \u83b7\u53d6\u6570\u7ec4\u5143\u7d20\necho ${array[0]} # 1\n\n# 4. \u904d\u5386\u6570\u7ec4\nfor i in ${array[@]}; do\n  echo $i\ndone\n\n# 5. \u6570\u7ec4\u62fc\u63a5\narray2=(6 7 8 9 10)\narray3=(${array[@]} ${array2[@]})\necho ${array3[@]} # 1 2 3 4 5 6 7 8 9 10\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.hostinger.com/tutorials/bash-array#:~:text=A%20bash%20array%20is%20a,store%20different%20types%20of%20elements.",children:"How to Use Bash Arrays"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u83b7\u53d6\u7279\u5b9a\u884c",children:"\u83b7\u53d6\u7279\u5b9a\u884c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u83b7\u53d6\u7b2c\u4e00\u884c\nhead -n 1 file \n# \u83b7\u53d6\u6700\u540e\u4e00\u884c\ntail -n 1 file \n# \u83b7\u53d6\u7b2c\u4e09\u884c\nsed -n '3p' file \n# \u83b7\u53d6\u7b2c\u4e09\u884c\u5230\u7b2c\u4e94\u884c\nsed -n '3,5p' file\n"})}),"\n",(0,l.jsx)(n.h3,{id:"bash-ifelse-statement",children:"Bash if..else Statement"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://linuxize.com/post/bash-if-else-statement/",children:"Bash if..else Statement"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var l=s(67294);const a={},t=l.createContext(a);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);