(function(){var y=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[20],{ln0a:function(g,a,u){"use strict";u.r(a),u.d(a,"countWidgetTypes",function(){return p}),u.d(a,"collectWidgetCount",function(){return f});var m=u("yXPU"),s=u.n(m);function p(){const o=document.querySelectorAll("[data-widget-type], [data-element-type]"),i=Array.from(o).reduce((e,n)=>{const t=n.getAttribute("data-widget-type")||n.getAttribute("data-element-type"),d=n.getAttribute("data-widget-id");let r=`widget-${t}`;return d&&(r=`widget-${t}-${d}`),e[r]||(e[r]={feature:r,count:0}),e[r].count+=1,e},{});return Object.values(i)}function f(){return c.apply(this,arguments)}function c(){return c=s()(function*(){var o,i;if(!((o=window.rtCommonProps)!==null&&o!==void 0&&o["scripts.widgetCount.enabled"]))return;const e=p(),{_currentPage:n,Parameters:t}=window,d={features:e,siteAlias:t==null?void 0:t.SiteAlias,sitePublicationDate:t!=null&&t.PublicationDate?new Date(t==null?void 0:t.PublicationDate).getTime():0,pageType:t==null?void 0:t.pageType,pageUuid:(n==null||(i=n.pageContent)===null||i===void 0?void 0:i.uuid)||(t==null?void 0:t.InitialPageUuid)||`${n==null?void 0:n.pageID}`,path:location.pathname};v(d)}),c.apply(this,arguments)}function v(o){return l.apply(this,arguments)}function l(){return l=s()(function*(o){try{var i;const e=(i=window.rtCommonProps)===null||i===void 0?void 0:i["runtimecollector.url"];if(!e)return;yield fetch(`${e}/feature/metrics`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(o)})}catch(e){console.debug("Failed send metrics for feature count",e)}}),l.apply(this,arguments)}}}])})();
