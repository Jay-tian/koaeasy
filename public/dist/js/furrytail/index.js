/*! tianshengjie */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=6)}([,,,,function(e,n){e.exports=jQuery},function(e,n,t){var o,i;
/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(a,r){"use strict";o=[t(4)],void 0===(i=function(e){return function(e,n,t,o,i){var a="fullpage-wrapper",r="."+a,s="fp-responsive",l="fp-notransition",c="fp-destroyed",d="fp-enabled",f="fp-viewing",u="active",v="."+u,h="fp-completely",p="."+h,g="fp-section",m="."+g,w=m+v,S=m+":first",b=m+":last",x="fp-tableCell",y="."+x,C="fp-auto-height",T="fp-normal-scroll",k="fp-nav",L="#"+k,O="fp-tooltip",A="."+O,I="fp-show-active",E="fp-slide",M="."+E,B=M+v,R="fp-slides",z="."+R,H="fp-slidesContainer",P="."+H,D="fp-table",q="fp-slidesNav",j="."+q,F=j+" a",V=".fp-controlArrow",Y="fp-prev",N="fp-controlArrow "+Y,X=V+"."+Y,$="fp-controlArrow fp-next",U=V+".fp-next",W=e(n),_=e(t);e.fn.fullpage=function(K){if(e("html").hasClass(d))Zn();else{var Q=e("html, body"),G=e("body"),J=e.fn.fullpage;K=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fn.fp_scrolloverflow?e.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},K);var Z,ee,ne,te,oe=!1,ie=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ae="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,re=e(this),se=W.height(),le=!1,ce=!0,de=!0,fe=[],ue={m:{up:!0,down:!0,left:!0,right:!0}};ue.k=e.extend(!0,{},ue.m);var ve,he,pe,ge,me,we,Se,be=function(){var e;e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return e}(),xe={touchmove:"ontouchmove"in n?"touchmove":be.move,touchstart:"ontouchstart"in n?"touchstart":be.down},ye='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Ce=e.extend(!0,{},K);Zn(),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(J.version="2.9.6",J.setAutoScrolling=ze,J.setRecordHistory=He,J.setScrollingSpeed=Pe,J.setFitToSection=De,J.setLockAnchors=function(e){K.lockAnchors=e},J.setMouseWheelScrolling=qe,J.setAllowScrolling=je,J.setKeyboardScrolling=Fe,J.moveSectionUp=Ve,J.moveSectionDown=Ye,J.silentMoveTo=Ne,J.moveTo=Xe,J.moveSlideRight=$e,J.moveSlideLeft=Ue,J.fitToSection=Ge,J.reBuild=We,J.setResponsive=_e,J.destroy=function(n){ze(!1,"internal"),je(!1),Fe(!1),re.addClass(c),clearTimeout(ge),clearTimeout(pe),clearTimeout(he),clearTimeout(me),clearTimeout(we),W.off("scroll",Qe).off("hashchange",mn).off("resize",Mn),_.off("keydown",Sn).off("keyup",xn).off("click touchstart",L+" a").off("mouseenter",L+" li").off("mouseleave",L+" li").off("click touchstart",F).off("mouseover",K.normalScrollElements).off("mouseout",K.normalScrollElements),e(m).off("click touchstart",V),clearTimeout(ge),clearTimeout(pe),n&&function(){Kn(0),re.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){dn(e(this),"src")}),re.find("img[data-srcset]").each(function(){dn(e(this),"srcset")}),e(L+", "+j+", "+V).remove(),e(m).css({height:"","background-color":"",padding:""}),e(M).css({width:""}),re.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),Q.css({overflow:"",height:""}),e("html").removeClass(d),G.removeClass(s),e.each(G.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(f)&&G.removeClass(n)}),e(m+", "+M).each(function(){K.scrollOverflowHandler&&K.scrollOverflowHandler.remove(e(this)),e(this).removeClass(D+" "+u),e(this).attr("style",e(this).data("fp-styles"))}),zn(re),re.find(y+", "+P+", "+z).each(function(){e(this).replaceWith(this.childNodes)}),re.css({"-webkit-transition":"none",transition:"none"}),Q.scrollTop(0);var n=[g,E,H];e.each(n,function(n,t){e("."+t).removeClass(t)})}()},J.shared={afterRenderActions:Ke},function(){K.css3&&(K.css3=function(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var r in t.body.insertBefore(o,null),a)o.style[r]!==i&&(o.style[r]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[r]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}());K.scrollBar=K.scrollBar||K.hybrid,o=re.find(K.sectionSelector),K.anchors.length||(K.anchors=o.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),K.navigationTooltips.length||(K.navigationTooltips=o.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get()),re.css({height:"100%",position:"relative"}),re.addClass(a),e("html").addClass(d),se=W.height(),re.removeClass(c),re.find(K.sectionSelector).addClass(g),re.find(K.slideSelector).addClass(E),e(m).each(function(n){var t=e(this),o=t.find(M),i=o.length;t.data("fp-styles",t.attr("style")),function(n,t){t||0!==e(w).length||n.addClass(u),te=e(w),n.css("height",se+"px"),K.paddingTop&&n.css("padding-top",K.paddingTop),K.paddingBottom&&n.css("padding-bottom",K.paddingBottom),void 0!==K.sectionsColor[t]&&n.css("background-color",K.sectionsColor[t]),void 0!==K.anchors[t]&&n.attr("data-anchor",K.anchors[t])}(t,n),function(n,t){void 0!==K.anchors[t]&&n.hasClass(u)&&Hn(K.anchors[t],t),K.menu&&K.css3&&e(K.menu).closest(r).length&&e(K.menu).appendTo(G)}(t,n),i>0?function(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+H+'" />'),t.parent().wrap('<div class="'+R+'" />'),n.find(P).css("width",i+"%"),o>1&&(K.controlArrows&&function(e){e.find(z).after('<div class="'+N+'"></div><div class="'+$+'"></div>'),"#fff"!=K.controlArrowColor&&(e.find(U).css("border-color","transparent transparent transparent "+K.controlArrowColor),e.find(X).css("border-color","transparent "+K.controlArrowColor+" transparent transparent")),K.loopHorizontal||e.find(X).hide()}(n),K.slidesNavigation&&function(e,n){e.append('<div class="'+q+'"><ul></ul></div>');var t=e.find(j);t.addClass(K.slidesNavPosition);for(var o=0;o<n;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(u)}(n,o)),t.each(function(n){e(this).css("width",a+"%"),K.verticalCentered&&Dn(e(this))});var r=n.find(B);r.length&&(0!==e(w).index(m)||0===e(w).index(m)&&0!==r.index())?_n(r,"internal"):t.eq(0).addClass(u)}(t,o,i):K.verticalCentered&&Dn(t)}),K.fixedElements&&K.css3&&e(K.fixedElements).appendTo(G),K.navigation&&function(){G.append('<div id="'+k+'"><ul></ul></div>');var n=e(L);n.addClass(function(){return K.showActiveTooltip?I+" "+K.navigationPosition:K.navigationPosition});for(var t=0;t<e(m).length;t++){var o="";K.anchors.length&&(o=K.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=K.navigationTooltips[t];void 0!==a&&""!==a&&(i+='<div class="'+O+" "+K.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(L).css("margin-top","-"+e(L).height()/2+"px"),e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)}(),re.find('iframe[src*="youtube.com/embed/"]').each(function(){var n,t,o;n=e(this),t="enablejsapi=1",o=n.attr("src"),n.attr("src",o+(/\?/.test(o)?"&":"?")+t)}),K.scrollOverflow?ve=K.scrollOverflowHandler.init(K):Ke(),je(!0),ze(K.autoScrolling,"internal"),Bn(),Un(),"complete"===t.readyState&&gn();var o;W.on("load",gn)}(),W.on("scroll",Qe).on("hashchange",mn).blur(kn).resize(Mn),_.keydown(Sn).keyup(xn).on("click touchstart",L+" a",Ln).on("click touchstart",F,On).on("click",A,bn),e(m).on("click touchstart",V,Tn),K.normalScrollElements&&(_.on("mouseenter touchstart",K.normalScrollElements,function(){je(!1)}),_.on("mouseleave touchend",K.normalScrollElements,function(){je(!0)})));var Te=!1,ke=0,Le=0,Oe=0,Ae=0,Ie=0,Ee=(new Date).getTime(),Me=0,Be=0,Re=se}function ze(n,t){n||Kn(0),Jn("autoScrolling",n,t);var o=e(w);K.autoScrolling&&!K.scrollBar?(Q.css({overflow:"hidden",height:"100%"}),He(Ce.recordHistory,"internal"),re.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&Kn(o.position().top)):(Q.css({overflow:"visible",height:"initial"}),He(!1,"internal"),re.css({"-ms-touch-action":"","touch-action":""}),o.length&&Q.scrollTop(o.position().top))}function He(e,n){Jn("recordHistory",e,n)}function Pe(e,n){Jn("scrollingSpeed",e,n)}function De(e,n){Jn("fitToSection",e,n)}function qe(e){e?(!function(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",an,!1):t[e](o+a,an,!1)}(),re.on("mousedown",yn).on("mouseup",Cn)):(t.addEventListener?(t.removeEventListener("mousewheel",an,!1),t.removeEventListener("wheel",an,!1),t.removeEventListener("MozMousePixelScroll",an,!1)):t.detachEvent("onmousewheel",an),re.off("mousedown",yn).off("mouseup",Cn))}function je(n,t){void 0!==t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Gn(n,t,"m")})):(Gn(n,"all","m"),n?(qe(!0),(ie||ae)&&(K.autoScrolling&&G.off(xe.touchmove).on(xe.touchmove,Ze),e(r).off(xe.touchstart).on(xe.touchstart,tn).off(xe.touchmove).on(xe.touchmove,en))):(qe(!1),(ie||ae)&&(K.autoScrolling&&G.off(xe.touchmove),e(r).off(xe.touchstart).off(xe.touchmove))))}function Fe(n,t){void 0!==t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Gn(n,t,"k")})):(Gn(n,"all","k"),K.keyboardScrolling=n)}function Ve(){var n=e(w).prev(m);n.length||!K.loopTop&&!K.continuousVertical||(n=e(m).last()),n.length&&ln(n,null,!0)}function Ye(){var n=e(w).next(m);n.length||!K.loopBottom&&!K.continuousVertical||(n=e(m).first()),n.length&&ln(n,null,!1)}function Ne(e,n){Pe(0,"internal"),Xe(e,n),Pe(Ce.scrollingSpeed,"internal")}function Xe(e,n){var t=Fn(e);void 0!==n?Vn(e,n):t.length>0&&ln(t)}function $e(e){rn("right",e)}function Ue(e){rn("left",e)}function We(n){if(!re.hasClass(c)){le=!0,se=W.height(),e(m).each(function(){var n=e(this).find(z),t=e(this).find(M);K.verticalCentered&&e(this).find(y).css("height",qn(e(this))+"px"),e(this).css("height",se+"px"),t.length>1&&In(n,n.find(B))}),K.scrollOverflow&&ve.createScrollBarForAll();var t=e(w),o=t.index(m);o&&Ne(o+1),le=!1,e.isFunction(K.afterResize)&&n&&K.afterResize.call(re),e.isFunction(K.afterReBuild)&&!n&&K.afterReBuild.call(re)}}function _e(n){var t=G.hasClass(s);n?t||(ze(!1,"internal"),De(!1,"internal"),e(L).hide(),G.addClass(s),e.isFunction(K.afterResponsive)&&K.afterResponsive.call(re,n)):t&&(ze(Ce.autoScrolling,"internal"),De(Ce.autoScrolling,"internal"),e(L).show(),G.removeClass(s),e.isFunction(K.afterResponsive)&&K.afterResponsive.call(re,n))}function Ke(){var n,t=e(w);t.addClass(h),fn(t),un(t),K.scrollOverflow&&K.scrollOverflowHandler.afterLoad(),(!(n=Fn(wn().section))||n.length&&n.index()===te.index())&&e.isFunction(K.afterLoad)&&K.afterLoad.call(t,t.data("anchor"),t.index(m)+1),e.isFunction(K.afterRender)&&K.afterRender.call(re)}function Qe(){var n;if(!K.autoScrolling||K.scrollBar){var o=W.scrollTop(),i=function(e){var n=e>ke?"down":"up";return ke=e,Me=e,n}(o),a=0,r=o+W.height()/2,s=G.height()-W.height()===o,l=t.querySelectorAll(m);if(s)a=l.length-1;else if(o)for(var c=0;c<l.length;++c){var d=l[c];d.offsetTop<=r&&(a=c)}else a=0;if(function(n){var t=e(w).position().top,o=t+W.height();if("up"==n)return o>=W.scrollTop()+W.height();return t<=W.scrollTop()}(i)&&(e(w).hasClass(h)||e(w).addClass(h).siblings().removeClass(h)),!(n=e(l).eq(a)).hasClass(u)){Te=!0;var f,v,p=e(w),g=p.index(m)+1,S=Pn(n),b=n.data("anchor"),x=n.index(m)+1,y=n.find(B);y.length&&(v=y.data("anchor"),f=y.index()),de&&(n.addClass(u).siblings().removeClass(u),e.isFunction(K.onLeave)&&K.onLeave.call(p,g,x,S),e.isFunction(K.afterLoad)&&K.afterLoad.call(n,b,x),hn(p),fn(n),un(n),Hn(b,x-1),K.anchors.length&&(Z=b),Nn(f,v,b,x)),clearTimeout(me),me=setTimeout(function(){Te=!1},100)}K.fitToSection&&(clearTimeout(we),we=setTimeout(function(){K.fitToSection&&e(w).outerHeight()<=se&&Ge()},K.fitToSectionDelay))}}function Ge(){de&&(le=!0,ln(e(w)),le=!1)}function Je(n){if(ue.m[n]){var t="down"===n?Ye:Ve;if(K.scrollOverflow){var o=K.scrollOverflowHandler.scrollable(e(w)),i="down"===n?"bottom":"top";if(o.length>0){if(!K.scrollOverflowHandler.isScrolled(i,o))return!0;t()}else t()}else t()}}function Ze(e){var n=e.originalEvent;K.autoScrolling&&nn(n)&&e.preventDefault()}function en(n){var t=n.originalEvent,i=e(t.target).closest(m);if(nn(t)){K.autoScrolling&&n.preventDefault();var a=Wn(t);Ae=a.y,Ie=a.x,i.find(z).length&&o.abs(Oe-Ie)>o.abs(Le-Ae)?!oe&&o.abs(Oe-Ie)>W.outerWidth()/100*K.touchSensitivity&&(Oe>Ie?ue.m.right&&$e(i):ue.m.left&&Ue(i)):K.autoScrolling&&de&&o.abs(Le-Ae)>W.height()/100*K.touchSensitivity&&(Le>Ae?Je("down"):Ae>Le&&Je("up"))}}function nn(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function tn(e){var n=e.originalEvent;if(K.fitToSection&&Q.stop(),nn(n)){var t=Wn(n);Le=t.y,Oe=t.x}}function on(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function an(t){var i=(new Date).getTime(),a=e(p).hasClass(T);if(K.autoScrolling&&!ne&&!a){var r=(t=t||n.event).wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,c=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!l;fe.length>149&&fe.shift(),fe.push(o.abs(r)),K.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var d=i-Ee;if(Ee=i,d>200&&(fe=[]),de){var f=on(fe,10),u=on(fe,70),v=f>=u;v&&c&&Je(s<0?"down":"up")}return!1}K.fitToSection&&Q.stop()}function rn(n,t){var o=void 0===t?e(w):t,i=o.find(z),a=i.find(M).length;if(!(!i.length||oe||a<2)){var r=i.find(B),s=null;if(!(s="left"===n?r.prev(M):r.next(M)).length){if(!K.loopHorizontal)return;s="left"===n?r.siblings(":last"):r.siblings(":first")}oe=!0,In(i,s,n)}}function sn(){e(B).each(function(){_n(e(this),"internal")})}function ln(n,t,i){if(void 0!==n){var a,s,l=function(e){var n=e.position(),t=n.top,o=n.top>Me,i=t-se+e.outerHeight(),a=K.bigSectionsDestination;e.outerHeight()>se?(o||a)&&"bottom"!==a||(t=i):(o||le&&e.is(":last-child"))&&(t=i);return Me=t,t}(n),c={element:n,callback:t,isMovementUp:i,dtop:l,yMovement:Pn(n),anchorLink:n.data("anchor"),sectionIndex:n.index(m),activeSlide:n.find(B),activeSection:e(w),leavingSection:e(w).index(m)+1,localIsResizing:le};if(!(c.activeSection.is(n)&&!le||K.scrollBar&&W.scrollTop()===c.dtop&&!n.hasClass(C))){if(c.activeSlide.length&&(a=c.activeSlide.data("anchor"),s=c.activeSlide.index()),e.isFunction(K.onLeave)&&!c.localIsResizing){var d=c.yMovement;if(void 0!==i&&(d=i?"up":"down"),!1===K.onLeave.call(c.activeSection,c.leavingSection,c.sectionIndex+1,d))return}K.autoScrolling&&K.continuousVertical&&void 0!==c.isMovementUp&&(!c.isMovementUp&&"up"==c.yMovement||c.isMovementUp&&"down"==c.yMovement)&&(c=function(n){n.isMovementUp?e(w).before(n.activeSection.nextAll(m)):e(w).after(n.activeSection.prevAll(m).get().reverse());return Kn(e(w).position().top),sn(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=Pn(n.element),n.leavingSection=n.activeSection.index(m)+1,n.sectionIndex=n.element.index(m),n}(c)),c.localIsResizing||hn(c.activeSection),K.scrollOverflow&&K.scrollOverflowHandler.beforeLeave(),n.addClass(u).siblings().removeClass(u),fn(n),K.scrollOverflow&&K.scrollOverflowHandler.onLeave(),de=!1,Nn(s,a,c.anchorLink,c.sectionIndex),function(n){if(K.css3&&K.autoScrolling&&!K.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";jn(t,!0),K.scrollingSpeed?(clearTimeout(pe),pe=setTimeout(function(){cn(n)},K.scrollingSpeed)):cn(n)}else{var i=function(e){var n={};K.autoScrolling&&!K.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body");return n}(n);e(i.element).animate(i.options,K.scrollingSpeed,K.easing).promise().done(function(){K.scrollBar?setTimeout(function(){cn(n)},30):cn(n)})}}(c),Z=c.anchorLink,Hn(c.anchorLink,c.sectionIndex)}}}function cn(n){!function(n){if(!n.wrapAroundElements||!n.wrapAroundElements.length)return;n.isMovementUp?e(S).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements);Kn(e(w).position().top),sn()}(n),e.isFunction(K.afterLoad)&&!n.localIsResizing&&K.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),K.scrollOverflow&&K.scrollOverflowHandler.afterLoad(),n.localIsResizing||un(n.element),n.element.addClass(h).siblings().removeClass(h),de=!0,e.isFunction(n.callback)&&n.callback.call(this)}function dn(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function fn(n){if(K.lazyLoading){var t,o=pn(n);o.find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(t=e(this),e.each(["src","srcset"],function(e,n){var o=t.attr("data-"+n);void 0!==o&&o&&dn(t,n)}),t.is("source")){var n=t.closest("video").length?"video":"audio";t.closest(n).get(0).load()}})}}function un(n){var t=pn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&vn(n),n.onload=function(){n.hasAttribute("data-autoplay")&&vn(n)}})}function vn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function hn(n){var t=pn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function pn(n){var t=n.find(B);return t.length&&(n=e(t)),n}function gn(){var e=wn(),n=e.section,t=e.slide;n&&(K.animateAnchor?Vn(n,t):Ne(n,t))}function mn(){if(!Te&&!K.lockAnchors){var e=wn(),n=e.section,t=e.slide,o=void 0===Z,i=void 0===Z&&void 0===t&&!oe;n&&n.length&&(n&&n!==Z&&!o||i||!oe&&ee!=t)&&Vn(n,t)}}function wn(){var e,t,o=n.location.hash;if(o.length){var i=o.replace("#","").split("/"),a=o.indexOf("#/")>-1;e=a?"/"+i[1]:decodeURIComponent(i[0]);var r=a?i[2]:i[1];r&&r.length&&(t=decodeURIComponent(r))}return{section:e,slide:t}}function Sn(n){clearTimeout(Se);var t=e(":focus"),o=n.which;if(9===o)!function(n){var t=n.shiftKey,o=e(":focus"),i=e(w),a=i.find(B),r=(a.length?a:i).find(ye).not('[tabindex="-1"]');function s(e){return e.preventDefault(),r.first().focus()}o.length?o.closest(w,B).length||(o=s(n)):s(n);(!t&&o.is(r.last())||t&&o.is(r.first()))&&n.preventDefault()}(n);else if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&K.keyboardScrolling&&K.autoScrolling){e.inArray(o,[40,38,32,33,34])>-1&&n.preventDefault(),ne=n.ctrlKey,Se=setTimeout(function(){!function(n){var t=n.shiftKey;if(!de&&[37,39].indexOf(n.which)<0)return;switch(n.which){case 38:case 33:ue.k.up&&Ve();break;case 32:if(t&&ue.k.up){Ve();break}case 40:case 34:ue.k.down&&Ye();break;case 36:ue.k.up&&Xe(1);break;case 35:ue.k.down&&Xe(e(m).length);break;case 37:ue.k.left&&Ue();break;case 39:ue.k.right&&$e();break;default:;}}(n)},150)}}function bn(){e(this).prev().trigger("click")}function xn(e){ce&&(ne=e.ctrlKey)}function yn(e){2==e.which&&(Be=e.pageY,re.on("mousemove",An))}function Cn(e){2==e.which&&re.off("mousemove")}function Tn(){var n=e(this).closest(m);e(this).hasClass(Y)?ue.m.left&&Ue(n):ue.m.right&&$e(n)}function kn(){ce=!1,ne=!1}function Ln(n){n.preventDefault();var t=e(this).parent().index();ln(e(m).eq(t))}function On(n){n.preventDefault();var t=e(this).closest(m).find(z),o=t.find(M).eq(e(this).closest("li").index());In(t,o)}function An(e){de&&(e.pageY<Be&&ue.m.up?Ve():e.pageY>Be&&ue.m.down&&Ye()),Be=e.pageY}function In(n,t,i){var a=n.closest(m),r={slides:n,destiny:t,direction:i,destinyPos:t.position(),slideIndex:t.index(),section:a,sectionIndex:a.index(m),anchorLink:a.data("anchor"),slidesNav:a.find(j),slideAnchor:$n(t),prevSlide:a.find(B),prevSlideIndex:a.find(B).index(),localIsResizing:le};r.xMovement=function(e,n){if(e==n)return"none";if(e>n)return"left";return"right"}(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(de=!1),K.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&e.isFunction(K.onSlideLeave)&&!1===K.onSlideLeave.call(r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex)?oe=!1:(t.addClass(u).siblings().removeClass(u),r.localIsResizing||(hn(r.prevSlide),fn(t)),!K.loopHorizontal&&K.controlArrows&&(a.find(X).toggle(0!==r.slideIndex),a.find(U).toggle(!t.is(":last-child"))),a.hasClass(u)&&!r.localIsResizing&&Nn(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),function(e,n,t){var i=n.destinyPos;if(K.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";Rn(e.find(P)).css(Qn(a)),ge=setTimeout(function(){t&&En(n)},K.scrollingSpeed,K.easing)}else e.animate({scrollLeft:o.round(i.left)},K.scrollingSpeed,K.easing,function(){t&&En(n)})}(n,r,!0))}function En(n){var t,o;t=n.slidesNav,o=n.slideIndex,t.find(v).removeClass(u),t.find("li").eq(o).find("a").addClass(u),n.localIsResizing||(e.isFunction(K.afterSlideLoad)&&K.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),de=!0,un(n.destiny)),oe=!1}function Mn(){if(Bn(),ie){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=W.height();o.abs(i-Re)>20*o.max(Re,i)/100&&(We(!0),Re=i)}}else clearTimeout(he),he=setTimeout(function(){We(!0)},350)}function Bn(){var e=K.responsive||K.responsiveWidth,n=K.responsiveHeight,t=e&&W.outerWidth()<e,o=n&&W.height()<n;e&&n?_e(t||o):e?_e(t):n&&_e(o)}function Rn(e){var n="all "+K.scrollingSpeed+"ms "+K.easingcss3;return e.removeClass(l),e.css({"-webkit-transition":n,transition:n})}function zn(e){return e.addClass(l)}function Hn(n,t){var o;o=n,K.menu&&(e(K.menu).find(v).removeClass(u),e(K.menu).find('[data-menuanchor="'+o+'"]').addClass(u)),function(n,t){K.navigation&&(e(L).find(v).removeClass(u),n?e(L).find('a[href="#'+n+'"]').addClass(u):e(L).find("li").eq(t).find("a").addClass(u))}(n,t)}function Pn(n){var t=e(w).index(m),o=n.index(m);return t==o?"none":t>o?"up":"down"}function Dn(n){if(!n.hasClass(D)){var t=e('<div class="'+x+'" />').height(qn(n));n.addClass(D).wrapInner(t)}}function qn(e){var n=se;if(K.paddingTop||K.paddingBottom){var t=e;t.hasClass(g)||(t=e.closest(m));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=se-o}return n}function jn(e,n){n?Rn(re):zn(re),re.css(Qn(e)),setTimeout(function(){re.removeClass(l)},10)}function Fn(n){var t=re.find(m+'[data-anchor="'+n+'"]');if(!t.length){var o=void 0!==n?n-1:0;t=e(m).eq(o)}return t}function Vn(e,n){var t=Fn(e);if(t.length){var o=function(e,n){var t=n.find(M+'[data-anchor="'+e+'"]');t.length||(e=void 0!==e?e:0,t=n.find(M).eq(e));return t}(n,t);e===Z||t.hasClass(u)?Yn(o):ln(t,function(){Yn(o)})}}function Yn(e){e.length&&In(e.closest(z),e)}function Nn(e,n,t,o){var i="";K.anchors.length&&!K.lockAnchors&&(e?(void 0!==t&&(i=t),void 0===n&&(n=e),ee=n,Xn(i+"/"+n)):void 0!==e?(ee=n,Xn(t)):Xn(t)),Un()}function Xn(e){if(K.recordHistory)location.hash=e;else if(ie||ae)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function $n(e){var n=e.data("anchor"),t=e.index();return void 0===n&&(n=t),n}function Un(){var n=e(w),t=n.find(B),o=$n(n),i=$n(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");G[0].className=G[0].className.replace(r,""),G.addClass(f+"-"+a)}function Wn(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ae&&nn(e)&&(K.scrollBar||!K.autoScrolling)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function _n(e,n){Pe(0,"internal"),void 0!==n&&(le=!0),In(e.closest(z),e),void 0!==n&&(le=!1),Pe(Ce.scrollingSpeed,"internal")}function Kn(e){var n=o.round(e);if(K.css3&&K.autoScrolling&&!K.scrollBar){var t="translate3d(0px, -"+n+"px, 0px)";jn(t,!1)}else K.autoScrolling&&!K.scrollBar?re.css("top",-n):Q.scrollTop(n)}function Qn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Gn(n,t,o){"all"!==t?ue[o][t]=n:e.each(Object.keys(ue[o]),function(e,t){ue[o][t]=n})}function Jn(e,n,t){K[e]=n,"internal"!==t&&(Ce[e]=n)}function Zn(){e("html").hasClass(d)?et("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(K.continuousVertical&&(K.loopTop||K.loopBottom)&&(K.continuousVertical=!1,et("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),K.scrollBar&&K.scrollOverflow&&et("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!K.continuousVertical||!K.scrollBar&&K.autoScrolling||(K.continuousVertical=!1,et("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),K.scrollOverflow&&!K.scrollOverflowHandler&&(K.scrollOverflow=!1,et("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),e.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(e,n){K[n]&&et("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),e.each(K.anchors,function(n,t){var o=_.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=_.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(et("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&et("error",'"'+t+'" is is being used by another element `id` property'),o.length&&et("error",'"'+t+'" is is being used by another element `name` property'))}))}function et(e,n){console&&console[e]&&console[e]("fullPage: "+n)}}}(e,a,a.document,a.Math)}.apply(n,o))||(e.exports=i)}("undefined"!=typeof window?window:this)},function(e,n,t){"use strict";t(5);var o=$("#fullpage"),i=o.find(".section");o.fullpage({scrollingSpeed:1e3,anchors:["furlosophy","byebyefur","fooddict"," scratcher","pills","addiction","aboot","contact"],afterLoad:function(e,n){i.removeClass("transition-active"),setTimeout(function(){i.eq(n-1).addClass("transition-active")},50)}}),$(".first-netxt").click(function(){o.fullpage.moveSectionDown()}),$(".js-nav a").click(function(){$(".js-nav a").removeClass("active"),$(this).addClass("active")}),$(".swiper-btns").on("click","i",function(){var e=$(this).parent().prev(),n=e.find(".swiper-slide").length,t=e.find(".swiper-slide.active"),o=$(this).hasClass("cd-icon-arrow-left")?t.prev():t.next();if(0!=o.length){0==o.length&&(o=$(this).hasClass("cd-icon-arrow-left")?e.find(".swiper-slide").eq(n-1):e.find(".swiper-slide").eq(0));var i=0;switch(o.index()+1){case 1:break;case n:i=o.position().left-(e.width()-o.width()+40);break;default:i=o.position().left-(e.width()-o.width()+40)/2}e.find(".swiper-wrapper").animate({marginLeft:"-"+i},600,"swing"),t.removeClass("active"),o.addClass("active");var a=$(this).closest(".section");a.removeClass("transition-active"),setTimeout(function(){a.find(".title").html(o.data("title")),a.find(".description").html(o.data("description")),a.find(".sub-description").html(o.data("subDescription")),a.addClass("transition-active")},800)}})}]);