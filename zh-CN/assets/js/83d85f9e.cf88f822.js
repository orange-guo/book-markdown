"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1389],{88296:(t,e,n)=>{n.r(e),n.d(e,{Example:()=>m,assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,snowflake:()=>g,toc:()=>h});var o=n(85893),r=n(11151);function s(t,e,n){for(var o=[],r=Math.max(t.length,e.length),s=0,i=0;i<r||s;){var a=s+(i<t.length?t[i]:0)+(i<e.length?e[i]:0);o.push(a%n),s=Math.floor(a/n),i++}return o}function i(t,e,n){if(t<0)return null;if(0==t)return[];for(var o=[],r=e;1&t&&(o=s(o,r,n)),0!=(t>>=1);)r=s(r,r,n);return o}function a(t,e,n){var o=function(t,e){for(var n=t.split(""),o=[],r=n.length-1;r>=0;r--){var s=parseInt(n[r],e);if(isNaN(s))return null;o.push(s)}return o}(t,e);if(null===o)return null;for(var r=[],a=[1],l=0;l<o.length;l++)o[l]&&(r=s(r,i(o[l],a,n),n)),a=i(e,a,n);var c="";for(l=r.length-1;l>=0;l--)c+=r[l].toString(n);return c}var l=n(67294);const c={},u="Snowflake id generation",d={id:"note/tools/snowflake-id-generation",title:"Snowflake id generation",description:"",source:"@site/docs/note/tools/snowflake-id-generation.mdx",sourceDirName:"note/tools",slug:"/note/tools/snowflake-id-generation",permalink:"/zh-CN/docs/note/tools/snowflake-id-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/tools/snowflake-id-generation.mdx",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1711945422,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"note",previous:{title:"Show State Machine Diagram",permalink:"/zh-CN/docs/note/tools/show-state-machine-diagram"},next:{title:"Articles",permalink:"/zh-CN/docs/note/net/grpc/articles"}},f={},h=[],g=new class{constructor(t){t=t||{},this.seq=0,this.mid=(t.mid||1)%1023,this.offset=t.offset||0,this.lastTime=0}generate(){const t=Date.now(),e=(t-this.offset).toString(2);if(this.lastTime==t){if(this.seq++,this.seq>4095)for(this.seq=0;Date.now()<=t;);}else this.seq=0;this.lastTime=t;let n=this.seq.toString(2),o=this.mid.toString(2);for(;n.length<12;)n="0"+n;for(;o.length<10;)o="0"+o;const r=e+o+n;let s="";for(let a=r.length;a>0;a-=4)s=parseInt(r.substring(a-4,a),2).toString(16)+s;return"0x"===(i=s).substring(0,2)&&(i=i.substring(2)),a(i=i.toLowerCase(),16,10);var i}}({mid:42,offset:1545264e6});function m(){const t={br:"br",button:"button",div:"div",label:"label",...(0,r.a)()},[e,n]=(0,l.useState)(g.generate()),[s,i]=(0,l.useState)("No snowflake id generated yet");return(0,o.jsxs)(t.div,{children:[(0,o.jsx)(t.label,{children:s}),(0,o.jsx)(t.br,{}),(0,o.jsx)(t.button,{onClick:()=>{n(g.generate()),i("Snowflake id: "+e)},children:"Click here to generate a snowflake id"})]})}function p(t){const e={h1:"h1",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"snowflake-id-generation",children:"Snowflake id generation"}),"\n","\n","\n","\n","\n","\n",(0,o.jsx)(m,{})]})}function k(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);