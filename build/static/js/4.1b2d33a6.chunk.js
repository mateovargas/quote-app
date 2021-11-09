(this["webpackJsonpquote-app"]=this["webpackJsonpquote-app"]||[]).push([[4,5],{38:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},39:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},40:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},41:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},42:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},45:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(0),a=c(37),r=c(38),i=c.n(r),j=c(35),d=c(36),u=c(39),m=c.n(u),l=c(14),b=c(1),x=function(e){var t=Object(o.useRef)(),c=Object(j.a)(d.a),n=c.sendRequest,s=c.status,a=c.error,r=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==s||a||r()}),[s,a,r]);var i=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:m.a.form,onSubmit:i,children:["pending"===s&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}),Object(b.jsxs)("div",{className:m.a.control,onSubmit:i,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:m.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(40),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(41),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.j)(),u=Object(j.a)(d.c),m=u.sendRequest,O=u.status,h=u.data,f=(u.error,r.quoteId);Object(o.useEffect)((function(){m(f)}),[f,m]);var p,_=Object(o.useCallback)((function(){m(f)}),[m,f]);return"pending"===O&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})})),"completed"===O&&h&&(p=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments have been added yet!"})),Object(b.jsxs)("section",{className:i.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:r.quoteId,onAddedComment:_}),p]})},g=c(42),q=c.n(g),C=function(e){return Object(b.jsxs)("figure",{className:q.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.j)(),t=Object(n.k)(),c=e.quoteId,a=Object(j.a)(d.e,!0),r=a.sendRequest,i=a.status,u=a.data,m=a.error;return Object(o.useEffect)((function(){r(c)}),[r,c]),"pending"===i?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}):m?Object(b.jsx)("p",{className:"centered",children:m}):u.text?Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)(C,{text:u.text,author:u.author}),Object(b.jsx)(n.c,{path:t.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(n.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{className:"centered",children:"No quote found!"})}},50:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},51:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},52:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=(c(45),c(8)),a=c(50),r=c.n(a),i=c(1),j=function(e){return Object(i.jsxs)("li",{className:r.a.item,children:[Object(i.jsxs)("figure",{children:[Object(i.jsx)("blockquote",{children:Object(i.jsx)("p",{children:e.text})}),Object(i.jsx)("figcaption",{children:e.author})]}),Object(i.jsx)(o.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=c(51),u=c.n(d),m=function(e){var t=Object(s.h)(),c=Object(s.i)();console.log("location: ",c);var o,a,r="asc"===new URLSearchParams(c.search).get("sort"),d=(o=e.quotes,a=r,o.sort((function(e,t){return a?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("div",{className:u.a.sorting,children:Object(i.jsxs)("button",{onClick:function(){t.push({pathname:c.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Descending":"Ascending"]})}),Object(i.jsx)("ul",{className:u.a.list,children:d.map((function(e){return Object(i.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},l=c(14),b=c(35),x=c(36),O=c(52),h=c.n(O),f=function(){return Object(i.jsxs)("div",{className:h.a.noquotes,children:[Object(i.jsx)("p",{children:"No quotes found!"}),Object(i.jsx)("a",{className:"btn",children:"Add a Quote"})]})};t.default=function(){var e=Object(b.a)(x.d,!0),t=e.sendRequest,c=e.status,s=e.data,o=e.error;return Object(n.useEffect)((function(){t()}),[t]),console.log("status: ",c),"pending"===c?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(l.a,{})}):o?Object(i.jsx)("p",{className:"centered focused",children:o}):"completed"!==c||s&&0!==s.length?Object(i.jsx)(m,{quotes:s}):Object(i.jsx)(f,{})}}}]);
//# sourceMappingURL=4.1b2d33a6.chunk.js.map