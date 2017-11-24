// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35841 = arguments.length;
var i__28433__auto___35842 = (0);
while(true){
if((i__28433__auto___35842 < len__28432__auto___35841)){
args__28439__auto__.push((arguments[i__28433__auto___35842]));

var G__35843 = (i__28433__auto___35842 + (1));
i__28433__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35840){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35840));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35845 = arguments.length;
var i__28433__auto___35846 = (0);
while(true){
if((i__28433__auto___35846 < len__28432__auto___35845)){
args__28439__auto__.push((arguments[i__28433__auto___35846]));

var G__35847 = (i__28433__auto___35846 + (1));
i__28433__auto___35846 = G__35847;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35844){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35844));
});

var g_QMARK__35848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35849 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35848){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35848))
,null));
var mkg_35850 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35848,g_35849){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35848,g_35849))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35848,g_35849,mkg_35850){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35848).call(null,x);
});})(g_QMARK__35848,g_35849,mkg_35850))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35848,g_35849,mkg_35850){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35850).call(null,gfn);
});})(g_QMARK__35848,g_35849,mkg_35850))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35848,g_35849,mkg_35850){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35849).call(null,generator);
});})(g_QMARK__35848,g_35849,mkg_35850))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28525__auto___35870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__28525__auto___35870){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35871 = arguments.length;
var i__28433__auto___35872 = (0);
while(true){
if((i__28433__auto___35872 < len__28432__auto___35871)){
args__28439__auto__.push((arguments[i__28433__auto___35872]));

var G__35873 = (i__28433__auto___35872 + (1));
i__28433__auto___35872 = G__35873;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35870))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35870),args);
});})(g__28525__auto___35870))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__28525__auto___35870){
return (function (seq35851){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35851));
});})(g__28525__auto___35870))
;


var g__28525__auto___35874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__28525__auto___35874){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35875 = arguments.length;
var i__28433__auto___35876 = (0);
while(true){
if((i__28433__auto___35876 < len__28432__auto___35875)){
args__28439__auto__.push((arguments[i__28433__auto___35876]));

var G__35877 = (i__28433__auto___35876 + (1));
i__28433__auto___35876 = G__35877;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35874))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35874),args);
});})(g__28525__auto___35874))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__28525__auto___35874){
return (function (seq35852){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35852));
});})(g__28525__auto___35874))
;


var g__28525__auto___35878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__28525__auto___35878){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35879 = arguments.length;
var i__28433__auto___35880 = (0);
while(true){
if((i__28433__auto___35880 < len__28432__auto___35879)){
args__28439__auto__.push((arguments[i__28433__auto___35880]));

var G__35881 = (i__28433__auto___35880 + (1));
i__28433__auto___35880 = G__35881;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35878))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35878),args);
});})(g__28525__auto___35878))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__28525__auto___35878){
return (function (seq35853){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35853));
});})(g__28525__auto___35878))
;


var g__28525__auto___35882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__28525__auto___35882){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35883 = arguments.length;
var i__28433__auto___35884 = (0);
while(true){
if((i__28433__auto___35884 < len__28432__auto___35883)){
args__28439__auto__.push((arguments[i__28433__auto___35884]));

var G__35885 = (i__28433__auto___35884 + (1));
i__28433__auto___35884 = G__35885;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35882))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35882),args);
});})(g__28525__auto___35882))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__28525__auto___35882){
return (function (seq35854){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35854));
});})(g__28525__auto___35882))
;


var g__28525__auto___35886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__28525__auto___35886){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35887 = arguments.length;
var i__28433__auto___35888 = (0);
while(true){
if((i__28433__auto___35888 < len__28432__auto___35887)){
args__28439__auto__.push((arguments[i__28433__auto___35888]));

var G__35889 = (i__28433__auto___35888 + (1));
i__28433__auto___35888 = G__35889;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35886))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35886),args);
});})(g__28525__auto___35886))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__28525__auto___35886){
return (function (seq35855){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35855));
});})(g__28525__auto___35886))
;


