// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.js');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.apron.time');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.object');
goog.scope(function(){
c3kit.wire.js.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * DEPRECATED: Use 'e-code' instead.
 */
c3kit.wire.js.e_key_code = (function c3kit$wire$js$e_key_code(e){
return e.keyCode;
});
c3kit.wire.js.e_code = (function c3kit$wire$js$e_code(e){
return e.code;
});
/**
 * On macOS, this is the ⌥ Option key.
 */
c3kit.wire.js.alt_key_QMARK_ = (function c3kit$wire$js$alt_key_QMARK_(e){
return e.altKey;
});
/**
 * On macOS, this is the ⌘ Command key.
 */
c3kit.wire.js.meta_key_QMARK_ = (function c3kit$wire$js$meta_key_QMARK_(e){
return e.metaKey;
});
c3kit.wire.js.ctrl_key_QMARK_ = (function c3kit$wire$js$ctrl_key_QMARK_(e){
return e.ctrlKey;
});
c3kit.wire.js.shift_key_QMARK_ = (function c3kit$wire$js$shift_key_QMARK_(e){
return e.shiftKey;
});
c3kit.wire.js.BACKSPACE = "Backspace";
c3kit.wire.js.TAB = "Tab";
c3kit.wire.js.ENTER = "Enter";
c3kit.wire.js.SHIFTLEFT = "ShiftLeft";
c3kit.wire.js.SHIFTRIGHT = "ShiftRight";
c3kit.wire.js.ESC = "Escape";
c3kit.wire.js.SPACE = "Space";
c3kit.wire.js.LEFT = "ArrowLeft";
c3kit.wire.js.UP = "ArrowUp";
c3kit.wire.js.RIGHT = "ArrowRight";
c3kit.wire.js.DOWN = "ArrowDown";
c3kit.wire.js.DELETE = "Delete";
c3kit.wire.js.DIGIT0 = "Digit0";
c3kit.wire.js.DIGIT1 = "Digit1";
c3kit.wire.js.DIGIT2 = "Digit2";
c3kit.wire.js.DIGIT3 = "Digit3";
c3kit.wire.js.DIGIT4 = "Digit4";
c3kit.wire.js.DIGIT5 = "Digit5";
c3kit.wire.js.DIGIT6 = "Digit6";
c3kit.wire.js.DIGIT7 = "Digit7";
c3kit.wire.js.DIGIT8 = "Digit8";
c3kit.wire.js.DIGIT9 = "Digit9";
c3kit.wire.js.NUMPAD_PLUS_ = "NumpadAdd";
c3kit.wire.js.COMMA = "Comma";
c3kit.wire.js.e_code_QMARK_ = (function c3kit$wire$js$e_code_QMARK_(var_args){
var G__15046 = arguments.length;
switch (G__15046) {
case 1:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return (function (e){
return c3kit.wire.js.e_code_QMARK_.call(null,code,e);
});
}));

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (code,e){
return cljs.core._EQ_.call(null,c3kit.wire.js.e_code.call(null,e),code);
}));

(c3kit.wire.js.e_code_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.BACKSPACE_QMARK_ = (function c3kit$wire$js$BACKSPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.BACKSPACE,e);
});
c3kit.wire.js.TAB_QMARK_ = (function c3kit$wire$js$TAB_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.TAB,e);
});
c3kit.wire.js.ENTER_QMARK_ = (function c3kit$wire$js$ENTER_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.ENTER,e);
});
c3kit.wire.js.SHIFT_QMARK_ = (function c3kit$wire$js$SHIFT_QMARK_(e){
return ((c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SHIFTLEFT,e)) || (c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SHIFTRIGHT,e)));
});
c3kit.wire.js.ESC_QMARK_ = (function c3kit$wire$js$ESC_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.ESC,e);
});
c3kit.wire.js.SPACE_QMARK_ = (function c3kit$wire$js$SPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SPACE,e);
});
c3kit.wire.js.LEFT_QMARK_ = (function c3kit$wire$js$LEFT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.LEFT,e);
});
c3kit.wire.js.UP_QMARK_ = (function c3kit$wire$js$UP_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.UP,e);
});
c3kit.wire.js.RIGHT_QMARK_ = (function c3kit$wire$js$RIGHT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.RIGHT,e);
});
c3kit.wire.js.DOWN_QMARK_ = (function c3kit$wire$js$DOWN_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.DOWN,e);
});
c3kit.wire.js.DELETE_QMARK_ = (function c3kit$wire$js$DELETE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.DELETE,e);
});
c3kit.wire.js.NUMPAD_PLUS__QMARK_ = (function c3kit$wire$js$NUMPAD_PLUS__QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.NUMPAD_PLUS_,e);
});
c3kit.wire.js.COMMA_QMARK_ = (function c3kit$wire$js$COMMA_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.COMMA,e);
});
c3kit.wire.js.key_modifier_QMARK_ = (function c3kit$wire$js$key_modifier_QMARK_(e,modifier){
try{return e.getModifierState(modifier);
}catch (e15077){var e__$1 = e15077;
return false;
}});
c3kit.wire.js.shift_modifier_QMARK_ = (function c3kit$wire$js$shift_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Shift");
});
c3kit.wire.js.ctl_modifier_QMARK_ = (function c3kit$wire$js$ctl_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Control");
});
c3kit.wire.js.alt_modifier_QMARK_ = (function c3kit$wire$js$alt_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Alt");
});
c3kit.wire.js.o_get = (function c3kit$wire$js$o_get(var_args){
var G__15090 = arguments.length;
switch (G__15090) {
case 2:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,key){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,null);
}));

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,key,default$){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,default$);
}));

