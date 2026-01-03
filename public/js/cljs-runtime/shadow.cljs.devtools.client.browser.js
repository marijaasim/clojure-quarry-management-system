goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21440 = arguments.length;
var i__5877__auto___21441 = (0);
while(true){
if((i__5877__auto___21441 < len__5876__auto___21440)){
args__5882__auto__.push((arguments[i__5877__auto___21441]));

var G__21442 = (i__5877__auto___21441 + (1));
i__5877__auto___21441 = G__21442;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21031){
var G__21032 = cljs.core.first(seq21031);
var seq21031__$1 = cljs.core.next(seq21031);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21032,seq21031__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21034 = cljs.core.seq(sources);
var chunk__21035 = null;
var count__21036 = (0);
var i__21037 = (0);
while(true){
if((i__21037 < count__21036)){
var map__21043 = chunk__21035.cljs$core$IIndexed$_nth$arity$2(null,i__21037);
var map__21043__$1 = cljs.core.__destructure_map(map__21043);
var src = map__21043__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21045){var e_21443 = e21045;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21443);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21443.message))));
}

var G__21444 = seq__21034;
var G__21445 = chunk__21035;
var G__21446 = count__21036;
var G__21447 = (i__21037 + (1));
seq__21034 = G__21444;
chunk__21035 = G__21445;
count__21036 = G__21446;
i__21037 = G__21447;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21034);
if(temp__5823__auto__){
var seq__21034__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21034__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21034__$1);
var G__21449 = cljs.core.chunk_rest(seq__21034__$1);
var G__21450 = c__5673__auto__;
var G__21451 = cljs.core.count(c__5673__auto__);
var G__21452 = (0);
seq__21034 = G__21449;
chunk__21035 = G__21450;
count__21036 = G__21451;
i__21037 = G__21452;
continue;
} else {
var map__21046 = cljs.core.first(seq__21034__$1);
var map__21046__$1 = cljs.core.__destructure_map(map__21046);
var src = map__21046__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21047){var e_21456 = e21047;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21456);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21456.message))));
}

var G__21458 = cljs.core.next(seq__21034__$1);
var G__21459 = null;
var G__21460 = (0);
var G__21461 = (0);
seq__21034 = G__21458;
chunk__21035 = G__21459;
count__21036 = G__21460;
i__21037 = G__21461;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21048 = cljs.core.seq(js_requires);
var chunk__21049 = null;
var count__21050 = (0);
var i__21051 = (0);
while(true){
if((i__21051 < count__21050)){
var js_ns = chunk__21049.cljs$core$IIndexed$_nth$arity$2(null,i__21051);
var require_str_21462 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21462);


var G__21463 = seq__21048;
var G__21464 = chunk__21049;
var G__21465 = count__21050;
var G__21466 = (i__21051 + (1));
seq__21048 = G__21463;
chunk__21049 = G__21464;
count__21050 = G__21465;
i__21051 = G__21466;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21048);
if(temp__5823__auto__){
var seq__21048__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21048__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21048__$1);
var G__21467 = cljs.core.chunk_rest(seq__21048__$1);
var G__21468 = c__5673__auto__;
var G__21469 = cljs.core.count(c__5673__auto__);
var G__21470 = (0);
seq__21048 = G__21467;
chunk__21049 = G__21468;
count__21050 = G__21469;
i__21051 = G__21470;
continue;
} else {
var js_ns = cljs.core.first(seq__21048__$1);
var require_str_21473 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21473);


