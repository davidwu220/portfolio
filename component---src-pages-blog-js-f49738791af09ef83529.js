webpackJsonp([0xc19374f83753],{132:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(1),i=n(u),c=a(9),f=a(2),s=n(f),p=a(14),d=(n(p),a(15)),m=(n(d),a(16)),h=n(m),y=function(e){function t(){var a,n,l;o(this,t);for(var u=arguments.length,i=Array(u),f=0;f<u;f++)i[f]=arguments[f];return a=n=r(this,e.call.apply(e,[this].concat(i))),n.navigateWithTimeout=function(e){n.props.onPageOut(),setTimeout(function(){(0,c.navigateTo)(e)},200)},l=a,r(n,l)}return l(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=i.default.createElement("div",{className:"close",onClick:function(){return e.navigateWithTimeout("/")}}),a=this.props.blogData;return i.default.createElement("article",{id:"blog",className:"active "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.default.createElement("h2",{className:"major"},"Blog"),i.default.createElement("span",{className:"image main"},i.default.createElement("img",{src:h.default,alt:""})),i.default.createElement("ul",{className:"alt"},i.default.createElement("a",{href:"/postPage"},"Read the post..."),a.map(function(e){var t=e.node;return i.default.createElement("li",{key:t.id},i.default.createElement("header",null,i.default.createElement("h3",null,t.frontmatter.title),i.default.createElement("p",{className:"date"},t.frontmatter.date," - ",t.timeToRead," minute read")),i.default.createElement("p",null,t.excerpt))})),t)},t}(i.default.Component);y.propTypes={route:s.default.object,article:s.default.string,articleTimeout:s.default.bool,onCloseArticle:s.default.func,timeout:s.default.bool},t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-blog-js-f49738791af09ef83529.js.map