goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14803 = (function (f,blockable,meta14804){
this.f = f;
this.blockable = blockable;
this.meta14804 = meta14804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14805,meta14804__$1){
var self__ = this;
var _14805__$1 = this;
return (new cljs.core.async.t_cljs$core$async14803(self__.f,self__.blockable,meta14804__$1));
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14805){
var self__ = this;
var _14805__$1 = this;
return self__.meta14804;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14804","meta14804",1477705055,null)], null);
}));

(cljs.core.async.t_cljs$core$async14803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14803");

(cljs.core.async.t_cljs$core$async14803.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14803.
 */
cljs.core.async.__GT_t_cljs$core$async14803 = (function cljs$core$async$__GT_t_cljs$core$async14803(f,blockable,meta14804){
return (new cljs.core.async.t_cljs$core$async14803(f,blockable,meta14804));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14802 = arguments.length;
switch (G__14802) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14825 = arguments.length;
switch (G__14825) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14841 = arguments.length;
switch (G__14841) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__14862 = arguments.length;
switch (G__14862) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16874 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16874) : fn1.call(null,val_16874));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16874) : fn1.call(null,val_16874));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14874 = arguments.length;
switch (G__14874) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___16887 = n;
var x_16888 = (0);
while(true){
if((x_16888 < n__5741__auto___16887)){
(a[x_16888] = x_16888);

var G__16889 = (x_16888 + (1));
x_16888 = G__16889;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14895 = (function (flag,meta14896){
this.flag = flag;
this.meta14896 = meta14896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14897,meta14896__$1){
var self__ = this;
var _14897__$1 = this;
return (new cljs.core.async.t_cljs$core$async14895(self__.flag,meta14896__$1));
}));

(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14897){
var self__ = this;
var _14897__$1 = this;
return self__.meta14896;
}));

(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14896","meta14896",-944989617,null)], null);
}));

(cljs.core.async.t_cljs$core$async14895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14895");

(cljs.core.async.t_cljs$core$async14895.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14895.
 */
cljs.core.async.__GT_t_cljs$core$async14895 = (function cljs$core$async$__GT_t_cljs$core$async14895(flag,meta14896){
return (new cljs.core.async.t_cljs$core$async14895(flag,meta14896));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14895(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14898 = (function (flag,cb,meta14899){
this.flag = flag;
this.cb = cb;
this.meta14899 = meta14899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14900,meta14899__$1){
var self__ = this;
var _14900__$1 = this;
return (new cljs.core.async.t_cljs$core$async14898(self__.flag,self__.cb,meta14899__$1));
}));

(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14900){
var self__ = this;
var _14900__$1 = this;
return self__.meta14899;
}));

(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14899","meta14899",-1200402115,null)], null);
}));

