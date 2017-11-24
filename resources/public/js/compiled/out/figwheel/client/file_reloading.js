// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27261__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27261__auto__){
return or__27261__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27261__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35209_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35209_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35210 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35211 = null;
var count__35212 = (0);
var i__35213 = (0);
while(true){
if((i__35213 < count__35212)){
var n = cljs.core._nth.call(null,chunk__35211,i__35213);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35214 = seq__35210;
var G__35215 = chunk__35211;
var G__35216 = count__35212;
var G__35217 = (i__35213 + (1));
seq__35210 = G__35214;
chunk__35211 = G__35215;
count__35212 = G__35216;
i__35213 = G__35217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35210);
if(temp__4657__auto__){
var seq__35210__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35210__$1)){
var c__28100__auto__ = cljs.core.chunk_first.call(null,seq__35210__$1);
var G__35218 = cljs.core.chunk_rest.call(null,seq__35210__$1);
var G__35219 = c__28100__auto__;
var G__35220 = cljs.core.count.call(null,c__28100__auto__);
var G__35221 = (0);
seq__35210 = G__35218;
chunk__35211 = G__35219;
count__35212 = G__35220;
i__35213 = G__35221;
continue;
} else {
var n = cljs.core.first.call(null,seq__35210__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35222 = cljs.core.next.call(null,seq__35210__$1);
var G__35223 = null;
var G__35224 = (0);
var G__35225 = (0);
seq__35210 = G__35222;
chunk__35211 = G__35223;
count__35212 = G__35224;
i__35213 = G__35225;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35235_35243 = cljs.core.seq.call(null,deps);
var chunk__35236_35244 = null;
var count__35237_35245 = (0);
var i__35238_35246 = (0);
while(true){
if((i__35238_35246 < count__35237_35245)){
var dep_35247 = cljs.core._nth.call(null,chunk__35236_35244,i__35238_35246);
topo_sort_helper_STAR_.call(null,dep_35247,(depth + (1)),state);

var G__35248 = seq__35235_35243;
var G__35249 = chunk__35236_35244;
var G__35250 = count__35237_35245;
var G__35251 = (i__35238_35246 + (1));
seq__35235_35243 = G__35248;
chunk__35236_35244 = G__35249;
count__35237_35245 = G__35250;
i__35238_35246 = G__35251;
continue;
} else {
var temp__4657__auto___35252 = cljs.core.seq.call(null,seq__35235_35243);
if(temp__4657__auto___35252){
var seq__35235_35253__$1 = temp__4657__auto___35252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35235_35253__$1)){
var c__28100__auto___35254 = cljs.core.chunk_first.call(null,seq__35235_35253__$1);
var G__35255 = cljs.core.chunk_rest.call(null,seq__35235_35253__$1);
var G__35256 = c__28100__auto___35254;
var G__35257 = cljs.core.count.call(null,c__28100__auto___35254);
var G__35258 = (0);
seq__35235_35243 = G__35255;
chunk__35236_35244 = G__35256;
count__35237_35245 = G__35257;
i__35238_35246 = G__35258;
continue;
} else {
var dep_35259 = cljs.core.first.call(null,seq__35235_35253__$1);
topo_sort_helper_STAR_.call(null,dep_35259,(depth + (1)),state);

var G__35260 = cljs.core.next.call(null,seq__35235_35253__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__35235_35243 = G__35260;
chunk__35236_35244 = G__35261;
count__35237_35245 = G__35262;
i__35238_35246 = G__35263;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35239){
var vec__35240 = p__35239;
var seq__35241 = cljs.core.seq.call(null,vec__35240);
var first__35242 = cljs.core.first.call(null,seq__35241);
var seq__35241__$1 = cljs.core.next.call(null,seq__35241);
var x = first__35242;
var xs = seq__35241__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35240,seq__35241,first__35242,seq__35241__$1,x,xs,get_deps__$1){
return (function (p1__35226_SHARP_){
return clojure.set.difference.call(null,p1__35226_SHARP_,x);
});})(vec__35240,seq__35241,first__35242,seq__35241__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35264 = cljs.core.seq.call(null,provides);
var chunk__35265 = null;
var count__35266 = (0);
var i__35267 = (0);
while(true){
if((i__35267 < count__35266)){
var prov = cljs.core._nth.call(null,chunk__35265,i__35267);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35268_35276 = cljs.core.seq.call(null,requires);
var chunk__35269_35277 = null;
var count__35270_35278 = (0);
var i__35271_35279 = (0);
while(true){
if((i__35271_35279 < count__35270_35278)){
var req_35280 = cljs.core._nth.call(null,chunk__35269_35277,i__35271_35279);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35280,prov);

var G__35281 = seq__35268_35276;
var G__35282 = chunk__35269_35277;
var G__35283 = count__35270_35278;
var G__35284 = (i__35271_35279 + (1));
seq__35268_35276 = G__35281;
chunk__35269_35277 = G__35282;
count__35270_35278 = G__35283;
i__35271_35279 = G__35284;
continue;
} else {
var temp__4657__auto___35285 = cljs.core.seq.call(null,seq__35268_35276);
if(temp__4657__auto___35285){
var seq__35268_35286__$1 = temp__4657__auto___35285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35268_35286__$1)){
var c__28100__auto___35287 = cljs.core.chunk_first.call(null,seq__35268_35286__$1);
var G__35288 = cljs.core.chunk_rest.call(null,seq__35268_35286__$1);
var G__35289 = c__28100__auto___35287;
var G__35290 = cljs.core.count.call(null,c__28100__auto___35287);
var G__35291 = (0);
seq__35268_35276 = G__35288;
chunk__35269_35277 = G__35289;
count__35270_35278 = G__35290;
i__35271_35279 = G__35291;
continue;
} else {
var req_35292 = cljs.core.first.call(null,seq__35268_35286__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35292,prov);

var G__35293 = cljs.core.next.call(null,seq__35268_35286__$1);
var G__35294 = null;
var G__35295 = (0);
var G__35296 = (0);
seq__35268_35276 = G__35293;
chunk__35269_35277 = G__35294;
count__35270_35278 = G__35295;
i__35271_35279 = G__35296;
continue;
}
} else {
}
}
break;
}

var G__35297 = seq__35264;
var G__35298 = chunk__35265;
var G__35299 = count__35266;
var G__35300 = (i__35267 + (1));
seq__35264 = G__35297;
chunk__35265 = G__35298;
count__35266 = G__35299;
i__35267 = G__35300;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35264);
if(temp__4657__auto__){
var seq__35264__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35264__$1)){
var c__28100__auto__ = cljs.core.chunk_first.call(null,seq__35264__$1);
var G__35301 = cljs.core.chunk_rest.call(null,seq__35264__$1);
var G__35302 = c__28100__auto__;
var G__35303 = cljs.core.count.call(null,c__28100__auto__);
var G__35304 = (0);
seq__35264 = G__35301;
chunk__35265 = G__35302;
count__35266 = G__35303;
i__35267 = G__35304;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35264__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35272_35305 = cljs.core.seq.call(null,requires);
var chunk__35273_35306 = null;
var count__35274_35307 = (0);
var i__35275_35308 = (0);
while(true){
if((i__35275_35308 < count__35274_35307)){
var req_35309 = cljs.core._nth.call(null,chunk__35273_35306,i__35275_35308);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35309,prov);

var G__35310 = seq__35272_35305;
var G__35311 = chunk__35273_35306;
var G__35312 = count__35274_35307;
var G__35313 = (i__35275_35308 + (1));
seq__35272_35305 = G__35310;
chunk__35273_35306 = G__35311;
count__35274_35307 = G__35312;
i__35275_35308 = G__35313;
continue;
} else {
var temp__4657__auto___35314__$1 = cljs.core.seq.call(null,seq__35272_35305);
if(temp__4657__auto___35314__$1){
var seq__35272_35315__$1 = temp__4657__auto___35314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35272_35315__$1)){
var c__28100__auto___35316 = cljs.core.chunk_first.call(null,seq__35272_35315__$1);
var G__35317 = cljs.core.chunk_rest.call(null,seq__35272_35315__$1);
var G__35318 = c__28100__auto___35316;
var G__35319 = cljs.core.count.call(null,c__28100__auto___35316);
var G__35320 = (0);
seq__35272_35305 = G__35317;
chunk__35273_35306 = G__35318;
count__35274_35307 = G__35319;
i__35275_35308 = G__35320;
continue;
} else {
var req_35321 = cljs.core.first.call(null,seq__35272_35315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35321,prov);

var G__35322 = cljs.core.next.call(null,seq__35272_35315__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__35272_35305 = G__35322;
chunk__35273_35306 = G__35323;
count__35274_35307 = G__35324;
i__35275_35308 = G__35325;
continue;
}
} else {
}
}
break;
}

