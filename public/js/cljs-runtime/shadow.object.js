goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_17568 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._id[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._id["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_17568(this$);
}
});

var shadow$object$IObject$_type$dyn_17569 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._type[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._type["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_17569(this$);
}
});

var shadow$object$IObject$_data$dyn_17570 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._data[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._data["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_17570(this$);
}
});

var shadow$object$IObject$_update$dyn_17572 = (function (this$,update_fn){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._update[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5499__auto__.call(null,this$,update_fn));
} else {
var m__5497__auto__ = (shadow.object._update["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5497__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_17572(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_17574 = (function (this$,cause){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5499__auto__.call(null,this$,cause));
} else {
var m__5497__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5497__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_17574(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__16954 = arguments.length;
switch (G__16954) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5142__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error((""+"Assert failed: "+"can only test objects"+"\n"+"(satisfies? IObject obj)")));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5823__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5823__auto__)){
var oid = temp__5823__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5823__auto__)){
var parent_id = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__17584 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__17584;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17006_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__17006_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__17011 = arguments.length;
switch (G__17011) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17022_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__17022_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__17029){
var map__17030 = p__17029;
var map__17030__$1 = cljs.core.__destructure_map(map__17030);
var oref = map__17030__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17030__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__17037 = arguments.length;
switch (G__17037) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17034_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__17034_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5821__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5821__auto__)){
var obj = temp__5821__auto__;
return obj;
} else {
var temp__5823__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__17596 = parent;
dom = G__17596;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17597 = arguments.length;
var i__5877__auto___17598 = (0);
while(true){
if((i__5877__auto___17598 < len__5876__auto___17597)){
args__5882__auto__.push((arguments[i__5877__auto___17598]));

var G__17599 = (i__5877__auto___17598 + (1));
i__5877__auto___17598 = G__17599;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5823__auto__)){
var reactions_to_trigger = temp__5823__auto__;
var seq__17069 = cljs.core.seq(reactions_to_trigger);
var chunk__17070 = null;
var count__17071 = (0);
var i__17072 = (0);
while(true){
if((i__17072 < count__17071)){
var rfn = chunk__17070.cljs$core$IIndexed$_nth$arity$2(null,i__17072);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__17600 = seq__17069;
var G__17601 = chunk__17070;
var G__17602 = count__17071;
var G__17603 = (i__17072 + (1));
seq__17069 = G__17600;
chunk__17070 = G__17601;
count__17071 = G__17602;
i__17072 = G__17603;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__17069);
if(temp__5823__auto____$1){
var seq__17069__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17069__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17069__$1);
var G__17604 = cljs.core.chunk_rest(seq__17069__$1);
var G__17605 = c__5673__auto__;
var G__17606 = cljs.core.count(c__5673__auto__);
var G__17607 = (0);
seq__17069 = G__17604;
chunk__17070 = G__17605;
count__17071 = G__17606;
i__17072 = G__17607;
continue;
} else {
var rfn = cljs.core.first(seq__17069__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__17608 = cljs.core.next(seq__17069__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17069 = G__17608;
chunk__17070 = G__17609;
count__17071 = G__17610;
i__17072 = G__17611;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq17058){
var G__17059 = cljs.core.first(seq17058);
var seq17058__$1 = cljs.core.next(seq17058);
var G__17060 = cljs.core.first(seq17058__$1);
var seq17058__$2 = cljs.core.next(seq17058__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17059,G__17060,seq17058__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__17093_17612 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__17094_17613 = null;
var count__17095_17614 = (0);
var i__17096_17615 = (0);
while(true){
if((i__17096_17615 < count__17095_17614)){
var child_17616 = chunk__17094_17613.cljs$core$IIndexed$_nth$arity$2(null,i__17096_17615);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_17616,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_17616,ev,notify_fn));


var G__17617 = seq__17093_17612;
var G__17618 = chunk__17094_17613;
var G__17619 = count__17095_17614;
var G__17620 = (i__17096_17615 + (1));
seq__17093_17612 = G__17617;
chunk__17094_17613 = G__17618;
count__17095_17614 = G__17619;
i__17096_17615 = G__17620;
continue;
} else {
var temp__5823__auto___17621 = cljs.core.seq(seq__17093_17612);
if(temp__5823__auto___17621){
var seq__17093_17622__$1 = temp__5823__auto___17621;
if(cljs.core.chunked_seq_QMARK_(seq__17093_17622__$1)){
var c__5673__auto___17623 = cljs.core.chunk_first(seq__17093_17622__$1);
var G__17624 = cljs.core.chunk_rest(seq__17093_17622__$1);
var G__17625 = c__5673__auto___17623;
var G__17626 = cljs.core.count(c__5673__auto___17623);
var G__17627 = (0);
seq__17093_17612 = G__17624;
chunk__17094_17613 = G__17625;
count__17095_17614 = G__17626;
i__17096_17615 = G__17627;
continue;
} else {
var child_17628 = cljs.core.first(seq__17093_17622__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_17628,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_17628,ev,notify_fn));


var G__17629 = cljs.core.next(seq__17093_17622__$1);
var G__17630 = null;
var G__17631 = (0);
var G__17632 = (0);
seq__17093_17612 = G__17629;
chunk__17094_17613 = G__17630;
count__17095_17614 = G__17631;
i__17096_17615 = G__17632;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17633 = arguments.length;
var i__5877__auto___17634 = (0);
while(true){
if((i__5877__auto___17634 < len__5876__auto___17633)){
args__5882__auto__.push((arguments[i__5877__auto___17634]));

var G__17635 = (i__5877__auto___17634 + (1));
i__5877__auto___17634 = G__17635;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq17111){
var G__17112 = cljs.core.first(seq17111);
var seq17111__$1 = cljs.core.next(seq17111);
var G__17113 = cljs.core.first(seq17111__$1);
var seq17111__$2 = cljs.core.next(seq17111__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17112,G__17113,seq17111__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17640 = arguments.length;
var i__5877__auto___17641 = (0);
while(true){
if((i__5877__auto___17641 < len__5876__auto___17640)){
args__5882__auto__.push((arguments[i__5877__auto___17641]));

var G__17642 = (i__5877__auto___17641 + (1));
i__5877__auto___17641 = G__17642;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__17643 = shadow.object.get_parent(current);
current = G__17643;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq17121){
var G__17122 = cljs.core.first(seq17121);
var seq17121__$1 = cljs.core.next(seq17121);
var G__17123 = cljs.core.first(seq17121__$1);
var seq17121__$2 = cljs.core.next(seq17121__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17122,G__17123,seq17121__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17644 = arguments.length;
var i__5877__auto___17645 = (0);
while(true){
if((i__5877__auto___17645 < len__5876__auto___17644)){
args__5882__auto__.push((arguments[i__5877__auto___17645]));

var G__17646 = (i__5877__auto___17645 + (1));
i__5877__auto___17645 = G__17646;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw (""+"update! expects a fn as second arg, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))));
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq17140){
var G__17141 = cljs.core.first(seq17140);
var seq17140__$1 = cljs.core.next(seq17140);
var G__17142 = cljs.core.first(seq17140__$1);
var seq17140__$2 = cljs.core.next(seq17140__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17141,G__17142,seq17140__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5821__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5821__auto__)){
var custom_remove = temp__5821__auto__;
var G__17174 = this$;
var G__17175 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__17174,G__17175) : custom_remove.call(null,G__17174,G__17175));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__17178 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__17179 = null;
var count__17180 = (0);
var i__17181 = (0);
while(true){
if((i__17181 < count__17180)){
var vec__17201 = chunk__17179.cljs$core$IIndexed$_nth$arity$2(null,i__17181);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17201,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17201,(1),null);
var ev_def = vec__17201;
if((handler == null)){
throw (""+"ev with nil handler "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))));
} else {
}

var handler_17648__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__17178,chunk__17179,count__17180,i__17181,vec__17201,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__17178,chunk__17179,count__17180,i__17181,vec__17201,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__17178,chunk__17179,count__17180,i__17181,handler_17648__$1,vec__17201,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_17648__$1.cljs$core$IFn$_invoke$arity$3 ? handler_17648__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_17648__$1.call(null,oref,e,el));
});})(seq__17178,chunk__17179,count__17180,i__17181,handler_17648__$1,vec__17201,ev,handler,ev_def))
);


var G__17650 = seq__17178;
var G__17651 = chunk__17179;
var G__17652 = count__17180;
var G__17653 = (i__17181 + (1));
seq__17178 = G__17650;
chunk__17179 = G__17651;
count__17180 = G__17652;
i__17181 = G__17653;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17178);
if(temp__5823__auto__){
var seq__17178__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17178__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17178__$1);
var G__17654 = cljs.core.chunk_rest(seq__17178__$1);
var G__17655 = c__5673__auto__;
var G__17656 = cljs.core.count(c__5673__auto__);
var G__17657 = (0);
seq__17178 = G__17654;
chunk__17179 = G__17655;
count__17180 = G__17656;
i__17181 = G__17657;
continue;
} else {
var vec__17204 = cljs.core.first(seq__17178__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17204,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17204,(1),null);
var ev_def = vec__17204;
if((handler == null)){
throw (""+"ev with nil handler "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))));
} else {
}

var handler_17658__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__17178,chunk__17179,count__17180,i__17181,vec__17204,ev,handler,ev_def,seq__17178__$1,temp__5823__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__17178,chunk__17179,count__17180,i__17181,vec__17204,ev,handler,ev_def,seq__17178__$1,temp__5823__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__17178,chunk__17179,count__17180,i__17181,handler_17658__$1,vec__17204,ev,handler,ev_def,seq__17178__$1,temp__5823__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_17658__$1.cljs$core$IFn$_invoke$arity$3 ? handler_17658__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_17658__$1.call(null,oref,e,el));
});})(seq__17178,chunk__17179,count__17180,i__17181,handler_17658__$1,vec__17204,ev,handler,ev_def,seq__17178__$1,temp__5823__auto__))
);


