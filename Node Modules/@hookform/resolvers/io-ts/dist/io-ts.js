var e=require("fp-ts/Either"),t=require("fp-ts/function"),n=require("@hookform/resolvers"),r=require("io-ts"),i=require("fp-ts/ReadonlyArray"),o=require("fp-ts/Option"),u=require("fp-ts/Semigroup"),a=require("fp-ts/ReadonlyRecord");function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var c=/*#__PURE__*/f(e),p=/*#__PURE__*/f(i),s=/*#__PURE__*/f(o),l=/*#__PURE__*/f(u),d=/*#__PURE__*/f(a);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var y=function(e){return e.reduce(function(e,n,r){return t.pipe(n,c.fold(function(e){return(r>0?".":"")+e},function(e){return"["+e+"]"}),function(t){return""+e+t})},"")},v=["path"],g=[r.TaggedUnionType,r.UnionType,r.IntersectionType,r.ExactType,r.RefinementType],b=function(e){var n,r=t.pipe(n=e.context,p.filterMapWithIndex(function(e,t){var r=e-1,i=-1===r?void 0:n[r];return void 0===i||g.some(function(e){return i.type instanceof e})?s.none:s.some(t)}),p.map(function(e){return e.key}),p.map(function(e){return t.pipe(e,function(e){return parseInt(e,10)},c.fromPredicate(t.not(Number.isNaN),function(){return e}))}),p.toArray,y);return{message:t.pipe(e.message,c.fromNullable(e.context),c.mapLeft(t.flow(p.last,s.map(function(e){return"expected "+e.type.name+" but got "+JSON.stringify(e.actual)}),s.getOrElseW(function(){return t.absurd("Error context is missing name")}))),c.getOrElseW(t.identity)),type:t.pipe(e.context,p.last,s.map(function(e){return e.type.name}),s.getOrElse(function(){return"unknown"})),path:r}},O=function(e){return t.pipe(e,p.map(function(e){var t;return(t={})[e.path]={type:e.type,message:e.message},t}),function(e){return l.fold({concat:function(e,t){return Object.assign({},t,e)}})({},e)})},h={concat:function(e,t){var n;return m({},t,{types:m({},e.types,(n={},n[e.type]=e.message,n[t.type]=t.message,n))})}},j=function(e){return t.pipe(d.fromFoldableMap(h,p.Foldable)(e,function(e){return[e.path,e]}),d.map(function(e){return function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(e,v)}))};exports.ioTsResolver=function(e){return function(r,i,o){return t.pipe(r,e.decode,c.mapLeft((u=!o.shouldUseNativeValidation&&"all"===o.criteriaMode,function(e){var n=u?j:O;return t.pipe(e,p.map(b),n)})),c.mapLeft(function(e){return n.toNestError(e,o)}),c.fold(function(e){return{values:{},errors:e}},function(e){return o.shouldUseNativeValidation&&n.validateFieldsNatively({},o),{values:e,errors:{}}}));var u}};
//# sourceMappingURL=io-ts.js.map