var G__21474 = cljs.core.next(seq__21048__$1);
var G__21475 = null;
var G__21476 = (0);
var G__21477 = (0);
seq__21048 = G__21474;
chunk__21049 = G__21475;
count__21050 = G__21476;
i__21051 = G__21477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21053){
var map__21054 = p__21053;
var map__21054__$1 = cljs.core.__destructure_map(map__21054);
var msg = map__21054__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055(s__21056){
return (new cljs.core.LazySeq(null,(function (){
var s__21056__$1 = s__21056;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21056__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21061 = cljs.core.first(xs__6383__auto__);
var map__21061__$1 = cljs.core.__destructure_map(map__21061);
var src = map__21061__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(s__21058){
return (new cljs.core.LazySeq(null,((function (s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info){
return (function (){
var s__21058__$1 = s__21058;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21058__$1);
if(temp__5823__auto____$1){
var s__21058__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21058__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21058__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21060 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21059 = (0);
while(true){
if((i__21059 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21059);
cljs.core.chunk_append(b__21060,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21479 = (i__21059 + (1));
i__21059 = G__21479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(cljs.core.chunk_rest(s__21058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),null);
}
} else {
var warning = cljs.core.first(s__21058__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(cljs.core.rest(s__21058__$2)));
}
} else {
return null;
}
break;
}
});})(s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info))
,null,null));
});})(s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055(cljs.core.rest(s__21056__$1)));
} else {
var G__21482 = cljs.core.rest(s__21056__$1);
s__21056__$1 = G__21482;
continue;
}
} else {
var G__21483 = cljs.core.rest(s__21056__$1);
s__21056__$1 = G__21483;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21062_21484 = cljs.core.seq(warnings);
var chunk__21063_21485 = null;
var count__21064_21486 = (0);
var i__21065_21487 = (0);
while(true){
if((i__21065_21487 < count__21064_21486)){
var map__21068_21488 = chunk__21063_21485.cljs$core$IIndexed$_nth$arity$2(null,i__21065_21487);
var map__21068_21489__$1 = cljs.core.__destructure_map(map__21068_21488);
var w_21490 = map__21068_21489__$1;
var msg_21491__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21489__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21489__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21489__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21489__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21494)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21492)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21493)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21491__$1)));


var G__21495 = seq__21062_21484;
var G__21496 = chunk__21063_21485;
var G__21497 = count__21064_21486;
var G__21498 = (i__21065_21487 + (1));
seq__21062_21484 = G__21495;
chunk__21063_21485 = G__21496;
count__21064_21486 = G__21497;
i__21065_21487 = G__21498;
continue;
} else {
var temp__5823__auto___21499 = cljs.core.seq(seq__21062_21484);
if(temp__5823__auto___21499){
var seq__21062_21500__$1 = temp__5823__auto___21499;
if(cljs.core.chunked_seq_QMARK_(seq__21062_21500__$1)){
var c__5673__auto___21501 = cljs.core.chunk_first(seq__21062_21500__$1);
var G__21502 = cljs.core.chunk_rest(seq__21062_21500__$1);
var G__21503 = c__5673__auto___21501;
var G__21504 = cljs.core.count(c__5673__auto___21501);
var G__21505 = (0);
seq__21062_21484 = G__21502;
chunk__21063_21485 = G__21503;
count__21064_21486 = G__21504;
i__21065_21487 = G__21505;
continue;
} else {
var map__21069_21506 = cljs.core.first(seq__21062_21500__$1);
var map__21069_21507__$1 = cljs.core.__destructure_map(map__21069_21506);
var w_21508 = map__21069_21507__$1;
var msg_21509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21512)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21510)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21511)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21509__$1)));


var G__21513 = cljs.core.next(seq__21062_21500__$1);
var G__21514 = null;
var G__21515 = (0);
var G__21516 = (0);
seq__21062_21484 = G__21513;
chunk__21063_21485 = G__21514;
count__21064_21486 = G__21515;
i__21065_21487 = G__21516;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21052_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21052_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21071 = node_uri;
G__21071.setQuery(null);

G__21071.setPath(new$);

