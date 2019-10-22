(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["journeyDetails"],{3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},3985:function(e,t,n){"use strict";var s=n("93a9"),a=n.n(s);a.a},"3c17":function(e,t,n){},"3eb3":function(e,t,n){},"414e":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mode-item",class:"mode-item--"+e.getLegTypeName(e.leg)},[n("SVGIcon",{staticClass:"mode-item__icon",attrs:{name:e.getLegTypeName(e.leg)+"--small"}}),e.renderText?n("div",{staticClass:"mode-item__line"},[e._v("\n\n    "+e._s(e.renderLegText(e.leg))+"\n  ")]):e._e(),e.renderSeperatorIcon?n("SVGIcon",{staticClass:"mode-item__seperator-icon",attrs:{name:"arrow-right"}}):e._e()],1)},a=[],i=n("be08"),o={name:"JourneyModeItem",props:{leg:{type:Object},renderSeperatorIcon:{type:Boolean,default:!1},renderText:{type:Boolean,default:!0}},components:{SVGIcon:i["a"]},methods:{getLegTypeName:function(e){if(16===e.mode.code)return"ice";switch(e.mode.type){case 1:return"subway";case 2:return"sbahn";case 3:return"bus";case 4:return"tram";case 6:return"regio";case 97:return"HIDDEN";case 99:case 100:return"footpath"}},renderLegText:function(e){if("ICE ICE"===e.mode.number)return"ICE";if(100===e.mode.type||99===e.mode.type){var t=e.points[0].stamp.time,n=e.points[1].stamp.time;return n-t+" Min"}return e.mode.number}}},c=o,r=(n("3985"),n("2877")),l=Object(r["a"])(c,s,a,!1,null,"2d0ba472",null);t["a"]=l.exports},"423b":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("6b54");var s=n("2b0e"),a=s["a"].observable({selectedJourneyData:null,selectedJourneyUUID:""})},"514e":function(e,t,n){"use strict";var s=n("974f"),a=n.n(s);a.a},"6b54":function(e,t,n){"use strict";n("3846");var s=n("cb7c"),a=n("0bfb"),i=n("9e1e"),o="toString",c=/./[o],r=function(e){n("2aba")(RegExp.prototype,o,e,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?r((function(){var e=s(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)})):c.name!=o&&r((function(){return c.call(this)}))},7777:function(e,t,n){"use strict";var s=n("3eb3"),a=n.n(s);a.a},"93a9":function(e,t,n){},"974f":function(e,t,n){},b3ef:function(e,t,n){"use strict";var s=n("3c17"),a=n.n(s);a.a},ee5e:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"overlay page",class:{"has-transition":e.hasTransition}},[n("NativeLink",{nativeOn:{click:function(t){return e.clickedBackBtn(t)}}},[e._v("Verbindungen")]),n("section",{staticClass:"overlay__info-box"},[n("JourneyInterchangesList",{attrs:{changes:e.journey.legs}}),n("p",{staticClass:"info"},[e._v("\n        "+e._s(e.journey.rendered.durationString)+"\n        "),n("span",{staticClass:"seperator"},[e._v("•")]),e._v("\n        "+e._s(e.journey.interchanges)+" "+e._s(1===e.journey.interchanges?"Umstieg":"Umstiege")+"\n      ")])],1),n("section",{staticClass:"overlay__content"},e._l(e.journey.legs,(function(t,s){return n("article",{key:s,staticClass:"leg-item"},[n("div",{staticClass:"leg-item__main-content"},[n("div",{staticClass:"station cell"},[n("p",{staticClass:"station__time"},[e._v(e._s(t.points[0].dateTime.time))]),n("div",{staticClass:"station__dot"}),n("div",{staticClass:"station__dot-line"}),n("p",{staticClass:"station__name"},[e._v(e._s(t.points[0].name))])]),n("div",{staticClass:"mode-info cell"},[n("JourneyModeItem",{staticClass:"mode-info__type",attrs:{leg:t,renderText:!1}}),n("p",{staticClass:"mode-info__final-destination"},[n("strong",[e._v(e._s(t.mode.name))]),n("br"),e._v("\n              "+e._s(t.mode.destination)+"\n            ")])],1),t.passedStops?n("div",{staticClass:"mode"},[n("Accordion",[n("div",{staticClass:"cell clickable-content",attrs:{slot:"clickable"},slot:"clickable"},[n("p",[e._v(e._s(t.passedStops.length)+" Stationen")])]),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"mode__passed-stops-wrap"},e._l(t.passedStops,(function(t,s){return n("article",{key:s,staticClass:"cell mode__passed-stop"},[n("p",{staticClass:"mode__passed-stop-time"},[e._v(e._s(t.time||""))]),n("div",{staticClass:"mode__passed-stop-dot"}),n("p",{staticClass:"mode__passed-stop-name"},[e._v(e._s(t.name))])])})),0)])]),n("div",{staticClass:"mode__bg-layer"}),n("SVGIcon",{staticClass:"mode__icon",attrs:{name:"arrow-right"}})],1):e._e(),n("div",{staticClass:"station cell"},[n("p",{staticClass:"station__time"},[e._v(e._s(t.points[1].dateTime.time))]),n("div",{staticClass:"station__dot"}),n("p",{staticClass:"station__name"},[e._v(e._s(t.points[1].name))])])]),s+1!==e.journey.legs.length?n("div",{staticClass:"leg-item__interchange-content cell"},[n("p",[e._v("Umsteigen, 9 Min.")])]):e._e()])})),0)],1)])},a=[],i=n("be08"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Accordion",class:{"is-opened":e.isOpened}},[n("div",{staticClass:"Accordion__clickable",on:{click:function(t){e.isOpened=!e.isOpened}}},[e._t("clickable")],2),n("div",{staticClass:"Accordion__content"},[n("slide-up-down",{attrs:{active:e.isOpened,duration:300}},[e._t("content")],2)],1)])},c=[],r={name:"Accordion",data:function(){return{isOpened:!1}}},l=r,u=n("2877"),d=Object(u["a"])(l,o,c,!1,null,null,null),_=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"link"},[n("SVGIcon",{attrs:{name:"arrow-right"}}),e._t("default")],2)},p=[],f={name:"NativeLink",components:{SVGIcon:i["a"]}},g=f,v=(n("7777"),Object(u["a"])(g,m,p,!1,null,"96df1e0a",null)),C=v.exports,b=n("f921"),h=n("414e"),y=n("423b"),I={name:"JourneyDetails",components:{SVGIcon:i["a"],JourneyInterchangesList:b["a"],JourneyModeItem:h["a"],Accordion:_,NativeLink:C},data:function(){return{hasTransition:!1}},computed:{journey:function(){return y["a"].selectedJourneyData}},methods:{clickedBackBtn:function(){this.hasTransition=!0,this.$router.go(-1)},logIt:function(e){console.log(e)}}},k=I,S=(n("b3ef"),Object(u["a"])(k,s,a,!1,null,"0679d20b",null));t["default"]=S.exports},f921:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"changes"},[n("div",{staticClass:"changes__scroll-container"},e._l(e.filteredChanges,(function(t,s){return n("JourneyModeItem",{key:s,attrs:{leg:t,renderSeperatorIcon:s+1!==e.filteredChanges.length&&e.filteredChanges.length>1}})})),1)])},a=[],i=n("414e"),o={name:"JourneyChangesList",props:["changes"],components:{JourneyModeItem:i["a"]},data:function(){return{filteredChanges:null}},created:function(){this.filteredChanges=this.changes.filter((function(e){return 97!==e.mode.type}))}},c=o,r=(n("514e"),n("2877")),l=Object(r["a"])(c,s,a,!1,null,"437147a9",null);t["a"]=l.exports}}]);