/*


  ___|                                                  _ \   |               _)              
 |       _ \   __ `__ \   __ `__ \    _ \   __ \       |   |  |  |   |   _` |  |  __ \    __| 
 |      (   |  |   |   |  |   |   |  (   |  |   |      ___/   |  |   |  (   |  |  |   | \__ \ 
\____| \___/  _|  _|  _| _|  _|  _| \___/  _|  _|     _|     _| \__,_| \__, | _| _|  _| ____/ 
                                                                       |___/                  


*/
(function(n){"use strict";typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports!="undefined"?module.exports=n(require("jquery")):n(jQuery)})(function(n){"use strict";var t=window.Slick||{};t=function(){function i(i,r){var u=this,f;u.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:n(i),appendDots:n(i),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<\/button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<\/button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return n('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3};u.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1};n.extend(u,u.initials);u.activeBreakpoint=null;u.animType=null;u.animProp=null;u.breakpoints=[];u.breakpointSettings=[];u.cssTransitions=!1;u.focussed=!1;u.interrupted=!1;u.hidden="hidden";u.paused=!0;u.positionProp=null;u.respondTo=null;u.rowCount=1;u.shouldClick=!0;u.$slider=n(i);u.$slidesCache=null;u.transformType=null;u.transitionType=null;u.visibilityChange="visibilitychange";u.windowWidth=0;u.windowTimer=null;f=n(i).data("slick")||{};u.options=n.extend({},u.defaults,r,f);u.currentSlide=u.options.initialSlide;u.originalSettings=u.options;typeof document.mozHidden!="undefined"?(u.hidden="mozHidden",u.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden!="undefined"&&(u.hidden="webkitHidden",u.visibilityChange="webkitvisibilitychange");u.autoPlay=n.proxy(u.autoPlay,u);u.autoPlayClear=n.proxy(u.autoPlayClear,u);u.autoPlayIterator=n.proxy(u.autoPlayIterator,u);u.changeSlide=n.proxy(u.changeSlide,u);u.clickHandler=n.proxy(u.clickHandler,u);u.selectHandler=n.proxy(u.selectHandler,u);u.setPosition=n.proxy(u.setPosition,u);u.swipeHandler=n.proxy(u.swipeHandler,u);u.dragHandler=n.proxy(u.dragHandler,u);u.keyHandler=n.proxy(u.keyHandler,u);u.instanceUid=t++;u.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;u.registerBreakpoints();u.init(!0)}var t=0;return i}();t.prototype.activateADA=function(){var n=this;n.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})};t.prototype.addSlide=t.prototype.slickAdd=function(t,i,r){var u=this;if(typeof i=="boolean")r=i,i=null;else if(i<0||i>=u.slideCount)return!1;u.unload();typeof i=="number"?i===0&&u.$slides.length===0?n(t).appendTo(u.$slideTrack):r?n(t).insertBefore(u.$slides.eq(i)):n(t).insertAfter(u.$slides.eq(i)):r===!0?n(t).prependTo(u.$slideTrack):n(t).appendTo(u.$slideTrack);u.$slides=u.$slideTrack.children(this.options.slide);u.$slideTrack.children(this.options.slide).detach();u.$slideTrack.append(u.$slides);u.$slides.each(function(t,i){n(i).attr("data-slick-index",t)});u.$slidesCache=u.$slides;u.reinit()};t.prototype.animateHeight=function(){var n=this,t;n.options.slidesToShow===1&&n.options.adaptiveHeight===!0&&n.options.vertical===!1&&(t=n.$slides.eq(n.currentSlide).outerHeight(!0),n.$list.animate({height:t},n.options.speed))};t.prototype.animateSlide=function(t,i){var u={},r=this;r.animateHeight();r.options.rtl===!0&&r.options.vertical===!1&&(t=-t);r.transformsEnabled===!1?r.options.vertical===!1?r.$slideTrack.animate({left:t},r.options.speed,r.options.easing,i):r.$slideTrack.animate({top:t},r.options.speed,r.options.easing,i):r.cssTransitions===!1?(r.options.rtl===!0&&(r.currentLeft=-r.currentLeft),n({animStart:r.currentLeft}).animate({animStart:t},{duration:r.options.speed,easing:r.options.easing,step:function(n){n=Math.ceil(n);r.options.vertical===!1?(u[r.animType]="translate("+n+"px, 0px)",r.$slideTrack.css(u)):(u[r.animType]="translate(0px,"+n+"px)",r.$slideTrack.css(u))},complete:function(){i&&i.call()}})):(r.applyTransition(),t=Math.ceil(t),u[r.animType]=r.options.vertical===!1?"translate3d("+t+"px, 0px, 0px)":"translate3d(0px,"+t+"px, 0px)",r.$slideTrack.css(u),i&&setTimeout(function(){r.disableTransition();i.call()},r.options.speed))};t.prototype.getNavTarget=function(){var i=this,t=i.options.asNavFor;return t&&t!==null&&(t=n(t).not(i.$slider)),t};t.prototype.asNavFor=function(t){var r=this,i=r.getNavTarget();i!==null&&typeof i=="object"&&i.each(function(){var i=n(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})};t.prototype.applyTransition=function(n){var t=this,i={};i[t.transitionType]=t.options.fade===!1?t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:"opacity "+t.options.speed+"ms "+t.options.cssEase;t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(n).css(i)};t.prototype.autoPlay=function(){var n=this;n.autoPlayClear();n.slideCount>n.options.slidesToShow&&(n.autoPlayTimer=setInterval(n.autoPlayIterator,n.options.autoplaySpeed))};t.prototype.autoPlayClear=function(){var n=this;n.autoPlayTimer&&clearInterval(n.autoPlayTimer)};t.prototype.autoPlayIterator=function(){var n=this,t=n.currentSlide+n.options.slidesToScroll;n.paused||n.interrupted||n.focussed||(n.options.infinite===!1&&(n.direction===1&&n.currentSlide+1===n.slideCount-1?n.direction=0:n.direction===0&&(t=n.currentSlide-n.options.slidesToScroll,n.currentSlide-1==0&&(n.direction=1))),n.slideHandler(t))};t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=n(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=n(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))};t.prototype.buildDots=function(){var t=this,i,r;if(t.options.dots===!0&&t.slideCount>t.options.slidesToShow){for(t.$slider.addClass("slick-dotted"),r=n("<ul />").addClass(t.options.dotsClass),i=0;i<=t.getDotCount();i+=1)r.append(n("<li />").append(t.options.customPaging.call(this,t,i)));t.$dots=r.appendTo(t.options.appendDots);t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}};t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide");t.slideCount=t.$slides.length;t.$slides.each(function(t,i){n(i).attr("data-slick-index",t).data("originalStyling",n(i).attr("style")||"")});t.$slider.addClass("slick-slider");t.$slideTrack=t.slideCount===0?n('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent();t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();t.$slideTrack.css("opacity",0);(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1);n("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading");t.setupInfinite();t.buildArrows();t.buildDots();t.updateDots();t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0);t.options.draggable===!0&&t.$list.addClass("draggable")};t.prototype.buildRows=function(){var n=this,t,i,r,f,c,u,e,o,s,h;if(f=document.createDocumentFragment(),u=n.$slider.children(),n.options.rows>1){for(e=n.options.slidesPerRow*n.options.rows,c=Math.ceil(u.length/e),t=0;t<c;t++){for(o=document.createElement("div"),i=0;i<n.options.rows;i++){for(s=document.createElement("div"),r=0;r<n.options.slidesPerRow;r++)h=t*e+(i*n.options.slidesPerRow+r),u.get(h)&&s.appendChild(u.get(h));o.appendChild(s)}f.appendChild(o)}n.$slider.empty().append(f);n.$slider.children().children().children().css({width:100/n.options.slidesPerRow+"%",display:"inline-block"})}};t.prototype.checkResponsive=function(t,i){var r=this,f,u,e,o=!1,s=r.$slider.width(),h=window.innerWidth||n(window).width();if(r.respondTo==="window"?e=h:r.respondTo==="slider"?e=s:r.respondTo==="min"&&(e=Math.min(h,s)),r.options.responsive&&r.options.responsive.length&&r.options.responsive!==null){u=null;for(f in r.breakpoints)r.breakpoints.hasOwnProperty(f)&&(r.originalSettings.mobileFirst===!1?e<r.breakpoints[f]&&(u=r.breakpoints[f]):e>r.breakpoints[f]&&(u=r.breakpoints[f]));u!==null?r.activeBreakpoint!==null?(u!==r.activeBreakpoint||i)&&(r.activeBreakpoint=u,r.breakpointSettings[u]==="unslick"?r.unslick(u):(r.options=n.extend({},r.originalSettings,r.breakpointSettings[u]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),o=u):(r.activeBreakpoint=u,r.breakpointSettings[u]==="unslick"?r.unslick(u):(r.options=n.extend({},r.originalSettings,r.breakpointSettings[u]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),o=u):r.activeBreakpoint!==null&&(r.activeBreakpoint=null,r.options=r.originalSettings,t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t),o=u);t||o===!1||r.$slider.trigger("breakpoint",[r,o])}};t.prototype.changeSlide=function(t,i){var r=this,u=n(t.currentTarget),f,e,o,s;u.is("a")&&t.preventDefault();u.is("li")||(u=u.closest("li"));o=r.slideCount%r.options.slidesToScroll!=0;f=o?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll;switch(t.data.message){case"previous":e=f===0?r.options.slidesToScroll:r.options.slidesToShow-f;r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-e,!1,i);break;case"next":e=f===0?r.options.slidesToScroll:f;r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+e,!1,i);break;case"index":s=t.data.index===0?0:t.data.index||u.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(s),!1,i);u.children().trigger("focus");break;default:return}};t.prototype.checkNavigable=function(n){var u=this,t,i,r;if(t=u.getNavigableIndexes(),i=0,n>t[t.length-1])n=t[t.length-1];else for(r in t){if(n<t[r]){n=i;break}i=t[r]}return n};t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&t.$dots!==null&&n("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",n.proxy(t.interrupt,t,!0)).off("mouseleave.slick",n.proxy(t.interrupt,t,!1));t.$slider.off("focus.slick blur.slick");t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide));t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler);t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler);t.$list.off("touchend.slick mouseup.slick",t.swipeHandler);t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler);t.$list.off("click.slick",t.clickHandler);n(document).off(t.visibilityChange,t.visibility);t.cleanUpSlideEvents();t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler);t.options.focusOnSelect===!0&&n(t.$slideTrack).children().off("click.slick",t.selectHandler);n(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange);n(window).off("resize.slick.slick-"+t.instanceUid,t.resize);n("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault);n(window).off("load.slick.slick-"+t.instanceUid,t.setPosition);n(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)};t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",n.proxy(t.interrupt,t,!0));t.$list.off("mouseleave.slick",n.proxy(t.interrupt,t,!1))};t.prototype.cleanUpRows=function(){var n=this,t;n.options.rows>1&&(t=n.$slides.children().children(),t.removeAttr("style"),n.$slider.empty().append(t))};t.prototype.clickHandler=function(n){var t=this;t.shouldClick===!1&&(n.stopImmediatePropagation(),n.stopPropagation(),n.preventDefault())};t.prototype.destroy=function(t){var i=this;i.autoPlayClear();i.touchObject={};i.cleanUpEvents();n(".slick-cloned",i.$slider).detach();i.$dots&&i.$dots.remove();i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove());i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove());i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){n(this).attr("style",n(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides));i.cleanUpRows();i.$slider.removeClass("slick-slider");i.$slider.removeClass("slick-initialized");i.$slider.removeClass("slick-dotted");i.unslicked=!0;t||i.$slider.trigger("destroy",[i])};t.prototype.disableTransition=function(n){var t=this,i={};i[t.transitionType]="";t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(n).css(i)};t.prototype.fadeSlide=function(n,t){var i=this;i.cssTransitions===!1?(i.$slides.eq(n).css({zIndex:i.options.zIndex}),i.$slides.eq(n).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(n),i.$slides.eq(n).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(n);t.call()},i.options.speed))};t.prototype.fadeSlideOut=function(n){var t=this;t.cssTransitions===!1?t.$slides.eq(n).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(n),t.$slides.eq(n).css({opacity:0,zIndex:t.options.zIndex-2}))};t.prototype.filterSlides=t.prototype.slickFilter=function(n){var t=this;n!==null&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(n).appendTo(t.$slideTrack),t.reinit())};t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(i){i.stopImmediatePropagation();var r=n(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=r.is(":focus"),t.autoPlay())},0)})};t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var n=this;return n.currentSlide};t.prototype.getDotCount=function(){var n=this,i=0,r=0,t=0;if(n.options.infinite===!0)while(i<n.slideCount)++t,i=r+n.options.slidesToScroll,r+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;else if(n.options.centerMode===!0)t=n.slideCount;else if(n.options.asNavFor)while(i<n.slideCount)++t,i=r+n.options.slidesToScroll,r+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;else t=1+Math.ceil((n.slideCount-n.options.slidesToShow)/n.options.slidesToScroll);return t-1};t.prototype.getLeft=function(n){var t=this,f,r,u=0,i;return t.slideOffset=0,r=t.$slides.first().outerHeight(!0),t.options.infinite===!0?(t.slideCount>t.options.slidesToShow&&(t.slideOffset=t.slideWidth*t.options.slidesToShow*-1,u=r*t.options.slidesToShow*-1),t.slideCount%t.options.slidesToScroll!=0&&n+t.options.slidesToScroll>t.slideCount&&t.slideCount>t.options.slidesToShow&&(n>t.slideCount?(t.slideOffset=(t.options.slidesToShow-(n-t.slideCount))*t.slideWidth*-1,u=(t.options.slidesToShow-(n-t.slideCount))*r*-1):(t.slideOffset=t.slideCount%t.options.slidesToScroll*t.slideWidth*-1,u=t.slideCount%t.options.slidesToScroll*r*-1))):n+t.options.slidesToShow>t.slideCount&&(t.slideOffset=(n+t.options.slidesToShow-t.slideCount)*t.slideWidth,u=(n+t.options.slidesToShow-t.slideCount)*r),t.slideCount<=t.options.slidesToShow&&(t.slideOffset=0,u=0),t.options.centerMode===!0&&t.options.infinite===!0?t.slideOffset+=t.slideWidth*Math.floor(t.options.slidesToShow/2)-t.slideWidth:t.options.centerMode===!0&&(t.slideOffset=0,t.slideOffset+=t.slideWidth*Math.floor(t.options.slidesToShow/2)),f=t.options.vertical===!1?n*t.slideWidth*-1+t.slideOffset:n*r*-1+u,t.options.variableWidth===!0&&(i=t.slideCount<=t.options.slidesToShow||t.options.infinite===!1?t.$slideTrack.children(".slick-slide").eq(n):t.$slideTrack.children(".slick-slide").eq(n+t.options.slidesToShow),f=t.options.rtl===!0?i[0]?(t.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0,t.options.centerMode===!0&&(i=t.slideCount<=t.options.slidesToShow||t.options.infinite===!1?t.$slideTrack.children(".slick-slide").eq(n):t.$slideTrack.children(".slick-slide").eq(n+t.options.slidesToShow+1),f=(t.options.rtl===!0?i[0]?(t.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0)+(t.$list.width()-i.outerWidth())/2)),f};t.prototype.getOption=t.prototype.slickGetOption=function(n){var t=this;return t.options[n]};t.prototype.getNavigableIndexes=function(){var n=this,t=0,i=0,u=[],r;for(n.options.infinite===!1?r=n.slideCount:(t=n.options.slidesToScroll*-1,i=n.options.slidesToScroll*-1,r=n.slideCount*2);t<r;)u.push(t),t=i+n.options.slidesToScroll,i+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;return u};t.prototype.getSlick=function(){return this};t.prototype.getSlideCount=function(){var t=this,i,r;return r=t.options.centerMode===!0?t.slideWidth*Math.floor(t.options.slidesToShow/2):0,t.options.swipeToSlide===!0?(t.$slideTrack.find(".slick-slide").each(function(u,f){if(f.offsetLeft-r+n(f).outerWidth()/2>t.swipeLeft*-1)return i=f,!1}),Math.abs(n(i).attr("data-slick-index")-t.currentSlide)||1):t.options.slidesToScroll};t.prototype.goTo=t.prototype.slickGoTo=function(n,t){var i=this;i.changeSlide({data:{message:"index",index:parseInt(n)}},t)};t.prototype.init=function(t){var i=this;n(i.$slider).hasClass("slick-initialized")||(n(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler());t&&i.$slider.trigger("init",[i]);i.options.accessibility===!0&&i.initADA();i.options.autoplay&&(i.paused=!1,i.autoPlay())};t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});t.$slideTrack.attr("role","listbox");t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){n(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+i+""})});t.$dots!==null&&t.$dots.attr("role","tablist").find("li").each(function(i){n(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+i+"",id:"slick-slide"+t.instanceUid+i+""})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar");t.activateADA()};t.prototype.initArrowEvents=function(){var n=this;if(n.options.arrows===!0&&n.slideCount>n.options.slidesToShow){n.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},n.changeSlide);n.$nextArrow.off("click.slick").on("click.slick",{message:"next"},n.changeSlide)}};t.prototype.initDotEvents=function(){var t=this;if(t.options.dots===!0&&t.slideCount>t.options.slidesToShow)n("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide);if(t.options.dots===!0&&t.options.pauseOnDotsHover===!0)n("li",t.$dots).on("mouseenter.slick",n.proxy(t.interrupt,t,!0)).on("mouseleave.slick",n.proxy(t.interrupt,t,!1))};t.prototype.initSlideEvents=function(){var t=this;if(t.options.pauseOnHover){t.$list.on("mouseenter.slick",n.proxy(t.interrupt,t,!0));t.$list.on("mouseleave.slick",n.proxy(t.interrupt,t,!1))}};t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents();t.initDotEvents();t.initSlideEvents();t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler);t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler);t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler);t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler);t.$list.on("click.slick",t.clickHandler);n(document).on(t.visibilityChange,n.proxy(t.visibility,t));if(t.options.accessibility===!0)t.$list.on("keydown.slick",t.keyHandler);if(t.options.focusOnSelect===!0)n(t.$slideTrack).children().on("click.slick",t.selectHandler);n(window).on("orientationchange.slick.slick-"+t.instanceUid,n.proxy(t.orientationChange,t));n(window).on("resize.slick.slick-"+t.instanceUid,n.proxy(t.resize,t));n("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault);n(window).on("load.slick.slick-"+t.instanceUid,t.setPosition);n(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)};t.prototype.initUI=function(){var n=this;n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow.show(),n.$nextArrow.show());n.options.dots===!0&&n.slideCount>n.options.slidesToShow&&n.$dots.show()};t.prototype.keyHandler=function(n){var t=this;n.target.tagName.match("TEXTAREA|INPUT|SELECT")||(n.keyCode===37&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):n.keyCode===39&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))};t.prototype.lazyLoad=function(){function f(i){n("img[data-lazy]",i).each(function(){var i=n(this),r=n(this).attr("data-lazy"),u=document.createElement("img");u.onload=function(){i.animate({opacity:0},100,function(){i.attr("src",r).animate({opacity:1},200,function(){i.removeAttr("data-lazy").removeClass("slick-loading")});t.$slider.trigger("lazyLoaded",[t,i,r])})};u.onerror=function(){i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");t.$slider.trigger("lazyLoadError",[t,i,r])};u.src=r})}var t=this,e,r,i,u;t.options.centerMode===!0?t.options.infinite===!0?(i=t.currentSlide+(t.options.slidesToShow/2+1),u=i+t.options.slidesToShow+2):(i=Math.max(0,t.currentSlide-(t.options.slidesToShow/2+1)),u=2+(t.options.slidesToShow/2+1)+t.currentSlide):(i=t.options.infinite?t.options.slidesToShow+t.currentSlide:t.currentSlide,u=Math.ceil(i+t.options.slidesToShow),t.options.fade===!0&&(i>0&&i--,u<=t.slideCount&&u++));e=t.$slider.find(".slick-slide").slice(i,u);f(e);t.slideCount<=t.options.slidesToShow?(r=t.$slider.find(".slick-slide"),f(r)):t.currentSlide>=t.slideCount-t.options.slidesToShow?(r=t.$slider.find(".slick-cloned").slice(0,t.options.slidesToShow),f(r)):t.currentSlide===0&&(r=t.$slider.find(".slick-cloned").slice(t.options.slidesToShow*-1),f(r))};t.prototype.loadSlider=function(){var n=this;n.setPosition();n.$slideTrack.css({opacity:1});n.$slider.removeClass("slick-loading");n.initUI();n.options.lazyLoad==="progressive"&&n.progressiveLazyLoad()};t.prototype.next=t.prototype.slickNext=function(){var n=this;n.changeSlide({data:{message:"next"}})};t.prototype.orientationChange=function(){var n=this;n.checkResponsive();n.setPosition()};t.prototype.pause=t.prototype.slickPause=function(){var n=this;n.autoPlayClear();n.paused=!0};t.prototype.play=t.prototype.slickPlay=function(){var n=this;n.autoPlay();n.options.autoplay=!0;n.paused=!1;n.focussed=!1;n.interrupted=!1};t.prototype.postSlide=function(n){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,n]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&t.initADA())};t.prototype.prev=t.prototype.slickPrev=function(){var n=this;n.changeSlide({data:{message:"previous"}})};t.prototype.preventDefault=function(n){n.preventDefault()};t.prototype.progressiveLazyLoad=function(t){t=t||1;var i=this,e=n("img[data-lazy]",i.$slider),r,u,f;e.length?(r=e.first(),u=r.attr("data-lazy"),f=document.createElement("img"),f.onload=function(){r.attr("src",u).removeAttr("data-lazy").removeClass("slick-loading");i.options.adaptiveHeight===!0&&i.setPosition();i.$slider.trigger("lazyLoaded",[i,r,u]);i.progressiveLazyLoad()},f.onerror=function(){t<3?setTimeout(function(){i.progressiveLazyLoad(t+1)},500):(r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),i.$slider.trigger("lazyLoadError",[i,r,u]),i.progressiveLazyLoad())},f.src=u):i.$slider.trigger("allImagesLoaded",[i])};t.prototype.refresh=function(t){var i=this,r,u;u=i.slideCount-i.options.slidesToShow;!i.options.infinite&&i.currentSlide>u&&(i.currentSlide=u);i.slideCount<=i.options.slidesToShow&&(i.currentSlide=0);r=i.currentSlide;i.destroy(!0);n.extend(i,i.initials,{currentSlide:r});i.init();t||i.changeSlide({data:{message:"index",index:r}},!1)};t.prototype.registerBreakpoints=function(){var t=this,u,f,i,r=t.options.responsive||null;if(n.type(r)==="array"&&r.length){t.respondTo=t.options.respondTo||"window";for(u in r)if(i=t.breakpoints.length-1,f=r[u].breakpoint,r.hasOwnProperty(u)){while(i>=0)t.breakpoints[i]&&t.breakpoints[i]===f&&t.breakpoints.splice(i,1),i--;t.breakpoints.push(f);t.breakpointSettings[f]=r[u].settings}t.breakpoints.sort(function(n,i){return t.options.mobileFirst?n-i:i-n})}};t.prototype.reinit=function(){var t=this;if(t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&t.currentSlide!==0&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0)n(t.$slideTrack).children().on("click.slick",t.selectHandler);t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0);t.setPosition();t.focusHandler();t.paused=!t.options.autoplay;t.autoPlay();t.$slider.trigger("reInit",[t])};t.prototype.resize=function(){var t=this;n(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=n(window).width();t.checkResponsive();t.unslicked||t.setPosition()},50))};t.prototype.removeSlide=t.prototype.slickRemove=function(n,t,i){var r=this;if(typeof n=="boolean"?(t=n,n=t===!0?0:r.slideCount-1):n=t===!0?--n:n,r.slideCount<1||n<0||n>r.slideCount-1)return!1;r.unload();i===!0?r.$slideTrack.children().remove():r.$slideTrack.children(this.options.slide).eq(n).remove();r.$slides=r.$slideTrack.children(this.options.slide);r.$slideTrack.children(this.options.slide).detach();r.$slideTrack.append(r.$slides);r.$slidesCache=r.$slides;r.reinit()};t.prototype.setCSS=function(n){var t=this,i={},r,u;t.options.rtl===!0&&(n=-n);r=t.positionProp=="left"?Math.ceil(n)+"px":"0px";u=t.positionProp=="top"?Math.ceil(n)+"px":"0px";i[t.positionProp]=n;t.transformsEnabled===!1?t.$slideTrack.css(i):(i={},t.cssTransitions===!1?(i[t.animType]="translate("+r+", "+u+")",t.$slideTrack.css(i)):(i[t.animType]="translate3d("+r+", "+u+", 0px)",t.$slideTrack.css(i)))};t.prototype.setDimensions=function(){var n=this,t;n.options.vertical===!1?n.options.centerMode===!0&&n.$list.css({padding:"0px "+n.options.centerPadding}):(n.$list.height(n.$slides.first().outerHeight(!0)*n.options.slidesToShow),n.options.centerMode===!0&&n.$list.css({padding:n.options.centerPadding+" 0px"}));n.listWidth=n.$list.width();n.listHeight=n.$list.height();n.options.vertical===!1&&n.options.variableWidth===!1?(n.slideWidth=Math.ceil(n.listWidth/n.options.slidesToShow),n.$slideTrack.width(Math.ceil(n.slideWidth*n.$slideTrack.children(".slick-slide").length))):n.options.variableWidth===!0?n.$slideTrack.width(5e3*n.slideCount):(n.slideWidth=Math.ceil(n.listWidth),n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0)*n.$slideTrack.children(".slick-slide").length)));t=n.$slides.first().outerWidth(!0)-n.$slides.first().width();n.options.variableWidth===!1&&n.$slideTrack.children(".slick-slide").width(n.slideWidth-t)};t.prototype.setFade=function(){var t=this,i;t.$slides.each(function(r,u){i=t.slideWidth*r*-1;t.options.rtl===!0?n(u).css({position:"relative",right:i,top:0,zIndex:t.options.zIndex-2,opacity:0}):n(u).css({position:"relative",left:i,top:0,zIndex:t.options.zIndex-2,opacity:0})});t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})};t.prototype.setHeight=function(){var n=this,t;n.options.slidesToShow===1&&n.options.adaptiveHeight===!0&&n.options.vertical===!1&&(t=n.$slides.eq(n.currentSlide).outerHeight(!0),n.$list.css("height",t))};t.prototype.setOption=t.prototype.slickSetOption=function(){var t=this,u,f,e,i,o=!1,r;if(n.type(arguments[0])==="object"?(e=arguments[0],o=arguments[1],r="multiple"):n.type(arguments[0])==="string"&&(e=arguments[0],i=arguments[1],o=arguments[2],arguments[0]==="responsive"&&n.type(arguments[1])==="array"?r="responsive":typeof arguments[1]!="undefined"&&(r="single")),r==="single")t.options[e]=i;else if(r==="multiple")n.each(e,function(n,i){t.options[n]=i});else if(r==="responsive")for(f in i)if(n.type(t.options.responsive)!=="array")t.options.responsive=[i[f]];else{for(u=t.options.responsive.length-1;u>=0;)t.options.responsive[u].breakpoint===i[f].breakpoint&&t.options.responsive.splice(u,1),u--;t.options.responsive.push(i[f])}o&&(t.unload(),t.reinit())};t.prototype.setPosition=function(){var n=this;n.setDimensions();n.setHeight();n.options.fade===!1?n.setCSS(n.getLeft(n.currentSlide)):n.setFade();n.$slider.trigger("setPosition",[n])};t.prototype.setProps=function(){var n=this,t=document.body.style;n.positionProp=n.options.vertical===!0?"top":"left";n.positionProp==="top"?n.$slider.addClass("slick-vertical"):n.$slider.removeClass("slick-vertical");(t.WebkitTransition!==undefined||t.MozTransition!==undefined||t.msTransition!==undefined)&&n.options.useCSS===!0&&(n.cssTransitions=!0);n.options.fade&&(typeof n.options.zIndex=="number"?n.options.zIndex<3&&(n.options.zIndex=3):n.options.zIndex=n.defaults.zIndex);t.OTransform!==undefined&&(n.animType="OTransform",n.transformType="-o-transform",n.transitionType="OTransition",t.perspectiveProperty===undefined&&t.webkitPerspective===undefined&&(n.animType=!1));t.MozTransform!==undefined&&(n.animType="MozTransform",n.transformType="-moz-transform",n.transitionType="MozTransition",t.perspectiveProperty===undefined&&t.MozPerspective===undefined&&(n.animType=!1));t.webkitTransform!==undefined&&(n.animType="webkitTransform",n.transformType="-webkit-transform",n.transitionType="webkitTransition",t.perspectiveProperty===undefined&&t.webkitPerspective===undefined&&(n.animType=!1));t.msTransform!==undefined&&(n.animType="msTransform",n.transformType="-ms-transform",n.transitionType="msTransition",t.msTransform===undefined&&(n.animType=!1));t.transform!==undefined&&n.animType!==!1&&(n.animType="transform",n.transformType="transform",n.transitionType="transition");n.transformsEnabled=n.options.useTransform&&n.animType!==null&&n.animType!==!1};t.prototype.setSlideClasses=function(n){var t=this,u,i,r,f;i=t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");t.$slides.eq(n).addClass("slick-current");t.options.centerMode===!0?(u=Math.floor(t.options.slidesToShow/2),t.options.infinite===!0&&(n>=u&&n<=t.slideCount-1-u?t.$slides.slice(n-u,n+u+1).addClass("slick-active").attr("aria-hidden","false"):(r=t.options.slidesToShow+n,i.slice(r-u+1,r+u+2).addClass("slick-active").attr("aria-hidden","false")),n===0?i.eq(i.length-1-t.options.slidesToShow).addClass("slick-center"):n===t.slideCount-1&&i.eq(t.options.slidesToShow).addClass("slick-center")),t.$slides.eq(n).addClass("slick-center")):n>=0&&n<=t.slideCount-t.options.slidesToShow?t.$slides.slice(n,n+t.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=t.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(f=t.slideCount%t.options.slidesToShow,r=t.options.infinite===!0?t.options.slidesToShow+n:n,t.options.slidesToShow==t.options.slidesToScroll&&t.slideCount-n<t.options.slidesToShow?i.slice(r-(t.options.slidesToShow-f),r+f).addClass("slick-active").attr("aria-hidden","false"):i.slice(r,r+t.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));t.options.lazyLoad==="ondemand"&&t.lazyLoad()};t.prototype.setupInfinite=function(){var t=this,i,r,u;if(t.options.fade===!0&&(t.options.centerMode=!1),t.options.infinite===!0&&t.options.fade===!1&&(r=null,t.slideCount>t.options.slidesToShow)){for(u=t.options.centerMode===!0?t.options.slidesToShow+1:t.options.slidesToShow,i=t.slideCount;i>t.slideCount-u;i-=1)r=i-1,n(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r-t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");for(i=0;i<u;i+=1)r=i,n(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r+t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");t.$slideTrack.find(".slick-cloned").find("[id]").each(function(){n(this).attr("id","")})}};t.prototype.interrupt=function(n){var t=this;n||t.autoPlay();t.interrupted=n};t.prototype.selectHandler=function(t){var i=this,u=n(t.target).is(".slick-slide")?n(t.target):n(t.target).parents(".slick-slide"),r=parseInt(u.attr("data-slick-index"));if(r||(r=0),i.slideCount<=i.options.slidesToShow){i.setSlideClasses(r);i.asNavFor(r);return}i.slideHandler(r)};t.prototype.slideHandler=function(n,t,i){var u,f,s,o,h=null,r=this,e;if((t=t||!1,r.animating!==!0||r.options.waitForAnimate!==!0)&&(r.options.fade!==!0||r.currentSlide!==n)&&!(r.slideCount<=r.options.slidesToShow)){if(t===!1&&r.asNavFor(n),u=n,h=r.getLeft(u),o=r.getLeft(r.currentSlide),r.currentLeft=r.swipeLeft===null?o:r.swipeLeft,r.options.infinite===!1&&r.options.centerMode===!1&&(n<0||n>r.getDotCount()*r.options.slidesToScroll)){r.options.fade===!1&&(u=r.currentSlide,i!==!0?r.animateSlide(o,function(){r.postSlide(u)}):r.postSlide(u));return}if(r.options.infinite===!1&&r.options.centerMode===!0&&(n<0||n>r.slideCount-r.options.slidesToScroll)){r.options.fade===!1&&(u=r.currentSlide,i!==!0?r.animateSlide(o,function(){r.postSlide(u)}):r.postSlide(u));return}if(r.options.autoplay&&clearInterval(r.autoPlayTimer),f=u<0?r.slideCount%r.options.slidesToScroll!=0?r.slideCount-r.slideCount%r.options.slidesToScroll:r.slideCount+u:u>=r.slideCount?r.slideCount%r.options.slidesToScroll!=0?0:u-r.slideCount:u,r.animating=!0,r.$slider.trigger("beforeChange",[r,r.currentSlide,f]),s=r.currentSlide,r.currentSlide=f,r.setSlideClasses(r.currentSlide),r.options.asNavFor&&(e=r.getNavTarget(),e=e.slick("getSlick"),e.slideCount<=e.options.slidesToShow&&e.setSlideClasses(r.currentSlide)),r.updateDots(),r.updateArrows(),r.options.fade===!0){i!==!0?(r.fadeSlideOut(s),r.fadeSlide(f,function(){r.postSlide(f)})):r.postSlide(f);r.animateHeight();return}i!==!0?r.animateSlide(h,function(){r.postSlide(f)}):r.postSlide(f)}};t.prototype.startLoad=function(){var n=this;n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow.hide(),n.$nextArrow.hide());n.options.dots===!0&&n.slideCount>n.options.slidesToShow&&n.$dots.hide();n.$slider.addClass("slick-loading")};t.prototype.swipeDirection=function(){var i,r,u,n,t=this;return(i=t.touchObject.startX-t.touchObject.curX,r=t.touchObject.startY-t.touchObject.curY,u=Math.atan2(r,i),n=Math.round(u*180/Math.PI),n<0&&(n=360-Math.abs(n)),n<=45&&n>=0)?t.options.rtl===!1?"left":"right":n<=360&&n>=315?t.options.rtl===!1?"left":"right":n>=135&&n<=225?t.options.rtl===!1?"right":"left":t.options.verticalSwiping===!0?n>=35&&n<=135?"down":"up":"vertical"};t.prototype.swipeEnd=function(){var n=this,i,t;if(n.dragging=!1,n.interrupted=!1,n.shouldClick=n.touchObject.swipeLength>10?!1:!0,n.touchObject.curX===undefined)return!1;if(n.touchObject.edgeHit===!0&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){t=n.swipeDirection();switch(t){case"left":case"down":i=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount();n.currentDirection=0;break;case"right":case"up":i=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount();n.currentDirection=1}t!="vertical"&&(n.slideHandler(i),n.touchObject={},n.$slider.trigger("swipe",[n,t]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})};t.prototype.swipeHandler=function(n){var t=this;if(t.options.swipe!==!1&&(!("ontouchend"in document)||t.options.swipe!==!1)&&(t.options.draggable!==!1||n.type.indexOf("mouse")===-1)){t.touchObject.fingerCount=n.originalEvent&&n.originalEvent.touches!==undefined?n.originalEvent.touches.length:1;t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold;t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold);switch(n.data.action){case"start":t.swipeStart(n);break;case"move":t.swipeMove(n);break;case"end":t.swipeEnd(n)}}};t.prototype.swipeMove=function(n){var t=this,f,e,r,u,i;if(i=n.originalEvent!==undefined?n.originalEvent.touches:null,!t.dragging||i&&i.length!==1)return!1;if(f=t.getLeft(t.currentSlide),t.touchObject.curX=i!==undefined?i[0].pageX:n.clientX,t.touchObject.curY=i!==undefined?i[0].pageY:n.clientY,t.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(t.touchObject.curX-t.touchObject.startX,2))),t.options.verticalSwiping===!0&&(t.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(t.touchObject.curY-t.touchObject.startY,2)))),e=t.swipeDirection(),e!=="vertical"){if(n.originalEvent!==undefined&&t.touchObject.swipeLength>4&&n.preventDefault(),u=(t.options.rtl===!1?1:-1)*(t.touchObject.curX>t.touchObject.startX?1:-1),t.options.verticalSwiping===!0&&(u=t.touchObject.curY>t.touchObject.startY?1:-1),r=t.touchObject.swipeLength,t.touchObject.edgeHit=!1,t.options.infinite===!1&&(t.currentSlide===0&&e==="right"||t.currentSlide>=t.getDotCount()&&e==="left")&&(r=t.touchObject.swipeLength*t.options.edgeFriction,t.touchObject.edgeHit=!0),t.swipeLeft=t.options.vertical===!1?f+r*u:f+r*(t.$list.height()/t.listWidth)*u,t.options.verticalSwiping===!0&&(t.swipeLeft=f+r*u),t.options.fade===!0||t.options.touchMove===!1)return!1;if(t.animating===!0)return t.swipeLeft=null,!1;t.setCSS(t.swipeLeft)}};t.prototype.swipeStart=function(n){var t=this,i;if(t.interrupted=!0,t.touchObject.fingerCount!==1||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;n.originalEvent!==undefined&&n.originalEvent.touches!==undefined&&(i=n.originalEvent.touches[0]);t.touchObject.startX=t.touchObject.curX=i!==undefined?i.pageX:n.clientX;t.touchObject.startY=t.touchObject.curY=i!==undefined?i.pageY:n.clientY;t.dragging=!0};t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var n=this;n.$slidesCache!==null&&(n.unload(),n.$slideTrack.children(this.options.slide).detach(),n.$slidesCache.appendTo(n.$slideTrack),n.reinit())};t.prototype.unload=function(){var t=this;n(".slick-cloned",t.$slider).remove();t.$dots&&t.$dots.remove();t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove();t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove();t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};t.prototype.unslick=function(n){var t=this;t.$slider.trigger("unslick",[t,n]);t.destroy()};t.prototype.updateArrows=function(){var n=this,t;t=Math.floor(n.options.slidesToShow/2);n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&!n.options.infinite&&(n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),n.currentSlide===0?(n.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):n.currentSlide>=n.slideCount-n.options.slidesToShow&&n.options.centerMode===!1?(n.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):n.currentSlide>=n.slideCount-1&&n.options.centerMode===!0&&(n.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))};t.prototype.updateDots=function(){var n=this;n.$dots!==null&&(n.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),n.$dots.find("li").eq(Math.floor(n.currentSlide/n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))};t.prototype.visibility=function(){var n=this;n.options.autoplay&&(n.interrupted=document[n.hidden]?!0:!1)};n.fn.slick=function(){for(var i=this,r=arguments[0],f=Array.prototype.slice.call(arguments,1),e=i.length,u,n=0;n<e;n++)if(typeof r=="object"||typeof r=="undefined"?i[n].slick=new t(i[n],r):u=i[n].slick[r].apply(i[n].slick,f),typeof u!="undefined")return u;return i}});
/*
 *  Remodal - v1.1.0
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});
/*! @vimeo/player v1.0.6 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=T.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),T.set(e.element,r)}function n(e,t){var n=T.get(e.element)||{};return n[t]||[]}function r(e,t,n){var r=T.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],T.set(e.element,r),!0;var o=r[t].indexOf(n);return o!==-1&&r[t].splice(o,1),T.set(e.element,r),r[t]&&0===r[t].length}function o(e,t){var n=T.get(e);T.set(t,n),T.delete(e)}function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function a(e){return e instanceof window.HTMLElement}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function s(e){return/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(u(r))return"https://vimeo.com/"+r;if(s(r))return r.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+r+"” is not a vimeo.com url.")}function f(e){for(var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=_,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var i;if(r){if(o>=n.length)break;i=n[o++]}else{if(o=n.next(),o.done)break;i=o.value}var a=i,u=e.getAttribute("data-vimeo-"+a);(u||""===u)&&(t[a]=""===u?1:u)}return t}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new Promise(function(n,r){if(!s(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var o="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var i in t)t.hasOwnProperty(i)&&(o+="&"+i+"="+encodeURIComponent(t[i]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404===a.status)return void r(new Error("“"+e+"” was not found."));if(403===a.status)return void r(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(a.responseText);n(t)}catch(e){r(e)}},a.onerror=function(){var e=a.status?" ("+a.status+")":"";r(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},a.send()})}function h(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function d(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0],t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)},r=function(){if(i){if(a>=o.length)return"break";u=o[a++]}else{if(a=o.next(),a.done)return"break";u=a.value}var e=u;try{if(null!==e.getAttribute("data-vimeo-defer"))return"continue";var t=f(e),r=c(t);l(r,t).then(function(t){return h(t,e)}).catch(n)}catch(e){n(e)}};e:for(var o=t,i=Array.isArray(o),a=0,o=i?o:o[Symbol.iterator]();;){var u,s=r();switch(s){case"break":break e;case"continue":continue}}}function p(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function v(e,t,n){if(e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function y(e,t){t=p(t);var o=[],i=void 0;if(t.event){if("error"===t.event)for(var a=n(e,t.data.method),u=a,s=Array.isArray(u),c=0,u=s?u:u[Symbol.iterator]();;){var f;if(s){if(c>=u.length)break;f=u[c++]}else{if(c=u.next(),c.done)break;f=c.value}var l=f,h=new Error(t.data.message);h.name=t.data.name,l.reject(h),r(e,t.data.method,l)}o=n(e,"event:"+t.event),i=t.data}else t.method&&(o=n(e,t.method),i=t.value,r(e,t.method));for(var d=o,v=Array.isArray(d),y=0,d=v?d:d[Symbol.iterator]();;){var m;if(v){if(y>=d.length)break;m=d[y++]}else{if(y=d.next(),y.done)break;m=y.value}var g=m;try{if("function"==typeof g){g.call(e,i);continue}g.resolve(i)}catch(e){}}}var m="undefined"!=typeof Array.prototype.indexOf,g="undefined"!=typeof window.postMessage;if(!m||!g)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=(e(function(e,t){!function(e){function t(e,t){function r(e){return this&&this.constructor===r?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new r(e)}return t||w(e,"size",{get:y}),e.constructor=r,r.prototype=e,r}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function r(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function o(e){return this.has(e)?this._values[g]:void 0}function i(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!b(e[g],t););else g=e.indexOf(t);return-1<g}function a(e){return i.call(this,this._values,e)}function u(e){return i.call(this,this._keys,e)}function s(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function f(){(this._keys||0).length=this._values.length=0}function l(){return v(this._itp,this._keys)}function h(){return v(this._itp,this._values)}function d(){return v(this._itp,this._keys,this._values)}function p(){return v(this._itp,this._values,this._values)}function v(e,t,n){var r=[0],o=!1;return e.push(r),{next:function(){var i,a=r[0];return!o&&a<t.length?(i=n?[t[a],n[a]]:t[a],r[0]++):(o=!0,e.splice(e.indexOf(r),1)),{done:o,value:i}}}}function y(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}var g,w=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:r,clear:f,get:o,has:u,set:s},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:r,has:u,get:o,set:s,keys:l,values:h,entries:d,forEach:m,clear:f})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:r,clear:f,keys:h,values:h,entries:p,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:r,add:c,clear:f,has:a},!0))}("undefined"!=typeof t&&"undefined"!=typeof w?w:window)}),e(function(e){!function(t,n,r){n[t]=n[t]||r(),"undefined"!=typeof e&&e.exports?e.exports=n[t]:"function"==typeof define&&define.amd&&define(function(){return n[t]})}("Promise","undefined"!=typeof w?w:w,function(){function e(e,t){h.add(e,t),l||(l=p(h.drain))}function t(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function n(){for(var e=0;e<this.chain.length;e++)r(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function r(e,n,r){var o,i;try{n===!1?r.reject(e.msg):(o=n===!0?e.msg:n.call(void 0,e.msg),o===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=t(o))?i.call(o,r.resolve,r.reject):r.resolve(o))}catch(e){r.reject(e)}}function o(r){var a,s=this;if(!s.triggered){s.triggered=!0,s.def&&(s=s.def);try{(a=t(r))?e(function(){var e=new u(s);try{a.call(r,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(t){i.call(e,t)}}):(s.msg=r,s.state=1,s.chain.length>0&&e(n,s))}catch(e){i.call(new u(s),e)}}}function i(t){var r=this;r.triggered||(r.triggered=!0,r.def&&(r=r.def),r.msg=t,r.state=2,r.chain.length>0&&e(n,r))}function a(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function u(e){this.def=e,this.triggered=!1}function s(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function c(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new s(this);this.then=function(t,o){var i={success:"function"!=typeof t||t,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");i.resolve=e,i.reject=t}),r.chain.push(i),0!==r.state&&e(n,r),i.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){o.call(r,e)},function(e){i.call(r,e)})}catch(e){i.call(r,e)}}var f,l,h,d=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:r!==!1})}}catch(e){f=function(e,t,n){return e[t]=n,e}}h=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,r;return{add:function(o,i){r=new e(o,i),n?n.next=r:t=r,n=r,r=void 0},drain:function(){var e=t;for(t=n=l=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=f({},"constructor",c,!1);return c.prototype=v,f(v,"__NPO__",0,!1),f(c,"resolve",function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),f(c,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),f(c,"all",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;a(t,e,function(e,t){i[e]=t,++u===o&&n(i)},r)})}),f(c,"race",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");a(t,e,function(e,t){n(t)},r)})}),c})})),E=b&&"object"==typeof b&&"default"in b?b.default:b,T=new WeakMap,_=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=new WeakMap,j=new WeakMap,Player=function(){function Player(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(k(this,Player),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!a(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!s(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(x.has(e))return x.get(e);this.element=e,this.origin="*";var i=new E(function(r,i){var a=function(e){if(s(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=p(e.data),o="event"in n&&"ready"===n.event,i="method"in n&&"ping"===n.method;return o||i?(t.element.setAttribute("data-ready","true"),void r()):void y(t,n)}};if(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a),"IFRAME"!==t.element.nodeName){var u=f(e,n),d=c(u);l(d,u).then(function(n){var r=h(n,e);return t.element=r,o(e,r),n}).catch(function(e){return i(e)})}});return j.set(this,i),x.set(this.element,this),"IFRAME"===this.element.nodeName&&v(this,"ping"),this}return Player.prototype.then=function(e){var t=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];return this.ready().then(e,t)},Player.prototype.callMethod=function(e){var n=this,r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new E(function(o,i){return n.ready().then(function(){t(n,e,{resolve:o,reject:i}),v(n,e,r)})})},Player.prototype.get=function(e){var n=this;return new E(function(r,o){return e=i(e,"get"),n.ready().then(function(){t(n,e,{resolve:r,reject:o}),v(n,e)})})},Player.prototype.set=function(e,n){var r=this;return E.resolve(n).then(function(n){if(e=i(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new E(function(o,i){t(r,e,{resolve:o,reject:i}),v(r,e,n)})})})},Player.prototype.on=function(e,r){if(!e)throw new TypeError("You must pass an event name.");if(!r)throw new TypeError("You must pass a callback function.");if("function"!=typeof r)throw new TypeError("The callback must be a function.");var o=n(this,"event:"+e);0===o.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,r)},Player.prototype.off=function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=r(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})},Player.prototype.loadVideo=function(e){return this.callMethod("loadVideo",e)},Player.prototype.ready=function(){var e=j.get(this);return E.resolve(e)},Player.prototype.enableTextTrack=function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})},Player.prototype.disableTextTrack=function(){return this.callMethod("disableTextTrack")},Player.prototype.pause=function(){return this.callMethod("pause")},Player.prototype.play=function(){return this.callMethod("play")},Player.prototype.unload=function(){return this.callMethod("unload")},Player.prototype.getAutopause=function(){return this.get("autopause")},Player.prototype.setAutopause=function(e){return this.set("autopause",e)},Player.prototype.getColor=function(){return this.get("color")},Player.prototype.setColor=function(e){return this.set("color",e)},Player.prototype.getCurrentTime=function(){return this.get("currentTime")},Player.prototype.setCurrentTime=function(e){return this.set("currentTime",e)},Player.prototype.getDuration=function(){return this.get("duration")},Player.prototype.getEnded=function(){return this.get("ended")},Player.prototype.getLoop=function(){return this.get("loop")},Player.prototype.setLoop=function(e){return this.set("loop",e)},Player.prototype.getPaused=function(){return this.get("paused")},Player.prototype.getTextTracks=function(){return this.get("textTracks")},Player.prototype.getVideoEmbedCode=function(){return this.get("videoEmbedCode")},Player.prototype.getVideoId=function(){return this.get("videoId")},Player.prototype.getVideoTitle=function(){return this.get("videoTitle")},Player.prototype.getVideoWidth=function(){return this.get("videoWidth")},Player.prototype.getVideoHeight=function(){return this.get("videoHeight")},Player.prototype.getVideoUrl=function(){return this.get("videoUrl")},Player.prototype.getVolume=function(){return this.get("volume")},Player.prototype.setVolume=function(e){return this.set("volume",e)},Player}();return d(),Player});
/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.23.4';


// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
	silverlight: [
		{version: [3,0], types: ['video/mp4','video/m4v','video/mov','video/wmv','audio/wma','audio/m4a','audio/mp3','audio/wav','audio/mpeg']}
	],
	flash: [
		{version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/rtmp','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a', 'audio/mp4', 'audio/mpeg', 'video/dailymotion', 'video/x-dailymotion', 'application/x-mpegURL', 'audio/ogg']}
		// 'video/youtube', 'video/x-youtube', 
		// ,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
	],
	youtube: [
		{version: null, types: ['video/youtube', 'video/x-youtube', 'audio/youtube', 'audio/x-youtube']}
	],
	vimeo: [
		{version: null, types: ['video/vimeo', 'video/x-vimeo']}
	]
};

/*
Utility methods
*/
mejs.Utility = {
	encodeUrl: function(url) {
		return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
	},
	escapeHTML: function(s) {
		return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
	},
	absolutizeUrl: function(url) {
		var el = document.createElement('div');
		el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
		return el.firstChild.href;
	},
	getScriptPath: function(scriptNames) {
		var
			i = 0,
			j,
			codePath = '',
			testname = '',
			slashPos,
			filenamePos,
			scriptUrl,
			scriptPath,			
			scriptFilename,
			scripts = document.getElementsByTagName('script'),
			il = scripts.length,
			jl = scriptNames.length;
			
		// go through all <script> tags
		for (; i < il; i++) {
			scriptUrl = scripts[i].src;
			slashPos = scriptUrl.lastIndexOf('/');
			if (slashPos > -1) {
				scriptFilename = scriptUrl.substring(slashPos + 1);
				scriptPath = scriptUrl.substring(0, slashPos + 1);
			} else {
				scriptFilename = scriptUrl;
				scriptPath = '';			
			}
			
			// see if any <script> tags have a file name that matches the 
			for (j = 0; j < jl; j++) {
				testname = scriptNames[j];
				filenamePos = scriptFilename.indexOf(testname);
				if (filenamePos > -1) {
					codePath = scriptPath;
					break;
				}
			}
			
			// if we found a path, then break and return it
			if (codePath !== '') {
				break;
			}
		}
		
		// send the best path back
		return codePath;
	},
	/*
	 * Calculate the time format to use. We have a default format set in the
	 * options but it can be imcomplete. We ajust it according to the media
	 * duration.
	 *
	 * We support format like 'hh:mm:ss:ff'.
	 */
	calculateTimeFormat: function(time, options, fps) {
		if (time < 0) {
			time = 0;
		}

		if(typeof fps == 'undefined') {
		    fps = 25;
		}

		var format = options.timeFormat,
			firstChar = format[0],
			firstTwoPlaces = (format[1] == format[0]),
			separatorIndex = firstTwoPlaces? 2: 1,
			separator = ':',
			hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1)*fps).toFixed(3)),
			lis = [
				[frames, 'f'],
				[seconds, 's'],
				[minutes, 'm'],
				[hours, 'h']
			];

		// Try to get the separator from the format
		if (format.length < separatorIndex) {
			separator = format[separatorIndex];
		}

		var required = false;

		for (var i=0, len=lis.length; i < len; i++) {
			if (format.indexOf(lis[i][1]) !== -1) {
				required=true;
			}
			else if (required) {
				var hasNextValue = false;
				for (var j=i; j < len; j++) {
					if (lis[j][0] > 0) {
						hasNextValue = true;
						break;
					}
				}

				if (! hasNextValue) {
					break;
				}

				if (!firstTwoPlaces) {
					format = firstChar + format;
				}
				format = lis[i][1] + separator + format;
				if (firstTwoPlaces) {
					format = lis[i][1] + format;
				}
				firstChar = lis[i][1];
			}
		}
		options.currentTimeFormat = format;
	},
	/*
	 * Prefix the given number by zero if it is lower than 10.
	 */
	twoDigitsString: function(n) {
		if (n < 10) {
			return '0' + n;
		}
		return String(n);
	},
	secondsToTimeCode: function(time, options) {
		if (time < 0) {
			time = 0;
		}

		// Maintain backward compatibility with method signature before v2.18.
		if (typeof options !== 'object') {
			var format = 'm:ss';
			format = arguments[1] ? 'hh:mm:ss' : format; // forceHours
			format = arguments[2] ? format + ':ff' : format; // showFrameCount

			options = {
				currentTimeFormat: format,
				framesPerSecond: arguments[3] || 25
			};
		}

		var fps = options.framesPerSecond;
		if(typeof fps === 'undefined') {
			fps = 25;
		}

		var format = options.currentTimeFormat,
			hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1)*fps).toFixed(3));
			lis = [
				[frames, 'f'],
				[seconds, 's'],
				[minutes, 'm'],
				[hours, 'h']
			];

		var res = format;
		for (i=0,len=lis.length; i < len; i++) {
			res = res.replace(lis[i][1]+lis[i][1], this.twoDigitsString(lis[i][0]));
			res = res.replace(lis[i][1], lis[i][0]);
		}
		return res;
	},
	
	timeCodeToSeconds: function(hh_mm_ss_ff, forceHours, showFrameCount, fps){
		if (typeof showFrameCount == 'undefined') {
		    showFrameCount=false;
		} else if(typeof fps == 'undefined') {
		    fps = 25;
		}
	
		var tc_array = hh_mm_ss_ff.split(":"),
			tc_hh = parseInt(tc_array[0], 10),
			tc_mm = parseInt(tc_array[1], 10),
			tc_ss = parseInt(tc_array[2], 10),
			tc_ff = 0,
			tc_in_seconds = 0;
		
		if (showFrameCount) {
		    tc_ff = parseInt(tc_array[3])/fps;
		}
		
		tc_in_seconds = ( tc_hh * 3600 ) + ( tc_mm * 60 ) + tc_ss + tc_ff;
		
		return tc_in_seconds;
	},
	

	convertSMPTEtoSeconds: function (SMPTE) {
		if (typeof SMPTE != 'string') 
			return false;

		SMPTE = SMPTE.replace(',', '.');
		
		var secs = 0,
			decimalLen = (SMPTE.indexOf('.') != -1) ? SMPTE.split('.')[1].length : 0,
			multiplier = 1;
		
		SMPTE = SMPTE.split(':').reverse();
		
		for (var i = 0; i < SMPTE.length; i++) {
			multiplier = 1;
			if (i > 0) {
				multiplier = Math.pow(60, i); 
			}
			secs += Number(SMPTE[i]) * multiplier;
		}
		return Number(secs.toFixed(decimalLen));
	},	
	
	/* borrowed from SWFObject: http://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
	removeSwf: function(id) {
		var obj = document.getElementById(id);
		if (obj && /object|embed/i.test(obj.nodeName)) {
			if (mejs.MediaFeatures.isIE) {
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						mejs.Utility.removeObjectInIE(id);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				obj.parentNode.removeChild(obj);
			}
		}
	},
	removeObjectInIE: function(id) {
		var obj = document.getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}		
	},
    determineScheme: function(url) {
        if (url && url.indexOf("://") != -1) {
            return url.substr(0, url.indexOf("://")+3);
        }
        return "//"; // let user agent figure this out
    },

	// taken from underscore
	debounce: function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},

	/**
	* Returns true if targetNode appears after sourceNode in the dom.
	* @param {HTMLElement} sourceNode - the source node for comparison
	* @param {HTMLElement} targetNode - the node to compare against sourceNode
	*/
	isNodeAfter: function(sourceNode, targetNode) {
		return !!(
			sourceNode &&
			targetNode &&
			typeof sourceNode.compareDocumentPosition === 'function' &&
			sourceNode.compareDocumentPosition(targetNode) & Node.DOCUMENT_POSITION_PRECEDING
		);
	}
};