return G__21071;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21072){
var map__21073 = p__21072;
var map__21073__$1 = cljs.core.__destructure_map(map__21073);
var msg = map__21073__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21074 = cljs.core.seq(updates);
var chunk__21076 = null;
var count__21077 = (0);
var i__21078 = (0);
while(true){
if((i__21078 < count__21077)){
var path = chunk__21076.cljs$core$IIndexed$_nth$arity$2(null,i__21078);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21277_21518 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21281_21519 = null;
var count__21282_21520 = (0);
var i__21283_21521 = (0);
while(true){
if((i__21283_21521 < count__21282_21520)){
var node_21522 = chunk__21281_21519.cljs$core$IIndexed$_nth$arity$2(null,i__21283_21521);
if(cljs.core.not(node_21522.shadow$old)){
var path_match_21523 = shadow.cljs.devtools.client.browser.match_paths(node_21522.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21523)){
var new_link_21524 = (function (){var G__21317 = node_21522.cloneNode(true);
G__21317.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21523)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21317;
})();
(node_21522.shadow$old = true);

(new_link_21524.onload = ((function (seq__21277_21518,chunk__21281_21519,count__21282_21520,i__21283_21521,seq__21074,chunk__21076,count__21077,i__21078,new_link_21524,path_match_21523,node_21522,path,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21319_21525 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21321_21526 = null;
var count__21322_21527 = (0);
var i__21323_21528 = (0);
while(true){
if((i__21323_21528 < count__21322_21527)){
var map__21327_21529 = chunk__21321_21526.cljs$core$IIndexed$_nth$arity$2(null,i__21323_21528);
var map__21327_21530__$1 = cljs.core.__destructure_map(map__21327_21529);
var task_21531 = map__21327_21530__$1;
var fn_str_21532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327_21530__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327_21530__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21534 = goog.getObjectByName(fn_str_21532,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21533)));

(fn_obj_21534.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21534.cljs$core$IFn$_invoke$arity$2(path,new_link_21524) : fn_obj_21534.call(null,path,new_link_21524));


var G__21535 = seq__21319_21525;
var G__21536 = chunk__21321_21526;
var G__21537 = count__21322_21527;
var G__21538 = (i__21323_21528 + (1));
seq__21319_21525 = G__21535;
chunk__21321_21526 = G__21536;
count__21322_21527 = G__21537;
i__21323_21528 = G__21538;
continue;
} else {
var temp__5823__auto___21539 = cljs.core.seq(seq__21319_21525);
if(temp__5823__auto___21539){
var seq__21319_21540__$1 = temp__5823__auto___21539;
if(cljs.core.chunked_seq_QMARK_(seq__21319_21540__$1)){
var c__5673__auto___21541 = cljs.core.chunk_first(seq__21319_21540__$1);
var G__21542 = cljs.core.chunk_rest(seq__21319_21540__$1);
var G__21543 = c__5673__auto___21541;
var G__21544 = cljs.core.count(c__5673__auto___21541);
var G__21545 = (0);
seq__21319_21525 = G__21542;
chunk__21321_21526 = G__21543;
count__21322_21527 = G__21544;
i__21323_21528 = G__21545;
continue;
} else {
var map__21328_21546 = cljs.core.first(seq__21319_21540__$1);
var map__21328_21547__$1 = cljs.core.__destructure_map(map__21328_21546);
var task_21548 = map__21328_21547__$1;
var fn_str_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328_21547__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328_21547__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21551 = goog.getObjectByName(fn_str_21549,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21550)));

(fn_obj_21551.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21551.cljs$core$IFn$_invoke$arity$2(path,new_link_21524) : fn_obj_21551.call(null,path,new_link_21524));


var G__21554 = cljs.core.next(seq__21319_21540__$1);
var G__21555 = null;
var G__21556 = (0);
var G__21557 = (0);
seq__21319_21525 = G__21554;
chunk__21321_21526 = G__21555;
count__21322_21527 = G__21556;
i__21323_21528 = G__21557;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21522);
});})(seq__21277_21518,chunk__21281_21519,count__21282_21520,i__21283_21521,seq__21074,chunk__21076,count__21077,i__21078,new_link_21524,path_match_21523,node_21522,path,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21523], 0));

goog.dom.insertSiblingAfter(new_link_21524,node_21522);


var G__21558 = seq__21277_21518;
var G__21559 = chunk__21281_21519;
var G__21560 = count__21282_21520;
var G__21561 = (i__21283_21521 + (1));
seq__21277_21518 = G__21558;
chunk__21281_21519 = G__21559;
count__21282_21520 = G__21560;
i__21283_21521 = G__21561;
continue;
} else {
var G__21563 = seq__21277_21518;
var G__21564 = chunk__21281_21519;
var G__21565 = count__21282_21520;
var G__21566 = (i__21283_21521 + (1));
seq__21277_21518 = G__21563;
chunk__21281_21519 = G__21564;
count__21282_21520 = G__21565;
i__21283_21521 = G__21566;
continue;
}
} else {
var G__21568 = seq__21277_21518;
var G__21569 = chunk__21281_21519;
var G__21570 = count__21282_21520;
var G__21571 = (i__21283_21521 + (1));
seq__21277_21518 = G__21568;
chunk__21281_21519 = G__21569;
count__21282_21520 = G__21570;
i__21283_21521 = G__21571;
continue;
}
} else {
var temp__5823__auto___21572 = cljs.core.seq(seq__21277_21518);
if(temp__5823__auto___21572){
var seq__21277_21573__$1 = temp__5823__auto___21572;
if(cljs.core.chunked_seq_QMARK_(seq__21277_21573__$1)){
var c__5673__auto___21574 = cljs.core.chunk_first(seq__21277_21573__$1);
var G__21575 = cljs.core.chunk_rest(seq__21277_21573__$1);
var G__21576 = c__5673__auto___21574;
var G__21577 = cljs.core.count(c__5673__auto___21574);
var G__21578 = (0);
seq__21277_21518 = G__21575;
chunk__21281_21519 = G__21576;
count__21282_21520 = G__21577;
i__21283_21521 = G__21578;
continue;
} else {
var node_21579 = cljs.core.first(seq__21277_21573__$1);
if(cljs.core.not(node_21579.shadow$old)){
var path_match_21580 = shadow.cljs.devtools.client.browser.match_paths(node_21579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21580)){
var new_link_21581 = (function (){var G__21329 = node_21579.cloneNode(true);
G__21329.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21580)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21329;
})();
(node_21579.shadow$old = true);

(new_link_21581.onload = ((function (seq__21277_21518,chunk__21281_21519,count__21282_21520,i__21283_21521,seq__21074,chunk__21076,count__21077,i__21078,new_link_21581,path_match_21580,node_21579,seq__21277_21573__$1,temp__5823__auto___21572,path,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21330_21582 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21332_21583 = null;
var count__21333_21584 = (0);
var i__21334_21585 = (0);
while(true){
if((i__21334_21585 < count__21333_21584)){
var map__21338_21586 = chunk__21332_21583.cljs$core$IIndexed$_nth$arity$2(null,i__21334_21585);
var map__21338_21587__$1 = cljs.core.__destructure_map(map__21338_21586);
var task_21588 = map__21338_21587__$1;
var fn_str_21589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338_21587__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338_21587__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21591 = goog.getObjectByName(fn_str_21589,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21590)));

(fn_obj_21591.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21591.cljs$core$IFn$_invoke$arity$2(path,new_link_21581) : fn_obj_21591.call(null,path,new_link_21581));


var G__21592 = seq__21330_21582;
var G__21593 = chunk__21332_21583;
var G__21594 = count__21333_21584;
var G__21595 = (i__21334_21585 + (1));
seq__21330_21582 = G__21592;
chunk__21332_21583 = G__21593;
count__21333_21584 = G__21594;
i__21334_21585 = G__21595;
continue;
} else {
var temp__5823__auto___21596__$1 = cljs.core.seq(seq__21330_21582);
if(temp__5823__auto___21596__$1){
var seq__21330_21597__$1 = temp__5823__auto___21596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21330_21597__$1)){
var c__5673__auto___21598 = cljs.core.chunk_first(seq__21330_21597__$1);
var G__21599 = cljs.core.chunk_rest(seq__21330_21597__$1);
var G__21600 = c__5673__auto___21598;
var G__21601 = cljs.core.count(c__5673__auto___21598);
var G__21602 = (0);
seq__21330_21582 = G__21599;
chunk__21332_21583 = G__21600;
count__21333_21584 = G__21601;
i__21334_21585 = G__21602;
continue;
} else {
var map__21339_21603 = cljs.core.first(seq__21330_21597__$1);
var map__21339_21604__$1 = cljs.core.__destructure_map(map__21339_21603);
var task_21605 = map__21339_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21339_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21339_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21581) : fn_obj_21608.call(null,path,new_link_21581));


var G__21609 = cljs.core.next(seq__21330_21597__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21330_21582 = G__21609;
chunk__21332_21583 = G__21610;
count__21333_21584 = G__21611;
i__21334_21585 = G__21612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21579);
});})(seq__21277_21518,chunk__21281_21519,count__21282_21520,i__21283_21521,seq__21074,chunk__21076,count__21077,i__21078,new_link_21581,path_match_21580,node_21579,seq__21277_21573__$1,temp__5823__auto___21572,path,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21580], 0));

