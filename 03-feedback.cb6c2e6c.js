function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var i,o,r,u,a,f,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?g(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=r}function h(){var e=v();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return d?m(n,r-(e-c)):n}(e))}function w(e){return a=void 0,p&&i?g(e):(i=o=void 0,u)}function x(){var e=v(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(d)return a=setTimeout(h,t),g(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},x.flush=function(){return void 0===a?u:w(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form");g&&(g.addEventListener("input",e(t)((function(){const e=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]'),n={email:e.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),g.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]');t.value,n.value,localStorage.removeItem("feedback-form-state"),t.value="",n.value=""}))),document.addEventListener("load",formFiedls);
//# sourceMappingURL=03-feedback.cb6c2e6c.js.map
