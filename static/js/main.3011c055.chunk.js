(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){e.exports={landingImg:"Landing_landingImg__2Ax4r",landing:"Landing_landing__1hYF2",btn_home:"Landing_btn_home__2AOtb",title:"Landing_title__1p0Zl"}},32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){e.exports={danger:"AddVideogame_danger__1nvM3",addGame:"AddVideogame_addGame__kFtq1"}},46:function(e,t,n){e.exports={title:"GameDetail_title__BN4xn",gameDetail:"GameDetail_gameDetail__32b8t",content:"GameDetail_content__1S6Ls",rAndP:"GameDetail_rAndP__mWJyL"}},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),i=n.n(r),s=(n(32),n(33),n(2)),l=n(21),o=n(22),j=n(27),d=n(26),u=n(10),b=n(15),m=n.n(b),g=n(0),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:m.a.landing,children:[Object(g.jsx)("h1",{className:m.a.title,children:" Videogames Web "}),Object(g.jsx)("div",{className:m.a.landingImg,children:Object(g.jsx)(u.b,{to:"/home",style:{textDecoration:"none"},children:Object(g.jsx)("button",{className:m.a.btn_home,children:" Go to Home "})})})]})}}]),n}(a.Component),O=h,p=n(4),f=n(5),x=(n(41),n(17)),v=n(8),_=n(13),y=n.n(_),N="GET_GAMES",S="SEARCH_GAME",E="FILTER_GAMES",C="GET_GENRES",G="SET_SEARCHINPUT",k="GET_GAME_DETAIL",A="GET_PLATFORMS",P="POST_GAME",w="http://localhost:3001/";function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.order?(console.log("hola"),function(t){var n=e.orderBy,a="?order="+e.order;return fetch(w+"videogames"+a+"&orderby="+n).then((function(e){return e.json()})).then((function(e){t({type:N,payload:Object(v.a)(e)})})).catch((function(e){return console.log("Error",e)}))}):function(e){return fetch(w+"videogames").then((function(e){return e.json()})).then((function(t){e({type:N,payload:Object(v.a)(t)})})).catch((function(e){return console.log("Error",e)}))}}function T(){return function(e){return fetch(w+"genres").then((function(e){return e.json()})).then((function(t){e({type:C,payload:Object(v.a)(t)})})).catch((function(e){return console.log("Error",e)}))}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.order?function(n){var a=t.orderBy,c="&order="+t.order;return fetch(w+"videogames?name="+e+c+"&orderby="+a).then((function(e){return e.json()})).then((function(t){n({type:S,payload:{input:e,games:Object(v.a)(t)}})})).catch((function(e){return console.log("Error",e)}))}:function(t){return fetch(w+"videogames?name="+e).then((function(e){return e.json()})).then((function(n){t({type:S,payload:{input:e,games:Object(v.a)(n)}})})).catch((function(e){return console.log("Error",e)}))}}function L(){return function(e){return fetch(w+"platforms").then((function(e){return e.json()})).then((function(t){e({type:A,payload:Object(v.a)(t)})})).catch((function(e){return console.log("Error",e)}))}}function R(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(f.c)();return Object(g.jsxs)("form",{className:"input-wrapper",children:[Object(g.jsx)("input",{className:"searc",onChange:function(e){c(e.target.value)},value:n,type:"text",placeholder:"Games"}),Object(g.jsx)("input",{name:"search",onClick:function(e){e.preventDefault(),r(I(n)),c("")},type:"submit",className:"btn",value:"Search"})]})}var F=n.p+"/static/media/gamecontrol.91f1316d.png";n(43);function B(){return Object(g.jsxs)("nav",{className:"navbar",children:[Object(g.jsxs)("div",{className:"left-nav",children:[Object(g.jsx)("img",{id:"controlIcon",src:F,width:"30",height:"30",alt:""}),Object(g.jsx)("h2",{className:"title-header",children:"Play, enjoy and live"})]}),Object(g.jsx)(R,{})]})}var M=n(3);function H(){var e,t=Object(a.useState)({alph:"none",rating:"none",genre:"none",type:"none"}),n=Object(p.a)(t,2),c=n[0],r=n[1],i=Object(f.d)((function(e){return e.genres})),s=Object(f.d)((function(e){return e.searchInput})),l=Object(f.c)();function o(e){r({genre:"none",type:"none",rating:"rating"===e.target.name?e.target.value:"none",alph:"alph"===e.target.name?e.target.value:"none"});var t={order:e.target.name,orderBy:e.target.value};l(""!==s?I(s,t):D(t))}function j(e){r(Object(M.a)(Object(M.a)({},c),{},{type:"type"===e.target.name?e.target.value:"none",genre:"genre"===e.target.name?e.target.value:"none"}));var t={filter:e.target.name,filterBy:e.target.value};l(function(e){return{type:E,payload:e}}(t))}return e=T,Object(a.useEffect)((function(){l(e())}),[e]),Object(g.jsxs)("div",{className:"left-bar",children:[Object(g.jsxs)("section",{children:[Object(g.jsx)("label",{htmlFor:"alph",children:"Alphabetical order "}),Object(g.jsxs)("select",{onChange:o,value:c.alph,name:"alph",children:[Object(g.jsx)("option",{disabled:!0,value:"none",children:"Select"}),Object(g.jsx)("option",{value:"ASC",children:"'A to Z'"}),Object(g.jsx)("option",{value:"DESC",children:"'Z to A'"})]})]}),Object(g.jsxs)("section",{children:[Object(g.jsx)("label",{htmlFor:"rating",children:"Rating order "}),Object(g.jsxs)("select",{onChange:o,value:c.rating,name:"rating",children:[Object(g.jsx)("option",{disabled:!0,value:"none",children:"Select"}),Object(g.jsx)("option",{value:"DESC",children:"High to low"}),Object(g.jsx)("option",{value:"ASC",children:"Low to high"})]})]}),Object(g.jsxs)("section",{children:[Object(g.jsx)("label",{htmlFor:"genre",children:"Genre filter "}),Object(g.jsxs)("select",{onChange:j,value:c.genre,name:"genre",children:[Object(g.jsx)("option",{disabled:!0,value:"none",children:"Select"}),i.length>0?i.map((function(e,t){return Object(g.jsx)("option",{value:e.name,children:e.name},t)})):"Loading"]})]}),Object(g.jsxs)("section",{children:[Object(g.jsx)("label",{htmlFor:"type",children:"VideoGame type filter "}),Object(g.jsxs)("select",{onChange:j,value:c.type,name:"type",children:[Object(g.jsx)("option",{disabled:!0,value:"none",children:"Select"}),Object(g.jsx)("option",{value:"added",children:"Added"}),Object(g.jsx)("option",{value:"existing",children:"Existing"})]})]}),Object(g.jsx)("button",{type:"button",onClick:function(){r({alph:"none",rating:"none",genre:"none",type:"none"}),l({type:G,payload:""}),l(D())},className:"btn",children:"Reset"}),Object(g.jsx)("hr",{}),"   ",Object(g.jsx)(u.b,{to:"/addgame",style:{textDecoration:"none"},children:Object(g.jsx)("button",{className:"btn",children:"Create New Game"})})]})}var V=n(11),q=n(9),J=n.n(q);function U(e){var t={color:"black",display:"inline-flex",flexDirection:"column",justifyContent:"space-between",width:"240px",minHeight:"140px",borderRadius:"0.6rem",margin:"8px",boxShadow:"0.1rem 0.1rem 0.1rem #737a83ef",backgroundImage:"url("+e.imageLink+")",backgroundPosition:"center",backgroundSize:"cover"};return Object(g.jsx)(u.b,{to:"/gamedetail/"+e.id,style:{textDecoration:"none"},children:Object(g.jsxs)("div",{className:J.a.card,style:t,children:[Object(g.jsxs)("div",{className:J.a.cardTop,children:[Object(g.jsx)("span",{className:J.a.genre,children:e.genre}),Object(g.jsx)("span",{className:J.a.rating,children:e.rating})]}),Object(g.jsx)("h4",{className:J.a.title,children:e.name})]})})}function X(e){var t=e.items,n=Object(a.useState)("Loading..."),r=Object(p.a)(n,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){setTimeout((function(){0===t.length&&s("Not found")}),5e3)}),[t]),Object(g.jsx)(c.a.Fragment,{children:t.length>0?t.map((function(e){return Object(g.jsx)(U,{name:e.name,genre:e.genres[0]?e.genres[0].name:"Unknown",imageLink:e.background_image,id:e.id,rating:e.rating},e.id)})):Object(g.jsx)("div",{children:i})})}var Z=Object(f.b)((function(e){return{games:e.games}}),(function(e){return{getGames:function(t){return e(D(t))}}}))((function(e){for(var t=e.games,n=e.getGames,c=Object(a.useState)([]),r=Object(p.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)(1),o=Object(p.a)(l,2),j=o[0],d=o[1],u=Object(a.useState)(15),b=Object(p.a)(u,2),m=b[0],h=(b[1],Object(a.useState)(2)),O=Object(p.a)(h,2),f=O[0],v=(O[1],Object(a.useState)(2)),_=Object(p.a)(v,2),N=_[0],S=_[1],E=Object(a.useState)(0),C=Object(p.a)(E,2),G=C[0],k=C[1],A=[],P=1;P<=Math.ceil(t.length/m);P++)A.push(P);var w=j*m,D=w-m;function T(e){d(Number(e.target.id))}function I(){d(j-1),(j-1)%f===0&&(S(N-f),k(G-f))}function L(){d(j+1),j+1>N&&(S(N+f),k(G+f))}Object(a.useEffect)((function(){function e(){return(e=Object(x.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=3;break}return e.next=3,n();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(a.useEffect)((function(){j>A.length&&d(1),s(t.slice(D,w))}),[t,j]);var R=null;A.length>N&&(R=Object(g.jsx)("li",{onClick:L,children:"..."}));var F=null;j>f&&(F=Object(g.jsx)("li",{onClick:I,children:"..."}));var B=A.map((function(e){var t;return e<N+1&&e>G?Object(g.jsx)("li",(t={onClick:T,className:J.a.pageNumber,id:e},Object(V.a)(t,"className",e===j?J.a.active:null),Object(V.a)(t,"children",e),t),e):null})),M=Object(g.jsxs)("ul",{className:J.a.pageNumbers,children:[1===j?null:Object(g.jsx)("li",{onClick:I,className:J.a.btnPages,name:"prev",children:"Prev"}),F,B,R,j===A.length?null:Object(g.jsx)("li",{onClick:L,className:J.a.btnPages,name:"next",children:"Next"})]});return Object(g.jsxs)("div",{className:J.a.cards,children:[A.length>0?M:null,Object(g.jsx)(X,{items:i})]})}));n(44);function z(){return Object(g.jsxs)("div",{className:"home",children:[Object(g.jsx)(B,{}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("aside",{children:Object(g.jsx)(H,{})}),Object(g.jsx)("section",{className:"cards",children:Object(g.jsx)(Z,{})})]})]})}var W=n(45);function K(e){var t={};return e.name||(t.name="Name is required"),e.rating?(Number(e.rating)>5||Number(e.rating)<1||isNaN(Number(e.rating)))&&(t.rating="Rating is invalid"):t.rating="Rating is required",e.released||(t.released="Released is required"),e.released||(t.released="Released is required"),e.description||(t.description="description is required"),e.genres.length<1&&(t.genres="At least one gender"),e.platforms.length<1&&(t.platforms="At least one platform"),t}function Y(){var e=Object(a.useState)({name:"",released:"",rating:"",description:"",genres:"",platforms:""}),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({name:"",released:"",rating:"",description:"",genre:"select",platform:"select"}),i=Object(p.a)(r,2),s=i[0],l=i[1],o=Object(a.useState)([]),j=Object(p.a)(o,2),d=j[0],u=j[1],b=Object(a.useState)([]),m=Object(p.a)(b,2),h=m[0],O=m[1],_=Object(f.d)((function(e){return e.genres})),N=Object(f.d)((function(e){return e.platforms})),S=Object(f.c)();function E(e){Object(a.useEffect)((function(){S(e())}),[e])}E(T),E(L);var C=function(e){l(Object(M.a)(Object(M.a)({},s),{},Object(V.a)({},e.target.name,e.target.value))),c(K(Object(M.a)(Object(M.a)({},s),{},Object(V.a)({genres:d,platforms:h},e.target.name,e.target.value)))),console.log(s)};function G(e){var t;e.preventDefault(),l({name:"",released:"",rating:"",description:"",background_image:""}),u([]),O([]),S((t=Object(M.a)({status:"added",genres:d,platforms:h},s),function(e){function n(){return n=Object(x.a)(y.a.mark((function e(){var t,n,a,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}return function(){return n.apply(this,arguments)}("http://localhost:3001/videogame",t).then((function(t){e({type:P,payload:t})})).catch((function(e){return console.log("server response error",e)}))}))}return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Add VideoGame"}),Object(g.jsx)("form",{className:W.addGame,onSubmit:G,children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Name "}),Object(g.jsx)("input",{type:"text",onChange:C,name:"name",value:s.name})]}),n.name&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.name," "]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Released "}),Object(g.jsx)("input",{placeholder:"example: 2013-12-18",type:"text",onChange:C,name:"released",value:s.released}),n.released&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.released," "]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Rating "}),Object(g.jsx)("input",{placeholder:"1 to 5 example: 3.1",type:"text",onChange:C,name:"rating",value:s.rating}),n.rating&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.rating," "]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("label",{children:"Description: "})}),Object(g.jsx)("textarea",{name:"description",value:s.description,onChange:C,rows:"6",cols:"40"}),n.description&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.description," "]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Background Image link"}),Object(g.jsx)("input",{type:"text",onChange:C,name:"background_image",value:s.background_image})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Genres "}),Object(g.jsxs)("select",{name:"genres",value:s.genre,onChange:function(e){u(Array.from(new Set([].concat(Object(v.a)(d),[e.target.value])))),c(K(Object(M.a)(Object(M.a)({},s),{},Object(V.a)({genres:d,platforms:h},e.target.name,e.target.value))))},children:[Object(g.jsx)("option",{default:!0,value:"select",children:"select"}),null===_||void 0===_?void 0:_.map((function(e,t){return Object(g.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(g.jsx)("br",{}),null===d||void 0===d?void 0:d.map((function(e,t){return Object(g.jsxs)("span",{children:['"',e,'" ']},t)})),n.genres&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.genres," "]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Platforms "}),Object(g.jsxs)("select",{name:"platforms",value:s.platform,onChange:function(e){O(Array.from(new Set([].concat(Object(v.a)(h),[e.target.value])))),c(K(Object(M.a)(Object(M.a)({},s),{},Object(V.a)({genres:d,platforms:h},e.target.name,e.target.value))))},children:[Object(g.jsx)("option",{default:!0,value:"select",children:"select"}),null===N||void 0===N?void 0:N.map((function(e,t){return Object(g.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(g.jsx)("br",{}),null===h||void 0===h?void 0:h.map((function(e,t){return Object(g.jsxs)("span",{children:['"',e,'" ']},t)})),n.platforms&&Object(g.jsxs)("p",{className:W.danger,children:[" ",n.platforms," "]})]}),Object(g.jsx)("button",{className:"btn",type:"submit",onClick:G,name:"button",children:"Submit"})]})})]})}var Q=n(46);function $(){var e,t,n=Object(s.g)().id,a=Object(f.d)((function(e){return e.gameDetail})),r=Object(f.c)(),i={backgroundImage:"url("+a.background_image+")",width:"100%",minHeight:"40rem",backgroundPosition:"center",backgroundSize:"cover"};return c.a.useEffect((function(){r(function(e){return function(t){return fetch(w+"videogames/"+e).then((function(e){return e.json()})).then((function(e){t({type:k,payload:e})})).catch((function(e){return console.log("Error",e)}))}}(n))}),[r,n]),Object(g.jsx)("div",{children:a.id==n?Object(g.jsxs)("div",{className:Q.gameDetail,style:i,children:[Object(g.jsx)("h1",{className:Q.title,children:a.name}),Object(g.jsx)("div",{className:Q.content,children:a.description_raw?a.description_raw:a.description}),Object(g.jsxs)("div",{className:Q.rAndP,children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("h3",{children:"Genres"}),Object(g.jsx)("ul",{children:null===(e=a.genres)||void 0===e?void 0:e.map((function(e,t){return Object(g.jsx)("li",{children:e.name},t)}))})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("h3",{children:"Platforms"}),Object(g.jsx)("ul",{children:null===(t=a.platforms)||void 0===t?void 0:t.map((function(e,t){var n=e.platform?e.platform.name:e.name;return Object(g.jsx)("li",{children:n},t)}))})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("h3",{children:"Rating"}),Object(g.jsx)("div",{children:a.rating}),Object(g.jsxs)("div",{children:["release date: ",a.released]})]})]}),Object(g.jsx)(u.b,{to:"/home",style:{textDecoration:"none"},children:Object(g.jsx)("button",{className:"btn",children:"Go to Home"})}),Object(g.jsx)("div",{children:a.name_original?a.name_original:null})]}):Object(g.jsx)("h2",{children:"Loading..."})})}var ee=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/",element:Object(g.jsx)(O,{})}),Object(g.jsx)(s.a,{path:"/home",element:Object(g.jsx)(z,{})}),Object(g.jsx)(s.a,{path:"/gamedetail/:id",element:Object(g.jsx)($,{})}),Object(g.jsx)(s.a,{path:"/addgame",element:Object(g.jsx)(Y,{})})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ne=n(18),ae={games:[],searchInput:"",temporaryGames:[],gameDetail:{},genres:[],platforms:[],gameAdded:{}};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return console.log(t.payload),Object(M.a)(Object(M.a)({},e),{},{temporaryGames:t.payload,games:Object(v.a)(t.payload)});case E:return console.log(t.payload.filter),"genre"===t.payload.filter?Object(M.a)(Object(M.a)({},e),{},{games:e.temporaryGames.filter((function(e){return e.genres.reduce((function(e,n){return e||n.name===t.payload.filterBy}),!1)}))}):Object(M.a)(Object(M.a)({},e),{},{games:e.temporaryGames.filter((function(e){return e.status===t.payload.filterBy}))});case S:return Object(M.a)(Object(M.a)({},e),{},{games:t.payload.games,searchInput:t.payload.input,temporaryGames:t.payload.games});case G:return Object(M.a)(Object(M.a)({},e),{},{searchInput:t.payload});case C:return Object(M.a)(Object(M.a)({},e),{},{genres:Object(v.a)(t.payload)});case k:return Object(M.a)(Object(M.a)({},e),{},{gameDetail:t.payload});case A:return Object(M.a)(Object(M.a)({},e),{},{platforms:t.payload});case P:return Object(M.a)(Object(M.a)({},e),{},{gameAdded:t.payload});default:return e}},re=n(25),ie=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),se=Object(ne.c)(ce,Object(ne.b)(Object(ne.a)(re.a),ie));i.a.render(Object(g.jsx)(f.a,{store:se,children:Object(g.jsx)(u.a,{children:Object(g.jsx)(ee,{})})}),document.getElementById("root")),te()},9:function(e,t,n){e.exports={pageNumbers:"Pagination_pageNumbers__1Ie5M",active:"Pagination_active__2UK-B",btnPages:"Pagination_btnPages__H2_6x",card:"Pagination_card__2rVbs",title:"Pagination_title__2mO9U",cardTop:"Pagination_cardTop__1N-JO",rating:"Pagination_rating__2C80C",genre:"Pagination_genre__1td5O",cards:"Pagination_cards__gNJOG"}}},[[47,1,2]]]);
//# sourceMappingURL=main.3011c055.chunk.js.map
