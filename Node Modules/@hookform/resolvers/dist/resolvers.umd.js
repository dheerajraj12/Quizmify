!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("react-hook-form")):"function"==typeof define&&define.amd?define(["exports","react-hook-form"],o):o((e||self).hookformResolvers={},e.ReactHookForm)}(this,function(e,o){var r=function(e,r,t){if(e&&"reportValidity"in e){var i=o.get(t,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},t=function(e,o){var t=function(t){var i=o.fields[t];i&&i.ref&&"reportValidity"in i.ref?r(i.ref,t,e):i.refs&&i.refs.forEach(function(o){return r(o,t,e)})};for(var i in o.fields)t(i)};e.toNestError=function(e,r){r.shouldUseNativeValidation&&t(e,r);var i={};for(var f in e){var n=o.get(r.fields,f);o.set(i,f,Object.assign(e[f]||{},{ref:n&&n.ref}))}return i},e.validateFieldsNatively=t});
//# sourceMappingURL=resolvers.umd.js.map