var g__28525__auto___35890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__28525__auto___35890){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35891 = arguments.length;
var i__28433__auto___35892 = (0);
while(true){
if((i__28433__auto___35892 < len__28432__auto___35891)){
args__28439__auto__.push((arguments[i__28433__auto___35892]));

var G__35893 = (i__28433__auto___35892 + (1));
i__28433__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35890))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35890),args);
});})(g__28525__auto___35890))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__28525__auto___35890){
return (function (seq35856){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35856));
});})(g__28525__auto___35890))
;


var g__28525__auto___35894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__28525__auto___35894){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35895 = arguments.length;
var i__28433__auto___35896 = (0);
while(true){
if((i__28433__auto___35896 < len__28432__auto___35895)){
args__28439__auto__.push((arguments[i__28433__auto___35896]));

var G__35897 = (i__28433__auto___35896 + (1));
i__28433__auto___35896 = G__35897;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35894))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35894),args);
});})(g__28525__auto___35894))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__28525__auto___35894){
return (function (seq35857){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35857));
});})(g__28525__auto___35894))
;


var g__28525__auto___35898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__28525__auto___35898){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35899 = arguments.length;
var i__28433__auto___35900 = (0);
while(true){
if((i__28433__auto___35900 < len__28432__auto___35899)){
args__28439__auto__.push((arguments[i__28433__auto___35900]));

var G__35901 = (i__28433__auto___35900 + (1));
i__28433__auto___35900 = G__35901;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35898))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35898),args);
});})(g__28525__auto___35898))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__28525__auto___35898){
return (function (seq35858){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35858));
});})(g__28525__auto___35898))
;


var g__28525__auto___35902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__28525__auto___35902){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35903 = arguments.length;
var i__28433__auto___35904 = (0);
while(true){
if((i__28433__auto___35904 < len__28432__auto___35903)){
args__28439__auto__.push((arguments[i__28433__auto___35904]));

var G__35905 = (i__28433__auto___35904 + (1));
i__28433__auto___35904 = G__35905;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35902))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35902),args);
});})(g__28525__auto___35902))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__28525__auto___35902){
return (function (seq35859){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35859));
});})(g__28525__auto___35902))
;


var g__28525__auto___35906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__28525__auto___35906){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35907 = arguments.length;
var i__28433__auto___35908 = (0);
while(true){
if((i__28433__auto___35908 < len__28432__auto___35907)){
args__28439__auto__.push((arguments[i__28433__auto___35908]));

var G__35909 = (i__28433__auto___35908 + (1));
i__28433__auto___35908 = G__35909;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35906))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35906),args);
});})(g__28525__auto___35906))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__28525__auto___35906){
return (function (seq35860){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35860));
});})(g__28525__auto___35906))
;


var g__28525__auto___35910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__28525__auto___35910){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35911 = arguments.length;
var i__28433__auto___35912 = (0);
while(true){
if((i__28433__auto___35912 < len__28432__auto___35911)){
args__28439__auto__.push((arguments[i__28433__auto___35912]));

var G__35913 = (i__28433__auto___35912 + (1));
i__28433__auto___35912 = G__35913;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35910))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35910){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35910),args);
});})(g__28525__auto___35910))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__28525__auto___35910){
return (function (seq35861){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35861));
});})(g__28525__auto___35910))
;


var g__28525__auto___35914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__28525__auto___35914){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35915 = arguments.length;
var i__28433__auto___35916 = (0);
while(true){
if((i__28433__auto___35916 < len__28432__auto___35915)){
args__28439__auto__.push((arguments[i__28433__auto___35916]));

var G__35917 = (i__28433__auto___35916 + (1));
i__28433__auto___35916 = G__35917;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35914))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35914),args);
});})(g__28525__auto___35914))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__28525__auto___35914){
return (function (seq35862){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35862));
});})(g__28525__auto___35914))
;


