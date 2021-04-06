(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return U}));var a=n(88),c=n(0),r=n(94),i=n.n(r),o=n(103),s=n(89),u=n.n(s),l=n(1);var m=function(t){var e=t.title,n=t.children;return Object(l.jsxs)("div",{className:i.a.section,children:[Object(l.jsx)(o.a,{in:!0,appear:!0,timeout:500,classNames:u.a,unmountOnExit:!0,children:Object(l.jsx)("h1",{className:i.a.title,children:e})}),n]})},b=n(95),j=n.n(b);function _(t){var e=t.name,n=void 0===e?"":e,a=t.number,c=void 0===a?0:a,r=t.onChangeInput,i=t.onSubmitForm;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:j.a.form,onSubmit:i,children:[Object(l.jsxs)("label",{className:j.a.formLabel,children:["Name",Object(l.jsx)("input",{name:"name",type:"text",className:j.a.formInput,value:n,onChange:r,required:!0})]}),Object(l.jsxs)("label",{className:j.a.formLabel,children:["Number",Object(l.jsx)("input",{name:"number",type:"text",className:j.a.formInput,value:c,onChange:r,required:!0})]}),Object(l.jsx)("button",{type:"submit",className:j.a.formButton,children:"Add contact"})]})})}var f=n(96),p=n.n(f),h=n(104),d=n(8),x=n(18),O=n.n(x),v=n(24),C=n(21),g=n.n(C),N=n(16),L=N.a.fetchItemsRequest,A=N.a.fetchItemsSuccess,k=N.a.fetchItemsError,S=N.a.addContactRequest,F=N.a.addContactSuccess,w=N.a.addContactError,E=N.a.deleteContactRequest,I=N.a.deleteContactSuccess,y=N.a.deleteContactError,P=function(){return function(){var t=Object(v.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(L()),g.a.get("/contacts").then((function(t){var n=t.data;return e(A(n))})).catch((function(t){return e(k(t.message))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(t,e){return function(n){var a={name:t,number:e};n(S()),g.a.post("/contacts",a).then((function(t){var e=t.data;return n(F(e))})).catch((function(t){return n(w(t.message))}))}},B=function(t){return function(e){e(E()),g.a.delete("/contacts/".concat(t)).then((function(){return e(I(t))})).catch((function(t){return e(y(t.message))}))}},Z=n(28),H=function(t){return t.contacts.items},M=function(t){return t.contacts.filter},T={getAllContacts:H,getFilter:M,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(Z.a)([H,M],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))};function D(){var t=Object(d.c)(),e=Object(d.d)(T.getVisibleContacts);return Object(l.jsx)(h.a,{component:"ul",className:p.a.list,children:0===e.length?Object(l.jsx)(o.a,{in:0===e.length,timeout:250,classNames:u.a,unmountOnExit:!0,children:Object(l.jsx)("p",{children:"Add contacts please"})}):e.map((function(e){return Object(l.jsx)(o.a,{in:!0,appear:!0,timeout:250,classNames:u.a,unmountOnExit:!0,children:Object(l.jsxs)("li",{className:p.a.items,children:[Object(l.jsxs)("p",{children:[Object(l.jsxs)("span",{children:[e.name,": "]}),Object(l.jsx)("span",{children:e.number})]}),Object(l.jsx)("button",{className:p.a.button,onClick:function(){return n=e.id,t(B(n));var n},children:"Delete"})]})},e.id)}))})}var J=n(97),R=n.n(J);function Y(){var t=Object(d.c)(),e=Object(d.d)(T.getFilter),n=Object(d.d)(T.getAllContacts);return Object(l.jsx)(o.a,{in:n.length>0,timeout:250,classNames:u.a,unmountOnExit:!0,children:Object(l.jsxs)("label",{className:R.a.label,children:["Find contacts by name",Object(l.jsx)("input",{type:"text",value:e,onChange:function(e){return t(N.a.changeFilter(e.target.value))},className:R.a.input})]})})}var V=n(98),X=n.n(V);function K(){return Object(l.jsx)("p",{className:X.a.alert,children:"This contact is already in phonebook"})}function U(){var t=Object(d.c)(),e=Object(c.useState)(""),n=Object(a.a)(e,2),r=n[0],i=n[1],s=Object(c.useState)(""),b=Object(a.a)(s,2),j=b[0],f=b[1],p=Object(c.useState)(""),h=Object(a.a)(p,2),x=h[0],O=h[1],v=Object(d.d)(T.getAllContacts),C=function(){i(""),f("")};Object(c.useEffect)((function(){t(P())}),[t]);var g=Object(c.useCallback)((function(){t(q(r,j))}),[t,r,j]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{title:"Phonebook",children:Object(l.jsx)(_,{name:r,number:j,onChangeInput:function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":f(a)}},onSubmitForm:function(t){if(t.preventDefault(),v.find((function(t){return t.name.toLowerCase()===r.toLowerCase()})))return O(!0),void setTimeout((function(){O(!1)}),2e3);g(r,j),C()}})}),Object(l.jsxs)(m,{title:"Contacts",children:[Object(l.jsx)(o.a,{timeout:250,classNames:u.a,children:Object(l.jsx)(Y,{})}),Object(l.jsx)(o.a,{timeout:500,children:Object(l.jsx)(D,{})}),Object(l.jsx)(o.a,{in:!0===x,timeout:1e3,classNames:u.a,unmountOnExit:!0,children:Object(l.jsx)(K,{})})]})]})}},89:function(t,e,n){t.exports={appear:"Phonebook_appear__yJgOh",appearActive:"Phonebook_appearActive__3Ziek",enter:"Phonebook_enter__31Slw",enterActive:"Phonebook_enterActive__2DBfH",exit:"Phonebook_exit__2oeof",exitActive:"Phonebook_exitActive__19vMS"}},94:function(t,e,n){t.exports={section:"Section_section__3yXxN",title:"Section_title__2xFB4",appear:"Section_appear__3uC4x",appearActive:"Section_appearActive__1LZqP"}},95:function(t,e,n){t.exports={form:"Form_form__qH7vc",formLabel:"Form_formLabel__27OK1",formInput:"Form_formInput__1oaHI",formButton:"Form_formButton__2MAZE"}},96:function(t,e,n){t.exports={list:"ContactsList_list__3Zy_i","item-appear":"ContactsList_item-appear__1hk3Z","item-appearActive":"ContactsList_item-appearActive__1nTtL","item-enter":"ContactsList_item-enter__2sOY4","item-enterActive":"ContactsList_item-enterActive__2NcBs","item-exit":"ContactsList_item-exit__1sYIM","item-exitActive":"ContactsList_item-exitActive__3b75Y",items:"ContactsList_items__2m7NE",button:"ContactsList_button__3NTZX"}},97:function(t,e,n){t.exports={label:"Filter_label__34gLa",input:"Filter_input__lm0xo"}},98:function(t,e,n){t.exports={alert:"ErrorMessage_alert__1Hd2U"}}}]);
//# sourceMappingURL=3.02646af1.chunk.js.map