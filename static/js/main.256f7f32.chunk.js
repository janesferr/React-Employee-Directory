(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=(a(34),a(21)),h=a(22),l=a(23),o=a(10),d=a(29),j=a(28),u=(a(35),a(5)),m=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsxs)("td",{children:[" ",Object(u.jsx)("img",{alt:e.name,src:e.image})," "]})]})},b=a(26),O=(a(18),a(27)),f=a(44),x=a(43),p={color:"white",backgroundColor:"DodgerBlue",padding:"10px",fontFamily:"Arial",textAlign:"center"};var g=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O.a,{bg:"primary",variant:"dark",children:[Object(u.jsx)(f.a,{className:"mr-auto",children:Object(u.jsx)("h1",{style:p,children:"Employee Directory"})}),Object(u.jsx)("div",{className:"searchbox",children:Object(u.jsx)(x.a,{inline:!0,children:Object(u.jsx)("input",{name:"searchTerm",className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:e.handleSearchChange})})})]})})},v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={users:[],search:"",alphabetical:"az"},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSearchChange=n.handleSearchChange.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50").then((function(e){if(e.ok)return e.json();throw new Error("Request failed.")})).then((function(t){e.setState({users:t.results})})).catch((function(e){console.log(e)}))}},{key:"renderDirectoryList",value:function(){var e,t=this;return e=this.state.searchTerm&&""!==this.state.searchTerm.trim()?this.state.users.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).startsWith(t.state.searchTerm.trim())})):this.state.users,"az"===this.state.alphabetical?e.sort((function(e,t){return e.name.first===t.name.first?0:e.name.first<t.name.first?-1:1})):e.sort((function(e,t){return e.name.first===t.name.first?0:e.name.first<t.name.first?1:-1})),e.map((function(e,t){return Object(u.jsx)(m,{id:t+1,name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,phone:e.phone,image:e.picture.medium},e.login.md5)}))}},{key:"render",value:function(){var e=this.renderDirectoryList();return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{handleSearchChange:this.handleSearchChange}),Object(u.jsx)("div",{children:Object(u.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"light",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsxs)("th",{children:[" Name ",Object(u.jsxs)("select",{name:"alphabetical",value:this.state.alphabetical,onChange:this.handleChange,children:[Object(u.jsx)("option",{value:"az",defaultValue:!0,children:"A to Z"}),Object(u.jsx)("option",{value:"za",children:"Z to A"})]})]}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"Picture"})]})}),Object(u.jsx)("tbody",{children:e})]})})]})}},{key:"handleSearchChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}}]),a}(n.Component);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.256f7f32.chunk.js.map