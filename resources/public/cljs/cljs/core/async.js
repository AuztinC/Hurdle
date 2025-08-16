// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10883 = arguments.length;
switch (G__10883) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10885 = (function (f,blockable,meta10886){
this.f = f;
this.blockable = blockable;
this.meta10886 = meta10886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10887,meta10886__$1){
var self__ = this;
var _10887__$1 = this;
return (new cljs.core.async.t_cljs$core$async10885(self__.f,self__.blockable,meta10886__$1));
}));

(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10887){
var self__ = this;
var _10887__$1 = this;
return self__.meta10886;
}));

(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10886","meta10886",-220448038,null)], null);
}));

(cljs.core.async.t_cljs$core$async10885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10885");

(cljs.core.async.t_cljs$core$async10885.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10885.
 */
cljs.core.async.__GT_t_cljs$core$async10885 = (function cljs$core$async$__GT_t_cljs$core$async10885(f__$1,blockable__$1,meta10886){
return (new cljs.core.async.t_cljs$core$async10885(f__$1,blockable__$1,meta10886));
});

}

return (new cljs.core.async.t_cljs$core$async10885(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__10901 = arguments.length;
switch (G__10901) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10904 = arguments.length;
switch (G__10904) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__10909 = arguments.length;
switch (G__10909) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10918 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10918);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_10918);
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10921 = arguments.length;
switch (G__10921) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___10942 = n;
var x_10943 = (0);
while(true){
if((x_10943 < n__5616__auto___10942)){
(a[x_10943] = x_10943);

var G__10944 = (x_10943 + (1));
x_10943 = G__10944;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10939 = (function (flag,meta10940){
this.flag = flag;
this.meta10940 = meta10940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10941,meta10940__$1){
var self__ = this;
var _10941__$1 = this;
return (new cljs.core.async.t_cljs$core$async10939(self__.flag,meta10940__$1));
}));

(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10941){
var self__ = this;
var _10941__$1 = this;
return self__.meta10940;
}));

(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10940","meta10940",2041641787,null)], null);
}));

(cljs.core.async.t_cljs$core$async10939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10939");

(cljs.core.async.t_cljs$core$async10939.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10939.
 */
cljs.core.async.__GT_t_cljs$core$async10939 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10939(flag__$1,meta10940){
return (new cljs.core.async.t_cljs$core$async10939(flag__$1,meta10940));
});

}

