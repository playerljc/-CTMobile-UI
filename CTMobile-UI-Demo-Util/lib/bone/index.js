"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_swiper=_interopRequireDefault(require("swiper")),_uiUtil=require("@ctmobile/ui-util");function initEvents(){this.swiper.on("slideChange",this.onSlideChange),this.swiper.on("slideChangeTransitionStart",this.onSlideChangeTransitionStart)}function LinkCapture(e){if("a"!==e.tagName.toLocaleLowerCase()&&!(e=_uiUtil.Dom6.getParentElementByTag(e,"a")))return!1;var t=e.dataset.donekey;if(!t)return!1;var i=this.findIndexByKey(t);return-1!==i&&(this.swiper.slideTo(i),this.history.push(i),console.log("historyStart",this.history),!0)}function BackCapture(e){if(-1===e.className.indexOf("ctmobile-ui-demo-done-page-header-backicon"))return!1;if(this.history.length<=1)return!1;var t=this.history.length-2;return console.log("backIndex:",t),this.swiper.slideTo(t),this.history.pop(),console.log("historyEnd",this.history),!0}var CaptureElement=function(){var r=[LinkCapture,BackCapture];return function(){var n=this;this.el.firstElementChild.addEventListener("click",function(e){e.preventDefault();var t=e.target;if(!t)return!1;for(var i=0;i<r.length;i++){if(r[i].call(n,t))break}})}}(),Bone=function(){function i(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];(0,_classCallCheck2.default)(this,i),this.el=e,this.classed=new Map(t),this.slideInstances=new Map,this.history=[],CaptureElement.call(this),this.onInit=this.onInit.bind(this),this.onSlideChange=this.onSlideChange.bind(this),this.onSlideChangeTransitionStart=this.onSlideChangeTransitionStart.bind(this),this.swiper=new _swiper.default(this.el,{allowTouchMove:!1,on:{init:this.onInit()}}),initEvents.call(this)}return(0,_createClass2.default)(i,[{key:"onInit",value:function(){var n=this;this.classed.forEach(function(e,t){if(!e)return!1;var i=new e({context:n,key:t,el:n.getElByKey(t)});i.onInit&&i.onInit(),n.slideInstances.set(t,i)}),this.onSlideChange(),this.history.push(0)}},{key:"onSlideChangeTransitionStart",value:function(){this.preIndex=this.swiper.activeIndex}},{key:"onSlideChange",value:function(){var e=this.swiper?this.swiper.activeIndex:0,t=this.findKeyByIndex(e),i=this.slideInstances.get(t);i&&i.onShow&&i.onShow()}},{key:"findKeyByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=this.el.firstElementChild.children[e];if(t)return t.dataset.key}},{key:"findIndexByKey",value:function(e){var t=this.getElByKey(e);if(!t)return-1;for(var i=-1,n=this.swiper.$wrapperEl.children(),r=0;r<n.length;r++)if(n[r]===t){i=r;break}return i}},{key:"getElByKey",value:function(e){return this.el.firstElementChild.querySelector('[data-key="'.concat(e,'"]'))}}]),i}(),_default=Bone;exports.default=_default;
//# sourceMappingURL=index.js.map