goog.dom.insertSiblingAfter(new_link_21581,node_21579);


var G__21613 = cljs.core.next(seq__21277_21573__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21277_21518 = G__21613;
chunk__21281_21519 = G__21614;
count__21282_21520 = G__21615;
i__21283_21521 = G__21616;
continue;
} else {
var G__21617 = cljs.core.next(seq__21277_21573__$1);
var G__21618 = null;
var G__21619 = (0);
var G__21620 = (0);
seq__21277_21518 = G__21617;
chunk__21281_21519 = G__21618;
count__21282_21520 = G__21619;
i__21283_21521 = G__21620;
continue;
}
} else {
var G__21621 = cljs.core.next(seq__21277_21573__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21277_21518 = G__21621;
chunk__21281_21519 = G__21622;
count__21282_21520 = G__21623;
i__21283_21521 = G__21624;
continue;
}
}
} else {
}
}
break;
}


var G__21625 = seq__21074;
var G__21626 = chunk__21076;
var G__21627 = count__21077;
var G__21628 = (i__21078 + (1));
seq__21074 = G__21625;
chunk__21076 = G__21626;
count__21077 = G__21627;
i__21078 = G__21628;
continue;
} else {
var G__21629 = seq__21074;
var G__21630 = chunk__21076;
var G__21631 = count__21077;
var G__21632 = (i__21078 + (1));
seq__21074 = G__21629;
chunk__21076 = G__21630;
count__21077 = G__21631;
i__21078 = G__21632;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21074);
if(temp__5823__auto__){
var seq__21074__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21074__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21074__$1);
var G__21633 = cljs.core.chunk_rest(seq__21074__$1);
var G__21634 = c__5673__auto__;
var G__21635 = cljs.core.count(c__5673__auto__);
var G__21636 = (0);
seq__21074 = G__21633;
chunk__21076 = G__21634;
count__21077 = G__21635;
i__21078 = G__21636;
continue;
} else {
var path = cljs.core.first(seq__21074__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21340_21637 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21344_21638 = null;
var count__21345_21639 = (0);
var i__21346_21640 = (0);
while(true){
if((i__21346_21640 < count__21345_21639)){
var node_21641 = chunk__21344_21638.cljs$core$IIndexed$_nth$arity$2(null,i__21346_21640);
if(cljs.core.not(node_21641.shadow$old)){
var path_match_21642 = shadow.cljs.devtools.client.browser.match_paths(node_21641.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21642)){
var new_link_21643 = (function (){var G__21377 = node_21641.cloneNode(true);
G__21377.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21642)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21377;
})();
(node_21641.shadow$old = true);

(new_link_21643.onload = ((function (seq__21340_21637,chunk__21344_21638,count__21345_21639,i__21346_21640,seq__21074,chunk__21076,count__21077,i__21078,new_link_21643,path_match_21642,node_21641,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21378_21644 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21380_21645 = null;
var count__21381_21646 = (0);
var i__21382_21647 = (0);
while(true){
if((i__21382_21647 < count__21381_21646)){
var map__21386_21648 = chunk__21380_21645.cljs$core$IIndexed$_nth$arity$2(null,i__21382_21647);
var map__21386_21649__$1 = cljs.core.__destructure_map(map__21386_21648);
var task_21650 = map__21386_21649__$1;
var fn_str_21651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21653 = goog.getObjectByName(fn_str_21651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21652)));

(fn_obj_21653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21653.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21653.call(null,path,new_link_21643));


var G__21654 = seq__21378_21644;
var G__21655 = chunk__21380_21645;
var G__21656 = count__21381_21646;
var G__21657 = (i__21382_21647 + (1));
seq__21378_21644 = G__21654;
chunk__21380_21645 = G__21655;
count__21381_21646 = G__21656;
i__21382_21647 = G__21657;
continue;
} else {
var temp__5823__auto___21658__$1 = cljs.core.seq(seq__21378_21644);
if(temp__5823__auto___21658__$1){
var seq__21378_21659__$1 = temp__5823__auto___21658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21378_21659__$1)){
var c__5673__auto___21660 = cljs.core.chunk_first(seq__21378_21659__$1);
var G__21661 = cljs.core.chunk_rest(seq__21378_21659__$1);
var G__21662 = c__5673__auto___21660;
var G__21663 = cljs.core.count(c__5673__auto___21660);
var G__21664 = (0);
seq__21378_21644 = G__21661;
chunk__21380_21645 = G__21662;
count__21381_21646 = G__21663;
i__21382_21647 = G__21664;
continue;
} else {
var map__21387_21665 = cljs.core.first(seq__21378_21659__$1);
var map__21387_21666__$1 = cljs.core.__destructure_map(map__21387_21665);
var task_21667 = map__21387_21666__$1;
var fn_str_21668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387_21666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387_21666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21670 = goog.getObjectByName(fn_str_21668,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21669)));

(fn_obj_21670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21670.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21670.call(null,path,new_link_21643));


var G__21671 = cljs.core.next(seq__21378_21659__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21378_21644 = G__21671;
chunk__21380_21645 = G__21672;
count__21381_21646 = G__21673;
i__21382_21647 = G__21674;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21641);
});})(seq__21340_21637,chunk__21344_21638,count__21345_21639,i__21346_21640,seq__21074,chunk__21076,count__21077,i__21078,new_link_21643,path_match_21642,node_21641,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21642], 0));

