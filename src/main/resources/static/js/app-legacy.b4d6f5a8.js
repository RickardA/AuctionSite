(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"6baa7db9"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}r[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c18":function(t,e,n){},1717:function(t,e,n){"use strict";var a=n("fb2b"),r=n.n(a);r.a},"217a":function(t,e,n){"use strict";var a=n("df31"),r=n.n(a);r.a},2541:function(t,e,n){"use strict";var a=n("6066"),r=n.n(a);r.a},"4fb8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["default"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar"),n("Popup"),n("main",[n("router-view")],1),n("BottomNav"),n("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},c=[],l={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=l,d=n("2877"),m=n("6544"),p=n.n(m),f=n("a523"),h=n("0e8f"),v=n("adda"),g=n("a722"),b=Object(d["a"])(u,o,c,!1,null,null,null),y=b.exports;p()(b,{VContainer:f["a"],VFlex:h["a"],VImg:v["a"],VLayout:g["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.togglePopup(e)}},model:{value:t.popupState,callback:function(e){t.popupState=e},expression:"popupState"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:t.togglePopup}},[n("v-icon",[t._v("close")])],1),n("v-toolbar-title",[t._v("Sign In/Sign Up")])],1),n("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("SignInForm"),n("SignUpForm")],1)],1)],1)],1)],1)},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm6:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Sign In")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")]),n("v-alert",{attrs:{value:t.displayError,color:"error",icon:"warning",outline:""}},[t._v("Something went wrong, please try again")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitSignIn}},[t._v("Sign In")])],1)],1)],1)},j=[],I=n("2d1f"),V=n.n(I),C=(n("6762"),n("2fdb"),n("96cf"),n("3b8d")),S="http://localhost:8080/",O={name:"signInForm",data:function(){return{displayError:!1,email:"",password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=10||"Password must be 10 characters or more"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{submitSignIn:function(){if(this.showErrorMessage(!1),this.$refs.form.validate()){var t={username:this.email,password:this.password};this.makeSignInRequest(t)}},makeSignInRequest:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(S+"login",{method:"POST",body:this.transformRequest(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:n=t.sent,a=!n.url.includes("error"),!0===a?(this.showErrorMessage(!1),this.setUserLoggedIn(),this.$refs.form.reset()):!1===a&&this.showErrorMessage(!0);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setUserLoggedIn:function(){this.$store.commit("toggleLogin",!0),this.$store.commit("togglePopup",!1)},showErrorMessage:function(t){this.displayError=t},transformRequest:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return V()(t).map(function(t){return"".concat(encodeURIComponent(t[0]),"=").concat(encodeURIComponent(t[1]))}).join("&")}}},k=O,T=n("0798"),A=n("8336"),D=n("99d9"),R=n("12b2"),P=n("4bd4"),B=n("9910"),E=n("2677"),$=Object(d["a"])(k,_,j,!1,null,"54e38c9a",null),F=$.exports;p()($,{VAlert:T["a"],VBtn:A["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:R["a"],VContainer:f["a"],VFlex:h["a"],VForm:P["a"],VLayout:g["a"],VSpacer:B["a"],VTextField:E["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm6:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Register")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Legal first name*",required:"",rules:t.nameRules},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Legal last name*",required:"",rules:t.nameRules},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")]),n("v-alert",{attrs:{value:t.responseError,color:"error",icon:"warning",outline:""}},[t._v("\n    There's already an account registered with this email\n  ")]),n("v-alert",{attrs:{value:t.responseSuccess,color:"success",icon:"check_circle",outline:""}},[t._v("\n    Account registered\n  ")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)],1)},N=[],M=n("f499"),q=n.n(M),U="http://localhost:8080/api/",z={name:"signUpForm",methods:{submitForm:function(){if(this.responseSuccess=!1,this.responseError=!1,this.$refs.form.validate()){var t={firstName:this.firstName,lastName:this.lastName,mail:this.email,password:this.password};this.registerUser(t)}},registerUser:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(U+"user/",{method:"POST",body:q()(e),headers:{"Content-Type":"application/json"}});case 2:return this.response=t.sent,t.next=5,this.response.json();case 5:this.response=t.sent,this.responseSuccess=this.response,this.responseError=!this.response,1==this.response&&this.$refs.form.reset();case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},data:function(){return{response:null,responseSuccess:!1,responseError:!1,firstName:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],lastName:"",email:"",password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=10||"Password must be 10 characters or more"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}}},W=z,H=Object(d["a"])(W,L,N,!1,null,null,null),Q=H.exports;p()(H,{VAlert:T["a"],VBtn:A["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:R["a"],VContainer:f["a"],VFlex:h["a"],VForm:P["a"],VLayout:g["a"],VSpacer:B["a"],VTextField:E["a"]});var Y={name:"popup",computed:{popupState:function(){return this.$store.getters.getPopupState}},components:{SignInForm:F,SignUpForm:Q},methods:{togglePopup:function(){this.$store.commit("togglePopup",!1)}}},J=Y,X=n("b0af"),K=n("169a"),G=n("132d"),Z=n("71d9"),tt=n("2a7f"),et=Object(d["a"])(J,x,w,!1,null,null,null),nt=et.exports;p()(et,{VBtn:A["a"],VCard:X["a"],VDialog:K["a"],VFlex:h["a"],VIcon:G["a"],VLayout:g["a"],VToolbar:Z["a"],VToolbarTitle:tt["b"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"hidden-sm-and-down",attrs:{fixed:""}},[n("v-toolbar-side-icon",{attrs:{to:"/"}},[n("v-icon",[t._v("home")])],1),n("v-toolbar-title",[t._v("KOOL AUCTIONS COmPANY")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/auctions"}},[t._v("Auctions")]),t.isLoggedIn?n("v-btn",{attrs:{flat:""},on:{click:t.togglePopup}},[t._v("Login/Register")]):n("v-btn",{attrs:{flat:""},on:{click:t.signOut}},[t._v("Sign Out")]),n("v-btn",{attrs:{flat:""}},[t._v("Link Three")])],1)],1)},rt=[],st="http://localhost:8080/",it={name:"NavBar",components:{Popup:nt},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)},signOut:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(st+"logout",{method:"POST"});case 2:e=t.sent,n=!e.url.includes("error"),console.log("the logout result is:",n);case 5:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},computed:{isLoggedIn:function(){return this.$store.getters.getLoginState}}},ot=it,ct=(n("1717"),n("706c")),lt=Object(d["a"])(ot,at,rt,!1,null,"11a22802",null),ut=lt.exports;p()(lt,{VBtn:A["a"],VIcon:G["a"],VSpacer:B["a"],VToolbar:Z["a"],VToolbarItems:tt["a"],VToolbarSideIcon:ct["a"],VToolbarTitle:tt["b"]});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"hidden-md-and-up",attrs:{height:"55px",flat:""}},[n("v-bottom-nav",{staticClass:"hidden-md-and-up",attrs:{value:!0,fixed:"",color:"white"}},[n("v-btn",{attrs:{color:"teal",flat:"",to:"/",value:"recent"}},[n("span",{staticClass:"pt-1"},[t._v("Home")]),n("font-awesome-icon",{attrs:{icon:"home",size:"2x"}})],1),n("v-btn",{attrs:{color:"teal",flat:"",to:"/auctions",value:"favorites"}},[n("span",{staticClass:"pt-1"},[t._v("Auctions")]),n("font-awesome-icon",{attrs:{icon:"gavel",size:"2x"}})],1),n("v-btn",{attrs:{color:"teal",flat:"",value:"nearby"},on:{click:t.togglePopup}},[n("span",{staticClass:"pt-1"},[t._v("Login/Register")]),n("font-awesome-icon",{attrs:{icon:"user",size:"2x"}})],1)],1)],1)},mt=[],pt={name:"BottomNav",components:{Popup:nt},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)}}},ft=pt,ht=(n("c09f"),n("887a")),vt=Object(d["a"])(ft,dt,mt,!1,null,"eb213ea4",null),gt=vt.exports;p()(vt,{VBottomNav:ht["a"],VBtn:A["a"],VCard:X["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",height:"auto"}},[n("v-card",{staticClass:"indigo lighten-1 white--text text-xs-center flex",attrs:{flat:"",tile:""}},[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-card-text",[n("p",[t._v("Contact: info@auctionsite.com")])])],1),n("v-flex",{attrs:{xs6:""}},[n("v-card-text",[n("v-btn",{staticClass:"mx-3",attrs:{dark:"",small:"",icon:""}},[n("font-awesome-icon",{attrs:{size:"2x",icon:["fab","twitter"]}})],1),n("v-btn",{staticClass:"mx-3",attrs:{dark:"",small:"",icon:""}},[n("font-awesome-icon",{attrs:{size:"2x",icon:["fab","facebook"]}})],1),n("v-btn",{staticClass:"mx-3",attrs:{dark:"",small:"",icon:""}},[n("font-awesome-icon",{attrs:{size:"2x",icon:["fab","pinterest"]}})],1),n("v-btn",{staticClass:"mx-3",attrs:{dark:"",small:"",icon:""}},[n("font-awesome-icon",{attrs:{size:"2x",icon:["fab","instagram"]}})],1)],1)],1)],1)],1),n("v-divider"),n("v-card-text",{staticClass:"white--text text-center"},[t._v("\n            ©2019 - "),n("strong",[t._v("Auction Site")])])],1)],1)},yt=[],xt={data:function(){return{}}},wt=xt,_t=n("ce7e"),jt=n("553a"),It=Object(d["a"])(wt,bt,yt,!1,null,null,null),Vt=It.exports;p()(It,{VBtn:A["a"],VCard:X["a"],VCardText:D["b"],VContainer:f["a"],VDivider:_t["a"],VFlex:h["a"],VFooter:jt["a"],VLayout:g["a"]});var Ct={name:"App",components:{HelloWorld:y,Popup:nt,NavBar:ut,BottomNav:gt,Footer:Vt},created:function(){},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)}}},St=Ct,Ot=n("7496"),kt=Object(d["a"])(St,s,i,!1,null,null,null),Tt=kt.exports;p()(kt,{VApp:Ot["a"]});var At=n("8c4f"),Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},Rt=[],Pt={components:{HelloWorld:y}},Bt=Pt,Et=Object(d["a"])(Bt,Dt,Rt,!1,null,null,null),$t=Et.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[n("h1",[t._v("All Auctions")]),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.auctions,function(t){return n("AuctionCard",{key:t.itemID,attrs:{auctionObject:t}})}),1),n("v-btn",{attrs:{id:"scroll-button",fab:"",fixed:"",bottom:"",right:""},on:{click:t.scrollToTop}},[n("font-awesome-icon",{attrs:{icon:"arrow-up"}})],1)],1)},Lt=[],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{"mt-2":"","xs-1":"","ml-1":"","mr-1":""}},[n("v-card",[n("div",{staticClass:"hover",on:{click:t.routeToAuction}},[n("v-img",{attrs:{src:t.auctionObject.image,height:"200px"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v(t._s(t.auctionObject.title))]),n("span",{staticClass:"grey--text"},[t._v("Current Bid: $"+t._s(t.auctionObject.currentBid))]),n("br"),n("span",{staticClass:"grey--text"},[t._v("Auction ends: "+t._s(t.auctionObject.deadline))])])])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n        "+t._s(t.auctionObject.description)+"\n      ")])],1)],1)],1)},Mt=[],qt={name:"AuctionCard",data:function(){return{show:!1}},props:{auctionObject:null},methods:{routeToAuction:function(){this.$router.push("/auction?"+this.auctionObject.itemID)}}},Ut=qt,zt=(n("2541"),n("0789")),Wt=Object(d["a"])(Ut,Nt,Mt,!1,null,null,null),Ht=Wt.exports;p()(Wt,{VBtn:A["a"],VCard:X["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:R["a"],VFlex:h["a"],VIcon:G["a"],VImg:v["a"],VSlideYTransition:zt["c"],VSpacer:B["a"]});var Qt={name:"Auctions",computed:{auctions:function(){return this.$store.getters.getAuctions}},components:{AuctionCard:Ht},methods:{scrollToTop:function(){window.scrollTo(top)}}},Yt=Qt,Jt=(n("217a"),Object(d["a"])(Yt,Ft,Lt,!1,null,"5a1a9fa2",null)),Xt=Jt.exports;p()(Jt,{VBtn:A["a"],VFlex:h["a"],VLayout:g["a"]});var Kt=function(){var t,e,a=this,r=a.$createElement,s=a._self._c||r;return a.loading?s("div",[a._v("\r\n   Loading...\r\n")]):s("div",[s("div",[a._v("this is just an exaample the id of the clicked auction is "+a._s(a.auction.itemID)+", title is "+a._s(a.auction.title))]),s("v-card",[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm1":""}},[s("v-item",[s("v-card",{class:(t={},t["elevation-8"]=!0,t)},[s("v-img",{staticClass:"my-5",attrs:{src:n("cf05"),"aspect-ratio":16/9,contain:"",height:"35vh",width:"90%"}})],1)],1),s("v-item",[s("v-card",{class:(e={},e["elevation-8"]=!0,e)},[s("v-img",{staticClass:"my-5",attrs:{src:n("cf05"),"aspect-ratio":16/9,contain:"",height:"35vh",width:"90%"}})],1)],1)],1)],1)],1)},Gt=[],Zt=(n("7514"),n("a481"),{name:"auction",data:function(){return{choosenAuctionID:"",auction:null,loading:!0}},methods:{getUrlQuery:function(){this.urlQuery={};var t=window.location.href;t=t.substr(t.lastIndexOf("?")),this.choosenAuctionID=t.replace("?",""),console.log(this.choosenAuctionID)},getAuction:function(){this.auction=this.$store.getters.getAuctions.find(this.isAuction),this.loading=!1},isAuction:function(t){return t.itemID===this.choosenAuctionID}},mounted:function(){this.getUrlQuery(),this.getAuction()}}),te=Zt,ee=n("d903"),ne=Object(d["a"])(te,Kt,Gt,!1,null,null,null),ae=ne.exports;p()(ne,{VCard:X["a"],VFlex:h["a"],VImg:v["a"],VItem:ee["a"]});var re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DrawingBoard")},se=[],ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tyvärr så verkar något vara fel just nu, men rita här sålänge")]),n("canvas",{attrs:{id:"canvas",width:"800px",height:"800px"},on:{mousedown:t.handleMouseDown,mouseup:t.handleMouseUp,mousemove:t.handleMouseMove}})])},oe=[],ce={name:"drawingBoard",data:function(){return{mouse:{current:{x:0,y:0},previous:{x:0,y:0},down:!1}}},computed:{currentMouse:function(){var t=document.getElementById("canvas"),e=t.getBoundingClientRect();return{x:this.mouse.current.x-e.left,y:this.mouse.current.y-e.top}}},methods:{draw:function(t){if(this.mouse.down){var e=document.getElementById("canvas"),n=e.getContext("2d");n.clearRect(0,0,800,800),n.lineTo(this.currentMouse.x,this.currentMouse.y),n.strokeStyle="#F63E02",n.lineWidth=2,n.stroke()}},handleMouseDown:function(t){this.mouse.down=!0,this.mouse.current={x:t.pageX,y:t.pageY};var e=document.getElementById("canvas"),n=e.getContext("2d");n.moveTo(this.currentMouse.x,this.currentMouse.y)},handleMouseUp:function(){this.mouse.down=!1},handleMouseMove:function(t){this.mouse.current={x:t.pageX,y:t.pageY},this.draw(t)}},ready:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.translate(.5,.5),e.imageSmoothingEnabled=!1}},le=ce,ue=(n("b886"),Object(d["a"])(le,ie,oe,!1,null,"53f40bf3",null)),de=ue.exports,me={name:"errorPage",components:{DrawingBoard:de}},pe=me,fe=Object(d["a"])(pe,re,se,!1,null,null,null),he=fe.exports;a["default"].use(At["a"]);var ve=new At["a"]({mode:"history",routes:[{path:"/",name:"home",component:$t},{path:"/auctions",name:"auctions",component:Xt},{path:"/auction",name:"auction",component:ae},{path:"/error",name:"errorPage",component:he},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),ge=n("2f62");a["default"].use(ge["a"]);var be="http://localhost:8080/api/",ye=new ge["a"].Store({state:{auctions:[{itemID:"12375463252345234092349041",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236545432430020345032134241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233766574564876845584241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"121234534255645353441243433241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236433454364535353241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1237645763453123241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123332456457654345235241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332358387902532441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12339087654323456786545435232341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233122345678654322341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332376858756463441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233243534341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332398798741",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233212123341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123765432341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233234234561",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}],showPopup:!1,isLoggedIn:!1},mutations:{setPosts:function(t,e){t.auctions=e},togglePopup:function(t,e){t.showPopup=e},toggleLogin:function(t,e){t.isLoggedIn=e}},getters:{getAuctions:function(t){return t.auctions},getPopupState:function(t){return t.showPopup},getLoginState:function(t){return t.isLoggedIn}},actions:{getAuctionsFromDB:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("printing from getAuctionsFromDB"),t.next=3,fetch(be+"auctions/");case 3:return t.next=5,t.sent.json();case 5:e=t.sent,this.commit("setAuctions",e);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}),xe=n("ce5b"),we=n.n(xe),_e=(n("bf40"),n("ecee")),je=n("c074"),Ie=n("f2d1"),Ve=n("ad3d");a["default"].config.productionTip=!1,a["default"].use(we.a),_e["c"].add(je["a"]),_e["c"].add(Ie["a"]),a["default"].component("font-awesome-icon",Ve["a"]),new a["default"]({router:ve,store:ye,render:function(t){return t(Tt)}}).$mount("#app")},6066:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},b886:function(t,e,n){"use strict";var a=n("4fb8"),r=n.n(a);r.a},c09f:function(t,e,n){"use strict";var a=n("0c18"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},df31:function(t,e,n){},fb2b:function(t,e,n){}});
//# sourceMappingURL=app-legacy.b4d6f5a8.js.map