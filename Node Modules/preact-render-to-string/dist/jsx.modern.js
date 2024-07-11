import{Fragment as t,options as e,h as n}from"preact";if("function"!=typeof Symbol){let t=0;Symbol=function(e){return`@@${e}${++t}`},Symbol.for=t=>`@@${t}`}const r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,i=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,c=/["&<]/;function s(t){if(!1===c.test(t+=""))return t;let e=0,n=0,r="",o="";for(;n<t.length;n++){switch(t.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==e&&(r+=t.slice(e,n)),r+=o,e=n+1}return n!==e&&(r+=t.slice(e,n)),r}let u=(t,e)=>String(t).replace(/(\n+)/g,"$1"+(e||"\t")),f=(t,e,n)=>String(t).length>(e||40)||!n&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<");const a={},p=/([A-Z])/g;function d(t){let e="";for(let n in t){let o=t[n];null!=o&&""!==o&&(e&&(e+=" "),e+="-"==n[0]?n:a[n]||(a[n]=n.replace(p,"-$1").toLowerCase()),e="number"==typeof o&&!1===r.test(n)?e+": "+o+"px;":e+": "+o+";")}return e||void 0}function _(t,e){return Array.isArray(e)?e.reduce(_,t):null!=e&&!1!==e&&t.push(e),t}function y(){this.__d=!0}function g(t,e){return{__v:t,context:e,props:t.props,setState:y,forceUpdate:y,__d:!0,__h:[]}}function b(t,e){let n=t.contextType,r=n&&e[n.__c];return null!=n?r?r.props.value:n.__:e}const m=[];function h(n,r,c,a,p,y){if(null==n||"boolean"==typeof n)return"";if("object"!=typeof n)return"function"==typeof n?"":s(n);let j=c.pretty,x=j&&"string"==typeof j?j:"\t";if(Array.isArray(n)){let t="";for(let e=0;e<n.length;e++)j&&e>0&&(t+="\n"),t+=h(n[e],r,c,a,p,y);return t}if(void 0!==n.constructor)return"";let S=n.type,v=n.props,k=!1;if("function"==typeof S){if(k=!0,!c.shallow||!a&&!1!==c.renderRootComponent){if(S===t){const t=[];return _(t,n.props.children),h(t,r,c,!1!==c.shallowHighOrder,p,y)}{let t,o=n.__c=g(n,r);e.__b&&e.__b(n);let i=e.__r;if(S.prototype&&"function"==typeof S.prototype.render){let e=b(S,r);o=n.__c=new S(v,e),o.__v=n,o._dirty=o.__d=!0,o.props=v,null==o.state&&(o.state={}),null==o._nextState&&null==o.__s&&(o._nextState=o.__s=o.state),o.context=e,S.getDerivedStateFromProps?o.state=Object.assign({},o.state,S.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&(o.componentWillMount(),o.state=o._nextState!==o.state?o._nextState:o.__s!==o.state?o.__s:o.state),i&&i(n),t=o.render(o.props,o.state,o.context)}else{let e=b(S,r),l=0;for(;o.__d&&l++<25;)o.__d=!1,i&&i(n),t=S.call(n.__c,v,e)}return o.getChildContext&&(r=Object.assign({},r,o.getChildContext())),e.diffed&&e.diffed(n),h(t,r,c,!1!==c.shallowHighOrder,p,y)}}S=(A=S).displayName||A!==Function&&A.name||function(t){let e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!e){let n=-1;for(let e=m.length;e--;)if(m[e]===t){n=e;break}n<0&&(n=m.push(t)-1),e=`UnnamedComponent${n}`}return e}(A)}var A;let O,w,$="<"+S;if(v){let t=Object.keys(v);c&&!0===c.sortAttributes&&t.sort();for(let e=0;e<t.length;e++){let n=t[e],o=v[n];if("children"===n){O=o;continue}if(i.test(n))continue;if(!(c&&c.allAttributes||"key"!==n&&"ref"!==n&&"__self"!==n&&"__source"!==n))continue;if("defaultValue"===n)n="value";else if("defaultChecked"===n)n="checked";else if("defaultSelected"===n)n="selected";else if("className"===n){if(void 0!==v.class)continue;n="class"}else p&&l.test(n)&&(n=n.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===n){if(v.for)continue;n="for"}"style"===n&&o&&"object"==typeof o&&(o=d(o)),"a"===n[0]&&"r"===n[1]&&"boolean"==typeof o&&(o=String(o));let u=c.attributeHook&&c.attributeHook(n,o,r,c,k);if(u||""===u)$+=u;else if("dangerouslySetInnerHTML"===n)w=o&&o.__html;else if("textarea"===S&&"value"===n)O=o;else if((o||0===o||""===o)&&"function"!=typeof o){if(!(!0!==o&&""!==o||(o=n,c&&c.xml))){$=$+" "+n;continue}if("value"===n){if("select"===S){y=o;continue}"option"===S&&y==o&&void 0===v.selected&&($+=" selected")}$+=` ${n}="${s(o)}"`}}}if(j){let t=$.replace(/\n\s*/," ");t===$||~t.indexOf("\n")?j&&~$.indexOf("\n")&&($+="\n"):$=t}if($+=">",i.test(S))throw new Error(`${S} is not a valid HTML tag name in ${$}`);let F,C=o.test(S)||c.voidElements&&c.voidElements.test(S),E=[];if(w)j&&f(w)&&(w="\n"+x+u(w,x)),$+=w;else if(null!=O&&_(F=[],O).length){let t=j&&~$.indexOf("\n"),e=!1;for(let n=0;n<F.length;n++){let o=F[n];if(null!=o&&!1!==o){let n=h(o,r,c,!0,"svg"===S||"foreignObject"!==S&&p,y);if(j&&!t&&f(n)&&(t=!0),n)if(j){let t=n.length>0&&"<"!=n[0];e&&t?E[E.length-1]+=n:E.push(n),e=t}else E.push(n)}}if(j&&t)for(let t=E.length;t--;)E[t]="\n"+x+u(E[t],x)}if(E.length||w)$+=E.join("");else if(c&&c.xml)return $.substring(0,$.length-1)+" />";return!C||F||w?(j&&~$.indexOf("\n")&&($+="\n"),$+=`</${S}>`):$=$.replace(/>$/," />"),$}const j={shallow:!0};S.render=S;const x=[];function S(r,o,i){o=o||{};const l=e.__s;e.__s=!0;const c=n(t,null);let s;return c.__k=[r],s=i&&(i.pretty||i.voidElements||i.sortAttributes||i.shallow||i.allAttributes||i.xml||i.attributeHook)?h(r,o,i):$(r,o,!1,void 0,c),e.__c&&e.__c(r,x),e.__s=l,x.length=0,s}function v(t){return null==t||"boolean"==typeof t?null:"string"==typeof t||"number"==typeof t||"bigint"==typeof t?n(null,null,t):t}function k(t,e){return"className"===t?"class":"htmlFor"===t?"for":"defaultValue"===t?"value":"defaultChecked"===t?"checked":"defaultSelected"===t?"selected":e&&l.test(t)?t.toLowerCase().replace(/^xlink:?/,"xlink:"):t}function A(t,e){return"style"===t&&null!=e&&"object"==typeof e?d(e):"a"===t[0]&&"r"===t[1]&&"boolean"==typeof e?String(e):e}const O=Array.isArray,w=Object.assign;function $(n,r,l,c,u){if(null==n||!0===n||!1===n||""===n)return"";if("object"!=typeof n)return"function"==typeof n?"":s(n);if(O(n)){let t="";u.__k=n;for(let e=0;e<n.length;e++)t+=$(n[e],r,l,c,u),n[e]=v(n[e]);return t}if(void 0!==n.constructor)return"";n.__=u,e.__b&&e.__b(n);let f=n.type,a=n.props;if("function"==typeof f){let o;if(f===t)o=a.children;else{o=f.prototype&&"function"==typeof f.prototype.render?function(t,n){let r=t.type,o=b(r,n),i=new r(t.props,o);t.__c=i,i.__v=t,i.__d=!0,i.props=t.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,r.getDerivedStateFromProps?i.state=w({},i.state,r.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);let l=e.__r;return l&&l(t),i.render(i.props,i.state,i.context)}(n,r):function(t,n){let r,o=g(t,n),i=b(t.type,n);t.__c=o;let l=e.__r,c=0;for(;o.__d&&c++<25;)o.__d=!1,l&&l(t),r=t.type.call(o,t.props,i);return r}(n,r);let t=n.__c;t.getChildContext&&(r=w({},r,t.getChildContext()))}o=null!=o&&o.type===t&&null==o.key?o.props.children:o;const i=$(o,r,l,c,n);return e.diffed&&e.diffed(n),n.__=void 0,e.unmount&&e.unmount(n),i}let p,d,_="<";if(_+=f,a){p=a.children;for(let t in a){let e=a[t];if(!("key"===t||"ref"===t||"__self"===t||"__source"===t||"children"===t||"className"===t&&"class"in a||"htmlFor"===t&&"for"in a||i.test(t)))if(t=k(t,l),e=A(t,e),"dangerouslySetInnerHTML"===t)d=e&&e.__html;else if("textarea"===f&&"value"===t)p=e;else if((e||0===e||""===e)&&"function"!=typeof e){if(!0===e||""===e){e=t,_=_+" "+t;continue}if("value"===t){if("select"===f){c=e;continue}"option"!==f||c!=e||"selected"in a||(_+=" selected")}_=_+" "+t+'="'+s(e)+'"'}}}let y=_;if(_+=">",i.test(f))throw new Error(`${f} is not a valid HTML tag name in ${_}`);let m="",h=!1;if(d)m+=d,h=!0;else if("string"==typeof p)m+=s(p),h=!0;else if(O(p)){n.__k=p;for(let t=0;t<p.length;t++){let e=p[t];if(p[t]=v(e),null!=e&&!1!==e){let t=$(e,r,"svg"===f||"foreignObject"!==f&&l,c,n);t&&(m+=t,h=!0)}}}else if(null!=p&&!1!==p&&!0!==p){n.__k=[v(p)];let t=$(p,r,"svg"===f||"foreignObject"!==f&&l,c,n);t&&(m+=t,h=!0)}if(e.diffed&&e.diffed(n),n.__=void 0,e.unmount&&e.unmount(n),h)_+=m;else if(o.test(f))return y+" />";return _+"</"+f+">"}S.shallowRender=(t,e)=>S(t,e,j);const F=/(\\|\"|\')/g,C=Object.prototype.toString,E=Date.prototype.toISOString,M=Error.prototype.toString,H=RegExp.prototype.toString,N=Symbol.prototype.toString,D=/^Symbol\((.*)\)(.*)$/,I=/\n/gi,L=Object.getOwnPropertySymbols||(t=>[]);function W(t){return"[object Array]"===t||"[object ArrayBuffer]"===t||"[object DataView]"===t||"[object Float32Array]"===t||"[object Float64Array]"===t||"[object Int8Array]"===t||"[object Int16Array]"===t||"[object Int32Array]"===t||"[object Uint8Array]"===t||"[object Uint8ClampedArray]"===t||"[object Uint16Array]"===t||"[object Uint32Array]"===t}function P(t){return""===t.name?"[Function anonymous]":"[Function "+t.name+"]"}function T(t){return N.call(t).replace(D,"Symbol($1)")}function U(t){return"["+M.call(t)+"]"}function R(t){if(!0===t||!1===t)return""+t;if(void 0===t)return"undefined";if(null===t)return"null";const e=typeof t;if("number"===e)return function(t){return t!=+t?"NaN":0===t&&1/t<0?"-0":""+t}(t);if("string"===e)return'"'+function(t){return t.replace(F,"\\$1")}(t)+'"';if("function"===e)return P(t);if("symbol"===e)return T(t);const n=C.call(t);return"[object WeakMap]"===n?"WeakMap {}":"[object WeakSet]"===n?"WeakSet {}":"[object Function]"===n||"[object GeneratorFunction]"===n?P(t,min):"[object Symbol]"===n?T(t):"[object Date]"===n?E.call(t):"[object Error]"===n?U(t):"[object RegExp]"===n?H.call(t):"[object Arguments]"===n&&0===t.length?"Arguments []":W(n)&&0===t.length?t.constructor.name+" []":t instanceof Error&&U(t)}function J(t,e,n,r,o,i,l,c,s,u){let f="";if(t.length){f+=o;const a=n+e;for(let n=0;n<t.length;n++)f+=a+z(t[n],e,a,r,o,i,l,c,s,u),n<t.length-1&&(f+=","+r);f+=o+n}return"["+f+"]"}function V(t,e,n,r,o,i,l,c,s,u){if((i=i.slice()).indexOf(t)>-1)return"[Circular]";i.push(t);const f=++c>l;if(!f&&t.toJSON&&"function"==typeof t.toJSON)return z(t.toJSON(),e,n,r,o,i,l,c,s,u);const a=C.call(t);return"[object Arguments]"===a?f?"[Arguments]":function(t,e,n,r,o,i,l,c,s,u){return(u?"":"Arguments ")+J(t,e,n,r,o,i,l,c,s,u)}(t,e,n,r,o,i,l,c,s,u):W(a)?f?"[Array]":function(t,e,n,r,o,i,l,c,s,u){return(u?"":t.constructor.name+" ")+J(t,e,n,r,o,i,l,c,s,u)}(t,e,n,r,o,i,l,c,s,u):"[object Map]"===a?f?"[Map]":function(t,e,n,r,o,i,l,c,s,u){let f="Map {";const a=t.entries();let p=a.next();if(!p.done){f+=o;const t=n+e;for(;!p.done;)f+=t+z(p.value[0],e,t,r,o,i,l,c,s,u)+" => "+z(p.value[1],e,t,r,o,i,l,c,s,u),p=a.next(),p.done||(f+=","+r);f+=o+n}return f+"}"}(t,e,n,r,o,i,l,c,s,u):"[object Set]"===a?f?"[Set]":function(t,e,n,r,o,i,l,c,s,u){let f="Set {";const a=t.entries();let p=a.next();if(!p.done){f+=o;const t=n+e;for(;!p.done;)f+=t+z(p.value[1],e,t,r,o,i,l,c,s,u),p=a.next(),p.done||(f+=","+r);f+=o+n}return f+"}"}(t,e,n,r,o,i,l,c,s,u):"object"==typeof t?f?"[Object]":function(t,e,n,r,o,i,l,c,s,u){let f=(u?"":t.constructor?t.constructor.name+" ":"Object ")+"{",a=Object.keys(t).sort();const p=L(t);if(p.length&&(a=a.filter(t=>!("symbol"==typeof t||"[object Symbol]"===C.call(t))).concat(p)),a.length){f+=o;const p=n+e;for(let n=0;n<a.length;n++){const d=a[n];f+=p+z(d,e,p,r,o,i,l,c,s,u)+": "+z(t[d],e,p,r,o,i,l,c,s,u),n<a.length-1&&(f+=","+r)}f+=o+n}return f+"}"}(t,e,n,r,o,i,l,c,s,u):void 0}function q(t,e,n,r,o,i,l,c,s,u){let f,a=!1;for(let e=0;e<s.length;e++)if(f=s[e],f.test(t)){a=!0;break}return!!a&&f.print(t,function(t){return z(t,e,n,r,o,i,l,c,s,u)},function(t){const r=n+e;return r+t.replace(I,"\n"+r)},{edgeSpacing:o,spacing:r})}function z(t,e,n,r,o,i,l,c,s,u){return R(t)||q(t,e,n,r,o,i,l,c,s,u)||V(t,e,n,r,o,i,l,c,s,u)}const B={indent:2,min:!1,maxDepth:Infinity,plugins:[]};function G(t){return new Array(t+1).join(" ")}let Z={test:t=>t&&"object"==typeof t&&"type"in t&&"props"in t&&"key"in t,print:(t,e,n)=>S(t,Z.context,Z.opts)},K={plugins:[Z]},Q={attributeHook:function(t,e,n,r,o){let i=typeof e;if("dangerouslySetInnerHTML"===t)return!1;if(null==e||"function"===i&&!r.functions)return"";if(r.skipFalseAttributes&&!o&&(!1===e||("class"===t||"style"===t)&&""===e))return"";let l="string"==typeof r.pretty?r.pretty:"\t";return"string"!==i?("function"!==i||r.functionNames?(Z.context=n,Z.opts=r,~(e=function(t,e){let n,r;e?(function(t){if(Object.keys(t).forEach(t=>{if(!B.hasOwnProperty(t))throw new Error("prettyFormat: Invalid option: "+t)}),t.min&&void 0!==t.indent&&0!==t.indent)throw new Error("prettyFormat: Cannot run with min option and indent")}(e),e=function(t){const e={};return Object.keys(B).forEach(n=>e[n]=t.hasOwnProperty(n)?t[n]:B[n]),e.min&&(e.indent=0),e}(e)):e=B;const o=e.min?" ":"\n",i=e.min?"":"\n";if(e&&e.plugins.length){n=G(e.indent),r=[];var l=q(t,n,"",o,i,r,e.maxDepth,0,e.plugins,e.min);if(l)return l}return R(t)||(n||(n=G(e.indent)),r||(r=[]),V(t,n,"",o,i,r,e.maxDepth,0,e.plugins,e.min))}(e,K)).indexOf("\n")&&(e=`${u("\n"+e,l)}\n`)):e="Function",u(`\n${t}={${e}}`,l)):`\n${l}${t}="${s(e)}"`},jsx:!0,xml:!1,functions:!0,functionNames:!0,skipFalseAttributes:!0,pretty:"  "};function X(t,e,n,r){return S(t,e,n=Object.assign({},Q,n||{}))}export default X;export{X as render};
//# sourceMappingURL=jsx.modern.js.map
