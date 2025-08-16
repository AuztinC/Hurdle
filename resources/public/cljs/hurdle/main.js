// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('hurdle.main');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('reagent.dom');
hurdle.main.app = (function hurdle$main$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null)], null);
});
hurdle.main.main = (function hurdle$main$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hurdle.main.app], null),c3kit.wire.js.element_by_id.call(null,"app"));
});
goog.exportSymbol('hurdle.main.main', hurdle.main.main);

//# sourceMappingURL=main.js.map
