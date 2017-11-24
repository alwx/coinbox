// Compiled by ClojureScript 1.9.946 {}
goog.provide('coinbox.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('coinbox.api');
if(typeof coinbox.core._STAR_state !== 'undefined'){
} else {
coinbox.core._STAR_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"message","message",-406056002),"Hello, world!"], null));
}
coinbox.core.root = rum.core.build_defc.call(null,(function (text){
return React.createElement("div",({"className": "label"}),sablono.interpreter.interpret.call(null,text));
}),null,"root");
coinbox.core.render = (function coinbox$core$render(){
coinbox.api.installation.call(null);

return rum.core.mount.call(null,coinbox.core.root.call(null,"kek"),document.querySelector("#app"));
});
goog.exportSymbol('coinbox.core.render', coinbox.core.render);
coinbox.core.render.call(null);

//# sourceMappingURL=core.js.map?rel=1511532881638
