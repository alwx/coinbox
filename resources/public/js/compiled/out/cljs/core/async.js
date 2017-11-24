// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30686 = (function (f,blockable,meta30687){
this.f = f;
this.blockable = blockable;
this.meta30687 = meta30687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30688,meta30687__$1){
var self__ = this;
var _30688__$1 = this;
return (new cljs.core.async.t_cljs$core$async30686(self__.f,self__.blockable,meta30687__$1));
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30688){
var self__ = this;
var _30688__$1 = this;
return self__.meta30687;
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30687","meta30687",317189570,null)], null);
});

cljs.core.async.t_cljs$core$async30686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30686";

cljs.core.async.t_cljs$core$async30686.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async30686");
});

cljs.core.async.__GT_t_cljs$core$async30686 = (function cljs$core$async$__GT_t_cljs$core$async30686(f__$1,blockable__$1,meta30687){
return (new cljs.core.async.t_cljs$core$async30686(f__$1,blockable__$1,meta30687));
});

}

return (new cljs.core.async.t_cljs$core$async30686(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30692 = arguments.length;
switch (G__30692) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30695 = arguments.length;
switch (G__30695) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30698 = arguments.length;
switch (G__30698) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30700 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30700);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30700,ret){
return (function (){
return fn1.call(null,val_30700);
});})(val_30700,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30702 = arguments.length;
switch (G__30702) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28208__auto___30704 = n;
var x_30705 = (0);
while(true){
if((x_30705 < n__28208__auto___30704)){
(a[x_30705] = (0));

var G__30706 = (x_30705 + (1));
x_30705 = G__30706;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30707 = (i + (1));
i = G__30707;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30708 = (function (flag,meta30709){
this.flag = flag;
this.meta30709 = meta30709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30710,meta30709__$1){
var self__ = this;
var _30710__$1 = this;
return (new cljs.core.async.t_cljs$core$async30708(self__.flag,meta30709__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30710){
var self__ = this;
var _30710__$1 = this;
return self__.meta30709;
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30709","meta30709",-1406008997,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30708";

cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async30708");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30708 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30708(flag__$1,meta30709){
return (new cljs.core.async.t_cljs$core$async30708(flag__$1,meta30709));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30708(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30711 = (function (flag,cb,meta30712){
this.flag = flag;
this.cb = cb;
this.meta30712 = meta30712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30713,meta30712__$1){
var self__ = this;
var _30713__$1 = this;
return (new cljs.core.async.t_cljs$core$async30711(self__.flag,self__.cb,meta30712__$1));
});

cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30713){
var self__ = this;
var _30713__$1 = this;
return self__.meta30712;
});

cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30712","meta30712",2020837769,null)], null);
});

cljs.core.async.t_cljs$core$async30711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30711";

cljs.core.async.t_cljs$core$async30711.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async30711");
});

cljs.core.async.__GT_t_cljs$core$async30711 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30711(flag__$1,cb__$1,meta30712){
return (new cljs.core.async.t_cljs$core$async30711(flag__$1,cb__$1,meta30712));
});

}

