webpackJsonp([35783957827783],{33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=n(1),r=o(u),a=n(2),l=o(a),i=function(e){return r.default.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.default.createElement("p",{className:"copyright"},"© David Wu. All rights reserved."))};i.propTypes={timeout:l.default.bool},t.default=i,e.exports=t.default},34:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=o(l),c=n(2),f=o(c),s=function(e){function t(){return u(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){this.props.onMenuIn()},t.prototype.render=function(){var e=this;return i.default.createElement("header",{id:"header",style:this.props.timeout?{display:"none"}:{}},i.default.createElement("div",{className:"logo"},i.default.createElement("span",{className:"icon fa-terminal"})),i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"inner"},i.default.createElement("h1",null,"David's"),i.default.createElement("p",null,"Hi there, welcome to my site. I hope you find it interesting.",i.default.createElement("br",null)," Feel free to contact me if you want to know more about me or just want a chat!"))),i.default.createElement("nav",null,i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("a",{href:"/intro",onClick:function(t){return e.props.navigateWithTimeout("menu","/intro",t)}},"Intro")),i.default.createElement("li",null,i.default.createElement("a",{href:"/work",onClick:function(t){return e.props.navigateWithTimeout("menu","/work",t)}},"Work")),i.default.createElement("li",null,i.default.createElement("a",{href:"/about",onClick:function(t){return e.props.navigateWithTimeout("menu","/about",t)}},"About")),i.default.createElement("li",null,i.default.createElement("a",{href:"/blog",onClick:function(t){return e.props.navigateWithTimeout("menu","/blog",t)}},"Blog")),i.default.createElement("li",null,i.default.createElement("a",{href:"/contact",onClick:function(t){return e.props.navigateWithTimeout("menu","/contact",t)}},"Contact")))))},t}(l.Component);s.propTypes={onOpenArticle:f.default.func,timeout:f.default.bool},t.default=s,e.exports=t.default},49:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=n(1),r=o(u),a=n(34),l=o(a),i=n(33),c=o(i),f=function(){return r.default.createElement("div",{id:"wrapper"},r.default.createElement(l.default,{onMenuIn:(void 0).props.onMenuIn,onMenuOut:(void 0).props.onMenuOut,timeout:(void 0).props.timeout,navigateWithTimeout:(void 0).props.navigateWithTimeout}),r.default.createElement(c.default,{timeout:(void 0).props.timeout}))};t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-a5661d3ce48652d6dade.js.map