var G__17659 = cljs.core.next(seq__17178__$1);
var G__17660 = null;
var G__17661 = (0);
var G__17662 = (0);
seq__17178 = G__17659;
chunk__17179 = G__17660;
count__17180 = G__17661;
i__17181 = G__17662;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__17210){
var vec__17211 = p__17210;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17211,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17211,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = event;
if(cljs.core.truth_(and__5140__auto__)){
return handler;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17670 = arguments.length;
var i__5877__auto___17671 = (0);
while(true){
if((i__5877__auto___17671 < len__5876__auto___17670)){
args__5882__auto__.push((arguments[i__5877__auto___17671]));

var G__17672 = (i__5877__auto___17671 + (1));
i__5877__auto___17671 = G__17672;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw (""+"invalid object definition "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)))+" args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn((""+"object already defined "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e17250){if((e17250 instanceof Object)){
var e = e17250;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e17250;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq17237){
var G__17238 = cljs.core.first(seq17237);
var seq17237__$1 = cljs.core.next(seq17237);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17238,seq17237__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__17256 = arguments.length;
switch (G__17256) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__17257 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__17257) : shadow.dom.build.call(null,G__17257));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k17267,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__17283 = k17267;
var G__17283__$1 = (((G__17283 instanceof cljs.core.Keyword))?G__17283.fqn:null);
switch (G__17283__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17267,else__5451__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__17288){
var vec__17289 = p__17288;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17289,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17289,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.object.Watch{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17266){
var self__ = this;
var G__17266__$1 = this;
return (new cljs.core.RecordIter((0),G__17266__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17268,other17269){
var self__ = this;
var this17268__$1 = this;
return (((!((other17269 == null)))) && ((((this17268__$1.constructor === other17269.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17268__$1.key,other17269.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17268__$1.handler,other17269.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17268__$1.__extmap,other17269.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k17267){
var self__ = this;
var this__5455__auto____$1 = this;
var G__17313 = k17267;
var G__17313__$1 = (((G__17313 instanceof cljs.core.Keyword))?G__17313.fqn:null);
switch (G__17313__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17267);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__17266){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__17318 = cljs.core.keyword_identical_QMARK_;
var expr__17319 = k__5457__auto__;
if(cljs.core.truth_((pred__17318.cljs$core$IFn$_invoke$arity$2 ? pred__17318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__17319) : pred__17318.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__17319)))){
return (new shadow.object.Watch(G__17266,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17318.cljs$core$IFn$_invoke$arity$2 ? pred__17318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__17319) : pred__17318.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__17319)))){
return (new shadow.object.Watch(self__.key,G__17266,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__17266),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__17266){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__17266,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__17271){
var extmap__5490__auto__ = (function (){var G__17334 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17271,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__17271)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17334);
} else {
return G__17334;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__17271),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__17271),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,(""+"#<ObjectRef {:id "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)+", :type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type)+"}>"));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17349_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__17349_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__17365 = cljs.core.seq(self__.watches);
var chunk__17366 = null;
var count__17367 = (0);
var i__17368 = (0);
while(true){
if((i__17368 < count__17367)){
var map__17382 = chunk__17366.cljs$core$IIndexed$_nth$arity$2(null,i__17368);
var map__17382__$1 = cljs.core.__destructure_map(map__17382);
var watch = map__17382__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17382__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17382__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__17690 = seq__17365;
var G__17691 = chunk__17366;
var G__17692 = count__17367;
var G__17693 = (i__17368 + (1));
seq__17365 = G__17690;
chunk__17366 = G__17691;
count__17367 = G__17692;
i__17368 = G__17693;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__17365);
if(temp__5823__auto__){
var seq__17365__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17365__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17365__$1);
var G__17694 = cljs.core.chunk_rest(seq__17365__$1);
var G__17695 = c__5673__auto__;
var G__17696 = cljs.core.count(c__5673__auto__);
var G__17697 = (0);
seq__17365 = G__17694;
chunk__17366 = G__17695;
count__17367 = G__17696;
i__17368 = G__17697;
continue;
} else {
var map__17383 = cljs.core.first(seq__17365__$1);
var map__17383__$1 = cljs.core.__destructure_map(map__17383);
var watch = map__17383__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__17702 = cljs.core.next(seq__17365__$1);
var G__17703 = null;
var G__17704 = (0);
var G__17705 = (0);
seq__17365 = G__17702;
chunk__17366 = G__17703;
count__17367 = G__17704;
i__17368 = G__17705;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__17384_17706 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__17385_17707 = null;
var count__17386_17708 = (0);
var i__17387_17709 = (0);
while(true){
if((i__17387_17709 < count__17386_17708)){
var child_17710 = chunk__17385_17707.cljs$core$IIndexed$_nth$arity$2(null,i__17387_17709);
shadow.object._destroy_BANG_(child_17710,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__17711 = seq__17384_17706;
var G__17712 = chunk__17385_17707;
var G__17713 = count__17386_17708;
var G__17714 = (i__17387_17709 + (1));
seq__17384_17706 = G__17711;
chunk__17385_17707 = G__17712;
count__17386_17708 = G__17713;
i__17387_17709 = G__17714;
continue;
} else {
var temp__5823__auto___17715 = cljs.core.seq(seq__17384_17706);
if(temp__5823__auto___17715){
var seq__17384_17716__$1 = temp__5823__auto___17715;
if(cljs.core.chunked_seq_QMARK_(seq__17384_17716__$1)){
var c__5673__auto___17717 = cljs.core.chunk_first(seq__17384_17716__$1);
var G__17718 = cljs.core.chunk_rest(seq__17384_17716__$1);
var G__17719 = c__5673__auto___17717;
var G__17720 = cljs.core.count(c__5673__auto___17717);
var G__17721 = (0);
seq__17384_17706 = G__17718;
chunk__17385_17707 = G__17719;
count__17386_17708 = G__17720;
i__17387_17709 = G__17721;
continue;
} else {
var child_17722 = cljs.core.first(seq__17384_17716__$1);
shadow.object._destroy_BANG_(child_17722,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__17723 = cljs.core.next(seq__17384_17716__$1);
var G__17724 = null;
var G__17725 = (0);
var G__17726 = (0);
seq__17384_17706 = G__17723;
chunk__17385_17707 = G__17724;
count__17386_17708 = G__17725;
i__17387_17709 = G__17726;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_17727 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_17727 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_17727);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__17401 = arguments.length;
switch (G__17401) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__17412 = arguments.length;
switch (G__17412) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17748 = arguments.length;
var i__5877__auto___17749 = (0);
while(true){
if((i__5877__auto___17749 < len__5876__auto___17748)){
args__5882__auto__.push((arguments[i__5877__auto___17749]));

var G__17750 = (i__5877__auto___17749 + (1));
i__5877__auto___17749 = G__17750;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"cannot create unknown child type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_17753 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5821__auto___17754 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5821__auto___17754)){
var dom_17755 = temp__5821__auto___17754;
shadow.dom.set_data(dom_17755,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_17755,dom_events_17753);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_17755], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_17755], 0));
} else {
var temp__5823__auto___17756 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___17756)){
var dom_fn_17757 = temp__5823__auto___17756;
var dom_17758 = (function (){var G__17448 = (dom_fn_17757.cljs$core$IFn$_invoke$arity$2 ? dom_fn_17757.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_17757.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__17448) : shadow.dom.build.call(null,G__17448));
})();
shadow.dom.set_data(dom_17758,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_17758], 0));

shadow.object.bind_dom_events(oref,dom_17758,dom_events_17753);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_17758], 0));
} else {
}
}

