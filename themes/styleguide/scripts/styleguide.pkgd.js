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
var mejs=mejs||{};mejs.version="2.23.4",mejs.meIndex=0,mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mp4","audio/mpeg","video/dailymotion","video/x-dailymotion","application/x-mpegURL","audio/ogg"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]},mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");return b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>',b.firstChild.href},getScriptPath:function(a){for(var b,c,d,e,f,g,h=0,i="",j="",k=document.getElementsByTagName("script"),l=k.length,m=a.length;l>h;h++){for(e=k[h].src,c=e.lastIndexOf("/"),c>-1?(g=e.substring(c+1),f=e.substring(0,c+1)):(g=e,f=""),b=0;m>b;b++)if(j=a[b],d=g.indexOf(j),d>-1){i=f;break}if(""!==i)break}return i},calculateTimeFormat:function(a,b,c){0>a&&(a=0),"undefined"==typeof c&&(c=25);var d=b.timeFormat,e=d[0],f=d[1]==d[0],g=f?2:1,h=":",i=Math.floor(a/3600)%24,j=Math.floor(a/60)%60,k=Math.floor(a%60),l=Math.floor((a%1*c).toFixed(3)),m=[[l,"f"],[k,"s"],[j,"m"],[i,"h"]];d.length<g&&(h=d[g]);for(var n=!1,o=0,p=m.length;p>o;o++)if(-1!==d.indexOf(m[o][1]))n=!0;else if(n){for(var q=!1,r=o;p>r;r++)if(m[r][0]>0){q=!0;break}if(!q)break;f||(d=e+d),d=m[o][1]+h+d,f&&(d=m[o][1]+d),e=m[o][1]}b.currentTimeFormat=d},twoDigitsString:function(a){return 10>a?"0"+a:String(a)},secondsToTimeCode:function(a,b){if(0>a&&(a=0),"object"!=typeof b){var c="m:ss";c=arguments[1]?"hh:mm:ss":c,c=arguments[2]?c+":ff":c,b={currentTimeFormat:c,framesPerSecond:arguments[3]||25}}var d=b.framesPerSecond;"undefined"==typeof d&&(d=25);var c=b.currentTimeFormat,e=Math.floor(a/3600)%24,f=Math.floor(a/60)%60,g=Math.floor(a%60),h=Math.floor((a%1*d).toFixed(3));lis=[[h,"f"],[g,"s"],[f,"m"],[e,"h"]];var j=c;for(i=0,len=lis.length;i<len;i++)j=j.replace(lis[i][1]+lis[i][1],this.twoDigitsString(lis[i][0])),j=j.replace(lis[i][1],lis[i][0]);return j},timeCodeToSeconds:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=a.split(":"),f=parseInt(e[0],10),g=parseInt(e[1],10),h=parseInt(e[2],10),i=0,j=0;return c&&(i=parseInt(e[3])/d),j=3600*f+60*g+h+i},convertSMPTEtoSeconds:function(a){if("string"!=typeof a)return!1;a=a.replace(",",".");var b=0,c=-1!=a.indexOf(".")?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++)d=1,e>0&&(d=Math.pow(60,e)),b+=Number(a[e])*d;return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);b&&/object|embed/i.test(b.nodeName)&&(mejs.MediaFeatures.isIE?(b.style.display="none",function(){4==b.readyState?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))},removeObjectInIE:function(a){var b=document.getElementById(a);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);b.parentNode.removeChild(b)}},determineScheme:function(a){return a&&-1!=a.indexOf("://")?a.substr(0,a.indexOf("://")+3):"//"},debounce:function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},isNodeAfter:function(a,b){return!!(a&&b&&"function"==typeof a.compareDocumentPosition&&a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_PRECEDING)}},mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];return b[1]=b[1]||0,b[2]=b[2]||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e,f,g,h=[0,0,0];if("undefined"!=typeof this.nav.plugins&&"object"==typeof this.nav.plugins[a]){if(e=this.nav.plugins[a].description,e&&("undefined"==typeof this.nav.mimeTypes||!this.nav.mimeTypes[b]||this.nav.mimeTypes[b].enabledPlugin))for(h=e.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split("."),f=0;f<h.length;f++)h[f]=parseInt(h[f].match(/\d+/),10)}else if("undefined"!=typeof window.ActiveXObject)try{g=new ActiveXObject(c),g&&(h=d(g))}catch(i){}return h}},mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[],c=a.GetVariable("$version");return c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]),b}),mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(a,b,c,d){for(;a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3]);)b[c]+=d;b[c]-=d};return c(a,b,0,1),c(a,b,1,1),c(a,b,2,1e4),c(a,b,2,1e3),c(a,b,2,100),c(a,b,2,10),c(a,b,2,1),c(a,b,3,1),b}),mejs.MediaFeatures={init:function(){var a,b,c=this,d=document,e=mejs.PluginDetector.nav,f=mejs.PluginDetector.ua.toLowerCase(),g=["source","track","audio","video"];c.isiPad=null!==f.match(/ipad/i),c.isiPhone=null!==f.match(/iphone/i),c.isiOS=c.isiPhone||c.isiPad,c.isAndroid=null!==f.match(/android/i),c.isBustedAndroid=null!==f.match(/android 2\.[12]/),c.isBustedNativeHTTPS="https:"===location.protocol&&(null!==f.match(/android [12]\./)||null!==f.match(/macintosh.* version.* safari/)),c.isIE=-1!=e.appName.toLowerCase().indexOf("microsoft")||null!==e.appName.toLowerCase().match(/trident/gi),c.isChrome=null!==f.match(/chrome/gi),c.isChromium=null!==f.match(/chromium/gi),c.isFirefox=null!==f.match(/firefox/gi),c.isWebkit=null!==f.match(/webkit/gi),c.isGecko=null!==f.match(/gecko/gi)&&!c.isWebkit&&!c.isIE,c.isOpera=null!==f.match(/opera/gi),c.hasTouch="ontouchstart"in window,c.svgAsImg=!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");for(a=0;a<g.length;a++)b=document.createElement(g[a]);c.supportsMediaTag="undefined"!=typeof b.canPlayType||c.isBustedAndroid;try{b.canPlayType("video/mp4")}catch(h){c.supportsMediaTag=!1}c.supportsPointerEvents=function(){var a,b=document.createElement("x"),c=document.documentElement,d=window.getComputedStyle;return"pointerEvents"in b.style?(b.style.pointerEvents="auto",b.style.pointerEvents="x",c.appendChild(b),a=d&&"auto"===d(b,"").pointerEvents,c.removeChild(b),!!a):!1}(),c.hasFirefoxPluginMovingProblem=!1,c.hasiOSFullScreen="undefined"!=typeof b.webkitEnterFullscreen,c.hasNativeFullscreen="undefined"!=typeof b.requestFullscreen,c.hasWebkitNativeFullScreen="undefined"!=typeof b.webkitRequestFullScreen,c.hasMozNativeFullScreen="undefined"!=typeof b.mozRequestFullScreen,c.hasMsNativeFullScreen="undefined"!=typeof b.msRequestFullscreen,c.hasTrueNativeFullScreen=c.hasWebkitNativeFullScreen||c.hasMozNativeFullScreen||c.hasMsNativeFullScreen,c.nativeFullScreenEnabled=c.hasTrueNativeFullScreen,c.hasMozNativeFullScreen?c.nativeFullScreenEnabled=document.mozFullScreenEnabled:c.hasMsNativeFullScreen&&(c.nativeFullScreenEnabled=document.msFullscreenEnabled),c.isChrome&&(c.hasiOSFullScreen=!1),c.hasTrueNativeFullScreen&&(c.fullScreenEventName="",c.hasWebkitNativeFullScreen?c.fullScreenEventName="webkitfullscreenchange":c.hasMozNativeFullScreen?c.fullScreenEventName="mozfullscreenchange":c.hasMsNativeFullScreen&&(c.fullScreenEventName="MSFullscreenChange"),c.isFullScreen=function(){return c.hasMozNativeFullScreen?d.mozFullScreen:c.hasWebkitNativeFullScreen?d.webkitIsFullScreen:c.hasMsNativeFullScreen?null!==d.msFullscreenElement:void 0},c.requestFullScreen=function(a){c.hasWebkitNativeFullScreen?a.webkitRequestFullScreen():c.hasMozNativeFullScreen?a.mozRequestFullScreen():c.hasMsNativeFullScreen&&a.msRequestFullscreen()},c.cancelFullScreen=function(){c.hasWebkitNativeFullScreen?document.webkitCancelFullScreen():c.hasMozNativeFullScreen?document.mozCancelFullScreen():c.hasMsNativeFullScreen&&document.msExitFullscreen()}),c.hasiOSFullScreen&&f.match(/mac os x 10_5/i)&&(c.hasNativeFullScreen=!1,c.hasiOSFullScreen=!1)}},mejs.MediaFeatures.init(),mejs.HtmlMediaElement={pluginType:"native",isFullScreen:!1,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if("string"==typeof a)this.src=a;else{var c,d;for(c=0;c<a.length;c++)if(d=a[c],this.canPlayType(d.type)){this.src=d.src;break}}},setVideoSize:function(a,b){this.width=a,this.height=b}},mejs.PluginMediaElement=function(a,b,c){this.id=a,this.pluginType=b,this.src=c,this.events={},this.attributes={}},mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:!1,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:!0,ended:!1,seeking:!1,duration:0,error:null,tagName:"",muted:!1,volume:1,currentTime:0,play:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.playVideo():this.pluginApi.playMedia(),this.paused=!1)},load:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType||this.pluginApi.loadMedia(),this.paused=!1)},pause:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?1==this.pluginApi.getPlayerState()&&this.pluginApi.pauseVideo():this.pluginApi.pauseMedia(),this.paused=!0)},stop:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.stopVideo():this.pluginApi.stopMedia(),this.paused=!0)},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++)if(d=e[b],mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably";return""},positionFullscreenButton:function(a,b,c){null!=this.pluginApi&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){null!=this.pluginApi&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if("string"==typeof a)this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),this.src=mejs.Utility.absolutizeUrl(a);else{var b,c;for(b=0;b<a.length;b++)if(c=a[b],this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),this.src=mejs.Utility.absolutizeUrl(c.src);break}}},setCurrentTime:function(a){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a),this.currentTime=a)},setVolume:function(a){null!=this.pluginApi&&("youtube"==this.pluginType?this.pluginApi.setVolume(100*a):this.pluginApi.setVolume(a),this.volume=a)},setMuted:function(a){null!=this.pluginApi&&("youtube"==this.pluginType?(a?this.pluginApi.mute():this.pluginApi.unMute(),this.muted=a,this.dispatchEvent({type:"volumechange"})):this.pluginApi.setMuted(a),this.muted=a)},setVideoSize:function(a,b){this.pluginElement&&this.pluginElement.style&&(this.pluginElement.style.width=a+"px",this.pluginElement.style.height=b+"px"),null!=this.pluginApi&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!0)},exitFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!1)},addEventListener:function(a,b,c){this.events[a]=this.events[a]||[],this.events[a].push(b)},removeEventListener:function(a,b){if(!a)return this.events={},!0;var c=this.events[a];if(!c)return!0;if(!b)return this.events[a]=[],!0;for(var d=0;d<c.length;d++)if(c[d]===b)return this.events[a].splice(d,1),!0;return!1},dispatchEvent:function(a){var b,c=this.events[a.type];if(c)for(b=0;b<c.length;b++)c[b].apply(this,[a])},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){return this.hasAttribute(a)?this.attributes[a]:null},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id)}},mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:!1,httpsBasicAuthSite:!1,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",flashScriptAccess:"sameDomain",enablePluginSmoothing:!1,enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:.8,customError:"",success:function(){},error:function(){}},mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)},mejs.HtmlMediaElementShim={create:function(a,b){var c,d,e={},f="string"==typeof a?document.getElementById(a):a,g=f.tagName.toLowerCase(),h="audio"===g||"video"===g,i=h?f.getAttribute("src"):f.getAttribute("href"),j=f.getAttribute("poster"),k=f.getAttribute("autoplay"),l=f.getAttribute("preload"),m=f.getAttribute("controls");for(d in mejs.MediaElementDefaults)e[d]=mejs.MediaElementDefaults[d];for(d in b)e[d]=b[d];return i="undefined"==typeof i||null===i||""==i?null:i,j="undefined"==typeof j||null===j?"":j,l="undefined"==typeof l||null===l||"false"===l?"none":l,k=!("undefined"==typeof k||null===k||"false"===k),m=!("undefined"==typeof m||null===m||"false"===m),c=this.determinePlayback(f,e,mejs.MediaFeatures.supportsMediaTag,h,i),c.url=null!==c.url?mejs.Utility.absolutizeUrl(c.url):"",c.scheme=mejs.Utility.determineScheme(c.url),"native"==c.method?(mejs.MediaFeatures.isBustedAndroid&&(f.src=c.url,f.addEventListener("click",function(){f.play()},!1)),this.updateNative(c,e,k,l)):""!==c.method?this.createPlugin(c,e,j,k,l,m):(this.createErrorMessage(c,e,j),this)},determinePlayback:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=[],r={method:"",url:"",htmlMediaElement:a,isVideo:"audio"!==a.tagName.toLowerCase(),scheme:""};if("undefined"!=typeof b.type&&""!==b.type)if("string"==typeof b.type)q.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)q.push({type:b.type[f],url:e});else if(null!==e)k=this.formatType(e,a.getAttribute("type")),q.push({type:k,url:e});else for(f=0;f<a.childNodes.length;f++)j=a.childNodes[f],1==j.nodeType&&"source"==j.tagName.toLowerCase()&&(e=j.getAttribute("src"),k=this.formatType(e,j.getAttribute("type")),p=j.getAttribute("media"),(!p||!window.matchMedia||window.matchMedia&&window.matchMedia(p).matches)&&q.push({type:k,url:e}));if(!d&&q.length>0&&null!==q[0].url&&this.getTypeFromFile(q[0].url).indexOf("audio")>-1&&(r.isVideo=!1),r.isVideo&&mejs.MediaFeatures.isBustedAndroid&&(a.canPlayType=function(a){return null!==a.match(/video\/(mp4|m4v)/gi)?"maybe":""}),r.isVideo&&mejs.MediaFeatures.isChromium&&(a.canPlayType=function(a){return null!==a.match(/video\/(webm|ogv|ogg)/gi)?"maybe":""}),c&&("auto"===b.mode||"auto_plugin"===b.mode||"native"===b.mode)&&(!mejs.MediaFeatures.isBustedNativeHTTPS||b.httpsBasicAuthSite!==!0)){for(d||(o=document.createElement(r.isVideo?"video":"audio"),a.parentNode.insertBefore(o,a),a.style.display="none",r.htmlMediaElement=a=o),f=0;f<q.length;f++)if("video/m3u8"==q[f].type||""!==a.canPlayType(q[f].type).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/m4a/,"mp4")).replace(/no/,"")){r.method="native",r.url=q[f].url;break}if("native"===r.method&&(null!==r.url&&(a.src=r.url),"auto_plugin"!==b.mode))return r}if("auto"===b.mode||"auto_plugin"===b.mode||"shim"===b.mode)for(f=0;f<q.length;f++)for(k=q[f].type,g=0;g<b.plugins.length;g++)for(l=b.plugins[g],m=mejs.plugins[l],h=0;h<m.length;h++)if(n=m[h],null==n.version||mejs.PluginDetector.hasPluginVersion(l,n.version))for(i=0;i<n.types.length;i++)if(k.toLowerCase()==n.types[i].toLowerCase())return r.method=l,r.url=q[f].url,r;return"auto_plugin"===b.mode&&"native"===r.method?r:(""===r.method&&q.length>0&&(r.url=q[0].url),r)},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];var b=a.substring(a.lastIndexOf(".")+1).toLowerCase(),c=/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)?"video/":"audio/";return this.getTypeFromExtension(b,c)},getTypeFromExtension:function(a,b){switch(b=b||"",a){case"mp4":case"m4v":case"m4a":case"f4v":case"f4a":return b+"mp4";case"flv":return b+"x-flv";case"webm":case"webma":case"webmv":return b+"webm";case"ogg":case"oga":case"ogv":return b+"ogg";case"m3u8":return"application/x-mpegurl";case"ts":return b+"mp2t";default:return b+a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div"),f=b.customError;e.className="me-cannotplay";try{e.style.width=d.width+"px",e.style.height=d.height+"px"}catch(g){}f||(f='<a href="'+a.url+'">',""!==c&&(f+='<img src="'+c+'" width="100%" height="100%" alt="" />'),f+="<span>"+mejs.i18n.t("mejs.download-file")+"</span></a>"),e.innerHTML=f,d.parentNode.insertBefore(e,d),d.style.display="none",b.error(d)},createPlugin:function(a,b,c,d,e,f){var g,h,i,j=a.htmlMediaElement,k=1,l=1,m="me_"+a.method+"_"+mejs.meIndex++,n=new mejs.PluginMediaElement(m,a.method,a.url),o=document.createElement("div");n.tagName=j.tagName;for(var p=0;p<j.attributes.length;p++){var q=j.attributes[p];q.specified&&n.setAttribute(q.name,q.value)}for(h=j.parentNode;null!==h&&null!=h.tagName&&"body"!==h.tagName.toLowerCase()&&null!=h.parentNode&&null!=h.parentNode.tagName&&null!=h.parentNode.constructor&&"ShadowRoot"===h.parentNode.constructor.name;){if("p"===h.parentNode.tagName.toLowerCase()){h.parentNode.parentNode.insertBefore(h,h.parentNode);break}h=h.parentNode}if(a.isVideo?(k=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:null!==j.getAttribute("width")?j.getAttribute("width"):b.defaultVideoWidth,l=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:null!==j.getAttribute("height")?j.getAttribute("height"):b.defaultVideoHeight,k=mejs.Utility.encodeUrl(k),l=mejs.Utility.encodeUrl(l)):b.enablePluginDebug&&(k=320,l=240),n.success=b.success,o.className="me-plugin",o.id=m+"_container",a.isVideo?j.parentNode.insertBefore(o,j):document.body.insertBefore(o,document.body.childNodes[0]),"flash"===a.method||"silverlight"===a.method){var r="audio/mp4"===j.getAttribute("type"),s=j.getElementsByTagName("source");if(s&&!r)for(var p=0,t=s.length;t>p;p++)"audio/mp4"===s[p].getAttribute("type")&&(r=!0);i=["id="+m,"isvideo="+(a.isVideo||r?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+k,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+l,"pseudostreamstart="+b.pseudoStreamingStartQueryParam],null!==a.url&&("flash"==a.method?i.push("file="+mejs.Utility.encodeUrl(a.url)):i.push("file="+a.url)),b.enablePluginDebug&&i.push("debug=true"),b.enablePluginSmoothing&&i.push("smoothing=true"),b.enablePseudoStreaming&&i.push("pseudostreaming=true"),f&&i.push("controls=true"),b.pluginVars&&(i=i.concat(b.pluginVars)),window[m+"_init"]=function(){switch(n.pluginType){case"flash":n.pluginElement=n.pluginApi=document.getElementById(m);break;case"silverlight":n.pluginElement=document.getElementById(n.id),n.pluginApi=n.pluginElement.Content.MediaElementJS}null!=n.pluginApi&&n.success&&n.success(n,j)},window[m+"_event"]=function(a,b){var c,d,e;c={type:a,target:n};for(d in b)n[d]=b[d],c[d]=b[d];e=b.bufferedTime||0,c.target.buffered=c.buffered={start:function(a){return 0},end:function(a){return e},length:1},n.dispatchEvent(c)}}switch(a.method){case"silverlight":o.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+m+'" name="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="initParams" value="'+i.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case"flash":mejs.MediaFeatures.isIE?(g=document.createElement("div"),o.appendChild(g),g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?"+(new Date).getTime()+'" /><param name="flashvars" value="'+i.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+b.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'):o.innerHTML='<embed id="'+m+'" name="'+m+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="'+b.flashScriptAccess+'" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+i.join("&")+'" width="'+k+'" height="'+l+'" scale="default"class="mejs-shim"></embed>';break;case"youtube":var u;if(-1!=a.url.lastIndexOf("youtu.be"))u=a.url.substr(a.url.lastIndexOf("/")+1),-1!=u.indexOf("?")&&(u=u.substr(0,u.indexOf("?")));else{var v=a.url.match(/[?&]v=([^&#]+)|&|#|$/);v&&(u=v[1])}youtubeSettings={container:o,containerId:o.id,pluginMediaElement:n,pluginId:m,videoId:u,height:l,width:k,scheme:a.scheme,variables:b.youtubeIframeVars},window.postMessage?mejs.YouTubeApi.enqueueIframe(youtubeSettings):mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])&&mejs.YouTubeApi.createFlash(youtubeSettings,b);break;case"vimeo":var w=m+"_player";if(n.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1),o.innerHTML='<iframe src="'+a.scheme+"player.vimeo.com/video/"+n.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+w+'" width="'+k+'" height="'+l+'" frameborder="0" class="mejs-shim" id="'+w+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',"function"==typeof $f){var x=$f(o.childNodes[0]),y=-1;x.addEvent("ready",function(){function a(a,b,c,d){var e={type:c,target:b};"timeupdate"==c&&(b.currentTime=e.currentTime=d.seconds,b.duration=e.duration=d.duration),b.dispatchEvent(e)}x.playVideo=function(){x.api("play")},x.stopVideo=function(){x.api("unload")},x.pauseVideo=function(){x.api("pause")},x.seekTo=function(a){x.api("seekTo",a)},x.setVolume=function(a){x.api("setVolume",a)},x.setMuted=function(a){a?(x.lastVolume=x.api("getVolume"),x.api("setVolume",0)):(x.api("setVolume",x.lastVolume),delete x.lastVolume)},x.getPlayerState=function(){return y},x.addEvent("play",function(){y=1,a(x,n,"play"),a(x,n,"playing")}),x.addEvent("pause",function(){y=2,a(x,n,"pause")}),x.addEvent("finish",function(){y=0,a(x,n,"ended")}),x.addEvent("playProgress",function(b){a(x,n,"timeupdate",b)}),x.addEvent("seek",function(b){y=3,a(x,n,"seeked",b)}),x.addEvent("loadProgress",function(b){y=3,a(x,n,"progress",b)}),n.pluginElement=o,n.pluginApi=x,n.success(n,n.pluginElement)})}else console.warn("You need to include froogaloop for vimeo to work")}return j.style.display="none",j.removeAttribute("autoplay"),n},updateNative:function(a,b,c,d){var e,f=a.htmlMediaElement;for(e in mejs.HtmlMediaElement)f[e]=mejs.HtmlMediaElement[e];return b.success(f,f),f}},mejs.YouTubeApi={isIframeStarted:!1,isIframeLoaded:!1,loadIframeApi:function(a){if(!this.isIframeStarted){var b=document.createElement("script");b.src=a.scheme+"www.youtube.com/player_api";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c),this.isIframeStarted=!0}},iframeQueue:[],enqueueIframe:function(a){this.isLoaded?this.createIframe(a):(this.loadIframeApi(a),this.iframeQueue.push(a))},createIframe:function(a){var b=a.pluginMediaElement,c={controls:0,wmode:"transparent"},d=new YT.Player(a.containerId,{height:a.height,width:a.width,videoId:a.videoId,playerVars:mejs.$.extend({},c,a.variables),events:{onReady:function(c){d.setVideoSize=function(a,b){d.setSize(a,b)},a.pluginMediaElement.pluginApi=d,a.pluginMediaElement.pluginElement=document.getElementById(a.containerId),b.success(b,b.pluginElement),mejs.YouTubeApi.createEvent(d,b,"canplay"),setInterval(function(){mejs.YouTubeApi.createEvent(d,b,"timeupdate")},250),"undefined"!=typeof b.attributes.autoplay&&d.playVideo()},onStateChange:function(a){mejs.YouTubeApi.handleStateChange(a.data,d,b)}}})},createEvent:function(a,b,c){var d={type:c,target:b};if(a&&a.getDuration){b.currentTime=d.currentTime=a.getCurrentTime(),b.duration=d.duration=a.getDuration(),d.paused=b.paused,d.ended=b.ended,d.muted=a.isMuted(),d.volume=a.getVolume()/100,d.bytesTotal=a.getVideoBytesTotal(),d.bufferedBytes=a.getVideoBytesLoaded();var e=d.bufferedBytes/d.bytesTotal*d.duration;d.target.buffered=d.buffered={start:function(a){return 0},end:function(a){return e},length:1}}b.dispatchEvent(d)},iFrameReady:function(){for(this.isLoaded=!0,this.isIframeLoaded=!0;this.iframeQueue.length>0;){var a=this.iframeQueue.pop();this.createIframe(a)}},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=a;var b,c=a.scheme+"www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";mejs.MediaFeatures.isIE?(b=document.createElement("div"),a.container.appendChild(b),b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+a.scheme+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+options.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /></object>'):a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="'+options.flashScriptAccess+'"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c,b.success(d,d.pluginElement),c.cueVideoById(b.videoId);var e=b.containerId+"_callback";window[e]=function(a){mejs.YouTubeApi.handleStateChange(a,c,d)},c.addEventListener("onStateChange",e),setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250),mejs.YouTubeApi.createEvent(c,d,"canplay")},handleStateChange:function(a,b,c){switch(a){case-1:c.paused=!0,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=!1,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=!1,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"play"),mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=!0,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress");break;case 5:}}},window.onYouTubePlayerAPIReady=function(){mejs.YouTubeApi.iFrameReady()},window.onYouTubePlayerReady=function(a){mejs.YouTubeApi.flashReady(a)},window.mejs=mejs,window.MediaElement=mejs.MediaElement,function(a,b,c,d){var e={"default":"en",locale:{language:c.i18n&&c.i18n.locale.language||"",strings:c.i18n&&c.i18n.locale.strings||{}},pluralForms:[function(){return arguments[1]},function(){var a=arguments;return 1===a[0]?a[1]:a[2]},function(){var a=arguments;return[0,1].indexOf(a[0])>-1?a[1]:a[2]},function(){var a=arguments;return a[0]%10===1&&a[0]%100!==11?a[1]:0!==a[0]?a[2]:a[3]},function(){var a=arguments;return 1===a[0]||11===a[0]?a[1]:2===a[0]||12===a[0]?a[2]:a[0]>2&&a[0]<20?a[3]:a[4]},function(){return 1===args[0]?args[1]:0===args[0]||args[0]%100>0&&args[0]%100<20?args[2]:args[3]},function(){var a=arguments;return a[0]%10===1&&a[0]%100!==11?a[1]:a[0]%10>=2&&(a[0]%100<10||a[0]%100>=20)?a[2]:[3]},function(){var a=arguments;return a[0]%10===1&&a[0]%100!==11?a[1]:a[0]%10>=2&&a[0]%10<=4&&(a[0]%100<10||a[0]%100>=20)?a[2]:a[3]},function(){var a=arguments;return 1===a[0]?a[1]:a[0]>=2&&a[0]<=4?a[2]:a[3]},function(){var a=arguments;return 1===a[0]?a[1]:a[0]%10>=2&&a[0]%10<=4&&(a[0]%100<10||a[0]%100>=20)?a[2]:a[3]},function(){var a=arguments;return a[0]%100===1?a[2]:a[0]%100===2?a[3]:a[0]%100===3||a[0]%100===4?a[4]:a[1]},function(){var a=arguments;return 1===a[0]?a[1]:2===a[0]?a[2]:a[0]>2&&a[0]<7?a[3]:a[0]>6&&a[0]<11?a[4]:a[5]},function(){var a=arguments;return 0===a[0]?a[1]:1===a[0]?a[2]:2===a[0]?a[3]:a[0]%100>=3&&a[0]%100<=10?a[4]:a[0]%100>=11?a[5]:a[6]},function(){var a=arguments;return 1===a[0]?a[1]:0===a[0]||a[0]%100>1&&a[0]%100<11?a[2]:a[0]%100>10&&a[0]%100<20?a[3]:a[4]},function(){var a=arguments;return a[0]%10===1?a[1]:a[0]%10===2?a[2]:a[3]},function(){var a=arguments;return 11!==a[0]&&a[0]%10===1?a[1]:a[2]},function(){var a=arguments;return 1===a[0]?a[1]:a[0]%10>=2&&a[0]%10<=4&&(a[0]%100<10||a[0]%100>=20)?a[2]:a[3]},function(){var a=arguments;return 1===a[0]?a[1]:2===a[0]?a[2]:8!==a[0]&&11!==a[0]?a[3]:a[4]},function(){var a=arguments;return 0===a[0]?a[1]:a[2]},function(){var a=arguments;return 1===a[0]?a[1]:2===a[0]?a[2]:3===a[0]?a[3]:a[4]},function(){var a=arguments;return 0===a[0]?a[1]:1===a[0]?a[2]:a[3]}],getLanguage:function(){var a=e.locale.language||e["default"];return/^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(a)?a:e["default"]},t:function(a,b){if("string"==typeof a&&a.length){var c,d,f=e.getLanguage(),g=function(a,b,c){return"object"!=typeof a||"number"!=typeof b||"number"!=typeof c?a:"string"==typeof a?a:e.pluralForms[c].apply(null,[b].concat(a))},h=function(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return a.replace(/[&<>"]/g,function(a){return b[a]})};return e.locale.strings&&e.locale.strings[f]&&(c=e.locale.strings[f][a],"number"==typeof b&&(d=e.locale.strings[f]["mejs.plural-form"],c=g.apply(null,[c,b,d]))),!c&&e.locale.strings&&e.locale.strings[e["default"]]&&(c=e.locale.strings[e["default"]][a],"number"==typeof b&&(d=e.locale.strings[e["default"]]["mejs.plural-form"],c=g.apply(null,[c,b,d]))),c=c||a,"number"==typeof b&&(c=c.replace("%1",b)),h(c)}return a}};"undefined"!=typeof mejsL10n&&(e.locale.language=mejsL10n.language),c.i18n=e}(document,window,mejs),function(a,b){"use strict";"undefined"!=typeof mejsL10n&&(a[mejsL10n.lang]=mejsL10n.strings)}(mejs.i18n.locale.strings),
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
function(a){"use strict";void 0===a.en&&(a.en={"mejs.plural-form":1,"mejs.download-file":"Download File","mejs.fullscreen-off":"Turn off Fullscreen","mejs.fullscreen-on":"Go Fullscreen","mejs.download-video":"Download Video","mejs.fullscreen":"Fullscreen","mejs.time-jump-forward":["Jump forward 1 second","Jump forward %1 seconds"],"mejs.play":"Play","mejs.pause":"Pause","mejs.close":"Close","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.time-skip-back":["Skip back 1 second","Skip back %1 seconds"],"mejs.captions-subtitles":"Captions/Subtitles","mejs.none":"None","mejs.mute-toggle":"Mute Toggle","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.ad-skip":"Skip ad","mejs.ad-skip-info":["Skip in 1 second","Skip in %1 seconds"],"mejs.source-chooser":"Source Chooser"})}(mejs.i18n.locale.strings),
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
"undefined"!=typeof jQuery?mejs.$=jQuery:"undefined"!=typeof Zepto?(mejs.$=Zepto,Zepto.fn.outerWidth=function(a){var b=$(this).width();return a&&(b+=parseInt($(this).css("margin-right"),10),b+=parseInt($(this).css("margin-left"),10)),b}):"undefined"!=typeof ender&&(mejs.$=ender),function(a){mejs.MepDefaults={poster:"",showPosterWhenEnded:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return.05*a.duration},defaultSeekForwardInterval:function(a){return.05*a.duration},setDimensions:!0,audioWidth:-1,audioHeight:-1,startVolume:.8,loop:!1,autoRewind:!0,enableAutosize:!0,timeFormat:"",alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,autosizeProgress:!0,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,clickToPlayPause:!0,controlsTimeoutDefault:1500,controlsTimeoutMouseEnter:2500,controlsTimeoutMouseLeave:1e3,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:!0,stretching:"auto",enableKeyboard:!0,pauseOtherPlayers:!0,keyActions:[{keys:[32,179],action:function(a,b,c,d){mejs.MediaFeatures.isFirefox||(b.paused||b.ended?b.play():b.pause())}},{keys:[38],action:function(a,b,c,d){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var e=Math.min(b.volume+.1,1);b.setVolume(e)}},{keys:[40],action:function(a,b,c,d){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var e=Math.max(b.volume-.1,0);b.setVolume(e)}},{keys:[37,227],action:function(a,b,c,d){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var e=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(e)}}},{keys:[39,228],action:function(a,b,c,d){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var e=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(e)}}},{keys:[70],action:function(a,b,c,d){"undefined"!=typeof a.enterFullScreen&&(a.isFullScreen?a.exitFullScreen():a.enterFullScreen())}},{keys:[77],action:function(a,b,c,d){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),a.media.muted?a.setMuted(!1):a.setMuted(!0)}}]},mejs.mepIndex=0,mejs.players={},mejs.MediaElementPlayer=function(b,c){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(b,c);var d=this;return d.$media=d.$node=a(b),d.node=d.media=d.$media[0],d.node?"undefined"!=typeof d.node.player?d.node.player:("undefined"==typeof c&&(c=d.$node.data("mejsoptions")),d.options=a.extend({},mejs.MepDefaults,c),d.options.timeFormat||(d.options.timeFormat="mm:ss",d.options.alwaysShowHours&&(d.options.timeFormat="hh:mm:ss"),d.options.showTimecodeFrameCount&&(d.options.timeFormat+=":ff")),mejs.Utility.calculateTimeFormat(0,d.options,d.options.framesPerSecond||25),d.id="mep_"+mejs.mepIndex++,mejs.players[d.id]=d,d.init(),d):void 0},mejs.MediaElementPlayer.prototype={hasFocus:!1,controlsAreVisible:!0,init:function(){var b=this,c=mejs.MediaFeatures,d=a.extend(!0,{},b.options,{success:function(a,c){b.meReady(a,c)},error:function(a){b.handleError(a)}}),e=b.media.tagName.toLowerCase();if(b.isDynamic="audio"!==e&&"video"!==e,b.isDynamic?b.isVideo=b.options.isVideo:b.isVideo="audio"!==e&&b.options.isVideo,c.isiPad&&b.options.iPadUseNativeControls||c.isiPhone&&b.options.iPhoneUseNativeControls)b.$media.attr("controls","controls"),c.isiPad&&null!==b.media.getAttribute("autoplay")&&b.play();else if(c.isAndroid&&b.options.AndroidUseNativeControls);else if(b.isVideo||!b.isVideo&&b.options.features.length){b.$media.removeAttr("controls");var f=b.isVideo?mejs.i18n.t("mejs.video-player"):mejs.i18n.t("mejs.audio-player");a('<span class="mejs-offscreen">'+f+"</span>").insertBefore(b.$media),b.container=a('<div id="'+b.id+'" class="mejs-container '+(mejs.MediaFeatures.svgAsImg?"svg":"no-svg")+'" tabindex="0" role="application" aria-label="'+f+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function(a){if(!b.controlsAreVisible&&!b.hasFocus&&b.controlsEnabled&&(b.showControls(!0),!b.hasMsNativeFullScreen)){var c=".mejs-playpause-button > button";mejs.Utility.isNodeAfter(a.relatedTarget,b.container[0])&&(c=".mejs-controls .mejs-button:last-child > button");var d=b.container.find(c);d.focus()}}),b.options.features.length||b.container.css("background","transparent").find(".mejs-controls").hide(),b.isVideo&&"fill"===b.options.stretching&&!b.container.parent("mejs-fill-container").length&&(b.outerContainer=b.$media.parent(),b.container.wrap('<div class="mejs-fill-container"/>')),b.container.addClass((c.isAndroid?"mejs-android ":"")+(c.isiOS?"mejs-ios ":"")+(c.isiPad?"mejs-ipad ":"")+(c.isiPhone?"mejs-iphone ":"")+(b.isVideo?"mejs-video ":"mejs-audio ")),b.container.find(".mejs-mediaelement").append(b.$media),b.node.player=b,b.controls=b.container.find(".mejs-controls"),b.layers=b.container.find(".mejs-layers");var g=b.isVideo?"video":"audio",h=g.substring(0,1).toUpperCase()+g.substring(1);b.options[g+"Width"]>0||b.options[g+"Width"].toString().indexOf("%")>-1?b.width=b.options[g+"Width"]:""!==b.media.style.width&&null!==b.media.style.width?b.width=b.media.style.width:null!==b.media.getAttribute("width")?b.width=b.$media.attr("width"):b.width=b.options["default"+h+"Width"],b.options[g+"Height"]>0||b.options[g+"Height"].toString().indexOf("%")>-1?b.height=b.options[g+"Height"]:""!==b.media.style.height&&null!==b.media.style.height?b.height=b.media.style.height:null!==b.$media[0].getAttribute("height")?b.height=b.$media.attr("height"):b.height=b.options["default"+h+"Height"],b.setPlayerSize(b.width,b.height),d.pluginWidth=b.width,d.pluginHeight=b.height}else b.isVideo||b.options.features.length||b.$media.hide();mejs.MediaElement(b.$media[0],d),"undefined"!=typeof b.container&&b.options.features.length&&b.controlsAreVisible&&b.container.trigger("controlsshown")},showControls:function(a){var b=this;a="undefined"==typeof a||a,b.controlsAreVisible||(a?(b.controls.removeClass("mejs-offscreen").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0,b.container.trigger("controlsshown")}),b.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0})):(b.controls.removeClass("mejs-offscreen").css("display","block"),b.container.find(".mejs-control").removeClass("mejs-offscreen").css("display","block"),b.controlsAreVisible=!0,b.container.trigger("controlsshown")),b.setControlsSize())},hideControls:function(b){var c=this;b="undefined"==typeof b||b,!c.controlsAreVisible||c.options.alwaysShowControls||c.keyboardAction||c.media.paused||c.media.ended||(b?(c.controls.stop(!0,!0).fadeOut(200,function(){a(this).addClass("mejs-offscreen").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")}),c.container.find(".mejs-control").stop(!0,!0).fadeOut(200,function(){a(this).addClass("mejs-offscreen").css("display","block")})):(c.controls.addClass("mejs-offscreen").css("display","block"),c.container.find(".mejs-control").addClass("mejs-offscreen").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")))},controlsTimer:null,startControlsTimer:function(a){var b=this;a="undefined"!=typeof a?a:b.options.controlsTimeoutDefault,b.killControlsTimer("start"),b.controlsTimer=setTimeout(function(){b.hideControls(),b.killControlsTimer("hide")},a)},killControlsTimer:function(a){var b=this;null!==b.controlsTimer&&(clearTimeout(b.controlsTimer),delete b.controlsTimer,b.controlsTimer=null)},controlsEnabled:!0,disableControls:function(){var a=this;a.killControlsTimer(),a.hideControls(!1),this.controlsEnabled=!1},enableControls:function(){var a=this;a.showControls(!1),a.controlsEnabled=!0},meReady:function(b,c){var d,e,f=this,g=mejs.MediaFeatures,h=c.getAttribute("autoplay"),i=!("undefined"==typeof h||null===h||"false"===h);if(!f.created){if(f.created=!0,f.media=b,f.domNode=c,!(g.isAndroid&&f.options.AndroidUseNativeControls||g.isiPad&&f.options.iPadUseNativeControls||g.isiPhone&&f.options.iPhoneUseNativeControls)){if(!f.isVideo&&!f.options.features.length)return i&&"native"==b.pluginType&&f.play(),void(f.options.success&&("string"==typeof f.options.success?window[f.options.success](f.media,f.domNode,f):f.options.success(f.media,f.domNode,f)));f.buildposter(f,f.controls,f.layers,f.media),f.buildkeyboard(f,f.controls,f.layers,f.media),f.buildoverlays(f,f.controls,f.layers,f.media),f.findTracks();for(d in f.options.features)if(e=f.options.features[d],f["build"+e])try{f["build"+e](f,f.controls,f.layers,f.media)}catch(j){}f.container.trigger("controlsready"),f.setPlayerSize(f.width,f.height),f.setControlsSize(),f.isVideo&&(mejs.MediaFeatures.hasTouch&&!f.options.alwaysShowControls?f.$media.bind("touchstart",function(){f.controlsAreVisible?f.hideControls(!1):f.controlsEnabled&&f.showControls(!1)}):(f.clickToPlayPauseCallback=function(){if(f.options.clickToPlayPause){f.media.paused?f.play():f.pause();var a=f.$media.closest(".mejs-container").find(".mejs-overlay-button"),b=a.attr("aria-pressed");a.attr("aria-pressed",!b)}},f.media.addEventListener("click",f.clickToPlayPauseCallback,!1),f.container.bind("mouseenter",function(){f.controlsEnabled&&(f.options.alwaysShowControls||(f.killControlsTimer("enter"),f.showControls(),f.startControlsTimer(f.options.controlsTimeoutMouseEnter)))}).bind("mousemove",function(){f.controlsEnabled&&(f.controlsAreVisible||f.showControls(),f.options.alwaysShowControls||f.startControlsTimer(f.options.controlsTimeoutMouseEnter))}).bind("mouseleave",function(){f.controlsEnabled&&(f.media.paused||f.options.alwaysShowControls||f.startControlsTimer(f.options.controlsTimeoutMouseLeave))})),f.options.hideVideoControlsOnLoad&&f.hideControls(!1),i&&!f.options.alwaysShowControls&&f.hideControls(),f.options.enableAutosize&&f.media.addEventListener("loadedmetadata",function(a){f.options.videoHeight<=0&&null===f.domNode.getAttribute("height")&&!isNaN(a.target.videoHeight)&&(f.setPlayerSize(a.target.videoWidth,a.target.videoHeight),f.setControlsSize(),f.media.setVideoSize(a.target.videoWidth,a.target.videoHeight))},!1)),f.media.addEventListener("play",function(){var a;for(a in mejs.players){var b=mejs.players[a];b.id==f.id||!f.options.pauseOtherPlayers||b.paused||b.ended||b.pause(),b.hasFocus=!1}f.hasFocus=!0},!1),f.media.addEventListener("ended",function(b){if(f.options.autoRewind)try{f.media.setCurrentTime(0),window.setTimeout(function(){a(f.container).find(".mejs-overlay-loading").parent().hide()},20)}catch(c){}"youtube"===f.media.pluginType?f.media.stop():f.media.pause(),f.setProgressRail&&f.setProgressRail(),f.setCurrentRail&&f.setCurrentRail(),f.options.loop?f.play():!f.options.alwaysShowControls&&f.controlsEnabled&&f.showControls()},!1),f.media.addEventListener("loadedmetadata",function(){mejs.Utility.calculateTimeFormat(f.duration,f.options,f.options.framesPerSecond||25),f.updateDuration&&f.updateDuration(),f.updateCurrent&&f.updateCurrent(),f.isFullScreen||(f.setPlayerSize(f.width,f.height),f.setControlsSize())},!1);var k=null;f.media.addEventListener("timeupdate",function(){k!==this.duration&&(k=this.duration,mejs.Utility.calculateTimeFormat(k,f.options,f.options.framesPerSecond||25),f.updateDuration&&f.updateDuration(),f.updateCurrent&&f.updateCurrent(),f.setControlsSize())},!1),f.container.focusout(function(b){if(b.relatedTarget){var c=a(b.relatedTarget);f.keyboardAction&&0===c.parents(".mejs-container").length&&(f.keyboardAction=!1,f.isVideo&&!f.options.alwaysShowControls&&f.hideControls(!0))}}),setTimeout(function(){f.setPlayerSize(f.width,f.height),f.setControlsSize()},50),f.globalBind("resize",function(){f.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||f.setPlayerSize(f.width,f.height),f.setControlsSize()}),"youtube"==f.media.pluginType&&(g.isiOS||g.isAndroid)&&(f.container.find(".mejs-overlay-play").hide(),f.container.find(".mejs-poster").hide())}i&&"native"==b.pluginType&&f.play(),f.options.success&&("string"==typeof f.options.success?window[f.options.success](f.media,f.domNode,f):f.options.success(f.media,f.domNode,f))}},handleError:function(a){var b=this;b.controls&&b.controls.hide(),b.options.error&&b.options.error(a)},setPlayerSize:function(a,b){var c=this;if(!c.options.setDimensions)return!1;switch("undefined"!=typeof a&&(c.width=a),"undefined"!=typeof b&&(c.height=b),c.options.stretching){case"fill":c.isVideo?this.setFillMode():this.setDimensions(c.width,c.height);break;case"responsive":this.setResponsiveMode();break;case"none":this.setDimensions(c.width,c.height);break;default:this.hasFluidMode()===!0?this.setResponsiveMode():this.setDimensions(c.width,c.height)}},hasFluidMode:function(){var a=this;return a.height.toString().indexOf("%")>0||"none"!==a.$node.css("max-width")&&"t.width"!==a.$node.css("max-width")||a.$node[0].currentStyle&&"100%"===a.$node[0].currentStyle.maxWidth},setResponsiveMode:function(){var b=this,c=function(){return b.isVideo?b.media.videoWidth&&b.media.videoWidth>0?b.media.videoWidth:null!==b.media.getAttribute("width")?b.media.getAttribute("width"):b.options.defaultVideoWidth:b.options.defaultAudioWidth}(),d=function(){return b.isVideo?b.media.videoHeight&&b.media.videoHeight>0?b.media.videoHeight:null!==b.media.getAttribute("height")?b.media.getAttribute("height"):b.options.defaultVideoHeight:b.options.defaultAudioHeight}(),e=b.container.parent().closest(":visible").width(),f=b.container.parent().closest(":visible").height(),g=b.isVideo||!b.options.autosizeProgress?parseInt(e*d/c,10):d;(isNaN(g)||0!==f&&g>f&&f>d)&&(g=f),b.container.parent().length>0&&"body"===b.container.parent()[0].tagName.toLowerCase()&&(e=a(window).width(),g=a(window).height()),g&&e&&(b.container.width(e).height(g),b.$media.add(b.container.find(".mejs-shim")).width("100%").height("100%"),b.isVideo&&b.media.setVideoSize&&b.media.setVideoSize(e,g),b.layers.children(".mejs-layer").width("100%").height("100%"))},setFillMode:function(){var a=this,b=a.outerContainer;b.width()||b.height(a.$media.width()),b.height()||b.height(a.$media.height());var c=b.width(),d=b.height();a.setDimensions("100%","100%"),a.container.find(".mejs-poster img").css("display","block"),targetElement=a.container.find("object, embed, iframe, video");var e=a.height,f=a.width,g=c,h=e*c/f,i=f*d/e,j=d,k=!(i>c),l=k?Math.floor(g):Math.floor(i),m=k?Math.floor(h):Math.floor(j);k?(targetElement.height(m).width(c),a.media.setVideoSize&&a.media.setVideoSize(c,m)):(targetElement.height(d).width(l),a.media.setVideoSize&&a.media.setVideoSize(l,d)),targetElement.css({"margin-left":Math.floor((c-l)/2),"margin-top":0})},setDimensions:function(a,b){var c=this;c.container.width(a).height(b),c.layers.children(".mejs-layer").width(a).height(b)},setControlsSize:function(){var b=this,c=0,d=0,e=b.controls.find(".mejs-time-rail"),f=b.controls.find(".mejs-time-total"),g=e.siblings(),h=g.last(),i=null,j=b.options&&!b.options.autosizeProgress;if(b.container.is(":visible")&&e.length&&e.is(":visible")){j&&(d=parseInt(e.css("width"),10)),0!==d&&d||(g.each(function(){var b=a(this);"absolute"!=b.css("position")&&b.is(":visible")&&(c+=a(this).outerWidth(!0))}),d=b.controls.width()-c-(e.outerWidth(!0)-e.width()));do j||e.width(d),f.width(d-(f.outerWidth(!0)-f.width())),"absolute"!=h.css("position")&&(i=h.length?h.position():null,d--);while(null!==i&&i.top.toFixed(2)>0&&d>0);b.container.trigger("controlsresize")}},buildposter:function(b,c,d,e){var f=this,g=a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),h=b.$media.attr("poster");""!==b.options.poster&&(h=b.options.poster),h?f.setPoster(h):g.hide(),e.addEventListener("play",function(){g.hide()},!1),b.options.showPosterWhenEnded&&b.options.autoRewind&&e.addEventListener("ended",function(){g.show()},!1)},setPoster:function(b){var c=this,d=c.container.find(".mejs-poster"),e=d.find("img");0===e.length&&(e=a('<img width="100%" height="100%" alt="" />').appendTo(d)),e.attr("src",b),d.css({"background-image":"url("+b+")"})},buildoverlays:function(b,c,d,e){var f=this;if(b.isVideo){var g=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),h=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),i=a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button" role="button" aria-label="'+mejs.i18n.t("mejs.play")+'" aria-pressed="false"></div></div>').appendTo(d).bind("click",function(){if(f.options.clickToPlayPause){e.paused&&e.play();var b=a(this).find(".mejs-overlay-button"),c=b.attr("aria-pressed");b.attr("aria-pressed",!!c)}});e.addEventListener("play",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("playing",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("seeking",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("seeked",function(){g.hide(),c.find(".mejs-time-buffering").hide()},!1),e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||i.show()},!1),e.addEventListener("waiting",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("loadeddata",function(){g.show(),c.find(".mejs-time-buffering").show(),mejs.MediaFeatures.isAndroid&&(e.canplayTimeout=window.setTimeout(function(){if(document.createEvent){var a=document.createEvent("HTMLEvents");return a.initEvent("canplay",!0,!0),e.dispatchEvent(a)}},300))},!1),e.addEventListener("canplay",function(){g.hide(),c.find(".mejs-time-buffering").hide(),clearTimeout(e.canplayTimeout)},!1),e.addEventListener("error",function(a){f.handleError(a),g.hide(),i.hide(),h.show(),h.find(".mejs-overlay-error").html("Error loading this resource")},!1),e.addEventListener("keydown",function(a){f.onkeydown(b,e,a)},!1)}},buildkeyboard:function(b,c,d,e){var f=this;f.container.keydown(function(){f.keyboardAction=!0}),f.globalBind("keydown",function(c){return b.hasFocus=0!==a(c.target).closest(".mejs-container").length&&a(c.target).closest(".mejs-container").attr("id")===b.$media.closest(".mejs-container").attr("id"),f.onkeydown(b,e,c)}),f.globalBind("click",function(c){b.hasFocus=0!==a(c.target).closest(".mejs-container").length})},onkeydown:function(a,b,c){if(a.hasFocus&&a.options.enableKeyboard)for(var d=0,e=a.options.keyActions.length;e>d;d++)for(var f=a.options.keyActions[d],g=0,h=f.keys.length;h>g;g++)if(c.keyCode==f.keys[g])return"function"==typeof c.preventDefault&&c.preventDefault(),f.action(a,b,c.keyCode,c),!1;return!0},findTracks:function(){var b=this,c=b.$media.find("track");b.tracks=[],c.each(function(c,d){d=a(d),b.tracks.push({srclang:d.attr("srclang")?d.attr("srclang").toLowerCase():"",src:d.attr("src"),kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:!1})})},changeSkin:function(a){this.container[0].className="mejs-container "+a,this.setPlayerSize(this.width,this.height),this.setControlsSize()},play:function(){this.load(),this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load(),this.isLoaded=!0},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){var b=this;if("youtube"===b.media.pluginType){var c;if("string"!=typeof a){var d,e;for(d=0;d<a.length;d++)if(e=a[d],this.canPlayType(e.type)){a=e.src;break}}if(-1!==a.lastIndexOf("youtu.be"))c=a.substr(a.lastIndexOf("/")+1),-1!==c.indexOf("?")&&(c=c.substr(0,c.indexOf("?")));else{var f=a.match(/[?&]v=([^&#]+)|&|#|$/);f&&(c=f[1])}null!==b.media.getAttribute("autoplay")?b.media.pluginApi.loadVideoById(c):b.media.pluginApi.cueVideoById(c)}else b.media.setSrc(a)},remove:function(){var a,b,c=this;c.container.prev(".mejs-offscreen").remove();for(a in c.options.features)if(b=c.options.features[a],c["clean"+b])try{c["clean"+b](c)}catch(d){}c.isDynamic?c.$node.insertBefore(c.container):(c.$media.prop("controls",!0),c.$node.clone().insertBefore(c.container).show(),c.$node.remove()),"native"!==c.media.pluginType&&c.media.remove(),delete mejs.players[c.id],"object"==typeof c.container&&c.container.remove(),c.globalUnbind(),delete c.node.player},rebuildtracks:function(){var a=this;a.findTracks(),a.buildtracks(a,a.controls,a.layers,a.media)},resetSize:function(){var a=this;setTimeout(function(){a.setPlayerSize(a.width,a.height),a.setControlsSize()},50)}},function(){function b(b,d){var e={d:[],w:[]};return a.each((b||"").split(" "),function(a,b){var f=b+"."+d;0===f.indexOf(".")?(e.d.push(f),e.w.push(f)):e[c.test(b)?"w":"d"].push(f)}),e.d=e.d.join(" "),e.w=e.w.join(" "),e}var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,d,e){var f=this,g=f.node?f.node.ownerDocument:document;c=b(c,f.id),c.d&&a(g).bind(c.d,d,e),c.w&&a(window).bind(c.w,d,e)},mejs.MediaElementPlayer.prototype.globalUnbind=function(c,d){var e=this,f=e.node?e.node.ownerDocument:document;c=b(c,e.id),c.d&&a(f).unbind(c.d,d),c.w&&a(window).unbind(c.w,d)}}(),"undefined"!=typeof a&&(a.fn.mediaelementplayer=function(b){return b===!1?this.each(function(){var b=a(this).data("mediaelementplayer");b&&b.remove(),a(this).removeData("mediaelementplayer")}):this.each(function(){a(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,b))}),this},a(document).ready(function(){a(".mejs-player").mediaelementplayer()})),window.MediaElementPlayer=mejs.MediaElementPlayer}(mejs.$),function(a){a.extend(mejs.MepDefaults,{playText:"",pauseText:""}),a.extend(MediaElementPlayer.prototype,{buildplaypause:function(b,c,d,e){function f(a){"play"===a?(k.removeClass("mejs-play").addClass("mejs-pause"),l.attr({title:j,"aria-label":j})):(k.removeClass("mejs-pause").addClass("mejs-play"),l.attr({title:i,"aria-label":i}))}var g=this,h=g.options,i=h.playText?h.playText:mejs.i18n.t("mejs.play"),j=h.pauseText?h.pauseText:mejs.i18n.t("mejs.pause"),k=a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+g.id+'" title="'+i+'" aria-label="'+j+'"></button></div>').appendTo(c).click(function(a){return a.preventDefault(),e.paused?e.play():e.pause(),!1}),l=k.find("button");f("pse"),e.addEventListener("play",function(){f("play")},!1),e.addEventListener("playing",function(){f("play")},!1),e.addEventListener("pause",function(){f("pse")},!1),e.addEventListener("paused",function(){f("pse")},!1)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{stopText:"Stop"}),a.extend(MediaElementPlayer.prototype,{buildstop:function(b,c,d,e){var f=this;a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+f.id+'" title="'+f.options.stopText+'" aria-label="'+f.options.stopText+'"></button></div>').appendTo(c).click(function(){e.paused||e.pause(),e.currentTime>0&&(e.setCurrentTime(0),e.pause(),c.find(".mejs-time-current").width("0px"),c.find(".mejs-time-handle").css("left","0px"),c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0,b.options)),c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0,b.options)),d.find(".mejs-poster").show())})}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{enableProgressTooltip:!0,progressHelpText:""}),a.extend(MediaElementPlayer.prototype,{buildprogress:function(b,c,d,e){var f=this,g=!1,h=!1,i=0,j=!1,k=b.options.autoRewind,l=(f.options.progressHelpText?f.options.progressHelpText:mejs.i18n.t("mejs.time-help-text"),b.options.enableProgressTooltip?'<span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span>':"");a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span>'+l+"</span></div>").appendTo(c),c.find(".mejs-time-buffering").hide(),f.total=c.find(".mejs-time-total"),f.loaded=c.find(".mejs-time-loaded"),f.current=c.find(".mejs-time-current"),f.handle=c.find(".mejs-time-handle"),f.timefloat=c.find(".mejs-time-float"),f.timefloatcurrent=c.find(".mejs-time-float-current"),f.slider=c.find(".mejs-time-slider");var m=function(a){var c,d=f.total.offset(),h=f.total.width(),i=0,j=0,k=0;c=a.originalEvent&&a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.changedTouches?a.changedTouches[0].pageX:a.pageX,e.duration&&(c<d.left?c=d.left:c>h+d.left&&(c=h+d.left),k=c-d.left,i=k/h,j=.02>=i?0:i*e.duration,g&&j!==e.currentTime&&e.setCurrentTime(j),mejs.MediaFeatures.hasTouch||(f.timefloat.css("left",k),f.timefloatcurrent.html(mejs.Utility.secondsToTimeCode(j,b.options)),f.timefloat.show()))},n=function(a){var c=e.currentTime,d=mejs.i18n.t("mejs.time-slider"),g=mejs.Utility.secondsToTimeCode(c,b.options),h=e.duration;f.slider.attr({"aria-label":d,"aria-valuemin":0,"aria-valuemax":h,"aria-valuenow":c,"aria-valuetext":g,role:"slider",tabindex:0})},o=function(){var a=new Date;a-i>=1e3&&e.play()};f.slider.bind("focus",function(a){b.options.autoRewind=!1}),f.slider.bind("blur",function(a){b.options.autoRewind=k}),f.slider.bind("keydown",function(a){new Date-i>=1e3&&(j=e.paused);var c=a.keyCode,d=e.duration,f=e.currentTime,g=b.options.defaultSeekForwardInterval(e),h=b.options.defaultSeekBackwardInterval(e);switch(c){case 37:case 40:f-=h;break;case 39:case 38:f+=g;break;case 36:f=0;break;case 35:f=d;break;case 32:case 13:return void(e.paused?e.play():e.pause());default:return}return f=0>f?0:f>=d?d:Math.floor(f),i=new Date,j||e.pause(),f<e.duration&&!j&&setTimeout(o,1100),e.setCurrentTime(f),a.preventDefault(),a.stopPropagation(),!1}),f.total.bind("mousedown touchstart",function(a){(1===a.which||0===a.which)&&(g=!0,m(a),f.globalBind("mousemove.dur touchmove.dur",function(a){m(a)}),f.globalBind("mouseup.dur touchend.dur",function(a){g=!1,"undefined"!=typeof f.timefloat&&f.timefloat.hide(),f.globalUnbind(".dur")}))}).bind("mouseenter",function(a){h=!0,f.globalBind("mousemove.dur",function(a){m(a)}),"undefined"==typeof f.timefloat||mejs.MediaFeatures.hasTouch||f.timefloat.show()}).bind("mouseleave",function(a){h=!1,g||(f.globalUnbind(".dur"),"undefined"!=typeof f.timefloat&&f.timefloat.hide())}),e.addEventListener("progress",function(a){b.setProgressRail(a),b.setCurrentRail(a)},!1),e.addEventListener("timeupdate",function(a){b.setProgressRail(a),b.setCurrentRail(a),n(a)},!1),f.container.on("controlsresize",function(a){b.setProgressRail(a),b.setCurrentRail(a)})},setProgressRail:function(a){var b=this,c=void 0!==a?a.target:b.media,d=null;c&&c.buffered&&c.buffered.length>0&&c.buffered.end&&c.duration?d=c.buffered.end(c.buffered.length-1)/c.duration:c&&void 0!==c.bytesTotal&&c.bytesTotal>0&&void 0!==c.bufferedBytes?d=c.bufferedBytes/c.bytesTotal:a&&a.lengthComputable&&0!==a.total&&(d=a.loaded/a.total),null!==d&&(d=Math.min(1,Math.max(0,d)),b.loaded&&b.total&&b.loaded.width(b.total.width()*d))},setCurrentRail:function(){var a=this;if(void 0!==a.media.currentTime&&a.media.duration&&a.total&&a.handle){var b=Math.round(a.total.width()*a.media.currentTime/a.media.duration),c=b-Math.round(a.handle.outerWidth(!0)/2);a.current.width(b),a.handle.css("left",c)}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"}),a.extend(MediaElementPlayer.prototype,{buildcurrent:function(b,c,d,e){var f=this;a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">'+mejs.Utility.secondsToTimeCode(0,b.options)+"</span></div>").appendTo(c),f.currenttime=f.controls.find(".mejs-currenttime"),e.addEventListener("timeupdate",function(){f.controlsAreVisible&&b.updateCurrent()},!1)},buildduration:function(b,c,d,e){var f=this;c.children().last().find(".mejs-currenttime").length>0?a(f.options.timeAndDurationSeparator+'<span class="mejs-duration">'+mejs.Utility.secondsToTimeCode(f.options.duration,f.options)+"</span>").appendTo(c.find(".mejs-time")):(c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"),a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+mejs.Utility.secondsToTimeCode(f.options.duration,f.options)+"</span></div>").appendTo(c)),f.durationD=f.controls.find(".mejs-duration"),e.addEventListener("timeupdate",function(){f.controlsAreVisible&&b.updateDuration()},!1)},updateCurrent:function(){var a=this,b=a.media.currentTime;isNaN(b)&&(b=0),a.currenttime&&a.currenttime.html(mejs.Utility.secondsToTimeCode(b,a.options))},updateDuration:function(){var a=this,b=a.media.duration;a.options.duration>0&&(b=a.options.duration),isNaN(b)&&(b=0),a.container.toggleClass("mejs-long-video",b>3600),a.durationD&&b>0&&a.durationD.html(mejs.Utility.secondsToTimeCode(b,a.options))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("mejs.mute-toggle"),allyVolumeControlText:mejs.i18n.t("mejs.volume-help-text"),hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical"}),a.extend(MediaElementPlayer.prototype,{buildvolume:function(b,c,d,e){if(!mejs.MediaFeatures.isAndroid&&!mejs.MediaFeatures.isiOS||!this.options.hideVolumeOnTouchDevices){var f=this,g=f.isVideo?f.options.videoVolume:f.options.audioVolume,h="horizontal"==g?a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c):a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),i=f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),j=f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),k=f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),l=f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),m=function(a,b){if(!i.is(":visible")&&"undefined"==typeof b)return i.show(),m(a,!0),void i.hide();a=Math.max(0,a),a=Math.min(a,1),0===a?(h.removeClass("mejs-mute").addClass("mejs-unmute"),h.children("button").attr("title",mejs.i18n.t("mejs.unmute")).attr("aria-label",mejs.i18n.t("mejs.unmute"))):(h.removeClass("mejs-unmute").addClass("mejs-mute"),h.children("button").attr("title",mejs.i18n.t("mejs.mute")).attr("aria-label",mejs.i18n.t("mejs.mute")));var c=j.position();if("vertical"==g){var d=j.height(),e=d-d*a;l.css("top",Math.round(c.top+e-l.height()/2)),k.height(d-e),k.css("top",c.top+e)}else{var f=j.width(),n=f*a;l.css("left",Math.round(c.left+n-l.width()/2)),k.width(Math.round(n))}},n=function(a){var b=null,c=j.offset();if("vertical"===g){var d=j.height(),f=a.pageY-c.top;if(b=(d-f)/d,0===c.top||0===c.left)return}else{var h=j.width(),i=a.pageX-c.left;b=i/h;
}b=Math.max(0,b),b=Math.min(b,1),m(b),0===b?e.setMuted(!0):e.setMuted(!1),e.setVolume(b)},o=!1,p=!1;h.hover(function(){i.show(),p=!0},function(){p=!1,o||"vertical"!=g||i.hide()});var q=function(a){var b=Math.floor(100*e.volume);i.attr({"aria-label":mejs.i18n.t("mejs.volume-slider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":b,"aria-valuetext":b+"%",role:"slider",tabindex:0})};i.bind("mouseover",function(){p=!0}).bind("mousedown",function(a){return n(a),f.globalBind("mousemove.vol",function(a){n(a)}),f.globalBind("mouseup.vol",function(){o=!1,f.globalUnbind(".vol"),p||"vertical"!=g||i.hide()}),o=!0,!1}).bind("keydown",function(a){var b=a.keyCode,c=e.volume;switch(b){case 38:c=Math.min(c+.1,1);break;case 40:c=Math.max(0,c-.1);break;default:return!0}return o=!1,m(c),e.setVolume(c),!1}),h.find("button").click(function(){e.setMuted(!e.muted)}),h.find("button").bind("focus",function(){i.show()}),e.addEventListener("volumechange",function(a){o||(e.muted?(m(0),h.removeClass("mejs-mute").addClass("mejs-unmute")):(m(e.volume),h.removeClass("mejs-unmute").addClass("mejs-mute"))),q(a)},!1),0===b.options.startVolume&&e.setMuted(!0),"native"===e.pluginType&&e.setVolume(b.options.startVolume),f.container.on("controlsresize",function(){e.muted?(m(0),h.removeClass("mejs-mute").addClass("mejs-unmute")):(m(e.volume),h.removeClass("mejs-unmute").addClass("mejs-mute"))})}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{usePluginFullScreen:!0,newWindowCallback:function(){return""},fullscreenText:""}),a.extend(MediaElementPlayer.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,fullscreenMode:"",buildfullscreen:function(b,c,d,e){if(b.isVideo){b.isInIframe=window.location!=window.parent.location,e.addEventListener("loadstart",function(){b.detectFullscreenMode()});var f=this,g=null,h=f.options.fullscreenText?f.options.fullscreenText:mejs.i18n.t("mejs.fullscreen"),i=a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+f.id+'" title="'+h+'" aria-label="'+h+'"></button></div>').appendTo(c).on("click",function(){var a=mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||b.isFullScreen;a?b.exitFullScreen():b.enterFullScreen()}).on("mouseover",function(){if("plugin-hover"==f.fullscreenMode){null!==g&&(clearTimeout(g),delete g);var a=i.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!0)}}).on("mouseout",function(){"plugin-hover"==f.fullscreenMode&&(null!==g&&(clearTimeout(g),delete g),g=setTimeout(function(){e.hideFullscreenButton()},1500))});if(b.fullscreenBtn=i,f.globalBind("keydown",function(a){27==a.keyCode&&(mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||f.isFullScreen)&&b.exitFullScreen()}),f.normalHeight=0,f.normalWidth=0,mejs.MediaFeatures.hasTrueNativeFullScreen){var j=function(a){b.isFullScreen&&(mejs.MediaFeatures.isFullScreen()?(b.isNativeFullScreen=!0,b.setControlsSize()):(b.isNativeFullScreen=!1,b.exitFullScreen()))};b.globalBind(mejs.MediaFeatures.fullScreenEventName,j)}}},detectFullscreenMode:function(){var a=this,b="",c=mejs.MediaFeatures;return c.hasTrueNativeFullScreen&&"native"===a.media.pluginType?b="native-native":c.hasTrueNativeFullScreen&&"native"!==a.media.pluginType&&!c.hasFirefoxPluginMovingProblem?b="plugin-native":a.usePluginFullScreen?mejs.MediaFeatures.supportsPointerEvents?(b="plugin-click",a.createPluginClickThrough()):b="plugin-hover":b="fullwindow",a.fullscreenMode=b,b},isPluginClickThroughCreated:!1,createPluginClickThrough:function(){var b=this;if(!b.isPluginClickThroughCreated){var c,d,e=!1,f=function(){if(e){for(var a in g)g[a].hide();b.fullscreenBtn.css("pointer-events",""),b.controls.css("pointer-events",""),b.media.removeEventListener("click",b.clickToPlayPauseCallback),e=!1}},g={},h=["top","left","right","bottom"],i=function(){var a=fullscreenBtn.offset().left-b.container.offset().left,d=fullscreenBtn.offset().top-b.container.offset().top,e=fullscreenBtn.outerWidth(!0),f=fullscreenBtn.outerHeight(!0),h=b.container.width(),i=b.container.height();for(c in g)g[c].css({position:"absolute",top:0,left:0});g.top.width(h).height(d),g.left.width(a).height(f).css({top:d}),g.right.width(h-a-e).height(f).css({top:d,left:a+e}),g.bottom.width(h).height(i-f-d).css({top:d+f})};for(b.globalBind("resize",function(){i()}),c=0,d=h.length;d>c;c++)g[h[c]]=a('<div class="mejs-fullscreen-hover" />').appendTo(b.container).mouseover(f).hide();fullscreenBtn.on("mouseover",function(){if(!b.isFullScreen){var a=fullscreenBtn.offset(),d=player.container.offset();media.positionFullscreenButton(a.left-d.left,a.top-d.top,!1),b.fullscreenBtn.css("pointer-events","none"),b.controls.css("pointer-events","none"),b.media.addEventListener("click",b.clickToPlayPauseCallback);for(c in g)g[c].show();i(),e=!0}}),media.addEventListener("fullscreenchange",function(a){b.isFullScreen=!b.isFullScreen,b.isFullScreen?b.media.removeEventListener("click",b.clickToPlayPauseCallback):b.media.addEventListener("click",b.clickToPlayPauseCallback),f()}),b.globalBind("mousemove",function(a){if(e){var c=fullscreenBtn.offset();(a.pageY<c.top||a.pageY>c.top+fullscreenBtn.outerHeight(!0)||a.pageX<c.left||a.pageX>c.left+fullscreenBtn.outerWidth(!0))&&(fullscreenBtn.css("pointer-events",""),b.controls.css("pointer-events",""),e=!1)}}),b.isPluginClickThroughCreated=!0}},cleanfullscreen:function(a){a.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var b=this;if(mejs.MediaFeatures.isiOS&&mejs.MediaFeatures.hasiOSFullScreen&&"function"==typeof b.media.webkitEnterFullscreen)return void b.media.webkitEnterFullscreen();a(document.documentElement).addClass("mejs-fullscreen"),b.normalHeight=b.container.height(),b.normalWidth=b.container.width(),"native-native"===b.fullscreenMode||"plugin-native"===b.fullscreenMode?(mejs.MediaFeatures.requestFullScreen(b.container[0]),b.isInIframe&&setTimeout(function d(){if(b.isNativeFullScreen){var c=.002,e=a(window).width(),f=screen.width,g=Math.abs(f-e),h=f*c;g>h?b.exitFullScreen():setTimeout(d,500)}},1e3)):"fullwindow"==b.fullscreeMode,b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),b.containerSizeTimeout=setTimeout(function(){b.container.css({width:"100%",height:"100%"}),b.setControlsSize()},500),"native"===b.media.pluginType?b.$media.width("100%").height("100%"):(b.container.find(".mejs-shim").width("100%").height("100%"),setTimeout(function(){var c=a(window),d=c.width(),e=c.height();b.media.setVideoSize(d,e)},500)),b.layers.children("div").width("100%").height("100%"),b.fullscreenBtn&&b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"),b.setControlsSize(),b.isFullScreen=!0;var c=Math.min(screen.width/b.width,screen.height/b.height);b.container.find(".mejs-captions-text").css("font-size",100*c+"%"),b.container.find(".mejs-captions-text").css("line-height","normal"),b.container.find(".mejs-captions-position").css("bottom","45px"),b.container.trigger("enteredfullscreen")},exitFullScreen:function(){var b=this;clearTimeout(b.containerSizeTimeout),mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||b.isFullScreen)&&mejs.MediaFeatures.cancelFullScreen(),a(document.documentElement).removeClass("mejs-fullscreen"),b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight),"native"===b.media.pluginType?b.$media.width(b.normalWidth).height(b.normalHeight):(b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight),b.media.setVideoSize(b.normalWidth,b.normalHeight)),b.layers.children("div").width(b.normalWidth).height(b.normalHeight),b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"),b.setControlsSize(),b.isFullScreen=!1,b.container.find(".mejs-captions-text").css("font-size",""),b.container.find(".mejs-captions-text").css("line-height",""),b.container.find(".mejs-captions-position").css("bottom",""),b.container.trigger("exitedfullscreen")}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x"}),a.extend(MediaElementPlayer.prototype,{buildspeed:function(b,c,d,e){var f=this;if("native"==f.media.pluginType){for(var g=null,h=null,i=null,j=null,k=[],l=!1,m=0,n=f.options.speeds.length;n>m;m++){var o=f.options.speeds[m];"string"==typeof o?(k.push({name:o+f.options.speedChar,value:o}),o===f.options.defaultSpeed&&(l=!0)):(k.push(o),o.value===f.options.defaultSpeed&&(l=!0))}l||k.push({name:f.options.defaultSpeed+f.options.speedChar,value:f.options.defaultSpeed}),k.sort(function(a,b){return parseFloat(b.value)-parseFloat(a.value)});var p=function(a){for(m=0,n=k.length;n>m;m++)if(k[m].value===a)return k[m].name},q='<div class="mejs-button mejs-speed-button"><button type="button">'+p(f.options.defaultSpeed)+'</button><div class="mejs-speed-selector"><ul>';for(m=0,il=k.length;m<il;m++)j=f.id+"-speed-"+k[m].value,q+='<li><input type="radio" name="speed" value="'+k[m].value+'" id="'+j+'" '+(k[m].value===f.options.defaultSpeed?" checked":"")+' /><label for="'+j+'" '+(k[m].value===f.options.defaultSpeed?' class="mejs-speed-selected"':"")+">"+k[m].name+"</label></li>";q+="</ul></div></div>",g=a(q).appendTo(c),h=g.find(".mejs-speed-selector"),i=f.options.defaultSpeed,e.addEventListener("loadedmetadata",function(a){i&&(e.playbackRate=parseFloat(i))},!0),h.on("click",'input[type="radio"]',function(){var b=a(this).attr("value");i=b,e.playbackRate=parseFloat(b),g.find("button").html(p(b)),g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"),g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")}),g.one("mouseenter focusin",function(){h.height(g.find(".mejs-speed-selector ul").outerHeight(!0)+g.find(".mejs-speed-translations").outerHeight(!0)).css("top",-1*h.height()+"px")})}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{startLanguage:"",tracksText:"",tracksAriaLive:!1,hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),a.extend(MediaElementPlayer.prototype,{hasChapters:!1,cleartracks:function(a,b,c,d){a&&(a.captions&&a.captions.remove(),a.chapters&&a.chapters.remove(),a.captionsText&&a.captionsText.remove(),a.captionsButton&&a.captionsButton.remove())},buildtracks:function(b,c,d,e){if(0!==b.tracks.length){var f,g,h=this,i=h.options.tracksAriaLive?'role="log" aria-live="assertive" aria-atomic="false"':"",j=h.options.tracksText?h.options.tracksText:mejs.i18n.t("mejs.captions-subtitles");if(h.domNode.textTracks)for(f=h.domNode.textTracks.length-1;f>=0;f--)h.domNode.textTracks[f].mode="hidden";h.cleartracks(b,c,d,e),b.chapters=a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(),b.captions=a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" '+i+'><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(),b.captionsText=b.captions.find(".mejs-captions-text"),b.captionsButton=a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+h.id+'" title="'+j+'" aria-label="'+j+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+b.id+'_captions" id="'+b.id+'_captions_none" value="none" checked="checked" /><label for="'+b.id+'_captions_none">'+mejs.i18n.t("mejs.none")+"</label></li></ul></div></div>").appendTo(c);var k=0;for(f=0;f<b.tracks.length;f++)g=b.tracks[f].kind,("subtitles"===g||"captions"===g)&&k++;for(h.options.toggleCaptionsButtonWhenOnlyOne&&1==k?b.captionsButton.on("click",function(){null===b.selectedTrack?lang=b.tracks[0].srclang:lang="none",b.setTrack(lang)}):(b.captionsButton.on("mouseenter focusin",function(){a(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")}).on("click","input[type=radio]",function(){lang=this.value,b.setTrack(lang)}),b.captionsButton.on("mouseleave focusout",function(){a(this).find(".mejs-captions-selector").addClass("mejs-offscreen")})),b.options.alwaysShowControls?b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):b.container.bind("controlsshown",function(){b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")}),b.trackToLoad=-1,b.selectedTrack=null,b.isLoadingTrack=!1,f=0;f<b.tracks.length;f++)g=b.tracks[f].kind,("subtitles"===g||"captions"===g)&&b.addTrackButton(b.tracks[f].srclang,b.tracks[f].label);b.loadNextTrack(),e.addEventListener("timeupdate",function(){b.displayCaptions()},!1),""!==b.options.slidesSelector&&(b.slidesContainer=a(b.options.slidesSelector),e.addEventListener("timeupdate",function(){b.displaySlides()},!1)),e.addEventListener("loadedmetadata",function(){b.displayChapters()},!1),b.container.hover(function(){b.hasChapters&&(b.chapters.removeClass("mejs-offscreen"),b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))},function(){b.hasChapters&&!e.paused&&b.chapters.fadeOut(200,function(){a(this).addClass("mejs-offscreen"),a(this).css("display","block")})}),h.container.on("controlsresize",function(){h.adjustLanguageBox()}),null!==b.node.getAttribute("autoplay")&&b.chapters.addClass("mejs-offscreen")}},setTrack:function(a){var b,c=this;if("none"==a)c.selectedTrack=null,c.captionsButton.removeClass("mejs-captions-enabled");else for(b=0;b<c.tracks.length;b++)if(c.tracks[b].srclang==a){null===c.selectedTrack&&c.captionsButton.addClass("mejs-captions-enabled"),c.selectedTrack=c.tracks[b],c.captions.attr("lang",c.selectedTrack.srclang),c.displayCaptions();break}},loadNextTrack:function(){var a=this;a.trackToLoad++,a.trackToLoad<a.tracks.length?(a.isLoadingTrack=!0,a.loadTrack(a.trackToLoad)):(a.isLoadingTrack=!1,a.checkForTracks())},loadTrack:function(b){var c=this,d=c.tracks[b],e=function(){d.isLoaded=!0,c.enableTrackButton(d.srclang,d.label),c.loadNextTrack()};(void 0!==d.src||""!==d.src)&&a.ajax({url:d.src,dataType:"text",success:function(a){"string"==typeof a&&/<tt\s+xml/gi.exec(a)?d.entries=mejs.TrackFormatParser.dfxp.parse(a):d.entries=mejs.TrackFormatParser.webvtt.parse(a),e(),"chapters"==d.kind&&c.media.addEventListener("play",function(){c.media.duration>0&&c.displayChapters(d)},!1),"slides"==d.kind&&c.setupSlides(d)},error:function(){c.removeTrackButton(d.srclang),c.loadNextTrack()}})},enableTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("input[value="+b+"]").prop("disabled",!1).siblings("label").html(c),d.options.startLanguage==b&&a("#"+d.id+"_captions_"+b).prop("checked",!0).trigger("click"),d.adjustLanguageBox()},removeTrackButton:function(a){var b=this;b.captionsButton.find("input[value="+a+"]").closest("li").remove(),b.adjustLanguageBox()},addTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("ul").append(a('<li><input type="radio" name="'+d.id+'_captions" id="'+d.id+"_captions_"+b+'" value="'+b+'" disabled="disabled" /><label for="'+d.id+"_captions_"+b+'">'+c+" (loading)</label></li>")),d.adjustLanguageBox(),d.container.find(".mejs-captions-translations option[value="+b+"]").remove()},adjustLanguageBox:function(){var a=this;a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0)+a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))},checkForTracks:function(){var a=this,b=!1;if(a.options.hideCaptionsButtonWhenEmpty){for(var c=0;c<a.tracks.length;c++){var d=a.tracks[c].kind;if(("subtitles"===d||"captions"===d)&&a.tracks[c].isLoaded){b=!0;break}}b||(a.captionsButton.hide(),a.setControlsSize())}},displayCaptions:function(){if("undefined"!=typeof this.tracks){var a,b=this,c=b.selectedTrack;if(null!==c&&c.isLoaded){for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return b.captionsText.html(c.entries.text[a]).attr("class","mejs-captions-text "+(c.entries.times[a].identifier||"")),void b.captions.show().height(0);b.captions.hide()}else b.captions.hide()}},setupSlides:function(a){var b=this;b.slides=a,b.slides.entries.imgs=[b.slides.entries.text.length],b.showSlide(0)},showSlide:function(b){if("undefined"!=typeof this.tracks&&"undefined"!=typeof this.slidesContainer){var c=this,d=c.slides.entries.text[b],e=c.slides.entries.imgs[b];"undefined"==typeof e||"undefined"==typeof e.fadeIn?c.slides.entries.imgs[b]=e=a('<img src="'+d+'">').on("load",function(){e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()}):e.is(":visible")||e.is(":animated")||e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if("undefined"!=typeof this.slides){var a,b=this,c=b.slides;for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return void b.showSlide(a)}},displayChapters:function(){var a,b=this;for(a=0;a<b.tracks.length;a++)if("chapters"==b.tracks[a].kind&&b.tracks[a].isLoaded){b.drawChapters(b.tracks[a]),b.hasChapters=!0;break}},drawChapters:function(b){var c,d,e=this,f=0,g=0;for(e.chapters.empty(),c=0;c<b.entries.times.length;c++)d=b.entries.times[c].stop-b.entries.times[c].start,f=Math.floor(d/e.media.duration*100),(f+g>100||c==b.entries.times.length-1&&100>f+g)&&(f=100-g),e.chapters.append(a('<div class="mejs-chapter" rel="'+b.entries.times[c].start+'" style="left: '+g.toString()+"%;width: "+f.toString()+'%;"><div class="mejs-chapter-block'+(c==b.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+b.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(b.entries.times[c].start,e.options)+"&ndash;"+mejs.Utility.secondsToTimeCode(b.entries.times[c].stop,e.options)+"</span></div></div>")),g+=f;e.chapters.find("div.mejs-chapter").click(function(){e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),e.media.paused&&e.media.play()}),e.chapters.show()}}),mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}},mejs.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(b){for(var c,d,e,f=0,g=mejs.TrackFormatParser.split2(b,/\r?\n/),h={text:[],times:[]};f<g.length;f++){if(c=this.pattern_timecode.exec(g[f]),c&&f<g.length){for(f-1>=0&&""!==g[f-1]&&(e=g[f-1]),f++,d=g[f],f++;""!==g[f]&&f<g.length;)d=d+"\n"+g[f],f++;d=a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),h.text.push(d),h.times.push({identifier:e,start:0===mejs.Utility.convertSMPTEtoSeconds(c[1])?.2:mejs.Utility.convertSMPTEtoSeconds(c[1]),stop:mejs.Utility.convertSMPTEtoSeconds(c[3]),settings:c[5]})}e=""}return h}},dfxp:{parse:function(b){b=a(b).filter("tt");var c,d,e=0,f=b.children("div").eq(0),g=f.find("p"),h=b.find("#"+f.attr("style")),i={text:[],times:[]};if(h.length){var j=h.removeAttr("id").get(0).attributes;if(j.length)for(c={},e=0;e<j.length;e++)c[j[e].name.split(":")[1]]=j[e].value}for(e=0;e<g.length;e++){var k,l={start:null,stop:null,style:null};if(g.eq(e).attr("begin")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))),!l.start&&g.eq(e-1).attr("end")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e-1).attr("end"))),g.eq(e).attr("end")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))),!l.stop&&g.eq(e+1).attr("begin")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e+1).attr("begin"))),c){k="";for(var m in c)k+=m+":"+c[m]+";"}k&&(l.style=k),0===l.start&&(l.start=.2),i.times.push(l),d=a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),i.text.push(d)}return i}},split2:function(a,b){return a.split(b)}},3!="x\n\ny".split(/\n/gi).length&&(mejs.TrackFormatParser.split2=function(a,b){var c,d=[],e="";for(c=0;c<a.length;c++)e+=a.substring(c,c+1),b.test(e)&&(d.push(e.replace(b,"")),e="");return d.push(e),d})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{sourcechooserText:""}),a.extend(MediaElementPlayer.prototype,{buildsourcechooser:function(b,c,d,e){var f,g=this,h=g.options.sourcechooserText?g.options.sourcechooserText:mejs.i18n.t("mejs.source-chooser");b.sourcechooserButton=a('<div class="mejs-button mejs-sourcechooser-button"><button type="button" role="button" aria-haspopup="true" aria-owns="'+g.id+'" title="'+h+'" aria-label="'+h+'"></button><div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true"><ul></ul></div></div>').appendTo(c).hover(function(){clearTimeout(f),b.showSourcechooserSelector()},function(){a(this);f=setTimeout(function(){b.hideSourcechooserSelector()},500)}).on("keydown",function(c){var d=c.keyCode;switch(d){case 32:mejs.MediaFeatures.isFirefox||b.showSourcechooserSelector(),a(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();break;case 13:b.showSourcechooserSelector(),a(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();break;case 27:b.hideSourcechooserSelector(),a(this).find("button").focus();break;default:return!0}}).on("focusout",mejs.Utility.debounce(function(c){setTimeout(function(){var c=a(document.activeElement).closest(".mejs-sourcechooser-selector");c.length||b.hideSourcechooserSelector()},0)},100)).delegate("input[type=radio]","click",function(){a(this).attr("aria-selected",!0).attr("checked","checked"),a(this).closest(".mejs-sourcechooser-selector").find("input[type=radio]").not(this).attr("aria-selected","false").removeAttr("checked");var b=this.value;if(e.currentSrc!=b){var c=e.currentTime,d=e.paused;e.pause(),e.setSrc(b),e.addEventListener("loadedmetadata",function(a){e.currentTime=c},!0);var f=function(a){d||e.play(),e.removeEventListener("canplay",f,!0)};e.addEventListener("canplay",f,!0),e.load()}}).delegate("button","click",function(c){a(this).siblings(".mejs-sourcechooser-selector").hasClass("mejs-offscreen")?(b.showSourcechooserSelector(),a(this).siblings(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus()):b.hideSourcechooserSelector()});for(var i in this.node.children){var j=this.node.children[i];"SOURCE"!==j.nodeName||"probably"!=e.canPlayType(j.type)&&"maybe"!=e.canPlayType(j.type)||b.addSourceButton(j.src,j.title,j.type,e.src==j.src)}},addSourceButton:function(b,c,d,e){var f=this;(""===c||void 0==c)&&(c=b),d=d.split("/")[1],f.sourcechooserButton.find("ul").append(a('<li><input type="radio" name="'+f.id+'_sourcechooser" id="'+f.id+"_sourcechooser_"+c+d+'" role="menuitemradio" value="'+b+'" '+(e?'checked="checked"':"")+'aria-selected="'+e+'" /><label for="'+f.id+"_sourcechooser_"+c+d+'" aria-hidden="true">'+c+" ("+d+")</label></li>")),f.adjustSourcechooserBox()},adjustSourcechooserBox:function(){var a=this;a.sourcechooserButton.find(".mejs-sourcechooser-selector").height(a.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(!0))},hideSourcechooserSelector:function(){this.sourcechooserButton.find(".mejs-sourcechooser-selector").addClass("mejs-offscreen").attr("aria-expanded","false").attr("aria-hidden","true").find("input[type=radio]").attr("tabindex","-1")},showSourcechooserSelector:function(){this.sourcechooserButton.find(".mejs-sourcechooser-selector").removeClass("mejs-offscreen").attr("aria-expanded","true").attr("aria-hidden","false").find("input[type=radio]").attr("tabindex","0")}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){return"undefined"==typeof a.enterFullScreen?null:a.isFullScreen?mejs.i18n.t("mejs.fullscreen-off"):mejs.i18n.t("mejs.fullscreen-on")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("mejs.unmute"):mejs.i18n.t("mejs.mute")},click:function(a){a.media.muted?a.setMuted(!1):a.setMuted(!0)}},{isSeparator:!0},{render:function(a){return mejs.i18n.t("mejs.download-video")},click:function(a){window.location.href=a.media.currentSrc}}]}),a.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(b,c,d,e){b.contextMenu=a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(),b.container.bind("contextmenu",function(a){return b.isContextMenuEnabled?(a.preventDefault(),b.renderContextMenu(a.clientX-1,a.clientY-1),!1):void 0}),b.container.bind("click",function(){b.contextMenu.hide()}),b.contextMenu.bind("mouseleave",function(){b.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},isContextMenuEnabled:!0,enableContextMenu:function(){this.isContextMenuEnabled=!0},disableContextMenu:function(){this.isContextMenuEnabled=!1},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer(),a.contextMenuTimer=setTimeout(function(){a.hideContextMenu(),a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;null!=a&&(clearTimeout(a),delete a,a=null)},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(b,c){for(var d=this,e="",f=d.options.contextMenuItems,g=0,h=f.length;h>g;g++)if(f[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var i=f[g].render(d);null!=i&&(e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+1e6*Math.random()+'">'+i+"</div>")}d.contextMenu.empty().append(a(e)).css({top:c,left:b}).show(),d.contextMenu.find(".mejs-contextmenu-item").each(function(){var b=a(this),c=parseInt(b.data("itemindex"),10),e=d.options.contextMenuItems[c];"undefined"!=typeof e.show&&e.show(b,d),b.click(function(){"undefined"!=typeof e.click&&e.click(d),d.contextMenu.hide()})}),setTimeout(function(){d.killControlsTimer("rev3")},100)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{skipBackInterval:30,skipBackText:""}),a.extend(MediaElementPlayer.prototype,{buildskipback:function(b,c,d,e){var f=this,g=mejs.i18n.t("mejs.time-skip-back",f.options.skipBackInterval),h=f.options.skipBackText?f.options.skipBackText:g;a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="'+f.id+'" title="'+h+'" aria-label="'+h+'">'+f.options.skipBackInterval+"</button></div>").appendTo(c).click(function(){e.setCurrentTime(Math.max(e.currentTime-f.options.skipBackInterval,0)),a(this).find("button").blur()})}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{postrollCloseText:""}),a.extend(MediaElementPlayer.prototype,{buildpostroll:function(b,c,d,e){var f=this,g=f.options.postrollCloseText?f.options.postrollCloseText:mejs.i18n.t("mejs.close"),h=f.container.find('link[rel="postroll"]').attr("href");"undefined"!=typeof h&&(b.postroll=a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+g+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(),f.media.addEventListener("ended",function(c){a.ajax({dataType:"html",url:h,success:function(a,b){d.find(".mejs-postroll-layer-content").html(a)}}),b.postroll.show()},!1))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{markerColor:"#E9BC3D",markers:[],markerCallback:function(){}}),a.extend(MediaElementPlayer.prototype,{buildmarkers:function(a,b,c,d){var e=0,f=-1,g=-1,h=-1,i=-1;for(e=0;e<a.options.markers.length;++e)b.find(".mejs-time-total").append('<span class="mejs-time-marker"></span>');d.addEventListener("durationchange",function(c){a.setmarkers(b)}),d.addEventListener("timeupdate",function(b){for(f=Math.floor(d.currentTime),h>f?i>f&&(i=-1):h=f,e=0;e<a.options.markers.length;++e)g=Math.floor(a.options.markers[e]),f===g&&g!==i&&(a.options.markerCallback(d,d.currentTime),i=g)},!1)},setmarkers:function(b){var c,d=this,e=0;for(e=0;e<d.options.markers.length;++e)Math.floor(d.options.markers[e])<=d.media.duration&&Math.floor(d.options.markers[e])>=0&&(c=100*Math.floor(d.options.markers[e])/d.media.duration,a(b.find(".mejs-time-marker")[e]).css({width:"1px",left:c+"%",background:d.options.markerColor}))}})}(mejs.$);
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
	site.screenSize = $( window ).width();
	site.screenHeight = $( window ).height();
	site.$body = $('body');
	site.break1 = 640; // first media query break
	site.break2 = 852; // break to 6 across
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

/*********
 * svg4everybody
 * makes svgs work in ie, from https://github.com/jonathantneal/svg4everybody
*********/
	svg4everybody();

/*********
* accessibility pause
*********/
	var $pauseButton = $('#pause-button');
	var slickPaused = false;
	
	// pause on click
	$pauseButton.on('click', function() {
		pauseIt($(this));
	})


	// pause on enter, from http://stackoverflow.com/a/979686
	$pauseButton.on('keypress', function(e) {
		if(e.which == 13) {
			pauseIt($(this));
		}
	})


	/*****
	 * pause slider
	 *****/
	function pauseIt($this) {
		console.log('slickPaused :', slickPaused);
		// pause homepage slideshow
		if(slickPaused) {
			console.log('play slideshow');
			$('#banner-carousel').slick('slickPlay'); // home pages
			$('.ms-banner-slideshow').slick('slickPlay'); // festival program pages
			slickPaused = false;
			
			// festival homepage - start image transforming
			if (site.$body.hasClass('festival-site')) {
				console.log('festival site');
				// if have festival on state carousel
				if(typeof $carousel !== 'undefined') {
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
		}
		else {
			console.log('pause slideshow');
			$('#banner-carousel').slick('slickPause'); // home pages
			$('.ms-banner-slideshow').slick('slickPause'); // festival program pages
			slickPaused = true;

			// festival homepage - stop image transforming
			if (site.$body.hasClass('festival-site')) {
				// if have festival on state carousel
				if(typeof $carousel !== 'undefined') {
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
	var $bannerCarousel = $('#banner-carousel');
	// if exists on page
	if(typeof $bannerCarousel !== 'undefined') {
		$bannerCarousel.on('init', function() {
			// cache arrows for selecting
			var $slickArrow = $('.slick-arrow');
			// add event handler to arrows to pause slider when clicked
			$slickArrow.on('click', function() {
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
	if(typeof $msBannerSlideshow !== 'undefined') {
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

$(document).ready(function () {

/***************************
* General
***************************/
	site.navbar = $('#navbar'); // logo switching for nav

	var firstTimeCheck = true; // check for first time b/c some vars still undefined
	checkMobile(); // initial

	// make active pseudo styles in mobile safari, from https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
	document.addEventListener("touchstart", function() {},false);

/*********************
* Mobile dropdown menu
*********************/
	var $navItem = $('.header-nav-title').add($('.footer-nav-title'));
	var $navLists = $('.header-nav-list').add($('.footer-nav-list'));

	// when click a main list item
	 $navItem.on('click', function(e) {

	 	// check if this nav item has as ul as next sibling, from http://stackoverflow.com/a/7678513
	 	if($(this).next('ul').length) {
	 		var hasChildren = true;
	 	}
	 	else {
	 		var hasChildren = false;
	 	}

	 	// if have children, don't follow click on mobile, so can show dropdown sections
	 	if(site.isMobile && hasChildren) {
	 		// console.log('dont follow link mobile');
			e.preventDefault ? e.preventDefault() : e.returnValue = false; // for windows too, from http://stackoverflow.com/a/1000606
	 	}

		var $this = $(this);
	 	var $thisUl = $this.next('ul');

		// if you are already open, close all
		if($thisUl.hasClass('nav-show-mobile')) {
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

	if(site.isMobile) {
		gapNavHeight = 0; // activate next condition immediately
	}

	$(window).scroll(function() {
		// close all if on phone
		if(site.isMobile) {
			// site.navCloseAll(); // close anything else that's open by default // too confusing for long menu
		}

		// when user scrolls past height of site toggle, make smaller if not already
		if (($(this).scrollTop() > gapNavHeight) && smallerNav == false) {  
			site.navbar.addClass("is-smaller");
			smallerNav = true;
			// if menu isn't already open, swap logo
			if(menuClosed)
				switchLogo('inline');
			if(!site.isMobile) {
				$navspacer.addClass("navspacer-open"); // open right away
			}
		}
		// if user is still at top of window
		else if ($(this).scrollTop() <= gapNavHeight && smallerNav == true) {
			site.navbar.removeClass("is-smaller"); // shrink
			smallerNav = false;
			if(!site.isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully close
			// if menu is not already open, switch back to block logo
			if(menuClosed)
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
		if(direction == 'block') {
			// $('.one-line-logos').fadeOut('30');
			// $('.block-logos').fadeIn('30');
			if(!smallerNav && !logoIsBlock) { // go to block if not scrolled down the page and if not already block
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
	// 	// clear timeout so prevent multiple firings
	// 	clearTimeout($logoSwitchTimer);
	// 	// only show block if at top of viewport and nav isn't already open
	// 	if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
	// 		$('.one-line-logos').fadeOut('30');
	// 		$logoSwitchTimer = setTimeout(function(){ 
	// 			$('.block-logos').fadeIn('30');
	// 		}, 30);
	// 	} else {
	// 		$('.block-logos').fadeOut('30');
	// 		$logoSwitchTimer = setTimeout(function(){ 
	// 			$('.one-line-logos').fadeIn('30');
	// 		}, 30);
	// 	}
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
	$(window).keyup(function (e) {
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
		if(menuClosed) {
			site.navCloseAll(); // after we've determined that menu is closed, close anything else that's open by default
			site.navbar.addClass('is-open');
			// if logo not already one-line because scrolled down
			console.log('open the menu!');
			if(logoIsBlock)
				switchLogo('one-line');

			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			menuClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			console.log('menuClosed :',menuClosed);
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
		if(shareClosed) {
			site.navCloseAll(); // close anything else that's open by default, only after we've determined that share is Closed
			site.navbar.addClass('is-open');
			if(site.isMobile) { // switch to one-line logo in mobile view
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
		if(searchClosed) {
			site.navCloseAll(); // after we've determined that search is closed, close anything else that's open by default
			if(site.isMobile) { // switch to one-line logo in mobile view
				site.navbar.addClass('has-one-line-logo'); 
				switchLogo('one-line');
			}
			site.navbar.addClass('is-open');
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).show(); // show social media icons
			searchClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
			$searchInput.focus();// focus in field
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
		$(video).on('click', function() {

			console.log('play vimeo video');

			// close any slideshow that's open
			if(galleryIsSlick) {
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
			if($videoType == 'youtube') {
				isVimeo = false;
			} else
				isVimeo = true;

			// Set video info in html
			$remodalTitle.html($videoTitle);
			$remodalDescription.html($description);

			// show close button
			$remodalClose.removeClass('visually-hidden');

			if(isVimeo) {
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
				if(!vimeoPlayerIsLoaded) {
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
		if(galleryIsSlick) {
			$remodalGallery.slick('unslick');
			$remodalCaptions.slick('unslick');
		}

		// if single image
		if($(this).hasClass('single-image-popup')) {
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
		// 	var imageOffset = $('.slick-active img').offset();
		// 	var magicOffset = 12;
		// 	$('.gallery-caption').css('padding-left', imageOffset.left + magicOffset);
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
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						centerPadding: '40px',
					}

				}
			]
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
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						// centerPadding: '40px',
					}

				}
			]
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
		if(galleryIsSlick) {
			$remodalGallery.slick('unslick');
		}

		// clear remodal gallery of old images
		$remodalGallery.empty();

		// get initial slide
		var initialSlide = $(this).data('slide-index');

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
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						centerPadding: '40px',
					}

				}
			]
		});
	});


/********************
* Closing the Remodal
* listen for closing, from https://github.com/VodkaBears/Remodal
********************/
	$(document).on('closing', '.remodal', function (e) {
		// unload vidoe if video was open
		if(videoPlayerIsOpen) {
			if(isVimeo) {
				vimeoPlayer.unload().then( function() {
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
		if(galleryIsOpen) {
			// delay to prevent flash of video bg
			setTimeout( function(){
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
	    if( target.length ) {
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
		responsive: [
			{
				breakpoint: 852,
				settings: {
					centerPadding: '80px',
					arrows: true,
					appendDots: '.dots',
					dots: true,
					autoplaySpeed: 5000,
				}
			},
			{
				breakpoint: 1560,
				settings: {
					// padding on both sides is screen width minus width of main area, divided by 2 for each side
					centerPadding: 'calc((100vw - 1400px) / 2)',
					arrows: true,
					dots: true,
					appendDots: '.dots',
				}
			}
		]
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
	
	// find currenttime containers and wrap them with closest duration container
	$('.mejs-currenttime-container').each(function() {
		// get closest duration time
		wrapTime($(this));
	});
	
	// keep play button visible after click
	var showPause = true;

	var buttonControl = function($playButton) {
		// console.log('buttonControl', $playButton);
		$playButton.click(function() {
			// console.log('audio clicked');
			var $track = $(this).closest('.track');
			var $trackNumber = $track.find('.track-number'); // get closest so don't show all
			// check if this button is playing or not
			if($track.find('.mejs-playpause-button').hasClass('mejs-play'))
				$trackNumber.addClass('hidden');
			else
				$trackNumber.removeClass('hidden');
		})
	}

	// manually init so can hear when pausing
	$('.track-audio').mediaelementplayer({
		startVolume: 0.5, 
		setDimensions: false,
		features: ["playpause"], // don't show time on track listing
		pluginPath: "/path/to/shims/", 
		success: function(mediaElement, originalNode) {
			// $originalNode = $(originalNode); // jquery cache
			// console.log('mediaElement', mediaElement);

			// pass playpause button to get listener
			buttonControl($(mediaElement.player.controls[0].firstChild));

			// Bring Track number back when audio paused
			mediaElement.addEventListener('pause', function (e) {
				var $trackAudio = $(e.target);
				var $track = $(this).closest('.track');
				var $trackNumber = $track.find('.track-number'); // get closest so don't show all
				$trackNumber.removeClass('hidden');
			}, false);
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
			console.log('mejs audio created');
			console.log('mediaElement.player', mediaElement.player);
			console.log('originalNode', originalNode);

			// better mejs html
			var currentTimeContainer = $(originalNode).find('.mejs-currenttime-container');

			console.log('currentTimeContainer :', mediaElement.player.currenttime[0].parentNode);
			// console.log(currentTimeContainer);
			wrapTime($(mediaElement.player.currenttime[0].parentNode));

			var playerID = mediaElement.player.id;
			console.log('playerID :', playerID);

			// initialize player because elements now exist
			playlist[playerID] = new Playlist(playerID); 
			// set first track
			// playlist.cover = 
			playlist[playerID].cover.attr('src', myPlaylist[0].cover); // update album cover
			playlist[playerID].title.html(myPlaylist[0].title); // update album title
			playlist[playerID].artist.html(myPlaylist[0].artist); // update album artist
			playlist[playerID].audioElement[0].setSrc(myPlaylist[0].mp3); // set new track to play

			// Event Listeners
			mediaElement.addEventListener('ended', function (e) {
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

		console.log('this.player :', this.mejsPlayer);
		this.cover = $audioCard.find('.playlist-cover');
		this.coverLink = $audioCard.find('.image a');
		this.title = $audioCard.find('.playlist-title');
		this.artist = $audioCard.find('#playlist-artist');
		this.trackLink = $audioCard.find('.title');
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
			if ( playlist[playerID].currentTrack == 0 )
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
			if(this.currentTrack == this.length - 1)
				this.currentTrack = 0;
			else
				this.currentTrack++;

			console.log('$player :', $player);

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
		$audio = $(this).parent().siblings('.playlist-audio');
		currentPlayerID = $audio.attr('id');
		playlist[currentPlayerID].playPrevTrack();
	})

	// Next Track
	$('.next-button').click(function() {
		// get closest audio player
		$audio = $(this).parent().siblings('.playlist-audio');
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
			if($thisInner.css('visibility') == 'hidden') { // if hidden, show
				// $this.css('visibility', 'visible');
				$thisInner.css('visibility', 'visible');
				$this.addClass('minus-sign');// add minus sign
				// $this.attr('data-content');// add minus sign
				// pause micro site banner if exists
				if($this.parents('.ms-banner-slideshow').length) {
					// console.log('banner paused');
					$msBannerSlideshow.slick('slickPause');
					slickPaused = true;
					// change icon
					$pauseButton.removeClass('icon-pause');
					$pauseButton.addClass('icon-play');
				}
			}
			else { // else hide
				// $this.css('visibility', 'hidden');
				$thisInner.css('visibility', 'hidden');
				$this.removeClass('minus-sign');// add minus sign
				// play micro site banner if exists
				if($this.parents('.ms-banner-slideshow').length) {
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
		if(secondFilterRowIsClosed) {
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
	if(site.isMobile)
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
		site.screenSize = $( window ).width();
		// only do it if already not mobile or initial
		if(site.screenSize < site.break2) {
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
* Social Sharing
**************************/
	// Set correct href for social sharing, for Orchard CMS
	var pageURL = window.location.href;
	$('.social-icons a').each(function() {
		var oldHref = $(this).attr('href'); // get old href
		var newHref = oldHref.replace('#PageURL', pageURL); // replace #PageURL with real one
		$(this).attr('href', newHref);// set url to newHref
	});

	// get facebook sdk
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '405718899770730',
			xfbml      : true,
			version    : 'v2.8'
		});
		FB.AppEvents.logPageView();
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	// set button
	if($('#share-facebook')) {
		$('#share-facebook').click(function() {
			FB.ui({
				method: 'share',
				display: 'popup',
				href: pageURL,
			}, function(response){});
		})
	}

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
		if(text.html() == 'more') {
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
    $('.language-buttons').find('a').each(function (index) {
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
		if(newPage > 1)
			$viewPrev.show();
		else
			$viewPrev.hide();

		// next button
		if(newPage < totalPages)
			$viewNext.show();
		else
			$viewNext.hide();

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
		var num_festivals = $('#' + currentFestivalFilter + '-filter').find('.festival').length;
		// console.log('num_festivals', num_festivals);
		var num_pages = Math.ceil(num_festivals / 24);
		// console.log('num_pages', num_pages);
		// copy one example of page number
		var $examplePagination = $paginationNumber.first().clone();
		// prep for copying
		$examplePagination.removeClass('is-active');
		// clear pagination
		$pagination.empty();
		// console.log($examplePagination);

		// past example x amount of times, from http://stackoverflow.com/a/12835644
		for(var i = 0; i < num_pages; i++) {
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
	var currentFestivalFilter = 'alpha';

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
	hljs.initHighlightingOnLoad();
});