var g__28525__auto___35918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__28525__auto___35918){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35919 = arguments.length;
var i__28433__auto___35920 = (0);
while(true){
if((i__28433__auto___35920 < len__28432__auto___35919)){
args__28439__auto__.push((arguments[i__28433__auto___35920]));

var G__35921 = (i__28433__auto___35920 + (1));
i__28433__auto___35920 = G__35921;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35918))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35918),args);
});})(g__28525__auto___35918))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__28525__auto___35918){
return (function (seq35863){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35863));
});})(g__28525__auto___35918))
;


var g__28525__auto___35922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__28525__auto___35922){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35923 = arguments.length;
var i__28433__auto___35924 = (0);
while(true){
if((i__28433__auto___35924 < len__28432__auto___35923)){
args__28439__auto__.push((arguments[i__28433__auto___35924]));

var G__35925 = (i__28433__auto___35924 + (1));
i__28433__auto___35924 = G__35925;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35922))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35922),args);
});})(g__28525__auto___35922))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__28525__auto___35922){
return (function (seq35864){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35864));
});})(g__28525__auto___35922))
;


var g__28525__auto___35926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__28525__auto___35926){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35927 = arguments.length;
var i__28433__auto___35928 = (0);
while(true){
if((i__28433__auto___35928 < len__28432__auto___35927)){
args__28439__auto__.push((arguments[i__28433__auto___35928]));

var G__35929 = (i__28433__auto___35928 + (1));
i__28433__auto___35928 = G__35929;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35926))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35926),args);
});})(g__28525__auto___35926))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__28525__auto___35926){
return (function (seq35865){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35865));
});})(g__28525__auto___35926))
;


var g__28525__auto___35930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__28525__auto___35930){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35931 = arguments.length;
var i__28433__auto___35932 = (0);
while(true){
if((i__28433__auto___35932 < len__28432__auto___35931)){
args__28439__auto__.push((arguments[i__28433__auto___35932]));

var G__35933 = (i__28433__auto___35932 + (1));
i__28433__auto___35932 = G__35933;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35930))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35930),args);
});})(g__28525__auto___35930))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__28525__auto___35930){
return (function (seq35866){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35866));
});})(g__28525__auto___35930))
;


var g__28525__auto___35934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__28525__auto___35934){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35935 = arguments.length;
var i__28433__auto___35936 = (0);
while(true){
if((i__28433__auto___35936 < len__28432__auto___35935)){
args__28439__auto__.push((arguments[i__28433__auto___35936]));

var G__35937 = (i__28433__auto___35936 + (1));
i__28433__auto___35936 = G__35937;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35934))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35934),args);
});})(g__28525__auto___35934))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28525__auto___35934){
return (function (seq35867){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35867));
});})(g__28525__auto___35934))
;


var g__28525__auto___35938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__28525__auto___35938){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35939 = arguments.length;
var i__28433__auto___35940 = (0);
while(true){
if((i__28433__auto___35940 < len__28432__auto___35939)){
args__28439__auto__.push((arguments[i__28433__auto___35940]));

var G__35941 = (i__28433__auto___35940 + (1));
i__28433__auto___35940 = G__35941;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35938))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35938),args);
});})(g__28525__auto___35938))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__28525__auto___35938){
return (function (seq35868){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35868));
});})(g__28525__auto___35938))
;


var g__28525__auto___35942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__28525__auto___35942){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35943 = arguments.length;
var i__28433__auto___35944 = (0);
while(true){
if((i__28433__auto___35944 < len__28432__auto___35943)){
args__28439__auto__.push((arguments[i__28433__auto___35944]));

var G__35945 = (i__28433__auto___35944 + (1));
i__28433__auto___35944 = G__35945;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28525__auto___35942))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28525__auto___35942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28525__auto___35942),args);
});})(g__28525__auto___35942))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__28525__auto___35942){
return (function (seq35869){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35869));
});})(g__28525__auto___35942))
;

