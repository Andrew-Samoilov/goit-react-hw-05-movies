"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,n,t){t.r(n);var r=t(439),a=t(791),c=t(689),u=t(559),o=t(184);n.default=function(){var e=(0,c.UO)().id,n=(0,a.useState)([]),t=(0,r.Z)(n,2),s=t[0],i=t[1],f=(0,a.useState)(""),p=(0,r.Z)(f,2),l=p[0],d=p[1];(0,a.useEffect)((function(){(0,u.tx)(e).then((function(e){console.log(e),i(e)})).catch((function(e){d(e),console.log("error :>> ",l)}))}),[]);return(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Reviews"}),(0,o.jsx)("ul",{children:s.results?s.results.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)})):(0,o.jsx)("li",{children:"`We dont have any reviews for this movie.`"},1)})]})}},559:function(e,n,t){t.d(n,{Df:function(){return i},Pg:function(){return p},TP:function(){return l},gH:function(){return f},tx:function(){return d}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org/3/",s="50540b41e66ef631d8d57e13679f9024",i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=true"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.d714e0ea.chunk.js.map