webpackJsonp([70144966829960],{133:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),s=l(o),u=a(9),i=a(2),f=l(i),m=a(14),d=(l(m),a(15)),p=(l(d),a(16)),E=(l(p),function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return c(t,e),t.prototype.componentDidMount=function(){this.props.onOpenArticle("contact",!1)},t.prototype.render=function(){var e=this,t=s.default.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle(),setTimeout(function(){return(0,u.navigateTo)("/")},325)}});this.props.blogData;return s.default.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.default.createElement("h2",{className:"major"},"Contact"),s.default.createElement("form",{method:"post",action:"#"},s.default.createElement("div",{className:"field half first"},s.default.createElement("label",{htmlFor:"name"},"Name"),s.default.createElement("input",{type:"text",name:"name",id:"name"})),s.default.createElement("div",{className:"field half"},s.default.createElement("label",{htmlFor:"email"},"Email"),s.default.createElement("input",{type:"text",name:"email",id:"email"})),s.default.createElement("div",{className:"field"},s.default.createElement("label",{htmlFor:"message"},"Message"),s.default.createElement("textarea",{name:"message",id:"message",rows:"4"})),s.default.createElement("ul",{className:"actions"},s.default.createElement("li",null,s.default.createElement("input",{type:"submit",value:"Send Message",className:"special"})),s.default.createElement("li",null,s.default.createElement("input",{type:"reset",value:"Reset"})))),s.default.createElement("ul",{className:"icons"},s.default.createElement("li",null,s.default.createElement("a",{href:"#",className:"icon fa-twitter"},s.default.createElement("span",{className:"label"},"Twitter"))),s.default.createElement("li",null,s.default.createElement("a",{href:"#",className:"icon fa-facebook"},s.default.createElement("span",{className:"label"},"Facebook"))),s.default.createElement("li",null,s.default.createElement("a",{href:"#",className:"icon fa-instagram"},s.default.createElement("span",{className:"label"},"Instagram"))),s.default.createElement("li",null,s.default.createElement("a",{href:"#",className:"icon fa-github"},s.default.createElement("span",{className:"label"},"GitHub")))),t)},t}(s.default.Component));E.propTypes={route:f.default.object,article:f.default.string,articleTimeout:f.default.bool,onCloseArticle:f.default.func,timeout:f.default.bool},t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-8cbc0ced642a3af3a5b5.js.map