// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('coinbox.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31182__delegate = function (x){
if(cljs.core.truth_(coinbox.core.render)){
return cljs.core.apply.call(null,coinbox.core.render,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coinbox.core/render' is missing");
}
};
var G__31182 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31183__i = 0, G__31183__a = new Array(arguments.length -  0);
while (G__31183__i < G__31183__a.length) {G__31183__a[G__31183__i] = arguments[G__31183__i + 0]; ++G__31183__i;}
  x = new cljs.core.IndexedSeq(G__31183__a,0,null);
} 
return G__31182__delegate.call(this,x);};
G__31182.cljs$lang$maxFixedArity = 0;
G__31182.cljs$lang$applyTo = (function (arglist__31184){
var x = cljs.core.seq(arglist__31184);
return G__31182__delegate(x);
});
G__31182.cljs$core$IFn$_invoke$arity$variadic = G__31182__delegate;
return G__31182;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1511533055462
