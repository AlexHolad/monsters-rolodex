(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(14),o=n.n(r),a=(n(24),n(15)),i=n(16),h=n(19),l=n(18),u=n(17),d=n.n(u),j=(n(43),n(44),n(0)),m=function(e){var t=e.monster;return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(j.jsx)("h2",{children:t.name},t.id),Object(j.jsx)("p",{children:t.email})]})},f=function(e){var t=e.monsters;return Object(j.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(j.jsx)(m,{monster:e},e.id)}))})},b=(n(46),function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(47),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({monsters:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(b,{placeholder:"search monsters",handleChange:this.handleChange}),Object(j.jsx)(f,{monsters:s})]})}}]),n}(s.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}},[[48,1,2]]]);
//# sourceMappingURL=main.d8151e9c.chunk.js.map