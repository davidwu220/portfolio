webpackJsonp([0x67ef26645b2a,60335399758886],{77:function(e,t){e.exports={data:{site:{siteMetadata:{title:"David's Site",description:"David's portfolio website."}},allMarkdownRemark:{totalCount:2,edges:[{node:{id:"/Users/davidwu/Desktop/Projects/mySite-gatsby/src/blog/anotherBlog.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Pandas and Bananas",date:"21 August, 2017"},excerpt:"Do Pandas eat bananas? Check out this short video that shows that yes! pandas do\nseem to really enjoy bananas! Let's add some code here: and…",timeToRead:1}},{node:{id:"/Users/davidwu/Desktop/Projects/mySite-gatsby/src/blog/firstBlog.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"10 August, 2017"},excerpt:"Pandas are really sweet. Here's a video of a panda eating sweets.",timeToRead:1}}]}},layoutContext:{}}},124:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),i=r(o),l=n(130),u=r(l),c=n(77),s=r(c);t.default=function(e){return i.default.createElement(u.default,a({},e,s.default))},e.exports=t.default},217:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),o=f.length-1;o>=0;o--)if(f[o]!=d[o])return!1;for(o=f.length-1;o>=0;o--)if(s=f[o],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,l=n(219),u=n(218),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},218:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},219:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},226:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},276:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(2),p=r(d),m=n(295),T=r(m),E=n(217),h=r(E),y=n(277),A=n(116),b=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=i,t.titleAttributes=u({},o),t));case A.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},o)});case A.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},o)})}return u({},a,(n={},n[r.type]=u({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,l=a(o,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,i),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=u({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},g=(0,T.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(v),S=b(g);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},116:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},277:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),l=r(i),u=n(78),c=r(u),s=n(116),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],i=o.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();t.indexOf(u)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],u=(0,c.default)({},r[l],a[l]);r[l]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:m(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,O=function(e){_&&g(_),e.defer?_=v(function(){P(e,function(){_=null})}):(P(e),_=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,r),R(s.TAG_NAMES.HTML,a),w(d,p);var m={baseTag:N(s.TAG_NAMES.BASE,n),linkTags:N(s.TAG_NAMES.LINK,o),metaTags:N(s.TAG_NAMES.META,i),noscriptTags:N(s.TAG_NAMES.NOSCRIPT,l),scriptTags:N(s.TAG_NAMES.SCRIPT,c),styleTags:N(s.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=m[e].oldTags)}),t&&t(),u(e,T,E)},M=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var f=o.indexOf(u);f!==-1&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,n.isEqualNode(e)})?a.splice(i,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),o=M(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(o,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),o=j(n,a);return[l.default.createElement(s.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),l.default.createElement(e,a)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,a,r),link:x(s.TAG_NAMES.LINK,o,r),meta:x(s.TAG_NAMES.META,i,r),noscript:x(s.TAG_NAMES.NOSCRIPT,l,r),script:x(s.TAG_NAMES.SCRIPT,u,r),style:x(s.TAG_NAMES.STYLE,c,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=v,t.warn=S}).call(t,function(){return this}())},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),u=r(l),c=n(226),s=r(c),f=n(300),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){m=e(p.map(function(e){return e.props})),T.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,T=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(c,this.props)},t}(l.Component);return T.displayName="SideEffect("+r(c)+")",T.canUseDOM=s.default.canUseDOM,T}}},300:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var s=e[c],f=t[c];if(a=n?n.call(r,s,f,c):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},272:function(e,t){},127:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(2),l=r(i),u=function(e){return o.default.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},o.default.createElement("p",{className:"copyright"},"© David Wu. All rights reserved."))};u.propTypes={timeout:l.default.bool},t.default=u,e.exports=t.default},128:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(2),s=r(c),f=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){this.props.onMenuIn()},t.prototype.render=function(){var e=this;return u.default.createElement("header",{id:"header",style:this.props.timeout?{display:"none"}:{}},u.default.createElement("div",{className:"logo"},u.default.createElement("span",{className:"icon fa-terminal"})),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"inner"},u.default.createElement("h1",null,"David's"),u.default.createElement("p",null,"Hi there, welcome to my site. I hope you find it interesting.",u.default.createElement("br",null)," Feel free to contact me if you want to know more about me or just want a chat!"))),u.default.createElement("nav",null,u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"/intro",onClick:function(t){return e.props.navigateWithTimeout("menu","/intro",t)}},"Intro")),u.default.createElement("li",null,u.default.createElement("a",{href:"/work",onClick:function(t){return e.props.navigateWithTimeout("menu","/work",t)}},"Work")),u.default.createElement("li",null,u.default.createElement("a",{href:"/about",onClick:function(t){return e.props.navigateWithTimeout("menu","/about",t)}},"About")),u.default.createElement("li",null,u.default.createElement("a",{href:"/blog",onClick:function(t){return e.props.navigateWithTimeout("menu","/blog",t)}},"Blog")),u.default.createElement("li",null,u.default.createElement("a",{href:"/contact",onClick:function(t){return e.props.navigateWithTimeout("menu","/contact",t)}},"Contact")))))},t}(l.Component);f.propTypes={onOpenArticle:s.default.func,timeout:s.default.bool},t.default=f,e.exports=t.default},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(73),s=(r(c),n(2)),f=r(s),d=n(13),p=r(d),m=n(14),T=r(m),E=n(15),h=r(E),y=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}}),n=this.props.blogData;return u.default.createElement("div",{id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},u.default.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Intro"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:p.default,alt:""})),u.default.createElement("p",null,"Hi there, I'm David and welcome to my site. In here, you can find By the way, check out my ",u.default.createElement("a",{href:"/#work",onClick:function(){return e.props.onArticleTrans("work")}},"awesome work"),"."),u.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula."),t),u.default.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Work"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:T.default,alt:""})),u.default.createElement("p",null,"Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices."),u.default.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus."),t),u.default.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"About"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:h.default,alt:""})),u.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet."),t),u.default.createElement("article",{id:"blog",className:("blog"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Blog"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:h.default,alt:""})),u.default.createElement("ul",{className:"alt"},u.default.createElement("a",{href:"/postPage"},"Read the post..."),n.map(function(e){var t=e.node;return u.default.createElement("li",{key:t.id},u.default.createElement("header",null,u.default.createElement("h3",null,t.frontmatter.title),u.default.createElement("p",{className:"date"},t.frontmatter.date," - ",t.timeToRead," minute read")),u.default.createElement("p",null,t.excerpt))})),t),u.default.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"Contact"),u.default.createElement("form",{method:"post",action:"#"},u.default.createElement("div",{className:"field half first"},u.default.createElement("label",{htmlFor:"name"},"Name"),u.default.createElement("input",{type:"text",name:"name",id:"name"})),u.default.createElement("div",{className:"field half"},u.default.createElement("label",{htmlFor:"email"},"Email"),u.default.createElement("input",{type:"text",name:"email",id:"email"})),u.default.createElement("div",{className:"field"},u.default.createElement("label",{htmlFor:"message"},"Message"),u.default.createElement("textarea",{name:"message",id:"message",rows:"4"})),u.default.createElement("ul",{className:"actions"},u.default.createElement("li",null,u.default.createElement("input",{type:"submit",value:"Send Message",className:"special"})),u.default.createElement("li",null,u.default.createElement("input",{type:"reset",value:"Reset"})))),u.default.createElement("ul",{className:"icons"},u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-twitter"},u.default.createElement("span",{className:"label"},"Twitter"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-facebook"},u.default.createElement("span",{className:"label"},"Facebook"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-instagram"},u.default.createElement("span",{className:"label"},"Instagram"))),u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"icon fa-github"},u.default.createElement("span",{className:"label"},"GitHub")))),t))},t}(u.default.Component);y.propTypes={route:f.default.object,article:f.default.string,articleTimeout:f.default.bool,onCloseArticle:f.default.func,timeout:f.default.bool},t.default=y,e.exports=t.default},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),c=r(u);n(272);var s=n(276),f=r(s),d=n(73),p=n(128),m=r(p),T=n(129),E=(r(T),n(127)),h=r(E),y=n(233),A=r(y),b=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.handleMenuIn=function(){r.state.articleTimeout&&r.setState({articleTimeout:!1}),r.state.timeout&&r.setState({timeout:!1}),r.state.isArticleVisible&&setTimeout(function(){r.setState({isArticleVisible:!1,article:""})},25)},r.handleMenuOut=function(){r.setState({isArticleVisible:!0}),setTimeout(function(){r.setState({timeout:!1})},325)},r.handlePageIn=function(){var e=0;r.state.isArticleVisible||r.setState({isArticleVisible:!0}),r.state.timeout&&(e+=325,setTimeout(function(){r.setState({timeout:!1})},e)),e+=150,setTimeout(function(){r.setState({articleTimeout:!0})},e)},r.handlePageOut=function(){r.setState({articleTimeout:!1})},r.navigateWithTimeout=function(e,t,n){n.preventDefault(),"menu"===e?(r.handleMenuOut(),setTimeout(function(){(0,d.navigateTo)(t)},325)):"page"===e&&(r.handlePageOut(),setTimeout(function(){(0,d.navigateTo)(t)},200))},r.state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"
},r}return i(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.site.siteMetadata.description,n=this.props,r=n.location,a=n.children,o="/",i=void 0;return i=r.pathname===o?c.default.createElement("div",{id:"wrapper"},c.default.createElement(m.default,{onMenuIn:this.handleMenuIn,onMenuOut:this.handleMenuOut,timeout:this.state.timeout,navigateWithTimeout:this.navigateWithTimeout}),c.default.createElement(h.default,{timeout:this.state.timeout})):c.default.createElement("div",{id:"wrapper",className:"page"},c.default.createElement("div",{id:"main"},a(l({},this.props,{article:this.state.article,articleTimeout:this.state.articleTimeout,blogData:this.props.data.allMarkdownRemark.edges,onPageIn:this.handlePageIn,onPageOut:this.handlePageOut,navigateWithTimeout:this.navigateWithTimeout})))),c.default.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.default.createElement(f.default,null,c.default.createElement("title",null,e),c.default.createElement("meta",{name:"description",content:t}),c.default.createElement("link",{key:"icon",rel:"icon",href:A.default})),i,c.default.createElement("div",{id:"bg"}))},t}(c.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"},233:function(e,t,n){e.exports=n.p+"static/favicon.c6acedaf.ico"}});
//# sourceMappingURL=component---src-layouts-index-js-e465e0054a87b919bc2d.js.map