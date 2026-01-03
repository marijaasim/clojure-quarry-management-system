goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_17932 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_17932(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_17933 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_17933(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_17934 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_17934(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_17935 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_17935(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_17936 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_17936(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17636){
var vec__17637 = p__17636;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)+"ms"+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5140__auto__ = delay;
if(cljs.core.truth_(and__5140__auto__)){
return (delay > (0));
} else {
return and__5140__auto__;
}
})())){
return (""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay)+"ms");
} else {
return null;
}
})()));
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_17937 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_17937(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_17938 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_17938(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_17939 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_17939(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_17940 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_17940(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__14861__auto__ = (0);
while(true){
if((i__14861__auto__ < n__5741__auto__)){
var map__17649_17941 = (self__.items[i__14861__auto__]);
var map__17649_17942__$1 = cljs.core.__destructure_map(map__17649_17941);
var el_17943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17649_17942__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_17944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17649_17942__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_17943,from_17944);

var G__17945 = (i__14861__auto__ + (1));
i__14861__auto__ = G__17945;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__14861__auto__ = (0);
while(true){
if((i__14861__auto__ < n__5741__auto__)){
var map__17663_17946 = (self__.items[i__14861__auto__]);
var map__17663_17947__$1 = cljs.core.__destructure_map(map__17663_17946);
var el_17948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17663_17947__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_17949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17663_17947__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_17950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17663_17947__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_17949["transition"] = transition_17950);

goog.style.setStyle(el_17948,to_17949);

var G__17951 = (i__14861__auto__ + (1));
i__14861__auto__ = G__17951;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__14861__auto__ = (0);
while(true){
if((i__14861__auto__ < n__5741__auto__)){
var map__17664_17952 = (self__.items[i__14861__auto__]);
var map__17664_17953__$1 = cljs.core.__destructure_map(map__17664_17952);
var el_17954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17664_17953__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_17955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17664_17953__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_17955["transition"] = null);

goog.style.setStyle(el_17954,toggles_17955);

var G__17956 = (i__14861__auto__ + (1));
i__14861__auto__ = G__17956;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k17666,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__17673 = k17666;
var G__17673__$1 = (((G__17673 instanceof cljs.core.Keyword))?G__17673.fqn:null);
switch (G__17673__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17666,else__5451__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__17674){
var vec__17675 = p__17674;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17665){
var self__ = this;
var G__17665__$1 = this;
return (new cljs.core.RecordIter((0),G__17665__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17667,other17668){
var self__ = this;
var this17667__$1 = this;
return (((!((other17668 == null)))) && ((((this17667__$1.constructor === other17668.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.el,other17668.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.from,other17668.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.to,other17668.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.toggles,other17668.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.transition,other17668.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17667__$1.__extmap,other17668.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k17666){
var self__ = this;
var this__5455__auto____$1 = this;
var G__17680 = k17666;
var G__17680__$1 = (((G__17680 instanceof cljs.core.Keyword))?G__17680.fqn:null);
switch (G__17680__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17666);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__17665){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__17681 = cljs.core.keyword_identical_QMARK_;
var expr__17682 = k__5457__auto__;
if(cljs.core.truth_((pred__17681.cljs$core$IFn$_invoke$arity$2 ? pred__17681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__17682) : pred__17681.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__17682)))){
return (new shadow.animate.AnimationStep(G__17665,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17681.cljs$core$IFn$_invoke$arity$2 ? pred__17681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__17682) : pred__17681.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__17682)))){
return (new shadow.animate.AnimationStep(self__.el,G__17665,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17681.cljs$core$IFn$_invoke$arity$2 ? pred__17681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__17682) : pred__17681.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__17682)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__17665,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17681.cljs$core$IFn$_invoke$arity$2 ? pred__17681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__17682) : pred__17681.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__17682)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__17665,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17681.cljs$core$IFn$_invoke$arity$2 ? pred__17681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__17682) : pred__17681.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__17682)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__17665,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__17665),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__17665){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__17665,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__17669){
var extmap__5490__auto__ = (function (){var G__17685 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17669,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__17669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17685);
} else {
return G__17685;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__17669),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__17669),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__17669),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__17669),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__17669),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$animate$setup_$_iter__17686(s__17687){
return (new cljs.core.LazySeq(null,(function (){
var s__17687__$1 = s__17687;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17687__$1);
if(temp__5823__auto__){
var s__17687__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17687__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17687__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17689 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17688 = (0);
while(true){
if((i__17688 < size__5627__auto__)){
var vec__17698 = cljs.core._nth(c__5626__auto__,i__17688);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(1),null);
cljs.core.chunk_append(b__17689,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__17959 = (i__17688 + (1));
i__17688 = G__17959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17689),shadow$animate$setup_$_iter__17686(cljs.core.chunk_rest(s__17687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17689),null);
}
} else {
var vec__17728 = cljs.core.first(s__17687__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__17686(cljs.core.rest(s__17687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__14728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14729__auto__ = (function (){var switch__14623__auto__ = (function (state_17739){
var state_val_17740 = (state_17739[(1)]);
if((state_val_17740 === (1))){
var inst_17733 = shadow.animate.get_duration(animator);
var inst_17734 = cljs.core.async.timeout(inst_17733);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17739__$1,(2),inst_17734);
} else {
if((state_val_17740 === (2))){
var inst_17736 = (state_17739[(2)]);
var inst_17737 = shadow.animate.finish_BANG_(animator);
var state_17739__$1 = (function (){var statearr_17741 = state_17739;
(statearr_17741[(7)] = inst_17736);

(statearr_17741[(8)] = inst_17737);

return statearr_17741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17739__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__14624__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__14624__auto____0 = (function (){
var statearr_17742 = [null,null,null,null,null,null,null,null,null];
(statearr_17742[(0)] = shadow$animate$continue_BANG__$_state_machine__14624__auto__);

(statearr_17742[(1)] = (1));

return statearr_17742;
});
var shadow$animate$continue_BANG__$_state_machine__14624__auto____1 = (function (state_17739){
while(true){
var ret_value__14625__auto__ = (function (){try{while(true){
var result__14626__auto__ = switch__14623__auto__(state_17739);
if(cljs.core.keyword_identical_QMARK_(result__14626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14626__auto__;
}
break;
}
}catch (e17743){var ex__14627__auto__ = e17743;
var statearr_17744_17960 = state_17739;
(statearr_17744_17960[(2)] = ex__14627__auto__);


if(cljs.core.seq((state_17739[(4)]))){
var statearr_17745_17961 = state_17739;
(statearr_17745_17961[(1)] = cljs.core.first((state_17739[(4)])));

} else {
throw ex__14627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17962 = state_17739;
state_17739 = G__17962;
continue;
} else {
return ret_value__14625__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__14624__auto__ = function(state_17739){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__14624__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__14624__auto____1.call(this,state_17739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__14624__auto____0;
shadow$animate$continue_BANG__$_state_machine__14624__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__14624__auto____1;
return shadow$animate$continue_BANG__$_state_machine__14624__auto__;
})()
})();
var state__14730__auto__ = (function (){var statearr_17747 = f__14729__auto__();
(statearr_17747[(6)] = c__14728__auto__);

return statearr_17747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14730__auto__);
}));

return c__14728__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17759 = (function (attr,from,to,timing,delay,meta17760){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta17760 = meta17760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17761,meta17760__$1){
var self__ = this;
var _17761__$1 = this;
return (new shadow.animate.t_shadow$animate17759(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta17760__$1));
}));

(shadow.animate.t_shadow$animate17759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17761){
var self__ = this;
var _17761__$1 = this;
return self__.meta17760;
}));

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate17759.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate17759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta17760","meta17760",729622830,null)], null);
}));

(shadow.animate.t_shadow$animate17759.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17759.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17759");

(shadow.animate.t_shadow$animate17759.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17759");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17759.
 */
shadow.animate.__GT_t_shadow$animate17759 = (function shadow$animate$__GT_t_shadow$animate17759(attr,from,to,timing,delay,meta17760){
return (new shadow.animate.t_shadow$animate17759(attr,from,to,timing,delay,meta17760));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__17752 = arguments.length;
switch (G__17752) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate17759(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17800 = (function (attr,from,to,meta17801){
this.attr = attr;
this.from = from;
this.to = to;
this.meta17801 = meta17801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17802,meta17801__$1){
var self__ = this;
var _17802__$1 = this;
return (new shadow.animate.t_shadow$animate17800(self__.attr,self__.from,self__.to,meta17801__$1));
}));

(shadow.animate.t_shadow$animate17800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17802){
var self__ = this;
var _17802__$1 = this;
return self__.meta17801;
}));

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17800.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta17801","meta17801",-980556658,null)], null);
}));

(shadow.animate.t_shadow$animate17800.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17800.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17800");

(shadow.animate.t_shadow$animate17800.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17800");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17800.
 */
shadow.animate.__GT_t_shadow$animate17800 = (function shadow$animate$__GT_t_shadow$animate17800(attr,from,to,meta17801){
return (new shadow.animate.t_shadow$animate17800(attr,from,to,meta17801));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate17800(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17819 = (function (attrs,meta17820){
this.attrs = attrs;
this.meta17820 = meta17820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17821,meta17820__$1){
var self__ = this;
var _17821__$1 = this;
return (new shadow.animate.t_shadow$animate17819(self__.attrs,meta17820__$1));
}));

(shadow.animate.t_shadow$animate17819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17821){
var self__ = this;
var _17821__$1 = this;
return self__.meta17820;
}));

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17819.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17820","meta17820",-1341691536,null)], null);
}));

(shadow.animate.t_shadow$animate17819.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17819.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17819");

(shadow.animate.t_shadow$animate17819.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17819");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17819.
 */
shadow.animate.__GT_t_shadow$animate17819 = (function shadow$animate$__GT_t_shadow$animate17819(attrs,meta17820){
return (new shadow.animate.t_shadow$animate17819(attrs,meta17820));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__17813 = arguments.length;
switch (G__17813) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate17819(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17858 = (function (attr,meta17859){
this.attr = attr;
this.meta17859 = meta17859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17860,meta17859__$1){
var self__ = this;
var _17860__$1 = this;
return (new shadow.animate.t_shadow$animate17858(self__.attr,meta17859__$1));
}));

(shadow.animate.t_shadow$animate17858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17860){
var self__ = this;
var _17860__$1 = this;
return self__.meta17859;
}));

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17858.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta17859","meta17859",-1385803910,null)], null);
}));

(shadow.animate.t_shadow$animate17858.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17858.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17858");

(shadow.animate.t_shadow$animate17858.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17858");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17858.
 */
shadow.animate.__GT_t_shadow$animate17858 = (function shadow$animate$__GT_t_shadow$animate17858(attr,meta17859){
return (new shadow.animate.t_shadow$animate17858(attr,meta17859));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate17858(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17912 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17913){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta17913 = meta17913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17914,meta17913__$1){
var self__ = this;
var _17914__$1 = this;
return (new shadow.animate.t_shadow$animate17912(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta17913__$1));
}));

(shadow.animate.t_shadow$animate17912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17914){
var self__ = this;
var _17914__$1 = this;
return self__.meta17913;
}));

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate17912.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate17912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta17913","meta17913",-2034743271,null)], null);
}));

(shadow.animate.t_shadow$animate17912.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17912.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17912");

(shadow.animate.t_shadow$animate17912.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17912");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17912.
 */
shadow.animate.__GT_t_shadow$animate17912 = (function shadow$animate$__GT_t_shadow$animate17912(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17913){
return (new shadow.animate.t_shadow$animate17912(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17913));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17915 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17916){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta17916 = meta17916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17917,meta17916__$1){
var self__ = this;
var _17917__$1 = this;
return (new shadow.animate.t_shadow$animate17915(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta17916__$1));
}));

(shadow.animate.t_shadow$animate17915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17917){
var self__ = this;
var _17917__$1 = this;
return self__.meta17916;
}));

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate17915.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate17915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta17916","meta17916",-1126603307,null)], null);
}));

(shadow.animate.t_shadow$animate17915.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17915.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17915");

(shadow.animate.t_shadow$animate17915.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17915");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17915.
 */
shadow.animate.__GT_t_shadow$animate17915 = (function shadow$animate$__GT_t_shadow$animate17915(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17916){
return (new shadow.animate.t_shadow$animate17915(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta17916));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17965 = arguments.length;
var i__5877__auto___17966 = (0);
while(true){
if((i__5877__auto___17966 < len__5876__auto___17965)){
args__5882__auto__.push((arguments[i__5877__auto___17966]));

var G__17967 = (i__5877__auto___17966 + (1));
i__5877__auto___17966 = G__17967;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5821__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var adef = temp__5821__auto__;
var G__17968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__17969 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__17970 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__17971 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__17972 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__17973 = cljs.core.rest(transitions__$1);
to = G__17968;
from = G__17969;
toggles = G__17970;
timings = G__17971;
delays = G__17972;
transitions__$1 = G__17973;
continue;
} else {
return (new shadow.animate.t_shadow$animate17915(transitions__$1,to,from,toggles,timings,delays,temp__5821__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq17911){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17911));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__17919 = arguments.length;
switch (G__17919) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__17921 = arguments.length;
switch (G__17921) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix)+"-transform"));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17924 = (function (from,to,timing,delay,meta17925){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta17925 = meta17925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17926,meta17925__$1){
var self__ = this;
var _17926__$1 = this;
return (new shadow.animate.t_shadow$animate17924(self__.from,self__.to,self__.timing,self__.delay,meta17925__$1));
}));

(shadow.animate.t_shadow$animate17924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17926){
var self__ = this;
var _17926__$1 = this;
return self__.meta17925;
}));

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateY("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from)+")")], null);
}));

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateY("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to)+")")], null);
}));

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17924.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate17924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta17925","meta17925",1065259854,null)], null);
}));

