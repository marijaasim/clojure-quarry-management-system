goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12422 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12422(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12423 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12423(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11850 = coll;
var G__11851 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11850,G__11851) : shadow.dom.lazy_native_coll_seq.call(null,G__11850,G__11851));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11859 = arguments.length;
switch (G__11859) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11872 = arguments.length;
switch (G__11872) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11876 = arguments.length;
switch (G__11876) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11884 = arguments.length;
switch (G__11884) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11888 = arguments.length;
switch (G__11888) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11895 = arguments.length;
switch (G__11895) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11899){if((e11899 instanceof Object)){
var e = e11899;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11899;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11900 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11901 = null;
var count__11902 = (0);
var i__11903 = (0);
while(true){
if((i__11903 < count__11902)){
var el = chunk__11901.cljs$core$IIndexed$_nth$arity$2(null,i__11903);
var handler_12455__$1 = ((function (seq__11900,chunk__11901,count__11902,i__11903,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11900,chunk__11901,count__11902,i__11903,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12455__$1);


var G__12456 = seq__11900;
var G__12457 = chunk__11901;
var G__12458 = count__11902;
var G__12459 = (i__11903 + (1));
seq__11900 = G__12456;
chunk__11901 = G__12457;
count__11902 = G__12458;
i__11903 = G__12459;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11900);
if(temp__5823__auto__){
var seq__11900__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11900__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11900__$1);
var G__12460 = cljs.core.chunk_rest(seq__11900__$1);
var G__12461 = c__5673__auto__;
var G__12462 = cljs.core.count(c__5673__auto__);
var G__12463 = (0);
seq__11900 = G__12460;
chunk__11901 = G__12461;
count__11902 = G__12462;
i__11903 = G__12463;
continue;
} else {
var el = cljs.core.first(seq__11900__$1);
var handler_12464__$1 = ((function (seq__11900,chunk__11901,count__11902,i__11903,el,seq__11900__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11900,chunk__11901,count__11902,i__11903,el,seq__11900__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12464__$1);


var G__12466 = cljs.core.next(seq__11900__$1);
var G__12467 = null;
var G__12468 = (0);
var G__12469 = (0);
seq__11900 = G__12466;
chunk__11901 = G__12467;
count__11902 = G__12468;
i__11903 = G__12469;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11925 = arguments.length;
switch (G__11925) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11929 = cljs.core.seq(events);
var chunk__11930 = null;
var count__11931 = (0);
var i__11932 = (0);
while(true){
if((i__11932 < count__11931)){
var vec__11941 = chunk__11930.cljs$core$IIndexed$_nth$arity$2(null,i__11932);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12476 = seq__11929;
var G__12477 = chunk__11930;
var G__12478 = count__11931;
var G__12479 = (i__11932 + (1));
seq__11929 = G__12476;
chunk__11930 = G__12477;
count__11931 = G__12478;
i__11932 = G__12479;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11929);
if(temp__5823__auto__){
var seq__11929__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11929__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11929__$1);
var G__12481 = cljs.core.chunk_rest(seq__11929__$1);
var G__12482 = c__5673__auto__;
var G__12483 = cljs.core.count(c__5673__auto__);
var G__12484 = (0);
seq__11929 = G__12481;
chunk__11930 = G__12482;
count__11931 = G__12483;
i__11932 = G__12484;
continue;
} else {
var vec__11944 = cljs.core.first(seq__11929__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12485 = cljs.core.next(seq__11929__$1);
var G__12486 = null;
var G__12487 = (0);
var G__12488 = (0);
seq__11929 = G__12485;
chunk__11930 = G__12486;
count__11931 = G__12487;
i__11932 = G__12488;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11948 = cljs.core.seq(styles);
var chunk__11949 = null;
var count__11950 = (0);
var i__11951 = (0);
while(true){
if((i__11951 < count__11950)){
var vec__11961 = chunk__11949.cljs$core$IIndexed$_nth$arity$2(null,i__11951);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12489 = seq__11948;
var G__12490 = chunk__11949;
var G__12491 = count__11950;
var G__12492 = (i__11951 + (1));
seq__11948 = G__12489;
chunk__11949 = G__12490;
count__11950 = G__12491;
i__11951 = G__12492;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11948);
if(temp__5823__auto__){
var seq__11948__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11948__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11948__$1);
var G__12499 = cljs.core.chunk_rest(seq__11948__$1);
var G__12500 = c__5673__auto__;
var G__12501 = cljs.core.count(c__5673__auto__);
var G__12502 = (0);
seq__11948 = G__12499;
chunk__11949 = G__12500;
count__11950 = G__12501;
i__11951 = G__12502;
continue;
} else {
var vec__11964 = cljs.core.first(seq__11948__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11964,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12504 = cljs.core.next(seq__11948__$1);
var G__12505 = null;
var G__12506 = (0);
var G__12507 = (0);
seq__11948 = G__12504;
chunk__11949 = G__12505;
count__11950 = G__12506;
i__11951 = G__12507;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11974_12508 = key;
var G__11974_12509__$1 = (((G__11974_12508 instanceof cljs.core.Keyword))?G__11974_12508.fqn:null);
switch (G__11974_12509__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12515 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_12515,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_12515,"aria-");
}
})())){
el.setAttribute(ks_12515,value);
} else {
(el[ks_12515] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11991){
var map__11992 = p__11991;
var map__11992__$1 = cljs.core.__destructure_map(map__11992);
var props = map__11992__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11992__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11993 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11999 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11999,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11999;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12002 = arguments.length;
switch (G__12002) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12011){
var vec__12012 = p__12011;
var seq__12013 = cljs.core.seq(vec__12012);
var first__12014 = cljs.core.first(seq__12013);
var seq__12013__$1 = cljs.core.next(seq__12013);
var nn = first__12014;
var first__12014__$1 = cljs.core.first(seq__12013__$1);
var seq__12013__$2 = cljs.core.next(seq__12013__$1);
var np = first__12014__$1;
var nc = seq__12013__$2;
var node = vec__12012;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12015 = nn;
var G__12016 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12015,G__12016) : create_fn.call(null,G__12015,G__12016));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12017 = nn;
var G__12018 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12017,G__12018) : create_fn.call(null,G__12017,G__12018));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12019 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(1),null);
var seq__12022_12528 = cljs.core.seq(node_children);
var chunk__12023_12529 = null;
var count__12024_12530 = (0);
var i__12025_12531 = (0);
while(true){
if((i__12025_12531 < count__12024_12530)){
var child_struct_12532 = chunk__12023_12529.cljs$core$IIndexed$_nth$arity$2(null,i__12025_12531);
var children_12533 = shadow.dom.dom_node(child_struct_12532);
if(cljs.core.seq_QMARK_(children_12533)){
var seq__12045_12534 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12533));
var chunk__12047_12535 = null;
var count__12048_12536 = (0);
var i__12049_12537 = (0);
while(true){
if((i__12049_12537 < count__12048_12536)){
var child_12538 = chunk__12047_12535.cljs$core$IIndexed$_nth$arity$2(null,i__12049_12537);
if(cljs.core.truth_(child_12538)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12538);


var G__12539 = seq__12045_12534;
var G__12540 = chunk__12047_12535;
var G__12541 = count__12048_12536;
var G__12542 = (i__12049_12537 + (1));
seq__12045_12534 = G__12539;
chunk__12047_12535 = G__12540;
count__12048_12536 = G__12541;
i__12049_12537 = G__12542;
continue;
} else {
var G__12543 = seq__12045_12534;
var G__12544 = chunk__12047_12535;
var G__12545 = count__12048_12536;
var G__12546 = (i__12049_12537 + (1));
seq__12045_12534 = G__12543;
chunk__12047_12535 = G__12544;
count__12048_12536 = G__12545;
i__12049_12537 = G__12546;
continue;
}
} else {
var temp__5823__auto___12547 = cljs.core.seq(seq__12045_12534);
if(temp__5823__auto___12547){
var seq__12045_12548__$1 = temp__5823__auto___12547;
if(cljs.core.chunked_seq_QMARK_(seq__12045_12548__$1)){
var c__5673__auto___12549 = cljs.core.chunk_first(seq__12045_12548__$1);
var G__12550 = cljs.core.chunk_rest(seq__12045_12548__$1);
var G__12551 = c__5673__auto___12549;
var G__12552 = cljs.core.count(c__5673__auto___12549);
var G__12553 = (0);
seq__12045_12534 = G__12550;
chunk__12047_12535 = G__12551;
count__12048_12536 = G__12552;
i__12049_12537 = G__12553;
continue;
} else {
var child_12554 = cljs.core.first(seq__12045_12548__$1);
if(cljs.core.truth_(child_12554)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12554);


var G__12556 = cljs.core.next(seq__12045_12548__$1);
var G__12557 = null;
var G__12558 = (0);
var G__12559 = (0);
seq__12045_12534 = G__12556;
chunk__12047_12535 = G__12557;
count__12048_12536 = G__12558;
i__12049_12537 = G__12559;
continue;
} else {
var G__12560 = cljs.core.next(seq__12045_12548__$1);
var G__12561 = null;
var G__12562 = (0);
var G__12563 = (0);
seq__12045_12534 = G__12560;
chunk__12047_12535 = G__12561;
count__12048_12536 = G__12562;
i__12049_12537 = G__12563;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12533);
}


var G__12564 = seq__12022_12528;
var G__12565 = chunk__12023_12529;
var G__12566 = count__12024_12530;
var G__12567 = (i__12025_12531 + (1));
seq__12022_12528 = G__12564;
chunk__12023_12529 = G__12565;
count__12024_12530 = G__12566;
i__12025_12531 = G__12567;
continue;
} else {
var temp__5823__auto___12571 = cljs.core.seq(seq__12022_12528);
if(temp__5823__auto___12571){
var seq__12022_12573__$1 = temp__5823__auto___12571;
if(cljs.core.chunked_seq_QMARK_(seq__12022_12573__$1)){
var c__5673__auto___12574 = cljs.core.chunk_first(seq__12022_12573__$1);
var G__12575 = cljs.core.chunk_rest(seq__12022_12573__$1);
var G__12576 = c__5673__auto___12574;
var G__12577 = cljs.core.count(c__5673__auto___12574);
var G__12578 = (0);
seq__12022_12528 = G__12575;
chunk__12023_12529 = G__12576;
count__12024_12530 = G__12577;
i__12025_12531 = G__12578;
continue;
} else {
var child_struct_12581 = cljs.core.first(seq__12022_12573__$1);
var children_12583 = shadow.dom.dom_node(child_struct_12581);
if(cljs.core.seq_QMARK_(children_12583)){
var seq__12059_12584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12583));
var chunk__12061_12585 = null;
var count__12062_12586 = (0);
var i__12063_12587 = (0);
while(true){
if((i__12063_12587 < count__12062_12586)){
var child_12589 = chunk__12061_12585.cljs$core$IIndexed$_nth$arity$2(null,i__12063_12587);
if(cljs.core.truth_(child_12589)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12589);


var G__12591 = seq__12059_12584;
var G__12592 = chunk__12061_12585;
var G__12593 = count__12062_12586;
var G__12594 = (i__12063_12587 + (1));
seq__12059_12584 = G__12591;
chunk__12061_12585 = G__12592;
count__12062_12586 = G__12593;
i__12063_12587 = G__12594;
continue;
} else {
var G__12595 = seq__12059_12584;
var G__12596 = chunk__12061_12585;
var G__12597 = count__12062_12586;
var G__12598 = (i__12063_12587 + (1));
seq__12059_12584 = G__12595;
chunk__12061_12585 = G__12596;
count__12062_12586 = G__12597;
i__12063_12587 = G__12598;
continue;
}
} else {
var temp__5823__auto___12599__$1 = cljs.core.seq(seq__12059_12584);
if(temp__5823__auto___12599__$1){
var seq__12059_12600__$1 = temp__5823__auto___12599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12059_12600__$1)){
var c__5673__auto___12602 = cljs.core.chunk_first(seq__12059_12600__$1);
var G__12604 = cljs.core.chunk_rest(seq__12059_12600__$1);
var G__12605 = c__5673__auto___12602;
var G__12606 = cljs.core.count(c__5673__auto___12602);
var G__12607 = (0);
seq__12059_12584 = G__12604;
chunk__12061_12585 = G__12605;
count__12062_12586 = G__12606;
i__12063_12587 = G__12607;
continue;
} else {
var child_12608 = cljs.core.first(seq__12059_12600__$1);
if(cljs.core.truth_(child_12608)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12608);


var G__12610 = cljs.core.next(seq__12059_12600__$1);
var G__12611 = null;
var G__12612 = (0);
var G__12613 = (0);
seq__12059_12584 = G__12610;
chunk__12061_12585 = G__12611;
count__12062_12586 = G__12612;
i__12063_12587 = G__12613;
continue;
} else {
var G__12614 = cljs.core.next(seq__12059_12600__$1);
var G__12615 = null;
var G__12616 = (0);
var G__12617 = (0);
seq__12059_12584 = G__12614;
chunk__12061_12585 = G__12615;
count__12062_12586 = G__12616;
i__12063_12587 = G__12617;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12583);
}


var G__12618 = cljs.core.next(seq__12022_12573__$1);
var G__12619 = null;
var G__12620 = (0);
var G__12621 = (0);
seq__12022_12528 = G__12618;
chunk__12023_12529 = G__12619;
count__12024_12530 = G__12620;
i__12025_12531 = G__12621;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12074 = cljs.core.seq(node);
var chunk__12075 = null;
var count__12076 = (0);
var i__12077 = (0);
while(true){
if((i__12077 < count__12076)){
var n = chunk__12075.cljs$core$IIndexed$_nth$arity$2(null,i__12077);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12634 = seq__12074;
var G__12635 = chunk__12075;
var G__12636 = count__12076;
var G__12637 = (i__12077 + (1));
seq__12074 = G__12634;
chunk__12075 = G__12635;
count__12076 = G__12636;
i__12077 = G__12637;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12074);
if(temp__5823__auto__){
var seq__12074__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12074__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12074__$1);
var G__12645 = cljs.core.chunk_rest(seq__12074__$1);
var G__12646 = c__5673__auto__;
var G__12647 = cljs.core.count(c__5673__auto__);
var G__12648 = (0);
seq__12074 = G__12645;
chunk__12075 = G__12646;
count__12076 = G__12647;
i__12077 = G__12648;
continue;
} else {
var n = cljs.core.first(seq__12074__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12650 = cljs.core.next(seq__12074__$1);
var G__12651 = null;
var G__12652 = (0);
var G__12653 = (0);
seq__12074 = G__12650;
chunk__12075 = G__12651;
count__12076 = G__12652;
i__12077 = G__12653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12082 = arguments.length;
switch (G__12082) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12084 = arguments.length;
switch (G__12084) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12091 = arguments.length;
switch (G__12091) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12690 = arguments.length;
var i__5877__auto___12691 = (0);
while(true){
if((i__5877__auto___12691 < len__5876__auto___12690)){
args__5882__auto__.push((arguments[i__5877__auto___12691]));

var G__12692 = (i__5877__auto___12691 + (1));
i__5877__auto___12691 = G__12692;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12100_12693 = cljs.core.seq(nodes);
var chunk__12101_12694 = null;
var count__12102_12695 = (0);
var i__12103_12696 = (0);
while(true){
if((i__12103_12696 < count__12102_12695)){
var node_12697 = chunk__12101_12694.cljs$core$IIndexed$_nth$arity$2(null,i__12103_12696);
fragment.appendChild(shadow.dom._to_dom(node_12697));


var G__12698 = seq__12100_12693;
var G__12699 = chunk__12101_12694;
var G__12700 = count__12102_12695;
var G__12701 = (i__12103_12696 + (1));
seq__12100_12693 = G__12698;
chunk__12101_12694 = G__12699;
count__12102_12695 = G__12700;
i__12103_12696 = G__12701;
continue;
} else {
var temp__5823__auto___12702 = cljs.core.seq(seq__12100_12693);
if(temp__5823__auto___12702){
var seq__12100_12703__$1 = temp__5823__auto___12702;
if(cljs.core.chunked_seq_QMARK_(seq__12100_12703__$1)){
var c__5673__auto___12704 = cljs.core.chunk_first(seq__12100_12703__$1);
var G__12705 = cljs.core.chunk_rest(seq__12100_12703__$1);
var G__12706 = c__5673__auto___12704;
var G__12707 = cljs.core.count(c__5673__auto___12704);
var G__12708 = (0);
seq__12100_12693 = G__12705;
chunk__12101_12694 = G__12706;
count__12102_12695 = G__12707;
i__12103_12696 = G__12708;
continue;
} else {
var node_12709 = cljs.core.first(seq__12100_12703__$1);
fragment.appendChild(shadow.dom._to_dom(node_12709));


var G__12710 = cljs.core.next(seq__12100_12703__$1);
var G__12711 = null;
var G__12712 = (0);
var G__12713 = (0);
seq__12100_12693 = G__12710;
chunk__12101_12694 = G__12711;
count__12102_12695 = G__12712;
i__12103_12696 = G__12713;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12097){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12097));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12109_12714 = cljs.core.seq(scripts);
var chunk__12110_12715 = null;
var count__12111_12716 = (0);
var i__12112_12717 = (0);
while(true){
if((i__12112_12717 < count__12111_12716)){
var vec__12120_12718 = chunk__12110_12715.cljs$core$IIndexed$_nth$arity$2(null,i__12112_12717);
var script_tag_12719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12120_12718,(0),null);
var script_body_12720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12120_12718,(1),null);
eval(script_body_12720);


var G__12721 = seq__12109_12714;
var G__12722 = chunk__12110_12715;
var G__12723 = count__12111_12716;
var G__12724 = (i__12112_12717 + (1));
seq__12109_12714 = G__12721;
chunk__12110_12715 = G__12722;
count__12111_12716 = G__12723;
i__12112_12717 = G__12724;
continue;
} else {
var temp__5823__auto___12725 = cljs.core.seq(seq__12109_12714);
if(temp__5823__auto___12725){
var seq__12109_12726__$1 = temp__5823__auto___12725;
if(cljs.core.chunked_seq_QMARK_(seq__12109_12726__$1)){
var c__5673__auto___12727 = cljs.core.chunk_first(seq__12109_12726__$1);
var G__12728 = cljs.core.chunk_rest(seq__12109_12726__$1);
var G__12729 = c__5673__auto___12727;
var G__12730 = cljs.core.count(c__5673__auto___12727);
var G__12731 = (0);
seq__12109_12714 = G__12728;
chunk__12110_12715 = G__12729;
count__12111_12716 = G__12730;
i__12112_12717 = G__12731;
continue;
} else {
var vec__12129_12732 = cljs.core.first(seq__12109_12726__$1);
var script_tag_12733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129_12732,(0),null);
var script_body_12735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129_12732,(1),null);
eval(script_body_12735);


var G__12759 = cljs.core.next(seq__12109_12726__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__12109_12714 = G__12759;
chunk__12110_12715 = G__12760;
count__12111_12716 = G__12761;
i__12112_12717 = G__12762;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12132){
var vec__12133 = p__12132;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12133,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12133,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12138 = arguments.length;
switch (G__12138) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12148 = cljs.core.seq(style_keys);
var chunk__12149 = null;
var count__12150 = (0);
var i__12151 = (0);
while(true){
if((i__12151 < count__12150)){
var it = chunk__12149.cljs$core$IIndexed$_nth$arity$2(null,i__12151);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12791 = seq__12148;
var G__12792 = chunk__12149;
var G__12793 = count__12150;
var G__12794 = (i__12151 + (1));
seq__12148 = G__12791;
chunk__12149 = G__12792;
count__12150 = G__12793;
i__12151 = G__12794;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12148);
if(temp__5823__auto__){
var seq__12148__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12148__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12148__$1);
var G__12795 = cljs.core.chunk_rest(seq__12148__$1);
var G__12796 = c__5673__auto__;
var G__12797 = cljs.core.count(c__5673__auto__);
var G__12798 = (0);
seq__12148 = G__12795;
chunk__12149 = G__12796;
count__12150 = G__12797;
i__12151 = G__12798;
continue;
} else {
var it = cljs.core.first(seq__12148__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12801 = cljs.core.next(seq__12148__$1);
var G__12802 = null;
var G__12803 = (0);
var G__12804 = (0);
seq__12148 = G__12801;
chunk__12149 = G__12802;
count__12150 = G__12803;
i__12151 = G__12804;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12160,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12164 = k12160;
var G__12164__$1 = (((G__12164 instanceof cljs.core.Keyword))?G__12164.fqn:null);
switch (G__12164__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12160,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12167){
var vec__12168 = p__12167;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12168,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12168,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12159){
var self__ = this;
var G__12159__$1 = this;
return (new cljs.core.RecordIter((0),G__12159__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12161,other12162){
var self__ = this;
var this12161__$1 = this;
return (((!((other12162 == null)))) && ((((this12161__$1.constructor === other12162.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12161__$1.x,other12162.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12161__$1.y,other12162.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12161__$1.__extmap,other12162.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12160){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12174 = k12160;
var G__12174__$1 = (((G__12174 instanceof cljs.core.Keyword))?G__12174.fqn:null);
switch (G__12174__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12160);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12159){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12175 = cljs.core.keyword_identical_QMARK_;
var expr__12176 = k__5457__auto__;
if(cljs.core.truth_((pred__12175.cljs$core$IFn$_invoke$arity$2 ? pred__12175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12176) : pred__12175.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12176)))){
return (new shadow.dom.Coordinate(G__12159,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12175.cljs$core$IFn$_invoke$arity$2 ? pred__12175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12176) : pred__12175.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12176)))){
return (new shadow.dom.Coordinate(self__.x,G__12159,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12159),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12159){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12159,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12163){
var extmap__5490__auto__ = (function (){var G__12179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12163,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12163)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12179);
} else {
return G__12179;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12163),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12163),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12183,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12192 = k12183;
var G__12192__$1 = (((G__12192 instanceof cljs.core.Keyword))?G__12192.fqn:null);
switch (G__12192__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12183,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12193){
var vec__12194 = p__12193;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12194,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12194,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12182){
var self__ = this;
var G__12182__$1 = this;
return (new cljs.core.RecordIter((0),G__12182__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12184,other12185){
var self__ = this;
var this12184__$1 = this;
return (((!((other12185 == null)))) && ((((this12184__$1.constructor === other12185.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12184__$1.w,other12185.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12184__$1.h,other12185.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12184__$1.__extmap,other12185.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12183){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12200 = k12183;
var G__12200__$1 = (((G__12200 instanceof cljs.core.Keyword))?G__12200.fqn:null);
switch (G__12200__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12183);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12182){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12201 = cljs.core.keyword_identical_QMARK_;
var expr__12202 = k__5457__auto__;
if(cljs.core.truth_((pred__12201.cljs$core$IFn$_invoke$arity$2 ? pred__12201.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12202) : pred__12201.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12202)))){
return (new shadow.dom.Size(G__12182,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12201.cljs$core$IFn$_invoke$arity$2 ? pred__12201.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12202) : pred__12201.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12202)))){
return (new shadow.dom.Size(self__.w,G__12182,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12182),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12182){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12182,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12186){
var extmap__5490__auto__ = (function (){var G__12208 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12186,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12186)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12208);
} else {
return G__12208;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12186),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12186),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__12916 = (i + (1));
var G__12917 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12916;
ret = G__12917;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12213){
var vec__12214 = p__12213;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12219 = arguments.length;
switch (G__12219) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12949 = ps;
var G__12950 = (i + (1));
el__$1 = G__12949;
i = G__12950;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12264 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12267_12960 = cljs.core.seq(props);
var chunk__12268_12961 = null;
var count__12269_12962 = (0);
var i__12270_12963 = (0);
while(true){
if((i__12270_12963 < count__12269_12962)){
var vec__12307_12965 = chunk__12268_12961.cljs$core$IIndexed$_nth$arity$2(null,i__12270_12963);
var k_12966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12307_12965,(0),null);
var v_12967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12307_12965,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12966);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12966),v_12967);


var G__12968 = seq__12267_12960;
var G__12969 = chunk__12268_12961;
var G__12970 = count__12269_12962;
var G__12971 = (i__12270_12963 + (1));
seq__12267_12960 = G__12968;
chunk__12268_12961 = G__12969;
count__12269_12962 = G__12970;
i__12270_12963 = G__12971;
continue;
} else {
var temp__5823__auto___12972 = cljs.core.seq(seq__12267_12960);
if(temp__5823__auto___12972){
var seq__12267_12974__$1 = temp__5823__auto___12972;
if(cljs.core.chunked_seq_QMARK_(seq__12267_12974__$1)){
var c__5673__auto___12975 = cljs.core.chunk_first(seq__12267_12974__$1);
var G__12977 = cljs.core.chunk_rest(seq__12267_12974__$1);
var G__12978 = c__5673__auto___12975;
var G__12979 = cljs.core.count(c__5673__auto___12975);
var G__12980 = (0);
seq__12267_12960 = G__12977;
chunk__12268_12961 = G__12978;
count__12269_12962 = G__12979;
i__12270_12963 = G__12980;
continue;
} else {
var vec__12311_12982 = cljs.core.first(seq__12267_12974__$1);
var k_12983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12311_12982,(0),null);
var v_12984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12311_12982,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_12983);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12983),v_12984);


var G__12988 = cljs.core.next(seq__12267_12974__$1);
var G__12989 = null;
var G__12990 = (0);
var G__12991 = (0);
seq__12267_12960 = G__12988;
chunk__12268_12961 = G__12989;
count__12269_12962 = G__12990;
i__12270_12963 = G__12991;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12325 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12325,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12325,(1),null);
var seq__12328_12995 = cljs.core.seq(node_children);
var chunk__12330_12996 = null;
var count__12331_12997 = (0);
var i__12332_12998 = (0);
while(true){
if((i__12332_12998 < count__12331_12997)){
var child_struct_13001 = chunk__12330_12996.cljs$core$IIndexed$_nth$arity$2(null,i__12332_12998);
if((!((child_struct_13001 == null)))){
if(typeof child_struct_13001 === 'string'){
var text_13004 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13004)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13001)));
} else {
var children_13007 = shadow.dom.svg_node(child_struct_13001);
if(cljs.core.seq_QMARK_(children_13007)){
var seq__12372_13009 = cljs.core.seq(children_13007);
var chunk__12374_13010 = null;
var count__12375_13011 = (0);
var i__12376_13012 = (0);
while(true){
if((i__12376_13012 < count__12375_13011)){
var child_13013 = chunk__12374_13010.cljs$core$IIndexed$_nth$arity$2(null,i__12376_13012);
if(cljs.core.truth_(child_13013)){
node.appendChild(child_13013);


var G__13014 = seq__12372_13009;
var G__13015 = chunk__12374_13010;
var G__13016 = count__12375_13011;
var G__13017 = (i__12376_13012 + (1));
seq__12372_13009 = G__13014;
chunk__12374_13010 = G__13015;
count__12375_13011 = G__13016;
i__12376_13012 = G__13017;
continue;
} else {
var G__13019 = seq__12372_13009;
var G__13020 = chunk__12374_13010;
var G__13021 = count__12375_13011;
var G__13022 = (i__12376_13012 + (1));
seq__12372_13009 = G__13019;
chunk__12374_13010 = G__13020;
count__12375_13011 = G__13021;
i__12376_13012 = G__13022;
continue;
}
} else {
var temp__5823__auto___13026 = cljs.core.seq(seq__12372_13009);
if(temp__5823__auto___13026){
var seq__12372_13027__$1 = temp__5823__auto___13026;
if(cljs.core.chunked_seq_QMARK_(seq__12372_13027__$1)){
var c__5673__auto___13028 = cljs.core.chunk_first(seq__12372_13027__$1);
var G__13029 = cljs.core.chunk_rest(seq__12372_13027__$1);
var G__13030 = c__5673__auto___13028;
var G__13031 = cljs.core.count(c__5673__auto___13028);
var G__13032 = (0);
seq__12372_13009 = G__13029;
chunk__12374_13010 = G__13030;
count__12375_13011 = G__13031;
i__12376_13012 = G__13032;
continue;
} else {
var child_13033 = cljs.core.first(seq__12372_13027__$1);
if(cljs.core.truth_(child_13033)){
node.appendChild(child_13033);


var G__13034 = cljs.core.next(seq__12372_13027__$1);
var G__13035 = null;
var G__13036 = (0);
var G__13037 = (0);
seq__12372_13009 = G__13034;
chunk__12374_13010 = G__13035;
count__12375_13011 = G__13036;
i__12376_13012 = G__13037;
continue;
} else {
var G__13039 = cljs.core.next(seq__12372_13027__$1);
var G__13040 = null;
var G__13041 = (0);
var G__13042 = (0);
seq__12372_13009 = G__13039;
chunk__12374_13010 = G__13040;
count__12375_13011 = G__13041;
i__12376_13012 = G__13042;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13007);
}
}


var G__13044 = seq__12328_12995;
var G__13045 = chunk__12330_12996;
var G__13046 = count__12331_12997;
var G__13047 = (i__12332_12998 + (1));
seq__12328_12995 = G__13044;
chunk__12330_12996 = G__13045;
count__12331_12997 = G__13046;
i__12332_12998 = G__13047;
continue;
} else {
var G__13049 = seq__12328_12995;
var G__13050 = chunk__12330_12996;
var G__13051 = count__12331_12997;
var G__13052 = (i__12332_12998 + (1));
seq__12328_12995 = G__13049;
chunk__12330_12996 = G__13050;
count__12331_12997 = G__13051;
i__12332_12998 = G__13052;
continue;
}
} else {
var temp__5823__auto___13058 = cljs.core.seq(seq__12328_12995);
if(temp__5823__auto___13058){
var seq__12328_13060__$1 = temp__5823__auto___13058;
if(cljs.core.chunked_seq_QMARK_(seq__12328_13060__$1)){
var c__5673__auto___13061 = cljs.core.chunk_first(seq__12328_13060__$1);
var G__13062 = cljs.core.chunk_rest(seq__12328_13060__$1);
var G__13063 = c__5673__auto___13061;
var G__13064 = cljs.core.count(c__5673__auto___13061);
var G__13065 = (0);
seq__12328_12995 = G__13062;
chunk__12330_12996 = G__13063;
count__12331_12997 = G__13064;
i__12332_12998 = G__13065;
continue;
} else {
var child_struct_13072 = cljs.core.first(seq__12328_13060__$1);
if((!((child_struct_13072 == null)))){
if(typeof child_struct_13072 === 'string'){
var text_13073 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13073)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13072)));
} else {
var children_13074 = shadow.dom.svg_node(child_struct_13072);
if(cljs.core.seq_QMARK_(children_13074)){
var seq__12393_13075 = cljs.core.seq(children_13074);
var chunk__12395_13076 = null;
var count__12396_13077 = (0);
var i__12397_13078 = (0);
while(true){
if((i__12397_13078 < count__12396_13077)){
var child_13080 = chunk__12395_13076.cljs$core$IIndexed$_nth$arity$2(null,i__12397_13078);
if(cljs.core.truth_(child_13080)){
node.appendChild(child_13080);


var G__13083 = seq__12393_13075;
var G__13084 = chunk__12395_13076;
var G__13085 = count__12396_13077;
var G__13086 = (i__12397_13078 + (1));
seq__12393_13075 = G__13083;
chunk__12395_13076 = G__13084;
count__12396_13077 = G__13085;
i__12397_13078 = G__13086;
continue;
} else {
var G__13089 = seq__12393_13075;
var G__13090 = chunk__12395_13076;
var G__13091 = count__12396_13077;
var G__13092 = (i__12397_13078 + (1));
seq__12393_13075 = G__13089;
chunk__12395_13076 = G__13090;
count__12396_13077 = G__13091;
i__12397_13078 = G__13092;
continue;
}
} else {
var temp__5823__auto___13093__$1 = cljs.core.seq(seq__12393_13075);
if(temp__5823__auto___13093__$1){
var seq__12393_13094__$1 = temp__5823__auto___13093__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12393_13094__$1)){
var c__5673__auto___13096 = cljs.core.chunk_first(seq__12393_13094__$1);
var G__13097 = cljs.core.chunk_rest(seq__12393_13094__$1);
var G__13098 = c__5673__auto___13096;
var G__13099 = cljs.core.count(c__5673__auto___13096);
var G__13100 = (0);
seq__12393_13075 = G__13097;
chunk__12395_13076 = G__13098;
count__12396_13077 = G__13099;
i__12397_13078 = G__13100;
continue;
} else {
var child_13106 = cljs.core.first(seq__12393_13094__$1);
if(cljs.core.truth_(child_13106)){
node.appendChild(child_13106);


var G__13107 = cljs.core.next(seq__12393_13094__$1);
var G__13108 = null;
var G__13109 = (0);
var G__13110 = (0);
seq__12393_13075 = G__13107;
chunk__12395_13076 = G__13108;
count__12396_13077 = G__13109;
i__12397_13078 = G__13110;
continue;
} else {
var G__13112 = cljs.core.next(seq__12393_13094__$1);
var G__13113 = null;
var G__13114 = (0);
var G__13115 = (0);
seq__12393_13075 = G__13112;
chunk__12395_13076 = G__13113;
count__12396_13077 = G__13114;
i__12397_13078 = G__13115;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13074);
}
}


var G__13116 = cljs.core.next(seq__12328_13060__$1);
var G__13117 = null;
var G__13118 = (0);
var G__13119 = (0);
seq__12328_12995 = G__13116;
chunk__12330_12996 = G__13117;
count__12331_12997 = G__13118;
i__12332_12998 = G__13119;
continue;
} else {
var G__13121 = cljs.core.next(seq__12328_13060__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__12328_12995 = G__13121;
chunk__12330_12996 = G__13122;
count__12331_12997 = G__13123;
i__12332_12998 = G__13124;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___13130 = arguments.length;
var i__5877__auto___13131 = (0);
while(true){
if((i__5877__auto___13131 < len__5876__auto___13130)){
args__5882__auto__.push((arguments[i__5877__auto___13131]));

var G__13132 = (i__5877__auto___13131 + (1));
i__5877__auto___13131 = G__13132;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12413){
var G__12414 = cljs.core.first(seq12413);
var seq12413__$1 = cljs.core.next(seq12413);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12414,seq12413__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