(c3kit.wire.js.o_get.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_get_in = (function c3kit$wire$js$o_get_in(var_args){
var G__15105 = arguments.length;
switch (G__15105) {
case 2:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,ks){
return cljs.core.reduce.call(null,c3kit.wire.js.o_get,js_obj,ks);
}));

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,ks,default$){
var or__5025__auto__ = c3kit.wire.js.o_get_in.call(null,js_obj,ks);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(c3kit.wire.js.o_get_in.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_set = (function c3kit$wire$js$o_set(js_obj,key,value){
return c3kit.wire.js.goog$module$goog$object.set.call(null,js_obj,key,value);
});
/**
 * Update a JavaScript object key according to a function, f,
 * applied to the current value followed by args.
 */
c3kit.wire.js.o_update_BANG_ = (function c3kit$wire$js$o_update_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15140 = arguments.length;
var i__5750__auto___15145 = (0);
while(true){
if((i__5750__auto___15145 < len__5749__auto___15140)){
args__5755__auto__.push((arguments[i__5750__auto___15145]));

var G__15146 = (i__5750__auto___15145 + (1));
i__5750__auto___15145 = G__15146;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
return c3kit.wire.js.o_set.call(null,obj,k,cljs.core.apply.call(null,f,c3kit.wire.js.o_get.call(null,obj,k),args));
}));

(c3kit.wire.js.o_update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.o_update_BANG_.cljs$lang$applyTo = (function (seq15117){
var G__15118 = cljs.core.first.call(null,seq15117);
var seq15117__$1 = cljs.core.next.call(null,seq15117);
var G__15119 = cljs.core.first.call(null,seq15117__$1);
var seq15117__$2 = cljs.core.next.call(null,seq15117__$1);
var G__15120 = cljs.core.first.call(null,seq15117__$2);
var seq15117__$3 = cljs.core.next.call(null,seq15117__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15118,G__15119,G__15120,seq15117__$3);
}));

/**
 * Dissoc a key in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_BANG_ = (function c3kit$wire$js$o_dissoc_BANG_(obj,key){
delete obj[key];

return obj;
});
/**
 * Returns the first object with the subsequent objects merged onto it
 */
c3kit.wire.js.o_merge_BANG_ = (function c3kit$wire$js$o_merge_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15175 = arguments.length;
var i__5750__auto___15176 = (0);
while(true){
if((i__5750__auto___15176 < len__5749__auto___15175)){
args__5755__auto__.push((arguments[i__5750__auto___15176]));

var G__15177 = (i__5750__auto___15176 + (1));
i__5750__auto___15176 = G__15177;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,other,others){
if(cljs.core.map_QMARK_.call(null,other)){
var seq__15150_15179 = cljs.core.seq.call(null,cljs.core.seq.call(null,other));
var chunk__15151_15180 = null;
var count__15152_15181 = (0);
var i__15153_15182 = (0);
while(true){
if((i__15153_15182 < count__15152_15181)){
var vec__15161_15183 = cljs.core._nth.call(null,chunk__15151_15180,i__15153_15182);
var k_15184 = cljs.core.nth.call(null,vec__15161_15183,(0),null);
var v_15185 = cljs.core.nth.call(null,vec__15161_15183,(1),null);
c3kit.wire.js.o_set.call(null,obj,k_15184,v_15185);


var G__15187 = seq__15150_15179;
var G__15188 = chunk__15151_15180;
var G__15189 = count__15152_15181;
var G__15190 = (i__15153_15182 + (1));
seq__15150_15179 = G__15187;
chunk__15151_15180 = G__15188;
count__15152_15181 = G__15189;
i__15153_15182 = G__15190;
continue;
} else {
var temp__5825__auto___15191 = cljs.core.seq.call(null,seq__15150_15179);
if(temp__5825__auto___15191){
var seq__15150_15192__$1 = temp__5825__auto___15191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15150_15192__$1)){
var c__5548__auto___15193 = cljs.core.chunk_first.call(null,seq__15150_15192__$1);
var G__15195 = cljs.core.chunk_rest.call(null,seq__15150_15192__$1);
var G__15196 = c__5548__auto___15193;
var G__15197 = cljs.core.count.call(null,c__5548__auto___15193);
var G__15198 = (0);
seq__15150_15179 = G__15195;
chunk__15151_15180 = G__15196;
count__15152_15181 = G__15197;
i__15153_15182 = G__15198;
continue;
} else {
var vec__15165_15200 = cljs.core.first.call(null,seq__15150_15192__$1);
var k_15201 = cljs.core.nth.call(null,vec__15165_15200,(0),null);
var v_15202 = cljs.core.nth.call(null,vec__15165_15200,(1),null);
c3kit.wire.js.o_set.call(null,obj,k_15201,v_15202);


var G__15203 = cljs.core.next.call(null,seq__15150_15192__$1);
var G__15204 = null;
var G__15205 = (0);
var G__15206 = (0);
seq__15150_15179 = G__15203;
chunk__15151_15180 = G__15204;
count__15152_15181 = G__15205;
i__15153_15182 = G__15206;
continue;
}
} else {
}
}
break;
}
} else {
if((other instanceof Object)){
var seq__15168_15207 = cljs.core.seq.call(null,Object.keys(other));
var chunk__15169_15208 = null;
var count__15170_15209 = (0);
var i__15171_15210 = (0);
while(true){
if((i__15171_15210 < count__15170_15209)){
var k_15211 = cljs.core._nth.call(null,chunk__15169_15208,i__15171_15210);
c3kit.wire.js.o_set.call(null,obj,k_15211,c3kit.wire.js.o_get.call(null,other,k_15211));


var G__15212 = seq__15168_15207;
var G__15213 = chunk__15169_15208;
var G__15214 = count__15170_15209;
var G__15215 = (i__15171_15210 + (1));
seq__15168_15207 = G__15212;
chunk__15169_15208 = G__15213;
count__15170_15209 = G__15214;
i__15171_15210 = G__15215;
continue;
} else {
var temp__5825__auto___15217 = cljs.core.seq.call(null,seq__15168_15207);
if(temp__5825__auto___15217){
var seq__15168_15219__$1 = temp__5825__auto___15217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15168_15219__$1)){
var c__5548__auto___15220 = cljs.core.chunk_first.call(null,seq__15168_15219__$1);
var G__15221 = cljs.core.chunk_rest.call(null,seq__15168_15219__$1);
var G__15222 = c__5548__auto___15220;
var G__15223 = cljs.core.count.call(null,c__5548__auto___15220);
var G__15224 = (0);
seq__15168_15207 = G__15221;
chunk__15169_15208 = G__15222;
count__15170_15209 = G__15223;
i__15171_15210 = G__15224;
continue;
} else {
var k_15225 = cljs.core.first.call(null,seq__15168_15219__$1);
c3kit.wire.js.o_set.call(null,obj,k_15225,c3kit.wire.js.o_get.call(null,other,k_15225));


var G__15226 = cljs.core.next.call(null,seq__15168_15219__$1);
var G__15227 = null;
var G__15228 = (0);
var G__15229 = (0);
seq__15168_15207 = G__15226;
chunk__15169_15208 = G__15227;
count__15170_15209 = G__15228;
i__15171_15210 = G__15229;
continue;
}
} else {
}
}
break;
}
} else {
}
}

if(cljs.core.seq.call(null,others)){
return cljs.core.apply.call(null,c3kit.wire.js.o_merge_BANG_,obj,others);
} else {
return obj;
}
}));

