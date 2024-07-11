"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    resolveAsArrayOrUndefined: null,
    resolveArray: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    resolveAsArrayOrUndefined: function() {
        return resolveAsArrayOrUndefined;
    },
    resolveArray: function() {
        return resolveArray;
    }
});
function resolveArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [
        value
    ];
}
function resolveAsArrayOrUndefined(value) {
    if (typeof value === "undefined" || value === null) {
        return undefined;
    }
    return resolveArray(value);
}

//# sourceMappingURL=utils.js.map