webpackJsonp([0xefeaa6d1881d],{131:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),u=i(l),s=a(9),c=a(2),f=i(c),p=a(14),m=(i(p),a(15)),d=(i(m),a(16)),b=i(d),h=function(e){function t(){var a,i,r;n(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return a=i=o(this,e.call.apply(e,[this].concat(u))),i.navigateWithTimeout=function(e){i.props.onPageOut(),setTimeout(function(){(0,s.navigateTo)(e)},200)},r=a,o(i,r)}return r(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){e.navigateWithTimeout("/")}});return u.default.createElement("article",{id:"about",className:"active "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"About"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:b.default,alt:""})),u.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet."),t)},t}(u.default.Component);h.propTypes={route:f.default.object,article:f.default.string,articleTimeout:f.default.bool,onCloseArticle:f.default.func,timeout:f.default.bool},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-js-e81b298f0b3e2275a1be.js.map