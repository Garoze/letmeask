(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{35:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(25),s=n.n(a),c=n(14),i=n(6),o=n(5),u=n.n(o),l=n(8),d=n(9),j=n.p+"static/media/logo.a88331cb.svg",b=n.p+"static/media/google-icon.df15d8e5.svg",h=n.p+"static/media/illustration.ae7276f0.svg",p=n(28),m=n(29),f=(n(35),n(1)),x=function(e){var t=e.isOutlined,n=Object(m.a)(e,["isOutlined"]);return Object(f.jsx)("button",Object(p.a)({type:"button",className:"button ".concat(t?"outlined":"")},n))},O=(n(37),n(39),n(18));O.a.initializeApp({apiKey:"AIzaSyDnGiwO-aFlr_mx53A932Z2rv4IcFKHJiY",authDomain:"letmeask-nlw-4f578.firebaseapp.com",databaseURL:"https://letmeask-nlw-4f578-default-rtdb.firebaseio.com",projectId:"letmeask-nlw-4f578",storageBucket:"letmeask-nlw-4f578.appspot.com",messagingSenderId:"649418528554",appId:"1:649418528554:web:3ac0905ed61231b354f053"});var v=O.a.auth(),g=O.a.database(),k=Object(r.createContext)({}),w=function(e){var t=e.children,n=Object(r.useState)(),a=Object(d.a)(n,2),s=a[0],c=a[1];Object(r.useEffect)((function(){var e=v.onAuthStateChanged((function(t){if(t){var n=t.displayName,r=t.photoURL,a=t.uid;if(!n||!r)throw new Error("Missing information from Google Account!");c({id:a,name:n,avatar:r})}return function(){return e()}}))}),[]);var i=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,a,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a.auth.GoogleAuthProvider,e.next=3,v.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,a=r.displayName,s=r.photoURL,i=r.uid,a&&s){e.next=8;break}throw new Error("Missing information from Google Account!");case 8:c({id:i,name:a,avatar:s});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(k.Provider,{value:{user:s,signInWithGoogle:i},children:t})},C=function(){return Object(r.useContext)(k)},y=(n(43),function(){var e=Object(i.f)(),t=C(),n=t.user,a=t.signInWithGoogle,s=Object(r.useState)(""),c=Object(d.a)(s,2),o=c[0],p=c[1],m=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,a();case 3:e.push("/rooms/create");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==o.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,g.ref("/rooms/".concat(o)).get();case 5:if((r=t.sent).exists()){t.next=8;break}return t.abrupt("return",alert("This room does not exists."));case 8:if(!r.val().endedAt){t.next=10;break}return t.abrupt("return",alert("Room already closed."));case 10:e.push("/rooms/".concat(o));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:h,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(f.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(f.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:j,alt:"Letmeask"}),Object(f.jsxs)("button",{type:"button",onClick:m,className:"create-room",children:[Object(f.jsx)("img",{src:b,alt:"Logo do google"}),"Crie sua sala com o google"]}),Object(f.jsx)("div",{className:"separator",children:"Ou entre em uma sala"}),Object(f.jsxs)("form",{onSubmit:O,children:[Object(f.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return p(e.target.value)},value:o}),Object(f.jsx)(x,{type:"submit",children:"Entrar na sala"})]})]})})]})}),N=n(27),A=n.n(N),I=(n(48),function(e){var t=e.content,n=e.author,r=e.isAnswered,a=void 0!==r&&r,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(f.jsxs)("div",{className:A()("question",{answered:a},{highlighted:c&&!a}),children:[Object(f.jsx)("p",{children:t}),Object(f.jsxs)("footer",{children:[Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("img",{src:n.avatar,alt:n.name}),Object(f.jsx)("span",{children:n.name})]}),Object(f.jsx)("div",{children:i})]})]})}),q=n.p+"static/media/copy.2f36f99e.svg",S=(n(49),function(e){var t=e.code;return Object(f.jsxs)("button",{type:"button",className:"room-code",onClick:function(){navigator.clipboard.writeText(t)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:q,alt:"Copy room code"})}),Object(f.jsxs)("span",{children:["Sala #",t]})]})}),H=function(e){var t=C().user,n=Object(r.useState)(""),a=Object(d.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)([]),o=Object(d.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){var n=g.ref("/rooms/".concat(e));return n.on("value",(function(e){var n,r=Object.entries(null!==(n=e.val().questions)&&void 0!==n?n:{}).map((function(e){var n,r,a,s=Object(d.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(a=i.likes)&&void 0!==a?a:{}).find((function(e){return Object(d.a)(e,2)[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));c(e.val().title),l(r)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{usersQuestions:u,title:s}},L=(n(50),function(){var e=C(),t=e.user,n=e.signInWithGoogle,a=Object(r.useState)(""),s=Object(d.a)(a,2),o=s[0],b=s[1],h=Object(i.g)(),p=H(h.id),m=p.title,O=p.usersQuestions,v=function(){var e=Object(l.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==o.trim()){e.next=3;break}return e.abrupt("return");case 3:if(t){e.next=5;break}throw new Error("You must be logged in.");case 5:return r={content:o,author:{name:null===t||void 0===t?void 0:t.name,avatar:null===t||void 0===t?void 0:t.avatar},isHighlighted:!1,isAnswered:!1},e.next=8,g.ref("/rooms/".concat(h.id,"/questions")).push(r);case 8:b("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,g.ref("/rooms/".concat(h.id,"/questions/").concat(n,"/likes/").concat(r)).remove();case 3:e.next=7;break;case 5:return e.next=7,g.ref("/rooms/".concat(h.id,"/questions/").concat(n,"/likes")).push({authorId:null===t||void 0===t?void 0:t.id});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"page-room",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)(c.b,{to:"/",children:Object(f.jsx)("img",{src:j,alt:"Letmeask logo"})}),Object(f.jsx)(S,{code:h.id})]})}),Object(f.jsxs)("main",{children:[Object(f.jsxs)("div",{className:"room-title",children:[Object(f.jsxs)("h1",{children:["Sala",m]}),O.length>0&&Object(f.jsxs)("span",{children:[O.length,"\xa0pergunta(s)"]})]}),Object(f.jsxs)("form",{onSubmit:v,children:[Object(f.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return b(e.target.value)},value:o}),Object(f.jsxs)("div",{className:"form-footer",children:[t?Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("img",{src:t.avatar,alt:t.name}),Object(f.jsx)("span",{children:t.name})]}):Object(f.jsxs)("span",{children:["Para enviar uma perguntar,\xa0",Object(f.jsx)("button",{type:"button",onClick:n,children:"fa\xe7a o seu login"})]}),Object(f.jsx)(x,{type:"submit",disabled:!t,children:"Enviar pergunta"})]})]}),Object(f.jsx)("div",{className:"question-list",children:O.map((function(e){return Object(f.jsx)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(f.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return k(e.id,e.likeId)},children:[e.likeCount>0&&Object(f.jsx)("span",{children:e.likeCount}),Object(f.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}),E=n.p+"static/media/delete.22ba6e00.svg",D=n.p+"static/media/check.5dfa6ed6.svg",G=n.p+"static/media/answer.4502a8d5.svg",M=(n(51),function(){var e=Object(i.f)(),t=Object(i.g)(),n=H(t.id),r=n.title,a=n.usersQuestions,s=function(){var n=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Tem certeza que deseja encerrar essa sala?")){n.next=4;break}return n.next=3,g.ref("/rooms/".concat(t.id)).update({endedAt:new Date});case 3:e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que deseja excluir essa pergunta?")){e.next=3;break}return e.next=3,g.ref("/rooms/".concat(t.id,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ref("/rooms/".concat(t.id,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ref("/rooms/".concat(t.id,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"page-room",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)(c.b,{to:"/",children:Object(f.jsx)("img",{src:j,alt:"Letmeask logo"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{code:t.id}),Object(f.jsx)(x,{isOutlined:!0,onClick:s,children:"Encerrar sala"})]})]})}),Object(f.jsxs)("main",{children:[Object(f.jsxs)("div",{className:"room-title",children:[Object(f.jsxs)("h1",{children:["Sala",r]}),a.length>0&&Object(f.jsxs)("span",{children:[a.length,"\xa0pergunta(s)"]})]}),Object(f.jsx)("div",{className:"question-list",children:a.map((function(e){return Object(f.jsxs)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:[!e.isAnswered&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:function(){return d(e.id)},children:Object(f.jsx)("img",{src:D,alt:"Marcar pergunta como respondida"})}),Object(f.jsx)("button",{type:"button",onClick:function(){return b(e.id)},children:Object(f.jsx)("img",{src:G,alt:"Dar destaque a pergunta"})})]}),Object(f.jsx)("button",{type:"button",onClick:function(){return o(e.id)},children:Object(f.jsx)("img",{src:E,alt:"Remover pergunta"})})]},e.id)}))})]})]})}),z=(n(52),function(){var e=C().user,t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],o=Object(i.f)(),b=function(){var t=Object(l.a)(u.a.mark((function t(n){var r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==a.trim()){t.next=3;break}return t.abrupt("return");case 3:return r=g.ref("rooms"),t.next=6,r.push({title:a,authorId:null===e||void 0===e?void 0:e.id});case 6:s=t.sent,o.push("/admin/rooms/".concat(s.key));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:h,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(f.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(f.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:j,alt:"Letmeask"}),Object(f.jsx)("h2",{children:"Criar uma nova sala"}),Object(f.jsxs)("form",{onSubmit:b,children:[Object(f.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:a}),Object(f.jsx)(x,{type:"submit",children:"Criar sala"})]}),Object(f.jsxs)("p",{children:["Quer entrar em uma sala existente?",Object(f.jsx)(c.b,{to:"/",children:"clique aqui"})]})]})})]})}),Q=(n(53),function(){return Object(f.jsx)(c.a,{children:Object(f.jsx)(w,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/",exact:!0,component:y}),Object(f.jsx)(i.a,{path:"/rooms/create",component:z}),Object(f.jsx)(i.a,{path:"/rooms/:id",component:L}),Object(f.jsx)(i.a,{path:"/admin/rooms/:id",component:M})]})})})});s.a.render(Object(f.jsx)(r.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1f1b18fa.chunk.js.map