"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[25796],{91651:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var l=d(18455),c=d(74848),s=d(28453);const r={authors:["orange"],tags:["troubleshooting","ldap","nslcd"]},o="\u901a\u8fc7\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can't contact LDAP server\u65e5\u5fd7\u62a5\u9519",a={authorsImageUrls:[void 0]},i=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e6\u53d1\u4e86<code>ldap-server</code>\u7684\u8fde\u63a5\u8d85\u65f6",id:"\u89e6\u53d1\u4e86ldap-server\u7684\u8fde\u63a5\u8d85\u65f6",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u521b\u5efa<code>change-timeout.ldif</code>\u6587\u4ef6",id:"\u521b\u5efachange-timeoutldif\u6587\u4ef6",level:3},{value:"\u901a\u8fc7<code>ldapmodify</code>\u547d\u4ee4\u4fee\u6539\u8d85\u65f6\u65f6\u95f4",id:"\u901a\u8fc7ldapmodify\u547d\u4ee4\u4fee\u6539\u8d85\u65f6\u65f6\u95f4",level:3},{value:"\u786e\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f\u5426\u4fee\u6539\u6210\u529f",id:"\u786e\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f\u5426\u4fee\u6539\u6210\u529f",level:3},{value:"\u91cd\u542f<code>ldap-server</code>",id:"\u91cd\u542fldap-server",level:3},{value:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u751f\u6548",id:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u751f\u6548",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u7684\u914d\u7f6e\u6587\u4ef6",id:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684<code>nslcd</code>\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6",id:"\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684nslcd\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u67e5\u770b<code>ldap-server</code>\u7684<code>olcRoot</code>\u7528\u6237\u7684\u4fe1\u606f",id:"\u67e5\u770bldap-server\u7684olcroot\u7528\u6237\u7684\u4fe1\u606f",level:3},{value:"\u786e\u4fdd<code>fd</code>\u6570\u91cf\u53ef\u7528",id:"\u786e\u4fddfd\u6570\u91cf\u53ef\u7528",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u5ba2\u6237\u7528\u4f8b\u6267\u884c\u5931\u8d25, \u5176\u731c\u6d4b\u53ef\u80fd\u662f",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u4e2d\u7684",(0,c.jsx)(n.code,{children:"Can't contact LDAP server"}),"\u76f8\u5173\u62a5\u9519\u5bfc\u81f4\u5176\u751f\u4ea7\u7528\u4f8b\u6267\u884c\u5931\u8d25.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"nslcd"}),"\u65e5\u5fd7\u5982\u4e0b:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-log",children:'[fastone@layout01 ~]$ sudo journalctl -t nslcd| tail --line 20\nMar 28 11:58:24 layout01 nslcd[25607]: [debc9e] <group="fsadmin"> connected to LDAP server ldap://172.20.3.126:389\nMar 28 11:59:17 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> ldap_search_ext() failed: Can\'t contact LDAP server: Broken pipe\nMar 28 11:59:17 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> no available LDAP server found, sleeping 1 seconds\nMar 28 11:59:18 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> connected to LDAP server ldap://172.20.3.126:389\nMar 28 12:00:01 layout01 nslcd[25607]: [272b88] <group/member="root"> ldap_result() failed: Can\'t contact LDAP server\nMar 28 12:00:36 layout01 nslcd[25607]: [66b17f] <group=2001> ldap_search_ext() failed: Can\'t contact LDAP server: Broken pipe\nMar 28 12:00:36 layout01 nslcd[25607]: [66b17f] <group=2001> no available LDAP server found, sleeping 1 seconds\nMar 28 12:00:37 layout01 nslcd[25607]: [66b17f] <group=2001> connected to LDAP server ldap://172.20.3.126:389\nMar 28 12:00:38 layout01 nslcd[25607]: [a15030] <passwd=2004> ldap_search_ext() failed: Can\'t contact LDAP server: Broken pipe\nMar 28 12:00:38 layout01 nslcd[25607]: [a15030] <passwd=2004> no available LDAP server found, sleeping 1 seconds\nMar 28 12:00:39 layout01 nslcd[25607]: [a15030] <passwd=2004> connected to LDAP server ldap://172.20.3.126:389\nMar 28 12:00:39 layout01 nslcd[25607]: [9b7b93] <passwd=2001> ldap_result() failed: Can\'t contact LDAP server\nMar 28 12:00:54 layout01 nslcd[25607]: [97bb68] <passwd=2011> ldap_result() failed: Can\'t contact LDAP server\nMar 28 12:01:36 layout01 nslcd[25607]: [005d16] <group=2011> ldap_result() failed: Can\'t contact LDAP server\nMar 28 12:03:39 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> ldap_search_ext() failed: Can\'t contact LDAP server: Broken pipe\nMar 28 12:03:39 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> no available LDAP server found, sleeping 1 seconds\nMar 28 12:03:40 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> connected to LDAP server ldap://172.20.3.126:389\nMar 28 12:03:47 layout01 nslcd[25607]: [0f614b] <group/member="root"> ldap_search_ext() failed: Can\'t contact LDAP server: Broken pipe\nMar 28 12:03:47 layout01 nslcd[25607]: [0f614b] <group/member="root"> no available LDAP server found, sleeping 1 seconds\nMar 28 12:03:48 layout01 nslcd[25607]: [0f614b] <group/member="root"> connected to LDAP server ldap://172.20.3.126:389\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u53d1\u73b0",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u7ecf\u5e38\u51fa\u73b0",(0,c.jsx)(n.code,{children:"Can't contact LDAP server"}),".",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,c.jsxs)(n.h3,{id:"\u89e6\u53d1\u4e86ldap-server\u7684\u8fde\u63a5\u8d85\u65f6",children:["\u89e6\u53d1\u4e86",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8fde\u63a5\u8d85\u65f6"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u89e6\u53d1\u4e86",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8d85\u65f6\u65f6\u95f4, \u4ece\u800c\u5bfc\u81f4",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u4e2d\u7684",(0,c.jsx)(n.code,{children:"Can't contact LDAP server"}),"\u76f8\u5173\u62a5\u9519.",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u6211\u4eec\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u4e3a",(0,c.jsx)(n.code,{children:"30s"}),"\u4e3a\u4e86\u786e\u4fdd\u8fde\u63a5\u4e0d\u4f1a\u88ab\u4e00\u76f4\u5360\u7528\u4ece\u800c\u5bfc\u81f4\u670d\u52a1\u7aef\u8d1f\u8f7d\u8fc7\u9ad8.",(0,c.jsx)("br",{}),"\n\u4f46\u662f\u9891\u7e41\u51fa\u73b0\u8fd9\u4e2a\u9519\u8bef\u4f1a\u8ba9\u5ba2\u6237\u8ba4\u4e3a\u662f\u6211\u4eec\u7684",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u51fa\u73b0\u95ee\u9898\u5bfc\u81f4\u5176\u7528\u4f8b\u5931\u8d25, \u6211\u4eec\u9700\u8981\u5ef6\u957f\u8d85\u65f6\u65f6\u95f4\u6765\u907f\u514d\u5ba2\u6237\u7684\u8bef\u89e3.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898, \u6211\u4eec\u9700\u8981\u4fee\u6539",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8d85\u65f6\u65f6\u95f4.",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u4e2d\u7684\u8d85\u65f6\u65f6\u95f4\u662f\u901a\u8fc7",(0,c.jsx)(n.code,{children:"olcIdleTimeout"}),"\u6765\u8bbe\u7f6e\u7684.",(0,c.jsx)("br",{}),"\n\u901a\u8fc7\u4fee\u6539\u6b64\u503c\u53ef\u4ee5\u5ef6\u957f",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4.",(0,c.jsx)("br",{}),"\n\u9700\u8981\u6ce8\u610f\u7684\u662f, ",(0,c.jsx)(n.code,{children:"olcIdleTimeout"}),"\u7684\u5355\u4f4d\u662f\u79d2.",(0,c.jsx)("br",{}),"\n\u53e6\u5916\u7684\u4e00\u4e2a\u6ce8\u610f\u4e8b\u9879\u662f\u4fee\u6539\u6b64\u503c\u9700\u8981\u901a\u8fc7",(0,c.jsx)(n.code,{children:"ldap"}),"\u4e2d\u7684",(0,c.jsx)(n.code,{children:"config"}),"\u6570\u636e\u5e93\u7684",(0,c.jsx)(n.code,{children:"admin"}),"\u7528\u6237\u6765\u4fee\u6539.",(0,c.jsx)("br",{}),"\n\u4fee\u6539\u5b8c\u6210\u4e4b\u540e, \u6211\u4eec\u9700\u8981\u91cd\u542f",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u670d\u52a1.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.h3,{id:"\u521b\u5efachange-timeoutldif\u6587\u4ef6",children:["\u521b\u5efa",(0,c.jsx)(n.code,{children:"change-timeout.ldif"}),"\u6587\u4ef6"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5148\u521b\u5efa\u5982\u4e0b\u6587\u4ef6, \u4e3a\u4e86\u65b9\u4fbf, \u6211\u4eec\u5c06\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a",(0,c.jsx)(n.code,{children:"12h"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ldif",metastring:'title="change-timeout.ldif"',children:"dn: cn=config\nchangetype: modify\nreplace: olcIdleTimeout\nolcIdleTimeout: 43200\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u901a\u8fc7ldapmodify\u547d\u4ee4\u4fee\u6539\u8d85\u65f6\u65f6\u95f4",children:["\u901a\u8fc7",(0,c.jsx)(n.code,{children:"ldapmodify"}),"\u547d\u4ee4\u4fee\u6539\u8d85\u65f6\u65f6\u95f4"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u8fde\u63a5",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u5e76\u6267\u884c",(0,c.jsx)(n.code,{children:"ldapmodify"}),"\u547d\u4ee4\u6765\u4fee\u6539",(0,c.jsx)(n.code,{children:"ldap"}),"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4.",(0,c.jsx)("br",{}),"\n\u7136\u540e\u6267\u884c\u5982\u4e0b\u547d\u4ee4"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f, \u6267\u884c",(0,c.jsx)(n.code,{children:"ldapmodify"}),"\u547d\u4ee4",(0,c.jsx)(n.code,{children:"bind"}),"\u7684\u7528\u6237\u4e3a",(0,c.jsx)(n.code,{children:"cn=admin,cn=config"}),"\u7528\u6237, \u8be5\u7528\u6237\u662f",(0,c.jsx)(n.code,{children:"config"}),"\u6570\u636e\u5e93\u7684",(0,c.jsx)(n.code,{children:"admin"}),"\u7528\u6237.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"ldapmodify -x -D cn=admin,cn=config -w <password-of-config-admin> -f change-timeout.ldif\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c06\u4f1a\u8f93\u51fa\u5982\u4e0b\u5185\u5bb9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-log",children:'modifying entry "cn=config"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u770b\u5230\u4e0a\u9762\u7684\u8f93\u51fa\u65f6, \u8bf4\u660e\u8d85\u65f6\u65f6\u95f4\u5df2\u7ecf\u4fee\u6539\u6210\u529f.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.h3,{id:"\u786e\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f\u5426\u4fee\u6539\u6210\u529f",children:"\u786e\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f\u5426\u4fee\u6539\u6210\u529f"}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"ldapsearch -x -D cn=admin,cn=config -w <password-of-config-admin> -b cn=config|grep olcIdleTimeout\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c06\u4f1a\u8f93\u51fa\u5982\u4e0b\u5185\u5bb9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-log",children:"olcIdleTimeout: 43200\nolcAttributeTypes: ( OLcfgGlAt:18 NAME 'olcIdleTimeout' SYNTAX OMsInteger SING\n PendingAuth $ olcDisallows $ olcGentleHUP $ olcIdleTimeout $ olcIndexSubstrIf\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u8f93\u51fa\u7684\u5185\u5bb9\u53ef\u4ee5\u770b\u5230",(0,c.jsx)(n.code,{children:"olcIdleTimeout"}),"\u7684\u503c\u5df2\u7ecf\u88ab\u4fee\u6539\u4e3a",(0,c.jsx)(n.code,{children:"43200"}),".",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.h3,{id:"\u91cd\u542fldap-server",children:["\u91cd\u542f",(0,c.jsx)(n.code,{children:"ldap-server"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u914d\u7f6e\u751f\u6548, \u6211\u4eec\u9700\u8981\u91cd\u542f",(0,c.jsx)(n.code,{children:"ldap"}),"\u670d\u52a1.",(0,c.jsx)("br",{}),"\n\u4e0d\u540c\u7684",(0,c.jsx)(n.code,{children:"ldap"}),"\u670d\u52a1\u7684\u91cd\u542f\u65b9\u5f0f\u4e0d\u540c, \u8fd9\u91cc\u4ee5",(0,c.jsx)(n.code,{children:"ldap"}),"\u5bb9\u5668\u4e3a\u4f8b.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker restart <ldap-container>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u751f\u6548",children:"\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u751f\u6548"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5b89\u88c5\u6709",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u7684\u673a\u5668\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4.",(0,c.jsx)("br",{}),"\n\u4e24\u4e2a\u547d\u4ee4\u4e2d\u95f4\u95f4\u9694",(0,c.jsx)(n.code,{children:"35s"}),". \u5982\u679c\u914d\u7f6e\u6ca1\u751f\u6548\u90a3\u4e4830s\u540e\u4f1a\u518d\u6b21\u51fa\u73b0",(0,c.jsx)(n.code,{children:"Can't contact LDAP server"}),"\u7684\u62a5\u9519.",(0,c.jsx)("br",{}),"\n\u56e0\u4e3a\u6211\u4eec\u4e00\u5f00\u59cb\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\u662f",(0,c.jsx)(n.code,{children:"30s"}),", \u6240\u4ee5\u6211\u4eec\u9700\u8981\u95f4\u9694",(0,c.jsx)(n.code,{children:"35s"}),"\u6765\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u751f\u6548.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"getent passwd -s ldap && sleep 35s && getent passwd -s ldap\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884c\u671f\u95f4\u6211\u4eec\u9700\u8981\u89c2\u5bdf",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u7684\u65e5\u5fd7.",(0,c.jsx)("br",{}),"\n\u6700\u597d\u5f00\u4e24\u4e2a\u7ec8\u7aef, \u4e00\u4e2a\u6267\u884c\u547d\u4ee4, \u4e00\u4e2a\u67e5\u770b\u65e5\u5fd7. \u8fd9\u6837\u53ef\u4ee5\u66f4\u52a0\u76f4\u89c2\u7684\u770b\u5230\u65e5\u5fd7.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"journalctl -u nslcd -f\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u914d\u7f6e\u751f\u6548\u90a3\u4e48\u6211\u4eec\u5c06\u4e0d\u4f1a\u770b\u5230",(0,c.jsx)(n.code,{children:"Can't contact LDAP server"}),"\u7684\u62a5\u9519.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,c.jsx)(n.h3,{id:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u7684\u914d\u7f6e\u6587\u4ef6",children:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ldif",metastring:'title="change-timeout.ldif"',children:"dn: cn=config\nchangetype: modify\nreplace: olcIdleTimeout\nolcIdleTimeout: 30\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684nslcd\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6",children:["\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684",(0,c.jsx)(n.code,{children:"nslcd"}),"\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cat /etc/nslcd.conf\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u67e5\u770bldap-server\u7684olcroot\u7528\u6237\u7684\u4fe1\u606f",children:["\u67e5\u770b",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684",(0,c.jsx)(n.code,{children:"olcRoot"}),"\u7528\u6237\u7684\u4fe1\u606f"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"olcRoot"}),"\u662f",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8d85\u7ea7\u7ba1\u7406\u5458, \u901a\u8fc7\u8be5\u7528\u6237\u53ef\u4ee5\u5bf9",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u8fdb\u884c\u7ba1\u7406.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684",(0,c.jsx)(n.code,{children:"olcRoot"}),"\u7528\u6237\u7684\u4fe1\u606f.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cd /etc/ldap/slapd.d/cn=config && grep -r 'olcRoot' *\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c06\u4f1a\u8f93\u51fa\u5982\u4e0b\u53c2\u8003\u5185\u5bb9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-log",children:"olcDatabase={0}config.ldif:olcRootDN: cn=admin,cn=config\nolcDatabase={0}config.ldif:olcRootPW:: xxxx\nolcDatabase={1}mdb.ldif:olcRootDN: cn=admin,dc=demo,dc=com\nolcDatabase={1}mdb.ldif:olcRootPW:: xxxx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u4e0a\u8ff0\u8f93\u51fa\u53ef\u4ee5\u770b\u5230\u6709\u4e24\u4e2a",(0,c.jsx)(n.code,{children:"olcRoot"}),"\u7528\u6237, \u4e00\u4e2a\u662f",(0,c.jsx)(n.code,{children:"cn=admin,cn=config"}),", \u53e6\u4e00\u4e2a\u662f",(0,c.jsx)(n.code,{children:"cn=admin,dc=demo,dc=com"}),".",(0,c.jsx)("br",{}),"\n\u6709\u8fd9\u4e24\u4e2a\u7528\u6237\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u5176\u662f\u4e0d\u540c",(0,c.jsx)(n.code,{children:"olcDatabase"}),"\u7684",(0,c.jsx)(n.code,{children:"olcRoot"}),"\u7528\u6237.",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.code,{children:"olcDatabase={0}config.ldif"}),"\u662f",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u914d\u7f6e\u6570\u636e\u5e93. \u5176\u4e3b\u8981\u5b58\u653e\u4e86",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u914d\u7f6e\u4fe1\u606f.",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.code,{children:"olcDatabase={1}mdb.ldif"}),"\u662f",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u6570\u636e\u6570\u636e\u5e93. \u5176\u4e3b\u8981\u5b58\u653e\u4e86",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u6570\u636e\u4fe1\u606f, \u8be5\u6570\u636e\u662f\u7ed9\u6211\u4eec\u4f7f\u7528\u7684.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.h3,{id:"\u786e\u4fddfd\u6570\u91cf\u53ef\u7528",children:["\u786e\u4fdd",(0,c.jsx)(n.code,{children:"fd"}),"\u6570\u91cf\u53ef\u7528"]}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u4e3a\u4e0a\u9762\u4fee\u6539\u4e86",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684\u8d85\u65f6\u65f6\u95f4, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u786e\u4fdd",(0,c.jsx)(n.code,{children:"ldap-server"}),"\u7684",(0,c.jsx)(n.code,{children:"fd"}),"\u6570\u91cf\u8db3\u591f.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.openldap.org/devel/admin/slapdconf2.html",children:"Configuring slapd"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://linux.die.net/man/1/ldapmodify",children:"ldapmodify(1) - Linux man page"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>o});var l=d(96540);const c={},s=l.createContext(c);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(s.Provider,{value:n},e.children)}},18455:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/03/28/ldap-idle-timeout","source":"@site/blog/2023-03-28-ldap-idle-timeout.md","title":"\u901a\u8fc7\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can\'t contact LDAP server\u65e5\u5fd7\u62a5\u9519","description":"\u5ba2\u6237\u7528\u4f8b\u6267\u884c\u5931\u8d25, \u5176\u731c\u6d4b\u53ef\u80fd\u662fnslcd\u670d\u52a1\u4e2d\u7684Can\'t contact LDAP server\u76f8\u5173\u62a5\u9519\u5bfc\u81f4\u5176\u751f\u4ea7\u7528\u4f8b\u6267\u884c\u5931\u8d25.","date":"2023-03-28T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/blog/tags/troubleshooting"},{"inline":true,"label":"ldap","permalink":"/blog/tags/ldap"},{"inline":true,"label":"nslcd","permalink":"/blog/tags/nslcd"}],"readingTime":6.88,"hasTruncateMarker":false,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","ldap","nslcd"]},"unlisted":false,"prevItem":{"title":"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5","permalink":"/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error"},"nextItem":{"title":"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5","permalink":"/blog/2023/03/27/grpc-tls-handshake-failed"}}')}}]);