(cljs.core.async.t_cljs$core$async14898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14898");

(cljs.core.async.t_cljs$core$async14898.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14898.
 */
cljs.core.async.__GT_t_cljs$core$async14898 = (function cljs$core$async$__GT_t_cljs$core$async14898(flag,cb,meta14899){
return (new cljs.core.async.t_cljs$core$async14898(flag,cb,meta14899));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14898(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16895)){
if((!(((port_16895.cljs$core$IFn$_invoke$arity$1 ? port_16895.cljs$core$IFn$_invoke$arity$1((1)) : port_16895.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__16896 = (i + (1));
i = G__16896;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14909_SHARP_){
var G__14916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14909_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14916) : fret.call(null,G__14916));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14910_SHARP_){
var G__14917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14910_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14917) : fret.call(null,G__14917));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16900 = (i + (1));
i = G__16900;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5882__auto__ = [];
var len__5876__auto___16901 = arguments.length;
var i__5877__auto___16902 = (0);
while(true){
if((i__5877__auto___16902 < len__5876__auto___16901)){
args__5882__auto__.push((arguments[i__5877__auto___16902]));

var G__16903 = (i__5877__auto___16902 + (1));
i__5877__auto___16902 = G__16903;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14928){
var map__14929 = p__14928;
var map__14929__$1 = cljs.core.__destructure_map(map__14929);
var opts = map__14929__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14921){
var G__14922 = cljs.core.first(seq14921);
var seq14921__$1 = cljs.core.next(seq14921);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14922,seq14921__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__14931 = arguments.length;
switch (G__14931) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14728__auto___16906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_14963){
var state_val_14966 = (state_14963[(1)]);
if((state_val_14966 === (7))){
var inst_14957 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14967_16907 = state_14963__$1;
(statearr_14967_16907[(2)] = inst_14957);

(statearr_14967_16907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (1))){
var state_14963__$1 = state_14963;
var statearr_14968_16908 = state_14963__$1;
(statearr_14968_16908[(2)] = null);

(statearr_14968_16908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (4))){
var inst_14939 = (state_14963[(7)]);
var inst_14939__$1 = (state_14963[(2)]);
var inst_14941 = (inst_14939__$1 == null);
var state_14963__$1 = (function (){var statearr_14969 = state_14963;
(statearr_14969[(7)] = inst_14939__$1);

return statearr_14969;
})();
if(cljs.core.truth_(inst_14941)){
var statearr_14970_16909 = state_14963__$1;
(statearr_14970_16909[(1)] = (5));

} else {
var statearr_14971_16910 = state_14963__$1;
(statearr_14971_16910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (13))){
var state_14963__$1 = state_14963;
var statearr_14972_16911 = state_14963__$1;
(statearr_14972_16911[(2)] = null);

(statearr_14972_16911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (6))){
var inst_14939 = (state_14963[(7)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14963__$1,(11),to,inst_14939);
} else {
if((state_val_14966 === (3))){
var inst_14959 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14963__$1,inst_14959);
} else {
if((state_val_14966 === (12))){
var state_14963__$1 = state_14963;
var statearr_14977_16912 = state_14963__$1;
(statearr_14977_16912[(2)] = null);

(statearr_14977_16912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (2))){
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(4),from);
} else {
if((state_val_14966 === (11))){
var inst_14950 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
if(cljs.core.truth_(inst_14950)){
var statearr_14978_16914 = state_14963__$1;
(statearr_14978_16914[(1)] = (12));

} else {
var statearr_14979_16915 = state_14963__$1;
(statearr_14979_16915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (9))){
var state_14963__$1 = state_14963;
var statearr_14980_16916 = state_14963__$1;
(statearr_14980_16916[(2)] = null);

(statearr_14980_16916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (5))){
var state_14963__$1 = state_14963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14981_16917 = state_14963__$1;
(statearr_14981_16917[(1)] = (8));

} else {
var statearr_14982_16918 = state_14963__$1;
(statearr_14982_16918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (14))){
var inst_14955 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14986_16919 = state_14963__$1;
(statearr_14986_16919[(2)] = inst_14955);

(statearr_14986_16919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (10))){
var inst_14947 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14987_16920 = state_14963__$1;
(statearr_14987_16920[(2)] = inst_14947);

(statearr_14987_16920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14966 === (8))){
var inst_14944 = cljs.core.async.close_BANG_(to);
var state_14963__$1 = state_14963;
var statearr_14988_16921 = state_14963__$1;
(statearr_14988_16921[(2)] = inst_14944);

(statearr_14988_16921[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_14990 = [null,null,null,null,null,null,null,null];
(statearr_14990[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_14990[(1)] = (1));

return statearr_14990;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_14963){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_14963);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e14991){var ex__14627__auto__ = e14991;
var statearr_14992_16922 = state_14963;
(statearr_14992_16922[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_14963[(4)]))){
var statearr_14993_16923 = state_14963;
(statearr_14993_16923[(1)] = cljs.core.first((state_14963[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16924 = state_14963;
state_14963 = G__16924;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_14963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_14963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_14994 = f__14729__auto__();
(statearr_14994[(6)] = c__14728__auto___16906);

return statearr_14994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15000){
var vec__15001 = p__15000;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
var job = vec__15001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14728__auto___16925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15010){
var state_val_15011 = (state_15010[(1)]);
if((state_val_15011 === (1))){
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15010__$1,(2),res,v);
} else {
if((state_val_15011 === (2))){
var inst_15006 = (state_15010[(2)]);
var inst_15008 = cljs.core.async.close_BANG_(res);
var state_15010__$1 = (function (){var statearr_15012 = state_15010;
(statearr_15012[(7)] = inst_15006);

return statearr_15012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15010__$1,inst_15008);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_15013 = [null,null,null,null,null,null,null,null];
(statearr_15013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__);

(statearr_15013[(1)] = (1));

return statearr_15013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1 = (function (state_15010){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15010);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15014){var ex__14627__auto__ = e15014;
var statearr_15015_16927 = state_15010;
(statearr_15015_16927[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15010[(4)]))){
var statearr_15016_16928 = state_15010;
(statearr_15016_16928[(1)] = cljs.core.first((state_15010[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16930 = state_15010;
state_15010 = G__16930;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = function(state_15010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1.call(this,state_15010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15017 = f__14729__auto__();
(statearr_15017[(6)] = c__14728__auto___16925);

return statearr_15017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15018){
var vec__15019 = p__15018;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(1),null);
var job = vec__15019;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___16931 = n;
var __16932 = (0);
while(true){
if((__16932 < n__5741__auto___16931)){
var G__15022_16933 = type;
var G__15022_16934__$1 = (((G__15022_16933 instanceof cljs.core.Keyword))?G__15022_16933.fqn:null);
switch (G__15022_16934__$1) {
case "compute":
var c__14728__auto___16936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16932,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = ((function (__16932,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function (state_15035){
var state_val_15036 = (state_15035[(1)]);
if((state_val_15036 === (1))){
var state_15035__$1 = state_15035;
var statearr_15038_16939 = state_15035__$1;
(statearr_15038_16939[(2)] = null);

(statearr_15038_16939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (2))){
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15035__$1,(4),jobs);
} else {
if((state_val_15036 === (3))){
var inst_15033 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15035__$1,inst_15033);
} else {
if((state_val_15036 === (4))){
var inst_15025 = (state_15035[(2)]);
var inst_15026 = process__$1(inst_15025);
var state_15035__$1 = state_15035;
if(cljs.core.truth_(inst_15026)){
var statearr_15039_16940 = state_15035__$1;
(statearr_15039_16940[(1)] = (5));

} else {
var statearr_15040_16941 = state_15035__$1;
(statearr_15040_16941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (5))){
var state_15035__$1 = state_15035;
var statearr_15041_16942 = state_15035__$1;
(statearr_15041_16942[(2)] = null);

(statearr_15041_16942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (6))){
var state_15035__$1 = state_15035;
var statearr_15043_16943 = state_15035__$1;
(statearr_15043_16943[(2)] = null);

(statearr_15043_16943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (7))){
var inst_15031 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15044_16944 = state_15035__$1;
(statearr_15044_16944[(2)] = inst_15031);

(statearr_15044_16944[(1)] = (3));


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
});})(__16932,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
;
return ((function (__16932,switch__14623__auto__,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_15046 = [null,null,null,null,null,null,null];
(statearr_15046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__);

(statearr_15046[(1)] = (1));

return statearr_15046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1 = (function (state_15035){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15035);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15047){var ex__14627__auto__ = e15047;
var statearr_15048_16945 = state_15035;
(statearr_15048_16945[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15035[(4)]))){
var statearr_15049_16946 = state_15035;
(statearr_15049_16946[(1)] = cljs.core.first((state_15035[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16947 = state_15035;
state_15035 = G__16947;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = function(state_15035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1.call(this,state_15035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__;
})()
;})(__16932,switch__14623__auto__,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
})();
var state__14730__auto__ = (function (){var statearr_15050 = f__14729__auto__();
(statearr_15050[(6)] = c__14728__auto___16936);

return statearr_15050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
});})(__16932,c__14728__auto___16936,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
);


break;
case "async":
var c__14728__auto___16948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16932,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = ((function (__16932,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function (state_15066){
var state_val_15067 = (state_15066[(1)]);
if((state_val_15067 === (1))){
var state_15066__$1 = state_15066;
var statearr_15068_16949 = state_15066__$1;
(statearr_15068_16949[(2)] = null);

(statearr_15068_16949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (2))){
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(4),jobs);
} else {
if((state_val_15067 === (3))){
var inst_15064 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15066__$1,inst_15064);
} else {
if((state_val_15067 === (4))){
var inst_15056 = (state_15066[(2)]);
var inst_15057 = async(inst_15056);
var state_15066__$1 = state_15066;
if(cljs.core.truth_(inst_15057)){
var statearr_15069_16950 = state_15066__$1;
(statearr_15069_16950[(1)] = (5));

} else {
var statearr_15070_16952 = state_15066__$1;
(statearr_15070_16952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (5))){
var state_15066__$1 = state_15066;
var statearr_15071_16953 = state_15066__$1;
(statearr_15071_16953[(2)] = null);

(statearr_15071_16953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (6))){
var state_15066__$1 = state_15066;
var statearr_15072_16955 = state_15066__$1;
(statearr_15072_16955[(2)] = null);

(statearr_15072_16955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (7))){
var inst_15062 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15073_16956 = state_15066__$1;
(statearr_15073_16956[(2)] = inst_15062);

(statearr_15073_16956[(1)] = (3));


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
});})(__16932,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
;
return ((function (__16932,switch__14623__auto__,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_15074 = [null,null,null,null,null,null,null];
(statearr_15074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__);

(statearr_15074[(1)] = (1));

return statearr_15074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1 = (function (state_15066){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15066);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15075){var ex__14627__auto__ = e15075;
var statearr_15076_16957 = state_15066;
(statearr_15076_16957[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15066[(4)]))){
var statearr_15077_16958 = state_15066;
(statearr_15077_16958[(1)] = cljs.core.first((state_15066[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16960 = state_15066;
state_15066 = G__16960;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = function(state_15066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1.call(this,state_15066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__;
})()
;})(__16932,switch__14623__auto__,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
})();
var state__14730__auto__ = (function (){var statearr_15078 = f__14729__auto__();
(statearr_15078[(6)] = c__14728__auto___16948);

return statearr_15078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
});})(__16932,c__14728__auto___16948,G__15022_16933,G__15022_16934__$1,n__5741__auto___16931,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15022_16934__$1))));

}

var G__16961 = (__16932 + (1));
__16932 = G__16961;
continue;
} else {
}
break;
}

var c__14728__auto___16962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15100){
var state_val_15102 = (state_15100[(1)]);
if((state_val_15102 === (7))){
var inst_15096 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15108_16963 = state_15100__$1;
(statearr_15108_16963[(2)] = inst_15096);

(statearr_15108_16963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (1))){
var state_15100__$1 = state_15100;
var statearr_15109_16964 = state_15100__$1;
(statearr_15109_16964[(2)] = null);

(statearr_15109_16964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (4))){
var inst_15081 = (state_15100[(7)]);
var inst_15081__$1 = (state_15100[(2)]);
var inst_15082 = (inst_15081__$1 == null);
var state_15100__$1 = (function (){var statearr_15111 = state_15100;
(statearr_15111[(7)] = inst_15081__$1);

return statearr_15111;
})();
if(cljs.core.truth_(inst_15082)){
var statearr_15112_16965 = state_15100__$1;
(statearr_15112_16965[(1)] = (5));

} else {
var statearr_15113_16966 = state_15100__$1;
(statearr_15113_16966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (6))){
var inst_15081 = (state_15100[(7)]);
var inst_15086 = (state_15100[(8)]);
var inst_15086__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15088 = [inst_15081,inst_15086__$1];
var inst_15089 = (new cljs.core.PersistentVector(null,2,(5),inst_15087,inst_15088,null));
var state_15100__$1 = (function (){var statearr_15114 = state_15100;
(statearr_15114[(8)] = inst_15086__$1);

return statearr_15114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15100__$1,(8),jobs,inst_15089);
} else {
if((state_val_15102 === (3))){
var inst_15098 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15100__$1,inst_15098);
} else {
if((state_val_15102 === (2))){
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15100__$1,(4),from);
} else {
if((state_val_15102 === (9))){
var inst_15093 = (state_15100[(2)]);
var state_15100__$1 = (function (){var statearr_15115 = state_15100;
(statearr_15115[(9)] = inst_15093);

return statearr_15115;
})();
var statearr_15116_16967 = state_15100__$1;
(statearr_15116_16967[(2)] = null);

(statearr_15116_16967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (5))){
var inst_15084 = cljs.core.async.close_BANG_(jobs);
var state_15100__$1 = state_15100;
var statearr_15117_16968 = state_15100__$1;
(statearr_15117_16968[(2)] = inst_15084);

(statearr_15117_16968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (8))){
var inst_15086 = (state_15100[(8)]);
var inst_15091 = (state_15100[(2)]);
var state_15100__$1 = (function (){var statearr_15118 = state_15100;
(statearr_15118[(10)] = inst_15091);

return statearr_15118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15100__$1,(9),results,inst_15086);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_15121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__);

(statearr_15121[(1)] = (1));

return statearr_15121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1 = (function (state_15100){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15100);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15122){var ex__14627__auto__ = e15122;
var statearr_15123_16972 = state_15100;
(statearr_15123_16972[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15100[(4)]))){
var statearr_15124_16973 = state_15100;
(statearr_15124_16973[(1)] = cljs.core.first((state_15100[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16974 = state_15100;
state_15100 = G__16974;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15125 = f__14729__auto__();
(statearr_15125[(6)] = c__14728__auto___16962);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15163){
var state_val_15164 = (state_15163[(1)]);
if((state_val_15164 === (7))){
var inst_15159 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
var statearr_15165_16975 = state_15163__$1;
(statearr_15165_16975[(2)] = inst_15159);

(statearr_15165_16975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (20))){
var state_15163__$1 = state_15163;
var statearr_15166_16977 = state_15163__$1;
(statearr_15166_16977[(2)] = null);

(statearr_15166_16977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (1))){
var state_15163__$1 = state_15163;
var statearr_15167_16978 = state_15163__$1;
(statearr_15167_16978[(2)] = null);

(statearr_15167_16978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (4))){
var inst_15128 = (state_15163[(7)]);
var inst_15128__$1 = (state_15163[(2)]);
var inst_15129 = (inst_15128__$1 == null);
var state_15163__$1 = (function (){var statearr_15168 = state_15163;
(statearr_15168[(7)] = inst_15128__$1);

return statearr_15168;
})();
if(cljs.core.truth_(inst_15129)){
var statearr_15169_16979 = state_15163__$1;
(statearr_15169_16979[(1)] = (5));

} else {
var statearr_15170_16980 = state_15163__$1;
(statearr_15170_16980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (15))){
var inst_15141 = (state_15163[(8)]);
var state_15163__$1 = state_15163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15163__$1,(18),to,inst_15141);
} else {
if((state_val_15164 === (21))){
var inst_15154 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
var statearr_15171_16982 = state_15163__$1;
(statearr_15171_16982[(2)] = inst_15154);

(statearr_15171_16982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (13))){
var inst_15156 = (state_15163[(2)]);
var state_15163__$1 = (function (){var statearr_15173 = state_15163;
(statearr_15173[(9)] = inst_15156);

return statearr_15173;
})();
var statearr_15174_16986 = state_15163__$1;
(statearr_15174_16986[(2)] = null);

(statearr_15174_16986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (6))){
var inst_15128 = (state_15163[(7)]);
var state_15163__$1 = state_15163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15163__$1,(11),inst_15128);
} else {
if((state_val_15164 === (17))){
var inst_15149 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
if(cljs.core.truth_(inst_15149)){
var statearr_15175_16987 = state_15163__$1;
(statearr_15175_16987[(1)] = (19));

} else {
var statearr_15176_16988 = state_15163__$1;
(statearr_15176_16988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (3))){
var inst_15161 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15163__$1,inst_15161);
} else {
if((state_val_15164 === (12))){
var inst_15138 = (state_15163[(10)]);
var state_15163__$1 = state_15163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15163__$1,(14),inst_15138);
} else {
if((state_val_15164 === (2))){
var state_15163__$1 = state_15163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15163__$1,(4),results);
} else {
if((state_val_15164 === (19))){
var state_15163__$1 = state_15163;
var statearr_15177_16990 = state_15163__$1;
(statearr_15177_16990[(2)] = null);

(statearr_15177_16990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (11))){
var inst_15138 = (state_15163[(2)]);
var state_15163__$1 = (function (){var statearr_15178 = state_15163;
(statearr_15178[(10)] = inst_15138);

return statearr_15178;
})();
var statearr_15179_16991 = state_15163__$1;
(statearr_15179_16991[(2)] = null);

(statearr_15179_16991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (9))){
var state_15163__$1 = state_15163;
var statearr_15181_16992 = state_15163__$1;
(statearr_15181_16992[(2)] = null);

(statearr_15181_16992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (5))){
var state_15163__$1 = state_15163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15183_16993 = state_15163__$1;
(statearr_15183_16993[(1)] = (8));

} else {
var statearr_15184_16994 = state_15163__$1;
(statearr_15184_16994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (14))){
var inst_15141 = (state_15163[(8)]);
var inst_15143 = (state_15163[(11)]);
var inst_15141__$1 = (state_15163[(2)]);
var inst_15142 = (inst_15141__$1 == null);
var inst_15143__$1 = cljs.core.not(inst_15142);
var state_15163__$1 = (function (){var statearr_15185 = state_15163;
(statearr_15185[(8)] = inst_15141__$1);

(statearr_15185[(11)] = inst_15143__$1);

return statearr_15185;
})();
if(inst_15143__$1){
var statearr_15186_16995 = state_15163__$1;
(statearr_15186_16995[(1)] = (15));

} else {
var statearr_15187_16996 = state_15163__$1;
(statearr_15187_16996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (16))){
var inst_15143 = (state_15163[(11)]);
var state_15163__$1 = state_15163;
var statearr_15188_16997 = state_15163__$1;
(statearr_15188_16997[(2)] = inst_15143);

(statearr_15188_16997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (10))){
var inst_15135 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
var statearr_15189_16998 = state_15163__$1;
(statearr_15189_16998[(2)] = inst_15135);

(statearr_15189_16998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (18))){
var inst_15146 = (state_15163[(2)]);
var state_15163__$1 = state_15163;
var statearr_15190_16999 = state_15163__$1;
(statearr_15190_16999[(2)] = inst_15146);

(statearr_15190_16999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15164 === (8))){
var inst_15132 = cljs.core.async.close_BANG_(to);
var state_15163__$1 = state_15163;
var statearr_15191_17000 = state_15163__$1;
(statearr_15191_17000[(2)] = inst_15132);

(statearr_15191_17000[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1 = (function (state_15163){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15163);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15193){var ex__14627__auto__ = e15193;
var statearr_15194_17002 = state_15163;
(statearr_15194_17002[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15163[(4)]))){
var statearr_15195_17003 = state_15163;
(statearr_15195_17003[(1)] = cljs.core.first((state_15163[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17004 = state_15163;
state_15163 = G__17004;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__ = function(state_15163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1.call(this,state_15163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15197 = f__14729__auto__();
(statearr_15197[(6)] = c__14728__auto__);

return statearr_15197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15200 = arguments.length;
switch (G__15200) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15202 = arguments.length;
switch (G__15202) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15204 = arguments.length;
switch (G__15204) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14728__auto___17010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15233){
var state_val_15234 = (state_15233[(1)]);
if((state_val_15234 === (7))){
var inst_15228 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
var statearr_15237_17014 = state_15233__$1;
(statearr_15237_17014[(2)] = inst_15228);

(statearr_15237_17014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (1))){
var state_15233__$1 = state_15233;
var statearr_15238_17015 = state_15233__$1;
(statearr_15238_17015[(2)] = null);

(statearr_15238_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (4))){
var inst_15208 = (state_15233[(7)]);
var inst_15208__$1 = (state_15233[(2)]);
var inst_15209 = (inst_15208__$1 == null);
var state_15233__$1 = (function (){var statearr_15241 = state_15233;
(statearr_15241[(7)] = inst_15208__$1);

return statearr_15241;
})();
if(cljs.core.truth_(inst_15209)){
var statearr_15242_17016 = state_15233__$1;
(statearr_15242_17016[(1)] = (5));

} else {
var statearr_15243_17017 = state_15233__$1;
(statearr_15243_17017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (13))){
var state_15233__$1 = state_15233;
var statearr_15245_17018 = state_15233__$1;
(statearr_15245_17018[(2)] = null);

(statearr_15245_17018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (6))){
var inst_15208 = (state_15233[(7)]);
var inst_15215 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15208) : p.call(null,inst_15208));
var state_15233__$1 = state_15233;
if(cljs.core.truth_(inst_15215)){
var statearr_15247_17019 = state_15233__$1;
(statearr_15247_17019[(1)] = (9));

} else {
var statearr_15248_17020 = state_15233__$1;
(statearr_15248_17020[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (3))){
var inst_15230 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15233__$1,inst_15230);
} else {
if((state_val_15234 === (12))){
var state_15233__$1 = state_15233;
var statearr_15250_17021 = state_15233__$1;
(statearr_15250_17021[(2)] = null);

(statearr_15250_17021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (2))){
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15233__$1,(4),ch);
} else {
if((state_val_15234 === (11))){
var inst_15208 = (state_15233[(7)]);
var inst_15219 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15233__$1,(8),inst_15219,inst_15208);
} else {
if((state_val_15234 === (9))){
var state_15233__$1 = state_15233;
var statearr_15253_17023 = state_15233__$1;
(statearr_15253_17023[(2)] = tc);

(statearr_15253_17023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (5))){
var inst_15211 = cljs.core.async.close_BANG_(tc);
var inst_15212 = cljs.core.async.close_BANG_(fc);
var state_15233__$1 = (function (){var statearr_15254 = state_15233;
(statearr_15254[(8)] = inst_15211);

return statearr_15254;
})();
var statearr_15255_17024 = state_15233__$1;
(statearr_15255_17024[(2)] = inst_15212);

(statearr_15255_17024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (14))){
var inst_15226 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
var statearr_15257_17025 = state_15233__$1;
(statearr_15257_17025[(2)] = inst_15226);

(statearr_15257_17025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (10))){
var state_15233__$1 = state_15233;
var statearr_15259_17026 = state_15233__$1;
(statearr_15259_17026[(2)] = fc);

(statearr_15259_17026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (8))){
var inst_15221 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
if(cljs.core.truth_(inst_15221)){
var statearr_15260_17027 = state_15233__$1;
(statearr_15260_17027[(1)] = (12));

} else {
var statearr_15261_17028 = state_15233__$1;
(statearr_15261_17028[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_15262 = [null,null,null,null,null,null,null,null,null];
(statearr_15262[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_15262[(1)] = (1));

return statearr_15262;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_15233){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15233);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15264){var ex__14627__auto__ = e15264;
var statearr_15265_17031 = state_15233;
(statearr_15265_17031[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15233[(4)]))){
var statearr_15267_17032 = state_15233;
(statearr_15267_17032[(1)] = cljs.core.first((state_15233[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17033 = state_15233;
state_15233 = G__17033;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_15233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_15233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15268 = f__14729__auto__();
(statearr_15268[(6)] = c__14728__auto___17010);

return statearr_15268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15290){
var state_val_15291 = (state_15290[(1)]);
if((state_val_15291 === (7))){
var inst_15286 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
var statearr_15292_17038 = state_15290__$1;
(statearr_15292_17038[(2)] = inst_15286);

(statearr_15292_17038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (1))){
var inst_15269 = init;
var inst_15270 = inst_15269;
var state_15290__$1 = (function (){var statearr_15293 = state_15290;
(statearr_15293[(7)] = inst_15270);

return statearr_15293;
})();
var statearr_15294_17039 = state_15290__$1;
(statearr_15294_17039[(2)] = null);

(statearr_15294_17039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (4))){
var inst_15273 = (state_15290[(8)]);
var inst_15273__$1 = (state_15290[(2)]);
var inst_15274 = (inst_15273__$1 == null);
var state_15290__$1 = (function (){var statearr_15295 = state_15290;
(statearr_15295[(8)] = inst_15273__$1);

return statearr_15295;
})();
if(cljs.core.truth_(inst_15274)){
var statearr_15296_17043 = state_15290__$1;
(statearr_15296_17043[(1)] = (5));

} else {
var statearr_15297_17044 = state_15290__$1;
(statearr_15297_17044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (6))){
var inst_15270 = (state_15290[(7)]);
var inst_15273 = (state_15290[(8)]);
var inst_15277 = (state_15290[(9)]);
var inst_15277__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15270,inst_15273) : f.call(null,inst_15270,inst_15273));
var inst_15278 = cljs.core.reduced_QMARK_(inst_15277__$1);
var state_15290__$1 = (function (){var statearr_15298 = state_15290;
(statearr_15298[(9)] = inst_15277__$1);

return statearr_15298;
})();
if(inst_15278){
var statearr_15299_17046 = state_15290__$1;
(statearr_15299_17046[(1)] = (8));

} else {
var statearr_15300_17047 = state_15290__$1;
(statearr_15300_17047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (3))){
var inst_15288 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15290__$1,inst_15288);
} else {
if((state_val_15291 === (2))){
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15290__$1,(4),ch);
} else {
if((state_val_15291 === (9))){
var inst_15277 = (state_15290[(9)]);
var inst_15270 = inst_15277;
var state_15290__$1 = (function (){var statearr_15309 = state_15290;
(statearr_15309[(7)] = inst_15270);

return statearr_15309;
})();
var statearr_15310_17050 = state_15290__$1;
(statearr_15310_17050[(2)] = null);

(statearr_15310_17050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (5))){
var inst_15270 = (state_15290[(7)]);
var state_15290__$1 = state_15290;
var statearr_15315_17051 = state_15290__$1;
(statearr_15315_17051[(2)] = inst_15270);

(statearr_15315_17051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (10))){
var inst_15284 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
var statearr_15316_17053 = state_15290__$1;
(statearr_15316_17053[(2)] = inst_15284);

(statearr_15316_17053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (8))){
var inst_15277 = (state_15290[(9)]);
var inst_15280 = cljs.core.deref(inst_15277);
var state_15290__$1 = state_15290;
var statearr_15317_17054 = state_15290__$1;
(statearr_15317_17054[(2)] = inst_15280);

(statearr_15317_17054[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14624__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14624__auto____0 = (function (){
var statearr_15320 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15320[(0)] = cljs$core$async$reduce_$_state_machine__14624__auto__);

(statearr_15320[(1)] = (1));

return statearr_15320;
});
var cljs$core$async$reduce_$_state_machine__14624__auto____1 = (function (state_15290){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15290);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15321){var ex__14627__auto__ = e15321;
var statearr_15322_17055 = state_15290;
(statearr_15322_17055[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15290[(4)]))){
var statearr_15323_17056 = state_15290;
(statearr_15323_17056[(1)] = cljs.core.first((state_15290[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17057 = state_15290;
state_15290 = G__17057;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14624__auto__ = function(state_15290){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14624__auto____1.call(this,state_15290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14624__auto____0;
cljs$core$async$reduce_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14624__auto____1;
return cljs$core$async$reduce_$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15325 = f__14729__auto__();
(statearr_15325[(6)] = c__14728__auto__);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15331){
var state_val_15332 = (state_15331[(1)]);
if((state_val_15332 === (1))){
var inst_15326 = cljs.core.async.reduce(f__$1,init,ch);
var state_15331__$1 = state_15331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15331__$1,(2),inst_15326);
} else {
if((state_val_15332 === (2))){
var inst_15328 = (state_15331[(2)]);
var inst_15329 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15328) : f__$1.call(null,inst_15328));
var state_15331__$1 = state_15331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15331__$1,inst_15329);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14624__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14624__auto____0 = (function (){
var statearr_15337 = [null,null,null,null,null,null,null];
(statearr_15337[(0)] = cljs$core$async$transduce_$_state_machine__14624__auto__);

(statearr_15337[(1)] = (1));

return statearr_15337;
});
var cljs$core$async$transduce_$_state_machine__14624__auto____1 = (function (state_15331){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15331);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15340){var ex__14627__auto__ = e15340;
var statearr_15341_17061 = state_15331;
(statearr_15341_17061[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15331[(4)]))){
var statearr_15343_17062 = state_15331;
(statearr_15343_17062[(1)] = cljs.core.first((state_15331[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17063 = state_15331;
state_15331 = G__17063;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14624__auto__ = function(state_15331){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14624__auto____1.call(this,state_15331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14624__auto____0;
cljs$core$async$transduce_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14624__auto____1;
return cljs$core$async$transduce_$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15344 = f__14729__auto__();
(statearr_15344[(6)] = c__14728__auto__);

return statearr_15344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15350 = arguments.length;
switch (G__15350) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15382){
var state_val_15383 = (state_15382[(1)]);
if((state_val_15383 === (7))){
var inst_15364 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15389_17073 = state_15382__$1;
(statearr_15389_17073[(2)] = inst_15364);

(statearr_15389_17073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (1))){
var inst_15358 = cljs.core.seq(coll);
var inst_15359 = inst_15358;
var state_15382__$1 = (function (){var statearr_15390 = state_15382;
(statearr_15390[(7)] = inst_15359);

return statearr_15390;
})();
var statearr_15391_17074 = state_15382__$1;
(statearr_15391_17074[(2)] = null);

(statearr_15391_17074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (4))){
var inst_15359 = (state_15382[(7)]);
var inst_15362 = cljs.core.first(inst_15359);
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15382__$1,(7),ch,inst_15362);
} else {
if((state_val_15383 === (13))){
var inst_15376 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15394_17075 = state_15382__$1;
(statearr_15394_17075[(2)] = inst_15376);

(statearr_15394_17075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (6))){
var inst_15367 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
if(cljs.core.truth_(inst_15367)){
var statearr_15395_17077 = state_15382__$1;
(statearr_15395_17077[(1)] = (8));

} else {
var statearr_15396_17078 = state_15382__$1;
(statearr_15396_17078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (3))){
var inst_15380 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15382__$1,inst_15380);
} else {
if((state_val_15383 === (12))){
var state_15382__$1 = state_15382;
var statearr_15400_17079 = state_15382__$1;
(statearr_15400_17079[(2)] = null);

(statearr_15400_17079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (2))){
var inst_15359 = (state_15382[(7)]);
var state_15382__$1 = state_15382;
if(cljs.core.truth_(inst_15359)){
var statearr_15402_17080 = state_15382__$1;
(statearr_15402_17080[(1)] = (4));

} else {
var statearr_15404_17081 = state_15382__$1;
(statearr_15404_17081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (11))){
var inst_15373 = cljs.core.async.close_BANG_(ch);
var state_15382__$1 = state_15382;
var statearr_15406_17082 = state_15382__$1;
(statearr_15406_17082[(2)] = inst_15373);

(statearr_15406_17082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (9))){
var state_15382__$1 = state_15382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15411_17083 = state_15382__$1;
(statearr_15411_17083[(1)] = (11));

} else {
var statearr_15412_17084 = state_15382__$1;
(statearr_15412_17084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (5))){
var inst_15359 = (state_15382[(7)]);
var state_15382__$1 = state_15382;
var statearr_15413_17085 = state_15382__$1;
(statearr_15413_17085[(2)] = inst_15359);

(statearr_15413_17085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (10))){
var inst_15378 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15414_17086 = state_15382__$1;
(statearr_15414_17086[(2)] = inst_15378);

(statearr_15414_17086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (8))){
var inst_15359 = (state_15382[(7)]);
var inst_15369 = cljs.core.next(inst_15359);
var inst_15359__$1 = inst_15369;
var state_15382__$1 = (function (){var statearr_15415 = state_15382;
(statearr_15415[(7)] = inst_15359__$1);

return statearr_15415;
})();
var statearr_15416_17088 = state_15382__$1;
(statearr_15416_17088[(2)] = null);

(statearr_15416_17088[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_15417 = [null,null,null,null,null,null,null,null];
(statearr_15417[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_15417[(1)] = (1));

return statearr_15417;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_15382){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15382);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15418){var ex__14627__auto__ = e15418;
var statearr_15419_17091 = state_15382;
(statearr_15419_17091[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15382[(4)]))){
var statearr_15420_17092 = state_15382;
(statearr_15420_17092[(1)] = cljs.core.first((state_15382[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17098 = state_15382;
state_15382 = G__17098;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_15382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_15382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15423 = f__14729__auto__();
(statearr_15423[(6)] = c__14728__auto__);

return statearr_15423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15425 = arguments.length;
switch (G__15425) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17100 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17100(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17106 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17106(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17109 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17109(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17110 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17110(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15434 = (function (ch,cs,meta15435){
this.ch = ch;
this.cs = cs;
this.meta15435 = meta15435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15436,meta15435__$1){
var self__ = this;
var _15436__$1 = this;
return (new cljs.core.async.t_cljs$core$async15434(self__.ch,self__.cs,meta15435__$1));
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15436){
var self__ = this;
var _15436__$1 = this;
return self__.meta15435;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15435","meta15435",-784967419,null)], null);
}));

(cljs.core.async.t_cljs$core$async15434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15434");

(cljs.core.async.t_cljs$core$async15434.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15434.
 */
cljs.core.async.__GT_t_cljs$core$async15434 = (function cljs$core$async$__GT_t_cljs$core$async15434(ch,cs,meta15435){
return (new cljs.core.async.t_cljs$core$async15434(ch,cs,meta15435));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15434(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14728__auto___17114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15587){
var state_val_15588 = (state_15587[(1)]);
if((state_val_15588 === (7))){
var inst_15583 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15589_17115 = state_15587__$1;
(statearr_15589_17115[(2)] = inst_15583);

(statearr_15589_17115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (20))){
var inst_15482 = (state_15587[(7)]);
var inst_15494 = cljs.core.first(inst_15482);
var inst_15495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15494,(0),null);
var inst_15496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15494,(1),null);
var state_15587__$1 = (function (){var statearr_15592 = state_15587;
(statearr_15592[(8)] = inst_15495);

return statearr_15592;
})();
if(cljs.core.truth_(inst_15496)){
var statearr_15595_17116 = state_15587__$1;
(statearr_15595_17116[(1)] = (22));

} else {
var statearr_15596_17117 = state_15587__$1;
(statearr_15596_17117[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (27))){
var inst_15524 = (state_15587[(9)]);
var inst_15526 = (state_15587[(10)]);
var inst_15531 = (state_15587[(11)]);
var inst_15451 = (state_15587[(12)]);
var inst_15531__$1 = cljs.core._nth(inst_15524,inst_15526);
var inst_15532 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15531__$1,inst_15451,done);
var state_15587__$1 = (function (){var statearr_15597 = state_15587;
(statearr_15597[(11)] = inst_15531__$1);

return statearr_15597;
})();
if(cljs.core.truth_(inst_15532)){
var statearr_15598_17118 = state_15587__$1;
(statearr_15598_17118[(1)] = (30));

} else {
var statearr_15599_17119 = state_15587__$1;
(statearr_15599_17119[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (1))){
var state_15587__$1 = state_15587;
var statearr_15600_17120 = state_15587__$1;
(statearr_15600_17120[(2)] = null);

(statearr_15600_17120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (24))){
var inst_15482 = (state_15587[(7)]);
var inst_15501 = (state_15587[(2)]);
var inst_15502 = cljs.core.next(inst_15482);
var inst_15460 = inst_15502;
var inst_15461 = null;
var inst_15462 = (0);
var inst_15463 = (0);
var state_15587__$1 = (function (){var statearr_15601 = state_15587;
(statearr_15601[(13)] = inst_15501);

(statearr_15601[(14)] = inst_15460);

(statearr_15601[(15)] = inst_15461);

(statearr_15601[(16)] = inst_15462);

(statearr_15601[(17)] = inst_15463);

return statearr_15601;
})();
var statearr_15602_17124 = state_15587__$1;
(statearr_15602_17124[(2)] = null);

(statearr_15602_17124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (39))){
var state_15587__$1 = state_15587;
var statearr_15606_17126 = state_15587__$1;
(statearr_15606_17126[(2)] = null);

(statearr_15606_17126[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (4))){
var inst_15451 = (state_15587[(12)]);
var inst_15451__$1 = (state_15587[(2)]);
var inst_15452 = (inst_15451__$1 == null);
var state_15587__$1 = (function (){var statearr_15607 = state_15587;
(statearr_15607[(12)] = inst_15451__$1);

return statearr_15607;
})();
if(cljs.core.truth_(inst_15452)){
var statearr_15608_17127 = state_15587__$1;
(statearr_15608_17127[(1)] = (5));

} else {
var statearr_15609_17128 = state_15587__$1;
(statearr_15609_17128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (15))){
var inst_15463 = (state_15587[(17)]);
var inst_15460 = (state_15587[(14)]);
var inst_15461 = (state_15587[(15)]);
var inst_15462 = (state_15587[(16)]);
var inst_15478 = (state_15587[(2)]);
var inst_15479 = (inst_15463 + (1));
var tmp15603 = inst_15460;
var tmp15604 = inst_15461;
var tmp15605 = inst_15462;
var inst_15460__$1 = tmp15603;
var inst_15461__$1 = tmp15604;
var inst_15462__$1 = tmp15605;
var inst_15463__$1 = inst_15479;
var state_15587__$1 = (function (){var statearr_15611 = state_15587;
(statearr_15611[(18)] = inst_15478);

(statearr_15611[(14)] = inst_15460__$1);

(statearr_15611[(15)] = inst_15461__$1);

(statearr_15611[(16)] = inst_15462__$1);

(statearr_15611[(17)] = inst_15463__$1);

return statearr_15611;
})();
var statearr_15612_17129 = state_15587__$1;
(statearr_15612_17129[(2)] = null);

(statearr_15612_17129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (21))){
var inst_15505 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15616_17130 = state_15587__$1;
(statearr_15616_17130[(2)] = inst_15505);

(statearr_15616_17130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (31))){
var inst_15531 = (state_15587[(11)]);
var inst_15535 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15531);
var state_15587__$1 = state_15587;
var statearr_15617_17133 = state_15587__$1;
(statearr_15617_17133[(2)] = inst_15535);

(statearr_15617_17133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (32))){
var inst_15526 = (state_15587[(10)]);
var inst_15523 = (state_15587[(19)]);
var inst_15524 = (state_15587[(9)]);
var inst_15525 = (state_15587[(20)]);
var inst_15537 = (state_15587[(2)]);
var inst_15538 = (inst_15526 + (1));
var tmp15613 = inst_15524;
var tmp15614 = inst_15525;
var tmp15615 = inst_15523;
var inst_15523__$1 = tmp15615;
var inst_15524__$1 = tmp15613;
var inst_15525__$1 = tmp15614;
var inst_15526__$1 = inst_15538;
var state_15587__$1 = (function (){var statearr_15618 = state_15587;
(statearr_15618[(21)] = inst_15537);

(statearr_15618[(19)] = inst_15523__$1);

(statearr_15618[(9)] = inst_15524__$1);

(statearr_15618[(20)] = inst_15525__$1);

(statearr_15618[(10)] = inst_15526__$1);

return statearr_15618;
})();
var statearr_15619_17134 = state_15587__$1;
(statearr_15619_17134[(2)] = null);

(statearr_15619_17134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (40))){
var inst_15553 = (state_15587[(22)]);
var inst_15557 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15553);
var state_15587__$1 = state_15587;
var statearr_15620_17135 = state_15587__$1;
(statearr_15620_17135[(2)] = inst_15557);

(statearr_15620_17135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (33))){
var inst_15541 = (state_15587[(23)]);
var inst_15543 = cljs.core.chunked_seq_QMARK_(inst_15541);
var state_15587__$1 = state_15587;
if(inst_15543){
var statearr_15621_17136 = state_15587__$1;
(statearr_15621_17136[(1)] = (36));

} else {
var statearr_15622_17137 = state_15587__$1;
(statearr_15622_17137[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (13))){
var inst_15472 = (state_15587[(24)]);
var inst_15475 = cljs.core.async.close_BANG_(inst_15472);
var state_15587__$1 = state_15587;
var statearr_15623_17138 = state_15587__$1;
(statearr_15623_17138[(2)] = inst_15475);

(statearr_15623_17138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (22))){
var inst_15495 = (state_15587[(8)]);
var inst_15498 = cljs.core.async.close_BANG_(inst_15495);
var state_15587__$1 = state_15587;
var statearr_15624_17139 = state_15587__$1;
(statearr_15624_17139[(2)] = inst_15498);

(statearr_15624_17139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (36))){
var inst_15541 = (state_15587[(23)]);
var inst_15545 = cljs.core.chunk_first(inst_15541);
var inst_15546 = cljs.core.chunk_rest(inst_15541);
var inst_15547 = cljs.core.count(inst_15545);
var inst_15523 = inst_15546;
var inst_15524 = inst_15545;
var inst_15525 = inst_15547;
var inst_15526 = (0);
var state_15587__$1 = (function (){var statearr_15625 = state_15587;
(statearr_15625[(19)] = inst_15523);

(statearr_15625[(9)] = inst_15524);

(statearr_15625[(20)] = inst_15525);

(statearr_15625[(10)] = inst_15526);

return statearr_15625;
})();
var statearr_15627_17143 = state_15587__$1;
(statearr_15627_17143[(2)] = null);

(statearr_15627_17143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (41))){
var inst_15541 = (state_15587[(23)]);
var inst_15559 = (state_15587[(2)]);
var inst_15563 = cljs.core.next(inst_15541);
var inst_15523 = inst_15563;
var inst_15524 = null;
var inst_15525 = (0);
var inst_15526 = (0);
var state_15587__$1 = (function (){var statearr_15628 = state_15587;
(statearr_15628[(25)] = inst_15559);

(statearr_15628[(19)] = inst_15523);

(statearr_15628[(9)] = inst_15524);

(statearr_15628[(20)] = inst_15525);

(statearr_15628[(10)] = inst_15526);

return statearr_15628;
})();
var statearr_15629_17144 = state_15587__$1;
(statearr_15629_17144[(2)] = null);

(statearr_15629_17144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (43))){
var state_15587__$1 = state_15587;
var statearr_15630_17145 = state_15587__$1;
(statearr_15630_17145[(2)] = null);

(statearr_15630_17145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (29))){
var inst_15571 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15632_17146 = state_15587__$1;
(statearr_15632_17146[(2)] = inst_15571);

(statearr_15632_17146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (44))){
var inst_15580 = (state_15587[(2)]);
var state_15587__$1 = (function (){var statearr_15634 = state_15587;
(statearr_15634[(26)] = inst_15580);

return statearr_15634;
})();
var statearr_15635_17147 = state_15587__$1;
(statearr_15635_17147[(2)] = null);

(statearr_15635_17147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (6))){
var inst_15515 = (state_15587[(27)]);
var inst_15514 = cljs.core.deref(cs);
var inst_15515__$1 = cljs.core.keys(inst_15514);
var inst_15516 = cljs.core.count(inst_15515__$1);
var inst_15517 = cljs.core.reset_BANG_(dctr,inst_15516);
var inst_15522 = cljs.core.seq(inst_15515__$1);
var inst_15523 = inst_15522;
var inst_15524 = null;
var inst_15525 = (0);
var inst_15526 = (0);
var state_15587__$1 = (function (){var statearr_15636 = state_15587;
(statearr_15636[(27)] = inst_15515__$1);

(statearr_15636[(28)] = inst_15517);

(statearr_15636[(19)] = inst_15523);

(statearr_15636[(9)] = inst_15524);

(statearr_15636[(20)] = inst_15525);

(statearr_15636[(10)] = inst_15526);

return statearr_15636;
})();
var statearr_15637_17148 = state_15587__$1;
(statearr_15637_17148[(2)] = null);

(statearr_15637_17148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (28))){
var inst_15523 = (state_15587[(19)]);
var inst_15541 = (state_15587[(23)]);
var inst_15541__$1 = cljs.core.seq(inst_15523);
var state_15587__$1 = (function (){var statearr_15638 = state_15587;
(statearr_15638[(23)] = inst_15541__$1);

return statearr_15638;
})();
if(inst_15541__$1){
var statearr_15639_17149 = state_15587__$1;
(statearr_15639_17149[(1)] = (33));

} else {
var statearr_15640_17150 = state_15587__$1;
(statearr_15640_17150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (25))){
var inst_15526 = (state_15587[(10)]);
var inst_15525 = (state_15587[(20)]);
var inst_15528 = (inst_15526 < inst_15525);
var inst_15529 = inst_15528;
var state_15587__$1 = state_15587;
if(cljs.core.truth_(inst_15529)){
var statearr_15641_17151 = state_15587__$1;
(statearr_15641_17151[(1)] = (27));

} else {
var statearr_15642_17152 = state_15587__$1;
(statearr_15642_17152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (34))){
var state_15587__$1 = state_15587;
var statearr_15643_17153 = state_15587__$1;
(statearr_15643_17153[(2)] = null);

(statearr_15643_17153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (17))){
var state_15587__$1 = state_15587;
var statearr_15644_17154 = state_15587__$1;
(statearr_15644_17154[(2)] = null);

(statearr_15644_17154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (3))){
var inst_15585 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15587__$1,inst_15585);
} else {
if((state_val_15588 === (12))){
var inst_15510 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15646_17155 = state_15587__$1;
(statearr_15646_17155[(2)] = inst_15510);

(statearr_15646_17155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (2))){
var state_15587__$1 = state_15587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15587__$1,(4),ch);
} else {
if((state_val_15588 === (23))){
var state_15587__$1 = state_15587;
var statearr_15647_17156 = state_15587__$1;
(statearr_15647_17156[(2)] = null);

(statearr_15647_17156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (35))){
var inst_15569 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15650_17157 = state_15587__$1;
(statearr_15650_17157[(2)] = inst_15569);

(statearr_15650_17157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (19))){
var inst_15482 = (state_15587[(7)]);
var inst_15486 = cljs.core.chunk_first(inst_15482);
var inst_15487 = cljs.core.chunk_rest(inst_15482);
var inst_15488 = cljs.core.count(inst_15486);
var inst_15460 = inst_15487;
var inst_15461 = inst_15486;
var inst_15462 = inst_15488;
var inst_15463 = (0);
var state_15587__$1 = (function (){var statearr_15652 = state_15587;
(statearr_15652[(14)] = inst_15460);

(statearr_15652[(15)] = inst_15461);

(statearr_15652[(16)] = inst_15462);

(statearr_15652[(17)] = inst_15463);

return statearr_15652;
})();
var statearr_15653_17158 = state_15587__$1;
(statearr_15653_17158[(2)] = null);

(statearr_15653_17158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (11))){
var inst_15460 = (state_15587[(14)]);
var inst_15482 = (state_15587[(7)]);
var inst_15482__$1 = cljs.core.seq(inst_15460);
var state_15587__$1 = (function (){var statearr_15655 = state_15587;
(statearr_15655[(7)] = inst_15482__$1);

return statearr_15655;
})();
if(inst_15482__$1){
var statearr_15656_17159 = state_15587__$1;
(statearr_15656_17159[(1)] = (16));

} else {
var statearr_15657_17160 = state_15587__$1;
(statearr_15657_17160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (9))){
var inst_15512 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15658_17161 = state_15587__$1;
(statearr_15658_17161[(2)] = inst_15512);

(statearr_15658_17161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (5))){
var inst_15458 = cljs.core.deref(cs);
var inst_15459 = cljs.core.seq(inst_15458);
var inst_15460 = inst_15459;
var inst_15461 = null;
var inst_15462 = (0);
var inst_15463 = (0);
var state_15587__$1 = (function (){var statearr_15659 = state_15587;
(statearr_15659[(14)] = inst_15460);

(statearr_15659[(15)] = inst_15461);

(statearr_15659[(16)] = inst_15462);

(statearr_15659[(17)] = inst_15463);

return statearr_15659;
})();
var statearr_15660_17162 = state_15587__$1;
(statearr_15660_17162[(2)] = null);

(statearr_15660_17162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (14))){
var state_15587__$1 = state_15587;
var statearr_15661_17163 = state_15587__$1;
(statearr_15661_17163[(2)] = null);

(statearr_15661_17163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (45))){
var inst_15577 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15662_17164 = state_15587__$1;
(statearr_15662_17164[(2)] = inst_15577);

(statearr_15662_17164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (26))){
var inst_15515 = (state_15587[(27)]);
var inst_15573 = (state_15587[(2)]);
var inst_15574 = cljs.core.seq(inst_15515);
var state_15587__$1 = (function (){var statearr_15664 = state_15587;
(statearr_15664[(29)] = inst_15573);

return statearr_15664;
})();
if(inst_15574){
var statearr_15665_17165 = state_15587__$1;
(statearr_15665_17165[(1)] = (42));

} else {
var statearr_15666_17166 = state_15587__$1;
(statearr_15666_17166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (16))){
var inst_15482 = (state_15587[(7)]);
var inst_15484 = cljs.core.chunked_seq_QMARK_(inst_15482);
var state_15587__$1 = state_15587;
if(inst_15484){
var statearr_15669_17167 = state_15587__$1;
(statearr_15669_17167[(1)] = (19));

} else {
var statearr_15670_17168 = state_15587__$1;
(statearr_15670_17168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (38))){
var inst_15566 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15671_17169 = state_15587__$1;
(statearr_15671_17169[(2)] = inst_15566);

(statearr_15671_17169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (30))){
var state_15587__$1 = state_15587;
var statearr_15672_17170 = state_15587__$1;
(statearr_15672_17170[(2)] = null);

(statearr_15672_17170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (10))){
var inst_15461 = (state_15587[(15)]);
var inst_15463 = (state_15587[(17)]);
var inst_15471 = cljs.core._nth(inst_15461,inst_15463);
var inst_15472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15471,(0),null);
var inst_15473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15471,(1),null);
var state_15587__$1 = (function (){var statearr_15673 = state_15587;
(statearr_15673[(24)] = inst_15472);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15473)){
var statearr_15674_17171 = state_15587__$1;
(statearr_15674_17171[(1)] = (13));

} else {
var statearr_15675_17172 = state_15587__$1;
(statearr_15675_17172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (18))){
var inst_15508 = (state_15587[(2)]);
var state_15587__$1 = state_15587;
var statearr_15676_17173 = state_15587__$1;
(statearr_15676_17173[(2)] = inst_15508);

(statearr_15676_17173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (42))){
var state_15587__$1 = state_15587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15587__$1,(45),dchan);
} else {
if((state_val_15588 === (37))){
var inst_15541 = (state_15587[(23)]);
var inst_15553 = (state_15587[(22)]);
var inst_15451 = (state_15587[(12)]);
var inst_15553__$1 = cljs.core.first(inst_15541);
var inst_15554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15553__$1,inst_15451,done);
var state_15587__$1 = (function (){var statearr_15677 = state_15587;
(statearr_15677[(22)] = inst_15553__$1);

return statearr_15677;
})();
if(cljs.core.truth_(inst_15554)){
var statearr_15682_17185 = state_15587__$1;
(statearr_15682_17185[(1)] = (39));

} else {
var statearr_15683_17186 = state_15587__$1;
(statearr_15683_17186[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15588 === (8))){
var inst_15463 = (state_15587[(17)]);
var inst_15462 = (state_15587[(16)]);
var inst_15465 = (inst_15463 < inst_15462);
var inst_15466 = inst_15465;
var state_15587__$1 = state_15587;
if(cljs.core.truth_(inst_15466)){
var statearr_15688_17187 = state_15587__$1;
(statearr_15688_17187[(1)] = (10));

} else {
var statearr_15693_17188 = state_15587__$1;
(statearr_15693_17188[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14624__auto__ = null;
var cljs$core$async$mult_$_state_machine__14624__auto____0 = (function (){
var statearr_15694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15694[(0)] = cljs$core$async$mult_$_state_machine__14624__auto__);

(statearr_15694[(1)] = (1));

return statearr_15694;
});
var cljs$core$async$mult_$_state_machine__14624__auto____1 = (function (state_15587){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15587);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15695){var ex__14627__auto__ = e15695;
var statearr_15696_17189 = state_15587;
(statearr_15696_17189[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15587[(4)]))){
var statearr_15697_17190 = state_15587;
(statearr_15697_17190[(1)] = cljs.core.first((state_15587[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17191 = state_15587;
state_15587 = G__17191;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14624__auto__ = function(state_15587){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14624__auto____1.call(this,state_15587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14624__auto____0;
cljs$core$async$mult_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14624__auto____1;
return cljs$core$async$mult_$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15698 = f__14729__auto__();
(statearr_15698[(6)] = c__14728__auto___17114);

return statearr_15698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15700 = arguments.length;
switch (G__15700) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17193 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17193(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17197 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17197(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17198 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17198(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17199 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17199(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17200 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17200(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17207 = arguments.length;
var i__5877__auto___17208 = (0);
while(true){
if((i__5877__auto___17208 < len__5876__auto___17207)){
args__5882__auto__.push((arguments[i__5877__auto___17208]));

var G__17209 = (i__5877__auto___17208 + (1));
i__5877__auto___17208 = G__17209;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15721){
var map__15722 = p__15721;
var map__15722__$1 = cljs.core.__destructure_map(map__15722);
var opts = map__15722__$1;
var statearr_15723_17214 = state;
(statearr_15723_17214[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15724_17215 = state;
(statearr_15724_17215[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_15725_17216 = state;
(statearr_15725_17216[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15713){
var G__15714 = cljs.core.first(seq15713);
var seq15713__$1 = cljs.core.next(seq15713);
var G__15715 = cljs.core.first(seq15713__$1);
var seq15713__$2 = cljs.core.next(seq15713__$1);
var G__15716 = cljs.core.first(seq15713__$2);
var seq15713__$3 = cljs.core.next(seq15713__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15714,G__15715,G__15716,seq15713__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15726 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15727){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15727 = meta15727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15728,meta15727__$1){
var self__ = this;
var _15728__$1 = this;
return (new cljs.core.async.t_cljs$core$async15726(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15727__$1));
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15728){
var self__ = this;
var _15728__$1 = this;
return self__.meta15727;
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15726.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15727","meta15727",-1757774289,null)], null);
}));

(cljs.core.async.t_cljs$core$async15726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15726");

(cljs.core.async.t_cljs$core$async15726.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15726.
 */
cljs.core.async.__GT_t_cljs$core$async15726 = (function cljs$core$async$__GT_t_cljs$core$async15726(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15727){
return (new cljs.core.async.t_cljs$core$async15726(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15727));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15726(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14728__auto___17217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15800){
var state_val_15801 = (state_15800[(1)]);
if((state_val_15801 === (7))){
var inst_15759 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
if(cljs.core.truth_(inst_15759)){
var statearr_15805_17218 = state_15800__$1;
(statearr_15805_17218[(1)] = (8));

} else {
var statearr_15806_17219 = state_15800__$1;
(statearr_15806_17219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (20))){
var inst_15752 = (state_15800[(7)]);
var state_15800__$1 = state_15800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15800__$1,(23),out,inst_15752);
} else {
if((state_val_15801 === (1))){
var inst_15735 = calc_state();
var inst_15736 = cljs.core.__destructure_map(inst_15735);
var inst_15737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15736,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15736,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15736,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15740 = inst_15735;
var state_15800__$1 = (function (){var statearr_15807 = state_15800;
(statearr_15807[(8)] = inst_15737);

(statearr_15807[(9)] = inst_15738);

(statearr_15807[(10)] = inst_15739);

(statearr_15807[(11)] = inst_15740);

return statearr_15807;
})();
var statearr_15808_17220 = state_15800__$1;
(statearr_15808_17220[(2)] = null);

(statearr_15808_17220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (24))){
var inst_15743 = (state_15800[(12)]);
var inst_15740 = inst_15743;
var state_15800__$1 = (function (){var statearr_15809 = state_15800;
(statearr_15809[(11)] = inst_15740);

return statearr_15809;
})();
var statearr_15810_17221 = state_15800__$1;
(statearr_15810_17221[(2)] = null);

(statearr_15810_17221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (4))){
var inst_15752 = (state_15800[(7)]);
var inst_15754 = (state_15800[(13)]);
var inst_15751 = (state_15800[(2)]);
var inst_15752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15751,(0),null);
var inst_15753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15751,(1),null);
var inst_15754__$1 = (inst_15752__$1 == null);
var state_15800__$1 = (function (){var statearr_15811 = state_15800;
(statearr_15811[(7)] = inst_15752__$1);

(statearr_15811[(14)] = inst_15753);

(statearr_15811[(13)] = inst_15754__$1);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15754__$1)){
var statearr_15812_17222 = state_15800__$1;
(statearr_15812_17222[(1)] = (5));

} else {
var statearr_15813_17223 = state_15800__$1;
(statearr_15813_17223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (15))){
var inst_15744 = (state_15800[(15)]);
var inst_15774 = (state_15800[(16)]);
var inst_15774__$1 = cljs.core.empty_QMARK_(inst_15744);
var state_15800__$1 = (function (){var statearr_15814 = state_15800;
(statearr_15814[(16)] = inst_15774__$1);

return statearr_15814;
})();
if(inst_15774__$1){
var statearr_15815_17224 = state_15800__$1;
(statearr_15815_17224[(1)] = (17));

} else {
var statearr_15816_17225 = state_15800__$1;
(statearr_15816_17225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (21))){
var inst_15743 = (state_15800[(12)]);
var inst_15740 = inst_15743;
var state_15800__$1 = (function (){var statearr_15817 = state_15800;
(statearr_15817[(11)] = inst_15740);

return statearr_15817;
})();
var statearr_15818_17226 = state_15800__$1;
(statearr_15818_17226[(2)] = null);

(statearr_15818_17226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (13))){
var inst_15766 = (state_15800[(2)]);
var inst_15767 = calc_state();
var inst_15740 = inst_15767;
var state_15800__$1 = (function (){var statearr_15819 = state_15800;
(statearr_15819[(17)] = inst_15766);

(statearr_15819[(11)] = inst_15740);

return statearr_15819;
})();
var statearr_15820_17227 = state_15800__$1;
(statearr_15820_17227[(2)] = null);

(statearr_15820_17227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (22))){
var inst_15794 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
var statearr_15821_17228 = state_15800__$1;
(statearr_15821_17228[(2)] = inst_15794);

(statearr_15821_17228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (6))){
var inst_15753 = (state_15800[(14)]);
var inst_15757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15753,change);
var state_15800__$1 = state_15800;
var statearr_15822_17229 = state_15800__$1;
(statearr_15822_17229[(2)] = inst_15757);

(statearr_15822_17229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (25))){
var state_15800__$1 = state_15800;
var statearr_15823_17230 = state_15800__$1;
(statearr_15823_17230[(2)] = null);

(statearr_15823_17230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (17))){
var inst_15745 = (state_15800[(18)]);
var inst_15753 = (state_15800[(14)]);
var inst_15776 = (inst_15745.cljs$core$IFn$_invoke$arity$1 ? inst_15745.cljs$core$IFn$_invoke$arity$1(inst_15753) : inst_15745.call(null,inst_15753));
var inst_15777 = cljs.core.not(inst_15776);
var state_15800__$1 = state_15800;
var statearr_15825_17231 = state_15800__$1;
(statearr_15825_17231[(2)] = inst_15777);

(statearr_15825_17231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (3))){
var inst_15798 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15800__$1,inst_15798);
} else {
if((state_val_15801 === (12))){
var state_15800__$1 = state_15800;
var statearr_15826_17232 = state_15800__$1;
(statearr_15826_17232[(2)] = null);

(statearr_15826_17232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (2))){
var inst_15740 = (state_15800[(11)]);
var inst_15743 = (state_15800[(12)]);
var inst_15743__$1 = cljs.core.__destructure_map(inst_15740);
var inst_15744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15800__$1 = (function (){var statearr_15827 = state_15800;
(statearr_15827[(12)] = inst_15743__$1);

(statearr_15827[(15)] = inst_15744);

(statearr_15827[(18)] = inst_15745);

return statearr_15827;
})();
return cljs.core.async.ioc_alts_BANG_(state_15800__$1,(4),inst_15746);
} else {
if((state_val_15801 === (23))){
var inst_15785 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
if(cljs.core.truth_(inst_15785)){
var statearr_15828_17233 = state_15800__$1;
(statearr_15828_17233[(1)] = (24));

} else {
var statearr_15829_17234 = state_15800__$1;
(statearr_15829_17234[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (19))){
var inst_15780 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
var statearr_15830_17235 = state_15800__$1;
(statearr_15830_17235[(2)] = inst_15780);

(statearr_15830_17235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (11))){
var inst_15753 = (state_15800[(14)]);
var inst_15763 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15753);
var state_15800__$1 = state_15800;
var statearr_15831_17236 = state_15800__$1;
(statearr_15831_17236[(2)] = inst_15763);

(statearr_15831_17236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (9))){
var inst_15744 = (state_15800[(15)]);
var inst_15753 = (state_15800[(14)]);
var inst_15771 = (state_15800[(19)]);
var inst_15771__$1 = (inst_15744.cljs$core$IFn$_invoke$arity$1 ? inst_15744.cljs$core$IFn$_invoke$arity$1(inst_15753) : inst_15744.call(null,inst_15753));
var state_15800__$1 = (function (){var statearr_15832 = state_15800;
(statearr_15832[(19)] = inst_15771__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15771__$1)){
var statearr_15833_17239 = state_15800__$1;
(statearr_15833_17239[(1)] = (14));

} else {
var statearr_15834_17240 = state_15800__$1;
(statearr_15834_17240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (5))){
var inst_15754 = (state_15800[(13)]);
var state_15800__$1 = state_15800;
var statearr_15835_17241 = state_15800__$1;
(statearr_15835_17241[(2)] = inst_15754);

(statearr_15835_17241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (14))){
var inst_15771 = (state_15800[(19)]);
var state_15800__$1 = state_15800;
var statearr_15836_17242 = state_15800__$1;
(statearr_15836_17242[(2)] = inst_15771);

(statearr_15836_17242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (26))){
var inst_15790 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
var statearr_15837_17243 = state_15800__$1;
(statearr_15837_17243[(2)] = inst_15790);

(statearr_15837_17243[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (16))){
var inst_15782 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
if(cljs.core.truth_(inst_15782)){
var statearr_15838_17244 = state_15800__$1;
(statearr_15838_17244[(1)] = (20));

} else {
var statearr_15839_17245 = state_15800__$1;
(statearr_15839_17245[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (10))){
var inst_15796 = (state_15800[(2)]);
var state_15800__$1 = state_15800;
var statearr_15840_17246 = state_15800__$1;
(statearr_15840_17246[(2)] = inst_15796);

(statearr_15840_17246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (18))){
var inst_15774 = (state_15800[(16)]);
var state_15800__$1 = state_15800;
var statearr_15841_17247 = state_15800__$1;
(statearr_15841_17247[(2)] = inst_15774);

(statearr_15841_17247[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15801 === (8))){
var inst_15752 = (state_15800[(7)]);
var inst_15761 = (inst_15752 == null);
var state_15800__$1 = state_15800;
if(cljs.core.truth_(inst_15761)){
var statearr_15842_17248 = state_15800__$1;
(statearr_15842_17248[(1)] = (11));

} else {
var statearr_15843_17249 = state_15800__$1;
(statearr_15843_17249[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14624__auto__ = null;
var cljs$core$async$mix_$_state_machine__14624__auto____0 = (function (){
var statearr_15844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15844[(0)] = cljs$core$async$mix_$_state_machine__14624__auto__);

(statearr_15844[(1)] = (1));

return statearr_15844;
});
var cljs$core$async$mix_$_state_machine__14624__auto____1 = (function (state_15800){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15800);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e15853){var ex__14627__auto__ = e15853;
var statearr_15854_17251 = state_15800;
(statearr_15854_17251[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15800[(4)]))){
var statearr_15859_17252 = state_15800;
(statearr_15859_17252[(1)] = cljs.core.first((state_15800[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17253 = state_15800;
state_15800 = G__17253;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14624__auto__ = function(state_15800){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14624__auto____1.call(this,state_15800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14624__auto____0;
cljs$core$async$mix_$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14624__auto____1;
return cljs$core$async$mix_$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_15860 = f__14729__auto__();
(statearr_15860[(6)] = c__14728__auto___17217);

return statearr_15860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17254 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17254(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17258 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17258(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17259 = (function() {
var G__17260 = null;
var G__17260__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17260__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17260 = function(p,v){
switch(arguments.length){
case 1:
return G__17260__1.call(this,p);
case 2:
return G__17260__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17260.cljs$core$IFn$_invoke$arity$1 = G__17260__1;
G__17260.cljs$core$IFn$_invoke$arity$2 = G__17260__2;
return G__17260;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15886 = arguments.length;
switch (G__15886) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17259(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17259(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15900 = meta15900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15901,meta15900__$1){
var self__ = this;
var _15901__$1 = this;
return (new cljs.core.async.t_cljs$core$async15899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15900__$1));
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15901){
var self__ = this;
var _15901__$1 = this;
return self__.meta15900;
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15900","meta15900",-231304646,null)], null);
}));

(cljs.core.async.t_cljs$core$async15899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15899");

(cljs.core.async.t_cljs$core$async15899.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15899.
 */
cljs.core.async.__GT_t_cljs$core$async15899 = (function cljs$core$async$__GT_t_cljs$core$async15899(ch,topic_fn,buf_fn,mults,ensure_mult,meta15900){
return (new cljs.core.async.t_cljs$core$async15899(ch,topic_fn,buf_fn,mults,ensure_mult,meta15900));
});


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
var G__15898 = arguments.length;
switch (G__15898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15896_SHARP_){
if(cljs.core.truth_((p1__15896_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15896_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15896_SHARP_.call(null,topic)))){
return p1__15896_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15896_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14728__auto___17263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_15983){
var state_val_15984 = (state_15983[(1)]);
if((state_val_15984 === (7))){
var inst_15979 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_15985_17264 = state_15983__$1;
(statearr_15985_17264[(2)] = inst_15979);

(statearr_15985_17264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (20))){
var state_15983__$1 = state_15983;
var statearr_15986_17265 = state_15983__$1;
(statearr_15986_17265[(2)] = null);

(statearr_15986_17265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (1))){
var state_15983__$1 = state_15983;
var statearr_15987_17270 = state_15983__$1;
(statearr_15987_17270[(2)] = null);

(statearr_15987_17270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (24))){
var inst_15962 = (state_15983[(7)]);
var inst_15971 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15962);
var state_15983__$1 = state_15983;
var statearr_15992_17272 = state_15983__$1;
(statearr_15992_17272[(2)] = inst_15971);

(statearr_15992_17272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (4))){
var inst_15911 = (state_15983[(8)]);
var inst_15911__$1 = (state_15983[(2)]);
var inst_15912 = (inst_15911__$1 == null);
var state_15983__$1 = (function (){var statearr_16001 = state_15983;
(statearr_16001[(8)] = inst_15911__$1);

return statearr_16001;
})();
if(cljs.core.truth_(inst_15912)){
var statearr_16002_17273 = state_15983__$1;
(statearr_16002_17273[(1)] = (5));

} else {
var statearr_16003_17274 = state_15983__$1;
(statearr_16003_17274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (15))){
var inst_15954 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_16004_17275 = state_15983__$1;
(statearr_16004_17275[(2)] = inst_15954);

(statearr_16004_17275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (21))){
var inst_15976 = (state_15983[(2)]);
var state_15983__$1 = (function (){var statearr_16005 = state_15983;
(statearr_16005[(9)] = inst_15976);

return statearr_16005;
})();
var statearr_16006_17276 = state_15983__$1;
(statearr_16006_17276[(2)] = null);

(statearr_16006_17276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (13))){
var inst_15936 = (state_15983[(10)]);
var inst_15938 = cljs.core.chunked_seq_QMARK_(inst_15936);
var state_15983__$1 = state_15983;
if(inst_15938){
var statearr_16007_17277 = state_15983__$1;
(statearr_16007_17277[(1)] = (16));

} else {
var statearr_16008_17278 = state_15983__$1;
(statearr_16008_17278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (22))){
var inst_15968 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
if(cljs.core.truth_(inst_15968)){
var statearr_16009_17279 = state_15983__$1;
(statearr_16009_17279[(1)] = (23));

} else {
var statearr_16010_17280 = state_15983__$1;
(statearr_16010_17280[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (6))){
var inst_15911 = (state_15983[(8)]);
var inst_15962 = (state_15983[(7)]);
var inst_15964 = (state_15983[(11)]);
var inst_15962__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15911) : topic_fn.call(null,inst_15911));
var inst_15963 = cljs.core.deref(mults);
var inst_15964__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15963,inst_15962__$1);
var state_15983__$1 = (function (){var statearr_16011 = state_15983;
(statearr_16011[(7)] = inst_15962__$1);

(statearr_16011[(11)] = inst_15964__$1);

return statearr_16011;
})();
if(cljs.core.truth_(inst_15964__$1)){
var statearr_16012_17281 = state_15983__$1;
(statearr_16012_17281[(1)] = (19));

} else {
var statearr_16013_17282 = state_15983__$1;
(statearr_16013_17282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (25))){
var inst_15973 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_16015_17284 = state_15983__$1;
(statearr_16015_17284[(2)] = inst_15973);

(statearr_16015_17284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (17))){
var inst_15936 = (state_15983[(10)]);
var inst_15945 = cljs.core.first(inst_15936);
var inst_15946 = cljs.core.async.muxch_STAR_(inst_15945);
var inst_15947 = cljs.core.async.close_BANG_(inst_15946);
var inst_15948 = cljs.core.next(inst_15936);
var inst_15922 = inst_15948;
var inst_15923 = null;
var inst_15924 = (0);
var inst_15925 = (0);
var state_15983__$1 = (function (){var statearr_16016 = state_15983;
(statearr_16016[(12)] = inst_15947);

(statearr_16016[(13)] = inst_15922);

(statearr_16016[(14)] = inst_15923);

(statearr_16016[(15)] = inst_15924);

(statearr_16016[(16)] = inst_15925);

return statearr_16016;
})();
var statearr_16017_17285 = state_15983__$1;
(statearr_16017_17285[(2)] = null);

(statearr_16017_17285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (3))){
var inst_15981 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15983__$1,inst_15981);
} else {
if((state_val_15984 === (12))){
var inst_15956 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_16020_17286 = state_15983__$1;
(statearr_16020_17286[(2)] = inst_15956);

(statearr_16020_17286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (2))){
var state_15983__$1 = state_15983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15983__$1,(4),ch);
} else {
if((state_val_15984 === (23))){
var state_15983__$1 = state_15983;
var statearr_16023_17287 = state_15983__$1;
(statearr_16023_17287[(2)] = null);

(statearr_16023_17287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (19))){
var inst_15964 = (state_15983[(11)]);
var inst_15911 = (state_15983[(8)]);
var inst_15966 = cljs.core.async.muxch_STAR_(inst_15964);
var state_15983__$1 = state_15983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15983__$1,(22),inst_15966,inst_15911);
} else {
if((state_val_15984 === (11))){
var inst_15922 = (state_15983[(13)]);
var inst_15936 = (state_15983[(10)]);
var inst_15936__$1 = cljs.core.seq(inst_15922);
var state_15983__$1 = (function (){var statearr_16030 = state_15983;
(statearr_16030[(10)] = inst_15936__$1);

return statearr_16030;
})();
if(inst_15936__$1){
var statearr_16031_17292 = state_15983__$1;
(statearr_16031_17292[(1)] = (13));

} else {
var statearr_16032_17293 = state_15983__$1;
(statearr_16032_17293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (9))){
var inst_15958 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_16033_17294 = state_15983__$1;
(statearr_16033_17294[(2)] = inst_15958);

(statearr_16033_17294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (5))){
var inst_15919 = cljs.core.deref(mults);
var inst_15920 = cljs.core.vals(inst_15919);
var inst_15921 = cljs.core.seq(inst_15920);
var inst_15922 = inst_15921;
var inst_15923 = null;
var inst_15924 = (0);
var inst_15925 = (0);
var state_15983__$1 = (function (){var statearr_16035 = state_15983;
(statearr_16035[(13)] = inst_15922);

(statearr_16035[(14)] = inst_15923);

(statearr_16035[(15)] = inst_15924);

(statearr_16035[(16)] = inst_15925);

return statearr_16035;
})();
var statearr_16036_17295 = state_15983__$1;
(statearr_16036_17295[(2)] = null);

(statearr_16036_17295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (14))){
var state_15983__$1 = state_15983;
var statearr_16040_17296 = state_15983__$1;
(statearr_16040_17296[(2)] = null);

(statearr_16040_17296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (16))){
var inst_15936 = (state_15983[(10)]);
var inst_15940 = cljs.core.chunk_first(inst_15936);
var inst_15941 = cljs.core.chunk_rest(inst_15936);
var inst_15942 = cljs.core.count(inst_15940);
var inst_15922 = inst_15941;
var inst_15923 = inst_15940;
var inst_15924 = inst_15942;
var inst_15925 = (0);
var state_15983__$1 = (function (){var statearr_16041 = state_15983;
(statearr_16041[(13)] = inst_15922);

(statearr_16041[(14)] = inst_15923);

(statearr_16041[(15)] = inst_15924);

(statearr_16041[(16)] = inst_15925);

return statearr_16041;
})();
var statearr_16042_17297 = state_15983__$1;
(statearr_16042_17297[(2)] = null);

(statearr_16042_17297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (10))){
var inst_15923 = (state_15983[(14)]);
var inst_15925 = (state_15983[(16)]);
var inst_15922 = (state_15983[(13)]);
var inst_15924 = (state_15983[(15)]);
var inst_15930 = cljs.core._nth(inst_15923,inst_15925);
var inst_15931 = cljs.core.async.muxch_STAR_(inst_15930);
var inst_15932 = cljs.core.async.close_BANG_(inst_15931);
var inst_15933 = (inst_15925 + (1));
var tmp16037 = inst_15923;
var tmp16038 = inst_15922;
var tmp16039 = inst_15924;
var inst_15922__$1 = tmp16038;
var inst_15923__$1 = tmp16037;
var inst_15924__$1 = tmp16039;
var inst_15925__$1 = inst_15933;
var state_15983__$1 = (function (){var statearr_16043 = state_15983;
(statearr_16043[(17)] = inst_15932);

(statearr_16043[(13)] = inst_15922__$1);

(statearr_16043[(14)] = inst_15923__$1);

(statearr_16043[(15)] = inst_15924__$1);

(statearr_16043[(16)] = inst_15925__$1);

return statearr_16043;
})();
var statearr_16044_17298 = state_15983__$1;
(statearr_16044_17298[(2)] = null);

(statearr_16044_17298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (18))){
var inst_15951 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_16049_17299 = state_15983__$1;
(statearr_16049_17299[(2)] = inst_15951);

(statearr_16049_17299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15984 === (8))){
var inst_15925 = (state_15983[(16)]);
var inst_15924 = (state_15983[(15)]);
var inst_15927 = (inst_15925 < inst_15924);
var inst_15928 = inst_15927;
var state_15983__$1 = state_15983;
if(cljs.core.truth_(inst_15928)){
var statearr_16054_17300 = state_15983__$1;
(statearr_16054_17300[(1)] = (10));

} else {
var statearr_16059_17301 = state_15983__$1;
(statearr_16059_17301[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16060[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16060[(1)] = (1));

return statearr_16060;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_15983){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_15983);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16061){var ex__14627__auto__ = e16061;
var statearr_16062_17302 = state_15983;
(statearr_16062_17302[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_15983[(4)]))){
var statearr_16063_17303 = state_15983;
(statearr_16063_17303[(1)] = cljs.core.first((state_15983[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17304 = state_15983;
state_15983 = G__17304;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_15983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_15983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16064 = f__14729__auto__();
(statearr_16064[(6)] = c__14728__auto___17263);

return statearr_16064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16067 = arguments.length;
switch (G__16067) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16080 = arguments.length;
switch (G__16080) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16090 = arguments.length;
switch (G__16090) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14728__auto___17308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16147){
var state_val_16148 = (state_16147[(1)]);
if((state_val_16148 === (7))){
var state_16147__$1 = state_16147;
var statearr_16150_17309 = state_16147__$1;
(statearr_16150_17309[(2)] = null);

(statearr_16150_17309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (1))){
var state_16147__$1 = state_16147;
var statearr_16151_17310 = state_16147__$1;
(statearr_16151_17310[(2)] = null);

(statearr_16151_17310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (4))){
var inst_16107 = (state_16147[(7)]);
var inst_16106 = (state_16147[(8)]);
var inst_16109 = (inst_16107 < inst_16106);
var state_16147__$1 = state_16147;
if(cljs.core.truth_(inst_16109)){
var statearr_16152_17311 = state_16147__$1;
(statearr_16152_17311[(1)] = (6));

} else {
var statearr_16154_17312 = state_16147__$1;
(statearr_16154_17312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (15))){
var inst_16132 = (state_16147[(9)]);
var inst_16137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16132);
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16147__$1,(17),out,inst_16137);
} else {
if((state_val_16148 === (13))){
var inst_16132 = (state_16147[(9)]);
var inst_16132__$1 = (state_16147[(2)]);
var inst_16133 = cljs.core.some(cljs.core.nil_QMARK_,inst_16132__$1);
var state_16147__$1 = (function (){var statearr_16155 = state_16147;
(statearr_16155[(9)] = inst_16132__$1);

return statearr_16155;
})();
if(cljs.core.truth_(inst_16133)){
var statearr_16156_17314 = state_16147__$1;
(statearr_16156_17314[(1)] = (14));

} else {
var statearr_16157_17315 = state_16147__$1;
(statearr_16157_17315[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (6))){
var state_16147__$1 = state_16147;
var statearr_16159_17316 = state_16147__$1;
(statearr_16159_17316[(2)] = null);

(statearr_16159_17316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (17))){
var inst_16139 = (state_16147[(2)]);
var state_16147__$1 = (function (){var statearr_16163 = state_16147;
(statearr_16163[(10)] = inst_16139);

return statearr_16163;
})();
var statearr_16164_17317 = state_16147__$1;
(statearr_16164_17317[(2)] = null);

(statearr_16164_17317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (3))){
var inst_16144 = (state_16147[(2)]);
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16147__$1,inst_16144);
} else {
if((state_val_16148 === (12))){
var _ = (function (){var statearr_16165 = state_16147;
(statearr_16165[(4)] = cljs.core.rest((state_16147[(4)])));

return statearr_16165;
})();
var state_16147__$1 = state_16147;
var ex16161 = (state_16147__$1[(2)]);
var statearr_16166_17321 = state_16147__$1;
(statearr_16166_17321[(5)] = ex16161);


if((ex16161 instanceof Object)){
var statearr_16168_17322 = state_16147__$1;
(statearr_16168_17322[(1)] = (11));

(statearr_16168_17322[(5)] = null);

} else {
throw ex16161;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (2))){
var inst_16105 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16106 = cnt;
var inst_16107 = (0);
var state_16147__$1 = (function (){var statearr_16170 = state_16147;
(statearr_16170[(11)] = inst_16105);

(statearr_16170[(8)] = inst_16106);

(statearr_16170[(7)] = inst_16107);

return statearr_16170;
})();
var statearr_16171_17323 = state_16147__$1;
(statearr_16171_17323[(2)] = null);

(statearr_16171_17323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (11))){
var inst_16111 = (state_16147[(2)]);
var inst_16112 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16147__$1 = (function (){var statearr_16172 = state_16147;
(statearr_16172[(12)] = inst_16111);

return statearr_16172;
})();
var statearr_16173_17324 = state_16147__$1;
(statearr_16173_17324[(2)] = inst_16112);

(statearr_16173_17324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (9))){
var inst_16107 = (state_16147[(7)]);
var _ = (function (){var statearr_16174 = state_16147;
(statearr_16174[(4)] = cljs.core.cons((12),(state_16147[(4)])));

return statearr_16174;
})();
var inst_16118 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16107) : chs__$1.call(null,inst_16107));
var inst_16119 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16107) : done.call(null,inst_16107));
var inst_16120 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16118,inst_16119);
var ___$1 = (function (){var statearr_16175 = state_16147;
(statearr_16175[(4)] = cljs.core.rest((state_16147[(4)])));

return statearr_16175;
})();
var state_16147__$1 = state_16147;
var statearr_16176_17325 = state_16147__$1;
(statearr_16176_17325[(2)] = inst_16120);

(statearr_16176_17325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (5))){
var inst_16130 = (state_16147[(2)]);
var state_16147__$1 = (function (){var statearr_16177 = state_16147;
(statearr_16177[(13)] = inst_16130);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16147__$1,(13),dchan);
} else {
if((state_val_16148 === (14))){
var inst_16135 = cljs.core.async.close_BANG_(out);
var state_16147__$1 = state_16147;
var statearr_16178_17326 = state_16147__$1;
(statearr_16178_17326[(2)] = inst_16135);

(statearr_16178_17326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (16))){
var inst_16142 = (state_16147[(2)]);
var state_16147__$1 = state_16147;
var statearr_16179_17327 = state_16147__$1;
(statearr_16179_17327[(2)] = inst_16142);

(statearr_16179_17327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (10))){
var inst_16107 = (state_16147[(7)]);
var inst_16123 = (state_16147[(2)]);
var inst_16124 = (inst_16107 + (1));
var inst_16107__$1 = inst_16124;
var state_16147__$1 = (function (){var statearr_16181 = state_16147;
(statearr_16181[(14)] = inst_16123);

(statearr_16181[(7)] = inst_16107__$1);

return statearr_16181;
})();
var statearr_16182_17328 = state_16147__$1;
(statearr_16182_17328[(2)] = null);

(statearr_16182_17328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (8))){
var inst_16128 = (state_16147[(2)]);
var state_16147__$1 = state_16147;
var statearr_16184_17329 = state_16147__$1;
(statearr_16184_17329[(2)] = inst_16128);

(statearr_16184_17329[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16185[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16185[(1)] = (1));

return statearr_16185;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16147){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16147);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16186){var ex__14627__auto__ = e16186;
var statearr_16187_17330 = state_16147;
(statearr_16187_17330[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16147[(4)]))){
var statearr_16188_17331 = state_16147;
(statearr_16188_17331[(1)] = cljs.core.first((state_16147[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17332 = state_16147;
state_16147 = G__17332;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16189 = f__14729__auto__();
(statearr_16189[(6)] = c__14728__auto___17308);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16194 = arguments.length;
switch (G__16194) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16230){
var state_val_16231 = (state_16230[(1)]);
if((state_val_16231 === (7))){
var inst_16209 = (state_16230[(7)]);
var inst_16210 = (state_16230[(8)]);
var inst_16209__$1 = (state_16230[(2)]);
var inst_16210__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16209__$1,(0),null);
var inst_16211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16209__$1,(1),null);
var inst_16212 = (inst_16210__$1 == null);
var state_16230__$1 = (function (){var statearr_16232 = state_16230;
(statearr_16232[(7)] = inst_16209__$1);

(statearr_16232[(8)] = inst_16210__$1);

(statearr_16232[(9)] = inst_16211);

return statearr_16232;
})();
if(cljs.core.truth_(inst_16212)){
var statearr_16235_17336 = state_16230__$1;
(statearr_16235_17336[(1)] = (8));

} else {
var statearr_16236_17337 = state_16230__$1;
(statearr_16236_17337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (1))){
var inst_16197 = cljs.core.vec(chs);
var inst_16198 = inst_16197;
var state_16230__$1 = (function (){var statearr_16237 = state_16230;
(statearr_16237[(10)] = inst_16198);

return statearr_16237;
})();
var statearr_16238_17338 = state_16230__$1;
(statearr_16238_17338[(2)] = null);

(statearr_16238_17338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (4))){
var inst_16198 = (state_16230[(10)]);
var state_16230__$1 = state_16230;
return cljs.core.async.ioc_alts_BANG_(state_16230__$1,(7),inst_16198);
} else {
if((state_val_16231 === (6))){
var inst_16226 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16239_17339 = state_16230__$1;
(statearr_16239_17339[(2)] = inst_16226);

(statearr_16239_17339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (3))){
var inst_16228 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16230__$1,inst_16228);
} else {
if((state_val_16231 === (2))){
var inst_16198 = (state_16230[(10)]);
var inst_16202 = cljs.core.count(inst_16198);
var inst_16203 = (inst_16202 > (0));
var state_16230__$1 = state_16230;
if(cljs.core.truth_(inst_16203)){
var statearr_16242_17340 = state_16230__$1;
(statearr_16242_17340[(1)] = (4));

} else {
var statearr_16243_17341 = state_16230__$1;
(statearr_16243_17341[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (11))){
var inst_16198 = (state_16230[(10)]);
var inst_16219 = (state_16230[(2)]);
var tmp16240 = inst_16198;
var inst_16198__$1 = tmp16240;
var state_16230__$1 = (function (){var statearr_16244 = state_16230;
(statearr_16244[(11)] = inst_16219);

(statearr_16244[(10)] = inst_16198__$1);

return statearr_16244;
})();
var statearr_16245_17342 = state_16230__$1;
(statearr_16245_17342[(2)] = null);

(statearr_16245_17342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (9))){
var inst_16210 = (state_16230[(8)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16230__$1,(11),out,inst_16210);
} else {
if((state_val_16231 === (5))){
var inst_16224 = cljs.core.async.close_BANG_(out);
var state_16230__$1 = state_16230;
var statearr_16248_17343 = state_16230__$1;
(statearr_16248_17343[(2)] = inst_16224);

(statearr_16248_17343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (10))){
var inst_16222 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16250_17344 = state_16230__$1;
(statearr_16250_17344[(2)] = inst_16222);

(statearr_16250_17344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (8))){
var inst_16198 = (state_16230[(10)]);
var inst_16209 = (state_16230[(7)]);
var inst_16210 = (state_16230[(8)]);
var inst_16211 = (state_16230[(9)]);
var inst_16214 = (function (){var cs = inst_16198;
var vec__16205 = inst_16209;
var v = inst_16210;
var c = inst_16211;
return (function (p1__16192_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16192_SHARP_);
});
})();
var inst_16215 = cljs.core.filterv(inst_16214,inst_16198);
var inst_16198__$1 = inst_16215;
var state_16230__$1 = (function (){var statearr_16252 = state_16230;
(statearr_16252[(10)] = inst_16198__$1);

return statearr_16252;
})();
var statearr_16253_17345 = state_16230__$1;
(statearr_16253_17345[(2)] = null);

(statearr_16253_17345[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16254 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16254[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16254[(1)] = (1));

return statearr_16254;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16230){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16230);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16255){var ex__14627__auto__ = e16255;
var statearr_16256_17346 = state_16230;
(statearr_16256_17346[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16230[(4)]))){
var statearr_16257_17347 = state_16230;
(statearr_16257_17347[(1)] = cljs.core.first((state_16230[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17348 = state_16230;
state_16230 = G__17348;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16260 = f__14729__auto__();
(statearr_16260[(6)] = c__14728__auto___17335);

return statearr_16260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16277 = arguments.length;
switch (G__16277) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16308){
var state_val_16309 = (state_16308[(1)]);
if((state_val_16309 === (7))){
var inst_16289 = (state_16308[(7)]);
var inst_16289__$1 = (state_16308[(2)]);
var inst_16290 = (inst_16289__$1 == null);
var inst_16291 = cljs.core.not(inst_16290);
var state_16308__$1 = (function (){var statearr_16315 = state_16308;
(statearr_16315[(7)] = inst_16289__$1);

return statearr_16315;
})();
if(inst_16291){
var statearr_16316_17352 = state_16308__$1;
(statearr_16316_17352[(1)] = (8));

} else {
var statearr_16317_17353 = state_16308__$1;
(statearr_16317_17353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (1))){
var inst_16282 = (0);
var state_16308__$1 = (function (){var statearr_16319 = state_16308;
(statearr_16319[(8)] = inst_16282);

return statearr_16319;
})();
var statearr_16320_17354 = state_16308__$1;
(statearr_16320_17354[(2)] = null);

(statearr_16320_17354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (4))){
var state_16308__$1 = state_16308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16308__$1,(7),ch);
} else {
if((state_val_16309 === (6))){
var inst_16303 = (state_16308[(2)]);
var state_16308__$1 = state_16308;
var statearr_16325_17355 = state_16308__$1;
(statearr_16325_17355[(2)] = inst_16303);

(statearr_16325_17355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (3))){
var inst_16305 = (state_16308[(2)]);
var inst_16306 = cljs.core.async.close_BANG_(out);
var state_16308__$1 = (function (){var statearr_16326 = state_16308;
(statearr_16326[(9)] = inst_16305);

return statearr_16326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16308__$1,inst_16306);
} else {
if((state_val_16309 === (2))){
var inst_16282 = (state_16308[(8)]);
var inst_16284 = (inst_16282 < n);
var state_16308__$1 = state_16308;
if(cljs.core.truth_(inst_16284)){
var statearr_16327_17356 = state_16308__$1;
(statearr_16327_17356[(1)] = (4));

} else {
var statearr_16328_17357 = state_16308__$1;
(statearr_16328_17357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (11))){
var inst_16282 = (state_16308[(8)]);
var inst_16295 = (state_16308[(2)]);
var inst_16296 = (inst_16282 + (1));
var inst_16282__$1 = inst_16296;
var state_16308__$1 = (function (){var statearr_16329 = state_16308;
(statearr_16329[(10)] = inst_16295);

(statearr_16329[(8)] = inst_16282__$1);

return statearr_16329;
})();
var statearr_16330_17358 = state_16308__$1;
(statearr_16330_17358[(2)] = null);

(statearr_16330_17358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (9))){
var state_16308__$1 = state_16308;
var statearr_16336_17359 = state_16308__$1;
(statearr_16336_17359[(2)] = null);

(statearr_16336_17359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (5))){
var state_16308__$1 = state_16308;
var statearr_16342_17360 = state_16308__$1;
(statearr_16342_17360[(2)] = null);

(statearr_16342_17360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (10))){
var inst_16300 = (state_16308[(2)]);
var state_16308__$1 = state_16308;
var statearr_16346_17361 = state_16308__$1;
(statearr_16346_17361[(2)] = inst_16300);

(statearr_16346_17361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16309 === (8))){
var inst_16289 = (state_16308[(7)]);
var state_16308__$1 = state_16308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16308__$1,(11),out,inst_16289);
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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16348[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16348[(1)] = (1));

return statearr_16348;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16308){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16308);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16349){var ex__14627__auto__ = e16349;
var statearr_16350_17362 = state_16308;
(statearr_16350_17362[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16308[(4)]))){
var statearr_16351_17363 = state_16308;
(statearr_16351_17363[(1)] = cljs.core.first((state_16308[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17364 = state_16308;
state_16308 = G__17364;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16355 = f__14729__auto__();
(statearr_16355[(6)] = c__14728__auto___17351);

return statearr_16355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16362 = (function (f,ch,meta16358,_,fn1,meta16363){
this.f = f;
this.ch = ch;
this.meta16358 = meta16358;
this._ = _;
this.fn1 = fn1;
this.meta16363 = meta16363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16364,meta16363__$1){
var self__ = this;
var _16364__$1 = this;
return (new cljs.core.async.t_cljs$core$async16362(self__.f,self__.ch,self__.meta16358,self__._,self__.fn1,meta16363__$1));
}));

(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16364){
var self__ = this;
var _16364__$1 = this;
return self__.meta16363;
}));

(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16356_SHARP_){
var G__16372 = (((p1__16356_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16356_SHARP_) : self__.f.call(null,p1__16356_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16372) : f1.call(null,G__16372));
});
}));

(cljs.core.async.t_cljs$core$async16362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16358","meta16358",1937629960,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16357","cljs.core.async/t_cljs$core$async16357",486696885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16363","meta16363",-505440043,null)], null);
}));

(cljs.core.async.t_cljs$core$async16362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16362");

(cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16362.
 */
cljs.core.async.__GT_t_cljs$core$async16362 = (function cljs$core$async$__GT_t_cljs$core$async16362(f,ch,meta16358,_,fn1,meta16363){
return (new cljs.core.async.t_cljs$core$async16362(f,ch,meta16358,_,fn1,meta16363));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16357 = (function (f,ch,meta16358){
this.f = f;
this.ch = ch;
this.meta16358 = meta16358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16359,meta16358__$1){
var self__ = this;
var _16359__$1 = this;
return (new cljs.core.async.t_cljs$core$async16357(self__.f,self__.ch,meta16358__$1));
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16359){
var self__ = this;
var _16359__$1 = this;
return self__.meta16358;
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16362(self__.f,self__.ch,self__.meta16358,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16379 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16379) : self__.f.call(null,G__16379));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16358","meta16358",1937629960,null)], null);
}));

(cljs.core.async.t_cljs$core$async16357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16357");

(cljs.core.async.t_cljs$core$async16357.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16357.
 */
cljs.core.async.__GT_t_cljs$core$async16357 = (function cljs$core$async$__GT_t_cljs$core$async16357(f,ch,meta16358){
return (new cljs.core.async.t_cljs$core$async16357(f,ch,meta16358));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16388 = (function (f,ch,meta16389){
this.f = f;
this.ch = ch;
this.meta16389 = meta16389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16390,meta16389__$1){
var self__ = this;
var _16390__$1 = this;
return (new cljs.core.async.t_cljs$core$async16388(self__.f,self__.ch,meta16389__$1));
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16390){
var self__ = this;
var _16390__$1 = this;
return self__.meta16389;
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16389","meta16389",-1586375751,null)], null);
}));

(cljs.core.async.t_cljs$core$async16388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16388");

(cljs.core.async.t_cljs$core$async16388.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16388.
 */
cljs.core.async.__GT_t_cljs$core$async16388 = (function cljs$core$async$__GT_t_cljs$core$async16388(f,ch,meta16389){
return (new cljs.core.async.t_cljs$core$async16388(f,ch,meta16389));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16388(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16403 = (function (p,ch,meta16404){
this.p = p;
this.ch = ch;
this.meta16404 = meta16404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16405,meta16404__$1){
var self__ = this;
var _16405__$1 = this;
return (new cljs.core.async.t_cljs$core$async16403(self__.p,self__.ch,meta16404__$1));
}));

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16405){
var self__ = this;
var _16405__$1 = this;
return self__.meta16404;
}));

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16404","meta16404",-782482359,null)], null);
}));

(cljs.core.async.t_cljs$core$async16403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16403");

(cljs.core.async.t_cljs$core$async16403.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16403.
 */
cljs.core.async.__GT_t_cljs$core$async16403 = (function cljs$core$async$__GT_t_cljs$core$async16403(p,ch,meta16404){
return (new cljs.core.async.t_cljs$core$async16403(p,ch,meta16404));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16403(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16407 = arguments.length;
switch (G__16407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16428){
var state_val_16429 = (state_16428[(1)]);
if((state_val_16429 === (7))){
var inst_16424 = (state_16428[(2)]);
var state_16428__$1 = state_16428;
var statearr_16430_17372 = state_16428__$1;
(statearr_16430_17372[(2)] = inst_16424);

(statearr_16430_17372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (1))){
var state_16428__$1 = state_16428;
var statearr_16431_17373 = state_16428__$1;
(statearr_16431_17373[(2)] = null);

(statearr_16431_17373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (4))){
var inst_16410 = (state_16428[(7)]);
var inst_16410__$1 = (state_16428[(2)]);
var inst_16411 = (inst_16410__$1 == null);
var state_16428__$1 = (function (){var statearr_16432 = state_16428;
(statearr_16432[(7)] = inst_16410__$1);

return statearr_16432;
})();
if(cljs.core.truth_(inst_16411)){
var statearr_16433_17374 = state_16428__$1;
(statearr_16433_17374[(1)] = (5));

} else {
var statearr_16434_17375 = state_16428__$1;
(statearr_16434_17375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (6))){
var inst_16410 = (state_16428[(7)]);
var inst_16415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16410) : p.call(null,inst_16410));
var state_16428__$1 = state_16428;
if(cljs.core.truth_(inst_16415)){
var statearr_16435_17376 = state_16428__$1;
(statearr_16435_17376[(1)] = (8));

} else {
var statearr_16436_17378 = state_16428__$1;
(statearr_16436_17378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (3))){
var inst_16426 = (state_16428[(2)]);
var state_16428__$1 = state_16428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16428__$1,inst_16426);
} else {
if((state_val_16429 === (2))){
var state_16428__$1 = state_16428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16428__$1,(4),ch);
} else {
if((state_val_16429 === (11))){
var inst_16418 = (state_16428[(2)]);
var state_16428__$1 = state_16428;
var statearr_16437_17379 = state_16428__$1;
(statearr_16437_17379[(2)] = inst_16418);

(statearr_16437_17379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (9))){
var state_16428__$1 = state_16428;
var statearr_16441_17380 = state_16428__$1;
(statearr_16441_17380[(2)] = null);

(statearr_16441_17380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (5))){
var inst_16413 = cljs.core.async.close_BANG_(out);
var state_16428__$1 = state_16428;
var statearr_16442_17381 = state_16428__$1;
(statearr_16442_17381[(2)] = inst_16413);

(statearr_16442_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (10))){
var inst_16421 = (state_16428[(2)]);
var state_16428__$1 = (function (){var statearr_16444 = state_16428;
(statearr_16444[(8)] = inst_16421);

return statearr_16444;
})();
var statearr_16445_17388 = state_16428__$1;
(statearr_16445_17388[(2)] = null);

(statearr_16445_17388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16429 === (8))){
var inst_16410 = (state_16428[(7)]);
var state_16428__$1 = state_16428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16428__$1,(11),out,inst_16410);
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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16446 = [null,null,null,null,null,null,null,null,null];
(statearr_16446[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16446[(1)] = (1));

return statearr_16446;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16428){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16428);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16447){var ex__14627__auto__ = e16447;
var statearr_16448_17389 = state_16428;
(statearr_16448_17389[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16428[(4)]))){
var statearr_16449_17390 = state_16428;
(statearr_16449_17390[(1)] = cljs.core.first((state_16428[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17391 = state_16428;
state_16428 = G__17391;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16451 = f__14729__auto__();
(statearr_16451[(6)] = c__14728__auto___17371);

return statearr_16451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16455 = arguments.length;
switch (G__16455) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16522){
var state_val_16523 = (state_16522[(1)]);
if((state_val_16523 === (7))){
var inst_16518 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16527_17393 = state_16522__$1;
(statearr_16527_17393[(2)] = inst_16518);

(statearr_16527_17393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (20))){
var inst_16488 = (state_16522[(7)]);
var inst_16499 = (state_16522[(2)]);
var inst_16500 = cljs.core.next(inst_16488);
var inst_16472 = inst_16500;
var inst_16473 = null;
var inst_16474 = (0);
var inst_16475 = (0);
var state_16522__$1 = (function (){var statearr_16528 = state_16522;
(statearr_16528[(8)] = inst_16499);

(statearr_16528[(9)] = inst_16472);

(statearr_16528[(10)] = inst_16473);

(statearr_16528[(11)] = inst_16474);

(statearr_16528[(12)] = inst_16475);

return statearr_16528;
})();
var statearr_16529_17394 = state_16522__$1;
(statearr_16529_17394[(2)] = null);

(statearr_16529_17394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (1))){
var state_16522__$1 = state_16522;
var statearr_16530_17395 = state_16522__$1;
(statearr_16530_17395[(2)] = null);

(statearr_16530_17395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (4))){
var inst_16461 = (state_16522[(13)]);
var inst_16461__$1 = (state_16522[(2)]);
var inst_16462 = (inst_16461__$1 == null);
var state_16522__$1 = (function (){var statearr_16533 = state_16522;
(statearr_16533[(13)] = inst_16461__$1);

return statearr_16533;
})();
if(cljs.core.truth_(inst_16462)){
var statearr_16534_17396 = state_16522__$1;
(statearr_16534_17396[(1)] = (5));

} else {
var statearr_16535_17397 = state_16522__$1;
(statearr_16535_17397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (15))){
var state_16522__$1 = state_16522;
var statearr_16542_17399 = state_16522__$1;
(statearr_16542_17399[(2)] = null);

(statearr_16542_17399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (21))){
var state_16522__$1 = state_16522;
var statearr_16543_17400 = state_16522__$1;
(statearr_16543_17400[(2)] = null);

(statearr_16543_17400[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (13))){
var inst_16475 = (state_16522[(12)]);
var inst_16472 = (state_16522[(9)]);
var inst_16473 = (state_16522[(10)]);
var inst_16474 = (state_16522[(11)]);
var inst_16483 = (state_16522[(2)]);
var inst_16485 = (inst_16475 + (1));
var tmp16537 = inst_16474;
var tmp16538 = inst_16473;
var tmp16539 = inst_16472;
var inst_16472__$1 = tmp16539;
var inst_16473__$1 = tmp16538;
var inst_16474__$1 = tmp16537;
var inst_16475__$1 = inst_16485;
var state_16522__$1 = (function (){var statearr_16545 = state_16522;
(statearr_16545[(14)] = inst_16483);

(statearr_16545[(9)] = inst_16472__$1);

(statearr_16545[(10)] = inst_16473__$1);

(statearr_16545[(11)] = inst_16474__$1);

(statearr_16545[(12)] = inst_16475__$1);

return statearr_16545;
})();
var statearr_16547_17402 = state_16522__$1;
(statearr_16547_17402[(2)] = null);

(statearr_16547_17402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (22))){
var state_16522__$1 = state_16522;
var statearr_16548_17403 = state_16522__$1;
(statearr_16548_17403[(2)] = null);

(statearr_16548_17403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (6))){
var inst_16461 = (state_16522[(13)]);
var inst_16470 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16461) : f.call(null,inst_16461));
var inst_16471 = cljs.core.seq(inst_16470);
var inst_16472 = inst_16471;
var inst_16473 = null;
var inst_16474 = (0);
var inst_16475 = (0);
var state_16522__$1 = (function (){var statearr_16550 = state_16522;
(statearr_16550[(9)] = inst_16472);

(statearr_16550[(10)] = inst_16473);

(statearr_16550[(11)] = inst_16474);

(statearr_16550[(12)] = inst_16475);

return statearr_16550;
})();
var statearr_16551_17404 = state_16522__$1;
(statearr_16551_17404[(2)] = null);

(statearr_16551_17404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (17))){
var inst_16488 = (state_16522[(7)]);
var inst_16492 = cljs.core.chunk_first(inst_16488);
var inst_16493 = cljs.core.chunk_rest(inst_16488);
var inst_16494 = cljs.core.count(inst_16492);
var inst_16472 = inst_16493;
var inst_16473 = inst_16492;
var inst_16474 = inst_16494;
var inst_16475 = (0);
var state_16522__$1 = (function (){var statearr_16555 = state_16522;
(statearr_16555[(9)] = inst_16472);

(statearr_16555[(10)] = inst_16473);

(statearr_16555[(11)] = inst_16474);

(statearr_16555[(12)] = inst_16475);

return statearr_16555;
})();
var statearr_16556_17405 = state_16522__$1;
(statearr_16556_17405[(2)] = null);

(statearr_16556_17405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (3))){
var inst_16520 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16522__$1,inst_16520);
} else {
if((state_val_16523 === (12))){
var inst_16508 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16564_17406 = state_16522__$1;
(statearr_16564_17406[(2)] = inst_16508);

(statearr_16564_17406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (2))){
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16522__$1,(4),in$);
} else {
if((state_val_16523 === (23))){
var inst_16516 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16583_17407 = state_16522__$1;
(statearr_16583_17407[(2)] = inst_16516);

(statearr_16583_17407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (19))){
var inst_16503 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16595_17408 = state_16522__$1;
(statearr_16595_17408[(2)] = inst_16503);

(statearr_16595_17408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (11))){
var inst_16472 = (state_16522[(9)]);
var inst_16488 = (state_16522[(7)]);
var inst_16488__$1 = cljs.core.seq(inst_16472);
var state_16522__$1 = (function (){var statearr_16606 = state_16522;
(statearr_16606[(7)] = inst_16488__$1);

return statearr_16606;
})();
if(inst_16488__$1){
var statearr_16607_17410 = state_16522__$1;
(statearr_16607_17410[(1)] = (14));

} else {
var statearr_16609_17411 = state_16522__$1;
(statearr_16609_17411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (9))){
var inst_16510 = (state_16522[(2)]);
var inst_16511 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16522__$1 = (function (){var statearr_16610 = state_16522;
(statearr_16610[(15)] = inst_16510);

return statearr_16610;
})();
if(cljs.core.truth_(inst_16511)){
var statearr_16611_17413 = state_16522__$1;
(statearr_16611_17413[(1)] = (21));

} else {
var statearr_16612_17414 = state_16522__$1;
(statearr_16612_17414[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (5))){
var inst_16464 = cljs.core.async.close_BANG_(out);
var state_16522__$1 = state_16522;
var statearr_16615_17415 = state_16522__$1;
(statearr_16615_17415[(2)] = inst_16464);

(statearr_16615_17415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (14))){
var inst_16488 = (state_16522[(7)]);
var inst_16490 = cljs.core.chunked_seq_QMARK_(inst_16488);
var state_16522__$1 = state_16522;
if(inst_16490){
var statearr_16618_17416 = state_16522__$1;
(statearr_16618_17416[(1)] = (17));

} else {
var statearr_16619_17417 = state_16522__$1;
(statearr_16619_17417[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (16))){
var inst_16506 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16620_17418 = state_16522__$1;
(statearr_16620_17418[(2)] = inst_16506);

(statearr_16620_17418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (10))){
var inst_16473 = (state_16522[(10)]);
var inst_16475 = (state_16522[(12)]);
var inst_16481 = cljs.core._nth(inst_16473,inst_16475);
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16522__$1,(13),out,inst_16481);
} else {
if((state_val_16523 === (18))){
var inst_16488 = (state_16522[(7)]);
var inst_16497 = cljs.core.first(inst_16488);
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16522__$1,(20),out,inst_16497);
} else {
if((state_val_16523 === (8))){
var inst_16475 = (state_16522[(12)]);
var inst_16474 = (state_16522[(11)]);
var inst_16477 = (inst_16475 < inst_16474);
var inst_16478 = inst_16477;
var state_16522__$1 = state_16522;
if(cljs.core.truth_(inst_16478)){
var statearr_16621_17420 = state_16522__$1;
(statearr_16621_17420[(1)] = (10));

} else {
var statearr_16622_17421 = state_16522__$1;
(statearr_16622_17421[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____1 = (function (state_16522){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16522);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16627){var ex__14627__auto__ = e16627;
var statearr_16628_17422 = state_16522;
(statearr_16628_17422[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16522[(4)]))){
var statearr_16632_17423 = state_16522;
(statearr_16632_17423[(1)] = cljs.core.first((state_16522[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17424 = state_16522;
state_16522 = G__17424;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__ = function(state_16522){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____1.call(this,state_16522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14624__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16635 = f__14729__auto__();
(statearr_16635[(6)] = c__14728__auto__);

return statearr_16635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16638 = arguments.length;
switch (G__16638) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16648 = arguments.length;
switch (G__16648) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16654 = arguments.length;
switch (G__16654) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16679){
var state_val_16680 = (state_16679[(1)]);
if((state_val_16680 === (7))){
var inst_16674 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16681_17429 = state_16679__$1;
(statearr_16681_17429[(2)] = inst_16674);

(statearr_16681_17429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (1))){
var inst_16655 = null;
var state_16679__$1 = (function (){var statearr_16682 = state_16679;
(statearr_16682[(7)] = inst_16655);

return statearr_16682;
})();
var statearr_16683_17430 = state_16679__$1;
(statearr_16683_17430[(2)] = null);

(statearr_16683_17430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (4))){
var inst_16658 = (state_16679[(8)]);
var inst_16658__$1 = (state_16679[(2)]);
var inst_16659 = (inst_16658__$1 == null);
var inst_16660 = cljs.core.not(inst_16659);
var state_16679__$1 = (function (){var statearr_16685 = state_16679;
(statearr_16685[(8)] = inst_16658__$1);

return statearr_16685;
})();
if(inst_16660){
var statearr_16686_17434 = state_16679__$1;
(statearr_16686_17434[(1)] = (5));

} else {
var statearr_16688_17435 = state_16679__$1;
(statearr_16688_17435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (6))){
var state_16679__$1 = state_16679;
var statearr_16689_17436 = state_16679__$1;
(statearr_16689_17436[(2)] = null);

(statearr_16689_17436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (3))){
var inst_16676 = (state_16679[(2)]);
var inst_16677 = cljs.core.async.close_BANG_(out);
var state_16679__$1 = (function (){var statearr_16690 = state_16679;
(statearr_16690[(9)] = inst_16676);

return statearr_16690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16679__$1,inst_16677);
} else {
if((state_val_16680 === (2))){
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16679__$1,(4),ch);
} else {
if((state_val_16680 === (11))){
var inst_16658 = (state_16679[(8)]);
var inst_16668 = (state_16679[(2)]);
var inst_16655 = inst_16658;
var state_16679__$1 = (function (){var statearr_16691 = state_16679;
(statearr_16691[(10)] = inst_16668);

(statearr_16691[(7)] = inst_16655);

return statearr_16691;
})();
var statearr_16692_17437 = state_16679__$1;
(statearr_16692_17437[(2)] = null);

(statearr_16692_17437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (9))){
var inst_16658 = (state_16679[(8)]);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16679__$1,(11),out,inst_16658);
} else {
if((state_val_16680 === (5))){
var inst_16658 = (state_16679[(8)]);
var inst_16655 = (state_16679[(7)]);
var inst_16662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16658,inst_16655);
var state_16679__$1 = state_16679;
if(inst_16662){
var statearr_16695_17438 = state_16679__$1;
(statearr_16695_17438[(1)] = (8));

} else {
var statearr_16697_17439 = state_16679__$1;
(statearr_16697_17439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (10))){
var inst_16671 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16698_17440 = state_16679__$1;
(statearr_16698_17440[(2)] = inst_16671);

(statearr_16698_17440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (8))){
var inst_16655 = (state_16679[(7)]);
var tmp16694 = inst_16655;
var inst_16655__$1 = tmp16694;
var state_16679__$1 = (function (){var statearr_16700 = state_16679;
(statearr_16700[(7)] = inst_16655__$1);

return statearr_16700;
})();
var statearr_16701_17441 = state_16679__$1;
(statearr_16701_17441[(2)] = null);

(statearr_16701_17441[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16703[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16703[(1)] = (1));

return statearr_16703;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16679){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16679);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16704){var ex__14627__auto__ = e16704;
var statearr_16705_17442 = state_16679;
(statearr_16705_17442[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16679[(4)]))){
var statearr_16706_17443 = state_16679;
(statearr_16706_17443[(1)] = cljs.core.first((state_16679[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17444 = state_16679;
state_16679 = G__17444;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16708 = f__14729__auto__();
(statearr_16708[(6)] = c__14728__auto___17428);

return statearr_16708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16712 = arguments.length;
switch (G__16712) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16753){
var state_val_16754 = (state_16753[(1)]);
if((state_val_16754 === (7))){
var inst_16749 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16755_17447 = state_16753__$1;
(statearr_16755_17447[(2)] = inst_16749);

(statearr_16755_17447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (1))){
var inst_16715 = (new Array(n));
var inst_16716 = inst_16715;
var inst_16717 = (0);
var state_16753__$1 = (function (){var statearr_16756 = state_16753;
(statearr_16756[(7)] = inst_16716);

(statearr_16756[(8)] = inst_16717);

return statearr_16756;
})();
var statearr_16757_17449 = state_16753__$1;
(statearr_16757_17449[(2)] = null);

(statearr_16757_17449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (4))){
var inst_16720 = (state_16753[(9)]);
var inst_16720__$1 = (state_16753[(2)]);
var inst_16721 = (inst_16720__$1 == null);
var inst_16722 = cljs.core.not(inst_16721);
var state_16753__$1 = (function (){var statearr_16758 = state_16753;
(statearr_16758[(9)] = inst_16720__$1);

return statearr_16758;
})();
if(inst_16722){
var statearr_16759_17450 = state_16753__$1;
(statearr_16759_17450[(1)] = (5));

} else {
var statearr_16760_17451 = state_16753__$1;
(statearr_16760_17451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (15))){
var inst_16743 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16761_17452 = state_16753__$1;
(statearr_16761_17452[(2)] = inst_16743);

(statearr_16761_17452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (13))){
var state_16753__$1 = state_16753;
var statearr_16762_17457 = state_16753__$1;
(statearr_16762_17457[(2)] = null);

(statearr_16762_17457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (6))){
var inst_16717 = (state_16753[(8)]);
var inst_16739 = (inst_16717 > (0));
var state_16753__$1 = state_16753;
if(cljs.core.truth_(inst_16739)){
var statearr_16763_17461 = state_16753__$1;
(statearr_16763_17461[(1)] = (12));

} else {
var statearr_16764_17462 = state_16753__$1;
(statearr_16764_17462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (3))){
var inst_16751 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16753__$1,inst_16751);
} else {
if((state_val_16754 === (12))){
var inst_16716 = (state_16753[(7)]);
var inst_16741 = cljs.core.vec(inst_16716);
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16753__$1,(15),out,inst_16741);
} else {
if((state_val_16754 === (2))){
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16753__$1,(4),ch);
} else {
if((state_val_16754 === (11))){
var inst_16732 = (state_16753[(2)]);
var inst_16733 = (new Array(n));
var inst_16716 = inst_16733;
var inst_16717 = (0);
var state_16753__$1 = (function (){var statearr_16765 = state_16753;
(statearr_16765[(10)] = inst_16732);

(statearr_16765[(7)] = inst_16716);

(statearr_16765[(8)] = inst_16717);

return statearr_16765;
})();
var statearr_16766_17463 = state_16753__$1;
(statearr_16766_17463[(2)] = null);

(statearr_16766_17463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (9))){
var inst_16716 = (state_16753[(7)]);
var inst_16730 = cljs.core.vec(inst_16716);
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16753__$1,(11),out,inst_16730);
} else {
if((state_val_16754 === (5))){
var inst_16716 = (state_16753[(7)]);
var inst_16717 = (state_16753[(8)]);
var inst_16720 = (state_16753[(9)]);
var inst_16725 = (state_16753[(11)]);
var inst_16724 = (inst_16716[inst_16717] = inst_16720);
var inst_16725__$1 = (inst_16717 + (1));
var inst_16726 = (inst_16725__$1 < n);
var state_16753__$1 = (function (){var statearr_16767 = state_16753;
(statearr_16767[(12)] = inst_16724);

(statearr_16767[(11)] = inst_16725__$1);

return statearr_16767;
})();
if(cljs.core.truth_(inst_16726)){
var statearr_16768_17467 = state_16753__$1;
(statearr_16768_17467[(1)] = (8));

} else {
var statearr_16769_17468 = state_16753__$1;
(statearr_16769_17468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (14))){
var inst_16746 = (state_16753[(2)]);
var inst_16747 = cljs.core.async.close_BANG_(out);
var state_16753__$1 = (function (){var statearr_16771 = state_16753;
(statearr_16771[(13)] = inst_16746);

return statearr_16771;
})();
var statearr_16772_17469 = state_16753__$1;
(statearr_16772_17469[(2)] = inst_16747);

(statearr_16772_17469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (10))){
var inst_16736 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16773_17470 = state_16753__$1;
(statearr_16773_17470[(2)] = inst_16736);

(statearr_16773_17470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16754 === (8))){
var inst_16716 = (state_16753[(7)]);
var inst_16725 = (state_16753[(11)]);
var tmp16770 = inst_16716;
var inst_16716__$1 = tmp16770;
var inst_16717 = inst_16725;
var state_16753__$1 = (function (){var statearr_16774 = state_16753;
(statearr_16774[(7)] = inst_16716__$1);

(statearr_16774[(8)] = inst_16717);

return statearr_16774;
})();
var statearr_16775_17474 = state_16753__$1;
(statearr_16775_17474[(2)] = null);

(statearr_16775_17474[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16776[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16776[(1)] = (1));

return statearr_16776;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16753){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16753);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16777){var ex__14627__auto__ = e16777;
var statearr_16778_17475 = state_16753;
(statearr_16778_17475[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16753[(4)]))){
var statearr_16779_17476 = state_16753;
(statearr_16779_17476[(1)] = cljs.core.first((state_16753[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17477 = state_16753;
state_16753 = G__17477;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16780 = f__14729__auto__();
(statearr_16780[(6)] = c__14728__auto___17446);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16782 = arguments.length;
switch (G__16782) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14728__auto___17479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_16827){
var state_val_16828 = (state_16827[(1)]);
if((state_val_16828 === (7))){
var inst_16823 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16829_17480 = state_16827__$1;
(statearr_16829_17480[(2)] = inst_16823);

(statearr_16829_17480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (1))){
var inst_16783 = [];
var inst_16784 = inst_16783;
var inst_16785 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16827__$1 = (function (){var statearr_16830 = state_16827;
(statearr_16830[(7)] = inst_16784);

(statearr_16830[(8)] = inst_16785);

return statearr_16830;
})();
var statearr_16831_17484 = state_16827__$1;
(statearr_16831_17484[(2)] = null);

(statearr_16831_17484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (4))){
var inst_16788 = (state_16827[(9)]);
var inst_16788__$1 = (state_16827[(2)]);
var inst_16789 = (inst_16788__$1 == null);
var inst_16790 = cljs.core.not(inst_16789);
var state_16827__$1 = (function (){var statearr_16832 = state_16827;
(statearr_16832[(9)] = inst_16788__$1);

return statearr_16832;
})();
if(inst_16790){
var statearr_16833_17485 = state_16827__$1;
(statearr_16833_17485[(1)] = (5));

} else {
var statearr_16834_17486 = state_16827__$1;
(statearr_16834_17486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (15))){
var inst_16784 = (state_16827[(7)]);
var inst_16815 = cljs.core.vec(inst_16784);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16827__$1,(18),out,inst_16815);
} else {
if((state_val_16828 === (13))){
var inst_16810 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16835_17488 = state_16827__$1;
(statearr_16835_17488[(2)] = inst_16810);

(statearr_16835_17488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (6))){
var inst_16784 = (state_16827[(7)]);
var inst_16812 = inst_16784.length;
var inst_16813 = (inst_16812 > (0));
var state_16827__$1 = state_16827;
if(cljs.core.truth_(inst_16813)){
var statearr_16836_17490 = state_16827__$1;
(statearr_16836_17490[(1)] = (15));

} else {
var statearr_16837_17491 = state_16827__$1;
(statearr_16837_17491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (17))){
var inst_16820 = (state_16827[(2)]);
var inst_16821 = cljs.core.async.close_BANG_(out);
var state_16827__$1 = (function (){var statearr_16838 = state_16827;
(statearr_16838[(10)] = inst_16820);

return statearr_16838;
})();
var statearr_16839_17493 = state_16827__$1;
(statearr_16839_17493[(2)] = inst_16821);

(statearr_16839_17493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (3))){
var inst_16825 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16827__$1,inst_16825);
} else {
if((state_val_16828 === (12))){
var inst_16784 = (state_16827[(7)]);
var inst_16803 = cljs.core.vec(inst_16784);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16827__$1,(14),out,inst_16803);
} else {
if((state_val_16828 === (2))){
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16827__$1,(4),ch);
} else {
if((state_val_16828 === (11))){
var inst_16784 = (state_16827[(7)]);
var inst_16788 = (state_16827[(9)]);
var inst_16792 = (state_16827[(11)]);
var inst_16800 = inst_16784.push(inst_16788);
var tmp16840 = inst_16784;
var inst_16784__$1 = tmp16840;
var inst_16785 = inst_16792;
var state_16827__$1 = (function (){var statearr_16841 = state_16827;
(statearr_16841[(12)] = inst_16800);

(statearr_16841[(7)] = inst_16784__$1);

(statearr_16841[(8)] = inst_16785);

return statearr_16841;
})();
var statearr_16842_17494 = state_16827__$1;
(statearr_16842_17494[(2)] = null);

(statearr_16842_17494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (9))){
var inst_16785 = (state_16827[(8)]);
var inst_16796 = cljs.core.keyword_identical_QMARK_(inst_16785,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16827__$1 = state_16827;
var statearr_16843_17495 = state_16827__$1;
(statearr_16843_17495[(2)] = inst_16796);

(statearr_16843_17495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (5))){
var inst_16788 = (state_16827[(9)]);
var inst_16792 = (state_16827[(11)]);
var inst_16785 = (state_16827[(8)]);
var inst_16793 = (state_16827[(13)]);
var inst_16792__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16788) : f.call(null,inst_16788));
var inst_16793__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16792__$1,inst_16785);
var state_16827__$1 = (function (){var statearr_16844 = state_16827;
(statearr_16844[(11)] = inst_16792__$1);

(statearr_16844[(13)] = inst_16793__$1);

return statearr_16844;
})();
if(inst_16793__$1){
var statearr_16845_17497 = state_16827__$1;
(statearr_16845_17497[(1)] = (8));

} else {
var statearr_16846_17498 = state_16827__$1;
(statearr_16846_17498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (14))){
var inst_16788 = (state_16827[(9)]);
var inst_16792 = (state_16827[(11)]);
var inst_16805 = (state_16827[(2)]);
var inst_16806 = [];
var inst_16807 = inst_16806.push(inst_16788);
var inst_16784 = inst_16806;
var inst_16785 = inst_16792;
var state_16827__$1 = (function (){var statearr_16847 = state_16827;
(statearr_16847[(14)] = inst_16805);

(statearr_16847[(15)] = inst_16807);

(statearr_16847[(7)] = inst_16784);

(statearr_16847[(8)] = inst_16785);

return statearr_16847;
})();
var statearr_16848_17499 = state_16827__$1;
(statearr_16848_17499[(2)] = null);

(statearr_16848_17499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (16))){
var state_16827__$1 = state_16827;
var statearr_16849_17500 = state_16827__$1;
(statearr_16849_17500[(2)] = null);

(statearr_16849_17500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (10))){
var inst_16798 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
if(cljs.core.truth_(inst_16798)){
var statearr_16850_17501 = state_16827__$1;
(statearr_16850_17501[(1)] = (11));

} else {
var statearr_16851_17502 = state_16827__$1;
(statearr_16851_17502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (18))){
var inst_16817 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16852_17503 = state_16827__$1;
(statearr_16852_17503[(2)] = inst_16817);

(statearr_16852_17503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (8))){
var inst_16793 = (state_16827[(13)]);
var state_16827__$1 = state_16827;
var statearr_16853_17504 = state_16827__$1;
(statearr_16853_17504[(2)] = inst_16793);

(statearr_16853_17504[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14624__auto__ = null;
var cljs$core$async$state_machine__14624__auto____0 = (function (){
var statearr_16854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16854[(0)] = cljs$core$async$state_machine__14624__auto__);

(statearr_16854[(1)] = (1));

return statearr_16854;
});
var cljs$core$async$state_machine__14624__auto____1 = (function (state_16827){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_16827);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e16855){var ex__14627__auto__ = e16855;
var statearr_16856_17506 = state_16827;
(statearr_16856_17506[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_16827[(4)]))){
var statearr_16858_17510 = state_16827;
(statearr_16858_17510[(1)] = cljs.core.first((state_16827[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17511 = state_16827;
state_16827 = G__17511;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
cljs$core$async$state_machine__14624__auto__ = function(state_16827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14624__auto____1.call(this,state_16827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14624__auto____0;
cljs$core$async$state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14624__auto____1;
return cljs$core$async$state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_16859 = f__14729__auto__();
(statearr_16859[(6)] = c__14728__auto___17479);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
