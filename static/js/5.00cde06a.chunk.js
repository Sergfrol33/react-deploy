(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{340:function(e,n,t){e.exports={usersPhoto:"Users_usersPhoto__2cFNM",selectPage:"Users_selectPage__1uPmW",blockItem:"Users_blockItem__1DkqM"}},347:function(e,n,t){e.exports={paginator:"Paginition_paginator__33FWd",pageNumber:"Paginition_pageNumber__z6J30"}},350:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(17),o=t(147),u=t(55),i=t(70),s=t(47),c=t(347),f=t.n(c),g=t(80),m=t.n(g),p=t(336),d=t(1),v=t(11),P=t(142),E=a.a.forwardRef((function(e,n){var t=e.bsPrefix,r=e.size,l=e.toggle,o=e.vertical,u=e.className,i=e.as,s=void 0===i?"div":i,c=Object(v.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(P.a)(t,"btn-group"),g=f;return o&&(g=f+"-vertical"),a.a.createElement(s,Object(d.a)({},c,{ref:n,className:m()(u,g,r&&f+"-"+r,l&&f+"-toggle")}))}));E.displayName="ButtonGroup",E.defaultProps={vertical:!1,toggle:!1,role:"group"};var h=E,b=(t(108),function(e){for(var n=e.totalItemsCount,t=e.pageSize,l=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,i=Math.ceil(n/t),c=[],g=1;g<i;g++)c.push(g);var d=Math.ceil(i/u),v=Object(r.useState)(1),P=Object(s.a)(v,2),E=P[0],b=P[1],w=(E-1)*u+1,y=E*u;return a.a.createElement("div",{className:f.a.paginator},E>1&&a.a.createElement(p.a,{onClick:function(){b(E-1)}},"PREV"),c.filter((function(e){return e>=w&&e<=y})).map((function(e){return a.a.createElement(h,{onClick:function(){l(e)},className:m()(f.a.pageNumber),key:e},a.a.createElement(p.a,{variant:"outline-primary"},e))})),d>E&&a.a.createElement(p.a,{onClick:function(){b(E+1)}},"NEXT"))}),w=t(40),y=t.n(w),C=t(340),_=t.n(C),I=t(18),N=function(e){var n=e.user,t=e.followingInProgress,r=e.follow,l=e.unfollow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(I.b,{to:"/profile/"+n.id},a.a.createElement("div",{className:_.a.selectUser},a.a.createElement("img",{src:null!=n.photos.small?n.photos.small:y.a,alt:"PhotoUser",className:_.a.usersPhoto})))),a.a.createElement("div",null,n.followed?a.a.createElement(p.a,{variant:"outline-danger",disabled:t.some((function(e){return e===n.id})),onClick:function(){l(n.id)}},"Unfollow"):a.a.createElement(p.a,{variant:"outline-success",disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,n.name),a.a.createElement("div",null,n.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},k=function(e){var n=e.currentPage,t=e.totalItemsCount,r=e.pageSize,l=e.onPageChanged,o=e.users,s=Object(u.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,s.isFetching?a.a.createElement(i.a,null):null,a.a.createElement("div",{className:_.a.blockItem},a.a.createElement(b,{currentPage:n,totalItemsCount:t,pageSize:r,onPageChanged:l}),o.map((function(e){return a.a.createElement(N,{user:e,followingInProgress:s.followingInProgress,key:e.id,unfollow:s.unfollow,follow:s.follow})}))))},S=t(9);function z(e,n){return e===n}function j(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function O(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var U=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var l=0,o=r.pop(),u=O(r),i=e.apply(void 0,[function(){return l++,o.apply(null,arguments)}].concat(t)),s=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=o,s.dependencies=u,s.recomputations=function(){return l},s.resetRecomputations=function(){return l=0},s}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,t=null,r=null;return function(){return j(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var F=U((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),x=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalItemsCount},A=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},J=function(e){return e.usersPage.followingInProgress},R=t(109),W=t(10);n.default=Object(S.d)(R.a,W.g,Object(l.b)((function(e){return{users:F(e),pageSize:x(e),totalItemsCount:q(e),currentPage:A(e),isFetching:M(e),followingInProgress:J(e)}}),{followSuccess:o.c,unfollowSuccess:o.h,setCurrentPage:o.e,toggleFollowingProgress:o.f,requestUsers:o.d,follow:o.b,unfollow:o.g}))((function(e){return Object(r.useEffect)((function(){var n=e.currentPage,t=e.pageSize;e.requestUsers(n,t)}),[]),a.a.createElement(k,Object.assign({},e,{onPageChanged:function(n){var t=e.pageSize;e.requestUsers(n,t)}}))}))}}]);
//# sourceMappingURL=5.00cde06a.chunk.js.map