_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"/y5a":function(e,t,c){"use strict";var n=c("nKUr"),r=(c("q1tI"),c("40aI")),s=c("D98S"),a=c("JdYI");t.a=function(){return Object(n.jsx)("footer",{className:"ps-footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)(s.a,{}),Object(n.jsx)(a.a,{})]})})}},N44Z:function(e,t,c){"use strict";var n=c("nKUr"),r=(c("q1tI"),c("YFqc")),s=c.n(r);t.a=function(e){var t=e.breacrumb;return Object(n.jsx)("div",{className:"ps-breadcrumb 2",children:Object(n.jsx)("ul",{className:"breadcrumb",children:t.map((function(e){return e.url?Object(n.jsx)("li",{children:Object(n.jsx)(s.a,{href:e.url,children:Object(n.jsx)("a",{children:e.text})})},e.text):Object(n.jsx)("li",{children:e.text},e.text)}))})})}},QUbM:function(e,t,c){"use strict";var n=c("nKUr");c("q1tI");t.a=function(){return Object(n.jsx)("div",{className:"ps-pagination",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"active",children:Object(n.jsx)("a",{href:"#",children:"1"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"2"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"3"})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"#",children:["Next Page",Object(n.jsx)("i",{className:"icon-chevron-right"})]})})]})})}},SaKm:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return c("qSLy")}])},YMeB:function(e,t,c){"use strict";var n=c("nKUr"),r=(c("q1tI"),c("YFqc")),s=c.n(r),a=c("pU5j"),i=c("HMs9"),l=c.n(i),j=c("wd/R"),o=c.n(j);t.a=function(e){var t,c,r=e.post;return r&&(null!==r.thumbnail&&(t=Object(n.jsx)(l.a,{children:Object(n.jsx)("img",{src:"".concat(a.a).concat(r.thumbnail.url),alt:"img"})})),r.post_categories&&(c=r.post_categories.length>0?r.post_categories.map((function(e){return Object(n.jsx)(s.a,{href:"/category/[slug]",as:"/categories/".concat(e.slug),children:Object(n.jsx)("a",{children:e.name})},e.id)})):Object(n.jsx)(s.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Others"})}))),Object(n.jsxs)("article",{className:"ps-post",children:[Object(n.jsxs)("div",{className:"ps-post__thumbnail",children:[Object(n.jsx)(s.a,{href:"/post/[pid]",as:"/post/".concat(r.id),children:Object(n.jsx)("a",{className:"ps-post__overlay"})}),t]}),Object(n.jsxs)("div",{className:"ps-post__content",children:[Object(n.jsx)("div",{className:"ps-post__meta",children:c}),Object(n.jsx)(s.a,{href:"/post/[pid]",as:"/post/".concat(r.id),children:Object(n.jsx)("a",{className:"ps-post__title",children:r.name})}),Object(n.jsxs)("p",{children:[o()(r.created_at).format("ll")," by",Object(n.jsx)(s.a,{href:"/blog",children:Object(n.jsx)("a",{href:"#",children:" drfurion"})})]})]})]})}},fGvY:function(e,t,c){"use strict";var n=c("vJKn"),r=c.n(n),s=c("rg98"),a=c("H+61"),i=c("UlJF"),l=c("pU5j"),j=function(){function e(t){Object(a.a)(this,e),this.callback=t}return Object(i.a)(e,[{key:"getPosts",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="posts?".concat(Object(l.g)(t)),e.next=3,l.d.get("".concat(l.a,"/").concat(c)).then((function(e){return e.data.length>0?e.data:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostBySlug",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("".concat(l.a,"/posts?slug=").concat(t)).then((function(e){return e.data.length>0?e.data[0]:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostsByCollectionSlug",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="collections?".concat(Object(l.g)(t)),e.next=3,l.d.get("".concat(l.a,"/").concat(c)).then((function(e){return e.data&&e.data[0].posts.length>0?e.data[0].posts:null})).catch((function(e){return console.log(JSON.stringify(e)),null}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByKeyword",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("".concat(l.a,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByCategory",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("".concat(l.a,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=new j},qSLy:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),r=c("q1tI"),s=c("u+A/"),a=c("vJKn"),i=c.n(a),l=c("rg98"),j=c("YFqc"),o=c.n(j),u=c("fGvY"),b=c("YMeB"),d=c("QUbM"),h=function(e){var t,c=e.collectionSlug,s=e.columns,a=Object(r.useState)(!0),j=a[0],h=a[1],x=Object(r.useState)(null),O=x[0],f=x[1];function p(){return(p=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===c){e.next=7;break}return t={slug_eq:c},e.next=4,u.a.getPostsByCollectionSlug(t);case 4:n=e.sent,e.next=11;break;case 7:return t={_limit:6},e.next=10,u.a.getPosts(t);case 10:n=e.sent;case 11:if(console.log(n),!n){e.next=18;break}return setTimeout((function(){h(!1)}),200),f(n),e.abrupt("return",n);case 18:return f(null),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),!j&&O&&(t=O.map((function(e){return 4===s?Object(n.jsx)("div",{className:" col-md-4 col-sm-6",children:Object(n.jsx)(b.a,{post:e})},e.id):4===s?Object(n.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(n.jsx)(b.a,{post:e})},e.id):Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(b.a,{post:e})},e.id)}))),Object(n.jsxs)("div",{className:"ps-blog",children:[Object(n.jsx)("div",{className:"ps-blog__header",children:Object(n.jsxs)("ul",{className:"ps-list--blog-links",children:[Object(n.jsx)("li",{className:"active",children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"All"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Life Style"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Technology"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Entertaiment"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Business"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Others"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Fashion"})})})]})}),Object(n.jsxs)("div",{className:"ps-blog__content",children:[Object(n.jsx)("div",{className:"row",children:t}),Object(n.jsx)(d.a,{})]})]})},x=c("N44Z");t.default=function(){return Object(n.jsx)(s.a,{title:"Blog",boxed:!0,children:Object(n.jsx)("div",{className:"ps-page--blog",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"ps-page__header",children:[Object(n.jsx)("h1",{children:"Our Press"}),Object(n.jsx)(x.a,{breacrumb:[{text:"Home",url:"/"},{text:"Our Press"}]})]}),Object(n.jsx)(h,{columns:4})]})})})}},"u+A/":function(e,t,c){"use strict";var n=c("nKUr"),r=(c("q1tI"),c("g4pe")),s=c.n(r),a=c("Tt/Y"),i=c("yUax"),l=c("spCc"),j=c("JNwe"),o=c("lSLZ"),u=c("/y5a");t.a=function(e){var t,c=e.children,r=e.title,b=e.boxed;return t=null!==r?"Martfury | "+r:"Martfury | Multipurpose Marketplace React Ecommerce Template",void 0!==b&&b?Object(n.jsxs)("div",{className:"martfury",children:[Object(n.jsx)(s.a,{children:Object(n.jsx)("title",{children:t})}),Object(n.jsx)(a.a,{}),Object(n.jsx)(i.a,{}),Object(n.jsx)("main",{children:c}),Object(n.jsx)(j.a,{layout:"container"}),Object(n.jsx)(u.a,{}),Object(n.jsx)(l.a,{})]}):Object(n.jsxs)("div",{className:"martfury",children:[Object(n.jsx)(s.a,{children:Object(n.jsx)("title",{children:t})}),Object(n.jsx)(a.a,{}),Object(n.jsx)(i.a,{}),Object(n.jsx)("main",{children:c}),Object(n.jsx)(j.a,{}),Object(n.jsx)(o.a,{}),Object(n.jsx)(l.a,{})]})}}},[["SaKm",1,2,12,0,3,4,5,6,7,11]]]);