(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){e.exports={newsContainer:"News_newsContainer__2Fh9W",coverImageBox:"News_coverImageBox__KshSU"}},107:function(e,t,n){e.exports={container:"Settings_container__1gPtt",pageBlock:"Settings_pageBlock__24mkx"}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(158),a=n(159),c=n(163),o=n(162),u=n(10),i=n(0),s=n.n(i),l=n(17),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(c.a)(i,t);var n=Object(o.a)(i);function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),i}(s.a.Component);return Object(l.b)(p)(t)}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n(150),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"4dcedb0a-6d70-419d-b2bc-3c193df2bdc6"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteFollow:function(e){return a.delete("follow/".concat(e))},postFollow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logOut:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return p}));var r=n(46),a=n(5),c=n(141),o=n.n(c),u=n(40),i=n.n(u),s="my-app/dialogue/SEND-MESSAGE",l={messages:[{message:"\u041f\u0440\u0438\u0432\u0435\u0442",id:1},{message:"\u041f\u0440\u0438\u0432\u0435\u0442,\u0421\u0435\u0440\u0433\u0435\u0439",id:2}],dialogues:[{name:" \u0421\u0435\u0440\u0433\u0435\u0439",surname:"\u0424\u0440\u043e\u043b\u043e\u0432",photo:o.a,date:"19:32",id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{name:" \u0418\u0432\u0430\u043d \u0428\u0435\u0448\u0438\u043d",surname:"",photo:i.a,date:"0:32",id:2,message:"\u041f\u0440\u043e\u0449\u0430\u0439"}]},p=function(e){return{type:s,newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=function(){return Math.floor(97*Math.random()+3)};switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:n(),message:t.newMessage}])});default:return e}}},141:function(e,t,n){e.exports=n.p+"static/media/kal.00beb79c.jpg"},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.profilePage.profile},a=function(e){return e.profilePage.status}},147:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return A})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"g",(function(){return _}));var r=n(8),a=n.n(r),c=n(16),o=n(46),u=n(5),i=n(13),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),r):e}))},l="my-app/users/FOLLOW",p="my-app/users/UNFOLLOW",f="my-app/users/SET_USERS",m={users:[],pageSize:5,totalItemsCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},d=function(e){return{type:l,userId:e}},A=function(e){return{type:p,userId:e}},b=function(e){return{type:"my-app/users/SET_CURRENT_PAGE",currentPage:e}},g=function(e){return{type:"my-app/users/TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"my-app/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},E=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r(b(e)),n.next=4,i.d.getUsers(e,t);case 4:c=n.sent,r(g(!1)),r((a=c.items,{type:f,users:a})),r({type:"my-app/users/SET_TOTAL_USERS_COUNT",count:c.totalCount});case 8:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,i.d.postFollow.bind(i.d),d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,i.d.deleteFollow.bind(i.d),A);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case p:return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case f:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"my-app/users/SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"my-app/users/SET_TOTAL_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalItemsCount:t.count});case"my-app/users/TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"my-app/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},151:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHMAAABzAFMtTGqAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxUt3AAAADB0Uk5TAAEGCAkaGx8gKzAyNDhJTV5iZnV3e3+FjI+QlKWpur7D09XY3d/m6Ozw9vn7/P3+VSjbKQAAAKJJREFUWMPt17cSwjAURNEnRDAm54zJJqP//zqCCzPDyAhtQ7G31ykkNStiKZ4Pm2FO/DPPzstpt150P6TCNJO2j8atat4F0MbeZT3rNUoAkHRYTNo1BQCvdDYQJ/kD+u0VCBAgQIDAHwHXGwZsypUdBPRFRhDQERlAwKoQbLFLPJ74kQgQIECAAACo4JHKAr7Mvo/p++vwtADu0xce3z7z/w6rBlp17lPrpAAAAABJRU5ErkJggg=="},156:function(e,t,n){e.exports=n.p+"static/media/What How Meme in Minecraft.26e31879.mp4"},157:function(e,t,n){e.exports=n.p+"static/media/\u041f\u0438\u043d\u0433\u0432\u0438\u043d \u0443\u043f\u0430\u043b.0965de31.mp4"},164:function(e,t,n){},191:function(e,t,n){e.exports=n(320)},196:function(e,t,n){},197:function(e,t,n){},27:function(e,t,n){e.exports={nav:"Navbar_nav__1kkYK",item:"Navbar_item__3KShk",Button:"Navbar_Button__2Sc3O",loginBlock:"Navbar_loginBlock__17mzT"}},317:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(41),o=n.n(c),u=(n(196),n(197),n(108),n(10)),i=n(18),s=n(145),l=n(35),p=n(72),f=n(17),m=n(8),d=n.n(m),A=n(16),b=n(5),g=n(13),h=n(32),E={messages:[],data:{userId:null,email:null,login:null,isAuth:!1,captchaUrl:null}},v=function(e,t,n,r){return{type:"my-app/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},O=function(e){return{type:"my-app/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},_=function(){return function(){var e=Object(A.a)(d.a.mark((function e(t){var n,r,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,o=r.email,t(v(a,o,c,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(A.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.logOut();case 2:0===e.sent.data.resultCode&&t(_());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(A.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(O(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"my-app/auth/SET_USER_DATA":case"my-app/auth/GET_CAPTCHA_URL_SUCCESS":return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},w=n(51),C=n.n(w),N=n(78),x=n.n(N),P=n(37),U=n(151),k=n.n(U),I=Object(s.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(l.a)("Email",[p.c],"email",l.b),Object(l.a)("Password",[p.c,p.a],"password",l.b,{type:"password"}),a.a.createElement("input",{type:"checkbox"})," remember me",r&&a.a.createElement("img",{alt:"captcha",src:r}),r&&Object(l.a)("Captcha",[],"captchaUrl",l.b),n&&a.a.createElement("div",{className:C.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),T=Object(f.b)((function(e){return{isAuth:Object(P.a)(e),captchaUrl:Object(P.b)(e)}}),{login:function(e,t,n,r){return function(){var a=Object(A.a)(d.a.mark((function a(c){var o,u;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?c(_()):(10===o.data.resultCode&&c(j()),u=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(h.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logOut:y})((function(e){return e.isAuth?a.a.createElement(u.a,{to:"/profile"}):a.a.createElement("div",{className:x.a.loginContainer},a.a.createElement("div",{style:{textAlign:"center"},className:x.a.blockItem},a.a.createElement("div",{className:x.a.door},a.a.createElement("img",{src:k.a,alt:"door"})),a.a.createElement("h1",null,"Login"),a.a.createElement(I,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captchaUrl)},captchaUrl:e.captchaUrl})))})),F=n(9),L={initialized:!1,globalError:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"my-app/app/INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},B=n(70),G=n(71),M=n(140),D=n(147),z=n(155),H=n(146),J=n(156),K=n.n(J),Q=n(157),W=n.n(Q),V={stories:[{id:1,profile_name:"Sergey",video_url:K.a,duration:"7"},{id:2,profile_name:"Sergey",video_url:W.a,duration:"7"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type,e},X=Object(F.c)({profilePage:G.b,dialoguesPage:M.a,usersPage:D.a,auth:S,app:R,news:Z,form:H.a}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,Y=Object(F.e)(X,q(Object(F.a)(z.a))),$=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},ee=n(27),te=n.n(ee),ne=n(336),re=function(e){return a.a.createElement("nav",{className:te.a.nav},a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/profile"},"Profile")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/dialogues"},"Messages")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/news"},"News")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/profile"},"Music")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/settings"},"Settings")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"/"},"Friends")),a.a.createElement("div",{className:te.a.item},a.a.createElement(i.b,{to:"users"},"Find Users")),a.a.createElement("div",{className:te.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement(ne.a,{onClick:e.logOut},"Log out")," "):a.a.createElement(i.b,{to:"/login"},"Login")))},ae=Object(F.d)(Object(f.b)((function(e){return{isAuth:Object(P.a)(e),login:e.auth.login}}),{logOut:y}))((function(e){return a.a.createElement(re,e)})),ce=n(55),oe=n(109),ue=n(47),ie=n(106),se=n.n(ie),le=n(40),pe=n.n(le),fe=(n(317),n(164),n(143)),me=n.n(fe),de=n(161),Ae=n.n(de),be=n(160),ge=n.n(be),he=function(e){var t=e.closeStory,n=e.profile,c=e.stories,o=Object(r.useState)(!1),u=Object(ue.a)(o,2),i=u[0],s=u[1],l=Object(r.useState)(0),p=Object(ue.a)(l,2),f=p[0],m=p[1],d=Object(r.useRef)(0);Object(r.useEffect)((function(){var e=document.getElementById("video");e&&(e.onended=function(e){d.current===c.length-1?t():m((function(e){return e+1}))})}),[t,c.length]),Object(r.useEffect)((function(){d.current=f}),[f]);Object(r.useEffect)((function(){i?document.getElementById("video").pause():document.getElementById("video").play()}),[i]);var A=function(e){return e<f?"progress-bar progress-bar-finished":e===f?i?"progress-bar progress-bar-active progress-bar-paused":"progress-bar progress-bar-active":"progress-bar"};return a.a.createElement("div",{onClick:function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;"story-container"===e.className&&t()}(e.target)},className:"story-container"},a.a.createElement("div",{className:"story"},a.a.createElement("div",{className:"title"},a.a.createElement("img",{src:n.photos.large||pe.a,alt:""}),a.a.createElement("div",{className:"details"},a.a.createElement("span",null,"\u0421\u0435\u0440\u0433\u0435\u0439 \u0424\u0440\u043e\u043b\u043e\u0432")),a.a.createElement("div",{className:"spacer"}),i&&a.a.createElement("div",{className:"pause"},"PAUSED"),a.a.createElement(me.a,{style:{color:"white"}})),a.a.createElement("div",{className:"progress-bars"},c.map((function(e,t){return a.a.createElement("div",{className:"progress-bar-container"},a.a.createElement("div",{style:{animationDuration:"".concat(c[0].duration,"s")},className:A(t)}))}))),a.a.createElement("div",{className:"video"},a.a.createElement("video",{onMouseDown:function(e){return s(!0)},onMouseUp:function(e){return s(!1)},id:"video",src:c[f].video_url,autoPlay:!0}),0!==f&&a.a.createElement(ge.a,{onClick:function(e){return m((function(e){return e-1}))},className:"previous hover-able"}),f!==c.length-1&&a.a.createElement(Ae.a,{onClick:function(e){return m((function(e){return e+1}))},className:"next hover-able"}))))},Ee=function(e){var t=e.profile,n=e.stories,c=Object(r.useState)(!1),o=Object(ue.a)(c,2),u=o[0],i=o[1];if(!t)return a.a.createElement(B.a,null);return a.a.createElement("div",{className:se.a.newsContainer},a.a.createElement("div",{className:se.a.coverImageBox},a.a.createElement("img",{alt:"test",src:t.photos.large||pe.a,onClick:function(e){i(!0)}})),u&&a.a.createElement(he,{closeStory:function(){i(!1)},profile:t,stories:n}))},ve=n(144),Oe=function(e){return e.news.stories},_e=Object(F.d)(oe.a,u.g,Object(f.b)((function(e){return{profile:Object(ve.a)(e),authorizedUser:Object(P.c)(e),stories:Oe(e)}}),{getUserProfile:G.c}))((function(e){var t=e.profile,n=e.match,c=e.stories,o=e.authorizedUser,u=e.getUserProfile,i=Object(ce.a)(e,["profile","match","stories","authorizedUser","getUserProfile"]),s=Object(r.useCallback)((function(){var e=n.params.userId;e||(e=o),u(e)}),[o,n.params.userId,u]);return Object(r.useEffect)((function(){s()}),[s]),a.a.createElement(Ee,Object.assign({},i,{profile:t,isOwner:!n.params.userId,stories:c}))})),ye=n(107),je=n.n(ye),Se=function(e){return a.a.createElement("div",{className:je.a.container},a.a.createElement("div",{className:je.a.pageBlock}))},we=a.a.lazy((function(){return n.e(4).then(n.bind(null,348))})),Ce=a.a.lazy((function(){return n.e(3).then(n.bind(null,349))})),Ne=a.a.lazy((function(){return n.e(5).then(n.bind(null,350))})),xe=Object(F.d)(u.g,Object(f.b)((function(e){return{initialized:e.app.initialized,auth:e.auth.isAuth}}),{initializeApp:function(){return function(e){var t=e(_());Promise.all([t]).then((function(){e({type:"my-app/app/INITIALIZED_SUCCESS"})}))}}}))((function(e){return Object(r.useEffect)((function(){e.initializeApp()})),e.initialized?a.a.createElement("div",{className:"app-wrapper"},e.auth?a.a.createElement(ae,null):null,a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",render:function(){return a.a.createElement(u.a,{to:"/profile"})}}),a.a.createElement(u.b,{path:"/dialogues",render:$(Ce)}),a.a.createElement(u.b,{path:"/profile/:userId?",render:$(we)}),a.a.createElement(u.b,{path:"/news",component:_e}),a.a.createElement(u.b,{exact:!0,path:"/users",render:$(Ne)}),a.a.createElement(u.b,{path:"/login",render:function(){return a.a.createElement(T,null)}}),a.a.createElement(u.b,{path:"/settings",render:function(){return a.a.createElement(Se,null)}}),a.a.createElement(u.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(B.a,null)})),Pe=function(e){return a.a.createElement(i.a,{basename:"/react-deploy"},a.a.createElement(f.a,{store:Y},a.a.createElement(xe,null)))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var r=n(55),a=n(0),c=n.n(a),o=n(51),u=n.n(o),i=n(99),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,o=r&&n;return c.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},c.a.createElement("div",null,a),o&&c.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e," ",c.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e," ",c.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6?arguments[6]:void 0;return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,validate:t,name:n,component:r},a,{className:u}))," ",o)}},37:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){return e.auth.userId},a=function(e){return e.auth.isAuth},c=function(e){return e.auth.captchaUrl}},40:function(e,t,n){e.exports=n.p+"static/media/default.b5a70c38.png"},51:function(e,t,n){e.exports={formControl:"FormControls_formControl__2pgHk",error:"FormControls_error__yywNn",formSummaryError:"FormControls_formSummaryError__SFxmz",textareaAboutMe:"FormControls_textareaAboutMe__BFaru"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(321),o=function(e){return a.a.createElement("div",{style:{textAlign:"center",top:"50%",position:"absolute",left:"50%"}},a.a.createElement(c.a,{color:"secondary"}))}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return v}));var r=n(8),a=n.n(r),c=n(16),o=n(46),u=n(5),i=n(13),s=n(32),l="my-app/profile/ADD-POST",p="my-app/profile/SET_STATUS",f="my-app/profile/DELETE_POST",m={posts:[{id:1,message:" \u0417\u0410\u0410\u0410\u0410\u0410",likeCounts:25},{id:2,message:" sdsss",likeCounts:12}],profile:null,status:""},d=function(e){return{type:l,newPostText:e}},A=function(e){return{type:p,status:e}},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n({type:"my-app/profile/SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(A(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(A(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"my-app/profile/SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(b(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likeCounts:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"my-app/profile/SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case p:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case f:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"my-app/profile/SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},72:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Must be ".concat(e," symbols or less")}},c=a(10),o=a(100)},78:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__3K9Zd",blockItem:"Login_blockItem__360rI",door:"Login_door__2Fu6l",rememberMe:"Login_rememberMe__2B2_T"}}},[[191,1,2]]]);
//# sourceMappingURL=main.c164e326.chunk.js.map