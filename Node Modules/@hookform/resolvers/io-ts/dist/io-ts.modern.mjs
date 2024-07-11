import*as e from"fp-ts/Either";import{pipe as t,flow as r,absurd as o,identity as a,not as s}from"fp-ts/function";import{toNestError as n,validateFieldsNatively as p}from"@hookform/resolvers";import{TaggedUnionType as i,UnionType as m,IntersectionType as f,ExactType as l,RefinementType as c}from"io-ts";import*as u from"fp-ts/ReadonlyArray";import*as d from"fp-ts/Option";import*as y from"fp-ts/Semigroup";import*as g from"fp-ts/ReadonlyRecord";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},h.apply(this,arguments)}const v=r=>r.reduce((r,o,a)=>t(o,e.fold(e=>`${a>0?".":""}${e}`,e=>`[${e}]`),e=>`${r}${e}`),""),O=["path"],b=[i,m,f,l,c],x=n=>{const p=t(i=n.context,u.filterMapWithIndex((e,t)=>{const r=e-1,o=-1===r?void 0:i[r];return void 0===o||b.some(e=>o.type instanceof e)?d.none:d.some(t)}),u.map(({key:e})=>e),u.map(r=>t(r,e=>parseInt(e,10),e.fromPredicate(s(Number.isNaN),()=>r))),u.toArray,v);var i;return{message:t(n.message,e.fromNullable(n.context),e.mapLeft(r(u.last,d.map(e=>`expected ${e.type.name} but got ${JSON.stringify(e.actual)}`),d.getOrElseW(()=>o("Error context is missing name")))),e.getOrElseW(a)),type:t(n.context,u.last,d.map(e=>e.type.name),d.getOrElse(()=>"unknown")),path:p}},N=e=>t(e,u.map(e=>({[e.path]:{type:e.type,message:e.message}})),e=>y.fold({concat:(e,t)=>Object.assign({},t,e)})({},e)),$={concat:(e,t)=>h({},t,{types:h({},e.types,{[e.type]:e.message,[t.type]:t.message})})},j=e=>t(g.fromFoldableMap($,u.Foldable)(e,e=>[e.path,e]),g.map(e=>function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(r=s[o])>=0||(a[r]=e[r]);return a}(e,O))),E=r=>(o,a,s)=>{return t(o,r.decode,e.mapLeft((i=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,e=>{const r=i?j:N;return t(e,u.map(x),r)})),e.mapLeft(e=>n(e,s)),e.fold(e=>({values:{},errors:e}),e=>(s.shouldUseNativeValidation&&p({},s),{values:e,errors:{}})));var i};export{E as ioTsResolver};
//# sourceMappingURL=io-ts.modern.mjs.map