// Core detector, plugins are added below
mejs.PluginDetector = {

	// main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
	hasPluginVersion: function(plugin, v) {
		var pv = this.plugins[plugin];
		v[1] = v[1] || 0;
		v[2] = v[2] || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	},

	// cached values
	nav: window.navigator,
	ua: window.navigator.userAgent.toLowerCase(),

	// stored version numbers
	plugins: [],

	// runs detectPlugin() and stores the version number
	addPlugin: function(p, pluginName, mimeType, activeX, axDetect) {
		this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
	},

	// get the version number from the mimetype (all but IE) or ActiveX (IE)
	detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

		var version = [0,0,0],
			description,
			i,
			ax;

		// Firefox, Webkit, Opera
		if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
			description = this.nav.plugins[pluginName].description;
			if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
				version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
				for (i=0; i<version.length; i++) {
					version[i] = parseInt(version[i].match(/\d+/), 10);
				}
			}
		// Internet Explorer / ActiveX
		} else if (typeof(window.ActiveXObject) != 'undefined') {
			try {
				ax = new ActiveXObject(activeX);
				if (ax) {
					version = axDetect(ax);
				}
			}
			catch (e) { }
		}
		return version;
	}
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash','Shockwave Flash','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash', function(ax) {
	// adapted from SWFObject
	var version = [],
		d = ax.GetVariable("$version");
	if (d) {
		d = d.split(" ")[1].split(",");
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight','Silverlight Plug-In','application/x-silverlight-2','AgControl.AgControl', function (ax) {
	// Silverlight cannot report its version number to IE
	// but it does have a isVersionSupported function, so we have to loop through it to get a version number.
	// adapted from http://www.silverlightversion.com/
	var v = [0,0,0,0],
		loopMatch = function(ax, v, i, n) {
			while(ax.isVersionSupported(v[0]+ "."+ v[1] + "." + v[2] + "." + v[3])){
				v[i]+=n;
			}
			v[i] -= n;
		};
	loopMatch(ax, v, 0, 1);
	loopMatch(ax, v, 1, 1);
	loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
	loopMatch(ax, v, 2, 1000);
	loopMatch(ax, v, 2, 100);
	loopMatch(ax, v, 2, 10);
	loopMatch(ax, v, 2, 1);
	loopMatch(ax, v, 3, 1);

	return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
	var version = [],
		d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

	if (d) {
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
	init: function() {
		var
			t = this,
			d = document,
			nav = mejs.PluginDetector.nav,
			ua = mejs.PluginDetector.ua.toLowerCase(),
			i,
			v,
			html5Elements = ['source','track','audio','video'];

		// detect browsers (only the ones that have some kind of quirk we need to work around)
		t.isiPad = (ua.match(/ipad/i) !== null);
		t.isiPhone = (ua.match(/iphone/i) !== null);
		t.isiOS = t.isiPhone || t.isiPad;
		t.isAndroid = (ua.match(/android/i) !== null);
		t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
		t.isBustedNativeHTTPS = (location.protocol === 'https:' && (ua.match(/android [12]\./) !== null || ua.match(/macintosh.* version.* safari/) !== null));
		t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1 || nav.appName.toLowerCase().match(/trident/gi) !== null);
		t.isChrome = (ua.match(/chrome/gi) !== null);
		t.isChromium = (ua.match(/chromium/gi) !== null);
		t.isFirefox = (ua.match(/firefox/gi) !== null);
		t.isWebkit = (ua.match(/webkit/gi) !== null);
		t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit && !t.isIE;
		t.isOpera = (ua.match(/opera/gi) !== null);
		t.hasTouch = ('ontouchstart' in window); //  && window.ontouchstart != null); // this breaks iOS 7

		// Borrowed from `Modernizr.svgasimg`, sources:
		// - https://github.com/Modernizr/Modernizr/issues/687
		// - https://github.com/Modernizr/Modernizr/pull/1209/files
		t.svgAsImg = !!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');

		// create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
		for (i=0; i<html5Elements.length; i++) {
			v = document.createElement(html5Elements[i]);
		}

		t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

		// Fix for IE9 on Windows 7N / Windows 7KN (Media Player not installer)
		try{
			v.canPlayType("video/mp4");
		}catch(e){
			t.supportsMediaTag = false;
		}

		t.supportsPointerEvents = (function() {
			// TAKEN FROM MODERNIZR
			var element = document.createElement('x'),
				documentElement = document.documentElement,
				getComputedStyle = window.getComputedStyle,
				supports;
			if(!('pointerEvents' in element.style)){
				return false;
			}
			element.style.pointerEvents = 'auto';
			element.style.pointerEvents = 'x';
			documentElement.appendChild(element);
			supports = getComputedStyle &&
				getComputedStyle(element, '').pointerEvents === 'auto';
			documentElement.removeChild(element);
			return !!supports;
		})();


		 // Older versions of Firefox can't move plugins around without it resetting,
		t.hasFirefoxPluginMovingProblem = false;

		// detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)

		// iOS
		t.hasiOSFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');

		// W3C
		t.hasNativeFullscreen = (typeof v.requestFullscreen !== 'undefined');

		// webkit/firefox/IE11+
		t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
		t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');
		t.hasMsNativeFullScreen = (typeof v.msRequestFullscreen !== 'undefined');

		t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen || t.hasMsNativeFullScreen);
		t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;

		// Enabled?
		if (t.hasMozNativeFullScreen) {
			t.nativeFullScreenEnabled = document.mozFullScreenEnabled;
		} else if (t.hasMsNativeFullScreen) {
			t.nativeFullScreenEnabled = document.msFullscreenEnabled;
		}

		if (t.isChrome) {
			t.hasiOSFullScreen = false;
		}

		if (t.hasTrueNativeFullScreen) {

			t.fullScreenEventName = '';
			if (t.hasWebkitNativeFullScreen) {
				t.fullScreenEventName = 'webkitfullscreenchange';

			} else if (t.hasMozNativeFullScreen) {
				t.fullScreenEventName = 'mozfullscreenchange';

			} else if (t.hasMsNativeFullScreen) {
				t.fullScreenEventName = 'MSFullscreenChange';
			}

			t.isFullScreen = function() {
				if (t.hasMozNativeFullScreen) {
					return d.mozFullScreen;

				} else if (t.hasWebkitNativeFullScreen) {
					return d.webkitIsFullScreen;

				} else if (t.hasMsNativeFullScreen) {
					return d.msFullscreenElement !== null;
				}
			}

			t.requestFullScreen = function(el) {

				if (t.hasWebkitNativeFullScreen) {
					el.webkitRequestFullScreen();

				} else if (t.hasMozNativeFullScreen) {
					el.mozRequestFullScreen();

				} else if (t.hasMsNativeFullScreen) {
					el.msRequestFullscreen();

				}
			}

			t.cancelFullScreen = function() {
				if (t.hasWebkitNativeFullScreen) {
					document.webkitCancelFullScreen();

				} else if (t.hasMozNativeFullScreen) {
					document.mozCancelFullScreen();

				} else if (t.hasMsNativeFullScreen) {
					document.msExitFullscreen();

				}
			}

		}


		// OS X 10.5 can't do this even if it says it can :(
		if (t.hasiOSFullScreen && ua.match(/mac os x 10_5/i)) {
			t.hasNativeFullScreen = false;
			t.hasiOSFullScreen = false;
		}

	}
};
mejs.MediaFeatures.init();

/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
	pluginType: 'native',
	isFullScreen: false,

	setCurrentTime: function (time) {
		this.currentTime = time;
	},

	setMuted: function (muted) {
		this.muted = muted;
	},

	setVolume: function (volume) {
		this.volume = volume;
	},

	// for parity with the plugin versions
	stop: function () {
		this.pause();
	},

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		
		// Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
		var 
			existingSources = this.getElementsByTagName('source');
		while (existingSources.length > 0){
			this.removeChild(existingSources[0]);
		}
	
		if (typeof url == 'string') {
			this.src = url;
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.src = media.src;
					break;
				}
			}
		}
	},

	setVideoSize: function (width, height) {
		this.width = width;
		this.height = height;
	}
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
	this.id = pluginid;
	this.pluginType = pluginType;
	this.src = mediaUrl;
	this.events = {};
	this.attributes = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

	// special
	pluginElement: null,
	pluginType: '',
	isFullScreen: false,

	// not implemented :(
	playbackRate: -1,
	defaultPlaybackRate: -1,
	seekable: [],
	played: [],

	// HTML5 read-only properties
	paused: true,
	ended: false,
	seeking: false,
	duration: 0,
	error: null,
	tagName: '',

	// HTML5 get/set properties, but only set (updated by event handlers)
	muted: false,
	volume: 1,
	currentTime: 0,

	// HTML5 methods
	play: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.playVideo();
			} else {
				this.pluginApi.playMedia();
			}
			this.paused = false;
		}
	},
	load: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
			} else {
				this.pluginApi.loadMedia();
			}
			
			this.paused = false;
		}
	},
	pause: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
		        if( this.pluginApi.getPlayerState() == 1 ) {
				    this.pluginApi.pauseVideo();
                }
			} else {
				this.pluginApi.pauseMedia();
			}			
			
			
			this.paused = true;
		}
	},
	stop: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.stopVideo();
			} else {
				this.pluginApi.stopMedia();
			}	
			this.paused = true;
		}
	},
	canPlayType: function(type) {
		var i,
			j,
			pluginInfo,
			pluginVersions = mejs.plugins[this.pluginType];

		for (i=0; i<pluginVersions.length; i++) {
			pluginInfo = pluginVersions[i];

			// test if user has the correct plugin version
			if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

				// test for plugin playback types
				for (j=0; j<pluginInfo.types.length; j++) {
					// find plugin that can play the type
					if (type == pluginInfo.types[j]) {
						return 'probably';
					}
				}
			}
		}

		return '';
	},
	
	positionFullscreenButton: function(x,y,visibleAndAbove) {
		if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
			this.pluginApi.positionFullscreenButton(Math.floor(x),Math.floor(y),visibleAndAbove);
		}
	},
	
	hideFullscreenButton: function() {
		if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
			this.pluginApi.hideFullscreenButton();
		}		
	},	
	

	// custom methods since not all JavaScript implementations support get/set

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		if (typeof url == 'string') {
			this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
			this.src = mejs.Utility.absolutizeUrl(url);
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
					this.src = mejs.Utility.absolutizeUrl(media.src);
					break;
				}
			}
		}

	},
	setCurrentTime: function (time) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.seekTo(time);
			} else {
				this.pluginApi.setCurrentTime(time);
			}				
			
			
			
			this.currentTime = time;
		}
	},
	setVolume: function (volume) {
		if (this.pluginApi != null) {
			// same on YouTube and MEjs
			if (this.pluginType == 'youtube') {
				this.pluginApi.setVolume(volume * 100);
			} else {
				this.pluginApi.setVolume(volume);
			}
			this.volume = volume;
		}
	},
	setMuted: function (muted) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				if (muted) {
					this.pluginApi.mute();
				} else {
					this.pluginApi.unMute();
				}
				this.muted = muted;
				this.dispatchEvent({type:'volumechange'});
			} else {
				this.pluginApi.setMuted(muted);
			}
			this.muted = muted;
		}
	},

	// additional non-HTML5 methods
	setVideoSize: function (width, height) {
		
		//if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
			if (this.pluginElement && this.pluginElement.style) {
				this.pluginElement.style.width = width + 'px';
				this.pluginElement.style.height = height + 'px';
			}
			if (this.pluginApi != null && this.pluginApi.setVideoSize) {
				this.pluginApi.setVideoSize(width, height);
			}
		//}
	},

	setFullscreen: function (fullscreen) {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.pluginApi.setFullscreen(fullscreen);
		}
	},
	
	enterFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(true);
		}		
		
	},
	
	exitFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(false);
		}
	},	

	// start: fake events
	addEventListener: function (eventName, callback, bubble) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(callback);
	},
	removeEventListener: function (eventName, callback) {
		if (!eventName) { this.events = {}; return true; }
		var callbacks = this.events[eventName];
		if (!callbacks) return true;
		if (!callback) { this.events[eventName] = []; return true; }
		for (var i = 0; i < callbacks.length; i++) {
			if (callbacks[i] === callback) {
				this.events[eventName].splice(i, 1);
				return true;
			}
		}
		return false;
	},	
	dispatchEvent: function (event) {
		var i,
			args,
			callbacks = this.events[event.type];

		if (callbacks) {
			for (i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(this, [event]);
			}
		}
	},
	// end: fake events
	
	// fake DOM attribute methods
	hasAttribute: function(name){
		return (name in this.attributes);  
	},
	removeAttribute: function(name){
		delete this.attributes[name];
	},
	getAttribute: function(name){
		if (this.hasAttribute(name)) {
			return this.attributes[name];
		}
		return null;
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},

	remove: function() {
		mejs.Utility.removeSwf(this.pluginElement.id);
	}
};

/*
Default options
*/
mejs.MediaElementDefaults = {
	// allows testing on HTML5, flash, silverlight
	// auto: attempts to detect what the browser can do
	// auto_plugin: prefer plugins and then attempt native HTML5
	// native: forces HTML5 playback
	// shim: disallows HTML5, will attempt either Flash or Silverlight
	// none: forces fallback view
	mode: 'auto',
	// remove or reorder to change plugin priority and availability
	plugins: ['flash','silverlight','youtube','vimeo'],
	// shows debug errors on screen
	enablePluginDebug: false,
	// use plugin for browsers that have trouble with Basic Authentication on HTTPS sites
	httpsBasicAuthSite: false,
	// overrides the type specified, useful for dynamic instantiation
	type: '',
	// path to Flash and Silverlight plugins
	pluginPath: mejs.Utility.getScriptPath(['mediaelement.js','mediaelement.min.js','mediaelement-and-player.js','mediaelement-and-player.min.js']),
	// name of flash file
	flashName: 'flashmediaelement.swf',
	// streamer for RTMP streaming
	flashStreamer: '',
	// set to 'always' for CDN version
	flashScriptAccess: 'sameDomain',	
	// turns on the smoothing filter in Flash
	enablePluginSmoothing: false,
	// enabled pseudo-streaming (seek) on .mp4 files
	enablePseudoStreaming: false,
	// start query parameter sent to server for pseudo-streaming
	pseudoStreamingStartQueryParam: 'start',
	// name of silverlight file
	silverlightName: 'silverlightmediaelement.xap',
	// default if the <video width> is not specified
	defaultVideoWidth: 480,
	// default if the <video height> is not specified
	defaultVideoHeight: 270,
	// overrides <video width>
	pluginWidth: -1,
	// overrides <video height>
	pluginHeight: -1,
	// additional plugin variables in 'key=value' form
	pluginVars: [],	
	// rate in milliseconds for Flash and Silverlight to fire the timeupdate event
	// larger number is less accurate, but less strain on plugin->JavaScript bridge
	timerRate: 250,
	// initial volume for player
	startVolume: 0.8,
	// custom error message in case media cannot be played; otherwise, Download File
	// link will be displayed
	customError: "",
	success: function () { },
	error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
	return mejs.HtmlMediaElementShim.create(el,o);
};

