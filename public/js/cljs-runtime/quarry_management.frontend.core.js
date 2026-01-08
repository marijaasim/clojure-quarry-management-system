goog.provide('quarry_management.frontend.core');
quarry_management.frontend.core.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180));
quarry_management.frontend.core.menu = (function quarry_management$frontend$core$menu(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #ccc",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(quarry_management.frontend.core.current_page,new cljs.core.Keyword(null,"daily-extraction","daily-extraction",-1340264661));
})], null),"Daily Extraction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(quarry_management.frontend.core.current_page,new cljs.core.Keyword(null,"inventory","inventory",860201871));
})], null),"Inventory"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(quarry_management.frontend.core.current_page,new cljs.core.Keyword(null,"price","price",22129180));
})], null),"Price"], null)], null);
});
quarry_management.frontend.core.content = (function quarry_management$frontend$core$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"220px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),(function (){var G__12759 = cljs.core.deref(quarry_management.frontend.core.current_page);
var G__12759__$1 = (((G__12759 instanceof cljs.core.Keyword))?G__12759.fqn:null);
switch (G__12759__$1) {
case "price":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.price.page], null);

break;
case "inventory":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.inventory.page], null);

break;
case "daily-extraction":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.daily_extraction.page], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select a menu item"], null);

}
})()], null);
});
quarry_management.frontend.core.app = (function quarry_management$frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.core.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.core.content], null)], null);
});
if((typeof quarry_management !== 'undefined') && (typeof quarry_management.frontend !== 'undefined') && (typeof quarry_management.frontend.core !== 'undefined') && (typeof quarry_management.frontend.core.root !== 'undefined')){
} else {
quarry_management.frontend.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
quarry_management.frontend.core.init = (function quarry_management$frontend$core$init(){
console.log("INIT CALLED");

if(cljs.core.truth_(cljs.core.deref(quarry_management.frontend.core.root))){
} else {
var el_12762 = document.getElementById("app");
console.log("APP ELEMENT:",el_12762);

cljs.core.reset_BANG_(quarry_management.frontend.core.root,reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(el_12762));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(quarry_management.frontend.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quarry_management.frontend.core.app], null));
});
goog.exportSymbol('quarry_management.frontend.core.init', quarry_management.frontend.core.init);

//# sourceMappingURL=quarry_management.frontend.core.js.map
