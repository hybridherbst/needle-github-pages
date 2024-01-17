import{g as _,c}from"./index-036c6c31.js";function L(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(r,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var y={},k={};Object.defineProperty(k,"__esModule",{value:!0});var l={};Object.defineProperty(l,"__esModule",{value:!0});l.ConstantBackoff=void 0;var m=function(){function r(e){this.reset=function(){},this.backoff=e}return r.prototype.next=function(){return this.backoff},r}();l.ConstantBackoff=m;var d={};Object.defineProperty(d,"__esModule",{value:!0});d.ExponentialBackoff=void 0;var B=function(){function r(e,t){this.initial=e,this.expMax=t,this.expCurrent=1,this.current=this.initial}return r.prototype.next=function(){var e=this.current;return this.expMax>this.expCurrent++&&(this.current=this.current*2),e},r.prototype.reset=function(){this.expCurrent=1,this.current=this.initial},r}();d.ExponentialBackoff=B;var p={};Object.defineProperty(p,"__esModule",{value:!0});p.LinearBackoff=void 0;var P=function(){function r(e,t,n){this.initial=e,this.increment=t,this.maximum=n,this.current=this.initial}return r.prototype.next=function(){var e=this.current,t=this.current+this.increment;return this.maximum===void 0?this.current=t:t<=this.maximum&&(this.current=t),e},r.prototype.reset=function(){this.current=this.initial},r}();p.LinearBackoff=P;var g={};Object.defineProperty(g,"__esModule",{value:!0});var v={};Object.defineProperty(v,"__esModule",{value:!0});v.LRUBuffer=void 0;var O=function(){function r(e){this.writePtr=0,this.wrapped=!1,this.buffer=Array(e)}return r.prototype.len=function(){return this.wrapped?this.buffer.length:this.writePtr},r.prototype.cap=function(){return this.buffer.length},r.prototype.read=function(e){if(e==null||e.length===0||this.buffer.length===0||this.writePtr===0&&!this.wrapped)return 0;for(var t=this.wrapped?this.writePtr:0,n=t-1<0?this.buffer.length-1:t-1,i=0;i<e.length;i++){var o=(t+i)%this.buffer.length;if(e[i]=this.buffer[o],o===n)return i+1}return e.length},r.prototype.write=function(e){if(e==null||e.length===0||this.buffer.length===0)return 0;for(var t=e.length>this.buffer.length?e.length-this.buffer.length:0,n=0;n<e.length-t;n++)this.buffer[this.writePtr]=e[t+n],this.writePtr=(this.writePtr+1)%this.buffer.length,this.writePtr===0&&(this.wrapped=!0);return e.length},r.prototype.forEach=function(e){if(this.writePtr===0&&!this.wrapped)return 0;for(var t=this.wrapped?this.writePtr:0,n=this.wrapped?t-1<0?this.buffer.length-1:t-1:this.writePtr-1,i=this.len();e(this.buffer[t]),t!==n;)t=(t+1)%this.buffer.length;return i},r.prototype.clear=function(){this.writePtr=0,this.wrapped=!1},r}();v.LRUBuffer=O;var b={};Object.defineProperty(b,"__esModule",{value:!0});b.TimeBuffer=void 0;var j=function(){function r(e){this.maxAge=e}return r.prototype.cap=function(){return Number.POSITIVE_INFINITY},r.prototype.len=function(){this.forwardTail();for(var e=this.tail,t=0;e!==void 0;)t++,e=e.n;return t},r.prototype.read=function(e){if(this.forwardTail(),e.length===0)return 0;for(var t=this.tail,n=0;t!==void 0&&(e[n++]=t.e,n!==e.length);)t=t.n;return n},r.prototype.write=function(e){for(var t=0;t<e.length;t++)this.putElement(e[t]);return e.length},r.prototype.forEach=function(e){this.forwardTail();for(var t=this.tail,n=0;t!==void 0;)e(t.e),n++,t=t.n;return n},r.prototype.putElement=function(e){var t={e,t:Date.now(),n:void 0};this.tail===void 0&&(this.tail=t),this.head===void 0?this.head=t:(this.head.n=t,this.head=t)},r.prototype.forwardTail=function(){if(this.tail!==void 0)for(var e=Date.now();e-this.tail.t>this.maxAge&&(this.tail===this.head?(this.tail=void 0,this.head=void 0):this.tail=this.tail.n,this.tail!==void 0););},r.prototype.clear=function(){},r}();b.TimeBuffer=j;var E={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Websocket=r.WebsocketEvents=void 0;var e;(function(n){n.open="open",n.close="close",n.error="error",n.message="message",n.retry="retry"})(e=r.WebsocketEvents||(r.WebsocketEvents={}));var t=function(){function n(i,o,s,u){var a=this;this.eventListeners={open:[],close:[],error:[],message:[],retry:[]},this.closedByUser=!1,this.retries=0,this.handleOpenEvent=function(f){return a.handleEvent(e.open,f)},this.handleCloseEvent=function(f){return a.handleEvent(e.close,f)},this.handleErrorEvent=function(f){return a.handleEvent(e.error,f)},this.handleMessageEvent=function(f){return a.handleEvent(e.message,f)},this.url=i,this.protocols=o,this.buffer=s,this.backoff=u,this.tryConnect()}return Object.defineProperty(n.prototype,"underlyingWebsocket",{get:function(){return this.websocket},enumerable:!1,configurable:!0}),n.prototype.send=function(i){var o;this.closedByUser||(this.websocket===void 0||this.websocket.readyState!==this.websocket.OPEN?(o=this.buffer)===null||o===void 0||o.write([i]):this.websocket.send(i))},n.prototype.close=function(i,o){var s;this.closedByUser=!0,(s=this.websocket)===null||s===void 0||s.close(i,o)},n.prototype.addEventListener=function(i,o,s){var u={listener:o,options:s},a=this.eventListeners[i];a.push(u)},n.prototype.removeEventListener=function(i,o,s){this.eventListeners[i]=this.eventListeners[i].filter(function(u){return u.listener!==o&&(u.options===void 0||u.options!==s)})},n.prototype.dispatchEvent=function(i,o){var s=this,u=this.eventListeners[i],a=[];u.forEach(function(f){f.listener(s,o),f.options!==void 0&&f.options.once&&a.push(f)}),a.forEach(function(f){return s.removeEventListener(i,f.listener,f.options)})},n.prototype.tryConnect=function(){this.websocket!==void 0&&(this.websocket.removeEventListener(e.open,this.handleOpenEvent),this.websocket.removeEventListener(e.close,this.handleCloseEvent),this.websocket.removeEventListener(e.error,this.handleErrorEvent),this.websocket.removeEventListener(e.message,this.handleMessageEvent),this.websocket.close()),this.websocket=new WebSocket(this.url,this.protocols),this.websocket.addEventListener(e.open,this.handleOpenEvent),this.websocket.addEventListener(e.close,this.handleCloseEvent),this.websocket.addEventListener(e.error,this.handleErrorEvent),this.websocket.addEventListener(e.message,this.handleMessageEvent)},n.prototype.handleEvent=function(i,o){var s,u,a;switch(i){case e.close:this.closedByUser||this.reconnect();break;case e.open:this.retries=0,(s=this.backoff)===null||s===void 0||s.reset(),(u=this.buffer)===null||u===void 0||u.forEach(this.send.bind(this)),(a=this.buffer)===null||a===void 0||a.clear();break}this.dispatchEvent(i,o)},n.prototype.reconnect=function(){var i=this;if(this.backoff!==void 0){var o=this.backoff.next();setTimeout(function(){i.dispatchEvent(e.retry,new CustomEvent(e.retry,{detail:{retries:++i.retries,backoff:o}})),i.tryConnect()},o)}},n}();r.Websocket=t})(E);var w={};Object.defineProperty(w,"__esModule",{value:!0});w.WebsocketBuilder=void 0;var h=E,M=function(){function r(e){this.ws=null,this.onOpenListeners=[],this.onCloseListeners=[],this.onErrorListeners=[],this.onMessageListeners=[],this.onRetryListeners=[],this.url=e}return r.prototype.withProtocols=function(e){return this.protocols=e,this},r.prototype.withBackoff=function(e){return this.backoff=e,this},r.prototype.withBuffer=function(e){return this.buffer=e,this},r.prototype.onOpen=function(e,t){return this.onOpenListeners.push({listener:e,options:t}),this},r.prototype.onClose=function(e,t){return this.onCloseListeners.push({listener:e,options:t}),this},r.prototype.onError=function(e,t){return this.onErrorListeners.push({listener:e,options:t}),this},r.prototype.onMessage=function(e,t){return this.onMessageListeners.push({listener:e,options:t}),this},r.prototype.onRetry=function(e,t){return this.onRetryListeners.push({listener:e,options:t}),this},r.prototype.build=function(){var e=this;return this.ws!==null?this.ws:(this.ws=new h.Websocket(this.url,this.protocols,this.buffer,this.backoff),this.onOpenListeners.forEach(function(t){var n;return(n=e.ws)===null||n===void 0?void 0:n.addEventListener(h.WebsocketEvents.open,t.listener,t.options)}),this.onCloseListeners.forEach(function(t){var n;return(n=e.ws)===null||n===void 0?void 0:n.addEventListener(h.WebsocketEvents.close,t.listener,t.options)}),this.onErrorListeners.forEach(function(t){var n;return(n=e.ws)===null||n===void 0?void 0:n.addEventListener(h.WebsocketEvents.error,t.listener,t.options)}),this.onMessageListeners.forEach(function(t){var n;return(n=e.ws)===null||n===void 0?void 0:n.addEventListener(h.WebsocketEvents.message,t.listener,t.options)}),this.onRetryListeners.forEach(function(t){var n;return(n=e.ws)===null||n===void 0?void 0:n.addEventListener(h.WebsocketEvents.retry,t.listener,t.options)}),this.ws)},r}();w.WebsocketBuilder=M;(function(r){var e=c&&c.__createBinding||(Object.create?function(n,i,o,s){s===void 0&&(s=o),Object.defineProperty(n,s,{enumerable:!0,get:function(){return i[o]}})}:function(n,i,o,s){s===void 0&&(s=o),n[s]=i[o]}),t=c&&c.__exportStar||function(n,i){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&e(i,n,o)};Object.defineProperty(r,"__esModule",{value:!0}),t(k,r),t(l,r),t(d,r),t(p,r),t(g,r),t(v,r),t(b,r),t(E,r),t(w,r)})(y);const C=_(y),x=L({__proto__:null,default:C},[y]);export{x as i};