(c3kit.wire.js.o_merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.o_merge_BANG_.cljs$lang$applyTo = (function (seq15137){
var G__15138 = cljs.core.first.call(null,seq15137);
var seq15137__$1 = cljs.core.next.call(null,seq15137);
var G__15139 = cljs.core.first.call(null,seq15137__$1);
var seq15137__$2 = cljs.core.next.call(null,seq15137__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15138,G__15139,seq15137__$2);
}));

c3kit.wire.js.get_or_create_node = (function c3kit$wire$js$get_or_create_node(obj,k){
var or__5025__auto__ = c3kit.wire.js.o_get.call(null,obj,k);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var node = (new Object());
c3kit.wire.js.o_set.call(null,obj,k,node);

return node;
}
});
/**
 * Assoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_assoc_in_BANG_ = (function c3kit$wire$js$o_assoc_in_BANG_(obj,ks,v){
var key_path = cljs.core.butlast.call(null,ks);
var node = cljs.core.reduce.call(null,c3kit.wire.js.get_or_create_node,obj,key_path);
var key = cljs.core.last.call(null,ks);
return c3kit.wire.js.o_set.call(null,node,key,v);
});
/**
 * Dissoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_in_BANG_ = (function c3kit$wire$js$o_dissoc_in_BANG_(obj,ks){
var G__15186_15236 = c3kit.wire.js.o_get_in.call(null,obj,cljs.core.butlast.call(null,ks));
if((G__15186_15236 == null)){
} else {
delete G__15186_15236[cljs.core.last.call(null,ks)];
}

return obj;
});
c3kit.wire.js.user_agent = (function c3kit$wire$js$user_agent(var_args){
var G__15199 = arguments.length;
switch (G__15199) {
case 0:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.user_agent.call(null,navigator);
}));

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1 = (function (navigator){
return navigator.userAgent;
}));

(c3kit.wire.js.user_agent.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.user_agent_match_QMARK_ = (function c3kit$wire$js$user_agent_match_QMARK_(var_args){
var G__15218 = arguments.length;
switch (G__15218) {
case 1:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (re){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,re,c3kit.wire.js.user_agent.call(null));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (re,user_agent){
return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,re,user_agent));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.mac_os_QMARK_ = (function c3kit$wire$js$mac_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((Macintosh|MacIntel|MacPPC|Mac68K)/);
});
c3kit.wire.js.win_os_QMARK_ = (function c3kit$wire$js$win_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((Windows|Win32|Win64|WinCE)/);
});
c3kit.wire.js.linux_QMARK_ = (function c3kit$wire$js$linux_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\(Linux/);
});
c3kit.wire.js.ios_QMARK_ = (function c3kit$wire$js$ios_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((iPhone|iPad|iPod)/);
});
c3kit.wire.js.android_QMARK_ = (function c3kit$wire$js$android_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\(Android/);
});
c3kit.wire.js.clear_interval = (function c3kit$wire$js$clear_interval(interval){
return clearInterval(interval);
});
c3kit.wire.js.clear_timeout = (function c3kit$wire$js$clear_timeout(timeout){
return clearTimeout(timeout);
});
c3kit.wire.js.context_2d = (function c3kit$wire$js$context_2d(canvas){
return canvas.getContext("2d");
});
c3kit.wire.js.active_element = (function c3kit$wire$js$active_element(){
return document.activeElement;
});
c3kit.wire.js.doc_body = (function c3kit$wire$js$doc_body(var_args){
var G__15239 = arguments.length;
switch (G__15239) {
case 0:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body;
}));

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return doc.body;
}));

(c3kit.wire.js.doc_body.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.doc_cookie = (function c3kit$wire$js$doc_cookie(){
return document.cookie;
});
c3kit.wire.js.doc_ready_state = (function c3kit$wire$js$doc_ready_state(){
return document.readyState;
});
c3kit.wire.js.doc_ready_QMARK_ = (function c3kit$wire$js$doc_ready_QMARK_(){
return cljs.core._EQ_.call(null,"complete",c3kit.wire.js.doc_ready_state.call(null));
});
c3kit.wire.js.document = (function c3kit$wire$js$document(var_args){
var G__15252 = arguments.length;
switch (G__15252) {
case 0:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0 = (function (){
return document;
}));

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1 = (function (node){
return node.ownerDocument;
}));

(c3kit.wire.js.document.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.e_checked_QMARK_ = (function c3kit$wire$js$e_checked_QMARK_(e){
return e.target.checked;
});
c3kit.wire.js.e_delta_y = (function c3kit$wire$js$e_delta_y(e){
return e.deltaY;
});
c3kit.wire.js.e_client_x = (function c3kit$wire$js$e_client_x(e){
return e.clientX;
});
c3kit.wire.js.e_client_y = (function c3kit$wire$js$e_client_y(e){
return e.clientY;
});
c3kit.wire.js.e_coordinates = (function c3kit$wire$js$e_coordinates(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
c3kit.wire.js.e_related_target = (function c3kit$wire$js$e_related_target(e){
return e.relatedTarget;
});
c3kit.wire.js.e_left_click_QMARK_ = (function c3kit$wire$js$e_left_click_QMARK_(e){
return cljs.core._EQ_.call(null,(0),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_wheel_click_QMARK_ = (function c3kit$wire$js$e_wheel_click_QMARK_(e){
return cljs.core._EQ_.call(null,(1),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_right_click_QMARK_ = (function c3kit$wire$js$e_right_click_QMARK_(e){
return cljs.core._EQ_.call(null,(2),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_target = (function c3kit$wire$js$e_target(e){
return e.target;
});
c3kit.wire.js.e_text = (function c3kit$wire$js$e_text(e){
return e.target.value;
});
c3kit.wire.js.e_type = (function c3kit$wire$js$e_type(e){
return e.type;
});
c3kit.wire.js.file__GT_clj = (function c3kit$wire$js$file__GT_clj(file){
return c3kit.apron.corec.remove_nils.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"type","type",1174270348),file.type,new cljs.core.Keyword(null,"size","size",1098693007),file.size,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),file.lastModified,new cljs.core.Keyword(null,"last-modified-date","last-modified-date",-2034854883),file.lastModifiedDate,new cljs.core.Keyword(null,"webkit-relative-path","webkit-relative-path",-2126577342),file.webkitRelativePath,new cljs.core.Keyword(null,"file","file",-1269645878),file], null));
});
c3kit.wire.js.e_files = (function c3kit$wire$js$e_files(e){
return cljs.core.map.call(null,c3kit.wire.js.file__GT_clj,(function (){var or__5025__auto__ = (function (){var G__15290 = e;
var G__15290__$1 = (((G__15290 == null))?null:G__15290.dataTransfer);
if((G__15290__$1 == null)){
return null;
} else {
return G__15290__$1.files;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var G__15291 = e;
var G__15291__$1 = (((G__15291 == null))?null:G__15291.target);
if((G__15291__$1 == null)){
return null;
} else {
return G__15291__$1.files;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})());
});
c3kit.wire.js.element_by_id = (function c3kit$wire$js$element_by_id(id){
return document.getElementById(id);
});
c3kit.wire.js.frame_window = (function c3kit$wire$js$frame_window(iframe){
return iframe.contentWindow;
});
c3kit.wire.js.interval = (function c3kit$wire$js$interval(millis,f){
return setInterval(f,millis);
});
c3kit.wire.js.node_add_class = (function c3kit$wire$js$node_add_class(node,class$){
return node.classList.add(class$);
});
c3kit.wire.js.node_append_child = (function c3kit$wire$js$node_append_child(node,child){
return node.appendChild(child);
});
c3kit.wire.js.node_children = (function c3kit$wire$js$node_children(node){
return cljs.core.array_seq.call(null,node.childNodes);
});
c3kit.wire.js.node_classes = (function c3kit$wire$js$node_classes(node){
return node.className;
});
c3kit.wire.js.node_clone = (function c3kit$wire$js$node_clone(node,deep_QMARK_){
return node.cloneNode(deep_QMARK_);
});
c3kit.wire.js.node_files = (function c3kit$wire$js$node_files(node){
return node.files;
});
c3kit.wire.js.node_height = (function c3kit$wire$js$node_height(node){
return node.clientHeight;
});
c3kit.wire.js.node_id = (function c3kit$wire$js$node_id(node){
return c3kit.wire.js.o_get.call(null,node,"id");
});
c3kit.wire.js.node_id_EQ_ = (function c3kit$wire$js$node_id_EQ_(node,id){
return c3kit.wire.js.o_set.call(null,node,"id",id);
});
c3kit.wire.js.node_text = (function c3kit$wire$js$node_text(node){
return node.innerText;
});
c3kit.wire.js.node_parent = (function c3kit$wire$js$node_parent(node){
return node.parentNode;
});
c3kit.wire.js.node_placeholder = (function c3kit$wire$js$node_placeholder(node){
return node.placeholder;
});
c3kit.wire.js.node_remove_child = (function c3kit$wire$js$node_remove_child(node,child){
return node.removeChild(child);
});
c3kit.wire.js.node_remove_class = (function c3kit$wire$js$node_remove_class(node,class$){
return node.classList.remove(class$);
});
c3kit.wire.js.node_scroll_left = (function c3kit$wire$js$node_scroll_left(node){
return node.scrollLeft;
});
c3kit.wire.js.node_scroll_top = (function c3kit$wire$js$node_scroll_top(node){
return node.scrollTop;
});
c3kit.wire.js.node_size = (function c3kit$wire$js$node_size(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.clientWidth,node.clientHeight], null);
});
c3kit.wire.js.node_style = (function c3kit$wire$js$node_style(node){
return node.style;
});
c3kit.wire.js.node_value = (function c3kit$wire$js$node_value(node){
return node.value;
});
c3kit.wire.js.node_width = (function c3kit$wire$js$node_width(node){
return node.clientWidth;
});
c3kit.wire.js.page_href = (function c3kit$wire$js$page_href(){
return window.location.href;
});
c3kit.wire.js.page_hash = (function c3kit$wire$js$page_hash(){
return window.location.hash;
});
c3kit.wire.js.page_pathname = (function c3kit$wire$js$page_pathname(){
return window.location.pathname;
});
c3kit.wire.js.page_reload_BANG_ = (function c3kit$wire$js$page_reload_BANG_(){
return window.location.reload();
});
c3kit.wire.js.page_title = (function c3kit$wire$js$page_title(){
return document.title;
});
c3kit.wire.js.page_title_EQ_ = (function c3kit$wire$js$page_title_EQ_(title){
return (document.title = title);
});
c3kit.wire.js.post_message = (function c3kit$wire$js$post_message(window,message,target_domain){
return window.postMessage(cljs.core.clj__GT_js.call(null,message),target_domain);
});
c3kit.wire.js.print_page = (function c3kit$wire$js$print_page(){
return window.print();
});
c3kit.wire.js.query_selector = (function c3kit$wire$js$query_selector(selector){
return document.querySelector(selector);
});
c3kit.wire.js.query_selector_all = (function c3kit$wire$js$query_selector_all(selector){
return document.querySelectorAll(selector);
});
c3kit.wire.js.register_post_message_handler = (function c3kit$wire$js$register_post_message_handler(handler){
return window.addEventListener("message",handler);
});
c3kit.wire.js.register_storage_handler = (function c3kit$wire$js$register_storage_handler(handler){
return window.addEventListener("storage",handler);
});
c3kit.wire.js.remove_local_storage = (function c3kit$wire$js$remove_local_storage(key){
return localStorage.removeItem(key);
});
c3kit.wire.js.screen_size = (function c3kit$wire$js$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.width,screen.height], null);
});
c3kit.wire.js.set_local_storage = (function c3kit$wire$js$set_local_storage(key,value){
return localStorage.setItem(key,value);
});
c3kit.wire.js.timeout = (function c3kit$wire$js$timeout(millis,f){
return setTimeout(f,millis);
});
c3kit.wire.js.uri_encode = (function c3kit$wire$js$uri_encode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15324 = arguments.length;
var i__5750__auto___15325 = (0);
while(true){
if((i__5750__auto___15325 < len__5749__auto___15324)){
args__5755__auto__.push((arguments[i__5750__auto___15325]));

var G__15327 = (i__5750__auto___15325 + (1));
i__5750__auto___15325 = G__15327;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
return encodeURIComponent(cljs.core.apply.call(null,cljs.core.str,stuff));
}));

(c3kit.wire.js.uri_encode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.js.uri_encode.cljs$lang$applyTo = (function (seq15317){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15317));
}));

c3kit.wire.js.window_close_BANG_ = (function c3kit$wire$js$window_close_BANG_(){
return window.close();
});
c3kit.wire.js.window_open = (function c3kit$wire$js$window_open(url,window_name,options_string){
return window.open(url,window_name,options_string);
});
c3kit.wire.js.node_bounds = (function c3kit$wire$js$node_bounds(node){
var rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y,rect.width,rect.height], null);
});
/**
 * Return a hashmap of cookie names and their values.
 */
