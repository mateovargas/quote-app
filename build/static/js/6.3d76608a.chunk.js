(this["webpackJsonpquote-app"]=this["webpackJsonpquote-app"]||[]).push([[6],{47:function(e,t,c){e.exports={card:"Card_card__1m44e"}},48:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(37),s=c(0),a=c(47),r=c.n(a),u=c(1),i=function(e){return Object(u.jsx)("div",{className:r.a.card,children:e.children})},l=c(14),d=c(48),j=c.n(d),b=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1],d=Object(s.useRef)(),b=Object(s.useRef)();return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(n.a,{when:a,message:function(e){return"Are you sure you want to leave? Any entered data will be lost."}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){console.log("focused"),r(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,o=Object(n.h)();Object(s.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.3d76608a.chunk.js.map