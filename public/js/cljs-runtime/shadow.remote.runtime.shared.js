goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18000){
var map__18001 = p__18000;
var map__18001__$1 = cljs.core.__destructure_map(map__18001);
var runtime = map__18001__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18001__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18092 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18092)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18002 = runtime;
var G__18003 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18092);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18002,G__18003) : shadow.remote.runtime.shared.process.call(null,G__18002,G__18003));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18004,res){
var map__18005 = p__18004;
var map__18005__$1 = cljs.core.__destructure_map(map__18005);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18006 = res;
var G__18006__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18006,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18006);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18006__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18006__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18013 = arguments.length;
switch (G__18013) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18015,msg,handlers,timeout_after_ms){
var map__18016 = p__18015;
var map__18016__$1 = cljs.core.__destructure_map(map__18016);
var runtime = map__18016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18094 = arguments.length;
var i__5877__auto___18095 = (0);
while(true){
if((i__5877__auto___18095 < len__5876__auto___18094)){
args__5882__auto__.push((arguments[i__5877__auto___18095]));

var G__18096 = (i__5877__auto___18095 + (1));
i__5877__auto___18095 = G__18096;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18020,ev,args){
var map__18021 = p__18020;
var map__18021__$1 = cljs.core.__destructure_map(map__18021);
var runtime = map__18021__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18021__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18022 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18025 = null;
var count__18026 = (0);
var i__18027 = (0);
while(true){
if((i__18027 < count__18026)){
var ext = chunk__18025.cljs$core$IIndexed$_nth$arity$2(null,i__18027);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18097 = seq__18022;
var G__18098 = chunk__18025;
var G__18099 = count__18026;
var G__18100 = (i__18027 + (1));
seq__18022 = G__18097;
chunk__18025 = G__18098;
count__18026 = G__18099;
i__18027 = G__18100;
continue;
} else {
var G__18101 = seq__18022;
var G__18102 = chunk__18025;
var G__18103 = count__18026;
var G__18104 = (i__18027 + (1));
seq__18022 = G__18101;
chunk__18025 = G__18102;
count__18026 = G__18103;
i__18027 = G__18104;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18022);
if(temp__5823__auto__){
var seq__18022__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18022__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18022__$1);
var G__18105 = cljs.core.chunk_rest(seq__18022__$1);
var G__18106 = c__5673__auto__;
var G__18107 = cljs.core.count(c__5673__auto__);
var G__18108 = (0);
seq__18022 = G__18105;
chunk__18025 = G__18106;
count__18026 = G__18107;
i__18027 = G__18108;
continue;
} else {
var ext = cljs.core.first(seq__18022__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18109 = cljs.core.next(seq__18022__$1);
var G__18110 = null;
var G__18111 = (0);
var G__18112 = (0);
seq__18022 = G__18109;
chunk__18025 = G__18110;
count__18026 = G__18111;
i__18027 = G__18112;
continue;
} else {
var G__18113 = cljs.core.next(seq__18022__$1);
var G__18114 = null;
var G__18115 = (0);
var G__18116 = (0);
seq__18022 = G__18113;
chunk__18025 = G__18114;
count__18026 = G__18115;
i__18027 = G__18116;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18017){
var G__18018 = cljs.core.first(seq18017);
var seq18017__$1 = cljs.core.next(seq18017);
var G__18019 = cljs.core.first(seq18017__$1);
var seq18017__$2 = cljs.core.next(seq18017__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18018,G__18019,seq18017__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18030,p__18031){
var map__18032 = p__18030;
var map__18032__$1 = cljs.core.__destructure_map(map__18032);
var runtime = map__18032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18033 = p__18031;
var map__18033__$1 = cljs.core.__destructure_map(map__18033);
var msg = map__18033__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18033__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18036 = cljs.core.deref(state_ref);
var map__18036__$1 = cljs.core.__destructure_map(map__18036);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18037,msg){
var map__18038 = p__18037;
var map__18038__$1 = cljs.core.__destructure_map(map__18038);
var runtime = map__18038__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18038__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18040,key,p__18041){
var map__18042 = p__18040;
var map__18042__$1 = cljs.core.__destructure_map(map__18042);
var state = map__18042__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18042__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18043 = p__18041;
var map__18043__$1 = cljs.core.__destructure_map(map__18043);
var spec = map__18043__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18043__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18043__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18062,key,spec){
var map__18063 = p__18062;
var map__18063__$1 = cljs.core.__destructure_map(map__18063);
var runtime = map__18063__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18118 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18118 == null)){
} else {
var on_welcome_18119 = temp__5827__auto___18118;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18119.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18119.cljs$core$IFn$_invoke$arity$0() : on_welcome_18119.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18065_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18065_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18067_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18067_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18068_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18068_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18069_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18069_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18070_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18070_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18074,key){
var map__18075 = p__18074;
var map__18075__$1 = cljs.core.__destructure_map(map__18075);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18076,msg){
var map__18077 = p__18076;
var map__18077__$1 = cljs.core.__destructure_map(map__18077);
var runtime = map__18077__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18077__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18078,p__18079){
var map__18080 = p__18078;
var map__18080__$1 = cljs.core.__destructure_map(map__18080);
var runtime = map__18080__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18081 = p__18079;
var map__18081__$1 = cljs.core.__destructure_map(map__18081);
var msg = map__18081__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18082 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18084 = null;
var count__18085 = (0);
var i__18086 = (0);
while(true){
if((i__18086 < count__18085)){
var map__18090 = chunk__18084.cljs$core$IIndexed$_nth$arity$2(null,i__18086);
var map__18090__$1 = cljs.core.__destructure_map(map__18090);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18121 = seq__18082;
var G__18122 = chunk__18084;
var G__18123 = count__18085;
var G__18124 = (i__18086 + (1));
seq__18082 = G__18121;
chunk__18084 = G__18122;
count__18085 = G__18123;
i__18086 = G__18124;
continue;
} else {
var G__18125 = seq__18082;
var G__18126 = chunk__18084;
var G__18127 = count__18085;
var G__18128 = (i__18086 + (1));
seq__18082 = G__18125;
chunk__18084 = G__18126;
count__18085 = G__18127;
i__18086 = G__18128;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18082);
if(temp__5823__auto__){
var seq__18082__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18082__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18082__$1);
var G__18129 = cljs.core.chunk_rest(seq__18082__$1);
var G__18130 = c__5673__auto__;
var G__18131 = cljs.core.count(c__5673__auto__);
var G__18132 = (0);
seq__18082 = G__18129;
chunk__18084 = G__18130;
count__18085 = G__18131;
i__18086 = G__18132;
continue;
} else {
var map__18091 = cljs.core.first(seq__18082__$1);
var map__18091__$1 = cljs.core.__destructure_map(map__18091);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18091__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18133 = cljs.core.next(seq__18082__$1);
var G__18134 = null;
var G__18135 = (0);
var G__18136 = (0);
seq__18082 = G__18133;
chunk__18084 = G__18134;
count__18085 = G__18135;
i__18086 = G__18136;
continue;
} else {
var G__18137 = cljs.core.next(seq__18082__$1);
var G__18138 = null;
var G__18139 = (0);
var G__18140 = (0);
seq__18082 = G__18137;
chunk__18084 = G__18138;
count__18085 = G__18139;
i__18086 = G__18140;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