c3kit.wire.js.cookies = (function c3kit$wire$js$cookies(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.remove.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,(function (p1__15326_SHARP_){
return clojure.string.split.call(null,p1__15326_SHARP_,"=");
}))),clojure.string.split.call(null,c3kit.wire.js.doc_cookie.call(null),"; "));
});
/**
 * Resolves a value into a DOM node.
 *   Possible values:
 *  - string id       - id of the node
 *  - string selector - CSS selector to find the node
 *  - node            - anything else is assumed to be the node
 */
c3kit.wire.js.resolve_node = (function c3kit$wire$js$resolve_node(thing){
if(typeof thing === 'string'){
var or__5025__auto__ = c3kit.wire.js.element_by_id.call(null,thing);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return c3kit.wire.js.query_selector.call(null,thing);
}
} else {
return thing;
}
});
c3kit.wire.js.ancestor_where = (function c3kit$wire$js$ancestor_where(pred,node){
while(true){
if((node == null)){
return null;
} else {
if(cljs.core.truth_(pred.call(null,node))){
return node;
} else {
var G__15336 = pred;
var G__15337 = node.parentElement;
pred = G__15336;
node = G__15337;
continue;

}
}
break;
}
});
c3kit.wire.js.ancestor_QMARK_ = (function c3kit$wire$js$ancestor_QMARK_(ancestor,node){
return cljs.core.boolean$.call(null,c3kit.wire.js.ancestor_where.call(null,(function (p1__15333_SHARP_){
return cljs.core._EQ_.call(null,ancestor,p1__15333_SHARP_);
}),node));
});
/**
 * Give an event the nod, as if saying: Good job, your work is done.
 */
