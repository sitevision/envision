/*! For license information please see swipejs-07b2a16629874eef0290.js.LICENSE.txt */
(this.webpackChunkenvision=this.webpackChunkenvision||[]).push([[400],{905:function(t,e,n){var i,o;o=(o=this)||{},i=function(){return o.Swipe=function(){var t,e="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g||this,i=e.document;function o(t,n){"use strict";var o,s,r={},a={},u=(n=n||{}).auto||0,c=!1,l=function(){},v=function(t){setTimeout(t||l,0)},d=function(t,e){e=e||100;var n=null;function i(){n&&clearTimeout(n)}function o(){var o=this,s=arguments;i(),n=setTimeout((function(){n=null,t.apply(o,s)}),e)}return o.cancel=i,o},f=function(t){return!!t&&("boolean"!=typeof t.cancelable||t.cancelable)};Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});var h={addEventListener:!!e.addEventListener,passiveEvents:function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testEvent",null,n),e.removeEventListener("testEvent",null,n)}catch(e){t=!1}return t}(),touch:"ontouchstart"in e||e.DocumentTouch&&i instanceof DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(i.createElement("swipe"))};if(t){var m,p,E,y,g=t.children[0],b=parseInt(n.startSlide,10)||0,T=n.speed||300;n.continuous=void 0===n.continuous||n.continuous;var x,L,w,k=(L="direction",(x=t).currentStyle?w=x.currentStyle[L]:e.getComputedStyle&&(w=e.getComputedStyle(x,null).getPropertyValue(L)),"rtl"===w?"right":"left");n.autoRestart=void 0!==n.autoRestart&&n.autoRestart;var D=d(C),S={handleEvent:function(t){if(!c||"resize"===t.type){switch(t.type){case"mousedown":case"touchstart":this.start(t);break;case"mousemove":case"touchmove":this.move(t);break;case"mouseup":case"mouseleave":case"touchend":this.end(t);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":this.transitionEnd(t);break;case"resize":D()}n.stopPropagation&&t.stopPropagation()}},start:function(t){var e;e=J(t)?t:t.touches[0],n.ignore&&e.target.matches(n.ignore)||(J(t)&&t.preventDefault(),r={x:e.pageX,y:e.pageY,time:+new Date},o=void 0,a={},J(t)?(g.addEventListener("mousemove",this,!1),g.addEventListener("mouseup",this,!1),g.addEventListener("mouseleave",this,!1)):(g.addEventListener("touchmove",this,!!h.passiveEvents&&{passive:!1}),g.addEventListener("touchend",this,!1)),I(Q(),m[b]))},move:function(t){var e;if(J(t))e=t;else{if(t.touches.length>1||t.scale&&1!==t.scale)return;n.disableScroll&&f(t)&&t.preventDefault(),e=t.touches[0]}a={x:e.pageX-r.x,y:e.pageY-r.y},void 0===o&&(o=!!(o||Math.abs(a.x)<Math.abs(a.y))),o||(f(t)&&t.preventDefault(),V(),n.continuous?(Z(X(b-1),a.x+p[X(b-1)],0),Z(b,a.x+p[b],0),Z(X(b+1),a.x+p[X(b+1)],0)):(a.x=a.x/(!b&&a.x>0||b===m.length-1&&a.x<0?Math.abs(a.x)/E+1:1),Z(b-1,a.x+p[b-1],0),Z(b,a.x+p[b],0),Z(b+1,a.x+p[b+1],0)))},end:function(t){var e=+new Date-r.time,i=Number(e)<250&&Math.abs(a.x)>20||Math.abs(a.x)>E/2,s=!b&&a.x>0||b===m.length-1&&a.x<0;n.continuous&&(s=!1);var u=Math.abs(a.x)/a.x;o||(i&&!s?(u<0?(n.continuous?(Y(X(b-1),-E,0),Y(X(b+2),E,0)):Y(b-1,-E,0),Y(b,p[b]-E,T),Y(X(b+1),p[X(b+1)]-E,T),b=X(b+1)):(n.continuous?(Y(X(b+1),E,0),Y(X(b-2),-E,0)):Y(b+1,E,0),Y(b,p[b]+E,T),Y(X(b-1),p[X(b-1)]+E,T),b=X(b-1)),R(Q(),m[b],u)):n.continuous?(Y(X(b-1),-E,T),Y(b,0,T),Y(X(b+1),E,T)):(Y(b-1,-E,T),Y(b,0,T),Y(b+1,E,T))),J(t)?(g.removeEventListener("mousemove",S,!1),g.removeEventListener("mouseup",S,!1),g.removeEventListener("mouseleave",S,!1)):(g.removeEventListener("touchmove",S,!!h.passiveEvents&&{passive:!1}),g.removeEventListener("touchend",S,!1)),N(Q(),m[b])},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)===b&&((u||n.autoRestart)&&F(),j(Q(),m[b]))}};return C(),B(),{setup:C,slide:function(t,e){V(),W(t,e)},prev:function(){V(),O()},next:function(){V(),P()},restart:F,stop:V,getPos:Q,disable:G,enable:H,getNumSlides:function(){return y},kill:K}}function M(){h.addEventListener?(g.removeEventListener("touchstart",S,!!h.passiveEvents&&{passive:!0}),g.removeEventListener("mousedown",S,!1),g.removeEventListener("webkitTransitionEnd",S,!1),g.removeEventListener("msTransitionEnd",S,!1),g.removeEventListener("oTransitionEnd",S,!1),g.removeEventListener("otransitionend",S,!1),g.removeEventListener("transitionend",S,!1),e.removeEventListener("resize",S,!1)):e.onresize=null}function z(){h.addEventListener?(h.touch&&g.addEventListener("touchstart",S,!!h.passiveEvents&&{passive:!0}),n.draggable&&g.addEventListener("mousedown",S,!1),h.transitions&&(g.addEventListener("webkitTransitionEnd",S,!1),g.addEventListener("msTransitionEnd",S,!1),g.addEventListener("oTransitionEnd",S,!1),g.addEventListener("otransitionend",S,!1),g.addEventListener("transitionend",S,!1)),e.addEventListener("resize",S,!1)):e.onresize=D}function A(t){var e=t.cloneNode(!0);g.appendChild(e),e.setAttribute("data-cloned",!0),e.removeAttribute("id")}function C(e){if(null!=e)for(var i in e)n[i]=e[i];m=g.children,y=m.length;for(var o=0;o<m.length;o++)m[o].getAttribute("data-cloned")&&y--;if(m.length<2&&(n.continuous=!1),h.transitions&&n.continuous&&m.length<3&&(A(m[0]),A(m[1]),m=g.children),"right"===k)for(var s=0;s<m.length;s++)m[s].style.float="right";p=new Array(m.length),E=t.getBoundingClientRect().width||t.offsetWidth,g.style.width=m.length*E*2+"px";for(var r=m.length;r--;){var a=m[r];a.style.width=E+"px",a.setAttribute("data-index",r),h.transitions&&(a.style[k]=r*-E+"px",Y(r,b>r?-E:b<r?E:0,0))}n.continuous&&h.transitions&&(Y(X(b-1),-E,0),Y(X(b+1),E,0)),h.transitions||(g.style[k]=b*-E+"px"),t.style.visibility="visible",M(),z()}function O(){c||(n.continuous||b)&&W(b-1)}function P(){c||(n.continuous||b<m.length-1)&&W(b+1)}function R(t,e,i){n.callback&&n.callback(t,e,i)}function j(t,e){n.transitionEnd&&n.transitionEnd(t,e)}function I(t,e){n.dragStart&&n.dragStart(t,e)}function N(t,e){n.dragEnd&&n.dragEnd(t,e)}function X(t){return(m.length+t%m.length)%m.length}function Q(){var t=b;return t>=y&&(t-=y),t}function W(t,e){if(t="number"!=typeof t?parseInt(t,10):t,b!==t){if(h.transitions){var i=Math.abs(b-t)/(b-t);if(n.continuous){var o=i;(i=-p[X(t)]/E)!==o&&(t=-i*m.length+t)}for(var s=Math.abs(b-t)-1;s--;)Y(X((t>b?t:b)-s-1),E*i,0);t=X(t),Y(b,E*i,e||T),Y(t,0,e||T),n.continuous&&Y(X(t-i),-E*i,0)}else t=X(t),q(b*-E,t*-E,e||T);b=t,v((function(){R(Q(),m[b],i)}))}}function Y(t,e,n){Z(t,e,n),p[t]=e}function Z(t,e,n){var i=m[t],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform=o.msTransform=o.MozTransform=o.OTransform=o.transform="translateX("+e+"px)")}function q(t,e,i){if(i)var o=+new Date,s=setInterval((function(){var r=+new Date-o;if(r>i)return g.style[k]=e+"px",(u||n.autoRestart)&&F(),j(Q(),m[b]),void clearInterval(s);g.style[k]=(e-t)*(Math.floor(r/i*100)/100)+t+"px"}),4);else g.style[k]=e+"px"}function B(){(u=n.auto||0)&&(s=setTimeout(P,u))}function V(){u=0,clearTimeout(s)}function F(){V(),B()}function G(){V(),c=!0}function H(){c=!1,F()}function J(t){return/^mouse/.test(t.type)}function K(){V(),t.style.visibility="",g.style.width="",g.style[k]="";for(var e=m.length;e--;){h.transitions&&Z(e,0,0);var n=m[e];n.getAttribute("data-cloned")&&n.parentElement.removeChild(n),n.style.width="",n.style[k]="",n.style.webkitTransitionDuration=n.style.MozTransitionDuration=n.style.msTransitionDuration=n.style.OTransitionDuration=n.style.transitionDuration="",n.style.webkitTransform=n.style.msTransform=n.style.MozTransform=n.style.OTransform=""}M(),D.cancel()}}return(e.jQuery||e.Zepto)&&((t=e.jQuery||e.Zepto).fn.Swipe=function(e){return this.each((function(){t(this).data("Swipe",new o(t(this)[0],e))}))}),o}(),o.Swipe}.apply(e,[]),void 0===i||(t.exports=i)}}]);
//# sourceMappingURL=swipejs-07b2a16629874eef0290.js.map