mejs.HtmlMediaElementShim = {

	create: function(el, o) {
		var
			options = {},
			htmlMediaElement = (typeof(el) == 'string') ? document.getElementById(el) : el,
			tagName = htmlMediaElement.tagName.toLowerCase(),
			isMediaTag = (tagName === 'audio' || tagName === 'video'),
			src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
			poster = htmlMediaElement.getAttribute('poster'),
			autoplay =  htmlMediaElement.getAttribute('autoplay'),
			preload =  htmlMediaElement.getAttribute('preload'),
			controls =  htmlMediaElement.getAttribute('controls'),
			playback,
			prop;

		// extend options
		for (prop in mejs.MediaElementDefaults) {
			options[prop] = mejs.MediaElementDefaults[prop];
		}
		for (prop in o) {
			options[prop] = o[prop];
		}		
		

		// clean up attributes
		src = 		(typeof src == 'undefined' 	|| src === null || src == '') ? null : src;		
		poster =	(typeof poster == 'undefined' 	|| poster === null) ? '' : poster;
		preload = 	(typeof preload == 'undefined' 	|| preload === null || preload === 'false') ? 'none' : preload;
		autoplay = 	!(typeof autoplay == 'undefined' || autoplay === null || autoplay === 'false');
		controls = 	!(typeof controls == 'undefined' || controls === null || controls === 'false');

		// test for HTML5 and plugin capabilities
		playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
		playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';
        	playback.scheme = mejs.Utility.determineScheme(playback.url);

		if (playback.method == 'native') {
			// second fix for android
			if (mejs.MediaFeatures.isBustedAndroid) {
				htmlMediaElement.src = playback.url;
				htmlMediaElement.addEventListener('click', function() {
					htmlMediaElement.play();
				}, false);
			}
		
			// add methods to native HTMLMediaElement
			return this.updateNative(playback, options, autoplay, preload);
		} else if (playback.method !== '') {
			// create plugin to mimic HTMLMediaElement
			
			return this.createPlugin( playback,  options, poster, autoplay, preload, controls);
		} else {
			// boo, no HTML5, no Flash, no Silverlight.
			this.createErrorMessage( playback, options, poster );
			
			return this;
		}
	},
	
	determinePlayback: function(htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
		var
			mediaFiles = [],
			i,
			j,
			k,
			l,
			n,
			type,
			result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() !== 'audio'), scheme: ''},
			pluginName,
			pluginVersions,
			pluginInfo,
			dummy,
			media;
			
		// STEP 1: Get URL and type from <video src> or <source src>

		// supplied type overrides <video type> and <source type>
		if (typeof options.type != 'undefined' && options.type !== '') {
			
			// accept either string or array of types
			if (typeof options.type == 'string') {
				mediaFiles.push({type:options.type, url:src});
			} else {
				
				for (i=0; i<options.type.length; i++) {
					mediaFiles.push({type:options.type[i], url:src});
				}
			}

		// test for src attribute first
		} else if (src !== null) {
			type = this.formatType(src, htmlMediaElement.getAttribute('type'));
			mediaFiles.push({type:type, url:src});

		// then test for <source> elements
		} else {
			// test <source> types to see if they are usable
			for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
				n = htmlMediaElement.childNodes[i];
				if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
					src = n.getAttribute('src');
					type = this.formatType(src, n.getAttribute('type'));
					media = n.getAttribute('media');

					if (!media || !window.matchMedia || (window.matchMedia && window.matchMedia(media).matches)) {
						mediaFiles.push({type:type, url:src});
					}
				}
			}
		}
		
		// in the case of dynamicly created players
		// check for audio types
		if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
			result.isVideo = false;
		}
		

		// STEP 2: Test for playback method
		
		// special case for Android which sadly doesn't implement the canPlayType function (always returns '')
		if (result.isVideo && mejs.MediaFeatures.isBustedAndroid) {
			htmlMediaElement.canPlayType = function(type) {
				return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
			};
		}		
		
		// special case for Chromium to specify natively supported video codecs (i.e. WebM and Theora) 
		if (result.isVideo && mejs.MediaFeatures.isChromium) {
			htmlMediaElement.canPlayType = function(type) { 
				return (type.match(/video\/(webm|ogv|ogg)/gi) !== null) ? 'maybe' : '';
			}; 
		}

		// test for native playback first
		if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'native')  && !(mejs.MediaFeatures.isBustedNativeHTTPS && options.httpsBasicAuthSite === true)) {
						
			if (!isMediaTag) {

				// create a real HTML5 Media Element 
				dummy = document.createElement( result.isVideo ? 'video' : 'audio');			
				htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
				htmlMediaElement.style.display = 'none';
				
				// use this one from now on
				result.htmlMediaElement = htmlMediaElement = dummy;
			}
				
			for (i=0; i<mediaFiles.length; i++) {
				// normal check
				if (mediaFiles[i].type == "video/m3u8" || htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== ''
					// special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/,'mpeg')).replace(/no/, '') !== ''
					// special case for m4a supported by detecting mp4 support
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/m4a/,'mp4')).replace(/no/, '') !== '') {
					result.method = 'native';
					result.url = mediaFiles[i].url;
					break;
				}
			}			
			
			if (result.method === 'native') {
				if (result.url !== null) {
					htmlMediaElement.src = result.url;
				}
			
				// if `auto_plugin` mode, then cache the native result but try plugins.
				if (options.mode !== 'auto_plugin') {
					return result;
				}
			}
		}

		// if native playback didn't work, then test plugins
		if (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'shim') {
			for (i=0; i<mediaFiles.length; i++) {
				type = mediaFiles[i].type;

				// test all plugins in order of preference [silverlight, flash]
				for (j=0; j<options.plugins.length; j++) {

					pluginName = options.plugins[j];
			
					// test version of plugin (for future features)
					pluginVersions = mejs.plugins[pluginName];				
					
					for (k=0; k<pluginVersions.length; k++) {
						pluginInfo = pluginVersions[k];
					
						// test if user has the correct plugin version
						
						// for youtube/vimeo
						if (pluginInfo.version == null || 
							
							mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

							// test for plugin playback types
							for (l=0; l<pluginInfo.types.length; l++) {
								// find plugin that can play the type
								if (type.toLowerCase() == pluginInfo.types[l].toLowerCase()) {
									result.method = pluginName;
									result.url = mediaFiles[i].url;
									return result;
								}
							}
						}
					}
				}
			}
		}
		
		// at this point, being in 'auto_plugin' mode implies that we tried plugins but failed.
		// if we have native support then return that.
		if (options.mode === 'auto_plugin' && result.method === 'native') {
			return result;
		}

		// what if there's nothing to play? just grab the first available
		if (result.method === '' && mediaFiles.length > 0) {
			result.url = mediaFiles[0].url;
		}

		return result;
	},

	formatType: function(url, type) {
		// if no type is supplied, fake it with the extension
		if (url && !type) {		
			return this.getTypeFromFile(url);
		} else {
			// only return the mime part of the type in case the attribute contains the codec
			// see http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
			// `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`
			
			if (type && ~type.indexOf(';')) {
				return type.substr(0, type.indexOf(';')); 
			} else {
				return type;
			}
		}
	},
	
	getTypeFromFile: function(url) {
		url = url.split('?')[0];
		var
			ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase(),
			av = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video/' : 'audio/';
		return this.getTypeFromExtension(ext, av);
	},
	
	getTypeFromExtension: function(ext, av) {
		av = av || '';
		
		switch (ext) {
			case 'mp4':
			case 'm4v':
			case 'm4a':
			case 'f4v':
			case 'f4a':
				return av + 'mp4';
			case 'flv':
				return av + 'x-flv';
			case 'webm':
			case 'webma':
			case 'webmv':	
				return av + 'webm';
			case 'ogg':
			case 'oga':
			case 'ogv':	
				return av + 'ogg';
			case 'm3u8':
				return 'application/x-mpegurl';
			case 'ts':
				return av + 'mp2t';
			default:
				return av + ext;
		}
	},

	createErrorMessage: function(playback, options, poster) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			errorContainer = document.createElement('div'),
			errorContent = options.customError;
			
		errorContainer.className = 'me-cannotplay';

		try {
			errorContainer.style.width = htmlMediaElement.width + 'px';
			errorContainer.style.height = htmlMediaElement.height + 'px';
		} catch (e) {}

		if (!errorContent) {
			errorContent = '<a href="' + playback.url + '">';

			if (poster !== '') {
				errorContent += '<img src="' + poster + '" width="100%" height="100%" alt="" />';
			}

			errorContent += '<span>' + mejs.i18n.t('mejs.download-file') + '</span></a>';
		}

		errorContainer.innerHTML = errorContent;

		htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
		htmlMediaElement.style.display = 'none';

		options.error(htmlMediaElement);
	},

	createPlugin:function(playback, options, poster, autoplay, preload, controls) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			width = 1,
			height = 1,
			pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
			pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
			container = document.createElement('div'),
			specialIEContainer,
			node,
			initVars;

		// copy tagName from html media element
		pluginMediaElement.tagName = htmlMediaElement.tagName;

		// copy attributes from html media element to plugin media element
		for (var i = 0; i < htmlMediaElement.attributes.length; i++) {
			var attribute = htmlMediaElement.attributes[i];
			if (attribute.specified) {
				pluginMediaElement.setAttribute(attribute.name, attribute.value);
			}
		}

		// check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
		node = htmlMediaElement.parentNode;

		while (node !== null && node.tagName != null && node.tagName.toLowerCase() !== 'body' && 
				node.parentNode != null && node.parentNode.tagName != null && node.parentNode.constructor != null && node.parentNode.constructor.name === "ShadowRoot") {
			if (node.parentNode.tagName.toLowerCase() === 'p') {
				node.parentNode.parentNode.insertBefore(node, node.parentNode);
				break;
			}
			node = node.parentNode;
		}

		if (playback.isVideo) {
			width = (options.pluginWidth > 0) ? options.pluginWidth : (options.videoWidth > 0) ? options.videoWidth : (htmlMediaElement.getAttribute('width') !== null) ? htmlMediaElement.getAttribute('width') : options.defaultVideoWidth;
			height = (options.pluginHeight > 0) ? options.pluginHeight : (options.videoHeight > 0) ? options.videoHeight : (htmlMediaElement.getAttribute('height') !== null) ? htmlMediaElement.getAttribute('height') : options.defaultVideoHeight;
		
			// in case of '%' make sure it's encoded
			width = mejs.Utility.encodeUrl(width);
			height = mejs.Utility.encodeUrl(height);
		
		} else {
			if (options.enablePluginDebug) {
				width = 320;
				height = 240;
			}
		}

		// register plugin
		pluginMediaElement.success = options.success;
		
		// add container (must be added to DOM before inserting HTML for IE)
		container.className = 'me-plugin';
		container.id = pluginid + '_container';
		
		if (playback.isVideo) {
				htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
		} else {
				document.body.insertBefore(container, document.body.childNodes[0]);
		}
		
		if (playback.method === 'flash' || playback.method === 'silverlight') {

			var canPlayVideo = htmlMediaElement.getAttribute('type') === 'audio/mp4',
				childrenSources = htmlMediaElement.getElementsByTagName('source');

			if (childrenSources && !canPlayVideo) {
				for (var i = 0, total = childrenSources.length; i < total; i++) {
					if (childrenSources[i].getAttribute('type') === 'audio/mp4') {
						canPlayVideo = true;
					}
				}
			}

			// flash/silverlight vars
			initVars = [
				'id=' + pluginid,
				'isvideo=' + ((playback.isVideo || canPlayVideo) ? "true" : "false"),
				'autoplay=' + ((autoplay) ? "true" : "false"),
				'preload=' + preload,
				'width=' + width,
				'startvolume=' + options.startVolume,
				'timerrate=' + options.timerRate,
				'flashstreamer=' + options.flashStreamer,
				'height=' + height,
				'pseudostreamstart=' + options.pseudoStreamingStartQueryParam];
	
			if (playback.url !== null) {
				if (playback.method == 'flash') {
					initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
				} else {
					initVars.push('file=' + playback.url);
				}
			}
			if (options.enablePluginDebug) {
				initVars.push('debug=true');
			}
			if (options.enablePluginSmoothing) {
				initVars.push('smoothing=true');
			}
			if (options.enablePseudoStreaming) {
				initVars.push('pseudostreaming=true');
			}
			if (controls) {
				initVars.push('controls=true'); // shows controls in the plugin if desired
			}
			if (options.pluginVars) {
				initVars = initVars.concat(options.pluginVars);
			}		
			
			// call from plugin
			window[pluginid + '_init'] = function() {
				switch (pluginMediaElement.pluginType) {
					case 'flash':
						pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(pluginid);
						break;
					case 'silverlight':
						pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
						pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
						break;
				}
	
				if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
					pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
				}
			};
			
			// event call from plugin
			window[pluginid + '_event'] = function(eventName, values) {
		
				var
					e,
					i,
					bufferedTime;
		        
				// fake event object to mimic real HTML media event.
				e = {
					type: eventName,
					target: pluginMediaElement
				};
		
				// attach all values to element and event object
				for (i in values) {
					pluginMediaElement[i] = values[i];
					e[i] = values[i];
				}
		
				// fake the newer W3C buffered TimeRange (loaded and total have been removed)
				bufferedTime = values.bufferedTime || 0;
		
				e.target.buffered = e.buffered = {
					start: function(index) {
						return 0;
					},
					end: function (index) {
						return bufferedTime;
					},
					length: 1
				};
		
				pluginMediaElement.dispatchEvent(e);
			}			
			
			
		}

		switch (playback.method) {
			case 'silverlight':
				container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
					break;

			case 'flash':

				if (mejs.MediaFeatures.isIE) {
					specialIEContainer = document.createElement('div');
					container.appendChild(specialIEContainer);
					specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?' + (new Date().getTime()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '" />' +
'<param name="allowFullScreen" value="true" />' +
'<param name="scale" value="default" />' + 
'</object>';

				} else {

					container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="' + options.flashScriptAccess + '" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '" ' +
'scale="default"' + 
'class="mejs-shim"></embed>';
				}
				break;
			
			case 'youtube':
			
				
				var videoId;
				// youtu.be url from share button
				if (playback.url.lastIndexOf("youtu.be") != -1) {
					videoId = playback.url.substr(playback.url.lastIndexOf('/')+1);
					if (videoId.indexOf('?') != -1) {
						videoId = videoId.substr(0, videoId.indexOf('?'));
					}
				}
				else {
					// https://www.youtube.com/watch?v=
					var videoIdMatch = playback.url.match( /[?&]v=([^&#]+)|&|#|$/ );
					if ( videoIdMatch ) {
						videoId = videoIdMatch[1];
					}
				}
				youtubeSettings = {
						container: container,
						containerId: container.id,
						pluginMediaElement: pluginMediaElement,
						pluginId: pluginid,
						videoId: videoId,
						height: height,
						width: width,
                        scheme: playback.scheme,
						variables: options.youtubeIframeVars
					};				
				
				// favor iframe version of YouTube
				if (window.postMessage) {
					mejs.YouTubeApi.enqueueIframe(youtubeSettings);		
				} else if (mejs.PluginDetector.hasPluginVersion('flash', [10,0,0]) ) {
					mejs.YouTubeApi.createFlash(youtubeSettings, options);
				}
				break;
			
			// DEMO Code. Does NOT work.
			case 'vimeo':
				var player_id = pluginid + "_player";
				pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/')+1);
				
				container.innerHTML ='<iframe src="' + playback.scheme + 'player.vimeo.com/video/' + pluginMediaElement.vimeoid + '?api=1&portrait=0&byline=0&title=0&player_id=' + player_id + '" width="' + width +'" height="' + height +'" frameborder="0" class="mejs-shim" id="' + player_id + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				if (typeof($f) == 'function') { // froogaloop available
					var player = $f(container.childNodes[0]),
						playerState = -1;
					
					player.addEvent('ready', function() {
		
						player.playVideo = function() {
							player.api( 'play' );
						};
						player.stopVideo = function() {
							player.api( 'unload' );
						};
						player.pauseVideo = function() {
							player.api( 'pause' );
						};
						player.seekTo = function( seconds ) {
							player.api( 'seekTo', seconds );
						};
						player.setVolume = function( volume ) {
							player.api( 'setVolume', volume );
						};
						player.setMuted = function( muted ) {
							if( muted ) {
								player.lastVolume = player.api( 'getVolume' );
								player.api( 'setVolume', 0 );
							} else {
								player.api( 'setVolume', player.lastVolume );
								delete player.lastVolume;
							}
						};
						// parity with YT player
						player.getPlayerState = function() {
							return playerState;
						};

						function createEvent(player, pluginMediaElement, eventName, e) {
							var event = {
								type: eventName,
								target: pluginMediaElement
							};
							if (eventName == 'timeupdate') {
								pluginMediaElement.currentTime = event.currentTime = e.seconds;
								pluginMediaElement.duration = event.duration = e.duration;
							}
							pluginMediaElement.dispatchEvent(event);
						}

						player.addEvent('play', function() {
							playerState = 1;
							createEvent(player, pluginMediaElement, 'play');
							createEvent(player, pluginMediaElement, 'playing');
						});

						player.addEvent('pause', function() {
							playerState = 2;							
							createEvent(player, pluginMediaElement, 'pause');
						});

						player.addEvent('finish', function() {
							playerState = 0;							
							createEvent(player, pluginMediaElement, 'ended');
						});

						player.addEvent('playProgress', function(e) {
							createEvent(player, pluginMediaElement, 'timeupdate', e);
						});
						
						player.addEvent('seek', function(e) {
							playerState = 3;
							createEvent(player, pluginMediaElement, 'seeked', e);
						});	
						
						player.addEvent('loadProgress', function(e) {
							playerState = 3;
							createEvent(player, pluginMediaElement, 'progress', e);
						});												

						pluginMediaElement.pluginElement = container;
						pluginMediaElement.pluginApi = player;

						pluginMediaElement.success(pluginMediaElement, pluginMediaElement.pluginElement);						
					});
				}
				else {
					console.warn("You need to include froogaloop for vimeo to work");
				}
				break;			
		}
		// hide original element
		htmlMediaElement.style.display = 'none';
		// prevent browser from autoplaying when using a plugin
		htmlMediaElement.removeAttribute('autoplay');
		
		return pluginMediaElement;
	},

	updateNative: function(playback, options, autoplay, preload) {
		
		var htmlMediaElement = playback.htmlMediaElement,
			m;
		
		
		// add methods to video object to bring it into parity with Flash Object
		for (m in mejs.HtmlMediaElement) {
			htmlMediaElement[m] = mejs.HtmlMediaElement[m];
		}

		/*
		Chrome now supports preload="none"
		if (mejs.MediaFeatures.isChrome) {
		
			// special case to enforce preload attribute (Chrome doesn't respect this)
			if (preload === 'none' && !autoplay) {
			
				// forces the browser to stop loading (note: fails in IE9)
				htmlMediaElement.src = '';
				htmlMediaElement.load();
				htmlMediaElement.canceledPreload = true;

				htmlMediaElement.addEventListener('play',function() {
					if (htmlMediaElement.canceledPreload) {
						htmlMediaElement.src = playback.url;
						htmlMediaElement.load();
						htmlMediaElement.play();
						htmlMediaElement.canceledPreload = false;
					}
				}, false);
			// for some reason Chrome forgets how to autoplay sometimes.
			} else if (autoplay) {
				htmlMediaElement.load();
				htmlMediaElement.play();
			}
		}
		*/

		// fire success code
		options.success(htmlMediaElement, htmlMediaElement);
		
		return htmlMediaElement;
	}
};

/*
 - test on IE (object vs. embed)
 - determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
 - fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
	isIframeStarted: false,
	isIframeLoaded: false,
	loadIframeApi: function(yt) {
		if (!this.isIframeStarted) {
			var tag = document.createElement('script');
			tag.src = yt.scheme + "www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			this.isIframeStarted = true;
		}
	},
	iframeQueue: [],
	enqueueIframe: function(yt) {
		
		if (this.isLoaded) {
			this.createIframe(yt);
		} else {
			this.loadIframeApi(yt);
			this.iframeQueue.push(yt);
		}
	},
	createIframe: function(settings) {

		var
		pluginMediaElement = settings.pluginMediaElement,
		defaultVars = {controls:0, wmode:'transparent'},
		player = new YT.Player(settings.containerId, {
			height: settings.height,
			width: settings.width,
			videoId: settings.videoId,
			playerVars: mejs.$.extend({}, defaultVars, settings.variables),
			events: {
				'onReady': function(e) {
					
					// wrapper to match
					player.setVideoSize = function(width, height) {
						player.setSize(width, height);
					};
					
					// hook up iframe object to MEjs
					settings.pluginMediaElement.pluginApi = player;
					settings.pluginMediaElement.pluginElement = document.getElementById(settings.containerId);
					
					// init mejs
					pluginMediaElement.success(pluginMediaElement, pluginMediaElement.pluginElement);

					mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'canplay');
					
					// create timer
					setInterval(function() {
						mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
					}, 250);

					if (typeof pluginMediaElement.attributes.autoplay !== 'undefined') {
						player.playVideo();
					}
				},
				'onStateChange': function(e) {
					
					mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);
					
				}
			}
		});
	},
	
	createEvent: function (player, pluginMediaElement, eventName) {
		var event = {
			type: eventName,
			target: pluginMediaElement
		};

		if (player && player.getDuration) {
			
			// time 
			pluginMediaElement.currentTime = event.currentTime = player.getCurrentTime();
			pluginMediaElement.duration = event.duration = player.getDuration();
			
			// state
			event.paused = pluginMediaElement.paused;
			event.ended = pluginMediaElement.ended;			
			
			// sound
			event.muted = player.isMuted();
			event.volume = player.getVolume() / 100;
			
			// progress
			event.bytesTotal = player.getVideoBytesTotal();
			event.bufferedBytes = player.getVideoBytesLoaded();
			
			// fake the W3C buffered TimeRange
			var bufferedTime = event.bufferedBytes / event.bytesTotal * event.duration;
			
			event.target.buffered = event.buffered = {
				start: function(index) {
					return 0;
				},
				end: function (index) {
					return bufferedTime;
				},
				length: 1
			};

		}
		
		// send event up the chain
		pluginMediaElement.dispatchEvent(event);
	},	
	
	iFrameReady: function() {
		
		this.isLoaded = true;
		this.isIframeLoaded = true;
		
		while (this.iframeQueue.length > 0) {
			var settings = this.iframeQueue.pop();
			this.createIframe(settings);
		}	
	},
	
	// FLASH!
	flashPlayers: {},
	createFlash: function(settings) {
		
		this.flashPlayers[settings.pluginId] = settings;
		
		/*
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + settings.scheme + 'www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
				'<param name="allowScriptAccess" value="sameDomain">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		*/

		var specialIEContainer,
			youtubeUrl = settings.scheme + 'www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';
			
		if (mejs.MediaFeatures.isIE) {
			
			specialIEContainer = document.createElement('div');
			settings.container.appendChild(specialIEContainer);
			specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + settings.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '" class="mejs-shim">' +
	'<param name="movie" value="' + youtubeUrl + '" />' +
	'<param name="wmode" value="transparent" />' +
	'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '" />' +
	'<param name="allowFullScreen" value="true" />' +
'</object>';
		} else {
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
				'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		}		
		
	},
	
	flashReady: function(id) {
		var
			settings = this.flashPlayers[id],
			player = document.getElementById(id),
			pluginMediaElement = settings.pluginMediaElement;
		
		// hook up and return to MediaELementPlayer.success	
		pluginMediaElement.pluginApi = 
		pluginMediaElement.pluginElement = player;
		
		settings.success(pluginMediaElement, pluginMediaElement.pluginElement);
		
		// load the youtube video
		player.cueVideoById(settings.videoId);
		
		var callbackName = settings.containerId + '_callback';
		
		window[callbackName] = function(e) {
			mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
		};
		
		player.addEventListener('onStateChange', callbackName);
		
		setInterval(function() {
			mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
		}, 250);
		
		mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'canplay');
	},
	
	handleStateChange: function(youTubeState, player, pluginMediaElement) {
		switch (youTubeState) {
			case -1: // not started
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
				//createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
				break;
			case 0:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
				break;
			case 1:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
				break;
			case 2:
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
				break;
			case 3: // buffering
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
				break;
			case 5:
				// cued?
				break;						
			
		}			
		
	}
}
// IFRAME
window.onYouTubePlayerAPIReady = function() {
	mejs.YouTubeApi.iFrameReady();
};
// FLASH
window.onYouTubePlayerReady = function(id) {
	mejs.YouTubeApi.flashReady(id);
};

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;

/**
 * Localize strings
 *
 * Include translations from JS files and method to pluralize properly strings.
 *
 */
(function (doc, win, mejs, undefined) {

	var i18n = {
		/**
		 * @type {String}
		 */
		'default': 'en',

		/**
		 * @type {String[]}
		 */
		locale: {
			language: (mejs.i18n && mejs.i18n.locale.language) || '',
			strings: (mejs.i18n && mejs.i18n.locale.strings) || {}
		},

		/**
		 * Filters for available languages.
		 *
		 * This plural forms are grouped in family groups based on
		 * https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#List_of_Plural_Rules
		 * with some additions and corrections according to the Localization Guide list
		 * (http://localization-guide.readthedocs.io/en/latest/l10n/pluralforms.html)
		 *
		 * Arguments are dynamic following the structure:
		 * - argument1 : Number to determine form
		 * - argument2...argumentN: Possible matches
		 *
		 * @type {Function[]}
		 */
		pluralForms: [
			// 0: Chinese, Japanese, Korean, Persian, Turkish, Thai, Lao, Aymará,
			// Tibetan, Chiga, Dzongkha, Indonesian, Lojban, Georgian, Kazakh, Khmer, Kyrgyz, Malay,
			// Burmese, Yakut, Sundanese, Tatar, Uyghur, Vietnamese, Wolof
			function () {
				return arguments[1];
			},
			// 1: Danish, Dutch, English, Faroese, Frisian, German, Norwegian, Swedish, Estonian, Finnish,
			// Hungarian, Basque, Greek, Hebrew, Italian, Portuguese, Spanish, Catalan, Afrikaans,
			// Angika, Assamese, Asturian, Azerbaijani, Bulgarian, Bengali, Bodo, Aragonese, Dogri,
			// Esperanto, Argentinean Spanish, Fulah, Friulian, Galician, Gujarati, Hausa,
			// Hindi, Chhattisgarhi, Armenian, Interlingua, Greenlandic, Kannada, Kurdish, Letzeburgesch,
			// Maithili, Malayalam, Mongolian, Manipuri, Marathi, Nahuatl, Neapolitan, Norwegian Bokmal,
			// Nepali, Norwegian Nynorsk, Norwegian (old code), Northern Sotho, Oriya, Punjabi, Papiamento,
			// Piemontese, Pashto, Romansh, Kinyarwanda, Santali, Scots, Sindhi, Northern Sami, Sinhala,
			// Somali, Songhay, Albanian, Swahili, Tamil, Telugu, Turkmen, Urdu, Yoruba
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else {
					return args[2];
				}
			},
			// 2: French, Brazilian Portuguese, Acholi, Akan, Amharic, Mapudungun, Breton, Filipino,
			// Gun, Lingala, Mauritian Creole, Malagasy, Maori, Occitan, Tajik, Tigrinya, Uzbek, Walloon
			function () {
				var args = arguments;
				if ([0, 1].indexOf(args[0]) > -1) {
					return args[1];
				} else {
					return args[2];
				}
			},
			// 3: Latvian
			function () {
				var args = arguments;
				if (args[0] % 10 === 1 && args[0] % 100 !== 11) {
					return args[1];
				} else if (args[0] !== 0) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 4: Scottish Gaelic
			function () {
				var args = arguments;
				if (args[0] === 1 || args[0] === 11) {
					return args[1];
				} else if (args[0] === 2 || args[0] === 12) {
					return args[2];
				} else if (args[0] > 2 && args[0] < 20) {
					return args[3];
				} else {
					return args[4];
				}
			},
			// 5:  Romanian
			function () {
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] === 0 || (args[0] % 100 > 0 && args[0] % 100 < 20)) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 6: Lithuanian
			function () {
				var args = arguments;
				if (args[0] % 10 === 1 && args[0] % 100 !== 11) {
					return args[1];
				} else if (args[0] % 10 >= 2 && (args[0] % 100 < 10 || args[0] % 100 >= 20)) {
					return args[2];
				} else {
					return [3];
				}
			},
			// 7: Belarusian, Bosnian, Croatian, Serbian, Russian, Ukrainian
			function () {
				var args = arguments;
				if (args[0] % 10 === 1 && args[0] % 100 !== 11) {
					return args[1];
				} else if (args[0] % 10 >= 2 && args[0] % 10 <= 4 && (args[0] % 100 < 10 || args[0] % 100 >= 20)) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 8:  Slovak, Czech
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] >= 2 && args[0] <= 4) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 9: Polish
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] % 10 >= 2 && args[0] % 10 <= 4 && (args[0] % 100 < 10 || args[0] % 100 >= 20)) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 10: Slovenian
			function () {
				var args = arguments;
				if (args[0] % 100 === 1) {
					return args[2];
				} else if (args[0] % 100 === 2) {
					return args[3];
				} else if (args[0] % 100 === 3 || args[0] % 100 === 4) {
					return args[4];
				} else {
					return args[1];
				}
			},
			// 11: Irish Gaelic
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] === 2) {
					return args[2];
				} else if (args[0] > 2 && args[0] < 7) {
					return args[3];
				} else if (args[0] > 6 && args[0] < 11) {
					return args[4];
				} else {
					return args[5];
				}
			},
			// 12: Arabic
			function () {
				var args = arguments;
				if (args[0] === 0) {
					return args[1];
				} else if (args[0] === 1) {
					return args[2];
				} else if (args[0] === 2) {
					return args[3];
				} else if (args[0] % 100 >= 3 && args[0] % 100 <= 10) {
					return args[4];
				} else if (args[0] % 100 >= 11) {
					return args[5];
				} else {
					return args[6];
				}
			},
			// 13: Maltese
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] === 0 || (args[0] % 100 > 1 && args[0] % 100 < 11)) {
					return args[2];
				} else if (args[0] % 100 > 10 && args[0] % 100 < 20) {
					return args[3];
				} else {
					return args[4];
				}

			},
			// 14: Macedonian
			function () {
				var args = arguments;
				if (args[0] % 10 === 1) {
					return args[1];
				} else if (args[0] % 10 === 2) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 15:  Icelandic
			function () {
				var args = arguments;
				if (args[0] !== 11 && args[0] % 10 === 1) {
					return args[1];
				} else {
					return args[2];
				}
			},
			// New additions

			// 16:  Kashubian
			// Note: in https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#List_of_Plural_Rules
			// Breton is listed as #16 but in the Localization Guide it belongs to the group 2
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] % 10 >= 2 && args[0] % 10 <= 4 && (args[0] % 100 < 10 || args[0] % 100 >= 20)) {
					return args[2];
				} else {
					return args[3];
				}
			},
			// 17:  Welsh
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] === 2) {
					return args[2];
				} else if (args[0] !== 8 && args[0] !== 11) {
					return args[3];
				} else {
					return args[4];
				}
			},
			// 18:  Javanese
			function () {
				var args = arguments;
				if (args[0] === 0) {
					return args[1];
				} else {
					return args[2];
				}
			},
			// 19:  Cornish
			function () {
				var args = arguments;
				if (args[0] === 1) {
					return args[1];
				} else if (args[0] === 2) {
					return args[2];
				} else if (args[0] === 3) {
					return args[3];
				} else {
					return args[4];
				}
			},
			// 20:  Mandinka
			function () {
				var args = arguments;
				if (args[0] === 0) {
					return args[1];
				} else if (args[0] === 1) {
					return args[2];
				} else {
					return args[3];
				}
			}
		],
		/**
		 * Get specified language
		 *
		 */
		getLanguage: function () {
			var language = i18n.locale.language || i18n['default'];
			return /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(language) ? language : i18n['default'];
		},

		/**
		 * Translate a string to a specified language, including optionally a number to pluralize translation
		 *
		 * @param {String} message
		 * @param {Number} pluralParam
		 * @return {String}
		 */
		t: function (message, pluralParam) {

			if (typeof message === 'string' && message.length) {

				var
					language = i18n.getLanguage(),
					str,
					pluralForm,
					/**
					 * Modify string using algorithm to detect plural forms.
					 *
					 * @private
					 * @see http://stackoverflow.com/questions/1353408/messageformat-in-javascript-parameters-in-localized-ui-strings
					 * @param {String|String[]} input   - String or array of strings to pick the plural form
					 * @param {Number} number           - Number to determine the proper plural form
					 * @param {Number} form             - Number of language family to apply plural form
					 * @return {String}
					 */
					plural = function (input, number, form) {

						if (typeof input !== 'object' || typeof number !== 'number' || typeof form !== 'number') {
							return input;
						}

						if (typeof input === 'string') {
							return input;
						}

						// Perform plural form or return original text
						return i18n.pluralForms[form].apply(null, [number].concat(input));
					},
					/**
					 *
					 * @param {String} input
					 * @return {String}
					 */
					escapeHTML = function (input) {
						var map = {
							'&': '&amp;',
							'<': '&lt;',
							'>': '&gt;',
							'"': '&quot;'
						};

						return input.replace(/[&<>"]/g, function(c) {
							return map[c];
						});
					}
				;

				// Fetch the localized version of the string
				if (i18n.locale.strings && i18n.locale.strings[language]) {
					str = i18n.locale.strings[language][message];
					if (typeof pluralParam === 'number') {
						pluralForm = i18n.locale.strings[language]['mejs.plural-form'];
						str = plural.apply(null, [str, pluralParam, pluralForm]);
					}
				}

				// Fallback to default language if requested uid is not translated
				if (!str && i18n.locale.strings && i18n.locale.strings[i18n['default']]) {
					str = i18n.locale.strings[i18n['default']][message];
					if (typeof pluralParam === 'number') {
						pluralForm = i18n.locale.strings[i18n['default']]['mejs.plural-form'];
						str = plural.apply(null, [str, pluralParam, pluralForm]);

					}
				}

				// As a last resort, use the requested uid, to mimic original behavior of i18n utils (in which uid was the english text)
				str = str || message;

				// Replace token
				if (typeof pluralParam === 'number') {
					str = str.replace('%1', pluralParam);
				}

				return escapeHTML(str);

			}

			return message;
		}

	};

	// i18n fixes for compatibility with WordPress
	if (typeof mejsL10n !== 'undefined') {
		i18n.locale.language = mejsL10n.language;
	}

	// Register variable
	mejs.i18n = i18n;


}(document, window, mejs));

// i18n fixes for compatibility with WordPress
;(function (mejs, undefined) {

	"use strict";

	if (typeof mejsL10n !== 'undefined') {
		mejs[mejsL10n.lang] = mejsL10n.strings;
	}

}(mejs.i18n.locale.strings));
/*!
 * This is a i18n.locale language object.
 *
 * English; This can serve as a template for other languages to translate
 *
 * @author
 *   TBD
 *   Sascha Greuel (Twitter: @SoftCreatR)
 *
 * @see
 *   me-i18n.js
 *
 * @params
 *  - exports - CommonJS, window ..
 */
