!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=l||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(h,t),d?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return m?y(n,a-(e-l)):n}(e))}function w(e){return f=void 0,s&&r?b(e):(r=i=void 0,u)}function x(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(m)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,g(n)&&(d=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},x.flush=function(){return void 0===f?u:w(p())},x}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");j&&(j.addEventListener("input",e(t)((function(){var e=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]'),n={email:e.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),j.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]');t.value,n.value,localStorage.removeItem("feedback-form-state"),t.value="",n.value=""}))),document.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]');n.value=t.email,r.value=t.message}}))}();
//# sourceMappingURL=03-feedback.ee3fad3e.js.map