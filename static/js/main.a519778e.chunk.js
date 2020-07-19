(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={btn:"Phonebook_btn__1UFp6",inputName:"Phonebook_inputName__3ASW-",inputNumber:"Phonebook_inputNumber__1T-La"}},15:function(e,t,n){e.exports={btnDelete:"Contact_btnDelete__2vbP_"}},17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(3),l=n(4),u=n(6),m=n(5),s=n(13),d=n(1),h="contacts/ADD_CONTACT",b="contacts/DELETE_CONTACT",f="contacts/FILTER_CONTACT",p=function(e,t){return{type:h,payload:{contact:{id:Date.now(),name:e,number:t}}}},g=function(e){return{type:b,payload:{id:e}}},C=function(e){return{type:f,payload:{name:e}}},E=n(11),y=n.n(E),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contactName:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.contactName,r=n.number,o=e.props.addContact;e.setState({contactName:"",number:""}),o(a,r)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contactName,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginLeft:"30px"}},r.a.createElement("h2",null,"Phonebook"),r.a.createElement("input",{className:y.a.inputName,type:"text",name:"contactName",value:t,onChange:this.handleChange,placeholder:"Enter name...",required:!0}),r.a.createElement("input",{className:y.a.inputNumber,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"Number...",required:!0}),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),O=Object(d.b)(null,(function(e){return{addContact:function(t,n){return e(p(t,n))}}}))(v),_=n(15),N=n.n(_),j=Object(d.b)(null,(function(e,t){var n=t.id;return{deleteContact:function(){return e(g(n))}}}))((function(e){var t=e.contact,n=t.id,a=t.name,o=t.number,c=e.deleteContact;return r.a.createElement("li",null,r.a.createElement("span",null,a,": "),r.a.createElement("span",null,o),r.a.createElement("button",{type:"button",className:N.a.btnDelete,onClick:function(){return c(n)}},"Delete"))})),k=Object(d.b)((function(e){return{filter:e.contactRoot.filterReducer}}),(function(e){return{onChange:function(t){return e(C(t.target.value))}}}))((function(e){var t=e.filter,n=e.onChange;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{marginLeft:"30px"}},"Find contacts by name"),r.a.createElement("input",{style:{marginLeft:"30px"},type:"text",name:"filter",value:t,onChange:n}))})),T=Object(d.b)((function(e){return console.log("state",e),{contactList:e.contactRoot.contactReducer.filter((function(t){return t.name.toLowerCase().includes(e.contactRoot.filterReducer.toLowerCase())}))}}))((function(e){var t=e.contactList,n=e.filter,a=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginLeft:"30px"}},"Contacts"),r.a.createElement(k,{filter:n,onChange:a}),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(j,{id:e.id,contact:e,key:e.id})}))))})),w=Object(a.createContext)(),S={light:{fontColor:"black",bodybg:"white"},dark:{fontColor:"white",bodybg:"black"}},R=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).toggleTheme=function(){e.setState((function(e){return"light"===e.theme?{theme:"dark",themeConfig:S.dark}:{theme:"light",themeConfig:S.light}}))},e.state={theme:"light",themeConfig:S.light,toggleTheme:e.toggleTheme},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),n}(a.Component);R.Consumer=w.Consumer;var D=R,L=function(e){return function(t){return r.a.createElement(D.Consumer,null,(function(n){return console.log(n),r.a.createElement(e,Object.assign({},t,{theme:n.theme,themeConfig:n.themeConfig,toggleTheme:n.toggleTheme}))}))}}(function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.filterByName=function(){},e.deleteContact=function(e){},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.props.themeConfig,t=e.fontColor,n=e.bodybg,a=this.state.filter;return r.a.createElement("div",{style:{color:t,background:n}},r.a.createElement("button",{type:"submit",style:{marginLeft:"30px",marginTop:"30px"},onClick:this.props.toggleTheme},"Change theme"),r.a.createElement(O,{name:this.state.name,number:this.state.number}),r.a.createElement(T,{filter:a,deleteContact:this.deleteContact}))}}]),n}(a.Component)),x=n(2),A=n(16),I=Object(x.b)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return[].concat(Object(A.a)(e),[t.payload.contact]);case b:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload.name;default:return e}}}),P=Object(x.b)({contactRoot:I}),F=Object(x.c)(P,{contactRoot:{contactReducer:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(d.a,{store:F},r.a.createElement(D,null,r.a.createElement(L,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a519778e.chunk.js.map