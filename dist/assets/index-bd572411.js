(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const h="/assets/javascript-8dac5379.svg",m="/vite.svg";var v=typeof global=="object"&&global&&global.Object===Object&&global;const j=v;var O=typeof self=="object"&&self&&self.Object===Object&&self,S=j||O||Function("return this")();const T=S;var $=T.Symbol;const c=$;var d=Object.prototype,P=d.hasOwnProperty,L=d.toString,l=c?c.toStringTag:void 0;function w(e){var r=P.call(e,l),o=e[l];try{e[l]=void 0;var i=!0}catch{}var t=L.call(e);return i&&(r?e[l]=o:delete e[l]),t}var A=Object.prototype,C=A.toString;function E(e){return C.call(e)}var F="[object Null]",I="[object Undefined]",f=c?c.toStringTag:void 0;function N(e){return e==null?e===void 0?I:F:f&&f in Object(e)?w(e):E(e)}function b(e){return e!=null&&typeof e=="object"}var q=Array.isArray;const G=q;var H="[object Arguments]";function g(e){return b(e)&&N(e)==H}var p=Object.prototype,M=p.hasOwnProperty,V=p.propertyIsEnumerable,x=g(function(){return arguments}())?g:function(e){return b(e)&&M.call(e,"callee")&&!V.call(e,"callee")};const J=x;function U(e,r){for(var o=-1,i=r.length,t=e.length;++o<i;)e[t+o]=r[o];return e}var u=c?c.isConcatSpreadable:void 0;function _(e){return G(e)||J(e)||!!(u&&e&&e[u])}function y(e,r,o,i,t){var n=-1,s=e.length;for(o||(o=_),t||(t=[]);++n<s;){var a=e[n];r>0&&o(a)?r>1?y(a,r-1,o,i,t):U(t,a):i||(t[t.length]=a)}return t}function z(e){var r=e==null?0:e.length;return r?y(e,1):[]}function K(e){console.log(z([[[1,2,3,4,5]]]));let r=0;const o=i=>{r=i,e.innerHTML=`count is ${r}`};e.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${m}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${h}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;K(document.querySelector("#counter"));