(function (exports) {
    "use strict";

    if (exports.en === undefined) {
        exports.en = {
            "mejs.plural-form": 1,

            // me-shim
            "mejs.download-file": "Download File",

            // mep-feature-contextmenu
            "mejs.fullscreen-off": "Turn off Fullscreen",
            "mejs.fullscreen-on": "Go Fullscreen",
            "mejs.download-video": "Download Video",

            // mep-feature-fullscreen
            "mejs.fullscreen": "Fullscreen",

            // mep-feature-jumpforward
            "mejs.time-jump-forward": ["Jump forward 1 second", "Jump forward %1 seconds"],

            // mep-feature-playpause
            "mejs.play": "Play",
            "mejs.pause": "Pause",

            // mep-feature-postroll
            "mejs.close": "Close",

            // mep-feature-progress
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",

            // mep-feature-skipback
            "mejs.time-skip-back": ["Skip back 1 second", "Skip back %1 seconds"],

            // mep-feature-tracks
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.none": "None",

            // mep-feature-volume
            "mejs.mute-toggle": "Mute Toggle",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",

            // mep-player
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",

            // mep-feature-ads
            "mejs.ad-skip": "Skip ad",
            "mejs.ad-skip-info": ["Skip in 1 second", "Skip in %1 seconds"],

            // mep-feature-sourcechooser
            "mejs.source-chooser": "Source Chooser"
        };
    }
}(mejs.i18n.locale.strings));

/*!
 *
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != 'undefined') {
	mejs.$ = jQuery;
} else if (typeof Zepto != 'undefined') {
	mejs.$ = Zepto;

	// define `outerWidth` method which has not been realized in Zepto
	Zepto.fn.outerWidth = function(includeMargin) {
		var width = $(this).width();
		if (includeMargin) {
			width += parseInt($(this).css('margin-right'), 10);
			width += parseInt($(this).css('margin-left'), 10);
		}
		return width
	}

} else if (typeof ender != 'undefined') {
	mejs.$ = ender;
}
(function ($) {

	// default player values
	mejs.MepDefaults = {
		// url to poster (to fix iOS 3.x)
		poster: '',
		// When the video is ended, we can show the poster.
		showPosterWhenEnded: false,
		// default if the <video width> is not specified
		defaultVideoWidth: 480,
		// default if the <video height> is not specified
		defaultVideoHeight: 270,
		// if set, overrides <video width>
		videoWidth: -1,
		// if set, overrides <video height>
		videoHeight: -1,
		// default if the user doesn't specify
		defaultAudioWidth: 400,
		// default if the user doesn't specify
		defaultAudioHeight: 30,
		// default amount to move back when back key is pressed
		defaultSeekBackwardInterval: function(media) {
			return (media.duration * 0.05);
		},
		// default amount to move forward when forward key is pressed
		defaultSeekForwardInterval: function(media) {
			return (media.duration * 0.05);
		},
		// set dimensions via JS instead of CSS
		setDimensions: true,
		// width of audio player
		audioWidth: -1,
		// height of audio player
		audioHeight: -1,
		// initial volume when the player starts (overrided by user cookie)
		startVolume: 0.8,
		// useful for <audio> player loops
		loop: false,
		// rewind to beginning when media ends
		autoRewind: true,
		// resize to media dimensions
		enableAutosize: true,
		/*
		 * Time format to use. Default: 'mm:ss'
		 * Supported units:
		 *   h: hour
		 *   m: minute
		 *   s: second
		 *   f: frame count
		 * When using 'hh', 'mm', 'ss' or 'ff' we always display 2 digits.
		 * If you use 'h', 'm', 's' or 'f' we display 1 digit if possible.
		 *
		 * Example to display 75 seconds:
		 * Format 'mm:ss': 01:15
		 * Format 'm:ss': 1:15
		 * Format 'm:s': 1:15
		 */
		timeFormat: '',
		// forces the hour marker (##:00:00)
		alwaysShowHours: false,
		// show framecount in timecode (##:00:00:00)
		showTimecodeFrameCount: false,
		// used when showTimecodeFrameCount is set to true
		framesPerSecond: 25,
		// automatically calculate the width of the progress bar based on the sizes of other elements
		autosizeProgress : true,
		// Hide controls when playing and mouse is not over the video
		alwaysShowControls: false,
		// Display the video control
		hideVideoControlsOnLoad: false,
		// Enable click video element to toggle play/pause
		clickToPlayPause: true,
		// Time in ms to hide controls
		controlsTimeoutDefault: 1500,
		// Time in ms to trigger the timer when mouse moves
		controlsTimeoutMouseEnter: 2500,
		// Time in ms to trigger the timer when mouse leaves
		controlsTimeoutMouseLeave: 1000,
		// force iPad's native controls
		iPadUseNativeControls: false,
		// force iPhone's native controls
		iPhoneUseNativeControls: false,
		// force Android's native controls
		AndroidUseNativeControls: false,
		// features to show
		features: ['playpause','current','progress','duration','tracks','volume','fullscreen'],
		// only for dynamic
		isVideo: true,
		// stretching modes (auto, fill, responsive, none)
		stretching: 'auto',
		// turns keyboard support on and off for this instance
		enableKeyboard: true,
		// when this player starts, it will pause other players
		pauseOtherPlayers: true,
		// array of keyboard actions such as play pause
		keyActions: [
				{
						keys: [
								32, // SPACE
								179 // GOOGLE play/pause button
								 ],
						action: function(player, media, key, event) {

							if (!mejs.MediaFeatures.isFirefox) {
								if (media.paused || media.ended) {
									media.play();
								} else {
									media.pause();
								}
							}
						}
				},
				{
						keys: [38], // UP
						action: function(player, media, key, event) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}

								var newVolume = Math.min(media.volume + 0.1, 1);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [40], // DOWN
						action: function(player, media, key, event) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}

								var newVolume = Math.max(media.volume - 0.1, 0);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [
								37, // LEFT
								227 // Google TV rewind
						],
						action: function(player, media, key, event) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}

										// 5%
										var newTime = Math.max(media.currentTime - player.options.defaultSeekBackwardInterval(media), 0);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [
								39, // RIGHT
								228 // Google TV forward
						],
						action: function(player, media, key, event) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}

										// 5%
										var newTime = Math.min(media.currentTime + player.options.defaultSeekForwardInterval(media), media.duration);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [70], // F
						action: function(player, media, key, event) {
								if (typeof player.enterFullScreen != 'undefined') {
										if (player.isFullScreen) {
												player.exitFullScreen();
										} else {
												player.enterFullScreen();
										}
								}
						}
				},
				{
						keys: [77], // M
						action: function(player, media, key, event) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}
								if (player.media.muted) {
										player.setMuted(false);
								} else {
										player.setMuted(true);
								}
						}
				}
		]
	};

	mejs.mepIndex = 0;

	mejs.players = {};

	// wraps a MediaElement object in player controls
	mejs.MediaElementPlayer = function(node, o) {
		// enforce object, even without "new" (via John Resig)
		if ( !(this instanceof mejs.MediaElementPlayer) ) {
			return new mejs.MediaElementPlayer(node, o);
		}

		var t = this;

		// these will be reset after the MediaElement.success fires
		t.$media = t.$node = $(node);
		t.node = t.media = t.$media[0];

		if(!t.node) {
			return;
		}

		// check for existing player
		if (typeof t.node.player != 'undefined') {
			return t.node.player;
		}


		// try to get options from data-mejsoptions
		if (typeof o == 'undefined') {
			o = t.$node.data('mejsoptions');
		}

		// extend default options
		t.options = $.extend({},mejs.MepDefaults,o);

		if (!t.options.timeFormat) {
			// Generate the time format according to options
			t.options.timeFormat = 'mm:ss';
			if (t.options.alwaysShowHours) {
				t.options.timeFormat = 'hh:mm:ss';
			}
			if (t.options.showTimecodeFrameCount) {
				t.options.timeFormat += ':ff';
			}
		}

		mejs.Utility.calculateTimeFormat(0, t.options, t.options.framesPerSecond || 25);

		// unique ID
		t.id = 'mep_' + mejs.mepIndex++;

		// add to player array (for focus events)
		mejs.players[t.id] = t;

		// start up
		t.init();

		return t;
	};

	// actual player
	mejs.MediaElementPlayer.prototype = {

		hasFocus: false,

		controlsAreVisible: true,

		init: function() {

			var
				t = this,
				mf = mejs.MediaFeatures,
				// options for MediaElement (shim)
				meOptions = $.extend(true, {}, t.options, {
					success: function(media, domNode) { t.meReady(media, domNode); },
					error: function(e) { t.handleError(e);}
				}),
				tagName = t.media.tagName.toLowerCase();

			t.isDynamic = (tagName !== 'audio' && tagName !== 'video');

			if (t.isDynamic) {
				// get video from src or href?
				t.isVideo = t.options.isVideo;
			} else {
				t.isVideo = (tagName !== 'audio' && t.options.isVideo);
			}

			// use native controls in iPad, iPhone, and Android
			if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {

				// add controls and stop
				t.$media.attr('controls', 'controls');

				// attempt to fix iOS 3 bug
				//t.$media.removeAttr('poster');
								// no Issue found on iOS3 -ttroxell

				// override Apple's autoplay override for iPads
				if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
					t.play();
				}

			} else if (mf.isAndroid && t.options.AndroidUseNativeControls) {

				// leave default player

			} else if (t.isVideo || (!t.isVideo && t.options.features.length)) {

				// DESKTOP: use MediaElementPlayer controls

				// remove native controls
				t.$media.removeAttr('controls');
				var videoPlayerTitle = t.isVideo ?
					mejs.i18n.t('mejs.video-player') : mejs.i18n.t('mejs.audio-player');
				// insert description for screen readers
				$('<span class="mejs-offscreen">' + videoPlayerTitle + '</span>').insertBefore(t.$media);
				// build container
				t.container =
					$('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? 'svg' : 'no-svg') +
					  '" tabindex="0" role="application" aria-label="' + videoPlayerTitle + '">'+
						'<div class="mejs-inner">'+
							'<div class="mejs-mediaelement"></div>'+
							'<div class="mejs-layers"></div>'+
							'<div class="mejs-controls"></div>'+
							'<div class="mejs-clear"></div>'+
						'</div>' +
					'</div>')
					.addClass(t.$media[0].className)
					.insertBefore(t.$media)
					.focus(function ( e ) {
						if( !t.controlsAreVisible && !t.hasFocus && t.controlsEnabled) {
							t.showControls(true);
							// In versions older than IE11, the focus causes the playbar to be displayed
							// if user clicks on the Play/Pause button in the control bar once it attempts
							// to hide it
							if (!t.hasMsNativeFullScreen) {
								// If e.relatedTarget appears before container, send focus to play button,
								// else send focus to last control button.
								var btnSelector = '.mejs-playpause-button > button';

								if (mejs.Utility.isNodeAfter(e.relatedTarget, t.container[0])) {
									btnSelector = '.mejs-controls .mejs-button:last-child > button';
								}

								var button = t.container.find(btnSelector);
								button.focus();
							}
						}
					});

				// When no elements in controls, hide bar completely
				if (!t.options.features.length) {
					t.container.css('background', 'transparent').find('.mejs-controls').hide();
				}
 
				if (t.isVideo && t.options.stretching === 'fill' && !t.container.parent('mejs-fill-container').length) {
					// outer container
					t.outerContainer = t.$media.parent();
					t.container.wrap('<div class="mejs-fill-container"/>');
				}

				// add classes for user and content
				t.container.addClass(
					(mf.isAndroid ? 'mejs-android ' : '') +
					(mf.isiOS ? 'mejs-ios ' : '') +
					(mf.isiPad ? 'mejs-ipad ' : '') +
					(mf.isiPhone ? 'mejs-iphone ' : '') +
					(t.isVideo ? 'mejs-video ' : 'mejs-audio ')
				);


				// move the <video/video> tag into the right spot
				t.container.find('.mejs-mediaelement').append(t.$media);

				// needs to be assigned here, after iOS remap
				t.node.player = t;

				// find parts
				t.controls = t.container.find('.mejs-controls');
				t.layers = t.container.find('.mejs-layers');

				// determine the size

				/* size priority:
					(1) videoWidth (forced),
					(2) style="width;height;"
					(3) width attribute,
					(4) defaultVideoWidth (for unspecified cases)
				*/

				var tagType = (t.isVideo ? 'video' : 'audio'),
					capsTagName = tagType.substring(0,1).toUpperCase() + tagType.substring(1);



				if (t.options[tagType + 'Width'] > 0 || t.options[tagType + 'Width'].toString().indexOf('%') > -1) {
					t.width = t.options[tagType + 'Width'];
				} else if (t.media.style.width !== '' && t.media.style.width !== null) {
					t.width = t.media.style.width;
				} else if (t.media.getAttribute('width') !== null) {
					t.width = t.$media.attr('width');
				} else {
					t.width = t.options['default' + capsTagName + 'Width'];
				}

				if (t.options[tagType + 'Height'] > 0 || t.options[tagType + 'Height'].toString().indexOf('%') > -1) {
					t.height = t.options[tagType + 'Height'];
				} else if (t.media.style.height !== '' && t.media.style.height !== null) {
					t.height = t.media.style.height;
				} else if (t.$media[0].getAttribute('height') !== null) {
					t.height = t.$media.attr('height');
				} else {
					t.height = t.options['default' + capsTagName + 'Height'];
				}

				// set the size, while we wait for the plugins to load below
				t.setPlayerSize(t.width, t.height);

				// create MediaElementShim
				meOptions.pluginWidth = t.width;
				meOptions.pluginHeight = t.height;
			}
			// Hide media completely for audio that doesn't have any features
			else if (!t.isVideo && !t.options.features.length) {
				t.$media.hide();
			}

			// create MediaElement shim
			mejs.MediaElement(t.$media[0], meOptions);

			if (typeof(t.container) !== 'undefined' && t.options.features.length && t.controlsAreVisible) {
				// controls are shown when loaded
				t.container.trigger('controlsshown');
			}
		},

		showControls: function(doAnimation) {
			var t = this;

			doAnimation = typeof doAnimation == 'undefined' || doAnimation;

			if (t.controlsAreVisible)
				return;

			if (doAnimation) {
				t.controls
					.removeClass('mejs-offscreen')
					.stop(true, true).fadeIn(200, function() {
						t.controlsAreVisible = true;
						t.container.trigger('controlsshown');
					});

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.removeClass('mejs-offscreen')
					.stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});

			} else {
				t.controls
					.removeClass('mejs-offscreen')
					.css('display','block');

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.removeClass('mejs-offscreen')
					.css('display','block');

				t.controlsAreVisible = true;
				t.container.trigger('controlsshown');
			}

			t.setControlsSize();

		},

		hideControls: function(doAnimation) {
			var t = this;

			doAnimation = typeof doAnimation == 'undefined' || doAnimation;

			if (!t.controlsAreVisible || t.options.alwaysShowControls || t.keyboardAction || t.media.paused || t.media.ended)
				return;

			if (doAnimation) {
				// fade out main controls
				t.controls.stop(true, true).fadeOut(200, function() {
					$(this)
						.addClass('mejs-offscreen')
						.css('display','block');

					t.controlsAreVisible = false;
					t.container.trigger('controlshidden');
				});

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control').stop(true, true).fadeOut(200, function() {
					$(this)
						.addClass('mejs-offscreen')
						.css('display','block');
				});
			} else {

				// hide main controls
				t.controls
					.addClass('mejs-offscreen')
					.css('display','block');

				// hide others
				t.container.find('.mejs-control')
					.addClass('mejs-offscreen')
					.css('display','block');

				t.controlsAreVisible = false;
				t.container.trigger('controlshidden');
			}
		},

		controlsTimer: null,

		startControlsTimer: function(timeout) {

			var t = this;

			timeout = typeof timeout != 'undefined' ? timeout : t.options.controlsTimeoutDefault;

			t.killControlsTimer('start');

			t.controlsTimer = setTimeout(function() {
				//
				t.hideControls();
				t.killControlsTimer('hide');
			}, timeout);
		},

		killControlsTimer: function(src) {

			var t = this;

			if (t.controlsTimer !== null) {
				clearTimeout(t.controlsTimer);
				delete t.controlsTimer;
				t.controlsTimer = null;
			}
		},

		controlsEnabled: true,

		disableControls: function() {
			var t= this;

			t.killControlsTimer();
			t.hideControls(false);
			this.controlsEnabled = false;
		},

		enableControls: function() {
			var t= this;

			t.showControls(false);

			t.controlsEnabled = true;
		},

		// Sets up all controls and events
		meReady: function(media, domNode) {
			
			var
				t = this,
				mf = mejs.MediaFeatures,
				autoplayAttr = domNode.getAttribute('autoplay'),
				autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
				featureIndex,
				feature;

			// make sure it can't create itself again if a plugin reloads
			if (t.created) {
				return;
			} else {
				t.created = true;
			}

			t.media = media;
			t.domNode = domNode;

			if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {

				// In the event that no features are specified for audio,
				// create only MediaElement instance rather than
				// doing all the work to create a full player
				if (!t.isVideo && !t.options.features.length) {

					// force autoplay for HTML5
					if (autoplay && media.pluginType == 'native') {
						t.play();
					}


					if (t.options.success) {

						if (typeof t.options.success == 'string') {
							window[t.options.success](t.media, t.domNode, t);
						} else {
							t.options.success(t.media, t.domNode, t);
						}
					}

					return;
				}

				// two built in features
				t.buildposter(t, t.controls, t.layers, t.media);
				t.buildkeyboard(t, t.controls, t.layers, t.media);
				t.buildoverlays(t, t.controls, t.layers, t.media);

				// grab for use by features
				t.findTracks();

				// add user-defined features/controls
				for (featureIndex in t.options.features) {
					feature = t.options.features[featureIndex];
					if (t['build' + feature]) {
						try {
							t['build' + feature](t, t.controls, t.layers, t.media);
						} catch (e) {
							// TODO: report control error
							//throw e;
							
							
						}
					}
				}

				t.container.trigger('controlsready');

				// reset all layers and controls
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();


				// controls fade
				if (t.isVideo) {

					if (mejs.MediaFeatures.hasTouch && !t.options.alwaysShowControls) {

						// for touch devices (iOS, Android)
						// show/hide without animation on touch

						t.$media.bind('touchstart', function() {

							// toggle controls
							if (t.controlsAreVisible) {
								t.hideControls(false);
							} else {
								if (t.controlsEnabled) {
									t.showControls(false);
								}
							}
						});

					} else {

						// create callback here since it needs access to current
						// MediaElement object
						t.clickToPlayPauseCallback = function() {
							//

							if (t.options.clickToPlayPause) {
								if (t.media.paused) {
									t.play();
								} else {
									t.pause();
								}

								var button = t.$media.closest('.mejs-container').find('.mejs-overlay-button'),
									pressed = button.attr('aria-pressed');
								button.attr('aria-pressed', !pressed);
							}
						};

						// click to play/pause
						t.media.addEventListener('click', t.clickToPlayPauseCallback, false);

						// show/hide controls
						t.container
							.bind('mouseenter', function () {
								if (t.controlsEnabled) {
									if (!t.options.alwaysShowControls ) {
										t.killControlsTimer('enter');
										t.showControls();
										t.startControlsTimer(t.options.controlsTimeoutMouseEnter);
									}
								}
							})
							.bind('mousemove', function() {
								if (t.controlsEnabled) {
									if (!t.controlsAreVisible) {
										t.showControls();
									}
									if (!t.options.alwaysShowControls) {
										t.startControlsTimer(t.options.controlsTimeoutMouseEnter);
									}
								}
							})
							.bind('mouseleave', function () {
								if (t.controlsEnabled) {
									if (!t.media.paused && !t.options.alwaysShowControls) {
										t.startControlsTimer(t.options.controlsTimeoutMouseLeave);
									}
								}
							});
					}

					if(t.options.hideVideoControlsOnLoad) {
						t.hideControls(false);
					}

					// check for autoplay
					if (autoplay && !t.options.alwaysShowControls) {
						t.hideControls();
					}

					// resizer
					if (t.options.enableAutosize) {
						t.media.addEventListener('loadedmetadata', function(e) {
							// if the <video height> was not set and the options.videoHeight was not set
							// then resize to the real dimensions
							if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
								t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
								t.setControlsSize();
								t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
							}
						}, false);
					}
				}

				// EVENTS

				// FOCUS: when a video starts playing, it takes focus from other players (possibly pausing them)
				t.media.addEventListener('play', function() {
					var playerIndex;

					// go through all other players
					for (playerIndex in mejs.players) {
						var p = mejs.players[playerIndex];
						if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
							p.pause();
						}
						p.hasFocus = false;
					}

					t.hasFocus = true;
				},false);


				// ended for all
				t.media.addEventListener('ended', function (e) {
					if(t.options.autoRewind) {
						try{
							t.media.setCurrentTime(0);
							// Fixing an Android stock browser bug, where "seeked" isn't fired correctly after ending the video and jumping to the beginning
							window.setTimeout(function(){
								$(t.container).find('.mejs-overlay-loading').parent().hide();
							}, 20);
						} catch (exp) {

						}
					}
					if (t.media.pluginType === 'youtube') {
						t.media.stop();
					} else {
						t.media.pause();
					}

					if (t.setProgressRail) {
						t.setProgressRail();
					}
					if (t.setCurrentRail) {
						t.setCurrentRail();
					}

					if (t.options.loop) {
						t.play();
					} else if (!t.options.alwaysShowControls && t.controlsEnabled) {
						t.showControls();
					}
				}, false);

				// resize on the first play
				t.media.addEventListener('loadedmetadata', function() {

					mejs.Utility.calculateTimeFormat(t.duration, t.options, t.options.framesPerSecond || 25);

					if (t.updateDuration) {
						t.updateDuration();
					}
					if (t.updateCurrent) {
						t.updateCurrent();
					}

					if (!t.isFullScreen) {
						t.setPlayerSize(t.width, t.height);
						t.setControlsSize();
					}
				}, false);

				// Only change the time format when necessary
				var duration = null;
				t.media.addEventListener('timeupdate',function() {
					if (duration !== this.duration) {
						duration = this.duration;
						mejs.Utility.calculateTimeFormat(duration, t.options, t.options.framesPerSecond || 25);
						
						// make sure to fill in and resize the controls (e.g., 00:00 => 01:13:15
						if (t.updateDuration) {
							t.updateDuration();
						}
						if (t.updateCurrent) {
							t.updateCurrent();
						}
						t.setControlsSize();
						
					}
				}, false);

				t.container.focusout(function (e) {
					if( e.relatedTarget ) { //FF is working on supporting focusout https://bugzilla.mozilla.org/show_bug.cgi?id=687787
						var $target = $(e.relatedTarget);
						if (t.keyboardAction && $target.parents('.mejs-container').length === 0) {
							t.keyboardAction = false;
							if (t.isVideo && !t.options.alwaysShowControls) {
								t.hideControls(true);
							}

						}
					}
				});

				// webkit has trouble doing this without a delay
				setTimeout(function () {
					t.setPlayerSize(t.width, t.height);
					t.setControlsSize();
				}, 50);

				// adjust controls whenever window sizes (used to be in fullscreen only)
				t.globalBind('resize', function() {

					// don't resize for fullscreen mode
					if ( !(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) ) {
						t.setPlayerSize(t.width, t.height);
					}

					// always adjust controls
					t.setControlsSize();
				});

				// This is a work-around for a bug in the YouTube iFrame player, which means
				//	we can't use the play() API for the initial playback on iOS or Android;
				//	user has to start playback directly by tapping on the iFrame.
				if (t.media.pluginType == 'youtube' && ( mf.isiOS || mf.isAndroid ) ) {
					t.container.find('.mejs-overlay-play').hide();
					t.container.find('.mejs-poster').hide();
				}
			}

			// force autoplay for HTML5
			if (autoplay && media.pluginType == 'native') {
				t.play();
			}


			if (t.options.success) {

				if (typeof t.options.success == 'string') {
					window[t.options.success](t.media, t.domNode, t);
				} else {
					t.options.success(t.media, t.domNode, t);
				}
			}
		},

		handleError: function(e) {
			var t = this;

			if (t.controls) {
				t.controls.hide();
			}

			// Tell user that the file cannot be played
			if (t.options.error) {
				t.options.error(e);
			}
		},

		setPlayerSize: function(width,height) {
			var t = this;

			if( !t.options.setDimensions ) {
				return false;
			}

			if (typeof width != 'undefined') {
				t.width = width;
			}

			if (typeof height != 'undefined') {
				t.height = height;
			}
 
			// check stretching modes
			switch (t.options.stretching) {
				case 'fill':
					// The 'fill' effect only makes sense on video; for audio we will set the dimensions
					if (t.isVideo) {
						this.setFillMode();
					} else {
						this.setDimensions(t.width, t.height);
					}
					break;
				case 'responsive':
					this.setResponsiveMode();
					break;
				case 'none':
					this.setDimensions(t.width, t.height);
					break;
				// This is the 'auto' mode
				default:
					if (this.hasFluidMode() === true) {
						this.setResponsiveMode();
					} else {
						this.setDimensions(t.width, t.height);
					}
					break;
			}
		},
 
		hasFluidMode: function() {
			var t = this;
	 
			// detect 100% mode - use currentStyle for IE since css() doesn't return percentages
			return (t.height.toString().indexOf('%') > 0 || (t.$node.css('max-width') !== 'none' && t.$node.css('max-width') !== 't.width') || (t.$node[0].currentStyle && t.$node[0].currentStyle.maxWidth === '100%'));
		},
 
		setResponsiveMode: function() {
			var t = this;
		
			// do we have the native dimensions yet?
			var nativeWidth = (function() {
				if (t.isVideo) {
					if (t.media.videoWidth && t.media.videoWidth > 0) {
						return t.media.videoWidth;
					} else if (t.media.getAttribute('width') !== null) {
						return t.media.getAttribute('width');
					} else {
						return t.options.defaultVideoWidth;
					}
				} else {
					return t.options.defaultAudioWidth;
				}
			})();
		
			var nativeHeight = (function() {
				if (t.isVideo) {
					if (t.media.videoHeight && t.media.videoHeight > 0) {
						return t.media.videoHeight;
					} else if (t.media.getAttribute('height') !== null) {
						return t.media.getAttribute('height');
					} else {
						return t.options.defaultVideoHeight;
					}
				} else {
					return t.options.defaultAudioHeight;
				}
			})();
		
			var parentWidth = t.container.parent().closest(':visible').width(),
			parentHeight = t.container.parent().closest(':visible').height(),
			newHeight = t.isVideo || !t.options.autosizeProgress ? parseInt(parentWidth * nativeHeight/nativeWidth, 10) : nativeHeight;
			
			// When we use percent, the newHeight can't be calculated so we get the container height
			if (isNaN(newHeight) || ( parentHeight !== 0 && newHeight > parentHeight && parentHeight > nativeHeight)) {
				newHeight = parentHeight;
			}
		
			if (t.container.parent().length > 0 && t.container.parent()[0].tagName.toLowerCase() === 'body') { // && t.container.siblings().count == 0) {
				parentWidth = $(window).width();
				newHeight = $(window).height();
			}
		
			if ( newHeight && parentWidth ) {
			
				// set outer container size
				t.container
					.width(parentWidth)
					.height(newHeight);
				
				// set native <video> or <audio> and shims
				t.$media.add(t.container.find('.mejs-shim'))
					.width('100%')
					.height('100%');
				
				// if shim is ready, send the size to the embeded plugin
				if (t.isVideo) {
					if (t.media.setVideoSize) {
						t.media.setVideoSize(parentWidth, newHeight);
					}
				}
		
				// set the layers
				t.layers.children('.mejs-layer')
					.width('100%')
					.height('100%');
			}
		},
 
		setFillMode: function() {
			var t = this,
				parent = t.outerContainer;
 
			if (!parent.width()) {
				parent.height(t.$media.width());
			}
 
			if (!parent.height()) {
				parent.height(t.$media.height());
			}
 
			var parentWidth = parent.width(),
				parentHeight = parent.height();
			
			t.setDimensions('100%', '100%');
			
			// This prevents an issue when displaying poster
			t.container.find('.mejs-poster img').css('display', 'block');
			
			targetElement = t.container.find('object, embed, iframe, video');
			
			// calculate new width and height
			var initHeight = t.height,
				initWidth = t.width,
				// scale to the target width
				scaleX1 = parentWidth,
				scaleY1 = (initHeight * parentWidth) / initWidth,
				// scale to the target height
				scaleX2 = (initWidth * parentHeight) / initHeight,
				scaleY2 = parentHeight,
				// now figure out which one we should use
				bScaleOnWidth = !(scaleX2 > parentWidth),
				finalWidth = bScaleOnWidth ? Math.floor(scaleX1) : Math.floor(scaleX2),
				finalHeight = bScaleOnWidth ? Math.floor(scaleY1) : Math.floor(scaleY2);
			
			if (bScaleOnWidth) {
				targetElement.height(finalHeight).width(parentWidth);
				if (t.media.setVideoSize) {
					t.media.setVideoSize(parentWidth, finalHeight);
				}
			} else {
				targetElement.height(parentHeight).width(finalWidth);
				if (t.media.setVideoSize) {
					t.media.setVideoSize(finalWidth, parentHeight);
				}
			}
			
			targetElement.css({
				'margin-left': Math.floor((parentWidth - finalWidth) / 2),
				'margin-top': 0
			});
		},
	 
		setDimensions: function(width, height) {
			var t = this;
			
			t.container
				.width(width)
				.height(height);
			
			t.layers.children('.mejs-layer')
				.width(width)
				.height(height);
		},

		setControlsSize: function() {
			var t = this,
				usedWidth = 0,
				railWidth = 0,
				rail = t.controls.find('.mejs-time-rail'),
				total = t.controls.find('.mejs-time-total'),
				others = rail.siblings(),
				lastControl = others.last(),
				lastControlPosition = null,
				avoidAutosizeProgress = t.options && !t.options.autosizeProgress;

			// skip calculation if hidden
			if (!t.container.is(':visible') || !rail.length || !rail.is(':visible')) {
				return;
			}

			// allow the size to come from custom CSS
			if (avoidAutosizeProgress) {
				// Also, frontends devs can be more flexible
				// due the opportunity of absolute positioning.
				railWidth = parseInt(rail.css('width'), 10);
			}

			// attempt to autosize
			if (railWidth === 0 || !railWidth) {

				// find the size of all the other controls besides the rail
				others.each(function() {
					var $this = $(this);
					if ($this.css('position') != 'absolute' && $this.is(':visible')) {
						usedWidth += $(this).outerWidth(true);
					}
				});

				// fit the rail into the remaining space
				railWidth = t.controls.width() - usedWidth - (rail.outerWidth(true) - rail.width());
			}

			// resize the rail,
			// but then check if the last control (say, the fullscreen button) got pushed down
			// this often happens when zoomed
			do {
				// outer area
				// we only want to set an inline style with the width of the rail
				// if we're trying to autosize.
				if (!avoidAutosizeProgress) {
					rail.width(railWidth);
				}

				// dark space
				total.width(railWidth - (total.outerWidth(true) - total.width()));

				if (lastControl.css('position') != 'absolute') {
					lastControlPosition = lastControl.length ? lastControl.position() : null;
					railWidth--;
				}
			} while (lastControlPosition !== null && lastControlPosition.top.toFixed(2) > 0 && railWidth > 0);

			t.container.trigger('controlsresize');
		},


		buildposter: function(player, controls, layers, media) {
			var t = this,
				poster =
				$('<div class="mejs-poster mejs-layer">' +
				'</div>')
					.appendTo(layers),
				posterUrl = player.$media.attr('poster');

			// prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
			if (player.options.poster !== '') {
				posterUrl = player.options.poster;
			}

			// second, try the real poster
			if ( posterUrl ) {
				t.setPoster(posterUrl);
			} else {
				poster.hide();
			}

			media.addEventListener('play',function() {
				poster.hide();
			}, false);

			if(player.options.showPosterWhenEnded && player.options.autoRewind){
				media.addEventListener('ended',function() {
					poster.show();
				}, false);
			}
		},

		setPoster: function(url) {
			var t = this,
				posterDiv = t.container.find('.mejs-poster'),
				posterImg = posterDiv.find('img');

			if (posterImg.length === 0) {
				posterImg = $('<img width="100%" height="100%" alt="" />').appendTo(posterDiv);
			}

			posterImg.attr('src', url);
			posterDiv.css({'background-image' : 'url(' + url + ')'});
		},

		buildoverlays: function(player, controls, layers, media) {
			var t = this;
			if (!player.isVideo)
				return;

			var
			loading =
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-loading"><span></span></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			error =
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-error"></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			// this needs to come last so it's on top
			bigPlay =
				$('<div class="mejs-overlay mejs-layer mejs-overlay-play">'+
					'<div class="mejs-overlay-button" role="button" aria-label="' + mejs.i18n.t('mejs.play') + '" aria-pressed="false"></div>'+
				'</div>')
				.appendTo(layers)
				.bind('click', function() {	 // Removed 'touchstart' due issues on Samsung Android devices where a tap on bigPlay started and immediately stopped the video
					if (t.options.clickToPlayPause) {
						if (media.paused) {
							media.play();
						}

						var button = $(this).find('.mejs-overlay-button'),
							pressed = button.attr('aria-pressed');
						button.attr('aria-pressed', !!pressed);
					}
				});

			/*
			if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
				bigPlay.remove();
				loading.remove();
			}
			*/


			// show/hide big play button
			media.addEventListener('play',function() {
				bigPlay.hide();
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
				error.hide();
			}, false);

			media.addEventListener('playing', function() {
				bigPlay.hide();
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
				error.hide();
			}, false);

			media.addEventListener('seeking', function() {
				loading.show();
				controls.find('.mejs-time-buffering').show();
			}, false);

			media.addEventListener('seeked', function() {
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
			}, false);

			media.addEventListener('pause',function() {
				if (!mejs.MediaFeatures.isiPhone) {
					bigPlay.show();
				}
			}, false);

			media.addEventListener('waiting', function() {
				loading.show();
				controls.find('.mejs-time-buffering').show();
			}, false);


			// show/hide loading
			media.addEventListener('loadeddata',function() {
				// for some reason Chrome is firing this event
				//if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
				//	return;

				loading.show();
				controls.find('.mejs-time-buffering').show();
				// Firing the 'canplay' event after a timeout which isn't getting fired on some Android 4.1 devices (https://github.com/johndyer/mediaelement/issues/1305)
				if (mejs.MediaFeatures.isAndroid) {
					media.canplayTimeout = window.setTimeout(
						function() {
							if (document.createEvent) {
								var evt = document.createEvent('HTMLEvents');
								evt.initEvent('canplay', true, true);
								return media.dispatchEvent(evt);
							}
						}, 300
					);
				}
			}, false);
			media.addEventListener('canplay',function() {
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
				clearTimeout(media.canplayTimeout); // Clear timeout inside 'loadeddata' to prevent 'canplay' to fire twice
			}, false);

			// error handling
			media.addEventListener('error',function(e) {
				t.handleError(e);
				loading.hide();
				bigPlay.hide();
				error.show();
				error.find('.mejs-overlay-error').html("Error loading this resource");
			}, false);

			media.addEventListener('keydown', function(e) {
				t.onkeydown(player, media, e);
			}, false);
		},

		buildkeyboard: function(player, controls, layers, media) {

				var t = this;

				t.container.keydown(function () {
					t.keyboardAction = true;
				});

				// listen for key presses
				t.globalBind('keydown', function(event) {
					player.hasFocus = $(event.target).closest('.mejs-container').length !== 0
						&& $(event.target).closest('.mejs-container').attr('id') === player.$media.closest('.mejs-container').attr('id');
					return t.onkeydown(player, media, event);
				});


				// check if someone clicked outside a player region, then kill its focus
				t.globalBind('click', function(event) {
					player.hasFocus = $(event.target).closest('.mejs-container').length !== 0;
				});

		},
		onkeydown: function(player, media, e) {
			if (player.hasFocus && player.options.enableKeyboard) {
				// find a matching key
				for (var i = 0, il = player.options.keyActions.length; i < il; i++) {
					var keyAction = player.options.keyActions[i];

					for (var j = 0, jl = keyAction.keys.length; j < jl; j++) {
						if (e.keyCode == keyAction.keys[j]) {
							if (typeof(e.preventDefault) == "function") e.preventDefault();
							keyAction.action(player, media, e.keyCode, e);
							return false;
						}
					}
				}
			}

			return true;
		},

		findTracks: function() {
			var t = this,
				tracktags = t.$media.find('track');

			// store for use by plugins
			t.tracks = [];
			tracktags.each(function(index, track) {

				track = $(track);

				t.tracks.push({
					srclang: (track.attr('srclang')) ? track.attr('srclang').toLowerCase() : '',
					src: track.attr('src'),
					kind: track.attr('kind'),
					label: track.attr('label') || '',
					entries: [],
					isLoaded: false
				});
			});
		},
		changeSkin: function(className) {
			this.container[0].className = 'mejs-container ' + className;
			this.setPlayerSize(this.width, this.height);
			this.setControlsSize();
		},
		play: function() {
			this.load();
			this.media.play();
		},
		pause: function() {
			try {
				this.media.pause();
			} catch (e) {}
		},
		load: function() {
			if (!this.isLoaded) {
				this.media.load();
			}

			this.isLoaded = true;
		},
		setMuted: function(muted) {
			this.media.setMuted(muted);
		},
		setCurrentTime: function(time) {
			this.media.setCurrentTime(time);
		},
		getCurrentTime: function() {
			return this.media.currentTime;
		},
		setVolume: function(volume) {
			this.media.setVolume(volume);
		},
		getVolume: function() {
			return this.media.volume;
		},
		setSrc: function(src) {
			var
				t = this;

			// If using YouTube, its API is different to load a specific source
			if (t.media.pluginType === 'youtube') {
				var videoId;

				if (typeof src !== 'string') {
					var i, media;

					for (i=0; i<src.length; i++) {
						media = src[i];
						if (this.canPlayType(media.type)) {
							src = media.src;
							break;
						}
					}
				}

				// youtu.be url from share button
				if (src.lastIndexOf('youtu.be') !== -1) {
					videoId = src.substr(src.lastIndexOf('/') + 1);

					if (videoId.indexOf('?') !== -1) {
						videoId = videoId.substr(0, videoId.indexOf('?'));
					}

				} else {
					// https://www.youtube.com/watch?v=
					var videoIdMatch = src.match(/[?&]v=([^&#]+)|&|#|$/);

					if (videoIdMatch) {
						videoId = videoIdMatch[1];
					}
				}

				if (t.media.getAttribute('autoplay') !== null) {
					t.media.pluginApi.loadVideoById(videoId);
				} else {
					t.media.pluginApi.cueVideoById(videoId);
				}

			}
			else {
				t.media.setSrc(src);
			}
		},
		remove: function() {
			var t = this, featureIndex, feature;

			t.container.prev('.mejs-offscreen').remove();

			// invoke features cleanup
			for (featureIndex in t.options.features) {
				feature = t.options.features[featureIndex];
				if (t['clean' + feature]) {
					try {
						t['clean' + feature](t);
					} catch (e) {
						// TODO: report control error
						//throw e;
						//
						//
					}
				}
			}

			// grab video and put it back in place
			if (!t.isDynamic) {
				t.$media.prop('controls', true);
				// detach events from the video
				// TODO: detach event listeners better than this;
				//		 also detach ONLY the events attached by this plugin!
				t.$node.clone().insertBefore(t.container).show();
				t.$node.remove();
			} else {
				t.$node.insertBefore(t.container);
			}

			if (t.media.pluginType !== 'native') {
				t.media.remove();
			}

			// Remove the player from the mejs.players object so that pauseOtherPlayers doesn't blow up when trying to pause a non existance flash api.
			delete mejs.players[t.id];

			if (typeof t.container == 'object') {
				t.container.remove();
			}
			t.globalUnbind();
			delete t.node.player;
		},
		rebuildtracks: function(){
			var t = this;
			t.findTracks();
			t.buildtracks(t, t.controls, t.layers, t.media);
		},
		resetSize: function(){
			var t = this;
			// webkit has trouble doing this without a delay
			setTimeout(function () {
				//
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();
			}, 50);
		}
	};

	(function(){
		var rwindow = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;

		function splitEvents(events, id) {
			// add player ID as an event namespace so it's easier to unbind them all later
			var ret = {d: [], w: []};
			$.each((events || '').split(' '), function(k, v){
				var eventname = v + '.' + id;
				if (eventname.indexOf('.') === 0) {
					ret.d.push(eventname);
					ret.w.push(eventname);
				}
				else {
					ret[rwindow.test(v) ? 'w' : 'd'].push(eventname);
				}
			});
			ret.d = ret.d.join(' ');
			ret.w = ret.w.join(' ');
			return ret;
		}

		mejs.MediaElementPlayer.prototype.globalBind = function(events, data, callback) {
			var t = this;
			var doc = t.node ? t.node.ownerDocument : document;

			events = splitEvents(events, t.id);
			if (events.d) $(doc).bind(events.d, data, callback);
			if (events.w) $(window).bind(events.w, data, callback);
		};

		mejs.MediaElementPlayer.prototype.globalUnbind = function(events, callback) {
			var t = this;
			var doc = t.node ? t.node.ownerDocument : document;

			events = splitEvents(events, t.id);
			if (events.d) $(doc).unbind(events.d, callback);
			if (events.w) $(window).unbind(events.w, callback);
		};
	})();

	// turn into jQuery plugin
	if (typeof $ != 'undefined') {
		$.fn.mediaelementplayer = function (options) {
			if (options === false) {
				this.each(function () {
					var player = $(this).data('mediaelementplayer');
					if (player) {
						player.remove();
					}
					$(this).removeData('mediaelementplayer');
				});
			}
			else {
				this.each(function () {
					$(this).data('mediaelementplayer', new mejs.MediaElementPlayer(this, options));
				});
			}
			return this;
		};


		$(document).ready(function() {
			// auto enable using JSON attribute
			$('.mejs-player').mediaelementplayer();
		});
	}

	// push out to window
	window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		playText: '',
		pauseText: ''
	});


	// PLAY/pause BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildplaypause: function(player, controls, layers, media) {
			var 
				t = this,
				op = t.options,
				playTitle = op.playText ? op.playText : mejs.i18n.t('mejs.play'),
				pauseTitle = op.pauseText ? op.pauseText : mejs.i18n.t('mejs.pause'),
				play =
				$('<div class="mejs-button mejs-playpause-button mejs-play" >' +
					'<button type="button" aria-controls="' + t.id + '" title="' + playTitle + '" aria-label="' + pauseTitle + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function(e) {
					e.preventDefault();
				
					if (media.paused) {
						media.play();
					} else {
						media.pause();
					}
					
					return false;
				}),
				play_btn = play.find('button');


			function togglePlayPause(which) {
				if ('play' === which) {
					play.removeClass('mejs-play').addClass('mejs-pause');
					play_btn.attr({
						'title': pauseTitle,
						'aria-label': pauseTitle
					});
				} else {
					play.removeClass('mejs-pause').addClass('mejs-play');
					play_btn.attr({
						'title': playTitle,
						'aria-label': playTitle
					});
				}
			};
			togglePlayPause('pse');


			media.addEventListener('play',function() {
				togglePlayPause('play');
			}, false);
			media.addEventListener('playing',function() {
				togglePlayPause('play');
			}, false);


			media.addEventListener('pause',function() {
				togglePlayPause('pse');
			}, false);
			media.addEventListener('paused',function() {
				togglePlayPause('pse');
			}, false);
		}
	});
	
})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		stopText: 'Stop'
	});

	// STOP BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildstop: function(player, controls, layers, media) {
			var t = this;

			$('<div class="mejs-button mejs-stop-button mejs-stop">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '" aria-label="' + t.options.stopText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function() {
					if (!media.paused) {
						media.pause();
					}
					if (media.currentTime > 0) {
						media.setCurrentTime(0);
                        media.pause();
						controls.find('.mejs-time-current').width('0px');
						controls.find('.mejs-time-handle').css('left', '0px');
						controls.find('.mejs-time-float-current').html( mejs.Utility.secondsToTimeCode(0, player.options));
						controls.find('.mejs-currenttime').html( mejs.Utility.secondsToTimeCode(0, player.options));
						layers.find('.mejs-poster').show();
					}
				});
		}
	});
	
})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		// Enable tooltip that shows time in progress bar
		enableProgressTooltip: true,
		progressHelpText: ''
	});

	// progress/loaded bar
	$.extend(MediaElementPlayer.prototype, {
		buildprogress: function(player, controls, layers, media) {

			var
				t = this,
				mouseIsDown = false,
				mouseIsOver = false,
				lastKeyPressTime = 0,
				startedPaused = false,
				autoRewindInitial = player.options.autoRewind,
				progressTitle = t.options.progressHelpText ? t.options.progressHelpText : mejs.i18n.t('mejs.time-help-text'),
				tooltip = player.options.enableProgressTooltip ? '<span class="mejs-time-float">' +
					'<span class="mejs-time-float-current">00:00</span>' +
					'<span class="mejs-time-float-corner"></span>' +
				'</span>' : "";

			$('<div class="mejs-time-rail">' +
				'<span  class="mejs-time-total mejs-time-slider">' +
				//'<span class="mejs-offscreen">' + progressTitle + '</span>' +
					'<span class="mejs-time-buffering"></span>' +
					'<span class="mejs-time-loaded"></span>' +
					'<span class="mejs-time-current"></span>' +
					'<span class="mejs-time-handle"></span>' +
					 tooltip +
				'</span>' +
			'</div>')
				.appendTo(controls);
			controls.find('.mejs-time-buffering').hide();

			t.total = controls.find('.mejs-time-total');
			t.loaded  = controls.find('.mejs-time-loaded');
			t.current  = controls.find('.mejs-time-current');
			t.handle  = controls.find('.mejs-time-handle');
			t.timefloat  = controls.find('.mejs-time-float');
			t.timefloatcurrent  = controls.find('.mejs-time-float-current');
			t.slider = controls.find('.mejs-time-slider');

			var handleMouseMove = function (e) {

					var offset = t.total.offset(),
						width = t.total.width(),
						percentage = 0,
						newTime = 0,
						pos = 0,
						x;

					// mouse or touch position relative to the object
					if (e.originalEvent && e.originalEvent.changedTouches) {
						x = e.originalEvent.changedTouches[0].pageX;
					} else if (e.changedTouches) { // for Zepto
						x = e.changedTouches[0].pageX;
					} else {
						x = e.pageX;
					}

					if (media.duration) {
						if (x < offset.left) {
							x = offset.left;
						} else if (x > width + offset.left) {
							x = width + offset.left;
						}

						pos = x - offset.left;
						percentage = (pos / width);
						newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

						// seek to where the mouse is
						if (mouseIsDown && newTime !== media.currentTime) {
							media.setCurrentTime(newTime);
						}

						// position floating time box
						if (!mejs.MediaFeatures.hasTouch) {
							t.timefloat.css('left', pos);
							t.timefloatcurrent.html( mejs.Utility.secondsToTimeCode(newTime, player.options) );
							t.timefloat.show();
						}
					}
				},
				// Accessibility for slider
				updateSlider = function (e) {

					var seconds = media.currentTime,
						timeSliderText = mejs.i18n.t('mejs.time-slider'),
						time = mejs.Utility.secondsToTimeCode(seconds, player.options),
						duration = media.duration;

					t.slider.attr({
						'aria-label': timeSliderText,
						'aria-valuemin': 0,
						'aria-valuemax': duration,
						'aria-valuenow': seconds,
						'aria-valuetext': time,
						'role': 'slider',
						'tabindex': 0
					});

				},
				restartPlayer = function () {
					var now = new Date();
					if (now - lastKeyPressTime >= 1000) {
						media.play();
					}
				};

			t.slider.bind('focus', function (e) {
				player.options.autoRewind = false;
			});

			t.slider.bind('blur', function (e) {
				player.options.autoRewind = autoRewindInitial;
			});

			t.slider.bind('keydown', function (e) {

				if ((new Date() - lastKeyPressTime) >= 1000) {
					startedPaused = media.paused;
				}

				var keyCode = e.keyCode,
					duration = media.duration,
					seekTime = media.currentTime,
					seekForward  = player.options.defaultSeekForwardInterval(media),
					seekBackward = player.options.defaultSeekBackwardInterval(media);

				switch (keyCode) {
					case 37: // left
					case 40: // Down
						seekTime -= seekBackward;
						break;
					case 39: // Right
					case 38: // Up
						seekTime += seekForward;
						break;
					case 36: // Home
						seekTime = 0;
						break;
					case 35: // end
						seekTime = duration;
						break;
					case 32: // space
					case 13: // enter
						media.paused ? media.play() : media.pause();
						return;
					default:
						return;
				}

				seekTime = seekTime < 0 ? 0 : (seekTime >= duration ? duration : Math.floor(seekTime));
				lastKeyPressTime = new Date();
				if (!startedPaused) {
					media.pause();
				}

				if (seekTime < media.duration && !startedPaused) {
					setTimeout(restartPlayer, 1100);
				}

				media.setCurrentTime(seekTime);

				e.preventDefault();
				e.stopPropagation();
				return false;
			});


			// handle clicks
			//controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
			t.total
				.bind('mousedown touchstart', function (e) {
					// only handle left clicks or touch
					if (e.which === 1 || e.which === 0) {
						mouseIsDown = true;
						handleMouseMove(e);
						t.globalBind('mousemove.dur touchmove.dur', function(e) {
							handleMouseMove(e);
						});
						t.globalBind('mouseup.dur touchend.dur', function (e) {
							mouseIsDown = false;
							if (typeof t.timefloat !== 'undefined') {
								t.timefloat.hide();
							}
							t.globalUnbind('.dur');
						});
					}
				})
				.bind('mouseenter', function(e) {
					mouseIsOver = true;
					t.globalBind('mousemove.dur', function(e) {
						handleMouseMove(e);
					});
					if (typeof t.timefloat !== 'undefined' && !mejs.MediaFeatures.hasTouch) {
						t.timefloat.show();
					}
				})
				.bind('mouseleave',function(e) {
					mouseIsOver = false;
					if (!mouseIsDown) {
						t.globalUnbind('.dur');
						if (typeof t.timefloat !== 'undefined') {
							t.timefloat.hide();
						}
					}
				});

			// loading
			media.addEventListener('progress', function (e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
			}, false);

			// current time
			media.addEventListener('timeupdate', function(e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
				updateSlider(e);
			}, false);

			t.container.on('controlsresize', function(e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
			});
		},
		setProgressRail: function(e) {

			var
				t = this,
				target = (e !== undefined) ? e.target : t.media,
				percent = null;

			// newest HTML5 spec has buffered array (FF4, Webkit)
			if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
				// account for a real array with multiple values - always read the end of the last buffer
				percent = target.buffered.end(target.buffered.length - 1) / target.duration;
			} 
			// Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
			// to be anything other than 0. If the byte count is available we use this instead.
			// Browsers that support the else if do not seem to have the bufferedBytes value and
			// should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
			else if (target && target.bytesTotal !== undefined && target.bytesTotal > 0 && target.bufferedBytes !== undefined) {
				percent = target.bufferedBytes / target.bytesTotal;
			}
			// Firefox 3 with an Ogg file seems to go this way
			else if (e && e.lengthComputable && e.total !== 0) {
				percent = e.loaded / e.total;
			}

			// finally update the progress bar
			if (percent !== null) {
				percent = Math.min(1, Math.max(0, percent));
				// update loaded bar
				if (t.loaded && t.total) {
					t.loaded.width(t.total.width() * percent);
				}
			}
		},
		setCurrentRail: function() {

			var t = this;
		
			if (t.media.currentTime !== undefined && t.media.duration) {

				// update bar and handle
				if (t.total && t.handle) {
					var 
						newWidth = Math.round(t.total.width() * t.media.currentTime / t.media.duration),
						handlePos = newWidth - Math.round(t.handle.outerWidth(true) / 2);

					t.current.width(newWidth);
					t.handle.css('left', handlePos);
				}
			}

		}
	});
})(mejs.$);