return (new cljs.core.async.t_cljs$core$async30711(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30714_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30714_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30715_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30715_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27261__auto__ = wport;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30716 = (i + (1));
i = G__30716;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27261__auto__ = ret;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27249__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27249__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27249__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28439__auto__ = [];
var len__28432__auto___30722 = arguments.length;
var i__28433__auto___30723 = (0);
while(true){
if((i__28433__auto___30723 < len__28432__auto___30722)){
args__28439__auto__.push((arguments[i__28433__auto___30723]));

var G__30724 = (i__28433__auto___30723 + (1));
i__28433__auto___30723 = G__30724;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30719){
var map__30720 = p__30719;
var map__30720__$1 = ((((!((map__30720 == null)))?((((map__30720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30720):map__30720);
var opts = map__30720__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30717){
var G__30718 = cljs.core.first.call(null,seq30717);
var seq30717__$1 = cljs.core.next.call(null,seq30717);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30718,seq30717__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30726 = arguments.length;
switch (G__30726) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30639__auto___30772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___30772){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___30772){
return (function (state_30750){
var state_val_30751 = (state_30750[(1)]);
if((state_val_30751 === (7))){
var inst_30746 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30752_30773 = state_30750__$1;
(statearr_30752_30773[(2)] = inst_30746);

(statearr_30752_30773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (1))){
var state_30750__$1 = state_30750;
var statearr_30753_30774 = state_30750__$1;
(statearr_30753_30774[(2)] = null);

(statearr_30753_30774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (4))){
var inst_30729 = (state_30750[(7)]);
var inst_30729__$1 = (state_30750[(2)]);
var inst_30730 = (inst_30729__$1 == null);
var state_30750__$1 = (function (){var statearr_30754 = state_30750;
(statearr_30754[(7)] = inst_30729__$1);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30755_30775 = state_30750__$1;
(statearr_30755_30775[(1)] = (5));

} else {
var statearr_30756_30776 = state_30750__$1;
(statearr_30756_30776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (13))){
var state_30750__$1 = state_30750;
var statearr_30757_30777 = state_30750__$1;
(statearr_30757_30777[(2)] = null);

(statearr_30757_30777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (6))){
var inst_30729 = (state_30750[(7)]);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30750__$1,(11),to,inst_30729);
} else {
if((state_val_30751 === (3))){
var inst_30748 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30750__$1,inst_30748);
} else {
if((state_val_30751 === (12))){
var state_30750__$1 = state_30750;
var statearr_30758_30778 = state_30750__$1;
(statearr_30758_30778[(2)] = null);

(statearr_30758_30778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (2))){
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30750__$1,(4),from);
} else {
if((state_val_30751 === (11))){
var inst_30739 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
if(cljs.core.truth_(inst_30739)){
var statearr_30759_30779 = state_30750__$1;
(statearr_30759_30779[(1)] = (12));

} else {
var statearr_30760_30780 = state_30750__$1;
(statearr_30760_30780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (9))){
var state_30750__$1 = state_30750;
var statearr_30761_30781 = state_30750__$1;
(statearr_30761_30781[(2)] = null);

(statearr_30761_30781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (5))){
var state_30750__$1 = state_30750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30762_30782 = state_30750__$1;
(statearr_30762_30782[(1)] = (8));

} else {
var statearr_30763_30783 = state_30750__$1;
(statearr_30763_30783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (14))){
var inst_30744 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30764_30784 = state_30750__$1;
(statearr_30764_30784[(2)] = inst_30744);

(statearr_30764_30784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (10))){
var inst_30736 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30765_30785 = state_30750__$1;
(statearr_30765_30785[(2)] = inst_30736);

(statearr_30765_30785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (8))){
var inst_30733 = cljs.core.async.close_BANG_.call(null,to);
var state_30750__$1 = state_30750;
var statearr_30766_30786 = state_30750__$1;
(statearr_30766_30786[(2)] = inst_30733);

(statearr_30766_30786[(1)] = (10));


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
});})(c__30639__auto___30772))
;
return ((function (switch__30551__auto__,c__30639__auto___30772){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_30767 = [null,null,null,null,null,null,null,null];
(statearr_30767[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_30767[(1)] = (1));

return statearr_30767;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_30750){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30768){if((e30768 instanceof Object)){
var ex__30555__auto__ = e30768;
var statearr_30769_30787 = state_30750;
(statearr_30769_30787[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30788 = state_30750;
state_30750 = G__30788;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_30750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_30750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___30772))
})();
var state__30641__auto__ = (function (){var statearr_30770 = f__30640__auto__.call(null);
(statearr_30770[(6)] = c__30639__auto___30772);

return statearr_30770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___30772))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30789){
var vec__30790 = p__30789;
var v = cljs.core.nth.call(null,vec__30790,(0),null);
var p = cljs.core.nth.call(null,vec__30790,(1),null);
var job = vec__30790;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30639__auto___30961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results){
return (function (state_30797){
var state_val_30798 = (state_30797[(1)]);
if((state_val_30798 === (1))){
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30797__$1,(2),res,v);
} else {
if((state_val_30798 === (2))){
var inst_30794 = (state_30797[(2)]);
var inst_30795 = cljs.core.async.close_BANG_.call(null,res);
var state_30797__$1 = (function (){var statearr_30799 = state_30797;
(statearr_30799[(7)] = inst_30794);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30797__$1,inst_30795);
} else {
return null;
}
}
});})(c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results))
;
return ((function (switch__30551__auto__,c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_30800 = [null,null,null,null,null,null,null,null];
(statearr_30800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__);

(statearr_30800[(1)] = (1));

return statearr_30800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1 = (function (state_30797){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30801){if((e30801 instanceof Object)){
var ex__30555__auto__ = e30801;
var statearr_30802_30962 = state_30797;
(statearr_30802_30962[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_30797;
state_30797 = G__30963;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = function(state_30797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1.call(this,state_30797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results))
})();
var state__30641__auto__ = (function (){var statearr_30803 = f__30640__auto__.call(null);
(statearr_30803[(6)] = c__30639__auto___30961);

return statearr_30803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___30961,res,vec__30790,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30804){
var vec__30805 = p__30804;
var v = cljs.core.nth.call(null,vec__30805,(0),null);
var p = cljs.core.nth.call(null,vec__30805,(1),null);
var job = vec__30805;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28208__auto___30964 = n;
var __30965 = (0);
while(true){
if((__30965 < n__28208__auto___30964)){
var G__30808_30966 = type;
var G__30808_30967__$1 = (((G__30808_30966 instanceof cljs.core.Keyword))?G__30808_30966.fqn:null);
switch (G__30808_30967__$1) {
case "compute":
var c__30639__auto___30969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30965,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (__30965,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
var statearr_30823_30970 = state_30821__$1;
(statearr_30823_30970[(2)] = null);

(statearr_30823_30970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (2))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(4),jobs);
} else {
if((state_val_30822 === (3))){
var inst_30819 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30821__$1,inst_30819);
} else {
if((state_val_30822 === (4))){
var inst_30811 = (state_30821[(2)]);
var inst_30812 = process.call(null,inst_30811);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30812)){
var statearr_30824_30971 = state_30821__$1;
(statearr_30824_30971[(1)] = (5));

} else {
var statearr_30825_30972 = state_30821__$1;
(statearr_30825_30972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var state_30821__$1 = state_30821;
var statearr_30826_30973 = state_30821__$1;
(statearr_30826_30973[(2)] = null);

(statearr_30826_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var state_30821__$1 = state_30821;
var statearr_30827_30974 = state_30821__$1;
(statearr_30827_30974[(2)] = null);

(statearr_30827_30974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (7))){
var inst_30817 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30828_30975 = state_30821__$1;
(statearr_30828_30975[(2)] = inst_30817);

(statearr_30828_30975[(1)] = (3));


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
});})(__30965,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
;
return ((function (__30965,switch__30551__auto__,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1 = (function (state_30821){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__30555__auto__ = e30830;
var statearr_30831_30976 = state_30821;
(statearr_30831_30976[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30977 = state_30821;
state_30821 = G__30977;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__;
})()
;})(__30965,switch__30551__auto__,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
})();
var state__30641__auto__ = (function (){var statearr_30832 = f__30640__auto__.call(null);
(statearr_30832[(6)] = c__30639__auto___30969);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(__30965,c__30639__auto___30969,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
);


break;
case "async":
var c__30639__auto___30978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30965,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (__30965,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (1))){
var state_30845__$1 = state_30845;
var statearr_30847_30979 = state_30845__$1;
(statearr_30847_30979[(2)] = null);

(statearr_30847_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (2))){
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(4),jobs);
} else {
if((state_val_30846 === (3))){
var inst_30843 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
if((state_val_30846 === (4))){
var inst_30835 = (state_30845[(2)]);
var inst_30836 = async.call(null,inst_30835);
var state_30845__$1 = state_30845;
if(cljs.core.truth_(inst_30836)){
var statearr_30848_30980 = state_30845__$1;
(statearr_30848_30980[(1)] = (5));

} else {
var statearr_30849_30981 = state_30845__$1;
(statearr_30849_30981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (5))){
var state_30845__$1 = state_30845;
var statearr_30850_30982 = state_30845__$1;
(statearr_30850_30982[(2)] = null);

(statearr_30850_30982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (6))){
var state_30845__$1 = state_30845;
var statearr_30851_30983 = state_30845__$1;
(statearr_30851_30983[(2)] = null);

(statearr_30851_30983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (7))){
var inst_30841 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30852_30984 = state_30845__$1;
(statearr_30852_30984[(2)] = inst_30841);

(statearr_30852_30984[(1)] = (3));


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
});})(__30965,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
;
return ((function (__30965,switch__30551__auto__,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null];
(statearr_30853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1 = (function (state_30845){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__30555__auto__ = e30854;
var statearr_30855_30985 = state_30845;
(statearr_30855_30985[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30986 = state_30845;
state_30845 = G__30986;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__;
})()
;})(__30965,switch__30551__auto__,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
})();
var state__30641__auto__ = (function (){var statearr_30856 = f__30640__auto__.call(null);
(statearr_30856[(6)] = c__30639__auto___30978);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(__30965,c__30639__auto___30978,G__30808_30966,G__30808_30967__$1,n__28208__auto___30964,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30808_30967__$1)].join('')));

}

var G__30987 = (__30965 + (1));
__30965 = G__30987;
continue;
} else {
}
break;
}

var c__30639__auto___30988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___30988,jobs,results,process,async){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___30988,jobs,results,process,async){
return (function (state_30878){
var state_val_30879 = (state_30878[(1)]);
if((state_val_30879 === (1))){
var state_30878__$1 = state_30878;
var statearr_30880_30989 = state_30878__$1;
(statearr_30880_30989[(2)] = null);

(statearr_30880_30989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (2))){
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30878__$1,(4),from);
} else {
if((state_val_30879 === (3))){
var inst_30876 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30878__$1,inst_30876);
} else {
if((state_val_30879 === (4))){
var inst_30859 = (state_30878[(7)]);
var inst_30859__$1 = (state_30878[(2)]);
var inst_30860 = (inst_30859__$1 == null);
var state_30878__$1 = (function (){var statearr_30881 = state_30878;
(statearr_30881[(7)] = inst_30859__$1);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30860)){
var statearr_30882_30990 = state_30878__$1;
(statearr_30882_30990[(1)] = (5));

} else {
var statearr_30883_30991 = state_30878__$1;
(statearr_30883_30991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (5))){
var inst_30862 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30878__$1 = state_30878;
var statearr_30884_30992 = state_30878__$1;
(statearr_30884_30992[(2)] = inst_30862);

(statearr_30884_30992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (6))){
var inst_30864 = (state_30878[(8)]);
var inst_30859 = (state_30878[(7)]);
var inst_30864__$1 = cljs.core.async.chan.call(null,(1));
var inst_30865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30866 = [inst_30859,inst_30864__$1];
var inst_30867 = (new cljs.core.PersistentVector(null,2,(5),inst_30865,inst_30866,null));
var state_30878__$1 = (function (){var statearr_30885 = state_30878;
(statearr_30885[(8)] = inst_30864__$1);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30878__$1,(8),jobs,inst_30867);
} else {
if((state_val_30879 === (7))){
var inst_30874 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30886_30993 = state_30878__$1;
(statearr_30886_30993[(2)] = inst_30874);

(statearr_30886_30993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (8))){
var inst_30864 = (state_30878[(8)]);
var inst_30869 = (state_30878[(2)]);
var state_30878__$1 = (function (){var statearr_30887 = state_30878;
(statearr_30887[(9)] = inst_30869);

return statearr_30887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30878__$1,(9),results,inst_30864);
} else {
if((state_val_30879 === (9))){
var inst_30871 = (state_30878[(2)]);
var state_30878__$1 = (function (){var statearr_30888 = state_30878;
(statearr_30888[(10)] = inst_30871);

return statearr_30888;
})();
var statearr_30889_30994 = state_30878__$1;
(statearr_30889_30994[(2)] = null);

(statearr_30889_30994[(1)] = (2));


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
});})(c__30639__auto___30988,jobs,results,process,async))
;
return ((function (switch__30551__auto__,c__30639__auto___30988,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1 = (function (state_30878){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30891){if((e30891 instanceof Object)){
var ex__30555__auto__ = e30891;
var statearr_30892_30995 = state_30878;
(statearr_30892_30995[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30996 = state_30878;
state_30878 = G__30996;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = function(state_30878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1.call(this,state_30878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___30988,jobs,results,process,async))
})();
var state__30641__auto__ = (function (){var statearr_30893 = f__30640__auto__.call(null);
(statearr_30893[(6)] = c__30639__auto___30988);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___30988,jobs,results,process,async))
);


var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__,jobs,results,process,async){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__,jobs,results,process,async){
return (function (state_30931){
var state_val_30932 = (state_30931[(1)]);
if((state_val_30932 === (7))){
var inst_30927 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30933_30997 = state_30931__$1;
(statearr_30933_30997[(2)] = inst_30927);

(statearr_30933_30997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (20))){
var state_30931__$1 = state_30931;
var statearr_30934_30998 = state_30931__$1;
(statearr_30934_30998[(2)] = null);

(statearr_30934_30998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (1))){
var state_30931__$1 = state_30931;
var statearr_30935_30999 = state_30931__$1;
(statearr_30935_30999[(2)] = null);

(statearr_30935_30999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (4))){
var inst_30896 = (state_30931[(7)]);
var inst_30896__$1 = (state_30931[(2)]);
var inst_30897 = (inst_30896__$1 == null);
var state_30931__$1 = (function (){var statearr_30936 = state_30931;
(statearr_30936[(7)] = inst_30896__$1);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30897)){
var statearr_30937_31000 = state_30931__$1;
(statearr_30937_31000[(1)] = (5));

} else {
var statearr_30938_31001 = state_30931__$1;
(statearr_30938_31001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (15))){
var inst_30909 = (state_30931[(8)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30931__$1,(18),to,inst_30909);
} else {
if((state_val_30932 === (21))){
var inst_30922 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30939_31002 = state_30931__$1;
(statearr_30939_31002[(2)] = inst_30922);

(statearr_30939_31002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (13))){
var inst_30924 = (state_30931[(2)]);
var state_30931__$1 = (function (){var statearr_30940 = state_30931;
(statearr_30940[(9)] = inst_30924);

return statearr_30940;
})();
var statearr_30941_31003 = state_30931__$1;
(statearr_30941_31003[(2)] = null);

(statearr_30941_31003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (6))){
var inst_30896 = (state_30931[(7)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(11),inst_30896);
} else {
if((state_val_30932 === (17))){
var inst_30917 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30917)){
var statearr_30942_31004 = state_30931__$1;
(statearr_30942_31004[(1)] = (19));

} else {
var statearr_30943_31005 = state_30931__$1;
(statearr_30943_31005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (3))){
var inst_30929 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30931__$1,inst_30929);
} else {
if((state_val_30932 === (12))){
var inst_30906 = (state_30931[(10)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(14),inst_30906);
} else {
if((state_val_30932 === (2))){
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(4),results);
} else {
if((state_val_30932 === (19))){
var state_30931__$1 = state_30931;
var statearr_30944_31006 = state_30931__$1;
(statearr_30944_31006[(2)] = null);

(statearr_30944_31006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (11))){
var inst_30906 = (state_30931[(2)]);
var state_30931__$1 = (function (){var statearr_30945 = state_30931;
(statearr_30945[(10)] = inst_30906);

return statearr_30945;
})();
var statearr_30946_31007 = state_30931__$1;
(statearr_30946_31007[(2)] = null);

(statearr_30946_31007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (9))){
var state_30931__$1 = state_30931;
var statearr_30947_31008 = state_30931__$1;
(statearr_30947_31008[(2)] = null);

(statearr_30947_31008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (5))){
var state_30931__$1 = state_30931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30948_31009 = state_30931__$1;
(statearr_30948_31009[(1)] = (8));

} else {
var statearr_30949_31010 = state_30931__$1;
(statearr_30949_31010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (14))){
var inst_30911 = (state_30931[(11)]);
var inst_30909 = (state_30931[(8)]);
var inst_30909__$1 = (state_30931[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var inst_30911__$1 = cljs.core.not.call(null,inst_30910);
var state_30931__$1 = (function (){var statearr_30950 = state_30931;
(statearr_30950[(11)] = inst_30911__$1);

(statearr_30950[(8)] = inst_30909__$1);

return statearr_30950;
})();
if(inst_30911__$1){
var statearr_30951_31011 = state_30931__$1;
(statearr_30951_31011[(1)] = (15));

} else {
var statearr_30952_31012 = state_30931__$1;
(statearr_30952_31012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (16))){
var inst_30911 = (state_30931[(11)]);
var state_30931__$1 = state_30931;
var statearr_30953_31013 = state_30931__$1;
(statearr_30953_31013[(2)] = inst_30911);

(statearr_30953_31013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (10))){
var inst_30903 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30954_31014 = state_30931__$1;
(statearr_30954_31014[(2)] = inst_30903);

(statearr_30954_31014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (18))){
var inst_30914 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30955_31015 = state_30931__$1;
(statearr_30955_31015[(2)] = inst_30914);

(statearr_30955_31015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (8))){
var inst_30900 = cljs.core.async.close_BANG_.call(null,to);
var state_30931__$1 = state_30931;
var statearr_30956_31016 = state_30931__$1;
(statearr_30956_31016[(2)] = inst_30900);

(statearr_30956_31016[(1)] = (10));


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
});})(c__30639__auto__,jobs,results,process,async))
;
return ((function (switch__30551__auto__,c__30639__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_30957 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__);

(statearr_30957[(1)] = (1));

return statearr_30957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1 = (function (state_30931){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_30931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e30958){if((e30958 instanceof Object)){
var ex__30555__auto__ = e30958;
var statearr_30959_31017 = state_30931;
(statearr_30959_31017[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31018 = state_30931;
state_30931 = G__31018;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__ = function(state_30931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1.call(this,state_30931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__,jobs,results,process,async))
})();
var state__30641__auto__ = (function (){var statearr_30960 = f__30640__auto__.call(null);
(statearr_30960[(6)] = c__30639__auto__);

return statearr_30960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__,jobs,results,process,async))
);

return c__30639__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31020 = arguments.length;
switch (G__31020) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31023 = arguments.length;
switch (G__31023) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31026 = arguments.length;
switch (G__31026) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30639__auto___31075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___31075,tc,fc){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___31075,tc,fc){
return (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31054_31076 = state_31052__$1;
(statearr_31054_31076[(2)] = inst_31048);

(statearr_31054_31076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31055_31077 = state_31052__$1;
(statearr_31055_31077[(2)] = null);

(statearr_31055_31077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31029 = (state_31052[(7)]);
var inst_31029__$1 = (state_31052[(2)]);
var inst_31030 = (inst_31029__$1 == null);
var state_31052__$1 = (function (){var statearr_31056 = state_31052;
(statearr_31056[(7)] = inst_31029__$1);

return statearr_31056;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31057_31078 = state_31052__$1;
(statearr_31057_31078[(1)] = (5));

} else {
var statearr_31058_31079 = state_31052__$1;
(statearr_31058_31079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (13))){
var state_31052__$1 = state_31052;
var statearr_31059_31080 = state_31052__$1;
(statearr_31059_31080[(2)] = null);

(statearr_31059_31080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var inst_31029 = (state_31052[(7)]);
var inst_31035 = p.call(null,inst_31029);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31035)){
var statearr_31060_31081 = state_31052__$1;
(statearr_31060_31081[(1)] = (9));

} else {
var statearr_31061_31082 = state_31052__$1;
(statearr_31061_31082[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (12))){
var state_31052__$1 = state_31052;
var statearr_31062_31083 = state_31052__$1;
(statearr_31062_31083[(2)] = null);

(statearr_31062_31083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(4),ch);
} else {
if((state_val_31053 === (11))){
var inst_31029 = (state_31052[(7)]);
var inst_31039 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31052__$1,(8),inst_31039,inst_31029);
} else {
if((state_val_31053 === (9))){
var state_31052__$1 = state_31052;
var statearr_31063_31084 = state_31052__$1;
(statearr_31063_31084[(2)] = tc);

(statearr_31063_31084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var inst_31032 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31033 = cljs.core.async.close_BANG_.call(null,fc);
var state_31052__$1 = (function (){var statearr_31064 = state_31052;
(statearr_31064[(8)] = inst_31032);

return statearr_31064;
})();
var statearr_31065_31085 = state_31052__$1;
(statearr_31065_31085[(2)] = inst_31033);

(statearr_31065_31085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (14))){
var inst_31046 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31066_31086 = state_31052__$1;
(statearr_31066_31086[(2)] = inst_31046);

(statearr_31066_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (10))){
var state_31052__$1 = state_31052;
var statearr_31067_31087 = state_31052__$1;
(statearr_31067_31087[(2)] = fc);

(statearr_31067_31087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_31041 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31041)){
var statearr_31068_31088 = state_31052__$1;
(statearr_31068_31088[(1)] = (12));

} else {
var statearr_31069_31089 = state_31052__$1;
(statearr_31069_31089[(1)] = (13));

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
});})(c__30639__auto___31075,tc,fc))
;
return ((function (switch__30551__auto__,c__30639__auto___31075,tc,fc){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_31070 = [null,null,null,null,null,null,null,null,null];
(statearr_31070[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_31070[(1)] = (1));

return statearr_31070;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_31052){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31071){if((e31071 instanceof Object)){
var ex__30555__auto__ = e31071;
var statearr_31072_31090 = state_31052;
(statearr_31072_31090[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31091 = state_31052;
state_31052 = G__31091;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___31075,tc,fc))
})();
var state__30641__auto__ = (function (){var statearr_31073 = f__30640__auto__.call(null);
(statearr_31073[(6)] = c__30639__auto___31075);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___31075,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_31112){
var state_val_31113 = (state_31112[(1)]);
if((state_val_31113 === (7))){
var inst_31108 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31114_31132 = state_31112__$1;
(statearr_31114_31132[(2)] = inst_31108);

(statearr_31114_31132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (1))){
var inst_31092 = init;
var state_31112__$1 = (function (){var statearr_31115 = state_31112;
(statearr_31115[(7)] = inst_31092);

return statearr_31115;
})();
var statearr_31116_31133 = state_31112__$1;
(statearr_31116_31133[(2)] = null);

(statearr_31116_31133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (4))){
var inst_31095 = (state_31112[(8)]);
var inst_31095__$1 = (state_31112[(2)]);
var inst_31096 = (inst_31095__$1 == null);
var state_31112__$1 = (function (){var statearr_31117 = state_31112;
(statearr_31117[(8)] = inst_31095__$1);

return statearr_31117;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31118_31134 = state_31112__$1;
(statearr_31118_31134[(1)] = (5));

} else {
var statearr_31119_31135 = state_31112__$1;
(statearr_31119_31135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (6))){
var inst_31092 = (state_31112[(7)]);
var inst_31095 = (state_31112[(8)]);
var inst_31099 = (state_31112[(9)]);
var inst_31099__$1 = f.call(null,inst_31092,inst_31095);
var inst_31100 = cljs.core.reduced_QMARK_.call(null,inst_31099__$1);
var state_31112__$1 = (function (){var statearr_31120 = state_31112;
(statearr_31120[(9)] = inst_31099__$1);

return statearr_31120;
})();
if(inst_31100){
var statearr_31121_31136 = state_31112__$1;
(statearr_31121_31136[(1)] = (8));

} else {
var statearr_31122_31137 = state_31112__$1;
(statearr_31122_31137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (3))){
var inst_31110 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31112__$1,inst_31110);
} else {
if((state_val_31113 === (2))){
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31112__$1,(4),ch);
} else {
if((state_val_31113 === (9))){
var inst_31099 = (state_31112[(9)]);
var inst_31092 = inst_31099;
var state_31112__$1 = (function (){var statearr_31123 = state_31112;
(statearr_31123[(7)] = inst_31092);

return statearr_31123;
})();
var statearr_31124_31138 = state_31112__$1;
(statearr_31124_31138[(2)] = null);

(statearr_31124_31138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (5))){
var inst_31092 = (state_31112[(7)]);
var state_31112__$1 = state_31112;
var statearr_31125_31139 = state_31112__$1;
(statearr_31125_31139[(2)] = inst_31092);

(statearr_31125_31139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (10))){
var inst_31106 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31126_31140 = state_31112__$1;
(statearr_31126_31140[(2)] = inst_31106);

(statearr_31126_31140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (8))){
var inst_31099 = (state_31112[(9)]);
var inst_31102 = cljs.core.deref.call(null,inst_31099);
var state_31112__$1 = state_31112;
var statearr_31127_31141 = state_31112__$1;
(statearr_31127_31141[(2)] = inst_31102);

(statearr_31127_31141[(1)] = (10));


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
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30552__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30552__auto____0 = (function (){
var statearr_31128 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31128[(0)] = cljs$core$async$reduce_$_state_machine__30552__auto__);

(statearr_31128[(1)] = (1));

return statearr_31128;
});
var cljs$core$async$reduce_$_state_machine__30552__auto____1 = (function (state_31112){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31129){if((e31129 instanceof Object)){
var ex__30555__auto__ = e31129;
var statearr_31130_31142 = state_31112;
(statearr_31130_31142[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31143 = state_31112;
state_31112 = G__31143;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30552__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30552__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30552__auto____0;
cljs$core$async$reduce_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30552__auto____1;
return cljs$core$async$reduce_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_31131 = f__30640__auto__.call(null);
(statearr_31131[(6)] = c__30639__auto__);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__,f__$1){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__,f__$1){
return (function (state_31149){
var state_val_31150 = (state_31149[(1)]);
if((state_val_31150 === (1))){
var inst_31144 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31149__$1,(2),inst_31144);
} else {
if((state_val_31150 === (2))){
var inst_31146 = (state_31149[(2)]);
var inst_31147 = f__$1.call(null,inst_31146);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31149__$1,inst_31147);
} else {
return null;
}
}
});})(c__30639__auto__,f__$1))
;
return ((function (switch__30551__auto__,c__30639__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30552__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30552__auto____0 = (function (){
var statearr_31151 = [null,null,null,null,null,null,null];
(statearr_31151[(0)] = cljs$core$async$transduce_$_state_machine__30552__auto__);

(statearr_31151[(1)] = (1));

return statearr_31151;
});
var cljs$core$async$transduce_$_state_machine__30552__auto____1 = (function (state_31149){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31152){if((e31152 instanceof Object)){
var ex__30555__auto__ = e31152;
var statearr_31153_31155 = state_31149;
(statearr_31153_31155[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31156 = state_31149;
state_31149 = G__31156;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30552__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30552__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30552__auto____0;
cljs$core$async$transduce_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30552__auto____1;
return cljs$core$async$transduce_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__,f__$1))
})();
var state__30641__auto__ = (function (){var statearr_31154 = f__30640__auto__.call(null);
(statearr_31154[(6)] = c__30639__auto__);

return statearr_31154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__,f__$1))
);

return c__30639__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31158 = arguments.length;
switch (G__31158) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_31183){
var state_val_31184 = (state_31183[(1)]);
if((state_val_31184 === (7))){
var inst_31165 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31185_31206 = state_31183__$1;
(statearr_31185_31206[(2)] = inst_31165);

(statearr_31185_31206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (1))){
var inst_31159 = cljs.core.seq.call(null,coll);
var inst_31160 = inst_31159;
var state_31183__$1 = (function (){var statearr_31186 = state_31183;
(statearr_31186[(7)] = inst_31160);

return statearr_31186;
})();
var statearr_31187_31207 = state_31183__$1;
(statearr_31187_31207[(2)] = null);

(statearr_31187_31207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (4))){
var inst_31160 = (state_31183[(7)]);
var inst_31163 = cljs.core.first.call(null,inst_31160);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31183__$1,(7),ch,inst_31163);
} else {
if((state_val_31184 === (13))){
var inst_31177 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31188_31208 = state_31183__$1;
(statearr_31188_31208[(2)] = inst_31177);

(statearr_31188_31208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (6))){
var inst_31168 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
if(cljs.core.truth_(inst_31168)){
var statearr_31189_31209 = state_31183__$1;
(statearr_31189_31209[(1)] = (8));

} else {
var statearr_31190_31210 = state_31183__$1;
(statearr_31190_31210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (3))){
var inst_31181 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31183__$1,inst_31181);
} else {
if((state_val_31184 === (12))){
var state_31183__$1 = state_31183;
var statearr_31191_31211 = state_31183__$1;
(statearr_31191_31211[(2)] = null);

(statearr_31191_31211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (2))){
var inst_31160 = (state_31183[(7)]);
var state_31183__$1 = state_31183;
if(cljs.core.truth_(inst_31160)){
var statearr_31192_31212 = state_31183__$1;
(statearr_31192_31212[(1)] = (4));

} else {
var statearr_31193_31213 = state_31183__$1;
(statearr_31193_31213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (11))){
var inst_31174 = cljs.core.async.close_BANG_.call(null,ch);
var state_31183__$1 = state_31183;
var statearr_31194_31214 = state_31183__$1;
(statearr_31194_31214[(2)] = inst_31174);

(statearr_31194_31214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (9))){
var state_31183__$1 = state_31183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31195_31215 = state_31183__$1;
(statearr_31195_31215[(1)] = (11));

} else {
var statearr_31196_31216 = state_31183__$1;
(statearr_31196_31216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (5))){
var inst_31160 = (state_31183[(7)]);
var state_31183__$1 = state_31183;
var statearr_31197_31217 = state_31183__$1;
(statearr_31197_31217[(2)] = inst_31160);

(statearr_31197_31217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (10))){
var inst_31179 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31198_31218 = state_31183__$1;
(statearr_31198_31218[(2)] = inst_31179);

(statearr_31198_31218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (8))){
var inst_31160 = (state_31183[(7)]);
var inst_31170 = cljs.core.next.call(null,inst_31160);
var inst_31160__$1 = inst_31170;
var state_31183__$1 = (function (){var statearr_31199 = state_31183;
(statearr_31199[(7)] = inst_31160__$1);

return statearr_31199;
})();
var statearr_31200_31219 = state_31183__$1;
(statearr_31200_31219[(2)] = null);

(statearr_31200_31219[(1)] = (2));


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
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_31201 = [null,null,null,null,null,null,null,null];
(statearr_31201[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_31201[(1)] = (1));

return statearr_31201;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_31183){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object)){
var ex__30555__auto__ = e31202;
var statearr_31203_31220 = state_31183;
(statearr_31203_31220[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31221 = state_31183;
state_31183 = G__31221;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_31183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_31183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_31204 = f__30640__auto__.call(null);
(statearr_31204[(6)] = c__30639__auto__);

return statearr_31204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27944__auto__ = (((_ == null))?null:_);
var m__27945__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,_);
} else {
var m__27945__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27945__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,ch);
} else {
var m__27945__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m);
} else {
var m__27945__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31222 = (function (ch,cs,meta31223){
this.ch = ch;
this.cs = cs;
this.meta31223 = meta31223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31224,meta31223__$1){
var self__ = this;
var _31224__$1 = this;
return (new cljs.core.async.t_cljs$core$async31222(self__.ch,self__.cs,meta31223__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31224){
var self__ = this;
var _31224__$1 = this;
return self__.meta31223;
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31223","meta31223",1023708344,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31222";

cljs.core.async.t_cljs$core$async31222.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async31222");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31222 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31222(ch__$1,cs__$1,meta31223){
return (new cljs.core.async.t_cljs$core$async31222(ch__$1,cs__$1,meta31223));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31222(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30639__auto___31444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___31444,cs,m,dchan,dctr,done){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___31444,cs,m,dchan,dctr,done){
return (function (state_31359){
var state_val_31360 = (state_31359[(1)]);
if((state_val_31360 === (7))){
var inst_31355 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31361_31445 = state_31359__$1;
(statearr_31361_31445[(2)] = inst_31355);

(statearr_31361_31445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (20))){
var inst_31258 = (state_31359[(7)]);
var inst_31270 = cljs.core.first.call(null,inst_31258);
var inst_31271 = cljs.core.nth.call(null,inst_31270,(0),null);
var inst_31272 = cljs.core.nth.call(null,inst_31270,(1),null);
var state_31359__$1 = (function (){var statearr_31362 = state_31359;
(statearr_31362[(8)] = inst_31271);

return statearr_31362;
})();
if(cljs.core.truth_(inst_31272)){
var statearr_31363_31446 = state_31359__$1;
(statearr_31363_31446[(1)] = (22));

} else {
var statearr_31364_31447 = state_31359__$1;
(statearr_31364_31447[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (27))){
var inst_31302 = (state_31359[(9)]);
var inst_31307 = (state_31359[(10)]);
var inst_31300 = (state_31359[(11)]);
var inst_31227 = (state_31359[(12)]);
var inst_31307__$1 = cljs.core._nth.call(null,inst_31300,inst_31302);
var inst_31308 = cljs.core.async.put_BANG_.call(null,inst_31307__$1,inst_31227,done);
var state_31359__$1 = (function (){var statearr_31365 = state_31359;
(statearr_31365[(10)] = inst_31307__$1);

return statearr_31365;
})();
if(cljs.core.truth_(inst_31308)){
var statearr_31366_31448 = state_31359__$1;
(statearr_31366_31448[(1)] = (30));

} else {
var statearr_31367_31449 = state_31359__$1;
(statearr_31367_31449[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (1))){
var state_31359__$1 = state_31359;
var statearr_31368_31450 = state_31359__$1;
(statearr_31368_31450[(2)] = null);

(statearr_31368_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (24))){
var inst_31258 = (state_31359[(7)]);
var inst_31277 = (state_31359[(2)]);
var inst_31278 = cljs.core.next.call(null,inst_31258);
var inst_31236 = inst_31278;
var inst_31237 = null;
var inst_31238 = (0);
var inst_31239 = (0);
var state_31359__$1 = (function (){var statearr_31369 = state_31359;
(statearr_31369[(13)] = inst_31277);

(statearr_31369[(14)] = inst_31236);

(statearr_31369[(15)] = inst_31238);

(statearr_31369[(16)] = inst_31237);

(statearr_31369[(17)] = inst_31239);

return statearr_31369;
})();
var statearr_31370_31451 = state_31359__$1;
(statearr_31370_31451[(2)] = null);

(statearr_31370_31451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (39))){
var state_31359__$1 = state_31359;
var statearr_31374_31452 = state_31359__$1;
(statearr_31374_31452[(2)] = null);

(statearr_31374_31452[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (4))){
var inst_31227 = (state_31359[(12)]);
var inst_31227__$1 = (state_31359[(2)]);
var inst_31228 = (inst_31227__$1 == null);
var state_31359__$1 = (function (){var statearr_31375 = state_31359;
(statearr_31375[(12)] = inst_31227__$1);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31228)){
var statearr_31376_31453 = state_31359__$1;
(statearr_31376_31453[(1)] = (5));

} else {
var statearr_31377_31454 = state_31359__$1;
(statearr_31377_31454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (15))){
var inst_31236 = (state_31359[(14)]);
var inst_31238 = (state_31359[(15)]);
var inst_31237 = (state_31359[(16)]);
var inst_31239 = (state_31359[(17)]);
var inst_31254 = (state_31359[(2)]);
var inst_31255 = (inst_31239 + (1));
var tmp31371 = inst_31236;
var tmp31372 = inst_31238;
var tmp31373 = inst_31237;
var inst_31236__$1 = tmp31371;
var inst_31237__$1 = tmp31373;
var inst_31238__$1 = tmp31372;
var inst_31239__$1 = inst_31255;
var state_31359__$1 = (function (){var statearr_31378 = state_31359;
(statearr_31378[(14)] = inst_31236__$1);

(statearr_31378[(15)] = inst_31238__$1);

(statearr_31378[(18)] = inst_31254);

(statearr_31378[(16)] = inst_31237__$1);

(statearr_31378[(17)] = inst_31239__$1);

return statearr_31378;
})();
var statearr_31379_31455 = state_31359__$1;
(statearr_31379_31455[(2)] = null);

(statearr_31379_31455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (21))){
var inst_31281 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31383_31456 = state_31359__$1;
(statearr_31383_31456[(2)] = inst_31281);

(statearr_31383_31456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (31))){
var inst_31307 = (state_31359[(10)]);
var inst_31311 = done.call(null,null);
var inst_31312 = cljs.core.async.untap_STAR_.call(null,m,inst_31307);
var state_31359__$1 = (function (){var statearr_31384 = state_31359;
(statearr_31384[(19)] = inst_31311);

return statearr_31384;
})();
var statearr_31385_31457 = state_31359__$1;
(statearr_31385_31457[(2)] = inst_31312);

(statearr_31385_31457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (32))){
var inst_31302 = (state_31359[(9)]);
var inst_31301 = (state_31359[(20)]);
var inst_31299 = (state_31359[(21)]);
var inst_31300 = (state_31359[(11)]);
var inst_31314 = (state_31359[(2)]);
var inst_31315 = (inst_31302 + (1));
var tmp31380 = inst_31301;
var tmp31381 = inst_31299;
var tmp31382 = inst_31300;
var inst_31299__$1 = tmp31381;
var inst_31300__$1 = tmp31382;
var inst_31301__$1 = tmp31380;
var inst_31302__$1 = inst_31315;
var state_31359__$1 = (function (){var statearr_31386 = state_31359;
(statearr_31386[(9)] = inst_31302__$1);

(statearr_31386[(20)] = inst_31301__$1);

(statearr_31386[(21)] = inst_31299__$1);

(statearr_31386[(11)] = inst_31300__$1);

(statearr_31386[(22)] = inst_31314);

return statearr_31386;
})();
var statearr_31387_31458 = state_31359__$1;
(statearr_31387_31458[(2)] = null);

(statearr_31387_31458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (40))){
var inst_31327 = (state_31359[(23)]);
var inst_31331 = done.call(null,null);
var inst_31332 = cljs.core.async.untap_STAR_.call(null,m,inst_31327);
var state_31359__$1 = (function (){var statearr_31388 = state_31359;
(statearr_31388[(24)] = inst_31331);

return statearr_31388;
})();
var statearr_31389_31459 = state_31359__$1;
(statearr_31389_31459[(2)] = inst_31332);

(statearr_31389_31459[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (33))){
var inst_31318 = (state_31359[(25)]);
var inst_31320 = cljs.core.chunked_seq_QMARK_.call(null,inst_31318);
var state_31359__$1 = state_31359;
if(inst_31320){
var statearr_31390_31460 = state_31359__$1;
(statearr_31390_31460[(1)] = (36));

} else {
var statearr_31391_31461 = state_31359__$1;
(statearr_31391_31461[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (13))){
var inst_31248 = (state_31359[(26)]);
var inst_31251 = cljs.core.async.close_BANG_.call(null,inst_31248);
var state_31359__$1 = state_31359;
var statearr_31392_31462 = state_31359__$1;
(statearr_31392_31462[(2)] = inst_31251);

(statearr_31392_31462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (22))){
var inst_31271 = (state_31359[(8)]);
var inst_31274 = cljs.core.async.close_BANG_.call(null,inst_31271);
var state_31359__$1 = state_31359;
var statearr_31393_31463 = state_31359__$1;
(statearr_31393_31463[(2)] = inst_31274);

(statearr_31393_31463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (36))){
var inst_31318 = (state_31359[(25)]);
var inst_31322 = cljs.core.chunk_first.call(null,inst_31318);
var inst_31323 = cljs.core.chunk_rest.call(null,inst_31318);
var inst_31324 = cljs.core.count.call(null,inst_31322);
var inst_31299 = inst_31323;
var inst_31300 = inst_31322;
var inst_31301 = inst_31324;
var inst_31302 = (0);
var state_31359__$1 = (function (){var statearr_31394 = state_31359;
(statearr_31394[(9)] = inst_31302);

(statearr_31394[(20)] = inst_31301);

(statearr_31394[(21)] = inst_31299);

(statearr_31394[(11)] = inst_31300);

return statearr_31394;
})();
var statearr_31395_31464 = state_31359__$1;
(statearr_31395_31464[(2)] = null);

(statearr_31395_31464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (41))){
var inst_31318 = (state_31359[(25)]);
var inst_31334 = (state_31359[(2)]);
var inst_31335 = cljs.core.next.call(null,inst_31318);
var inst_31299 = inst_31335;
var inst_31300 = null;
var inst_31301 = (0);
var inst_31302 = (0);
var state_31359__$1 = (function (){var statearr_31396 = state_31359;
(statearr_31396[(9)] = inst_31302);

(statearr_31396[(27)] = inst_31334);

(statearr_31396[(20)] = inst_31301);

(statearr_31396[(21)] = inst_31299);

(statearr_31396[(11)] = inst_31300);

return statearr_31396;
})();
var statearr_31397_31465 = state_31359__$1;
(statearr_31397_31465[(2)] = null);

(statearr_31397_31465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (43))){
var state_31359__$1 = state_31359;
var statearr_31398_31466 = state_31359__$1;
(statearr_31398_31466[(2)] = null);

(statearr_31398_31466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (29))){
var inst_31343 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31399_31467 = state_31359__$1;
(statearr_31399_31467[(2)] = inst_31343);

(statearr_31399_31467[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (44))){
var inst_31352 = (state_31359[(2)]);
var state_31359__$1 = (function (){var statearr_31400 = state_31359;
(statearr_31400[(28)] = inst_31352);

return statearr_31400;
})();
var statearr_31401_31468 = state_31359__$1;
(statearr_31401_31468[(2)] = null);

(statearr_31401_31468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (6))){
var inst_31291 = (state_31359[(29)]);
var inst_31290 = cljs.core.deref.call(null,cs);
var inst_31291__$1 = cljs.core.keys.call(null,inst_31290);
var inst_31292 = cljs.core.count.call(null,inst_31291__$1);
var inst_31293 = cljs.core.reset_BANG_.call(null,dctr,inst_31292);
var inst_31298 = cljs.core.seq.call(null,inst_31291__$1);
var inst_31299 = inst_31298;
var inst_31300 = null;
var inst_31301 = (0);
var inst_31302 = (0);
var state_31359__$1 = (function (){var statearr_31402 = state_31359;
(statearr_31402[(9)] = inst_31302);

(statearr_31402[(20)] = inst_31301);

(statearr_31402[(29)] = inst_31291__$1);

(statearr_31402[(21)] = inst_31299);

(statearr_31402[(30)] = inst_31293);

(statearr_31402[(11)] = inst_31300);

return statearr_31402;
})();
var statearr_31403_31469 = state_31359__$1;
(statearr_31403_31469[(2)] = null);

(statearr_31403_31469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (28))){
var inst_31318 = (state_31359[(25)]);
var inst_31299 = (state_31359[(21)]);
var inst_31318__$1 = cljs.core.seq.call(null,inst_31299);
var state_31359__$1 = (function (){var statearr_31404 = state_31359;
(statearr_31404[(25)] = inst_31318__$1);

return statearr_31404;
})();
if(inst_31318__$1){
var statearr_31405_31470 = state_31359__$1;
(statearr_31405_31470[(1)] = (33));

} else {
var statearr_31406_31471 = state_31359__$1;
(statearr_31406_31471[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (25))){
var inst_31302 = (state_31359[(9)]);
var inst_31301 = (state_31359[(20)]);
var inst_31304 = (inst_31302 < inst_31301);
var inst_31305 = inst_31304;
var state_31359__$1 = state_31359;
if(cljs.core.truth_(inst_31305)){
var statearr_31407_31472 = state_31359__$1;
(statearr_31407_31472[(1)] = (27));

} else {
var statearr_31408_31473 = state_31359__$1;
(statearr_31408_31473[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (34))){
var state_31359__$1 = state_31359;
var statearr_31409_31474 = state_31359__$1;
(statearr_31409_31474[(2)] = null);

(statearr_31409_31474[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (17))){
var state_31359__$1 = state_31359;
var statearr_31410_31475 = state_31359__$1;
(statearr_31410_31475[(2)] = null);

(statearr_31410_31475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (3))){
var inst_31357 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31359__$1,inst_31357);
} else {
if((state_val_31360 === (12))){
var inst_31286 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31411_31476 = state_31359__$1;
(statearr_31411_31476[(2)] = inst_31286);

(statearr_31411_31476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (2))){
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31359__$1,(4),ch);
} else {
if((state_val_31360 === (23))){
var state_31359__$1 = state_31359;
var statearr_31412_31477 = state_31359__$1;
(statearr_31412_31477[(2)] = null);

(statearr_31412_31477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (35))){
var inst_31341 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31413_31478 = state_31359__$1;
(statearr_31413_31478[(2)] = inst_31341);

(statearr_31413_31478[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (19))){
var inst_31258 = (state_31359[(7)]);
var inst_31262 = cljs.core.chunk_first.call(null,inst_31258);
var inst_31263 = cljs.core.chunk_rest.call(null,inst_31258);
var inst_31264 = cljs.core.count.call(null,inst_31262);
var inst_31236 = inst_31263;
var inst_31237 = inst_31262;
var inst_31238 = inst_31264;
var inst_31239 = (0);
var state_31359__$1 = (function (){var statearr_31414 = state_31359;
(statearr_31414[(14)] = inst_31236);

(statearr_31414[(15)] = inst_31238);

(statearr_31414[(16)] = inst_31237);

(statearr_31414[(17)] = inst_31239);

return statearr_31414;
})();
var statearr_31415_31479 = state_31359__$1;
(statearr_31415_31479[(2)] = null);

(statearr_31415_31479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (11))){
var inst_31236 = (state_31359[(14)]);
var inst_31258 = (state_31359[(7)]);
var inst_31258__$1 = cljs.core.seq.call(null,inst_31236);
var state_31359__$1 = (function (){var statearr_31416 = state_31359;
(statearr_31416[(7)] = inst_31258__$1);

return statearr_31416;
})();
if(inst_31258__$1){
var statearr_31417_31480 = state_31359__$1;
(statearr_31417_31480[(1)] = (16));

} else {
var statearr_31418_31481 = state_31359__$1;
(statearr_31418_31481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (9))){
var inst_31288 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31419_31482 = state_31359__$1;
(statearr_31419_31482[(2)] = inst_31288);

(statearr_31419_31482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (5))){
var inst_31234 = cljs.core.deref.call(null,cs);
var inst_31235 = cljs.core.seq.call(null,inst_31234);
var inst_31236 = inst_31235;
var inst_31237 = null;
var inst_31238 = (0);
var inst_31239 = (0);
var state_31359__$1 = (function (){var statearr_31420 = state_31359;
(statearr_31420[(14)] = inst_31236);

(statearr_31420[(15)] = inst_31238);

(statearr_31420[(16)] = inst_31237);

(statearr_31420[(17)] = inst_31239);

return statearr_31420;
})();
var statearr_31421_31483 = state_31359__$1;
(statearr_31421_31483[(2)] = null);

(statearr_31421_31483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (14))){
var state_31359__$1 = state_31359;
var statearr_31422_31484 = state_31359__$1;
(statearr_31422_31484[(2)] = null);

(statearr_31422_31484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (45))){
var inst_31349 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31423_31485 = state_31359__$1;
(statearr_31423_31485[(2)] = inst_31349);

(statearr_31423_31485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (26))){
var inst_31291 = (state_31359[(29)]);
var inst_31345 = (state_31359[(2)]);
var inst_31346 = cljs.core.seq.call(null,inst_31291);
var state_31359__$1 = (function (){var statearr_31424 = state_31359;
(statearr_31424[(31)] = inst_31345);

return statearr_31424;
})();
if(inst_31346){
var statearr_31425_31486 = state_31359__$1;
(statearr_31425_31486[(1)] = (42));

} else {
var statearr_31426_31487 = state_31359__$1;
(statearr_31426_31487[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (16))){
var inst_31258 = (state_31359[(7)]);
var inst_31260 = cljs.core.chunked_seq_QMARK_.call(null,inst_31258);
var state_31359__$1 = state_31359;
if(inst_31260){
var statearr_31427_31488 = state_31359__$1;
(statearr_31427_31488[(1)] = (19));

} else {
var statearr_31428_31489 = state_31359__$1;
(statearr_31428_31489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (38))){
var inst_31338 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31429_31490 = state_31359__$1;
(statearr_31429_31490[(2)] = inst_31338);

(statearr_31429_31490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (30))){
var state_31359__$1 = state_31359;
var statearr_31430_31491 = state_31359__$1;
(statearr_31430_31491[(2)] = null);

(statearr_31430_31491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (10))){
var inst_31237 = (state_31359[(16)]);
var inst_31239 = (state_31359[(17)]);
var inst_31247 = cljs.core._nth.call(null,inst_31237,inst_31239);
var inst_31248 = cljs.core.nth.call(null,inst_31247,(0),null);
var inst_31249 = cljs.core.nth.call(null,inst_31247,(1),null);
var state_31359__$1 = (function (){var statearr_31431 = state_31359;
(statearr_31431[(26)] = inst_31248);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31249)){
var statearr_31432_31492 = state_31359__$1;
(statearr_31432_31492[(1)] = (13));

} else {
var statearr_31433_31493 = state_31359__$1;
(statearr_31433_31493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (18))){
var inst_31284 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31434_31494 = state_31359__$1;
(statearr_31434_31494[(2)] = inst_31284);

(statearr_31434_31494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (42))){
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31359__$1,(45),dchan);
} else {
if((state_val_31360 === (37))){
var inst_31318 = (state_31359[(25)]);
var inst_31327 = (state_31359[(23)]);
var inst_31227 = (state_31359[(12)]);
var inst_31327__$1 = cljs.core.first.call(null,inst_31318);
var inst_31328 = cljs.core.async.put_BANG_.call(null,inst_31327__$1,inst_31227,done);
var state_31359__$1 = (function (){var statearr_31435 = state_31359;
(statearr_31435[(23)] = inst_31327__$1);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31328)){
var statearr_31436_31495 = state_31359__$1;
(statearr_31436_31495[(1)] = (39));

} else {
var statearr_31437_31496 = state_31359__$1;
(statearr_31437_31496[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (8))){
var inst_31238 = (state_31359[(15)]);
var inst_31239 = (state_31359[(17)]);
var inst_31241 = (inst_31239 < inst_31238);
var inst_31242 = inst_31241;
var state_31359__$1 = state_31359;
if(cljs.core.truth_(inst_31242)){
var statearr_31438_31497 = state_31359__$1;
(statearr_31438_31497[(1)] = (10));

} else {
var statearr_31439_31498 = state_31359__$1;
(statearr_31439_31498[(1)] = (11));

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
});})(c__30639__auto___31444,cs,m,dchan,dctr,done))
;
return ((function (switch__30551__auto__,c__30639__auto___31444,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30552__auto__ = null;
var cljs$core$async$mult_$_state_machine__30552__auto____0 = (function (){
var statearr_31440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31440[(0)] = cljs$core$async$mult_$_state_machine__30552__auto__);

(statearr_31440[(1)] = (1));

return statearr_31440;
});
var cljs$core$async$mult_$_state_machine__30552__auto____1 = (function (state_31359){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31441){if((e31441 instanceof Object)){
var ex__30555__auto__ = e31441;
var statearr_31442_31499 = state_31359;
(statearr_31442_31499[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31500 = state_31359;
state_31359 = G__31500;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30552__auto__ = function(state_31359){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30552__auto____1.call(this,state_31359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30552__auto____0;
cljs$core$async$mult_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30552__auto____1;
return cljs$core$async$mult_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___31444,cs,m,dchan,dctr,done))
})();
var state__30641__auto__ = (function (){var statearr_31443 = f__30640__auto__.call(null);
(statearr_31443[(6)] = c__30639__auto___31444);

return statearr_31443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___31444,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31502 = arguments.length;
switch (G__31502) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,ch);
} else {
var m__27945__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,ch);
} else {
var m__27945__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m);
} else {
var m__27945__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,state_map);
} else {
var m__27945__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27944__auto__ = (((m == null))?null:m);
var m__27945__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,m,mode);
} else {
var m__27945__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28439__auto__ = [];
var len__28432__auto___31514 = arguments.length;
var i__28433__auto___31515 = (0);
while(true){
if((i__28433__auto___31515 < len__28432__auto___31514)){
args__28439__auto__.push((arguments[i__28433__auto___31515]));

var G__31516 = (i__28433__auto___31515 + (1));
i__28433__auto___31515 = G__31516;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((3) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28440__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31508){
var map__31509 = p__31508;
var map__31509__$1 = ((((!((map__31509 == null)))?((((map__31509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31509):map__31509);
var opts = map__31509__$1;
var statearr_31511_31517 = state;
(statearr_31511_31517[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31509,map__31509__$1,opts){
return (function (val){
var statearr_31512_31518 = state;
(statearr_31512_31518[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31509,map__31509__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31513_31519 = state;
(statearr_31513_31519[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31504){
var G__31505 = cljs.core.first.call(null,seq31504);
var seq31504__$1 = cljs.core.next.call(null,seq31504);
var G__31506 = cljs.core.first.call(null,seq31504__$1);
var seq31504__$2 = cljs.core.next.call(null,seq31504__$1);
var G__31507 = cljs.core.first.call(null,seq31504__$2);
var seq31504__$3 = cljs.core.next.call(null,seq31504__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31505,G__31506,G__31507,seq31504__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31520 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31521){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31521 = meta31521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31522,meta31521__$1){
var self__ = this;
var _31522__$1 = this;
return (new cljs.core.async.t_cljs$core$async31520(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31522){
var self__ = this;
var _31522__$1 = this;
return self__.meta31521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31521","meta31521",1795947000,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31520";

cljs.core.async.t_cljs$core$async31520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async31520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31520(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31521){
return (new cljs.core.async.t_cljs$core$async31520(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31520(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30639__auto___31684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31624){
var state_val_31625 = (state_31624[(1)]);
if((state_val_31625 === (7))){
var inst_31539 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31626_31685 = state_31624__$1;
(statearr_31626_31685[(2)] = inst_31539);

(statearr_31626_31685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (20))){
var inst_31551 = (state_31624[(7)]);
var state_31624__$1 = state_31624;
var statearr_31627_31686 = state_31624__$1;
(statearr_31627_31686[(2)] = inst_31551);

(statearr_31627_31686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (27))){
var state_31624__$1 = state_31624;
var statearr_31628_31687 = state_31624__$1;
(statearr_31628_31687[(2)] = null);

(statearr_31628_31687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (1))){
var inst_31526 = (state_31624[(8)]);
var inst_31526__$1 = calc_state.call(null);
var inst_31528 = (inst_31526__$1 == null);
var inst_31529 = cljs.core.not.call(null,inst_31528);
var state_31624__$1 = (function (){var statearr_31629 = state_31624;
(statearr_31629[(8)] = inst_31526__$1);

return statearr_31629;
})();
if(inst_31529){
var statearr_31630_31688 = state_31624__$1;
(statearr_31630_31688[(1)] = (2));

} else {
var statearr_31631_31689 = state_31624__$1;
(statearr_31631_31689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (24))){
var inst_31575 = (state_31624[(9)]);
var inst_31598 = (state_31624[(10)]);
var inst_31584 = (state_31624[(11)]);
var inst_31598__$1 = inst_31575.call(null,inst_31584);
var state_31624__$1 = (function (){var statearr_31632 = state_31624;
(statearr_31632[(10)] = inst_31598__$1);

return statearr_31632;
})();
if(cljs.core.truth_(inst_31598__$1)){
var statearr_31633_31690 = state_31624__$1;
(statearr_31633_31690[(1)] = (29));

} else {
var statearr_31634_31691 = state_31624__$1;
(statearr_31634_31691[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (4))){
var inst_31542 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31542)){
var statearr_31635_31692 = state_31624__$1;
(statearr_31635_31692[(1)] = (8));

} else {
var statearr_31636_31693 = state_31624__$1;
(statearr_31636_31693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (15))){
var inst_31569 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31569)){
var statearr_31637_31694 = state_31624__$1;
(statearr_31637_31694[(1)] = (19));

} else {
var statearr_31638_31695 = state_31624__$1;
(statearr_31638_31695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (21))){
var inst_31574 = (state_31624[(12)]);
var inst_31574__$1 = (state_31624[(2)]);
var inst_31575 = cljs.core.get.call(null,inst_31574__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31576 = cljs.core.get.call(null,inst_31574__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31577 = cljs.core.get.call(null,inst_31574__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31624__$1 = (function (){var statearr_31639 = state_31624;
(statearr_31639[(13)] = inst_31576);

(statearr_31639[(9)] = inst_31575);

(statearr_31639[(12)] = inst_31574__$1);

return statearr_31639;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31624__$1,(22),inst_31577);
} else {
if((state_val_31625 === (31))){
var inst_31606 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31606)){
var statearr_31640_31696 = state_31624__$1;
(statearr_31640_31696[(1)] = (32));

} else {
var statearr_31641_31697 = state_31624__$1;
(statearr_31641_31697[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (32))){
var inst_31583 = (state_31624[(14)]);
var state_31624__$1 = state_31624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31624__$1,(35),out,inst_31583);
} else {
if((state_val_31625 === (33))){
var inst_31574 = (state_31624[(12)]);
var inst_31551 = inst_31574;
var state_31624__$1 = (function (){var statearr_31642 = state_31624;
(statearr_31642[(7)] = inst_31551);

return statearr_31642;
})();
var statearr_31643_31698 = state_31624__$1;
(statearr_31643_31698[(2)] = null);

(statearr_31643_31698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (13))){
var inst_31551 = (state_31624[(7)]);
var inst_31558 = inst_31551.cljs$lang$protocol_mask$partition0$;
var inst_31559 = (inst_31558 & (64));
var inst_31560 = inst_31551.cljs$core$ISeq$;
var inst_31561 = (cljs.core.PROTOCOL_SENTINEL === inst_31560);
var inst_31562 = (inst_31559) || (inst_31561);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31562)){
var statearr_31644_31699 = state_31624__$1;
(statearr_31644_31699[(1)] = (16));

} else {
var statearr_31645_31700 = state_31624__$1;
(statearr_31645_31700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (22))){
var inst_31584 = (state_31624[(11)]);
var inst_31583 = (state_31624[(14)]);
var inst_31582 = (state_31624[(2)]);
var inst_31583__$1 = cljs.core.nth.call(null,inst_31582,(0),null);
var inst_31584__$1 = cljs.core.nth.call(null,inst_31582,(1),null);
var inst_31585 = (inst_31583__$1 == null);
var inst_31586 = cljs.core._EQ_.call(null,inst_31584__$1,change);
var inst_31587 = (inst_31585) || (inst_31586);
var state_31624__$1 = (function (){var statearr_31646 = state_31624;
(statearr_31646[(11)] = inst_31584__$1);

(statearr_31646[(14)] = inst_31583__$1);

return statearr_31646;
})();
if(cljs.core.truth_(inst_31587)){
var statearr_31647_31701 = state_31624__$1;
(statearr_31647_31701[(1)] = (23));

} else {
var statearr_31648_31702 = state_31624__$1;
(statearr_31648_31702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (36))){
var inst_31574 = (state_31624[(12)]);
var inst_31551 = inst_31574;
var state_31624__$1 = (function (){var statearr_31649 = state_31624;
(statearr_31649[(7)] = inst_31551);

return statearr_31649;
})();
var statearr_31650_31703 = state_31624__$1;
(statearr_31650_31703[(2)] = null);

(statearr_31650_31703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (29))){
var inst_31598 = (state_31624[(10)]);
var state_31624__$1 = state_31624;
var statearr_31651_31704 = state_31624__$1;
(statearr_31651_31704[(2)] = inst_31598);

(statearr_31651_31704[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (6))){
var state_31624__$1 = state_31624;
var statearr_31652_31705 = state_31624__$1;
(statearr_31652_31705[(2)] = false);

(statearr_31652_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (28))){
var inst_31594 = (state_31624[(2)]);
var inst_31595 = calc_state.call(null);
var inst_31551 = inst_31595;
var state_31624__$1 = (function (){var statearr_31653 = state_31624;
(statearr_31653[(7)] = inst_31551);

(statearr_31653[(15)] = inst_31594);

return statearr_31653;
})();
var statearr_31654_31706 = state_31624__$1;
(statearr_31654_31706[(2)] = null);

(statearr_31654_31706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (25))){
var inst_31620 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31655_31707 = state_31624__$1;
(statearr_31655_31707[(2)] = inst_31620);

(statearr_31655_31707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (34))){
var inst_31618 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31656_31708 = state_31624__$1;
(statearr_31656_31708[(2)] = inst_31618);

(statearr_31656_31708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (17))){
var state_31624__$1 = state_31624;
var statearr_31657_31709 = state_31624__$1;
(statearr_31657_31709[(2)] = false);

(statearr_31657_31709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (3))){
var state_31624__$1 = state_31624;
var statearr_31658_31710 = state_31624__$1;
(statearr_31658_31710[(2)] = false);

(statearr_31658_31710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (12))){
var inst_31622 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31624__$1,inst_31622);
} else {
if((state_val_31625 === (2))){
var inst_31526 = (state_31624[(8)]);
var inst_31531 = inst_31526.cljs$lang$protocol_mask$partition0$;
var inst_31532 = (inst_31531 & (64));
var inst_31533 = inst_31526.cljs$core$ISeq$;
var inst_31534 = (cljs.core.PROTOCOL_SENTINEL === inst_31533);
var inst_31535 = (inst_31532) || (inst_31534);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31535)){
var statearr_31659_31711 = state_31624__$1;
(statearr_31659_31711[(1)] = (5));

} else {
var statearr_31660_31712 = state_31624__$1;
(statearr_31660_31712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (23))){
var inst_31583 = (state_31624[(14)]);
var inst_31589 = (inst_31583 == null);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31589)){
var statearr_31661_31713 = state_31624__$1;
(statearr_31661_31713[(1)] = (26));

} else {
var statearr_31662_31714 = state_31624__$1;
(statearr_31662_31714[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (35))){
var inst_31609 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
if(cljs.core.truth_(inst_31609)){
var statearr_31663_31715 = state_31624__$1;
(statearr_31663_31715[(1)] = (36));

} else {
var statearr_31664_31716 = state_31624__$1;
(statearr_31664_31716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (19))){
var inst_31551 = (state_31624[(7)]);
var inst_31571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31551);
var state_31624__$1 = state_31624;
var statearr_31665_31717 = state_31624__$1;
(statearr_31665_31717[(2)] = inst_31571);

(statearr_31665_31717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (11))){
var inst_31551 = (state_31624[(7)]);
var inst_31555 = (inst_31551 == null);
var inst_31556 = cljs.core.not.call(null,inst_31555);
var state_31624__$1 = state_31624;
if(inst_31556){
var statearr_31666_31718 = state_31624__$1;
(statearr_31666_31718[(1)] = (13));

} else {
var statearr_31667_31719 = state_31624__$1;
(statearr_31667_31719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (9))){
var inst_31526 = (state_31624[(8)]);
var state_31624__$1 = state_31624;
var statearr_31668_31720 = state_31624__$1;
(statearr_31668_31720[(2)] = inst_31526);

(statearr_31668_31720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (5))){
var state_31624__$1 = state_31624;
var statearr_31669_31721 = state_31624__$1;
(statearr_31669_31721[(2)] = true);

(statearr_31669_31721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (14))){
var state_31624__$1 = state_31624;
var statearr_31670_31722 = state_31624__$1;
(statearr_31670_31722[(2)] = false);

(statearr_31670_31722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (26))){
var inst_31584 = (state_31624[(11)]);
var inst_31591 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31584);
var state_31624__$1 = state_31624;
var statearr_31671_31723 = state_31624__$1;
(statearr_31671_31723[(2)] = inst_31591);

(statearr_31671_31723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (16))){
var state_31624__$1 = state_31624;
var statearr_31672_31724 = state_31624__$1;
(statearr_31672_31724[(2)] = true);

(statearr_31672_31724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (38))){
var inst_31614 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31673_31725 = state_31624__$1;
(statearr_31673_31725[(2)] = inst_31614);

(statearr_31673_31725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (30))){
var inst_31576 = (state_31624[(13)]);
var inst_31575 = (state_31624[(9)]);
var inst_31584 = (state_31624[(11)]);
var inst_31601 = cljs.core.empty_QMARK_.call(null,inst_31575);
var inst_31602 = inst_31576.call(null,inst_31584);
var inst_31603 = cljs.core.not.call(null,inst_31602);
var inst_31604 = (inst_31601) && (inst_31603);
var state_31624__$1 = state_31624;
var statearr_31674_31726 = state_31624__$1;
(statearr_31674_31726[(2)] = inst_31604);

(statearr_31674_31726[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (10))){
var inst_31526 = (state_31624[(8)]);
var inst_31547 = (state_31624[(2)]);
var inst_31548 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31549 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31550 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31551 = inst_31526;
var state_31624__$1 = (function (){var statearr_31675 = state_31624;
(statearr_31675[(7)] = inst_31551);

(statearr_31675[(16)] = inst_31549);

(statearr_31675[(17)] = inst_31548);

(statearr_31675[(18)] = inst_31550);

return statearr_31675;
})();
var statearr_31676_31727 = state_31624__$1;
(statearr_31676_31727[(2)] = null);

(statearr_31676_31727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (18))){
var inst_31566 = (state_31624[(2)]);
var state_31624__$1 = state_31624;
var statearr_31677_31728 = state_31624__$1;
(statearr_31677_31728[(2)] = inst_31566);

(statearr_31677_31728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (37))){
var state_31624__$1 = state_31624;
var statearr_31678_31729 = state_31624__$1;
(statearr_31678_31729[(2)] = null);

(statearr_31678_31729[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31625 === (8))){
var inst_31526 = (state_31624[(8)]);
var inst_31544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31526);
var state_31624__$1 = state_31624;
var statearr_31679_31730 = state_31624__$1;
(statearr_31679_31730[(2)] = inst_31544);

(statearr_31679_31730[(1)] = (10));


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
});})(c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30551__auto__,c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30552__auto__ = null;
var cljs$core$async$mix_$_state_machine__30552__auto____0 = (function (){
var statearr_31680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31680[(0)] = cljs$core$async$mix_$_state_machine__30552__auto__);

(statearr_31680[(1)] = (1));

return statearr_31680;
});
var cljs$core$async$mix_$_state_machine__30552__auto____1 = (function (state_31624){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31681){if((e31681 instanceof Object)){
var ex__30555__auto__ = e31681;
var statearr_31682_31731 = state_31624;
(statearr_31682_31731[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31732 = state_31624;
state_31624 = G__31732;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30552__auto__ = function(state_31624){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30552__auto____1.call(this,state_31624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30552__auto____0;
cljs$core$async$mix_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30552__auto____1;
return cljs$core$async$mix_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30641__auto__ = (function (){var statearr_31683 = f__30640__auto__.call(null);
(statearr_31683[(6)] = c__30639__auto___31684);

return statearr_31683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27944__auto__ = (((p == null))?null:p);
var m__27945__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27945__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27944__auto__ = (((p == null))?null:p);
var m__27945__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,p,v,ch);
} else {
var m__27945__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31734 = arguments.length;
switch (G__31734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27944__auto__ = (((p == null))?null:p);
var m__27945__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,p);
} else {
var m__27945__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27944__auto__ = (((p == null))?null:p);
var m__27945__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27944__auto__)]);
if(!((m__27945__auto__ == null))){
return m__27945__auto__.call(null,p,v);
} else {
var m__27945__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27945__auto____$1 == null))){
return m__27945__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31738 = arguments.length;
switch (G__31738) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27261__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27261__auto__,mults){
return (function (p1__31736_SHARP_){
if(cljs.core.truth_(p1__31736_SHARP_.call(null,topic))){
return p1__31736_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31736_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27261__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31739 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31740){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31740 = meta31740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31741,meta31740__$1){
var self__ = this;
var _31741__$1 = this;
return (new cljs.core.async.t_cljs$core$async31739(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31740__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31741){
var self__ = this;
var _31741__$1 = this;
return self__.meta31740;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31740","meta31740",2112704458,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31739";

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async31739");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31739 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31739(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31740){
return (new cljs.core.async.t_cljs$core$async31739(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31740));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31739(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30639__auto___31859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___31859,mults,ensure_mult,p){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___31859,mults,ensure_mult,p){
return (function (state_31813){
var state_val_31814 = (state_31813[(1)]);
if((state_val_31814 === (7))){
var inst_31809 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31815_31860 = state_31813__$1;
(statearr_31815_31860[(2)] = inst_31809);

(statearr_31815_31860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (20))){
var state_31813__$1 = state_31813;
var statearr_31816_31861 = state_31813__$1;
(statearr_31816_31861[(2)] = null);

(statearr_31816_31861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (1))){
var state_31813__$1 = state_31813;
var statearr_31817_31862 = state_31813__$1;
(statearr_31817_31862[(2)] = null);

(statearr_31817_31862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (24))){
var inst_31792 = (state_31813[(7)]);
var inst_31801 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31792);
var state_31813__$1 = state_31813;
var statearr_31818_31863 = state_31813__$1;
(statearr_31818_31863[(2)] = inst_31801);

(statearr_31818_31863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (4))){
var inst_31744 = (state_31813[(8)]);
var inst_31744__$1 = (state_31813[(2)]);
var inst_31745 = (inst_31744__$1 == null);
var state_31813__$1 = (function (){var statearr_31819 = state_31813;
(statearr_31819[(8)] = inst_31744__$1);

return statearr_31819;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31820_31864 = state_31813__$1;
(statearr_31820_31864[(1)] = (5));

} else {
var statearr_31821_31865 = state_31813__$1;
(statearr_31821_31865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (15))){
var inst_31786 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31822_31866 = state_31813__$1;
(statearr_31822_31866[(2)] = inst_31786);

(statearr_31822_31866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (21))){
var inst_31806 = (state_31813[(2)]);
var state_31813__$1 = (function (){var statearr_31823 = state_31813;
(statearr_31823[(9)] = inst_31806);

return statearr_31823;
})();
var statearr_31824_31867 = state_31813__$1;
(statearr_31824_31867[(2)] = null);

(statearr_31824_31867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (13))){
var inst_31768 = (state_31813[(10)]);
var inst_31770 = cljs.core.chunked_seq_QMARK_.call(null,inst_31768);
var state_31813__$1 = state_31813;
if(inst_31770){
var statearr_31825_31868 = state_31813__$1;
(statearr_31825_31868[(1)] = (16));

} else {
var statearr_31826_31869 = state_31813__$1;
(statearr_31826_31869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (22))){
var inst_31798 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
if(cljs.core.truth_(inst_31798)){
var statearr_31827_31870 = state_31813__$1;
(statearr_31827_31870[(1)] = (23));

} else {
var statearr_31828_31871 = state_31813__$1;
(statearr_31828_31871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (6))){
var inst_31794 = (state_31813[(11)]);
var inst_31744 = (state_31813[(8)]);
var inst_31792 = (state_31813[(7)]);
var inst_31792__$1 = topic_fn.call(null,inst_31744);
var inst_31793 = cljs.core.deref.call(null,mults);
var inst_31794__$1 = cljs.core.get.call(null,inst_31793,inst_31792__$1);
var state_31813__$1 = (function (){var statearr_31829 = state_31813;
(statearr_31829[(11)] = inst_31794__$1);

(statearr_31829[(7)] = inst_31792__$1);

return statearr_31829;
})();
if(cljs.core.truth_(inst_31794__$1)){
var statearr_31830_31872 = state_31813__$1;
(statearr_31830_31872[(1)] = (19));

} else {
var statearr_31831_31873 = state_31813__$1;
(statearr_31831_31873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (25))){
var inst_31803 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31832_31874 = state_31813__$1;
(statearr_31832_31874[(2)] = inst_31803);

(statearr_31832_31874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (17))){
var inst_31768 = (state_31813[(10)]);
var inst_31777 = cljs.core.first.call(null,inst_31768);
var inst_31778 = cljs.core.async.muxch_STAR_.call(null,inst_31777);
var inst_31779 = cljs.core.async.close_BANG_.call(null,inst_31778);
var inst_31780 = cljs.core.next.call(null,inst_31768);
var inst_31754 = inst_31780;
var inst_31755 = null;
var inst_31756 = (0);
var inst_31757 = (0);
var state_31813__$1 = (function (){var statearr_31833 = state_31813;
(statearr_31833[(12)] = inst_31779);

(statearr_31833[(13)] = inst_31755);

(statearr_31833[(14)] = inst_31756);

(statearr_31833[(15)] = inst_31754);

(statearr_31833[(16)] = inst_31757);

return statearr_31833;
})();
var statearr_31834_31875 = state_31813__$1;
(statearr_31834_31875[(2)] = null);

(statearr_31834_31875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (3))){
var inst_31811 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31813__$1,inst_31811);
} else {
if((state_val_31814 === (12))){
var inst_31788 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31835_31876 = state_31813__$1;
(statearr_31835_31876[(2)] = inst_31788);

(statearr_31835_31876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (2))){
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31813__$1,(4),ch);
} else {
if((state_val_31814 === (23))){
var state_31813__$1 = state_31813;
var statearr_31836_31877 = state_31813__$1;
(statearr_31836_31877[(2)] = null);

(statearr_31836_31877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (19))){
var inst_31794 = (state_31813[(11)]);
var inst_31744 = (state_31813[(8)]);
var inst_31796 = cljs.core.async.muxch_STAR_.call(null,inst_31794);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31813__$1,(22),inst_31796,inst_31744);
} else {
if((state_val_31814 === (11))){
var inst_31768 = (state_31813[(10)]);
var inst_31754 = (state_31813[(15)]);
var inst_31768__$1 = cljs.core.seq.call(null,inst_31754);
var state_31813__$1 = (function (){var statearr_31837 = state_31813;
(statearr_31837[(10)] = inst_31768__$1);

return statearr_31837;
})();
if(inst_31768__$1){
var statearr_31838_31878 = state_31813__$1;
(statearr_31838_31878[(1)] = (13));

} else {
var statearr_31839_31879 = state_31813__$1;
(statearr_31839_31879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (9))){
var inst_31790 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31840_31880 = state_31813__$1;
(statearr_31840_31880[(2)] = inst_31790);

(statearr_31840_31880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (5))){
var inst_31751 = cljs.core.deref.call(null,mults);
var inst_31752 = cljs.core.vals.call(null,inst_31751);
var inst_31753 = cljs.core.seq.call(null,inst_31752);
var inst_31754 = inst_31753;
var inst_31755 = null;
var inst_31756 = (0);
var inst_31757 = (0);
var state_31813__$1 = (function (){var statearr_31841 = state_31813;
(statearr_31841[(13)] = inst_31755);

(statearr_31841[(14)] = inst_31756);

(statearr_31841[(15)] = inst_31754);

(statearr_31841[(16)] = inst_31757);

return statearr_31841;
})();
var statearr_31842_31881 = state_31813__$1;
(statearr_31842_31881[(2)] = null);

(statearr_31842_31881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (14))){
var state_31813__$1 = state_31813;
var statearr_31846_31882 = state_31813__$1;
(statearr_31846_31882[(2)] = null);

(statearr_31846_31882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (16))){
var inst_31768 = (state_31813[(10)]);
var inst_31772 = cljs.core.chunk_first.call(null,inst_31768);
var inst_31773 = cljs.core.chunk_rest.call(null,inst_31768);
var inst_31774 = cljs.core.count.call(null,inst_31772);
var inst_31754 = inst_31773;
var inst_31755 = inst_31772;
var inst_31756 = inst_31774;
var inst_31757 = (0);
var state_31813__$1 = (function (){var statearr_31847 = state_31813;
(statearr_31847[(13)] = inst_31755);

(statearr_31847[(14)] = inst_31756);

(statearr_31847[(15)] = inst_31754);

(statearr_31847[(16)] = inst_31757);

return statearr_31847;
})();
var statearr_31848_31883 = state_31813__$1;
(statearr_31848_31883[(2)] = null);

(statearr_31848_31883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (10))){
var inst_31755 = (state_31813[(13)]);
var inst_31756 = (state_31813[(14)]);
var inst_31754 = (state_31813[(15)]);
var inst_31757 = (state_31813[(16)]);
var inst_31762 = cljs.core._nth.call(null,inst_31755,inst_31757);
var inst_31763 = cljs.core.async.muxch_STAR_.call(null,inst_31762);
var inst_31764 = cljs.core.async.close_BANG_.call(null,inst_31763);
var inst_31765 = (inst_31757 + (1));
var tmp31843 = inst_31755;
var tmp31844 = inst_31756;
var tmp31845 = inst_31754;
var inst_31754__$1 = tmp31845;
var inst_31755__$1 = tmp31843;
var inst_31756__$1 = tmp31844;
var inst_31757__$1 = inst_31765;
var state_31813__$1 = (function (){var statearr_31849 = state_31813;
(statearr_31849[(13)] = inst_31755__$1);

(statearr_31849[(17)] = inst_31764);

(statearr_31849[(14)] = inst_31756__$1);

(statearr_31849[(15)] = inst_31754__$1);

(statearr_31849[(16)] = inst_31757__$1);

return statearr_31849;
})();
var statearr_31850_31884 = state_31813__$1;
(statearr_31850_31884[(2)] = null);

(statearr_31850_31884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (18))){
var inst_31783 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31851_31885 = state_31813__$1;
(statearr_31851_31885[(2)] = inst_31783);

(statearr_31851_31885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (8))){
var inst_31756 = (state_31813[(14)]);
var inst_31757 = (state_31813[(16)]);
var inst_31759 = (inst_31757 < inst_31756);
var inst_31760 = inst_31759;
var state_31813__$1 = state_31813;
if(cljs.core.truth_(inst_31760)){
var statearr_31852_31886 = state_31813__$1;
(statearr_31852_31886[(1)] = (10));

} else {
var statearr_31853_31887 = state_31813__$1;
(statearr_31853_31887[(1)] = (11));

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
});})(c__30639__auto___31859,mults,ensure_mult,p))
;
return ((function (switch__30551__auto__,c__30639__auto___31859,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_31854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31854[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_31854[(1)] = (1));

return statearr_31854;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_31813){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31855){if((e31855 instanceof Object)){
var ex__30555__auto__ = e31855;
var statearr_31856_31888 = state_31813;
(statearr_31856_31888[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31889 = state_31813;
state_31813 = G__31889;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_31813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_31813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___31859,mults,ensure_mult,p))
})();
var state__30641__auto__ = (function (){var statearr_31857 = f__30640__auto__.call(null);
(statearr_31857[(6)] = c__30639__auto___31859);

return statearr_31857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___31859,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31891 = arguments.length;
switch (G__31891) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31894 = arguments.length;
switch (G__31894) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31897 = arguments.length;
switch (G__31897) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30639__auto___31964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31936){
var state_val_31937 = (state_31936[(1)]);
if((state_val_31937 === (7))){
var state_31936__$1 = state_31936;
var statearr_31938_31965 = state_31936__$1;
(statearr_31938_31965[(2)] = null);

(statearr_31938_31965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (1))){
var state_31936__$1 = state_31936;
var statearr_31939_31966 = state_31936__$1;
(statearr_31939_31966[(2)] = null);

(statearr_31939_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (4))){
var inst_31900 = (state_31936[(7)]);
var inst_31902 = (inst_31900 < cnt);
var state_31936__$1 = state_31936;
if(cljs.core.truth_(inst_31902)){
var statearr_31940_31967 = state_31936__$1;
(statearr_31940_31967[(1)] = (6));

} else {
var statearr_31941_31968 = state_31936__$1;
(statearr_31941_31968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (15))){
var inst_31932 = (state_31936[(2)]);
var state_31936__$1 = state_31936;
var statearr_31942_31969 = state_31936__$1;
(statearr_31942_31969[(2)] = inst_31932);

(statearr_31942_31969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (13))){
var inst_31925 = cljs.core.async.close_BANG_.call(null,out);
var state_31936__$1 = state_31936;
var statearr_31943_31970 = state_31936__$1;
(statearr_31943_31970[(2)] = inst_31925);

(statearr_31943_31970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (6))){
var state_31936__$1 = state_31936;
var statearr_31944_31971 = state_31936__$1;
(statearr_31944_31971[(2)] = null);

(statearr_31944_31971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (3))){
var inst_31934 = (state_31936[(2)]);
var state_31936__$1 = state_31936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31936__$1,inst_31934);
} else {
if((state_val_31937 === (12))){
var inst_31922 = (state_31936[(8)]);
var inst_31922__$1 = (state_31936[(2)]);
var inst_31923 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31922__$1);
var state_31936__$1 = (function (){var statearr_31945 = state_31936;
(statearr_31945[(8)] = inst_31922__$1);

return statearr_31945;
})();
if(cljs.core.truth_(inst_31923)){
var statearr_31946_31972 = state_31936__$1;
(statearr_31946_31972[(1)] = (13));

} else {
var statearr_31947_31973 = state_31936__$1;
(statearr_31947_31973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (2))){
var inst_31899 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31900 = (0);
var state_31936__$1 = (function (){var statearr_31948 = state_31936;
(statearr_31948[(7)] = inst_31900);

(statearr_31948[(9)] = inst_31899);

return statearr_31948;
})();
var statearr_31949_31974 = state_31936__$1;
(statearr_31949_31974[(2)] = null);

(statearr_31949_31974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (11))){
var inst_31900 = (state_31936[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31936,(10),Object,null,(9));
var inst_31909 = chs__$1.call(null,inst_31900);
var inst_31910 = done.call(null,inst_31900);
var inst_31911 = cljs.core.async.take_BANG_.call(null,inst_31909,inst_31910);
var state_31936__$1 = state_31936;
var statearr_31950_31975 = state_31936__$1;
(statearr_31950_31975[(2)] = inst_31911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (9))){
var inst_31900 = (state_31936[(7)]);
var inst_31913 = (state_31936[(2)]);
var inst_31914 = (inst_31900 + (1));
var inst_31900__$1 = inst_31914;
var state_31936__$1 = (function (){var statearr_31951 = state_31936;
(statearr_31951[(7)] = inst_31900__$1);

(statearr_31951[(10)] = inst_31913);

return statearr_31951;
})();
var statearr_31952_31976 = state_31936__$1;
(statearr_31952_31976[(2)] = null);

(statearr_31952_31976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (5))){
var inst_31920 = (state_31936[(2)]);
var state_31936__$1 = (function (){var statearr_31953 = state_31936;
(statearr_31953[(11)] = inst_31920);

return statearr_31953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31936__$1,(12),dchan);
} else {
if((state_val_31937 === (14))){
var inst_31922 = (state_31936[(8)]);
var inst_31927 = cljs.core.apply.call(null,f,inst_31922);
var state_31936__$1 = state_31936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31936__$1,(16),out,inst_31927);
} else {
if((state_val_31937 === (16))){
var inst_31929 = (state_31936[(2)]);
var state_31936__$1 = (function (){var statearr_31954 = state_31936;
(statearr_31954[(12)] = inst_31929);

return statearr_31954;
})();
var statearr_31955_31977 = state_31936__$1;
(statearr_31955_31977[(2)] = null);

(statearr_31955_31977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (10))){
var inst_31904 = (state_31936[(2)]);
var inst_31905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31936__$1 = (function (){var statearr_31956 = state_31936;
(statearr_31956[(13)] = inst_31904);

return statearr_31956;
})();
var statearr_31957_31978 = state_31936__$1;
(statearr_31957_31978[(2)] = inst_31905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31937 === (8))){
var inst_31918 = (state_31936[(2)]);
var state_31936__$1 = state_31936;
var statearr_31958_31979 = state_31936__$1;
(statearr_31958_31979[(2)] = inst_31918);

(statearr_31958_31979[(1)] = (5));


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
});})(c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30551__auto__,c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_31959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31959[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_31959[(1)] = (1));

return statearr_31959;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_31936){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_31936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e31960){if((e31960 instanceof Object)){
var ex__30555__auto__ = e31960;
var statearr_31961_31980 = state_31936;
(statearr_31961_31980[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31981 = state_31936;
state_31936 = G__31981;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_31936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_31936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30641__auto__ = (function (){var statearr_31962 = f__30640__auto__.call(null);
(statearr_31962[(6)] = c__30639__auto___31964);

return statearr_31962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31984 = arguments.length;
switch (G__31984) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32038,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32038,out){
return (function (state_32016){
var state_val_32017 = (state_32016[(1)]);
if((state_val_32017 === (7))){
var inst_31996 = (state_32016[(7)]);
var inst_31995 = (state_32016[(8)]);
var inst_31995__$1 = (state_32016[(2)]);
var inst_31996__$1 = cljs.core.nth.call(null,inst_31995__$1,(0),null);
var inst_31997 = cljs.core.nth.call(null,inst_31995__$1,(1),null);
var inst_31998 = (inst_31996__$1 == null);
var state_32016__$1 = (function (){var statearr_32018 = state_32016;
(statearr_32018[(9)] = inst_31997);

(statearr_32018[(7)] = inst_31996__$1);

(statearr_32018[(8)] = inst_31995__$1);

return statearr_32018;
})();
if(cljs.core.truth_(inst_31998)){
var statearr_32019_32039 = state_32016__$1;
(statearr_32019_32039[(1)] = (8));

} else {
var statearr_32020_32040 = state_32016__$1;
(statearr_32020_32040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (1))){
var inst_31985 = cljs.core.vec.call(null,chs);
var inst_31986 = inst_31985;
var state_32016__$1 = (function (){var statearr_32021 = state_32016;
(statearr_32021[(10)] = inst_31986);

return statearr_32021;
})();
var statearr_32022_32041 = state_32016__$1;
(statearr_32022_32041[(2)] = null);

(statearr_32022_32041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (4))){
var inst_31986 = (state_32016[(10)]);
var state_32016__$1 = state_32016;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32016__$1,(7),inst_31986);
} else {
if((state_val_32017 === (6))){
var inst_32012 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
var statearr_32023_32042 = state_32016__$1;
(statearr_32023_32042[(2)] = inst_32012);

(statearr_32023_32042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (3))){
var inst_32014 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32016__$1,inst_32014);
} else {
if((state_val_32017 === (2))){
var inst_31986 = (state_32016[(10)]);
var inst_31988 = cljs.core.count.call(null,inst_31986);
var inst_31989 = (inst_31988 > (0));
var state_32016__$1 = state_32016;
if(cljs.core.truth_(inst_31989)){
var statearr_32025_32043 = state_32016__$1;
(statearr_32025_32043[(1)] = (4));

} else {
var statearr_32026_32044 = state_32016__$1;
(statearr_32026_32044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (11))){
var inst_31986 = (state_32016[(10)]);
var inst_32005 = (state_32016[(2)]);
var tmp32024 = inst_31986;
var inst_31986__$1 = tmp32024;
var state_32016__$1 = (function (){var statearr_32027 = state_32016;
(statearr_32027[(10)] = inst_31986__$1);

(statearr_32027[(11)] = inst_32005);

return statearr_32027;
})();
var statearr_32028_32045 = state_32016__$1;
(statearr_32028_32045[(2)] = null);

(statearr_32028_32045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (9))){
var inst_31996 = (state_32016[(7)]);
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32016__$1,(11),out,inst_31996);
} else {
if((state_val_32017 === (5))){
var inst_32010 = cljs.core.async.close_BANG_.call(null,out);
var state_32016__$1 = state_32016;
var statearr_32029_32046 = state_32016__$1;
(statearr_32029_32046[(2)] = inst_32010);

(statearr_32029_32046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (10))){
var inst_32008 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
var statearr_32030_32047 = state_32016__$1;
(statearr_32030_32047[(2)] = inst_32008);

(statearr_32030_32047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (8))){
var inst_31997 = (state_32016[(9)]);
var inst_31986 = (state_32016[(10)]);
var inst_31996 = (state_32016[(7)]);
var inst_31995 = (state_32016[(8)]);
var inst_32000 = (function (){var cs = inst_31986;
var vec__31991 = inst_31995;
var v = inst_31996;
var c = inst_31997;
return ((function (cs,vec__31991,v,c,inst_31997,inst_31986,inst_31996,inst_31995,state_val_32017,c__30639__auto___32038,out){
return (function (p1__31982_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31982_SHARP_);
});
;})(cs,vec__31991,v,c,inst_31997,inst_31986,inst_31996,inst_31995,state_val_32017,c__30639__auto___32038,out))
})();
var inst_32001 = cljs.core.filterv.call(null,inst_32000,inst_31986);
var inst_31986__$1 = inst_32001;
var state_32016__$1 = (function (){var statearr_32031 = state_32016;
(statearr_32031[(10)] = inst_31986__$1);

return statearr_32031;
})();
var statearr_32032_32048 = state_32016__$1;
(statearr_32032_32048[(2)] = null);

(statearr_32032_32048[(1)] = (2));


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
});})(c__30639__auto___32038,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32038,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32033[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32033[(1)] = (1));

return statearr_32033;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32016){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32034){if((e32034 instanceof Object)){
var ex__30555__auto__ = e32034;
var statearr_32035_32049 = state_32016;
(statearr_32035_32049[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32050 = state_32016;
state_32016 = G__32050;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32038,out))
})();
var state__30641__auto__ = (function (){var statearr_32036 = f__30640__auto__.call(null);
(statearr_32036[(6)] = c__30639__auto___32038);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32038,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32052 = arguments.length;
switch (G__32052) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32097,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32097,out){
return (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32058 = (state_32076[(7)]);
var inst_32058__$1 = (state_32076[(2)]);
var inst_32059 = (inst_32058__$1 == null);
var inst_32060 = cljs.core.not.call(null,inst_32059);
var state_32076__$1 = (function (){var statearr_32078 = state_32076;
(statearr_32078[(7)] = inst_32058__$1);

return statearr_32078;
})();
if(inst_32060){
var statearr_32079_32098 = state_32076__$1;
(statearr_32079_32098[(1)] = (8));

} else {
var statearr_32080_32099 = state_32076__$1;
(statearr_32080_32099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var inst_32053 = (0);
var state_32076__$1 = (function (){var statearr_32081 = state_32076;
(statearr_32081[(8)] = inst_32053);

return statearr_32081;
})();
var statearr_32082_32100 = state_32076__$1;
(statearr_32082_32100[(2)] = null);

(statearr_32082_32100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32076__$1,(7),ch);
} else {
if((state_val_32077 === (6))){
var inst_32071 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32083_32101 = state_32076__$1;
(statearr_32083_32101[(2)] = inst_32071);

(statearr_32083_32101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32073 = (state_32076[(2)]);
var inst_32074 = cljs.core.async.close_BANG_.call(null,out);
var state_32076__$1 = (function (){var statearr_32084 = state_32076;
(statearr_32084[(9)] = inst_32073);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (2))){
var inst_32053 = (state_32076[(8)]);
var inst_32055 = (inst_32053 < n);
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32055)){
var statearr_32085_32102 = state_32076__$1;
(statearr_32085_32102[(1)] = (4));

} else {
var statearr_32086_32103 = state_32076__$1;
(statearr_32086_32103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (11))){
var inst_32053 = (state_32076[(8)]);
var inst_32063 = (state_32076[(2)]);
var inst_32064 = (inst_32053 + (1));
var inst_32053__$1 = inst_32064;
var state_32076__$1 = (function (){var statearr_32087 = state_32076;
(statearr_32087[(10)] = inst_32063);

(statearr_32087[(8)] = inst_32053__$1);

return statearr_32087;
})();
var statearr_32088_32104 = state_32076__$1;
(statearr_32088_32104[(2)] = null);

(statearr_32088_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var state_32076__$1 = state_32076;
var statearr_32089_32105 = state_32076__$1;
(statearr_32089_32105[(2)] = null);

(statearr_32089_32105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (5))){
var state_32076__$1 = state_32076;
var statearr_32090_32106 = state_32076__$1;
(statearr_32090_32106[(2)] = null);

(statearr_32090_32106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_32068 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32091_32107 = state_32076__$1;
(statearr_32091_32107[(2)] = inst_32068);

(statearr_32091_32107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_32058 = (state_32076[(7)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32076__$1,(11),out,inst_32058);
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
});})(c__30639__auto___32097,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32097,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32092[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32092[(1)] = (1));

return statearr_32092;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32076){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32093){if((e32093 instanceof Object)){
var ex__30555__auto__ = e32093;
var statearr_32094_32108 = state_32076;
(statearr_32094_32108[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32109 = state_32076;
state_32076 = G__32109;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32097,out))
})();
var state__30641__auto__ = (function (){var statearr_32095 = f__30640__auto__.call(null);
(statearr_32095[(6)] = c__30639__auto___32097);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32097,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32111 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32111 = (function (f,ch,meta32112){
this.f = f;
this.ch = ch;
this.meta32112 = meta32112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32113,meta32112__$1){
var self__ = this;
var _32113__$1 = this;
return (new cljs.core.async.t_cljs$core$async32111(self__.f,self__.ch,meta32112__$1));
});

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32113){
var self__ = this;
var _32113__$1 = this;
return self__.meta32112;
});

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32114 = (function (f,ch,meta32112,_,fn1,meta32115){
this.f = f;
this.ch = ch;
this.meta32112 = meta32112;
this._ = _;
this.fn1 = fn1;
this.meta32115 = meta32115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32116,meta32115__$1){
var self__ = this;
var _32116__$1 = this;
return (new cljs.core.async.t_cljs$core$async32114(self__.f,self__.ch,self__.meta32112,self__._,self__.fn1,meta32115__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32116){
var self__ = this;
var _32116__$1 = this;
return self__.meta32115;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32110_SHARP_){
return f1.call(null,(((p1__32110_SHARP_ == null))?null:self__.f.call(null,p1__32110_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32112","meta32112",-525999717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32111","cljs.core.async/t_cljs$core$async32111",-1588172609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32115","meta32115",503995675,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32114";

cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async32114");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32114 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32114(f__$1,ch__$1,meta32112__$1,___$2,fn1__$1,meta32115){
return (new cljs.core.async.t_cljs$core$async32114(f__$1,ch__$1,meta32112__$1,___$2,fn1__$1,meta32115));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32114(self__.f,self__.ch,self__.meta32112,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27249__auto__ = ret;
if(cljs.core.truth_(and__27249__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27249__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32112","meta32112",-525999717,null)], null);
});

cljs.core.async.t_cljs$core$async32111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32111";

cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async32111");
});

cljs.core.async.__GT_t_cljs$core$async32111 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32111(f__$1,ch__$1,meta32112){
return (new cljs.core.async.t_cljs$core$async32111(f__$1,ch__$1,meta32112));
});

}

return (new cljs.core.async.t_cljs$core$async32111(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32117 = (function (f,ch,meta32118){
this.f = f;
this.ch = ch;
this.meta32118 = meta32118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32119,meta32118__$1){
var self__ = this;
var _32119__$1 = this;
return (new cljs.core.async.t_cljs$core$async32117(self__.f,self__.ch,meta32118__$1));
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32119){
var self__ = this;
var _32119__$1 = this;
return self__.meta32118;
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32118","meta32118",-1102918049,null)], null);
});

cljs.core.async.t_cljs$core$async32117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32117";

cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async32117");
});

cljs.core.async.__GT_t_cljs$core$async32117 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32117(f__$1,ch__$1,meta32118){
return (new cljs.core.async.t_cljs$core$async32117(f__$1,ch__$1,meta32118));
});

}

return (new cljs.core.async.t_cljs$core$async32117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32120 = (function (p,ch,meta32121){
this.p = p;
this.ch = ch;
this.meta32121 = meta32121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32122,meta32121__$1){
var self__ = this;
var _32122__$1 = this;
return (new cljs.core.async.t_cljs$core$async32120(self__.p,self__.ch,meta32121__$1));
});

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32122){
var self__ = this;
var _32122__$1 = this;
return self__.meta32121;
});

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32121","meta32121",1423617552,null)], null);
});

cljs.core.async.t_cljs$core$async32120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32120";

cljs.core.async.t_cljs$core$async32120.cljs$lang$ctorPrWriter = (function (this__27886__auto__,writer__27887__auto__,opt__27888__auto__){
return cljs.core._write.call(null,writer__27887__auto__,"cljs.core.async/t_cljs$core$async32120");
});

cljs.core.async.__GT_t_cljs$core$async32120 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32120(p__$1,ch__$1,meta32121){
return (new cljs.core.async.t_cljs$core$async32120(p__$1,ch__$1,meta32121));
});

}

return (new cljs.core.async.t_cljs$core$async32120(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32164,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32164,out){
return (function (state_32145){
var state_val_32146 = (state_32145[(1)]);
if((state_val_32146 === (7))){
var inst_32141 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32147_32165 = state_32145__$1;
(statearr_32147_32165[(2)] = inst_32141);

(statearr_32147_32165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (1))){
var state_32145__$1 = state_32145;
var statearr_32148_32166 = state_32145__$1;
(statearr_32148_32166[(2)] = null);

(statearr_32148_32166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (4))){
var inst_32127 = (state_32145[(7)]);
var inst_32127__$1 = (state_32145[(2)]);
var inst_32128 = (inst_32127__$1 == null);
var state_32145__$1 = (function (){var statearr_32149 = state_32145;
(statearr_32149[(7)] = inst_32127__$1);

return statearr_32149;
})();
if(cljs.core.truth_(inst_32128)){
var statearr_32150_32167 = state_32145__$1;
(statearr_32150_32167[(1)] = (5));

} else {
var statearr_32151_32168 = state_32145__$1;
(statearr_32151_32168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (6))){
var inst_32127 = (state_32145[(7)]);
var inst_32132 = p.call(null,inst_32127);
var state_32145__$1 = state_32145;
if(cljs.core.truth_(inst_32132)){
var statearr_32152_32169 = state_32145__$1;
(statearr_32152_32169[(1)] = (8));

} else {
var statearr_32153_32170 = state_32145__$1;
(statearr_32153_32170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (3))){
var inst_32143 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32145__$1,inst_32143);
} else {
if((state_val_32146 === (2))){
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32145__$1,(4),ch);
} else {
if((state_val_32146 === (11))){
var inst_32135 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32154_32171 = state_32145__$1;
(statearr_32154_32171[(2)] = inst_32135);

(statearr_32154_32171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (9))){
var state_32145__$1 = state_32145;
var statearr_32155_32172 = state_32145__$1;
(statearr_32155_32172[(2)] = null);

(statearr_32155_32172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (5))){
var inst_32130 = cljs.core.async.close_BANG_.call(null,out);
var state_32145__$1 = state_32145;
var statearr_32156_32173 = state_32145__$1;
(statearr_32156_32173[(2)] = inst_32130);

(statearr_32156_32173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (10))){
var inst_32138 = (state_32145[(2)]);
var state_32145__$1 = (function (){var statearr_32157 = state_32145;
(statearr_32157[(8)] = inst_32138);

return statearr_32157;
})();
var statearr_32158_32174 = state_32145__$1;
(statearr_32158_32174[(2)] = null);

(statearr_32158_32174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (8))){
var inst_32127 = (state_32145[(7)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32145__$1,(11),out,inst_32127);
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
});})(c__30639__auto___32164,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32164,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32159 = [null,null,null,null,null,null,null,null,null];
(statearr_32159[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32159[(1)] = (1));

return statearr_32159;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32145){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32160){if((e32160 instanceof Object)){
var ex__30555__auto__ = e32160;
var statearr_32161_32175 = state_32145;
(statearr_32161_32175[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32176 = state_32145;
state_32145 = G__32176;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32164,out))
})();
var state__30641__auto__ = (function (){var statearr_32162 = f__30640__auto__.call(null);
(statearr_32162[(6)] = c__30639__auto___32164);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32164,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32178 = arguments.length;
switch (G__32178) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_32241){
var state_val_32242 = (state_32241[(1)]);
if((state_val_32242 === (7))){
var inst_32237 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32243_32281 = state_32241__$1;
(statearr_32243_32281[(2)] = inst_32237);

(statearr_32243_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (20))){
var inst_32207 = (state_32241[(7)]);
var inst_32218 = (state_32241[(2)]);
var inst_32219 = cljs.core.next.call(null,inst_32207);
var inst_32193 = inst_32219;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32244 = state_32241;
(statearr_32244[(8)] = inst_32195);

(statearr_32244[(9)] = inst_32218);

(statearr_32244[(10)] = inst_32193);

(statearr_32244[(11)] = inst_32196);

(statearr_32244[(12)] = inst_32194);

return statearr_32244;
})();
var statearr_32245_32282 = state_32241__$1;
(statearr_32245_32282[(2)] = null);

(statearr_32245_32282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (1))){
var state_32241__$1 = state_32241;
var statearr_32246_32283 = state_32241__$1;
(statearr_32246_32283[(2)] = null);

(statearr_32246_32283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (4))){
var inst_32182 = (state_32241[(13)]);
var inst_32182__$1 = (state_32241[(2)]);
var inst_32183 = (inst_32182__$1 == null);
var state_32241__$1 = (function (){var statearr_32247 = state_32241;
(statearr_32247[(13)] = inst_32182__$1);

return statearr_32247;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32248_32284 = state_32241__$1;
(statearr_32248_32284[(1)] = (5));

} else {
var statearr_32249_32285 = state_32241__$1;
(statearr_32249_32285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (15))){
var state_32241__$1 = state_32241;
var statearr_32253_32286 = state_32241__$1;
(statearr_32253_32286[(2)] = null);

(statearr_32253_32286[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (21))){
var state_32241__$1 = state_32241;
var statearr_32254_32287 = state_32241__$1;
(statearr_32254_32287[(2)] = null);

(statearr_32254_32287[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (13))){
var inst_32195 = (state_32241[(8)]);
var inst_32193 = (state_32241[(10)]);
var inst_32196 = (state_32241[(11)]);
var inst_32194 = (state_32241[(12)]);
var inst_32203 = (state_32241[(2)]);
var inst_32204 = (inst_32196 + (1));
var tmp32250 = inst_32195;
var tmp32251 = inst_32193;
var tmp32252 = inst_32194;
var inst_32193__$1 = tmp32251;
var inst_32194__$1 = tmp32252;
var inst_32195__$1 = tmp32250;
var inst_32196__$1 = inst_32204;
var state_32241__$1 = (function (){var statearr_32255 = state_32241;
(statearr_32255[(8)] = inst_32195__$1);

(statearr_32255[(10)] = inst_32193__$1);

(statearr_32255[(11)] = inst_32196__$1);

(statearr_32255[(12)] = inst_32194__$1);

(statearr_32255[(14)] = inst_32203);

return statearr_32255;
})();
var statearr_32256_32288 = state_32241__$1;
(statearr_32256_32288[(2)] = null);

(statearr_32256_32288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (22))){
var state_32241__$1 = state_32241;
var statearr_32257_32289 = state_32241__$1;
(statearr_32257_32289[(2)] = null);

(statearr_32257_32289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (6))){
var inst_32182 = (state_32241[(13)]);
var inst_32191 = f.call(null,inst_32182);
var inst_32192 = cljs.core.seq.call(null,inst_32191);
var inst_32193 = inst_32192;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32258 = state_32241;
(statearr_32258[(8)] = inst_32195);

(statearr_32258[(10)] = inst_32193);

(statearr_32258[(11)] = inst_32196);

(statearr_32258[(12)] = inst_32194);

return statearr_32258;
})();
var statearr_32259_32290 = state_32241__$1;
(statearr_32259_32290[(2)] = null);

(statearr_32259_32290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (17))){
var inst_32207 = (state_32241[(7)]);
var inst_32211 = cljs.core.chunk_first.call(null,inst_32207);
var inst_32212 = cljs.core.chunk_rest.call(null,inst_32207);
var inst_32213 = cljs.core.count.call(null,inst_32211);
var inst_32193 = inst_32212;
var inst_32194 = inst_32211;
var inst_32195 = inst_32213;
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32260 = state_32241;
(statearr_32260[(8)] = inst_32195);

(statearr_32260[(10)] = inst_32193);

(statearr_32260[(11)] = inst_32196);

(statearr_32260[(12)] = inst_32194);

return statearr_32260;
})();
var statearr_32261_32291 = state_32241__$1;
(statearr_32261_32291[(2)] = null);

(statearr_32261_32291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (3))){
var inst_32239 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32241__$1,inst_32239);
} else {
if((state_val_32242 === (12))){
var inst_32227 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32262_32292 = state_32241__$1;
(statearr_32262_32292[(2)] = inst_32227);

(statearr_32262_32292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (2))){
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32241__$1,(4),in$);
} else {
if((state_val_32242 === (23))){
var inst_32235 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32263_32293 = state_32241__$1;
(statearr_32263_32293[(2)] = inst_32235);

(statearr_32263_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (19))){
var inst_32222 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32264_32294 = state_32241__$1;
(statearr_32264_32294[(2)] = inst_32222);

(statearr_32264_32294[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (11))){
var inst_32207 = (state_32241[(7)]);
var inst_32193 = (state_32241[(10)]);
var inst_32207__$1 = cljs.core.seq.call(null,inst_32193);
var state_32241__$1 = (function (){var statearr_32265 = state_32241;
(statearr_32265[(7)] = inst_32207__$1);

return statearr_32265;
})();
if(inst_32207__$1){
var statearr_32266_32295 = state_32241__$1;
(statearr_32266_32295[(1)] = (14));

} else {
var statearr_32267_32296 = state_32241__$1;
(statearr_32267_32296[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (9))){
var inst_32229 = (state_32241[(2)]);
var inst_32230 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32241__$1 = (function (){var statearr_32268 = state_32241;
(statearr_32268[(15)] = inst_32229);

return statearr_32268;
})();
if(cljs.core.truth_(inst_32230)){
var statearr_32269_32297 = state_32241__$1;
(statearr_32269_32297[(1)] = (21));

} else {
var statearr_32270_32298 = state_32241__$1;
(statearr_32270_32298[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (5))){
var inst_32185 = cljs.core.async.close_BANG_.call(null,out);
var state_32241__$1 = state_32241;
var statearr_32271_32299 = state_32241__$1;
(statearr_32271_32299[(2)] = inst_32185);

(statearr_32271_32299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (14))){
var inst_32207 = (state_32241[(7)]);
var inst_32209 = cljs.core.chunked_seq_QMARK_.call(null,inst_32207);
var state_32241__$1 = state_32241;
if(inst_32209){
var statearr_32272_32300 = state_32241__$1;
(statearr_32272_32300[(1)] = (17));

} else {
var statearr_32273_32301 = state_32241__$1;
(statearr_32273_32301[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (16))){
var inst_32225 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32274_32302 = state_32241__$1;
(statearr_32274_32302[(2)] = inst_32225);

(statearr_32274_32302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (10))){
var inst_32196 = (state_32241[(11)]);
var inst_32194 = (state_32241[(12)]);
var inst_32201 = cljs.core._nth.call(null,inst_32194,inst_32196);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(13),out,inst_32201);
} else {
if((state_val_32242 === (18))){
var inst_32207 = (state_32241[(7)]);
var inst_32216 = cljs.core.first.call(null,inst_32207);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(20),out,inst_32216);
} else {
if((state_val_32242 === (8))){
var inst_32195 = (state_32241[(8)]);
var inst_32196 = (state_32241[(11)]);
var inst_32198 = (inst_32196 < inst_32195);
var inst_32199 = inst_32198;
var state_32241__$1 = state_32241;
if(cljs.core.truth_(inst_32199)){
var statearr_32275_32303 = state_32241__$1;
(statearr_32275_32303[(1)] = (10));

} else {
var statearr_32276_32304 = state_32241__$1;
(statearr_32276_32304[(1)] = (11));

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
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____0 = (function (){
var statearr_32277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32277[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__);

(statearr_32277[(1)] = (1));

return statearr_32277;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____1 = (function (state_32241){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32278){if((e32278 instanceof Object)){
var ex__30555__auto__ = e32278;
var statearr_32279_32305 = state_32241;
(statearr_32279_32305[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32306 = state_32241;
state_32241 = G__32306;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__ = function(state_32241){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____1.call(this,state_32241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30552__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_32280 = f__30640__auto__.call(null);
(statearr_32280[(6)] = c__30639__auto__);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32308 = arguments.length;
switch (G__32308) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32311 = arguments.length;
switch (G__32311) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32314 = arguments.length;
switch (G__32314) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32361,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32361,out){
return (function (state_32338){
var state_val_32339 = (state_32338[(1)]);
if((state_val_32339 === (7))){
var inst_32333 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
var statearr_32340_32362 = state_32338__$1;
(statearr_32340_32362[(2)] = inst_32333);

(statearr_32340_32362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (1))){
var inst_32315 = null;
var state_32338__$1 = (function (){var statearr_32341 = state_32338;
(statearr_32341[(7)] = inst_32315);

return statearr_32341;
})();
var statearr_32342_32363 = state_32338__$1;
(statearr_32342_32363[(2)] = null);

(statearr_32342_32363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (4))){
var inst_32318 = (state_32338[(8)]);
var inst_32318__$1 = (state_32338[(2)]);
var inst_32319 = (inst_32318__$1 == null);
var inst_32320 = cljs.core.not.call(null,inst_32319);
var state_32338__$1 = (function (){var statearr_32343 = state_32338;
(statearr_32343[(8)] = inst_32318__$1);

return statearr_32343;
})();
if(inst_32320){
var statearr_32344_32364 = state_32338__$1;
(statearr_32344_32364[(1)] = (5));

} else {
var statearr_32345_32365 = state_32338__$1;
(statearr_32345_32365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (6))){
var state_32338__$1 = state_32338;
var statearr_32346_32366 = state_32338__$1;
(statearr_32346_32366[(2)] = null);

(statearr_32346_32366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (3))){
var inst_32335 = (state_32338[(2)]);
var inst_32336 = cljs.core.async.close_BANG_.call(null,out);
var state_32338__$1 = (function (){var statearr_32347 = state_32338;
(statearr_32347[(9)] = inst_32335);

return statearr_32347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32338__$1,inst_32336);
} else {
if((state_val_32339 === (2))){
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32338__$1,(4),ch);
} else {
if((state_val_32339 === (11))){
var inst_32318 = (state_32338[(8)]);
var inst_32327 = (state_32338[(2)]);
var inst_32315 = inst_32318;
var state_32338__$1 = (function (){var statearr_32348 = state_32338;
(statearr_32348[(10)] = inst_32327);

(statearr_32348[(7)] = inst_32315);

return statearr_32348;
})();
var statearr_32349_32367 = state_32338__$1;
(statearr_32349_32367[(2)] = null);

(statearr_32349_32367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (9))){
var inst_32318 = (state_32338[(8)]);
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32338__$1,(11),out,inst_32318);
} else {
if((state_val_32339 === (5))){
var inst_32318 = (state_32338[(8)]);
var inst_32315 = (state_32338[(7)]);
var inst_32322 = cljs.core._EQ_.call(null,inst_32318,inst_32315);
var state_32338__$1 = state_32338;
if(inst_32322){
var statearr_32351_32368 = state_32338__$1;
(statearr_32351_32368[(1)] = (8));

} else {
var statearr_32352_32369 = state_32338__$1;
(statearr_32352_32369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (10))){
var inst_32330 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
var statearr_32353_32370 = state_32338__$1;
(statearr_32353_32370[(2)] = inst_32330);

(statearr_32353_32370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (8))){
var inst_32315 = (state_32338[(7)]);
var tmp32350 = inst_32315;
var inst_32315__$1 = tmp32350;
var state_32338__$1 = (function (){var statearr_32354 = state_32338;
(statearr_32354[(7)] = inst_32315__$1);

return statearr_32354;
})();
var statearr_32355_32371 = state_32338__$1;
(statearr_32355_32371[(2)] = null);

(statearr_32355_32371[(1)] = (2));


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
});})(c__30639__auto___32361,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32361,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32338){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__30555__auto__ = e32357;
var statearr_32358_32372 = state_32338;
(statearr_32358_32372[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32373 = state_32338;
state_32338 = G__32373;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32361,out))
})();
var state__30641__auto__ = (function (){var statearr_32359 = f__30640__auto__.call(null);
(statearr_32359[(6)] = c__30639__auto___32361);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32361,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32375 = arguments.length;
switch (G__32375) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32441,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32441,out){
return (function (state_32413){
var state_val_32414 = (state_32413[(1)]);
if((state_val_32414 === (7))){
var inst_32409 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32415_32442 = state_32413__$1;
(statearr_32415_32442[(2)] = inst_32409);

(statearr_32415_32442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (1))){
var inst_32376 = (new Array(n));
var inst_32377 = inst_32376;
var inst_32378 = (0);
var state_32413__$1 = (function (){var statearr_32416 = state_32413;
(statearr_32416[(7)] = inst_32378);

(statearr_32416[(8)] = inst_32377);

return statearr_32416;
})();
var statearr_32417_32443 = state_32413__$1;
(statearr_32417_32443[(2)] = null);

(statearr_32417_32443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (4))){
var inst_32381 = (state_32413[(9)]);
var inst_32381__$1 = (state_32413[(2)]);
var inst_32382 = (inst_32381__$1 == null);
var inst_32383 = cljs.core.not.call(null,inst_32382);
var state_32413__$1 = (function (){var statearr_32418 = state_32413;
(statearr_32418[(9)] = inst_32381__$1);

return statearr_32418;
})();
if(inst_32383){
var statearr_32419_32444 = state_32413__$1;
(statearr_32419_32444[(1)] = (5));

} else {
var statearr_32420_32445 = state_32413__$1;
(statearr_32420_32445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (15))){
var inst_32403 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32421_32446 = state_32413__$1;
(statearr_32421_32446[(2)] = inst_32403);

(statearr_32421_32446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (13))){
var state_32413__$1 = state_32413;
var statearr_32422_32447 = state_32413__$1;
(statearr_32422_32447[(2)] = null);

(statearr_32422_32447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (6))){
var inst_32378 = (state_32413[(7)]);
var inst_32399 = (inst_32378 > (0));
var state_32413__$1 = state_32413;
if(cljs.core.truth_(inst_32399)){
var statearr_32423_32448 = state_32413__$1;
(statearr_32423_32448[(1)] = (12));

} else {
var statearr_32424_32449 = state_32413__$1;
(statearr_32424_32449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (3))){
var inst_32411 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32413__$1,inst_32411);
} else {
if((state_val_32414 === (12))){
var inst_32377 = (state_32413[(8)]);
var inst_32401 = cljs.core.vec.call(null,inst_32377);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32413__$1,(15),out,inst_32401);
} else {
if((state_val_32414 === (2))){
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32413__$1,(4),ch);
} else {
if((state_val_32414 === (11))){
var inst_32393 = (state_32413[(2)]);
var inst_32394 = (new Array(n));
var inst_32377 = inst_32394;
var inst_32378 = (0);
var state_32413__$1 = (function (){var statearr_32425 = state_32413;
(statearr_32425[(7)] = inst_32378);

(statearr_32425[(8)] = inst_32377);

(statearr_32425[(10)] = inst_32393);

return statearr_32425;
})();
var statearr_32426_32450 = state_32413__$1;
(statearr_32426_32450[(2)] = null);

(statearr_32426_32450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (9))){
var inst_32377 = (state_32413[(8)]);
var inst_32391 = cljs.core.vec.call(null,inst_32377);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32413__$1,(11),out,inst_32391);
} else {
if((state_val_32414 === (5))){
var inst_32378 = (state_32413[(7)]);
var inst_32386 = (state_32413[(11)]);
var inst_32377 = (state_32413[(8)]);
var inst_32381 = (state_32413[(9)]);
var inst_32385 = (inst_32377[inst_32378] = inst_32381);
var inst_32386__$1 = (inst_32378 + (1));
var inst_32387 = (inst_32386__$1 < n);
var state_32413__$1 = (function (){var statearr_32427 = state_32413;
(statearr_32427[(11)] = inst_32386__$1);

(statearr_32427[(12)] = inst_32385);

return statearr_32427;
})();
if(cljs.core.truth_(inst_32387)){
var statearr_32428_32451 = state_32413__$1;
(statearr_32428_32451[(1)] = (8));

} else {
var statearr_32429_32452 = state_32413__$1;
(statearr_32429_32452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (14))){
var inst_32406 = (state_32413[(2)]);
var inst_32407 = cljs.core.async.close_BANG_.call(null,out);
var state_32413__$1 = (function (){var statearr_32431 = state_32413;
(statearr_32431[(13)] = inst_32406);

return statearr_32431;
})();
var statearr_32432_32453 = state_32413__$1;
(statearr_32432_32453[(2)] = inst_32407);

(statearr_32432_32453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (10))){
var inst_32397 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32433_32454 = state_32413__$1;
(statearr_32433_32454[(2)] = inst_32397);

(statearr_32433_32454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (8))){
var inst_32386 = (state_32413[(11)]);
var inst_32377 = (state_32413[(8)]);
var tmp32430 = inst_32377;
var inst_32377__$1 = tmp32430;
var inst_32378 = inst_32386;
var state_32413__$1 = (function (){var statearr_32434 = state_32413;
(statearr_32434[(7)] = inst_32378);

(statearr_32434[(8)] = inst_32377__$1);

return statearr_32434;
})();
var statearr_32435_32455 = state_32413__$1;
(statearr_32435_32455[(2)] = null);

(statearr_32435_32455[(1)] = (2));


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
});})(c__30639__auto___32441,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32441,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32413){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__30555__auto__ = e32437;
var statearr_32438_32456 = state_32413;
(statearr_32438_32456[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32457 = state_32413;
state_32413 = G__32457;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32441,out))
})();
var state__30641__auto__ = (function (){var statearr_32439 = f__30640__auto__.call(null);
(statearr_32439[(6)] = c__30639__auto___32441);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32441,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32459 = arguments.length;
switch (G__32459) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30639__auto___32529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___32529,out){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___32529,out){
return (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (7))){
var inst_32497 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32503_32530 = state_32501__$1;
(statearr_32503_32530[(2)] = inst_32497);

(statearr_32503_32530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (1))){
var inst_32460 = [];
var inst_32461 = inst_32460;
var inst_32462 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32501__$1 = (function (){var statearr_32504 = state_32501;
(statearr_32504[(7)] = inst_32462);

(statearr_32504[(8)] = inst_32461);

return statearr_32504;
})();
var statearr_32505_32531 = state_32501__$1;
(statearr_32505_32531[(2)] = null);

(statearr_32505_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (4))){
var inst_32465 = (state_32501[(9)]);
var inst_32465__$1 = (state_32501[(2)]);
var inst_32466 = (inst_32465__$1 == null);
var inst_32467 = cljs.core.not.call(null,inst_32466);
var state_32501__$1 = (function (){var statearr_32506 = state_32501;
(statearr_32506[(9)] = inst_32465__$1);

return statearr_32506;
})();
if(inst_32467){
var statearr_32507_32532 = state_32501__$1;
(statearr_32507_32532[(1)] = (5));

} else {
var statearr_32508_32533 = state_32501__$1;
(statearr_32508_32533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (15))){
var inst_32491 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32509_32534 = state_32501__$1;
(statearr_32509_32534[(2)] = inst_32491);

(statearr_32509_32534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (13))){
var state_32501__$1 = state_32501;
var statearr_32510_32535 = state_32501__$1;
(statearr_32510_32535[(2)] = null);

(statearr_32510_32535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (6))){
var inst_32461 = (state_32501[(8)]);
var inst_32486 = inst_32461.length;
var inst_32487 = (inst_32486 > (0));
var state_32501__$1 = state_32501;
if(cljs.core.truth_(inst_32487)){
var statearr_32511_32536 = state_32501__$1;
(statearr_32511_32536[(1)] = (12));

} else {
var statearr_32512_32537 = state_32501__$1;
(statearr_32512_32537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (3))){
var inst_32499 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (12))){
var inst_32461 = (state_32501[(8)]);
var inst_32489 = cljs.core.vec.call(null,inst_32461);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32501__$1,(15),out,inst_32489);
} else {
if((state_val_32502 === (2))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,(4),ch);
} else {
if((state_val_32502 === (11))){
var inst_32465 = (state_32501[(9)]);
var inst_32469 = (state_32501[(10)]);
var inst_32479 = (state_32501[(2)]);
var inst_32480 = [];
var inst_32481 = inst_32480.push(inst_32465);
var inst_32461 = inst_32480;
var inst_32462 = inst_32469;
var state_32501__$1 = (function (){var statearr_32513 = state_32501;
(statearr_32513[(7)] = inst_32462);

(statearr_32513[(11)] = inst_32479);

(statearr_32513[(8)] = inst_32461);

(statearr_32513[(12)] = inst_32481);

return statearr_32513;
})();
var statearr_32514_32538 = state_32501__$1;
(statearr_32514_32538[(2)] = null);

(statearr_32514_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (9))){
var inst_32461 = (state_32501[(8)]);
var inst_32477 = cljs.core.vec.call(null,inst_32461);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32501__$1,(11),out,inst_32477);
} else {
if((state_val_32502 === (5))){
var inst_32465 = (state_32501[(9)]);
var inst_32462 = (state_32501[(7)]);
var inst_32469 = (state_32501[(10)]);
var inst_32469__$1 = f.call(null,inst_32465);
var inst_32470 = cljs.core._EQ_.call(null,inst_32469__$1,inst_32462);
var inst_32471 = cljs.core.keyword_identical_QMARK_.call(null,inst_32462,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32472 = (inst_32470) || (inst_32471);
var state_32501__$1 = (function (){var statearr_32515 = state_32501;
(statearr_32515[(10)] = inst_32469__$1);

return statearr_32515;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32516_32539 = state_32501__$1;
(statearr_32516_32539[(1)] = (8));

} else {
var statearr_32517_32540 = state_32501__$1;
(statearr_32517_32540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (14))){
var inst_32494 = (state_32501[(2)]);
var inst_32495 = cljs.core.async.close_BANG_.call(null,out);
var state_32501__$1 = (function (){var statearr_32519 = state_32501;
(statearr_32519[(13)] = inst_32494);

return statearr_32519;
})();
var statearr_32520_32541 = state_32501__$1;
(statearr_32520_32541[(2)] = inst_32495);

(statearr_32520_32541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (10))){
var inst_32484 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32521_32542 = state_32501__$1;
(statearr_32521_32542[(2)] = inst_32484);

(statearr_32521_32542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (8))){
var inst_32465 = (state_32501[(9)]);
var inst_32461 = (state_32501[(8)]);
var inst_32469 = (state_32501[(10)]);
var inst_32474 = inst_32461.push(inst_32465);
var tmp32518 = inst_32461;
var inst_32461__$1 = tmp32518;
var inst_32462 = inst_32469;
var state_32501__$1 = (function (){var statearr_32522 = state_32501;
(statearr_32522[(14)] = inst_32474);

(statearr_32522[(7)] = inst_32462);

(statearr_32522[(8)] = inst_32461__$1);

return statearr_32522;
})();
var statearr_32523_32543 = state_32501__$1;
(statearr_32523_32543[(2)] = null);

(statearr_32523_32543[(1)] = (2));


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
});})(c__30639__auto___32529,out))
;
return ((function (switch__30551__auto__,c__30639__auto___32529,out){
return (function() {
var cljs$core$async$state_machine__30552__auto__ = null;
var cljs$core$async$state_machine__30552__auto____0 = (function (){
var statearr_32524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32524[(0)] = cljs$core$async$state_machine__30552__auto__);

(statearr_32524[(1)] = (1));

return statearr_32524;
});
var cljs$core$async$state_machine__30552__auto____1 = (function (state_32501){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_32501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e32525){if((e32525 instanceof Object)){
var ex__30555__auto__ = e32525;
var statearr_32526_32544 = state_32501;
(statearr_32526_32544[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_32501;
state_32501 = G__32545;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
cljs$core$async$state_machine__30552__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30552__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30552__auto____0;
cljs$core$async$state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30552__auto____1;
return cljs$core$async$state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___32529,out))
})();
var state__30641__auto__ = (function (){var statearr_32527 = f__30640__auto__.call(null);
(statearr_32527[(6)] = c__30639__auto___32529);

return statearr_32527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___32529,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511532873335
