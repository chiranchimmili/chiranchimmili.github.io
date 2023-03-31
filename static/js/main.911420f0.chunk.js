(this["webpackJsonpchiranchimmili.github.io"]=this["webpackJsonpchiranchimmili.github.io"]||[]).push([[0],{27:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var n=t(8),i=t(3),s=t(1),a=t(0),l=Object(s.createContext)(),r=function(e){var c=e.children,t=Object(s.useState)("light"),n=Object(i.a)(t,2),r=n[0],j=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");j(e.matches?"dark":"light"),e.addEventListener("change",(function(e){j(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),j(e)}}],children:c})},j=t(10),o=t.n(j),b=t(15),h=t.n(b),d=t.p+"static/media/resume.af9559bd.pdf",m=(t(27),function(){return Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h1",{className:"introName",children:" Hey! I'm Chiranjeevi Chimmili "}),Object(a.jsx)("div",{id:"avatar",children:" "}),Object(a.jsx)("h1",{className:"introTitle",children:"Computer Science and Math Student at Georgia Tech \ud83d\udc1d"}),Object(a.jsxs)("p",{className:"introDescription",children:["This website is currently a work in progress. Please check back soon!"," "]}),Object(a.jsxs)("div",{className:"introLinks",children:[Object(a.jsx)("a",{href:d,target:"_blank",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),Object(a.jsx)("a",{href:"https://github.com/chiranchimmili","aria-label":"github",className:"link link--icon",children:Object(a.jsx)(o.a,{})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/chiranc/","aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(h.a,{})})]})]})}),x=t(17),O=t.n(x),u=t(16),f=t.n(u),v=(t(31),function(){var e=Object(s.useContext)(l),c=Object(i.a)(e,1)[0],t=(c.themeName,c.toggleTheme,Object(s.useState)(!1)),n=Object(i.a)(t,2),r=n[0],j=n[1],o=function(){return j(!r)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:r?"flex":null},className:"nav__list",children:[Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#experience",onClick:o,className:"link link--nav",children:"Experience"})}),Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:o,className:"link link--nav",children:"Projects"})}),Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:o,className:"link link--nav",children:"Skills"})}),Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:o,className:"link link--nav",children:"Contact"})})]}),Object(a.jsx)("button",{type:"button",onClick:o,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:r?Object(a.jsx)(f.a,{}):Object(a.jsx)(O.a,{})})]})}),k=(t(32),function(){return Object(a.jsx)("header",{className:"header center",children:Object(a.jsx)(v,{})})}),N=(t(13),t(18),t(34),t(35),function(){return Object(a.jsx)("section",{id:"projects",className:"section projects",children:Object(a.jsx)("h2",{className:"sectionTitle",children:"Projects"})})}),p=t(19),g=t.n(p),C=(t(36),function(){return Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"sectionTitle",children:"Skills"}),Object(a.jsx)("div",{className:"skillsContainer",children:Object(a.jsx)("div",{className:"skill--scroll",children:Object(a.jsxs)(g.a,{gradient:!1,speed:50,pauseOnHover:!0,pauseOnClick:!0,delay:0,play:!0,direction:"left",children:[Object(a.jsx)("div",{className:"skill--box",children:"C++"}),Object(a.jsx)("div",{className:"skill--box",children:"Python"}),Object(a.jsx)("div",{className:"skill--box",children:"Java"}),Object(a.jsx)("div",{className:"skill--box",children:"Linux"}),Object(a.jsx)("div",{className:"skill--box",children:"React"}),Object(a.jsx)("div",{className:"skill--box",children:"Kotlin"}),Object(a.jsx)("div",{className:"skill--box",children:"JavaScript"})]})})})]})}),w=t(20),_=t.n(w),y=(t(37),function(){var e=Object(s.useState)(!1),c=Object(i.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>300?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),t?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(_.a,{fontSize:"large"})})}):null}),S=(t(38),function(){return Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"sectionTitle",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:cchimmili3@gatech.edu",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]})}),E=(t(39),function(){return Object(a.jsx)("footer",{className:"footer",children:"Chiranjeevi Chimmili"})}),T=(t(40),function(){return Object(a.jsxs)("section",{id:"experience",className:"section experience",children:[Object(a.jsx)("h2",{className:"sectionTitle",children:"Experience"}),Object(a.jsx)("div",{})]})}),L=(t(41),function(){var e=Object(s.useContext)(l),c=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(c," app"),children:[Object(a.jsx)(k,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(m,{}),Object(a.jsx)(T,{}),Object(a.jsx)(N,{}),Object(a.jsx)(C,{}),Object(a.jsx)(S,{})]}),Object(a.jsx)(y,{}),Object(a.jsx)(E,{})]})});t(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.911420f0.chunk.js.map