(function($) {
	
	// options
	$.extend(mejs.MepDefaults, {
		duration: -1,
		timeAndDurationSeparator: '<span> | </span>'
	});


	// current and duration 00:00 / 00:00
	$.extend(MediaElementPlayer.prototype, {
		buildcurrent: function(player, controls, layers, media) {
			var t = this;
			
			$('<div class="mejs-time" role="timer" aria-live="off">' +
					'<span class="mejs-currenttime">' + 
						mejs.Utility.secondsToTimeCode(0, player.options) +
                    '</span>'+
				'</div>')
			.appendTo(controls);
			
			t.currenttime = t.controls.find('.mejs-currenttime');

			media.addEventListener('timeupdate',function() {
				if (t.controlsAreVisible) {
					player.updateCurrent();
				}

			}, false);
		},


		buildduration: function(player, controls, layers, media) {
			var t = this;
			
			if (controls.children().last().find('.mejs-currenttime').length > 0) {
				$(t.options.timeAndDurationSeparator +
					'<span class="mejs-duration">' + 
						mejs.Utility.secondsToTimeCode(t.options.duration, t.options) +
					'</span>')
					.appendTo(controls.find('.mejs-time'));
			} else {

				// add class to current time
				controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');
				
				$('<div class="mejs-time mejs-duration-container">'+
					'<span class="mejs-duration">' + 
						mejs.Utility.secondsToTimeCode(t.options.duration, t.options) +
					'</span>' +
				'</div>')
				.appendTo(controls);
			}
			
			t.durationD = t.controls.find('.mejs-duration');

			media.addEventListener('timeupdate',function() {
				if (t.controlsAreVisible) {
					player.updateDuration();
				}
			}, false);
		},
		
		updateCurrent:  function() {
			var t = this;
			
			var currentTime = t.media.currentTime;
			
			if (isNaN(currentTime)) {
				currentTime = 0;
			}

			if (t.currenttime) {
				t.currenttime.html(mejs.Utility.secondsToTimeCode(currentTime, t.options));
			}
		},
		
		updateDuration: function() {
			var t = this;
			
			var duration = t.media.duration;
			if (t.options.duration > 0) {
				duration = t.options.duration;
			}
			
			if (isNaN(duration)) {
				duration = 0;
			}

			//Toggle the long video class if the video is longer than an hour.
			t.container.toggleClass("mejs-long-video", duration > 3600);
			
			if (t.durationD && duration > 0) {
				t.durationD.html(mejs.Utility.secondsToTimeCode(duration, t.options));
			}		
		}
	});

})(mejs.$);

(function ($) {

	$.extend(mejs.MepDefaults, {
		muteText: mejs.i18n.t('mejs.mute-toggle'),
		allyVolumeControlText: mejs.i18n.t('mejs.volume-help-text'),
		hideVolumeOnTouchDevices: true,

		audioVolume: 'horizontal',
		videoVolume: 'vertical'
	});

	$.extend(MediaElementPlayer.prototype, {
		buildvolume: function (player, controls, layers, media) {

			// Android and iOS don't support volume controls
			if ((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)
				return;

			var t = this,
				mode = (t.isVideo) ? t.options.videoVolume : t.options.audioVolume,
				mute = (mode == 'horizontal') ?

					// horizontal version
					$('<div class="mejs-button mejs-volume-button mejs-mute">' +
						'<button type="button" aria-controls="' + t.id +
						'" title="' + t.options.muteText +
						'" aria-label="' + t.options.muteText +
						'"></button>' +
						'</div>' +
						'<a href="javascript:void(0);" class="mejs-horizontal-volume-slider">' + // outer background
						'<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +
						'<div class="mejs-horizontal-volume-total"></div>' + // line background
						'<div class="mejs-horizontal-volume-current"></div>' + // current volume
						'<div class="mejs-horizontal-volume-handle"></div>' + // handle
						'</a>'
					)
					.appendTo(controls) :

					// vertical version
					$('<div class="mejs-button mejs-volume-button mejs-mute">' +
						'<button type="button" aria-controls="' + t.id +
						'" title="' + t.options.muteText +
						'" aria-label="' + t.options.muteText +
						'"></button>' +
						'<a href="javascript:void(0);" class="mejs-volume-slider">' + // outer background
						'<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +
						'<div class="mejs-volume-total"></div>' + // line background
						'<div class="mejs-volume-current"></div>' + // current volume
						'<div class="mejs-volume-handle"></div>' + // handle
						'</a>' +
						'</div>')
					.appendTo(controls),
				volumeSlider = t.container.find('.mejs-volume-slider, .mejs-horizontal-volume-slider'),
				volumeTotal = t.container.find('.mejs-volume-total, .mejs-horizontal-volume-total'),
				volumeCurrent = t.container.find('.mejs-volume-current, .mejs-horizontal-volume-current'),
				volumeHandle = t.container.find('.mejs-volume-handle, .mejs-horizontal-volume-handle'),

				positionVolumeHandle = function (volume, secondTry) {

					if (!volumeSlider.is(':visible') && typeof secondTry == 'undefined') {
						volumeSlider.show();
						positionVolumeHandle(volume, true);
						volumeSlider.hide();
						return;
					}

					// correct to 0-1
					volume = Math.max(0, volume);
					volume = Math.min(volume, 1);

					// adjust mute button style
					if (volume === 0) {
						mute.removeClass('mejs-mute').addClass('mejs-unmute');
						mute.children('button').attr('title', mejs.i18n.t('mejs.unmute')).attr('aria-label', mejs.i18n.t('mejs.unmute'));
					} else {
						mute.removeClass('mejs-unmute').addClass('mejs-mute');
						mute.children('button').attr('title', mejs.i18n.t('mejs.mute')).attr('aria-label', mejs.i18n.t('mejs.mute'));
					}

					// top/left of full size volume slider background
					var totalPosition = volumeTotal.position();
					// position slider
					if (mode == 'vertical') {
						var
							// height of the full size volume slider background
							totalHeight = volumeTotal.height(),

							// the new top position based on the current volume
							// 70% volume on 100px height == top:30px
							newTop = totalHeight - (totalHeight * volume);

						// handle
						volumeHandle.css('top', Math.round(totalPosition.top + newTop - (volumeHandle.height() / 2)));

						// show the current visibility
						volumeCurrent.height(totalHeight - newTop);
						volumeCurrent.css('top', totalPosition.top + newTop);
					} else {
						var
							// height of the full size volume slider background
							totalWidth = volumeTotal.width(),

							// the new left position based on the current volume
							newLeft = totalWidth * volume;

						// handle
						volumeHandle.css('left', Math.round(totalPosition.left + newLeft - (volumeHandle.width() / 2)));

						// rezize the current part of the volume bar
						volumeCurrent.width(Math.round(newLeft));
					}
				},
				handleVolumeMove = function (e) {

					var volume = null,
						totalOffset = volumeTotal.offset();

					// calculate the new volume based on the moust position
					if (mode === 'vertical') {

						var
							railHeight = volumeTotal.height(),
							newY = e.pageY - totalOffset.top;

						volume = (railHeight - newY) / railHeight;

						// the controls just hide themselves (usually when mouse moves too far up)
						if (totalOffset.top === 0 || totalOffset.left === 0) {
							return;
						}

					} else {
						var
							railWidth = volumeTotal.width(),
							newX = e.pageX - totalOffset.left;

						volume = newX / railWidth;
					}

					// ensure the volume isn't outside 0-1
					volume = Math.max(0, volume);
					volume = Math.min(volume, 1);

					// position the slider and handle
					positionVolumeHandle(volume);

					// set the media object (this will trigger the volumechanged event)
					if (volume === 0) {
						media.setMuted(true);
					} else {
						media.setMuted(false);
					}
					media.setVolume(volume);
				},
				mouseIsDown = false,
				mouseIsOver = false;

			// SLIDER

			mute
			.hover(function () {
				volumeSlider.show();
				mouseIsOver = true;
			}, function () {
				mouseIsOver = false;

				if (!mouseIsDown && mode == 'vertical') {
					volumeSlider.hide();
				}
			});

			var updateVolumeSlider = function (e) {

				var volume = Math.floor(media.volume * 100);

				volumeSlider.attr({
					'aria-label': mejs.i18n.t('mejs.volume-slider'),
					'aria-valuemin': 0,
					'aria-valuemax': 100,
					'aria-valuenow': volume,
					'aria-valuetext': volume + '%',
					'role': 'slider',
					'tabindex': 0
				});

			};

			volumeSlider
			.bind('mouseover', function () {
				mouseIsOver = true;
			})
			.bind('mousedown', function (e) {
				handleVolumeMove(e);
				t.globalBind('mousemove.vol', function (e) {
					handleVolumeMove(e);
				});
				t.globalBind('mouseup.vol', function () {
					mouseIsDown = false;
					t.globalUnbind('.vol');

					if (!mouseIsOver && mode == 'vertical') {
						volumeSlider.hide();
					}
				});
				mouseIsDown = true;

				return false;
			})
			.bind('keydown', function (e) {
				var keyCode = e.keyCode;
				var volume = media.volume;
				switch (keyCode) {
					case 38: // Up
						volume = Math.min(volume + 0.1, 1);
						break;
					case 40: // Down
						volume = Math.max(0, volume - 0.1);
						break;
					default:
						return true;
				}

				mouseIsDown = false;
				positionVolumeHandle(volume);
				media.setVolume(volume);
				return false;
			});

			// MUTE button
			mute.find('button').click(function () {
				media.setMuted(!media.muted);
			});

			//Keyboard input
			mute.find('button').bind('focus', function () {
				volumeSlider.show();
			});

			// listen for volume change events from other sources
			media.addEventListener('volumechange', function (e) {
				if (!mouseIsDown) {
					if (media.muted) {
						positionVolumeHandle(0);
						mute.removeClass('mejs-mute').addClass('mejs-unmute');
					} else {
						positionVolumeHandle(media.volume);
						mute.removeClass('mejs-unmute').addClass('mejs-mute');
					}
				}
				updateVolumeSlider(e);
			}, false);

			// mutes the media and sets the volume icon muted if the initial volume is set to 0
			if (player.options.startVolume === 0) {
				media.setMuted(true);
			}

			// shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
			if (media.pluginType === 'native') {
				media.setVolume(player.options.startVolume);
			}

			t.container.on('controlsresize', function () {
				if (media.muted) {
					positionVolumeHandle(0);
					mute.removeClass('mejs-mute').addClass('mejs-unmute');
				} else {
					positionVolumeHandle(media.volume);
					mute.removeClass('mejs-unmute').addClass('mejs-mute');
				}
			});
		}
	});

})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		usePluginFullScreen: true,
		newWindowCallback: function() { return '';},
		fullscreenText: ''
	});

	$.extend(MediaElementPlayer.prototype, {

		isFullScreen: false,

		isNativeFullScreen: false,

		isInIframe: false,
							
		// Possible modes
		// (1) 'native-native' 	HTML5 video  + browser fullscreen (IE10+, etc.)
		// (2) 'plugin-native' 	plugin video + browser fullscreen (fails in some versions of Firefox)
		// (3) 'fullwindow' 	Full window (retains all UI)
		// usePluginFullScreen = true
		// (4) 'plugin-click' 	Flash 1 - click through with pointer events
		// (5) 'plugin-hover' 	Flash 2 - hover popup in flash (IE6-8)		
		fullscreenMode: '',

		buildfullscreen: function(player, controls, layers, media) {

			if (!player.isVideo)
				return;
				
			player.isInIframe = (window.location != window.parent.location);	
		
			// detect on start
			media.addEventListener('loadstart', function() { player.detectFullscreenMode(); });
				
			// build button
			var t = this,
				hideTimeout = null,
				fullscreenTitle = t.options.fullscreenText ? t.options.fullscreenText : mejs.i18n.t('mejs.fullscreen'),
				fullscreenBtn =
					$('<div class="mejs-button mejs-fullscreen-button">' +
						'<button type="button" aria-controls="' + t.id + '" title="' + fullscreenTitle + '" aria-label="' + fullscreenTitle + '"></button>' +
					'</div>')
					.appendTo(controls)
					.on('click', function() {
						
						// toggle fullscreen
						var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;
	
						if (isFullScreen) {
							player.exitFullScreen();
						} else {
							player.enterFullScreen();
						}
					})										
					.on('mouseover', function() {
						
						// very old browsers with a plugin
						if (t.fullscreenMode == 'plugin-hover') {						
							if (hideTimeout !== null) {
								clearTimeout(hideTimeout);
								delete hideTimeout;
							}
	
							var buttonPos = fullscreenBtn.offset(),
								containerPos = player.container.offset();
	
							media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);
						}

					})
					.on('mouseout', function() {

						if (t.fullscreenMode == 'plugin-hover') {						
							if (hideTimeout !== null) {
								clearTimeout(hideTimeout);
								delete hideTimeout;
							}
	
							hideTimeout = setTimeout(function() {
								media.hideFullscreenButton();
							}, 1500);
						}

					});

					

			player.fullscreenBtn = fullscreenBtn;

			t.globalBind('keydown',function (e) {
				if (e.keyCode == 27 && ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen)) {
					player.exitFullScreen();
				}
			});
			
			t.normalHeight = 0;
			t.normalWidth = 0;					
					
			// setup native fullscreen event
			if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

				// chrome doesn't alays fire this in an iframe
				var fullscreenChanged = function(e) {
					if (player.isFullScreen) {
						if (mejs.MediaFeatures.isFullScreen()) {
							player.isNativeFullScreen = true;
							// reset the controls once we are fully in full screen
							player.setControlsSize();
						} else {
							player.isNativeFullScreen = false;
							// when a user presses ESC
							// make sure to put the player back into place
							player.exitFullScreen();
						}
					}
				};

				player.globalBind(mejs.MediaFeatures.fullScreenEventName, fullscreenChanged);
			}

		},
		
		detectFullscreenMode: function() {
			
			var t = this,
				mode = '',
				features = mejs.MediaFeatures;
			
			if (features.hasTrueNativeFullScreen && t.media.pluginType === 'native') {
				mode = 'native-native';
			} else if (features.hasTrueNativeFullScreen && t.media.pluginType !== 'native' && !features.hasFirefoxPluginMovingProblem) {
				mode = 'plugin-native';					
			} else if (t.usePluginFullScreen) { 
				if (mejs.MediaFeatures.supportsPointerEvents) {
					mode = 'plugin-click';
					// this needs some special setup
					t.createPluginClickThrough();				
				} else { 
					mode = 'plugin-hover';
				}
				
			} else {
				mode = 'fullwindow';
			}
			
			
			t.fullscreenMode = mode;		
			return mode;
		},
		
		isPluginClickThroughCreated: false,
		
		createPluginClickThrough: function() {
				
			var t = this;
			
			// don't build twice
			if (t.isPluginClickThroughCreated) {
				return;
			}	

			// allows clicking through the fullscreen button and controls down directly to Flash

			/*
			 When a user puts his mouse over the fullscreen button, we disable the controls so that mouse events can go down to flash (pointer-events)
			 We then put a divs over the video and on either side of the fullscreen button
			 to capture mouse movement and restore the controls once the mouse moves outside of the fullscreen button
			*/

			var fullscreenIsDisabled = false,
				restoreControls = function() {
					if (fullscreenIsDisabled) {
						// hide the hovers
						for (var i in hoverDivs) {
							hoverDivs[i].hide();
						}

						// restore the control bar
						t.fullscreenBtn.css('pointer-events', '');
						t.controls.css('pointer-events', '');

						// prevent clicks from pausing video
						t.media.removeEventListener('click', t.clickToPlayPauseCallback);

						// store for later
						fullscreenIsDisabled = false;
					}
				},
				hoverDivs = {},
				hoverDivNames = ['top', 'left', 'right', 'bottom'],
				i, len,
				positionHoverDivs = function() {
					var fullScreenBtnOffsetLeft = fullscreenBtn.offset().left - t.container.offset().left,
						fullScreenBtnOffsetTop = fullscreenBtn.offset().top - t.container.offset().top,
						fullScreenBtnWidth = fullscreenBtn.outerWidth(true),
						fullScreenBtnHeight = fullscreenBtn.outerHeight(true),
						containerWidth = t.container.width(),
						containerHeight = t.container.height();

					for (i in hoverDivs) {
						hoverDivs[i].css({position: 'absolute', top: 0, left: 0}); //, backgroundColor: '#f00'});
					}

					// over video, but not controls
					hoverDivs['top']
						.width( containerWidth )
						.height( fullScreenBtnOffsetTop );

					// over controls, but not the fullscreen button
					hoverDivs['left']
						.width( fullScreenBtnOffsetLeft )
						.height( fullScreenBtnHeight )
						.css({top: fullScreenBtnOffsetTop});

					// after the fullscreen button
					hoverDivs['right']
						.width( containerWidth - fullScreenBtnOffsetLeft - fullScreenBtnWidth )
						.height( fullScreenBtnHeight )
						.css({top: fullScreenBtnOffsetTop,
							 left: fullScreenBtnOffsetLeft + fullScreenBtnWidth});

					// under the fullscreen button
					hoverDivs['bottom']
						.width( containerWidth )
						.height( containerHeight - fullScreenBtnHeight - fullScreenBtnOffsetTop )
						.css({top: fullScreenBtnOffsetTop + fullScreenBtnHeight});
				};

			t.globalBind('resize', function() {
				positionHoverDivs();
			});

			for (i = 0, len = hoverDivNames.length; i < len; i++) {
				hoverDivs[hoverDivNames[i]] = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls).hide();
			}

			// on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
			fullscreenBtn.on('mouseover',function() {

				if (!t.isFullScreen) {

					var buttonPos = fullscreenBtn.offset(),
						containerPos = player.container.offset();

					// move the button in Flash into place
					media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);

					// allows click through
					t.fullscreenBtn.css('pointer-events', 'none');
					t.controls.css('pointer-events', 'none');

					// restore click-to-play
					t.media.addEventListener('click', t.clickToPlayPauseCallback);

					// show the divs that will restore things
					for (i in hoverDivs) {
						hoverDivs[i].show();
					}

					positionHoverDivs();

					fullscreenIsDisabled = true;
				}

			});

			// restore controls anytime the user enters or leaves fullscreen
			media.addEventListener('fullscreenchange', function(e) {
				t.isFullScreen = !t.isFullScreen;
				// don't allow plugin click to pause video - messes with
				// plugin's controls
				if (t.isFullScreen) {
					t.media.removeEventListener('click', t.clickToPlayPauseCallback);
				} else {
					t.media.addEventListener('click', t.clickToPlayPauseCallback);
				}
				restoreControls();
			});


			// the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
			// so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button

			t.globalBind('mousemove', function(e) {

				// if the mouse is anywhere but the fullsceen button, then restore it all
				if (fullscreenIsDisabled) {

					var fullscreenBtnPos = fullscreenBtn.offset();


					if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
						e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
						) {

						fullscreenBtn.css('pointer-events', '');
						t.controls.css('pointer-events', '');

						fullscreenIsDisabled = false;
					}
				}
			});


			t.isPluginClickThroughCreated = true;
		},		

		cleanfullscreen: function(player) {
			player.exitFullScreen();
		},

        containerSizeTimeout: null,

		enterFullScreen: function() {

			var t = this;

			if (mejs.MediaFeatures.isiOS && mejs.MediaFeatures.hasiOSFullScreen && typeof t.media.webkitEnterFullscreen === 'function') {
			    t.media.webkitEnterFullscreen();
				return;
			}

			// set it to not show scroll bars so 100% will work
            $(document.documentElement).addClass('mejs-fullscreen');

			// store sizing
			t.normalHeight = t.container.height();
			t.normalWidth = t.container.width();



			// attempt to do true fullscreen
			if (t.fullscreenMode === 'native-native' || t.fullscreenMode === 'plugin-native') {

				mejs.MediaFeatures.requestFullScreen(t.container[0]);
				//return;

				if (t.isInIframe) {
					// sometimes exiting from fullscreen doesn't work
					// notably in Chrome <iframe>. Fixed in version 17
					setTimeout(function checkFullscreen() {

						if (t.isNativeFullScreen) {
							var percentErrorMargin = 0.002, // 0.2%
								windowWidth = $(window).width(),
								screenWidth = screen.width,
								absDiff = Math.abs(screenWidth - windowWidth),
								marginError = screenWidth * percentErrorMargin;

							// check if the video is suddenly not really fullscreen
							if (absDiff > marginError) {
								// manually exit
								t.exitFullScreen();
							} else {
								// test again
								setTimeout(checkFullscreen, 500);
							}
						}
						
					}, 1000);
				}
				
			} else if (t.fullscreeMode == 'fullwindow') {				
				// move into position
				
			}			
			
			// make full size
			t.container
				.addClass('mejs-container-fullscreen')
				.width('100%')
				.height('100%');
				//.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});

			// Only needed for safari 5.1 native full screen, can cause display issues elsewhere
			// Actually, it seems to be needed for IE8, too
			//if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
				t.containerSizeTimeout = setTimeout(function() {
					t.container.css({width: '100%', height: '100%'});
					t.setControlsSize();
				}, 500);
			//}

			if (t.media.pluginType === 'native') {
				t.$media
					.width('100%')
					.height('100%');
			} else {
				t.container.find('.mejs-shim')
					.width('100%')
					.height('100%');	
				
				setTimeout(function() {
					var win = $(window),
						winW = win.width(),
						winH = win.height();
							
					t.media.setVideoSize(winW,winH);			
				}, 500);
			}

			t.layers.children('div')
				.width('100%')
				.height('100%');

			if (t.fullscreenBtn) {
				t.fullscreenBtn
					.removeClass('mejs-fullscreen')
					.addClass('mejs-unfullscreen');
			}

			t.setControlsSize();
			t.isFullScreen = true;

			var zoomFactor = Math.min(screen.width / t.width, screen.height / t.height);
			t.container.find('.mejs-captions-text').css('font-size', zoomFactor * 100 + '%');
			t.container.find('.mejs-captions-text').css('line-height', 'normal');
			t.container.find('.mejs-captions-position').css('bottom', '45px');

			t.container.trigger('enteredfullscreen');
		},

		exitFullScreen: function() {

			var t = this;

            // Prevent container from attempting to stretch a second time
            clearTimeout(t.containerSizeTimeout);

			// firefox can't adjust plugins
			/*
			if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {
				t.media.setFullscreen(false);
				//player.isFullScreen = false;
				return;
			}
			*/

			// come out of native fullscreen
			if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
				mejs.MediaFeatures.cancelFullScreen();
			}

			// restore scroll bars to document
            $(document.documentElement).removeClass('mejs-fullscreen');

			t.container
				.removeClass('mejs-container-fullscreen')
				.width(t.normalWidth)
				.height(t.normalHeight);

			if (t.media.pluginType === 'native') {
				t.$media
					.width(t.normalWidth)
					.height(t.normalHeight);
			} else {
				t.container.find('.mejs-shim')
					.width(t.normalWidth)
					.height(t.normalHeight);

				t.media.setVideoSize(t.normalWidth, t.normalHeight);
			}

			t.layers.children('div')
				.width(t.normalWidth)
				.height(t.normalHeight);

			t.fullscreenBtn
				.removeClass('mejs-unfullscreen')
				.addClass('mejs-fullscreen');

			t.setControlsSize();
			t.isFullScreen = false;

			t.container.find('.mejs-captions-text').css('font-size','');
			t.container.find('.mejs-captions-text').css('line-height', '');
			t.container.find('.mejs-captions-position').css('bottom', '');

			t.container.trigger('exitedfullscreen');
		}
	});

})(mejs.$);

