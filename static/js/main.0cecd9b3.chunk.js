(this.webpackJsonpsure=this.webpackJsonpsure||[]).push([[0],{66:function(e,t,a){e.exports=a(95)},71:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=(a(71),a(16)),u=a(33),c=a.n(u),s=a(40),m=a(41),p=a.n(m),d="https://fed-challenge-api.sure.now.sh/api/v1/quotes";function v(){return(v=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.post(d,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.put(d+"/".concat(t.quote.quoteId),t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=a(24),h=a(135),g=a(129);a(90);var E=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],l=a[1],u=Object(n.useState)(""),c=Object(o.a)(u,2),s=c[0],m=c[1],p=Object(n.useState)({line_1:"",line_2:"",city:"",region:"",postal:""}),d=Object(o.a)(p,2),v=d[0],f=d[1];function E(e,t){t.persist(),f((function(a){var n=Object(b.a)({},a);return n[e]=t.target.value,n}))}return r.a.createElement("div",{className:"intake-form"},r.a.createElement("div",{className:"names"},r.a.createElement(h.a,{label:"First Name",style:{marginRight:"10px",marginBottom:"10px",width:"290px"},value:i,onChange:function(e){l(e.target.value)},variant:"filled"}),r.a.createElement(h.a,{label:"Last Name",style:{marginLeft:"10px",marginBottom:"10px",width:"290px"},value:s,onChange:function(e){m(e.target.value)},variant:"filled"})),r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"line1"},r.a.createElement(h.a,{label:"Address",value:v.line_1,onChange:function(e){return E("line_1",e)},variant:"filled",fullWidth:!0})),r.a.createElement("div",{className:"line2"}),r.a.createElement(h.a,{value:v.line_2,onChange:function(e){return E("line_2",e)},variant:"filled",fullWidth:!0})),r.a.createElement("div",{className:"line3"},r.a.createElement(h.a,{label:"City",style:{marginRight:"10px",marginTop:"10px",width:"230px"},value:v.city,onChange:function(e){return E("city",e)},variant:"filled"}),r.a.createElement(h.a,{label:"Region",style:{margin:"0px 10px",marginTop:"10px",width:"100px"},value:v.region,onChange:function(e){return E("region",e)},variant:"filled"}),r.a.createElement(h.a,{label:"Postal Code",style:{marginLeft:"10px",marginTop:"10px",width:"230px"},value:v.postal,onChange:function(e){return E("postal",e)},variant:"filled"})),r.a.createElement(g.a,{fullWidth:!0,color:"primary",style:{marginTop:"10px"},onClick:function(){return e.onSubmit(i,s,v)},variant:"contained"},"Submit"))},q=a(130),_=a(131),j=a(132),O=a(133),y=a(134),w=a(137);a(94);var x=function(e){var t=Object(n.useState)({quoteId:new String(e.quoteData.quote.quoteId),rating_address:Object(b.a)({},e.quoteData.quote.rating_address),policy_holder:Object(b.a)({},e.quoteData.quote.policy_holder),variable_selections:Object(b.a)({},e.quoteData.quote.variable_selections)}),a=Object(o.a)(t,2),i=a[0],l=a[1];function u(t,a){t.persist();var n=parseInt(t.target.value);if(NaN!==n){var r=Object(b.a)({},i);r.variable_selections[a]=n,l(r),function(e){return f.apply(this,arguments)}({quote:r}).then((function(t){null!==t&&e.updateQuote(t.data)}))}}function c(t){return null!==e.quoteData.quote.variable_options[t]?r.a.createElement(q.a,{className:"card"},r.a.createElement(_.a,null,r.a.createElement(j.a,{variant:"h5"},e.quoteData.quote.variable_options[t].title),r.a.createElement(j.a,{variant:"body2"},e.quoteData.quote.variable_options[t].description)),r.a.createElement(O.a,null,r.a.createElement(y.a,{className:"select",fullWidth:!0,name:e.quoteData.quote.variable_options[t].values,id:e.quoteData.quote.variable_options[t].values,onChange:function(e){return u(e,t)},value:i.variable_selections[t]},e.quoteData.quote.variable_options[t].values.map((function(e){return r.a.createElement(w.a,{value:e},"$",e)}))))):r.a.createElement("div",null," An error occurred")}return Object(n.useEffect)((function(){}),[e.quoteData]),r.a.createElement("div",{className:"display-quote"},r.a.createElement("div",{className:"drop-downs"},c("asteroid_collision"),c("deductible")),r.a.createElement(q.a,{className:"card"},r.a.createElement(_.a,null," Premium : $ ",e.quoteData.quote.premium," ")))};var N=function(){var e=Object(n.useState)({premium:0,variable_options:[],variable_selections:{}}),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),c=u[0],s=u[1],m=Object(n.useRef)(!1);return Object(n.useEffect)((function(){m.current?s(!0):m.current=!0}),[a]),r.a.createElement("div",{className:"App"},c?r.a.createElement(x,{quoteData:a,updateQuote:i}):r.a.createElement(E,{onSubmit:function(e,t,a){(function(e){return v.apply(this,arguments)})({first_name:e,last_name:t,address:a}).then((function(e){i(e.data)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.0cecd9b3.chunk.js.map