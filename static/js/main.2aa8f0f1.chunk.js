(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),s=n.n(i),j=(n(14),n(5)),o=n(6),a=n(9),h=n(8),d=(n(15),n(0)),l=function(e){return Object(d.jsx)("h1",{className:"title",children:e.children})},u=(n(17),function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("img",{alt:e.name,src:e.image})," "]})]})}),b=n(3),m=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={users:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50").then((function(e){if(e.ok)return e.json();throw new Error("Request failed.")})).then((function(t){e.setState({users:t.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.users.map((function(e,t){return Object(d.jsx)(u,{id:t+1,name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,phone:e.phone,image:e.picture.medium},e.login.md5)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{children:" Employee Directory"}),Object(d.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"light",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:" Name "}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Picture"})]})}),Object(d.jsx)("tbody",{children:e})]})]})}}]),n}(c.Component);n(18);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2aa8f0f1.chunk.js.map