var temp__5823__auto___17762 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___17762)){
var watches_17763 = temp__5823__auto___17762;
var seq__17453_17764 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_17763));
var chunk__17454_17765 = null;
var count__17455_17766 = (0);
var i__17456_17767 = (0);
while(true){
if((i__17456_17767 < count__17455_17766)){
var vec__17471_17768 = chunk__17454_17765.cljs$core$IIndexed$_nth$arity$2(null,i__17456_17767);
var attr_17769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17471_17768,(0),null);
var handler_17770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17471_17768,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_17769,((function (seq__17453_17764,chunk__17454_17765,count__17455_17766,i__17456_17767,vec__17471_17768,attr_17769,handler_17770,watches_17763,temp__5823__auto___17762,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_17770.cljs$core$IFn$_invoke$arity$3 ? handler_17770.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_17770.call(null,oref,old,new$));
});})(seq__17453_17764,chunk__17454_17765,count__17455_17766,i__17456_17767,vec__17471_17768,attr_17769,handler_17770,watches_17763,temp__5823__auto___17762,oid,parent,result_chan,odef,obj,oref))
);


var G__17771 = seq__17453_17764;
var G__17772 = chunk__17454_17765;
var G__17773 = count__17455_17766;
var G__17774 = (i__17456_17767 + (1));
seq__17453_17764 = G__17771;
chunk__17454_17765 = G__17772;
count__17455_17766 = G__17773;
i__17456_17767 = G__17774;
continue;
} else {
var temp__5823__auto___17775__$1 = cljs.core.seq(seq__17453_17764);
if(temp__5823__auto___17775__$1){
var seq__17453_17776__$1 = temp__5823__auto___17775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17453_17776__$1)){
var c__5673__auto___17777 = cljs.core.chunk_first(seq__17453_17776__$1);
var G__17778 = cljs.core.chunk_rest(seq__17453_17776__$1);
var G__17779 = c__5673__auto___17777;
var G__17780 = cljs.core.count(c__5673__auto___17777);
var G__17781 = (0);
seq__17453_17764 = G__17778;
chunk__17454_17765 = G__17779;
count__17455_17766 = G__17780;
i__17456_17767 = G__17781;
continue;
} else {
var vec__17481_17782 = cljs.core.first(seq__17453_17776__$1);
var attr_17783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17481_17782,(0),null);
var handler_17784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17481_17782,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_17783,((function (seq__17453_17764,chunk__17454_17765,count__17455_17766,i__17456_17767,vec__17481_17782,attr_17783,handler_17784,seq__17453_17776__$1,temp__5823__auto___17775__$1,watches_17763,temp__5823__auto___17762,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_17784.cljs$core$IFn$_invoke$arity$3 ? handler_17784.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_17784.call(null,oref,old,new$));
});})(seq__17453_17764,chunk__17454_17765,count__17455_17766,i__17456_17767,vec__17481_17782,attr_17783,handler_17784,seq__17453_17776__$1,temp__5823__auto___17775__$1,watches_17763,temp__5823__auto___17762,oid,parent,result_chan,odef,obj,oref))
);


