"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[128],{128:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,u=e(439),o=e(87),i=e(689),s=e(559),p=e(168),l=e(444),f=e(661),d=l.ZP.div(r||(r=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),v=l.ZP.input(a||(a=(0,p.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),h=(0,l.ZP)(f.G4C)(c||(c=(0,p.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),g=e(184),x=function(n){var t=n.value,e=n.onChange;return(0,g.jsxs)(d,{children:[(0,g.jsx)(h,{}),(0,g.jsx)(v,{type:"text",value:t,onChange:function(n){return e(n.target.value)}})]})},m=e(791),Z=function(){var n,t=(0,o.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=null!==(n=r.get("name"))&&void 0!==n?n:"",p=(0,m.useState)([]),l=(0,u.Z)(p,2),f=l[0],d=l[1],v=(0,m.useState)(""),h=(0,u.Z)(v,2),Z=h[0],k=h[1];(0,m.useEffect)((function(){(0,s.gH)(r).then((function(n){console.log(n),d(n)})).catch((function(n){k(n),console.log("error :>> ",Z)}))}),[Z,r]);var w=(0,i.TH)();return(0,g.jsxs)("div",{children:[(0,g.jsx)(x,{value:c,onChange:function(n){a(""!==n?{name:n}:{})}}),(0,g.jsx)("ul",{children:function(){if(console.log(f),f.total_results)return f.results.map((function(n){var t=n.id,e=n.title;return(0,g.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:w},children:(0,g.jsx)("li",{children:e},Math.random()*t)})}))}()})]})},k=function(){return(0,g.jsxs)("main",{children:[(0,g.jsx)("h1",{children:"Movies"}),(0,g.jsx)(Z,{})]})}},559:function(n,t,e){e.d(t,{Df:function(){return s},Pg:function(){return l},TP:function(){return f},gH:function(){return p},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="50540b41e66ef631d8d57e13679f9024",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=true"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=128.465eeaef.chunk.js.map