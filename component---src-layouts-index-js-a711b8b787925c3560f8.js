webpackJsonp([0x67ef26645b2a,60335399758886],{78:function(t,e){t.exports={data:{site:{siteMetadata:{title:"David's Site",description:"David's portfolio website."}},allMarkdownRemark:{totalCount:2,edges:[{node:{id:"/Users/davidwu/Desktop/Projects/mySite-gatsby/src/blog/anotherBlog.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Pandas and Bananas",date:"21 August, 2017"},excerpt:"Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas! Let's add some code here: and…",timeToRead:1}},{node:{id:"/Users/davidwu/Desktop/Projects/mySite-gatsby/src/blog/firstBlog.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"10 August, 2017"},excerpt:"Pandas are really sweet. Here's a video of a panda eating sweets.",timeToRead:1}}]}},layoutContext:{}}},124:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),a=r(i),u=n(127),c=r(u),l=n(78),s=r(l);e.default=function(t){return a.default.createElement(c.default,o({},t,s.default))},t.exports=e.default},137:function(t,e,n){t.exports={default:n(147),__esModule:!0}},139:function(t,e,n){t.exports={default:n(149),__esModule:!0}},143:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(137),i=r(o);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},144:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},147:function(t,e,n){n(172),t.exports=n(7).Object.assign},149:function(t,e,n){n(174),t.exports=n(7).Object.keys},162:function(t,e,n){"use strict";var r=n(24),o=n(55),i=n(35),a=n(60),u=n(90),c=Object.assign;t.exports=!c||n(15)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,l=1,s=o.f,f=i.f;c>l;)for(var p,d=u(arguments[l++]),T=s?r(d).concat(s(d)):r(d),E=T.length,h=0;E>h;)f.call(d,p=T[h++])&&(n[p]=d[p]);return n}:c},166:function(t,e,n){var r=n(14),o=n(7),i=n(15);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},172:function(t,e,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(162)})},174:function(t,e,n){var r=n(60),o=n(24);n(166)("keys",function(){return function(t){return o(r(t))}})},214:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,s;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=a.call(t),e=a.call(e),l(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=u(t),p=u(e)}catch(t){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!l(t[s],e[s],n))return!1;return typeof t==typeof e}var a=Array.prototype.slice,u=n(216),c=n(215),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},215:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},216:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},223:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},231:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return i(O+t)}function i(t){return t.replace(/^\/\//g,"/")}function a(t,e){var n=(0,g.createLocation)(t,null,null,e.location);return n.pathname=o(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var u=n(143),c=r(u),l=n(139),s=r(l),f=n(144),p=r(f),d=n(33),T=r(d),E=n(50),h=r(E),y=n(49),m=r(y);e.withPrefix=o;var A=n(1),b=r(A),v=n(45),_=n(2),S=r(_),g=n(77),O="/",P={activeClassName:S.default.string,activeStyle:S.default.object,exact:S.default.bool,strict:S.default.bool,isActive:S.default.func,location:S.default.object},M=function(t,e){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){t===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},R=function(t){function e(n,r){(0,T.default)(this,e);var o=(0,h.default)(this,t.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var u=r.router.history,c=a(n.to,u);return o.state={path:(0,g.createPath)(c),to:c,IOSupported:i},o.handleRef=o.handleRef.bind(o),o}return(0,m.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=a(t.to,history);this.setState({path:(0,g.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&M(t,function(){___loader.enqueue(e.state.to.pathname)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,r=(0,p.default)(e,["onClick"]),o=void 0;return o=(0,s.default)(P).some(function(e){return t.props[e]})?v.NavLink:v.Link,b.default.createElement(o,(0,c.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var r=t.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},e}(b.default.Component);R.propTypes=(0,c.default)({},P,{innerRef:S.default.func,onClick:S.default.func,to:S.default.oneOfType([S.default.string,S.default.object]).isRequired}),R.contextTypes={router:S.default.object},e.default=R;e.navigateTo=function(t){window.___navigateTo(t)}},275:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),f=r(s),p=n(2),d=r(p),T=n(294),E=r(T),h=n(214),y=r(h),m=n(276),A=n(116),b=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,y.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case A.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=a,e.titleAttributes=c({},i),e));case A.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case A.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return f.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,a=i.children,u=o(i,["children"]),c=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,a),t.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(t,i)},l(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(f.default.Component),e.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},v=function(){return null},_=(0,E.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(v),S=b(_);S.renderStatic=S.rewind,e.Helmet=S,e.default=S},116:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},276:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(1),u=r(a),c=n(79),l=r(c),s=n(116),f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=y(t,s.TAG_NAMES.TITLE),n=y(t,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=y(t,s.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},d=function(t){return y(t,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},E=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[s.TAG_NAMES.BASE]}).map(function(t){return t[s.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(t.indexOf(a)!==-1&&n[a])return e.concat(n)}return e},[])},h=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&S("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();e.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return t},[]).reverse()},y=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},m=function(t){return{baseTag:E([s.TAG_PROPERTIES.HREF],t),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,t),defer:y(t,s.HELMET_PROPS.DEFER),encode:y(t,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,t),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],t),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],t),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,t)}},A=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){A(e)},0)}}(),b=function(t){return clearTimeout(t)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:t.cancelAnimationFrame||b,S=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,O=function(t){g&&_(g),t.defer?g=v(function(){P(t,function(){g=null})}):(P(t),g=null)},P=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,p=t.title,d=t.titleAttributes;w(s.TAG_NAMES.BODY,r),w(s.TAG_NAMES.HTML,o),R(p,d);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,i),metaTags:C(s.TAG_NAMES.META,a),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,l),styleTags:C(s.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=T[t].oldTags)}),e&&e(),c(t,E,h)},M=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=M(t)),w(s.TAG_NAMES.TITLE,e)},w=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=i.indexOf(c);f!==-1&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},C=function(t,e){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,n.isEqualNode(t)})?o.splice(a,1):i.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:i}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},N=function(t,e,n,r){var o=I(n),i=M(e);return o?"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+t+">":"<"+t+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+t+">"},L=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===s.TAG_PROPERTIES.INNER_HTML||t===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+f(r[e],n)+'"';return t?t+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[s.REACT_TAG_MAP[n]||n]=t[n],e},e)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[s.HTML_TAG_MAP[n]||n]=t[n],e},e)},k=function(t,e,n){var r,o=(r={key:e},r[s.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,e)]},H=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=s.REACT_TAG_MAP[t]||t;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},x=function(t,e,n){switch(t){case s.TAG_NAMES.TITLE:return{toComponent:function(){return k(t,e.title,e.titleAttributes,n)},toString:function(){return N(t,e.title,e.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return H(t,e)},toString:function(){return L(t,e,n)}}}},D=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,f=t.title,p=void 0===f?"":f,d=t.titleAttributes;return{base:x(s.TAG_NAMES.BASE,e,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,o,r),link:x(s.TAG_NAMES.LINK,i,r),meta:x(s.TAG_NAMES.META,a,r),noscript:x(s.TAG_NAMES.NOSCRIPT,u,r),script:x(s.TAG_NAMES.SCRIPT,c,r),style:x(s.TAG_NAMES.STYLE,l,r),title:x(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};e.convertReactPropstoHtmlAttributes=G,e.handleClientStateChange=O,e.mapStateOnServer=D,e.reducePropsToState=m,e.requestAnimationFrame=v,e.warn=S}).call(e,function(){return this}())},294:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(1),c=r(u),l=n(223),s=r(l),f=n(299),p=r(f);t.exports=function(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){T=t(d.map(function(t){return t.props})),E.canUseDOM?e(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,E=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.peek=function(){return T},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,d=[],t},e.prototype.shouldComponentUpdate=function(t){return!(0,p.default)(t,this.props)},e.prototype.componentWillMount=function(){d.push(this),f()},e.prototype.componentDidUpdate=function(){f()},e.prototype.componentWillUnmount=function(){var t=d.indexOf(this);d.splice(t,1),f()},e.prototype.render=function(){return c.default.createElement(l,this.props)},e}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=s.default.canUseDOM,E}}},299:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var s=t[l],f=e[l];if(o=n?n.call(r,s,f,l):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},271:function(t,e){},47:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),i=r(o),a=n(2),u=r(a),c=function(t){return i.default.createElement("footer",{id:"footer",style:t.timeout?{display:"none"}:{}},i.default.createElement("p",{className:"copyright"},"© David Wu. All rights reserved."))};c.propTypes={timeout:u.default.bool},e.default=c,t.exports=e.default},48:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(1),c=r(u),l=n(2),s=r(l),f=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.componentDidMount=function(){this.props.onMenuIn()},e.prototype.render=function(){var t=this;return c.default.createElement("header",{id:"header",style:this.props.timeout?{display:"none"}:{}},c.default.createElement("div",{className:"logo"},c.default.createElement("span",{className:"icon fa-terminal"})),c.default.createElement("div",{className:"content"},c.default.createElement("div",{className:"inner"},c.default.createElement("h1",null,"David's"),c.default.createElement("p",null,"Hi there, welcome to my site. I hope you find it interesting.",c.default.createElement("br",null)," Feel free to contact me if you want to know more about me or just want a chat!"))),c.default.createElement("nav",null,c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:"/intro",onClick:function(e){return t.props.navigateWithTimeout("menu","/intro",e)}},"Intro")),c.default.createElement("li",null,c.default.createElement("a",{href:"/work",onClick:function(e){return t.props.navigateWithTimeout("menu","/work",e)}},"Work")),c.default.createElement("li",null,c.default.createElement("a",{href:"/about",onClick:function(e){return t.props.navigateWithTimeout("menu","/about",e)}},"About")),c.default.createElement("li",null,c.default.createElement("a",{href:"/blog",onClick:function(e){return t.props.navigateWithTimeout("menu","/blog",e)}},"Blog")),c.default.createElement("li",null,c.default.createElement("a",{href:"/contact",onClick:function(e){return t.props.navigateWithTimeout("menu","/contact",e)}},"Contact")))))},e}(u.Component);f.propTypes={onOpenArticle:s.default.func,timeout:s.default.bool},e.default=f,t.exports=e.default},127:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=n(1),l=r(c);n(271);var s=n(275),f=r(s),p=n(231),d=n(48),T=(r(d),n(47)),E=(r(T),n(230)),h=r(E),y=function(t){function e(n){o(this,e);var r=i(this,t.call(this,n));return r.handleMenuIn=function(){r.state.articleTimeout&&r.setState({articleTimeout:!1}),r.state.timeout&&r.setState({timeout:!1}),r.state.isArticleVisible&&setTimeout(function(){r.setState({isArticleVisible:!1,article:""})},25)},r.handleMenuOut=function(){r.setState({isArticleVisible:!0}),setTimeout(function(){r.setState({timeout:!1})},325)},r.handlePageIn=function(){r.state.isArticleVisible||r.setState({isArticleVisible:!0}),r.state.timeout&&setTimeout(function(){r.setState({timeout:!1})},325),setTimeout(function(){r.setState({articleTimeout:!0})},100)},r.handlePageOut=function(){r.setState({articleTimeout:!1})},r.navigateWithTimeout=function(t,e,n){n.preventDefault(),"menu"===t?(r.handleMenuOut(),setTimeout(function(){(0,p.navigateTo)(e)},325)):"page"===t&&(r.handlePageOut(),setTimeout(function(){(0,p.navigateTo)(e)},250))},r.state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,loading:"is-loading"},r}return a(e,t),e.prototype.componentDidMount=function(){var t=this;this.timeoutId=setTimeout(function(){t.setState({loading:""})},100)},e.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.data.site.siteMetadata.description,n=this.props,r=(n.location,n.children);return l.default.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.default.createElement(f.default,null,l.default.createElement("title",null,t),l.default.createElement("meta",{name:"description",content:e}),l.default.createElement("link",{key:"icon",rel:"icon",href:h.default})),r(u({},this.props,{article:this.state.article,articleTimeout:this.state.articleTimeout,blogData:this.props.data.allMarkdownRemark.edges,onPageIn:this.handlePageIn,onPageOut:this.handlePageOut,onMenuIn:this.handleMenuIn,onMenuOut:this.handleMenuOut,navigateWithTimeout:this.navigateWithTimeout,timeout:this.state.timeout})),l.default.createElement("div",{id:"bg"}))},e}(l.default.Component);e.default=y;e.pageQuery="** extracted graphql fragment **"},230:function(t,e,n){t.exports=n.p+"static/favicon.c6acedaf.ico"}});
//# sourceMappingURL=component---src-layouts-index-js-a711b8b787925c3560f8.js.map