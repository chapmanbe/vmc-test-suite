!function(e,n,t){function r(e,n){return typeof e===n}function o(e){var n=b.className,t=w._config.classPrefix||"";if(x&&(n=n.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}w._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?b.className.baseVal=n:b.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)_(e,t)&&i(t,e[t]);else{var r=(e=e.toLowerCase()).split("."),s=w[r[0]];if(2==r.length&&(s=s[r[1]]),void 0!==s)return w;n="function"==typeof n?n():n,1==r.length?w[r[0]]=n:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),w._trigger(e,n)}return w}function s(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(){var e=n.body;return e||((e=a(x?"svg":"body")).fake=!0),e}function l(e,t,r,o){var i,s,l,u,p="modernizr",d=a("div"),c=f();if(parseInt(r,10))for(;r--;)(l=a("div")).id=o?o[r]:p+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+p,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=u,b.offsetHeight):d.parentNode.removeChild(d),!!s}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n,o,i){function f(){u&&(delete z.style,delete z.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var u,c,h,m,v,y=["modernizr","tspan"];!z.style;)u=!0,z.modElem=a(y.shift()),z.style=z.modElem.style;for(h=e.length,c=0;c<h;c++)if(m=e[c],v=z.style[m],s(m,"-")&&(m=d(m)),z.style[m]!==t){if(i||r(o,"undefined"))return f(),"pfx"!=n||m;try{z.style[m]=o}catch(e){}if(z.style[m]!=v)return f(),"pfx"!=n||m}return f(),!1}function h(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var o;for(var i in e)if(e[i]in n)return!1===t?e[i]:(o=n[e[i]],r(o,"function")?h(o,t||n):o);return!1}function v(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?c(a,n,o,i):(a=(e+" "+k.join(s+" ")+s).split(" "),m(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=C,w=new w;var _,S=[],b=n.documentElement,x="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e]}},w._q.push(function(){C.addTest=i});var P=C._config.usePrefixes?"Moz O ms Webkit".split(" "):[];C._cssomPrefixes=P;var T={elem:a("modernizr")};w._q.push(function(){delete T.elem});var z={style:T.elem.style};w._q.unshift(function(){delete z.style});var k=C._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];C._domPrefixes=k,C.testAllProps=v,C.testAllProps=y;var j=C.testStyles=l,E="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;w.addTest("supports",E||N),w.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),n=w._config.usePrefixes;if(e&&(!n||"webkitPerspective"in b.style)){var t;w.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),j("#modernizr{width:0;height:0}"+(t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),w.addTest("details",function(){var e,n=a("details");return"open"in n&&(j("#modernizr details{display:block}",function(t){t.appendChild(n),n.innerHTML="<summary>a</summary>b",e=n.offsetHeight,n.open=!0,e=e!=n.offsetHeight}),e)}),function(){var e,n,t,o,i,s;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],(n=g[a]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?w[s[0]]=o:(!w[s[0]]||w[s[0]]instanceof Boolean||(w[s[0]]=new Boolean(w[s[0]])),w[s[0]][s[1]]=o),S.push((o?"":"no-")+s.join("-"))}}(),o(S),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<w._q.length;L++)w._q[L]();e.Modernizr=w}(window,document);
