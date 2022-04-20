(function(){"use strict";var e={5313:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{class:e.cssClasses},[n("router-view",{attrs:{name:"layout",title:e.title,"is-x-small":e.screen.isXSmall,"is-large":e.screen.isLarge},scopedSlots:e._u([{key:"footer",fn:function(){return[n("app-footer")]},proxy:!0}])},[n("div",{staticClass:"content"},[n("router-view",{attrs:{name:"content"}})],1)])],1)])},o=[],i=(n(7327),n(1539),n(7941),n(2222),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-block"},[n("footer",{staticClass:"footer"},[e._v(" Copyright © 2011-"+e._s((new Date).getFullYear())+" "+e._s(this.$appInfo.title)+" Inc. "),n("br"),e._v("All trademarks or registered trademarks are property of their respective owners. ")])])}),s=[],u=n(1001),l={},c=(0,u.Z)(l,i,s,!1,null,null,null),d=c.exports,m=(n(4747),{XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px)"}),p=[],h=window.matchMedia(m.XSmall),f=window.matchMedia(m.Small),g=window.matchMedia(m.Medium),v=window.matchMedia(m.Large);[h,f,g,v].forEach((function(e){e.addListener((function(){p.forEach((function(e){return e()}))}))}));var x=function(){return{"screen-x-small":h.matches,"screen-small":f.matches,"screen-medium":g.matches,"screen-large":v.matches}},w=function(e){return p.push(e)},b=function(e){p=p.filter((function(t){return t!==e}))};function y(){var e=x();return{isXSmall:e["screen-x-small"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((function(t){return e[t]}))}}var S={name:"app",data:function(){return{title:this.$appInfo.title,screen:y()}},computed:{cssClasses:function(){return["app"].concat(this.screen.cssClasses)}},methods:{screenSizeChanged:function(){this.screen=y()}},mounted:function(){w(this.screenSizeChanged)},beforeDestroy:function(){b(this.screenSizeChanged)},components:{AppFooter:d}},k=S,C=(0,u.Z)(k,a,o,!1,null,null,null),D=C.exports,O=(n(8309),n(8345)),_=n(3019),$=n(6198),M=(n(5666),{email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"}),Z={_user:M,loggedIn:function(){return!!this._user},logIn:function(e,t){var n=this;return(0,$.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log(e,t),n._user=(0,_.Z)((0,_.Z)({},M),{},{email:e}),r.abrupt("return",{isOk:!0,data:n._user});case 6:return r.prev=6,r.t0=r["catch"](0),r.abrupt("return",{isOk:!1,message:"Authentication failed"});case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()},logOut:function(){var e=this;return(0,$.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e._user=null;case 1:case"end":return t.stop()}}),t)})))()},getUser:function(){var e=this;return(0,$.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",{isOk:!0,data:e._user});case 4:return t.prev=4,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1});case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))()},resetPassword:function(e){return(0,$.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e),t.abrupt("return",{isOk:!0});case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},changePassword:function(e,t){return(0,$.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},createAccount:function(e,t){return(0,$.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}},L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[0===e.list.length?n("div",{staticClass:"empty"},[e._v(" Пока нет ни одного графика ")]):n("ul",{staticClass:"list"},e._l(e.list,(function(t,r){return n("li",{key:"chart-"+r},["pie"===t.type?n("ChartPie",{attrs:{"data-source":t.data,id:e.list.length-r}}):"line"===t.type?n("ChartLine",{attrs:{"data-source":t.data,id:e.list.length-r}}):e._e()],1)})),0),n("ChartForm",{on:{submit:e.handleSubmit}})],1)},R=[],E=n(4479),T=n(9669),I=n.n(T),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DxPieChart",{attrs:{"data-source":e.dataSource,palette:"Bright",title:"chart "+e.id}},[n("DxSeries",{attrs:{"argument-field":"Группа","value-field":"Доля"}},[n("DxLabel",{attrs:{visible:!0}},[n("DxConnector",{attrs:{visible:!0,width:1}})],1)],1),n("DxSize",{attrs:{width:600}})],1)},F=[],V=(n(9653),n(520)),B=n.n(V),z={props:{dataSource:{required:!0,type:Array},id:{required:!0,type:Number}},components:{DxSize:V.DxSize,DxLabel:V.DxLabel,DxSeries:V.DxSeries,DxConnector:V.DxConnector,DxPieChart:B()}},A=z,j=(0,u.Z)(A,P,F,!1,null,null,null),q=j.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DxChart",{attrs:{"data-source":e.dataSource,palette:"Bright",title:"chart "+e.id}},[n("DxCommonSeriesSettings",{attrs:{type:"line","argument-field":"Дата"}}),n("DxSeries",{attrs:{"value-field":"Процент",name:"Процент"}}),n("DxSize",{attrs:{width:600}})],1)},U=[],N=n(285),H={props:{dataSource:{required:!0,type:Array},id:{required:!0,type:Number}},components:{DxSize:N.DxSize,DxChart:N.DxChart,DxSeries:N.DxSeries,DxCommonSeriesSettings:N.DxCommonSeriesSettings}},G=H,J=(0,u.Z)(G,X,U,!1,null,null,null),W=J.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("DxSelectBox",{attrs:{items:e.form.type.items,placeholder:e.form.type.placeholder},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}}),n("DxSelectBox",{attrs:{items:e.form.source.items,placeholder:e.form.source.placeholder,disabled:!e.formData.type},model:{value:e.formData.source,callback:function(t){e.$set(e.formData,"source",t)},expression:"formData.source"}}),n("DxButton",{attrs:{text:e.form.button.label,disabled:!(e.formData.source&&e.formData.type)},on:{click:e.handleSubmit}})],1)},K=[],Q=n(3143),ee=n.n(Q),te=n(8143),ne=n.n(te),re={components:{DxSelectBox:ee(),DxButton:ne()},data:function(){return{formData:{type:null,source:null},form:{type:{items:["pie","line"],placeholder:"Выберите тип графика"},source:{items:["https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047","https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2"],placeholder:"Выберите источник данных"},button:{label:"Создать график"}}}},methods:{clearForm:function(){this.formData.source=null,this.formData.type=null},handleSubmit:function(){this.$emit("submit",{type:this.formData.type,source:this.formData.source}),this.clearForm()}}},ae=re,oe=(0,u.Z)(ae,Y,K,!1,null,"4d3a5c2f",null),ie=oe.exports,se={components:{ChartPie:q,ChartLine:W,ChartForm:ie},data:function(){return{list:[]}},methods:{createChart:function(e,t){var n=this;return(0,$.Z)(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,I().get(t);case 2:a=r.sent,o=a.data,n.list=[{data:o,type:e}].concat((0,E.Z)(n.list));case 5:case"end":return r.stop()}}),r)})))()},handleSubmit:function(e){var t=e.type,n=e.source;this.createChart(t,n)}}},ue=se,le=(0,u.Z)(ue,L,R,!1,null,"4421e83f",null),ce=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-nav-outer-toolbar"},[n("header-toolbar",{staticClass:"layout-header",attrs:{"menu-toggle-enabled":!0,"toggle-menu-func":e.toggleMenu,title:e.title}}),n("dx-drawer",{staticClass:"layout-body",attrs:{position:"before",template:"menu",opened:e.menuOpened,"opened-state-mode":e.drawerOptions.menuMode,"reveal-mode":e.drawerOptions.menuRevealMode,"min-size":e.drawerOptions.minMenuSize,shading:e.drawerOptions.shaderEnabled,"close-on-outside-click":e.drawerOptions.closeOnOutsideClick},on:{"update:opened":function(t){e.menuOpened=t}},scopedSlots:e._u([{key:"menu",fn:function(){return[n("side-nav-menu",{attrs:{"compact-mode":!e.menuOpened},on:{click:e.handleSideBarClick}})]},proxy:!0}])},[n("dx-scroll-view",{ref:"scrollViewRef",staticClass:"with-footer"},[e._t("default"),e._t("footer")],2)],1)],1)},me=[],pe=n(800),he=n.n(pe),fe=n(6215),ge=n.n(fe),ve=[{text:"Home",path:"/home",icon:"home"}],xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-component"},[n("dx-toolbar",{staticClass:"header-toolbar"},[n("dx-item",{attrs:{visible:e.menuToggleEnabled,location:"before","css-class":"menu-button"},scopedSlots:e._u([{key:"default",fn:function(){return[n("dx-button",{attrs:{icon:"menu","styling-mode":"text"},on:{click:e.toggleMenuFunc}})]},proxy:!0}])}),e.title?n("dx-item",{attrs:{location:"before","css-class":"header-title dx-toolbar-label"}},[[n("div",[e._v(e._s(e.title))])]],2):e._e(),n("dx-item",{attrs:{location:"after","locate-in-menu":"auto","menu-item-template":"menuUserItem"},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("dx-button",{staticClass:"user-button authorization",attrs:{width:210,height:"100%","styling-mode":"text"}})],1)]},proxy:!0}])})],1)],1)},we=[],be=n(2746),ye=n.n(be),Se={props:{menuToggleEnabled:Boolean,title:String,toggleMenuFunc:Function,logOutFunc:Function},created:function(){var e=this;Z.getUser().then((function(t){return e.user=t.data}))},data:function(){return{user:{},userMenuItems:[{text:"Profile",icon:"user",onClick:this.onProfileClick},{text:"Logout",icon:"runner",onClick:this.onLogoutClick}]}},methods:{onLogoutClick:function(){Z.logOut(),this.$router.push({path:"/login-form",query:{redirect:this.$route.path}})},onProfileClick:function(){this.$router.push({path:"/profile",query:{redirect:this.$route.path}})}},components:{DxButton:ne(),DxToolbar:ye(),DxItem:be.DxItem}},ke=Se,Ce=(0,u.Z)(ke,xe,we,!1,null,null,null),De=Ce.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dx-swatch-additional side-navigation-menu",on:{click:e.forwardClick}},[e._t("default"),n("div",{staticClass:"menu-container"},[n("dx-tree-view",{ref:e.treeViewRef,attrs:{items:e.items,"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",width:"100%"},on:{"item-click":e.handleItemClick}})],1)],2)},_e=[],$e=(n(1249),n(4916),n(7601),n(3932)),Me=n.n($e),Ze="treeViewRef",Le=x()["screen-large"],Re=ve.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),(0,_.Z)((0,_.Z)({},e),{},{expanded:Le})})),Ee={props:{compactMode:Boolean},data:function(){return{treeViewRef:Ze,items:Re}},methods:{forwardClick:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit("click",t)},handleItemClick:function(e){if(e.itemData.path&&!this.compactMode){this.$router.push(e.itemData.path);var t=e.event;t.stopPropagation()}},updateSelection:function(){this.treeView&&(this.treeView.selectItem(this.$route.path),this.treeView.expandItem(this.$route.path))}},mounted:function(){this.treeView=this.$refs[Ze]&&this.$refs[Ze].instance,this.updateSelection(),this.compactMode&&this.treeView.collapseAll()},watch:{$route:function(){this.updateSelection()},compactMode:function(){this.compactMode?this.treeView.collapseAll():this.updateSelection()}},components:{DxTreeView:Me()}},Te=Ee,Ie=(0,u.Z)(Te,Oe,_e,!1,null,null,null),Pe=Ie.exports,Fe={props:{title:String,isXSmall:Boolean,isLarge:Boolean},methods:{toggleMenu:function(e){var t=e.event;t.stopPropagation(),this.menuOpened&&(this.menuTemporaryOpened=!1),this.menuOpened=!this.menuOpened},handleSideBarClick:function(){!1===this.menuOpened&&(this.menuTemporaryOpened=!0),this.menuOpened=!0}},data:function(){return{menuOpened:this.isLarge,menuTemporaryOpened:!1,menuItems:ve}},computed:{drawerOptions:function(){var e=!this.isLarge;return{menuMode:this.isLarge?"shrink":"overlap",menuRevealMode:this.isXSmall?"slide":"expand",minMenuSize:this.isXSmall?0:60,menuOpened:this.isLarge,closeOnOutsideClick:e,shaderEnabled:e}},headerMenuTogglerEnabled:function(){return this.isXSmall},scrollView:function(){return this.$refs["scrollViewRef"].instance}},watch:{isLarge:function(){this.menuTemporaryOpened||(this.menuOpened=this.isLarge)},$route:function(){!this.menuTemporaryOpened&&this.isLarge||(this.menuOpened=!1,this.menuTemporaryOpened=!1),this.scrollView.scrollTo(0)}},components:{DxDrawer:he(),DxScrollView:ge(),HeaderToolbar:De,SideNavMenu:Pe}},Ve=Fe,Be=(0,u.Z)(Ve,de,me,!1,null,null,null),ze=Be.exports;r["default"].use(O.Z);var Ae=new O.Z({routes:[{path:"/home",name:"home",meta:{requiresAuth:!0},components:{layout:ze,content:ce}},{path:"/",redirect:"/home"},{path:"/recovery",redirect:"/home"},{path:"*",redirect:"/home"}]});Ae.beforeEach((function(e,t,n){"login-form"===e.name&&Z.loggedIn()&&n({name:"home"}),e.matched.some((function(e){return e.meta.requiresAuth}))?Z.loggedIn()?n():n({name:"login-form",query:{redirect:e.fullPath}}):n()}));var je=Ae,qe={title:"Elastoo Test"};r["default"].config.productionTip=!1,r["default"].prototype.$appInfo=qe,new r["default"]({router:je,render:function(e){return e(D)}}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkelastoo_test"]=self["webpackChunkelastoo_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5313)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.84e1c2fd.js.map