goog.dom.insertSiblingAfter(new_link_21643,node_21641);


var G__21675 = seq__21340_21637;
var G__21676 = chunk__21344_21638;
var G__21677 = count__21345_21639;
var G__21678 = (i__21346_21640 + (1));
seq__21340_21637 = G__21675;
chunk__21344_21638 = G__21676;
count__21345_21639 = G__21677;
i__21346_21640 = G__21678;
continue;
} else {
var G__21679 = seq__21340_21637;
var G__21680 = chunk__21344_21638;
var G__21681 = count__21345_21639;
var G__21682 = (i__21346_21640 + (1));
seq__21340_21637 = G__21679;
chunk__21344_21638 = G__21680;
count__21345_21639 = G__21681;
i__21346_21640 = G__21682;
continue;
}
} else {
var G__21683 = seq__21340_21637;
var G__21684 = chunk__21344_21638;
var G__21685 = count__21345_21639;
var G__21686 = (i__21346_21640 + (1));
seq__21340_21637 = G__21683;
chunk__21344_21638 = G__21684;
count__21345_21639 = G__21685;
i__21346_21640 = G__21686;
continue;
}
} else {
var temp__5823__auto___21687__$1 = cljs.core.seq(seq__21340_21637);
if(temp__5823__auto___21687__$1){
var seq__21340_21688__$1 = temp__5823__auto___21687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21340_21688__$1)){
var c__5673__auto___21689 = cljs.core.chunk_first(seq__21340_21688__$1);
var G__21690 = cljs.core.chunk_rest(seq__21340_21688__$1);
var G__21691 = c__5673__auto___21689;
var G__21692 = cljs.core.count(c__5673__auto___21689);
var G__21693 = (0);
seq__21340_21637 = G__21690;
chunk__21344_21638 = G__21691;
count__21345_21639 = G__21692;
i__21346_21640 = G__21693;
continue;
} else {
var node_21694 = cljs.core.first(seq__21340_21688__$1);
if(cljs.core.not(node_21694.shadow$old)){
var path_match_21695 = shadow.cljs.devtools.client.browser.match_paths(node_21694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21695)){
var new_link_21696 = (function (){var G__21393 = node_21694.cloneNode(true);
G__21393.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21695)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21393;
})();
(node_21694.shadow$old = true);

(new_link_21696.onload = ((function (seq__21340_21637,chunk__21344_21638,count__21345_21639,i__21346_21640,seq__21074,chunk__21076,count__21077,i__21078,new_link_21696,path_match_21695,node_21694,seq__21340_21688__$1,temp__5823__auto___21687__$1,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21394_21697 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21396_21698 = null;
var count__21397_21699 = (0);
var i__21398_21700 = (0);
while(true){
if((i__21398_21700 < count__21397_21699)){
var map__21402_21701 = chunk__21396_21698.cljs$core$IIndexed$_nth$arity$2(null,i__21398_21700);
var map__21402_21702__$1 = cljs.core.__destructure_map(map__21402_21701);
var task_21703 = map__21402_21702__$1;
var fn_str_21704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402_21702__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402_21702__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21706 = goog.getObjectByName(fn_str_21704,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21705)));

(fn_obj_21706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21706.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21706.call(null,path,new_link_21696));


var G__21707 = seq__21394_21697;
var G__21708 = chunk__21396_21698;
var G__21709 = count__21397_21699;
var G__21710 = (i__21398_21700 + (1));
seq__21394_21697 = G__21707;
chunk__21396_21698 = G__21708;
count__21397_21699 = G__21709;
i__21398_21700 = G__21710;
continue;
} else {
var temp__5823__auto___21711__$2 = cljs.core.seq(seq__21394_21697);
if(temp__5823__auto___21711__$2){
var seq__21394_21712__$1 = temp__5823__auto___21711__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21394_21712__$1)){
var c__5673__auto___21713 = cljs.core.chunk_first(seq__21394_21712__$1);
var G__21714 = cljs.core.chunk_rest(seq__21394_21712__$1);
var G__21715 = c__5673__auto___21713;
var G__21716 = cljs.core.count(c__5673__auto___21713);
var G__21717 = (0);
seq__21394_21697 = G__21714;
chunk__21396_21698 = G__21715;
count__21397_21699 = G__21716;
i__21398_21700 = G__21717;
continue;
} else {
var map__21403_21718 = cljs.core.first(seq__21394_21712__$1);
var map__21403_21719__$1 = cljs.core.__destructure_map(map__21403_21718);
var task_21720 = map__21403_21719__$1;
var fn_str_21721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403_21719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403_21719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21723 = goog.getObjectByName(fn_str_21721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21722)));

(fn_obj_21723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21723.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21723.call(null,path,new_link_21696));


var G__21724 = cljs.core.next(seq__21394_21712__$1);
var G__21725 = null;
var G__21726 = (0);
var G__21727 = (0);
seq__21394_21697 = G__21724;
chunk__21396_21698 = G__21725;
count__21397_21699 = G__21726;
i__21398_21700 = G__21727;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21694);
});})(seq__21340_21637,chunk__21344_21638,count__21345_21639,i__21346_21640,seq__21074,chunk__21076,count__21077,i__21078,new_link_21696,path_match_21695,node_21694,seq__21340_21688__$1,temp__5823__auto___21687__$1,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21695], 0));

