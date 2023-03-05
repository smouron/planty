/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var n;if(!window.jQuery)throw new Error("UIkit 2.x requires jQuery");n=t(window.jQuery),"function"==typeof define&&define.amd&&define("uikit",function(){return n.load=function(t,e,o,i){var r,a=t.split(","),s=[],u=(i.config&&i.config.uikit&&i.config.uikit.base?i.config.uikit.base:"").replace(/\/+$/g,"");if(!u)throw new Error("Please define base path to UIkit in the requirejs config.");for(r=0;r<a.length;r+=1){var c=a[r].replace(/\./g,"/");s.push(u+"/components/"+c)}e(s,function(){o(n)})},n})}(function(t){"use strict";if(window.UIkit2)return window.UIkit2;var n={},e=window.UIkit||void 0;if(n.version="2.27.5",n.noConflict=function(){return e&&(window.UIkit=e,t.UIkit=e,t.fn.uk=e.fn),n},window.UIkit2=n,e||(window.UIkit=n),n.$=t,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,n=document.body||document.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in e)if(void 0!==n.style[t])return e[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,n=document.body||document.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in e)if(void 0!==n.style[t])return e[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var o=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(o+16,n);return setTimeout(function(){t(o=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),n.support.touch="ontouchstart"in document||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,n){try{return n?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,n){return'"'+n+'":'}).replace(/'([^']+)'/g,function(t,n){return'"'+n+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,n,e){var o;return function(){var i=this,r=arguments,a=function(){o=null,e||t.apply(i,r)},s=e&&!o;clearTimeout(o),o=setTimeout(a,n),s&&t.apply(i,r)}},n.Utils.throttle=function(t,n){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},n))}},n.Utils.removeCssRules=function(t){var n,e,o,i,r,a,s,u,c,d;t&&setTimeout(function(){try{for(d=document.styleSheets,i=0,s=d.length;s>i;i++){for(o=d[i],e=[],o.cssRules=o.cssRules,n=r=0,u=o.cssRules.length;u>r;n=++r)o.cssRules[n].type===CSSRule.STYLE_RULE&&t.test(o.cssRules[n].selectorText)&&e.unshift(n);for(a=0,c=e.length;c>a;a++)o.deleteRule(e[a])}}catch(l){}},0)},n.Utils.isInView=function(e,o){var i=t(e);if(!i.is(":visible"))return!1;var r=n.$win.scrollLeft(),a=n.$win.scrollTop(),s=i.offset(),u=s.left,c=s.top;return o=t.extend({topoffset:0,leftoffset:0},o),c+i.height()>=a&&c-o.topoffset<=a+n.$win.height()&&u+i.width()>=r&&u-o.leftoffset<=r+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(e,o){var i=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",e||document);return e&&!i.length&&(i=t(e)),i.trigger("display.uk.check"),o&&("string"!=typeof o&&(o='[class*="uk-animation-"]'),i.find(o).each(function(){var t=n.$(this),e=t.attr("class"),o=e.match(/uk-animation-(.+)/);t.removeClass(o[0]).width(),t.addClass(o[0])})),i},n.Utils.options=function(e){if("string"!=t.type(e))return e;-1!=e.indexOf(":")&&"}"!=e.trim().substr(-1)&&(e="{"+e+"}");var o=e?e.indexOf("{"):-1,i={};if(-1!=o)try{i=n.Utils.str2json(e.substr(o))}catch(r){}return i},n.Utils.animate=function(e,o){var i=t.Deferred();return e=n.$(e),e.css("display","none").addClass(o).one(n.support.animation.end,function(){e.removeClass(o),i.resolve()}),e.css("display",""),i.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,n){for(var e,o,i,r,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),s=0,u=[],c=0;s<a.length;){if(e=a[s],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(s+=1,e=a[s],o=e[0],i=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),o){case"~":u.push("for(var $i=0;$i<"+i+".length;$i++) { var $item = "+i+"[$i];"),c++;break;case":":u.push("for(var $key in "+i+") { var $val = "+i+"[$key];"),c++;break;case"#":u.push("if("+i+") {"),c++;break;case"^":u.push("if(!"+i+") {"),c++;break;case"/":u.push("}"),c--;break;case"!":u.push("__ret.push("+i+");");break;default:u.push("__ret.push(escape("+i+"));")}else u.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");s+=1}return r=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':u.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),n?r(n):r},n.Utils.focus=function(n,e){if(n=t(n),!n.length)return n;var o,i=n.find("[autofocus]:first");return i.length?i.focus():(i=n.find(":input"+(e&&","+e||"")).first(),i.length?i.focus():(n.attr("tabindex")||(o=1e3,n.attr("tabindex",o)),n[0].focus(),o&&n.attr("tabindex",""),n))},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",n.fn=function(e,o){var i=arguments,r=e.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=r[1],s=r[2];return n[a]?this.each(function(){var e=t(this),r=e.data(a);r||e.data(a,r=n[a](this,s?void 0:o)),s&&r[s].apply(r,Array.prototype.slice.call(i,1))}):(t.error("UIkit component ["+a+"] does not exist."),this)},t.UIkit=n,t.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(e,o,i){if(n.components[e]&&!i)return n.components[e];var r=function(o,i){var a=this;return this.UIkit=n,this.element=o?n.$(o):null,this.options=t.extend(!0,{},this.defaults,i),this.plugins={},this.element&&this.element.data(e,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(r.plugins)).forEach(function(t){r.plugins[t].init&&(r.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[e,this]),this};return r.plugins={},t.extend(!0,r.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,e,o){return n.$(this.element||this).on(t,e,o)},one:function(t,e,o){return n.$(this.element||this).one(t,e,o)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,e){return n.$(this.element||this).trigger(t,e)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,n){var e=this;n.split(" ").forEach(function(n){e[n]||(e[n]=function(){return t[n].apply(t,arguments)})})},mixin:function(t,n){var e=this;n.split(" ").forEach(function(n){e[n]||(e[n]=t[n].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},o),this.components[e]=r,this[e]=function(){var o,i;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?o=t(arguments[0]):i=arguments[0];break;case 2:o=t(arguments[0]),i=arguments[1]}return o&&o.data(e)?o.data(e):new n.components[e](o,i)},n.domready&&n.component.boot(e),r},n.plugin=function(t,n,e){this.components[t].plugins[n]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,e,o){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&e.apply(n.$doc),n.$doc.on(t,e,o)},n.one=function(t,e,o){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(e.apply(n.$doc),n.$doc):n.$doc.one(t,e,o)},n.trigger=function(t,e){return n.$doc.trigger(t,e)},n.domObserve=function(t,e){n.support.mutationobserver&&(e=e||function(){},n.$(t).each(function(){var t=this,o=n.$(t);if(!o.data("observer"))try{var i=new n.support.mutationobserver(n.Utils.debounce(function(){e.apply(t,[o]),o.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});i.observe(t,{childList:!0,subtree:!0}),o.data("observer",i)}catch(r){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(n){n(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var e=function(){n.$body=n.$("body"),n.trigger("beforeready.uk.dom"),n.component.bootComponents();var e=requestAnimationFrame(function(){var t={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},o=function(){var i=window.pageXOffset,r=window.pageYOffset;(t.x!=i||t.y!=r)&&(t.dir.x=i!=t.x?i>t.x?1:-1:0,t.dir.y=r!=t.y?r>t.y?1:-1:0,t.x=i,t.y=r,n.$doc.trigger("scrolling.uk.document",[{dir:{x:t.dir.x,y:t.dir.y},x:i,y:r}])),cancelAnimationFrame(e),e=requestAnimationFrame(o)};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",o),(t.x||t.y)&&o(),o}());if(n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var n=function(){return t(".uk-height-viewport").css("height",window.innerHeight),n};return n()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0,n.support.mutationobserver){var o=n.Utils.debounce(function(){requestAnimationFrame(function(){n.init(document.body)})},10);new n.support.mutationobserver(function(t){var n=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var e,o=0;o<t.addedNodes.length;++o)if(e=t.addedNodes[o],e.outerHTML&&-1!==e.outerHTML.indexOf("data-uk-"))return(n=!0)&&!1;return!0}),n&&o()}).observe(document.body,{childList:!0,subtree:!0})}};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(e),e}()),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var o,i=!1,r="uk-hover",a=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",a,function(){i&&t("."+r).removeClass(r),i=t(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(n){o=t(n.target).parents(a),i&&i.not(o).removeClass(r)})}return n});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.process()}),i.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each(function(i,s){s=t.$(this),"none"!=this.style.display&&(i=s.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=n===!1?i:Math.min(n,i))}),t.$(e[n]).addClass(this.options.rowfirst),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,s=Math.floor(n*t.data("height"));t.css({height:e>i?s:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each(function(i,e,s,a){a=t.$(this),"none"!=a.css("display")&&(i=a.offset(),e=a.outerHeight(),s=i.top+e,a.data({ukMarginPos:s,ukMarginTop:i.top}),(n===!1||i.top<n.top)&&(n={top:i.top,left:i.left,pos:s}))}).each(function(i){i=t.$(this),"none"!=i.css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,s=[];i.each(function(){var i=t.$(this),a=i.offset().top;a!=e&&s.length&&(n(t.$(s)),s=[],a=i.offset().top),s.push(i),e=a}),s.length&&n(t.$(s))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var s=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){s.resolve(t.$(i).find("svg"))}),i[n]=s.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({}),t.Utils.getCssVar=function(t){var i,e=document.documentElement,n=e.appendChild(document.createElement("div"));n.classList.add("var-"+t);try{i=JSON.parse(i=getComputedStyle(n,":before").content.replace(/^["'](.*)["']$/,"$1"))}catch(s){i=void 0}return e.removeChild(n),i}}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(e){function t(e,t,n,o){return Math.abs(e-t)>=Math.abs(n-o)?e-t>0?"Left":"Right":n-o>0?"Up":"Down"}function n(){c=null,g.last&&(void 0!==g.el&&g.el.trigger("longTap"),g={})}function o(){c&&clearTimeout(c),c=null}function i(){a&&clearTimeout(a),l&&clearTimeout(l),u&&clearTimeout(u),c&&clearTimeout(c),a=l=u=c=null,g={}}function r(e){return e.pointerType==e.MSPOINTER_TYPE_TOUCH&&e.isPrimary}if(!e.fn.swipeLeft){var a,l,u,c,p,g={},s=750,v="ontouchstart"in window,w=window.PointerEvent,d=v||window.DocumentTouch&&document instanceof DocumentTouch||navigator.msPointerEnabled&&navigator.msMaxTouchPoints>0||navigator.pointerEnabled&&navigator.maxTouchPoints>0;e(function(){var y,T,f,h=0,M=0;"MSGesture"in window&&(p=new MSGesture,p.target=document.body),e(document).on("MSGestureEnd gestureend",function(e){var t=e.originalEvent.velocityX>1?"Right":e.originalEvent.velocityX<-1?"Left":e.originalEvent.velocityY>1?"Down":e.originalEvent.velocityY<-1?"Up":null;t&&void 0!==g.el&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t))}).on("touchstart MSPointerDown pointerdown",function(t){("MSPointerDown"!=t.type||r(t.originalEvent))&&(f="MSPointerDown"==t.type||"pointerdown"==t.type?t:t.originalEvent.touches[0],y=Date.now(),T=y-(g.last||y),g.el=e("tagName"in f.target?f.target:f.target.parentNode),a&&clearTimeout(a),g.x1=f.pageX,g.y1=f.pageY,T>0&&250>=T&&(g.isDoubleTap=!0),g.last=y,c=setTimeout(n,s),t.originalEvent&&t.originalEvent.pointerId&&p&&("MSPointerDown"==t.type||"pointerdown"==t.type||"touchstart"==t.type)&&p.addPointer(t.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(e){("MSPointerMove"!=e.type||r(e.originalEvent))&&(f="MSPointerMove"==e.type||"pointermove"==e.type?e:e.originalEvent.touches[0],o(),g.x2=f.pageX,g.y2=f.pageY,h+=Math.abs(g.x1-g.x2),M+=Math.abs(g.y1-g.y2))}).on("touchend MSPointerUp pointerup",function(n){("MSPointerUp"!=n.type||r(n.originalEvent))&&(o(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?u=setTimeout(function(){void 0!==g.el&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),g={}},0):"last"in g&&(isNaN(h)||30>h&&30>M?l=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=i,void 0!==g.el&&g.el.trigger(t),g.isDoubleTap?(void 0!==g.el&&g.el.trigger("doubleTap"),g={}):a=setTimeout(function(){a=null,void 0!==g.el&&g.el.trigger("singleTap"),g={}},250)},0):g={},h=M=0))}).on("touchcancel MSPointerCancel pointercancel",function(e){("touchcancel"==e.type&&v&&d||!v&&"pointercancel"==e.type&&w)&&i()}),e(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(n){return e(this).on(t,n)}})}}(jQuery);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,n=t.$(this);n.data("gridMatchHeight")||(i=t.gridMatchHeight(n,t.Utils.options(n.attr("data-uk-grid-match"))))})})},init:function(){var n=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){n.element.is(":visible")&&n.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),this.options.observe&&t.domObserve(this.element,function(){n.element.is(":visible")&&n.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var n=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return n&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,n=t.$(this);n.data("gridMargin")||(i=t.gridMargin(n,t.Utils.options(n.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";function i(i){var s=t.$(i),e="auto";if(s.is(":visible"))e=s.outerHeight();else{var a={position:s.css("position"),visibility:s.css("visibility"),display:s.css("display")};e=s.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),s.css(a)}return e}t.component("nav",{defaults:{toggle:'>li.uk-parent > a[href="#"]',lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(s){s.preventDefault();var e=t.$(this);i.open(e.parent()[0]==i.element[0]?e:e.parent("li"))}),this.update(),t.domObserve(this.element,function(){i.element.find(i.options.lists).not("[role]").length&&i.update()})},update:function(){var i=this;this.find(this.options.lists).each(function(){var s=t.$(this).attr("role","menu"),e=s.closest("li"),a=e.hasClass("uk-active");e.data("list-container")||(s.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),e.data("list-container",s.parent()[a?"removeClass":"addClass"]("uk-hidden"))),e.attr("aria-expanded",e.hasClass("uk-open")),a&&i.open(e,!0)})},open:function(s,e){var a=this,n=this.element,o=t.$(s),l=o.data("list-container");this.options.multiple||n.children(".uk-open").not(s).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),o.toggleClass("uk-open"),o.attr("aria-expanded",o.hasClass("uk-open")),l&&(o.hasClass("uk-open")&&l.removeClass("uk-hidden"),e?(l.stop().height(o.hasClass("uk-open")?"auto":0),o.hasClass("uk-open")||l.addClass("uk-hidden"),this.trigger("display.uk.check")):l.stop().animate({height:o.hasClass("uk-open")?i(l.find("ul:first")):0},function(){o.hasClass("uk-open")?l.css("height",""):l.addClass("uk-hidden"),a.trigger("display.uk.check")}))}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var a=t.$(this);if(!a.data("buttonRadio")){var e=t.buttonRadio(a,t.Utils.options(a.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(e.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(a){var e=t.$(this);e.is('a[href="#"]')&&a.preventDefault(),i.find(i.options.target).not(e).removeClass(i.options.activeClass).blur(),e.addClass(i.options.activeClass),i.find(i.options.target).not(e).attr("aria-checked","false"),e.attr("aria-checked","true"),i.trigger("change.uk.button",[e])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var a=t.$(this);if(!a.data("buttonCheckbox")){var e=t.buttonCheckbox(a,t.Utils.options(a.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(e.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(a){var e=t.$(this);e.is('a[href="#"]')&&a.preventDefault(),e.toggleClass(i.options.activeClass).blur(),e.attr("aria-checked",e.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[e])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var o=t.$(this);if(!o.data("alert")){var e=t.alert(o,t.Utils.options(o.attr("data-uk-alert")));t.$(i.target).is(e.options.trigger)&&(i.preventDefault(),e.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0},this.options.duration,i):i()}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";function o(o,e,i,n){if(o=t.$(o),e=t.$(e),i=i||window.innerWidth,n=n||o.offset(),e.length){var r=e.outerWidth();if(o.css("min-width",r),"right"==t.langdirection){var s=i-(e.offset().left+r),d=i-(o.offset().left+o.outerWidth());o.css("margin-right",s-d)}else o.css("margin-left",e.offset().left-n.left)}}var e,i=!1,n={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var o=t.support.touch?"click":"mouseenter";t.$html.on(o+".dropdown.uikit focus pointerdown","[data-uk-dropdown]",function(e){var i=t.$(this);if(!i.data("dropdown")){var n=t.dropdown(i,t.Utils.options(i.attr("data-uk-dropdown")));("click"==e.type||"mouseenter"==e.type&&"hover"==n.options.mode)&&n.element.trigger(o),n.dropdown.length&&e.preventDefault()}})},init:function(){var o=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.offsetParent.length||(this.offsetParent=this.element),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),this.dropdown.attr("aria-hidden","true"),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var i=t.$(e.target);i.parents(o.options.dropdownSelector).length||((i.is("a[href='#']")||i.parent().is("a[href='#']")||o.dropdown.length&&!o.dropdown.is(":visible"))&&e.preventDefault(),i.blur()),o.element.hasClass("uk-open")?(!o.dropdown.find(e.target).length||i.is(".uk-dropdown-close")||i.parents(".uk-dropdown-close").length)&&o.hide():o.show()}):this.on("mouseenter",function(){o.trigger("pointerenter.uk.dropdown",[o]),o.remainIdle&&clearTimeout(o.remainIdle),e&&clearTimeout(e),i&&i==o||(e=i&&i!=o?setTimeout(function(){e=setTimeout(o.show.bind(o),o.options.delay)},o.options.hoverDelayIdle):setTimeout(o.show.bind(o),o.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),o.remainIdle=setTimeout(function(){i&&i==o&&o.hide()},o.options.remaintime),o.trigger("pointerleave.uk.dropdown",[o])}).on("click",function(e){var n=t.$(e.target);return o.remainIdle&&clearTimeout(o.remainIdle),i&&i==o?((!o.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&o.hide(),void 0):((n.is("a[href='#']")||n.parent().is("a[href='#']"))&&e.preventDefault(),o.show(),void 0)})},show:function(){t.$html.off("click.outer.dropdown"),i&&i!=this&&i.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.dropdown.attr("aria-hidden","false"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),t.Utils.focus(this.dropdown),i=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.dropdown.attr("aria-hidden","true"),this.trigger("hide.uk.dropdown",[this,t]),i==this&&(i=!1)},registerOuterClick:function(){var o=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(n){e&&clearTimeout(e);t.$(n.target);i!=o||o.element.find(n.target).length||(o.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({topLeft:"",left:"",marginLeft:"",marginRight:""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,i=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),r=this.options.offset,s=this.dropdown,d=(s.show().offset()||{left:0,top:0},s.outerWidth()),h=s.outerHeight(),p=this.boundary.width(),l=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),a={"bottom-left":{top:0+i.height+r,left:0},"bottom-right":{top:0+i.height+r,left:0+i.width-d},"bottom-center":{top:0+i.height+r,left:0+i.width/2-d/2},"top-left":{top:0-h-r,left:0},"top-right":{top:0-h-r,left:0+i.width-d},"top-center":{top:0-h-r,left:0+i.width/2-d/2},"left-top":{top:0,left:0-d-r},"left-bottom":{top:0+i.height-h,left:0-d-r},"left-center":{top:0+i.height/2-h/2,left:0-d-r},"right-top":{top:0,left:0+i.width+r},"right-bottom":{top:0+i.height-h,left:0+i.width+r},"right-center":{top:0+i.height/2-h/2,left:0+i.width+r}},f={};if(e=l.split("-"),f=a[l]?a[l]:a["bottom-left"],this.justified&&this.justified.length)o(s.css({left:0}),this.justified,p);else if(this.options.preventflip!==!0){var u;switch(this.checkBoundary(i.left+f.left,i.top+f.top,d,h,p)){case"x":"x"!==this.options.preventflip&&(u=n.x[l]||"right-top");break;case"y":"y"!==this.options.preventflip&&(u=n.y[l]||"top-left");break;case"xy":this.options.preventflip||(u=n.xy[l]||"right-bottom")}u&&(e=u.split("-"),f=a[u]?a[u]:a["bottom-left"],s.addClass("uk-dropdown-autoflip"),this.checkBoundary(i.left+f.left,i.top+f.top,d,h,p)&&(e=l.split("-"),f=a[l]?a[l]:a["bottom-left"]))}d>p&&(s.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),s.css(f).css("display","").addClass("uk-dropdown-"+e[0])}},checkBoundary:function(o,e,i,n,r){var s="";return(0>o||o-t.$win.scrollLeft()+i>r)&&(s+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+n>window.innerHeight)&&(s+="y"),s}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(o){t.$("[data-uk-dropdown-overlay]",o).each(function(){var o=t.$(this);o.data("dropdownOverlay")||t.dropdownOverlay(o,t.Utils.options(o.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,i){e.dropdown=i,e.justified&&e.justified.length&&o(e.overlay.css({display:"block",marginLeft:"",marginRight:""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var o=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:o},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&i&&(e.remainIdle=setTimeout(function(){i&&i.hide()},i.options.remaintime))}})}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(a){"use strict";var t={x:window.scrollX,y:window.scrollY},n=(a.$win,a.$doc,a.$html),i={show:function(i,e){if(i=a.$(i),i.length){e=a.$.extend({mode:"push"},e);var o=a.$("body"),s=i.find(".uk-offcanvas-bar:first"),r="right"==a.langdirection,f=s.hasClass("uk-offcanvas-bar-flip")?-1:1,c=f*(r?-1:1),h=window.innerWidth-o.width();t={x:window.pageXOffset,y:window.pageYOffset},s.attr("mode",e.mode),i.addClass("uk-active"),o.css({width:window.innerWidth-h,height:window.innerHeight}).addClass("uk-offcanvas-page"),("push"==e.mode||"reveal"==e.mode)&&o.css(r?"margin-right":"margin-left",(r?-1:1)*s.outerWidth()*c),"reveal"==e.mode&&s.css("clip","rect(0, "+s.outerWidth()+"px, 100vh, 0)"),n.css("margin-top",-1*t.y).width(),s.addClass("uk-offcanvas-bar-show"),this._initElement(i),s.trigger("show.uk.offcanvas",[i,s]),i.attr("aria-hidden","false")}},hide:function(i){var e=a.$("body"),o=a.$(".uk-offcanvas.uk-active"),s="right"==a.langdirection,r=o.find(".uk-offcanvas-bar:first"),f=function(){e.removeClass("uk-offcanvas-page").css({width:"",height:"",marginLeft:"",marginRight:""}),o.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),n.css("margin-top",""),window.scrollTo(t.x,t.y),r.trigger("hide.uk.offcanvas",[o,r]),o.attr("aria-hidden","true")};o.length&&("none"==r.attr("mode")&&(i=!0),a.support.transition&&!i?(e.one(a.support.transition.end,function(){f()}).css(s?"margin-right":"margin-left",""),"reveal"==r.attr("mode")&&r.css("clip",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):f())},_initElement:function(t){t.data("OffcanvasInit")||(t.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(t){var n=a.$(t.target);if(t.type.match(/swipe/)){if(n.parents(".uk-offcanvas-bar:first").length)return}else if(!n.hasClass("uk-offcanvas-close")){if(n.hasClass("uk-offcanvas-bar"))return;if(n.parents(".uk-offcanvas-bar:first").length)return}t.stopImmediatePropagation(),i.hide()}),t.on("click",'a[href*="#"]',function(){var t=a.$(this),n=t.attr("href");"#"!=n&&(a.$doc.one("hide.uk.offcanvas",function(){var i;try{i=a.$(t[0].hash)}catch(e){i=""}i.length||(i=a.$('[name="'+t[0].hash.replace("#","")+'"]')),i.length&&a.Utils.scrollToElement?a.Utils.scrollToElement(i,a.Utils.options(t.attr("data-uk-smooth-scroll")||"{}")):window.location.href=n}),i.hide())}),t.data("OffcanvasInit",!0))}};a.component("offcanvasTrigger",{boot:function(){n.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(t){t.preventDefault();var n=a.$(this);if(!n.data("offcanvasTrigger")){{a.offcanvasTrigger(n,a.Utils.options(n.attr("data-uk-offcanvas")))}n.trigger("click")}}),n.on("keydown.uk.offcanvas",function(a){27===a.keyCode&&i.hide()})},init:function(){var t=this;this.options=a.$.extend({target:t.element.is("a")?t.element.attr("href"):!1,mode:"push"},this.options),this.on("click",function(a){a.preventDefault(),i.show(t.options.target,t.options)})}}),a.offcanvas=i}(UIkit2);