var G__17785 = cljs.core.next(seq__17453_17776__$1);
var G__17786 = null;
var G__17787 = (0);
var G__17788 = (0);
seq__17453_17764 = G__17785;
chunk__17454_17765 = G__17786;
count__17455_17766 = G__17787;
i__17456_17767 = G__17788;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq17431){
var G__17432 = cljs.core.first(seq17431);
var seq17431__$1 = cljs.core.next(seq17431);
var G__17433 = cljs.core.first(seq17431__$1);
var seq17431__$2 = cljs.core.next(seq17431__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17432,G__17433,seq17431__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__17492 = arguments.length;
switch (G__17492) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__17487_SHARP_){
var G__17496 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__17487_SHARP_) : node_gen.call(null,p1__17487_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__17496) : shadow.dom.build.call(null,G__17496));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__17505_17790 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__17507_17791 = null;
var count__17508_17792 = (0);
var i__17509_17793 = (0);
while(true){
if((i__17509_17793 < count__17508_17792)){
var obj_17794 = chunk__17507_17791.cljs$core$IIndexed$_nth$arity$2(null,i__17509_17793);
var obj_17795__$1 = shadow.object.get_from_dom(obj_17794);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_17795__$1);


var G__17796 = seq__17505_17790;
var G__17797 = chunk__17507_17791;
var G__17798 = count__17508_17792;
var G__17799 = (i__17509_17793 + (1));
seq__17505_17790 = G__17796;
chunk__17507_17791 = G__17797;
count__17508_17792 = G__17798;
i__17509_17793 = G__17799;
continue;
} else {
var temp__5823__auto___17803 = cljs.core.seq(seq__17505_17790);
if(temp__5823__auto___17803){
var seq__17505_17804__$1 = temp__5823__auto___17803;
if(cljs.core.chunked_seq_QMARK_(seq__17505_17804__$1)){
var c__5673__auto___17805 = cljs.core.chunk_first(seq__17505_17804__$1);
var G__17806 = cljs.core.chunk_rest(seq__17505_17804__$1);
var G__17807 = c__5673__auto___17805;
var G__17808 = cljs.core.count(c__5673__auto___17805);
var G__17809 = (0);
seq__17505_17790 = G__17806;
chunk__17507_17791 = G__17807;
count__17508_17792 = G__17808;
i__17509_17793 = G__17809;
continue;
} else {
var obj_17810 = cljs.core.first(seq__17505_17804__$1);
var obj_17811__$1 = shadow.object.get_from_dom(obj_17810);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_17811__$1);


var G__17814 = cljs.core.next(seq__17505_17804__$1);
var G__17815 = null;
var G__17816 = (0);
var G__17817 = (0);
seq__17505_17790 = G__17814;
chunk__17507_17791 = G__17815;
count__17508_17792 = G__17816;
i__17509_17793 = G__17817;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__17514 = arguments.length;
switch (G__17514) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__17512_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__17512_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__17515){
var vec__17516 = p__17515;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__17519_17822 = cljs.core.seq((function (){var G__17524 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__17524) : coll_transform.call(null,G__17524));
})());
var chunk__17520_17823 = null;
var count__17521_17824 = (0);
var i__17522_17825 = (0);
while(true){
if((i__17522_17825 < count__17521_17824)){
var item_17826 = chunk__17520_17823.cljs$core$IIndexed$_nth$arity$2(null,i__17522_17825);
shadow.object.dom_enter(coll_dom,make_item_fn(item_17826));


var G__17827 = seq__17519_17822;
var G__17828 = chunk__17520_17823;
var G__17829 = count__17521_17824;
var G__17830 = (i__17522_17825 + (1));
seq__17519_17822 = G__17827;
chunk__17520_17823 = G__17828;
count__17521_17824 = G__17829;
i__17522_17825 = G__17830;
continue;
} else {
var temp__5823__auto___17831 = cljs.core.seq(seq__17519_17822);
if(temp__5823__auto___17831){
var seq__17519_17832__$1 = temp__5823__auto___17831;
if(cljs.core.chunked_seq_QMARK_(seq__17519_17832__$1)){
var c__5673__auto___17833 = cljs.core.chunk_first(seq__17519_17832__$1);
var G__17834 = cljs.core.chunk_rest(seq__17519_17832__$1);
var G__17835 = c__5673__auto___17833;
var G__17836 = cljs.core.count(c__5673__auto___17833);
var G__17837 = (0);
seq__17519_17822 = G__17834;
chunk__17520_17823 = G__17835;
count__17521_17824 = G__17836;
i__17522_17825 = G__17837;
continue;
} else {
var item_17838 = cljs.core.first(seq__17519_17832__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_17838));


var G__17839 = cljs.core.next(seq__17519_17832__$1);
var G__17840 = null;
var G__17841 = (0);
var G__17842 = (0);
seq__17519_17822 = G__17839;
chunk__17520_17823 = G__17840;
count__17521_17824 = G__17841;
i__17522_17825 = G__17842;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(count_new,count_children);
var n__5741__auto___17843 = count_children__$1;
var idx_17844 = (0);
while(true){
if((idx_17844 < n__5741__auto___17843)){
var cn_17845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_17844);
var cc_17846 = shadow.object.get_from_dom(cn_17845);
var ckey_17847 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_17846);
var cval_17848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_17846,item_key);
var vec__17525_17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_17844);
var nkey_17850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525_17849,(0),null);
var nval_17851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525_17849,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_17847,nkey_17850)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_17848,nval_17851)))){
} else {
var new_obj_17852 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_17850,nval_17851], null));
shadow.dom.replace_node(cn_17845,new_obj_17852);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_17846);