goog.dom.insertSiblingAfter(new_link_21696,node_21694);


var G__21728 = cljs.core.next(seq__21340_21688__$1);
var G__21729 = null;
var G__21730 = (0);
var G__21731 = (0);
seq__21340_21637 = G__21728;
chunk__21344_21638 = G__21729;
count__21345_21639 = G__21730;
i__21346_21640 = G__21731;
continue;
} else {
var G__21732 = cljs.core.next(seq__21340_21688__$1);
var G__21733 = null;
var G__21734 = (0);
var G__21735 = (0);
seq__21340_21637 = G__21732;
chunk__21344_21638 = G__21733;
count__21345_21639 = G__21734;
i__21346_21640 = G__21735;
continue;
}
} else {
var G__21736 = cljs.core.next(seq__21340_21688__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21340_21637 = G__21736;
chunk__21344_21638 = G__21737;
count__21345_21639 = G__21738;
i__21346_21640 = G__21739;
continue;
}
}
} else {
}
}
break;
}


var G__21740 = cljs.core.next(seq__21074__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21074 = G__21740;
chunk__21076 = G__21741;
count__21077 = G__21742;
i__21078 = G__21743;
continue;
} else {
var G__21744 = cljs.core.next(seq__21074__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21074 = G__21744;
chunk__21076 = G__21745;
count__21077 = G__21746;
i__21078 = G__21747;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21410 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21410) : success.call(null,G__21410));
}catch (e21409){var e = e21409;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21414,success,fail){
var map__21415 = p__21414;
var map__21415__$1 = cljs.core.__destructure_map(map__21415);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21417 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21417) : success.call(null,G__21417));
}catch (e21416){var e = e21416;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21418,done,error){
var map__21419 = p__21418;
var map__21419__$1 = cljs.core.__destructure_map(map__21419);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21419__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21420,done,error){
var map__21421 = p__21420;
var map__21421__$1 = cljs.core.__destructure_map(map__21421);
var msg = map__21421__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21421__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21421__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21421__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21422){
var map__21423 = p__21422;
var map__21423__$1 = cljs.core.__destructure_map(map__21423);
var src = map__21423__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21423__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21424 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21424) : done.call(null,G__21424));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21425){
var map__21426 = p__21425;
var map__21426__$1 = cljs.core.__destructure_map(map__21426);
var msg__$1 = map__21426__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21427){var ex = e21427;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21429){
var map__21430 = p__21429;
var map__21430__$1 = cljs.core.__destructure_map(map__21430);
var env = map__21430__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21430__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21431){
var map__21432 = p__21431;
var map__21432__$1 = cljs.core.__destructure_map(map__21432);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21434){
var map__21435 = p__21434;
var map__21435__$1 = cljs.core.__destructure_map(map__21435);
var svc = map__21435__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
