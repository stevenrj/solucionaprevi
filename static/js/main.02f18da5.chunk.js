(this["webpackJsonpsoluciona-previ"]=this["webpackJsonpsoluciona-previ"]||[]).push([[0],{17:function(e,a,t){e.exports={logo:"header_logo__2M45e",dadosUsuario:"header_dadosUsuario__1JOaS",row:"header_row__GtX8-",hr1:"header_hr1__1WJKe",hr2:"header_hr2__Z0P8M"}},18:function(e,a,t){e.exports={modal_dor:"modaldor_modal_dor__1X9Eu",btns:"modaldor_btns__31YX-",img:"modaldor_img__1UgWp",group_img_input:"modaldor_group_img_input__2PM6H",input_file:"modaldor_input_file__aHFmC"}},20:function(e,a,t){e.exports={container_modal:"modalComment_container_modal__2x6yz",row:"modalComment_row__2mhBf",comments:"modalComment_comments__1ufvP",btn_publicar:"modalComment_btn_publicar__kWE3J",close:"modalComment_close__1wxcL"}},44:function(e,a,t){e.exports=t.p+"static/media/logo_svg.780e8396.svg"},45:function(e,a,t){e.exports={ml_auto:"navegacao_ml_auto__fnWyb"}},52:function(e,a,t){e.exports=t.p+"static/media/automation.0181e107.jpg"},54:function(e,a,t){e.exports={btn_resolver:"button_btn_resolver__obVsg"}},55:function(e,a,t){e.exports=t.p+"static/media/drag-drop-upload.145dd495.gif"},57:function(e,a,t){e.exports=t(92)},8:function(e,a,t){e.exports={imgProblema:"card_imgProblema__3RIg7",item:"card_item__3bxfG",infoCard:"card_infoCard__dMlpU",row:"card_row__cnZWm",nomeProblema:"card_nomeProblema__1WCMW",icon:"card_icon__1ZKQU",iconBell:"card_iconBell__1e4Mp",ativo:"card_ativo__HrFUW"}},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),o=t.n(c),l=t(6);var s=t(17),i=t.n(s),u=t(44),m=t.n(u),d=t(16),p=t(95),f=t(96),_=t(51),b=t(56),v=t(45),E=t.n(v);function h(e){var a=e.handleClickOpenModalDor;return r.a.createElement("div",null,r.a.createElement(p.a,{color:"primary",dark:!0,expand:"md"},r.a.createElement(f.a,{className:"navbar navbar-expand-lg navbar-light bg-light "},r.a.createElement(_.a,null,r.a.createElement(b.a,{href:"/"},"SP Home")),r.a.createElement(_.a,null,r.a.createElement(b.a,{href:"/"},"Dashboard")),r.a.createElement(_.a,null,r.a.createElement(b.a,{href:"#",onClick:function(){a()}},"Conte a sua dor")),r.a.createElement(_.a,{className:E.a.ml_auto},r.a.createElement(b.a,{href:"#"},r.a.createElement(d.a,{size:20}))),r.a.createElement(_.a,null,r.a.createElement(b.a,{href:"/"},"Minha Conta")))))}var g=t(23);function C(e){var a=e.handleClickOpenModalDor;return r.a.createElement(g.a,null,r.a.createElement("div",{className:i.a.row},r.a.createElement("img",{className:i.a.logo,src:m.a,alt:"Logo"}),r.a.createElement("div",{className:i.a.dadosUsuario},r.a.createElement("span",null,"Aline Bonfietti Frederico"),r.a.createElement("span",null,"INFOR"),r.a.createElement("span",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new Date,t=a.getDate(),n=a.getMonth()+1,r=a.getFullYear();return"".concat(t,"/").concat(n<10?"0".concat(n):"".concat(n),"/").concat(r).concat(e)}()))),r.a.createElement(h,{handleClickOpenModalDor:a}),r.a.createElement("hr",{className:i.a.hr1}),r.a.createElement("hr",{className:i.a.hr2}))}var N=t(3),O=t.n(N),w=t(7),x=t(52),j=t.n(x),k=t(8),P=t.n(k),y=t(13),F=t.n(y),S="https://solucionapreviapi.azurewebsites.net/api";function I(e){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(O.a.mark((function e(a){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(S,"/problemas"),a);case 2:return t=e.sent,e.abrupt("return",t.data.IdProblema);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return U.apply(this,arguments)}function U(){return(U=Object(w.a)(O.a.mark((function e(a){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(S,"/ideias"),a);case 2:return t=e.sent,e.abrupt("return",t.data.IdIdeia);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return B.apply(this,arguments)}function B(){return(B=Object(w.a)(O.a.mark((function e(a){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(S,"/comentarios"),a);case 2:return t=e.sent,e.abrupt("return",t.data.IdComentario);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return J.apply(this,arguments)}function J(){return(J=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(S,"/ideias"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return H.apply(this,arguments)}function H(){return(H=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(S,"/problemas"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=t(15),R=t.n(X),Z=t(20),G=t.n(Z),K=t(53);function L(e){var a=e.handleCloseCommentClick,t=Object(n.useState)(""),c=Object(l.a)(t,2),o=c[0],s=c[1],i=function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={descricao:o,FkProblema:1,FkUsuario:null,datacomentario:null,horacomentario:null},e.next=3,W(a);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(R.a,{isOpen:!0,className:G.a.container_modal},r.a.createElement("div",{className:G.a.row},r.a.createElement("span",null,"Comentarios")," ",r.a.createElement("a",{onClick:function(){a()},className:G.a.close},"X")),r.a.createElement("div",{className:"".concat(G.a.comments," form-group col-lg-15")},r.a.createElement("textarea",{className:"form-control",id:"comments",rows:"3",value:o,onChange:function(e){s(e.target.value)}}),r.a.createElement(K.a,{onClick:i},"Publicar"))))}R.a.setAppElement("#root");var Q=t(54),Y=t.n(Q);function q(e){var a=e.children,t=e.onClick;return r.a.createElement("button",{className:Y.a.btn_resolver,onClick:function(){t()}},a)}function V(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),s=Object(l.a)(o,2),i=s[0],u=s[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),f=p[0],_=p[1],b=Object(n.useState)(!1),v=Object(l.a)(b,2),E=v[0],h=v[1],C=Object(n.useState)(!1),N=Object(l.a)(C,2),x=N[0],k=N[1];Object(n.useEffect)((function(){return function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:(a=e.sent).sort((function(e,a){return a.IdProblema-e.IdProblema})),u(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){u([])}}),[]),Object(n.useEffect)((function(){i&&function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]);var y=function(e){if(e&&t){var a=t.find((function(a){return a.FkProblema===Number(e)}));return a?a.descricao:""}},F=function(){_(!f)},S=function(){h(!E)},I=function(){k(!0)},M=function(){k(!1)};return r.a.createElement(g.a,null,i&&i.map((function(e){return r.a.createElement("div",{key:e.IdProblema,className:P.a.row},x&&r.a.createElement(L,{handleCloseCommentClick:M}),r.a.createElement("div",{className:P.a.item},r.a.createElement("img",{className:P.a.imgProblema,src:j.a,alt:"Imagem do problema"}),r.a.createElement("div",{className:P.a.container_icons},r.a.createElement(d.c,{size:30,className:"".concat(E?P.a.ativo:P.a.inativo," ").concat(P.a.icon),onClick:S}),r.a.createElement(d.b,{size:30,className:P.a.icon,onClick:I}),r.a.createElement(d.a,{size:30,className:"".concat(f?P.a.ativo:P.a.inativo," ").concat(P.a.iconBell),onClick:F}))),r.a.createElement("div",{className:P.a.infoCard},r.a.createElement("span",{className:P.a.nomeProblema},e.nome),r.a.createElement("div",{className:"form-group col-lg-15"},r.a.createElement("div",{className:P.a.row},r.a.createElement("label",{htmlFor:"descProblema"},"Problema"),r.a.createElement(q,null,"Bora Resolver ?")),r.a.createElement("textarea",{className:"form-control",id:"descProblema",rows:"2",disabled:!0,value:e.descricao})),r.a.createElement("div",{className:"form-group col-lg-15"},r.a.createElement("label",{htmlFor:"descSolucao"},"Proposta de Solucao"),r.a.createElement("textarea",{className:"form-control",id:"descSolucao",rows:"3",value:y(e.IdProblema),disabled:!0}))))})))}var T=t(18),$=t.n(T),ee=t(55),ae=t.n(ee);function te(e){var a=e.children,t=e.rows,n=e.id,c=e.onChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group col-lg-15"},r.a.createElement("label",{htmlFor:n},a),r.a.createElement("textarea",{className:"form-control",id:n,rows:t,onChange:function(e){c(e.target.value)}})))}function ne(e){var a=e.setIsModalOpenDor,t=Object(n.useState)({file:null}),c=Object(l.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),_=f[0],b=f[1],v=Object(n.useState)(""),E=Object(l.a)(v,2),h=(E[0],E[1]),g=Object(n.useState)(""),C=Object(l.a)(g,2),N=C[0],x=C[1],j=function(e){var a=new FormData;a.append("file",e);console.log(a)},k=function(){var e=Object(w.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(o),t={nome:m,fkUsuario:11,descricao:_,publicado:!0},e.next=4,I(t);case 4:return n=e.sent,r={FkProblema:n,descricao:N,publicado:!0,FkUsuario:null,dataIdeia:null,horaIdeia:"00:00:00.1234567"},e.next=8,D(r);case 8:e.sent,a(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(R.a,{isOpen:!0,className:$.a.modal_dor},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Conte a sua dor"),r.a.createElement("div",{className:$.a.group_img_input},r.a.createElement("img",{src:ae.a,alt:"Imagem do usuario",className:$.a.img}),r.a.createElement("div",{className:"custom-file ".concat($.a.input_file)},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",name:"customFile",accept:"image/png, image/jpeg",onChange:function(e){return s({file:e.target.files[0]})}}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Escolher arquivo"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputNome"},"Nome"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputNome",placeholder:"Pense em um nome para sua dor",value:m,onChange:function(e){d(e.target.value)}})),r.a.createElement(te,{rows:2,id:"descricaoDor",onChange:b},"Qual a sua dor ?"),r.a.createElement(te,{rows:1,id:"palavrasChave",onChange:h},"Digite palavras chave"),r.a.createElement(te,{rows:3,id:"descricaosolucao",onChange:x},"Proposta de Solucao"),r.a.createElement("div",{className:$.a.btns},r.a.createElement(q,{onClick:function(){a(!1)}},"Cancelar"),r.a.createElement(q,{onClick:k},"Publicar"))))}function re(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(C,{handleClickOpenModalDor:function(){c(!0)}}),r.a.createElement(V,null),t&&r.a.createElement(ne,{setIsModalOpenDor:c}))}R.a.setAppElement("#root");var ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(re,null))};t(91);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.02f18da5.chunk.js.map