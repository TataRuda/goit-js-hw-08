function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,a=setTimeout(h,e),l?y(t):f}function T(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function h(){var t=v();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-u);return s?p(n,i-(t-c)):n}(t))}function w(t){return a=void 0,g&&r?y(t):(r=o=void 0,f)}function O(){var t=v(),n=T(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,e),y(u)}return void 0===a&&(a=setTimeout(h,e)),f}return e=b(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(t){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const j={};
//# sourceMappingURL=03-feedback.689226a7.js.map
