_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{cmM9:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/blog-small-thumbnail",function(){return s("gdEI")}])},cyBs:function(e,t,s){"use strict";s("vJKn");var c=s("nKUr"),n=(s("rg98"),s("q1tI")),r=(s("YFqc"),s("fGvY"),s("YMeB"),s("QUbM"),s("xBjI"),s("H+61")),a=s("UlJF"),i=s("7LId"),l=s("VIvw"),o=s("iHvq");s("sF9j"),s("3QIL"),s("vaMm"),s("Mngm");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,c=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;s=Reflect.construct(c,arguments,n)}else s=c.apply(this,arguments);return Object(l.a)(this,s)}}n.Component},gdEI:function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),n=s("q1tI"),r=s("u+A/"),a=s("N44Z"),i=(s("cyBs"),s("HL/4"),s("sF9j")),l=s("3QIL"),o=s("vaMm"),u=s("Mngm"),j=s("vJKn"),b=s.n(j),d=s("rg98"),p=(s("YFqc"),s("fGvY")),h=(s("YMeB"),s("QUbM")),f=s("xBjI"),m=function(e){var t,s=e.collectionSlug,r=(e.columns,Object(n.useState)(!0)),a=r[0],i=r[1],l=Object(n.useState)(null),o=l[0],u=l[1];function j(){return(j=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===s){e.next=7;break}return t={slug_eq:s},e.next=4,p.a.getPostsByCollectionSlug(t);case 4:c=e.sent,e.next=11;break;case 7:return t={_limit:6},e.next=10,p.a.getPosts(t);case 10:c=e.sent;case 11:if(!c){e.next=17;break}return setTimeout((function(){i(!1)}),200),u(c),e.abrupt("return",c);case 17:return u(null),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),!a&&o&&(t=o.map((function(e){return Object(c.jsx)(f.a,{post:e},e.id)}))),Object(c.jsxs)("div",{className:"ps-post-items",children:[Object(c.jsx)("div",{className:"row",children:t}),Object(c.jsx)(h.a,{})]})};t.default=function(){return Object(c.jsx)(r.a,{title:"Blog",children:Object(c.jsx)("div",{className:"ps-page--blog",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"ps-page__header",children:[Object(c.jsx)("h1",{children:"Our Press"}),Object(c.jsx)(a.a,{breacrumb:[{text:"Home",url:"/"},{text:"Blog Small Thumbnail"}]})]}),Object(c.jsxs)("div",{className:"ps-blog--sidebar",children:[Object(c.jsx)("div",{className:"ps-blog__left",children:Object(c.jsx)(m,{})}),Object(c.jsxs)("div",{className:"ps-blog__right",children:[Object(c.jsx)(i.a,{}),Object(c.jsx)(l.a,{}),Object(c.jsx)(o.a,{}),Object(c.jsx)(u.a,{})]})]})]})})})}},xBjI:function(e,t,s){"use strict";var c=s("nKUr"),n=(s("q1tI"),s("YFqc")),r=s.n(n),a=s("pU5j"),i=s("HMs9"),l=s.n(i),o=s("wd/R"),u=s.n(o);t.a=function(e){var t,s,n=e.post;return n&&(null!==n.thumbnail&&(t=Object(c.jsx)(l.a,{children:Object(c.jsx)("img",{src:"".concat(a.a).concat(n.thumbnail.url),alt:"img"})})),n.categories&&(s=n.categories.length>0?n.categories.map((function(e){return Object(c.jsx)(r.a,{href:"/category/[slug]",as:"/categories/".concat(e.slug),children:Object(c.jsx)("a",{children:e.name})},e.id)})):Object(c.jsx)(r.a,{href:"/blog",children:Object(c.jsx)("a",{children:"Others"})}))),Object(c.jsxs)("article",{className:"ps-post ps-post--small-thumbnail",children:[Object(c.jsxs)("div",{className:"ps-post__thumbnail",children:[Object(c.jsx)(r.a,{href:"/post/[pid]",as:"/post/".concat(n.id),children:Object(c.jsx)("a",{className:"ps-post__overlay"})}),t]}),Object(c.jsxs)("div",{className:"ps-post__content",children:[Object(c.jsxs)("div",{className:"ps-post__top",children:[Object(c.jsx)("div",{className:"ps-post__meta",children:s}),Object(c.jsx)(r.a,{href:"/post/[pid]",as:"/post/".concat(n.id),children:Object(c.jsx)("a",{className:"ps-post__title",children:n.title})}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, dolor siterim consectetur adipiscing elit. Phasellus duio faucibus est sed\u2026"})]}),Object(c.jsxs)("p",{children:[u()(n.created_at).format("ll")," by",Object(c.jsx)(r.a,{href:"/blog",children:Object(c.jsx)("a",{href:"#",children:" drfurion"})})]})]})]})}}},[["cmM9",1,2,12,0,3,4,5,6,7,11,25]]]);