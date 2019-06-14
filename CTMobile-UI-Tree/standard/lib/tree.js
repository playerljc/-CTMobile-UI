"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_uiUtil=require("@ctmobile/ui-util"),_treenode=_interopRequireDefault(require("./treenode"));function init(){for(var e=this.config.nodeConfig,t=void 0===e?{}:e,n=t.config,i=void 0===n?{}:n,l=t.data,o=void 0===l?[]:l,r=document.createDocumentFragment(),s=0;s<o.length;s++){var a=createNode.call(this,{globalConfig:i,config:o[s],parentNode:null});this.nodes.push(a),r.appendChild(a.getEl())}detailItemInputs.call(this),this.el.appendChild(r)}function detailItemInputs(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].detailItemInputsRecursive()}function createNode(e){var t=e.globalConfig,n=e.config,i=e.parentNode,l=new _treenode.default({globalConfig:t,config:n,tree:this,parentNode:i});return _renderChildren.call(this,{parentNode:l,globalConfig:t,config:n}),l}function _renderChildren(e){var t=e.parentNode,n=e.globalConfig,i=e.config;if(!i.leaf)for(var l=i.children,o=void 0===l?[]:l,r=0;r<o.length;r++)t.append(createNode.call(this,{globalConfig:n,config:o[r],parentNode:t}))}function initEvents(){if(this.config&&this.config.listeners)for(var e=this.config.listeners,t=void 0===e?{}:e,n=Object.keys(t),i=0;i<n.length;i+=1){var l=n[i];this.events.on(l,t[l])}}function find(e){var t=e.result,n=e.treeNode,i=e.key,l=e.value;if(n.hasAttr(i,l)&&t.push(n),!n.isLeaf())for(var o=n.childrens(),r=0;r<o.length;r++)find.call(this,{result:t,treeNode:o[r],key:i,value:l})}var Tree=function(){function n(e,t){(0,_classCallCheck2.default)(this,n),this.el=e,this.config=Object.assign({},t),this.events=new _uiUtil.Events,this.nodes=[],initEvents.call(this),init.call(this)}return(0,_createClass2.default)(n,[{key:"renderChildren",value:function(e){_renderChildren.call(this,e)}},{key:"append",value:function(e){this.nodes.push(e),this.el.appendChild(e.getEl()),detailItemInputs.call(this)}},{key:"appendByConfig",value:function(e){var t=this.config.nodeConfig,n=(void 0===t?{}:t).config,i=createNode.call(this,{globalConfig:n,config:e,parentNode:null});this.append(i)}},{key:"prepend",value:function(e){this.nodes.unshift(e),_uiUtil.Dom6.prepend(this.el,e.getEl()),detailItemInputs.call(this)}},{key:"prependByConfig",value:function(e){var t=this.config.nodeConfig,n=(void 0===t?{}:t).config,i=createNode.call(this,{globalConfig:n,config:e,parentNode:null});this.prepend(i)}},{key:"insertBefore",value:function(t,e){if(!t||!e)return!1;var n=this.nodes.findIndex(function(e){return e===t});-1===n?this.append(e):0===n?this.prepend(e):(this.el.insertBefore(e.getEl(),t.getEl()),this.nodes.splice(n,0,e),detailItemInputs.call(this))}},{key:"insertBeforeByConfig",value:function(e,t){var n=this.config.nodeConfig,i=(void 0===n?{}:n).config,l=createNode.call(this,{globalConfig:i,config:t,parentNode:null});this.insertBefore(e,l)}},{key:"insertAfter",value:function(t,e){if(!t||!e)return!1;var n=this.nodes.findIndex(function(e){return e===t});-1===n?this.append(e):n===this.nodes.length-1?this.prepend(e):(_uiUtil.Dom6.insertAfter(e.getEl(),t.getEl()),this.nodes.splice(n+1,0,e),detailItemInputs.call(this))}},{key:"insertAfterByConfig",value:function(e,t){var n=this.config.nodeConfig,i=(void 0===n?{}:n).config,l=createNode.call(this,{globalConfig:i,config:t,parentNode:null});this.insertAfter(e,l)}},{key:"replaceNode",value:function(t,e){if(!t||!e)return!1;var n=this.nodes.findIndex(function(e){return e===t});if(-1===n)return!1;this.el.replaceChild(e.getEl(),t.getEl()),this.nodes.splice(n,1,e),detailItemInputs.call(this)}},{key:"replaceNodeByConfig",value:function(e,t){var n=this.config.nodeConfig,i=(void 0===n?{}:n).config,l=createNode.call(this,{globalConfig:i,config:t,parentNode:null});this.replaceNode(e,l)}},{key:"removeChildren",value:function(t){if(!t)return!1;var e=this.nodes.findIndex(function(e){return e===t});if(-1===e)return!1;this.nodes.splice(e,1),_uiUtil.Dom6.remove(t.getEl()),detailItemInputs.call(this)}},{key:"childrens",value:function(){return[].concat(this.nodes)}},{key:"getNodeByAttr",value:function(e,t){for(var n=[],i=0;i<this.nodes.length;i++){var l=this.nodes[i];find.call(this,{result:n,treeNode:l,key:e,value:t})}return 0===n.length?n[0]:n}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"off",value:function(e,t){e?t?this.events.remove(e,t):this.events.clear(e):this.events.clearAll()}}]),n}(),TreeFactory={create:function(e,t){return new Tree(e,t)}},_default=TreeFactory;exports.default=_default;
//# sourceMappingURL=tree.js.map