var g__28538__auto___35967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__28538__auto___35967){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35968 = arguments.length;
var i__28433__auto___35969 = (0);
while(true){
if((i__28433__auto___35969 < len__28432__auto___35968)){
args__28439__auto__.push((arguments[i__28433__auto___35969]));

var G__35970 = (i__28433__auto___35969 + (1));
i__28433__auto___35969 = G__35970;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35967))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35967){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35967);
});})(g__28538__auto___35967))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__28538__auto___35967){
return (function (seq35946){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35946));
});})(g__28538__auto___35967))
;


var g__28538__auto___35971 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__28538__auto___35971){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35972 = arguments.length;
var i__28433__auto___35973 = (0);
while(true){
if((i__28433__auto___35973 < len__28432__auto___35972)){
args__28439__auto__.push((arguments[i__28433__auto___35973]));

var G__35974 = (i__28433__auto___35973 + (1));
i__28433__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35971))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35971){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35971);
});})(g__28538__auto___35971))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__28538__auto___35971){
return (function (seq35947){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35947));
});})(g__28538__auto___35971))
;


var g__28538__auto___35975 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__28538__auto___35975){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35976 = arguments.length;
var i__28433__auto___35977 = (0);
while(true){
if((i__28433__auto___35977 < len__28432__auto___35976)){
args__28439__auto__.push((arguments[i__28433__auto___35977]));

var G__35978 = (i__28433__auto___35977 + (1));
i__28433__auto___35977 = G__35978;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35975))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35975){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35975);
});})(g__28538__auto___35975))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__28538__auto___35975){
return (function (seq35948){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35948));
});})(g__28538__auto___35975))
;


var g__28538__auto___35979 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__28538__auto___35979){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35980 = arguments.length;
var i__28433__auto___35981 = (0);
while(true){
if((i__28433__auto___35981 < len__28432__auto___35980)){
args__28439__auto__.push((arguments[i__28433__auto___35981]));

var G__35982 = (i__28433__auto___35981 + (1));
i__28433__auto___35981 = G__35982;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35979))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35979){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35979);
});})(g__28538__auto___35979))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__28538__auto___35979){
return (function (seq35949){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35949));
});})(g__28538__auto___35979))
;


var g__28538__auto___35983 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__28538__auto___35983){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35984 = arguments.length;
var i__28433__auto___35985 = (0);
while(true){
if((i__28433__auto___35985 < len__28432__auto___35984)){
args__28439__auto__.push((arguments[i__28433__auto___35985]));

var G__35986 = (i__28433__auto___35985 + (1));
i__28433__auto___35985 = G__35986;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35983))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35983){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35983);
});})(g__28538__auto___35983))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__28538__auto___35983){
return (function (seq35950){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35950));
});})(g__28538__auto___35983))
;


var g__28538__auto___35987 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__28538__auto___35987){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35988 = arguments.length;
var i__28433__auto___35989 = (0);
while(true){
if((i__28433__auto___35989 < len__28432__auto___35988)){
args__28439__auto__.push((arguments[i__28433__auto___35989]));

var G__35990 = (i__28433__auto___35989 + (1));
i__28433__auto___35989 = G__35990;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35987))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35987){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35987);
});})(g__28538__auto___35987))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__28538__auto___35987){
return (function (seq35951){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35951));
});})(g__28538__auto___35987))
;


var g__28538__auto___35991 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__28538__auto___35991){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35992 = arguments.length;
var i__28433__auto___35993 = (0);
while(true){
if((i__28433__auto___35993 < len__28432__auto___35992)){
args__28439__auto__.push((arguments[i__28433__auto___35993]));

var G__35994 = (i__28433__auto___35993 + (1));
i__28433__auto___35993 = G__35994;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35991))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35991){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35991);
});})(g__28538__auto___35991))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__28538__auto___35991){
return (function (seq35952){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35952));
});})(g__28538__auto___35991))
;


var g__28538__auto___35995 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__28538__auto___35995){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28439__auto__ = [];
var len__28432__auto___35996 = arguments.length;
var i__28433__auto___35997 = (0);
while(true){
if((i__28433__auto___35997 < len__28432__auto___35996)){
args__28439__auto__.push((arguments[i__28433__auto___35997]));

var G__35998 = (i__28433__auto___35997 + (1));
i__28433__auto___35997 = G__35998;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35995))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35995){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35995);
});})(g__28538__auto___35995))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__28538__auto___35995){
return (function (seq35953){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35953));
});})(g__28538__auto___35995))
;


