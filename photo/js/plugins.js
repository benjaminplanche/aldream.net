// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * imagesLoaded
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);

/**
 * jQuery Masonry v2.1.08
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(e,t,n){"use strict";var r=t.event,i;r.special.smartresize={setup:function(){t(this).bind("resize",r.special.smartresize.handler)},teardown:function(){t(this).unbind("resize",r.special.smartresize.handler)},handler:function(e,t){var n=this,s=arguments;e.type="smartresize",i&&clearTimeout(i),i=setTimeout(function(){r.dispatch.apply(n,s)},t==="execAsap"?0:100)}},t.fn.smartresize=function(e){return e?this.bind("smartresize",e):this.trigger("smartresize",["execAsap"])},t.Mason=function(e,n){this.element=t(n),this._create(e),this._init()},t.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},t.Mason.prototype={_filterFindBricks:function(e){var t=this.options.itemSelector;return t?e.filter(t).add(e.find(t)):e},_getBricks:function(e){var t=this._filterFindBricks(e).css({position:"absolute"}).addClass("masonry-brick");return t},_create:function(n){this.options=t.extend(!0,{},t.Mason.settings,n),this.styleQueue=[];var r=this.element[0].style;this.originalStyle={height:r.height||""};var i=this.options.containerStyle;for(var s in i)this.originalStyle[s]=r[s]||"";this.element.css(i),this.horizontalDirection=this.options.isRTL?"right":"left";var o=this.element.css("padding-"+this.horizontalDirection),u=this.element.css("padding-top");this.offset={x:o?parseInt(o,10):0,y:u?parseInt(u,10):0},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var a=this;setTimeout(function(){a.element.addClass("masonry")},0),this.options.isResizable&&t(e).bind("smartresize.masonry",function(){a.resize()}),this.reloadItems()},_init:function(e){this._getColumns(),this._reLayout(e)},option:function(e,n){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))},layout:function(e,t){for(var n=0,r=e.length;n<r;n++)this._placeBrick(e[n]);var i={};i.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var s=0;n=this.cols;while(--n){if(this.colYs[n]!==0)break;s++}i.width=(this.cols-s)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:i});var o=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",u=this.options.animationOptions,a;for(n=0,r=this.styleQueue.length;n<r;n++)a=this.styleQueue[n],a.$el[o](a.style,u);this.styleQueue=[],t&&t.call(e),this.isLaidOut=!0},_getColumns:function(){var e=this.options.isFitWidth?this.element.parent():this.element,t=e.width();this.columnWidth=this.isFluid?this.options.columnWidth(t):this.options.columnWidth||this.$bricks.outerWidth(!0)||t,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((t+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(e){var n=t(e),r,i,s,o,u;r=Math.ceil(n.outerWidth(!0)/this.columnWidth),r=Math.min(r,this.cols);if(r===1)s=this.colYs;else{i=this.cols+1-r,s=[];for(u=0;u<i;u++)o=this.colYs.slice(u,u+r),s[u]=Math.max.apply(Math,o)}var a=Math.min.apply(Math,s),f=0;for(var l=0,c=s.length;l<c;l++)if(s[l]===a){f=l;break}var h={top:a+this.offset.y};h[this.horizontalDirection]=this.columnWidth*f+this.offset.x,this.styleQueue.push({$el:n,style:h});var p=a+n.outerHeight(!0),d=this.cols+1-c;for(l=0;l<d;l++)this.colYs[f+l]=p},resize:function(){var e=this.cols;this._getColumns(),(this.isFluid||this.cols!==e)&&this._reLayout()},_reLayout:function(e){var t=this.cols;this.colYs=[];while(t--)this.colYs.push(0);this.layout(this.$bricks,e)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(e){this.reloadItems(),this._init(e)},appended:function(e,t,n){if(t){this._filterFindBricks(e).css({top:this.element.height()});var r=this;setTimeout(function(){r._appended(e,n)},1)}else this._appended(e,n)},_appended:function(e,t){var n=this._getBricks(e);this.$bricks=this.$bricks.add(n),this.layout(n,t)},remove:function(e){this.$bricks=this.$bricks.not(e),e.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var n=this.element[0].style;for(var r in this.originalStyle)n[r]=this.originalStyle[r];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),t(e).unbind(".masonry")}},t.fn.imagesLoaded=function(e){function u(){e.call(n,r)}function a(e){var n=e.target;n.src!==s&&t.inArray(n,o)===-1&&(o.push(n),--i<=0&&(setTimeout(u),r.unbind(".imagesLoaded",a)))}var n=this,r=n.find("img").add(n.filter("img")),i=r.length,s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",o=[];return i||u(),r.bind("load.imagesLoaded error.imagesLoaded",a).each(function(){var e=this.src;this.src=s,this.src=e}),n};var s=function(t){e.console&&e.console.error(t)};t.fn.masonry=function(e){if(typeof e=="string"){var n=Array.prototype.slice.call(arguments,1);this.each(function(){var r=t.data(this,"masonry");if(!r){s("cannot call methods on masonry prior to initialization; attempted to call method '"+e+"'");return}if(!t.isFunction(r[e])||e.charAt(0)==="_"){s("no such method '"+e+"' for masonry instance");return}r[e].apply(r,n)})}else this.each(function(){var n=t.data(this,"masonry");n?(n.option(e||{}),n._init()):t.data(this,"masonry",new t.Mason(e,this))});return this}})(window,jQuery);

  // Masonry corner stamp modifications
  $.Mason.prototype.resize = function() {
    this._getColumns();
    this._reLayout();
  };
  
  $.Mason.prototype._reLayout = function( callback ) {
    var freeCols = this.cols;
    if ( this.options.cornerStampSelector ) {
      var $cornerStamp = this.element.find( this.options.cornerStampSelector ),
          cornerStampX = $cornerStamp.offset().left - 
            ( this.element.offset().left + this.offset.x + parseInt($cornerStamp.css('marginLeft')) );
      freeCols = Math.floor( cornerStampX / this.columnWidth );
    }
    // reset columns
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( this.offset.y );
    }

    for ( i = freeCols; i < this.cols; i++ ) {
      this.colYs[i] = this.offset.y + $cornerStamp.outerHeight(true);
    }

    // apply layout logic to all bricks
    this.layout( this.$bricks, callback );
  };

  $(function(){
    
    $('#container').masonry({
      itemSelector: '.box',
      columnWidth: 100,
      cornerStampSelector: '.corner-stamp'
    });
    
  });


/**
 * (The MIT License)
 *
 * Copyright (c) 2012 Aleksandar Kolundzija (a@ak.rs)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function($){$.fn.slideshowify=function(){var _self=this,_imgs=[],_imgIndex=-1,_imgIndexNext=0,_transition=true,_easing='in-out',_viewEl=document,_containerId="slideshowify-"+new Date().getTime(),_containerCSS={"position":"absolute","overflow":"hidden","z-index":"-2","left":"0","top":"0","width":"100%","height":"100%"},_cfg={parentEl:"body",blend:"into",randomize:false,fadeInSpeed:1500,fadeOutSpeed:1500,aniSpeedMin:9000,aniSpeedMax:15000},_$viewEl,_$parentEl;if(arguments[0]){$.extend(_cfg,arguments[0]);if(_cfg.parentEl!="body"){_viewEl=_cfg.parentEl;}}
_$viewEl=$(_viewEl);_$parentEl=$(_cfg.parentEl);function _revealImg(curImg){var $img=$(this),viewW=_$viewEl.width(),viewH=_$viewEl.height(),viewRatio=viewW/viewH,imgRatio=$img.width()/$img.height(),marginThreshold=Math.floor(Math.max(viewW,viewH)/10),direction=Math.round(Math.random()),transAttr={},transProps,marginPixels,modDims;if(imgRatio>viewRatio){modDims=_transition?direction?{dim:'left',attr:'x',sign:'-'}:{dim:'right',attr:'x',sign:''}:direction?{dim:'left',attr:'left',sign:'-'}:{dim:'right',attr:'right',sign:'-'};$img.height(viewH+'px').width(curImg.w*(viewH/curImg.h)+'px');marginPixels=$img.width()-viewW;}
else{modDims=_transition?direction?{dim:'top',attr:'y',sign:'-'}:{dim:'bottom',attr:'y',sign:''}:direction?{dim:'top',attr:'top',sign:'-'}:{dim:'bottom',attr:'bottom',sign:'-'};$img.width(viewW+'px').height(curImg.h*(viewW/curImg.w)+'px');marginPixels=$img.height()-viewH;}
$img.css(modDims.dim,'0');transAttr[modDims.attr]=modDims.sign+marginPixels+'px';if(_transition&&marginPixels<marginThreshold){if(direction){$img.css('scale','1.2');transAttr={'scale':'1'};}
else{transAttr={'scale':'1.2'};}}
transProps={duration:Math.min(Math.max(marginPixels*10,_cfg.aniSpeedMin),_cfg.aniSpeedMax),easing:_easing,queue:false,complete:function(){_$parentEl.trigger('beforeFadeOut',_imgs[_imgIndex])
$img.fadeOut(_cfg.fadeOutSpeed,function(){_$parentEl.trigger('afterFadeOut',_imgs[_imgIndex]);$img.remove();});_loadImg();}};_$parentEl.trigger('beforeFadeIn',_imgs[_imgIndex]);$img.fadeIn(_cfg.fadeInSpeed,function(){$img.css('z-index',-1);_$parentEl.trigger('afterFadeIn',_imgs[_imgIndex])});_transition?$img.transition($.extend(transAttr,transProps)):$img.animate(transAttr,transProps);}
function _loadImg(){var img=new Image(),nextImg=new Image(),len=_imgs.length;_imgIndex=(_imgIndex<len-1)?_imgIndex+1:0;$(img).load(function(){if(_cfg.blend==='into'){$(this).css({'position':'absolute','z-index':'-2'});$('#'+_containerId).append(this);}
else{$('#'+_containerId).empty().append(this);}
_revealImg.call(this,_imgs[_imgIndex]);}).error(function(){throw new Error("Oops, can't load the image.");}).hide().attr("src",_imgs[_imgIndex].src);if(_imgIndexNext==len)return;_imgIndexNext=_imgIndex+1;if(_imgIndexNext<len-1){nextImg.src=_imgs[_imgIndexNext].src;}}
if(!$.support.transition){_transition=false;_easing='swing';}
if(!_cfg.imgs){$(this).each(function(i,img){$(img).hide();_imgs.push({src:$(img).attr('src'),w:$(img).width(),h:$(img).height()});});}
else{_imgs=_cfg.imgs;}
if(_cfg.randomize){_imgs.sort(function(){return 0.5-Math.random();});}
$("<div id='"+_containerId+"'></div>").css(_containerCSS).appendTo(_cfg.parentEl);_loadImg();return this;};$.slideshowify=function(cfg){var _self=this,_cfg={dataUrl:"",dataType:"json",async:true,filterFn:function(data){return data;}};$.extend(_cfg,cfg);$({}).slideshowify(_cfg);}}(jQuery));