c3kit.wire.js.nod = (function c3kit$wire$js$nod(e){
return e.preventDefault();
});
/**
 * Return function to suppress browser event with nod and call the supplied function with args.
 */
c3kit.wire.js.nod_n_do = (function c3kit$wire$js$nod_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15340 = arguments.length;
var i__5750__auto___15341 = (0);
while(true){
if((i__5750__auto___15341 < len__5749__auto___15340)){
args__5755__auto__.push((arguments[i__5750__auto___15341]));

var G__15342 = (i__5750__auto___15341 + (1));
i__5750__auto___15341 = G__15342;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nod.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nod_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nod_n_do.cljs$lang$applyTo = (function (seq15334){
var G__15335 = cljs.core.first.call(null,seq15334);
var seq15334__$1 = cljs.core.next.call(null,seq15334);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15335,seq15334__$1);
}));

/**
 * Nip the event in the bud, before it causes any trouble.
 */
c3kit.wire.js.nip = (function c3kit$wire$js$nip(e){
return e.stopPropagation();
});
/**
 * Return function to suppress browser event with nip and call the supplied function with args.
 */
c3kit.wire.js.nip_n_do = (function c3kit$wire$js$nip_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15352 = arguments.length;
var i__5750__auto___15353 = (0);
while(true){
if((i__5750__auto___15353 < len__5749__auto___15352)){
args__5755__auto__.push((arguments[i__5750__auto___15353]));

var G__15354 = (i__5750__auto___15353 + (1));
i__5750__auto___15353 = G__15354;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nip.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nip_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nip_n_do.cljs$lang$applyTo = (function (seq15338){
var G__15339 = cljs.core.first.call(null,seq15338);
var seq15338__$1 = cljs.core.next.call(null,seq15338);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15339,seq15338__$1);
}));

/**
 * Nix an event: Stop what you're doing and get the hell out.
 */
c3kit.wire.js.nix = (function c3kit$wire$js$nix(e){
c3kit.wire.js.nip.call(null,e);

return c3kit.wire.js.nod.call(null,e);
});
/**
 * Return function to suppress browser event with nix and call the supplied function with args.
 */
c3kit.wire.js.nix_n_do = (function c3kit$wire$js$nix_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15375 = arguments.length;
var i__5750__auto___15376 = (0);
while(true){
if((i__5750__auto___15376 < len__5749__auto___15375)){
args__5755__auto__.push((arguments[i__5750__auto___15376]));

var G__15390 = (i__5750__auto___15376 + (1));
i__5750__auto___15376 = G__15390;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nix.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nix_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nix_n_do.cljs$lang$applyTo = (function (seq15356){
var G__15361 = cljs.core.first.call(null,seq15356);
var seq15356__$1 = cljs.core.next.call(null,seq15356);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15361,seq15356__$1);
}));

/**
 * Tell the browser to load the given URL, with full HTTP request/response process.
 */
c3kit.wire.js.redirect_BANG_ = (function c3kit$wire$js$redirect_BANG_(url){
return (window.location = url);
});
/**
 * Resolved the node and focus.
 *   Options: {:preventScroll true ;; default is false
 *          :focusVisible true}  ;; default may be false 
 */
c3kit.wire.js.focus_BANG_ = (function c3kit$wire$js$focus_BANG_(var_args){
var G__15374 = arguments.length;
switch (G__15374) {
case 1:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__15377 = thing;
var G__15377__$1 = (((G__15377 == null))?null:c3kit.wire.js.resolve_node.call(null,G__15377));
if((G__15377__$1 == null)){
return null;
} else {
return G__15377__$1.focus();
}
}));

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__15389 = thing;
var G__15389__$1 = (((G__15389 == null))?null:c3kit.wire.js.resolve_node.call(null,G__15389));
if((G__15389__$1 == null)){
return null;
} else {
return G__15389__$1.focus(cljs.core.clj__GT_js.call(null,options));
}
}));

