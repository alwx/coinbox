// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966 = (function (val,meta28967){
this.val = val;
this.meta28967 = meta28967;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28968,meta28967__$1){
var self__ = this;
var _28968__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966(self__.val,meta28967__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28968){
var self__ = this;
var _28968__$1 = this;
return self__.meta28967;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta28967","meta28967",-380511959,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28966";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28966");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels28966 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels28966(val__$1,meta28967){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966(val__$1,meta28967));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28966(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__27944__auto__ = (((this$ == null))?null:this$);
var m__27945__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,this$);
} else {
var m__27945__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_28980 = self__.puts.pop();
if((putter_28980 == null)){
} else {
var put_handler_28981 = putter_28980.handler;
var val_28982 = putter_28980.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28981)){
var put_cb_28983 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28981);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28983,put_handler_28981,val_28982,putter_28980,this$__$1){
return (function (){
return put_cb_28983.call(null,true);
});})(put_cb_28983,put_handler_28981,val_28982,putter_28980,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__27249__auto__ = self__.buf;
if(cljs.core.truth_(and__27249__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__27249__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__28984 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__28984;
continue;
} else {
var G__28985 = takers;
takers = G__28985;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__28969_28986 = cljs.core.seq.call(null,take_cbs);
var chunk__28970_28987 = null;
var count__28971_28988 = (0);
var i__28972_28989 = (0);
while(true){
if((i__28972_28989 < count__28971_28988)){
var f_28990 = cljs.core._nth.call(null,chunk__28970_28987,i__28972_28989);
cljs.core.async.impl.dispatch.run.call(null,f_28990);

var G__28991 = seq__28969_28986;
var G__28992 = chunk__28970_28987;
var G__28993 = count__28971_28988;
var G__28994 = (i__28972_28989 + (1));
seq__28969_28986 = G__28991;
chunk__28970_28987 = G__28992;
count__28971_28988 = G__28993;
i__28972_28989 = G__28994;
continue;
} else {
var temp__4657__auto___28995 = cljs.core.seq.call(null,seq__28969_28986);
if(temp__4657__auto___28995){
var seq__28969_28996__$1 = temp__4657__auto___28995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28969_28996__$1)){
var c__28100__auto___28997 = cljs.core.chunk_first.call(null,seq__28969_28996__$1);
var G__28998 = cljs.core.chunk_rest.call(null,seq__28969_28996__$1);
var G__28999 = c__28100__auto___28997;
var G__29000 = cljs.core.count.call(null,c__28100__auto___28997);
var G__29001 = (0);
seq__28969_28986 = G__28998;
chunk__28970_28987 = G__28999;
count__28971_28988 = G__29000;
i__28972_28989 = G__29001;
continue;
} else {
var f_29002 = cljs.core.first.call(null,seq__28969_28996__$1);
cljs.core.async.impl.dispatch.run.call(null,f_29002);

var G__29003 = cljs.core.next.call(null,seq__28969_28996__$1);
var G__29004 = null;
var G__29005 = (0);
var G__29006 = (0);
seq__28969_28986 = G__29003;
chunk__28970_28987 = G__29004;
count__28971_28988 = G__29005;
i__28972_28989 = G__29006;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__28973 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__27249__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__27249__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__27249__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__29007 = cbs__$1;
cbs = G__29007;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__28973,(0),null);
var cbs = cljs.core.nth.call(null,vec__28973,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__28976_29008 = cljs.core.seq.call(null,cbs);
var chunk__28977_29009 = null;
var count__28978_29010 = (0);
var i__28979_29011 = (0);
while(true){
if((i__28979_29011 < count__28978_29010)){
var cb_29012 = cljs.core._nth.call(null,chunk__28977_29009,i__28979_29011);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28976_29008,chunk__28977_29009,count__28978_29010,i__28979_29011,cb_29012,val,vec__28973,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_29012.call(null,true);
});})(seq__28976_29008,chunk__28977_29009,count__28978_29010,i__28979_29011,cb_29012,val,vec__28973,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__29013 = seq__28976_29008;
var G__29014 = chunk__28977_29009;
var G__29015 = count__28978_29010;
var G__29016 = (i__28979_29011 + (1));
seq__28976_29008 = G__29013;
chunk__28977_29009 = G__29014;
count__28978_29010 = G__29015;
i__28979_29011 = G__29016;
continue;
} else {
var temp__4657__auto___29017 = cljs.core.seq.call(null,seq__28976_29008);
if(temp__4657__auto___29017){
var seq__28976_29018__$1 = temp__4657__auto___29017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28976_29018__$1)){
var c__28100__auto___29019 = cljs.core.chunk_first.call(null,seq__28976_29018__$1);
var G__29020 = cljs.core.chunk_rest.call(null,seq__28976_29018__$1);
var G__29021 = c__28100__auto___29019;
var G__29022 = cljs.core.count.call(null,c__28100__auto___29019);
var G__29023 = (0);
seq__28976_29008 = G__29020;
chunk__28977_29009 = G__29021;
count__28978_29010 = G__29022;
i__28979_29011 = G__29023;
continue;
} else {
var cb_29024 = cljs.core.first.call(null,seq__28976_29018__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28976_29008,chunk__28977_29009,count__28978_29010,i__28979_29011,cb_29024,seq__28976_29018__$1,temp__4657__auto___29017,val,vec__28973,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_29024.call(null,true);
});})(seq__28976_29008,chunk__28977_29009,count__28978_29010,i__28979_29011,cb_29024,seq__28976_29018__$1,temp__4657__auto___29017,val,vec__28973,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__29025 = cljs.core.next.call(null,seq__28976_29018__$1);
var G__29026 = null;
var G__29027 = (0);
var G__29028 = (0);
seq__28976_29008 = G__29025;
chunk__28977_29009 = G__29026;
count__28978_29010 = G__29027;
i__28979_29011 = G__29028;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__27249__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__27249__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__27249__auto__;
}
})())){
var has_val = (function (){var and__27249__auto__ = self__.buf;
if(cljs.core.truth_(and__27249__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__27249__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__27249__auto__ = self__.buf;
if(cljs.core.truth_(and__27249__auto__)){
return (self__.puts.length === (0));
} else {
return and__27249__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_29029 = self__.takes.pop();
if((taker_29029 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29029)){
var take_cb_29030 = cljs.core.async.impl.protocols.commit.call(null,taker_29029);
var val_29031 = (cljs.core.truth_((function (){var and__27249__auto__ = self__.buf;
if(cljs.core.truth_(and__27249__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__27249__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29030,val_29031,taker_29029,this$__$1){
return (function (){
return take_cb_29030.call(null,val_29031);
});})(take_cb_29030,val_29031,taker_29029,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__27261__auto__ = exh;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__29033 = arguments.length;
switch (G__29033) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__29037 = null;
var G__29037__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e29034){var t = e29034;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__29037__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e29035){var t = e29035;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__29037 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__29037__1.call(this,buf__$1);
case 2:
return G__29037__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29037.cljs$core$IFn$_invoke$arity$1 = G__29037__1;
G__29037.cljs$core$IFn$_invoke$arity$2 = G__29037__2;
return G__29037;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1511532868962
