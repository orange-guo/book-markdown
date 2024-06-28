"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7643],{35124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var n=a(34164),i=a(44586),o=a(61213),r=a(17559),s=a(26535),l=a(47713),d=a(41463),c=a(33892),g=a(5260),m=a(6676),p=a(74848);function u(e){const t=(0,m.k)(e);return(0,p.jsx)(g.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.A)(),{blogDescription:n,blogTitle:r,permalink:s}=t,l="/"===s?a:r;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.be,{title:l,description:n}),(0,p.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,p.jsxs)(s.A,{sidebar:n,children:[(0,p.jsx)(c.A,{items:a}),(0,p.jsx)(l.A,{metadata:t})]})}function f(e){return(0,p.jsxs)(o.e3,{className:(0,n.A)(r.G.wrapper.blogPages,r.G.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(u,{...e}),(0,p.jsx)(b,{...e})]})}},47713:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(21312),i=a(39022),o=a(74848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,o.jsx)(i.A,{permalink:a,title:(0,o.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(i.A,{permalink:r,title:(0,o.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(7131),i=a(62011),o=a(74848);function r(e){let{items:t,component:a=i.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(n.i,{content:t,children:(0,o.jsx)(a,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,a)=>{a.d(t,{k:()=>c,J:()=>g});var n=a(86025),i=a(44586),o=a(36803);var r=a(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function c(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:a}=(0,n.hH)(),{metadata:{blogDescription:o,blogTitle:r,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:o}=e,{date:r,title:c,description:g,lastUpdatedAt:m}=o,p=n.image??i.image,u=i.keywords??[],h=`${t.url}${o.permalink}`,b=m?s(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:r,...b?{dateModified:b}:{},...l(o.authors),...d(p,a,c),...u?{keywords:u}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,r.e)(),{siteConfig:c}=(0,i.A)(),{withBaseUrl:g}=(0,n.hH)(),{date:m,title:p,description:u,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],A=b?s(b):void 0,j=`${c.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:p,name:p,description:u,datePublished:m,...A?{dateModified:A}:{},...l(a.authors),...d(f,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},62011:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var n=a(24651),i=a(12171),o=a(7131),r=a(95293),s=a(44586),l=a(74848);function d(e){const{i18n:{defaultLocale:t,localeConfigs:a}}=(0,s.A)(),{colorMode:d}=(0,r.G)(),{metadata:c,isBlogPostPage:g}=(0,o.e)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{...e}),g&&(0,l.jsx)(i.A,{repo:"orange-guo/markdowns-comment",repoId:"R_kgDOJSYyJA",category:"Announcements",categoryId:"DIC_kwDOJSYyJM4CVg1x",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:d,lang:t,crossorigin:"anonymous",term:"Welcome to @giscus/react component!",loading:"lazy",async:!0})]})}}}]);