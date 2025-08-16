// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('hurdle.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('hurdle.main');
var description__18442__auto___19254 = speclj.components.new_description.call(null,"main cljs",false,"hurdle.main-spec");
var _STAR_parent_description_STAR__orig_val__19244_19255 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19245_19256 = description__18442__auto___19254;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19245_19256);

try{var seq__19246_19257 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254){
return (function (it__18816__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__19252 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__19253 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__19253);

try{return it__18816__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__19252);
}});})(_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hurdle.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254){
return (function (){
var value__19193__auto__ = "#main-container";
var node__19194__auto__ = c3kit.wire.spec_helper.select.call(null,value__19193__auto__);
if(cljs.core.truth_(node__19194__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19193__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18552__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18552__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19244_19255,_STAR_parent_description_STAR__temp_val__19245_19256,description__18442__auto___19254))
,false)],null)));
var chunk__19247_19258 = null;
var count__19248_19259 = (0);
var i__19249_19260 = (0);
while(true){
if((i__19249_19260 < count__19248_19259)){
var component__18443__auto___19261 = cljs.core._nth.call(null,chunk__19247_19258,i__19249_19260);
speclj.components.install.call(null,component__18443__auto___19261,description__18442__auto___19254);


var G__19262 = seq__19246_19257;
var G__19263 = chunk__19247_19258;
var G__19264 = count__19248_19259;
var G__19265 = (i__19249_19260 + (1));
seq__19246_19257 = G__19262;
chunk__19247_19258 = G__19263;
count__19248_19259 = G__19264;
i__19249_19260 = G__19265;
continue;
} else {
var temp__5825__auto___19266 = cljs.core.seq.call(null,seq__19246_19257);
if(temp__5825__auto___19266){
var seq__19246_19267__$1 = temp__5825__auto___19266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19246_19267__$1)){
var c__5548__auto___19268 = cljs.core.chunk_first.call(null,seq__19246_19267__$1);
var G__19269 = cljs.core.chunk_rest.call(null,seq__19246_19267__$1);
var G__19270 = c__5548__auto___19268;
var G__19271 = cljs.core.count.call(null,c__5548__auto___19268);
var G__19272 = (0);
seq__19246_19257 = G__19269;
chunk__19247_19258 = G__19270;
count__19248_19259 = G__19271;
i__19249_19260 = G__19272;
continue;
} else {
var component__18443__auto___19273 = cljs.core.first.call(null,seq__19246_19267__$1);
speclj.components.install.call(null,component__18443__auto___19273,description__18442__auto___19254);


var G__19274 = cljs.core.next.call(null,seq__19246_19267__$1);
var G__19275 = null;
var G__19276 = (0);
var G__19277 = (0);
seq__19246_19257 = G__19274;
chunk__19247_19258 = G__19275;
count__19248_19259 = G__19276;
i__19249_19260 = G__19277;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19244_19255);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18442__auto___19254);
}


//# sourceMappingURL=main_spec.js.map
