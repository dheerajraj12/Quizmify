!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@hookform/resolvers"),require("superstruct")):"function"==typeof define&&define.amd?define(["exports","@hookform/resolvers","superstruct"],r):r((e||self).hookformResolversSuperstruct={},e.hookformResolvers,e.superstruct)}(this,function(e,r,o){e.superstructResolver=function(e,s,t){return void 0===t&&(t={}),function(u,i,n){var f,l=o.validate(u,e,s);return l[0]?{values:{},errors:r.toNestError((f=l[0],f.failures().reduce(function(e,r){return(e[r.path.join(".")]={message:r.message,type:r.type})&&e},{})),n)}:(n.shouldUseNativeValidation&&r.validateFieldsNatively({},n),{values:t.raw?u:l[1],errors:{}})}}});
//# sourceMappingURL=superstruct.umd.js.map