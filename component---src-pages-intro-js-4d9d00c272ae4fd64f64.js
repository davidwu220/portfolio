webpackJsonp([0x7027b06498e6],{29:function(e,t,i){e.exports=i.p+"static/pic01.55e1797f.jpg"},133:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=i(1),l=n(u),s=i(2),c=n(s),m=i(29),p=n(m),f=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=l.default.createElement("div",{className:"close",onClick:function(t){return e.props.navigateWithTimeout("page","/")}});return l.default.createElement("div",{id:"wrapper"},l.default.createElement("div",{id:"main"},l.default.createElement("article",{id:"intro",className:this.props.articleTimeout?"timeout":""},l.default.createElement("h2",{className:"major"},"Intro"),l.default.createElement("span",{className:"image main"},l.default.createElement("img",{src:p.default,alt:""})),l.default.createElement("p",null,"Hi there, I'm David and welcome to my site. In here, you can find By the way, check out my ",l.default.createElement("a",{href:"/work",onClick:function(t){return e.props.navigateWithTimeout("page","/work",t)}},"awesome work"),"."),l.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula."),t)))},t}(u.Component);f.propTypes={route:c.default.object,article:c.default.string,articleTimeout:c.default.bool,onCloseArticle:c.default.func,timeout:c.default.bool},t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-intro-js-4d9d00c272ae4fd64f64.js.map