(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({journeyDetails:"journeyDetails",journeys:"journeys"}[t]||t)+"."+{journeyDetails:"8ad1e48e",journeys:"d058c7a7"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={journeyDetails:1,journeys:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({journeyDetails:"journeyDetails",journeys:"journeys"}[t]||t)+"."+{journeyDetails:"7cfaa5b6",journeys:"759ac5ab"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1276:function(t,e,a){},"1d1f":function(t,e,a){"use strict";var r=a("d836"),n=a.n(r);n.a},"1e8c":function(t,e,a){"use strict";var r=a("206c"),n=a.n(r);n.a},"1fec":function(t,e,a){},"206c":function(t,e,a){},"423b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("6b54");var r=a("2b0e"),n=r["a"].observable({selectedJourneyData:null,selectedJourneyUUID:"",showServiceWorkerReloadSnackbar:!1})},"4e64":function(t,e,a){"use strict";var r=a("1276"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.showServiceWorkerReloadSnackbar?a("div",[t._v("\n    Update available!\n    "),a("div",{attrs:{click:t.location.reload()}},[a("u",[t._v("Reload")])])]):t._e(),a("keep-alive",[a("router-view")],1),a("TabBar"),a("SVGIconProvider")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"SVGIconProvider",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("symbol",{attrs:{id:"icon--search",viewBox:"0 0 56.97 56.97"}},[a("path",{attrs:{d:"M55.15 51.89l-13.56-14.1A22.93 22.93 0 0 0 46.99 23c0-12.68-10.32-23-23-23s-23 10.32-23 23 10.31 23 23 23c4.76 0 9.3-1.44 13.17-4.16l13.66 14.2a2.98 2.98 0 0 0 4.24.09 3 3 0 0 0 .09-4.24zM23.98 6c9.38 0 17 7.63 17 17s-7.62 17-17 17-17-7.63-17-17 7.63-17 17-17z"}})]),a("symbol",{attrs:{id:"icon--location"}},[a("path",{attrs:{d:"M13.458 1.846A6.263 6.263 0 0 0 9.001 0a6.262 6.262 0 0 0-4.458 1.846C2.34 4.05 2.066 8.195 3.95 10.706L9 18l5.043-7.284c1.892-2.521 1.619-6.666-.585-8.87zm-4.4 6.7a2.304 2.304 0 0 1-2.3-2.3 2.304 2.304 0 0 1 2.3-2.301 2.304 2.304 0 0 1 2.302 2.3 2.304 2.304 0 0 1-2.301 2.302z"}})]),a("symbol",{attrs:{id:"icon--location-compass",viewBox:"0 0 18 18"}},[a("path",{attrs:{d:"M9.95549 17.0325C9.78068 17.415 9.21505 17.3342 9.15433 16.9181L8.21436 10.4759C8.18742 10.2912 8.04242 10.1462 7.85781 10.1193L1.41558 9.17934C0.999418 9.11862 0.918619 8.55299 1.30114 8.37818L16.2095 1.56505C16.5649 1.40268 16.931 1.7688 16.7686 2.12411L9.95549 17.0325Z"}})]),a("symbol",{attrs:{id:"icon--reverse-sort"}},[a("path",{attrs:{d:"M14.78 3.22l-3-3a.76.76 0 0 0-.055-.05L11.7.15l-.033-.024-.032-.02-.03-.017-.035-.017-.032-.015c-.011-.005-.022-.008-.034-.012-.011-.005-.023-.01-.035-.013l-.034-.008-.037-.01-.04-.006-.033-.004a.755.755 0 0 0-.148 0c-.011 0-.022.003-.033.004l-.04.006-.037.01-.034.008-.035.013c-.011.004-.023.007-.034.012l-.032.015c-.012.006-.023.01-.034.017l-.03.017-.033.02L10.8.15l-.026.02a.739.739 0 0 0-.055.05l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v8.69a.75.75 0 1 0 1.5 0V2.56l1.72 1.72a.75.75 0 0 0 1.06-1.06zM9.22 13.72L7.5 15.44V6.75a.75.75 0 1 0-1.5 0v8.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.768.768 0 0 0 .055.05l.026.02.033.024.032.02.03.017.035.017.032.015.034.012.035.013.034.008.037.01.04.005.033.005c.05.005.099.005.148 0 .011 0 .022-.003.033-.005l.04-.006.037-.009.034-.008.035-.013.034-.012.032-.015c.012-.006.023-.01.034-.017l.03-.018c.012-.006.023-.012.033-.02l.032-.023.027-.02a.741.741 0 0 0 .054-.049h.001l3-3a.75.75 0 0 0-1.06-1.061z"}})]),a("symbol",{attrs:{id:"icon--arrow-right",viewBox:"0 0 12 12"}},[a("path",{attrs:{d:"M9.174 6.594l-5.16 5.16a.84.84 0 11-1.188-1.189L7.392 6 2.826 1.435A.84.84 0 014.014.246l5.16 5.16a.837.837 0 010 1.188z"}})]),a("symbol",{attrs:{id:"icon--error",viewBox:"0 0 24 24"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"12",fill:"#F33"}}),a("path",{attrs:{d:"M6.23 6.23a.787.787 0 011.113 0L17.77 16.657a.787.787 0 11-1.113 1.113L6.23 7.343a.787.787 0 010-1.113z",fill:"#fff"}}),a("path",{attrs:{d:"M17.77 6.23a.787.787 0 010 1.113L7.343 17.77a.787.787 0 11-1.113-1.113L16.657 6.23a.787.787 0 011.113 0z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--warning",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10.197 2.073a2.05 2.05 0 013.606 0l9.915 17.707c.801 1.431-.2 3.22-1.803 3.22H2.085C.482 23-.52 21.211.282 19.78l9.915-17.707z",fill:"#FC0"}}),a("path",{attrs:{d:"M12.972 16.072H11.02l-.276-8.46h2.504l-.276 8.46zm-.976 1.325c.396 0 .713.12.951.36.244.241.366.548.366.923 0 .369-.122.673-.366.914-.238.24-.555.36-.951.36-.39 0-.707-.12-.951-.36-.239-.24-.358-.545-.358-.914s.119-.674.358-.914c.244-.246.56-.369.95-.369z",fill:"#333"}})]),a("symbol",{attrs:{id:"icon--success",viewBox:"0 0 24 24"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"12",fill:"#68D000"}}),a("path",{attrs:{d:"M18.78 6.212a.75.75 0 00-1.06 0l-8.986 8.985-3.454-3.453a.75.75 0 10-1.06 1.06l3.984 3.984a.75.75 0 001.06 0l9.516-9.515a.75.75 0 000-1.061z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--tab-bar--departures",viewBox:"0 0 30 28"}},[a("path",{attrs:{d:"M25.9294 3.5665C25.8368 3.3419 25.6581 3.16315 25.4335 3.0706C25.3217 3.02385 25.2025 3 25.0833 3H19.5833C19.0764 3 18.6667 3.40975 18.6667 3.91665C18.6667 4.42355 19.0764 4.8333 19.5833 4.8333H22.8705L14.252 13.4518C13.1804 12.6488 11.8558 12.1667 10.4167 12.1667C6.87925 12.1667 4 15.045 4 18.5833C4 22.1207 6.87925 25 10.4167 25C13.9541 25 16.8333 22.1207 16.8333 18.5833C16.8333 17.1442 16.3512 15.8187 15.5482 14.748L24.1667 6.1295V9.41665C24.1667 9.92355 24.5764 10.3333 25.0833 10.3333C25.5902 10.3333 26 9.9236 26 9.41665V3.91665C26 3.7975 25.9752 3.67835 25.9294 3.5665Z"}})]),a("symbol",{attrs:{id:"icon--tab-bar--journeys",viewBox:"0 0 30 28"}},[a("path",{attrs:{d:"M15.8461 20.9832C15.7992 20.8705 15.7323 20.7696 15.6471 20.6844L12.898 17.9353C12.5396 17.5769 11.9603 17.5769 11.6019 17.9353C11.2435 18.2928 11.2435 18.8731 11.6019 19.2315L12.7871 20.4167H11.3333C9.81717 20.4167 8.58334 19.1829 8.58334 17.6667V8.50023C9.59443 8.50023 10.4167 7.67799 10.4167 6.6669V4.83363C10.4167 3.82254 9.59443 3.00031 8.58334 3.00031H6.75007C5.73899 3.00031 4.91675 3.82254 4.91675 4.83363V6.66695C4.91675 7.67803 5.73899 8.50027 6.75007 8.50027V17.6668C6.75007 20.194 8.80613 22.2501 11.3333 22.2501H12.7872L11.6019 23.4353C11.2435 23.7928 11.2435 24.373 11.6019 24.7314C11.7807 24.9102 12.0153 25 12.25 25C12.4847 25 12.7194 24.9102 12.8981 24.7314L15.6472 21.9824C15.7324 21.8971 15.7993 21.7963 15.8461 21.6835C15.9387 21.4599 15.9387 21.2069 15.8461 20.9832Z"}}),a("path",{attrs:{d:"M23.2498 19.4999V10.3334C23.2498 7.80623 21.1937 5.75016 18.6665 5.75016H17.2127L18.3979 4.56493C18.7563 4.20653 18.7563 3.62719 18.3979 3.2688C18.0395 2.9104 17.4602 2.9104 17.1018 3.2688L14.3527 6.01785C14.2674 6.1031 14.2005 6.20395 14.1538 6.3167C14.0612 6.54034 14.0612 6.79334 14.1538 7.01703C14.2005 7.12978 14.2674 7.23063 14.3527 7.31587L17.1018 10.0649C17.2805 10.2437 17.5151 10.3335 17.7498 10.3335C17.9845 10.3335 18.2192 10.2437 18.3979 10.0649C18.7563 9.70653 18.7563 9.12719 18.3979 8.7688L17.2127 7.58357H18.6665C20.1827 7.58357 21.4165 8.81739 21.4165 10.3335V19.5C20.4054 19.5 19.5832 20.3223 19.5832 21.3334V23.1667C19.5832 24.1778 20.4054 25 21.4165 25H23.2498C24.2609 25 25.0831 24.1778 25.0831 23.1667V21.3334C25.083 20.3222 24.2608 19.4999 23.2498 19.4999Z"}})]),a("symbol",{attrs:{id:"icon--journeys-stop-suggestion--stop",viewBox:"0 0 18 18"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 15.89A6.89 6.89 0 1 0 9 2.11a6.89 6.89 0 0 0 0 13.78zM9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18z",fill:"#3A82F7"}}),a("path",{attrs:{d:"M12.626 13.57h-1.853V9.714H7.157v3.856H5.303V4.573h1.854v3.646h3.616V4.573h1.853v8.997z",fill:"#3A82F7"}})]),a("symbol",{attrs:{id:"icon--journeys-stop-suggestion--poi",viewBox:"0 0 18 18"}},[a("circle",{attrs:{opacity:".25",cx:"9",cy:"9",r:"9"}}),a("path",{attrs:{d:"M11.477 5.026A3.48 3.48 0 0 0 9 4a3.48 3.48 0 0 0-2.476 1.026C5.3 6.25 5.148 8.553 6.194 9.948L9 14l2.802-4.046c1.05-1.401.899-3.704-.325-4.928zM9.033 8.748A1.28 1.28 0 0 1 7.754 7.47 1.28 1.28 0 0 1 9.033 6.19 1.28 1.28 0 0 1 10.31 7.47a1.28 1.28 0 0 1-1.278 1.278z"}})]),a("symbol",{attrs:{id:"icon--journeys-stop-suggestion--street",viewBox:"0 0 18 18"}},[a("circle",{attrs:{opacity:".25",cx:"9",cy:"9",r:"9"}}),a("path",{attrs:{d:"M13.875 8.883a.477.477 0 0 0-.04-.682L9.368 4.29a.557.557 0 0 0-.727.007L4.156 8.41a.474.474 0 0 0-.022.681l.112.118c.187.194.488.217.673.051l.335-.3v4.394c0 .27.219.488.488.488H7.49c.27 0 .488-.219.488-.488v-3.074h2.23v3.074c-.004.27.189.487.458.487h1.852c.27 0 .488-.218.488-.487V9.02l.207.181c.114.1.353.02.535-.18l.127-.14z"}})]),a("symbol",{attrs:{id:"icon--bus",viewBox:"-14181.5 -15419.5 41 41"}},[a("g",{attrs:{transform:"translate(-14195 -15988)"}},[a("circle",{attrs:{cx:"20",cy:"20",r:"20",transform:"translate(14 569)",fill:"#b80012",stroke:"#fff"}}),a("path",{attrs:{d:"M23 583.09h3.7a9.34 9.34 0 0 1 1.3.09 3.54 3.54 0 0 1 1.17.36 2.24 2.24 0 0 1 .84.77 2.34 2.34 0 0 1 .32 1.3 2.08 2.08 0 0 1-.47 1.39 2.58 2.58 0 0 1-1.24.8v.02a2.83 2.83 0 0 1 .89.27 2.37 2.37 0 0 1 .69.52 2.2 2.2 0 0 1 .44.74 2.58 2.58 0 0 1 .15.9 2.38 2.38 0 0 1-.34 1.3 2.64 2.64 0 0 1-.86.85 3.8 3.8 0 0 1-1.2.46 6.4 6.4 0 0 1-1.32.14H23zm2.2 3.96h1.57a2.22 2.22 0 0 0 .5-.06 1.37 1.37 0 0 0 .44-.18.95.95 0 0 0 .32-.33 1 1 0 0 0 .12-.5.91.91 0 0 0-.13-.52.93.93 0 0 0-.35-.31 1.63 1.63 0 0 0-.47-.16 2.86 2.86 0 0 0-.52-.05h-1.49zm0 4.1h1.95a2.41 2.41 0 0 0 .51-.06 1.35 1.35 0 0 0 .47-.2 1.11 1.11 0 0 0 .34-.36 1.05 1.05 0 0 0 .14-.55.88.88 0 0 0-.18-.56 1.11 1.11 0 0 0-.44-.33 2.26 2.26 0 0 0-.57-.16 4.26 4.26 0 0 0-.58-.03H25.2zM38.35 593h-2.01v-.92h-.03a2.33 2.33 0 0 1-.29.39 1.88 1.88 0 0 1-.42.35 2.48 2.48 0 0 1-.58.25 2.4 2.4 0 0 1-.7.1 2.94 2.94 0 0 1-1.3-.24 1.85 1.85 0 0 1-.77-.68 2.66 2.66 0 0 1-.36-1.03 8.35 8.35 0 0 1-.1-1.27v-3.75h2.1v3.33q0 .3.03.61a1.92 1.92 0 0 0 .13.58.9.9 0 0 0 .94.6 1.3 1.3 0 0 0 .66-.14 1 1 0 0 0 .38-.4 1.6 1.6 0 0 0 .18-.55 4.77 4.77 0 0 0 .04-.64v-3.39h2.1zm5.34-4.8a1.49 1.49 0 0 0-1.22-.57 1.15 1.15 0 0 0-.52.12.45.45 0 0 0-.25.44.39.39 0 0 0 .26.37 3.43 3.43 0 0 0 .66.2l.85.2a3.2 3.2 0 0 1 .86.34 1.91 1.91 0 0 1 .65.6 1.82 1.82 0 0 1 .26 1.03 1.9 1.9 0 0 1-.28 1.09 2.2 2.2 0 0 1-.74.69 3.16 3.16 0 0 1-1 .36 6 6 0 0 1-1.11.1 5.35 5.35 0 0 1-1.45-.2 2.7 2.7 0 0 1-1.23-.72l1.28-1.41a2.11 2.11 0 0 0 .65.55 1.75 1.75 0 0 0 .83.2 1.95 1.95 0 0 0 .66-.11.39.39 0 0 0 .3-.39.43.43 0 0 0-.27-.4 2.84 2.84 0 0 0-.65-.22l-.86-.2a3.53 3.53 0 0 1-.85-.32 1.79 1.79 0 0 1-.66-.6 1.82 1.82 0 0 1-.26-1.03 2.08 2.08 0 0 1 .25-1.03 2.15 2.15 0 0 1 .64-.72 2.79 2.79 0 0 1 .92-.41 4.2 4.2 0 0 1 1.05-.13 4.93 4.93 0 0 1 1.35.2 2.52 2.52 0 0 1 1.17.7z",fill:"#fff"}})])]),a("symbol",{attrs:{id:"icon--bus--is-ready"}},[a("path",{attrs:{d:"M22.34 2.12H5.07c-.73 0-1.35.52-1.56 1.24L.04 17.68c-.1.47 0 .98.31 1.35.31.36.78.62 1.25.62h.98a3.73 3.73 0 0 1 7.47 0h4.04a3.73 3.73 0 0 1 7.47 0h.83c.88 0 1.61-.73 1.61-1.6V3.72a1.7 1.7 0 0 0-1.66-1.61zM4.81 11.51a.84.84 0 0 1-.67-.31c-.16-.21-.21-.47-.16-.73l1.25-5.55c.1-.41.46-.67.83-.67h2.02v7.3c-.05-.04-3.27-.04-3.27-.04zm4.77 0V4.19h5.24v7.32H9.58zm12.3-.88c0 .46-.37.88-.89.88h-4.61V4.19h4.61a.9.9 0 0 1 .88.89v5.55z"}}),a("path",{attrs:{d:"M6.31 21.88a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36zM17.78 21.88a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36z"}})]),a("symbol",{attrs:{id:"icon--ubahn",viewBox:"-17251.5 -14803.5 39.28 39.32"}},[a("path",{attrs:{d:"M-17251-14764.68h38.28v-38.32h-38.28z",fill:"#19478e",stroke:"#fff"}}),a("path",{attrs:{d:"M-17222.11-14796v15.7c0 6.56-5.38 8.97-9.78 8.97-4.43 0-9.72-2.4-9.72-8.97v-15.7h5.7v15.13c0 2.77.99 4.73 4.02 4.73 3 0 3.98-1.96 3.98-4.73v-15.13h5.8",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--ubahn--is-ready"}},[a("path",{attrs:{d:"M21.35 22.48l-3.52-6.41c1-.16 1.73-1.05 1.73-2.05V4.57A4.57 4.57 0 0 0 15 0H9.01a4.63 4.63 0 0 0-4.62 4.62v9.4c0 1.05.73 1.9 1.73 2.05l-3.47 6.4c-.26.53-.1 1.16.42 1.43.16.1.32.1.47.1.37 0 .74-.21.9-.53l.31-.52h14.5l.31.52c.21.37.53.53.9.53.15 0 .31-.05.47-.1.52-.27.68-.9.42-1.42zm-4.94-4.73H7.6l.9-1.63h7.03l.9 1.63zm-.16-3.52a1.52 1.52 0 1 1 1.53-1.52c0 .79-.69 1.52-1.53 1.52zM6.22 5.2a2.93 2.93 0 0 1 2.9-2.94h5.72a2.97 2.97 0 0 1 2.94 2.94v2.52c0 .58-.48 1-1.05 1H7.27a1 1 0 0 1-1-1L6.23 5.2zm1.53 5.93a1.52 1.52 0 1 1 0 3.05 1.52 1.52 0 0 1 0-3.05zM5.59 21.37l1.16-2.04h10.5l1.16 2.04H5.59z"}})]),a("symbol",{attrs:{id:"icon--tram",viewBox:"-14316.5 -15419.5 39.28 39.32"}},[a("path",{attrs:{d:"M-14316-15380.68h38.28v-38.32h-38.28z",fill:"#6c3e78",stroke:"#fff"}}),a("path",{attrs:{d:"M-14306.7-15402.51h-2.22v-1.52h6.16v1.52h-2.23v6.27h-1.71zm3.59.92h1.65v.86h.02a2.03 2.03 0 0 1 .62-.74 1.58 1.58 0 0 1 .92-.25l.29.01a1.42 1.42 0 0 1 .26.05v1.5a2.5 2.5 0 0 0-.35-.08 2.24 2.24 0 0 0-.36-.03 1.75 1.75 0 0 0-.75.13 1 1 0 0 0-.42.37 1.4 1.4 0 0 0-.2.57 5.52 5.52 0 0 0-.04.72v2.24h-1.65zm7.83 4.68h-.02a1.55 1.55 0 0 1-.73.61 2.52 2.52 0 0 1-.96.2 2.48 2.48 0 0 1-.72-.1 1.82 1.82 0 0 1-.62-.32 1.51 1.51 0 0 1-.41-.52 1.58 1.58 0 0 1-.16-.71 1.64 1.64 0 0 1 .17-.79 1.53 1.53 0 0 1 .46-.52 2.3 2.3 0 0 1 .67-.33 4.86 4.86 0 0 1 .78-.17 7.4 7.4 0 0 1 .8-.07h.74a.86.86 0 0 0-.32-.7 1.13 1.13 0 0 0-.74-.27 1.61 1.61 0 0 0-.74.18 2.03 2.03 0 0 0-.6.46l-.88-.9a3.03 3.03 0 0 1 1.08-.64 3.85 3.85 0 0 1 1.27-.22 3.34 3.34 0 0 1 1.2.19 1.74 1.74 0 0 1 .74.53 2.06 2.06 0 0 1 .4.86 5.67 5.67 0 0 1 .1 1.19v2.7h-1.51zm-.41-1.67l-.47.01a2.37 2.37 0 0 0-.54.1 1.2 1.2 0 0 0-.44.23.53.53 0 0 0-.18.43.47.47 0 0 0 .25.44 1.06 1.06 0 0 0 .53.14 1.66 1.66 0 0 0 .47-.07 1.4 1.4 0 0 0 .4-.18.9.9 0 0 0 .28-.31.89.89 0 0 0 .1-.44v-.35zm2.96-3h1.58v.72h.03a1.34 1.34 0 0 1 .22-.3 1.6 1.6 0 0 1 .34-.28 1.95 1.95 0 0 1 .45-.2 1.88 1.88 0 0 1 .55-.08 2.09 2.09 0 0 1 1 .23 1.46 1.46 0 0 1 .65.73 1.78 1.78 0 0 1 .7-.74 2.08 2.08 0 0 1 1-.22 2.04 2.04 0 0 1 .9.18 1.49 1.49 0 0 1 .58.5 2.09 2.09 0 0 1 .31.73 4.2 4.2 0 0 1 .1.91v3.16h-1.65v-3.11a1.24 1.24 0 0 0-.16-.65.6.6 0 0 0-.57-.27 1.1 1.1 0 0 0-.48.1.79.79 0 0 0-.3.26 1.07 1.07 0 0 0-.17.38 2.1 2.1 0 0 0-.05.46v2.83h-1.65v-2.83l-.01-.35a1.4 1.4 0 0 0-.08-.4.76.76 0 0 0-.21-.32.64.64 0 0 0-.44-.13 1.02 1.02 0 0 0-.51.11.79.79 0 0 0-.3.31 1.26 1.26 0 0 0-.14.44 3.74 3.74 0 0 0-.04.5v2.67h-1.65z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--tram--is-ready"}},[a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{attrs:{d:"M15.02 3.64h-2.24V1.56h4.95c.26 0 .52.26.52.52 0 .42.36.78.78.78a.8.8 0 0 0 .78-.78A2.1 2.1 0 0 0 17.73 0H6.27C5.13 0 4.2.94 4.2 2.08c0 .42.37.78.78.78a.8.8 0 0 0 .78-.78.5.5 0 0 1 .52-.52h4.95V3.6H8.98A4.59 4.59 0 0 0 4.4 8.17v9.37c0 1.05.73 1.93 1.77 2.09l-1.51 2.86c-.26.52-.05 1.15.42 1.4.15.11.3.11.46.11.37 0 .73-.2.94-.57l.31-.63H17.1l.31.63c.21.36.58.57.94.57.16 0 .31-.05.47-.1a.98.98 0 0 0 .42-1.41l-1.51-2.86a2.13 2.13 0 0 0 1.77-2.09V8.23a4.44 4.44 0 0 0-4.48-4.59zm1.25 14.16a1.51 1.51 0 1 1 0-3.02 1.51 1.51 0 0 1 0 3.02zm-10-9c0-1.62 1.3-2.87 2.92-2.87h5.73a2.9 2.9 0 0 1 2.91 2.87v2.55c0 .57-.47.99-1.04.99H7.26a1 1 0 0 1-1.04-1c.05 0 .05-2.54.05-2.54zm1.46 5.93a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02zm-.1 6.62l.83-1.62h7.03l.83 1.62h-8.7z"}})]),a("defs",[a("clipPath",{attrs:{id:"a"}},[a("path",{attrs:{d:"M0 0h24v24H0z"}})])])]),a("symbol",{attrs:{id:"icon--bus--small",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",fill:"#C31824"}}),a("path",{attrs:{d:"M4.86 8.763h2.376c.279 0 .558.02.834.058.262.033.516.111.751.231.22.116.406.286.54.495.148.252.22.542.205.834.011.325-.096.642-.302.893-.21.245-.486.423-.796.513v.013c.2.026.392.084.572.173.167.084.317.197.443.334.124.138.22.3.282.475.066.186.099.381.096.578.01.293-.066.583-.218.835-.14.222-.328.409-.552.545a2.441 2.441 0 01-.77.296c-.279.059-.563.089-.848.09H4.86V8.762zm1.413 2.543H7.28c.108 0 .215-.014.32-.039a.88.88 0 00.283-.115.61.61 0 00.206-.212.642.642 0 00.077-.321.584.584 0 00-.084-.334.598.598 0 00-.225-.2 1.047 1.047 0 00-.301-.102 1.836 1.836 0 00-.334-.032h-.957l.007 1.355zm0 2.632h1.252c.11-.001.22-.014.327-.039a.867.867 0 00.302-.128.674.674 0 00.308-.584.565.565 0 00-.116-.36.712.712 0 00-.282-.212 1.45 1.45 0 00-.366-.102 2.741 2.741 0 00-.372-.02H6.273v1.445zm8.442 1.188h-1.29v-.591h-.02c-.053.09-.115.174-.186.25a1.21 1.21 0 01-.27.225 1.593 1.593 0 01-.821.225 1.888 1.888 0 01-.835-.154 1.187 1.187 0 01-.494-.437 1.708 1.708 0 01-.231-.661 5.351 5.351 0 01-.064-.816V10.76h1.348v2.138c0 .128.006.259.019.392.008.127.036.253.083.372a.578.578 0 00.604.385.834.834 0 00.424-.09.642.642 0 00.244-.257c.06-.11.098-.229.115-.353.018-.136.026-.273.026-.41V10.76h1.348v4.366zm3.428-3.082a.955.955 0 00-.783-.366.737.737 0 00-.334.077.29.29 0 00-.16.283.25.25 0 00.166.237c.137.057.279.1.424.128l.546.129c.194.046.38.12.552.218.167.094.31.226.417.385.12.2.179.43.167.662.012.246-.05.49-.18.7a1.413 1.413 0 01-.475.442c-.199.113-.416.191-.642.232a3.853 3.853 0 01-.712.064c-.315 0-.628-.043-.931-.129-.3-.08-.573-.24-.79-.462l.822-.905c.114.145.256.265.417.353.165.086.348.13.533.128.144.001.288-.023.424-.07a.25.25 0 00.193-.25.276.276 0 00-.174-.258 1.823 1.823 0 00-.417-.14l-.552-.13a2.266 2.266 0 01-.546-.204 1.15 1.15 0 01-.424-.386 1.169 1.169 0 01-.167-.661 1.335 1.335 0 01.572-1.123c.18-.123.38-.212.59-.264.22-.056.447-.084.675-.083.293.002.585.046.866.128.287.078.547.234.751.45l-.828.815z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--footpath--small",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14.837 7.607a1.304 1.304 0 110-2.607 1.304 1.304 0 010 2.607zM6.642 17.496c1.554-2.318 3.33-5.339 3.629-5.849.027-.092.063-.186.112-.28.355-.692.726-1.376 1.105-2.055l-1.205.094-.826 1.63c-.444.876-1.756.106-1.313-.767.354-.702.775-2.28 1.691-2.35l2.924-.227c.024-.002.044.001.067.001.737-.197 1.6.323 1.757 1.074.498 1.079 1.213 1.921 2.414 2.273.94.275.539 1.743-.405 1.467-1.186-.347-2.039-1.027-2.685-1.922-.391.697-.773 1.4-1.14 2.111a9.875 9.875 0 012.126 2.002c.172.216.201.439.143.634a.825.825 0 01-.023.231l-.712 2.815c-.252 1-1.834.716-1.58-.29l.678-2.683a7.494 7.494 0 00-1.997-1.683.797.797 0 01-.356-.398c-1.044 1.6-2.088 3.813-3.131 5.154-.637.818-1.91-.162-1.273-.982z"}})]),a("symbol",{attrs:{id:"icon--subway--small",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",fill:"#19478E"}}),a("path",{attrs:{d:"M17.958 4.578v9.583c0 4.004-3.288 5.475-5.977 5.475-2.706 0-5.938-1.465-5.938-5.475V4.578h3.482v9.235c0 1.69.605 2.887 2.456 2.887 1.833 0 2.432-1.197 2.432-2.887V4.578h3.545z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--tram--small",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",fill:"#6C3E78"}}),a("path",{attrs:{d:"M4.848 10.267H3.273V9.19h4.37v1.078H6.062v4.444H4.848v-4.444zm2.547.652h1.171v.61h.014c.102-.208.253-.388.44-.525.194-.124.422-.186.653-.177l.205.007c.063.006.125.018.185.035v1.063a1.777 1.777 0 00-.503-.077 1.241 1.241 0 00-.533.092.71.71 0 00-.298.262.988.988 0 00-.141.404c-.021.17-.03.34-.029.51v1.588H7.39l.006-3.792zm5.556 3.317h-.014a1.101 1.101 0 01-.519.433 1.79 1.79 0 01-1.191.07 1.29 1.29 0 01-.44-.226 1.119 1.119 0 01-.405-.872 1.162 1.162 0 01.12-.56c.08-.146.192-.272.328-.368.144-.104.305-.183.475-.234.18-.056.365-.096.553-.12.188-.028.378-.044.568-.05h.524a.608.608 0 00-.226-.497.803.803 0 00-.525-.191c-.183 0-.363.043-.525.127a1.44 1.44 0 00-.426.326l-.624-.638c.22-.203.481-.357.765-.453.29-.102.595-.155.902-.156.29-.007.578.038.851.134.206.077.387.207.526.376.14.179.237.388.283.61.053.278.078.56.071.843v1.914H12.95v-.468zm-.292-1.184l-.333.007c-.13.01-.258.033-.383.072a.85.85 0 00-.312.162.378.378 0 00-.128.306.332.332 0 00.178.311c.114.066.244.1.376.099a1.179 1.179 0 00.617-.177.637.637 0 00.199-.22.63.63 0 00.07-.312v-.248h-.284zm2.1-2.126h1.122v.51h.021a1.137 1.137 0 01.398-.411 1.376 1.376 0 01.71-.198c.246-.005.49.05.709.163.209.114.371.297.46.518.112-.22.284-.402.497-.525.22-.11.464-.164.71-.156.22-.006.438.037.639.127.166.08.307.203.41.355.106.157.181.333.221.518.047.211.07.427.07.644v2.24h-1.17v-2.204a.88.88 0 00-.113-.461.427.427 0 00-.405-.191.78.78 0 00-.34.07.562.562 0 00-.213.185.757.757 0 00-.121.269 1.489 1.489 0 00-.035.326v2.006h-1.17v-2.006l-.008-.248a.99.99 0 00-.057-.284.536.536 0 00-.149-.226.453.453 0 00-.312-.092.723.723 0 00-.361.077.563.563 0 00-.214.22.89.89 0 00-.099.312 2.646 2.646 0 00-.028.354v1.893H14.76v-3.785z",fill:"#fff"}})]),a("symbol",{attrs:{id:"icon--sbahn--small",viewBox:"0 0 24 24"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M11.993 23.985C5.378 23.985 0 18.607 0 11.993 0 5.378 5.378 0 11.993 0c6.614 0 11.992 5.378 11.992 11.993 0 6.614-5.378 11.992-11.992 11.992z",fill:"#008B44"}}),a("path",{attrs:{d:"M9.022 7.255c0-.922.846-1.71 2.325-1.71 2.612 0 4.84 1.403 6.32 2.997V5.757c-1.71-1.326-3.861-2.113-6.263-2.113-2.881 0-6.09 1.767-6.09 5.052 0 6.262 9.51 4.015 9.51 7.646 0 .96-1.268 1.863-2.843 1.863-2.574 0-5.13-1.556-6.532-3.573v3.342c1.48 1.326 4.188 2.382 6.532 2.382 4.207 0 6.704-2.996 6.704-5.57 0-6.378-9.663-3.65-9.663-7.53z",fill:"#fff"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("path",{attrs:{fill:"#fff",d:"M0 0h24v24H0z"}})])])]),a("symbol",{attrs:{id:"icon--regio--small",viewBox:"0 0 24 24"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M11.993 23.985C5.378 23.985 0 18.607 0 11.993 0 5.378 5.378 0 11.993 0c6.614 0 11.992 5.378 11.992 11.993 0 6.614-5.378 11.992-11.992 11.992z",fill:"#008B44"}}),a("path",{attrs:{d:"M12.317 13.855a.234.234 0 00-.206-.123H9.433a.234.234 0 00-.235.235v5.117c0 .258-.21.468-.468.468H6.929a.469.469 0 01-.469-.468V4.916c0-.258.21-.468.469-.468h5.073c1.818 0 3.222.39 4.21 1.172.99.782 1.483 1.912 1.483 3.392 0 1.01-.256 1.857-.768 2.542-.459.615-1.084 1.103-1.876 1.462a.242.242 0 00-.115.337l3.395 6.04a.107.107 0 01-.093.16H15.69a.469.469 0 01-.412-.246l-2.96-5.452zm-3.119-2.463c0 .13.105.235.235.235h2.58c.923 0 1.645-.222 2.165-.664.52-.45.779-1.062.779-1.837 0-.809-.242-1.435-.725-1.877-.477-.443-1.191-.671-2.143-.685H9.432a.234.234 0 00-.235.234v4.594z",fill:"#fff"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("path",{attrs:{fill:"#fff",d:"M0 0h24v24H0z"}})])])]),a("svg",{attrs:{id:"icon--ice--small",viewBox:"0 0 24 24"}},[a("mask",{attrs:{id:"a",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24"}},[a("path",{attrs:{d:"M11.993 23.985C5.378 23.985 0 18.607 0 11.993 0 5.378 5.378 0 11.993 0c6.614 0 11.992 5.378 11.992 11.993 0 6.614-5.378 11.992-11.992 11.992z",fill:"#fff"}})]),a("g",{attrs:{mask:"url(#a)"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"12",fill:"#fff"}}),a("path",{attrs:{d:"M-2 10h4.47l-.802 4H-2v-4zM22.186 10H25.5v4h-4l.686-4z",fill:"#EC1B2D"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.359 11.978c-.478 2.802.616 4.198 3.104 4.224.882.01 1.878-.296 1.997-.366l.23-1.243c-.556.196-1.05.353-1.713.34-.835-.015-1.676-.236-1.698-1.735-.031-2.146.777-3.935 2.729-3.971.668-.013.984.105 1.588.343l.241-1.308c-.498-.207-.89-.393-2.046-.414-2.464-.045-4.028 1.752-4.432 4.13zm-3.68 4.12l1.91-.001 1.487-8.069H5.139l-1.46 8.07zm11.29-8.07l-1.54 8.07h5.616l.24-1.3h-3.716l.336-2.037h2.75l.25-1.35-2.719-.002.408-1.986H20.1l.257-1.394H14.97z",fill:"#B4B4B4"}})])])])},i=[],c={name:"SVGIconProvider"},l=c,u=(a("1d1f"),a("2877")),d=Object(u["a"])(l,o,i,!1,null,"70cdc2b0",null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"tab-bar"},[a("div",{staticClass:"tab-bar__container"},t._l(t.tabItems,(function(e,r){return a("router-link",{key:r,staticClass:"tab-bar-item",attrs:{to:{name:e.name}}},[a("SVGIcon",{staticClass:"tab-bar-item__icon",attrs:{name:"tab-bar--"+e.name}}),a("div",{staticClass:"tab-bar-item__label"},[t._v(t._s(e.title))])],1)})),1)])},h=[],v=a("be08"),m={name:"TabBar",components:{SVGIcon:v["a"]},data:function(){return{tabItems:[{name:"departures",title:"Abfahrten"},{name:"journeys",title:"Verbindungen"}]}}},b=m,g=(a("1e8c"),Object(u["a"])(b,f,h,!1,null,"95127e2e",null)),y=g.exports,w=a("423b"),C={name:"App",components:{SVGIconProvider:p,TabBar:y},computed:{showServiceWorkerReloadSnackbar:function(){return w["a"].showServiceWorkerReloadSnackbar}},mounted:function(){var t=!1;function e(){t||(t=!0,requestAnimationFrame((function(){t=!1;var e=window.visualViewport;document.documentElement.style.setProperty("--height-viewport",e.height+"px")})))}navigator.standalone||document.documentElement.style.setProperty("--space-bottom-tab-bar","0px"),e(),window.visualViewport.addEventListener("resize",e)},methods:{handleScroll:function(t){window.scrollY<=0?document.documentElement.style.setProperty("--opacity-fixed-box-border",0):document.documentElement.style.setProperty("--opacity-fixed-box-border",1)}},created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},_=C,S=(a("5c0b"),Object(u["a"])(_,n,s,!1,null,null,null)),x=S.exports,z=(a("7f7f"),a("96cf"),a("3b8d")),M=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"page__home"}},[a("div",{staticClass:"page__fixed-box"},[a("h1",[t._v("Abfahrten.")]),a("div",{staticClass:"station-input"},[a("span",{staticClass:"station-input__icon"},[a("SVGIcon",{attrs:{name:"search"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],ref:"stationsInput",staticClass:"station-input__textfield",attrs:{type:"text",autofocus:"",spellcheck:"false",placeholder:"Haltestelle"},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.searchStations],focus:function(e){t.searchQuery=""}}})]),a("DeparturesSuggestions",{attrs:{suggestions:t.suggestions,selectedStationID:t.selectedStationID}})],1),a("section",{staticClass:"results"},[t.departures?a("div",[0!==t.departures.length?a("div",{staticClass:"results__container"},[a("DeparturesResults",{attrs:{departures:t.departures}})],1):a("AlertBox",{attrs:{type:"warning"}},[t._v("\n        Keine Abfahrten gefunden.\n      ")])],1):t._e(),!1===t.departures?a("div",[a("AlertBox",{attrs:{type:"error"}},[t._v("\n        Netzwerk-Fehler\n      ")])],1):t._e(),t.isLoadingDepartures?a("div",{staticClass:"results__loading-animation"},[a("LoadingSpinner")],1):t._e()]),t.departuresImportantInfos?a("section",{staticClass:"important-infos"},t._l(t.departuresImportantInfos,(function(e,r){return a("article",{key:r,staticClass:"important-infos__item"},[t._v("\n\n      "+t._s(e)+"\n    ")])})),0):t._e()])},k=[],L=(a("a481"),a("28a5"),a("20d6"),a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.departures,(function(e){return a("article",{key:e.Fahrtnummer,staticClass:"departure"},[a("SVGIcon",{staticClass:"departure__vehicle-type",attrs:{name:e.Produkt.toLowerCase()}}),a("span",{staticClass:"departure__line-name"},[t._v(t._s(e.Linienname))]),a("span",{staticClass:"departure__target"},[t._v(t._s(e.Richtungstext))]),0!==t.calcDepartureTime(e.AbfahrtszeitIst)?a("span",{staticClass:"departure__time",class:{"has-no-realtime-data":!e.Prognose}},[t._v("\n      \n      "+t._s(t.calcDepartureTime(e.AbfahrtszeitIst))+" Min.\n    ")]):a("span",{staticClass:"departure__time-now-icon"},[a("SVGIcon",{attrs:{name:e.Produkt.toLowerCase()+"--is-ready"}})],1)],1)})),0)}),H=[],V={name:"DeparturesResults",props:["departures"],components:{SVGIcon:v["a"]},methods:{calcDepartureTime:function(t){var e=Date.parse(t),a=Date.now(),r=Math.round((e-a)/1e3/60);return r}}},I=V,D=(a("4e64"),Object(u["a"])(I,L,H,!1,null,"21e57df9",null)),B=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"suggestions"},[a("div",{staticClass:"suggestions__container"},t._l(t.suggestions,(function(e){return a("article",{key:e.id,staticClass:"suggestion",class:{"is-selected":e.id===t.selectedStationID},on:{click:function(a){return t.selectStation(e.id)}}},[a("span",{staticClass:"suggestion__name-main"},[t._v(t._s(e.name.main))]),a("span",{staticClass:"suggestion__name-sub"},[t._v(t._s(e.name.sub))])])})),0)])},O=[],E={name:"DeparturesSuggestions",props:["suggestions","selectedStationID"],methods:{selectStation:function(t){this.$parent.selectStation(t)}}},P=E,R=(a("59bb"),Object(u["a"])(P,A,O,!1,null,"12ca80b2",null)),N=R.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LoadingSpinner"},[a("svg",{attrs:{viewBox:"0 0 50 50"}},[a("path",{attrs:{d:"M8.5 15.7a18.68 18.68 0 1 0 32.7 18.1l-3.57-1.96a14.62 14.62 0 0 1-25.56-14.17L8.5 15.69z"}},[a("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},G=[],$={name:"LoadingSpinner"},F=$,J=(a("5eec"),Object(u["a"])(F,T,G,!1,null,"5ed38c5c",null)),Q=J.exports,q=a("d6df"),U={name:"home",components:{DeparturesResults:B,DeparturesSuggestions:N,SVGIcon:v["a"],LoadingSpinner:Q,AlertBox:q["a"]},data:function(){return{suggestions:null,suggestionsCloseIcon_visible:!1,searchQuery:"",departures:null,departuresImportantInfos:null,selectedStationID:null,isLoadingDepartures:!1}},methods:{getAndSetDepartures:function(){var t=this;return new Promise(function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(a,r){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://start.vag.de/dm/api/abfahrten.json/vgn/".concat(t.selectedStationID,"/?timedelay=0&product=Ubahn,Bus,Tram"));case 3:if(n=e.sent,n.ok){e.next=6;break}throw new Error("Network response was not ok.");case 6:return e.next=8,n.json();case 8:s=e.sent,t.departures=0===s.Abfahrten.length?[]:s.Abfahrten,a(s),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error(e.t0),r();case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}())},selectStation:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(e){var a,r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.selectedStationID=e,this.departures=null,this.departuresImportantInfos=null,this.isLoadingDepartures=!0,t.next=7,this.getAndSetDepartures();case 7:a=t.sent,this.isLoadingDepartures=!1,r=this.suggestions.find((function(t){return t.id===e})),n=this.getLastSearches(),s=n.find((function(t){return t.id===e})),s&&(o=n.findIndex((function(t){return t.id===e})),n.splice(o,1)),n.unshift(r),localStorage.setItem("lastSearches",JSON.stringify(n)),a.Sonderinformationen&&(this.departuresImportantInfos=a.Sonderinformationen),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](0),this.departures=!1,this.isLoadingDepartures=!1;case 22:case"end":return t.stop()}}),t,this,[[0,18]])})));function e(e){return t.apply(this,arguments)}return e}(),getLastSearches:function(){var t=JSON.parse(localStorage.getItem("lastSearches"));return t||localStorage.setItem("lastSearches",JSON.stringify([])),t||[]},searchStations:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.searchQuery,!(e.length<3)){t.next=7;break}return this.departures=null,this.departuresImportantInfos=null,this.selectedStationID=null,this.suggestions=this.getLastSearches(),t.abrupt("return");case 7:return t.next=9,fetch("https://start.vag.de/dm/api/haltestellen.json/vgn?name=".concat(this.searchQuery));case 9:return a=t.sent,t.next=12,a.json();case 12:if(r=t.sent,0!==r.Haltestellen.length){t.next=15;break}return t.abrupt("return");case 15:this.suggestions=this.generateSaveableData(r.Haltestellen);case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),generateSaveableData:function(t){for(var e=[],a=0;a<t.length;a++){var r=t[a],n=r.Haltestellenname.split("("),s=r.VGNKennung;e.push({id:s,name:{main:n[0].trim(),sub:n[1].replace(")","")}})}return e}},created:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.suggestions=this.getLastSearches();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},W=U,Z=(a("8815"),Object(u["a"])(W,j,k,!1,null,"12aa3e47",null)),K=Z.exports,Y=a("9224");r["a"].use(M["a"]);var X=new M["a"]({mode:"hash",base:"/",routes:[{path:"/"+Y["a"]+"/departures",name:"departures",component:K},{path:"/"+Y["a"]+"/journeys",name:"journeys",component:function(){return a.e("journeys").then(a.bind(null,"78d0"))},children:[{path:"details",name:"journeyDetails",component:function(){return a.e("journeyDetails").then(a.bind(null,"ee5e"))},beforeEnter:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(e,a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"journeys"!==a.name?r({name:"journeys",query:e.query}):r();case 1:case"end":return t.stop()}}),t)})));function e(e,a,r){return t.apply(this,arguments)}return e}()}]},{path:"*",redirect:{name:"departures"}}]}),tt=a("9483");Object(tt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh. (aktualisierte meldung v5)"),Object(tt["b"])(),w["a"].showServiceWorkerReloadSnackbar=!0},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var et=a("3f08"),at=a("62a6"),rt=a("3e84");r["a"].use(et["a"]),r["a"].use(at["a"]),r["a"].component("slide-up-down",rt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:X,render:function(t){return t(x)}}).$mount("#app")},"59bb":function(t,e,a){"use strict";var r=a("7186"),n=a.n(r);n.a},"5c0b":function(t,e,a){"use strict";var r=a("e332"),n=a.n(r);n.a},"5eec":function(t,e,a){"use strict";var r=a("f0f3"),n=a.n(r);n.a},7186:function(t,e,a){},"74d2":function(t,e,a){"use strict";var r=a("f05d"),n=a.n(r);n.a},8815:function(t,e,a){"use strict";var r=a("1fec"),n=a.n(r);n.a},9224:function(t){t.exports=JSON.parse('{"a":"2.1.1"}')},be08:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"SVGIcon"},[a("use",{attrs:{href:"#icon--"+t.name}})])},n=[],s={name:"SVGIcon",props:["name"]},o=s,i=a("2877"),c=Object(i["a"])(o,r,n,!1,null,null,null);e["a"]=c.exports},d6df:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert-box",class:"alert-box--"+t.type,style:"--bg: var(--color-bg-"+t.type+"); --accent: var(--color-"+t.type+");"},[a("SVGIcon",{attrs:{name:t.type}}),a("p",[t._t("default")],2)],1)},n=[],s=a("be08"),o={name:"AlertBox",components:{SVGIcon:s["a"]},props:{type:{type:String,default:"warning"}}},i=o,c=(a("74d2"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,"4807381b",null);e["a"]=l.exports},d836:function(t,e,a){},e332:function(t,e,a){},f05d:function(t,e,a){},f0f3:function(t,e,a){}});