webpackJsonp([0xc19374f83753],{132:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=n(i),c=a(9),f=a(2),s=n(f),p=a(14),d=(n(p),a(15)),m=(n(d),a(16)),h=n(m),b=function(e){function t(){var a,n,l;o(this,t);for(var i=arguments.length,u=Array(i),f=0;f<i;f++)u[f]=arguments[f];return a=n=r(this,e.call.apply(e,[this].concat(u))),n.navigateWithTimeout=function(e){n.props.onPageOut(),setTimeout(function(){(0,c.navigateTo)(e)},200)},l=a,r(n,l)}return l(t,e),t.prototype.componentDidMount=function(){this.props.onOpenArticle("blog",!1)},t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){e.navigateWithTimeout("/")}}),a=this.props.blogData;return u.default.createElement("article",{id:"blog",className:("blog"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Blog"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:h.default,alt:""})),u.default.createElement("ul",{className:"alt"},u.default.createElement("a",{href:"/postPage"},"Read the post..."),a.map(function(e){var t=e.node;return u.default.createElement("li",{key:t.id},u.default.createElement("header",null,u.default.createElement("h3",null,t.frontmatter.title),u.default.createElement("p",{className:"date"},t.frontmatter.date," - ",t.timeToRead," minute read")),u.default.createElement("p",null,t.excerpt))})),t)},t}(u.default.Component);b.propTypes={route:s.default.object,article:s.default.string,articleTimeout:s.default.bool,onCloseArticle:s.default.func,timeout:s.default.bool},t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-blog-js-2ec60f57ac41afa74ca1.js.map