var G__35326 = cljs.core.next.call(null,seq__35264__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__35264 = G__35326;
chunk__35265 = G__35327;
count__35266 = G__35328;
i__35267 = G__35329;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35330_35334 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35331_35335 = null;
var count__35332_35336 = (0);
var i__35333_35337 = (0);
while(true){
if((i__35333_35337 < count__35332_35336)){
var ns_35338 = cljs.core._nth.call(null,chunk__35331_35335,i__35333_35337);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35338);

var G__35339 = seq__35330_35334;
var G__35340 = chunk__35331_35335;
var G__35341 = count__35332_35336;
var G__35342 = (i__35333_35337 + (1));
seq__35330_35334 = G__35339;
chunk__35331_35335 = G__35340;
count__35332_35336 = G__35341;
i__35333_35337 = G__35342;
continue;
} else {
var temp__4657__auto___35343 = cljs.core.seq.call(null,seq__35330_35334);
if(temp__4657__auto___35343){
var seq__35330_35344__$1 = temp__4657__auto___35343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35330_35344__$1)){
var c__28100__auto___35345 = cljs.core.chunk_first.call(null,seq__35330_35344__$1);
var G__35346 = cljs.core.chunk_rest.call(null,seq__35330_35344__$1);
var G__35347 = c__28100__auto___35345;
var G__35348 = cljs.core.count.call(null,c__28100__auto___35345);
var G__35349 = (0);
seq__35330_35334 = G__35346;
chunk__35331_35335 = G__35347;
count__35332_35336 = G__35348;
i__35333_35337 = G__35349;
continue;
} else {
var ns_35350 = cljs.core.first.call(null,seq__35330_35344__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35350);

var G__35351 = cljs.core.next.call(null,seq__35330_35344__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__35330_35334 = G__35351;
chunk__35331_35335 = G__35352;
count__35332_35336 = G__35353;
i__35333_35337 = G__35354;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27261__auto__ = goog.require__;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35355__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35356__i = 0, G__35356__a = new Array(arguments.length -  0);
while (G__35356__i < G__35356__a.length) {G__35356__a[G__35356__i] = arguments[G__35356__i + 0]; ++G__35356__i;}
  args = new cljs.core.IndexedSeq(G__35356__a,0,null);
} 
return G__35355__delegate.call(this,args);};
G__35355.cljs$lang$maxFixedArity = 0;
G__35355.cljs$lang$applyTo = (function (arglist__35357){
var args = cljs.core.seq(arglist__35357);
return G__35355__delegate(args);
});
G__35355.cljs$core$IFn$_invoke$arity$variadic = G__35355__delegate;
return G__35355;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35358 = cljs.core._EQ_;
var expr__35359 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35358.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35359))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35358,expr__35359){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35358,expr__35359))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35358,expr__35359){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35361){if((e35361 instanceof Error)){
var e = e35361;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35361;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35358,expr__35359))
} else {
if(cljs.core.truth_(pred__35358.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35359))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35358.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35359))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35358.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35359))){
return ((function (pred__35358,expr__35359){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35362){if((e35362 instanceof Error)){
var e = e35362;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35362;

}
}})());
});
;})(pred__35358,expr__35359))
} else {
return ((function (pred__35358,expr__35359){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35358,expr__35359))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35363,callback){
var map__35364 = p__35363;
var map__35364__$1 = ((((!((map__35364 == null)))?((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35364):map__35364);
var file_msg = map__35364__$1;
var request_url = cljs.core.get.call(null,map__35364__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35364,map__35364__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35364,map__35364__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_35388){
var state_val_35389 = (state_35388[(1)]);
if((state_val_35389 === (7))){
var inst_35384 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35390_35407 = state_35388__$1;
(statearr_35390_35407[(2)] = inst_35384);

(statearr_35390_35407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (1))){
var state_35388__$1 = state_35388;
var statearr_35391_35408 = state_35388__$1;
(statearr_35391_35408[(2)] = null);

(statearr_35391_35408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (4))){
var inst_35368 = (state_35388[(7)]);
var inst_35368__$1 = (state_35388[(2)]);
var state_35388__$1 = (function (){var statearr_35392 = state_35388;
(statearr_35392[(7)] = inst_35368__$1);

return statearr_35392;
})();
if(cljs.core.truth_(inst_35368__$1)){
var statearr_35393_35409 = state_35388__$1;
(statearr_35393_35409[(1)] = (5));

} else {
var statearr_35394_35410 = state_35388__$1;
(statearr_35394_35410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (6))){
var state_35388__$1 = state_35388;
var statearr_35395_35411 = state_35388__$1;
(statearr_35395_35411[(2)] = null);

(statearr_35395_35411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (3))){
var inst_35386 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35388__$1,inst_35386);
} else {
if((state_val_35389 === (2))){
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35389 === (11))){
var inst_35380 = (state_35388[(2)]);
var state_35388__$1 = (function (){var statearr_35396 = state_35388;
(statearr_35396[(8)] = inst_35380);

return statearr_35396;
})();
var statearr_35397_35412 = state_35388__$1;
(statearr_35397_35412[(2)] = null);

(statearr_35397_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (9))){
var inst_35374 = (state_35388[(9)]);
var inst_35372 = (state_35388[(10)]);
var inst_35376 = inst_35374.call(null,inst_35372);
var state_35388__$1 = state_35388;
var statearr_35398_35413 = state_35388__$1;
(statearr_35398_35413[(2)] = inst_35376);

(statearr_35398_35413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (5))){
var inst_35368 = (state_35388[(7)]);
var inst_35370 = figwheel.client.file_reloading.blocking_load.call(null,inst_35368);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35388__$1,(8),inst_35370);
} else {
if((state_val_35389 === (10))){
var inst_35372 = (state_35388[(10)]);
var inst_35378 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35372);
var state_35388__$1 = state_35388;
var statearr_35399_35414 = state_35388__$1;
(statearr_35399_35414[(2)] = inst_35378);

(statearr_35399_35414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (8))){
var inst_35368 = (state_35388[(7)]);
var inst_35374 = (state_35388[(9)]);
var inst_35372 = (state_35388[(2)]);
var inst_35373 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35374__$1 = cljs.core.get.call(null,inst_35373,inst_35368);
var state_35388__$1 = (function (){var statearr_35400 = state_35388;
(statearr_35400[(9)] = inst_35374__$1);

(statearr_35400[(10)] = inst_35372);

return statearr_35400;
})();
if(cljs.core.truth_(inst_35374__$1)){
var statearr_35401_35415 = state_35388__$1;
(statearr_35401_35415[(1)] = (9));

} else {
var statearr_35402_35416 = state_35388__$1;
(statearr_35402_35416[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30552__auto__ = null;
var figwheel$client$file_reloading$state_machine__30552__auto____0 = (function (){
var statearr_35403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35403[(0)] = figwheel$client$file_reloading$state_machine__30552__auto__);

(statearr_35403[(1)] = (1));

return statearr_35403;
});
var figwheel$client$file_reloading$state_machine__30552__auto____1 = (function (state_35388){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_35388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e35404){if((e35404 instanceof Object)){
var ex__30555__auto__ = e35404;
var statearr_35405_35417 = state_35388;
(statearr_35405_35417[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35418 = state_35388;
state_35388 = G__35418;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30552__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30552__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30552__auto____0;
figwheel$client$file_reloading$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30552__auto____1;
return figwheel$client$file_reloading$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_35406 = f__30640__auto__.call(null);
(statearr_35406[(6)] = c__30639__auto__);

return statearr_35406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35419,callback){
var map__35420 = p__35419;
var map__35420__$1 = ((((!((map__35420 == null)))?((((map__35420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35420):map__35420);
var file_msg = map__35420__$1;
var namespace = cljs.core.get.call(null,map__35420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35420,map__35420__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35420,map__35420__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35422){
var map__35423 = p__35422;
var map__35423__$1 = ((((!((map__35423 == null)))?((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35423):map__35423);
var file_msg = map__35423__$1;
var namespace = cljs.core.get.call(null,map__35423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35425){
var map__35426 = p__35425;
var map__35426__$1 = ((((!((map__35426 == null)))?((((map__35426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35426):map__35426);
var file_msg = map__35426__$1;
var namespace = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27249__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27249__auto__){
var or__27261__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
var or__27261__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27261__auto____$1)){
return or__27261__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27249__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35428,callback){
var map__35429 = p__35428;
var map__35429__$1 = ((((!((map__35429 == null)))?((((map__35429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35429):map__35429);
var file_msg = map__35429__$1;
var request_url = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30639__auto___35479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___35479,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___35479,out){
return (function (state_35464){
var state_val_35465 = (state_35464[(1)]);
if((state_val_35465 === (1))){
var inst_35438 = cljs.core.seq.call(null,files);
var inst_35439 = cljs.core.first.call(null,inst_35438);
var inst_35440 = cljs.core.next.call(null,inst_35438);
var inst_35441 = files;
var state_35464__$1 = (function (){var statearr_35466 = state_35464;
(statearr_35466[(7)] = inst_35439);

(statearr_35466[(8)] = inst_35441);

(statearr_35466[(9)] = inst_35440);

return statearr_35466;
})();
var statearr_35467_35480 = state_35464__$1;
(statearr_35467_35480[(2)] = null);

(statearr_35467_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (2))){
var inst_35441 = (state_35464[(8)]);
var inst_35447 = (state_35464[(10)]);
var inst_35446 = cljs.core.seq.call(null,inst_35441);
var inst_35447__$1 = cljs.core.first.call(null,inst_35446);
var inst_35448 = cljs.core.next.call(null,inst_35446);
var inst_35449 = (inst_35447__$1 == null);
var inst_35450 = cljs.core.not.call(null,inst_35449);
var state_35464__$1 = (function (){var statearr_35468 = state_35464;
(statearr_35468[(10)] = inst_35447__$1);

(statearr_35468[(11)] = inst_35448);

return statearr_35468;
})();
if(inst_35450){
var statearr_35469_35481 = state_35464__$1;
(statearr_35469_35481[(1)] = (4));

} else {
var statearr_35470_35482 = state_35464__$1;
(statearr_35470_35482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (3))){
var inst_35462 = (state_35464[(2)]);
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35464__$1,inst_35462);
} else {
if((state_val_35465 === (4))){
var inst_35447 = (state_35464[(10)]);
var inst_35452 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35447);
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35464__$1,(7),inst_35452);
} else {
if((state_val_35465 === (5))){
var inst_35458 = cljs.core.async.close_BANG_.call(null,out);
var state_35464__$1 = state_35464;
var statearr_35471_35483 = state_35464__$1;
(statearr_35471_35483[(2)] = inst_35458);

(statearr_35471_35483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (6))){
var inst_35460 = (state_35464[(2)]);
var state_35464__$1 = state_35464;
var statearr_35472_35484 = state_35464__$1;
(statearr_35472_35484[(2)] = inst_35460);

(statearr_35472_35484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (7))){
var inst_35448 = (state_35464[(11)]);
var inst_35454 = (state_35464[(2)]);
var inst_35455 = cljs.core.async.put_BANG_.call(null,out,inst_35454);
var inst_35441 = inst_35448;
var state_35464__$1 = (function (){var statearr_35473 = state_35464;
(statearr_35473[(12)] = inst_35455);

(statearr_35473[(8)] = inst_35441);

return statearr_35473;
})();
var statearr_35474_35485 = state_35464__$1;
(statearr_35474_35485[(2)] = null);

(statearr_35474_35485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30639__auto___35479,out))
;
return ((function (switch__30551__auto__,c__30639__auto___35479,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____1 = (function (state_35464){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_35464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e35476){if((e35476 instanceof Object)){
var ex__30555__auto__ = e35476;
var statearr_35477_35486 = state_35464;
(statearr_35477_35486[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_35464;
state_35464 = G__35487;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__ = function(state_35464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____1.call(this,state_35464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___35479,out))
})();
var state__30641__auto__ = (function (){var statearr_35478 = f__30640__auto__.call(null);
(statearr_35478[(6)] = c__30639__auto___35479);

return statearr_35478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___35479,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35488,opts){
var map__35489 = p__35488;
var map__35489__$1 = ((((!((map__35489 == null)))?((((map__35489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35489):map__35489);
var eval_body = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27249__auto__ = eval_body;
if(cljs.core.truth_(and__27249__auto__)){
return typeof eval_body === 'string';
} else {
return and__27249__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35491){var e = e35491;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35492_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35492_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35493){
var vec__35494 = p__35493;
var k = cljs.core.nth.call(null,vec__35494,(0),null);
var v = cljs.core.nth.call(null,vec__35494,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35497){
var vec__35498 = p__35497;
var k = cljs.core.nth.call(null,vec__35498,(0),null);
var v = cljs.core.nth.call(null,vec__35498,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35504,p__35505){
var map__35506 = p__35504;
var map__35506__$1 = ((((!((map__35506 == null)))?((((map__35506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35506):map__35506);
var opts = map__35506__$1;
var before_jsload = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35507 = p__35505;
var map__35507__$1 = ((((!((map__35507 == null)))?((((map__35507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35507):map__35507);
var msg = map__35507__$1;
var files = cljs.core.get.call(null,map__35507__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35507__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35507__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35661){
var state_val_35662 = (state_35661[(1)]);
if((state_val_35662 === (7))){
var inst_35524 = (state_35661[(7)]);
var inst_35521 = (state_35661[(8)]);
var inst_35523 = (state_35661[(9)]);
var inst_35522 = (state_35661[(10)]);
var inst_35529 = cljs.core._nth.call(null,inst_35522,inst_35524);
var inst_35530 = figwheel.client.file_reloading.eval_body.call(null,inst_35529,opts);
var inst_35531 = (inst_35524 + (1));
var tmp35663 = inst_35521;
var tmp35664 = inst_35523;
var tmp35665 = inst_35522;
var inst_35521__$1 = tmp35663;
var inst_35522__$1 = tmp35665;
var inst_35523__$1 = tmp35664;
var inst_35524__$1 = inst_35531;
var state_35661__$1 = (function (){var statearr_35666 = state_35661;
(statearr_35666[(7)] = inst_35524__$1);

(statearr_35666[(8)] = inst_35521__$1);

(statearr_35666[(9)] = inst_35523__$1);

(statearr_35666[(11)] = inst_35530);

(statearr_35666[(10)] = inst_35522__$1);

return statearr_35666;
})();
var statearr_35667_35750 = state_35661__$1;
(statearr_35667_35750[(2)] = null);

(statearr_35667_35750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (20))){
var inst_35564 = (state_35661[(12)]);
var inst_35572 = figwheel.client.file_reloading.sort_files.call(null,inst_35564);
var state_35661__$1 = state_35661;
var statearr_35668_35751 = state_35661__$1;
(statearr_35668_35751[(2)] = inst_35572);

(statearr_35668_35751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (27))){
var state_35661__$1 = state_35661;
var statearr_35669_35752 = state_35661__$1;
(statearr_35669_35752[(2)] = null);

(statearr_35669_35752[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (1))){
var inst_35513 = (state_35661[(13)]);
var inst_35510 = before_jsload.call(null,files);
var inst_35511 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35512 = (function (){return ((function (inst_35513,inst_35510,inst_35511,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35501_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35501_SHARP_);
});
;})(inst_35513,inst_35510,inst_35511,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35513__$1 = cljs.core.filter.call(null,inst_35512,files);
var inst_35514 = cljs.core.not_empty.call(null,inst_35513__$1);
var state_35661__$1 = (function (){var statearr_35670 = state_35661;
(statearr_35670[(14)] = inst_35511);

(statearr_35670[(15)] = inst_35510);

(statearr_35670[(13)] = inst_35513__$1);

return statearr_35670;
})();
if(cljs.core.truth_(inst_35514)){
var statearr_35671_35753 = state_35661__$1;
(statearr_35671_35753[(1)] = (2));

} else {
var statearr_35672_35754 = state_35661__$1;
(statearr_35672_35754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (24))){
var state_35661__$1 = state_35661;
var statearr_35673_35755 = state_35661__$1;
(statearr_35673_35755[(2)] = null);

(statearr_35673_35755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (39))){
var inst_35614 = (state_35661[(16)]);
var state_35661__$1 = state_35661;
var statearr_35674_35756 = state_35661__$1;
(statearr_35674_35756[(2)] = inst_35614);

(statearr_35674_35756[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (46))){
var inst_35656 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35675_35757 = state_35661__$1;
(statearr_35675_35757[(2)] = inst_35656);

(statearr_35675_35757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (4))){
var inst_35558 = (state_35661[(2)]);
var inst_35559 = cljs.core.List.EMPTY;
var inst_35560 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35559);
var inst_35561 = (function (){return ((function (inst_35558,inst_35559,inst_35560,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35502_SHARP_){
var and__27249__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35502_SHARP_);
if(cljs.core.truth_(and__27249__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35502_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35502_SHARP_)));
} else {
return and__27249__auto__;
}
});
;})(inst_35558,inst_35559,inst_35560,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35562 = cljs.core.filter.call(null,inst_35561,files);
var inst_35563 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35564 = cljs.core.concat.call(null,inst_35562,inst_35563);
var state_35661__$1 = (function (){var statearr_35676 = state_35661;
(statearr_35676[(12)] = inst_35564);

(statearr_35676[(17)] = inst_35558);

(statearr_35676[(18)] = inst_35560);

return statearr_35676;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35677_35758 = state_35661__$1;
(statearr_35677_35758[(1)] = (16));

} else {
var statearr_35678_35759 = state_35661__$1;
(statearr_35678_35759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (15))){
var inst_35548 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35679_35760 = state_35661__$1;
(statearr_35679_35760[(2)] = inst_35548);

(statearr_35679_35760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (21))){
var inst_35574 = (state_35661[(19)]);
var inst_35574__$1 = (state_35661[(2)]);
var inst_35575 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35574__$1);
var state_35661__$1 = (function (){var statearr_35680 = state_35661;
(statearr_35680[(19)] = inst_35574__$1);

return statearr_35680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35661__$1,(22),inst_35575);
} else {
if((state_val_35662 === (31))){
var inst_35659 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35661__$1,inst_35659);
} else {
if((state_val_35662 === (32))){
var inst_35614 = (state_35661[(16)]);
var inst_35619 = inst_35614.cljs$lang$protocol_mask$partition0$;
var inst_35620 = (inst_35619 & (64));
var inst_35621 = inst_35614.cljs$core$ISeq$;
var inst_35622 = (cljs.core.PROTOCOL_SENTINEL === inst_35621);
var inst_35623 = (inst_35620) || (inst_35622);
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35623)){
var statearr_35681_35761 = state_35661__$1;
(statearr_35681_35761[(1)] = (35));

} else {
var statearr_35682_35762 = state_35661__$1;
(statearr_35682_35762[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (40))){
var inst_35636 = (state_35661[(20)]);
var inst_35635 = (state_35661[(2)]);
var inst_35636__$1 = cljs.core.get.call(null,inst_35635,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35637 = cljs.core.get.call(null,inst_35635,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35638 = cljs.core.not_empty.call(null,inst_35636__$1);
var state_35661__$1 = (function (){var statearr_35683 = state_35661;
(statearr_35683[(20)] = inst_35636__$1);

(statearr_35683[(21)] = inst_35637);

return statearr_35683;
})();
if(cljs.core.truth_(inst_35638)){
var statearr_35684_35763 = state_35661__$1;
(statearr_35684_35763[(1)] = (41));

} else {
var statearr_35685_35764 = state_35661__$1;
(statearr_35685_35764[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (33))){
var state_35661__$1 = state_35661;
var statearr_35686_35765 = state_35661__$1;
(statearr_35686_35765[(2)] = false);

(statearr_35686_35765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (13))){
var inst_35534 = (state_35661[(22)]);
var inst_35538 = cljs.core.chunk_first.call(null,inst_35534);
var inst_35539 = cljs.core.chunk_rest.call(null,inst_35534);
var inst_35540 = cljs.core.count.call(null,inst_35538);
var inst_35521 = inst_35539;
var inst_35522 = inst_35538;
var inst_35523 = inst_35540;
var inst_35524 = (0);
var state_35661__$1 = (function (){var statearr_35687 = state_35661;
(statearr_35687[(7)] = inst_35524);

(statearr_35687[(8)] = inst_35521);

(statearr_35687[(9)] = inst_35523);

(statearr_35687[(10)] = inst_35522);

return statearr_35687;
})();
var statearr_35688_35766 = state_35661__$1;
(statearr_35688_35766[(2)] = null);

(statearr_35688_35766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (22))){
var inst_35574 = (state_35661[(19)]);
var inst_35582 = (state_35661[(23)]);
var inst_35578 = (state_35661[(24)]);
var inst_35577 = (state_35661[(25)]);
var inst_35577__$1 = (state_35661[(2)]);
var inst_35578__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35577__$1);
var inst_35579 = (function (){var all_files = inst_35574;
var res_SINGLEQUOTE_ = inst_35577__$1;
var res = inst_35578__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35574,inst_35582,inst_35578,inst_35577,inst_35577__$1,inst_35578__$1,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35503_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35503_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35574,inst_35582,inst_35578,inst_35577,inst_35577__$1,inst_35578__$1,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35580 = cljs.core.filter.call(null,inst_35579,inst_35577__$1);
var inst_35581 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35582__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35581);
var inst_35583 = cljs.core.not_empty.call(null,inst_35582__$1);
var state_35661__$1 = (function (){var statearr_35689 = state_35661;
(statearr_35689[(26)] = inst_35580);

(statearr_35689[(23)] = inst_35582__$1);

(statearr_35689[(24)] = inst_35578__$1);

(statearr_35689[(25)] = inst_35577__$1);

return statearr_35689;
})();
if(cljs.core.truth_(inst_35583)){
var statearr_35690_35767 = state_35661__$1;
(statearr_35690_35767[(1)] = (23));

} else {
var statearr_35691_35768 = state_35661__$1;
(statearr_35691_35768[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (36))){
var state_35661__$1 = state_35661;
var statearr_35692_35769 = state_35661__$1;
(statearr_35692_35769[(2)] = false);

(statearr_35692_35769[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (41))){
var inst_35636 = (state_35661[(20)]);
var inst_35640 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35641 = cljs.core.map.call(null,inst_35640,inst_35636);
var inst_35642 = cljs.core.pr_str.call(null,inst_35641);
var inst_35643 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35642)].join('');
var inst_35644 = figwheel.client.utils.log.call(null,inst_35643);
var state_35661__$1 = state_35661;
var statearr_35693_35770 = state_35661__$1;
(statearr_35693_35770[(2)] = inst_35644);

(statearr_35693_35770[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (43))){
var inst_35637 = (state_35661[(21)]);
var inst_35647 = (state_35661[(2)]);
var inst_35648 = cljs.core.not_empty.call(null,inst_35637);
var state_35661__$1 = (function (){var statearr_35694 = state_35661;
(statearr_35694[(27)] = inst_35647);

return statearr_35694;
})();
if(cljs.core.truth_(inst_35648)){
var statearr_35695_35771 = state_35661__$1;
(statearr_35695_35771[(1)] = (44));

} else {
var statearr_35696_35772 = state_35661__$1;
(statearr_35696_35772[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (29))){
var inst_35580 = (state_35661[(26)]);
var inst_35574 = (state_35661[(19)]);
var inst_35582 = (state_35661[(23)]);
var inst_35578 = (state_35661[(24)]);
var inst_35577 = (state_35661[(25)]);
var inst_35614 = (state_35661[(16)]);
var inst_35610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35613 = (function (){var all_files = inst_35574;
var res_SINGLEQUOTE_ = inst_35577;
var res = inst_35578;
var files_not_loaded = inst_35580;
var dependencies_that_loaded = inst_35582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35614,inst_35610,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35612){
var map__35697 = p__35612;
var map__35697__$1 = ((((!((map__35697 == null)))?((((map__35697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35697):map__35697);
var namespace = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35614,inst_35610,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35614__$1 = cljs.core.group_by.call(null,inst_35613,inst_35580);
var inst_35616 = (inst_35614__$1 == null);
var inst_35617 = cljs.core.not.call(null,inst_35616);
var state_35661__$1 = (function (){var statearr_35699 = state_35661;
(statearr_35699[(28)] = inst_35610);

(statearr_35699[(16)] = inst_35614__$1);

return statearr_35699;
})();
if(inst_35617){
var statearr_35700_35773 = state_35661__$1;
(statearr_35700_35773[(1)] = (32));

} else {
var statearr_35701_35774 = state_35661__$1;
(statearr_35701_35774[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (44))){
var inst_35637 = (state_35661[(21)]);
var inst_35650 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35637);
var inst_35651 = cljs.core.pr_str.call(null,inst_35650);
var inst_35652 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35651)].join('');
var inst_35653 = figwheel.client.utils.log.call(null,inst_35652);
var state_35661__$1 = state_35661;
var statearr_35702_35775 = state_35661__$1;
(statearr_35702_35775[(2)] = inst_35653);

(statearr_35702_35775[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (6))){
var inst_35555 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35703_35776 = state_35661__$1;
(statearr_35703_35776[(2)] = inst_35555);

(statearr_35703_35776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (28))){
var inst_35580 = (state_35661[(26)]);
var inst_35607 = (state_35661[(2)]);
var inst_35608 = cljs.core.not_empty.call(null,inst_35580);
var state_35661__$1 = (function (){var statearr_35704 = state_35661;
(statearr_35704[(29)] = inst_35607);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35608)){
var statearr_35705_35777 = state_35661__$1;
(statearr_35705_35777[(1)] = (29));

} else {
var statearr_35706_35778 = state_35661__$1;
(statearr_35706_35778[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (25))){
var inst_35578 = (state_35661[(24)]);
var inst_35594 = (state_35661[(2)]);
var inst_35595 = cljs.core.not_empty.call(null,inst_35578);
var state_35661__$1 = (function (){var statearr_35707 = state_35661;
(statearr_35707[(30)] = inst_35594);

return statearr_35707;
})();
if(cljs.core.truth_(inst_35595)){
var statearr_35708_35779 = state_35661__$1;
(statearr_35708_35779[(1)] = (26));

} else {
var statearr_35709_35780 = state_35661__$1;
(statearr_35709_35780[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (34))){
var inst_35630 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35630)){
var statearr_35710_35781 = state_35661__$1;
(statearr_35710_35781[(1)] = (38));

} else {
var statearr_35711_35782 = state_35661__$1;
(statearr_35711_35782[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (17))){
var state_35661__$1 = state_35661;
var statearr_35712_35783 = state_35661__$1;
(statearr_35712_35783[(2)] = recompile_dependents);

(statearr_35712_35783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (3))){
var state_35661__$1 = state_35661;
var statearr_35713_35784 = state_35661__$1;
(statearr_35713_35784[(2)] = null);

(statearr_35713_35784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (12))){
var inst_35551 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35714_35785 = state_35661__$1;
(statearr_35714_35785[(2)] = inst_35551);

(statearr_35714_35785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (2))){
var inst_35513 = (state_35661[(13)]);
var inst_35520 = cljs.core.seq.call(null,inst_35513);
var inst_35521 = inst_35520;
var inst_35522 = null;
var inst_35523 = (0);
var inst_35524 = (0);
var state_35661__$1 = (function (){var statearr_35715 = state_35661;
(statearr_35715[(7)] = inst_35524);

(statearr_35715[(8)] = inst_35521);

(statearr_35715[(9)] = inst_35523);

(statearr_35715[(10)] = inst_35522);

return statearr_35715;
})();
var statearr_35716_35786 = state_35661__$1;
(statearr_35716_35786[(2)] = null);

(statearr_35716_35786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (23))){
var inst_35580 = (state_35661[(26)]);
var inst_35574 = (state_35661[(19)]);
var inst_35582 = (state_35661[(23)]);
var inst_35578 = (state_35661[(24)]);
var inst_35577 = (state_35661[(25)]);
var inst_35585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35587 = (function (){var all_files = inst_35574;
var res_SINGLEQUOTE_ = inst_35577;
var res = inst_35578;
var files_not_loaded = inst_35580;
var dependencies_that_loaded = inst_35582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35585,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35586){
var map__35717 = p__35586;
var map__35717__$1 = ((((!((map__35717 == null)))?((((map__35717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35717):map__35717);
var request_url = cljs.core.get.call(null,map__35717__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35585,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35588 = cljs.core.reverse.call(null,inst_35582);
var inst_35589 = cljs.core.map.call(null,inst_35587,inst_35588);
var inst_35590 = cljs.core.pr_str.call(null,inst_35589);
var inst_35591 = figwheel.client.utils.log.call(null,inst_35590);
var state_35661__$1 = (function (){var statearr_35719 = state_35661;
(statearr_35719[(31)] = inst_35585);

return statearr_35719;
})();
var statearr_35720_35787 = state_35661__$1;
(statearr_35720_35787[(2)] = inst_35591);

(statearr_35720_35787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (35))){
var state_35661__$1 = state_35661;
var statearr_35721_35788 = state_35661__$1;
(statearr_35721_35788[(2)] = true);

(statearr_35721_35788[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (19))){
var inst_35564 = (state_35661[(12)]);
var inst_35570 = figwheel.client.file_reloading.expand_files.call(null,inst_35564);
var state_35661__$1 = state_35661;
var statearr_35722_35789 = state_35661__$1;
(statearr_35722_35789[(2)] = inst_35570);

(statearr_35722_35789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (11))){
var state_35661__$1 = state_35661;
var statearr_35723_35790 = state_35661__$1;
(statearr_35723_35790[(2)] = null);

(statearr_35723_35790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (9))){
var inst_35553 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35724_35791 = state_35661__$1;
(statearr_35724_35791[(2)] = inst_35553);

(statearr_35724_35791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (5))){
var inst_35524 = (state_35661[(7)]);
var inst_35523 = (state_35661[(9)]);
var inst_35526 = (inst_35524 < inst_35523);
var inst_35527 = inst_35526;
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35527)){
var statearr_35725_35792 = state_35661__$1;
(statearr_35725_35792[(1)] = (7));

} else {
var statearr_35726_35793 = state_35661__$1;
(statearr_35726_35793[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (14))){
var inst_35534 = (state_35661[(22)]);
var inst_35543 = cljs.core.first.call(null,inst_35534);
var inst_35544 = figwheel.client.file_reloading.eval_body.call(null,inst_35543,opts);
var inst_35545 = cljs.core.next.call(null,inst_35534);
var inst_35521 = inst_35545;
var inst_35522 = null;
var inst_35523 = (0);
var inst_35524 = (0);
var state_35661__$1 = (function (){var statearr_35727 = state_35661;
(statearr_35727[(7)] = inst_35524);

(statearr_35727[(32)] = inst_35544);

(statearr_35727[(8)] = inst_35521);

(statearr_35727[(9)] = inst_35523);

(statearr_35727[(10)] = inst_35522);

return statearr_35727;
})();
var statearr_35728_35794 = state_35661__$1;
(statearr_35728_35794[(2)] = null);

(statearr_35728_35794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (45))){
var state_35661__$1 = state_35661;
var statearr_35729_35795 = state_35661__$1;
(statearr_35729_35795[(2)] = null);

(statearr_35729_35795[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (26))){
var inst_35580 = (state_35661[(26)]);
var inst_35574 = (state_35661[(19)]);
var inst_35582 = (state_35661[(23)]);
var inst_35578 = (state_35661[(24)]);
var inst_35577 = (state_35661[(25)]);
var inst_35597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35599 = (function (){var all_files = inst_35574;
var res_SINGLEQUOTE_ = inst_35577;
var res = inst_35578;
var files_not_loaded = inst_35580;
var dependencies_that_loaded = inst_35582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35597,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35598){
var map__35730 = p__35598;
var map__35730__$1 = ((((!((map__35730 == null)))?((((map__35730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35730):map__35730);
var namespace = cljs.core.get.call(null,map__35730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35597,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35600 = cljs.core.map.call(null,inst_35599,inst_35578);
var inst_35601 = cljs.core.pr_str.call(null,inst_35600);
var inst_35602 = figwheel.client.utils.log.call(null,inst_35601);
var inst_35603 = (function (){var all_files = inst_35574;
var res_SINGLEQUOTE_ = inst_35577;
var res = inst_35578;
var files_not_loaded = inst_35580;
var dependencies_that_loaded = inst_35582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35597,inst_35599,inst_35600,inst_35601,inst_35602,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35580,inst_35574,inst_35582,inst_35578,inst_35577,inst_35597,inst_35599,inst_35600,inst_35601,inst_35602,state_val_35662,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35604 = setTimeout(inst_35603,(10));
var state_35661__$1 = (function (){var statearr_35732 = state_35661;
(statearr_35732[(33)] = inst_35602);

(statearr_35732[(34)] = inst_35597);

return statearr_35732;
})();
var statearr_35733_35796 = state_35661__$1;
(statearr_35733_35796[(2)] = inst_35604);

(statearr_35733_35796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (16))){
var state_35661__$1 = state_35661;
var statearr_35734_35797 = state_35661__$1;
(statearr_35734_35797[(2)] = reload_dependents);

(statearr_35734_35797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (38))){
var inst_35614 = (state_35661[(16)]);
var inst_35632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35614);
var state_35661__$1 = state_35661;
var statearr_35735_35798 = state_35661__$1;
(statearr_35735_35798[(2)] = inst_35632);

(statearr_35735_35798[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (30))){
var state_35661__$1 = state_35661;
var statearr_35736_35799 = state_35661__$1;
(statearr_35736_35799[(2)] = null);

(statearr_35736_35799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (10))){
var inst_35534 = (state_35661[(22)]);
var inst_35536 = cljs.core.chunked_seq_QMARK_.call(null,inst_35534);
var state_35661__$1 = state_35661;
if(inst_35536){
var statearr_35737_35800 = state_35661__$1;
(statearr_35737_35800[(1)] = (13));

} else {
var statearr_35738_35801 = state_35661__$1;
(statearr_35738_35801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (18))){
var inst_35568 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35568)){
var statearr_35739_35802 = state_35661__$1;
(statearr_35739_35802[(1)] = (19));

} else {
var statearr_35740_35803 = state_35661__$1;
(statearr_35740_35803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (42))){
var state_35661__$1 = state_35661;
var statearr_35741_35804 = state_35661__$1;
(statearr_35741_35804[(2)] = null);

(statearr_35741_35804[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (37))){
var inst_35627 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35742_35805 = state_35661__$1;
(statearr_35742_35805[(2)] = inst_35627);

(statearr_35742_35805[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (8))){
var inst_35521 = (state_35661[(8)]);
var inst_35534 = (state_35661[(22)]);
var inst_35534__$1 = cljs.core.seq.call(null,inst_35521);
var state_35661__$1 = (function (){var statearr_35743 = state_35661;
(statearr_35743[(22)] = inst_35534__$1);

return statearr_35743;
})();
if(inst_35534__$1){
var statearr_35744_35806 = state_35661__$1;
(statearr_35744_35806[(1)] = (10));

} else {
var statearr_35745_35807 = state_35661__$1;
(statearr_35745_35807[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30551__auto__,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____0 = (function (){
var statearr_35746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35746[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__);

(statearr_35746[(1)] = (1));

return statearr_35746;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____1 = (function (state_35661){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_35661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e35747){if((e35747 instanceof Object)){
var ex__30555__auto__ = e35747;
var statearr_35748_35808 = state_35661;
(statearr_35748_35808[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35809 = state_35661;
state_35661 = G__35809;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__ = function(state_35661){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____1.call(this,state_35661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30641__auto__ = (function (){var statearr_35749 = f__30640__auto__.call(null);
(statearr_35749[(6)] = c__30639__auto__);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__,map__35506,map__35506__$1,opts,before_jsload,on_jsload,reload_dependents,map__35507,map__35507__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30639__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35812,link){
var map__35813 = p__35812;
var map__35813__$1 = ((((!((map__35813 == null)))?((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35813):map__35813);
var file = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35813,map__35813__$1,file){
return (function (p1__35810_SHARP_,p2__35811_SHARP_){
if(cljs.core._EQ_.call(null,p1__35810_SHARP_,p2__35811_SHARP_)){
return p1__35810_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35813,map__35813__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35816){
var map__35817 = p__35816;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35817):map__35817);
var match_length = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35815_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35815_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35819_SHARP_,p2__35820_SHARP_){
return cljs.core.assoc.call(null,p1__35819_SHARP_,cljs.core.get.call(null,p2__35820_SHARP_,key),p2__35820_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35821 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35821);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35821);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35822,p__35823){
var map__35824 = p__35822;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var on_cssload = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35825 = p__35823;
var map__35825__$1 = ((((!((map__35825 == null)))?((((map__35825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35825):map__35825);
var files_msg = map__35825__$1;
var files = cljs.core.get.call(null,map__35825__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511532878721
