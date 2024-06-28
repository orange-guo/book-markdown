"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7545],{63367:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var d=n(74848),o=n(28453);const c={authors:["xiangcheng.kuo"],tags:["problem-solving","ssh","ldap"]},t="SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",r={permalink:"/blog/2023/03/09/ssh-execution-timeout",source:"@site/blog/2023-03-09/ssh-execution-timeout.md",title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",description:"\u4eca\u5929\u7ebf\u4e0a\u51fa\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u6b64\u95ee\u9898\u7684\u73b0\u8c61\u662f\u7528\u6237\u5728\u9875\u9762\u4e0a\u70b9\u51fb\u521b\u5efaVNC\u8fdc\u7a0b\u94fe\u63a5\u4f1a\u7b49\u5f85\u5f88\u4e45\u4e14\u54cd\u5e94\u5931\u8d25",date:"2023-03-09T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"ssh",permalink:"/blog/tags/ssh"},{inline:!0,label:"ldap",permalink:"/blog/tags/ldap"}],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","ssh","ldap"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",permalink:"/blog/2023/03/13/intellij-idea-java-decompiler"},nextItem:{title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",permalink:"/blog/2023/03/06/problem-build-native-springboot-application"}},l={authorsImageUrls:[void 0]},a=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u6392\u67e5\u8fc7\u7a0b",id:"\u6392\u67e5\u8fc7\u7a0b",level:2},{value:"1. \u67e5\u770b\u540e\u7aef\u670d\u52a1\u65e5\u5fd7",id:"1-\u67e5\u770b\u540e\u7aef\u670d\u52a1\u65e5\u5fd7",level:3},{value:"2. \u767b\u5f55\u670d\u52a1\u5668\u5e76\u67e5\u770b<code>sshd</code>\u65e5\u5fd7",id:"2-\u767b\u5f55\u670d\u52a1\u5668\u5e76\u67e5\u770bsshd\u65e5\u5fd7",level:3},{value:"3. \u67e5\u770b<code>nslcd</code>\u65e5\u5fd7",id:"3-\u67e5\u770bnslcd\u65e5\u5fd7",level:3},{value:"4. \u542f\u7528<code>nscd</code>\u670d\u52a1\u4ece\u800c<code>workaround</code>\u6b64\u95ee\u9898",id:"4-\u542f\u7528nscd\u670d\u52a1\u4ece\u800cworkaround\u6b64\u95ee\u9898",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u5982\u4f55\u907f\u514d\u7c7b\u4f3c\u95ee\u9898",id:"\u5982\u4f55\u907f\u514d\u7c7b\u4f3c\u95ee\u9898",level:3},{value:"\u670d\u52a1\u4fa7",id:"\u670d\u52a1\u4fa7",level:4},{value:"\u5ba2\u6237\u7aef\u4fa7",id:"\u5ba2\u6237\u7aef\u4fa7",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function i(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["\u4eca\u5929\u7ebf\u4e0a\u51fa\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u6b64\u95ee\u9898\u7684\u73b0\u8c61\u662f\u7528\u6237\u5728\u9875\u9762\u4e0a\u70b9\u51fb\u521b\u5efa",(0,d.jsx)(s.code,{children:"VNC"}),"\u8fdc\u7a0b\u94fe\u63a5\u4f1a\u7b49\u5f85\u5f88\u4e45\u4e14\u54cd\u5e94\u5931\u8d25",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,d.jsxs)(s.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,d.jsx)(s.code,{children:"ssh"}),"\u547d\u4ee4\u6267\u884c\u8d85\u65f6, ",(0,d.jsx)(s.code,{children:"ssh"}),"\u547d\u4ee4\u8d85\u65f6\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u6bcf\u6b21",(0,d.jsx)(s.code,{children:"ssh"}),"\u6267\u884c\u547d\u4ee4\u65f6\u9700\u8981\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1,\n\u7cfb\u7edf\u4e2d\u63a5\u5165\u4e86\u5916\u7f6e\u8ba4\u8bc1\u7cfb\u7edf",(0,d.jsx)(s.code,{children:"ldap"}),"\u8fdb\u884c\u8ba4\u8bc1, \u4f46\u7531\u4e8e\u8bbf\u95ee\u5916\u90e8\u8ba4\u8bc1\u670d\u52a1\u5f88\u6162\u5bfc\u81f4\u89e6\u53d1\u4e86\u8d85\u65f6.",(0,d.jsx)("br",{}),"\n\u8ba4\u8bc1\u670d\u52a1\u5bf9\u5e94",(0,d.jsx)(s.code,{children:"lb"}),"\u4f1a\u8f6c\u53d1\u5230\u51fa\u95ee\u9898\u7684",(0,d.jsx)(s.code,{children:"ldap"}),"\u670d\u52a1\u5668, \u4ece\u800c\u5bfc\u81f4\u8ba4\u8bc1\u670d\u52a1\u8bbf\u95ee\u5f88\u6162.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.h2,{id:"\u6392\u67e5\u8fc7\u7a0b",children:"\u6392\u67e5\u8fc7\u7a0b"}),"\n",(0,d.jsx)(s.h3,{id:"1-\u67e5\u770b\u540e\u7aef\u670d\u52a1\u65e5\u5fd7",children:"1. \u67e5\u770b\u540e\u7aef\u670d\u52a1\u65e5\u5fd7"}),"\n",(0,d.jsxs)(s.p,{children:["\u540e\u7aef\u65e5\u5fd7\u5982\u4e0b",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:'2023-03-09 10:34:37\t2023-03-09T02:34:36.844168954Z stdout F 2023-03-09 02:34:36.844  INFO 1 --- [nio-2000-exec-6] c.f.c.s.c.LocalAuthenticationProvider    : into local DB authenticate, user is::foo\n2023-03-09 10:34:40\t2023-03-09T02:34:40.258742954Z stdout F 2023-03-09 02:34:40.258  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ getent passwd foo | awk -F: \'{print $6}\'\n2023-03-09 10:34:44\t2023-03-09T02:34:44.382676144Z stdout F 2023-03-09 02:34:44.382  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ sudo -i -u foo mkdir -p /fastone/users/foo/.foo\n2023-03-09 10:34:49\t2023-03-09T02:34:49.36267293Z stdout F 2023-03-09 02:34:49.362  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ echo -e "foo\\foo\\nn\\n" | sudo -i -u foo sh -c "VNC_HOME=/fastone/users/foo/.foo vncserver -nolisten unix -listen tcp -maxclients 512 2>&1"\n2023-03-09 10:35:04\t2023-03-09T02:35:04.409356857Z stdout F 2023-03-09 02:35:04.409  WARN 1 --- [io-2000-exec-11] com.jcabi.ssh.Ssh                        : an exception during authentication\n2023-03-09 10:35:04\t2023-03-09T02:35:04.409378051Z stdout F java.net.SocketTimeoutException: Read timed out\n2023-03-09 10:35:04\t2023-03-09T02:35:04.410988161Z stdout F 2023-03-09 02:35:04.410 ERROR 1 --- [io-2000-exec-11] c.f.common.ssh.client.SshClient          : \u547d\u4ee4\u6267\u884c\u5931\u8d25!\n2023-03-09 10:35:04\t2023-03-09T02:35:04.411003386Z stdout F\n2023-03-09 10:35:04\t2023-03-09T02:35:04.411007586Z stdout F java.io.IOException: com.jcraft.jsch.JSchException: Auth fail\n2023-03-09 10:35:04\t2023-03-09T02:35:04.411011213Z stdout F \tat com.jcabi.ssh.Ssh.session(Ssh.java:281) ~[jcabi-ssh-1.6.1.jar:na]\n2023-03-09 10:35:04\t2023-03-09T02:35:04.411014796Z stdout F \tat com.jcabi.ssh.AbstractSshShell.exec(AbstractSshShell.java:95) ~[jcabi-ssh-1.6.1.jar:na]\n2023-03-09 10:35:04\t2023-03-09T02:35:04.41101828Z stdout F \tat com.jcabi.ssh.Ssh.exec(Ssh.java:77) ~[jcabi-ssh-1.6.1.jar:na]\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u5728\u4ee3\u7801\u4e2d, \u6211\u4eec\u4f7f\u7528\u4e86",(0,d.jsx)(s.code,{children:"jcabi-ssh"}),"\u6765\u6267\u884c",(0,d.jsx)(s.code,{children:"ssh"}),"\u547d\u4ee4.",(0,d.jsx)("br",{}),"\n\u6574\u4e2a\u521b\u5efa",(0,d.jsx)(s.code,{children:"VNC"}),"\u8fdc\u7a0b\u8fde\u63a5\u7684\u4e8b\u52a1\u9700\u8981\u6267\u884c\u56db\u6761",(0,d.jsx)(s.code,{children:"ssh"}),"\u547d\u4ee4, \u524d\u4e09\u6761\u547d\u4ee4\u90fd\u6267\u884c\u6210\u529f\u4e86, \u4f46\u662f\u6700\u540e\u4e00\u6761\u547d\u4ee4\u6267\u884c\u5931\u8d25\u4e86",(0,d.jsx)("br",{}),"\n\u62a5\u9519\u4fe1\u606f\u5982\u4e0b",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-log",children:"java.net.SocketTimeoutException: Read timed out\njava.io.IOException: com.jcraft.jsch.JSchException: Auth fail\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"2-\u767b\u5f55\u670d\u52a1\u5668\u5e76\u67e5\u770bsshd\u65e5\u5fd7",children:["2. \u767b\u5f55\u670d\u52a1\u5668\u5e76\u67e5\u770b",(0,d.jsx)(s.code,{children:"sshd"}),"\u65e5\u5fd7"]}),"\n",(0,d.jsxs)(s.p,{children:["\u9996\u5148\u9700\u8981\u770b\u4e0b",(0,d.jsx)(s.code,{children:"sshd"}),"\u7684\u65e5\u5fd7, \u901a\u8fc7",(0,d.jsx)(s.code,{children:"journalctl"}),"\u547d\u4ee4\u67e5\u770b",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"sudo journalctl -t sshd\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u8f93\u51fa\u5982\u4e0b",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-log",children:"Mar 09 02:34:38 desktop-1 sshd[11758]: Accepted publickey for fastone from 10.0.109.90 port 49590 ssh2: RSA SHA256:\nsqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad\nMar 09 02:34:38 desktop-1 sshd[11758]: pam_unix(sshd:session): session opened for user fastone by (uid=0)\nMar 09 02:34:41 desktop-1 sshd[11758]: pam_unix(sshd:session): session closed for user fastone\nMar 09 02:34:42 desktop-1 sshd[11766]: Accepted publickey for fastone from 10.0.109.90 port 57700 ssh2: RSA SHA256:\nsqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad\nMar 09 02:34:42 desktop-1 sshd[11766]: pam_unix(sshd:session): session opened for user fastone by (uid=0)\nMar 09 02:34:46 desktop-1 sshd[11766]: pam_unix(sshd:session): session closed for user fastone\nMar 09 02:34:47 desktop-1 sshd[11778]: Accepted publickey for fastone from 10.0.109.90 port 57710 ssh2: RSA SHA256:\nsqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad\nMar 09 02:34:47 desktop-1 sshd[11778]: pam_unix(sshd:session): session opened for user fastone by (uid=0)\nMar 09 02:34:54 desktop-1 sshd[11778]: pam_unix(sshd:session): session closed for user fastone\nMar 09 02:35:04 desktop-1 sshd[11875]: error: Received disconnect from 10.0.109.90 port 41620:3:\ncom.jcraft.jsch.JSchException: Auth fail [preauth]\nMar 09 02:35:04 desktop-1 sshd[11875]: Disconnected from authenticating user fastone 10.0.109.90 port 41620 [preauth]\n"})}),"\n",(0,d.jsxs)(s.p,{children:["ssh\u65e5\u5fd7\u4e2d\u524d\u4e09\u6b21\u662f\u6b63\u5e38\u7684, \u4f46\u662f\u7b2c\u56db\u6b21\u5c31\u62a5\u9519\u4e86, \u4ece\u62a5\u9519\u4fe1\u606f\u6765\u770b, \u662f",(0,d.jsx)(s.code,{children:"Auth fail"}),"\u7684\u95ee\u9898.",(0,d.jsx)("br",{}),"\n\u4ece\u65e5\u5fd7\u4e0a\u770b\u53d1\u73b0\u6bcf\u6b21\u6267\u884c\u547d\u4ee4\u7684\u65f6\u95f4\u90fd\u5f88\u957f, \u6709\u65f6\u5019\u4f1a\u8d85\u8fc7",(0,d.jsx)(s.code,{children:"10s"}),", \u6240\u4ee5\u6211\u731c\u6d4b\u662f",(0,d.jsx)(s.code,{children:"ssh"}),"\u8fde\u63a5\u8d85\u65f6\u4e86.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsxs)(s.h3,{id:"3-\u67e5\u770bnslcd\u65e5\u5fd7",children:["3. \u67e5\u770b",(0,d.jsx)(s.code,{children:"nslcd"}),"\u65e5\u5fd7"]}),"\n",(0,d.jsxs)(s.p,{children:["\u6839\u636e\u4e0a\u8ff0\u7684\u65e5\u5fd7\u5f97\u51fa\u662f",(0,d.jsx)(s.code,{children:"auth fail"}),"\u7684\u95ee\u9898, \u90a3\u4e48\u5927\u6982\u7387\u8ddf\u7528\u6237\u8ba4\u8bc1\u6709\u5173",(0,d.jsx)("br",{}),"\n\u76ee\u524d\u7cfb\u7edf\u4e2d\u4f7f\u7528\u7684\u8ba4\u8bc1\u670d\u52a1\u662f",(0,d.jsx)(s.code,{children:"ldap"}),", \u5e76\u901a\u8fc7",(0,d.jsx)(s.code,{children:"nslcd"}),"\u670d\u52a1\u6765\u8fde\u63a5",(0,d.jsx)(s.code,{children:"ldap"}),"\u5e76\u63d0\u4f9b\u8ba4\u8bc1\u670d\u52a1\u7684.",(0,d.jsx)("br",{}),"\n\u6839\u636e\u7ecf\u9a8c\u5224\u65ad\u53ef\u80fd\u662f\u7cfb\u7edf\u4e2d\u7684",(0,d.jsx)(s.code,{children:"nslcd"}),"\u670d\u52a1\u95ee\u9898. \u63a5\u4e0b\u6765\u9700\u8981\u67e5\u770b\u5176\u65e5\u5fd7",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"sudo service nslcd status\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u8f93\u51fa\u5982\u4e0b",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-log",children:'\u25cf nslcd.service - LSB: LDAP connection daemon\nLoaded: loaded (/etc/init.d/nslcd; generated)\nActive: active (running) since Thu 2023-03-09 02:00:08 UTC; 58min ago\nDocs: man:systemd-sysv-generator(8)\nProcess: 1360 ExecStart=/etc/init.d/nslcd start (code=exited, status=0/SUCCESS)\nTasks: 6 (limit: 4915)\nCGroup: /system.slice/nslcd.service\n\u2514\u25001497 /usr/sbin/nslcd\n\n\n\n\nMar 09 02:53:36 desktop-1 nslcd[1497]: [de9570] <group/member="root"> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:53:51 desktop-1 nslcd[1497]: [39d9ef] <group/member="root"> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:53:51 desktop-1 nslcd[1497]: [2e5952] <passwd=9159> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:54:01 desktop-1 nslcd[1497]: [0d1fd6] <passwd=9159> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:54:57 desktop-1 nslcd[1497]: [bec5a1] <passwd=9159> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:54:57 desktop-1 nslcd[1497]: [44bbc8] <passwd=9159> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:55:34 desktop-1 nslcd[1497]: [f50bda] <passwd=9159> ldap_result() failed: Can\'t contact LDAP server\nMar 09 02:56:25 desktop-1 nslcd[1497]: [c5f72e] <group/member="fastone"> ldap_result() timed out\nMar 09 02:56:25 desktop-1 nslcd[1497]: [f644f7] <group/member="u18846424945"> ldap_result() timed out\nMar 09 02:56:25 desktop-1 nslcd[1497]: [4db6bf] <group/member="u18846424945"> ldap_result() timed out\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u4ece\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230, ",(0,d.jsx)(s.code,{children:"nslcd"}),"\u670d\u52a1\u8bbf\u95ee",(0,d.jsx)(s.code,{children:"ldap"}),"\u8d85\u65f6\u4e86"]}),"\n",(0,d.jsxs)(s.h3,{id:"4-\u542f\u7528nscd\u670d\u52a1\u4ece\u800cworkaround\u6b64\u95ee\u9898",children:["4. \u542f\u7528",(0,d.jsx)(s.code,{children:"nscd"}),"\u670d\u52a1\u4ece\u800c",(0,d.jsx)(s.code,{children:"workaround"}),"\u6b64\u95ee\u9898"]}),"\n",(0,d.jsxs)(s.p,{children:["\u542f\u7528",(0,d.jsx)(s.code,{children:"nscd"}),"\u670d\u52a1, \u4ece\u800c",(0,d.jsx)(s.code,{children:"workaround"}),"\u6b64\u95ee\u9898, ",(0,d.jsx)(s.code,{children:"nscd"}),"\u670d\u52a1\u4f1a\u7f13\u5b58",(0,d.jsx)(s.code,{children:"nslcd"}),"\u670d\u52a1\u7684\u7ed3\u679c, \u4ece\u800c\u63d0\u5347\u901f\u5ea6.",(0,d.jsx)("br",{}),"\n\u4f46\u662f\u8fd9\u4e2a\u65b9\u6848\u53ea\u662f",(0,d.jsx)(s.code,{children:"workaround"}),"\u800c\u5df2, \u540e\u7eed\u9700\u8981\u8fd0\u7ef4\u540c\u5b66\u6765\u89e3\u51b3",(0,d.jsx)(s.code,{children:"ldap"}),"\u7684\u8fde\u63a5\u95ee\u9898",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"sudo service nscd start\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u542f\u7528",(0,d.jsx)(s.code,{children:"nscd"}),"\u670d\u52a1\u540e, \u786e\u8ba4\u4e0b\u901f\u5ea6\u662f\u5426\u6709\u63d0\u5347"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"time sudo getent passwd -s ldap\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-log",children:"real0m1.326s\nuser0m0.023s\nsys0m0.023s\n"})}),"\n",(0,d.jsx)(s.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,d.jsx)(s.h3,{id:"\u5982\u4f55\u907f\u514d\u7c7b\u4f3c\u95ee\u9898",children:"\u5982\u4f55\u907f\u514d\u7c7b\u4f3c\u95ee\u9898"}),"\n",(0,d.jsx)(s.h4,{id:"\u670d\u52a1\u4fa7",children:"\u670d\u52a1\u4fa7"}),"\n",(0,d.jsx)(s.p,{children:"\u5bf9\u4e8e\u8ba4\u8bc1\u670d\u52a1\u4fa7\u9700\u8981\u786e\u4fdd\u670d\u52a1\u7684\u7a33\u5b9a\u6027"}),"\n",(0,d.jsx)(s.h4,{id:"\u5ba2\u6237\u7aef\u4fa7",children:"\u5ba2\u6237\u7aef\u4fa7"}),"\n",(0,d.jsx)(s.p,{children:"\u5bf9\u4e8e\u8ba4\u8bc1\u7cfb\u7edf\u7684\u5ba2\u6237\u7aef\u4fa7, \u9700\u8981\u786e\u4fdd\u5ba2\u6237\u7aef\u7684\u7a33\u5b9a, \u4f8b\u5982\u589e\u52a0\u7f13\u5b58\u673a\u5236, \u4ece\u800c\u63d0\u5347\u901f\u5ea6"}),"\n",(0,d.jsx)(s.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://superuser.com/questions/1032251/multiple-ssh-connections-to-the-same-system-is-it-possible",children:"Multiple SSH connections to the same system - is it possible?"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://serverfault.com/questions/130482/how-to-check-sshd-log",children:"How to check sshd log?"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var d=n(96540);const o={},c=d.createContext(o);function t(e){const s=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(c.Provider,{value:s},e.children)}}}]);