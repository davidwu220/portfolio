webpackJsonp([23899280101116],{137:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),u=n(l),s=a(9),c=a(2),f=n(c),m=a(14),p=(n(m),a(15)),d=n(p),g=a(16),h=(n(g),function(e){function t(){var a,n,r;i(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return a=n=o(this,e.call.apply(e,[this].concat(u))),n.navigateWithTimeout=function(e){n.props.onPageOut(),setTimeout(function(){(0,s.navigateTo)(e)},200)},r=a,o(n,r)}return r(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){e.navigateWithTimeout("/")}});return u.default.createElement("article",{id:"work",className:"active "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Work"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:d.default,alt:""})),u.default.createElement("p",null,"Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices."),u.default.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus."),t)},t}(u.default.Component));h.propTypes={route:f.default.object,article:f.default.string,articleTimeout:f.default.bool,onCloseArticle:f.default.func,timeout:f.default.bool},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-work-js-115f2ded4c58a72b65af.js.map