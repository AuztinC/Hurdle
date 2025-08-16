// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('hurdle.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('hurdle.main');
var description__10059__auto___10624 = speclj.components.new_description.call(null,"main cljs",false,"hurdle.main-spec");
var _STAR_parent_description_STAR__orig_val__10614_10625 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10615_10626 = description__10059__auto___10624;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10615_10626);

try{var seq__10616_10627 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624){
return (function (it__10433__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10622 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10623 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10623);

try{return it__10433__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10622);
}});})(_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hurdle.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624){
return (function (){
var value__10563__auto__ = "#main-container";
var node__10564__auto__ = c3kit.wire.spec_helper.select.call(null,value__10563__auto__);
if(cljs.core.truth_(node__10564__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10563__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10169__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10169__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10614_10625,_STAR_parent_description_STAR__temp_val__10615_10626,description__10059__auto___10624))
,false)],null)));
var chunk__10617_10628 = null;
var count__10618_10629 = (0);
var i__10619_10630 = (0);
while(true){
if((i__10619_10630 < count__10618_10629)){
var component__10060__auto___10631 = cljs.core._nth.call(null,chunk__10617_10628,i__10619_10630);
speclj.components.install.call(null,component__10060__auto___10631,description__10059__auto___10624);


var G__10632 = seq__10616_10627;
var G__10633 = chunk__10617_10628;
var G__10634 = count__10618_10629;
var G__10635 = (i__10619_10630 + (1));
seq__10616_10627 = G__10632;
chunk__10617_10628 = G__10633;
count__10618_10629 = G__10634;
i__10619_10630 = G__10635;
continue;
} else {
var temp__5825__auto___10636 = cljs.core.seq.call(null,seq__10616_10627);
if(temp__5825__auto___10636){
var seq__10616_10637__$1 = temp__5825__auto___10636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10616_10637__$1)){
var c__5548__auto___10638 = cljs.core.chunk_first.call(null,seq__10616_10637__$1);
var G__10639 = cljs.core.chunk_rest.call(null,seq__10616_10637__$1);
var G__10640 = c__5548__auto___10638;
var G__10641 = cljs.core.count.call(null,c__5548__auto___10638);
var G__10642 = (0);
seq__10616_10627 = G__10639;
chunk__10617_10628 = G__10640;
count__10618_10629 = G__10641;
i__10619_10630 = G__10642;
continue;
} else {
var component__10060__auto___10643 = cljs.core.first.call(null,seq__10616_10637__$1);
speclj.components.install.call(null,component__10060__auto___10643,description__10059__auto___10624);


var G__10644 = cljs.core.next.call(null,seq__10616_10637__$1);
var G__10645 = null;
var G__10646 = (0);
var G__10647 = (0);
seq__10616_10627 = G__10644;
chunk__10617_10628 = G__10645;
count__10618_10629 = G__10646;
i__10619_10630 = G__10647;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10614_10625);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10059__auto___10624);
}


//# sourceMappingURL=main_spec.js.map
