(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],r[n]&&m.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6baa7db9"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=r[t]=[e,s]});e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");n.type=s,n.request=i,a[1](n)}r[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c18":function(t,e,a){},2541:function(t,e,a){"use strict";var s=a("6066"),r=a.n(s);r.a},4229:function(t,e,a){"use strict";var s=a("49fb"),r=a.n(s);r.a},"49fb":function(t,e,a){},"4fb8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("bb71");a("da64");s["default"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavBar"),a("Popup"),a("main",[a("router-view")],1),a("BottomNav")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),s("v-flex",{attrs:{"mb-4":""}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),s("br"),t._v("please join our online\n        "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-flex",{attrs:{"mb-5":"",xs12:""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},l=[],c={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},u=c,d=a("2877"),m=a("6544"),p=a.n(m),h=a("a523"),v=a("0e8f"),f=a("adda"),g=a("a722"),b=Object(d["a"])(u,o,l,!1,null,null,null),y=b.exports;p()(b,{VContainer:h["a"],VFlex:v["a"],VImg:f["a"],VLayout:g["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.popupState,callback:function(e){t.popupState=e},expression:"popupState"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.togglePopup}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("Sign In/Sign Up")])],1),a("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("SignInForm"),a("SignUpForm")],1)],1)],1)],1)],1)},w=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{sm6:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Sign In")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitSignIn}},[t._v("Sign In")])],1)],1)],1)},j=[];a("ac6a");const I="http://localhost:8080/api/";var S={name:"signInForm",data:()=>({response:null,responseSuccess:!1,responseError:!1,email:"",password:"",passwordRules:[t=>!!t||"Password is required",t=>t&&t.length>=10||"Password must be 10 characters or more"],emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}),methods:{submitSignIn(){if(this.$refs.form.validate()){let t={email:this.email,password:this.password};this.sendSignInRequest(t)}},sendSignInRequest(t){fetch(I+"login",{method:"POST",body:this.transformRequest(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){let e=!t.url.includes("error");console.log("the login result is:",e)})},transformRequest(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(t).map(t=>`${encodeURIComponent(t[0])}=${encodeURIComponent(t[1])}`).join("&")}}},V=S,O=a("8336"),T=a("99d9"),C=a("12b2"),A=a("4bd4"),D=a("9910"),k=a("2677"),B=Object(d["a"])(V,_,j,!1,null,"52f927af",null),P=B.exports;p()(B,{VBtn:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:C["a"],VContainer:h["a"],VFlex:v["a"],VForm:A["a"],VLayout:g["a"],VSpacer:D["a"],VTextField:k["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{sm6:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Register")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Legal first name*",required:"",rules:t.nameRules},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Legal last name*",required:"",rules:t.nameRules},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email*",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password*",type:"password",counter:.5,rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("small",{staticStyle:{color:"red"}},[t._v("*indicates required field")]),a("v-alert",{attrs:{value:t.responseError,color:"error",icon:"warning",outline:""}},[t._v("There's already an account registered with this email")]),a("v-alert",{attrs:{value:t.responseSuccess,color:"success",icon:"check_circle",outline:""}},[t._v("Account registered")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)],1)},E=[],N=a("1da1");const $="http://localhost:8080/api/";var F={name:"signUpForm",methods:{submitForm(){if(this.$refs.form.validate()){this.responseSuccess=!1,this.responseError=!1;let t={firstName:this.firstName,lastName:this.lastName,mail:this.email,password:this.password};console.log(t),this.registerUser(t)}},registerUser(t){var e=this;return Object(N["a"])(function*(){console.log("printing from addUseerToDB"),e.response=yield fetch($+"user/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),e.response=yield e.response.json(),e.responseSuccess=e.response,e.responseError=!e.response,console.log(e.response)})()}},data:()=>({response:null,responseSuccess:!1,responseError:!1,firstName:"",nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"],lastName:"",email:"",password:"",passwordRules:[t=>!!t||"Password is required",t=>t&&t.length>=10||"Password must be 10 characters or more"],emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]})},q=F,M=a("0798"),L=Object(d["a"])(q,R,E,!1,null,null,null),U=L.exports;p()(L,{VAlert:M["a"],VBtn:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:C["a"],VContainer:h["a"],VFlex:v["a"],VForm:A["a"],VLayout:g["a"],VSpacer:D["a"],VTextField:k["a"]});var W={name:"popup",computed:{popupState(){return this.$store.getters.getPopupState}},components:{SignInForm:P,SignUpForm:U},methods:{togglePopup(){this.$store.commit("togglePopup",!1)}}},z=W,H=a("b0af"),Q=a("169a"),Y=a("132d"),J=a("71d9"),X=a("2a7f"),K=Object(d["a"])(z,x,w,!1,null,null,null),G=K.exports;p()(K,{VBtn:O["a"],VCard:H["a"],VDialog:Q["a"],VFlex:v["a"],VIcon:Y["a"],VLayout:g["a"],VToolbar:J["a"],VToolbarTitle:X["b"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"hidden-sm-and-down",attrs:{fixed:""}},[a("v-toolbar-side-icon",[a("router-link",{attrs:{to:"/"}},[a("v-icon",[t._v("home")])],1)],1),a("v-toolbar-title",[t._v("KOOL AUCTIONS COmPANY")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:""}},[a("router-link",{attrs:{to:"/auctions"}},[t._v("Auctions")])],1),a("v-btn",{attrs:{flat:""},on:{click:t.togglePopup}},[t._v("Login/Register")]),a("v-btn",{attrs:{flat:""}},[t._v("Link Three")])],1)],1)},tt=[],et={name:"NavBar",components:{Popup:G},methods:{togglePopup(){this.$store.commit("togglePopup",!0)}}},at=et,st=(a("4229"),a("706c")),rt=Object(d["a"])(at,Z,tt,!1,null,"c1abf2e8",null),it=rt.exports;p()(rt,{VBtn:O["a"],VIcon:Y["a"],VSpacer:D["a"],VToolbar:J["a"],VToolbarItems:X["a"],VToolbarSideIcon:st["a"],VToolbarTitle:X["b"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"hidden-md-and-up",attrs:{height:"55px",flat:""}},[a("v-bottom-nav",{staticClass:"hidden-md-and-up",attrs:{value:!0,fixed:"",color:"white"}},[a("v-btn",{attrs:{color:"teal",flat:"",to:"/",value:"recent"}},[a("span",{staticClass:"pt-1"},[t._v("Home")]),a("font-awesome-icon",{attrs:{icon:"home",size:"2x"}})],1),a("v-btn",{attrs:{color:"teal",flat:"",to:"/auctions",value:"favorites"}},[a("span",{staticClass:"pt-1"},[t._v("Auctions")]),a("font-awesome-icon",{attrs:{icon:"gavel",size:"2x"}})],1),a("v-btn",{attrs:{color:"teal",flat:"",value:"nearby"},on:{click:t.togglePopup}},[a("span",{staticClass:"pt-1"},[t._v("Login/Register")]),a("font-awesome-icon",{attrs:{icon:"user",size:"2x"}})],1)],1)],1)},ot=[],lt={name:"BottomNav",components:{Popup:G},methods:{togglePopup(){this.$store.commit("togglePopup",!0)}}},ct=lt,ut=(a("c09f"),a("887a")),dt=Object(d["a"])(ct,nt,ot,!1,null,"eb213ea4",null),mt=dt.exports;p()(dt,{VBottomNav:ut["a"],VBtn:O["a"],VCard:H["a"]});var pt={name:"App",components:{HelloWorld:y,Popup:G,NavBar:it,BottomNav:mt},created(){},methods:{togglePopup(){this.$store.commit("togglePopup",!0)}}},ht=pt,vt=a("7496"),ft=Object(d["a"])(ht,i,n,!1,null,null,null),gt=ft.exports;p()(ft,{VApp:vt["a"]});var bt=a("8c4f"),yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},xt=[],wt={components:{HelloWorld:y}},_t=wt,jt=Object(d["a"])(_t,yt,xt,!1,null,null,null),It=jt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{sm10:"","offset-sm1":"","offset-xs":"","mt-2":""}},[a("h1",[t._v("All Auctions")]),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.auctions,function(t){return a("AuctionCard",{key:t.itemID,attrs:{auctionObject:t}})}),1),a("v-btn",{attrs:{fab:"",fixed:"",bottom:"",right:""},on:{click:t.scrollToTop}},[a("font-awesome-icon",{attrs:{icon:"arrow-up"}})],1)],1)},Vt=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{"mt-2":"","xs-1":"","ml-1":"","mr-1":""}},[a("v-card",[a("div",{staticClass:"hover",on:{click:t.routeToAuction}},[a("v-img",{attrs:{src:t.auctionObject.image,height:"200px"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.auctionObject.title))]),a("span",{staticClass:"grey--text"},[t._v("Current Bid: $"+t._s(t.auctionObject.currentBid))]),a("br"),a("span",{staticClass:"grey--text"},[t._v("Auction ends: "+t._s(t.auctionObject.deadline))])])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n        "+t._s(t.auctionObject.description)+"\n      ")])],1)],1)],1)},Tt=[],Ct={name:"AuctionCard",data:()=>({show:!1}),props:{auctionObject:null},methods:{routeToAuction(){this.$router.push("/auction?"+this.auctionObject.itemID)}}},At=Ct,Dt=(a("2541"),a("0789")),kt=Object(d["a"])(At,Ot,Tt,!1,null,null,null),Bt=kt.exports;p()(kt,{VBtn:O["a"],VCard:H["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:C["a"],VFlex:v["a"],VIcon:Y["a"],VImg:f["a"],VSlideYTransition:Dt["c"],VSpacer:D["a"]});var Pt={name:"Auctions",computed:{auctions(){return this.$store.getters.getAuctions}},components:{AuctionCard:Bt},methods:{scrollToTop(){window.scrollTo(top)}}},Rt=Pt,Et=Object(d["a"])(Rt,St,Vt,!1,null,null,null),Nt=Et.exports;p()(Et,{VBtn:O["a"],VFlex:v["a"],VLayout:g["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",[t._v("\r\n   Loading...\r\n")]):a("div",[a("div",[t._v("this is just an exaample the id of the clicked auction is "+t._s(t.auction.itemID)+", title is "+t._s(t.auction.title))])])},Ft=[],qt=(a("a481"),{name:"auction",data:()=>({choosenAuctionID:"",auction:null,loading:!0}),methods:{getUrlQuery(){this.urlQuery={};let t=window.location.href;t=t.substr(t.lastIndexOf("?")),this.choosenAuctionID=t.replace("?",""),console.log(this.choosenAuctionID)},getAuction(){this.auction=this.$store.getters.getAuctions.find(this.isAuction),this.loading=!1},isAuction(t){return t.itemID===this.choosenAuctionID}},mounted:function(){this.getUrlQuery(),this.getAuction()}}),Mt=qt,Lt=Object(d["a"])(Mt,$t,Ft,!1,null,null,null),Ut=Lt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DrawingBoard")},zt=[],Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Tyvärr så verkar något vara fel just nu, men rita här sålänge")]),a("canvas",{attrs:{id:"canvas",width:"800px",height:"800px"},on:{mousedown:t.handleMouseDown,mouseup:t.handleMouseUp,mousemove:t.handleMouseMove}})])},Qt=[],Yt={name:"drawingBoard",data:function(){return{mouse:{current:{x:0,y:0},previous:{x:0,y:0},down:!1}}},computed:{currentMouse:function(){var t=document.getElementById("canvas"),e=t.getBoundingClientRect();return{x:this.mouse.current.x-e.left,y:this.mouse.current.y-e.top}}},methods:{draw:function(t){if(this.mouse.down){var e=document.getElementById("canvas"),a=e.getContext("2d");a.clearRect(0,0,800,800),a.lineTo(this.currentMouse.x,this.currentMouse.y),a.strokeStyle="#F63E02",a.lineWidth=2,a.stroke()}},handleMouseDown:function(t){this.mouse.down=!0,this.mouse.current={x:t.pageX,y:t.pageY};var e=document.getElementById("canvas"),a=e.getContext("2d");a.moveTo(this.currentMouse.x,this.currentMouse.y)},handleMouseUp:function(){this.mouse.down=!1},handleMouseMove:function(t){this.mouse.current={x:t.pageX,y:t.pageY},this.draw(t)}},ready:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.translate(.5,.5),e.imageSmoothingEnabled=!1}},Jt=Yt,Xt=(a("b886"),Object(d["a"])(Jt,Ht,Qt,!1,null,"53f40bf3",null)),Kt=Xt.exports,Gt={name:"errorPage",components:{DrawingBoard:Kt}},Zt=Gt,te=Object(d["a"])(Zt,Wt,zt,!1,null,null,null),ee=te.exports;s["default"].use(bt["a"]);var ae=new bt["a"]({mode:"history",routes:[{path:"/",name:"home",component:It},{path:"/auctions",name:"auctions",component:Nt},{path:"/auction",name:"auction",component:Ut},{path:"/error",name:"errorPage",component:ee},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))}]}),se=a("2f62");s["default"].use(se["a"]);const re="http://localhost:8080/api/";var ie=new se["a"].Store({state:{auctions:[{itemID:"12375463252345234092349041",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236545432430020345032134241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233766574564876845584241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"121234534255645353441243433241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1236433454364535353241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1237645763453123241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123332456457654345235241",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332358387902532441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12339087654323456786545435232341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233122345678654322341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332376858756463441",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233243534341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"12332398798741",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233212123341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"123765432341",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{itemID:"1233234234561",title:"Shy Rabbit",min_price:"20",currentBid:"123",status:"Ongoing",description:"This is a very nice rabbit",sellerID:"1235234",deadline:"2019-04-23 23:59",category:"Animals",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}],showPopup:!1},mutations:{setPosts(t,e){t.auctions=e},togglePopup(t,e){t.showPopup=e}},getters:{getAuctions:t=>{return t.auctions},getPopupState:t=>{return t.showPopup}},actions:{getAuctionsFromDB(){var t=this;return Object(N["a"])(function*(){console.log("printing from getAuctionsFromDB");let e=yield(yield fetch(re+"auctions/")).json();t.commit("setAuctions",e)})()}}}),ne=a("ce5b"),oe=a.n(ne),le=(a("bf40"),a("ecee")),ce=a("c074"),ue=a("ad3d");s["default"].config.productionTip=!1,s["default"].use(oe.a),le["c"].add(ce["a"]),s["default"].component("font-awesome-icon",ue["a"]),new s["default"]({router:ae,store:ie,render:t=>t(gt)}).$mount("#app")},6066:function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},b886:function(t,e,a){"use strict";var s=a("4fb8"),r=a.n(s);r.a},c09f:function(t,e,a){"use strict";var s=a("0c18"),r=a.n(s);r.a}});
//# sourceMappingURL=app.d6a34afe.js.map