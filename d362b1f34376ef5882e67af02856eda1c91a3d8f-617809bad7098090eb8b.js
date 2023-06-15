/*! For license information please see d362b1f34376ef5882e67af02856eda1c91a3d8f-617809bad7098090eb8b.js.LICENSE.txt */
(self.webpackChunkenvision_docs=self.webpackChunkenvision_docs||[]).push([[661],{2779:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7728:function(e){"use strict";e.exports=Object.assign},5471:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(2784);const a=e=>{r.useEffect((()=>{var t,n,r;e.current.querySelectorAll(".gatsby-highlight[data-language=html]").forEach((e=>{const t=document.createElement("div");t.classList.add("code-example"),t.innerHTML=e.textContent,e.parentNode.insertBefore(t,e)}));const a=window.envision;document.querySelectorAll('.env-popover[role="tooltip"]').forEach((e=>{e.parentNode.removeChild(e)}));const o=document.querySelector("#demoImageViewer2");o&&a.imageViewer2(o,{slides:{auto:2e3,playing:!1}});const i=document.querySelector("#example-imageviewer2-1");i&&a.imageViewer2(i);const c=document.querySelector("#example-imageviewer2-2");c&&a.imageViewer2(c,{slides:{auto:3e3,playing:!1,overlay:!1,buttons:{type:"secondary",size:"slim"}}}),a.popover("#example-popover-data");const l=e=>{const t=document.querySelector("#demo-delayed-spinner .env-spinner");t.classList.add("env-spinner--hide"),t.classList.remove("env-spinner--fade-in"),t.dataset.delay=e,setTimeout((()=>{t.classList.remove("env-spinner--hide"),t.classList.add("env-spinner--fade-in")}),1)};null===(t=document.querySelector("#toggle-spinner-1"))||void 0===t||t.addEventListener("click",(()=>l("short"))),null===(n=document.querySelector("#toggle-spinner-2"))||void 0===n||n.addEventListener("click",(()=>l("medium"))),null===(r=document.querySelector("#toggle-spinner-3"))||void 0===r||r.addEventListener("click",(()=>l("long")));const s=document.querySelector("#example-popover-content");s&&a.popover("#example-popover-button",{placement:"bottom",title:"Lorem ipsum",content:s,escapeContent:!1,clickOutside:!0});const u=document.querySelector("#example-popover-menu-content");u&&a.popover("#example-popover-menu-button",{placement:"top",title:"Popover menu",content:u,escapeContent:!1,clickOutside:!0,type:"menu"});const p=document.querySelector("#example-popover-tooltip-content");p&&a.popover("#example-popover-tooltip-button",{placement:"top",title:"Popover tooltip",content:p,escapeContent:!1,clickOutside:!0,type:"tooltip"}),a.tabs(".example-tabs, .example-tabs1, .example-tabs2, .example-tabs3"),a.rangeSlider(".example-range-slider",{values:[20,70]});const m=document.querySelectorAll(".example-tag-select");for(let e=0;m&&e<m.length;e++)a.select(m,{maxItems:6,create:!0,i18n:"en"});const d=document.querySelector("#example-tag-select-single-1");d&&a.select(d,{maxItems:1,i18n:"en"});const f=document.querySelector("#example-tag-select-single-2");f&&a.select(f,{maxItems:1,allowEmptyOption:!0,sortField:[{field:"$order"},{field:"$score"}],i18n:"en"});const v=document.querySelector("#example-tag-select-1");v&&a.select(v,{i18n:"en"});const h=document.querySelector("#example-tag-select-2");if(h){a.select(h,{maxItems:5,clearButton:!0,create:!0,render:{item:(e,t)=>'<div>\n                        <svg class="env-icon env-m-right--x-small"><use xlink:href="/sitevision/envision-icons.svg#icon-check-line"></use></svg>\n                        '+t(e.text)+"\n                     </div>"},placeholder:"Select or add tags...",items:["fruit01"],i18n:"en",options:[{value:"fruit01",text:"Apple"},{value:"fruit02",text:"Banana"},{value:"fruit03",text:"Grapefruit"},{value:"fruit04",text:"Lemon"},{value:"fruit05",text:"Pear"}],onOptionAdd:function(e,t){console.log("Added:",e,t)}}).then((e=>{document.getElementById("example-tag-select-2-add").addEventListener("click",(function(){const t=document.getElementById("example-tag-select-2-tag").value;e[0].addOptions({value:t,text:t}),e[0].addItem(t)}))}));const e=document.querySelector("#example-tag-select-3");e&&a.select(e,{maxItems:5,placeholder:"Select a Github repository...",i18n:"en",valueField:"url",labelField:"name",searchField:["name"],sortField:[{field:"name",direction:"desc"}],preload:!0,load:function(e,t){e=e||"sitevision";var n="https://api.github.com/search/repositories?q="+encodeURIComponent(e);fetch(n).then((e=>e.json())).then((e=>{t(e.items)})).catch((()=>{t()}))}})}a.tooltip();const y=document.querySelectorAll(".example-custom-init-tooltip");y&&a.tooltip(y,{placement:"right",delay:300});document.querySelectorAll('a[href="#"]').forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()}))}));document.querySelectorAll('form[action="/"]').forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))})),window.dispatchEvent(new Event("load"))}),[e])}},2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return Oe}});var r,a,o,i,c=n(2784),l=n(3980),s=n.n(l),u=n(7512),p=n.n(u),m=n(8435),d=n.n(m),f=n(7728),v=n.n(f),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",w="href",S="http-equiv",A="innerHTML",C="itemprop",O="name",x="property",k="rel",N="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",q="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],F="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=J(e,b.TITLE),n=J(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},W=function(e){return J(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=v()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,m=e.titleAttributes;le(b.BODY,r),le(b.HTML,a),ce(p,m);var d={baseTag:se(b.BASE,n),linkTags:se(b.LINK,o),metaTags:se(b.META,i),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},f={},v={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(v[e]=d[e].oldTags)})),t&&t(),l(e,f,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,a=pe(n,r),[c.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,m=e.titleAttributes;return{base:me(b.BASE,t,r),bodyAttributes:me(h,n,r),htmlAttributes:me(y,a,r),link:me(b.LINK,o,r),meta:me(b.META,i,r),noscript:me(b.NOSCRIPT,c,r),script:me(b.SCRIPT,l,r),style:me(b.STYLE,s,r),title:me(b.TITLE,{title:p,titleAttributes:m},r)}},fe=p()((function(e){return{baseTag:Q([w,j],e),bodyAttributes:G(h,e),defer:J(e,P),encode:J(e,q),htmlAttributes:G(y,e),linkTags:Z(b.LINK,[k,w],e),metaTags:Z(b.META,[O,E,S,x,C],e),noscriptTags:Z(b.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:Z(b.SCRIPT,[N,A],e),styleTags:Z(b.STYLE,[T],e),title:$(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),ve=(a=fe,i=o=function(e){function t(){return H(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case b.BODY:return Y({},a,{bodyAttributes:Y({},o)});case b.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(V(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ve.renderStatic=ve.rewind;var he=ve,ye=n(4792);var ge=e=>{let{to:t,children:n,...r}=e;return/^http/.test(t)?c.createElement("a",{href:t},n):c.createElement(ye.Link,Object.assign({to:t},r),n)},be=n(2169);var Ee=()=>{const{theme:e,setTheme:t}=(0,be.F)();return c.createElement("div",{className:"theme-picker"},c.createElement("div",{className:"env-form-element"},c.createElement("label",{htmlFor:"selectTheme",className:"env-assistive-text"},"Select theme"),c.createElement("div",{className:"env-text-small"},c.createElement("div",{className:"env-form-select"},c.createElement("select",{id:"selectTheme",value:e,onChange:e=>{t(e.target.value)}},c.createElement("option",{value:""},"Default theme"),c.createElement("option",{value:"sv-theme-dark"},"Dark theme"),c.createElement("option",{value:"sv-theme-fancy"},"Fancy theme"),c.createElement("option",{value:"sv-theme-quicksand"},"Quicksand theme")),c.createElement("svg",{className:"env-icon"},c.createElement("use",{xlinkHref:"/sitevision/envision-icons.svg#icon-angle-down"}))))))};var Te=e=>{let{title:t,menuItems:n}=e;return c.createElement(c.Fragment,null,c.createElement(he,null,c.createElement("html",{lang:"en",className:"sv-js"}),c.createElement("meta",{charset:"utf-8"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.createElement("title",null,t+" · Envision by Sitevision"),c.createElement("link",{rel:"icon",type:"image/png",href:"/images/envision_logo.png",sizes:"32x32"})),c.createElement("div",{className:"sv-header"},c.createElement("header",{className:"header"},c.createElement("a",{className:"logo",href:"/"},c.createElement("img",{className:"logo__img",src:"/images/sitevision-envision-logo.svg",alt:"Envision"})),c.createElement("div",{className:"header-nav"},c.createElement(Ee,null),c.createElement("nav",null,c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border"},n.map((e=>{let{label:t,to:n}=e;return c.createElement("li",{className:"env-nav__item",key:t},c.createElement(ge,{to:n,activeClassName:"active"},t))}))))))))},we=n(2779),Se=n.n(we);var Ae=e=>{let{categories:t,menuItems:n}=e;return c.createElement("nav",{className:"sidenav"},t.map((e=>{let{title:t,slug:r}=e;return c.createElement("div",{key:r},c.createElement(ge,{to:n[r][0].slug},t),c.createElement("ul",null,n[r].map((e=>{let{id:t,title:n,slug:r,deprecated:a,since:o}=e;return c.createElement("li",{key:t},c.createElement(ge,{to:r,className:Se()("doc-link-secondary",{"doc-link-secondary--new":o,"doc-link-secondary--deprecated":a}),activeClassName:"active"},n,a&&c.createElement("span",{className:"env-badge env-badge--danger"},"Deprecated"),o&&c.createElement("span",{className:"env-badge env-badge--success"},"New")))}))))})))};var Ce=e=>{let{menuItems:t}=e;return c.createElement(c.Fragment,null,c.createElement("div",{className:"footer-wrapper"},c.createElement("footer",{className:"footer"},c.createElement("a",{href:"https://www.sitevision.se/"},"© Sitevision"),c.createElement("nav",{className:"footer-nav"},c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border"},t.map((e=>{let{label:t,to:n}=e;return c.createElement("li",{className:"env-nav__item",key:t},c.createElement(ge,{to:n,activeClassName:"active"},t))})))))),c.createElement(he,null,c.createElement("script",null,"var _paq = _paq || [];\n  /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n  _paq.push([\"setDoNotTrack\", true]);\n  _paq.push(['trackPageView']);\n  _paq.push(['enableLinkTracking']);\n  (function() {\n    var u=\"//uistats.sitevision.se/\";\n    _paq.push(['setTrackerUrl', u+'piwik.php']);\n    _paq.push(['setSiteId', '8']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);\n  })();")))};var Oe=e=>{let{title:t,deprecated:n,since:r,beta:a,topMenuItems:o,menuCategories:i,menuItems:l,children:s}=e;return c.createElement(c.Fragment,null,c.createElement(Te,{title:t,menuItems:o}),c.createElement("div",{className:"main-container"},c.createElement("main",null,c.createElement("h1",{className:"doc-heading-1 doc-heading-1--main"},t),(r||a||n)&&c.createElement("h2",{className:"doc-heading-2 doc-heading-2--main"},n&&c.createElement("span",{className:"env-badge env-badge--danger"},"Deprecated"),r&&c.createElement("span",{className:"env-badge env-badge--info"},"Since ",r),a&&c.createElement("span",{className:"env-badge env-badge--warning"},"Beta")),s),c.createElement(Ae,{categories:i,menuItems:(u=l,u.map((e=>{let{node:t}=e;return{id:t.id,title:t.frontmatter.title,deprecated:t.frontmatter.deprecated,since:t.frontmatter.since,beta:t.frontmatter.beta,slug:t.fields.slug}})).reduce(((e,t)=>{const n=t.slug.split("/").filter((e=>e));let r=e[n[0]];return r||(r=e[n[0]]=[]),r.push(t),e}),{}))})),c.createElement(Ce,{menuItems:o}));var u}},8435:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},7512:function(e,t,n){"use strict";var r,a=n(2784),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}}}]);
//# sourceMappingURL=d362b1f34376ef5882e67af02856eda1c91a3d8f-617809bad7098090eb8b.js.map