(shadow.animate.t_shadow$animate17924.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17924.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17924");

(shadow.animate.t_shadow$animate17924.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17924");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17924.
 */
shadow.animate.__GT_t_shadow$animate17924 = (function shadow$animate$__GT_t_shadow$animate17924(from,to,timing,delay,meta17925){
return (new shadow.animate.t_shadow$animate17924(from,to,timing,delay,meta17925));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__17923 = arguments.length;
switch (G__17923) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate17924(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate17929 = (function (from,to,timing,delay,meta17930){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta17930 = meta17930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate17929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17931,meta17930__$1){
var self__ = this;
var _17931__$1 = this;
return (new shadow.animate.t_shadow$animate17929(self__.from,self__.to,self__.timing,self__.delay,meta17930__$1));
}));

(shadow.animate.t_shadow$animate17929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17931){
var self__ = this;
var _17931__$1 = this;
return self__.meta17930;
}));

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateX("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from)+")")], null);
}));

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateX("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to)+")")], null);
}));

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate17929.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate17929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta17930","meta17930",-8708681,null)], null);
}));

(shadow.animate.t_shadow$animate17929.cljs$lang$type = true);

(shadow.animate.t_shadow$animate17929.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate17929");

(shadow.animate.t_shadow$animate17929.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate17929");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate17929.
 */
shadow.animate.__GT_t_shadow$animate17929 = (function shadow$animate$__GT_t_shadow$animate17929(from,to,timing,delay,meta17930){
return (new shadow.animate.t_shadow$animate17929(from,to,timing,delay,meta17930));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__17928 = arguments.length;
switch (G__17928) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate17929(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
