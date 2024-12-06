"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[30208],{85219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>c,default:()=>t,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var r=i(97004),s=i(74848),l=i(28453);const d={authors:["orange"],tags:["linux","desktop","xorg","x11"]},c="X Window System",x={authorsImageUrls:[void 0]},o=[{value:"\u67b6\u6784\u6982\u8ff0",id:"\u67b6\u6784\u6982\u8ff0",level:2},{value:"\u4e3b\u8981\u7ec4\u4ef6",id:"\u4e3b\u8981\u7ec4\u4ef6",level:2},{value:"X Server",id:"x-server",level:3},{value:"X Client",id:"x-client",level:3},{value:"X Window Manager",id:"x-window-manager",level:3},{value:"X Display Manager",id:"x-display-manager",level:3},{value:"\u542f\u52a8\u6d41\u7a0b",id:"\u542f\u52a8\u6d41\u7a0b",level:2},{value:"<code>X Server</code>",id:"x-server-1",level:3},{value:"<code>X Client</code>",id:"x-client-1",level:3},{value:"REHL",id:"rehl",level:4},{value:"Debian",id:"debian",level:4},{value:"Arch",id:"arch",level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Window System"}),"(\u7b80\u79f0",(0,s.jsx)(n.code,{children:"X"}),"), \u56e0\u4e3a\u5176\u6700\u65b0\u7248\u672c\u4e3a",(0,s.jsx)(n.code,{children:"11"}),", \u6240\u4ee5\u4e5f\u88ab\u79f0\u4e3a",(0,s.jsx)(n.code,{children:"X11"}),". ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u4e3a\u56fe\u5f62\u684c\u9762\u7cfb\u7edf\u8bbe\u8ba1\u7684\u89c4\u8303\u6846\u67b6, \u6db5\u76d6\u4e86\u4ee5\u4e0b\u5173\u952e\u529f\u80fd:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c4f\u5e55\u56fe\u50cf\u7684\u6e32\u67d3\u548c\u663e\u793a"}),"\n",(0,s.jsx)(n.li,{children:"\u9f20\u6807\u548c\u952e\u76d8\u7684\u4ea4\u4e92\u5904\u7406"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"Linux"}),"\u73af\u5883\u4e0b, ",(0,s.jsx)(n.code,{children:"X Window System"}),"\u7684\u5b9e\u73b0\u662f",(0,s.jsx)(n.code,{children:"X.Org"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u67b6\u6784\u6982\u8ff0",children:"\u67b6\u6784\u6982\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X"}),"\u91c7\u7528\u5ba2\u6237\u7aef/\u670d\u52a1\u5668(C/S)\u67b6\u6784, \u7531",(0,s.jsx)(n.code,{children:"X Server"}),"\u548c\u591a\u4e2a",(0,s.jsx)(n.code,{children:"X Client"}),"\u7ec4\u6210. ",(0,s.jsx)("br",{}),"\n\u8fd9\u610f\u5473\u7740",(0,s.jsx)(n.code,{children:"X Server"}),"\u548c",(0,s.jsx)(n.code,{children:"X Client"}),"\u53ef\u4ee5\u5206\u522b\u5728\u4e0d\u540c\u7684\u8bbe\u5907\u4e0a\u8fd0\u884c. ",(0,s.jsx)("br",{}),"\n\u5e38\u89c1\u5e94\u7528\u573a\u666f\u5982",(0,s.jsx)(n.code,{children:"SSH X11 Forwarding"}),", \u5176\u4e2dSSH\u5ba2\u6237\u7aef\u8fd0\u884c",(0,s.jsx)(n.code,{children:"X Server"}),"\n, \u56fe\u5f62\u5e94\u7528\u5219\u5728SSH\u670d\u52a1\u5668\u4e0a\u8fd0\u884c, \u6240\u6709\u56fe\u5f62\u4ea4\u4e92\u90fd\u5728SSH\u5ba2\u6237\u7aef\u5b8c\u6210. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3b\u8981\u7ec4\u4ef6",children:"\u4e3b\u8981\u7ec4\u4ef6"}),"\n",(0,s.jsx)(n.h3,{id:"x-server",children:"X Server"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Server"}),"\u4f5c\u4e3a\u6865\u6881, \u8fde\u63a5\u5e95\u5c42\u786c\u4ef6\u8bbe\u5907\u548c\u4e0a\u5c42",(0,s.jsx)(n.code,{children:"X Client"}),", \u63d0\u4f9b\u4e0e\u786c\u4ef6\u4ea4\u4e92\u7684\u63a5\u53e3. \u786c\u4ef6\u8bbe\u5907\u5305\u62ec:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9f20\u6807"}),"\n",(0,s.jsx)(n.li,{children:"\u952e\u76d8"}),"\n",(0,s.jsx)(n.li,{children:"\u89e6\u6478\u677f"}),"\n",(0,s.jsx)(n.li,{children:"\u5c4f\u5e55"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e9b\u8bbe\u5907\u6309\u529f\u80fd\u5206\u4e3a",(0,s.jsx)(n.code,{children:"\u8f93\u5165\u8bbe\u5907"}),"\u548c",(0,s.jsx)(n.code,{children:"\u8f93\u51fa\u8bbe\u5907"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"x-client",children:"X Client"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Client"}),"\u662f",(0,s.jsx)(n.code,{children:"X Server"}),"\u7684\u5ba2\u6237\u7aef, \u5e38\u89c1\u7684",(0,s.jsx)(n.code,{children:"X Client"}),"\u5305\u62ec:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Firefox"}),"\n",(0,s.jsx)(n.li,{children:"Chromium"}),"\n",(0,s.jsx)(n.li,{children:"Thunderbird"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"x-window-manager",children:"X Window Manager"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Window Manager"}),"\u662f\u4e00\u4e2a\u7279\u6b8a\u7c7b\u578b\u7684",(0,s.jsx)(n.code,{children:"X Client"}),", \u8d1f\u8d23\u7ba1\u7406\u5176\u4ed6",(0,s.jsx)(n.code,{children:"Client"}),", \u5982\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u548c\u7f29\u653e. \u5e38\u89c1\u7684",(0,s.jsx)(n.code,{children:"Window Manager"}),"\u5305\u62ec:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GNOME"}),"\n",(0,s.jsx)(n.li,{children:"KDE"}),"\n",(0,s.jsx)(n.li,{children:"XFCE"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"x-display-manager",children:"X Display Manager"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Display Manager"}),"\u8d1f\u8d23\u7528\u6237\u767b\u5f55\u63a7\u5236, \u9a8c\u8bc1\u7528\u6237\u8eab\u4efd(\u5982\u7528\u6237\u540d\u548c\u5bc6\u7801\u6216\u6307\u7eb9), \u5e76\u51b3\u5b9a\u662f\u5426\u542f\u52a8\u56fe\u5f62\u7cfb\u7edf. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e38\u89c1\u7684",(0,s.jsx)(n.code,{children:"Display Manager"}),"\u5305\u62ec:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GDM"}),"\n",(0,s.jsx)(n.li,{children:"SDDM"}),"\n",(0,s.jsx)(n.li,{children:"LightDM"}),"\n",(0,s.jsx)(n.li,{children:"KDM"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u542f\u52a8\u6d41\u7a0b",children:"\u542f\u52a8\u6d41\u7a0b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X"}),"\u7684\u542f\u52a8\u5165\u53e3\u4e3a",(0,s.jsx)(n.code,{children:"startx"}),"\u547d\u4ee4(\u6b64\u547d\u4ee4\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"/bin/startx"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#\n# This is just a sample implementation of a slightly less primitive\n# interface than xinit. It looks for XINITRC and XSERVERRC environment\n# variables, then user .xinitrc and .xserverrc files, and then system\n# xinitrc and xserverrc files, else lets xinit choose its default.\n# The system xinitrc should probably do things like check for\n# .Xresources files and merge them in, start up a window manager, and\n# pop a clock and several xterms.\n#\n# Site administrators are STRONGLY urged to write nicer versions.\n#\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u662f\u5bf9",(0,s.jsx)(n.code,{children:"xinit"}),"\u547d\u4ee4\u7684\u5c01\u88c5, \u5b83\u4f1a\u6839\u636e",(0,s.jsx)(n.code,{children:"X Server"}),"\u548c",(0,s.jsx)(n.code,{children:"X Client"}),"\u7684\u914d\u7f6e, \u542f\u52a8",(0,s.jsx)(n.code,{children:"X Server"}),"\u548c",(0,s.jsx)(n.code,{children:"X Client"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"xinit"}),"\u547d\u4ee4\u8d1f\u8d23\u521d\u59cb\u5316",(0,s.jsx)(n.code,{children:"X Server"}),"\u548c",(0,s.jsx)(n.code,{children:"X Client"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"x-server-1",children:(0,s.jsx)(n.code,{children:"X Server"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Server"}),"\u521d\u59cb\u5316\u811a\u672c\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"/etc/X11/xinit/xserverrc"}),", \u5185\u5bb9\u6bd4\u8f83\u7b80\u5355, \u53ea\u662f\u542f\u52a8",(0,s.jsx)(n.code,{children:"X Server"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"x-client-1",children:(0,s.jsx)(n.code,{children:"X Client"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X Client"}),"\u521d\u59cb\u5316\u811a\u672c\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"/etc/X11/xinit/xinitrc"}),"(\u6216",(0,s.jsx)(n.code,{children:"$HOME/.xinitrc"}),", \u53d6\u51b3\u4e8e\u7528\u6237\u76ee\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u6587\u4ef6).",(0,s.jsx)("br",{}),"\n\u6b64\u811a\u672c\u4e2d\u8d1f\u8d23\u521d\u59cb\u5316",(0,s.jsx)(n.code,{children:"X Client"}),", \u8fd9\u91cc\u8981\u521d\u59cb\u5316\u7684",(0,s.jsx)(n.code,{children:"X Client"}),"\u901a\u5e38\u4e3a\u684c\u9762.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u53d1\u884c\u7248\u7684\u4e0d\u540c, ",(0,s.jsx)(n.code,{children:"X Client"}),"\u5177\u4f53\u903b\u8f91\u4e5f\u4f1a\u4e0d\u540c."]}),"\n",(0,s.jsx)(n.h4,{id:"rehl",children:"REHL"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e",(0,s.jsx)(n.code,{children:"RedHat"}),"\u7684\u53d1\u884c\u7248, \u4f8b\u5982",(0,s.jsx)(n.code,{children:"CentOS"}),", \u811a\u672c\u5185\u90e8\u8c03\u7528",(0,s.jsx)(n.code,{children:"/etc/X11/xinit/Xclients"}),"\u8fdb\u884c\u521d\u59cb\u5316,\n\u5728\u8f83\u65e7\u7684\u7cfb\u7edf\u4e2d(",(0,s.jsx)(n.code,{children:"CentOS 6.9"}),", ",(0,s.jsx)(n.code,{children:"CentOS 7.5"}),"), \u4ec5\u652f\u6301",(0,s.jsx)(n.code,{children:"GNOME"}),"\u548c",(0,s.jsx)(n.code,{children:"KDE"}),". ",(0,s.jsx)("br",{}),"\n\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u684c\u9762, \u9700\u624b\u52a8\u914d\u7f6e\u6b64\u6587\u4ef6, \u5c06",(0,s.jsx)(n.code,{children:"PREFERRED"}),"\u53d8\u91cf\u8bbe\u7f6e\u4e3a\u76f8\u5e94\u684c\u9762\u7684\u5b8c\u6574\u4e8c\u8fdb\u5236\u6587\u4ef6\u8def\u5f84."]}),"\n",(0,s.jsx)(n.h4,{id:"debian",children:"Debian"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e",(0,s.jsx)(n.code,{children:"Debian"}),"\u7684\u53d1\u884c\u7248, \u4f8b\u5982",(0,s.jsx)(n.code,{children:"Ubuntu"}),", \u811a\u672c\u5185\u90e8\u8c03\u7528",(0,s.jsx)(n.code,{children:"/etc/X11/Xsession"}),"\u8fdb\u884c\u521d\u59cb\u5316,"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u811a\u672c\u4e2d\u4f1a\u8c03\u7528",(0,s.jsx)(n.code,{children:"/etc/X11/Xsession.d/"}),"\u76ee\u5f55\u4e0b\u7684\u811a\u672c\u8fdb\u884c\u521d\u59cb\u5316,\n\u5728",(0,s.jsx)(n.code,{children:"/etc/X11/Xsession.d/50x11-common_determine-startup"}),"\u4e2d\u63a8\u65ad",(0,s.jsx)(n.code,{children:"STARTUP"}),"\u53d8\u91cf, \u503c\u901a\u5e38\u4e3a",(0,s.jsx)(n.code,{children:"/usr/bin/x-session-manager"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2alink, \u901a\u8fc7",(0,s.jsx)(n.code,{children:"readlink /usr/bin/x-session-manager"}),"\u53ef\u4ee5\u770b\u5230",(0,s.jsx)(n.code,{children:"link"}),"\u7684\u4f4d\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"/etc/alternatives/x-session-manager"}),"\n\u800c",(0,s.jsx)(n.code,{children:"/etc/alternatives/x-session-manager"}),"\u4e5f\u662f\u4e00\u4e2alink, \u901a\u8fc7",(0,s.jsx)(n.code,{children:"readlink /etc/alternatives/x-session-manager"}),"\u53ef\u4ee5\u5f97\u5230\u6700\u7ec8\u7684",(0,s.jsx)(n.code,{children:"link"}),"\u4f4d\u7f6e, \u4f8b\u5982: ",(0,s.jsx)(n.code,{children:"/usr/bin/startxfce4"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7ec8",(0,s.jsx)(n.code,{children:"/etc/X11/Xsession.d/99x11-common_start"}),"\u901a\u8fc7",(0,s.jsx)(n.code,{children:"$STARTUP"}),"\u53d8\u91cf\u542f\u52a8\u684c\u9762, \u5b8c\u6210\u56fe\u5f62\u7cfb\u7edf\u7684\u521d\u59cb\u5316."]}),"\n",(0,s.jsx)(n.h4,{id:"arch",children:"Arch"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e",(0,s.jsx)(n.code,{children:"Arch"}),"\u7684\u53d1\u884c\u7248, \u4f8b\u5982",(0,s.jsx)(n.code,{children:"Manjaro"}),",\n",(0,s.jsx)(n.code,{children:"xinitrc"}),"\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"$HOME/.xinitrc"}),","]}),"\n",(0,s.jsxs)(n.p,{children:["\u811a\u672c\u5185\u90e8\u8c03\u7528",(0,s.jsx)(n.code,{children:"/etc/X11/xinit/xinitrc.d"}),"\u76ee\u5f55\u4e0b\u7684\u811a\u672c\u8fdb\u884c\u521d\u59cb\u5316. ",(0,s.jsx)("br",{}),"\n\u8fd9\u4e2a\u811a\u672c\u5185\u90e8\u7684",(0,s.jsx)(n.code,{children:"get_session"}),"\u51fd\u6570\u7528\u4e8e\u83b7\u53d6\u684c\u9762\u7684\u542f\u52a8\u8def\u5f84, \u652f\u6301\u5e38\u89c1\u7684\u684c\u9762, \u4f8b\u5982:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"awesome"}),"\n",(0,s.jsx)(n.li,{children:"bspwm"}),"\n",(0,s.jsx)(n.li,{children:"budgie"}),"\n",(0,s.jsx)(n.li,{children:"deepin"}),"\n",(0,s.jsx)(n.li,{children:"enlightenment"}),"\n",(0,s.jsx)(n.li,{children:"fluxbox"}),"\n",(0,s.jsx)(n.li,{children:"gnome"}),"\n",(0,s.jsx)(n.li,{children:"i3/i3wm"}),"\n",(0,s.jsx)(n.li,{children:"jwm"}),"\n",(0,s.jsx)(n.li,{children:"kde"}),"\n",(0,s.jsx)(n.li,{children:"lxde"}),"\n",(0,s.jsx)(n.li,{children:"lxqt"}),"\n",(0,s.jsx)(n.li,{children:"mate"}),"\n",(0,s.jsx)(n.li,{children:"xfce"}),"\n",(0,s.jsx)(n.li,{children:"openbox"}),"\n",(0,s.jsx)(n.li,{children:"gnome"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"DEFAULT_SESSION"}),"\u53d8\u91cf\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4\u7684\u684c\u9762, \u6b64\u53d8\u91cf\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"gnome-session"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X_Window_System",children:"X Window System"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X.Org_Server",children:"X.Org Server"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X_display_manager",children:"X display manager"})}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var r=i(96540);const s={},l=r.createContext(s);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}},97004:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2024/06/23/x-window-system","source":"@site/blog/2024-06-23-x-window-system.md","title":"X Window System","description":"X Window System(\u7b80\u79f0X), \u56e0\u4e3a\u5176\u6700\u65b0\u7248\u672c\u4e3a11, \u6240\u4ee5\u4e5f\u88ab\u79f0\u4e3aX11.","date":"2024-06-23T00:00:00.000Z","tags":[{"inline":true,"label":"linux","permalink":"/zh-CN/blog/tags/linux"},{"inline":true,"label":"desktop","permalink":"/zh-CN/blog/tags/desktop"},{"inline":true,"label":"xorg","permalink":"/zh-CN/blog/tags/xorg"},{"inline":true,"label":"x11","permalink":"/zh-CN/blog/tags/x-11"}],"readingTime":4.855,"hasTruncateMarker":false,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["linux","desktop","xorg","x11"]},"unlisted":false,"prevItem":{"title":"\u5c06Asciinema\u96c6\u6210\u5230Docusaurus\u9879\u76ee\u4e2d","permalink":"/zh-CN/blog/2024/06/28/integrate-asciinema-into-dodocusaurus-project"},"nextItem":{"title":"\u5728GitLab\u7684CI/CD\u4e2d\u652f\u6301Go Module\u5f15\u7528\u540c\u4e00\u4ee3\u7801\u5e93\u4e0b\u7684\u5176\u4ed6Go\u4ed3\u5e93","permalink":"/zh-CN/blog/2024/04/11/support-gomod-referencing-local-repos-in-gitlab-cicd"}}')}}]);