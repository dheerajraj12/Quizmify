"use strict";var v=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var N=(n,t)=>{for(var e in t)v(n,e,{get:t[e],enumerable:!0})},D=(n,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let _ of F(t))!U.call(n,_)&&_!==e&&v(n,_,{get:()=>t[_],enumerable:!(o=B(t,_))||o.enumerable});return n};var $=n=>D(v({},"__esModule",{value:!0}),n);var It={};N(It,{QueryEngine:()=>X,__wbg_String_88810dfeb4021902:()=>Fn,__wbg_buffer_344d9b41efe96da7:()=>Nn,__wbg_call_53fc3abd42e24ec8:()=>at,__wbg_call_669127b9d730c650:()=>Xn,__wbg_crypto_58f13aa23ffcb166:()=>Jn,__wbg_done_bc26bf4ada718266:()=>tt,__wbg_entries_6d727b73ee02b7ce:()=>yt,__wbg_getRandomValues_504510b5564925af:()=>Pn,__wbg_getTime_ed6ee333b702f8fc:()=>sn,__wbg_get_2aff440840bb6202:()=>ot,__wbg_get_4a9aa5157afeb382:()=>Yn,__wbg_get_94990005bd6ca07c:()=>Bn,__wbg_getwithrefkey_5e6d9547403deab8:()=>Mn,__wbg_globalThis_17eff828815f7d84:()=>it,__wbg_global_46f939f6541643c5:()=>ut,__wbg_has_cdf8b85f6e903c80:()=>_n,__wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d:()=>mt,__wbg_instanceof_Promise_cfbcc42300367513:()=>bn,__wbg_instanceof_Uint8Array_19e6f142a5e7e1e1:()=>xt,__wbg_isArray_38525be7442aa21e:()=>ft,__wbg_isSafeInteger_c38b0a16d0c7cef7:()=>bt,__wbg_iterator_7ee1a391d310f8e4:()=>ln,__wbg_length_a5587d6cd79ab197:()=>wt,__wbg_length_cace2e0b3ddc0502:()=>dn,__wbg_msCrypto_abcb1295e768d1f2:()=>zn,__wbg_new0_ad75dd38f92424e2:()=>un,__wbg_new_08236689f0afb357:()=>jn,__wbg_new_1b94180eeb48f2a2:()=>qn,__wbg_new_c728d68b8b34487e:()=>On,__wbg_new_d8a000788389a31e:()=>$n,__wbg_new_feb65b865d980ae2:()=>nn,__wbg_newnoargs_ccdcae30fd002262:()=>st,__wbg_newwithbyteoffsetandlength_2dc04d99088b15e3:()=>Dn,__wbg_newwithlength_13b5319ab422dcf6:()=>Gn,__wbg_next_15da6a3df9290720:()=>rt,__wbg_next_1989a20442400aaa:()=>nt,__wbg_node_523d7bd03ef69fba:()=>Hn,__wbg_now_4579335d3581594c:()=>an,__wbg_now_8ed1a4454e40ecd1:()=>fn,__wbg_parse_3f0cb48976ca4123:()=>cn,__wbg_process_5b786e71d465a513:()=>Vn,__wbg_push_fd3233d09cf81821:()=>En,__wbg_randomFillSync_a0d98aa11c81fe89:()=>Rn,__wbg_require_2784e593a4674877:()=>Qn,__wbg_resolve_a3252b2860f0a09e:()=>Ot,__wbg_self_3fad056edded10bd:()=>_t,__wbg_setTimeout_631fe61f31fa2fad:()=>tn,__wbg_set_0ac78a2bc07da03c:()=>Sn,__wbg_set_3355b9f2d3092e3b:()=>kn,__wbg_set_40f7786a25a9cc7e:()=>gt,__wbg_set_841ac57cff3d672b:()=>In,__wbg_set_dcfd613a3420f908:()=>dt,__wbg_set_wasm:()=>L,__wbg_stringify_4039297315a25b00:()=>lt,__wbg_subarray_6ca5cfa7fbb9abbe:()=>Cn,__wbg_then_1bbc9edafd859b06:()=>qt,__wbg_then_89e1c559530b85cf:()=>St,__wbg_valueOf_ff4b62641803432a:()=>Zn,__wbg_value_0570714ff7d75f35:()=>et,__wbg_versions_c2ab80650590b6a2:()=>Wn,__wbg_window_a4f46c98a61d4089:()=>ct,__wbindgen_bigint_from_i64:()=>mn,__wbindgen_bigint_from_u64:()=>hn,__wbindgen_bigint_get_as_i64:()=>ht,__wbindgen_boolean_get:()=>wn,__wbindgen_cb_drop:()=>jt,__wbindgen_closure_wrapper6533:()=>vt,__wbindgen_debug_string:()=>Tt,__wbindgen_error_new:()=>Z,__wbindgen_in:()=>yn,__wbindgen_is_bigint:()=>pn,__wbindgen_is_function:()=>Kn,__wbindgen_is_object:()=>gn,__wbindgen_is_string:()=>vn,__wbindgen_is_undefined:()=>on,__wbindgen_jsval_eq:()=>Tn,__wbindgen_jsval_loose_eq:()=>pt,__wbindgen_memory:()=>Un,__wbindgen_number_get:()=>xn,__wbindgen_number_new:()=>An,__wbindgen_object_clone_ref:()=>rn,__wbindgen_object_drop_ref:()=>Ln,__wbindgen_string_get:()=>Y,__wbindgen_string_new:()=>en,__wbindgen_throw:()=>At,debug_panic:()=>G,getBuildTimeInfo:()=>z});module.exports=$(It);var h=()=>{};h.prototype=h;let c;function L(n){c=n}const w=new Array(128).fill(void 0);w.push(void 0,null,!0,!1);function r(n){return w[n]}let a=0,T=null;function A(){return(T===null||T.byteLength===0)&&(T=new Uint8Array(c.memory.buffer)),T}const R=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let j=new R("utf-8");const C=typeof j.encodeInto=="function"?function(n,t){return j.encodeInto(n,t)}:function(n,t){const e=j.encode(n);return t.set(e),{read:n.length,written:e.length}};function g(n,t,e){if(e===void 0){const s=j.encode(n),p=t(s.length,1)>>>0;return A().subarray(p,p+s.length).set(s),a=s.length,p}let o=n.length,_=t(o,1)>>>0;const f=A();let u=0;for(;u<o;u++){const s=n.charCodeAt(u);if(s>127)break;f[_+u]=s}if(u!==o){u!==0&&(n=n.slice(u)),_=e(_,o,o=u+n.length*3,1)>>>0;const s=A().subarray(_+u,_+o),p=C(n,s);u+=p.written}return a=u,_}function x(n){return n==null}let S=null;function d(){return(S===null||S.byteLength===0)&&(S=new Int32Array(c.memory.buffer)),S}const P=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let k=new P("utf-8",{ignoreBOM:!0,fatal:!0});k.decode();function m(n,t){return n=n>>>0,k.decode(A().subarray(n,n+t))}let y=w.length;function i(n){y===w.length&&w.push(w.length+1);const t=y;return y=w[t],w[t]=n,t}let q=null;function J(){return(q===null||q.byteLength===0)&&(q=new Float64Array(c.memory.buffer)),q}function V(n){n<132||(w[n]=y,y=n)}function b(n){const t=r(n);return V(n),t}let O=null;function W(){return(O===null||O.byteLength===0)&&(O=new BigInt64Array(c.memory.buffer)),O}function I(n){const t=typeof n;if(t=="number"||t=="boolean"||n==null)return`${n}`;if(t=="string")return`"${n}"`;if(t=="symbol"){const _=n.description;return _==null?"Symbol":`Symbol(${_})`}if(t=="function"){const _=n.name;return typeof _=="string"&&_.length>0?`Function(${_})`:"Function"}if(Array.isArray(n)){const _=n.length;let f="[";_>0&&(f+=I(n[0]));for(let u=1;u<_;u++)f+=", "+I(n[u]);return f+="]",f}const e=/\[object ([^\]]+)\]/.exec(toString.call(n));let o;if(e.length>1)o=e[1];else return toString.call(n);if(o=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:o}function H(n,t,e,o){const _={a:n,b:t,cnt:1,dtor:e},f=(...u)=>{_.cnt++;const s=_.a;_.a=0;try{return o(s,_.b,...u)}finally{--_.cnt===0?c.__wbindgen_export_2.get(_.dtor)(s,_.b):_.a=s}};return f.original=_,f}function Q(n,t,e){c.wasm_bindgen__convert__closures__invoke1_mut__h563d64401a9c7057(n,t,i(e))}function z(){const n=c.getBuildTimeInfo();return b(n)}function G(n){try{const f=c.__wbindgen_add_to_stack_pointer(-16);var t=x(n)?0:g(n,c.__wbindgen_malloc,c.__wbindgen_realloc),e=a;c.debug_panic(f,t,e);var o=d()[f/4+0],_=d()[f/4+1];if(_)throw b(o)}finally{c.__wbindgen_add_to_stack_pointer(16)}}function l(n,t){try{return n.apply(this,t)}catch(e){c.__wbindgen_exn_store(i(e))}}function K(n,t,e,o){c.wasm_bindgen__convert__closures__invoke2_mut__h1acf128aed3ecc59(n,t,i(e),i(o))}class X{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();c.__wbg_queryengine_free(t)}constructor(t,e,o){try{const s=c.__wbindgen_add_to_stack_pointer(-16);c.queryengine_new(s,i(t),i(e),i(o));var _=d()[s/4+0],f=d()[s/4+1],u=d()[s/4+2];if(u)throw b(f);return this.__wbg_ptr=_>>>0,this}finally{c.__wbindgen_add_to_stack_pointer(16)}}connect(t){const e=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=a,_=c.queryengine_connect(this.__wbg_ptr,e,o);return b(_)}disconnect(t){const e=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=a,_=c.queryengine_disconnect(this.__wbg_ptr,e,o);return b(_)}query(t,e,o){const _=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),f=a,u=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),s=a;var p=x(o)?0:g(o,c.__wbindgen_malloc,c.__wbindgen_realloc),M=a;const E=c.queryengine_query(this.__wbg_ptr,_,f,u,s,p,M);return b(E)}startTransaction(t,e){const o=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),_=a,f=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=a,s=c.queryengine_startTransaction(this.__wbg_ptr,o,_,f,u);return b(s)}commitTransaction(t,e){const o=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),_=a,f=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=a,s=c.queryengine_commitTransaction(this.__wbg_ptr,o,_,f,u);return b(s)}rollbackTransaction(t,e){const o=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),_=a,f=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=a,s=c.queryengine_rollbackTransaction(this.__wbg_ptr,o,_,f,u);return b(s)}metrics(t){const e=g(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=a,_=c.queryengine_metrics(this.__wbg_ptr,e,o);return b(_)}}function Y(n,t){const e=r(t),o=typeof e=="string"?e:void 0;var _=x(o)?0:g(o,c.__wbindgen_malloc,c.__wbindgen_realloc),f=a;d()[n/4+1]=f,d()[n/4+0]=_}function Z(n,t){const e=new Error(m(n,t));return i(e)}function nn(n,t){try{var e={a:n,b:t},o=(f,u)=>{const s=e.a;e.a=0;try{return K(s,e.b,f,u)}finally{e.a=s}};const _=new Promise(o);return i(_)}finally{e.a=e.b=0}}function tn(n,t){return setTimeout(r(n),t>>>0)}function en(n,t){const e=m(n,t);return i(e)}function rn(n){const t=r(n);return i(t)}function on(n){return r(n)===void 0}function _n(){return l(function(n,t){return Reflect.has(r(n),r(t))},arguments)}function cn(){return l(function(n,t){const e=JSON.parse(m(n,t));return i(e)},arguments)}function un(){return i(new Date)}function sn(n){return r(n).getTime()}function fn(n){return r(n).now()}function an(){return Date.now()}function bn(n){let t;try{t=r(n)instanceof Promise}catch{t=!1}return t}function gn(n){const t=r(n);return typeof t=="object"&&t!==null}function ln(){return i(Symbol.iterator)}function dn(n){return r(n).length}function wn(n){const t=r(n);return typeof t=="boolean"?t?1:0:2}function pn(n){return typeof r(n)=="bigint"}function xn(n,t){const e=r(t),o=typeof e=="number"?e:void 0;J()[n/8+1]=x(o)?0:o,d()[n/4+0]=!x(o)}function mn(n){return i(n)}function yn(n,t){return r(n)in r(t)}function hn(n){const t=BigInt.asUintN(64,n);return i(t)}function Tn(n,t){return r(n)===r(t)}function An(n){return i(n)}function jn(){const n=new Array;return i(n)}function Sn(n,t,e){r(n)[t>>>0]=b(e)}function qn(){return i(new Map)}function On(){const n=new Object;return i(n)}function vn(n){return typeof r(n)=="string"}function In(n,t,e){r(n)[b(t)]=b(e)}function kn(n,t,e){const o=r(n).set(r(t),r(e));return i(o)}function Mn(n,t){const e=r(n)[r(t)];return i(e)}function En(n,t){return r(n).push(r(t))}function Bn(){return l(function(n,t){const e=r(n)[b(t)];return i(e)},arguments)}function Fn(n,t){const e=String(r(t)),o=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),_=a;d()[n/4+1]=_,d()[n/4+0]=o}function Un(){const n=c.memory;return i(n)}function Nn(n){const t=r(n).buffer;return i(t)}function Dn(n,t,e){const o=new Uint8Array(r(n),t>>>0,e>>>0);return i(o)}function $n(n){const t=new Uint8Array(r(n));return i(t)}function Ln(n){b(n)}function Rn(){return l(function(n,t){r(n).randomFillSync(b(t))},arguments)}function Cn(n,t,e){const o=r(n).subarray(t>>>0,e>>>0);return i(o)}function Pn(){return l(function(n,t){r(n).getRandomValues(r(t))},arguments)}function Jn(n){const t=r(n).crypto;return i(t)}function Vn(n){const t=r(n).process;return i(t)}function Wn(n){const t=r(n).versions;return i(t)}function Hn(n){const t=r(n).node;return i(t)}function Qn(){return l(function(){const n=module.require;return i(n)},arguments)}function zn(n){const t=r(n).msCrypto;return i(t)}function Gn(n){const t=new Uint8Array(n>>>0);return i(t)}function Kn(n){return typeof r(n)=="function"}function Xn(){return l(function(n,t){const e=r(n).call(r(t));return i(e)},arguments)}function Yn(n,t){const e=r(n)[t>>>0];return i(e)}function Zn(n){return r(n).valueOf()}function nt(){return l(function(n){const t=r(n).next();return i(t)},arguments)}function tt(n){return r(n).done}function et(n){const t=r(n).value;return i(t)}function rt(n){const t=r(n).next;return i(t)}function ot(){return l(function(n,t){const e=Reflect.get(r(n),r(t));return i(e)},arguments)}function _t(){return l(function(){const n=self.self;return i(n)},arguments)}function ct(){return l(function(){const n=window.window;return i(n)},arguments)}function it(){return l(function(){const n=globalThis.globalThis;return i(n)},arguments)}function ut(){return l(function(){const n=global.global;return i(n)},arguments)}function st(n,t){const e=new h(m(n,t));return i(e)}function ft(n){return Array.isArray(r(n))}function at(){return l(function(n,t,e){const o=r(n).call(r(t),r(e));return i(o)},arguments)}function bt(n){return Number.isSafeInteger(r(n))}function gt(){return l(function(n,t,e){return Reflect.set(r(n),r(t),r(e))},arguments)}function lt(){return l(function(n){const t=JSON.stringify(r(n));return i(t)},arguments)}function dt(n,t,e){r(n).set(r(t),e>>>0)}function wt(n){return r(n).length}function pt(n,t){return r(n)==r(t)}function xt(n){let t;try{t=r(n)instanceof Uint8Array}catch{t=!1}return t}function mt(n){let t;try{t=r(n)instanceof ArrayBuffer}catch{t=!1}return t}function yt(n){const t=Object.entries(r(n));return i(t)}function ht(n,t){const e=r(t),o=typeof e=="bigint"?e:void 0;W()[n/8+1]=x(o)?BigInt(0):o,d()[n/4+0]=!x(o)}function Tt(n,t){const e=I(r(t)),o=g(e,c.__wbindgen_malloc,c.__wbindgen_realloc),_=a;d()[n/4+1]=_,d()[n/4+0]=o}function At(n,t){throw new Error(m(n,t))}function jt(n){const t=b(n).original;return t.cnt--==1?(t.a=0,!0):!1}function St(n,t){const e=r(n).then(r(t));return i(e)}function qt(n,t,e){const o=r(n).then(r(t),r(e));return i(o)}function Ot(n){const t=Promise.resolve(r(n));return i(t)}function vt(n,t,e){const o=H(n,t,273,Q);return i(o)}0&&(module.exports={QueryEngine,__wbg_String_88810dfeb4021902,__wbg_buffer_344d9b41efe96da7,__wbg_call_53fc3abd42e24ec8,__wbg_call_669127b9d730c650,__wbg_crypto_58f13aa23ffcb166,__wbg_done_bc26bf4ada718266,__wbg_entries_6d727b73ee02b7ce,__wbg_getRandomValues_504510b5564925af,__wbg_getTime_ed6ee333b702f8fc,__wbg_get_2aff440840bb6202,__wbg_get_4a9aa5157afeb382,__wbg_get_94990005bd6ca07c,__wbg_getwithrefkey_5e6d9547403deab8,__wbg_globalThis_17eff828815f7d84,__wbg_global_46f939f6541643c5,__wbg_has_cdf8b85f6e903c80,__wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d,__wbg_instanceof_Promise_cfbcc42300367513,__wbg_instanceof_Uint8Array_19e6f142a5e7e1e1,__wbg_isArray_38525be7442aa21e,__wbg_isSafeInteger_c38b0a16d0c7cef7,__wbg_iterator_7ee1a391d310f8e4,__wbg_length_a5587d6cd79ab197,__wbg_length_cace2e0b3ddc0502,__wbg_msCrypto_abcb1295e768d1f2,__wbg_new0_ad75dd38f92424e2,__wbg_new_08236689f0afb357,__wbg_new_1b94180eeb48f2a2,__wbg_new_c728d68b8b34487e,__wbg_new_d8a000788389a31e,__wbg_new_feb65b865d980ae2,__wbg_newnoargs_ccdcae30fd002262,__wbg_newwithbyteoffsetandlength_2dc04d99088b15e3,__wbg_newwithlength_13b5319ab422dcf6,__wbg_next_15da6a3df9290720,__wbg_next_1989a20442400aaa,__wbg_node_523d7bd03ef69fba,__wbg_now_4579335d3581594c,__wbg_now_8ed1a4454e40ecd1,__wbg_parse_3f0cb48976ca4123,__wbg_process_5b786e71d465a513,__wbg_push_fd3233d09cf81821,__wbg_randomFillSync_a0d98aa11c81fe89,__wbg_require_2784e593a4674877,__wbg_resolve_a3252b2860f0a09e,__wbg_self_3fad056edded10bd,__wbg_setTimeout_631fe61f31fa2fad,__wbg_set_0ac78a2bc07da03c,__wbg_set_3355b9f2d3092e3b,__wbg_set_40f7786a25a9cc7e,__wbg_set_841ac57cff3d672b,__wbg_set_dcfd613a3420f908,__wbg_set_wasm,__wbg_stringify_4039297315a25b00,__wbg_subarray_6ca5cfa7fbb9abbe,__wbg_then_1bbc9edafd859b06,__wbg_then_89e1c559530b85cf,__wbg_valueOf_ff4b62641803432a,__wbg_value_0570714ff7d75f35,__wbg_versions_c2ab80650590b6a2,__wbg_window_a4f46c98a61d4089,__wbindgen_bigint_from_i64,__wbindgen_bigint_from_u64,__wbindgen_bigint_get_as_i64,__wbindgen_boolean_get,__wbindgen_cb_drop,__wbindgen_closure_wrapper6533,__wbindgen_debug_string,__wbindgen_error_new,__wbindgen_in,__wbindgen_is_bigint,__wbindgen_is_function,__wbindgen_is_object,__wbindgen_is_string,__wbindgen_is_undefined,__wbindgen_jsval_eq,__wbindgen_jsval_loose_eq,__wbindgen_memory,__wbindgen_number_get,__wbindgen_number_new,__wbindgen_object_clone_ref,__wbindgen_object_drop_ref,__wbindgen_string_get,__wbindgen_string_new,__wbindgen_throw,debug_panic,getBuildTimeInfo});