shadow.object.notify_tree_BANG_(new_obj_17852,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__17853 = (idx_17844 + (1));
idx_17844 = G__17853;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__17528_17854 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__17529_17855 = null;
var count__17530_17856 = (0);
var i__17531_17857 = (0);
while(true){
if((i__17531_17857 < count__17530_17856)){
var item_17861 = chunk__17529_17855.cljs$core$IIndexed$_nth$arity$2(null,i__17531_17857);
shadow.object.dom_enter(coll_dom,make_item_fn(item_17861));


var G__17862 = seq__17528_17854;
var G__17863 = chunk__17529_17855;
var G__17864 = count__17530_17856;
var G__17865 = (i__17531_17857 + (1));
seq__17528_17854 = G__17862;
chunk__17529_17855 = G__17863;
count__17530_17856 = G__17864;
i__17531_17857 = G__17865;
continue;
} else {
var temp__5823__auto___17866 = cljs.core.seq(seq__17528_17854);
if(temp__5823__auto___17866){
var seq__17528_17867__$1 = temp__5823__auto___17866;
if(cljs.core.chunked_seq_QMARK_(seq__17528_17867__$1)){
var c__5673__auto___17868 = cljs.core.chunk_first(seq__17528_17867__$1);
var G__17869 = cljs.core.chunk_rest(seq__17528_17867__$1);
var G__17870 = c__5673__auto___17868;
var G__17871 = cljs.core.count(c__5673__auto___17868);
var G__17872 = (0);
seq__17528_17854 = G__17869;
chunk__17529_17855 = G__17870;
count__17530_17856 = G__17871;
i__17531_17857 = G__17872;
continue;
} else {
var item_17873 = cljs.core.first(seq__17528_17867__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_17873));


var G__17874 = cljs.core.next(seq__17528_17867__$1);
var G__17875 = null;
var G__17876 = (0);
var G__17877 = (0);
seq__17528_17854 = G__17874;
chunk__17529_17855 = G__17875;
count__17530_17856 = G__17876;
i__17531_17857 = G__17877;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return path;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__17532 = "inspect!";
var G__17533 = shadow.object._id(oref);
var G__17534 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref)));
var G__17535 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__17532,G__17533,G__17534,G__17535) : shadow.object.info.call(null,G__17532,G__17533,G__17534,G__17535));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__17536_17878 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__17537_17879 = null;
var count__17538_17880 = (0);
var i__17539_17881 = (0);
while(true){
if((i__17539_17881 < count__17538_17880)){
var vec__17554_17882 = chunk__17537_17879.cljs$core$IIndexed$_nth$arity$2(null,i__17539_17881);
var id_17883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17554_17882,(0),null);
var oref_17884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17554_17882,(1),null);
var G__17557_17885 = "dump";
var G__17558_17886 = id_17883;
var G__17559_17887 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_17884)], 0));
var G__17560_17888 = cljs.core.deref(shadow.object._data(oref_17884));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__17557_17885,G__17558_17886,G__17559_17887,G__17560_17888) : shadow.object.info.call(null,G__17557_17885,G__17558_17886,G__17559_17887,G__17560_17888));