(c3kit.wire.js.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.blur_BANG_ = (function c3kit$wire$js$blur_BANG_(thing){
var G__15397 = thing;
var G__15397__$1 = (((G__15397 == null))?null:c3kit.wire.js.resolve_node.call(null,G__15397));
if((G__15397__$1 == null)){
return null;
} else {
return G__15397__$1.blur();
}
});
c3kit.wire.js.click_BANG_ = (function c3kit$wire$js$click_BANG_(thing){
var G__15401 = thing;
var G__15401__$1 = (((G__15401 == null))?null:c3kit.wire.js.resolve_node.call(null,G__15401));
if((G__15401__$1 == null)){
return null;
} else {
return G__15401__$1.click();
}
});
/**
 * True if the element is the document's activeElement.
 */
c3kit.wire.js.active_QMARK_ = (function c3kit$wire$js$active_QMARK_(thing){
return cljs.core._EQ_.call(null,c3kit.wire.js.active_element.call(null),c3kit.wire.js.resolve_node.call(null,thing));
});
/**
 * True if the element is not the document's activeElement.
 */
c3kit.wire.js.inactive_QMARK_ = (function c3kit$wire$js$inactive_QMARK_(thing){
return (!(c3kit.wire.js.active_QMARK_.call(null,thing)));
});
c3kit.wire.js.add_listener = (function c3kit$wire$js$add_listener(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15465 = arguments.length;
var i__5750__auto___15466 = (0);
while(true){
if((i__5750__auto___15466 < len__5749__auto___15465)){
args__5755__auto__.push((arguments[i__5750__auto___15466]));

var G__15468 = (i__5750__auto___15466 + (1));
i__5750__auto___15466 = G__15468;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__15418){
var map__15419 = p__15418;
var map__15419__$1 = cljs.core.__destructure_map.call(null,map__15419);
var options = map__15419__$1;
if(cljs.core.truth_(node)){
return node.addEventListener(event,listener,(function (){var G__15420 = options;
if((G__15420 == null)){
return null;
} else {
return cljs.core.clj__GT_js.call(null,G__15420);
}
})());
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.js",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-listener to nil node"], null);
}),null)),null,(62),null);
}
}));

(c3kit.wire.js.add_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.add_listener.cljs$lang$applyTo = (function (seq15409){
var G__15410 = cljs.core.first.call(null,seq15409);
var seq15409__$1 = cljs.core.next.call(null,seq15409);
var G__15411 = cljs.core.first.call(null,seq15409__$1);
var seq15409__$2 = cljs.core.next.call(null,seq15409__$1);
var G__15412 = cljs.core.first.call(null,seq15409__$2);
var seq15409__$3 = cljs.core.next.call(null,seq15409__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15410,G__15411,G__15412,seq15409__$3);
}));

c3kit.wire.js.remove_listener = (function c3kit$wire$js$remove_listener(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15503 = arguments.length;
var i__5750__auto___15504 = (0);
while(true){
if((i__5750__auto___15504 < len__5749__auto___15503)){
args__5755__auto__.push((arguments[i__5750__auto___15504]));

var G__15506 = (i__5750__auto___15504 + (1));
i__5750__auto___15504 = G__15506;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__15469){
var map__15470 = p__15469;
var map__15470__$1 = cljs.core.__destructure_map.call(null,map__15470);
var options = map__15470__$1;
if(cljs.core.truth_(node)){
return node.removeEventListener(event,listener,(function (){var G__15475 = options;
if((G__15475 == null)){
return null;
} else {
return cljs.core.clj__GT_js.call(null,G__15475);
}
})());
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.js",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remove-listener to nil node"], null);
}),null)),null,(63),null);
}
}));

(c3kit.wire.js.remove_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.remove_listener.cljs$lang$applyTo = (function (seq15456){
var G__15457 = cljs.core.first.call(null,seq15456);
var seq15456__$1 = cljs.core.next.call(null,seq15456);
var G__15461 = cljs.core.first.call(null,seq15456__$1);
var seq15456__$2 = cljs.core.next.call(null,seq15456__$1);
var G__15462 = cljs.core.first.call(null,seq15456__$2);
var seq15456__$3 = cljs.core.next.call(null,seq15456__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15457,G__15461,G__15462,seq15456__$3);
}));

