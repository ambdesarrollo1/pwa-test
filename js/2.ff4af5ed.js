(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1:function(i,t){},10:function(i,t){},11:function(i,t){},12:function(i,t){},13:function(i,t){},14:function(i,t){},15:function(i,t){},2:function(i,t){},3:function(i,t){},4:function(i,t){},5:function(i,t){},6:function(i,t){},7:function(i,t){},8:function(i,t){},"8b24":function(i,t,n){"use strict";n.r(t);var e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("q-page",{staticClass:"constrain q-pa-md"},[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i.showNotificationsBanner&&i.pushNotificationsSupported?n("div",{staticClass:"banner-container bg-primary"},[n("div",{staticClass:"constrain"},[n("q-banner",{staticClass:"bg-grey-3 q-mb-md",scopedSlots:i._u([{key:"avatar",fn:function(){return[n("q-icon",{attrs:{name:"eva-bell-outline",color:"primary"}})]},proxy:!0},{key:"action",fn:function(){return[n("q-btn",{staticClass:"q-px-sm",attrs:{label:"Yes",color:"primary",dense:"",flat:""},on:{click:i.enableNotifications}}),n("q-btn",{staticClass:"q-px-sm",attrs:{label:"Later",color:"primary",dense:"",flat:""},on:{click:function(t){i.showNotificationsBanner=!1}}}),n("q-btn",{staticClass:"q-px-sm",attrs:{label:"Never",color:"primary",dense:"",flat:""},on:{click:i.neverShowNotificationsBanner}})]},proxy:!0}],null,!1,2631986262)},[i._v("\n\n          Would you like to enable notifications?\n\n          ")])],1)]):i._e()]),n("div",[n("q-btn",{staticClass:"q-px-sm",attrs:{label:"Register",color:"primary"},on:{click:i.registerNotifications}})],1),n("div",[n("q-btn",{staticClass:"q-px-sm",attrs:{label:"Send",color:"primary"},on:{click:i.sendNotification}})],1)],1)},o=[];n("ace4"),n("5319"),n("5cc6"),n("bf19");let s=n("4328"),a=n("d0c6");a.setVapidDetails("mailto:aspirinumes@gmail.es","BGesUsJYw35oEb8qriudQ4vbFyydRNKgH4ujh0hiXHsDpjtwLN-eXrMwPbdEFw3jovsGu9TvkDJ1IFazPGV7kMM","Gq9rYji_6IVzQWWYTNeNFk2ziNFyQuouxvZ6grBH55U");var r={name:"PageIndex",data(){return{showNotificationsBanner:!1}},computed:{serviceWorkerSupported(){return"serviceWorker"in navigator},pushNotificationsSupported(){return"PushManager"in window}},methods:{registerNotifications(){this.enableNotifications()},sendNotification(){console.log("sendNotification()"),this.$axios.post("https://UnacceptableHelplessLogic--five-nine.repl.co/sendNotification")},initNotificationsBanner(){let i=this.$q.localStorage.getItem("neverShowNotificationsBanner");i||(this.showNotificationsBanner=!0)},enableNotifications(){this.pushNotificationsSupported&&Notification.requestPermission(i=>{console.log("Notification.requestPermission: ",i),"granted"==i&&(this.neverShowNotificationsBanner(),this.checkForExistingPushSubscription())})},checkForExistingPushSubscription(){if(this.serviceWorkerSupported&&this.pushNotificationsSupported){let i;console.log("checkForExistingPushSubscription [1]"),navigator.serviceWorker.ready.then(t=>(console.log("checkForExistingPushSubscription [2]"),i=t,t.pushManager.getSubscription())).then(t=>{console.log("checkForExistingPushSubscription [3]"),console.log("--after serviceWorker.ready:",t),t||this.createPushSubscription(i)}).catch(i=>{console.log("subscribe err: ",i)})}},createPushSubscription(i){console.log("createPushSubscription()");let t="BGesUsJYw35oEb8qriudQ4vbFyydRNKgH4ujh0hiXHsDpjtwLN-eXrMwPbdEFw3jovsGu9TvkDJ1IFazPGV7kMM",n=this.urlBase64ToUint8Array(t);i.pushManager.subscribe({applicationServerKey:n,userVisibleOnly:!0}).then(i=>{let t=i.toJSON(),n=s.stringify(t);return this.$axios.post("https://UnacceptableHelplessLogic--five-nine.repl.co/createSubscription?"+n)}).then(i=>{console.log("subscribe response:",i),this.displayGrantedNotification()}).catch(i=>{console.log("subscribe err: ",i)})},displayGrantedNotification(){this.serviceWorkerSupported&&this.pushNotificationsSupported&&navigator.serviceWorker.ready.then(i=>{i.showNotification("You're subscribed to notifications!",{body:"Thanks for subscribing!",icon:"appicons/icon-128x128.png",image:"appicons/icon-128x128.png",badge:"appicons/icon-128x128.png",dir:"ltr",lang:"en-US",vibrate:[100,50,200],tag:"confirm-notification",renotify:!0,actions:[{action:"hello",title:"Hello",icon:"appicons/icon-128x128.png"},{action:"goodbye",title:"Goodbye",icon:"appicons/icon-128x128.png"}]})})},neverShowNotificationsBanner(){this.showNotificationsBanner=!1,this.$q.localStorage.set("neverShowNotificationsBanner",!0)},urlBase64ToUint8Array(i){const t="=".repeat((4-i.length%4)%4),n=(i+t).replace(/-/g,"+").replace(/_/g,"/"),e=window.atob(n),o=new Uint8Array(e.length);for(let s=0;s<e.length;++s)o[s]=e.charCodeAt(s);return o}},created(){this.initNotificationsBanner()}},c=r,l=n("2877"),p=n("9989"),u=n("54e1"),f=n("0016"),h=n("9c40"),b=n("eebe"),d=n.n(b),g=Object(l["a"])(c,e,o,!1,null,null,null);t["default"]=g.exports;d()(g,"components",{QPage:p["a"],QBanner:u["a"],QIcon:f["a"],QBtn:h["a"]})},9:function(i,t){}}]);