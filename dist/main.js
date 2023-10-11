(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap);"]),c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Comic Neue', cursive;\n    color: red;\n}\n\n#content {\n    display: grid;\n    padding: 10px;\n    height: 100vh;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-content: center;\n    margin-bottom: 15px;\n}\n\nheader nav {\n    grid-column: 3;\n    align-self: center;\n}\n\nheader h1 {\n    align-self: center;\n    margin-left: 15px;\n}\n\nheader ul {\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n}\n\nimg {\n    max-width: 50%;\n    height: auto;\n    justify-self: center;\n}\n\nh2 {\n    justify-self: center;\n}\n\na:hover {\n    cursor: pointer;\n  }",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("header"),t=document.createElement("h1");t.textContent="Cavell's Pizza";const o=document.createElement("nav"),r=document.createElement("ul");["About","Menu","Contact"].forEach((e=>{const n=document.createElement("li"),t=document.createElement("a");t.textContent=e,t.id=e.toLowerCase(),n.appendChild(t),r.appendChild(n)})),n.appendChild(t),n.appendChild(o),o.appendChild(r);const a=document.createElement("img");a.src="./pizza.jpg",a.alt="delicious pizza";const c=document.createElement("h2");c.textContent="Our pizza is the best!",e.appendChild(n),e.appendChild(a),e.appendChild(c)};var n=t(379),o=t.n(n),r=t(795),a=t.n(r),c=t(569),i=t.n(c),d=t(565),l=t.n(d),s=t(216),u=t.n(s),p=t(589),m=t.n(p),h=t(28),f={};function v(n){const t=n.target;"about"===t.id?e():"menu"===t.id?(()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("header"),t=document.createElement("h1");t.textContent="Cavell's Pizza";const o=document.createElement("h2");o.textContent="Our Menu:";const r=document.createElement("nav"),a=document.createElement("ul");["About","Menu","Contact"].forEach((e=>{const n=document.createElement("li"),t=document.createElement("a");t.textContent=e,t.id=e.toLowerCase(),n.appendChild(t),a.appendChild(n)})),n.appendChild(t),n.appendChild(r),r.appendChild(a);const c=document.createElement("img");c.src="./bitcoinpizza.jpg",c.alt="Pizza Money";const i=document.createElement("h2");i.textContent="Large Pizza | 10k BTC",e.appendChild(n),e.appendChild(c),e.appendChild(o),e.appendChild(i)})():"contact"===t.id&&(()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("header"),t=document.createElement("h1");t.textContent="Cavell's Pizza";const o=document.createElement("nav"),r=document.createElement("ul");["About","Menu","Contact"].forEach((e=>{const n=document.createElement("li"),t=document.createElement("a");t.textContent=e,t.id=e.toLowerCase(),n.appendChild(t),r.appendChild(n)})),n.appendChild(t),n.appendChild(o),o.appendChild(r);const a=document.createElement("img");a.src="./pizzaphone.jpg",a.alt="Pizza Phone";const c=document.createElement("h2");c.textContent="1-800-PIZZA-NOW",e.appendChild(n),e.appendChild(a),e.appendChild(c)})()}f.styleTagTransform=m(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,e(),document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",v)}))})()})();