"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(559),o=e(184);n.default=function(){var t=(0,c.UO)().id,n=(0,a.useState)([]),e=(0,r.Z)(n,2),i=e[0],s=e[1],p=(0,a.useState)(""),f=(0,r.Z)(p,2),l=f[0],d=f[1];console.log({cast:i}),(0,a.useEffect)((function(){(0,u.TP)(t).then((function(t){console.log(t),s(t)})).catch((function(t){d(t),console.log("error :>> ",l)}))}),[]);return(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Our Cast"}),(0,o.jsx)("ul",{children:function(){if(i.cast)return i.cast.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:t.original_name}),t.profile_path&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:"".concat(t.original_name)}),(0,o.jsxs)("p",{children:["Character: ",t.character]})]},t.id+t.credit_id)}))}()})]})}},559:function(t,n,e){e.d(n,{Df:function(){return s},Pg:function(){return f},TP:function(){return l},gH:function(){return p},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="50540b41e66ef631d8d57e13679f9024",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=true"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.283b1a2b.chunk.js.map