var G__17889 = seq__17536_17878;
var G__17890 = chunk__17537_17879;
var G__17891 = count__17538_17880;
var G__17892 = (i__17539_17881 + (1));
seq__17536_17878 = G__17889;
chunk__17537_17879 = G__17890;
count__17538_17880 = G__17891;
i__17539_17881 = G__17892;
continue;
} else {
var temp__5823__auto___17893 = cljs.core.seq(seq__17536_17878);
if(temp__5823__auto___17893){
var seq__17536_17894__$1 = temp__5823__auto___17893;
if(cljs.core.chunked_seq_QMARK_(seq__17536_17894__$1)){
var c__5673__auto___17895 = cljs.core.chunk_first(seq__17536_17894__$1);
var G__17896 = cljs.core.chunk_rest(seq__17536_17894__$1);
var G__17897 = c__5673__auto___17895;
var G__17898 = cljs.core.count(c__5673__auto___17895);
var G__17899 = (0);
seq__17536_17878 = G__17896;
chunk__17537_17879 = G__17897;
count__17538_17880 = G__17898;
i__17539_17881 = G__17899;
continue;
} else {
var vec__17561_17900 = cljs.core.first(seq__17536_17894__$1);
var id_17901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17561_17900,(0),null);
var oref_17902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17561_17900,(1),null);
var G__17564_17903 = "dump";
var G__17565_17904 = id_17901;
var G__17566_17905 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_17902)], 0));
var G__17567_17906 = cljs.core.deref(shadow.object._data(oref_17902));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__17564_17903,G__17565_17904,G__17566_17905,G__17567_17906) : shadow.object.info.call(null,G__17564_17903,G__17565_17904,G__17566_17905,G__17567_17906));


var G__17907 = cljs.core.next(seq__17536_17894__$1);
var G__17908 = null;
var G__17909 = (0);
var G__17910 = (0);
seq__17536_17878 = G__17907;
chunk__17537_17879 = G__17908;
count__17538_17880 = G__17909;
i__17539_17881 = G__17910;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
