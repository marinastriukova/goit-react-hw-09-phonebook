(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{16:function(e,t,r){"use strict";var n=r(4),c=Object(n.b)("phonebook/fetchItemsRequest"),a=Object(n.b)("phonebook/fetchItemsSuccess"),o=Object(n.b)("phonebook/fetchItemsError"),u=Object(n.b)("phonebook/addContactRequest"),s=Object(n.b)("phonebook/addContactSuccess"),i=Object(n.b)("phonebook/addContactError"),b=Object(n.b)("phonebook/deleteContactRequest"),j=Object(n.b)("phonebook/deleteContactSuccess"),l=Object(n.b)("phonebook/deleteContactError"),O=Object(n.b)("phonebook/changeFilter");t.a={fetchItemsRequest:c,fetchItemsSuccess:a,fetchItemsError:o,addContactRequest:u,addContactSuccess:s,addContactError:i,deleteContactRequest:b,deleteContactSuccess:j,deleteContactError:l,changeFilter:O}},17:function(e,t,r){e.exports={header:"AppBar_header__1SQ1W",link:"AppBar_link__cfjdF",activeLink:"AppBar_activeLink__AywG6 AppBar_link__cfjdF"}},2:function(e,t,r){"use strict";var n=r(4),c=Object(n.b)("auth/registerRequest"),a=Object(n.b)("auth/registerSuccess"),o=Object(n.b)("auth/registerError"),u=Object(n.b)("auth/loginRequest"),s=Object(n.b)("auth/loginSuccess"),i=Object(n.b)("auth/loginError"),b=Object(n.b)("auth/logoutRequest"),j=Object(n.b)("auth/logoutSuccess"),l=Object(n.b)("auth/logoutError"),O=Object(n.b)("auth/getCurrentUserRequest"),d=Object(n.b)("auth/getCurrentUserSuccess"),h=Object(n.b)("auth/getCurrentUserError");t.a={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:j,logoutError:l,loginRequest:u,loginSuccess:s,loginError:i,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:h}},29:function(e,t,r){"use strict";var n,c,a,o,u=r(3),s=r(7),i=r(4),b=r(2),j=(r(9),{name:null,email:null,password:null}),l=Object(i.c)(j,(n={},Object(u.a)(n,b.a.registerSuccess,(function(e,t){return t.payload.user})),Object(u.a)(n,b.a.loginSuccess,(function(e,t){return t.payload.user})),Object(u.a)(n,b.a.logoutSuccess,(function(){return j})),Object(u.a)(n,b.a.getCurrentUserSuccess,(function(e,t){return t.payload})),n)),O=Object(i.c)(null,(c={},Object(u.a)(c,b.a.registerSuccess,(function(e,t){return t.payload.token})),Object(u.a)(c,b.a.loginSuccess,(function(e,t){return t.payload.token})),Object(u.a)(c,b.a.logoutSuccess,(function(){return null})),c)),d=function(e,t){return t.payload},h=Object(i.c)(null,(a={},Object(u.a)(a,b.a.registerError,d),Object(u.a)(a,b.a.loginError,d),Object(u.a)(a,b.a.logoutError,d),Object(u.a)(a,b.a.getCurrentUserError,d),a)),f=Object(i.c)(!1,(o={},Object(u.a)(o,b.a.registerSuccess,(function(){return!0})),Object(u.a)(o,b.a.loginSuccess,(function(){return!0})),Object(u.a)(o,b.a.getCurrentUserSuccess,(function(){return!0})),Object(u.a)(o,b.a.logoutRequest,(function(){return!0})),Object(u.a)(o,b.a.logoutError,(function(){return!0})),Object(u.a)(o,b.a.registerRequest,(function(){return!1})),Object(u.a)(o,b.a.registerError,(function(){return!1})),Object(u.a)(o,b.a.loginRequest,(function(){return!1})),Object(u.a)(o,b.a.loginError,(function(){return!1})),Object(u.a)(o,b.a.getCurrentUserRequest,(function(){return!1})),Object(u.a)(o,b.a.getCurrentUserError,(function(){return!1})),Object(u.a)(o,b.a.logoutSuccess,(function(){return!1})),o));t.a=Object(s.c)({user:l,token:O,isAuthenticated:f,error:h})},58:function(e,t,r){},84:function(e,t,r){},87:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(26),a=r.n(c),o=(r(58),r(47)),u=r(48),s=r(53),i=r(52),b=r(6),j=r(20),l=r(31),O=r(8),d=r(9),h=r(1),f=Object(O.b)((function(e){return{isAuthenticated:d.b.getIsAuthenticated(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,n=e.redirectTo,c=Object(l.a)(e,["component","isAuthenticated","redirectTo"]);return Object(h.jsx)(b.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r?Object(h.jsx)(t,Object(j.a)({},e)):Object(h.jsx)(b.a,{to:n})}}))})),g=Object(O.b)((function(e){return{isAuthenticated:d.b.getIsAuthenticated(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,n=e.redirectTo,c=Object(l.a)(e,["component","isAuthenticated","redirectTo"]);return Object(h.jsx)(b.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r&&c.restricted?Object(h.jsx)(b.a,{to:n}):Object(h.jsx)(t,Object(j.a)({},e))}}))})),p=(r(84),r(15)),k=r(17),m=r.n(k);function x(){var e=Object(O.d)(d.b.getIsAuthenticated);return Object(h.jsxs)("nav",{children:[Object(h.jsx)(p.b,{to:"/",className:m.a.link,children:"Home"}),e&&Object(h.jsx)(p.b,{to:"/phonebook",className:m.a.link,children:"Phonebook"})]})}var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.b,{to:"/register",className:m.a.link,activeClassName:m.a.activeLink,children:"Register"}),Object(h.jsx)(p.b,{to:"/login",className:m.a.link,activeClassName:m.a.activeLink,children:"Login"})]})},C={container:{display:"flex",alignItems:"center"},name:{fontWeight:700,marginRight:12},button:{padding:3,backgroundColor:"rgb(151, 155, 208)"}};function S(){var e=Object(O.c)(),t=Object(O.d)(d.b.getUsername),r=Object(n.useCallback)((function(){e(d.a.logOut())}),[e]);return Object(h.jsxs)("div",{style:C.container,children:[Object(h.jsxs)("span",{style:C.name,children:["Welcome, ",t]}),Object(h.jsx)("button",{style:C.button,type:"button",onClick:r,children:"Logout"})]})}function E(){var e=Object(O.d)(d.b.getIsAuthenticated);return Object(h.jsxs)("header",{className:m.a.header,children:[Object(h.jsx)(x,{}),e?Object(h.jsx)(S,{}):Object(h.jsx)(v,{})]})}var y,R,q=Object(n.lazy)((function(){return r.e(7).then(r.bind(null,99))})),A=Object(n.lazy)((function(){return Promise.all([r.e(6),r.e(3)]).then(r.bind(null,102))})),U=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,100))})),I=Object(n.lazy)((function(){return r.e(5).then(r.bind(null,101))})),w=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(E,{}),Object(h.jsx)(n.Suspense,{fallback:Object(h.jsx)("h1",{children:"Loader..."}),children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(g,{path:"/",exact:!0,component:q}),Object(h.jsx)(g,{path:"/register",restricted:!0,redirectTo:"/phonebook",component:I}),Object(h.jsx)(g,{path:"/login",restricted:!0,redirectTo:"/phonebook",component:U}),Object(h.jsx)(f,{path:"/phonebook",redirectTo:"/login",component:A})]})})]})}}]),r}(n.Component),_={onGetCurrentUser:d.a.getCurrentUser},L=Object(O.b)(null,_)(w),T=r(30),z=r(4),N=r(19),B=r(50),F=r.n(B),G=r(3),W=r(7),J=r(16),P=J.a.fetchItemsRequest,D=J.a.fetchItemsSuccess,H=J.a.fetchItemsError,M=J.a.addContactRequest,Q=J.a.addContactSuccess,K=J.a.addContactError,V=J.a.deleteContactRequest,X=J.a.deleteContactSuccess,Y=J.a.deleteContactError,Z=J.a.changeFilter,$=Object(z.c)([],(y={},Object(G.a)(y,D,(function(e,t){return t.payload})),Object(G.a)(y,Q,(function(e,t){var r=t.payload;return[].concat(Object(T.a)(e),[r])})),Object(G.a)(y,X,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),y)),ee=Object(z.c)("",Object(G.a)({},Z,(function(e,t){return t.payload}))),te=Object(z.c)(!1,(R={},Object(G.a)(R,P,(function(){return!0})),Object(G.a)(R,D,(function(){return!1})),Object(G.a)(R,H,(function(){return!1})),Object(G.a)(R,M,(function(){return!0})),Object(G.a)(R,Q,(function(){return!1})),Object(G.a)(R,K,(function(){return!1})),Object(G.a)(R,V,(function(){return!0})),Object(G.a)(R,X,(function(){return!1})),Object(G.a)(R,Y,(function(){return!1})),R)),re=Object(W.c)({items:$,filter:ee,loading:te}),ne=r(29),ce=Object(T.a)(Object(z.d)({serializableCheck:{ignoredActions:[N.a,N.f,N.b,N.c,N.d,N.e]}})),ae={key:"auth",storage:F.a,whitelist:["token"]},oe=Object(z.a)({reducer:{auth:Object(N.g)(ae,ne.a),contacts:re},middleware:ce,devTools:!1}),ue={store:oe,persistor:Object(N.h)(oe)},se=r(51);a.a.render(Object(h.jsx)(O.a,{store:ue.store,children:Object(h.jsx)(se.a,{loading:null,persistor:ue.persistor,children:Object(h.jsx)(p.a,{children:Object(h.jsx)(L,{})})})}),document.getElementById("root"))},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return l}));var n=r(2),c=(r(29),r(18)),a=r.n(c),o=r(24),u=r(21),s=r.n(u);s.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){s.a.defaults.headers.common.Authorization=""},j={register:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(n.a.registerRequest()),t.prev=1,t.next=4,s.a.post("/users/signup",e);case 4:c=t.sent,i(c.data.token),r(n.a.registerSuccess(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(n.a.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(n.a.loginRequest()),t.prev=1,t.next=4,s.a.post("/users/login",e);case 4:c=t.sent,i(c.data.token),r(n.a.loginSuccess(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(n.a.logoutError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(o.a)(a.a.mark((function e(t,r){var c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r(),o=c.auth.token){e.next=3;break}return e.abrupt("return");case 3:return i(o),t(n.a.getCurrentUserRequest()),e.prev=5,e.next=8,s.a.get("/users/current");case 8:u=e.sent,t(n.a.getCurrentUserSuccess(u.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(n.a.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(n.a.logoutRequest()),e.prev=1,e.next=4,s.a.post("/users/logout");case 4:b(),t(n.a.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(n.a.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},l={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUsername:function(e){return e.auth.user.name}}}},[[87,1,2]]]);
//# sourceMappingURL=main.d59bf1ac.chunk.js.map