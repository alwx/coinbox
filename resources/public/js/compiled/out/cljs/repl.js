// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36636){
var map__36637 = p__36636;
var map__36637__$1 = ((((!((map__36637 == null)))?((((map__36637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36637):map__36637);
var m = map__36637__$1;
var n = cljs.core.get.call(null,map__36637__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36639_36661 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36640_36662 = null;
var count__36641_36663 = (0);
var i__36642_36664 = (0);
while(true){
if((i__36642_36664 < count__36641_36663)){
var f_36665 = cljs.core._nth.call(null,chunk__36640_36662,i__36642_36664);
cljs.core.println.call(null,"  ",f_36665);

var G__36666 = seq__36639_36661;
var G__36667 = chunk__36640_36662;
var G__36668 = count__36641_36663;
var G__36669 = (i__36642_36664 + (1));
seq__36639_36661 = G__36666;
chunk__36640_36662 = G__36667;
count__36641_36663 = G__36668;
i__36642_36664 = G__36669;
continue;
} else {
var temp__4657__auto___36670 = cljs.core.seq.call(null,seq__36639_36661);
if(temp__4657__auto___36670){
var seq__36639_36671__$1 = temp__4657__auto___36670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36639_36671__$1)){
var c__28100__auto___36672 = cljs.core.chunk_first.call(null,seq__36639_36671__$1);
var G__36673 = cljs.core.chunk_rest.call(null,seq__36639_36671__$1);
var G__36674 = c__28100__auto___36672;
var G__36675 = cljs.core.count.call(null,c__28100__auto___36672);
var G__36676 = (0);
seq__36639_36661 = G__36673;
chunk__36640_36662 = G__36674;
count__36641_36663 = G__36675;
i__36642_36664 = G__36676;
continue;
} else {
var f_36677 = cljs.core.first.call(null,seq__36639_36671__$1);
cljs.core.println.call(null,"  ",f_36677);

var G__36678 = cljs.core.next.call(null,seq__36639_36671__$1);
var G__36679 = null;
var G__36680 = (0);
var G__36681 = (0);
seq__36639_36661 = G__36678;
chunk__36640_36662 = G__36679;
count__36641_36663 = G__36680;
i__36642_36664 = G__36681;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36682 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27261__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36682);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36682)))?cljs.core.second.call(null,arglists_36682):arglists_36682));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36643_36683 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36644_36684 = null;
var count__36645_36685 = (0);
var i__36646_36686 = (0);
while(true){
if((i__36646_36686 < count__36645_36685)){
var vec__36647_36687 = cljs.core._nth.call(null,chunk__36644_36684,i__36646_36686);
var name_36688 = cljs.core.nth.call(null,vec__36647_36687,(0),null);
var map__36650_36689 = cljs.core.nth.call(null,vec__36647_36687,(1),null);
var map__36650_36690__$1 = ((((!((map__36650_36689 == null)))?((((map__36650_36689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650_36689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36650_36689):map__36650_36689);
var doc_36691 = cljs.core.get.call(null,map__36650_36690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36692 = cljs.core.get.call(null,map__36650_36690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36688);

cljs.core.println.call(null," ",arglists_36692);

if(cljs.core.truth_(doc_36691)){
cljs.core.println.call(null," ",doc_36691);
} else {
}

var G__36693 = seq__36643_36683;
var G__36694 = chunk__36644_36684;
var G__36695 = count__36645_36685;
var G__36696 = (i__36646_36686 + (1));
seq__36643_36683 = G__36693;
chunk__36644_36684 = G__36694;
count__36645_36685 = G__36695;
i__36646_36686 = G__36696;
continue;
} else {
var temp__4657__auto___36697 = cljs.core.seq.call(null,seq__36643_36683);
if(temp__4657__auto___36697){
var seq__36643_36698__$1 = temp__4657__auto___36697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36643_36698__$1)){
var c__28100__auto___36699 = cljs.core.chunk_first.call(null,seq__36643_36698__$1);
var G__36700 = cljs.core.chunk_rest.call(null,seq__36643_36698__$1);
var G__36701 = c__28100__auto___36699;
var G__36702 = cljs.core.count.call(null,c__28100__auto___36699);
var G__36703 = (0);
seq__36643_36683 = G__36700;
chunk__36644_36684 = G__36701;
count__36645_36685 = G__36702;
i__36646_36686 = G__36703;
continue;
} else {
var vec__36652_36704 = cljs.core.first.call(null,seq__36643_36698__$1);
var name_36705 = cljs.core.nth.call(null,vec__36652_36704,(0),null);
var map__36655_36706 = cljs.core.nth.call(null,vec__36652_36704,(1),null);
var map__36655_36707__$1 = ((((!((map__36655_36706 == null)))?((((map__36655_36706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36655_36706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36655_36706):map__36655_36706);
var doc_36708 = cljs.core.get.call(null,map__36655_36707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36709 = cljs.core.get.call(null,map__36655_36707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36705);

cljs.core.println.call(null," ",arglists_36709);

if(cljs.core.truth_(doc_36708)){
cljs.core.println.call(null," ",doc_36708);
} else {
}

var G__36710 = cljs.core.next.call(null,seq__36643_36698__$1);
var G__36711 = null;
var G__36712 = (0);
var G__36713 = (0);
seq__36643_36683 = G__36710;
chunk__36644_36684 = G__36711;
count__36645_36685 = G__36712;
i__36646_36686 = G__36713;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36657 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36658 = null;
var count__36659 = (0);
var i__36660 = (0);
while(true){
if((i__36660 < count__36659)){
var role = cljs.core._nth.call(null,chunk__36658,i__36660);
var temp__4657__auto___36714__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36714__$1)){
var spec_36715 = temp__4657__auto___36714__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36715));
} else {
}

var G__36716 = seq__36657;
var G__36717 = chunk__36658;
var G__36718 = count__36659;
var G__36719 = (i__36660 + (1));
seq__36657 = G__36716;
chunk__36658 = G__36717;
count__36659 = G__36718;
i__36660 = G__36719;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36657);
if(temp__4657__auto____$1){
var seq__36657__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36657__$1)){
var c__28100__auto__ = cljs.core.chunk_first.call(null,seq__36657__$1);
var G__36720 = cljs.core.chunk_rest.call(null,seq__36657__$1);
var G__36721 = c__28100__auto__;
var G__36722 = cljs.core.count.call(null,c__28100__auto__);
var G__36723 = (0);
seq__36657 = G__36720;
chunk__36658 = G__36721;
count__36659 = G__36722;
i__36660 = G__36723;
continue;
} else {
var role = cljs.core.first.call(null,seq__36657__$1);
var temp__4657__auto___36724__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36724__$2)){
var spec_36725 = temp__4657__auto___36724__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36725));
} else {
}

var G__36726 = cljs.core.next.call(null,seq__36657__$1);
var G__36727 = null;
var G__36728 = (0);
var G__36729 = (0);
seq__36657 = G__36726;
chunk__36658 = G__36727;
count__36659 = G__36728;
i__36660 = G__36729;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511532880511
