(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"6baa7db9"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}a[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c18":function(t,e,n){},2541:function(t,e,n){"use strict";var r=n("6066"),a=n.n(r);a.a},4229:function(t,e,n){"use strict";var r=n("49fb"),a=n.n(r);a.a},"49fb":function(t,e,n){},"4fb8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["default"].use(a["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar"),n("Popup"),n("main",[n("router-view")],1),n("BottomNav")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},c=[],l={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=l,d=n("2877"),m=n("6544"),p=n.n(m),f=n("a523"),h=n("0e8f"),v=n("adda"),g=n("a722"),b=Object(d["a"])(u,o,c,!1,null,null,null),y=b.exports;p()(b,{VContainer:f["a"],VFlex:h["a"],VImg:v["a"],VLayout:g["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.popupState,callback:function(e){t.popupState=e},expression:"popupState"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:t.togglePopup}},[n("v-icon",[t._v("close")])],1),n("v-toolbar-title",[t._v("Sign In/Sign Up")])],1),n("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("SignInForm"),n("SignUpForm")],1)],1)],1)],1)],1)},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm6:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Sign In")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitSignIn}},[t._v("Sign In")])],1)],1)],1)},j=[],I=n("2d1f"),S=n.n(I),V=(n("6762"),n("2fdb"),"http://localhost:8080/api/"),T={name:"signInForm",data:function(){return{response:null,responseSuccess:!1,responseError:!1,email:"",password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=10||"Password must be 10 characters or more"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{submitSignIn:function(){if(this.$refs.form.validate()){var t={email:this.email,password:this.password};this.sendSignInRequest(t)}},sendSignInRequest:function(t){fetch(V+"login",{method:"POST",body:this.transformRequest(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){var e=!t.url.includes("error");console.log("the login result is:",e)})},transformRequest:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S()(t).map(function(t){return"".concat(encodeURIComponent(t[0]),"=").concat(encodeURIComponent(t[1]))}).join("&")}}},O=T,C=n("8336"),A=n("99d9"),D=n("12b2"),k=n("4bd4"),B=n("9910"),R=n("2677"),P=Object(d["a"])(O,_,j,!1,null,"52f927af",null),E=P.exports;p()(P,{VBtn:C["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:D["a"],VContainer:f["a"],VFlex:h["a"],VForm:k["a"],VLayout:g["a"],VSpacer:B["a"],VTextField:R["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm6:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Register")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Legal first name*",required:"",rules:t.nameRules},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Legal last name*",required:"",rules:t.nameRules},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")]),n("v-alert",{attrs:{value:t.responseError,color:"error",icon:"warning",outline:""}},[t._v("There's already an account registered with this email")]),n("v-alert",{attrs:{value:t.responseSuccess,color:"success",icon:"check_circle",outline:""}},[t._v("Account registered")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)],1)},$=[],F=n("f499"),q=n.n(F),M=(n("96cf"),n("3b8d")),L="http://localhost:8080/api/",U={name:"signUpForm",methods:{submitForm:function(){if(this.$refs.form.validate()){this.responseSuccess=!1,this.responseError=!1;var t={firstName:this.firstName,lastName:this.lastName,mail:this.email,password:this.password};console.log(t),this.registerUser(t)}},registerUser:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("printing from addUseerToDB"),t.next=3,fetch(L+"user/",{method:"POST",body:q()(e),headers:{"Content-Type":"application/json"}});case 3:return this.response=t.sent,t.next=6,this.response.json();case 6:this.response=t.sent,this.responseSuccess=this.response,this.responseError=!this.response,console.log(this.response);case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},data:function(){return{response:null,responseSuccess:!1,responseError:!1,firstName:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],lastName:"",email:"",password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=10||"Password must be 10 characters or more"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}}},W=U,z=n("0798"),H=Object(d["a"])(W,N,$,!1,null,null,null),Q=H.exports;p()(H,{VAlert:z["a"],VBtn:C["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:D["a"],VContainer:f["a"],VFlex:h["a"],VForm:k["a"],VLayout:g["a"],VSpacer:B["a"],VTextField:R["a"]});var Y={name:"popup",computed:{popupState:function(){return this.$store.getters.getPopupState}},components:{SignInForm:E,SignUpForm:Q},methods:{togglePopup:function(){this.$store.commit("togglePopup",!1)}}},J=Y,X=n("b0af"),K=n("169a"),G=n("132d"),Z=n("71d9"),tt=n("2a7f"),et=Object(d["a"])(J,x,w,!1,null,null,null),nt=et.exports;p()(et,{VBtn:C["a"],VCard:X["a"],VDialog:K["a"],VFlex:h["a"],VIcon:G["a"],VLayout:g["a"],VToolbar:Z["a"],VToolbarTitle:tt["b"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"hidden-sm-and-down",attrs:{fixed:""}},[n("v-toolbar-side-icon",[n("router-link",{attrs:{to:"/"}},[n("v-icon",[t._v("home")])],1)],1),n("v-toolbar-title",[t._v("KOOL AUCTIONS COmPANY")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:""}},[n("router-link",{attrs:{to:"/auctions"}},[t._v("Auctions")])],1),n("v-btn",{attrs:{flat:""},on:{click:t.togglePopup}},[t._v("Login/Register")]),n("v-btn",{attrs:{flat:""}},[t._v("Link Three")])],1)],1)},at=[],st={name:"NavBar",components:{Popup:nt},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)}}},it=st,ot=(n("4229"),n("706c")),ct=Object(d["a"])(it,rt,at,!1,null,"c1abf2e8",null),lt=ct.exports;p()(ct,{VBtn:C["a"],VIcon:G["a"],VSpacer:B["a"],VToolbar:Z["a"],VToolbarItems:tt["a"],VToolbarSideIcon:ot["a"],VToolbarTitle:tt["b"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"hidden-md-and-up",attrs:{height:"55px",flat:""}},[n("v-bottom-nav",{staticClass:"hidden-md-and-up",attrs:{value:!0,fixed:"",color:"white"}},[n("v-btn",{attrs:{color:"teal",flat:"",to:"/",value:"recent"}},[n("span",{staticClass:"pt-1"},[t._v("Home")]),n("font-awesome-icon",{attrs:{icon:"home",size:"2x"}})],1),n("v-btn",{attrs:{color:"teal",flat:"",to:"/auctions",value:"favorites"}},[n("span",{staticClass:"pt-1"},[t._v("Auctions")]),n("font-awesome-icon",{attrs:{icon:"gavel",size:"2x"}})],1),n("v-btn",{attrs:{color:"teal",flat:"",value:"nearby"},on:{click:t.togglePopup}},[n("span",{staticClass:"pt-1"},[t._v("Login/Register")]),n("font-awesome-icon",{attrs:{icon:"user",size:"2x"}})],1)],1)],1)},dt=[],mt={name:"BottomNav",components:{Popup:nt},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)}}},pt=mt,ft=(n("c09f"),n("887a")),ht=Object(d["a"])(pt,ut,dt,!1,null,"eb213ea4",null),vt=ht.exports;p()(ht,{VBottomNav:ft["a"],VBtn:C["a"],VCard:X["a"]});var gt={name:"App",components:{HelloWorld:y,Popup:nt,NavBar:lt,BottomNav:vt},created:function(){},methods:{togglePopup:function(){this.$store.commit("togglePopup",!0)}}},bt=gt,yt=n("7496"),xt=Object(d["a"])(bt,s,i,!1,null,null,null),wt=xt.exports;p()(xt,{VApp:yt["a"]});var _t=n("8c4f"),jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},It=[],St={components:{HelloWorld:y}},Vt=St,Tt=Object(d["a"])(Vt,jt,It,!1,null,null,null),Ot=Tt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[n("h1",[t._v("All Auctions")]),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.auctions,function(t){return n("AuctionCard",{key:t.itemID,attrs:{auctionObject:t}})}),1),n("v-btn",{attrs:{fab:"",fixed:"",bottom:"",right:""},on:{click:t.scrollToTop}},[n("font-awesome-icon",{attrs:{icon:"arrow-up"}})],1)],1)},At=[],Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{"mt-2":"","xs-1":"","ml-1":"","mr-1":""}},[n("v-card",[n("div",{staticClass:"hover",on:{click:t.routeToAuction}},[n("v-img",{attrs:{src:t.auctionObject.image,height:"200px"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v(t._s(t.auctionObject.title))]),n("span",{staticClass:"grey--text"},[t._v("Current Bid: $"+t._s(t.auctionObject.currentBid))]),n("br"),n("span",{staticClass:"grey--text"},[t._v("Auction ends: "+t._s(t.auctionObject.deadline))])])])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n        "+t._s(t.auctionObject.description)+"\n      ")])],1)],1)],1)},kt=[],Bt={name:"AuctionCard",data:function(){return{show:!1}},props:{auctionObject:null},methods:{routeToAuction:function(){this.$router.push("/auction?"+this.auctionObject.itemID)}}},Rt=Bt,Pt=(n("2541"),n("0789")),Et=Object(d["a"])(Rt,Dt,kt,!1,null,null,null),Nt=Et.exports;p()(Et,{VBtn:C["a"],VCard:X["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:D["a"],VFlex:h["a"],VIcon:G["a"],VImg:v["a"],VSlideYTransition:Pt["c"],VSpacer:B["a"]});var $t={name:"Auctions",computed:{auctions:function(){return this.$store.getters.getAuctions}},components:{AuctionCard:Nt},methods:{scrollToTop:function(){window.scrollTo(top)}}},Ft=$t,qt=Object(d["a"])(Ft,Ct,At,!1,null,null,null),Mt=qt.exports;p()(qt,{VBtn:C["a"],VFlex:h["a"],VLayout:g["a"]});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[t._v("\r\n   Loading...\r\n")]):n("div",[n("div",[t._v("this is just an exaample the id of the clicked auction is "+t._s(t.auction.itemID)+", title is "+t._s(t.auction.title))])])},Ut=[],Wt=(n("7514"),n("a481"),{name:"auction",data:function(){return{choosenAuctionID:"",auction:null,loading:!0}},methods:{getUrlQuery:function(){this.urlQuery={};var t=window.location.href;t=t.substr(t.lastIndexOf("?")),this.choosenAuctionID=t.replace("?",""),console.log(this.choosenAuctionID)},getAuction:function(){this.auction=this.$store.getters.getAuctions.find(this.isAuction),this.loading=!1},isAuction:function(t){return t.itemID===this.choosenAuctionID}},mounted:function(){this.getUrlQuery(),this.getAuction()}}),zt=Wt,Ht=Object(d["a"])(zt,Lt,Ut,!1,null,null,null),Qt=Ht.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DrawingBoard")},Jt=[],Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tyvärr så verkar något vara fel just nu, men rita här sålänge")]),n("canvas",{attrs:{id:"canvas",width:"800px",height:"800px"},on:{mousedown:t.handleMouseDown,mouseup:t.handleMouseUp,mousemove:t.handleMouseMove}})])},Kt=[],Gt={name:"drawingBoard",data:function(){return{mouse:{current:{x:0,y:0},previous:{x:0,y:0},down:!1}}},computed:{currentMouse:function(){var t=document.getElementById("canvas"),e=t.getBoundingClientRect();return{x:this.mouse.current.x-e.left,y:this.mouse.current.y-e.top}}},methods:{draw:function(t){if(this.mouse.down){var e=document.getElementById("canvas"),n=e.getContext("2d");n.clearRect(0,0,800,800),n.lineTo(this.currentMouse.x,this.currentMouse.y),n.strokeStyle="#F63E02",n.lineWidth=2,n.stroke()}},handleMouseDown:function(t){this.mouse.down=!0,this.mouse.current={x:t.pageX,y:t.pageY};var e=document.getElementById("canvas"),n=e.getContext("2d");n.moveTo(this.currentMouse.x,this.currentMouse.y)},handleMouseUp:function(){this.mouse.down=!1},handleMouseMove:function(t){this.mouse.current={x:t.pageX,y:t.pageY},this.draw(t)}},ready:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.translate(.5,.5),e.imageSmoothingEnabled=!1}},Zt=Gt,te=(n("b886"),Object(d["a"])(Zt,Xt,Kt,!1,null,"53f40bf3",null)),ee=te.exports,ne={name:"errorPage",components:{DrawingBoard:ee}},re=ne,ae=Object(d["a"])(re,Yt,Jt,!1,null,null,null),se=ae.exports;r["default"].use(_t["a"]);var ie=new _t["a"]({mode:"history",routes:[{path:"/",name:"home",component:Ot},{path:"/auctions",name:"auctions",component:Mt},{path:"/auction",name:"auction",component:Qt},{path:"/error",name:"errorPage",component:se},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),oe=n("2f62");r["default"].use(oe["a"]);var ce="http://localhost:8080/api/",le=new oe["a"].Store({state:{auctions:[{itemID:"12375463252345234092349041",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236545432430020345032134241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233766574564876845584241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"121234534255645353441243433241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236433454364535353241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1237645763453123241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123332456457654345235241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332358387902532441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12339087654323456786545435232341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233122345678654322341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332376858756463441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233243534341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332398798741",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233212123341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123765432341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233234234561",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}],showPopup:!1},mutations:{setPosts:function(t,e){t.auctions=e},togglePopup:function(t,e){t.showPopup=e}},getters:{getAuctions:function(t){return t.auctions},getPopupState:function(t){return t.showPopup}},actions:{getAuctionsFromDB:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("printing from getAuctionsFromDB"),t.next=3,fetch(ce+"auctions/");case 3:return t.next=5,t.sent.json();case 5:e=t.sent,this.commit("setAuctions",e);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}),ue=n("ce5b"),de=n.n(ue),me=(n("bf40"),n("ecee")),pe=n("c074"),fe=n("ad3d");r["default"].config.productionTip=!1,r["default"].use(de.a),me["c"].add(pe["a"]),r["default"].component("font-awesome-icon",fe["a"]),new r["default"]({router:ie,store:le,render:function(t){return t(wt)}}).$mount("#app")},6066:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},b886:function(t,e,n){"use strict";var r=n("4fb8"),a=n.n(r);a.a},c09f:function(t,e,n){"use strict";var r=n("0c18"),a=n.n(r);a.a}});
//# sourceMappingURL=app-legacy.e2b896a8.js.map