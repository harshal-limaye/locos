!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.locos=t():e.locos=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return{type:e,props:t||{},children:o.filter(function(e){return e&&!1!==e}).map(function(e){return e instanceof Object?e:r("text",{textContent:e})})}}function o(e){return"function"==typeof e}function i(e,t){o(e.type)||function(e,t){var n=t._virtualElement;e.type===n.type&&("text"===e.type?n.props.textContent!==e.props.textContent&&(t.textContent=e.props.textContent):(f(t,e,n),e.children.forEach(function(e,n){return i(e,t.childNodes[n])})))}(e,t)}function u(e,t){o(e.type)?function(e,t){c(e.type(e.props),t)}(e,t):c(e,t)}function c(e,t){var n=null;"text"===e.type?n=document.createTextNode(e.props.textContent):f(n=document.createElement(e.type),e,{}),n._virtualElement=e,t.appendChild(n),e.children&&e.children.length>0&&e.children.forEach(function(e){return u(e,n)})}function f(e,t,n){var r=t.props||{},o=n.props||{};Object.keys(r).forEach(function(t){var n=r[t],i=o[t];if(i!==n)if("on"===t.slice(0,2)){var u=t.toLowerCase().slice(2);e.addEventListener(u,n,!1),i&&e.removeEventListener(u,i,!1)}else"value"===t||"checked"===t?e[t]=n:"className"===t?e.setAttribute("class",n):e.setAttribute(t,n)}),Object.keys(o).forEach(function(t){var n=o[t];r[t]||("on"===t.slice(0,2)?e.removeEventListener(t.slice(2).toLowerCase(),n,!1):e.removeAttribute(t))})}n.r(t);var l={createElement:r,render:function(e,t){!function(e,t,n){n?i(e,n):u(e,t)}(e,t,t.firstChild)}};t.default=l}])});