return (new cljs.core.async.t_cljs$core$async10939(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10961 = (function (flag,cb,meta10962){
this.flag = flag;
this.cb = cb;
this.meta10962 = meta10962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10964,meta10962__$1){
var self__ = this;
var _10964__$1 = this;
return (new cljs.core.async.t_cljs$core$async10961(self__.flag,self__.cb,meta10962__$1));
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10964){
var self__ = this;
var _10964__$1 = this;
return self__.meta10962;
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10962","meta10962",1312116644,null)], null);
}));

(cljs.core.async.t_cljs$core$async10961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10961");

(cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10961.
 */
cljs.core.async.__GT_t_cljs$core$async10961 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10961(flag__$1,cb__$1,meta10962){
return (new cljs.core.async.t_cljs$core$async10961(flag__$1,cb__$1,meta10962));
});

}

return (new cljs.core.async.t_cljs$core$async10961(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__10983_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10983_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__10984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10984_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11014 = (i + (1));
i = G__11014;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___11017 = arguments.length;
var i__5750__auto___11019 = (0);
while(true){
if((i__5750__auto___11019 < len__5749__auto___11017)){
args__5755__auto__.push((arguments[i__5750__auto___11019]));

var G__11022 = (i__5750__auto___11019 + (1));
i__5750__auto___11019 = G__11022;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11011){
var map__11012 = p__11011;
var map__11012__$1 = cljs.core.__destructure_map.call(null,map__11012);
var opts = map__11012__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10996){
var G__10997 = cljs.core.first.call(null,seq10996);
var seq10996__$1 = cljs.core.next.call(null,seq10996);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10997,seq10996__$1);
}));

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
var G__11021 = arguments.length;
switch (G__11021) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10820__auto___11135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11066){
var state_val_11067 = (state_11066[(1)]);
if((state_val_11067 === (7))){
var inst_11055 = (state_11066[(2)]);
var state_11066__$1 = state_11066;
var statearr_11074_11154 = state_11066__$1;
(statearr_11074_11154[(2)] = inst_11055);

(statearr_11074_11154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (1))){
var state_11066__$1 = state_11066;
var statearr_11076_11156 = state_11066__$1;
(statearr_11076_11156[(2)] = null);

(statearr_11076_11156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (4))){
var inst_11038 = (state_11066[(7)]);
var inst_11038__$1 = (state_11066[(2)]);
var inst_11039 = (inst_11038__$1 == null);
var state_11066__$1 = (function (){var statearr_11077 = state_11066;
(statearr_11077[(7)] = inst_11038__$1);

return statearr_11077;
})();
if(cljs.core.truth_(inst_11039)){
var statearr_11078_11173 = state_11066__$1;
(statearr_11078_11173[(1)] = (5));

} else {
var statearr_11079_11174 = state_11066__$1;
(statearr_11079_11174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (13))){
var state_11066__$1 = state_11066;
var statearr_11082_11175 = state_11066__$1;
(statearr_11082_11175[(2)] = null);

(statearr_11082_11175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (6))){
var inst_11038 = (state_11066[(7)]);
var state_11066__$1 = state_11066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11066__$1,(11),to,inst_11038);
} else {
if((state_val_11067 === (3))){
var inst_11057 = (state_11066[(2)]);
var state_11066__$1 = state_11066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11066__$1,inst_11057);
} else {
if((state_val_11067 === (12))){
var state_11066__$1 = state_11066;
var statearr_11085_11177 = state_11066__$1;
(statearr_11085_11177[(2)] = null);

(statearr_11085_11177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (2))){
var state_11066__$1 = state_11066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11066__$1,(4),from);
} else {
if((state_val_11067 === (11))){
var inst_11048 = (state_11066[(2)]);
var state_11066__$1 = state_11066;
if(cljs.core.truth_(inst_11048)){
var statearr_11092_11180 = state_11066__$1;
(statearr_11092_11180[(1)] = (12));

} else {
var statearr_11093_11182 = state_11066__$1;
(statearr_11093_11182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (9))){
var state_11066__$1 = state_11066;
var statearr_11094_11184 = state_11066__$1;
(statearr_11094_11184[(2)] = null);

(statearr_11094_11184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (5))){
var state_11066__$1 = state_11066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11096_11187 = state_11066__$1;
(statearr_11096_11187[(1)] = (8));

} else {
var statearr_11097_11188 = state_11066__$1;
(statearr_11097_11188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (14))){
var inst_11053 = (state_11066[(2)]);
var state_11066__$1 = state_11066;
var statearr_11098_11190 = state_11066__$1;
(statearr_11098_11190[(2)] = inst_11053);

(statearr_11098_11190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (10))){
var inst_11045 = (state_11066[(2)]);
var state_11066__$1 = state_11066;
var statearr_11102_11194 = state_11066__$1;
(statearr_11102_11194[(2)] = inst_11045);

(statearr_11102_11194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11067 === (8))){
var inst_11042 = cljs.core.async.close_BANG_.call(null,to);
var state_11066__$1 = state_11066;
var statearr_11103_11196 = state_11066__$1;
(statearr_11103_11196[(2)] = inst_11042);

(statearr_11103_11196[(1)] = (10));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_11105 = [null,null,null,null,null,null,null,null];
(statearr_11105[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_11105[(1)] = (1));

return statearr_11105;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_11066){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11106){var ex__10622__auto__ = e11106;
var statearr_11108_11214 = state_11066;
(statearr_11108_11214[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11066[(4)]))){
var statearr_11109_11217 = state_11066;
(statearr_11109_11217[(1)] = cljs.core.first.call(null,(state_11066[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11220 = state_11066;
state_11066 = G__11220;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_11066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_11066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11113 = f__10821__auto__.call(null);
(statearr_11113[(6)] = c__10820__auto___11135);

return statearr_11113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__11120){
var vec__11121 = p__11120;
var v = cljs.core.nth.call(null,vec__11121,(0),null);
var p = cljs.core.nth.call(null,vec__11121,(1),null);
var job = vec__11121;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10820__auto___11411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11129){
var state_val_11130 = (state_11129[(1)]);
if((state_val_11130 === (1))){
var state_11129__$1 = state_11129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11129__$1,(2),res,v);
} else {
if((state_val_11130 === (2))){
var inst_11126 = (state_11129[(2)]);
var inst_11127 = cljs.core.async.close_BANG_.call(null,res);
var state_11129__$1 = (function (){var statearr_11132 = state_11129;
(statearr_11132[(7)] = inst_11126);

return statearr_11132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11129__$1,inst_11127);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_11134 = [null,null,null,null,null,null,null,null];
(statearr_11134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__);

(statearr_11134[(1)] = (1));

return statearr_11134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1 = (function (state_11129){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11137){var ex__10622__auto__ = e11137;
var statearr_11138_11413 = state_11129;
(statearr_11138_11413[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11129[(4)]))){
var statearr_11140_11414 = state_11129;
(statearr_11140_11414[(1)] = cljs.core.first.call(null,(state_11129[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11415 = state_11129;
state_11129 = G__11415;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = function(state_11129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1.call(this,state_11129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11145 = f__10821__auto__.call(null);
(statearr_11145[(6)] = c__10820__auto___11411);

return statearr_11145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11149){
var vec__11150 = p__11149;
var v = cljs.core.nth.call(null,vec__11150,(0),null);
var p = cljs.core.nth.call(null,vec__11150,(1),null);
var job = vec__11150;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5616__auto___11421 = n;
var __11422 = (0);
while(true){
if((__11422 < n__5616__auto___11421)){
var G__11155_11423 = type;
var G__11155_11424__$1 = (((G__11155_11423 instanceof cljs.core.Keyword))?G__11155_11423.fqn:null);
switch (G__11155_11424__$1) {
case "compute":
var c__10820__auto___11426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11422,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = ((function (__11422,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function (state_11171){
var state_val_11172 = (state_11171[(1)]);
if((state_val_11172 === (1))){
var state_11171__$1 = state_11171;
var statearr_11176_11427 = state_11171__$1;
(statearr_11176_11427[(2)] = null);

(statearr_11176_11427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (2))){
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11171__$1,(4),jobs);
} else {
if((state_val_11172 === (3))){
var inst_11168 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11171__$1,inst_11168);
} else {
if((state_val_11172 === (4))){
var inst_11160 = (state_11171[(2)]);
var inst_11161 = process__$1.call(null,inst_11160);
var state_11171__$1 = state_11171;
if(cljs.core.truth_(inst_11161)){
var statearr_11178_11428 = state_11171__$1;
(statearr_11178_11428[(1)] = (5));

} else {
var statearr_11179_11429 = state_11171__$1;
(statearr_11179_11429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (5))){
var state_11171__$1 = state_11171;
var statearr_11181_11430 = state_11171__$1;
(statearr_11181_11430[(2)] = null);

(statearr_11181_11430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (6))){
var state_11171__$1 = state_11171;
var statearr_11183_11431 = state_11171__$1;
(statearr_11183_11431[(2)] = null);

(statearr_11183_11431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11172 === (7))){
var inst_11166 = (state_11171[(2)]);
var state_11171__$1 = state_11171;
var statearr_11186_11432 = state_11171__$1;
(statearr_11186_11432[(2)] = inst_11166);

(statearr_11186_11432[(1)] = (3));


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
});})(__11422,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
;
return ((function (__11422,switch__10618__auto__,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_11189 = [null,null,null,null,null,null,null];
(statearr_11189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__);

(statearr_11189[(1)] = (1));

return statearr_11189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1 = (function (state_11171){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11192){var ex__10622__auto__ = e11192;
var statearr_11193_11439 = state_11171;
(statearr_11193_11439[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11171[(4)]))){
var statearr_11195_11440 = state_11171;
(statearr_11195_11440[(1)] = cljs.core.first.call(null,(state_11171[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11441 = state_11171;
state_11171 = G__11441;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = function(state_11171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1.call(this,state_11171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__;
})()
;})(__11422,switch__10618__auto__,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
})();
var state__10822__auto__ = (function (){var statearr_11197 = f__10821__auto__.call(null);
(statearr_11197[(6)] = c__10820__auto___11426);

return statearr_11197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
});})(__11422,c__10820__auto___11426,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
);


break;
case "async":
var c__10820__auto___11442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11422,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = ((function (__11422,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function (state_11212){
var state_val_11213 = (state_11212[(1)]);
if((state_val_11213 === (1))){
var state_11212__$1 = state_11212;
var statearr_11224_11449 = state_11212__$1;
(statearr_11224_11449[(2)] = null);

(statearr_11224_11449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (2))){
var state_11212__$1 = state_11212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11212__$1,(4),jobs);
} else {
if((state_val_11213 === (3))){
var inst_11210 = (state_11212[(2)]);
var state_11212__$1 = state_11212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11212__$1,inst_11210);
} else {
if((state_val_11213 === (4))){
var inst_11202 = (state_11212[(2)]);
var inst_11203 = async.call(null,inst_11202);
var state_11212__$1 = state_11212;
if(cljs.core.truth_(inst_11203)){
var statearr_11225_11472 = state_11212__$1;
(statearr_11225_11472[(1)] = (5));

} else {
var statearr_11226_11473 = state_11212__$1;
(statearr_11226_11473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (5))){
var state_11212__$1 = state_11212;
var statearr_11227_11474 = state_11212__$1;
(statearr_11227_11474[(2)] = null);

(statearr_11227_11474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (6))){
var state_11212__$1 = state_11212;
var statearr_11230_11476 = state_11212__$1;
(statearr_11230_11476[(2)] = null);

(statearr_11230_11476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11213 === (7))){
var inst_11208 = (state_11212[(2)]);
var state_11212__$1 = state_11212;
var statearr_11232_11478 = state_11212__$1;
(statearr_11232_11478[(2)] = inst_11208);

(statearr_11232_11478[(1)] = (3));


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
});})(__11422,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
;
return ((function (__11422,switch__10618__auto__,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_11236 = [null,null,null,null,null,null,null];
(statearr_11236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__);

(statearr_11236[(1)] = (1));

return statearr_11236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1 = (function (state_11212){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11242){var ex__10622__auto__ = e11242;
var statearr_11243_11484 = state_11212;
(statearr_11243_11484[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11212[(4)]))){
var statearr_11244_11486 = state_11212;
(statearr_11244_11486[(1)] = cljs.core.first.call(null,(state_11212[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11493 = state_11212;
state_11212 = G__11493;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = function(state_11212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1.call(this,state_11212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__;
})()
;})(__11422,switch__10618__auto__,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
})();
var state__10822__auto__ = (function (){var statearr_11246 = f__10821__auto__.call(null);
(statearr_11246[(6)] = c__10820__auto___11442);

return statearr_11246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
});})(__11422,c__10820__auto___11442,G__11155_11423,G__11155_11424__$1,n__5616__auto___11421,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11155_11424__$1)].join('')));

}

var G__11497 = (__11422 + (1));
__11422 = G__11497;
continue;
} else {
}
break;
}

var c__10820__auto___11499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11278){
var state_val_11279 = (state_11278[(1)]);
if((state_val_11279 === (7))){
var inst_11274 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
var statearr_11286_11508 = state_11278__$1;
(statearr_11286_11508[(2)] = inst_11274);

(statearr_11286_11508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (1))){
var state_11278__$1 = state_11278;
var statearr_11288_11511 = state_11278__$1;
(statearr_11288_11511[(2)] = null);

(statearr_11288_11511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (4))){
var inst_11254 = (state_11278[(7)]);
var inst_11254__$1 = (state_11278[(2)]);
var inst_11255 = (inst_11254__$1 == null);
var state_11278__$1 = (function (){var statearr_11290 = state_11278;
(statearr_11290[(7)] = inst_11254__$1);

return statearr_11290;
})();
if(cljs.core.truth_(inst_11255)){
var statearr_11291_11514 = state_11278__$1;
(statearr_11291_11514[(1)] = (5));

} else {
var statearr_11293_11515 = state_11278__$1;
(statearr_11293_11515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (6))){
var inst_11254 = (state_11278[(7)]);
var inst_11261 = (state_11278[(8)]);
var inst_11261__$1 = cljs.core.async.chan.call(null,(1));
var inst_11263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11264 = [inst_11254,inst_11261__$1];
var inst_11265 = (new cljs.core.PersistentVector(null,2,(5),inst_11263,inst_11264,null));
var state_11278__$1 = (function (){var statearr_11295 = state_11278;
(statearr_11295[(8)] = inst_11261__$1);

return statearr_11295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11278__$1,(8),jobs,inst_11265);
} else {
if((state_val_11279 === (3))){
var inst_11276 = (state_11278[(2)]);
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11278__$1,inst_11276);
} else {
if((state_val_11279 === (2))){
var state_11278__$1 = state_11278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11278__$1,(4),from);
} else {
if((state_val_11279 === (9))){
var inst_11271 = (state_11278[(2)]);
var state_11278__$1 = (function (){var statearr_11296 = state_11278;
(statearr_11296[(9)] = inst_11271);

return statearr_11296;
})();
var statearr_11297_11523 = state_11278__$1;
(statearr_11297_11523[(2)] = null);

(statearr_11297_11523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (5))){
var inst_11258 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11278__$1 = state_11278;
var statearr_11300_11524 = state_11278__$1;
(statearr_11300_11524[(2)] = inst_11258);

(statearr_11300_11524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11279 === (8))){
var inst_11261 = (state_11278[(8)]);
var inst_11267 = (state_11278[(2)]);
var state_11278__$1 = (function (){var statearr_11301 = state_11278;
(statearr_11301[(10)] = inst_11267);

return statearr_11301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11278__$1,(9),results,inst_11261);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_11302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__);

(statearr_11302[(1)] = (1));

return statearr_11302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1 = (function (state_11278){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11304){var ex__10622__auto__ = e11304;
var statearr_11306_11528 = state_11278;
(statearr_11306_11528[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11278[(4)]))){
var statearr_11307_11529 = state_11278;
(statearr_11307_11529[(1)] = cljs.core.first.call(null,(state_11278[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11530 = state_11278;
state_11278 = G__11530;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = function(state_11278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1.call(this,state_11278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11309 = f__10821__auto__.call(null);
(statearr_11309[(6)] = c__10820__auto___11499);

return statearr_11309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


var c__10820__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11350){
var state_val_11351 = (state_11350[(1)]);
if((state_val_11351 === (7))){
var inst_11346 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11352_11548 = state_11350__$1;
(statearr_11352_11548[(2)] = inst_11346);

(statearr_11352_11548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (20))){
var state_11350__$1 = state_11350;
var statearr_11353_11560 = state_11350__$1;
(statearr_11353_11560[(2)] = null);

(statearr_11353_11560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (1))){
var state_11350__$1 = state_11350;
var statearr_11355_11565 = state_11350__$1;
(statearr_11355_11565[(2)] = null);

(statearr_11355_11565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (4))){
var inst_11312 = (state_11350[(7)]);
var inst_11312__$1 = (state_11350[(2)]);
var inst_11313 = (inst_11312__$1 == null);
var state_11350__$1 = (function (){var statearr_11357 = state_11350;
(statearr_11357[(7)] = inst_11312__$1);

return statearr_11357;
})();
if(cljs.core.truth_(inst_11313)){
var statearr_11359_11566 = state_11350__$1;
(statearr_11359_11566[(1)] = (5));

} else {
var statearr_11360_11569 = state_11350__$1;
(statearr_11360_11569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (15))){
var inst_11328 = (state_11350[(8)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11350__$1,(18),to,inst_11328);
} else {
if((state_val_11351 === (21))){
var inst_11341 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11362_11574 = state_11350__$1;
(statearr_11362_11574[(2)] = inst_11341);

(statearr_11362_11574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (13))){
var inst_11343 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11363 = state_11350;
(statearr_11363[(9)] = inst_11343);

return statearr_11363;
})();
var statearr_11365_11580 = state_11350__$1;
(statearr_11365_11580[(2)] = null);

(statearr_11365_11580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (6))){
var inst_11312 = (state_11350[(7)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(11),inst_11312);
} else {
if((state_val_11351 === (17))){
var inst_11336 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
if(cljs.core.truth_(inst_11336)){
var statearr_11367_11584 = state_11350__$1;
(statearr_11367_11584[(1)] = (19));

} else {
var statearr_11369_11585 = state_11350__$1;
(statearr_11369_11585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (3))){
var inst_11348 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11350__$1,inst_11348);
} else {
if((state_val_11351 === (12))){
var inst_11324 = (state_11350[(10)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(14),inst_11324);
} else {
if((state_val_11351 === (2))){
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11350__$1,(4),results);
} else {
if((state_val_11351 === (19))){
var state_11350__$1 = state_11350;
var statearr_11370_11593 = state_11350__$1;
(statearr_11370_11593[(2)] = null);

(statearr_11370_11593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (11))){
var inst_11324 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11371 = state_11350;
(statearr_11371[(10)] = inst_11324);

return statearr_11371;
})();
var statearr_11372_11598 = state_11350__$1;
(statearr_11372_11598[(2)] = null);

(statearr_11372_11598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (9))){
var state_11350__$1 = state_11350;
var statearr_11373_11602 = state_11350__$1;
(statearr_11373_11602[(2)] = null);

(statearr_11373_11602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (5))){
var state_11350__$1 = state_11350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11374_11608 = state_11350__$1;
(statearr_11374_11608[(1)] = (8));

} else {
var statearr_11375_11609 = state_11350__$1;
(statearr_11375_11609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (14))){
var inst_11328 = (state_11350[(8)]);
var inst_11330 = (state_11350[(11)]);
var inst_11328__$1 = (state_11350[(2)]);
var inst_11329 = (inst_11328__$1 == null);
var inst_11330__$1 = cljs.core.not.call(null,inst_11329);
var state_11350__$1 = (function (){var statearr_11378 = state_11350;
(statearr_11378[(8)] = inst_11328__$1);

(statearr_11378[(11)] = inst_11330__$1);

return statearr_11378;
})();
if(inst_11330__$1){
var statearr_11379_11616 = state_11350__$1;
(statearr_11379_11616[(1)] = (15));

} else {
var statearr_11380_11621 = state_11350__$1;
(statearr_11380_11621[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (16))){
var inst_11330 = (state_11350[(11)]);
var state_11350__$1 = state_11350;
var statearr_11381_11623 = state_11350__$1;
(statearr_11381_11623[(2)] = inst_11330);

(statearr_11381_11623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (10))){
var inst_11320 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11389_11630 = state_11350__$1;
(statearr_11389_11630[(2)] = inst_11320);

(statearr_11389_11630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (18))){
var inst_11333 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11392_11632 = state_11350__$1;
(statearr_11392_11632[(2)] = inst_11333);

(statearr_11392_11632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11351 === (8))){
var inst_11317 = cljs.core.async.close_BANG_.call(null,to);
var state_11350__$1 = state_11350;
var statearr_11393_11633 = state_11350__$1;
(statearr_11393_11633[(2)] = inst_11317);

(statearr_11393_11633[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_11396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__);

(statearr_11396[(1)] = (1));

return statearr_11396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1 = (function (state_11350){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11401){var ex__10622__auto__ = e11401;
var statearr_11402_11635 = state_11350;
(statearr_11402_11635[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11350[(4)]))){
var statearr_11403_11636 = state_11350;
(statearr_11403_11636[(1)] = cljs.core.first.call(null,(state_11350[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11637 = state_11350;
state_11350 = G__11637;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__ = function(state_11350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1.call(this,state_11350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11405 = f__10821__auto__.call(null);
(statearr_11405[(6)] = c__10820__auto__);

return statearr_11405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));

return c__10820__auto__;
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
var G__11410 = arguments.length;
switch (G__11410) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__11420 = arguments.length;
switch (G__11420) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__11434 = arguments.length;
switch (G__11434) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10820__auto___11684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11470){
var state_val_11471 = (state_11470[(1)]);
if((state_val_11471 === (7))){
var inst_11465 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
var statearr_11475_11685 = state_11470__$1;
(statearr_11475_11685[(2)] = inst_11465);

(statearr_11475_11685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (1))){
var state_11470__$1 = state_11470;
var statearr_11477_11687 = state_11470__$1;
(statearr_11477_11687[(2)] = null);

(statearr_11477_11687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (4))){
var inst_11445 = (state_11470[(7)]);
var inst_11445__$1 = (state_11470[(2)]);
var inst_11446 = (inst_11445__$1 == null);
var state_11470__$1 = (function (){var statearr_11480 = state_11470;
(statearr_11480[(7)] = inst_11445__$1);

return statearr_11480;
})();
if(cljs.core.truth_(inst_11446)){
var statearr_11482_11689 = state_11470__$1;
(statearr_11482_11689[(1)] = (5));

} else {
var statearr_11483_11690 = state_11470__$1;
(statearr_11483_11690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (13))){
var state_11470__$1 = state_11470;
var statearr_11485_11691 = state_11470__$1;
(statearr_11485_11691[(2)] = null);

(statearr_11485_11691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (6))){
var inst_11445 = (state_11470[(7)]);
var inst_11452 = p.call(null,inst_11445);
var state_11470__$1 = state_11470;
if(cljs.core.truth_(inst_11452)){
var statearr_11487_11692 = state_11470__$1;
(statearr_11487_11692[(1)] = (9));

} else {
var statearr_11488_11693 = state_11470__$1;
(statearr_11488_11693[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (3))){
var inst_11467 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11470__$1,inst_11467);
} else {
if((state_val_11471 === (12))){
var state_11470__$1 = state_11470;
var statearr_11494_11694 = state_11470__$1;
(statearr_11494_11694[(2)] = null);

(statearr_11494_11694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (2))){
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11470__$1,(4),ch);
} else {
if((state_val_11471 === (11))){
var inst_11445 = (state_11470[(7)]);
var inst_11456 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11470__$1,(8),inst_11456,inst_11445);
} else {
if((state_val_11471 === (9))){
var state_11470__$1 = state_11470;
var statearr_11495_11722 = state_11470__$1;
(statearr_11495_11722[(2)] = tc);

(statearr_11495_11722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (5))){
var inst_11448 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11450 = cljs.core.async.close_BANG_.call(null,fc);
var state_11470__$1 = (function (){var statearr_11498 = state_11470;
(statearr_11498[(8)] = inst_11448);

return statearr_11498;
})();
var statearr_11500_11726 = state_11470__$1;
(statearr_11500_11726[(2)] = inst_11450);

(statearr_11500_11726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (14))){
var inst_11463 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
var statearr_11502_11727 = state_11470__$1;
(statearr_11502_11727[(2)] = inst_11463);

(statearr_11502_11727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (10))){
var state_11470__$1 = state_11470;
var statearr_11503_11729 = state_11470__$1;
(statearr_11503_11729[(2)] = fc);

(statearr_11503_11729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11471 === (8))){
var inst_11458 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
if(cljs.core.truth_(inst_11458)){
var statearr_11507_11731 = state_11470__$1;
(statearr_11507_11731[(1)] = (12));

} else {
var statearr_11509_11733 = state_11470__$1;
(statearr_11509_11733[(1)] = (13));

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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_11510 = [null,null,null,null,null,null,null,null,null];
(statearr_11510[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_11510[(1)] = (1));

return statearr_11510;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_11470){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11512){var ex__10622__auto__ = e11512;
var statearr_11516_11739 = state_11470;
(statearr_11516_11739[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11470[(4)]))){
var statearr_11521_11745 = state_11470;
(statearr_11521_11745[(1)] = cljs.core.first.call(null,(state_11470[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11748 = state_11470;
state_11470 = G__11748;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_11470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_11470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11525 = f__10821__auto__.call(null);
(statearr_11525[(6)] = c__10820__auto___11684);

return statearr_11525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
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
var c__10820__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11559){
var state_val_11561 = (state_11559[(1)]);
if((state_val_11561 === (7))){
var inst_11555 = (state_11559[(2)]);
var state_11559__$1 = state_11559;
var statearr_11568_11753 = state_11559__$1;
(statearr_11568_11753[(2)] = inst_11555);

(statearr_11568_11753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (1))){
var inst_11535 = init;
var inst_11536 = inst_11535;
var state_11559__$1 = (function (){var statearr_11572 = state_11559;
(statearr_11572[(7)] = inst_11536);

return statearr_11572;
})();
var statearr_11573_11755 = state_11559__$1;
(statearr_11573_11755[(2)] = null);

(statearr_11573_11755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (4))){
var inst_11539 = (state_11559[(8)]);
var inst_11539__$1 = (state_11559[(2)]);
var inst_11540 = (inst_11539__$1 == null);
var state_11559__$1 = (function (){var statearr_11579 = state_11559;
(statearr_11579[(8)] = inst_11539__$1);

return statearr_11579;
})();
if(cljs.core.truth_(inst_11540)){
var statearr_11582_11758 = state_11559__$1;
(statearr_11582_11758[(1)] = (5));

} else {
var statearr_11583_11759 = state_11559__$1;
(statearr_11583_11759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (6))){
var inst_11536 = (state_11559[(7)]);
var inst_11539 = (state_11559[(8)]);
var inst_11543 = (state_11559[(9)]);
var inst_11543__$1 = f.call(null,inst_11536,inst_11539);
var inst_11545 = cljs.core.reduced_QMARK_.call(null,inst_11543__$1);
var state_11559__$1 = (function (){var statearr_11587 = state_11559;
(statearr_11587[(9)] = inst_11543__$1);

return statearr_11587;
})();
if(inst_11545){
var statearr_11590_11764 = state_11559__$1;
(statearr_11590_11764[(1)] = (8));

} else {
var statearr_11591_11765 = state_11559__$1;
(statearr_11591_11765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (3))){
var inst_11557 = (state_11559[(2)]);
var state_11559__$1 = state_11559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11559__$1,inst_11557);
} else {
if((state_val_11561 === (2))){
var state_11559__$1 = state_11559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11559__$1,(4),ch);
} else {
if((state_val_11561 === (9))){
var inst_11543 = (state_11559[(9)]);
var inst_11536 = inst_11543;
var state_11559__$1 = (function (){var statearr_11599 = state_11559;
(statearr_11599[(7)] = inst_11536);

return statearr_11599;
})();
var statearr_11600_11775 = state_11559__$1;
(statearr_11600_11775[(2)] = null);

(statearr_11600_11775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (5))){
var inst_11536 = (state_11559[(7)]);
var state_11559__$1 = state_11559;
var statearr_11607_11780 = state_11559__$1;
(statearr_11607_11780[(2)] = inst_11536);

(statearr_11607_11780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (10))){
var inst_11553 = (state_11559[(2)]);
var state_11559__$1 = state_11559;
var statearr_11610_11781 = state_11559__$1;
(statearr_11610_11781[(2)] = inst_11553);

(statearr_11610_11781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (8))){
var inst_11543 = (state_11559[(9)]);
var inst_11549 = cljs.core.deref.call(null,inst_11543);
var state_11559__$1 = state_11559;
var statearr_11615_11784 = state_11559__$1;
(statearr_11615_11784[(2)] = inst_11549);

(statearr_11615_11784[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10619__auto____0 = (function (){
var statearr_11622 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11622[(0)] = cljs$core$async$reduce_$_state_machine__10619__auto__);

(statearr_11622[(1)] = (1));

return statearr_11622;
});
var cljs$core$async$reduce_$_state_machine__10619__auto____1 = (function (state_11559){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11628){var ex__10622__auto__ = e11628;
var statearr_11629_11787 = state_11559;
(statearr_11629_11787[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11559[(4)]))){
var statearr_11631_11789 = state_11559;
(statearr_11631_11789[(1)] = cljs.core.first.call(null,(state_11559[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11790 = state_11559;
state_11559 = G__11790;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10619__auto__ = function(state_11559){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10619__auto____1.call(this,state_11559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10619__auto____0;
cljs$core$async$reduce_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10619__auto____1;
return cljs$core$async$reduce_$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11634 = f__10821__auto__.call(null);
(statearr_11634[(6)] = c__10820__auto__);

return statearr_11634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));

return c__10820__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10820__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11643){
var state_val_11644 = (state_11643[(1)]);
if((state_val_11644 === (1))){
var inst_11638 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11643__$1 = state_11643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11643__$1,(2),inst_11638);
} else {
if((state_val_11644 === (2))){
var inst_11640 = (state_11643[(2)]);
var inst_11641 = f__$1.call(null,inst_11640);
var state_11643__$1 = state_11643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11643__$1,inst_11641);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10619__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10619__auto____0 = (function (){
var statearr_11659 = [null,null,null,null,null,null,null];
(statearr_11659[(0)] = cljs$core$async$transduce_$_state_machine__10619__auto__);

(statearr_11659[(1)] = (1));

return statearr_11659;
});
var cljs$core$async$transduce_$_state_machine__10619__auto____1 = (function (state_11643){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11668){var ex__10622__auto__ = e11668;
var statearr_11673_11794 = state_11643;
(statearr_11673_11794[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11643[(4)]))){
var statearr_11679_11795 = state_11643;
(statearr_11679_11795[(1)] = cljs.core.first.call(null,(state_11643[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11797 = state_11643;
state_11643 = G__11797;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10619__auto__ = function(state_11643){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10619__auto____1.call(this,state_11643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10619__auto____0;
cljs$core$async$transduce_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10619__auto____1;
return cljs$core$async$transduce_$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11683 = f__10821__auto__.call(null);
(statearr_11683[(6)] = c__10820__auto__);

return statearr_11683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));

return c__10820__auto__;
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
var G__11688 = arguments.length;
switch (G__11688) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10820__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11724){
var state_val_11725 = (state_11724[(1)]);
if((state_val_11725 === (7))){
var inst_11702 = (state_11724[(2)]);
var state_11724__$1 = state_11724;
var statearr_11728_11805 = state_11724__$1;
(statearr_11728_11805[(2)] = inst_11702);

(statearr_11728_11805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (1))){
var inst_11695 = cljs.core.seq.call(null,coll);
var inst_11696 = inst_11695;
var state_11724__$1 = (function (){var statearr_11730 = state_11724;
(statearr_11730[(7)] = inst_11696);

return statearr_11730;
})();
var statearr_11732_11806 = state_11724__$1;
(statearr_11732_11806[(2)] = null);

(statearr_11732_11806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (4))){
var inst_11696 = (state_11724[(7)]);
var inst_11700 = cljs.core.first.call(null,inst_11696);
var state_11724__$1 = state_11724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11724__$1,(7),ch,inst_11700);
} else {
if((state_val_11725 === (13))){
var inst_11716 = (state_11724[(2)]);
var state_11724__$1 = state_11724;
var statearr_11738_11807 = state_11724__$1;
(statearr_11738_11807[(2)] = inst_11716);

(statearr_11738_11807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (6))){
var inst_11706 = (state_11724[(2)]);
var state_11724__$1 = state_11724;
if(cljs.core.truth_(inst_11706)){
var statearr_11744_11808 = state_11724__$1;
(statearr_11744_11808[(1)] = (8));

} else {
var statearr_11747_11809 = state_11724__$1;
(statearr_11747_11809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (3))){
var inst_11720 = (state_11724[(2)]);
var state_11724__$1 = state_11724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11724__$1,inst_11720);
} else {
if((state_val_11725 === (12))){
var state_11724__$1 = state_11724;
var statearr_11750_11810 = state_11724__$1;
(statearr_11750_11810[(2)] = null);

(statearr_11750_11810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (2))){
var inst_11696 = (state_11724[(7)]);
var state_11724__$1 = state_11724;
if(cljs.core.truth_(inst_11696)){
var statearr_11751_11811 = state_11724__$1;
(statearr_11751_11811[(1)] = (4));

} else {
var statearr_11752_11815 = state_11724__$1;
(statearr_11752_11815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (11))){
var inst_11713 = cljs.core.async.close_BANG_.call(null,ch);
var state_11724__$1 = state_11724;
var statearr_11754_11817 = state_11724__$1;
(statearr_11754_11817[(2)] = inst_11713);

(statearr_11754_11817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (9))){
var state_11724__$1 = state_11724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11756_11820 = state_11724__$1;
(statearr_11756_11820[(1)] = (11));

} else {
var statearr_11757_11821 = state_11724__$1;
(statearr_11757_11821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (5))){
var inst_11696 = (state_11724[(7)]);
var state_11724__$1 = state_11724;
var statearr_11760_11822 = state_11724__$1;
(statearr_11760_11822[(2)] = inst_11696);

(statearr_11760_11822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (10))){
var inst_11718 = (state_11724[(2)]);
var state_11724__$1 = state_11724;
var statearr_11761_11823 = state_11724__$1;
(statearr_11761_11823[(2)] = inst_11718);

(statearr_11761_11823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11725 === (8))){
var inst_11696 = (state_11724[(7)]);
var inst_11709 = cljs.core.next.call(null,inst_11696);
var inst_11696__$1 = inst_11709;
var state_11724__$1 = (function (){var statearr_11763 = state_11724;
(statearr_11763[(7)] = inst_11696__$1);

return statearr_11763;
})();
var statearr_11766_11824 = state_11724__$1;
(statearr_11766_11824[(2)] = null);

(statearr_11766_11824[(1)] = (2));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_11774 = [null,null,null,null,null,null,null,null];
(statearr_11774[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_11774[(1)] = (1));

return statearr_11774;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_11724){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e11776){var ex__10622__auto__ = e11776;
var statearr_11777_11825 = state_11724;
(statearr_11777_11825[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11724[(4)]))){
var statearr_11779_11826 = state_11724;
(statearr_11779_11826[(1)] = cljs.core.first.call(null,(state_11724[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11827 = state_11724;
state_11724 = G__11827;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_11724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_11724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_11783 = f__10821__auto__.call(null);
(statearr_11783[(6)] = c__10820__auto__);

return statearr_11783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));

return c__10820__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11792 = arguments.length;
switch (G__11792) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_11832 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_11832.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11837 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_11837.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11841 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_11841.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11845 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_11845.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11833 = (function (ch,cs,meta11834){
this.ch = ch;
this.cs = cs;
this.meta11834 = meta11834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11835,meta11834__$1){
var self__ = this;
var _11835__$1 = this;
return (new cljs.core.async.t_cljs$core$async11833(self__.ch,self__.cs,meta11834__$1));
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11835){
var self__ = this;
var _11835__$1 = this;
return self__.meta11834;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11833.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11834","meta11834",61315183,null)], null);
}));

(cljs.core.async.t_cljs$core$async11833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11833");

(cljs.core.async.t_cljs$core$async11833.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11833.
 */
cljs.core.async.__GT_t_cljs$core$async11833 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11833(ch__$1,cs__$1,meta11834){
return (new cljs.core.async.t_cljs$core$async11833(ch__$1,cs__$1,meta11834));
});

}

return (new cljs.core.async.t_cljs$core$async11833(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__10820__auto___12109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_11995){
var state_val_12001 = (state_11995[(1)]);
if((state_val_12001 === (7))){
var inst_11989 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12006_12111 = state_11995__$1;
(statearr_12006_12111[(2)] = inst_11989);

(statearr_12006_12111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (20))){
var inst_11894 = (state_11995[(7)]);
var inst_11906 = cljs.core.first.call(null,inst_11894);
var inst_11907 = cljs.core.nth.call(null,inst_11906,(0),null);
var inst_11908 = cljs.core.nth.call(null,inst_11906,(1),null);
var state_11995__$1 = (function (){var statearr_12007 = state_11995;
(statearr_12007[(8)] = inst_11907);

return statearr_12007;
})();
if(cljs.core.truth_(inst_11908)){
var statearr_12008_12112 = state_11995__$1;
(statearr_12008_12112[(1)] = (22));

} else {
var statearr_12009_12113 = state_11995__$1;
(statearr_12009_12113[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (27))){
var inst_11936 = (state_11995[(9)]);
var inst_11938 = (state_11995[(10)]);
var inst_11943 = (state_11995[(11)]);
var inst_11861 = (state_11995[(12)]);
var inst_11943__$1 = cljs.core._nth.call(null,inst_11936,inst_11938);
var inst_11944 = cljs.core.async.put_BANG_.call(null,inst_11943__$1,inst_11861,done);
var state_11995__$1 = (function (){var statearr_12010 = state_11995;
(statearr_12010[(11)] = inst_11943__$1);

return statearr_12010;
})();
if(cljs.core.truth_(inst_11944)){
var statearr_12011_12115 = state_11995__$1;
(statearr_12011_12115[(1)] = (30));

} else {
var statearr_12012_12116 = state_11995__$1;
(statearr_12012_12116[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (1))){
var state_11995__$1 = state_11995;
var statearr_12013_12117 = state_11995__$1;
(statearr_12013_12117[(2)] = null);

(statearr_12013_12117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (24))){
var inst_11894 = (state_11995[(7)]);
var inst_11913 = (state_11995[(2)]);
var inst_11914 = cljs.core.next.call(null,inst_11894);
var inst_11870 = inst_11914;
var inst_11871 = null;
var inst_11872 = (0);
var inst_11873 = (0);
var state_11995__$1 = (function (){var statearr_12014 = state_11995;
(statearr_12014[(13)] = inst_11913);

(statearr_12014[(14)] = inst_11870);

(statearr_12014[(15)] = inst_11871);

(statearr_12014[(16)] = inst_11872);

(statearr_12014[(17)] = inst_11873);

return statearr_12014;
})();
var statearr_12015_12119 = state_11995__$1;
(statearr_12015_12119[(2)] = null);

(statearr_12015_12119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (39))){
var state_11995__$1 = state_11995;
var statearr_12023_12120 = state_11995__$1;
(statearr_12023_12120[(2)] = null);

(statearr_12023_12120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (4))){
var inst_11861 = (state_11995[(12)]);
var inst_11861__$1 = (state_11995[(2)]);
var inst_11862 = (inst_11861__$1 == null);
var state_11995__$1 = (function (){var statearr_12024 = state_11995;
(statearr_12024[(12)] = inst_11861__$1);

return statearr_12024;
})();
if(cljs.core.truth_(inst_11862)){
var statearr_12025_12121 = state_11995__$1;
(statearr_12025_12121[(1)] = (5));

} else {
var statearr_12026_12122 = state_11995__$1;
(statearr_12026_12122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (15))){
var inst_11873 = (state_11995[(17)]);
var inst_11870 = (state_11995[(14)]);
var inst_11871 = (state_11995[(15)]);
var inst_11872 = (state_11995[(16)]);
var inst_11888 = (state_11995[(2)]);
var inst_11889 = (inst_11873 + (1));
var tmp12019 = inst_11870;
var tmp12020 = inst_11872;
var tmp12021 = inst_11871;
var inst_11870__$1 = tmp12019;
var inst_11871__$1 = tmp12021;
var inst_11872__$1 = tmp12020;
var inst_11873__$1 = inst_11889;
var state_11995__$1 = (function (){var statearr_12027 = state_11995;
(statearr_12027[(18)] = inst_11888);

(statearr_12027[(14)] = inst_11870__$1);

(statearr_12027[(15)] = inst_11871__$1);

(statearr_12027[(16)] = inst_11872__$1);

(statearr_12027[(17)] = inst_11873__$1);

return statearr_12027;
})();
var statearr_12028_12130 = state_11995__$1;
(statearr_12028_12130[(2)] = null);

(statearr_12028_12130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (21))){
var inst_11917 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12032_12132 = state_11995__$1;
(statearr_12032_12132[(2)] = inst_11917);

(statearr_12032_12132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (31))){
var inst_11943 = (state_11995[(11)]);
var inst_11947 = cljs.core.async.untap_STAR_.call(null,m,inst_11943);
var state_11995__$1 = state_11995;
var statearr_12033_12133 = state_11995__$1;
(statearr_12033_12133[(2)] = inst_11947);

(statearr_12033_12133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (32))){
var inst_11938 = (state_11995[(10)]);
var inst_11935 = (state_11995[(19)]);
var inst_11936 = (state_11995[(9)]);
var inst_11937 = (state_11995[(20)]);
var inst_11949 = (state_11995[(2)]);
var inst_11950 = (inst_11938 + (1));
var tmp12029 = inst_11936;
var tmp12030 = inst_11937;
var tmp12031 = inst_11935;
var inst_11935__$1 = tmp12031;
var inst_11936__$1 = tmp12029;
var inst_11937__$1 = tmp12030;
var inst_11938__$1 = inst_11950;
var state_11995__$1 = (function (){var statearr_12035 = state_11995;
(statearr_12035[(21)] = inst_11949);

(statearr_12035[(19)] = inst_11935__$1);

(statearr_12035[(9)] = inst_11936__$1);

(statearr_12035[(20)] = inst_11937__$1);

(statearr_12035[(10)] = inst_11938__$1);

return statearr_12035;
})();
var statearr_12036_12137 = state_11995__$1;
(statearr_12036_12137[(2)] = null);

(statearr_12036_12137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (40))){
var inst_11962 = (state_11995[(22)]);
var inst_11966 = cljs.core.async.untap_STAR_.call(null,m,inst_11962);
var state_11995__$1 = state_11995;
var statearr_12037_12138 = state_11995__$1;
(statearr_12037_12138[(2)] = inst_11966);

(statearr_12037_12138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (33))){
var inst_11953 = (state_11995[(23)]);
var inst_11955 = cljs.core.chunked_seq_QMARK_.call(null,inst_11953);
var state_11995__$1 = state_11995;
if(inst_11955){
var statearr_12038_12142 = state_11995__$1;
(statearr_12038_12142[(1)] = (36));

} else {
var statearr_12039_12143 = state_11995__$1;
(statearr_12039_12143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (13))){
var inst_11882 = (state_11995[(24)]);
var inst_11885 = cljs.core.async.close_BANG_.call(null,inst_11882);
var state_11995__$1 = state_11995;
var statearr_12040_12145 = state_11995__$1;
(statearr_12040_12145[(2)] = inst_11885);

(statearr_12040_12145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (22))){
var inst_11907 = (state_11995[(8)]);
var inst_11910 = cljs.core.async.close_BANG_.call(null,inst_11907);
var state_11995__$1 = state_11995;
var statearr_12041_12149 = state_11995__$1;
(statearr_12041_12149[(2)] = inst_11910);

(statearr_12041_12149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (36))){
var inst_11953 = (state_11995[(23)]);
var inst_11957 = cljs.core.chunk_first.call(null,inst_11953);
var inst_11958 = cljs.core.chunk_rest.call(null,inst_11953);
var inst_11959 = cljs.core.count.call(null,inst_11957);
var inst_11935 = inst_11958;
var inst_11936 = inst_11957;
var inst_11937 = inst_11959;
var inst_11938 = (0);
var state_11995__$1 = (function (){var statearr_12042 = state_11995;
(statearr_12042[(19)] = inst_11935);

(statearr_12042[(9)] = inst_11936);

(statearr_12042[(20)] = inst_11937);

(statearr_12042[(10)] = inst_11938);

return statearr_12042;
})();
var statearr_12043_12151 = state_11995__$1;
(statearr_12043_12151[(2)] = null);

(statearr_12043_12151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (41))){
var inst_11953 = (state_11995[(23)]);
var inst_11968 = (state_11995[(2)]);
var inst_11969 = cljs.core.next.call(null,inst_11953);
var inst_11935 = inst_11969;
var inst_11936 = null;
var inst_11937 = (0);
var inst_11938 = (0);
var state_11995__$1 = (function (){var statearr_12044 = state_11995;
(statearr_12044[(25)] = inst_11968);

(statearr_12044[(19)] = inst_11935);

(statearr_12044[(9)] = inst_11936);

(statearr_12044[(20)] = inst_11937);

(statearr_12044[(10)] = inst_11938);

return statearr_12044;
})();
var statearr_12045_12159 = state_11995__$1;
(statearr_12045_12159[(2)] = null);

(statearr_12045_12159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (43))){
var state_11995__$1 = state_11995;
var statearr_12046_12160 = state_11995__$1;
(statearr_12046_12160[(2)] = null);

(statearr_12046_12160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (29))){
var inst_11977 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12047_12161 = state_11995__$1;
(statearr_12047_12161[(2)] = inst_11977);

(statearr_12047_12161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (44))){
var inst_11986 = (state_11995[(2)]);
var state_11995__$1 = (function (){var statearr_12048 = state_11995;
(statearr_12048[(26)] = inst_11986);

return statearr_12048;
})();
var statearr_12049_12162 = state_11995__$1;
(statearr_12049_12162[(2)] = null);

(statearr_12049_12162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (6))){
var inst_11927 = (state_11995[(27)]);
var inst_11926 = cljs.core.deref.call(null,cs);
var inst_11927__$1 = cljs.core.keys.call(null,inst_11926);
var inst_11928 = cljs.core.count.call(null,inst_11927__$1);
var inst_11929 = cljs.core.reset_BANG_.call(null,dctr,inst_11928);
var inst_11934 = cljs.core.seq.call(null,inst_11927__$1);
var inst_11935 = inst_11934;
var inst_11936 = null;
var inst_11937 = (0);
var inst_11938 = (0);
var state_11995__$1 = (function (){var statearr_12050 = state_11995;
(statearr_12050[(27)] = inst_11927__$1);

(statearr_12050[(28)] = inst_11929);

(statearr_12050[(19)] = inst_11935);

(statearr_12050[(9)] = inst_11936);

(statearr_12050[(20)] = inst_11937);

(statearr_12050[(10)] = inst_11938);

return statearr_12050;
})();
var statearr_12051_12176 = state_11995__$1;
(statearr_12051_12176[(2)] = null);

(statearr_12051_12176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (28))){
var inst_11935 = (state_11995[(19)]);
var inst_11953 = (state_11995[(23)]);
var inst_11953__$1 = cljs.core.seq.call(null,inst_11935);
var state_11995__$1 = (function (){var statearr_12052 = state_11995;
(statearr_12052[(23)] = inst_11953__$1);

return statearr_12052;
})();
if(inst_11953__$1){
var statearr_12053_12177 = state_11995__$1;
(statearr_12053_12177[(1)] = (33));

} else {
var statearr_12054_12178 = state_11995__$1;
(statearr_12054_12178[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (25))){
var inst_11938 = (state_11995[(10)]);
var inst_11937 = (state_11995[(20)]);
var inst_11940 = (inst_11938 < inst_11937);
var inst_11941 = inst_11940;
var state_11995__$1 = state_11995;
if(cljs.core.truth_(inst_11941)){
var statearr_12055_12185 = state_11995__$1;
(statearr_12055_12185[(1)] = (27));

} else {
var statearr_12056_12187 = state_11995__$1;
(statearr_12056_12187[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (34))){
var state_11995__$1 = state_11995;
var statearr_12057_12192 = state_11995__$1;
(statearr_12057_12192[(2)] = null);

(statearr_12057_12192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (17))){
var state_11995__$1 = state_11995;
var statearr_12058_12195 = state_11995__$1;
(statearr_12058_12195[(2)] = null);

(statearr_12058_12195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (3))){
var inst_11991 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11991);
} else {
if((state_val_12001 === (12))){
var inst_11922 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12059_12197 = state_11995__$1;
(statearr_12059_12197[(2)] = inst_11922);

(statearr_12059_12197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (2))){
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(4),ch);
} else {
if((state_val_12001 === (23))){
var state_11995__$1 = state_11995;
var statearr_12060_12199 = state_11995__$1;
(statearr_12060_12199[(2)] = null);

(statearr_12060_12199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (35))){
var inst_11975 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12061_12200 = state_11995__$1;
(statearr_12061_12200[(2)] = inst_11975);

(statearr_12061_12200[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (19))){
var inst_11894 = (state_11995[(7)]);
var inst_11898 = cljs.core.chunk_first.call(null,inst_11894);
var inst_11899 = cljs.core.chunk_rest.call(null,inst_11894);
var inst_11900 = cljs.core.count.call(null,inst_11898);
var inst_11870 = inst_11899;
var inst_11871 = inst_11898;
var inst_11872 = inst_11900;
var inst_11873 = (0);
var state_11995__$1 = (function (){var statearr_12062 = state_11995;
(statearr_12062[(14)] = inst_11870);

(statearr_12062[(15)] = inst_11871);

(statearr_12062[(16)] = inst_11872);

(statearr_12062[(17)] = inst_11873);

return statearr_12062;
})();
var statearr_12063_12202 = state_11995__$1;
(statearr_12063_12202[(2)] = null);

(statearr_12063_12202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (11))){
var inst_11870 = (state_11995[(14)]);
var inst_11894 = (state_11995[(7)]);
var inst_11894__$1 = cljs.core.seq.call(null,inst_11870);
var state_11995__$1 = (function (){var statearr_12064 = state_11995;
(statearr_12064[(7)] = inst_11894__$1);

return statearr_12064;
})();
if(inst_11894__$1){
var statearr_12065_12204 = state_11995__$1;
(statearr_12065_12204[(1)] = (16));

} else {
var statearr_12066_12205 = state_11995__$1;
(statearr_12066_12205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (9))){
var inst_11924 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12067_12206 = state_11995__$1;
(statearr_12067_12206[(2)] = inst_11924);

(statearr_12067_12206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (5))){
var inst_11868 = cljs.core.deref.call(null,cs);
var inst_11869 = cljs.core.seq.call(null,inst_11868);
var inst_11870 = inst_11869;
var inst_11871 = null;
var inst_11872 = (0);
var inst_11873 = (0);
var state_11995__$1 = (function (){var statearr_12068 = state_11995;
(statearr_12068[(14)] = inst_11870);

(statearr_12068[(15)] = inst_11871);

(statearr_12068[(16)] = inst_11872);

(statearr_12068[(17)] = inst_11873);

return statearr_12068;
})();
var statearr_12069_12208 = state_11995__$1;
(statearr_12069_12208[(2)] = null);

(statearr_12069_12208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (14))){
var state_11995__$1 = state_11995;
var statearr_12070_12209 = state_11995__$1;
(statearr_12070_12209[(2)] = null);

(statearr_12070_12209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (45))){
var inst_11983 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12072_12210 = state_11995__$1;
(statearr_12072_12210[(2)] = inst_11983);

(statearr_12072_12210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (26))){
var inst_11927 = (state_11995[(27)]);
var inst_11979 = (state_11995[(2)]);
var inst_11980 = cljs.core.seq.call(null,inst_11927);
var state_11995__$1 = (function (){var statearr_12074 = state_11995;
(statearr_12074[(29)] = inst_11979);

return statearr_12074;
})();
if(inst_11980){
var statearr_12075_12211 = state_11995__$1;
(statearr_12075_12211[(1)] = (42));

} else {
var statearr_12076_12212 = state_11995__$1;
(statearr_12076_12212[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (16))){
var inst_11894 = (state_11995[(7)]);
var inst_11896 = cljs.core.chunked_seq_QMARK_.call(null,inst_11894);
var state_11995__$1 = state_11995;
if(inst_11896){
var statearr_12081_12214 = state_11995__$1;
(statearr_12081_12214[(1)] = (19));

} else {
var statearr_12082_12215 = state_11995__$1;
(statearr_12082_12215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (38))){
var inst_11972 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12083_12216 = state_11995__$1;
(statearr_12083_12216[(2)] = inst_11972);

(statearr_12083_12216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (30))){
var state_11995__$1 = state_11995;
var statearr_12084_12221 = state_11995__$1;
(statearr_12084_12221[(2)] = null);

(statearr_12084_12221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (10))){
var inst_11871 = (state_11995[(15)]);
var inst_11873 = (state_11995[(17)]);
var inst_11881 = cljs.core._nth.call(null,inst_11871,inst_11873);
var inst_11882 = cljs.core.nth.call(null,inst_11881,(0),null);
var inst_11883 = cljs.core.nth.call(null,inst_11881,(1),null);
var state_11995__$1 = (function (){var statearr_12085 = state_11995;
(statearr_12085[(24)] = inst_11882);

return statearr_12085;
})();
if(cljs.core.truth_(inst_11883)){
var statearr_12086_12235 = state_11995__$1;
(statearr_12086_12235[(1)] = (13));

} else {
var statearr_12087_12237 = state_11995__$1;
(statearr_12087_12237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (18))){
var inst_11920 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12088_12243 = state_11995__$1;
(statearr_12088_12243[(2)] = inst_11920);

(statearr_12088_12243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (42))){
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(45),dchan);
} else {
if((state_val_12001 === (37))){
var inst_11953 = (state_11995[(23)]);
var inst_11962 = (state_11995[(22)]);
var inst_11861 = (state_11995[(12)]);
var inst_11962__$1 = cljs.core.first.call(null,inst_11953);
var inst_11963 = cljs.core.async.put_BANG_.call(null,inst_11962__$1,inst_11861,done);
var state_11995__$1 = (function (){var statearr_12090 = state_11995;
(statearr_12090[(22)] = inst_11962__$1);

return statearr_12090;
})();
if(cljs.core.truth_(inst_11963)){
var statearr_12091_12251 = state_11995__$1;
(statearr_12091_12251[(1)] = (39));

} else {
var statearr_12092_12252 = state_11995__$1;
(statearr_12092_12252[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12001 === (8))){
var inst_11873 = (state_11995[(17)]);
var inst_11872 = (state_11995[(16)]);
var inst_11875 = (inst_11873 < inst_11872);
var inst_11876 = inst_11875;
var state_11995__$1 = state_11995;
if(cljs.core.truth_(inst_11876)){
var statearr_12093_12253 = state_11995__$1;
(statearr_12093_12253[(1)] = (10));

} else {
var statearr_12094_12254 = state_11995__$1;
(statearr_12094_12254[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10619__auto__ = null;
var cljs$core$async$mult_$_state_machine__10619__auto____0 = (function (){
var statearr_12096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12096[(0)] = cljs$core$async$mult_$_state_machine__10619__auto__);

(statearr_12096[(1)] = (1));

return statearr_12096;
});
var cljs$core$async$mult_$_state_machine__10619__auto____1 = (function (state_11995){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_11995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12097){var ex__10622__auto__ = e12097;
var statearr_12098_12261 = state_11995;
(statearr_12098_12261[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_11995[(4)]))){
var statearr_12099_12263 = state_11995;
(statearr_12099_12263[(1)] = cljs.core.first.call(null,(state_11995[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12264 = state_11995;
state_11995 = G__12264;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10619__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10619__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10619__auto____0;
cljs$core$async$mult_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10619__auto____1;
return cljs$core$async$mult_$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12101 = f__10821__auto__.call(null);
(statearr_12101[(6)] = c__10820__auto___12109);

return statearr_12101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
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
var G__12106 = arguments.length;
switch (G__12106) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_12266 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12266.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12269 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12269.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12292 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12292.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12313 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,state_map);
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12313.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12345 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,mode);
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12345.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12348 = arguments.length;
var i__5750__auto___12349 = (0);
while(true){
if((i__5750__auto___12349 < len__5749__auto___12348)){
args__5755__auto__.push((arguments[i__5750__auto___12349]));

var G__12350 = (i__5750__auto___12349 + (1));
i__5750__auto___12349 = G__12350;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12182){
var map__12186 = p__12182;
var map__12186__$1 = cljs.core.__destructure_map.call(null,map__12186);
var opts = map__12186__$1;
var statearr_12191_12353 = state;
(statearr_12191_12353[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12196_12355 = state;
(statearr_12196_12355[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12198_12356 = state;
(statearr_12198_12356[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12167){
var G__12168 = cljs.core.first.call(null,seq12167);
var seq12167__$1 = cljs.core.next.call(null,seq12167);
var G__12169 = cljs.core.first.call(null,seq12167__$1);
var seq12167__$2 = cljs.core.next.call(null,seq12167__$1);
var G__12170 = cljs.core.first.call(null,seq12167__$2);
var seq12167__$3 = cljs.core.next.call(null,seq12167__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12168,G__12169,G__12170,seq12167__$3);
}));

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
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12227 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12228){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12228 = meta12228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12229,meta12228__$1){
var self__ = this;
var _12229__$1 = this;
return (new cljs.core.async.t_cljs$core$async12227(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12228__$1));
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12229){
var self__ = this;
var _12229__$1 = this;
return self__.meta12228;
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12227.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12228","meta12228",-1144848091,null)], null);
}));

(cljs.core.async.t_cljs$core$async12227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12227");

(cljs.core.async.t_cljs$core$async12227.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12227.
 */
cljs.core.async.__GT_t_cljs$core$async12227 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12227(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12228){
return (new cljs.core.async.t_cljs$core$async12227(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12228));
});

}

return (new cljs.core.async.t_cljs$core$async12227(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10820__auto___12453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_12346){
var state_val_12347 = (state_12346[(1)]);
if((state_val_12347 === (7))){
var inst_12302 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
if(cljs.core.truth_(inst_12302)){
var statearr_12351_12454 = state_12346__$1;
(statearr_12351_12454[(1)] = (8));

} else {
var statearr_12352_12455 = state_12346__$1;
(statearr_12352_12455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (20))){
var inst_12295 = (state_12346[(7)]);
var state_12346__$1 = state_12346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12346__$1,(23),out,inst_12295);
} else {
if((state_val_12347 === (1))){
var inst_12273 = calc_state.call(null);
var inst_12274 = cljs.core.__destructure_map.call(null,inst_12273);
var inst_12275 = cljs.core.get.call(null,inst_12274,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12276 = cljs.core.get.call(null,inst_12274,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12277 = cljs.core.get.call(null,inst_12274,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12281 = inst_12273;
var state_12346__$1 = (function (){var statearr_12358 = state_12346;
(statearr_12358[(8)] = inst_12275);

(statearr_12358[(9)] = inst_12276);

(statearr_12358[(10)] = inst_12277);

(statearr_12358[(11)] = inst_12281);

return statearr_12358;
})();
var statearr_12359_12459 = state_12346__$1;
(statearr_12359_12459[(2)] = null);

(statearr_12359_12459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (24))){
var inst_12284 = (state_12346[(12)]);
var inst_12281 = inst_12284;
var state_12346__$1 = (function (){var statearr_12360 = state_12346;
(statearr_12360[(11)] = inst_12281);

return statearr_12360;
})();
var statearr_12361_12464 = state_12346__$1;
(statearr_12361_12464[(2)] = null);

(statearr_12361_12464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (4))){
var inst_12295 = (state_12346[(7)]);
var inst_12297 = (state_12346[(13)]);
var inst_12294 = (state_12346[(2)]);
var inst_12295__$1 = cljs.core.nth.call(null,inst_12294,(0),null);
var inst_12296 = cljs.core.nth.call(null,inst_12294,(1),null);
var inst_12297__$1 = (inst_12295__$1 == null);
var state_12346__$1 = (function (){var statearr_12362 = state_12346;
(statearr_12362[(7)] = inst_12295__$1);

(statearr_12362[(14)] = inst_12296);

(statearr_12362[(13)] = inst_12297__$1);

return statearr_12362;
})();
if(cljs.core.truth_(inst_12297__$1)){
var statearr_12363_12467 = state_12346__$1;
(statearr_12363_12467[(1)] = (5));

} else {
var statearr_12364_12468 = state_12346__$1;
(statearr_12364_12468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (15))){
var inst_12285 = (state_12346[(15)]);
var inst_12318 = (state_12346[(16)]);
var inst_12318__$1 = cljs.core.empty_QMARK_.call(null,inst_12285);
var state_12346__$1 = (function (){var statearr_12365 = state_12346;
(statearr_12365[(16)] = inst_12318__$1);

return statearr_12365;
})();
if(inst_12318__$1){
var statearr_12366_12469 = state_12346__$1;
(statearr_12366_12469[(1)] = (17));

} else {
var statearr_12367_12470 = state_12346__$1;
(statearr_12367_12470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (21))){
var inst_12284 = (state_12346[(12)]);
var inst_12281 = inst_12284;
var state_12346__$1 = (function (){var statearr_12368 = state_12346;
(statearr_12368[(11)] = inst_12281);

return statearr_12368;
})();
var statearr_12369_12474 = state_12346__$1;
(statearr_12369_12474[(2)] = null);

(statearr_12369_12474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (13))){
var inst_12309 = (state_12346[(2)]);
var inst_12310 = calc_state.call(null);
var inst_12281 = inst_12310;
var state_12346__$1 = (function (){var statearr_12370 = state_12346;
(statearr_12370[(17)] = inst_12309);

(statearr_12370[(11)] = inst_12281);

return statearr_12370;
})();
var statearr_12371_12478 = state_12346__$1;
(statearr_12371_12478[(2)] = null);

(statearr_12371_12478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (22))){
var inst_12339 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
var statearr_12372_12479 = state_12346__$1;
(statearr_12372_12479[(2)] = inst_12339);

(statearr_12372_12479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (6))){
var inst_12296 = (state_12346[(14)]);
var inst_12300 = cljs.core._EQ_.call(null,inst_12296,change);
var state_12346__$1 = state_12346;
var statearr_12374_12480 = state_12346__$1;
(statearr_12374_12480[(2)] = inst_12300);

(statearr_12374_12480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (25))){
var state_12346__$1 = state_12346;
var statearr_12378_12481 = state_12346__$1;
(statearr_12378_12481[(2)] = null);

(statearr_12378_12481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (17))){
var inst_12286 = (state_12346[(18)]);
var inst_12296 = (state_12346[(14)]);
var inst_12320 = inst_12286.call(null,inst_12296);
var inst_12321 = cljs.core.not.call(null,inst_12320);
var state_12346__$1 = state_12346;
var statearr_12379_12483 = state_12346__$1;
(statearr_12379_12483[(2)] = inst_12321);

(statearr_12379_12483[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (3))){
var inst_12343 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12346__$1,inst_12343);
} else {
if((state_val_12347 === (12))){
var state_12346__$1 = state_12346;
var statearr_12382_12486 = state_12346__$1;
(statearr_12382_12486[(2)] = null);

(statearr_12382_12486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (2))){
var inst_12281 = (state_12346[(11)]);
var inst_12284 = (state_12346[(12)]);
var inst_12284__$1 = cljs.core.__destructure_map.call(null,inst_12281);
var inst_12285 = cljs.core.get.call(null,inst_12284__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12286 = cljs.core.get.call(null,inst_12284__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12287 = cljs.core.get.call(null,inst_12284__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12346__$1 = (function (){var statearr_12383 = state_12346;
(statearr_12383[(12)] = inst_12284__$1);

(statearr_12383[(15)] = inst_12285);

(statearr_12383[(18)] = inst_12286);

return statearr_12383;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12346__$1,(4),inst_12287);
} else {
if((state_val_12347 === (23))){
var inst_12330 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
if(cljs.core.truth_(inst_12330)){
var statearr_12388_12488 = state_12346__$1;
(statearr_12388_12488[(1)] = (24));

} else {
var statearr_12389_12489 = state_12346__$1;
(statearr_12389_12489[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (19))){
var inst_12325 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
var statearr_12390_12490 = state_12346__$1;
(statearr_12390_12490[(2)] = inst_12325);

(statearr_12390_12490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (11))){
var inst_12296 = (state_12346[(14)]);
var inst_12306 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12296);
var state_12346__$1 = state_12346;
var statearr_12391_12491 = state_12346__$1;
(statearr_12391_12491[(2)] = inst_12306);

(statearr_12391_12491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (9))){
var inst_12285 = (state_12346[(15)]);
var inst_12296 = (state_12346[(14)]);
var inst_12314 = (state_12346[(19)]);
var inst_12314__$1 = inst_12285.call(null,inst_12296);
var state_12346__$1 = (function (){var statearr_12392 = state_12346;
(statearr_12392[(19)] = inst_12314__$1);

return statearr_12392;
})();
if(cljs.core.truth_(inst_12314__$1)){
var statearr_12394_12493 = state_12346__$1;
(statearr_12394_12493[(1)] = (14));

} else {
var statearr_12395_12497 = state_12346__$1;
(statearr_12395_12497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (5))){
var inst_12297 = (state_12346[(13)]);
var state_12346__$1 = state_12346;
var statearr_12396_12506 = state_12346__$1;
(statearr_12396_12506[(2)] = inst_12297);

(statearr_12396_12506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (14))){
var inst_12314 = (state_12346[(19)]);
var state_12346__$1 = state_12346;
var statearr_12397_12517 = state_12346__$1;
(statearr_12397_12517[(2)] = inst_12314);

(statearr_12397_12517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (26))){
var inst_12335 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
var statearr_12399_12525 = state_12346__$1;
(statearr_12399_12525[(2)] = inst_12335);

(statearr_12399_12525[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (16))){
var inst_12327 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
if(cljs.core.truth_(inst_12327)){
var statearr_12404_12533 = state_12346__$1;
(statearr_12404_12533[(1)] = (20));

} else {
var statearr_12405_12536 = state_12346__$1;
(statearr_12405_12536[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (10))){
var inst_12341 = (state_12346[(2)]);
var state_12346__$1 = state_12346;
var statearr_12406_12551 = state_12346__$1;
(statearr_12406_12551[(2)] = inst_12341);

(statearr_12406_12551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (18))){
var inst_12318 = (state_12346[(16)]);
var state_12346__$1 = state_12346;
var statearr_12407_12560 = state_12346__$1;
(statearr_12407_12560[(2)] = inst_12318);

(statearr_12407_12560[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12347 === (8))){
var inst_12295 = (state_12346[(7)]);
var inst_12304 = (inst_12295 == null);
var state_12346__$1 = state_12346;
if(cljs.core.truth_(inst_12304)){
var statearr_12411_12573 = state_12346__$1;
(statearr_12411_12573[(1)] = (11));

} else {
var statearr_12412_12575 = state_12346__$1;
(statearr_12412_12575[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__10619__auto__ = null;
var cljs$core$async$mix_$_state_machine__10619__auto____0 = (function (){
var statearr_12413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12413[(0)] = cljs$core$async$mix_$_state_machine__10619__auto__);

(statearr_12413[(1)] = (1));

return statearr_12413;
});
var cljs$core$async$mix_$_state_machine__10619__auto____1 = (function (state_12346){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_12346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12414){var ex__10622__auto__ = e12414;
var statearr_12415_12577 = state_12346;
(statearr_12415_12577[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_12346[(4)]))){
var statearr_12421_12579 = state_12346;
(statearr_12421_12579[(1)] = cljs.core.first.call(null,(state_12346[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12580 = state_12346;
state_12346 = G__12580;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10619__auto__ = function(state_12346){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10619__auto____1.call(this,state_12346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10619__auto____0;
cljs$core$async$mix_$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10619__auto____1;
return cljs$core$async$mix_$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12423 = f__10821__auto__.call(null);
(statearr_12423[(6)] = c__10820__auto___12453);

return statearr_12423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_12584 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12584.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12589 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12589.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12592 = (function() {
var G__12593 = null;
var G__12593__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__12593__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__12593 = function(p,v){
switch(arguments.length){
case 1:
return G__12593__1.call(this,p);
case 2:
return G__12593__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12593.cljs$core$IFn$_invoke$arity$1 = G__12593__1;
G__12593.cljs$core$IFn$_invoke$arity$2 = G__12593__2;
return G__12593;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12451 = arguments.length;
switch (G__12451) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12592.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12592.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__12466 = arguments.length;
switch (G__12466) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12463_SHARP_){
if(cljs.core.truth_(p1__12463_SHARP_.call(null,topic))){
return p1__12463_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12463_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12475 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12476){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12476 = meta12476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12477,meta12476__$1){
var self__ = this;
var _12477__$1 = this;
return (new cljs.core.async.t_cljs$core$async12475(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12476__$1));
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12477){
var self__ = this;
var _12477__$1 = this;
return self__.meta12476;
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12476","meta12476",1202178637,null)], null);
}));

(cljs.core.async.t_cljs$core$async12475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12475");

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12475.
 */
cljs.core.async.__GT_t_cljs$core$async12475 = (function cljs$core$async$__GT_t_cljs$core$async12475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12476){
return (new cljs.core.async.t_cljs$core$async12475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12476));
});

}

return (new cljs.core.async.t_cljs$core$async12475(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10820__auto___12656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_12574){
var state_val_12576 = (state_12574[(1)]);
if((state_val_12576 === (7))){
var inst_12569 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12578_12657 = state_12574__$1;
(statearr_12578_12657[(2)] = inst_12569);

(statearr_12578_12657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (20))){
var state_12574__$1 = state_12574;
var statearr_12581_12658 = state_12574__$1;
(statearr_12581_12658[(2)] = null);

(statearr_12581_12658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (1))){
var state_12574__$1 = state_12574;
var statearr_12582_12659 = state_12574__$1;
(statearr_12582_12659[(2)] = null);

(statearr_12582_12659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (24))){
var inst_12550 = (state_12574[(7)]);
var inst_12561 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12550);
var state_12574__$1 = state_12574;
var statearr_12583_12660 = state_12574__$1;
(statearr_12583_12660[(2)] = inst_12561);

(statearr_12583_12660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (4))){
var inst_12495 = (state_12574[(8)]);
var inst_12495__$1 = (state_12574[(2)]);
var inst_12496 = (inst_12495__$1 == null);
var state_12574__$1 = (function (){var statearr_12585 = state_12574;
(statearr_12585[(8)] = inst_12495__$1);

return statearr_12585;
})();
if(cljs.core.truth_(inst_12496)){
var statearr_12586_12663 = state_12574__$1;
(statearr_12586_12663[(1)] = (5));

} else {
var statearr_12587_12664 = state_12574__$1;
(statearr_12587_12664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (15))){
var inst_12544 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12588_12665 = state_12574__$1;
(statearr_12588_12665[(2)] = inst_12544);

(statearr_12588_12665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (21))){
var inst_12566 = (state_12574[(2)]);
var state_12574__$1 = (function (){var statearr_12590 = state_12574;
(statearr_12590[(9)] = inst_12566);

return statearr_12590;
})();
var statearr_12591_12666 = state_12574__$1;
(statearr_12591_12666[(2)] = null);

(statearr_12591_12666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (13))){
var inst_12523 = (state_12574[(10)]);
var inst_12526 = cljs.core.chunked_seq_QMARK_.call(null,inst_12523);
var state_12574__$1 = state_12574;
if(inst_12526){
var statearr_12594_12669 = state_12574__$1;
(statearr_12594_12669[(1)] = (16));

} else {
var statearr_12595_12670 = state_12574__$1;
(statearr_12595_12670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (22))){
var inst_12557 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
if(cljs.core.truth_(inst_12557)){
var statearr_12603_12671 = state_12574__$1;
(statearr_12603_12671[(1)] = (23));

} else {
var statearr_12604_12672 = state_12574__$1;
(statearr_12604_12672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (6))){
var inst_12495 = (state_12574[(8)]);
var inst_12550 = (state_12574[(7)]);
var inst_12553 = (state_12574[(11)]);
var inst_12550__$1 = topic_fn.call(null,inst_12495);
var inst_12552 = cljs.core.deref.call(null,mults);
var inst_12553__$1 = cljs.core.get.call(null,inst_12552,inst_12550__$1);
var state_12574__$1 = (function (){var statearr_12606 = state_12574;
(statearr_12606[(7)] = inst_12550__$1);

(statearr_12606[(11)] = inst_12553__$1);

return statearr_12606;
})();
if(cljs.core.truth_(inst_12553__$1)){
var statearr_12607_12674 = state_12574__$1;
(statearr_12607_12674[(1)] = (19));

} else {
var statearr_12608_12675 = state_12574__$1;
(statearr_12608_12675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (25))){
var inst_12563 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12609_12676 = state_12574__$1;
(statearr_12609_12676[(2)] = inst_12563);

(statearr_12609_12676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (17))){
var inst_12523 = (state_12574[(10)]);
var inst_12534 = cljs.core.first.call(null,inst_12523);
var inst_12535 = cljs.core.async.muxch_STAR_.call(null,inst_12534);
var inst_12537 = cljs.core.async.close_BANG_.call(null,inst_12535);
var inst_12538 = cljs.core.next.call(null,inst_12523);
var inst_12507 = inst_12538;
var inst_12508 = null;
var inst_12509 = (0);
var inst_12510 = (0);
var state_12574__$1 = (function (){var statearr_12610 = state_12574;
(statearr_12610[(12)] = inst_12537);

(statearr_12610[(13)] = inst_12507);

(statearr_12610[(14)] = inst_12508);

(statearr_12610[(15)] = inst_12509);

(statearr_12610[(16)] = inst_12510);

return statearr_12610;
})();
var statearr_12611_12685 = state_12574__$1;
(statearr_12611_12685[(2)] = null);

(statearr_12611_12685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (3))){
var inst_12571 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12574__$1,inst_12571);
} else {
if((state_val_12576 === (12))){
var inst_12546 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12612_12687 = state_12574__$1;
(statearr_12612_12687[(2)] = inst_12546);

(statearr_12612_12687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (2))){
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12574__$1,(4),ch);
} else {
if((state_val_12576 === (23))){
var state_12574__$1 = state_12574;
var statearr_12613_12688 = state_12574__$1;
(statearr_12613_12688[(2)] = null);

(statearr_12613_12688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (19))){
var inst_12553 = (state_12574[(11)]);
var inst_12495 = (state_12574[(8)]);
var inst_12555 = cljs.core.async.muxch_STAR_.call(null,inst_12553);
var state_12574__$1 = state_12574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12574__$1,(22),inst_12555,inst_12495);
} else {
if((state_val_12576 === (11))){
var inst_12507 = (state_12574[(13)]);
var inst_12523 = (state_12574[(10)]);
var inst_12523__$1 = cljs.core.seq.call(null,inst_12507);
var state_12574__$1 = (function (){var statearr_12614 = state_12574;
(statearr_12614[(10)] = inst_12523__$1);

return statearr_12614;
})();
if(inst_12523__$1){
var statearr_12615_12716 = state_12574__$1;
(statearr_12615_12716[(1)] = (13));

} else {
var statearr_12616_12720 = state_12574__$1;
(statearr_12616_12720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (9))){
var inst_12548 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12617_12729 = state_12574__$1;
(statearr_12617_12729[(2)] = inst_12548);

(statearr_12617_12729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (5))){
var inst_12503 = cljs.core.deref.call(null,mults);
var inst_12504 = cljs.core.vals.call(null,inst_12503);
var inst_12505 = cljs.core.seq.call(null,inst_12504);
var inst_12507 = inst_12505;
var inst_12508 = null;
var inst_12509 = (0);
var inst_12510 = (0);
var state_12574__$1 = (function (){var statearr_12618 = state_12574;
(statearr_12618[(13)] = inst_12507);

(statearr_12618[(14)] = inst_12508);

(statearr_12618[(15)] = inst_12509);

(statearr_12618[(16)] = inst_12510);

return statearr_12618;
})();
var statearr_12619_12733 = state_12574__$1;
(statearr_12619_12733[(2)] = null);

(statearr_12619_12733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (14))){
var state_12574__$1 = state_12574;
var statearr_12623_12736 = state_12574__$1;
(statearr_12623_12736[(2)] = null);

(statearr_12623_12736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (16))){
var inst_12523 = (state_12574[(10)]);
var inst_12528 = cljs.core.chunk_first.call(null,inst_12523);
var inst_12529 = cljs.core.chunk_rest.call(null,inst_12523);
var inst_12530 = cljs.core.count.call(null,inst_12528);
var inst_12507 = inst_12529;
var inst_12508 = inst_12528;
var inst_12509 = inst_12530;
var inst_12510 = (0);
var state_12574__$1 = (function (){var statearr_12631 = state_12574;
(statearr_12631[(13)] = inst_12507);

(statearr_12631[(14)] = inst_12508);

(statearr_12631[(15)] = inst_12509);

(statearr_12631[(16)] = inst_12510);

return statearr_12631;
})();
var statearr_12632_12740 = state_12574__$1;
(statearr_12632_12740[(2)] = null);

(statearr_12632_12740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (10))){
var inst_12508 = (state_12574[(14)]);
var inst_12510 = (state_12574[(16)]);
var inst_12507 = (state_12574[(13)]);
var inst_12509 = (state_12574[(15)]);
var inst_12516 = cljs.core._nth.call(null,inst_12508,inst_12510);
var inst_12518 = cljs.core.async.muxch_STAR_.call(null,inst_12516);
var inst_12519 = cljs.core.async.close_BANG_.call(null,inst_12518);
var inst_12520 = (inst_12510 + (1));
var tmp12620 = inst_12507;
var tmp12621 = inst_12509;
var tmp12622 = inst_12508;
var inst_12507__$1 = tmp12620;
var inst_12508__$1 = tmp12622;
var inst_12509__$1 = tmp12621;
var inst_12510__$1 = inst_12520;
var state_12574__$1 = (function (){var statearr_12633 = state_12574;
(statearr_12633[(17)] = inst_12519);

(statearr_12633[(13)] = inst_12507__$1);

(statearr_12633[(14)] = inst_12508__$1);

(statearr_12633[(15)] = inst_12509__$1);

(statearr_12633[(16)] = inst_12510__$1);

return statearr_12633;
})();
var statearr_12634_12746 = state_12574__$1;
(statearr_12634_12746[(2)] = null);

(statearr_12634_12746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (18))){
var inst_12541 = (state_12574[(2)]);
var state_12574__$1 = state_12574;
var statearr_12635_12748 = state_12574__$1;
(statearr_12635_12748[(2)] = inst_12541);

(statearr_12635_12748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (8))){
var inst_12510 = (state_12574[(16)]);
var inst_12509 = (state_12574[(15)]);
var inst_12513 = (inst_12510 < inst_12509);
var inst_12514 = inst_12513;
var state_12574__$1 = state_12574;
if(cljs.core.truth_(inst_12514)){
var statearr_12636_12749 = state_12574__$1;
(statearr_12636_12749[(1)] = (10));

} else {
var statearr_12639_12751 = state_12574__$1;
(statearr_12639_12751[(1)] = (11));

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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_12642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12642[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_12642[(1)] = (1));

return statearr_12642;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_12574){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_12574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12643){var ex__10622__auto__ = e12643;
var statearr_12644_12752 = state_12574;
(statearr_12644_12752[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_12574[(4)]))){
var statearr_12645_12753 = state_12574;
(statearr_12645_12753[(1)] = cljs.core.first.call(null,(state_12574[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12754 = state_12574;
state_12574 = G__12754;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_12574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_12574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12646 = f__10821__auto__.call(null);
(statearr_12646[(6)] = c__10820__auto___12656);

return statearr_12646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
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
var G__12649 = arguments.length;
switch (G__12649) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__12652 = arguments.length;
switch (G__12652) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__12662 = arguments.length;
switch (G__12662) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__10820__auto___12795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_12731){
var state_val_12732 = (state_12731[(1)]);
if((state_val_12732 === (7))){
var state_12731__$1 = state_12731;
var statearr_12735_12796 = state_12731__$1;
(statearr_12735_12796[(2)] = null);

(statearr_12735_12796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (1))){
var state_12731__$1 = state_12731;
var statearr_12737_12800 = state_12731__$1;
(statearr_12737_12800[(2)] = null);

(statearr_12737_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (4))){
var inst_12681 = (state_12731[(7)]);
var inst_12680 = (state_12731[(8)]);
var inst_12683 = (inst_12681 < inst_12680);
var state_12731__$1 = state_12731;
if(cljs.core.truth_(inst_12683)){
var statearr_12738_12813 = state_12731__$1;
(statearr_12738_12813[(1)] = (6));

} else {
var statearr_12739_12814 = state_12731__$1;
(statearr_12739_12814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (15))){
var inst_12713 = (state_12731[(9)]);
var inst_12719 = cljs.core.apply.call(null,f,inst_12713);
var state_12731__$1 = state_12731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12731__$1,(17),out,inst_12719);
} else {
if((state_val_12732 === (13))){
var inst_12713 = (state_12731[(9)]);
var inst_12713__$1 = (state_12731[(2)]);
var inst_12714 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12713__$1);
var state_12731__$1 = (function (){var statearr_12742 = state_12731;
(statearr_12742[(9)] = inst_12713__$1);

return statearr_12742;
})();
if(cljs.core.truth_(inst_12714)){
var statearr_12744_12832 = state_12731__$1;
(statearr_12744_12832[(1)] = (14));

} else {
var statearr_12745_12834 = state_12731__$1;
(statearr_12745_12834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (6))){
var state_12731__$1 = state_12731;
var statearr_12747_12835 = state_12731__$1;
(statearr_12747_12835[(2)] = null);

(statearr_12747_12835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (17))){
var inst_12722 = (state_12731[(2)]);
var state_12731__$1 = (function (){var statearr_12757 = state_12731;
(statearr_12757[(10)] = inst_12722);

return statearr_12757;
})();
var statearr_12759_12836 = state_12731__$1;
(statearr_12759_12836[(2)] = null);

(statearr_12759_12836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (3))){
var inst_12727 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12731__$1,inst_12727);
} else {
if((state_val_12732 === (12))){
var _ = (function (){var statearr_12760 = state_12731;
(statearr_12760[(4)] = cljs.core.rest.call(null,(state_12731[(4)])));

return statearr_12760;
})();
var state_12731__$1 = state_12731;
var ex12755 = (state_12731__$1[(2)]);
var statearr_12761_12839 = state_12731__$1;
(statearr_12761_12839[(5)] = ex12755);


if((ex12755 instanceof Object)){
var statearr_12763_12841 = state_12731__$1;
(statearr_12763_12841[(1)] = (11));

(statearr_12763_12841[(5)] = null);

} else {
throw ex12755;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (2))){
var inst_12678 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12680 = cnt;
var inst_12681 = (0);
var state_12731__$1 = (function (){var statearr_12766 = state_12731;
(statearr_12766[(11)] = inst_12678);

(statearr_12766[(8)] = inst_12680);

(statearr_12766[(7)] = inst_12681);

return statearr_12766;
})();
var statearr_12768_12844 = state_12731__$1;
(statearr_12768_12844[(2)] = null);

(statearr_12768_12844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (11))){
var inst_12689 = (state_12731[(2)]);
var inst_12692 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12731__$1 = (function (){var statearr_12770 = state_12731;
(statearr_12770[(12)] = inst_12689);

return statearr_12770;
})();
var statearr_12771_12846 = state_12731__$1;
(statearr_12771_12846[(2)] = inst_12692);

(statearr_12771_12846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (9))){
var inst_12681 = (state_12731[(7)]);
var _ = (function (){var statearr_12772 = state_12731;
(statearr_12772[(4)] = cljs.core.cons.call(null,(12),(state_12731[(4)])));

return statearr_12772;
})();
var inst_12699 = chs__$1.call(null,inst_12681);
var inst_12700 = done.call(null,inst_12681);
var inst_12701 = cljs.core.async.take_BANG_.call(null,inst_12699,inst_12700);
var ___$1 = (function (){var statearr_12773 = state_12731;
(statearr_12773[(4)] = cljs.core.rest.call(null,(state_12731[(4)])));

return statearr_12773;
})();
var state_12731__$1 = state_12731;
var statearr_12775_12849 = state_12731__$1;
(statearr_12775_12849[(2)] = inst_12701);

(statearr_12775_12849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (5))){
var inst_12711 = (state_12731[(2)]);
var state_12731__$1 = (function (){var statearr_12776 = state_12731;
(statearr_12776[(13)] = inst_12711);

return statearr_12776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12731__$1,(13),dchan);
} else {
if((state_val_12732 === (14))){
var inst_12717 = cljs.core.async.close_BANG_.call(null,out);
var state_12731__$1 = state_12731;
var statearr_12777_12852 = state_12731__$1;
(statearr_12777_12852[(2)] = inst_12717);

(statearr_12777_12852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (16))){
var inst_12725 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
var statearr_12778_12854 = state_12731__$1;
(statearr_12778_12854[(2)] = inst_12725);

(statearr_12778_12854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (10))){
var inst_12681 = (state_12731[(7)]);
var inst_12704 = (state_12731[(2)]);
var inst_12705 = (inst_12681 + (1));
var inst_12681__$1 = inst_12705;
var state_12731__$1 = (function (){var statearr_12779 = state_12731;
(statearr_12779[(14)] = inst_12704);

(statearr_12779[(7)] = inst_12681__$1);

return statearr_12779;
})();
var statearr_12780_12855 = state_12731__$1;
(statearr_12780_12855[(2)] = null);

(statearr_12780_12855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12732 === (8))){
var inst_12709 = (state_12731[(2)]);
var state_12731__$1 = state_12731;
var statearr_12781_12856 = state_12731__$1;
(statearr_12781_12856[(2)] = inst_12709);

(statearr_12781_12856[(1)] = (5));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_12782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12782[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_12782[(1)] = (1));

return statearr_12782;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_12731){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_12731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12783){var ex__10622__auto__ = e12783;
var statearr_12786_12859 = state_12731;
(statearr_12786_12859[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_12731[(4)]))){
var statearr_12789_12861 = state_12731;
(statearr_12789_12861[(1)] = cljs.core.first.call(null,(state_12731[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12862 = state_12731;
state_12731 = G__12862;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_12731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_12731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12790 = f__10821__auto__.call(null);
(statearr_12790[(6)] = c__10820__auto___12795);

return statearr_12790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
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
var G__12794 = arguments.length;
switch (G__12794) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___12878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_12831){
var state_val_12833 = (state_12831[(1)]);
if((state_val_12833 === (7))){
var inst_12808 = (state_12831[(7)]);
var inst_12809 = (state_12831[(8)]);
var inst_12808__$1 = (state_12831[(2)]);
var inst_12809__$1 = cljs.core.nth.call(null,inst_12808__$1,(0),null);
var inst_12810 = cljs.core.nth.call(null,inst_12808__$1,(1),null);
var inst_12811 = (inst_12809__$1 == null);
var state_12831__$1 = (function (){var statearr_12837 = state_12831;
(statearr_12837[(7)] = inst_12808__$1);

(statearr_12837[(8)] = inst_12809__$1);

(statearr_12837[(9)] = inst_12810);

return statearr_12837;
})();
if(cljs.core.truth_(inst_12811)){
var statearr_12838_12882 = state_12831__$1;
(statearr_12838_12882[(1)] = (8));

} else {
var statearr_12840_12883 = state_12831__$1;
(statearr_12840_12883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (1))){
var inst_12797 = cljs.core.vec.call(null,chs);
var inst_12798 = inst_12797;
var state_12831__$1 = (function (){var statearr_12842 = state_12831;
(statearr_12842[(10)] = inst_12798);

return statearr_12842;
})();
var statearr_12843_12884 = state_12831__$1;
(statearr_12843_12884[(2)] = null);

(statearr_12843_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (4))){
var inst_12798 = (state_12831[(10)]);
var state_12831__$1 = state_12831;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12831__$1,(7),inst_12798);
} else {
if((state_val_12833 === (6))){
var inst_12827 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
var statearr_12845_12885 = state_12831__$1;
(statearr_12845_12885[(2)] = inst_12827);

(statearr_12845_12885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (3))){
var inst_12829 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12831__$1,inst_12829);
} else {
if((state_val_12833 === (2))){
var inst_12798 = (state_12831[(10)]);
var inst_12801 = cljs.core.count.call(null,inst_12798);
var inst_12802 = (inst_12801 > (0));
var state_12831__$1 = state_12831;
if(cljs.core.truth_(inst_12802)){
var statearr_12848_12897 = state_12831__$1;
(statearr_12848_12897[(1)] = (4));

} else {
var statearr_12850_12901 = state_12831__$1;
(statearr_12850_12901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (11))){
var inst_12798 = (state_12831[(10)]);
var inst_12820 = (state_12831[(2)]);
var tmp12847 = inst_12798;
var inst_12798__$1 = tmp12847;
var state_12831__$1 = (function (){var statearr_12851 = state_12831;
(statearr_12851[(11)] = inst_12820);

(statearr_12851[(10)] = inst_12798__$1);

return statearr_12851;
})();
var statearr_12853_12917 = state_12831__$1;
(statearr_12853_12917[(2)] = null);

(statearr_12853_12917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (9))){
var inst_12809 = (state_12831[(8)]);
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12831__$1,(11),out,inst_12809);
} else {
if((state_val_12833 === (5))){
var inst_12825 = cljs.core.async.close_BANG_.call(null,out);
var state_12831__$1 = state_12831;
var statearr_12857_12924 = state_12831__$1;
(statearr_12857_12924[(2)] = inst_12825);

(statearr_12857_12924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (10))){
var inst_12823 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
var statearr_12860_12930 = state_12831__$1;
(statearr_12860_12930[(2)] = inst_12823);

(statearr_12860_12930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12833 === (8))){
var inst_12798 = (state_12831[(10)]);
var inst_12808 = (state_12831[(7)]);
var inst_12809 = (state_12831[(8)]);
var inst_12810 = (state_12831[(9)]);
var inst_12815 = (function (){var cs = inst_12798;
var vec__12804 = inst_12808;
var v = inst_12809;
var c = inst_12810;
return (function (p1__12792_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12792_SHARP_);
});
})();
var inst_12816 = cljs.core.filterv.call(null,inst_12815,inst_12798);
var inst_12798__$1 = inst_12816;
var state_12831__$1 = (function (){var statearr_12864 = state_12831;
(statearr_12864[(10)] = inst_12798__$1);

return statearr_12864;
})();
var statearr_12865_12934 = state_12831__$1;
(statearr_12865_12934[(2)] = null);

(statearr_12865_12934[(1)] = (2));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_12866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12866[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_12866[(1)] = (1));

return statearr_12866;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_12831){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_12831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12869){var ex__10622__auto__ = e12869;
var statearr_12870_12943 = state_12831;
(statearr_12870_12943[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_12831[(4)]))){
var statearr_12871_12944 = state_12831;
(statearr_12871_12944[(1)] = cljs.core.first.call(null,(state_12831[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12946 = state_12831;
state_12831 = G__12946;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_12831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_12831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12872 = f__10821__auto__.call(null);
(statearr_12872[(6)] = c__10820__auto___12878);

return statearr_12872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12881 = arguments.length;
switch (G__12881) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___12975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_12914){
var state_val_12916 = (state_12914[(1)]);
if((state_val_12916 === (7))){
var inst_12892 = (state_12914[(7)]);
var inst_12892__$1 = (state_12914[(2)]);
var inst_12895 = (inst_12892__$1 == null);
var inst_12896 = cljs.core.not.call(null,inst_12895);
var state_12914__$1 = (function (){var statearr_12926 = state_12914;
(statearr_12926[(7)] = inst_12892__$1);

return statearr_12926;
})();
if(inst_12896){
var statearr_12927_12979 = state_12914__$1;
(statearr_12927_12979[(1)] = (8));

} else {
var statearr_12928_12980 = state_12914__$1;
(statearr_12928_12980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (1))){
var inst_12887 = (0);
var state_12914__$1 = (function (){var statearr_12932 = state_12914;
(statearr_12932[(8)] = inst_12887);

return statearr_12932;
})();
var statearr_12933_12983 = state_12914__$1;
(statearr_12933_12983[(2)] = null);

(statearr_12933_12983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (4))){
var state_12914__$1 = state_12914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12914__$1,(7),ch);
} else {
if((state_val_12916 === (6))){
var inst_12909 = (state_12914[(2)]);
var state_12914__$1 = state_12914;
var statearr_12937_12986 = state_12914__$1;
(statearr_12937_12986[(2)] = inst_12909);

(statearr_12937_12986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (3))){
var inst_12911 = (state_12914[(2)]);
var inst_12912 = cljs.core.async.close_BANG_.call(null,out);
var state_12914__$1 = (function (){var statearr_12941 = state_12914;
(statearr_12941[(9)] = inst_12911);

return statearr_12941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12914__$1,inst_12912);
} else {
if((state_val_12916 === (2))){
var inst_12887 = (state_12914[(8)]);
var inst_12889 = (inst_12887 < n);
var state_12914__$1 = state_12914;
if(cljs.core.truth_(inst_12889)){
var statearr_12945_12987 = state_12914__$1;
(statearr_12945_12987[(1)] = (4));

} else {
var statearr_12947_12988 = state_12914__$1;
(statearr_12947_12988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (11))){
var inst_12887 = (state_12914[(8)]);
var inst_12900 = (state_12914[(2)]);
var inst_12902 = (inst_12887 + (1));
var inst_12887__$1 = inst_12902;
var state_12914__$1 = (function (){var statearr_12949 = state_12914;
(statearr_12949[(10)] = inst_12900);

(statearr_12949[(8)] = inst_12887__$1);

return statearr_12949;
})();
var statearr_12950_12989 = state_12914__$1;
(statearr_12950_12989[(2)] = null);

(statearr_12950_12989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (9))){
var state_12914__$1 = state_12914;
var statearr_12951_12992 = state_12914__$1;
(statearr_12951_12992[(2)] = null);

(statearr_12951_12992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (5))){
var state_12914__$1 = state_12914;
var statearr_12952_12995 = state_12914__$1;
(statearr_12952_12995[(2)] = null);

(statearr_12952_12995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (10))){
var inst_12906 = (state_12914[(2)]);
var state_12914__$1 = state_12914;
var statearr_12954_12999 = state_12914__$1;
(statearr_12954_12999[(2)] = inst_12906);

(statearr_12954_12999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12916 === (8))){
var inst_12892 = (state_12914[(7)]);
var state_12914__$1 = state_12914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12914__$1,(11),out,inst_12892);
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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_12958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12958[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_12958[(1)] = (1));

return statearr_12958;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_12914){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_12914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e12961){var ex__10622__auto__ = e12961;
var statearr_12962_13002 = state_12914;
(statearr_12962_13002[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_12914[(4)]))){
var statearr_12963_13003 = state_12914;
(statearr_12963_13003[(1)] = cljs.core.first.call(null,(state_12914[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13004 = state_12914;
state_12914 = G__13004;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_12914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_12914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_12968 = f__10821__auto__.call(null);
(statearr_12968[(6)] = c__10820__auto___12975);

return statearr_12968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12976 = (function (f,ch,meta12977){
this.f = f;
this.ch = ch;
this.meta12977 = meta12977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12978,meta12977__$1){
var self__ = this;
var _12978__$1 = this;
return (new cljs.core.async.t_cljs$core$async12976(self__.f,self__.ch,meta12977__$1));
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12978){
var self__ = this;
var _12978__$1 = this;
return self__.meta12977;
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12996 = (function (f,ch,meta12977,_,fn1,meta12997){
this.f = f;
this.ch = ch;
this.meta12977 = meta12977;
this._ = _;
this.fn1 = fn1;
this.meta12997 = meta12997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12998,meta12997__$1){
var self__ = this;
var _12998__$1 = this;
return (new cljs.core.async.t_cljs$core$async12996(self__.f,self__.ch,self__.meta12977,self__._,self__.fn1,meta12997__$1));
}));

(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12998){
var self__ = this;
var _12998__$1 = this;
return self__.meta12997;
}));

(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12974_SHARP_){
return f1.call(null,(((p1__12974_SHARP_ == null))?null:self__.f.call(null,p1__12974_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12977","meta12977",-1474868599,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12976","cljs.core.async/t_cljs$core$async12976",-318225095,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12997","meta12997",-2099498415,null)], null);
}));

(cljs.core.async.t_cljs$core$async12996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12996");

(cljs.core.async.t_cljs$core$async12996.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12996.
 */
cljs.core.async.__GT_t_cljs$core$async12996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12996(f__$1,ch__$1,meta12977__$1,___$2,fn1__$1,meta12997){
return (new cljs.core.async.t_cljs$core$async12996(f__$1,ch__$1,meta12977__$1,___$2,fn1__$1,meta12997));
});

}

return (new cljs.core.async.t_cljs$core$async12996(self__.f,self__.ch,self__.meta12977,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12977","meta12977",-1474868599,null)], null);
}));

(cljs.core.async.t_cljs$core$async12976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12976");

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12976.
 */
cljs.core.async.__GT_t_cljs$core$async12976 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12976(f__$1,ch__$1,meta12977){
return (new cljs.core.async.t_cljs$core$async12976(f__$1,ch__$1,meta12977));
});

}

return (new cljs.core.async.t_cljs$core$async12976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13020 = (function (f,ch,meta13021){
this.f = f;
this.ch = ch;
this.meta13021 = meta13021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13022,meta13021__$1){
var self__ = this;
var _13022__$1 = this;
return (new cljs.core.async.t_cljs$core$async13020(self__.f,self__.ch,meta13021__$1));
}));

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13022){
var self__ = this;
var _13022__$1 = this;
return self__.meta13021;
}));

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13021","meta13021",1869860457,null)], null);
}));

(cljs.core.async.t_cljs$core$async13020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13020");

(cljs.core.async.t_cljs$core$async13020.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13020.
 */
cljs.core.async.__GT_t_cljs$core$async13020 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13020(f__$1,ch__$1,meta13021){
return (new cljs.core.async.t_cljs$core$async13020(f__$1,ch__$1,meta13021));
});

}

return (new cljs.core.async.t_cljs$core$async13020(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13050 = (function (p,ch,meta13051){
this.p = p;
this.ch = ch;
this.meta13051 = meta13051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13052,meta13051__$1){
var self__ = this;
var _13052__$1 = this;
return (new cljs.core.async.t_cljs$core$async13050(self__.p,self__.ch,meta13051__$1));
}));

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13052){
var self__ = this;
var _13052__$1 = this;
return self__.meta13051;
}));

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13051","meta13051",-470668424,null)], null);
}));

(cljs.core.async.t_cljs$core$async13050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13050");

(cljs.core.async.t_cljs$core$async13050.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13050.
 */
cljs.core.async.__GT_t_cljs$core$async13050 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13050(p__$1,ch__$1,meta13051){
return (new cljs.core.async.t_cljs$core$async13050(p__$1,ch__$1,meta13051));
});

}

return (new cljs.core.async.t_cljs$core$async13050(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13064 = arguments.length;
switch (G__13064) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___13125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_13088){
var state_val_13089 = (state_13088[(1)]);
if((state_val_13089 === (7))){
var inst_13084 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13090_13126 = state_13088__$1;
(statearr_13090_13126[(2)] = inst_13084);

(statearr_13090_13126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (1))){
var state_13088__$1 = state_13088;
var statearr_13091_13127 = state_13088__$1;
(statearr_13091_13127[(2)] = null);

(statearr_13091_13127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (4))){
var inst_13070 = (state_13088[(7)]);
var inst_13070__$1 = (state_13088[(2)]);
var inst_13071 = (inst_13070__$1 == null);
var state_13088__$1 = (function (){var statearr_13092 = state_13088;
(statearr_13092[(7)] = inst_13070__$1);

return statearr_13092;
})();
if(cljs.core.truth_(inst_13071)){
var statearr_13093_13131 = state_13088__$1;
(statearr_13093_13131[(1)] = (5));

} else {
var statearr_13094_13132 = state_13088__$1;
(statearr_13094_13132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (6))){
var inst_13070 = (state_13088[(7)]);
var inst_13075 = p.call(null,inst_13070);
var state_13088__$1 = state_13088;
if(cljs.core.truth_(inst_13075)){
var statearr_13095_13133 = state_13088__$1;
(statearr_13095_13133[(1)] = (8));

} else {
var statearr_13096_13134 = state_13088__$1;
(statearr_13096_13134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (3))){
var inst_13086 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13088__$1,inst_13086);
} else {
if((state_val_13089 === (2))){
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13088__$1,(4),ch);
} else {
if((state_val_13089 === (11))){
var inst_13078 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13100_13142 = state_13088__$1;
(statearr_13100_13142[(2)] = inst_13078);

(statearr_13100_13142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (9))){
var state_13088__$1 = state_13088;
var statearr_13101_13153 = state_13088__$1;
(statearr_13101_13153[(2)] = null);

(statearr_13101_13153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (5))){
var inst_13073 = cljs.core.async.close_BANG_.call(null,out);
var state_13088__$1 = state_13088;
var statearr_13102_13165 = state_13088__$1;
(statearr_13102_13165[(2)] = inst_13073);

(statearr_13102_13165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (10))){
var inst_13081 = (state_13088[(2)]);
var state_13088__$1 = (function (){var statearr_13105 = state_13088;
(statearr_13105[(8)] = inst_13081);

return statearr_13105;
})();
var statearr_13106_13174 = state_13088__$1;
(statearr_13106_13174[(2)] = null);

(statearr_13106_13174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (8))){
var inst_13070 = (state_13088[(7)]);
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13088__$1,(11),out,inst_13070);
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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_13107 = [null,null,null,null,null,null,null,null,null];
(statearr_13107[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_13107[(1)] = (1));

return statearr_13107;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_13088){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_13088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e13108){var ex__10622__auto__ = e13108;
var statearr_13109_13206 = state_13088;
(statearr_13109_13206[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_13088[(4)]))){
var statearr_13110_13210 = state_13088;
(statearr_13110_13210[(1)] = cljs.core.first.call(null,(state_13088[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13213 = state_13088;
state_13088 = G__13213;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_13088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_13088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_13114 = f__10821__auto__.call(null);
(statearr_13114[(6)] = c__10820__auto___13125);

return statearr_13114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13121 = arguments.length;
switch (G__13121) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10820__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_13211){
var state_val_13212 = (state_13211[(1)]);
if((state_val_13212 === (7))){
var inst_13205 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13215_13275 = state_13211__$1;
(statearr_13215_13275[(2)] = inst_13205);

(statearr_13215_13275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (20))){
var inst_13172 = (state_13211[(7)]);
var inst_13184 = (state_13211[(2)]);
var inst_13185 = cljs.core.next.call(null,inst_13172);
var inst_13154 = inst_13185;
var inst_13158 = null;
var inst_13159 = (0);
var inst_13160 = (0);
var state_13211__$1 = (function (){var statearr_13219 = state_13211;
(statearr_13219[(8)] = inst_13184);

(statearr_13219[(9)] = inst_13154);

(statearr_13219[(10)] = inst_13158);

(statearr_13219[(11)] = inst_13159);

(statearr_13219[(12)] = inst_13160);

return statearr_13219;
})();
var statearr_13220_13278 = state_13211__$1;
(statearr_13220_13278[(2)] = null);

(statearr_13220_13278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (1))){
var state_13211__$1 = state_13211;
var statearr_13221_13281 = state_13211__$1;
(statearr_13221_13281[(2)] = null);

(statearr_13221_13281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (4))){
var inst_13137 = (state_13211[(13)]);
var inst_13137__$1 = (state_13211[(2)]);
var inst_13138 = (inst_13137__$1 == null);
var state_13211__$1 = (function (){var statearr_13222 = state_13211;
(statearr_13222[(13)] = inst_13137__$1);

return statearr_13222;
})();
if(cljs.core.truth_(inst_13138)){
var statearr_13223_13285 = state_13211__$1;
(statearr_13223_13285[(1)] = (5));

} else {
var statearr_13224_13286 = state_13211__$1;
(statearr_13224_13286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (15))){
var state_13211__$1 = state_13211;
var statearr_13228_13287 = state_13211__$1;
(statearr_13228_13287[(2)] = null);

(statearr_13228_13287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (21))){
var state_13211__$1 = state_13211;
var statearr_13229_13289 = state_13211__$1;
(statearr_13229_13289[(2)] = null);

(statearr_13229_13289[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (13))){
var inst_13160 = (state_13211[(12)]);
var inst_13154 = (state_13211[(9)]);
var inst_13158 = (state_13211[(10)]);
var inst_13159 = (state_13211[(11)]);
var inst_13168 = (state_13211[(2)]);
var inst_13169 = (inst_13160 + (1));
var tmp13225 = inst_13159;
var tmp13226 = inst_13158;
var tmp13227 = inst_13154;
var inst_13154__$1 = tmp13227;
var inst_13158__$1 = tmp13226;
var inst_13159__$1 = tmp13225;
var inst_13160__$1 = inst_13169;
var state_13211__$1 = (function (){var statearr_13230 = state_13211;
(statearr_13230[(14)] = inst_13168);

(statearr_13230[(9)] = inst_13154__$1);

(statearr_13230[(10)] = inst_13158__$1);

(statearr_13230[(11)] = inst_13159__$1);

(statearr_13230[(12)] = inst_13160__$1);

return statearr_13230;
})();
var statearr_13231_13297 = state_13211__$1;
(statearr_13231_13297[(2)] = null);

(statearr_13231_13297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (22))){
var state_13211__$1 = state_13211;
var statearr_13232_13299 = state_13211__$1;
(statearr_13232_13299[(2)] = null);

(statearr_13232_13299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (6))){
var inst_13137 = (state_13211[(13)]);
var inst_13151 = f.call(null,inst_13137);
var inst_13152 = cljs.core.seq.call(null,inst_13151);
var inst_13154 = inst_13152;
var inst_13158 = null;
var inst_13159 = (0);
var inst_13160 = (0);
var state_13211__$1 = (function (){var statearr_13235 = state_13211;
(statearr_13235[(9)] = inst_13154);

(statearr_13235[(10)] = inst_13158);

(statearr_13235[(11)] = inst_13159);

(statearr_13235[(12)] = inst_13160);

return statearr_13235;
})();
var statearr_13236_13303 = state_13211__$1;
(statearr_13236_13303[(2)] = null);

(statearr_13236_13303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (17))){
var inst_13172 = (state_13211[(7)]);
var inst_13177 = cljs.core.chunk_first.call(null,inst_13172);
var inst_13178 = cljs.core.chunk_rest.call(null,inst_13172);
var inst_13179 = cljs.core.count.call(null,inst_13177);
var inst_13154 = inst_13178;
var inst_13158 = inst_13177;
var inst_13159 = inst_13179;
var inst_13160 = (0);
var state_13211__$1 = (function (){var statearr_13237 = state_13211;
(statearr_13237[(9)] = inst_13154);

(statearr_13237[(10)] = inst_13158);

(statearr_13237[(11)] = inst_13159);

(statearr_13237[(12)] = inst_13160);

return statearr_13237;
})();
var statearr_13241_13319 = state_13211__$1;
(statearr_13241_13319[(2)] = null);

(statearr_13241_13319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (3))){
var inst_13208 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13211__$1,inst_13208);
} else {
if((state_val_13212 === (12))){
var inst_13193 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13242_13337 = state_13211__$1;
(statearr_13242_13337[(2)] = inst_13193);

(statearr_13242_13337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (2))){
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13211__$1,(4),in$);
} else {
if((state_val_13212 === (23))){
var inst_13203 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13243_13344 = state_13211__$1;
(statearr_13243_13344[(2)] = inst_13203);

(statearr_13243_13344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (19))){
var inst_13188 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13245_13347 = state_13211__$1;
(statearr_13245_13347[(2)] = inst_13188);

(statearr_13245_13347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (11))){
var inst_13154 = (state_13211[(9)]);
var inst_13172 = (state_13211[(7)]);
var inst_13172__$1 = cljs.core.seq.call(null,inst_13154);
var state_13211__$1 = (function (){var statearr_13247 = state_13211;
(statearr_13247[(7)] = inst_13172__$1);

return statearr_13247;
})();
if(inst_13172__$1){
var statearr_13248_13352 = state_13211__$1;
(statearr_13248_13352[(1)] = (14));

} else {
var statearr_13249_13354 = state_13211__$1;
(statearr_13249_13354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (9))){
var inst_13195 = (state_13211[(2)]);
var inst_13198 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13211__$1 = (function (){var statearr_13250 = state_13211;
(statearr_13250[(15)] = inst_13195);

return statearr_13250;
})();
if(cljs.core.truth_(inst_13198)){
var statearr_13251_13357 = state_13211__$1;
(statearr_13251_13357[(1)] = (21));

} else {
var statearr_13252_13358 = state_13211__$1;
(statearr_13252_13358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (5))){
var inst_13140 = cljs.core.async.close_BANG_.call(null,out);
var state_13211__$1 = state_13211;
var statearr_13253_13361 = state_13211__$1;
(statearr_13253_13361[(2)] = inst_13140);

(statearr_13253_13361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (14))){
var inst_13172 = (state_13211[(7)]);
var inst_13175 = cljs.core.chunked_seq_QMARK_.call(null,inst_13172);
var state_13211__$1 = state_13211;
if(inst_13175){
var statearr_13255_13363 = state_13211__$1;
(statearr_13255_13363[(1)] = (17));

} else {
var statearr_13256_13364 = state_13211__$1;
(statearr_13256_13364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (16))){
var inst_13191 = (state_13211[(2)]);
var state_13211__$1 = state_13211;
var statearr_13258_13367 = state_13211__$1;
(statearr_13258_13367[(2)] = inst_13191);

(statearr_13258_13367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (10))){
var inst_13158 = (state_13211[(10)]);
var inst_13160 = (state_13211[(12)]);
var inst_13166 = cljs.core._nth.call(null,inst_13158,inst_13160);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13211__$1,(13),out,inst_13166);
} else {
if((state_val_13212 === (18))){
var inst_13172 = (state_13211[(7)]);
var inst_13182 = cljs.core.first.call(null,inst_13172);
var state_13211__$1 = state_13211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13211__$1,(20),out,inst_13182);
} else {
if((state_val_13212 === (8))){
var inst_13160 = (state_13211[(12)]);
var inst_13159 = (state_13211[(11)]);
var inst_13162 = (inst_13160 < inst_13159);
var inst_13163 = inst_13162;
var state_13211__$1 = state_13211;
if(cljs.core.truth_(inst_13163)){
var statearr_13259_13374 = state_13211__$1;
(statearr_13259_13374[(1)] = (10));

} else {
var statearr_13260_13375 = state_13211__$1;
(statearr_13260_13375[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____0 = (function (){
var statearr_13261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13261[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__);

(statearr_13261[(1)] = (1));

return statearr_13261;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____1 = (function (state_13211){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_13211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e13264){var ex__10622__auto__ = e13264;
var statearr_13265_13380 = state_13211;
(statearr_13265_13380[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_13211[(4)]))){
var statearr_13266_13383 = state_13211;
(statearr_13266_13383[(1)] = cljs.core.first.call(null,(state_13211[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13389 = state_13211;
state_13211 = G__13389;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__ = function(state_13211){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____1.call(this,state_13211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_13269 = f__10821__auto__.call(null);
(statearr_13269[(6)] = c__10820__auto__);

return statearr_13269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));

return c__10820__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13272 = arguments.length;
switch (G__13272) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13280 = arguments.length;
switch (G__13280) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13293 = arguments.length;
switch (G__13293) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___13447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_13333){
var state_val_13334 = (state_13333[(1)]);
if((state_val_13334 === (7))){
var inst_13327 = (state_13333[(2)]);
var state_13333__$1 = state_13333;
var statearr_13343_13451 = state_13333__$1;
(statearr_13343_13451[(2)] = inst_13327);

(statearr_13343_13451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (1))){
var inst_13307 = null;
var state_13333__$1 = (function (){var statearr_13345 = state_13333;
(statearr_13345[(7)] = inst_13307);

return statearr_13345;
})();
var statearr_13346_13454 = state_13333__$1;
(statearr_13346_13454[(2)] = null);

(statearr_13346_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (4))){
var inst_13311 = (state_13333[(8)]);
var inst_13311__$1 = (state_13333[(2)]);
var inst_13312 = (inst_13311__$1 == null);
var inst_13313 = cljs.core.not.call(null,inst_13312);
var state_13333__$1 = (function (){var statearr_13351 = state_13333;
(statearr_13351[(8)] = inst_13311__$1);

return statearr_13351;
})();
if(inst_13313){
var statearr_13353_13463 = state_13333__$1;
(statearr_13353_13463[(1)] = (5));

} else {
var statearr_13355_13464 = state_13333__$1;
(statearr_13355_13464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (6))){
var state_13333__$1 = state_13333;
var statearr_13356_13466 = state_13333__$1;
(statearr_13356_13466[(2)] = null);

(statearr_13356_13466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (3))){
var inst_13329 = (state_13333[(2)]);
var inst_13330 = cljs.core.async.close_BANG_.call(null,out);
var state_13333__$1 = (function (){var statearr_13359 = state_13333;
(statearr_13359[(9)] = inst_13329);

return statearr_13359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13333__$1,inst_13330);
} else {
if((state_val_13334 === (2))){
var state_13333__$1 = state_13333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13333__$1,(4),ch);
} else {
if((state_val_13334 === (11))){
var inst_13311 = (state_13333[(8)]);
var inst_13321 = (state_13333[(2)]);
var inst_13307 = inst_13311;
var state_13333__$1 = (function (){var statearr_13362 = state_13333;
(statearr_13362[(10)] = inst_13321);

(statearr_13362[(7)] = inst_13307);

return statearr_13362;
})();
var statearr_13365_13474 = state_13333__$1;
(statearr_13365_13474[(2)] = null);

(statearr_13365_13474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (9))){
var inst_13311 = (state_13333[(8)]);
var state_13333__$1 = state_13333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13333__$1,(11),out,inst_13311);
} else {
if((state_val_13334 === (5))){
var inst_13311 = (state_13333[(8)]);
var inst_13307 = (state_13333[(7)]);
var inst_13315 = cljs.core._EQ_.call(null,inst_13311,inst_13307);
var state_13333__$1 = state_13333;
if(inst_13315){
var statearr_13371_13479 = state_13333__$1;
(statearr_13371_13479[(1)] = (8));

} else {
var statearr_13372_13481 = state_13333__$1;
(statearr_13372_13481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (10))){
var inst_13324 = (state_13333[(2)]);
var state_13333__$1 = state_13333;
var statearr_13373_13484 = state_13333__$1;
(statearr_13373_13484[(2)] = inst_13324);

(statearr_13373_13484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (8))){
var inst_13307 = (state_13333[(7)]);
var tmp13370 = inst_13307;
var inst_13307__$1 = tmp13370;
var state_13333__$1 = (function (){var statearr_13376 = state_13333;
(statearr_13376[(7)] = inst_13307__$1);

return statearr_13376;
})();
var statearr_13377_13491 = state_13333__$1;
(statearr_13377_13491[(2)] = null);

(statearr_13377_13491[(1)] = (2));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_13381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13381[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_13381[(1)] = (1));

return statearr_13381;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_13333){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_13333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e13385){var ex__10622__auto__ = e13385;
var statearr_13386_13498 = state_13333;
(statearr_13386_13498[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_13333[(4)]))){
var statearr_13390_13500 = state_13333;
(statearr_13390_13500[(1)] = cljs.core.first.call(null,(state_13333[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13504 = state_13333;
state_13333 = G__13504;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_13333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_13333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_13395 = f__10821__auto__.call(null);
(statearr_13395[(6)] = c__10820__auto___13447);

return statearr_13395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13398 = arguments.length;
switch (G__13398) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___13517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_13448){
var state_val_13449 = (state_13448[(1)]);
if((state_val_13449 === (7))){
var inst_13442 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13452_13522 = state_13448__$1;
(statearr_13452_13522[(2)] = inst_13442);

(statearr_13452_13522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (1))){
var inst_13404 = (new Array(n));
var inst_13405 = inst_13404;
var inst_13406 = (0);
var state_13448__$1 = (function (){var statearr_13453 = state_13448;
(statearr_13453[(7)] = inst_13405);

(statearr_13453[(8)] = inst_13406);

return statearr_13453;
})();
var statearr_13455_13523 = state_13448__$1;
(statearr_13455_13523[(2)] = null);

(statearr_13455_13523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (4))){
var inst_13409 = (state_13448[(9)]);
var inst_13409__$1 = (state_13448[(2)]);
var inst_13411 = (inst_13409__$1 == null);
var inst_13412 = cljs.core.not.call(null,inst_13411);
var state_13448__$1 = (function (){var statearr_13460 = state_13448;
(statearr_13460[(9)] = inst_13409__$1);

return statearr_13460;
})();
if(inst_13412){
var statearr_13461_13530 = state_13448__$1;
(statearr_13461_13530[(1)] = (5));

} else {
var statearr_13462_13534 = state_13448__$1;
(statearr_13462_13534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (15))){
var inst_13436 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13465_13542 = state_13448__$1;
(statearr_13465_13542[(2)] = inst_13436);

(statearr_13465_13542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (13))){
var state_13448__$1 = state_13448;
var statearr_13467_13554 = state_13448__$1;
(statearr_13467_13554[(2)] = null);

(statearr_13467_13554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (6))){
var inst_13406 = (state_13448[(8)]);
var inst_13431 = (inst_13406 > (0));
var state_13448__$1 = state_13448;
if(cljs.core.truth_(inst_13431)){
var statearr_13469_13576 = state_13448__$1;
(statearr_13469_13576[(1)] = (12));

} else {
var statearr_13470_13580 = state_13448__$1;
(statearr_13470_13580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (3))){
var inst_13444 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13448__$1,inst_13444);
} else {
if((state_val_13449 === (12))){
var inst_13405 = (state_13448[(7)]);
var inst_13434 = cljs.core.vec.call(null,inst_13405);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13448__$1,(15),out,inst_13434);
} else {
if((state_val_13449 === (2))){
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13448__$1,(4),ch);
} else {
if((state_val_13449 === (11))){
var inst_13423 = (state_13448[(2)]);
var inst_13425 = (new Array(n));
var inst_13405 = inst_13425;
var inst_13406 = (0);
var state_13448__$1 = (function (){var statearr_13475 = state_13448;
(statearr_13475[(10)] = inst_13423);

(statearr_13475[(7)] = inst_13405);

(statearr_13475[(8)] = inst_13406);

return statearr_13475;
})();
var statearr_13476_13590 = state_13448__$1;
(statearr_13476_13590[(2)] = null);

(statearr_13476_13590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (9))){
var inst_13405 = (state_13448[(7)]);
var inst_13421 = cljs.core.vec.call(null,inst_13405);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13448__$1,(11),out,inst_13421);
} else {
if((state_val_13449 === (5))){
var inst_13405 = (state_13448[(7)]);
var inst_13406 = (state_13448[(8)]);
var inst_13409 = (state_13448[(9)]);
var inst_13415 = (state_13448[(11)]);
var inst_13414 = (inst_13405[inst_13406] = inst_13409);
var inst_13415__$1 = (inst_13406 + (1));
var inst_13416 = (inst_13415__$1 < n);
var state_13448__$1 = (function (){var statearr_13482 = state_13448;
(statearr_13482[(12)] = inst_13414);

(statearr_13482[(11)] = inst_13415__$1);

return statearr_13482;
})();
if(cljs.core.truth_(inst_13416)){
var statearr_13483_13597 = state_13448__$1;
(statearr_13483_13597[(1)] = (8));

} else {
var statearr_13485_13599 = state_13448__$1;
(statearr_13485_13599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (14))){
var inst_13439 = (state_13448[(2)]);
var inst_13440 = cljs.core.async.close_BANG_.call(null,out);
var state_13448__$1 = (function (){var statearr_13487 = state_13448;
(statearr_13487[(13)] = inst_13439);

return statearr_13487;
})();
var statearr_13489_13606 = state_13448__$1;
(statearr_13489_13606[(2)] = inst_13440);

(statearr_13489_13606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (10))){
var inst_13428 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13492_13609 = state_13448__$1;
(statearr_13492_13609[(2)] = inst_13428);

(statearr_13492_13609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (8))){
var inst_13405 = (state_13448[(7)]);
var inst_13415 = (state_13448[(11)]);
var tmp13486 = inst_13405;
var inst_13405__$1 = tmp13486;
var inst_13406 = inst_13415;
var state_13448__$1 = (function (){var statearr_13495 = state_13448;
(statearr_13495[(7)] = inst_13405__$1);

(statearr_13495[(8)] = inst_13406);

return statearr_13495;
})();
var statearr_13497_13612 = state_13448__$1;
(statearr_13497_13612[(2)] = null);

(statearr_13497_13612[(1)] = (2));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_13501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13501[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_13501[(1)] = (1));

return statearr_13501;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_13448){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_13448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e13502){var ex__10622__auto__ = e13502;
var statearr_13503_13617 = state_13448;
(statearr_13503_13617[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_13448[(4)]))){
var statearr_13505_13621 = state_13448;
(statearr_13505_13621[(1)] = cljs.core.first.call(null,(state_13448[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13622 = state_13448;
state_13448 = G__13622;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_13448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_13448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_13509 = f__10821__auto__.call(null);
(statearr_13509[(6)] = c__10820__auto___13517);

return statearr_13509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13521 = arguments.length;
switch (G__13521) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10820__auto___13662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10821__auto__ = (function (){var switch__10618__auto__ = (function (state_13581){
var state_val_13582 = (state_13581[(1)]);
if((state_val_13582 === (7))){
var inst_13571 = (state_13581[(2)]);
var state_13581__$1 = state_13581;
var statearr_13585_13663 = state_13581__$1;
(statearr_13585_13663[(2)] = inst_13571);

(statearr_13585_13663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (1))){
var inst_13526 = [];
var inst_13527 = inst_13526;
var inst_13528 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13581__$1 = (function (){var statearr_13586 = state_13581;
(statearr_13586[(7)] = inst_13527);

(statearr_13586[(8)] = inst_13528);

return statearr_13586;
})();
var statearr_13589_13665 = state_13581__$1;
(statearr_13589_13665[(2)] = null);

(statearr_13589_13665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (4))){
var inst_13533 = (state_13581[(9)]);
var inst_13533__$1 = (state_13581[(2)]);
var inst_13535 = (inst_13533__$1 == null);
var inst_13536 = cljs.core.not.call(null,inst_13535);
var state_13581__$1 = (function (){var statearr_13591 = state_13581;
(statearr_13591[(9)] = inst_13533__$1);

return statearr_13591;
})();
if(inst_13536){
var statearr_13594_13675 = state_13581__$1;
(statearr_13594_13675[(1)] = (5));

} else {
var statearr_13595_13676 = state_13581__$1;
(statearr_13595_13676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (15))){
var inst_13527 = (state_13581[(7)]);
var inst_13563 = cljs.core.vec.call(null,inst_13527);
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13581__$1,(18),out,inst_13563);
} else {
if((state_val_13582 === (13))){
var inst_13558 = (state_13581[(2)]);
var state_13581__$1 = state_13581;
var statearr_13598_13677 = state_13581__$1;
(statearr_13598_13677[(2)] = inst_13558);

(statearr_13598_13677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (6))){
var inst_13527 = (state_13581[(7)]);
var inst_13560 = inst_13527.length;
var inst_13561 = (inst_13560 > (0));
var state_13581__$1 = state_13581;
if(cljs.core.truth_(inst_13561)){
var statearr_13602_13679 = state_13581__$1;
(statearr_13602_13679[(1)] = (15));

} else {
var statearr_13605_13680 = state_13581__$1;
(statearr_13605_13680[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (17))){
var inst_13568 = (state_13581[(2)]);
var inst_13569 = cljs.core.async.close_BANG_.call(null,out);
var state_13581__$1 = (function (){var statearr_13608 = state_13581;
(statearr_13608[(10)] = inst_13568);

return statearr_13608;
})();
var statearr_13610_13687 = state_13581__$1;
(statearr_13610_13687[(2)] = inst_13569);

(statearr_13610_13687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (3))){
var inst_13573 = (state_13581[(2)]);
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13581__$1,inst_13573);
} else {
if((state_val_13582 === (12))){
var inst_13527 = (state_13581[(7)]);
var inst_13550 = cljs.core.vec.call(null,inst_13527);
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13581__$1,(14),out,inst_13550);
} else {
if((state_val_13582 === (2))){
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13581__$1,(4),ch);
} else {
if((state_val_13582 === (11))){
var inst_13527 = (state_13581[(7)]);
var inst_13533 = (state_13581[(9)]);
var inst_13538 = (state_13581[(11)]);
var inst_13547 = inst_13527.push(inst_13533);
var tmp13611 = inst_13527;
var inst_13527__$1 = tmp13611;
var inst_13528 = inst_13538;
var state_13581__$1 = (function (){var statearr_13616 = state_13581;
(statearr_13616[(12)] = inst_13547);

(statearr_13616[(7)] = inst_13527__$1);

(statearr_13616[(8)] = inst_13528);

return statearr_13616;
})();
var statearr_13618_13689 = state_13581__$1;
(statearr_13618_13689[(2)] = null);

(statearr_13618_13689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (9))){
var inst_13528 = (state_13581[(8)]);
var inst_13543 = cljs.core.keyword_identical_QMARK_.call(null,inst_13528,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13581__$1 = state_13581;
var statearr_13623_13690 = state_13581__$1;
(statearr_13623_13690[(2)] = inst_13543);

(statearr_13623_13690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (5))){
var inst_13533 = (state_13581[(9)]);
var inst_13538 = (state_13581[(11)]);
var inst_13528 = (state_13581[(8)]);
var inst_13539 = (state_13581[(13)]);
var inst_13538__$1 = f.call(null,inst_13533);
var inst_13539__$1 = cljs.core._EQ_.call(null,inst_13538__$1,inst_13528);
var state_13581__$1 = (function (){var statearr_13624 = state_13581;
(statearr_13624[(11)] = inst_13538__$1);

(statearr_13624[(13)] = inst_13539__$1);

return statearr_13624;
})();
if(inst_13539__$1){
var statearr_13625_13692 = state_13581__$1;
(statearr_13625_13692[(1)] = (8));

} else {
var statearr_13626_13694 = state_13581__$1;
(statearr_13626_13694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (14))){
var inst_13533 = (state_13581[(9)]);
var inst_13538 = (state_13581[(11)]);
var inst_13552 = (state_13581[(2)]);
var inst_13553 = [];
var inst_13555 = inst_13553.push(inst_13533);
var inst_13527 = inst_13553;
var inst_13528 = inst_13538;
var state_13581__$1 = (function (){var statearr_13627 = state_13581;
(statearr_13627[(14)] = inst_13552);

(statearr_13627[(15)] = inst_13555);

(statearr_13627[(7)] = inst_13527);

(statearr_13627[(8)] = inst_13528);

return statearr_13627;
})();
var statearr_13630_13701 = state_13581__$1;
(statearr_13630_13701[(2)] = null);

(statearr_13630_13701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (16))){
var state_13581__$1 = state_13581;
var statearr_13632_13702 = state_13581__$1;
(statearr_13632_13702[(2)] = null);

(statearr_13632_13702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (10))){
var inst_13545 = (state_13581[(2)]);
var state_13581__$1 = state_13581;
if(cljs.core.truth_(inst_13545)){
var statearr_13635_13703 = state_13581__$1;
(statearr_13635_13703[(1)] = (11));

} else {
var statearr_13637_13704 = state_13581__$1;
(statearr_13637_13704[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (18))){
var inst_13565 = (state_13581[(2)]);
var state_13581__$1 = state_13581;
var statearr_13640_13705 = state_13581__$1;
(statearr_13640_13705[(2)] = inst_13565);

(statearr_13640_13705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13582 === (8))){
var inst_13539 = (state_13581[(13)]);
var state_13581__$1 = state_13581;
var statearr_13642_13706 = state_13581__$1;
(statearr_13642_13706[(2)] = inst_13539);

(statearr_13642_13706[(1)] = (10));


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
var cljs$core$async$state_machine__10619__auto__ = null;
var cljs$core$async$state_machine__10619__auto____0 = (function (){
var statearr_13643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13643[(0)] = cljs$core$async$state_machine__10619__auto__);

(statearr_13643[(1)] = (1));

return statearr_13643;
});
var cljs$core$async$state_machine__10619__auto____1 = (function (state_13581){
while(true){
var ret_value__10620__auto__ = (function (){try{while(true){
var result__10621__auto__ = switch__10618__auto__.call(null,state_13581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10621__auto__;
}
break;
}
}catch (e13644){var ex__10622__auto__ = e13644;
var statearr_13648_13711 = state_13581;
(statearr_13648_13711[(2)] = ex__10622__auto__);


if(cljs.core.seq.call(null,(state_13581[(4)]))){
var statearr_13649_13713 = state_13581;
(statearr_13649_13713[(1)] = cljs.core.first.call(null,(state_13581[(4)])));

} else {
throw ex__10622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13714 = state_13581;
state_13581 = G__13714;
continue;
} else {
return ret_value__10620__auto__;
}
break;
}
});
cljs$core$async$state_machine__10619__auto__ = function(state_13581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10619__auto____1.call(this,state_13581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10619__auto____0;
cljs$core$async$state_machine__10619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10619__auto____1;
return cljs$core$async$state_machine__10619__auto__;
})()
})();
var state__10822__auto__ = (function (){var statearr_13654 = f__10821__auto__.call(null);
(statearr_13654[(6)] = c__10820__auto___13662);

return statearr_13654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10822__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
