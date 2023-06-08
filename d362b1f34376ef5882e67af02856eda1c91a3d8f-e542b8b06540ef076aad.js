(self.webpackChunkenvision_docs=self.webpackChunkenvision_docs||[]).push([[661],{7728:function(e){"use strict";e.exports=Object.assign},5471:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(2784);const o=e=>{r.useEffect((()=>{var t,n,r;e.current.querySelectorAll(".gatsby-highlight[data-language=html]").forEach((e=>{const t=document.createElement("div");t.classList.add("code-example"),t.innerHTML=e.textContent,e.parentNode.insertBefore(t,e)}));const o=window.envision;document.querySelectorAll('.env-popover[role="tooltip"]').forEach((e=>{e.parentNode.removeChild(e)}));const a=document.querySelector("#demoImageViewer2");a&&o.imageViewer2(a,{slides:{auto:2e3,playing:!1}});const i=document.querySelector("#example-imageviewer2-1");i&&o.imageViewer2(i);const c=document.querySelector("#example-imageviewer2-2");c&&o.imageViewer2(c,{slides:{auto:3e3,playing:!1,overlay:!1,buttons:{type:"secondary",size:"slim"}}}),o.popover("#example-popover-data");const l=e=>{const t=document.querySelector("#demo-delayed-spinner .env-spinner");t.classList.add("env-spinner--hide"),t.classList.remove("env-spinner--fade-in"),t.dataset.delay=e,setTimeout((()=>{t.classList.remove("env-spinner--hide"),t.classList.add("env-spinner--fade-in")}),1)};null===(t=document.querySelector("#toggle-spinner-1"))||void 0===t||t.addEventListener("click",(()=>l("short"))),null===(n=document.querySelector("#toggle-spinner-2"))||void 0===n||n.addEventListener("click",(()=>l("medium"))),null===(r=document.querySelector("#toggle-spinner-3"))||void 0===r||r.addEventListener("click",(()=>l("long")));const s=document.querySelector("#example-popover-content");s&&o.popover("#example-popover-button",{placement:"bottom",title:"Lorem ipsum",content:s,escapeContent:!1,clickOutside:!0});const u=document.querySelector("#example-popover-menu-content");u&&o.popover("#example-popover-menu-button",{placement:"top",title:"Popover menu",content:u,escapeContent:!1,clickOutside:!0,type:"menu"});const p=document.querySelector("#example-popover-tooltip-content");p&&o.popover("#example-popover-tooltip-button",{placement:"top",title:"Popover tooltip",content:p,escapeContent:!1,clickOutside:!0,type:"tooltip"}),o.tabs(".example-tabs, .example-tabs1, .example-tabs2, .example-tabs3"),o.rangeSlider(".example-range-slider",{values:[20,70]});const m=document.querySelectorAll(".example-tag-select");for(let e=0;m&&e<m.length;e++)o.select(m,{maxItems:6,create:!0,i18n:"en"});const d=document.querySelector("#example-tag-select-single-1");d&&o.select(d,{maxItems:1,i18n:"en"});const f=document.querySelector("#example-tag-select-single-2");f&&o.select(f,{maxItems:1,allowEmptyOption:!0,sortField:[{field:"$order"},{field:"$score"}],i18n:"en"});const v=document.querySelector("#example-tag-select-1");v&&o.select(v,{i18n:"en"});const h=document.querySelector("#example-tag-select-2");if(h){o.select(h,{maxItems:5,clearButton:!0,create:!0,render:{item:(e,t)=>'<div>\n                        <svg class="env-icon env-m-right--x-small"><use xlink:href="/sitevision/envision-icons.svg#icon-check-line"></use></svg>\n                        '+t(e.text)+"\n                     </div>"},placeholder:"Select or add tags...",items:["fruit01"],i18n:"en",options:[{value:"fruit01",text:"Apple"},{value:"fruit02",text:"Banana"},{value:"fruit03",text:"Grapefruit"},{value:"fruit04",text:"Lemon"},{value:"fruit05",text:"Pear"}],onOptionAdd:function(e,t){console.log("Added:",e,t)}}).then((e=>{document.getElementById("example-tag-select-2-add").addEventListener("click",(function(){const t=document.getElementById("example-tag-select-2-tag").value;e[0].addOptions({value:t,text:t}),e[0].addItem(t)}))}));const e=document.querySelector("#example-tag-select-3");e&&o.select(e,{maxItems:5,placeholder:"Select a Github repository...",i18n:"en",valueField:"url",labelField:"name",searchField:["name"],sortField:[{field:"name",direction:"desc"}],preload:!0,load:function(e,t){e=e||"sitevision";var n="https://api.github.com/search/repositories?q="+encodeURIComponent(e);fetch(n).then((e=>e.json())).then((e=>{t(e.items)})).catch((()=>{t()}))}})}o.tooltip();const y=document.querySelectorAll(".example-custom-init-tooltip");y&&o.tooltip(y,{placement:"right",delay:300});document.querySelectorAll('a[href="#"]').forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()}))}));document.querySelectorAll('form[action="/"]').forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))})),window.dispatchEvent(new Event("load"))}),[e])}},2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ae}});var r,o,a,i,c=n(2784),l=n(3980),s=n.n(l),u=n(7512),p=n.n(u),m=n(8435),d=n.n(m),f=n(7728),v=n.n(f),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",w="href",S="http-equiv",A="innerHTML",C="itemprop",O="name",x="property",k="rel",N="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",q="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[b.NOSCRIPT,b.SCRIPT,b.STYLE],R="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=J(e,b.TITLE),n=J(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},W=function(e){return J(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=v()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,m=e.titleAttributes;le(b.BODY,r),le(b.HTML,o),ce(p,m);var d={baseTag:se(b.BASE,n),linkTags:se(b.LINK,a),metaTags:se(b.META,i),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},f={},v={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(v[e]=d[e].oldTags)})),t&&t(),l(e,f,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(R):n.getAttribute(R)!==i.join(",")&&n.setAttribute(R,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=pe(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,m=e.titleAttributes;return{base:me(b.BASE,t,r),bodyAttributes:me(h,n,r),htmlAttributes:me(y,o,r),link:me(b.LINK,a,r),meta:me(b.META,i,r),noscript:me(b.NOSCRIPT,c,r),script:me(b.SCRIPT,l,r),style:me(b.STYLE,s,r),title:me(b.TITLE,{title:p,titleAttributes:m},r)}},fe=p()((function(e){return{baseTag:Q([w,j],e),bodyAttributes:G(h,e),defer:J(e,P),encode:J(e,q),htmlAttributes:G(y,e),linkTags:Z(b.LINK,[k,w],e),metaTags:Z(b.META,[O,E,S,x,C],e),noscriptTags:Z(b.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:Z(b.SCRIPT,[N,A],e),styleTags:Z(b.STYLE,[T],e),title:$(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ve=(o=fe,i=a=function(e){function t(){return H(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return Y({},o,((t={})[r.type]=i,t.titleAttributes=Y({},a),t));case b.BODY:return Y({},o,{bodyAttributes:Y({},a)});case b.HTML:return Y({},o,{htmlAttributes:Y({},a)})}return Y({},o,((n={})[r.type]=Y({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(V(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ve.renderStatic=ve.rewind;var he=ve,ye=n(4792);var ge=e=>{let{to:t,children:n,...r}=e;return/^http/.test(t)?c.createElement("a",{href:t},n):c.createElement(ye.Link,Object.assign({to:t},r),n)},be=n(2169);var Ee=()=>{const{theme:e,setTheme:t}=(0,be.F)();return c.createElement("div",{className:"theme-picker"},c.createElement("div",{className:"env-form-element"},c.createElement("label",{htmlFor:"selectTheme",className:"env-assistive-text"},"Select theme"),c.createElement("div",{className:"env-text-small"},c.createElement("div",{className:"env-form-select"},c.createElement("select",{id:"selectTheme",value:e,onChange:e=>{t(e.target.value)}},c.createElement("option",{value:""},"Default theme"),c.createElement("option",{value:"sv-theme-dark"},"Dark theme"),c.createElement("option",{value:"sv-theme-fancy"},"Fancy theme"),c.createElement("option",{value:"sv-theme-quicksand"},"Quicksand theme")),c.createElement("svg",{className:"env-icon"},c.createElement("use",{xlinkHref:"/sitevision/envision-icons.svg#icon-angle-down"}))))))};var Te=e=>{let{title:t,menuItems:n}=e;return c.createElement(c.Fragment,null,c.createElement(he,null,c.createElement("html",{lang:"en",className:"sv-js"}),c.createElement("meta",{charset:"utf-8"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.createElement("title",null,t+" · Envision by Sitevision"),c.createElement("link",{rel:"icon",type:"image/png",href:"/images/envision_logo.png",sizes:"32x32"})),c.createElement("div",{className:"sv-header"},c.createElement("header",{className:"header"},c.createElement("a",{className:"logo",href:"/"},c.createElement("img",{className:"logo__img",src:"/images/sitevision-envision-logo.svg",alt:"Envision"})),c.createElement("div",{className:"header-nav"},c.createElement(Ee,null),c.createElement("nav",null,c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border"},n.map((e=>{let{label:t,to:n}=e;return c.createElement("li",{className:"env-nav__item",key:t},c.createElement(ge,{to:n,activeClassName:"active"},t))}))))))))};var we=e=>{let{categories:t,menuItems:n}=e;return c.createElement("nav",{className:"sidenav"},t.map((e=>{let{title:t,slug:r}=e;return c.createElement("div",{key:r},c.createElement(ge,{to:n[r][0].slug},t),c.createElement("ul",null,n[r].map((e=>{let{id:t,title:n,slug:r,deprecated:o}=e;return c.createElement("li",{key:t},c.createElement(ge,{to:r,className:o?"doc-link-secondary doc-link-secondary--deprecated":"doc-link-secondary",activeClassName:"active"},n,o&&c.createElement("span",{className:"env-badge env-badge--danger"},"Deprecated")))}))))})))};var Se=e=>{let{menuItems:t}=e;return c.createElement(c.Fragment,null,c.createElement("div",{className:"footer-wrapper"},c.createElement("footer",{className:"footer"},c.createElement("a",{href:"https://www.sitevision.se/"},"© Sitevision"),c.createElement("nav",{className:"footer-nav"},c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border"},t.map((e=>{let{label:t,to:n}=e;return c.createElement("li",{className:"env-nav__item",key:t},c.createElement(ge,{to:n,activeClassName:"active"},t))})))))),c.createElement(he,null,c.createElement("script",null,"var _paq = _paq || [];\n  /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n  _paq.push([\"setDoNotTrack\", true]);\n  _paq.push(['trackPageView']);\n  _paq.push(['enableLinkTracking']);\n  (function() {\n    var u=\"//uistats.sitevision.se/\";\n    _paq.push(['setTrackerUrl', u+'piwik.php']);\n    _paq.push(['setSiteId', '8']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);\n  })();")))};var Ae=e=>{let{title:t,deprecated:n,topMenuItems:r,menuCategories:o,menuItems:a,children:i}=e;return c.createElement(c.Fragment,null,c.createElement(Te,{title:t,menuItems:r}),c.createElement("div",{className:"main-container"},c.createElement("main",null,c.createElement("h1",{className:"doc-heading-1 doc-heading-1--main"},t),n&&c.createElement("h2",{className:"doc-heading-2 doc-heading-2--main"},c.createElement("span",{className:"env-badge env-badge--danger"},"Deprecated")),i),c.createElement(we,{categories:o,menuItems:(l=a,l.map((e=>{let{node:t}=e;return{id:t.id,title:t.frontmatter.title,deprecated:t.frontmatter.deprecated,slug:t.fields.slug}})).reduce(((e,t)=>{const n=t.slug.split("/").filter((e=>e));let r=e[n[0]];return r||(r=e[n[0]]=[]),r.push(t),e}),{}))})),c.createElement(Se,{menuItems:r}));var l}},8435:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},7512:function(e,t,n){"use strict";var r,o=n(2784),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}}}]);
//# sourceMappingURL=d362b1f34376ef5882e67af02856eda1c91a3d8f-e542b8b06540ef076aad.js.map