var g__28538__auto___35999 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__28538__auto___35999){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36000 = arguments.length;
var i__28433__auto___36001 = (0);
while(true){
if((i__28433__auto___36001 < len__28432__auto___36000)){
args__28439__auto__.push((arguments[i__28433__auto___36001]));

var G__36002 = (i__28433__auto___36001 + (1));
i__28433__auto___36001 = G__36002;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___35999))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___35999){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___35999);
});})(g__28538__auto___35999))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__28538__auto___35999){
return (function (seq35954){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35954));
});})(g__28538__auto___35999))
;


var g__28538__auto___36003 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__28538__auto___36003){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36004 = arguments.length;
var i__28433__auto___36005 = (0);
while(true){
if((i__28433__auto___36005 < len__28432__auto___36004)){
args__28439__auto__.push((arguments[i__28433__auto___36005]));

var G__36006 = (i__28433__auto___36005 + (1));
i__28433__auto___36005 = G__36006;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36003))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36003){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36003);
});})(g__28538__auto___36003))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__28538__auto___36003){
return (function (seq35955){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35955));
});})(g__28538__auto___36003))
;


var g__28538__auto___36007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__28538__auto___36007){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36008 = arguments.length;
var i__28433__auto___36009 = (0);
while(true){
if((i__28433__auto___36009 < len__28432__auto___36008)){
args__28439__auto__.push((arguments[i__28433__auto___36009]));

var G__36010 = (i__28433__auto___36009 + (1));
i__28433__auto___36009 = G__36010;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36007))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36007){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36007);
});})(g__28538__auto___36007))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__28538__auto___36007){
return (function (seq35956){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35956));
});})(g__28538__auto___36007))
;


var g__28538__auto___36011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__28538__auto___36011){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36012 = arguments.length;
var i__28433__auto___36013 = (0);
while(true){
if((i__28433__auto___36013 < len__28432__auto___36012)){
args__28439__auto__.push((arguments[i__28433__auto___36013]));

var G__36014 = (i__28433__auto___36013 + (1));
i__28433__auto___36013 = G__36014;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36011))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36011){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36011);
});})(g__28538__auto___36011))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__28538__auto___36011){
return (function (seq35957){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35957));
});})(g__28538__auto___36011))
;


var g__28538__auto___36015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__28538__auto___36015){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36016 = arguments.length;
var i__28433__auto___36017 = (0);
while(true){
if((i__28433__auto___36017 < len__28432__auto___36016)){
args__28439__auto__.push((arguments[i__28433__auto___36017]));

var G__36018 = (i__28433__auto___36017 + (1));
i__28433__auto___36017 = G__36018;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36015))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36015){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36015);
});})(g__28538__auto___36015))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__28538__auto___36015){
return (function (seq35958){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35958));
});})(g__28538__auto___36015))
;


var g__28538__auto___36019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__28538__auto___36019){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36020 = arguments.length;
var i__28433__auto___36021 = (0);
while(true){
if((i__28433__auto___36021 < len__28432__auto___36020)){
args__28439__auto__.push((arguments[i__28433__auto___36021]));

var G__36022 = (i__28433__auto___36021 + (1));
i__28433__auto___36021 = G__36022;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36019))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36019){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36019);
});})(g__28538__auto___36019))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__28538__auto___36019){
return (function (seq35959){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35959));
});})(g__28538__auto___36019))
;


var g__28538__auto___36023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__28538__auto___36023){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36024 = arguments.length;
var i__28433__auto___36025 = (0);
while(true){
if((i__28433__auto___36025 < len__28432__auto___36024)){
args__28439__auto__.push((arguments[i__28433__auto___36025]));

var G__36026 = (i__28433__auto___36025 + (1));
i__28433__auto___36025 = G__36026;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36023))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36023){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36023);
});})(g__28538__auto___36023))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__28538__auto___36023){
return (function (seq35960){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35960));
});})(g__28538__auto___36023))
;


