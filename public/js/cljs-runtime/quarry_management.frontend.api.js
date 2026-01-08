goog.provide('quarry_management.frontend.api');
quarry_management.frontend.api.api_url = "http://localhost:3000";
quarry_management.frontend.api.parse_json = (function quarry_management$frontend$api$parse_json(text){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
quarry_management.frontend.api.fetch_json = (function quarry_management$frontend$api$fetch_json(url,opts){
return fetch(url,cljs.core.clj__GT_js(opts)).then((function (p1__12447_SHARP_){
if(cljs.core.truth_(p1__12447_SHARP_.ok)){
return p1__12447_SHARP_.text().then(quarry_management.frontend.api.parse_json);
} else {
throw (new Error((""+"HTTP "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12447_SHARP_.status))));
}
}));
});
quarry_management.frontend.api.get_blocks = (function quarry_management$frontend$api$get_blocks(callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/blocks"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)).then(callback).catch((function (p1__12448_SHARP_){
return console.error("Error fetching blocks:",p1__12448_SHARP_);
}));
});
quarry_management.frontend.api.get_block_details = (function quarry_management$frontend$api$get_block_details(id,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/blocks/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/details"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)).then(callback).catch((function (p1__12449_SHARP_){
return console.error("Error fetching block details:",p1__12449_SHARP_);
}));
});
quarry_management.frontend.api.create_block = (function quarry_management$frontend$api$create_block(block_data,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/blocks"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(block_data))], null)).then(callback).catch((function (p1__12450_SHARP_){
return console.error("Error creating block:",p1__12450_SHARP_);
}));
});
quarry_management.frontend.api.update_block = (function quarry_management$frontend$api$update_block(data,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/blocks/update"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null)).then(callback).catch((function (p1__12451_SHARP_){
return console.error("Update block error:",p1__12451_SHARP_);
}));
});
quarry_management.frontend.api.delete_block = (function quarry_management$frontend$api$delete_block(id,on_success){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/blocks/delete"),({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(({"id": id}))})).then((function (res){
if(cljs.core.truth_(res.ok)){
return (on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null));
} else {
return null;
}
})).catch((function (err){
return console.error("Delete error:",err);
}));
});
quarry_management.frontend.api.get_prices = (function quarry_management$frontend$api$get_prices(callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/prices"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)).then(callback).catch((function (p1__12452_SHARP_){
return console.error("Error fetching prices:",p1__12452_SHARP_);
}));
});
quarry_management.frontend.api.calculate_price = (function quarry_management$frontend$api$calculate_price(class$,category,weight,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/calculate-price"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null)))], null)).then(callback).catch((function (p1__12453_SHARP_){
return console.error("Error calculating price:",p1__12453_SHARP_);
}));
});
quarry_management.frontend.api.calculate_revenue_from_to = (function quarry_management$frontend$api$calculate_revenue_from_to(from,to,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/revenue-from-to"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"from": from, "to": to}))], null)).then(callback).catch((function (p1__12454_SHARP_){
return console.error("Error calculating revenue:",p1__12454_SHARP_);
}));
});
quarry_management.frontend.api.describe_block = (function quarry_management$frontend$api$describe_block(data,callback){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/blocks/describe"),({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(cljs.core.clj__GT_js(data))})).then((function (p1__12455_SHARP_){
return p1__12455_SHARP_.json();
})).then((function (p1__12456_SHARP_){
var G__12458 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__12456_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__12458) : callback.call(null,G__12458));
})).catch((function (p1__12457_SHARP_){
return console.error("Describe block error:",p1__12457_SHARP_);
}));
});
quarry_management.frontend.api.create_daily_extraction = (function quarry_management$frontend$api$create_daily_extraction(data,callback){
return quarry_management.frontend.api.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quarry_management.frontend.api.api_url)+"/api/daily-extraction/create"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"}),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null)).then(callback).catch((function (p1__12459_SHARP_){
return console.error("Create daily extraction error:",p1__12459_SHARP_);
}));
});

//# sourceMappingURL=quarry_management.frontend.api.js.map
