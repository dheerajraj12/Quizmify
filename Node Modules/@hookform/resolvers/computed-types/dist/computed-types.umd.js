!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@hookform/resolvers")):"function"==typeof define&&define.amd?define(["exports","@hookform/resolvers"],r):r((e||self).hookformResolversComputedTypes={},e.hookformResolvers)}(this,function(e,r){e.computedTypesResolver=function(e){return function(o,t,n){try{return Promise.resolve(function(t,s){try{var i=Promise.resolve(e(o)).then(function(e){return n.shouldUseNativeValidation&&r.validateFieldsNatively({},n),{errors:{},values:e}})}catch(e){return s(e)}return i&&i.then?i.then(void 0,s):i}(0,function(e){if(function(e){return null!=e.errors}(e))return{values:{},errors:r.toNestError((o=e,(o.errors||[]).reduce(function(e,r){return e[r.path.join(".")]={type:r.error.name,message:r.error.message},e},{})),n)};var o;throw e}))}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=computed-types.umd.js.map