c3kit.wire.js.add_doc_listener = (function c3kit$wire$js$add_doc_listener(event,handler){
return c3kit.wire.js.add_listener.call(null,document,event,handler);
});
c3kit.wire.js.remove_doc_listener = (function c3kit$wire$js$remove_doc_listener(event,handler){
return c3kit.wire.js.remove_listener.call(null,document,event,handler);
});
c3kit.wire.js.__GT_query_value = (function c3kit$wire$js$__GT_query_value(v){
if((v instanceof Date)){
return cljs.core.pr_str.call(null,v);
} else {
return v;
}
});
c3kit.wire.js.__GT_query_string = (function c3kit$wire$js$__GT_query_string(params){
return cljs_http.client.generate_query_string.call(null,cljs.core.update_vals.call(null,params,c3kit.wire.js.__GT_query_value));
});
c3kit.wire.js.encode_url = (function c3kit$wire$js$encode_url(root,params){
var G__15501 = root;
if(cljs.core.seq.call(null,params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15501),"?",c3kit.wire.js.__GT_query_string.call(null,params)].join('');
} else {
return G__15501;
}
});
c3kit.wire.js.download = (function c3kit$wire$js$download(var_args){
var G__15505 = arguments.length;
switch (G__15505) {
case 2:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2 = (function (url,filename){
return c3kit.wire.js.download.call(null,url,filename,cljs.core.PersistentArrayMap.EMPTY);
}));

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3 = (function (url,filename,params){
var a = document.createElement("a");
var url__$1 = c3kit.wire.js.encode_url.call(null,url,params);
(a.href = url__$1);

(a.download = filename);

return a.click();
}));

(c3kit.wire.js.download.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.download_data = (function c3kit$wire$js$download_data(data,content_type,filename){
var blob = (new Blob(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),content_type], null))));
var url = URL.createObjectURL(blob);
c3kit.wire.js.download.call(null,url,filename);

return c3kit.wire.js.timeout.call(null,(100),(function (){
return URL.revokeObjectURL(url);
}));
});
c3kit.wire.js.__GT_audio = (function c3kit$wire$js$__GT_audio(src){
var audio = cljs.core.js_invoke.call(null,document,"createElement","audio");
c3kit.wire.js.o_set.call(null,audio,"src",src);

return audio;
});
c3kit.wire.js.play_audio = (function c3kit$wire$js$play_audio(audio){
return cljs.core.js_invoke.call(null,audio,"play");
});
c3kit.wire.js.pause_audio = (function c3kit$wire$js$pause_audio(audio){
return cljs.core.js_invoke.call(null,audio,"pause");
});
c3kit.wire.js.copy_to_clipboard_fallback = (function c3kit$wire$js$copy_to_clipboard_fallback(text){
var textarea = document.createElement("textarea");
var body = document.body;
(textarea.textContent = text);

body.appendChild(textarea);

var selection = document.getSelection();
var range = document.createRange();
range.selectNode(textarea);

selection.removeAllRanges();

selection.addRange(range);

document.execCommand("copy");

selection.removeAllRanges();

return body.removeChild(textarea);
});
c3kit.wire.js.copy_to_clipboard = (function c3kit$wire$js$copy_to_clipboard(text){
var temp__5823__auto__ = navigator.clipboard;
if(cljs.core.truth_(temp__5823__auto__)){
var clipboard = temp__5823__auto__;
return clipboard.writeText(text);
} else {
return c3kit.wire.js.copy_to_clipboard_fallback.call(null,text);
}
});
c3kit.wire.js.begin_path_BANG_ = (function c3kit$wire$js$begin_path_BANG_(ctx){
return ctx.beginPath();
});
c3kit.wire.js.stroke_BANG_ = (function c3kit$wire$js$stroke_BANG_(ctx){
return ctx.stroke();
});
c3kit.wire.js.fill_BANG_ = (function c3kit$wire$js$fill_BANG_(ctx){
return ctx.fill();
});
c3kit.wire.js.line_width_EQ_ = (function c3kit$wire$js$line_width_EQ_(ctx,w){
return (ctx.lineWidth = w);
});
c3kit.wire.js.stroke_color_EQ_ = (function c3kit$wire$js$stroke_color_EQ_(ctx,color){
return (ctx.strokeStyle = color);
});
c3kit.wire.js.fill_color_EQ_ = (function c3kit$wire$js$fill_color_EQ_(ctx,color){
return (ctx.fillStyle = color);
});
c3kit.wire.js.font_EQ_ = (function c3kit$wire$js$font_EQ_(ctx,font){
return (ctx.font = font);
});
c3kit.wire.js.text_align_EQ_ = (function c3kit$wire$js$text_align_EQ_(ctx,align){
return (ctx.textAlign = align);
});
c3kit.wire.js.close_path_BANG_ = (function c3kit$wire$js$close_path_BANG_(ctx){
return ctx.closePath();
});
c3kit.wire.js.move_to_BANG_ = (function c3kit$wire$js$move_to_BANG_(ctx,p__15523){
var vec__15528 = p__15523;
var x = cljs.core.nth.call(null,vec__15528,(0),null);
var y = cljs.core.nth.call(null,vec__15528,(1),null);
return ctx.moveTo(x,y);
});
c3kit.wire.js.line_to_BANG_ = (function c3kit$wire$js$line_to_BANG_(ctx,p__15531){
var vec__15532 = p__15531;
var x = cljs.core.nth.call(null,vec__15532,(0),null);
var y = cljs.core.nth.call(null,vec__15532,(1),null);
return ctx.lineTo(x,y);
});
c3kit.wire.js.fill_rect_BANG_ = (function c3kit$wire$js$fill_rect_BANG_(ctx,p__15535,p__15536){
var vec__15537 = p__15535;
var x1 = cljs.core.nth.call(null,vec__15537,(0),null);
var y1 = cljs.core.nth.call(null,vec__15537,(1),null);
var vec__15540 = p__15536;
var x2 = cljs.core.nth.call(null,vec__15540,(0),null);
var y2 = cljs.core.nth.call(null,vec__15540,(1),null);
return ctx.fillRect(x1,y1,x2,y2);
});
c3kit.wire.js.stroke_rect_BANG_ = (function c3kit$wire$js$stroke_rect_BANG_(ctx,p__15544,p__15545){
var vec__15546 = p__15544;
var x1 = cljs.core.nth.call(null,vec__15546,(0),null);
var y1 = cljs.core.nth.call(null,vec__15546,(1),null);
var vec__15549 = p__15545;
var x2 = cljs.core.nth.call(null,vec__15549,(0),null);
var y2 = cljs.core.nth.call(null,vec__15549,(1),null);
return ctx.strokeRect(x1,y1,x2,y2);
});
c3kit.wire.js.fill_text_BANG_ = (function c3kit$wire$js$fill_text_BANG_(ctx,text,p__15552){
var vec__15553 = p__15552;
var x = cljs.core.nth.call(null,vec__15553,(0),null);
var y = cljs.core.nth.call(null,vec__15553,(1),null);
return ctx.fillText(text,x,y);
});
c3kit.wire.js.scroll_into_view = (function c3kit$wire$js$scroll_into_view(var_args){
var G__15557 = arguments.length;
switch (G__15557) {
case 1:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.js.scroll_into_view.call(null,thing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth"], null));
}));

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__15558 = c3kit.wire.js.resolve_node.call(null,thing);
if((G__15558 == null)){
return null;
} else {
return G__15558.scrollIntoView(cljs.core.clj__GT_js.call(null,options));
}
}));

