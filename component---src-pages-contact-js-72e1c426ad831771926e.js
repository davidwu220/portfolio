webpackJsonp([70144966829960],{134:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),u=l(o),s=a(2),i=l(s),f=a(13),m=(l(f),a(14)),d=(l(m),a(15)),p=(l(d),function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return c(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){return e.props.navigateWithTimeout("page","/")}});return u.default.createElement("article",{id:"contact",className:"active "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Contact"),u.default.createElement("form",{method:"post",action:"#"},u.default.createElement("div",{className:"field half first"},u.default.createElement("label",{htmlFor:"name"},"Name"),u.default.createElement("input",{type:"text",name:"name",id:"name"})),u.default.createElement("div",{className:"field half"},u.default.createElement("label",{htmlFor:"email"},"Email"),u.default.createElement("input",{type:"text",name:"email",id:"email"})),u.default.createElement("div",{className:"field"},u.default.createElement("label",{htmlFor:"message"},"Message"),u.default.createElement("textarea",{name:"message",id:"message",rows:"4"})),u.default.createElement("ul",{className:"actions"},u.default.createElement("li",null,u.default.createElement("input",{type:"submit",value:"Send Message",className:"special"})),u.default.createElement("li",null,u.default.createElement("input",{type:"reset",value:"Reset"})))),u.default.createElement("ul",{className:"icons"},u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-twitter"},u.default.createElement("span",{className:"label"},"Twitter"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-facebook"},u.default.createElement("span",{className:"label"},"Facebook"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-instagram"},u.default.createElement("span",{className:"label"},"Instagram"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-github"},u.default.createElement("span",{className:"label"},"GitHub")))),t)},t}(u.default.Component));p.propTypes={route:i.default.object,article:i.default.string,articleTimeout:i.default.bool,onCloseArticle:i.default.func,timeout:i.default.bool},t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-72e1c426ad831771926e.js.map