var g__28538__auto___36027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__28538__auto___36027){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36028 = arguments.length;
var i__28433__auto___36029 = (0);
while(true){
if((i__28433__auto___36029 < len__28432__auto___36028)){
args__28439__auto__.push((arguments[i__28433__auto___36029]));

var G__36030 = (i__28433__auto___36029 + (1));
i__28433__auto___36029 = G__36030;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36027))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36027){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36027);
});})(g__28538__auto___36027))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__28538__auto___36027){
return (function (seq35961){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35961));
});})(g__28538__auto___36027))
;


var g__28538__auto___36031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__28538__auto___36031){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36032 = arguments.length;
var i__28433__auto___36033 = (0);
while(true){
if((i__28433__auto___36033 < len__28432__auto___36032)){
args__28439__auto__.push((arguments[i__28433__auto___36033]));

var G__36034 = (i__28433__auto___36033 + (1));
i__28433__auto___36033 = G__36034;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36031))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36031){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36031);
});})(g__28538__auto___36031))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__28538__auto___36031){
return (function (seq35962){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35962));
});})(g__28538__auto___36031))
;


var g__28538__auto___36035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__28538__auto___36035){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36036 = arguments.length;
var i__28433__auto___36037 = (0);
while(true){
if((i__28433__auto___36037 < len__28432__auto___36036)){
args__28439__auto__.push((arguments[i__28433__auto___36037]));

var G__36038 = (i__28433__auto___36037 + (1));
i__28433__auto___36037 = G__36038;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36035))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36035){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36035);
});})(g__28538__auto___36035))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__28538__auto___36035){
return (function (seq35963){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35963));
});})(g__28538__auto___36035))
;


var g__28538__auto___36039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__28538__auto___36039){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36040 = arguments.length;
var i__28433__auto___36041 = (0);
while(true){
if((i__28433__auto___36041 < len__28432__auto___36040)){
args__28439__auto__.push((arguments[i__28433__auto___36041]));

var G__36042 = (i__28433__auto___36041 + (1));
i__28433__auto___36041 = G__36042;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36039))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36039){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36039);
});})(g__28538__auto___36039))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__28538__auto___36039){
return (function (seq35964){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35964));
});})(g__28538__auto___36039))
;


var g__28538__auto___36043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__28538__auto___36043){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36044 = arguments.length;
var i__28433__auto___36045 = (0);
while(true){
if((i__28433__auto___36045 < len__28432__auto___36044)){
args__28439__auto__.push((arguments[i__28433__auto___36045]));

var G__36046 = (i__28433__auto___36045 + (1));
i__28433__auto___36045 = G__36046;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36043))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36043){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36043);
});})(g__28538__auto___36043))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__28538__auto___36043){
return (function (seq35965){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35965));
});})(g__28538__auto___36043))
;


var g__28538__auto___36047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__28538__auto___36047){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36048 = arguments.length;
var i__28433__auto___36049 = (0);
while(true){
if((i__28433__auto___36049 < len__28432__auto___36048)){
args__28439__auto__.push((arguments[i__28433__auto___36049]));

var G__36050 = (i__28433__auto___36049 + (1));
i__28433__auto___36049 = G__36050;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});})(g__28538__auto___36047))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28538__auto___36047){
return (function (args){
return cljs.core.deref.call(null,g__28538__auto___36047);
});})(g__28538__auto___36047))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__28538__auto___36047){
return (function (seq35966){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35966));
});})(g__28538__auto___36047))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36053 = arguments.length;
var i__28433__auto___36054 = (0);
while(true){
if((i__28433__auto___36054 < len__28432__auto___36053)){
args__28439__auto__.push((arguments[i__28433__auto___36054]));

var G__36055 = (i__28433__auto___36054 + (1));
i__28433__auto___36054 = G__36055;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36051_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36051_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36052){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36052));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36056_SHARP_){
return (new Date(p1__36056_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1511532879142