(c3kit.wire.js.scroll_into_view.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.scroll_to = (function c3kit$wire$js$scroll_to(thing,options){
var G__15559 = c3kit.wire.js.resolve_node.call(null,thing);
if((G__15559 == null)){
return null;
} else {
return G__15559.scrollTo(cljs.core.clj__GT_js.call(null,options));
}
});
c3kit.wire.js.scroll_to_top = (function c3kit$wire$js$scroll_to_top(){
return window.scrollTo(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth",new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)));
});
c3kit.wire.js.console_log = cljs.core.partial.call(null,console.log);
/**
 * Insert in threading macro to console log the value.
 */
c3kit.wire.js.__GT_inspect = (function c3kit$wire$js$__GT_inspect(v){
c3kit.wire.js.console_log.call(null,"->inspect:",v);

return v;
});
/**
 * Creates a JavaScript Event of a given type with optional added attributes
 */
c3kit.wire.js.__GT_event = (function c3kit$wire$js$__GT_event(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15569 = arguments.length;
var i__5750__auto___15571 = (0);
while(true){
if((i__5750__auto___15571 < len__5749__auto___15569)){
args__5755__auto__.push((arguments[i__5750__auto___15571]));

var G__15574 = (i__5750__auto___15571 + (1));
i__5750__auto___15571 = G__15574;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic = (function (type,p__15567){
var map__15568 = p__15567;
var map__15568__$1 = cljs.core.__destructure_map.call(null,map__15568);
var kvs = map__15568__$1;
return c3kit.wire.js.o_merge_BANG_.call(null,(new Event(type)),kvs);
}));

(c3kit.wire.js.__GT_event.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.__GT_event.cljs$lang$applyTo = (function (seq15561){
var G__15562 = cljs.core.first.call(null,seq15561);
var seq15561__$1 = cljs.core.next.call(null,seq15561);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15562,seq15561__$1);
}));

/**
 * Dispatches the event to the node.
 * If given an event, kvs is merged onto it.
 * If given a string, creates a new event of that type with kvs.
 */
c3kit.wire.js.dispatch_event = (function c3kit$wire$js$dispatch_event(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15578 = arguments.length;
var i__5750__auto___15579 = (0);
while(true){
if((i__5750__auto___15579 < len__5749__auto___15578)){
args__5755__auto__.push((arguments[i__5750__auto___15579]));

var G__15580 = (i__5750__auto___15579 + (1));
i__5750__auto___15579 = G__15580;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic = (function (node,e,p__15575){
var map__15576 = p__15575;
var map__15576__$1 = cljs.core.__destructure_map.call(null,map__15576);
var kvs = map__15576__$1;
var e__$1 = ((typeof e === 'string')?c3kit.wire.js.__GT_event.call(null,e,kvs):c3kit.wire.js.o_merge_BANG_.call(null,e,kvs));
return cljs.core.js_invoke.call(null,node,"dispatchEvent",e__$1);
}));

(c3kit.wire.js.dispatch_event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.dispatch_event.cljs$lang$applyTo = (function (seq15570){
var G__15572 = cljs.core.first.call(null,seq15570);
var seq15570__$1 = cljs.core.next.call(null,seq15570);
var G__15573 = cljs.core.first.call(null,seq15570__$1);
var seq15570__$2 = cljs.core.next.call(null,seq15570__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15572,G__15573,seq15570__$2);
}));

c3kit.wire.js.__GT_replacer = (function c3kit$wire$js$__GT_replacer(replacer){
if(cljs.core.fn_QMARK_.call(null,replacer)){
return replacer;
} else {
if(cljs.core.map_QMARK_.call(null,replacer)){
return (function (k,v){
return cljs.core.get.call(null,replacer,k,v);
});
} else {
return cljs.core.clj__GT_js.call(null,replacer);

}
}
});
/**
 * Converts a value to a JSON string.
 *  - value:    The value to convert to JSON.
 *  - replacer: A 2-arity function of key and value
 *  - space:    A string or number that is used to insert white space.
 */
c3kit.wire.js.stringify_json = (function c3kit$wire$js$stringify_json(var_args){
var G__15582 = arguments.length;
switch (G__15582) {
case 1:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1 = (function (value){
return c3kit.wire.js.stringify_json.call(null,value,null);
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2 = (function (value,replacer){
return c3kit.wire.js.stringify_json.call(null,value,replacer,(2));
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3 = (function (value,replacer,space){
return JSON.stringify(cljs.core.clj__GT_js.call(null,value),c3kit.wire.js.__GT_replacer.call(null,replacer),space);
}));

(c3kit.wire.js.stringify_json.cljs$lang$maxFixedArity = 3);

/**
 * Constructs the Clojure value described by the string.
 *  - value:   The JSON string
 *  - reviver: A 2-arity function of key and value
 */
c3kit.wire.js.parse_json = (function c3kit$wire$js$parse_json(var_args){
var G__15589 = arguments.length;
switch (G__15589) {
case 1:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1 = (function (text){
return c3kit.wire.js.parse_json.call(null,text,null);
}));

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2 = (function (text,reviver){
return cljs.core.js__GT_clj.call(null,JSON.parse(text,c3kit.wire.js.__GT_replacer.call(null,reviver)));
}));

(c3kit.wire.js.parse_json.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js.js.map
