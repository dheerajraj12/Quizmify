import{Fragment as n,options as t,Component as e}from"preact";import"preact/devtools";function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function r(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a={};function i(){a={}}function c(t){return t.type===n?"Fragment":"function"==typeof t.type?t.type.displayName||t.type.name:"string"==typeof t.type?t.type:"#text"}var u=[],l=[];function s(){return u.length>0?u[u.length-1]:null}var f=!1;function d(t){return"function"==typeof t.type&&t.type!=n}function p(n){for(var t=[n],e=n;null!=e.__o;)t.push(e.__o),e=e.__o;return t.reduce(function(n,t){n+="  in "+c(t);var e=t.__source;return e?n+=" (at "+e.fileName+":"+e.lineNumber+")":f||(f=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),n+"\n"},"")}var h="function"==typeof WeakMap;function v(n){return n?"function"==typeof n.type?null===n.__?null!==n.__e&&null!==n.__e.parentNode?n.__e.parentNode.localName:"":v(n.__):n.type:""}var y=e.prototype.setState;e.prototype.setState=function(n,t){return null==this.__v&&null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+p(s())),y.call(this,n,t)};var m=e.prototype.forceUpdate;function b(n){var t=n.props,e=c(n),o="";for(var r in t)if(t.hasOwnProperty(r)&&"children"!==r){var a=t[r];"function"==typeof a&&(a="function "+(a.displayName||a.name)+"() {}"),a=Object(a)!==a||a.toString?a+"":Object.prototype.toString.call(a),o+=" "+r+"="+JSON.stringify(a)}var i=t.children;return"<"+e+o+(i&&i.length?">..</"+e+">":" />")}e.prototype.forceUpdate=function(n){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+p(s())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+p(this.__v)),m.call(this,n)},function(){!function(){var n=t.__b,e=t.diffed,o=t.__,r=t.vnode,a=t.__r;t.diffed=function(n){d(n)&&l.pop(),u.pop(),e&&e(n)},t.__b=function(t){d(t)&&u.push(t),n&&n(t)},t.__=function(n,t){l=[],o&&o(n,t)},t.vnode=function(n){n.__o=l.length>0?l[l.length-1]:null,r&&r(n)},t.__r=function(n){d(n)&&l.push(n),a&&a(n)}}();var n=!1,e=t.__b,o=t.diffed,i=t.vnode,s=t.__r,f=t.__e,y=t.__,m=t.__h,w=t.__c,g=h?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,E=[],k=[];t.__e=function(n,t,e,o){if(t&&t.__c&&"function"==typeof n.then){var r=n;n=new Error("Missing Suspense. The throwing component was: "+c(t));for(var a=t;a;a=a.__)if(a.__c&&a.__c.__c){n=r;break}if(n instanceof Error)throw n}try{(o=o||{}).componentStack=p(t),f(n,t,e,o),"function"!=typeof n.then&&setTimeout(function(){throw n})}catch(n){throw n}},t.__=function(n,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var e;switch(t.nodeType){case 1:case 11:case 9:e=!0;break;default:e=!1}if(!e){var o=c(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+o+" />, "+t+");")}y&&y(n,t)},t.__b=function(t){var o=t.type;if("string"!=typeof o||"thead"!==o&&"tfoot"!==o&&"tbody"!==o&&"tr"!==o&&"td"!==o&&"th"!==o||k.push(t),n=!0,void 0===o)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+b(t)+"\n\n"+p(t));if(null!=o&&"object"==typeof o){if(void 0!==o.__k&&void 0!==o.__e)throw new Error("Invalid type passed to createElement(): "+o+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+c(t)+" = "+b(o)+";\n  let vnode = <My"+c(t)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+p(t));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o))}if(void 0!==t.ref&&"function"!=typeof t.ref&&"object"!=typeof t.ref&&!("$$typeof"in t))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof t.ref+"] instead\n"+b(t)+"\n\n"+p(t));if("string"==typeof t.type)for(var r in t.props)if("o"===r[0]&&"n"===r[1]&&"function"!=typeof t.props[r]&&null!=t.props[r])throw new Error("Component's \""+r+'" property should be a function, but got ['+typeof t.props[r]+"] instead\n"+b(t)+"\n\n"+p(t));if("function"==typeof t.type&&t.type.propTypes){if("Lazy"===t.type.displayName&&g&&!g.lazyPropTypes.has(t.type)){var i="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var u=t.type();g.lazyPropTypes.set(t.type,!0),console.warn(i+"Component wrapped in lazy() is "+c(u))}catch(n){console.warn(i+"We will log the wrapped component's name once it is loaded.")}}var l=t.props;t.type.__f&&delete(l=function(n,t){for(var e in t)n[e]=t[e];return n}({},l)).ref,function(n,t,e,o,r){Object.keys(n).forEach(function(e){var i;try{i=n[e](t,e,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(n){i=n}i&&!(i.message in a)&&(a[i.message]=!0,console.error("Failed prop type: "+i.message+(r&&"\n"+r()||"")))})}(t.type.propTypes,l,0,c(t),function(){return p(t)})}e&&e(t)},t.__r=function(t){s&&s(t),n=!0},t.__h=function(t,e,o){if(!t||!n)throw new Error("Hook can only be invoked from render methods.");m&&m(t,e,o)};var _=function(n,t){return{get:function(){var e="get"+n+t;E&&E.indexOf(e)<0&&(E.push(e),console.warn("getting vnode."+n+" is deprecated, "+t))},set:function(){var e="set"+n+t;E&&E.indexOf(e)<0&&(E.push(e),console.warn("setting vnode."+n+" is not allowed, "+t))}}},j={nodeName:_("nodeName","use vnode.type"),attributes:_("attributes","use vnode.props"),children:_("children","use vnode.props.children")},I=Object.create({},j);t.vnode=function(n){var t=n.props;if(null!==n.type&&null!=t&&("__source"in t||"__self"in t)){var e=n.props={};for(var o in t){var r=t[o];"__source"===o?n.__source=r:"__self"===o?n.__self=r:e[o]=r}}n.__proto__=I,i&&i(n)},t.diffed=function(t){if(t.__k&&t.__k.forEach(function(n){if("object"==typeof n&&n&&void 0===n.type){var e=Object.keys(n).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+e+"}.\n\n"+p(t))}}),n=!1,o&&o(t),null!=t.__k)for(var e=[],a=0;a<t.__k.length;a++){var i=t.__k[a];if(i&&null!=i.key){var u=i.key;if(-1!==e.indexOf(u)){console.error('Following component has two or more children with the same key attribute: "'+u+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+b(t)+"\n\n"+p(t));break}e.push(u)}}if(null!=t.__c&&null!=t.__c.__H){var l=t.__c.__H.__;if(l)for(var s=0;s<l.length;s+=1){var f=l[s];if(f.__H)for(var d,h=r(f.__H);!(d=h()).done;)if((y=d.value)!=y){var v=c(t);throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+s+" in component "+v+" was called with NaN.")}}}var y},t.__c=function(n,t){for(var e=0;e<k.length;e++){var o=k[e],r=o.type,a=v(o.__);"thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===a?"tr"===r&&"thead"!==a&&"tfoot"!==a&&"tbody"!==a&&"table"!==a?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+b(o)+"\n\n"+p(o)):"td"===r&&"tr"!==a?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+b(o)+"\n\n"+p(o)):"th"===r&&"tr"!==a&&console.error("Improper nesting of table. Your <th> should have a <tr>."+b(o)+"\n\n"+p(o)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+b(o)+"\n\n"+p(o))}k=[],w&&w(n,t)}}();export{i as resetPropWarnings};
//# sourceMappingURL=debug.module.js.map
