(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({"login~register":"login~register",login:"login",register:"register",upload:"upload"}[e]||e)+"."+{"login~register":"bad11d2f",login:"efc71cbf",register:"18525ea4",upload:"1207a1d1"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"login~register":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"login~register":"login~register",login:"login",register:"register",upload:"upload"}[e]||e)+"."+{"login~register":"87484932",login:"31d6cfe0",register:"31d6cfe0",upload:"31d6cfe0"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"21bb":function(e,t,r){"use strict";var n=r("d63f"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("div",{staticClass:"d-flex align-center"},[r("router-link",{staticClass:"no-format",attrs:{to:"/"}},[r("h1",[e._v("Pictshare")])])],1),r("v-spacer")],1),r("v-navigation-drawer",{attrs:{fixed:"",left:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v("Pictshare")]),r("v-list-item-subtitle",[e._v("Not logged in")])],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{on:{click:function(t){return t.stopPropagation(),e.openHome(t)}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-home-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Home")])],1)],1),r("v-list-item",{on:{click:function(t){return t.stopPropagation(),e.openLogin(t)}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-account-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Login")])],1)],1),r("v-list-item",{on:{click:function(t){return t.stopPropagation(),e.openRegister(t)}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-lock-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Register")])],1)],1)],1)],1),r("v-content",[r("router-view",{on:{errorMsg:e.onError,successMsg:e.onSuccess}})],1),r("v-snackbar",{attrs:{color:e.snackbarColor,outline:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" "),r("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("OK")])],1)],1)},i=[],o={name:"App",methods:{onError:function(e){this.snackbar=!0,this.snackbarText=e,this.snackbarColor="error"},onSuccess:function(e){this.snackbar=!0,this.snackbarText=e,this.snackbarColor="success"},openLogin:function(){this.drawer=!1,this.$router.push("/login")},openRegister:function(){this.drawer=!1,this.$router.push("/register")},openHome:function(){this.drawer=!1,this.$router.push("/")}},data:function(){return{drawer:null,snackbar:!1,snackbarText:"",snackbarColor:"info"}}},s=o,c=(r("fec4"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),p=r("40dc"),f=r("5bc1"),v=r("8336"),m=r("a75b"),g=r("ce7e"),h=r("132d"),b=r("8860"),k=r("da13"),y=r("5d23"),w=r("34c3"),_=r("f774"),C=r("2db4"),x=r("2fa4"),S=Object(c["a"])(s,a,i,!1,null,"34a9027a",null),V=S.exports;u()(S,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VContent:m["a"],VDivider:g["a"],VIcon:h["a"],VList:b["a"],VListItem:k["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:_["a"],VSnackbar:C["a"],VSpacer:x["a"]});r("5363"),r("d3b7");var P=r("8c4f"),L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",e._l(e.posts,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[r("v-card-title",[e._v(e._s(t.title))]),r("v-card-text",{staticClass:"text--primary"},[r("div",[e._v(e._s(t.description))])]),r("v-card-actions",[r("v-btn",{attrs:{color:"orange",text:""}},[e._v("Share")]),r("v-btn",{attrs:{color:"orange",text:""}},[e._v("Open")])],1)],1)],1)})),1),e.sheet?e._e():r("v-btn",{attrs:{fab:"",fixed:"",bottom:"",right:"",loading:e.cameraLoading},on:{click:function(t){return t.stopPropagation(),e.initCamera(t)}}},[r("v-icon",[e._v("mdi-plus")])],1),r("transition",{attrs:{name:"fade-up"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.sheet,expression:"sheet"}],staticClass:"camera-overlay"},[r("v-btn",{staticClass:"mt-6 camera-back-btn",attrs:{absolute:"",left:"",fab:"",color:"darkgray",elevation:"10"},on:{click:function(t){e.sheet=!1}}},[r("v-icon",[e._v("mdi-close")])],1),r("v-btn",{staticClass:"mt-6 camera-capture-btn",attrs:{absolute:"",fab:"",color:"darkgray",elevation:"10"},on:{click:e.captureImage}},[r("v-icon",[e._v("mdi-camera")])],1),r("video",{ref:"video",staticClass:"camera-feed",on:{playing:function(t){return t.stopPropagation(),e.onCameraFeedPlaying(t)}}})],1)])],1)},I=[],O=(r("4160"),r("159b"),r("59ca")),E=r.n(O),T=(r("66ce"),{db:E.a.initializeApp({apiKey:"AIzaSyD4DA6n10rK3wFkvrIGGGj2OLST8sVCe8E",authDomain:"pictshare-vue.firebaseapp.com",databaseURL:"https://pictshare-vue.firebaseio.com",projectId:"pictshare-vue",storageBucket:"pictshare-vue.appspot.com",messagingSenderId:"413048072789",appId:"1:413048072789:web:7ed1252f398a44fccf02dc"}).database()}),j={name:"Home",data:function(){return{posts:[],sheet:!1,cameraLoading:!1,mediaStream:null}},watch:{sheet:function(e){if(!1===e&&this.mediaStream){var t=this.mediaStream.getTracks();t.forEach((function(e){e.stop()}))}}},methods:{openUpload:function(){this.$router.push("/upload")},initCamera:function(){this.requestStream()},requestStream:function(){var e=this;if(void 0!==cordova){var t=cordova.plugins.permissions;t.requestPermission(t.CAMERA,(function(t){t.hasPermission?(e.cameraLoading=!0,e.startStream(e.$refs.video)):e.$emit("errorMsg","Kamera-Berechtigung fehlt")}),(function(){e.$emit("errorMsg","Kamera-Berechtigung fehlt")}))}else e.cameraLoading=!0,e.startStream(this.$refs.video)},onCameraFeedPlaying:function(){this.cameraLoading&&(this.sheet=!0,this.cameraLoading=!1)},startStream:function(e){var t=this;navigator.mediaDevices.enumerateDevices().then((function(e){var r=[0,0],n=0;e.forEach((function(e){"videoinput"===e.kind&&(r[n++]=e.deviceId)}));var a={deviceId:{exact:0!==r[1]?r[1]:r[0]}};navigator.mediaDevices.getUserMedia({video:a}).then((function(e){t.mediaStream=e,t.$refs.video.srcObject=e,t.$refs.video.play()})).catch((function(e){t.$emit("errorMsg","Fehler: ".concat(e)),t.cameraLoading=!1}))}))},captureImage:function(){}},firebase:{posts:T.db.ref("posts")}},A=j,$=(r("21bb"),r("b0af")),M=r("99d9"),B=r("62ad"),D=r("a523"),N=r("0fd9"),K=Object(c["a"])(A,L,I,!1,null,null,null),R=K.exports;u()(K,{VBtn:v["a"],VCard:$["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCol:B["a"],VContainer:D["a"],VIcon:h["a"],VRow:N["a"]}),n["a"].use(P["a"]);var q=[{path:"/",name:"home",component:R},{path:"/login",name:"login",component:function(){return Promise.all([r.e("login~register"),r.e("login")]).then(r.bind(null,"d4e9"))}},{path:"/register",name:"register",component:function(){return Promise.all([r.e("login~register"),r.e("register")]).then(r.bind(null,"d55a"))}},{path:"/upload",name:"upload",component:function(){return r.e("upload").then(r.bind(null,"2679"))}}],F=new P["a"]({routes:q}),H=F,U=r("f309"),G=r("0fe0"),z=r.n(G);n["a"].use(U["a"]);var J=new U["a"]({lang:{locales:{de:z.a},current:"de"},icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:"#2ebf91",secondary:"#8360c3",accent:"#76d275",error:"#b71c1c"}}}}),Q=(r("d5e8"),r("0ff2"));n["a"].use(Q["a"]),n["a"].config.productionTip=!1,new n["a"]({router:H,vuetify:J,render:function(e){return e(V)}}).$mount("#app")},"90ee":function(e,t,r){},d63f:function(e,t,r){},fec4:function(e,t,r){"use strict";var n=r("90ee"),a=r.n(n);a.a}});
//# sourceMappingURL=app.76d85fec.js.map