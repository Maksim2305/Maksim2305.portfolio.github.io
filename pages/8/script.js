"use strict";function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var e,t,n;function o(e){for(var t=new URL("https://qwe.com"),n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];if("object"!==c(e[a]))t.searchParams.append(a,e[a]);else for(var o=0;o<e[a].length;o++)t.searchParams.append(a,e[a][o])}window.history.replaceState({},"","?".concat(t.searchParams)),document.querySelector(".result_js").innerHTML=JSON.stringify(e,null,2)}function u(e){var t,n={},r=i(e.querySelectorAll("input"));try{for(r.s();!(t=r.n()).done;){var a=t.value;switch(a.type){case"radio":a.checked&&(n[a.name]=a.value);break;case"checkbox":n[a.name]||(n[a.name]=[]),a.checked&&n[a.name].push(a.value);break;case"file":n[a.name]=a.files;break;default:n[a.name]=a.value}}}catch(e){r.e(e)}finally{r.f()}var o=i(e.querySelectorAll("textarea"));try{for(o.s();!(c=o.n()).done;){var c=c.value;n[c.name]=c.value}}catch(e){o.e(e)}finally{o.f()}return n}e=new Date("2020-02-11T15:36:27.200Z"),t=e.getMonth(),n=e.getFullYear(),e=e.getDate(),console.log("Год: ".concat(n,". Месяц: ").concat(["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август",""][t],". День: ").concat(e)),function(){var n=document.querySelector(".form_js");if(n){var e,t,t=(e=new URL(location),(t={}).options=e.searchParams.getAll("options"),t.option=e.searchParams.get("option")||"",t.name=e.searchParams.get("name")||"",t);console.log(t),function(e,t){var n,r=i(e.querySelectorAll("input"));try{for(r.s();!(n=r.n()).done;){var a=n.value;switch(a.type){case"radio":t[a.name]&&t[a.name]===a.value&&(a.checked=!0);break;case"checkbox":if(t[a.name]){var o,c=i(t[a.name]);try{for(c.s();!(o=c.n()).done;)if(o.value===a.value){a.checked=!0;break}}catch(e){c.e(e)}finally{c.f()}}break;default:t[a.name]&&(a.value=t[a.name])}}}catch(e){r.e(e)}finally{r.f()}var l=i(e.querySelectorAll("textarea"));try{for(l.s();!(u=l.n()).done;){var u=u.value;t[u.name]&&(u.value=t[u.name])}}catch(e){l.e(e)}finally{l.f()}}(n,t),n.addEventListener("submit",function(e){e.preventDefault(),o(u(n))});for(var r=document.querySelectorAll(".link_js"),a=0;a<r.length;a++)!function(t){r[t].addEventListener("click",function(e){e.preventDefault();e=u(n);e.page=t+1,o(e)})}(a)}}();