(function($) {

	// Speed
	$.extend(mejs.MepDefaults, {

		// We also support to pass object like this:
		// [{name: 'Slow', value: '0.75'}, {name: 'Normal', value: '1.00'}, ...]
		speeds: ['2.00', '1.50', '1.25', '1.00', '0.75'],

		defaultSpeed: '1.00',
		
		speedChar: 'x'

	});

	$.extend(MediaElementPlayer.prototype, {

		buildspeed: function(player, controls, layers, media) {
			var t = this;

			if (t.media.pluginType == 'native') {
				var 
					speedButton = null,
					speedSelector = null,
					playbackSpeed = null,
					inputId = null;

				var speeds = [];
				var defaultInArray = false;
				for (var i=0, len=t.options.speeds.length; i < len; i++) {
					var s = t.options.speeds[i];
					if (typeof(s) === 'string'){
						speeds.push({
							name: s + t.options.speedChar,
							value: s
						});
						if(s === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
					else {
						speeds.push(s);
						if(s.value === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
				}

				if (!defaultInArray) {
					speeds.push({
						name: t.options.defaultSpeed + t.options.speedChar,
						value: t.options.defaultSpeed
					});
				}

				speeds.sort(function(a, b) {
					return parseFloat(b.value) - parseFloat(a.value);
				});

				var getSpeedNameFromValue = function(value) {
					for(i=0,len=speeds.length; i <len; i++) {
						if (speeds[i].value === value) {
							return speeds[i].name;
						}
					}
				};

				var html = '<div class="mejs-button mejs-speed-button">' +
							'<button type="button">' + getSpeedNameFromValue(t.options.defaultSpeed) + '</button>' +
							'<div class="mejs-speed-selector">' +
							'<ul>';

				for (i = 0, il = speeds.length; i<il; i++) {
					inputId = t.id + '-speed-' + speeds[i].value;
					html += '<li>' + 
								'<input type="radio" name="speed" ' + 
											'value="' + speeds[i].value + '" ' +
											'id="' + inputId + '" ' +
											(speeds[i].value === t.options.defaultSpeed ? ' checked' : '') +
											' />' +
								'<label for="' + inputId + '" ' +
											(speeds[i].value === t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +
											'>' + speeds[i].name + '</label>' +
							'</li>';
				}
				html += '</ul></div></div>';

				speedButton = $(html).appendTo(controls);
				speedSelector = speedButton.find('.mejs-speed-selector');

				playbackSpeed = t.options.defaultSpeed;

				media.addEventListener('loadedmetadata', function(e) {
					if (playbackSpeed) {
						media.playbackRate = parseFloat(playbackSpeed);
					}
				}, true);

				speedSelector
					.on('click', 'input[type="radio"]', function() {
						var newSpeed = $(this).attr('value');
						playbackSpeed = newSpeed;
						media.playbackRate = parseFloat(newSpeed);
						speedButton.find('button').html(getSpeedNameFromValue(newSpeed));
						speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
						speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');
					});
				speedButton
					.one( 'mouseenter focusin', function() {
						speedSelector
							.height(
								speedButton.find('.mejs-speed-selector ul').outerHeight(true) +
								speedButton.find('.mejs-speed-translations').outerHeight(true))
							.css('top', (-1 * speedSelector.height()) + 'px');
					});
			}
		}
	});

})(mejs.$);

(function($) {

	// add extra default options
	$.extend(mejs.MepDefaults, {
		// this will automatically turn on a <track>
		startLanguage: '',

		tracksText: '',

		// By default, no WAI-ARIA live region - don't make a
		// screen reader speak captions over an audio track.
		tracksAriaLive: false,

		// option to remove the [cc] button when no <track kind="subtitles"> are present
		hideCaptionsButtonWhenEmpty: true,

		// If true and we only have one track, change captions to popup
		toggleCaptionsButtonWhenOnlyOne: false,

		// #id or .class
		slidesSelector: ''
	});

	$.extend(MediaElementPlayer.prototype, {

		hasChapters: false,

		cleartracks: function(player, controls, layers, media){
			if(player) {
				if(player.captions) player.captions.remove();
				if(player.chapters) player.chapters.remove();
				if(player.captionsText) player.captionsText.remove();
				if(player.captionsButton) player.captionsButton.remove();
			}
		},
		buildtracks: function(player, controls, layers, media) {
			if (player.tracks.length === 0)
				return;

			var t = this,
				attr = t.options.tracksAriaLive ?
					'role="log" aria-live="assertive" aria-atomic="false"' : '',
				tracksTitle = t.options.tracksText ? t.options.tracksText : mejs.i18n.t('mejs.captions-subtitles'),
				i,
				kind;

			if (t.domNode.textTracks) { // if browser will do native captions, prefer mejs captions, loop through tracks and hide
				for (i = t.domNode.textTracks.length - 1; i >= 0; i--) {
					t.domNode.textTracks[i].mode = "hidden";
				}
			}
			t.cleartracks(player, controls, layers, media);
			player.chapters =
					$('<div class="mejs-chapters mejs-layer"></div>')
						.prependTo(layers).hide();
			player.captions =
					$('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' +
					attr + '><span class="mejs-captions-text"></span></div></div>')
						.prependTo(layers).hide();
			player.captionsText = player.captions.find('.mejs-captions-text');
			player.captionsButton =
					$('<div class="mejs-button mejs-captions-button">'+
						'<button type="button" aria-controls="' + t.id + '" title="' + tracksTitle + '" aria-label="' + tracksTitle + '"></button>'+
						'<div class="mejs-captions-selector">'+
							'<ul>'+
								'<li>'+
									'<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
									'<label for="' + player.id + '_captions_none">' + mejs.i18n.t('mejs.none') +'</label>'+
								'</li>'	+
							'</ul>'+
						'</div>'+
					'</div>')
						.appendTo(controls);


			var subtitleCount = 0;
			for (i=0; i<player.tracks.length; i++) {
				kind = player.tracks[i].kind;
				if (kind === 'subtitles' || kind === 'captions') {
					subtitleCount++;
				}
			}

			// if only one language then just make the button a toggle
			if (t.options.toggleCaptionsButtonWhenOnlyOne && subtitleCount == 1){
				// click
				player.captionsButton.on('click',function() {
					if (player.selectedTrack === null) {
						lang = player.tracks[0].srclang;
					} else {
						lang = 'none';
					}
					player.setTrack(lang);
				});
			} else {
				// hover or keyboard focus
				player.captionsButton.on( 'mouseenter focusin', function() {
					$(this).find('.mejs-captions-selector').removeClass('mejs-offscreen');
				})

				// handle clicks to the language radio buttons
				.on('click','input[type=radio]',function() {
					lang = this.value;
					player.setTrack(lang);
				});

				player.captionsButton.on( 'mouseleave focusout', function() {
					$(this).find(".mejs-captions-selector").addClass("mejs-offscreen");
				});

			}

			if (!player.options.alwaysShowControls) {
				// move with controls
				player.container
					.bind('controlsshown', function () {
						// push captions above controls
						player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

					})
					.bind('controlshidden', function () {
						if (!media.paused) {
							// move back to normal place
							player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
						}
					});
			} else {
				player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
			}

			player.trackToLoad = -1;
			player.selectedTrack = null;
			player.isLoadingTrack = false;

			// add to list
			for (i=0; i<player.tracks.length; i++) {
				kind = player.tracks[i].kind;
				if (kind === 'subtitles' || kind === 'captions') {
					player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
				}
			}

			// start loading tracks
			player.loadNextTrack();

			media.addEventListener('timeupdate',function() {
				player.displayCaptions();
			}, false);

			if (player.options.slidesSelector !== '') {
				player.slidesContainer = $(player.options.slidesSelector);

				media.addEventListener('timeupdate',function() {
					player.displaySlides();
				}, false);

			}

			media.addEventListener('loadedmetadata', function() {
				player.displayChapters();
			}, false);

			player.container.hover(
				function () {
					// chapters
					if (player.hasChapters) {
						player.chapters.removeClass('mejs-offscreen');
						player.chapters.fadeIn(200).height(player.chapters.find('.mejs-chapter').outerHeight());
					}
				},
				function () {
					if (player.hasChapters && !media.paused) {
						player.chapters.fadeOut(200, function() {
							$(this).addClass('mejs-offscreen');
							$(this).css('display','block');
						});
					}
				});

			t.container.on('controlsresize', function() {
				t.adjustLanguageBox();
			});

			// check for autoplay
			if (player.node.getAttribute('autoplay') !== null) {
				player.chapters.addClass('mejs-offscreen');
			}
		},

		setTrack: function(lang){

			var t = this,
				i;

			if (lang == 'none') {
				t.selectedTrack = null;
				t.captionsButton.removeClass('mejs-captions-enabled');
			} else {
				for (i=0; i<t.tracks.length; i++) {
					if (t.tracks[i].srclang == lang) {
						if (t.selectedTrack === null)
							t.captionsButton.addClass('mejs-captions-enabled');
						t.selectedTrack = t.tracks[i];
						t.captions.attr('lang', t.selectedTrack.srclang);
						t.displayCaptions();
						break;
					}
				}
			}
		},

		loadNextTrack: function() {
			var t = this;

			t.trackToLoad++;
			if (t.trackToLoad < t.tracks.length) {
				t.isLoadingTrack = true;
				t.loadTrack(t.trackToLoad);
			} else {
				// add done?
				t.isLoadingTrack = false;

				t.checkForTracks();
			}
		},

		loadTrack: function(index){
			var
				t = this,
				track = t.tracks[index],
				after = function() {

					track.isLoaded = true;

					t.enableTrackButton(track.srclang, track.label);

					t.loadNextTrack();

				};


			if (track.src !== undefined || track.src !== "") {
				$.ajax({
					url: track.src,
					dataType: "text",
					success: function(d) {

						// parse the loaded file
						if (typeof d == "string" && (/<tt\s+xml/ig).exec(d)) {
							track.entries = mejs.TrackFormatParser.dfxp.parse(d);
						} else {
							track.entries = mejs.TrackFormatParser.webvtt.parse(d);
						}

						after();

						if (track.kind == 'chapters') {
							t.media.addEventListener('play', function() {
								if (t.media.duration > 0) {
									t.displayChapters(track);
								}
							}, false);
						}

						if (track.kind == 'slides') {
							t.setupSlides(track);
						}
					},
					error: function() {
						t.removeTrackButton(track.srclang);
						t.loadNextTrack();
					}
				});
			}
		},

		enableTrackButton: function(lang, label) {
			var t = this;

			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}

			t.captionsButton
				.find('input[value=' + lang + ']')
					.prop('disabled',false)
				.siblings('label')
					.html( label );

			// auto select
			if (t.options.startLanguage == lang) {
				$('#' + t.id + '_captions_' + lang).prop('checked', true).trigger('click');
			}

			t.adjustLanguageBox();
		},

		removeTrackButton: function(lang) {
			var t = this;

			t.captionsButton.find('input[value=' + lang + ']').closest('li').remove();

			t.adjustLanguageBox();
		},

		addTrackButton: function(lang, label) {
			var t = this;
			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}

			t.captionsButton.find('ul').append(
				$('<li>'+
					'<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
					'<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>'+
				'</li>')
			);

			t.adjustLanguageBox();

			// remove this from the dropdownlist (if it exists)
			t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
		},

		adjustLanguageBox:function() {
			var t = this;
			// adjust the size of the outer box
			t.captionsButton.find('.mejs-captions-selector').height(
				t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
				t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
			);
		},

		checkForTracks: function() {
			var
				t = this,
				hasSubtitles = false;

			// check if any subtitles
			if (t.options.hideCaptionsButtonWhenEmpty) {
				for (var i=0; i<t.tracks.length; i++) {
					var kind = t.tracks[i].kind;
					if ((kind === 'subtitles' || kind === 'captions') && t.tracks[i].isLoaded) {
						hasSubtitles = true;
						break;
					}
				}

				if (!hasSubtitles) {
					t.captionsButton.hide();
					t.setControlsSize();
				}
			}
		},

		displayCaptions: function() {

			if (typeof this.tracks == 'undefined')
				return;

			var
				t = this,
				i,
				track = t.selectedTrack;

			if (track !== null && track.isLoaded) {
				for (i=0; i<track.entries.times.length; i++) {
					if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop) {
						// Set the line before the timecode as a class so the cue can be targeted if needed
						t.captionsText.html(track.entries.text[i]).attr('class', 'mejs-captions-text ' + (track.entries.times[i].identifier || ''));
						t.captions.show().height(0);
						return; // exit out if one is visible;
					}
				}
				t.captions.hide();
			} else {
				t.captions.hide();
			}
		},

		setupSlides: function(track) {
			var t = this;

			t.slides = track;
			t.slides.entries.imgs = [t.slides.entries.text.length];
			t.showSlide(0);

		},

		showSlide: function(index) {
			if (typeof this.tracks == 'undefined' || typeof this.slidesContainer == 'undefined') {
				return;
			}

			var t = this,
				url = t.slides.entries.text[index],
				img = t.slides.entries.imgs[index];

			if (typeof img == 'undefined' || typeof img.fadeIn == 'undefined') {

				t.slides.entries.imgs[index] = img = $('<img src="' + url + '">')
						.on('load', function() {
							img.appendTo(t.slidesContainer)
								.hide()
								.fadeIn()
								.siblings(':visible')
									.fadeOut();

						});

			} else {

				if (!img.is(':visible') && !img.is(':animated')) {

					//

					img.fadeIn()
						.siblings(':visible')
							.fadeOut();
				}
			}

		},

		displaySlides: function() {

			if (typeof this.slides == 'undefined')
				return;

			var
				t = this,
				slides = t.slides,
				i;

			for (i=0; i<slides.entries.times.length; i++) {
				if (t.media.currentTime >= slides.entries.times[i].start && t.media.currentTime <= slides.entries.times[i].stop){

					t.showSlide(i);

					return; // exit out if one is visible;
				}
			}
		},

		displayChapters: function() {
			var
				t = this,
				i;

			for (i=0; i<t.tracks.length; i++) {
				if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
					t.drawChapters(t.tracks[i]);
					t.hasChapters = true;
					break;
				}
			}
		},

		drawChapters: function(chapters) {
			var
				t = this,
				i,
				dur,
				//width,
				//left,
				percent = 0,
				usedPercent = 0;

			t.chapters.empty();

			for (i=0; i<chapters.entries.times.length; i++) {
				dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
				percent = Math.floor(dur / t.media.duration * 100);
				if (percent + usedPercent > 100 || // too large
					i == chapters.entries.times.length-1 && percent + usedPercent < 100) // not going to fill it in
					{
					percent = 100 - usedPercent;
				}
				//width = Math.floor(t.width * dur / t.media.duration);
				//left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
				//if (left + width > t.width) {
				//	width = t.width - left;
				//}

				t.chapters.append( $(
					'<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' +
						'<div class="mejs-chapter-block' + ((i==chapters.entries.times.length-1) ? ' mejs-chapter-block-last' : '') + '">' +
							'<span class="ch-title">' + chapters.entries.text[i] + '</span>' +
							'<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start, t.options) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop, t.options) + '</span>' +
						'</div>' +
					'</div>'));
				usedPercent += percent;
			}

			t.chapters.find('div.mejs-chapter').click(function() {
				t.media.setCurrentTime( parseFloat( $(this).attr('rel') ) );
				if (t.media.paused) {
					t.media.play();
				}
			});

			t.chapters.show();
		}
	});



	mejs.language = {
		codes:  {
			af:'Afrikaans',
			sq:'Albanian',
			ar:'Arabic',
			be:'Belarusian',
			bg:'Bulgarian',
			ca:'Catalan',
			zh:'Chinese',
			'zh-cn':'Chinese Simplified',
			'zh-tw':'Chinese Traditional',
			hr:'Croatian',
			cs:'Czech',
			da:'Danish',
			nl:'Dutch',
			en:'English',
			et:'Estonian',
			fl:'Filipino',
			fi:'Finnish',
			fr:'French',
			gl:'Galician',
			de:'German',
			el:'Greek',
			ht:'Haitian Creole',
			iw:'Hebrew',
			hi:'Hindi',
			hu:'Hungarian',
			is:'Icelandic',
			id:'Indonesian',
			ga:'Irish',
			it:'Italian',
			ja:'Japanese',
			ko:'Korean',
			lv:'Latvian',
			lt:'Lithuanian',
			mk:'Macedonian',
			ms:'Malay',
			mt:'Maltese',
			no:'Norwegian',
			fa:'Persian',
			pl:'Polish',
			pt:'Portuguese',
			// 'pt-pt':'Portuguese (Portugal)',
			ro:'Romanian',
			ru:'Russian',
			sr:'Serbian',
			sk:'Slovak',
			sl:'Slovenian',
			es:'Spanish',
			sw:'Swahili',
			sv:'Swedish',
			tl:'Tagalog',
			th:'Thai',
			tr:'Turkish',
			uk:'Ukrainian',
			vi:'Vietnamese',
			cy:'Welsh',
			yi:'Yiddish'
		}
	};

	/*
	Parses WebVTT format which should be formatted as
	================================
	WEBVTT

	1
	00:00:01,1 --> 00:00:05,000
	A line of text

	2
	00:01:15,1 --> 00:02:05,000
	A second line of text

	===============================

	Adapted from: http://www.delphiki.com/html5/playr
	*/
	mejs.TrackFormatParser = {
		webvtt: {
			pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

			parse: function(trackText) {
				var
					i = 0,
					lines = mejs.TrackFormatParser.split2(trackText, /\r?\n/),
					entries = {text:[], times:[]},
					timecode,
					text,
					identifier;
				for(; i<lines.length; i++) {
					timecode = this.pattern_timecode.exec(lines[i]);

					if (timecode && i<lines.length) {
						if ((i - 1) >= 0 && lines[i - 1] !== '') {
							identifier = lines[i - 1];
						}
						i++;
						// grab all the (possibly multi-line) text that follows
						text = lines[i];
						i++;
						while(lines[i] !== '' && i<lines.length){
							text = text + '\n' + lines[i];
							i++;
						}
						text = $.trim(text).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
						// Text is in a different array so I can use .join
						entries.text.push(text);
						entries.times.push(
						{
							identifier: identifier,
							start: (mejs.Utility.convertSMPTEtoSeconds(timecode[1]) === 0) ? 0.200 : mejs.Utility.convertSMPTEtoSeconds(timecode[1]),
							stop: mejs.Utility.convertSMPTEtoSeconds(timecode[3]),
							settings: timecode[5]
						});
					}
					identifier = '';
				}
				return entries;
			}
		},
		// Thanks to Justin Capella: https://github.com/johndyer/mediaelement/pull/420
		dfxp: {
			parse: function(trackText) {
				trackText = $(trackText).filter("tt");
				var
					i = 0,
					container = trackText.children("div").eq(0),
					lines = container.find("p"),
					styleNode = trackText.find("#" + container.attr("style")),
					styles,
					text,
					entries = {text:[], times:[]};


				if (styleNode.length) {
					var attributes = styleNode.removeAttr("id").get(0).attributes;
					if (attributes.length) {
						styles = {};
						for (i = 0; i < attributes.length; i++) {
							styles[attributes[i].name.split(":")[1]] = attributes[i].value;
						}
					}
				}

				for(i = 0; i<lines.length; i++) {
					var style;
					var _temp_times = {
						start: null,
						stop: null,
						style: null
					};
					if (lines.eq(i).attr("begin")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("begin"));
					if (!_temp_times.start && lines.eq(i-1).attr("end")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i-1).attr("end"));
					if (lines.eq(i).attr("end")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("end"));
					if (!_temp_times.stop && lines.eq(i+1).attr("begin")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i+1).attr("begin"));
					if (styles) {
						style = "";
						for (var _style in styles) {
							style += _style + ":" + styles[_style] + ";";
						}
					}
					if (style) _temp_times.style = style;
					if (_temp_times.start === 0) _temp_times.start = 0.200;
					entries.times.push(_temp_times);
					text = $.trim(lines.eq(i).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
					entries.text.push(text);
				}
				return entries;
			}
		},
		split2: function (text, regex) {
			// normal version for compliant browsers
			// see below for IE fix
			return text.split(regex);
		}
	};

	// test for browsers with bad String.split method.
	if ('x\n\ny'.split(/\n/gi).length != 3) {
		// add super slow IE8 and below version
		mejs.TrackFormatParser.split2 = function(text, regex) {
			var
				parts = [],
				chunk = '',
				i;

			for (i=0; i<text.length; i++) {
				chunk += text.substring(i,i+1);
				if (regex.test(chunk)) {
					parts.push(chunk.replace(regex, ''));
					chunk = '';
				}
			}
			parts.push(chunk);
			return parts;
		};
	}

})(mejs.$);

// Source Chooser Plugin
(function($) {

	$.extend(mejs.MepDefaults, {
		sourcechooserText: ''
	});

	$.extend(MediaElementPlayer.prototype, {
		buildsourcechooser: function(player, controls, layers, media) {

			var
				t = this,
				sourceTitle = t.options.sourcechooserText ? t.options.sourcechooserText : mejs.i18n.t('mejs.source-chooser'),
				hoverTimeout
			;

			player.sourcechooserButton =
				$('<div class="mejs-button mejs-sourcechooser-button">'+
						'<button type="button" role="button" aria-haspopup="true" aria-owns="' + t.id + '" title="' + sourceTitle + '" aria-label="' + sourceTitle + '"></button>'+
						'<div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true">'+
							'<ul>'+
							'</ul>'+
						'</div>'+
					'</div>')
					.appendTo(controls)

					// hover
					.hover(function() {
						clearTimeout(hoverTimeout);
						player.showSourcechooserSelector();
					}, function() {
						var self = $(this);
						hoverTimeout = setTimeout(function () {
						player.hideSourcechooserSelector();
						}, 500);
					})

					// keyboard menu activation
					.on('keydown', function (e) {
						var keyCode = e.keyCode;

						switch (keyCode) {
							case 32: // space
								if (!mejs.MediaFeatures.isFirefox) { // space sends the click event in Firefox
									player.showSourcechooserSelector();
								}
								$(this).find('.mejs-sourcechooser-selector')
									.find('input[type=radio]:checked').first().focus();
								break;
							case 13: // enter
								player.showSourcechooserSelector();
								$(this).find('.mejs-sourcechooser-selector')
									.find('input[type=radio]:checked').first().focus();
								break;
							case 27: // esc
								player.hideSourcechooserSelector();
								$(this).find('button').focus();
								break;
							default:
								return true;
								}
							})

					// close menu when tabbing away
					.on('focusout', mejs.Utility.debounce(function (e) { // Safari triggers focusout multiple times
						// Firefox does NOT support e.relatedTarget to see which element
						// just lost focus, so wait to find the next focused element
						setTimeout(function () {
							var parent = $(document.activeElement).closest('.mejs-sourcechooser-selector');
							if (!parent.length) {
								// focus is outside the control; close menu
								player.hideSourcechooserSelector();
							}
						}, 0);
					}, 100))

					// handle clicks to the source radio buttons
					.delegate('input[type=radio]', 'click', function() {
						// set aria states
						$(this).attr('aria-selected', true).attr('checked', 'checked');
						$(this).closest('.mejs-sourcechooser-selector').find('input[type=radio]').not(this).attr('aria-selected', 'false').removeAttr('checked');

						var src = this.value;

						if (media.currentSrc != src) {
							var currentTime = media.currentTime;
							var paused = media.paused;
							media.pause();
							media.setSrc(src);

							media.addEventListener('loadedmetadata', function(e) {
								media.currentTime = currentTime;
							}, true);

							var canPlayAfterSourceSwitchHandler = function(e) {
								if (!paused) {
									media.play();
								}
								media.removeEventListener("canplay", canPlayAfterSourceSwitchHandler, true);
							};
							media.addEventListener('canplay', canPlayAfterSourceSwitchHandler, true);
							media.load();
						}
					})

					// Handle click so that screen readers can toggle the menu
					.delegate('button', 'click', function (e) {
						if ($(this).siblings('.mejs-sourcechooser-selector').hasClass('mejs-offscreen')) {
							player.showSourcechooserSelector();
							$(this).siblings('.mejs-sourcechooser-selector').find('input[type=radio]:checked').first().focus();
						} else {
							player.hideSourcechooserSelector();
						}
					});

			// add to list
			for (var i in this.node.children) {
				var src = this.node.children[i];
				if (src.nodeName === 'SOURCE' && (media.canPlayType(src.type) == 'probably' || media.canPlayType(src.type) == 'maybe')) {
					player.addSourceButton(src.src, src.title, src.type, media.src == src.src);
				}
			}
		},

		addSourceButton: function(src, label, type, isCurrent) {
			var t = this;
			if (label === '' || label == undefined) {
				label = src;
			}
			type = type.split('/')[1];

			t.sourcechooserButton.find('ul').append(
				$('<li>'+
						'<input type="radio" name="' + t.id + '_sourcechooser" id="' + t.id + '_sourcechooser_' + label + type + '" role="menuitemradio" value="' + src + '" ' + (isCurrent ? 'checked="checked"' : '') + 'aria-selected="' + isCurrent + '"' + ' />'+
						'<label for="' + t.id + '_sourcechooser_' + label + type + '" aria-hidden="true">' + label + ' (' + type + ')</label>'+
					'</li>')
			);

			t.adjustSourcechooserBox();

		},

		adjustSourcechooserBox: function() {
			var t = this;
			// adjust the size of the outer box
			t.sourcechooserButton.find('.mejs-sourcechooser-selector').height(
				t.sourcechooserButton.find('.mejs-sourcechooser-selector ul').outerHeight(true)
			);
		},

		hideSourcechooserSelector: function () {
			this.sourcechooserButton.find('.mejs-sourcechooser-selector')
				.addClass('mejs-offscreen')
				.attr('aria-expanded', 'false')
				.attr('aria-hidden', 'true')
				.find('input[type=radio]') // make radios not fucusable
				.attr('tabindex', '-1');
		},

		showSourcechooserSelector: function () {
			this.sourcechooserButton.find('.mejs-sourcechooser-selector')
				.removeClass('mejs-offscreen')
				.attr('aria-expanded', 'true')
				.attr('aria-hidden', 'false')
				.find('input[type=radio]')
				.attr('tabindex', '0');
		}
	});

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function($) {

$.extend(mejs.MepDefaults,
	{ 'contextMenuItems': [
		// demo of a fullscreen option
		{ 
			render: function(player) {
				
				// check for fullscreen plugin
				if (typeof player.enterFullScreen == 'undefined')
					return null;
			
				if (player.isFullScreen) {
					return mejs.i18n.t('mejs.fullscreen-off');
				} else {
					return mejs.i18n.t('mejs.fullscreen-on');
				}
			},
			click: function(player) {
				if (player.isFullScreen) {
					player.exitFullScreen();
				} else {
					player.enterFullScreen();
				}
			}
		}
		,
		// demo of a mute/unmute button
		{ 
			render: function(player) {
				if (player.media.muted) {
					return mejs.i18n.t('mejs.unmute');
				} else {
					return mejs.i18n.t('mejs.mute');
				}
			},
			click: function(player) {
				if (player.media.muted) {
					player.setMuted(false);
				} else {
					player.setMuted(true);
				}
			}
		},
		// separator
		{
			isSeparator: true
		}
		,
		// demo of simple download video
		{ 
			render: function(player) {
				return mejs.i18n.t('mejs.download-video');
			},
			click: function(player) {
				window.location.href = player.media.currentSrc;
			}
		}	
	]}
);


	$.extend(MediaElementPlayer.prototype, {
		buildcontextmenu: function(player, controls, layers, media) {
			
			// create context menu
			player.contextMenu = $('<div class="mejs-contextmenu"></div>')
								.appendTo($('body'))
								.hide();
			
			// create events for showing context menu
			player.container.bind('contextmenu', function(e) {
				if (player.isContextMenuEnabled) {
					e.preventDefault();
					player.renderContextMenu(e.clientX-1, e.clientY-1);
					return false;
				}
			});
			player.container.bind('click', function() {
				player.contextMenu.hide();
			});	
			player.contextMenu.bind('mouseleave', function() {

				//
				player.startContextMenuTimer();
				
			});		
		},

		cleancontextmenu: function(player) {
			player.contextMenu.remove();
		},
		
		isContextMenuEnabled: true,
		enableContextMenu: function() {
			this.isContextMenuEnabled = true;
		},
		disableContextMenu: function() {
			this.isContextMenuEnabled = false;
		},
		
		contextMenuTimeout: null,
		startContextMenuTimer: function() {
			//
			
			var t = this;
			
			t.killContextMenuTimer();
			
			t.contextMenuTimer = setTimeout(function() {
				t.hideContextMenu();
				t.killContextMenuTimer();
			}, 750);
		},
		killContextMenuTimer: function() {
			var timer = this.contextMenuTimer;
			
			//
			
			if (timer != null) {				
				clearTimeout(timer);
				delete timer;
				timer = null;
			}
		},		
		
		hideContextMenu: function() {
			this.contextMenu.hide();
		},
		
		renderContextMenu: function(x,y) {
			
			// alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
			var t = this,
				html = '',
				items = t.options.contextMenuItems;
			
			for (var i=0, il=items.length; i<il; i++) {
				
				if (items[i].isSeparator) {
					html += '<div class="mejs-contextmenu-separator"></div>';
				} else {
				
					var rendered = items[i].render(t);
				
					// render can return null if the item doesn't need to be used at the moment
					if (rendered != null) {
						html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random()*1000000) + '">' + rendered + '</div>';
					}
				}
			}
			
			// position and show the context menu
			t.contextMenu
				.empty()
				.append($(html))
				.css({top:y, left:x})
				.show();
				
			// bind events
			t.contextMenu.find('.mejs-contextmenu-item').each(function() {
							
				// which one is this?
				var $dom = $(this),
					itemIndex = parseInt( $dom.data('itemindex'), 10 ),
					item = t.options.contextMenuItems[itemIndex];
				
				// bind extra functionality?
				if (typeof item.show != 'undefined')
					item.show( $dom , t);
				
				// bind click action
				$dom.click(function() {			
					// perform click action
					if (typeof item.click != 'undefined')
						item.click(t);
					
					// close
					t.contextMenu.hide();				
				});				
			});	
			
			// stop the controls from hiding
			setTimeout(function() {
				t.killControlsTimer('rev3');	
			}, 100);
						
		}
	});
	
})(mejs.$);
(function($) {
	// skip back button

	$.extend(mejs.MepDefaults, {
		skipBackInterval: 30,
		// %1 will be replaced with skipBackInterval in this string
		skipBackText: ''
	});

	$.extend(MediaElementPlayer.prototype, {
		buildskipback: function(player, controls, layers, media) {
			var
				t = this,
				defaultTitle = mejs.i18n.t('mejs.time-skip-back', t.options.skipBackInterval),
				skipTitle = t.options.skipBackText ? t.options.skipBackText : defaultTitle,
				// create the loop button
				loop =
				$('<div class="mejs-button mejs-skip-back-button">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + skipTitle + '" aria-label="' + skipTitle + '">' + t.options.skipBackInterval + '</button>' +
				'</div>')
				// append it to the toolbar
				.appendTo(controls)
				// add a click toggle event
				.click(function() {
					media.setCurrentTime(Math.max(media.currentTime - t.options.skipBackInterval, 0));
					$(this).find('button').blur();
				});
		}
	});

})(mejs.$);

/**
 * Postroll plugin
 */
