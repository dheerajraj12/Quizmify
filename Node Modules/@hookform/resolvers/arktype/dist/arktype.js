var r=require("@hookform/resolvers"),e=function(r){for(var e={};r.length;){var o=r[0],a=o.path.join(".");e[a]||(e[a]={message:o.message,type:o.code}),r.shift()}return e};exports.arktypeResolver=function(o,a,s){return void 0===s&&(s={}),function(a,t,i){var l=o(a);return l.problems?{values:{},errors:r.toNestError(e(l.problems),i)}:(i.shouldUseNativeValidation&&r.validateFieldsNatively({},i),{errors:{},values:s.raw?a:l.data})}};
//# sourceMappingURL=arktype.js.map
