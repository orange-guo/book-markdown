"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[24631],{54819:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"software-engineering/talk-transcripts/hammock-driven-development","title":"Hammock Driven Development - Rich Hickey","description":"<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/f84n5oFoZBc\\" title=\\"YouTube video player\\"","source":"@site/docs/software-engineering/talk-transcripts/hammock-driven-development.mdx","sourceDirName":"software-engineering/talk-transcripts","slug":"/software-engineering/talk-transcripts/hammock-driven-development","permalink":"/zh-CN/docs/software-engineering/talk-transcripts/hammock-driven-development","draft":false,"unlisted":false,"editUrl":"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/talk-transcripts/hammock-driven-development.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiangcheng Kuo","lastUpdatedAt":1733469200000,"frontMatter":{},"sidebar":"softwareEngineering","previous":{"title":"Projects","permalink":"/zh-CN/docs/software-engineering/talk-transcripts/projects"},"next":{"title":"\\"Simple Made Easy\\" - Rich Hickey (2011)","permalink":"/zh-CN/docs/software-engineering/talk-transcripts/simple-made-easy"}}');var t=r(74848),s=r(28453);const d={},l="Hammock Driven Development - Rich Hickey",c={},o=[{value:"\u540d\u8bcd\u7ffb\u8bd1",id:"\u540d\u8bcd\u7ffb\u8bd1",level:2},{value:"\u6838\u5fc3\u7406\u5ff5",id:"\u6838\u5fc3\u7406\u5ff5",level:2},{value:"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5",id:"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5",level:2},{value:"\u9648\u8ff0\u95ee\u9898(State the problem)",id:"\u9648\u8ff0\u95ee\u9898state-the-problem",level:3},{value:"\u7406\u89e3\u95ee\u9898(Understand the problem)",id:"\u7406\u89e3\u95ee\u9898understand-the-problem",level:3},{value:"\u66f4\u591a\u7684\u6765\u6e90, \u66f4\u597d\u7684\u4ea7\u51fa(More input, better output.)",id:"\u66f4\u591a\u7684\u6765\u6e90-\u66f4\u597d\u7684\u4ea7\u51famore-input-better-output",level:3},{value:"\u6743\u8861(Tradeoffs)",id:"\u6743\u8861tradeoffs",level:3},{value:"\u4e13\u6ce8(Focus)",id:"\u4e13\u6ce8focus",level:3},{value:"<code>Waking Mind</code> and <code>Background Mind</code>",id:"waking-mind-and-background-mind",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hammock-driven-development---rich-hickey",children:"Hammock Driven Development - Rich Hickey"})}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/f84n5oFoZBc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"\u540d\u8bcd\u7ffb\u8bd1",children:"\u540d\u8bcd\u7ffb\u8bd1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hammock driven development"}),": \u540a\u5e8a\u9a71\u52a8\u5f00\u53d1, \u4e00\u79cd\u5f3a\u8c03\u901a\u8fc7\u6df1\u5ea6\u601d\u8003\u6765\u89e3\u51b3\u95ee\u9898\u7684\u5f00\u53d1\u65b9\u5f0f(\u540a\u5e8a\u53ea\u662f\u601d\u8003\u95ee\u9898\u7684\u4e00\u79cd\u573a\u6240)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6838\u5fc3\u7406\u5ff5",children:"\u6838\u5fc3\u7406\u5ff5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b\u4e0e\u601d\u8003\u8fd9\u4e9b\u95ee\u9898\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u76f4\u63a5\u76f8\u5173"}),"\n",(0,t.jsx)(n.li,{children:"\u5206\u6790(analysis)\u548c\u8bbe\u8ba1(design)\u662f\u4e3a\u4e86\u7406\u89e3\u548c\u89e3\u51b3\u6211\u4eec\u9762\u4e34\u7684\u95ee\u9898, \u800c\u4e0d\u662f\u89e3\u51b3\u65b9\u6848\u7684\u5b9e\u9645\u5b9e\u65bd"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u51b3\u95ee\u9898\u800c\u4e0d\u662f\u6784\u5efa\u529f\u80fd"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u51b3\u95ee\u9898\u9700\u8981\u6280\u672f\u548c\u6280\u5de7, \u8fd9\u662f\u53ef\u4ee5\u5b66\u4e60\u548c\u6539\u8fdb\u7684\u4e1c\u897f. \u901a\u8fc7\u7ec3\u4e60, \u53ef\u4ee5\u63d0\u9ad8\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u51b3\u95ee\u9898\u662f\u6700\u6709\u6548\u7684\u6280\u80fd\u4e4b\u4e00(\u6bd4\u4efb\u4f55\u5de5\u5177, \u6280\u672f, \u6846\u67b6\u90fd\u91cd\u8981)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5",children:"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u9648\u8ff0\u95ee\u9898state-the-problem",children:"\u9648\u8ff0\u95ee\u9898(State the problem)"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u662f\u89e3\u51b3\u95ee\u9898\u7684\u7b2c\u4e00\u6b65, \u9648\u8ff0\u95ee\u9898\u662f\u4e3a\u4e86\u4e86\u89e3\u76ee\u524d\u9047\u5230\u7684\u95ee\u9898, \u4ee5\u53ca\u95ee\u9898\u7684\u80cc\u666f\u548c\u4e0a\u4e0b\u6587. ",(0,t.jsx)("br",{}),"\n\u9648\u8ff0\u95ee\u9898\u53ef\u4ee5\u5f3a\u5316\u8fd9\u4e00\u70b9\u5373",(0,t.jsx)(n.code,{children:"\u95ee\u9898\u662f\u4ec0\u4e48"}),".",(0,t.jsx)("br",{}),"\n\u53ef\u4ee5\u901a\u8fc7\u8bb8\u591a\u79cd\u65b9\u5f0f\u6765\u9648\u8ff0\u95ee\u9898, \u4f8b\u5982:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u548c\u5176\u4ed6\u4eba\u8ba8\u8bba"}),"\n",(0,t.jsx)(n.li,{children:"\u5199\u4e0b\u6765"}),"\n",(0,t.jsxs)(n.li,{children:["...\n\u8ba8\u8bba\u7684\u8fc7\u7a0b\u5f88\u91cd\u8981, \u56e0\u4e3a\u5b83\u662f\u89e3\u51b3\u95ee\u9898\u7684\u79cd\u5b50.",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7406\u89e3\u95ee\u9898understand-the-problem",children:"\u7406\u89e3\u95ee\u9898(Understand the problem)"}),"\n",(0,t.jsxs)(n.p,{children:["\u82b1\u65f6\u95f4\u6df1\u5165\u4e86\u89e3\u95ee\u9898, \u53ef\u4ee5\u6162\u6162\u5730\u53bb\u7406\u89e3, \u4e0d\u8981\u6025\u4e8e\u6c42\u6210.",(0,t.jsx)("br",{}),"\n\u9996\u5148\u9700\u8981\u63d0\u51fa\u4e00\u4e9b\u6709\u7528\u7684\u95ee\u9898, \u4f8b\u5982:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f60\u76ee\u524d\u77e5\u9053\u4ec0\u4e48(\u4e8b\u5b9e(facts), \u4e0a\u4e0b\u6587(context), \u7ea6\u675f(constraints))?"}),"\n",(0,t.jsxs)(n.li,{children:["\u4f60\u4e0d\u77e5\u9053\u4ec0\u4e48?\n",(0,t.jsx)("br",{}),"\u5982\u679c\u77e5\u9053\u9700\u8981\u6570\u636e, \u6570\u636e\u4ece\u54ea\u91cc\u6765\n",(0,t.jsx)("br",{}),"\u5982\u679c\u6765\u6e90\u53d1\u751f\u6545\u969c, \u662f\u5426\u8fd8\u6709\u5176\u4ed6\u6765\u6e90"]}),"\n",(0,t.jsxs)(n.li,{children:["\u76ee\u524d\u5e02\u9762\u4e0a\u662f\u5426\u6709\u5df2\u7ecf\u6709\u76f8\u5173\u95ee\u9898\n",(0,t.jsx)("br",{}),"\u4f60\u7684\u95ee\u9898\u5728\u5386\u53f2\u4e0a\u4e0d\u662f\u72ec\u4e00\u65e0\u4e8c\u7684, \u4e86\u89e3\u4f60\u7684\u95ee\u9898\u548c\u76f8\u5173\u95ee\u9898\u4e4b\u95f4\u7684\u91cd\u53e0\u662f\u627e\u5230\u89e3\u51b3\u65b9\u6848\u7684\u6700\u5feb\u65b9\u6cd5\u4e4b\u4e00"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u66f4\u591a\u7684\u6765\u6e90-\u66f4\u597d\u7684\u4ea7\u51famore-input-better-output",children:"\u66f4\u591a\u7684\u6765\u6e90, \u66f4\u597d\u7684\u4ea7\u51fa(More input, better output.)"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u65e0\u6cd5\u5c06\u4e0d\u4e86\u89e3\u7684\u4e8b\u7269\u8054\u7cfb\u8d77\u6765, \u6240\u4ee5\u9700\u8981\u5728\u7a7a\u95f4\u5185\u548c\u5468\u56f4\u9605\u8bfb, \u4e0d\u4ec5\u4ec5\u662f\u4f60\u7684\u786e\u5207\u95ee\u9898, \u8fd8\u6709\u7c7b\u4f3c\u7684\u4e1c\u897f, \u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u8ba9\u95ee\u9898\u6162\u6162\u53d1\u9175, \u8ba9\u4f60\u7684\u5927\u8111\u5efa\u7acb\u8054\u7cfb.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u540c\u4e00\u7a7a\u95f4\u4e2d\u67e5\u627e\u89e3\u51b3\u65b9\u6848, \u6709\u52a9\u4e8e\u601d\u8003\u95ee\u9898\u7684\u80fd\u529b, \u540c\u65f6\u4e5f\u9700\u8981\u6709\u6279\u5224\u6027\u601d\u7ef4.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["\u786e\u4fdd\u4fe1\u606f\u7684\u6765\u6e90\u662f\u53ef\u9760\u7684, \u4fe1\u606f\u7684\u8d28\u91cf\u5f88\u91cd\u8981, \u5783\u573e\u8f93\u5165 = \u5783\u573e\u8f93\u51fa.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"\u6743\u8861tradeoffs",children:"\u6743\u8861(Tradeoffs)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6709\u4e00\u4e2a\u9009\u62e9\u5c31\u662f\u522b\u65e0\u9009\u62e9, \u6709\u4e24\u4e2a\u9009\u62e9\u5c31\u662f\u4e24\u96be, \u6709\u4e09\u4e2a\u9009\u62e9\u5219\u63d0\u4f9b\u4e86\u65b0\u7684\u53ef\u80fd\u6027. - The Satir Model"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u51b3\u5b9a\u884c\u52a8\u4e4b\u524d, \u8bf7\u63d0\u51fa\u4e09\u79cd\u66ff\u4ee3\u65b9\u6848, \u5e76\u6743\u8861\u5b83\u4eec\u7684\u4f18\u7f3a\u70b9.",(0,t.jsx)("br",{}),"\n\u5982\u679c\u6ca1\u6709\u89e3\u51b3\u65b9\u6848\u7684\u4e09\u79cd\u9009\u62e9\u8bf4\u660e\u5bf9\u5b83\u7684\u7406\u89e3\u8fd8\u4e0d\u591f\u6df1\u5165, \u9700\u8981\u66f4\u591a\u7684\u65f6\u95f4\u6765\u7406\u89e3\u95ee\u9898.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e13\u6ce8focus",children:"\u4e13\u6ce8(Focus)"}),"\n",(0,t.jsxs)(n.p,{children:["\u9700\u8981\u5bf9\u95ee\u9898\u8fdb\u884c\u6df1\u5165\u7684\u601d\u8003, \u907f\u514d\u5206\u5fc3, \u4e13\u6ce8\u4e8e\u95ee\u9898, \u540a\u5e8a\u6216\u8005\u5176\u4ed6\u5730\u65b9\u90fd\u53ef\u4ee5.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.h2,{id:"waking-mind-and-background-mind",children:[(0,t.jsx)(n.code,{children:"Waking Mind"})," and ",(0,t.jsx)(n.code,{children:"Background Mind"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528\u6e05\u9192\u7684\u601d\u7ef4\u5c06\u4efb\u52a1\u5206\u914d\u7ed9\u540e\u53f0\u601d\u7ef4\u5e76\u5206\u6790\u5176\u4ea7\u54c1\n\u80cc\u666f\u601d\u7ef4\u662f\u4f60\u89e3\u51b3\u5927\u591a\u6570\u91cd\u8981\u95ee\u9898\u7684\u5730\u65b9\uff0c\u4f46\u4f60\u53ea\u80fd\u63d0\u4f9b\u5b83\uff0c\u800c\u4e0d\u80fd\u6307\u5bfc\u5b83\u3002\u4f60\u9700\u8981\u82b1\u8db3\u591f\u7684\u65f6\u95f4\u601d\u8003\u67d0\u4ef6\u4e8b\uff0c\u8ba9\u5b83\u6210\u4e3a\u4f60\u7684\u80cc\u666f\u601d\u7ef4\u7684\u8bae\u7a0b\u9879\u76ee\uff0c\u4ee5\u4fbf\u4ece\u4e2d\u83b7\u5f97\u4efb\u4f55\u6709\u7528\u7684\u4e1c\u897f\u3002\n\u4e00\u4e2a\u5f88\u597d\u7684\u7c7b\u6bd4\u662f\uff0c\u4f60\u6e05\u9192\u65f6\u7684\u5927\u8111\u5f88\u64c5\u957f\u627e\u5230\u5c40\u90e8\u6700\u5927\u503c\uff0c\u4f46\u5b83\u4e0d\u592a\u64c5\u957f\u5f04\u6e05\u695a\u6cbf\u9014\u8fd8\u6709\u53e6\u4e00\u5ea7\u5c71\u4f1a\u5e26\u4f60\u8d70\u5f97\u66f4\u9ad8\u3002\n\u5361\u5c14\xb7\u7ebd\u6ce2\u7279\u5728\u4ed6\u7684\u300a\u6df1\u5ea6\u5de5\u4f5c\u300b\u4e00\u4e66\u4e2d\u8c08\u5230\u4e86\u4e0e\u6b64\u5bc6\u5207\u76f8\u5173\u7684\u65e0\u610f\u8bc6\u601d\u7ef4\u7406\u8bba\u3002\u65e0\u610f\u8bc6\u601d\u7ef4\u7406\u8bba\u8bd5\u56fe\u7406\u89e3\u6709\u610f\u8bc6\u548c\u65e0\u610f\u8bc6\u601d\u7ef4\u5728\u51b3\u7b56\u4e2d\u7684\u4e0d\u540c\u4f5c\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u7406\u8bba\u6307\u51fa\uff0c\u5982\u679c\u51b3\u7b56\u6d89\u53ca\u4e25\u683c\u7684\u89c4\u5219\uff0c\u90a3\u4e48\u4f60\u7684\u610f\u8bc6\u4f1a\u66f4\u597d\u3002\u5982\u679c\u5b83\u5f88\u5927\u3001\u5f88\u6a21\u7cca\u5e76\u4e14\u6709\u76f8\u4e92\u77db\u76fe\u7684\u4fe1\u606f\u2014\u2014\u628a\u5b83\u7559\u7ed9\u4f60\u7684\u6f5c\u610f\u8bc6\u5427\u3002\u5b83\u66f4\u597d\u7684\u539f\u56e0\u662f\u5b83\u6709\u66f4\u591a\u7684\u53ef\u7528\u795e\u7ecf\u5e26\u5bbd\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u66f4\u597d\u5730\u7b5b\u9009\u548c\u7406\u89e3\u6240\u6709\u5185\u5bb9\uff0c\u4e3a\u60a8\u63d0\u4f9b\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u5e94\u8be5\u505a\u4ec0\u4e48\u6765\u4fc3\u8fdb\u8fd9\u4e00\u70b9\uff1f\u4f11\u606f\u3002\u52a0\u8f7d\u4f60\u7684\u540e\u53f0\u601d\u7ef4\uff0c\u7136\u540e\u6b63\u786e\u5173\u95ed\u3002\u5f53\u4f60\u8ba9\u6709\u610f\u8bc6\u7684\u5927\u8111\u6709\u65f6\u95f4\u4f11\u606f\u65f6\uff0c\u4f60\u5c31\u4f1a\u6fc0\u6d3b\u65e0\u610f\u8bc6\u7684\u5927\u8111\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u52a0\u8f7d\u4f60\u7684\u80cc\u666f\u601d\u7ef4\uff0c\u4f60\u56de\u987e\u4e00\u4e0b\u4f60\u5728\u524d\u9762\u7684\u6b65\u9aa4\u4e2d\u5199\u4e0b\u7684\u6240\u6709\u5185\u5bb9\uff0c\u5e76\u771f\u6b63\u4e13\u6ce8\u4e8e\u5b83\u3002\u56e0\u4e3a\u4f60\u6e05\u9192\u65f6\u7684\u5927\u8111\u4e00\u6b21\u53ea\u80fd\u8bb0\u5f55\u8fd9\u4e48\u591a\u4fe1\u606f\uff087 +- 2\uff0c\u79f0\u4e3a\u7c73\u52d2\u9b54\u6570\uff09\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u5199\u4e0b\u4f60\u6240\u77e5\u9053\u7684\u6709\u5173\u95ee\u9898\u7684\u6240\u6709\u4fe1\u606f\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4fe1\u606f\u4ea4\u6362\u56de\u5f53\u4f60\u9700\u8981\u7684\u65f6\u5019\u4f60\u7684\u5de5\u4f5c\u8bb0\u5fc6\u3002\u8981\u5c06\u6240\u6709\u8fd9\u4e9b\u52a0\u8f7d\u5230\u4f60\u7684\u80cc\u666f\u601d\u7ef4\u4e2d\uff0c\u4f60\u9700\u8981\u8c03\u67e5\u4f60\u5199\u4e0b\u7684\u6240\u6709\u5185\u5bb9\uff0c\u8ba9\u4f60\u7684\u80cc\u666f\u601d\u7ef4\u6709\u673a\u4f1a\u5728\u4f60\u7684\u5de5\u4f5c\u601d\u7ef4\u6ca1\u6709\u610f\u8bc6\u5230\u7684\u4e0d\u540c\u4e8b\u7269\u4e4b\u95f4\u5efa\u7acb\u8054\u7cfb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5e0c\u57fa\u5f3a\u8c03\uff0c\u4f60\u65e0\u6cd5\u5728\u8ba1\u7b97\u673a\u4e0a\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u4f60\u9700\u8981\u53bb\u67d0\u4e2a\u5730\u65b9\u5e76\u4e14\u6ca1\u6709\u5916\u90e8\u8f93\u5165\u3002\u4ed6\u5efa\u8bae\u4f60\u53bb\u4e00\u4e2a\u53ef\u4ee5\u95ed\u4e0a\u773c\u775b\u4f46\u4e0d\u7761\u89c9\u7684\u5730\u65b9\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5c06\u4f60\u7684\u5927\u8111\u4ece\u5916\u90e8\u8f93\u5165\u5207\u6362\u5230\u5185\u90e8\u8f93\u5165\uff08\u4f60\u521a\u521a\u56de\u987e\u7684\u6709\u5173\u4f60\u7684\u95ee\u9898\u7684\u6240\u6709\u4fe1\u606f\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u4e00\u4e2a\u5b50\u6b65\u9aa4\u662f\u5c06\u95ee\u9898\u6682\u65f6\u6401\u7f6e\u4e00\u6bb5\u65f6\u95f4\uff0c\u8ba9\u4f60\u7684\u80cc\u666f\u601d\u7ef4\u53bb\u505a\u5b83\u7684\u4e8b\u60c5\u3002\u7761\u7720\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u65b9\u6cd5\uff0c\u6216\u8005\u6563\u6b65\uff0c\u6216\u8005\u4efb\u4f55\u80fd\u8ba9\u4f60\u6e05\u9192\u7684\u5934\u8111\u6446\u8131\u95ee\u9898\u7684\u65b9\u6cd5\u3002\u5982\u679c\u4f60\u6b63\u5728\u89e3\u51b3\u4e00\u4e2a\u96be\u9898\uff0c\u4f60\u5e94\u8be5\u81f3\u5c11\u7761\u4e00\u665a\uff0c\u5982\u679c\u662f\u4e00\u4e2a\u975e\u5e38\u96be\u7684\u95ee\u9898\uff0c\u5c31\u5e94\u8be5\u7761\u66f4\u591a\u7684\u89c9\u3002\u4ec5\u4ec5\u56e0\u4e3a\u4f60\u7acb\u523b\u5c31\u6709\u4e86\u4e00\u4e2a\u60f3\u6cd5\uff0c\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u660e\u5929\u65e9\u4e0a\u5c31\u4e0d\u4f1a\u6709\u66f4\u597d\u7684\u60f3\u6cd5\u3002\u4e00\u65e6\u4f60\u6709\u4e86\u4e00\u4e2a\u60f3\u6cd5\uff0c\u5c31\u8981\u5206\u6790\u5b83\uff0c\u800c\u4e0d\u662f\u53ea\u662f\u4ed8\u8bf8\u5b9e\u65bd\u3002\u4ec5\u4ec5\u56e0\u4e3a\u4f60\u7761\u5728\u4e0a\u9762\u5e76\u4e0d\u610f\u5473\u7740\u65e9\u4e0a\u7a81\u7136\u51fa\u73b0\u5728\u4f60\u8111\u6d77\u4e2d\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5b8c\u7f8e\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u4f46\u91cd\u8981\u7684\u662f\uff0c\u9700\u8981\u4ee3\u7801\u3002\u60a8\u9700\u8981\u91c7\u7eb3\u60a8\u7684\u597d\u60f3\u6cd5\uff0c\u5e76\u786e\u4fdd\u5b83\u4eec\u80fd\u591f\u89e3\u51b3\u60a8\u8ba4\u4e3a\u53ef\u4ee5\u89e3\u51b3\u7684\u95ee\u9898"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);