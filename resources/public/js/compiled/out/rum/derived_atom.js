// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__32637 = opts;
var map__32637__$1 = ((((!((map__32637 == null)))?((((map__32637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32637):map__32637);
var ref = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__32639 = cljs.core.count.call(null,refs);
switch (G__32639) {
case (1):
var vec__32640 = refs;
var a = cljs.core.nth.call(null,vec__32640,(0),null);
return ((function (vec__32640,a,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__32640,a,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__32643 = refs;
var a = cljs.core.nth.call(null,vec__32643,(0),null);
var b = cljs.core.nth.call(null,vec__32643,(1),null);
return ((function (vec__32643,a,b,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__32643,a,b,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__32646 = refs;
var a = cljs.core.nth.call(null,vec__32646,(0),null);
var b = cljs.core.nth.call(null,vec__32646,(1),null);
var c = cljs.core.nth.call(null,vec__32646,(2),null);
return ((function (vec__32646,a,b,c,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__32646,a,b,c,G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__32639,map__32637,map__32637__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__32649 = ref;
cljs.core.reset_BANG_.call(null,G__32649,recalc.call(null));

return G__32649;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__32637,map__32637__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__32637,map__32637__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__32637,map__32637__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__32637,map__32637__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__32650_32656 = cljs.core.seq.call(null,refs);
var chunk__32651_32657 = null;
var count__32652_32658 = (0);
var i__32653_32659 = (0);
while(true){
if((i__32653_32659 < count__32652_32658)){
var ref_32660__$1 = cljs.core._nth.call(null,chunk__32651_32657,i__32653_32659);
cljs.core.add_watch.call(null,ref_32660__$1,key,watch);

var G__32661 = seq__32650_32656;
var G__32662 = chunk__32651_32657;
var G__32663 = count__32652_32658;
var G__32664 = (i__32653_32659 + (1));
seq__32650_32656 = G__32661;
chunk__32651_32657 = G__32662;
count__32652_32658 = G__32663;
i__32653_32659 = G__32664;
continue;
} else {
var temp__4657__auto___32665 = cljs.core.seq.call(null,seq__32650_32656);
if(temp__4657__auto___32665){
var seq__32650_32666__$1 = temp__4657__auto___32665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32650_32666__$1)){
var c__28100__auto___32667 = cljs.core.chunk_first.call(null,seq__32650_32666__$1);
var G__32668 = cljs.core.chunk_rest.call(null,seq__32650_32666__$1);
var G__32669 = c__28100__auto___32667;
var G__32670 = cljs.core.count.call(null,c__28100__auto___32667);
var G__32671 = (0);
seq__32650_32656 = G__32668;
chunk__32651_32657 = G__32669;
count__32652_32658 = G__32670;
i__32653_32659 = G__32671;
continue;
} else {
var ref_32672__$1 = cljs.core.first.call(null,seq__32650_32666__$1);
cljs.core.add_watch.call(null,ref_32672__$1,key,watch);

var G__32673 = cljs.core.next.call(null,seq__32650_32666__$1);
var G__32674 = null;
var G__32675 = (0);
var G__32676 = (0);
seq__32650_32656 = G__32673;
chunk__32651_32657 = G__32674;
count__32652_32658 = G__32675;
i__32653_32659 = G__32676;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1511532873700