(function($) {

	$.extend(mejs.MepDefaults, {
		postrollCloseText: ''
	});

	// Postroll
	$.extend(MediaElementPlayer.prototype, {
		buildpostroll: function(player, controls, layers, media) {
			var
				t = this,
				postrollTitle = t.options.postrollCloseText ? t.options.postrollCloseText : mejs.i18n.t('mejs.close'),
				postrollLink = t.container.find('link[rel="postroll"]').attr('href');

			if (typeof postrollLink !== 'undefined') {
				player.postroll =
					$('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + postrollTitle + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(layers).hide();

				t.media.addEventListener('ended', function (e) {
					$.ajax({
						dataType: 'html',
						url: postrollLink,
						success: function (data, textStatus) {
							layers.find('.mejs-postroll-layer-content').html(data);
						}
					});
					player.postroll.show();
				}, false);
			}
		}
	});

})(mejs.$);
/*
MediaElement-Markers is a MediaElement.js plugin that lets you add Visual Cues in the progress time rail. 
This plugin also lets you register a custom callback function that will be called everytime the play position reaches a marker. 
Marker position and a reference to the MediaElement Player object is passed to the registered callback function for any post processing. Marker color is configurable.

*/

(function ($) {
    // markers

    $.extend(mejs.MepDefaults, {
        markerColor: '#E9BC3D', //default marker color
        markers: [],
        markerCallback: function () {

        }
    });

    $.extend(MediaElementPlayer.prototype, {
        buildmarkers: function (player, controls, layers, media) {
            var t = this,
                i = 0,
                currentPos = -1,
                currentMarker = -1,
                lastPlayPos = -1, //Track backward seek
                lastMarkerCallBack = -1; //Prevents successive firing of callbacks

            for (i = 0; i < player.options.markers.length; ++i) {
                controls.find('.mejs-time-total').append('<span class="mejs-time-marker"></span>');
            }

            media.addEventListener('durationchange', function (e) {
                player.setmarkers(controls);
            });
            media.addEventListener('timeupdate', function (e) {
                currentPos = Math.floor(media.currentTime);
                if (lastPlayPos > currentPos) {
                    if (lastMarkerCallBack > currentPos) {
                        lastMarkerCallBack = -1;
                    }
                } else {
                    lastPlayPos = currentPos;
                }

                for (i = 0; i < player.options.markers.length; ++i) {
                    currentMarker = Math.floor(player.options.markers[i]); 
                    if (currentPos === currentMarker && currentMarker !== lastMarkerCallBack) {
                        player.options.markerCallback(media, media.currentTime); //Fires the callback function
                        lastMarkerCallBack = currentMarker;
                    }
                }

            }, false);

        },
        setmarkers: function (controls) {
            var t = this,
                i = 0,
                left;

            for (i = 0; i < t.options.markers.length; ++i) {
                if (Math.floor(t.options.markers[i]) <= t.media.duration && Math.floor(t.options.markers[i]) >= 0) {
                    left = 100 * Math.floor(t.options.markers[i]) / t.media.duration;
                    $(controls.find('.mejs-time-marker')[i]).css({
                        "width": "1px",
                        "left": left+"%",
                        "background": t.options.markerColor
                    });
                }
            }

        }
    });
})(mejs.$);
/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
/*!
 * viewport-units-buggyfill v0.6.0
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */

 !function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.viewportUnitsBuggyfill=b()}(this,function(){"use strict";function o(a,b){var c;return function(){var d=this,e=arguments,f=function(){a.apply(d,e)};clearTimeout(c),c=setTimeout(f,b)}}function p(){try{return window.self!==window.top}catch(a){return!0}}function q(c){if(!a){if(c===!0&&(c={force:!0}),b=c||{},b.isMobileSafari=l,b.isBadStockAndroid=m,!b.ignoreVmax||b.force||j||(i=!1),j||!b.force&&!l&&!i&&!m&&!k&&(!b.hacks||!b.hacks.required(b)))return window.console&&j&&console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),{init:function(){}};window.dispatchEvent(new n("viewport-units-buggyfill-init")),b.hacks&&b.hacks.initialize(b),a=!0,h=document.createElement("style"),h.id="patched-viewport",document.head.appendChild(h),A(function(){var a=o(s,b.refreshDebounceWait||100);window.addEventListener("orientationchange",a,!0),window.addEventListener("pageshow",a,!0),(b.force||i||p())&&(window.addEventListener("resize",a,!0),b._listeningToResize=!0),b.hacks&&b.hacks.initializeEvents(b,s,a),s()})}}function r(){h.textContent=w(),h.parentNode.appendChild(h),window.dispatchEvent(new n("viewport-units-buggyfill-style"))}function s(){a&&(u(),setTimeout(function(){r()},1))}function t(a){try{if(!a.cssRules)return}catch(a){if("SecurityError"!==a.name)throw a;return}for(var b=[],c=0;c<a.cssRules.length;c++){var d=a.cssRules[c];b.push(d)}return b}function u(){return g=[],e.call(document.styleSheets,function(a){var b=t(a);b&&"patched-viewport"!==a.ownerNode.id&&"ignore"!==a.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(a.media&&a.media.mediaText&&window.matchMedia&&!window.matchMedia(a.media.mediaText).matches||e.call(b,v))}),g}function v(a){if(7===a.type){var c;try{c=a.cssText}catch(a){return}return d.lastIndex=0,void(d.test(c)&&(g.push([a,null,c]),b.hacks&&b.hacks.findDeclarations(g,a,null,c)))}if(!a.style){if(!a.cssRules)return;return void e.call(a.cssRules,function(a){v(a)})}e.call(a.style,function(c){var e=a.style.getPropertyValue(c);a.style.getPropertyPriority(c)&&(e+=" !important"),d.lastIndex=0,d.test(e)&&(g.push([a,c,e]),b.hacks&&b.hacks.findDeclarations(g,a,c,e))})}function w(){f=z();var c,d,a=[],b=[];return g.forEach(function(e){var f=x.apply(null,e),g=f.selector.length?f.selector.join(" {\n")+" {\n":"",h=new Array(f.selector.length+1).join("\n}");return g&&g===c?(g&&!c&&(c=g,d=h),void b.push(f.content)):(b.length&&(a.push(c+b.join("\n")+d),b.length=0),void(g?(c=g,d=h,b.push(f.content)):(a.push(f.content),c=null,d=null)))}),b.length&&a.push(c+b.join("\n")+d),k&&a.push("* { content: normal !important; }"),a.join("\n\n")}function x(a,c,e){var f,g=[];f=e.replace(d,y),b.hacks&&(f=b.hacks.overwriteDeclaration(a,c,f)),c&&(g.push(a.selectorText),f=c+": "+f+";");for(var h=a.parentRule;h;)g.unshift("@media "+h.media.mediaText),h=h.parentRule;return{selector:g,content:f}}function y(a,b,c){var d=f[c],e=parseFloat(b)/100;return e*d+"px"}function z(){var a=window.innerHeight,b=window.innerWidth;return{vh:a,vw:b,vmax:Math.max(b,a),vmin:Math.min(b,a)}}function A(a){var b=0,c=function(){b--,b||a()};e.call(document.styleSheets,function(a){a.href&&B(a.href)!==B(location.href)&&"ignore"!==a.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(b++,C(a.ownerNode,c))}),b||a()}function B(a){return a.slice(0,a.indexOf("/",a.indexOf("://")+3))}function C(a,b){D(a.href,function(){var c=document.createElement("style");c.media=a.media,c.setAttribute("data-href",a.href),c.textContent=this.responseText,a.parentNode.replaceChild(c,a),b()},b)}function D(a,b,c){var d=new XMLHttpRequest;if("withCredentials"in d)d.open("GET",a,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");d=new XDomainRequest,d.open("GET",a)}return d.onload=b,d.onerror=c,d.send(),d}var b,f,g,h,a=!1,c=window.navigator.userAgent,d=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,e=[].forEach,i=/MSIE [0-9]\./i.test(c),j=/MSIE [0-8]\./i.test(c),k=c.indexOf("Opera Mini")>-1,l=/(iPhone|iPod|iPad).+AppleWebKit/i.test(c)&&function(){var a=c.match(/OS (\d)/);return a&&a.length>1&&parseInt(a[1])<10}(),m=function(){var a=c.indexOf(" Android ")>-1;if(!a)return!1;var b=c.indexOf("Version/")>-1;if(!b)return!1;var d=parseFloat((c.match("Android ([0-9.]+)")||[])[1]);return d<=4.4}();i||(i=!!navigator.userAgent.match(/Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));try{new n("test")}catch(a){var n=function(a,b){var c;return b=b||{bubbles:!1,cancelable:!1,detail:void 0},c=document.createEvent("CustomEvent"),c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c};n.prototype=window.Event.prototype,window.CustomEvent=n}return{version:"0.6.0",findProperties:u,getCss:w,init:q,refresh:s}});
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(n){n.fn.prepareTransition=function(){return this.each(function(){var i=n(this);i.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){i.removeClass("is-transitioning")});var t=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],o=0;n.each(t,function(n,t){o||(o=parseFloat(i.css(t)))}),0!=o&&(i.addClass("is-transitioning"),i[0].offsetWidth)})}}(jQuery);
/**
 * @file MediaElement Playlist Feature (plugin).
 * @author Andrew Berezovsky <andrew.berezovsky@gmail.com>
 * Twitter handle: duozersk
 * @author Original author: Junaid Qadir Baloch <shekhanzai.baloch@gmail.com>
 * Twitter handle: jeykeu
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
!function(a){a.extend(mejs.MepDefaults,{loopText:"Repeat On/Off",shuffleText:"Shuffle On/Off",nextText:"Next Track",prevText:"Previous Track",playlistText:"Show/Hide Playlist"}),a.extend(MediaElementPlayer.prototype,{buildloop:function(b,c,d,e){var f=this,g=a('<div class="mejs-button mejs-loop-button '+(b.options.loop?"mejs-loop-on":"mejs-loop-off")+'"><button type="button" aria-controls="'+b.id+'" title="'+b.options.loopText+'"></button></div>').appendTo(c).click(function(c){b.options.loop=!b.options.loop,a(e).trigger("mep-looptoggle",[b.options.loop]),b.options.loop?g.removeClass("mejs-loop-off").addClass("mejs-loop-on"):g.removeClass("mejs-loop-on").addClass("mejs-loop-off")});f.loopToggle=f.controls.find(".mejs-loop-button")},loopToggleClick:function(){var a=this;a.loopToggle.trigger("click")},buildshuffle:function(b,c,d,e){var f=this,g=a('<div class="mejs-button mejs-shuffle-button '+(b.options.shuffle?"mejs-shuffle-on":"mejs-shuffle-off")+'"><button type="button" aria-controls="'+b.id+'" title="'+b.options.shuffleText+'"></button></div>').appendTo(c).click(function(c){b.options.shuffle=!b.options.shuffle,a(e).trigger("mep-shuffletoggle",[b.options.shuffle]),b.options.shuffle?g.removeClass("mejs-shuffle-off").addClass("mejs-shuffle-on"):g.removeClass("mejs-shuffle-on").addClass("mejs-shuffle-off")});f.shuffleToggle=f.controls.find(".mejs-shuffle-button")},shuffleToggleClick:function(){var a=this;a.shuffleToggle.trigger("click")},buildprevtrack:function(b,c,d,e){var f=this;a('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack"><button type="button" aria-controls="'+b.id+'" title="'+b.options.prevText+'"></button></div>').appendTo(c).click(function(c){a(e).trigger("mep-playprevtrack"),b.playPrevTrack()});f.prevTrack=f.controls.find(".mejs-prevtrack-button")},prevTrackClick:function(){var a=this;a.prevTrack.trigger("click")},buildnexttrack:function(b,c,d,e){var f=this;a('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack"><button type="button" aria-controls="'+b.id+'" title="'+b.options.nextText+'"></button></div>').appendTo(c).click(function(c){a(e).trigger("mep-playnexttrack"),b.playNextTrack()});f.nextTrack=f.controls.find(".mejs-nexttrack-button")},nextTrackClick:function(){var a=this;a.nextTrack.trigger("click")},buildplaylist:function(b,c,d,e){var f=this,g=a('<div class="mejs-button mejs-playlist-button '+(b.options.playlist?"mejs-hide-playlist":"mejs-show-playlist")+'"><button type="button" aria-controls="'+b.id+'" title="'+b.options.playlistText+'"></button></div>').appendTo(c).click(function(c){b.options.playlist=!b.options.playlist,a(e).trigger("mep-playlisttoggle",[b.options.playlist]),b.options.playlist?(d.children(".mejs-playlist").show(),g.removeClass("mejs-show-playlist").addClass("mejs-hide-playlist")):(d.children(".mejs-playlist").hide(),g.removeClass("mejs-hide-playlist").addClass("mejs-show-playlist"))});f.playlistToggle=f.controls.find(".mejs-playlist-button")},playlistToggleClick:function(){var a=this;a.playlistToggle.trigger("click")},buildplaylistfeature:function(b,c,d,e){var f=a('<div class="mejs-playlist mejs-layer"><ul class="mejs"></ul></div>').appendTo(d);b.options.playlist||f.hide(),"bottom"==b.options.playlistposition?f.css("top",b.options.audioHeight+"px"):f.css("bottom",b.options.audioHeight+"px");var g=function(a){var b=a.split("/");return b.length>0?decodeURIComponent(b[b.length-1]):""},h=[];a("#"+b.id).find(".mejs-mediaelement source").each(function(b,c){if(""!=a.trim(this.src)){var d={};d.source=a.trim(this.src),""!=a.trim(this.title)?d.name=a.trim(this.title):d.name=g(d.source),h.push(d)}});for(var i in h)d.find(".mejs-playlist > ul").append('<li data-url="'+h[i].source+'" title="'+h[i].name+'">'+h[i].name+"</li>");d.find("li:first").addClass("current played"),d.find(".mejs-playlist > ul li").click(function(c){a(this).hasClass("current")?b.play():(a(this).addClass("played"),b.playTrack(a(this)))}),e.addEventListener("ended",function(a){b.playNextTrack()},!1)},playNextTrack:function(){var a=this,b=a.layers.find(".mejs-playlist > ul > li"),c=b.filter(".current"),d=b.not(".played");if(d.length<1&&(c.removeClass("played").siblings().removeClass("played"),d=b.not(".current")),a.options.shuffle)var e=Math.floor(Math.random()*d.length),f=d.eq(e);else{var f=c.next();f.length<1&&a.options.loop&&(f=c.siblings().first())}1==f.length&&(f.addClass("played"),a.playTrack(f))},playPrevTrack:function(){var a=this,b=a.layers.find(".mejs-playlist > ul > li"),c=b.filter(".current"),d=b.filter(".played").not(".current");if(d.length<1&&(c.removeClass("played"),d=b.not(".current")),a.options.shuffle)var e=Math.floor(Math.random()*d.length),f=d.eq(e);else{var f=c.prev();f.length<1&&a.options.loop&&(f=c.siblings().last())}1==f.length&&(c.removeClass("played"),a.playTrack(f))},playTrack:function(a){var b=this;b.pause(),b.setSrc(a.attr("data-url")),b.load(),b.play(),a.addClass("current").siblings().removeClass("current")},playTrackURL:function(a){var b=this,c=b.layers.find(".mejs-playlist > ul > li"),d=c.filter('[data-url="'+a+'"]');b.playTrack(d)}})}(mejs.$);
/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i);if(j){var k=h.getAttribute("xlink:href")||h.getAttribute("href");if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
/*

  ___|                                                  ___|              _)         |         
 |       _ \   __ `__ \   __ `__ \    _ \   __ \      \___ \    __|   __|  |  __ \   __|   __| 
 |      (   |  |   |   |  |   |   |  (   |  |   |           |  (     |     |  |   |  |   \__ \ 
\____| \___/  _|  _|  _| _|  _|  _| \___/  _|  _|     _____/  \___| _|    _|  .__/  \__| ____/ 
                                                                             _|                

*/

/***************************
 * globals, for use in common and unique script documents
 * from http://stackoverflow.com/a/7048295
 ***************************/
var site = {};
site.screenSize = $(window).width();
site.screenHeight = $(window).height();
site.$body = $('body');
site.break1 = 640; // first media query break
site.break2 = 852; // break to 6 across
site.breakAfterIpad = 1100; // break to 6 across
site.fullwidth = 1480; // break to 6 across
site.videoPopupBuilder; // global for use in local script files

// festival pause button references functions declared in festival.js
var carousel, getRandomArbitrary;

// folkways different mobile scrolling b/c of toggle bar presence
if (site.$body.hasClass('folkways-site'))
    site.isFolkways = true;
else
    site.isFolkways = false;

// global wrap time function that wraps mejs elemeents better. Make global so later mejs elements can call
var wrapTime;

// global for reference in site specific js, but not defined until the page loads
var $bannerCarousel;


/**********************
 * youtube must be in GLOBAL scope
 * Must have ...?enablejsapi=1 added to youtube link
 * see http://stackoverflow.com/a/22998910
 * YouTube API here: https://developers.google.com/youtube/iframe_api_reference
 **********************/

// load the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// global player var
var youTubePlayer;

/*********
 * svg4everybody
 * makes svgs work in ie, from https://github.com/jonathantneal/svg4everybody
 *********/
svg4everybody();

