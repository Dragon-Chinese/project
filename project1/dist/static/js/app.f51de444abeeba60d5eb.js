webpackJsonp([1],{0:function(t,e){},"0Bp8":function(t,e){},"0MwQ":function(t,e){},"0Zgd":function(t,e,s){t.exports=s.p+"static/img/图层 14.a22d684.png"},"5vIT":function(t,e,s){t.exports=s.p+"static/img/图层 9.a88e833.png"},"6GEf":function(t,e){},"6b3O":function(t,e,s){t.exports=s.p+"static/img/SkbEXPnEhz.f80e6c9.png"},"6lFr":function(t,e){},"8lRq":function(t,e,s){t.exports=s.p+"static/img/7caf85b2e1d98e0651b1887e0b47615.2befbfb.png"},AY6G:function(t,e){},FySs:function(t,e){},JGPG:function(t,e,s){t.exports=s.p+"static/img/rklUefa-z7.3918371.png"},JYgB:function(t,e,s){t.exports=s.p+"static/img/3323f593e69d4c444285142edd9576f.17869a5.png"},LJDk:function(t,e,s){t.exports=s.p+"static/img/8ea0c7157eeb60d2dd413fe23edfc6f5.f8033be.png"},LkiV:function(t,e,s){t.exports=s.p+"static/img/saman.c47440c.png"},NCYi:function(t,e,s){t.exports=s.p+"static/img/b5bc4d7aca7255eb806263b7c53249c.0bd9aee.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("aA9S"),i=s.n(a),n=s("xd7I"),r=s("lC5x"),o=s.n(r),l=s("J0Oq"),c=s.n(l),v=s("A9zj"),m=s.n(v),d={data:function(){return{nav:[{title:"message.header.txt1",link:"/us"},{title:"message.header.txt2",link:"/Technology"},{title:"message.header.txt3",link:"/parthers"},{title:"message.header.txt4",link:"/team"},{title:"message.header.txt5",link:"/craeers"},{title:"message.header.txt6",link:"/ventiLife"}],options:[{value:"Eng",label:"English"},{value:"Cha",label:"简体中文"}],label:"Eng",active:6}},methods:{go:function(t,e){var s=m()(t,[]);this.active=e,this.$router.push(s.link)},tabLang:function(t){var e=m()(t,[]);this.label=e.value,this.$i18n.locale=e.value,localStorage.setItem("defaulti18n",e.value)}},mounted:function(){this.label=window.localStorage.getItem("defaulti18n")?window.locationbar.getItem("defaulti18n"):"Eng"}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"header"},[s("h1",{on:{click:function(e){return t.go({link:"/"},7)}}}),t._v(" "),s("ul",t._l(t.nav,function(e,a){return s("li",{key:a,class:a==t.active?"active":"",on:{click:function(s){return t.go(e,a)}}},[t._v("\r\n                "+t._s(t.$t(e.title))+"\r\n            ")])}),0),t._v(" "),s("div",{staticClass:"lang"},t._l(t.options,function(e,a){return s("p",{directives:[{name:"show",rawName:"v-show",value:e.value!=t.label,expression:"item.value != label"}],key:a,on:{click:function(s){return t.tabLang(e)}}},[t._v(t._s(e.label))])}),0)])])},staticRenderFns:[]};var x=s("C7Lr")(d,p,!1,function(t){s("FySs")},"data-v-7f26e253",null).exports,u=s("aozt"),g=s.n(u),_={name:"App",data:function(){return{show:!0}},components:{Header:x},mounted:function(){var t=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://dragon-chinese.github.io/project/project1/src/Vip.json?time="+ +new Date).then(function(e){t.show=e.data.show}).catch(function(t){console.log(t)});case 2:case"end":return e.stop()}},e,t)}))()}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1):this._e()},staticRenderFns:[]};var h=s("C7Lr")(_,f,!1,function(t){s("R+Uk")},null,null).exports,C=s("3XdE"),E={name:"HelloWorld",data:function(){return{msg:""}},components:{Header:x}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("h2",[t._v(t._s(t.$t("message.index.txt29")))])]),t._v(" "),s("main",[s("div",{staticClass:"topMain"},[s("div",{staticClass:"left"},[s("div",[t._v(t._s(t.$t("message.index.txt6")))]),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt7"))+" ")])]),t._v(" "),s("div",{staticClass:"right"})]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("h3",[t._v(t._s(t.$t("message.index.txt8")))]),t._v(" "),s("p",{staticClass:"power"},[t._v("\n    "+t._s(t.$t("message.index.txt9"))+"\n    ")]),t._v(" "),s("div",{staticClass:"main"},[s("div",[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.index.txt10")))]),t._v(" "),s("div",{staticClass:"img"}),t._v(" "),s("p",{staticClass:"txt"},[t._v(t._s(t.$t("message.index.txt13")))]),t._v(" "),s("button",[t._v(t._s(t.$t("message.index.txt11")))])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.index.txt16")))]),t._v(" "),s("div",{staticClass:"img"}),t._v(" "),s("p",{staticClass:"txt"},[t._v(t._s(t.$t("message.index.txt14")))]),t._v(" "),s("button",[t._v(t._s(t.$t("message.index.txt17")))])]),t._v(" "),s("div",[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.index.txt12")))]),t._v(" "),s("div",{staticClass:"img"}),t._v(" "),s("p",{staticClass:"txt"},[t._v(t._s(t.$t("message.index.txt15")))]),t._v(" "),s("button",[t._v(t._s(t.$t("message.index.txt18")))])])]),t._v(" "),s("div",{staticClass:"line1"}),t._v(" "),s("div",{staticClass:"botMain"},[s("p",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("message.index.txt19"))+"\n      ")]),t._v(" "),s("p",{staticClass:"title2"},[t._v("\n        "+t._s(t.$t("message.index.txt20"))+"\n      ")]),t._v(" "),s("p",{staticClass:"txt"},[t._v("\n        "+t._s(t.$t("message.index.txt21"))+"\n      ")]),t._v(" "),s("div",{staticClass:"img"},[s("div",{staticClass:"left"},[s("div",{staticClass:"top"}),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt22")))])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"top"}),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt23")))])])])]),t._v(" "),s("div",{staticClass:"line3"}),t._v(" "),s("div",{staticClass:"bottom"},[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.index.txt24")))]),t._v(" "),s("p",{staticClass:"title2"},[t._v(t._s(t.$t("message.index.txt25")))]),t._v(" "),s("div",{staticClass:"fotImg"},[s("div",[s("div",{staticClass:"img"}),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt26")))])]),t._v(" "),s("div",[s("div",{staticClass:"img"}),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt27")))])]),t._v(" "),s("div",[s("div",{staticClass:"img"}),t._v(" "),s("p",[t._v(t._s(t.$t("message.index.txt28")))])])])])])])},staticRenderFns:[]};var I=s("C7Lr")(E,b,!1,function(t){s("a/kR")},"data-v-29be4a02",null).exports,T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("p",{staticClass:"team"},[t._v(t._s(t.$t("message.team.txt0")))])]),t._v(" "),s("main",[s("div",{staticClass:"main-top"},[s("p",{staticClass:"top-left"},[t._v(t._s(t.$t("message.team.txt1")))]),t._v(" "),s("p",{staticClass:"top-right"},[t._m(0),t._v(" "),s("span",[t._v(t._s(t.$t("message.team.txt2")))])])]),t._v(" "),s("div",{staticClass:"main-content"},[s("ul",[s("li",[t._m(1),t._v(" "),s("span",{staticClass:"content-one"},[t._v(t._s(t.$t("message.team.txt3")))])]),t._v(" "),s("li",[t._m(2),t._v(" "),s("span",[t._v(t._s(t.$t("message.team.txt4")))])]),t._v(" "),s("li",[t._m(3),t._v(" "),s("span",[t._v(t._s(t.$t("message.team.txt5")))])])])]),t._v(" "),s("div",{staticClass:"main-footer"},[s("p",[t._v(t._s(t.$t("message.team.txt6")))]),t._v(" "),s("ul",[s("li",[t._m(4),t._v(" "),s("span",[t._v(t._s(t.$t("message.team.txt7")))])]),t._v(" "),s("li",[t._m(5),t._v(" "),s("span",[t._v(t._s(t.$t("message.team.txt8")))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("rmgm"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("ya5P"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("LkiV"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("Ypcs"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("oYff"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:s("pwPT"),alt:""}})])}]};var N=s("C7Lr")({name:"team",data:function(){return{msg:"Welcome to Your Vue.js App"}}},T,!1,function(t){s("PX74")},"data-v-dbe08a5a",null).exports,y={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{Header:x}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("div",{staticClass:"banner"},[e("h2",[this._v(this._s(this.$t("message.ventiLife.txt0")))])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"top"},[a("div",{staticClass:"topBox"},[a("img",{attrs:{src:s("8lRq"),alt:""}})]),t._v(" "),a("div",{staticClass:"topBox"},[a("img",{attrs:{src:s("NCYi"),alt:""}})]),t._v(" "),a("div",{staticClass:"topBox"},[a("img",{attrs:{src:s("eJ8C"),alt:""}})]),t._v(" "),a("div",{staticClass:"topBox"},[a("img",{attrs:{src:s("kM8q"),alt:""}})])]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"bottomBox"},[a("div",{staticClass:"oneImg"},[a("img",{attrs:{src:s("6b3O"),alt:""}})]),t._v(" "),a("div",{staticClass:"twoImg"},[a("img",{attrs:{src:s("JGPG"),alt:""}})])]),t._v(" "),a("div",{staticClass:"bottomBox"},[a("div",{staticClass:"threeImg"},[a("img",{attrs:{src:s("LJDk"),alt:""}})]),t._v(" "),a("div",{staticClass:"fourImg"},[a("img",{attrs:{src:s("JYgB"),alt:""}})])]),t._v(" "),a("div",{staticClass:"bottomBox"},[a("div",{staticClass:"oneImg"},[a("img",{attrs:{src:s("ssbE"),alt:""}})]),t._v(" "),a("div",{staticClass:"twoImg"},[a("img",{attrs:{src:s("PBHg"),alt:""}})])])])])}]};var $=s("C7Lr")(y,A,!1,function(t){s("6GEf")},"data-v-3c6521fd",null).exports,O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("p",{staticClass:"Up"},[t._v(t._s(t.$t("message.us.txt0")))])]),t._v(" "),s("main",[s("p",[t._v(t._s(t.$t("message.us.txt1")))]),t._v(" "),s("ul",[s("li",[t._v(t._s(t.$t("message.us.txt2")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt3"))+" ")]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt4")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt5"))+" ")]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt7")))])]),t._v(" "),s("hr"),t._v(" "),s("footer",[s("p",[t._v(t._s(t.$t("message.us.txt6")))]),t._v(" "),s("div",[s("ul",[s("li",[t._v(t._s(t.$t("message.us.txt8")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt9")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt10")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.us.txt11")))])])])])])])},staticRenderFns:[]};var w=s("C7Lr")({name:"us",data:function(){return{msg:"Welcome to Your Vue.js App"}}},O,!1,function(t){s("0MwQ")},"data-v-15663f8a",null).exports,S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("p",{staticClass:"Up"},[t._v(t._s(t.$t("message.careers.txt0")))])]),t._v(" "),s("main",[s("footer",[s("div",{staticClass:"left"},[s("h4",[t._v(t._s(t.$t("message.careers.txt1")))]),t._v(" "),s("p",[t._v(t._s(t.$t("message.careers.txt2")))]),t._v(" "),s("ul",[s("li",[t._v(t._s(t.$t("message.careers.txt3")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.careers.txt4")))]),t._v(" "),s("li",[t._v(t._s(t.$t("message.careers.txt5")))])])]),t._v(" "),s("div",{staticClass:"rigth"},[s("form",{attrs:{action:""}},[s("ul",[s("li",[s("div",{staticClass:"first"},[s("b",{staticStyle:{"margin-bottom":"12px"}},[t._v(t._s(t.$t("message.careers.txt6")))]),t._v(" "),s("input",{attrs:{type:"text"}}),t._v(" "),s("b",{staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.$t("message.careers.txt7")))])]),t._v(" "),s("div",{staticClass:"last"},[s("input",{attrs:{type:"text"}}),t._v(" "),s("b",{staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.$t("message.careers.txt8")))])])]),t._v(" "),s("li",[s("b",[t._v(t._s(t.$t("message.careers.txt9")))]),t._v(" "),s("input",{attrs:{type:"text"}})]),t._v(" "),s("li",[s("b",[t._v(t._s(t.$t("message.careers.txt10")))]),t._v(" "),s("textarea")])]),t._v(" "),s("button",[t._v(t._s(t.$t("message.careers.txt11")))])])])])])])},staticRenderFns:[]};var R=s("C7Lr")({name:"craeers",data:function(){return{msg:"Welcome to Your Vue.js App"}}},S,!1,function(t){s("6lFr")},"data-v-015c0239",null).exports,V={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"",src:""}],poster:"../../static/images/test.jpg",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},components:{Header:x}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("h2",[t._v(t._s(t.$t("message.technology.txt0")))])]),t._v(" "),s("main",[s("div",{staticClass:"toMain"},[t._v(t._s(t.$t("message.technology.txt1")))]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"right"},[s("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions}})],1),t._v(" "),s("div",{staticClass:"left"},[s("div",{staticClass:"leftSize"},[t._v(t._s(t.$t("message.technology.txt2")))]),t._v(" "),s("div",{staticClass:"leftCont"},[t._v(t._s(t.$t("message.technology.txt3")))]),t._v(" "),s("div",{staticClass:"leftSizes"},[t._v(t._s(t.$t("message.technology.txt4")))]),t._v(" "),s("div",{staticClass:"leftCont"},[t._v(t._s(t.$t("message.technology.txt5")))]),t._v(" "),s("div",{staticClass:"leftCont"},[t._v(t._s(t.$t("message.technology.txt6")))])])])])])},staticRenderFns:[]};var P=s("C7Lr")(V,L,!1,function(t){s("0Bp8")},"data-v-34239c45",null).exports,H={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"",src:""}],poster:"../../static/images/test.jpg",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},components:{Header:x}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"banner"},[s("h2",[t._v(t._s(t.$t("message.parthers.txt0")))])]),t._v(" "),s("main",[s("div",{staticClass:"mainHead"},[t._v(t._s(t.$t("message.parthers.txt1")))]),t._v(" "),s("div",{staticClass:"mainPower"},[t._v(t._s(t.$t("message.parthers.txt2")))]),t._v(" "),s("div",{staticClass:"mainHead mainCom"},[t._v(t._s(t.$t("message.parthers.txt3")))]),t._v(" "),s("div",{staticClass:"mainSelf"},[t._v("\n      "+t._s(t.$t("message.parthers.txt4"))+"\n    ")]),t._v(" "),s("div",{staticClass:"mainHead mainInd"},[t._v(t._s(t.$t("message.parthers.txt5")))]),t._v(" "),s("div",{staticClass:"mainHr"}),t._v(" "),s("div",{staticClass:"mainContent"},[s("div",{staticClass:"left"},[s("div",{staticClass:"mainHead mainSpe"},[t._v(t._s(t.$t("message.parthers.txt6")))]),t._v(" "),s("div",{staticClass:"leftWork"},[t._v("\n          "+t._s(t.$t("message.parthers.txt7"))+"\n        ")]),t._v(" "),s("div",{staticClass:"lefstWork"},[t._v("\n        "+t._s(t.$t("message.parthers.txt9"))+"\n        ")]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"rightSize"},[t._v("\n          "+t._s(t.$t("message.parthers.txt8"))+"\n        ")]),t._v(" "),s("div",{staticClass:"rightVideo"},[s("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions}})],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftImg"},[e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("5vIT"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("PSTD"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("cxAc"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("mYk1"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("a78J"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("0Zgd"),alt:""}})]),this._v(" "),e("div",{staticClass:"imgPart"},[e("img",{attrs:{src:s("WjXJ"),alt:""}})])])}]};var D=s("C7Lr")(H,k,!1,function(t){s("g8G6")},"data-v-1e7dbb0a",null).exports;n.a.use(C.a);var U=new C.a({routes:[{path:"/",name:"Index",component:I},{path:"/us",name:"us",component:w},{path:"/team",name:"team",component:N},{path:"/ventiLife",name:"ventiLife",component:$},{path:"/craeers",name:"craeers",component:R},{path:"/technology",name:"technology",component:P},{path:"/parthers",name:"parthers",component:D}]}),G=s("P6bB"),M=s("CRWL"),Y=s.n(M);s("AY6G"),s("r8N3"),n.a.config.productionTip=!1,n.a.use(G.a),n.a.use(Y.a);var B={Eng:i()({message:{header:{txt1:"About us",txt2:"TECHNOLOGY",txt3:"PARTNERS",txt4:"TEAM",txt5:"CAREERS",txt6:"VENTILIFE"},index:{txt6:"VENTI IS THE LEADER IN SAFE SPEED AUTONOMOUS MOBILITY ",txt7:"Improving our lives and improving our planet by disrupting transportation, commerce, and society. ",txt8:"THE VENTI ADVANTAGE",txt9:"The Power of People, Partnerships and Intelligent Science",txt10:"Mature, Safe Technology",txt11:"READ ABOUT OUR TECHNOLOGY",txt12:"Best in Class Team",txt13:"Our autonomy technology benchmarked top in China and is significantly cheaper than the competition. ",txt14:"Venti Technologies is focused on commercialization with powerfu",txt15:"Best-of-the-Best team, more than half MIT-trained, combining AI",txt16:"READ ABOUT OUR TECHNOLOGY",txt17:"READ ABOUT OUR PARTNERS",txt18:"READ ABOUT OUR TEAM",txt19:"THE VENTI OPPORTUNITY",txt20:"Moving People and Moving Goods",txt21:"Our Safe Speed system is the fastest, most powerful, safest and",txt22:"VENTI industrial applications constantly focus on cost, are cheaper, more accurate, more reliable, and take less time to implement.",txt23:"VENTI Focus on cost, 30-60% cost advantage in mobile goods applications",txt24:"VENTI MAKES THE WORLD A BETTER PLACE",txt25:"Lives improve, Pollution reduces, Animals prosper",txt26:"REDUCING POLLUTION SO THE PLANET CAN BREATHE",txt27:"IMPROVING PEOPLE’S LIVES THROUGH COST-EFFECTIVE,  RELAXING TRAN",txt28:"NURTURING WILD LANDS AND WILD WATERS SO ANIMALS  CAN PROSPER",txt29:"Venti Technologies"},technology:{txt0:"Cheaper. Flexible. Accurate. Reliable.",txt1:"AN AUTONOMY LEADER.",txt2:"TECHNOLOGY APPLICATIONS",txt3:"Venti’s technology is universal with applications in moving people andspecialty vehicles in moving goods. For people, our reliable and safevehicles are cost-effective, comfortable, convenient and calming.They give back time, so needed in our busy world. Happy rides forhappy people!",txt4:"TECHNOLOGY ADVANTAGES",txt5:"Our autonomy technologies are cost-effective solutions to manylogistics and specialty vehicle applications. Venti’s vehicles arecheaper, flexible, accurate, and reliable. They adapt to complex routeconditions and decrease operations costs for a variety of industrialneeds.",txt6:"We can map a new area in half a day and add autonomy to a newvehicle within a week including the drive by wire hardware conveImportantly, our autonomy solution is cheaper than the competitioncause of the maturity of the underlying system. Our algorithms, ratherthan the sensors, do the heavy lifting, enabling a less expensivehardware design and lower costs for the customer."},careers:{txt0:"Venti Technologies",txt1:"Jobs",txt2:"Our motto is Best-of-the-Best.  ",txt3:"If you aspire to change the world through your job, if you want to work with top professionals, if excellence is your mantra—then Venti is your place.",txt4:"You will be challenged. You will be your best self. You will build the future today.",txt5:"We invite you to contact us.",txt6:"Name *",txt7:"First Name ",txt8:"Last Name",txt9:"Email Addres *",txt10:"Tell us about yourself. *",txt11:"SUBMIT"},ventiLife:{txt0:"Experience Venti"},us:{txt0:"VENTI IS",txt1:"AN AUTONOMY LEADER.",txt2:"A DISRUPTOR. ",txt3:"AN INNOVATOR. ",txt4:"AN ENABLER.",txt5:"AN INTEGRATOR. ",txt6:"WHY VENTI",txt7:"AN IMPLEMENTOR.",txt8:"Venti combines the intellectual might of powerful technology with the power of Asia’s huge urbanization-driven markets. Our SafeSpeed autonomy has benchmarked top in China, and powered 6 vehicle classes.  Our vehicles had 0 software disengagementsin 5,000 kilometers of testing and 0 incidents in 9 years of testing in China, US and Singapore.  Venti’s system is fast, mature, andready for large scale applications with a significant cost advantage over the competition ",txt9:"Our powerful strategic partners including China’s number one insurance company, two industrial partners, a top 10 real estate builder, multiple leading vehicle manufacturers, and SIP, China’s best industrial park, are pathways for explosive growth and AV leadership in moving people and goods.",txt10:"Venti has an unsurpassed team, 56% of whom are MIT-trained; our best-in-class management team includes AI experts paired with seasoned automotive and business stars from leading automotive Tier-1 OEMs. ",txt11:"Our autonomy system has a modular design, leading 3D components and more powerful algorithms. These factors yield higher safety and reliability, deployment of a new vehicle class within a week, mapping a new area in a morning, and greater flexibility for initial application and modifications.    Come ride with us into the future. "},parthers:{txt0:"Partnering for Explosive Growth",txt1:"OUR PARTNERS",txt2:"Powerful, Strategic, Innovators",txt3:"COMMUNITIES",txt4:"Self-driving vehicles will revolutionize transportation for people.  In twenty years most people will not own cars; rather we will summon whatever kind of vehicle we want for each journey.  Rent a minibus for a birthday party or a shared taxi to go to work. Hire a private car for a business trip.  Venti’s vehicles are cost-effective, beautiful, comfortable, safe, and reliable.  We are working with partners to build community-wide Safe Speed robo-taxi services.   ",txt5:"INDUSTRIAL VEHICLES",txt6:"SPECIALTY VEHICLES",txt7:"Working with the best of the best and most successful companies in China, Venti has designed and powered six vehicle classes with more to come. Our Safe Speedautonomy has benchmarked top in China and is poised to lead China’s huge urbanization-driven markets. ",txt8:" Specialty, safe speed industrial vehicles that are ready for deployment",txt9:"Our partners include the nation’s number one insurance company, a top 10 real estate builder, multiple leading vehicle manufacturers, and SIP, China’s best industrial park, are pathways for explosive growth and AV leadership in moving people and goods."},team:{txt0:"Dedicated Team",txt1:"OUR FOUNDERS",txt2:"HEIDI WYLE, FOUNDER & CEO, VENTI TECHNOLOGIES; CHAIRMAN, VENTI CHINA",txt3:"DANIELA RUS, PH.D., FOUNDER, VENTI TECHNOLOGIES",txt4:"SAMAN AMARASINGHE, PH.D., FOUNDER, VENTI TECHNOLOGIES",txt5:"XINXIN DU, PHD., FOUNDING TECHNOLOGY OFFICER",txt6:"OUR MANAGEMENT TEAM",txt7:"SHUYAN ZHAO, PH.D., ACTING CEO VENTI CHINA & VP, ENGINEERING",txt8:" WU YANG, VP OF BUSINESS DEVELOPMENT"}}}),Cha:i()({message:{header:{txt1:"关于我们",txt2:"技术",txt3:"合作",txt4:"团队",txt5:"招聘",txt6:"VENTILIFE"},index:{txt6:"VENTI是安全速度自主移动领域的领导者",txt7:"通过颠覆交通，商业和社会来改善我们的生活并改善我们的星球。",txt8:"VENTI是安全速度自主移动领域的领导者",txt9:"人，伙伴关系和只能科学的力量",txt10:"成熟，安全的技术",txt11:"强大的领先合作伙伴",txt12:"最佳团队",txt13:"我们的自主技术在中国排名第一，并且比竞争对手便宜得多。",txt14:"Venti Technologies致力于通过强大的战略合作伙伴实现商业化，以实现爆炸式增长 ",txt15:"最优秀的团队，超过一半由麻省理工学院培训，将AI世界专家与经验丰富的汽车经理相结合。",txt16:"了解我们的技术",txt17:"阅读我们的合作伙伴",txt18:"了解我们的团队",txt19:"VENTI机会",txt20:"搬家和搬家",txt21:"我们的安全速度系统是中国最快，最强大，最安全和最可靠的系统，在工业和人员移动应用中提供6种车辆类别。它快速，成熟，适用于大规模",txt22:"VENTI的工业应用不断专注于成本，价格更便宜，准确度更高，更可靠，并且实施时间更短。",txt23:"VENTI专注于成本，在移动货物应用方面具有30-60％的成本优势",txt24:"VENTI让世界变得更加美好",txt25:"生活改善，污染减少，动物繁盛",txt26:"减少污染，让地球可以呼吸",txt27:"通过经济高效，轻松的交通改善人们的生活",txt28:"培育野生土地和野生水域，使动物繁荣昌盛",txt29:"Venti Technologies"},technology:{txt0:"便宜。灵活。准确。可靠。",txt1:"观看我们的行动技术",txt2:"技术应用",txt3:"Venti的技术具有普遍性，可用于移动货物中的人员和特种车辆。对于人们来说，我们可靠和安全的车辆具有成本效益，舒适，方便和平静。他们回馈时间，在繁忙的世界中需要。快乐的人们快乐的游乐设施！",txt4:"技术优势",txt5:"我们的自主技术是许多物流和特种车辆应用的经济高效的解决方案。Venti的车辆更便宜，灵活，准确，可靠。它们适应复杂的路线条件，降低各种工业需求的运营成本。",txt6:"我们可以在半天内绘制一个新区域，并在一周内为新车辆增加自主权，包括通过有线硬件转换的驱动器。重要的是，我们的自治解决方案比底层系统成熟的竞争原因便宜。我们的算法而不是传感器可以完成繁重的工作，从而实现更便宜的硬件设计并降低客户的成本。"},careers:{txt0:"Venti Technologies",txt1:"招聘",txt2:"我们的座右铭是Best of the Best。",txt3:"如果你渴望通过你的工作改变世界，如果你想与顶级专业人士合作，如果卓越是你的口头禅 - 那么Venti就是你的位置。 ",txt4:"你将受到挑战。你将是你最好的自己。你今天将建立未来。",txt5:"我们邀请您与我们联系。",txt6:"姓名 *",txt7:"名",txt8:"姓",txt9:"电子邮箱 *",txt10:"介绍你自己 *",txt11:"提交"},ventiLife:{txt0:"enti Technologies"},us:{txt0:"我们是VENTI",txt1:"一位自主的领导者。",txt2:"一个破坏者。",txt3:"一个创新者。",txt4:"一个集成商。",txt5:"一个实施者。",txt6:"什么是 VENTI",txt7:"一个实施者。",txt8:"Venti将强大技术的知识力量与亚洲巨大的城市化驱动市场的力量结合在一起。我们的安全速度自主权在中国排名第一，并为6种车型提供动力。我们的车辆在中国，美国和新加坡的9年测试中，在5000公里测试中有0个软件脱离，0个事件。Venti的系统快速，成熟，适用于大规模应用，与竞争对手相比具有显着的成本优势",txt9:"我们强大的战略合作伙伴包括中国排名第一的保险公司，两个行业合作伙伴，十大房地产开发商，多家领先的汽车制造商以及中国最好的工业园区SIP，这些都是推动经济增长和移动人员和货物的AV领导的途径。",txt10:"Venti拥有无与伦比的团队，其中56％受过麻省理工学院的培训; 我们一流的管理团队包括AI专家，他们与来自领先汽车一级OEM的经验丰富的汽车和商业明星配对。",txt11:"我们的自治系统采用模块化设计，领先的3D组件和更强大的算法。这些因素产生更高的安全性和可靠性，在一周内部署新车辆类别，在早上绘制新区域，并为初始应用和修改提供更大的灵活性。跟我们一起踏上未来。 "},parthers:{txt0:"合作促进爆炸性增长",txt1:"我们的伙伴",txt2:"强大，战略，创新者",txt3:"社区",txt4:"自动驾驶汽车将彻底改变人们的交通。二十年来，大多数人都不会拥有汽车; 相反，我们会在每次旅程中召唤出我们想要的任何车辆。租一辆小巴去参加生日派对或共用出租车去上班。租一辆私家车出差。Venti的车辆具有成本效益，美观，舒适，安全和可靠。我们正与合作伙伴共同建立全社区的安全速度机器人出租车服务。                              ",txt5:"工业车辆",txt6:"特种车辆",txt7:"Venti与中国最优秀，最成功的公司合作，设计并提供了六种车型，其中包括更多车型。我们的安全速度自主权在中国处于领先地位，并准备引领中国巨大的城市化驱动市场。",txt8:"专业，安全的工业车辆，可以部署",txt9:"我们的合作伙伴包括全美排名第一的保险公司，十大房地产建筑商，多家领先的汽车制造商，SIP和中国最好的工业园区，这些都是爆炸性增长的途径，也是人员和货物流动的领导者。"},team:{txt0:"Venti Technologies",txt1:"我们的创始人",txt2:"VENTI TECHNOLOGIES的HEIDI WYLE，创始人兼首席执行官; VENTI CHINA主席",txt3:"DANIELA RUS，PH.D，创始人，VENTI TECHNOLOGIES",txt4:"SAMAN AMARASINGHE，PH.D，创始人，VENTI TECHNOLOGIES",txt5:"杜欣新博士，创始技术官",txt6:"我们的管理团队",txt7:"赵淑艳，博士，代理首席执行官VENTI中国和工程副总裁",txt8:"吴阳，业务发展副总裁"}}})},F=localStorage.getItem("defaulti18n"),W=new G.a({locale:F||"Eng",fallbackLocale:F||"Eng",messages:B});new n.a({el:"#app",router:U,i18n:W,components:{App:h},template:"<App/>"})},PBHg:function(t,e,s){t.exports=s.p+"static/img/890f3ad6cfc09fce07eee3d7a13214d.aa99301.png"},PSTD:function(t,e,s){t.exports=s.p+"static/img/图层 10.c637f8f.png"},PX74:function(t,e){},"R+Uk":function(t,e){},WjXJ:function(t,e,s){t.exports=s.p+"static/img/图层 15.e6423be.png"},Ypcs:function(t,e,s){t.exports=s.p+"static/img/XX+portrait.a3f7169.png"},"a/kR":function(t,e){},a78J:function(t,e,s){t.exports=s.p+"static/img/图层 13.95516dc.png"},cxAc:function(t,e,s){t.exports=s.p+"static/img/图层 11.f46cf0e.png"},eJ8C:function(t,e,s){t.exports=s.p+"static/img/bff8c9b0eff49ff55e7fccea09dbe9fe.552af46.png"},g8G6:function(t,e){},kM8q:function(t,e,s){t.exports=s.p+"static/img/d22c307ffed4a81b55b46e37b4c3d454.a002e7e.png"},mYk1:function(t,e,s){t.exports=s.p+"static/img/图层 12.a241f2b.png"},oYff:function(t,e,s){t.exports=s.p+"static/img/Shuyan+portrait.6e894ac.png"},pwPT:function(t,e,s){t.exports=s.p+"static/img/saonan.85a5826.png"},r8N3:function(t,e){},rmgm:function(t,e,s){t.exports=s.p+"static/img/Heidi.01d63fa.png"},ssbE:function(t,e,s){t.exports=s.p+"static/img/a5e37110bf29c206d148700a02e8133.e5f60c1.png"},ya5P:function(t,e,s){t.exports=s.p+"static/img/daniela-headshot.edb37d0.png"}},["NHnr"]);
//# sourceMappingURL=app.f51de444abeeba60d5eb.js.map