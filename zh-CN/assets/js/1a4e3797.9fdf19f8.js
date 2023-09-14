"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7920],{88824:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(67294),n=r(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},51473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var a=r(67294),n=r(52263),l=r(70179),s=r(35742),c=r(39960),o=r(95999),u=r(88824),m=r(1728),h=r(16550),i=r(10412);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=i.Z.canUseDOM?new URLSearchParams(t.search):null,l=a?.get("q")||"",s=a?.get("ctx")||"",c=a?.get("version")||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set("ctx",r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var g=r(90022),d=r(98202),f=r(82539),y=r(10726),E=r(91073),S=r(80311),C=r(73926),I=r(61029);const x={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function w(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,a.useState)(r),[E,C]=(0,a.useState)(),[w,R]=(0,a.useState)(),P=`${e}${c}`,b=(0,a.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,a.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{R(e)})):R(void 0))}),[f,E]);const k=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==f&&y(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.w)(P,l);C((()=>(0,d.v)(e,t,100)))}()}),[l,P]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,b)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,b),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[x.searchQueryColumn]:Array.isArray(I.Kc),"col--9":Array.isArray(I.Kc),"col--12":!Array.isArray(I.Kc)})},a.createElement("input",{type:"search",name:"q",className:x.searchQueryInput,"aria-label":"Search",onChange:k,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(I.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",x.searchContextColumn)},a.createElement("select",{name:"search-context",className:x.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},I.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),I.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!E&&f&&a.createElement("div",null,a.createElement(S.Z,null)),w&&(w.length>0?a.createElement("p",null,t(w.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,w&&w.map((e=>a.createElement(v,{key:e.document.i,searchResult:e}))))))}function v(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(I.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:x.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.C)(h,l):(0,y.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:x.searchResultItemPath},(0,C.e)(m)),u&&a.createElement("p",{className:x.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const R=function(){return a.createElement(l.Z,null,a.createElement(w,null))}}}]);