$(document).ready(function() {

    /*********
     * accessibility related content
     *********/
    $('.js-keyboard-toggle').on('keypress', function() {
        $(this).siblings('.collapse').toggleClass('in');
    });

    /*********
     * search box placeholder fix for ie
     * from https://github.com/mathiasbynens/jquery-placeholder
     *********/
    $('input').placeholder();
    console.log('placeholder initialized');
    // $('#search-input').hide();

    /*********
     * accessibility pause
     *********/
    var $pauseButton = $('#pause-button');
    var slickPaused = false;

    // pause on click
    $pauseButton.on('click', function() {
        pauseIt($(this));
    })

    // pause on slide change
    // won't work b/c not on init
    // $('.slick-dots li').on('click', function() {
    //  console.log('pause this!');
    //  pauseIt($(this));
    // });


    // pause on enter, from http://stackoverflow.com/a/979686
    $pauseButton.on('keypress', function(e) {
        if (e.which == 13) {
            pauseIt($(this));
        }
    })


    /*****
     * pause slider
     *****/
    function pauseIt($this) {
        console.log('slickPaused :', slickPaused);
        // pause homepage slideshow
        if (slickPaused) {
            console.log('play slideshow');
            $('#banner-carousel').slick('slickPlay'); // home pages
            $('.ms-banner-slideshow').slick('slickPlay'); // festival program pages
            slickPaused = false;

            // festival homepage - start image transforming
            if (site.$body.hasClass('festival-site')) {
                console.log('festival site');
                // if have festival on state carousel
                if (typeof $carousel !== 'undefined') {
                    var $activeImage = $carousel.find('.slick-active .banner-slide-image');
                    $activeImage.addClass('is-animated');
                    $activeImage.css('transform', 'scale(' + getRandomArbitrary(1.04, 1.08) + ') translate(-' + getRandomArbitrary(7, 25) + 'px, ' + getRandomArbitrary(7, 25) + 'px)');
                }
            } else {
                console.log('not festival site');
            }

            // change icon
            $this.addClass('icon-pause');
            $this.removeClass('icon-play');
        } else {
            console.log('pause slideshow');
            $('#banner-carousel').slick('slickPause'); // home pages
            $('.ms-banner-slideshow').slick('slickPause'); // festival program pages
            slickPaused = true;

            // festival homepage - stop image transforming
            if (site.$body.hasClass('festival-site')) {
                // if have festival on state carousel
                if (typeof $carousel !== 'undefined') {
                    var $activeImage = $carousel.find('.slick-active .banner-slide-image');
                    $activeImage.removeClass('is-animated');
                }
            }

            // change icon
            $this.removeClass('icon-pause');
            $this.addClass('icon-play');
        }
    }

    /**********
     * Pause banner slideshow on arrow click
     * important to declare BEFORE slick is created, so will occur on init
     **********/
    // banner Carousels on home pages
    $bannerCarousel = $('#banner-carousel');
    // if exists on page
    if (typeof $bannerCarousel !== 'undefined') {
        $bannerCarousel.on('init', function() {
            console.log('banner init');
            // cache arrows for selecting
            var $slickArrow = $('.slick-arrow');
            var $slickDots = $('.slick-dots li'); // 50 objects and folklife
            var $slickTabs = $('.banner-nav .textbox-inner'); // folkways
            // add event handler to arrows to pause slider when clicked
            $slickArrow.add($slickDots).add($slickTabs).on('click', function() {
                console.log('just clicked to pause');
                $bannerCarousel.slick('slickPause');
                console.log('banner paused');
                // control pause button
                slickPaused = true;
                // change icon
                $pauseButton.removeClass('icon-pause');
                $pauseButton.addClass('icon-play');
            });
        });
    }

    // carousels on micro site pages
    var $msBannerSlideshow = $('.ms-banner-slideshow');
    // if exists on page
    if (typeof $msBannerSlideshow !== 'undefined') {
        // console.info('we have a banner on this page!');
        $msBannerSlideshow.on('init', function() {
            // cache arrows for selecting
            var $slickArrow = $('.slick-arrow');
            // add event handler to arrows to pause slider when clicked
            $slickArrow.on('click', function() {
                $msBannerSlideshow.slick('slickPause');
                console.log('banner paused');
                // control pause button
                slickPaused = true;
                // change icon
                $pauseButton.removeClass('icon-pause');
                $pauseButton.addClass('icon-play');
            });
        });
    }

    /***************************
     * General
     ***************************/
    site.navbar = $('#navbar'); // logo switching for nav

    var firstTimeCheck = true; // check for first time b/c some vars still undefined
    checkMobile(); // initial

    // make active pseudo styles in mobile safari, from https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
    document.addEventListener("touchstart", function() {}, false);

    /*********************
     * Mobile dropdown menu
     *********************/
    var $navItem = $('.header-nav-title').add($('.footer-nav-title'));
    var $navLists = $('.header-nav-list').add($('.footer-nav-list'));

    // when click a main list item
    $navItem.on('click', function(e) {

        // check if this nav item has as ul as next sibling, from http://stackoverflow.com/a/7678513
        if ($(this).next('ul').length) {
            var hasChildren = true;
        } else {
            var hasChildren = false;
        }

        // if have children, don't follow click on mobile, so can show dropdown sections
        if (site.isMobile && hasChildren) {
            // console.log('dont follow link mobile');
            e.preventDefault ? e.preventDefault() : e.returnValue = false; // for windows too, from http://stackoverflow.com/a/1000606
        }

        var $this = $(this);
        var $thisUl = $this.next('ul');

        // if you are already open, close all
        if ($thisUl.hasClass('nav-show-mobile')) {
            $navLists.removeClass('nav-show-mobile'); // close all other open nav lists
            $navItem.removeClass('active'); // remove all active titles
        }
        // else close all and open yourself
        else {
            $navItem.removeClass('active'); // remove all active titles
            $navLists.removeClass('nav-show-mobile'); // close all other open nav lists
            $this.addClass('active'); // add css styles to title
            $thisUl.addClass('nav-show-mobile'); // show child nav list
        }
    });

    /***************************
     * Mobile Header Animation 
     * from http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
     ***************************/
    var isNavOpen = false;
    var smallerNav = false;
    var $siteToggle = $('#site-toggle');
    var $navBarHeader = $('.navbar-header');
    var $navspacer = $('#navspacer');
    var $logo = $('#logo');
    var $logoSwitchTimer;
    var gapNavHeight = $siteToggle.outerHeight();

    if (site.isMobile) {
        gapNavHeight = 0; // activate next condition immediately
    }

    $(window).scroll(function() {
        // close all if on phone
        if (site.isMobile) {
            // site.navCloseAll(); // close anything else that's open by default // too confusing for long menu
        }

        // when user scrolls past height of site toggle, make smaller if not already
        if (($(this).scrollTop() > gapNavHeight) && smallerNav == false) {
            site.navbar.addClass("is-smaller");
            smallerNav = true;
            // if menu isn't already open, swap logo
            if (menuClosed)
                switchLogo('inline');
            if (!site.isMobile) {
                $navspacer.addClass("navspacer-open"); // open right away
            }
        }
        // if user is still at top of window
        else if ($(this).scrollTop() <= gapNavHeight && smallerNav == true) {
            site.navbar.removeClass("is-smaller"); // shrink
            smallerNav = false;
            if (!site.isMobile)
                $navspacer.removeClass("navspacer-open"); // gracefully close
            // if menu is not already open, switch back to block logo
            if (menuClosed)
                switchLogo('block');
        }
    });

    /********* 
     * Switch Logo - pure CSS
     * @param direction dictates which logo to switch to, block or inline
     * @depen prepareTransition plugin ensures correct display state until end of css transition
     **********/
    var $blockLogos = $('.block-logos');
    var $oneLineLogos = $('.one-line-logos');
    var logoIsBlock = true;

    function switchLogo(direction) {
        // toggle class '.is-transitioning' during opacity fade in/out, then add .hidden when done. Remove hidden when coming back.
        // $blockLogos.prepareTransition().toggleClass('hidden');
        // only show block if at top of viewport and nav isn't already open
        // if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
        if (direction == 'block') {
            // $('.one-line-logos').fadeOut('30');
            // $('.block-logos').fadeIn('30');
            if (!smallerNav && !logoIsBlock) { // go to block if not scrolled down the page and if not already block
                // console.log('going to block');3
                $blockLogos.prepareTransition().removeClass('hidden');

                // CSS only
                $logo.removeClass('logo-is-one-line');
                $logo.addClass('logo-is-block');
                // accessibility prevent double tabbing for 2 logos
                $blockLogos.find('a').attr('tabindex', "0");
                $oneLineLogos.find('a').attr('tabindex', "-1");
                logoIsBlock = true;
            }
        } else {
            // $('.block-logos').fadeOut('30');
            // $('.one-line-logos').fadeIn('30');
            // CSS only
            // if(smallerNav) { // go to one line only if not at top of page
            $blockLogos.prepareTransition().addClass('hidden');
            // console.log('going one-line');
            $logo.removeClass('logo-is-block');
            $logo.addClass('logo-is-one-line');
            $blockLogos.find('a').attr('tabindex', "-1");
            $oneLineLogos.find('a').attr('tabindex', "0");
            logoIsBlock = false;
            // }
        }
    }

    /********* 
     * Switch Logo with jQuery animation
     * @param direction dictates which logo to switch to, block or inline
     **********/
    // function switchLogo(direction) {
    //  // clear timeout so prevent multiple firings
    //  clearTimeout($logoSwitchTimer);
    //  // only show block if at top of viewport and nav isn't already open
    //  if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
    //      $('.one-line-logos').fadeOut('30');
    //      $logoSwitchTimer = setTimeout(function(){ 
    //          $('.block-logos').fadeIn('30');
    //      }, 30);
    //  } else {
    //      $('.block-logos').fadeOut('30');
    //      $logoSwitchTimer = setTimeout(function(){ 
    //          $('.one-line-logos').fadeIn('30');
    //      }, 30);
    //  }
    // }

    /***************************
     * Navbar
     **************************/

    // CLICK OUTSIDE MENU
    // activate outside navbar div
    var $navbarOutside = $('.navbar-outside');
    var $folkwaysNav = $('.folkways-nav');

    // Icons
    var $menuIcon = $('#menu-icon');
    var $shareIcon = $('#share-icon');
    var $searchIcon = $('#search-icon');

    // GRAY OUT NAV
    var $allIcons = $menuIcon.add($shareIcon).add($searchIcon);
    var $notMenuIcon = $allIcons.not($menuIcon);
    var $notShareIcon = $allIcons.not($shareIcon);
    var $notSearchIcon = $allIcons.not($searchIcon);

    // close nav if clicked
    $navbarOutside.on('click', function() {
        site.navCloseAll(); // close all auxiliary nav
        $navbarOutside.css('position', 'static'); // not fixed so not active
        $menuIcon.add($shareIcon).add($searchIcon).show(); // show just the main icons again
    });

    /*********************
     * Menu
     *********************/
    var $megaNav = $('#header-nav');
    var $megaNavItem = $('.header-nav-sub-item');
    var menuClosed = true;

    // when click share icon
    $menuIcon.on('click', function() {
        toggleMenu();
    });

    /*********************
     * Accessibility
     * example at from https://nationalzoo.si.edu/ although zoo not work in firefox or safari b/c no tabindex="0"?
     *********************/
    $('.skip-main').on('click', function() {
        $(this).blur();
        $('#main-content').focus();
    });
    $menuIcon.focusin(function() {
        // $(this).click();
        // $megaNav.find('a').first().focus(); // go to first nav item otherwise will go to shareIcon
    });

    // keyboard commands, from from http://stackoverflow.com/a/16145062 and http://keycode.info/
    $(window).keyup(function(e) {
        // get keycode
        var code = (e.keyCode ? e.keyCode : e.which);
        // when hamburger is focused, show menu
        // if was tab and menu icon is focused, show menu for accessibility
        if (code == 9 && $menuIcon.is(":focus")) {
            // alert('I was tabbed!');
            toggleMenu();
            $megaNav.find('a').first().focus(); // go to first nav item otherwise will go to shareIcon
        }

        // show search on enter
        if (code == 13 && $searchIcon.is(":focus")) {
            $searchIcon.click();
        }

        // show share on enter
        if (code == 13 && $shareIcon.is(":focus")) {
            $shareIcon.click();
        }

    });

    $megaNav.find('a').last().focusout(function() {
        site.navCloseAll(); // close mega nav
        $shareIcon.focus(); // go back to nav icons
    });
    $menuIcon.keydown(function(event) {
        // $(this).addClass('open');
    });

    // $('.header-nav-sub-item a').on({
    //        focus : function() {
    //            $(this).closest('.header-nav-sub-item').css('outline','1px dotted #000');
    //        },
    //        blur : function() {
    //            $(this).closest('.header-nav-sub-item').css('outline','none');
    //        }
    //    });

    // hide menu when go to internal anchor link
    $megaNavItem.on('click', function() {
        site.navCloseAll();
    });

    function toggleMenu() {
        // if not yet open
        if (menuClosed) {
            site.navCloseAll(); // after we've determined that menu is closed, close anything else that's open by default
            site.navbar.addClass('is-open');
            // if logo not already one-line because scrolled down
            console.log('open the menu!');
            if (logoIsBlock)
                switchLogo('one-line');

            $navbarOutside.css('position', 'fixed'); // activate navbarOutside
            $notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
            $megaNav.css('display', 'block'); // show social media icons
            menuClosed = false; // flag for closing 
            $folkwaysNav.hide(); // hide folkways nav
        } else {
            console.log('menuClosed :', menuClosed);
            site.navCloseAll(); // close anything else that's open by default, and sets menuClosed to true
            // if user is still at top of window
            console.log('might go to block');
            // menuClosed = true;
        }
    }

    /*********************
     * Social Media Icons
     *********************/
    var $socialMediaIconDivMobile = $('.mobile-social-icons');
    var $socialMediaIconsMobile = $('.mobile-social-icon');
    var $socialMediaIconsDesktop = $('.desktop-social-icons');
    var $socialMediaIcons = $('.social-icons');
    var shareClosed = true;

    // when click share icon
    $shareIcon.on('click', function() {
        // if not yet open
        if (shareClosed) {
            site.navCloseAll(); // close anything else that's open by default, only after we've determined that share is Closed
            site.navbar.addClass('is-open');
            if (site.isMobile) { // switch to one-line logo in mobile view
                site.navbar.addClass('has-one-line-logo');
                switchLogo('one-line');
            }
            $navbarOutside.css('position', 'fixed'); // activate navbarOutside          
            $notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
            shareClosed = false; // flag for closing    
            $socialMediaIcons.show();
        } else {
            site.navCloseAll(); // close anything else that's open by default
            shareClosed = true; // flag for closing 
            switchLogo('block');
        }
    });

    /*********************
     * Search 
     *********************/
    var $searchBar = $('.search-bar');
    var $searchBarMobile = $('.mobile-search-bar');
    var $browsenav = $('#browsenav'); // will only exist on folkways, otherwise hidden with php
    var searchClosed = true;
    var $searchInput = $('#search-input');

    // when click share icon
    $searchIcon.on('click', function() {
        // if not yet open
        if (searchClosed) {
            site.navCloseAll(); // after we've determined that search is closed, close anything else that's open by default
            if (site.isMobile) { // switch to one-line logo in mobile view
                site.navbar.addClass('has-one-line-logo');
                switchLogo('one-line');
            }
            site.navbar.addClass('is-open');
            $navbarOutside.css('position', 'fixed'); // activate navbarOutside
            $notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
            $searchBar.add($browsenav).show(); // show social media icons
            searchClosed = false; // flag for closing   
            $folkwaysNav.hide(); // hide folkways nav
            $searchInput.focus(); // focus in field that exists in desktop
        } else {
            site.navCloseAll(); // close anything else that's open by default
            searchClosed = true; // flag for closing    
            switchLogo('block');
        }
    });

    /*********************
     * global close nav
     * for access by local site script files
     *********************/
    site.navCloseAll = function() {
        // close other icons
        if (site.isMobile)
            $navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
        else
            $folkwaysNav.show(); // reset folkways nav, but not on mobile

        if ($(window).scrollTop() <= gapNavHeight && menuClosed == false) {
            console.log('swith to block');
            switchLogo('block');
        }

        $navbarOutside.css('position', 'static'); // remove outside clicker so can hover rest of page
        site.navbar.removeClass('is-open');
        $allIcons.removeClass('lighter-nav-icons');
        $megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
        menuClosed = true;
        searchClosed = true;
        shareClosed = true;
        site.navbar.removeClass('has-one-line-logo'); // switch back to block logo
    }

    /*********************
     * Video
     * dependencies: remodal.js, vimeo-player-js
     *********************/
    // initialize here
    var remodalInstanceOptions = {
        hashTracking: false
    }
    var remodalInstance = $('[data-remodal-id=modal]').remodal(remodalInstanceOptions);

    var $remodal = $('.remodal');
    // var $remodalIframe = $remodal.find('.remodal-iframe');
    var $remodalTitle = $remodal.find('.remodal-title');
    var $remodalDescription = $remodal.find('.remodal-description');
    var $remodalClose = $remodal.find('.remodal-close');
    var videoPlayerIsOpen = false;

    // Vimeo
    var $vimeoIframe = $('#vimeo-iframe');
    var vimeoPlayerIsLoaded = false;
    var vimeoPlayer; // global for playing, pausing
    var isVimeo; // global for determining if using Vimeo or YouTube

    // YouTube
    var $youTubeIframeWrapper = $('#youtube-iframe-wrapper');
    var $youTubeIframe = $('#youtube-iframe');

    function playYTVideo() {
        youTubePlayer.playVideo();
        // player.playVideo();
        // console.log('video started');
    }

    function stopYTVideo() {
        youTubePlayer.stopVideo();
        // console.log('video stopped');
    }
    // 4. The API will call this function when the video player is ready.
    function onYouTubePlayerReady(event) {
        event.target.playVideo();
    }

    /*********
     * wrap videos as function so can call after magazine article sidebar created
     *********/
    site.videoPopupBuilder = function(video) {

        // on playing a video in the gallery...
        // $('.video').on('click', function() {
        // bind multiple events, from http://stackoverflow.com/a/2534107
        $(video).on('click keypress', function() {

            // if enter key, from http://stackoverflow.com/a/2534107

            console.log('play vimeo video');

            // close any slideshow that's open
            if (galleryIsSlick) {
                // hide remodal gallery
                $remodalGallery.hide();
                $remodalCaptions.hide();
            }

            // manually open remodal because sometimes just doesn't do it
            remodalInstance.open();

            // flag for checking against image gallery
            videoPlayerIsOpen = true;

            // Get video info from html data-* attributes
            $videoType = $(this).data('type');
            $videoID = $(this).data('id');
            $videoTitle = $(this).data('title');
            $description = $(this).data('description');

            // Set video type
            if ($videoType == 'youtube') {
                isVimeo = false;
            } else
                isVimeo = true;

            // Set video info in html
            $remodalTitle.html($videoTitle);
            $remodalDescription.html($description);

            // show close button
            $remodalClose.removeClass('visually-hidden');

            if (isVimeo) {
                $youTubeIframeWrapper.hide();
                $vimeoIframe.show();
                // if first time loading a video...
                var options = {
                        id: $videoID,
                        width: 640,
                        autoplay: true,
                    }
                    // console.log('id updated');       

                // load vimeo player once
                if (!vimeoPlayerIsLoaded) {
                    vimeoPlayer = new Vimeo.Player('vimeo-iframe', options);
                    vimeoPlayerIsLoaded = true;
                    vimeoPlayer.play();
                }
                // else just reload the vimeoPlayer
                else {
                    vimeoPlayer.loadVideo($videoID).then(function() {
                        // console.log('not set');
                        vimeoPlayer.play();
                    });
                }

                // else is YouTube
            } else {
                $vimeoIframe.hide();
                $youTubeIframeWrapper.show(); // unhide

                // youtube replaces passed div id with iframe, unlive vimeo which makes child element
                // so need to target child here
                youTubePlayer = new YT.Player('youtube-iframe', {
                    videoId: $videoID,
                    events: {
                        'onReady': onYouTubePlayerReady,
                    }
                });
            }
        })
    }

    // activate all videos that exist on page load
    site.videoPopupBuilder($('.video'));

    /*********************
     * Image Gallery
     * dependencies: remodal.js
     *********************/
    var $remodalGallery = $remodal.find('.remodal-gallery');
    var $remodalCaptions = $remodal.find('.remodal-captions');
    var $remodalOverlay = $('.remodal-overlay');
    var galleryIsOpen = false;
    var galleryIsSlick = false;
    var singleImage = false;

    // @param $initialSlide is number of slide that was clicked so can show up first in gallery
    $('.image-gallery').on('click', function() {
        // cancel last slick so can start a new one on same class?
        // adds something to dom, so called before empty(), but necessary to be able to call again
        if (galleryIsSlick) {
            $remodalGallery.slick('unslick');
            $remodalCaptions.slick('unslick');
        }

        // if single image
        if ($(this).hasClass('single-image-popup')) {
            console.log('single image');
            singleImage = true;
            $remodalCaptions.addClass('single-image-caption');
        }

        // flag for closing
        galleryIsOpen = true;

        // hide videos
        $youTubeIframeWrapper.hide();
        $vimeoIframe.hide();
        // show gallery in case was hidden by videos
        $remodalGallery.show();
        $remodalCaptions.show();

        // clear remodal gallery of old images
        $remodalGallery.empty();
        $remodalCaptions.empty();

        // temp hide until loaded
        $remodalGallery.css('visibility', 'hidden');

        // build gallery
        // get images for gallery by going up to grandparent, then finding all classed images, then copying them for use in remodal
        $(this).find('.gallery-list').children().clone().appendTo($remodalGallery);

        // build captions
        $(this).find('.gallery-list-captions').children().clone().appendTo($remodalCaptions);

        // manually open remodal because sometimes just doesn't do it
        remodalInstance.open();

        // flag to destroy
        galleryIsSlick = true;

        // show gallery before call slick because needs to be right size or visible or something?
        $remodal.addClass('remodal-gallery-is-open remodal-image-gallery');

        // get position of image to center captions after slider inits
        // DOESNT WORK WITH LARGE CAPTIONS
        // $remodalGallery.on('init', function(slick) {
        //  var imageOffset = $('.slick-active img').offset();
        //  var magicOffset = 12;
        //  $('.gallery-caption').css('padding-left', imageOffset.left + magicOffset);
        // });

        // initiate slick gallery on images
        $remodalGallery.slick({
            speed: 0,
            mobileFirst: true,
            centerMode: true,
            centerPadding: '40px',
            variableWidth: true,
            slidesToShow: 1,
            asNavFor: '.remodal-captions',
            adaptiveHeight: true,
            centerPadding: '0',
            prevArrow: '<svg title="previous" class="svg-slick-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-leftarrow"></use></svg>',
            nextArrow: '<svg title="next" class="svg-slick-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-rightarrow"></use></svg>',
            responsive: [{
                breakpoint: site.break2,
                settings: {
                    speed: 300,
                    centerPadding: '40px',
                }

            }]
        });
        // initiate captions
        $remodalCaptions.slick({
            mobileFirst: true,
            speed: 0,
            // centerMode: true,
            // centerPadding: '0',
            slidesToShow: 1,
            asNavFor: '.remodal-gallery',
            arrows: false,
            // respondTo: 'slider', // width
            responsive: [{
                breakpoint: site.break2,
                settings: {
                    speed: 300,
                    // centerPadding: '40px',
                }

            }]
        })

        // show it now
        $remodalGallery.css('visibility', 'visible');

    });

    /*********************
     * Cover Art Popup
     * dependencies: remodal.js
     *********************/
    var $remodalGallery = $remodal.find('.remodal-gallery');
    var galleryIsSlick = false;

    // on clicking an image with the class .cover art...
    // @param $initialSlide is number of slide that was clicked so can show up first in gallery
    $('.cover-art').on('click', function() {
        // cancel last slick so can start a new one on same class?
        // adds something to dom, so called before empty(), but necessary to be able to call again
        if (galleryIsSlick) {
            $remodalGallery.slick('unslick');
        }

        // clear remodal gallery of old images
        $remodalGallery.empty();

        // get initial slide
        var initialSlide = $(this).data('slide-index');
        var initialSlide = $(this).parents('.cover-art-set').data('popup');

        console.log('$(this)', $(this));
        console.log('initialSlide', initialSlide);

        // build gallery
        // get images for gallery by going up to grandparent, then finding all classed images, then copying them for use in remodal
        $('.cover-art-popup').clone().appendTo($remodalGallery);

        // manually open remodal because sometimes just doesn't do it
        remodalInstance.open();

        // flag to destroy
        galleryIsSlick = true;

        // show gallery before initiate slick so can open correctly
        $remodal.addClass('remodal-gallery-is-open remodal-image-gallery');

        // initiate slick gallery on images
        $remodalGallery.slick({
            mobileFirst: true,
            variableWidth: true,
            adaptiveHeight: true,
            "initialSlide": initialSlide,
            speed: 0,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            infinite: false,
            prevArrow: '<svg title="previous" class="svg-slick-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-leftarrow"></use></svg>',
            nextArrow: '<svg title="next" class="svg-slick-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-rightarrow"></use></svg>',
            responsive: [{
                breakpoint: site.break2,
                settings: {
                    speed: 300,
                    centerPadding: '40px',
                }

            }]
        });
    });


    /********************
     * Closing the Remodal
     * listen for closing, from https://github.com/VodkaBears/Remodal
     ********************/
    $(document).on('closing', '.remodal', function(e) {
        // unload vidoe if video was open
        if (videoPlayerIsOpen) {
            if (isVimeo) {
                vimeoPlayer.unload().then(function() {
                    // console.log('unloaded video');
                }); // reset iframe 
                // is YouTube
            } else {
                // stopYTVideo();
                // if player had time to start
                youTubePlayer.stopVideo();
                youTubePlayer.destroy(); // so can build again
            }
            // reset flag
            videoPlayerIsOpen = false;
        }

        // reset after image gallery
        if (galleryIsOpen) {
            // delay to prevent flash of video bg
            setTimeout(function() {
                $remodal.removeClass('remodal-gallery-is-open remodal-image-gallery');
                // console.log('gallery classes removed');          
                galleryIsOpen = false; // reset flag
            }, 500); // delay 500 ms

            // remove single image designation so can show gallery captions next
            $remodalCaptions.removeClass('single-image-caption');
            // console.log('single-image-caption class removed');
            singleImage = false; // reset
        }

        $remodalClose.addClass('visually-hidden');
    });

    // close remodal with X
    $remodalClose.on('click', function() {
        remodalInstance.close();
    });

    /********************
     * Smooth Scrolling
     * add .smooth-scroll to an anchor tag to get this
     * from https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
     ********************/
    $('a.smooth-scroll[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 400);
        }
    });

    /*********
     * Slick nav functions
     **********/
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    /*********************
     * Microsite Gallery Slider
     * Uses slick.js from Ken Wheeler at http://kenwheeler.github.io/slick/
     *********************/
    // $('.ms-header-inner').slick({
    $msBannerSlideshow.slick({
        mobileFirst: 'true',
        // combine with mobile
        arrows: false,
        autoplaySpeed: 4000,
        autoplay: true, // pause for testing
        pauseOnHover: false,
        prevArrow: '<svg title="previous" class="svg-slick-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-leftarrow"></use></svg>',
        nextArrow: '<svg title="next" class="svg-slick-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-folklife-rightarrow"></use></svg>',
        responsive: [{
            breakpoint: 852,
            settings: {
                centerPadding: '80px',
                arrows: true,
                appendDots: '.dots',
                dots: true,
                autoplaySpeed: 5000
            }
        }, {
            breakpoint: 1560,
            settings: {
                // padding on both sides is screen width minus width of main area, divided by 2 for each side
                centerPadding: 'calc((100vw - 1400px) / 2)',
                arrows: true,
                dots: true,
                appendDots: '.dots'
            }
        }]
    });

    /*********
     * Audio card - Media Element JS
     *********/
    // wrap time elements together after load. They don't come togethery by default and it is impossible to line them up according to the layout without having a parent wrapper.
    // set as var so can call when other mejs elements load, after page load
    wrapTime = function($currentTime) {
        var $durationTime = $currentTime.siblings('.mejs-duration-container');
        // wrap current time and duration time in new div for correct positioning
        $currentTime.add($durationTime).wrapAll('<div class="mejs-time-wrapper">');
    }

    wrapNonControls = function(mediaElement) {
        // add svg to button
        var $playButton = $(mediaElement.player.controls[0]).find('button');
        $playButton.addClass('svg-play-button').append('<svg title="play button circle" class="svg-play-button-circle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-circle"></use></svg><svg title="play button arrow" class="svg-play-button-play"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-play"></use></svg><svg title="play button arrow" class="svg-play-button-pause"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Images/icons/icons.svg#icon-pause"></use></svg>');

        // move timerail up, with http://api.jquery.com/insertBefore/
        var $timeRail = $(mediaElement.player.controls[0]).find('.mejs-time-rail');
        var $currentTime = $(mediaElement.player.controls[0]).find('.mejs-currenttime-container');

        // move time rail up for better positioning
        $timeRail.insertBefore($currentTime);

        // wrap all non-button elements, from http://stackoverflow.com/a/25324520
        // var $nonButtonControls = $(mediaElement.player.controls[0]).children().not('.mejs-playpause-button');
        // console.log('$(mediaElement.player)', $(mediaElement.player));
        var $nonButtonControls = $(mediaElement.player.controls[0]).children().not('.mejs-playpause-button'); // add playlist number and controls
        // var $nonButtonControls = $(mediaElement.player.controls[0]).children().not('.mejs-playpause-button').add($(mediaElement.player.controls[0]).parents('.audio-player').find('.track-title'));
        $nonButtonControls.wrapAll('<div class="non-button-controls clearfix" />');

        // add track title to non-button-controls because can't do this earlier or completely messses up player
        var $trackTitle = $(mediaElement.player.controls[0]).parents('.audio-player').find('.track-title');
        // console.log('$trackTitle', $trackTitle);
        var $nonButtonControlElement = $(mediaElement.player.controls[0]).find('.non-button-controls'); // get new controls div
        var $mejsContainer = $(mediaElement.player.container[0]); // get media container for later searching
        var $playlistRow1 = $mejsContainer.siblings('.playlist-row-1');

        // add the follwing in reverse order for correct order in parent div
        $nonButtonControlElement.prepend($playlistRow1); // add track title at top
        $nonButtonControlElement.prepend($trackTitle); // add track title at top
    }

    // find currenttime containers and wrap them with closest duration container
    $('.mejs-currenttime-container').each(function() {
        // get closest duration time
        wrapTime($(this));
    });

    // keep play button visible after click
    var showPause = true;

    var buttonControl = function($playButton) {
        console.log('$playButton', $playButton);
        $playButton.on('click keypress', function() {
            console.log('audio clicked');
            var $track = $(this).closest('.track');
            var $trackNumber = $track.find('.track-number'); // get closest so don't show all
            // check if this button is playing or not
            if ($track.find('.mejs-playpause-button').hasClass('mejs-play'))
                $trackNumber.addClass('hidden');
            else
                $trackNumber.removeClass('hidden');
        })
    }

    // $('.track-audio').on('keypress', function() {
    //  console.log('play it');
    // });

    // manually init so can hear when pausing
    $('.track-audio').mediaelementplayer({
        startVolume: 0.5,
        setDimensions: false,
        features: ["playpause"], // don't show time on track listing
        // pluginPath: "/path/to/shims/", 
        success: function(mediaElement, originalNode) {
            // $originalNode = $(originalNode); // jquery cache
            console.log('mediaElement', mediaElement);

            // pass playpause button to get listener
            buttonControl($(mediaElement.player.controls[0].firstChild));

            // wrap all non-controls and make icon to svg
            wrapNonControls(mediaElement);


            // Bring Track number back when audio paused
            mediaElement.addEventListener('pause', function(e) {
                var $trackAudio = $(e.target);
                var $track = $(this).closest('.track');
                var $trackNumber = $track.find('.track-number'); // get closest so don't show all
                $trackNumber.removeClass('hidden');
            }, false);
        }
    });

    /*****
     * Standard Audio Card
     * manually call so can listen for success and make custom html
     *****/
    $('.mejs-player-svg').mediaelementplayer({
        // pluginPath: "/path/to/shims/",
        startVolume: 0.5,
        setDimensions: false,
        success: function(mediaElement, originalNode) {
            // do things after player loaded
            // console.info('player loaded');
            // console.log('mediaElement', mediaElement);
            // console.log('originalNode', originalNode);
            // console.log('mediaElement.player.controls', mediaElement.player.controls);
            // wrap all non-controls
            wrapNonControls(mediaElement);
        }
    });


    /*********
     * Audio card - Playlist
     * plugin from duozersk
     * https://github.com/duozersk/mep-feature-playlist
     *********/

    var playlist = []; // global playlist var so can access everywhere
    // console.log(myPlaylist[0]);

    // initialize player so can get id for vars
    /**********
     * Start media element player
     * after build, make new playlist with data from 
     **********/
    $('.playlist-audio').mediaelementplayer({
        pluginPath: "/path/to/shims/",
        success: function(mediaElement, originalNode) {
            // console.log('mejs audio created');
            // console.log('mediaElement.player', mediaElement.player);
            // console.log('originalNode', originalNode);
            wrapNonControls(mediaElement);

            // better mejs html
            // var currentTimeContainer = $(originalNode).find('.mejs-currenttime-container');

            // console.log('currentTimeContainer :', mediaElement.player.currenttime[0].parentNode);
            // console.log(currentTimeContainer);
            // wrapTime($(mediaElement.player.currenttime[0].parentNode));

            var playerID = mediaElement.player.id;
            // console.log('playerID :', playerID);

            // initialize player because elements now exist
            playlist[playerID] = new Playlist(playerID);
            // set first track
            // playlist.cover = 
            playlist[playerID].cover.attr('src', myPlaylist[0].cover); // update album cover
            playlist[playerID].title.html(myPlaylist[0].title); // update album title
            playlist[playerID].artist.html(myPlaylist[0].artist); // update album artist
            playlist[playerID].audioElement[0].setSrc(myPlaylist[0].mp3); // set new track to play
            playlist[playerID].trackTotal.html(myPlaylist.length);// set total track numbers

            // Event Listeners
            mediaElement.addEventListener('ended', function(e) {
                playlist[playerID].playNextTrack();
            }, false);
        }
    });


    /**********
     * Playlist constructor function
     * inspired by http://stackoverflow.com/a/15174529
     * var myPlayList is array with playlist data, loaded from script tag in html
     **********/
    function Playlist(playerID) {
        // get local audio card in case others on page
        var $audioCard = $('#' + playerID).closest('.audio-card');
        // this.mejsPlayer = mejs.players[this.playerID];
        this.mejsPlayer = mejs.players[playerID];
        this.player = this.mejsPlayer;

        // console.log('this.player :', this.mejsPlayer);
        this.cover = $audioCard.find('.playlist-cover');
        this.coverLink = $audioCard.find('.image a');
        this.title = $audioCard.find('.playlist-title');
        this.artist = $audioCard.find('#playlist-artist');
        this.trackLink = $audioCard.find('.title');
        this.trackNumber = $audioCard.find('.playlist-number');
        this.trackTotal = $audioCard.find('.playlist-total');

        // get total number of tracks in playlist
        // this.trackTotalNumber = $audioCard.find('.playlist-total').html();
        this.trackTotalNumber = myPlaylist.length;
        console.log('this.trackTotalNumber', this.trackTotalNumber);
        // this.audioElement = $('#playlist-audio');
        // this.audioElement = $audioCard.find('.playlist-audio');
        this.audioElement = this.player.$media;

        console.log('this.audioElement :', this.audioElement);
        // this.audioElement = this.player.node;
        this.currentTrack = 0;
        this.length = Object.keys(myPlaylist).length;

        /**********
         * Update playlist player
         * @param track is album json data
         **********/
        this.updatePlayer = function(track) {
            console.log('track', track);
            this.trackNumber.html(track.seqno.slice(0, -1) + '/' + this.trackTotalNumber); // update current track number, removing . from last char of seqno
            // console.log($playlist.audioElement);
            this.cover.attr('src', track.cover); // update album cover
            this.coverLink.attr('href', track.url); // update album cover
            this.trackLink.attr('href', track.url); // update album cover
            console.log('this.coverLink', this.coverLink);
            this.title.html(track.title); // update album title
            this.artist.html(track.artist); // update album artist
            this.audioElement[0].setSrc(track.mp3); // set new track to play
            this.player.play(); // play track
        }

        /**********
         * Play previous track
         **********/
        this.playPrevTrack = function($player) {
            // if current track is 0, change to last track
            if (playlist[playerID].currentTrack == 0)
                playlist[playerID].currentTrack = playlist[playerID].length - 1;
            // else play track - 1 
            else
                playlist[playerID].currentTrack--;

            // update player with image, src, play, etc.
            playlist[playerID].updatePlayer(myPlaylist[this.currentTrack]);
        }

        /**********
         * Play next track
         **********/
        this.playNextTrack = function($player) {
            if (this.currentTrack == this.length - 1)
                this.currentTrack = 0;
            else
                this.currentTrack++;

            // console.log('$player :', $player);
            // show currentTrack as playlist number


            // update player with image, src, play, etc.
            // playlist.updatePlayer(myPlaylist[this.currentTrack]);
            playlist[playerID].updatePlayer(myPlaylist[this.currentTrack]);
        }
    }

    /**********
     * Track Skipping Buttons
     **********/
    // Previous Track
    $('.previous-button').click(function() {
        $audio = $(this).parents('.playlist-audio');
        currentPlayerID = $audio.attr('id');
        playlist[currentPlayerID].playPrevTrack();
    })

    // Next Track
    $('.next-button').click(function() {
        // get closest audio player
        // $audio = $(this).parent().siblings('.playlist-audio');
        $audio = $(this).parents('.playlist-audio');
        currentPlayerID = $audio.attr('id');
        playlist[currentPlayerID].playNextTrack();
    })

    /*********************
     * Show figcaption
     * When click +
     *********************/
    // for any program page image
    // if (site.$body.hasClass('program-page') || site.$body.hasClass('program-category-page') || site.$body.hasClass('general-page') || site.$body.hasClass('lesson-plan-page') || site.$body.hasClass('blog-article-page')) {
    // work on all pages until run into conflict with figure tag
    var $figcaption = $('.container').find('figcaption'); // get all figures on the page
    // if click on figure, show figcaption
    // important that pointer-events have been set to none for <figure> This allows us to listen to :after element
    $figcaption.on('click', function() {
        // console.log('show caption');
        $this = $(this); // cache var
        $thisInner = $this.find('.figcaption-inner')
        if ($thisInner.css('visibility') == 'hidden') { // if hidden, show
            // $this.css('visibility', 'visible');
            $thisInner.css('visibility', 'visible');
            $this.addClass('minus-sign'); // add minus sign
            // $this.attr('data-content');// add minus sign
            // pause micro site banner if exists
            if ($this.parents('.ms-banner-slideshow').length) {
                // console.log('banner paused');
                $msBannerSlideshow.slick('slickPause');
                slickPaused = true;
                // change icon
                $pauseButton.removeClass('icon-pause');
                $pauseButton.addClass('icon-play');
            }
        } else { // else hide
            // $this.css('visibility', 'hidden');
            $thisInner.css('visibility', 'hidden');
            $this.removeClass('minus-sign'); // add minus sign
            // play micro site banner if exists
            if ($this.parents('.ms-banner-slideshow').length) {
                // console.log('banner paused');
                $msBannerSlideshow.slick('slickPlay');
                slickPaused = false;
                // change icon
                $pauseButton.removeClass('icon-play');
                $pauseButton.addClass('icon-pause');
            }
        }
    });

    /**********
     * Match Heights
     * from https://github.com/liabru/jquery-match-height
     **********/
    $('.audio-card .details-inner').matchHeight();

    /**********
     * Custom dropdowns
     **********/
    // $('.dropdown-select').niceSelect();
    // add class for dropdown arrows, from http://stackoverflow.com/a/21253034
    $('.dropdown-title ~ ul.title-has-dropdown').addClass('has-sub');

    /*********************
     * Search page Filter
     *********************/
    // More/Less button
    var secondFilterRowIsClosed = true;
    // class selectors b/c mobile and desktop buttons
    $('.filter-more-button').on('click', function() {
        if (secondFilterRowIsClosed) {
            $(this).html('Less');
            $('.filter-more-band').show();
            secondFilterRowIsClosed = false;
        } else {
            $(this).html('More');
            $('.filter-more-band').hide();
            secondFilterRowIsClosed = true;
        }
    });

    // FILTER DROPDOWNS ON MOBILE, NO HOVER
    // Set open/closed tracker for 3 levels of dropdown menus
    var $dropdowns = $('.dropdown-wrapper ul'); // can close all on mobile
    var $firstLevelDropdownTitles = $('.first-level-dropdown-title');
    var $secondLevelDropdownTitles = $('.second-level-dropdown-title');
    var $thirdLevelDropdownTitles = $('.third-level-dropdown-title');
    var $allDropdownTitles = $firstLevelDropdownTitles.add($secondLevelDropdownTitles).add($thirdLevelDropdownTitles);

    // set it up, even on window resizing
    function dropdownToggleInit() {
        // open or close first level dropdown
        $firstLevelDropdownTitles.on('click', function() {
            dropdownToggle($(this), 'first');
        });

        // open or close second level dropdown
        $secondLevelDropdownTitles.on('click', function() {
            dropdownToggle($(this), 'second');
        });

        // open or close third level dropdown
        $thirdLevelDropdownTitles.on('click', function() {
            dropdownToggle($(this), 'third');
        });
    }

    // destroy on screen resize
    function dropdownToggleDestroy() {
        $firstLevelDropdownTitles.unbind();
        $secondLevelDropdownTitles.unbind();
        $thirdLevelDropdownTitles.unbind();
    }

    // dropdown toggle for mobile shows and hides child dropdowns
    // @param $this is element that was clicked
    // @param level is boolean saying whether dropdown open or closed on that dropdown level (first, second third)
    function dropdownToggle($this, level) {
        // close all other filters at same level to start out
        if (level == 'first') {
            $firstLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status of all other titles at same level
            $firstLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
        }
        if (level == 'second') {
            $secondLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status
            $secondLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
        }
        if (level == 'third') {
            $thirdLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status
            $thirdLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
        }

        // close dropdown
        if ($this.hasClass('dropdown-title-is-open')) {
            $this.removeClass('dropdown-title-is-open'); // show other dropdowns
        } else {
            $this.addClass('dropdown-title-is-open'); // show other dropdowns
            $this.next('ul').show(); // show other dropdowns
            $filterOutside.css('position', 'fixed'); // activate navbarOutside
        }
    }

    // click outside to close all on mobile
    var $filterOutside = $('.filter-outside');

    $filterOutside.on('click', function() {
        // close all filter dropdowns on search page and reset
        $filterOutside.css('position', 'static'); // not fixed so not active
        $allDropdownTitles.removeClass('dropdown-title-is-open'); // reset all titles
        $('.dropdown-wrapper ul').hide(); // close all dropdowns
    });

    // init
    if (site.isMobile)
        dropdownToggleInit();

    /***************************
     * Language Buttons
     **************************/
    var $languageButtons = $('.language-buttons')
    var $allLanguageButtons = $languageButtons.find('.button');
    var numLanguages = $allLanguageButtons.length / 2;
    // console.log(numLanguages);

    // when click any language button...
    $allLanguageButtons.click(function() {
        $allLanguageButtons.removeClass('is-active'); // reset all
        var $buttonIndex = $(this).index(); // get position of this button so can change mobile or desktop buttons too
        // console.log($buttonIndex);
        // $languageButtons.children().eq($buttonIndex).addClass('is-active'); // change all
        $languageButtons.children().eq($buttonIndex).addClass('is-active'); // activate desktop and mobile buttons for this language
        $languageButtons.children().eq($buttonIndex + numLanguages).addClass('is-active'); // activate desktop and mobile buttons for this language
    });

    /**********
     * Check Mobile every time resize the browser
     **********/
    // set mobile flag
    function checkMobile() {
        site.screenSize = $(window).width();
        // only do it if already not mobile or initial
        if (site.screenSize < site.break2) {
            site.isMobile = true;
            // only check if already mobile and bigger
        } else if (site.screenSize > site.break2) {
            site.isMobile = false;
        }
    }

    // get new dimensions on resize
    $(window).on('resize', function() {
        checkMobile();
    });

    /***************************
     * Social Sharing, common
     **************************/
    // Set correct href for social sharing, for Orchard CMS
    var pageURL = window.location.href;
    var pageTitle = document.title;
    // console.log('pageURL', pageURL);
    $('.social-icons a').each(function() {
        // if not pinterest button which has no href
        if(!$(this).hasClass('object-pinterest')) {
            var oldHref = $(this).attr('href'); // get old href
            var newHref = oldHref.replace('#PageURL', pageURL); // replace #PageURL with real one
            newHref = newHref.replace('#PageTitle', pageTitle); // replace #PageTitle with real one
            newHref = encodeURI(newHref); // from https://stackoverflow.com/a/332897/4504073
            console.log('newHref', newHref);
            $(this).attr('href', newHref); // set url to newHref
        }        
    });

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        // js.src = "//connect.facebook.net/en_US/all.js";
        // needed specific version for 50objects for some reason, from https://stackoverflow.com/a/32363747/4504073
        // js.src = "//connect.facebook.net/en_US/sdk.js?version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // set button
    if ($('#share-facebook')) {
        $('#share-facebook').click(function() {
            FB.ui({
                method: 'share',
                display: 'popup',
                href: pageURL,
            }, function(response) {});
        })
    }

    // 50 objects sharing
    $('.object-facebook').click(function() {
        // console.log('$(this)', $(this));
        var $this = $(this);
        var dataURL = $(this).data('url');
        console.log('dataURL', dataURL);

        // like other CFCH sites
        FB.ui({
            method: 'share',
            display: 'popup',
            href: dataURL,
            // redirect_uri: 'http://festival.si.edu/50objects#transatlantic-salmon'
        }, function(response) {});

        // unique inside this page
        // FB.api(
        //     "/me/objects/website",
        //     "POST",
        //     {
        //        "object": "{\"fb:app_id\":\"1645643478796675\",\"og:type\":\"article\",\"og:url\":\"http://festival.si.edu/transatlantic-salmon\",\"og:title\":\"Transatlantic Salmon\",\"og:image\":\"https:\\\/\\\/s-static.ak.fbcdn.net\\\/images\\\/devsite\\\/attachment_blank.png\"}"
        //     },
        //     function(response) {}
        // );

        // another try
        // FB.ui({
        //   method: 'send',
        //   link: 'http://festival.si.edu/50objects/transatlantic-salmon',
        // });

    })

    /***************************
     * Bootstrap accordian
     * http://v4-alpha.getbootstrap.com/components/collapse/#accordion-example
     **************************/
    // var $collapse = $('.collapse');
    // $collapse.collapse();
    // more link and arrow changer  
    // var $more_link = $('.accordian-toggle').find('.more-link-text');
    // $('.more-link-will-change').on('click', function() {
    $('.content .more-link').on('click', function() {
        var text = $(this).find('.more-link-text');
        if (text.html() == 'more') {
            text.html('less');
            // text.addClass('more-link-less');
        } else {
            text.html('more');
            // text.removeClass('more-link-less');
        }
    })


    /*********************
     * Translation Button
     *********************/
    $('.language-buttons').find('a').each(function(index) {
        var elt = $(this);
        var url = "" + window.location;
        var normalizedURL = url.replace(/en-espanol\/smithsonian$/, 'smithsonian');
        var spanishURL = normalizedURL.replace(/smithsonian$/, 'en-espanol/smithsonian');

        var isSpanish = url.match(/en-espanol/);
        var onIndex;
        if (isSpanish)
            onIndex = 1;
        else
            onIndex = 0

        if (index == 0)
            elt.attr('href', normalizedURL);
        else
            elt.attr('href', spanishURL);

        if (index == onIndex)
            elt.attr('class', 'is-active')
    });

    /*****
     * Paging
     * as seen in Past Festivals
     *****/
    var currentPages = [];
    currentPages['alpha'] = 1;
    currentPages['year'] = 1;
    var $viewPrev = $('#view-prev'); // select for hiding/showing
    var $viewNext = $('#view-next'); // select for hiding/showing
    var $pagination = $('#pagination-numbers'); // all numbers
    var $paginationNumber = $('.pagination-number'); // all numbers

    function changePage(currentFestivalFilter, newPage, $paginationNumber) {
        var $filter = $('#' + currentFestivalFilter + '-filter'); // get current filter
        var $pages = $filter.find('.page'); // cache current pages
        var totalPages = $pages.length;
        $pages.removeClass('is-visible').addClass('is-hidden'); // hide all pages
        // console.log('totalPages', totalPages);
        // console.log('newPage', newPage);
        $filter.find('.page[data-page="' + newPage + '"]').removeClass('is-hidden').addClass('is-visible'); // show next page
        // prev button
        if (newPage > 1)
            $viewPrev.removeClass('invisible');
        else
            $viewPrev.addClass('invisible');

        // next button
        if (newPage < totalPages)
            $viewNext.removeClass('invisible');
        else
            $viewNext.addClass('invisible');

        // update pagination numbers, using passed $paginationNumber which may be new if switched
        $paginationNumber.removeClass('is-active'); // remove active state
        // add active state
        // $paginationNumber.find('[data-page="' + newPage ).addClass('is-active');
        // console.log('[data-page="' + newPage + '"]');
        $paginationNumber.filter('[data-page="' + newPage + '"]').addClass('is-active'); // show next page

    }

    function activatePagination($paginationNumber) {
        // pagination numbers
        $paginationNumber.on('click', function() {
            var newPage = parseInt($(this).data('page'));
            console.log('switch to page', newPage);
            changePage(currentFestivalFilter, newPage, $paginationNumber);
            currentPages[currentFestivalFilter] = newPage; // update current page
        });
    }

    // pagination update
    function updatePagination(currentFestivalFilter) {
        $paginationNumber = $('.pagination-number'); // reset after clone
        // see how many numbers it should be
        // var num_festivals = $('#' + currentFestivalFilter + '-filter').find('.festival').length;
        var num_pages = $('#' + currentFestivalFilter + '-filter').find('.page').length;
        // console.log('num_festivals', num_festivals);
        // var num_pages = Math.ceil(num_festivals / 24);
        // console.log('num_pages', num_pages);
        // copy one example of page number
        var $examplePagination = $paginationNumber.first().clone();
        // prep for copying
        $examplePagination.removeClass('is-active');
        // clear pagination
        $pagination.empty();
        // console.log($examplePagination);

        // past example x amount of times, from http://stackoverflow.com/a/12835644
        for (var i = 0; i < num_pages; i++) {
            var $newPagination = $examplePagination.clone();
            $newPagination.html(i + 1); // set html
            $newPagination.attr('data-page', i + 1); // set control
            $newPagination.appendTo($pagination); // created
        }
        // update after clone
        $paginationNumber = $('.pagination-number');
        // add is-active to first new child
        $paginationNumber.first().addClass('is-active');
        // reset listeners
        activatePagination($paginationNumber);
    };

    // previous button
    $viewPrev.on('click', function() {
        var newPage = currentPages[currentFestivalFilter] - 1; // set new var and decrease page #
        changePage(currentFestivalFilter, newPage, $paginationNumber);
        currentPages[currentFestivalFilter] = newPage; // update current page
    });

    // next button
    $viewNext.on('click', function() {
        var newPage = currentPages[currentFestivalFilter] + 1; // set new var and decrease page #
        changePage(currentFestivalFilter, newPage, $paginationNumber);
        currentPages[currentFestivalFilter] = newPage; // update current page
    });

    // init
    activatePagination($paginationNumber);

    /*********************
     * Past Festivals sort
     * Included globally because shares some variables
     *********************/
    var $pastFestivalButtons = $('.filter-button');
    // var currentFestivalFilter = 'alpha';
    var currentFestivalFilter = 'year';

    // Show alphabetical
    $('#sort-by-alphabetical-button').on('click', function() {
        $pastFestivalButtons.removeClass('is-selected');
        $(this).addClass('is-selected');
        $('#sort-by-year').hide();
        $('#sort-by-alphabetical').show();
        currentPages[currentFestivalFilter] = 1; // reset page number
        currentFestivalFilter = 'alpha'; // for pagination
        changePage(currentFestivalFilter, 1, $paginationNumber);
        updatePagination(currentFestivalFilter);
    });

    // Show by year
    $('#sort-by-year-button').on('click', function() {
        $pastFestivalButtons.removeClass('is-selected');
        $(this).addClass('is-selected');
        $('#sort-by-alphabetical').hide();
        $('#sort-by-year').show();
        currentPages[currentFestivalFilter] = 1; // reset page number
        currentFestivalFilter = 'year'; // for pagination
        changePage(currentFestivalFilter, 1, $paginationNumber);
        updatePagination(currentFestivalFilter);
    });

    /***************************
     * festival program side menu highlighting
     * looks for an element with an id of "sidebar-nav-js", which should only show on the program child page
     ***************************/
    // if sidebar-highlighting-js exists, from http://stackoverflow.com/a/3374777
    if (document.getElementById('sidebar-nav-js')) {
        var pageURL = document.URL; // get current url, can't set it with this
        var $sidebarNav = $('#sidebar-nav-js .ms-sidebar-nav'); // sidebar for looping

        // loop through all sidebar nav elements
        $sidebarNav.find('li a').each(function() {
            if (this.href == pageURL) {
                console.log('got it');
                console.log(this.href);
                // add active class to parent
                $(this).parents('li').addClass('active');
            }
        });
    }

}); // end document model ready

/*


  ___|   |           |                     _)      |             ___|              _)         |         
\___ \   __|  |   |  |   _ \   _` |  |   |  |   _` |   _ \     \___ \    __|   __|  |  __ \   __|   __| 
      |  |    |   |  |   __/  (   |  |   |  |  (   |   __/           |  (     |     |  |   |  |   \__ \ 
_____/  \__| \__, | _| \___| \__, | \__,_| _| \__,_| \___|     _____/  \___| _|    _|  .__/  \__| ____/ 
             ____/           |___/                                                    _|                


*/

$(document).ready(function () {

/***************************
* Nav
***************************/
	// hide in-page nav on click
	$('.header-nav a').on('click', function() {
		site.navCloseAll();
	})

/***************************
* Show Code
***************************/
	// var $showCode = $('.show-code');
	var $showHTML = $('.show-html');
	var $showSASS = $('.show-sass');

	// show on click
	$showHTML.on('click', function () {
		$(this).toggleClass('active');
		$showSASS.removeClass('active');
		$(this).closest('.codeblock').find('pre.sass').hide();
		$(this).closest('.codeblock').find('pre.html').toggle();
	});
	$showSASS.on('click', function () {
		$(this).toggleClass('active');
		$showHTML.removeClass('active');
		$(this).closest('.codeblock').find('pre.html').hide();
		$(this).closest('.codeblock').find('pre.sass').toggle();
	});

/***************************
/* Syntax Highlighting
 * from highlightjs.org
***************************/
 	// start highlighter on page load
	// hljs.configure({tabReplace: ' '});

    // for each codeblock...
    $('.codeblock').each(function(index, element) {
        // get source html
        var highlightSourceHTML = $(element).find('.highlight-source').html();
        if(typeof highlightSourceHTML !== 'undefined') {
            console.log('highlightSourceHTML', highlightSourceHTML);
            // html encode so highlightjs can read
            highlightSourceHTML = htmlEscape(highlightSourceHTML);
            // set as destination for highlightjs to read
            $('.highlight-destination').html(highlightSourceHTML);    
        }
    });
    // copy html to code block

    // then highlight all
	hljs.initHighlightingOnLoad();

    // encoding, from https://stackoverflow.com/a/7124052
    function htmlEscape(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
});