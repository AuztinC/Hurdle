// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.schema');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('com.cognitect.transit.types');
goog.require('clojure.walk');
c3kit.apron.schema.coerce_ex = (function c3kit$apron$schema$coerce_ex(value,type){
var value_str = cljs.core.pr_str.call(null,value);
var value_str__$1 = ((((50) < ((value_str).length)))?[cljs.core.subs.call(null,value_str,(0),(45)),"..."].join(''):value_str);
return cljs.core.ex_info.call(null,["can't coerce ",value_str__$1," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),type], null));
});
c3kit.apron.schema.validation_ex = (function c3kit$apron$schema$validation_ex(message,value){
return cljs.core.ex_info.call(null,(function (){var or__5025__auto__ = message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "is invalid";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
c3kit.apron.schema.date = Date;
c3kit.apron.schema.present_QMARK_ = (function c3kit$apron$schema$present_QMARK_(v){
return (!((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_.call(null,v)))))));
});
c3kit.apron.schema.required = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.present_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"is required"], null);
c3kit.apron.schema.nil_or = (function c3kit$apron$schema$nil_or(f){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/nil-or deprecated.  Use nil?-or instead"], null);
}),null)),null,(35),null);

return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.nil_QMARK__or = (function c3kit$apron$schema$nil_QMARK__or(f){
return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.email_pattern = /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
c3kit.apron.schema.email_QMARK_ = (function c3kit$apron$schema$email_QMARK_(value){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,c3kit.apron.schema.email_pattern,value));
});
c3kit.apron.schema.bigdec_QMARK_ = (function c3kit$apron$schema$bigdec_QMARK_(v){
return typeof v === 'number';
});
c3kit.apron.schema.uri_QMARK_ = (function c3kit$apron$schema$uri_QMARK_(value){
return typeof value === 'string';
});
c3kit.apron.schema.is_enum_QMARK_ = (function c3kit$apron$schema$is_enum_QMARK_(enum$){
var enum_name = cljs.core.name.call(null,new cljs.core.Keyword(null,"enum","enum",1679018432).cljs$core$IFn$_invoke$arity$1(enum$));
var enum_set = c3kit.apron.corec.map_set.call(null,(function (p1__14509_SHARP_){
return cljs.core.keyword.call(null,enum_name,cljs.core.name.call(null,p1__14509_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(enum$));
return (function (value){
return (((value == null)) || (cljs.core.contains_QMARK_.call(null,enum_set,value)));
});
});
c3kit.apron.schema.parse_BANG_ = (function c3kit$apron$schema$parse_BANG_(f,v){
var result = f.call(null,v);
if(cljs.core.truth_(isNaN(result))){
throw Error("parsed NaN");
} else {
return result;
}
});
c3kit.apron.schema.__GT_boolean = (function c3kit$apron$schema$__GT_boolean(value){
if((value == null)){
return null;
} else {
if(cljs.core.boolean_QMARK_.call(null,value)){
return value;
} else {
if(typeof value === 'string'){
return cljs.core.not_EQ_.call(null,"false",clojure.string.lower_case.call(null,value));
} else {
return cljs.core.boolean$.call(null,value);

}
}
}
});
c3kit.apron.schema.__GT_string = (function c3kit$apron$schema$__GT_string(value){
var G__14510 = value;
if((G__14510 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14510);
}
});
c3kit.apron.schema.str_or_nil = (function c3kit$apron$schema$str_or_nil(v){
return c3kit.apron.schema.__GT_string.call(null,v);
});
c3kit.apron.schema.__GT_keyword = (function c3kit$apron$schema$__GT_keyword(value){
if((value == null)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return value;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
if(clojure.string.starts_with_QMARK_.call(null,s,":")){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return cljs.core.keyword.call(null,s);
}

}
}
});
c3kit.apron.schema.__GT_float = (function c3kit$apron$schema$__GT_float(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseFloat,v);
}catch (e14511){var _ = e14511;
throw c3kit.apron.schema.coerce_ex.call(null,v,"float");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(c3kit.apron.schema.bigdec_QMARK_.call(null,v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"float");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_int = (function c3kit$apron$schema$__GT_int(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseInt,v);
}catch (e14512){var _ = e14512;
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");
}}
} else {
if((v instanceof cljs.core.Keyword)){
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return cljs.core.long$.call(null,v);
} else {
if(c3kit.apron.schema.bigdec_QMARK_.call(null,v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");

}
}
}
}
}
}
}
});
c3kit.apron.schema.__GT_bigdec = (function c3kit$apron$schema$__GT_bigdec(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseFloat,v);
}catch (e14513){var _ = e14513;
throw c3kit.apron.schema.coerce_ex.call(null,v,"bigdec");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"bigdec");

}
}
}
}
}
});
c3kit.apron.schema.__GT_date = (function c3kit$apron$schema$__GT_date(v){
if((v == null)){
return null;
} else {
if((v instanceof c3kit.apron.schema.date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14514 = (new Date());
G__14514.setTime(v);

return G__14514;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_sql_date = (function c3kit$apron$schema$__GT_sql_date(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14515 = (new Date());
G__14515.setTime(v);

return G__14515;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"sql-date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"sql-date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_timestamp = (function c3kit$apron$schema$__GT_timestamp(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14516 = (new Date());
G__14516.setTime(v);

return G__14516;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"timestamp");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"timestamp");

}
}
}
}
}
});
c3kit.apron.schema.__GT_uri = (function c3kit$apron$schema$__GT_uri(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"uri");

}
}
});
c3kit.apron.schema.__GT_map = (function c3kit$apron$schema$__GT_map(m){
if((m == null)){
return m;
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return m;
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,m,"map");

}
}
}
});
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
c3kit.apron.schema.__GT_uuid = (function c3kit$apron$schema$__GT_uuid(v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'string'){
return cljs.core.uuid.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"uuid");

}
}
}
});
c3kit.apron.schema.multiple_QMARK_ = (function c3kit$apron$schema$multiple_QMARK_(thing){
return ((cljs.core.sequential_QMARK_.call(null,thing)) || (cljs.core.set_QMARK_.call(null,thing)));
});
c3kit.apron.schema.__GT_vec = (function c3kit$apron$schema$__GT_vec(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,v)){
return cljs.core.vec.call(null,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
c3kit.apron.schema.__GT_seq = (function c3kit$apron$schema$__GT_seq(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,v)){
return v;
} else {
return (new cljs.core.List(null,v,null,(1),null));

}
}
});
c3kit.apron.schema.type_validators = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"kw-ref","kw-ref",1430852082),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"any","any",1705907423)],[c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14525_SHARP_){
return (p1__14525_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.ifn_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14526_SHARP_){
return (p1__14526_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.string_QMARK_),cljs.core.constantly.call(null,true),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.bigdec_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.uri_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.uuid_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.multiple_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14528_SHARP_){
return (p1__14528_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.boolean_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.map_QMARK_),cljs.core.constantly.call(null,true)]);
c3kit.apron.schema.type_coercers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"kw-ref","kw-ref",1430852082),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"any","any",1705907423)],[c3kit.apron.schema.__GT_sql_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,cljs.core.identity,c3kit.apron.schema.__GT_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_string,cljs.core.identity,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_bigdec,c3kit.apron.schema.__GT_uri,c3kit.apron.schema.__GT_uuid,cljs.core.identity,c3kit.apron.schema.__GT_timestamp,c3kit.apron.schema.__GT_boolean,c3kit.apron.schema.__GT_map,cljs.core.identity]);
c3kit.apron.schema.valid_types = cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,c3kit.apron.schema.type_coercers),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one-of","one-of",144367098)], null)));
c3kit.apron.schema.normalize_seq_shorthand = (function c3kit$apron$schema$normalize_seq_shorthand(p__14534){
var map__14535 = p__14534;
var map__14535__$1 = cljs.core.__destructure_map.call(null,map__14535);
var spec = map__14535__$1;
var type = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,type))){
throw cljs.core.ex_info.call(null,"seq shorthand type must contain 1 type",spec);
} else {
}

var spec_type = cljs.core.first.call(null,type);
var base_spec_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"validate","validate",-201300827),null,new cljs.core.Keyword(null,"present","present",-1224645465),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"validations","validations",1347149461),null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null);
if((spec_type instanceof cljs.core.Keyword)){
var entry_spec = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),spec_type);
return cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),entry_spec);
} else {
if(((cljs.core.map_QMARK_.call(null,spec_type)) && (cljs.core.contains_QMARK_.call(null,spec_type,new cljs.core.Keyword(null,"type","type",1174270348))))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),c3kit.apron.schema.normalize_spec.call(null,spec_type));
} else {
var entry_spec = c3kit.apron.schema.normalize_spec.call(null,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),spec_type));
return cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),entry_spec);

}
}
});
c3kit.apron.schema.normalize_map_shorthand = (function c3kit$apron$schema$normalize_map_shorthand(p__14536){
var map__14537 = p__14536;
var map__14537__$1 = cljs.core.__destructure_map.call(null,map__14537);
var spec = map__14537__$1;
var type = cljs.core.get.call(null,map__14537__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),type);
});
c3kit.apron.schema.normalize_set_shorthand = (function c3kit$apron$schema$normalize_set_shorthand(p__14538){
var map__14539 = p__14538;
var map__14539__$1 = cljs.core.__destructure_map.call(null,map__14539);
var spec = map__14539__$1;
var type = cljs.core.get.call(null,map__14539__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.mapv.call(null,c3kit.apron.schema.normalize_spec,type));
});
/**
 * Returns true if the schema-or-spec has been normalized, false otherwise.
 */
c3kit.apron.schema.normalized_QMARK_ = (function c3kit$apron$schema$normalized_QMARK_(schema_or_spec){
return new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema_or_spec));
});
c3kit.apron.schema.normal_spec_form_QMARK_ = (function c3kit$apron$schema$normal_spec_form_QMARK_(spec){
return ((cljs.core.map_QMARK_.call(null,spec)) && ((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec) instanceof cljs.core.Keyword)));
});
/**
 * If the spec is using a shorthand, it will be expanded.
 */
c3kit.apron.schema.normalize_spec = (function c3kit$apron$schema$normalize_spec(spec){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.core.with_meta.call(null,((c3kit.apron.schema.normal_spec_form_QMARK_.call(null,spec))?spec:(((spec instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),spec], null):((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_seq_shorthand.call(null,spec):((cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_map_shorthand.call(null,spec):((cljs.core.set_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_set_shorthand.call(null,spec):(function(){throw cljs.core.ex_info.call(null,["invalid spec: ",cljs.core.pr_str.call(null,spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null))})()
))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980),true], null));
}
});
/**
 * Returns the schema with all shorthand specs expanded.
 */
c3kit.apron.schema.normalize_schema = (function c3kit$apron$schema$normalize_schema(schema){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_.call(null,schema))){
return schema;
} else {
return cljs.core.with_meta.call(null,cljs.core.merge.call(null,cljs.core.update_vals.call(null,cljs.core.dissoc.call(null,schema,new cljs.core.Keyword(null,"*","*",-1294732318)),c3kit.apron.schema.normalize_spec),cljs.core.select_keys.call(null,schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980),true], null));
}
});
/**
 * Used as a :present value to remove the entry from presentation
 */
c3kit.apron.schema.omit = cljs.core.constantly.call(null,null);
c3kit.apron.schema.kind = (function c3kit$apron$schema$kind(key){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"value","value",305978217),key,new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14540_SHARP_){
return (((p1__14540_SHARP_ == null)) || (cljs.core._EQ_.call(null,key,p1__14540_SHARP_)));
})], null),new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14541_SHARP_){
var or__5025__auto__ = p1__14541_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return key;
}
})], null),new cljs.core.Keyword(null,"message","message",-406056002),["mismatch; must be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null);
});
c3kit.apron.schema.id = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ref","ref",1289896967)], null);
c3kit.apron.schema.type_coercer_BANG_ = (function c3kit$apron$schema$type_coercer_BANG_(type){
var or__5025__auto__ = cljs.core.get.call(null,c3kit.apron.schema.type_coercers,type);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.call(null,["unhandled coercion type: ",cljs.core.pr_str.call(null,type)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coerce?","coerce?",2077677821),true], null));
}
});
c3kit.apron.schema.type_validator_BANG_ = (function c3kit$apron$schema$type_validator_BANG_(type){
var or__5025__auto__ = cljs.core.get.call(null,c3kit.apron.schema.type_validators,type);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.call(null,["unhandled validation type: ",cljs.core.pr_str.call(null,type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

/**
 * @interface
 */
c3kit.apron.schema.FieldError = function(){};


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
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
c3kit.apron.schema.CoerceError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14543,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14548 = k14543;
var G__14548__$1 = (((G__14548 instanceof cljs.core.Keyword))?G__14548.fqn:null);
switch (G__14548__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14543,else__5326__auto__);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__14552){
var vec__14553 = p__14552;
var k__5347__auto__ = cljs.core.nth.call(null,vec__14553,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__14553,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#c3kit.apron.schema.CoerceError{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14542){
var self__ = this;
var G__14542__$1 = this;
return (new cljs.core.RecordIter((0),G__14542__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1845798480 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14544,other14545){
var self__ = this;
var this14544__$1 = this;
return (((!((other14545 == null)))) && ((((this14544__$1.constructor === other14545.constructor)) && (((cljs.core._EQ_.call(null,this14544__$1.message,other14545.message)) && (cljs.core._EQ_.call(null,this14544__$1.__extmap,other14545.__extmap)))))));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14543){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14560 = k14543;
var G__14560__$1 = (((G__14560 instanceof cljs.core.Keyword))?G__14560.fqn:null);
switch (G__14560__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14543);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14542){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14561 = cljs.core.keyword_identical_QMARK_;
var expr__14562 = k__5332__auto__;
if(cljs.core.truth_(pred__14561.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14562))){
return (new c3kit.apron.schema.CoerceError(G__14542,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__14542),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14542){
var self__ = this;
var this__5322__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,G__14542,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(c3kit.apron.schema.CoerceError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.CoerceError.cljs$lang$type = true);

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/CoerceError",null,(1),null));
}));

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"c3kit.apron.schema/CoerceError");
}));

/**
 * Positional factory function for c3kit.apron.schema/CoerceError.
 */
c3kit.apron.schema.__GT_CoerceError = (function c3kit$apron$schema$__GT_CoerceError(message){
return (new c3kit.apron.schema.CoerceError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/CoerceError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_CoerceError = (function c3kit$apron$schema$map__GT_CoerceError(G__14546){
var extmap__5365__auto__ = (function (){var G__14564 = cljs.core.dissoc.call(null,G__14546,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14546)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14564);
} else {
return G__14564;
}
})();
return (new c3kit.apron.schema.CoerceError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14546),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
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
c3kit.apron.schema.ValidateError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14567,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14574 = k14567;
var G__14574__$1 = (((G__14574 instanceof cljs.core.Keyword))?G__14574.fqn:null);
switch (G__14574__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14567,else__5326__auto__);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__14575){
var vec__14576 = p__14575;
var k__5347__auto__ = cljs.core.nth.call(null,vec__14576,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__14576,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#c3kit.apron.schema.ValidateError{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14566){
var self__ = this;
var G__14566__$1 = this;
return (new cljs.core.RecordIter((0),G__14566__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1231026224 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14568,other14569){
var self__ = this;
var this14568__$1 = this;
return (((!((other14569 == null)))) && ((((this14568__$1.constructor === other14569.constructor)) && (((cljs.core._EQ_.call(null,this14568__$1.message,other14569.message)) && (cljs.core._EQ_.call(null,this14568__$1.__extmap,other14569.__extmap)))))));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14567){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14602 = k14567;
var G__14602__$1 = (((G__14602 instanceof cljs.core.Keyword))?G__14602.fqn:null);
switch (G__14602__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14567);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14566){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14605 = cljs.core.keyword_identical_QMARK_;
var expr__14606 = k__5332__auto__;
if(cljs.core.truth_(pred__14605.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14606))){
return (new c3kit.apron.schema.ValidateError(G__14566,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__14566),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14566){
var self__ = this;
var this__5322__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,G__14566,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(c3kit.apron.schema.ValidateError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.ValidateError.cljs$lang$type = true);

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ValidateError",null,(1),null));
}));

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"c3kit.apron.schema/ValidateError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ValidateError.
 */
c3kit.apron.schema.__GT_ValidateError = (function c3kit$apron$schema$__GT_ValidateError(message){
return (new c3kit.apron.schema.ValidateError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ValidateError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ValidateError = (function c3kit$apron$schema$map__GT_ValidateError(G__14570){
var extmap__5365__auto__ = (function (){var G__14619 = cljs.core.dissoc.call(null,G__14570,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14570)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14619);
} else {
return G__14619;
}
})();
return (new c3kit.apron.schema.ValidateError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14570),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
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
c3kit.apron.schema.ConformError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14626,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14639 = k14626;
var G__14639__$1 = (((G__14639 instanceof cljs.core.Keyword))?G__14639.fqn:null);
switch (G__14639__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14626,else__5326__auto__);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__14644){
var vec__14646 = p__14644;
var k__5347__auto__ = cljs.core.nth.call(null,vec__14646,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__14646,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#c3kit.apron.schema.ConformError{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14625){
var self__ = this;
var G__14625__$1 = this;
return (new cljs.core.RecordIter((0),G__14625__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-668996003 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14627,other14628){
var self__ = this;
var this14627__$1 = this;
return (((!((other14628 == null)))) && ((((this14627__$1.constructor === other14628.constructor)) && (((cljs.core._EQ_.call(null,this14627__$1.message,other14628.message)) && (cljs.core._EQ_.call(null,this14627__$1.__extmap,other14628.__extmap)))))));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14626){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14669 = k14626;
var G__14669__$1 = (((G__14669 instanceof cljs.core.Keyword))?G__14669.fqn:null);
switch (G__14669__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14626);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14625){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14678 = cljs.core.keyword_identical_QMARK_;
var expr__14679 = k__5332__auto__;
if(cljs.core.truth_(pred__14678.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14679))){
return (new c3kit.apron.schema.ConformError(G__14625,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__14625),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ConformError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14625){
var self__ = this;
var this__5322__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,G__14625,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(c3kit.apron.schema.ConformError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.ConformError.cljs$lang$type = true);

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ConformError",null,(1),null));
}));

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"c3kit.apron.schema/ConformError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ConformError.
 */
c3kit.apron.schema.__GT_ConformError = (function c3kit$apron$schema$__GT_ConformError(message){
return (new c3kit.apron.schema.ConformError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ConformError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ConformError = (function c3kit$apron$schema$map__GT_ConformError(G__14633){
var extmap__5365__auto__ = (function (){var G__14687 = cljs.core.dissoc.call(null,G__14633,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14633)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14687);
} else {
return G__14687;
}
})();
return (new c3kit.apron.schema.ConformError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14633),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
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
c3kit.apron.schema.PresentError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14690,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14696 = k14690;
var G__14696__$1 = (((G__14696 instanceof cljs.core.Keyword))?G__14696.fqn:null);
switch (G__14696__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14690,else__5326__auto__);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5346__auto__,p__14697){
var vec__14698 = p__14697;
var k__5347__auto__ = cljs.core.nth.call(null,vec__14698,(0),null);
var v__5348__auto__ = cljs.core.nth.call(null,vec__14698,(1),null);
return f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__);
}),init__5345__auto__,this__5343__auto____$1);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5339__auto__,pr_pair__5341__auto__,"#c3kit.apron.schema.PresentError{",", ","}",opts__5340__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14689){
var self__ = this;
var G__14689__$1 = this;
return (new cljs.core.RecordIter((0),G__14689__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-923193472 ^ cljs.core.hash_unordered_coll.call(null,coll__5320__auto__));
}).call(null,this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14691,other14692){
var self__ = this;
var this14691__$1 = this;
return (((!((other14692 == null)))) && ((((this14691__$1.constructor === other14692.constructor)) && (((cljs.core._EQ_.call(null,this14691__$1.message,other14692.message)) && (cljs.core._EQ_.call(null,this14691__$1.__extmap,other14692.__extmap)))))));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5334__auto__)),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14690){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14702 = k14690;
var G__14702__$1 = (((G__14702 instanceof cljs.core.Keyword))?G__14702.fqn:null);
switch (G__14702__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14690);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14689){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14703 = cljs.core.keyword_identical_QMARK_;
var expr__14704 = k__5332__auto__;
if(cljs.core.truth_(pred__14703.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14704))){
return (new c3kit.apron.schema.PresentError(G__14689,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5332__auto__,G__14689),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.PresentError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14689){
var self__ = this;
var this__5322__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,G__14689,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5329__auto__,(0)),cljs.core._nth.call(null,entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(c3kit.apron.schema.PresentError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.PresentError.cljs$lang$type = true);

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/PresentError",null,(1),null));
}));

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write.call(null,writer__5370__auto__,"c3kit.apron.schema/PresentError");
}));

/**
 * Positional factory function for c3kit.apron.schema/PresentError.
 */
c3kit.apron.schema.__GT_PresentError = (function c3kit$apron$schema$__GT_PresentError(message){
return (new c3kit.apron.schema.PresentError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/PresentError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_PresentError = (function c3kit$apron$schema$map__GT_PresentError(G__14693){
var extmap__5365__auto__ = (function (){var G__14706 = cljs.core.dissoc.call(null,G__14693,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14693)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14706);
} else {
return G__14706;
}
})();
return (new c3kit.apron.schema.PresentError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14693),null,cljs.core.not_empty.call(null,extmap__5365__auto__),null));
});

c3kit.apron.schema._create_field_error = (function c3kit$apron$schema$_create_field_error(ctor,default_message,options){
var ex = new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(options);
var data = cljs.core.ex_data.call(null,ex);
var message = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.ex_message.call(null,ex);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return default_message;
}
}
}
})();
return cljs.core.with_meta.call(null,ctor.call(null,message),cljs.core.merge.call(null,data,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"message","message",-406056002))));
});
/**
 * Return the message of an error.
 */
c3kit.apron.schema.error_message = (function c3kit$apron$schema$error_message(error){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
});
/**
 * Return the exception attached to a FieldError if any, otherwise nil.
 */
c3kit.apron.schema.error_exception = (function c3kit$apron$schema$error_exception(field_error){
return new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the value that caused the FieldError, if any, otherwise nil.
 */
c3kit.apron.schema.error_value = (function c3kit$apron$schema$error_value(field_error){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the target type of a CoerceError, if any, otherwise nil.
 */
c3kit.apron.schema.error_type = (function c3kit$apron$schema$error_type(field_error){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the data map associated with the FieldError.
 */
c3kit.apron.schema.error_data = (function c3kit$apron$schema$error_data(field_error){
return cljs.core.meta.call(null,field_error);
});
c3kit.apron.schema.error__GT_exception = (function c3kit$apron$schema$error__GT_exception(error){
return cljs.core.ex_info.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if the value is a FieldError, false otherwise.
 */
c3kit.apron.schema.field_error_QMARK_ = (function c3kit$apron$schema$field_error_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.c3kit$apron$schema$FieldError$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,c3kit.apron.schema.FieldError,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,c3kit.apron.schema.FieldError,value);
}
});
/**
 * Returns a sequence of all the FieldErrors in a processed entity.
 */
c3kit.apron.schema.error_seq = (function c3kit$apron$schema$error_seq(entity){
if(c3kit.apron.schema.field_error_QMARK_.call(null,entity)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
return cljs.core.mapcat.call(null,c3kit.apron.schema.error_seq,cljs.core.vals.call(null,entity));
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,entity)){
return cljs.core.mapcat.call(null,c3kit.apron.schema.error_seq,entity);
} else {
return null;

}
}
}
});
/**
 * Return true if the processed entity has errors, false otherwise.
 */
c3kit.apron.schema.error_QMARK_ = (function c3kit$apron$schema$error_QMARK_(entity){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,c3kit.apron.schema.error_seq.call(null,entity)));
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_field_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_field_spec = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-field-spec"),(function (process,_spec,_value){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_entity_level_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_entity_level_spec = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-entity-level-spec"),(function (process,_key,_spec,_entity){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_error !== 'undefined')){
} else {
c3kit.apron.schema._process_error = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-error"),(function (process,_options){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_CoerceError,"coercion failed",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_ValidateError,"is invalid",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_ConformError,"conform failed",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_PresentError,"present failed",options);
}));
c3kit.apron.schema.field_result_or_error = (function c3kit$apron$schema$field_result_or_error(process,spec,value){
try{return c3kit.apron.schema._process_field_spec.call(null,process,spec,value);
}catch (e14710){var e = e14710;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
c3kit.apron.schema.entity_result_or_error = (function c3kit$apron$schema$entity_result_or_error(process,key,spec,entity){
try{return c3kit.apron.schema._process_entity_level_spec.call(null,process,key,spec,entity);
}catch (e14711){var e = e14711;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,spec,value){
var map__14712 = spec;
var map__14712__$1 = cljs.core.__destructure_map.call(null,map__14712);
var type = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14712__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var coerce_fns = cljs.core.conj.call(null,c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(spec)),c3kit.apron.schema.type_coercer_BANG_.call(null,type));
try{var result = cljs.core.reduce.call(null,(function (result,coerce_fn){
return coerce_fn.call(null,result);
}),value,coerce_fns);
return result;
}catch (e14713){var e = e14713;
return c3kit.apron.schema._process_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}}));
c3kit.apron.schema.process_validations = (function c3kit$apron$schema$process_validations(validations,value){
var seq__14714 = cljs.core.seq.call(null,validations);
var chunk__14715 = null;
var count__14716 = (0);
var i__14717 = (0);
while(true){
if((i__14717 < count__14716)){
var map__14728 = cljs.core._nth.call(null,chunk__14715,i__14717);
var map__14728__$1 = cljs.core.__destructure_map.call(null,map__14728);
var validate = cljs.core.get.call(null,map__14728__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14728__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validate_fns_14739 = ((c3kit.apron.schema.multiple_QMARK_.call(null,validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__14729_14740 = cljs.core.seq.call(null,validate_fns_14739);
var chunk__14730_14741 = null;
var count__14731_14742 = (0);
var i__14732_14743 = (0);
while(true){
if((i__14732_14743 < count__14731_14742)){
var v_fn_14744 = cljs.core._nth.call(null,chunk__14730_14741,i__14732_14743);
if(cljs.core.truth_(v_fn_14744.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14745 = seq__14729_14740;
var G__14746 = chunk__14730_14741;
var G__14747 = count__14731_14742;
var G__14748 = (i__14732_14743 + (1));
seq__14729_14740 = G__14745;
chunk__14730_14741 = G__14746;
count__14731_14742 = G__14747;
i__14732_14743 = G__14748;
continue;
} else {
var temp__5825__auto___14749 = cljs.core.seq.call(null,seq__14729_14740);
if(temp__5825__auto___14749){
var seq__14729_14750__$1 = temp__5825__auto___14749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14729_14750__$1)){
var c__5548__auto___14751 = cljs.core.chunk_first.call(null,seq__14729_14750__$1);
var G__14752 = cljs.core.chunk_rest.call(null,seq__14729_14750__$1);
var G__14753 = c__5548__auto___14751;
var G__14754 = cljs.core.count.call(null,c__5548__auto___14751);
var G__14755 = (0);
seq__14729_14740 = G__14752;
chunk__14730_14741 = G__14753;
count__14731_14742 = G__14754;
i__14732_14743 = G__14755;
continue;
} else {
var v_fn_14756 = cljs.core.first.call(null,seq__14729_14750__$1);
if(cljs.core.truth_(v_fn_14756.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14757 = cljs.core.next.call(null,seq__14729_14750__$1);
var G__14758 = null;
var G__14759 = (0);
var G__14760 = (0);
seq__14729_14740 = G__14757;
chunk__14730_14741 = G__14758;
count__14731_14742 = G__14759;
i__14732_14743 = G__14760;
continue;
}
} else {
}
}
break;
}


var G__14761 = seq__14714;
var G__14762 = chunk__14715;
var G__14763 = count__14716;
var G__14764 = (i__14717 + (1));
seq__14714 = G__14761;
chunk__14715 = G__14762;
count__14716 = G__14763;
i__14717 = G__14764;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__14714);
if(temp__5825__auto__){
var seq__14714__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14714__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__14714__$1);
var G__14766 = cljs.core.chunk_rest.call(null,seq__14714__$1);
var G__14767 = c__5548__auto__;
var G__14768 = cljs.core.count.call(null,c__5548__auto__);
var G__14769 = (0);
seq__14714 = G__14766;
chunk__14715 = G__14767;
count__14716 = G__14768;
i__14717 = G__14769;
continue;
} else {
var map__14733 = cljs.core.first.call(null,seq__14714__$1);
var map__14733__$1 = cljs.core.__destructure_map.call(null,map__14733);
var validate = cljs.core.get.call(null,map__14733__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validate_fns_14771 = ((c3kit.apron.schema.multiple_QMARK_.call(null,validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__14734_14772 = cljs.core.seq.call(null,validate_fns_14771);
var chunk__14735_14773 = null;
var count__14736_14774 = (0);
var i__14737_14775 = (0);
while(true){
if((i__14737_14775 < count__14736_14774)){
var v_fn_14776 = cljs.core._nth.call(null,chunk__14735_14773,i__14737_14775);
if(cljs.core.truth_(v_fn_14776.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14777 = seq__14734_14772;
var G__14778 = chunk__14735_14773;
var G__14779 = count__14736_14774;
var G__14780 = (i__14737_14775 + (1));
seq__14734_14772 = G__14777;
chunk__14735_14773 = G__14778;
count__14736_14774 = G__14779;
i__14737_14775 = G__14780;
continue;
} else {
var temp__5825__auto___14782__$1 = cljs.core.seq.call(null,seq__14734_14772);
if(temp__5825__auto___14782__$1){
var seq__14734_14783__$1 = temp__5825__auto___14782__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14734_14783__$1)){
var c__5548__auto___14784 = cljs.core.chunk_first.call(null,seq__14734_14783__$1);
var G__14785 = cljs.core.chunk_rest.call(null,seq__14734_14783__$1);
var G__14786 = c__5548__auto___14784;
var G__14787 = cljs.core.count.call(null,c__5548__auto___14784);
var G__14788 = (0);
seq__14734_14772 = G__14785;
chunk__14735_14773 = G__14786;
count__14736_14774 = G__14787;
i__14737_14775 = G__14788;
continue;
} else {
var v_fn_14789 = cljs.core.first.call(null,seq__14734_14783__$1);
if(cljs.core.truth_(v_fn_14789.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14790 = cljs.core.next.call(null,seq__14734_14783__$1);
var G__14791 = null;
var G__14792 = (0);
var G__14793 = (0);
seq__14734_14772 = G__14790;
chunk__14735_14773 = G__14791;
count__14736_14774 = G__14792;
i__14737_14775 = G__14793;
continue;
}
} else {
}
}
break;
}


var G__14794 = cljs.core.next.call(null,seq__14714__$1);
var G__14795 = null;
var G__14796 = (0);
var G__14797 = (0);
seq__14714 = G__14794;
chunk__14715 = G__14795;
count__14716 = G__14796;
i__14717 = G__14797;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,spec,value){
var map__14738 = spec;
var map__14738__$1 = cljs.core.__destructure_map.call(null,map__14738);
var type = cljs.core.get.call(null,map__14738__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var validate = cljs.core.get.call(null,map__14738__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var validations = cljs.core.get.call(null,map__14738__$1,new cljs.core.Keyword(null,"validations","validations",1347149461));
var message = cljs.core.get.call(null,map__14738__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validations__$1 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.type_validator_BANG_.call(null,type),new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null),(cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null):cljs.core.PersistentVector.EMPTY),validations);
c3kit.apron.schema.process_validations.call(null,validations__$1,value);

return value;
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,spec,value){
var coerce_result = c3kit.apron.schema.field_result_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
if(c3kit.apron.schema.field_error_QMARK_.call(null,coerce_result)){
return coerce_result;
} else {
var field_result_or_failure = c3kit.apron.schema.field_result_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),spec,coerce_result);
return field_result_or_failure;
}
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,spec,value){
var present_fns = c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"present","present",-1224645465).cljs$core$IFn$_invoke$arity$1(spec));
return cljs.core.reduce.call(null,(function (result,present_fn){
return present_fn.call(null,result);
}),value,present_fns);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,key,spec,entity){
var map__14765 = spec;
var map__14765__$1 = cljs.core.__destructure_map.call(null,map__14765);
var coerce = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var message = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var coerce_fns = c3kit.apron.schema.__GT_vec.call(null,coerce);
try{var coerced_entity = cljs.core.reduce.call(null,(function (result,coerce_fn){
return cljs.core.assoc.call(null,result,key,coerce_fn.call(null,result));
}),entity,coerce_fns);
return cljs.core.get.call(null,coerced_entity,key);
}catch (e14770){var e = e14770;
return c3kit.apron.schema._process_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,key,spec,entity){
var map__14781 = spec;
var map__14781__$1 = cljs.core.__destructure_map.call(null,map__14781);
var validate = cljs.core.get.call(null,map__14781__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var validations = cljs.core.get.call(null,map__14781__$1,new cljs.core.Keyword(null,"validations","validations",1347149461));
var message = cljs.core.get.call(null,map__14781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validations__$1 = cljs.core.concat.call(null,(cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null):cljs.core.PersistentVector.EMPTY),validations);
c3kit.apron.schema.process_validations.call(null,validations__$1,entity);

return cljs.core.get.call(null,entity,key);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,key,spec,entity){
var coerce_result = c3kit.apron.schema.entity_result_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),key,spec,entity);
if(c3kit.apron.schema.field_error_QMARK_.call(null,coerce_result)){
return coerce_result;
} else {
return c3kit.apron.schema.entity_result_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),key,spec,cljs.core.assoc.call(null,entity,key,coerce_result));
}
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,key,spec,entity){
var present_fns = c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"present","present",-1224645465).cljs$core$IFn$_invoke$arity$1(spec));
var presented_entity = cljs.core.reduce.call(null,(function (result,present_fn){
return cljs.core.assoc.call(null,result,key,present_fn.call(null,result));
}),entity,present_fns);
return cljs.core.get.call(null,presented_entity,key);
}));
c3kit.apron.schema.process_spec_on_seq_entries = (function c3kit$apron$schema$process_spec_on_seq_entries(process,spec,value){
if((value == null)){
return null;
} else {
if((!(c3kit.apron.schema.multiple_QMARK_.call(null,value)))){
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)),"] expected"].join('')], null));
} else {
var result = cljs.core.mapv.call(null,(function (p1__14798_SHARP_){
return c3kit.apron.schema._process_spec_on_value.call(null,process,spec,p1__14798_SHARP_);
}),value);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),process)){
return c3kit.apron.corec.removev.call(null,cljs.core.nil_QMARK_,result);
} else {
return result;
}

}
}
});
c3kit.apron.schema.process_seq_spec_on_value = (function c3kit$apron$schema$process_seq_spec_on_value(process,spec,value){
var entry_spec = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"any","any",1705907423)], null);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),process)){
var value__$1 = c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.process_spec_on_seq_entries.call(null,process,entry_spec,value__$1);
}
} else {
var value__$1 = c3kit.apron.schema.process_spec_on_seq_entries.call(null,process,entry_spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,value__$1);
}
}
});
c3kit.apron.schema.process_map_spec_on_value = (function c3kit$apron$schema$process_map_spec_on_value(process,spec,value){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),process)){
var value__$1 = c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value__$1);
}
} else {
if(cljs.core.map_QMARK_.call(null,value)){
var entity = c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value);
if(c3kit.apron.schema.error_QMARK_.call(null,entity)){
return entity;
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,entity);
}
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);

}
}
});
c3kit.apron.schema.process_one_of_on_value = (function c3kit$apron$schema$process_one_of_on_value(process,spec,value){
var specs = new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.seq.call(null,specs)){
var results = cljs.core.mapv.call(null,(function (p1__14799_SHARP_){
return c3kit.apron.schema._process_spec_on_value.call(null,process,p1__14799_SHARP_,value);
}),specs);
var non_error_results = cljs.core.filter.call(null,(function (p1__14800_SHARP_){
return (!(c3kit.apron.schema.error_QMARK_.call(null,p1__14800_SHARP_)));
}),results);
if(cljs.core.seq.call(null,non_error_results)){
return cljs.core.first.call(null,non_error_results);
} else {
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "one-of: no matching spec";
}
})(),new cljs.core.Keyword(null,"errors","errors",-908790718),results], null));
}
} else {
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"one-of: empty specs"], null));
}
});
c3kit.apron.schema._process_spec_on_value = (function c3kit$apron$schema$_process_spec_on_value(process,spec,value){
var spec__$1 = c3kit.apron.schema.normalize_spec.call(null,spec);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec__$1);
var G__14801 = type;
var G__14801__$1 = (((G__14801 instanceof cljs.core.Keyword))?G__14801.fqn:null);
switch (G__14801__$1) {
case "seq":
return c3kit.apron.schema.process_seq_spec_on_value.call(null,process,spec__$1,value);

break;
case "map":
return c3kit.apron.schema.process_map_spec_on_value.call(null,process,spec__$1,value);

break;
case "one-of":
return c3kit.apron.schema.process_one_of_on_value.call(null,process,spec__$1,value);

break;
default:
return c3kit.apron.schema.field_result_or_error.call(null,process,spec__$1,value);

}
});
c3kit.apron.schema.process_entity_key_spec = (function c3kit$apron$schema$process_entity_key_spec(process,entity,p__14804){
var vec__14805 = p__14804;
var key = cljs.core.nth.call(null,vec__14805,(0),null);
var spec = cljs.core.nth.call(null,vec__14805,(1),null);
var value = cljs.core.get.call(null,entity,key);
var new_value = c3kit.apron.schema._process_spec_on_value.call(null,process,spec,value);
if((!((new_value == null)))){
return cljs.core.assoc.call(null,entity,key,new_value);
} else {
return cljs.core.dissoc.call(null,entity,key);
}
});
c3kit.apron.schema.process_entity_level_spec = (function c3kit$apron$schema$process_entity_level_spec(process,result,p__14808){
var vec__14809 = p__14808;
var key = cljs.core.nth.call(null,vec__14809,(0),null);
var spec = cljs.core.nth.call(null,vec__14809,(1),null);
var value = c3kit.apron.schema.entity_result_or_error.call(null,process,key,spec,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(result));
if((!((value == null)))){
if(c3kit.apron.schema.error_QMARK_.call(null,value)){
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),key], null),value);
} else {
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),key], null),value);
}
} else {
return cljs.core.update.call(null,result,new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.dissoc,key);
}
});
c3kit.apron.schema.process_schema_on_entity = (function c3kit$apron$schema$process_schema_on_entity(process,schema,entity){
var entity__$1 = cljs.core.select_keys.call(null,entity,cljs.core.keys.call(null,schema));
var entity__$2 = cljs.core.reduce.call(null,cljs.core.partial.call(null,c3kit.apron.schema.process_entity_key_spec,process),entity__$1,cljs.core.dissoc.call(null,schema,new cljs.core.Keyword(null,"*","*",-1294732318)));
if(c3kit.apron.schema.error_QMARK_.call(null,entity__$2)){
return entity__$2;
} else {
var map__14818 = cljs.core.reduce.call(null,cljs.core.partial.call(null,c3kit.apron.schema.process_entity_level_spec,process),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity__$2], null),new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(schema));
var map__14818__$1 = cljs.core.__destructure_map.call(null,map__14818);
var entity__$3 = cljs.core.get.call(null,map__14818__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var errors = cljs.core.get.call(null,map__14818__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return cljs.core.merge.call(null,entity__$3,errors);
}
});
c3kit.apron.schema.coerce_entity_and_process_schema = (function c3kit$apron$schema$coerce_entity_and_process_schema(process,schema,entity){
try{return c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,c3kit.apron.schema.__GT_map.call(null,entity));
}catch (e14821){var e = e14821;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),entity,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
c3kit.apron.schema.process_value_or_error = (function c3kit$apron$schema$process_value_or_error(process,spec,value){
var result = c3kit.apron.schema._process_spec_on_value.call(null,process,spec,value);
var temp__5823__auto__ = cljs.core.first.call(null,c3kit.apron.schema.error_seq.call(null,result));
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
throw c3kit.apron.schema.error__GT_exception.call(null,error);
} else {
return result;
}
});
/**
 * returns coerced value or throws an exception
 */
c3kit.apron.schema.coerce_value_BANG_ = (function c3kit$apron$schema$coerce_value_BANG_(var_args){
var G__14824 = arguments.length;
switch (G__14824) {
case 3:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_value = (function c3kit$apron$schema$coerce_value(var_args){
var G__14828 = arguments.length;
switch (G__14828) {
case 3:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-value is DEPRECATED.  Use schema/coerce-value! instead."], null);
}),null)),null,(38),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
}));

(c3kit.apron.schema.coerce_value.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise
 */
c3kit.apron.schema.validate_value_BANG_ = (function c3kit$apron$schema$validate_value_BANG_(var_args){
var G__14835 = arguments.length;
switch (G__14835) {
case 3:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.validate_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),spec,value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return true or false
 */
c3kit.apron.schema.valid_value_QMARK_ = (function c3kit$apron$schema$valid_value_QMARK_(var_args){
var G__14838 = arguments.length;
switch (G__14838) {
case 3:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.valid_value_QMARK_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{c3kit.apron.schema.validate_value_BANG_.call(null,spec,value);

return true;
}catch (e14840){var _ = e14840;
return false;
}}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * coerce and validate, returns coerced value or throws
 */
c3kit.apron.schema.conform_value_BANG_ = (function c3kit$apron$schema$conform_value_BANG_(var_args){
var G__14843 = arguments.length;
switch (G__14843) {
case 3:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),spec,value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_value = (function c3kit$apron$schema$conform_value(var_args){
var G__14846 = arguments.length;
switch (G__14846) {
case 3:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-value is DEPRECATED.  Use schema/conform-value! instead."], null);
}),null)),null,(39),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),spec,value);
}));

(c3kit.apron.schema.conform_value.cljs$lang$maxFixedArity = 3);

/**
 * returns a presentable representation of the value, or throws
 */
c3kit.apron.schema.present_value_BANG_ = (function c3kit$apron$schema$present_value_BANG_(var_args){
var G__14850 = arguments.length;
switch (G__14850) {
case 3:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),spec,value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.present_value = (function c3kit$apron$schema$present_value(var_args){
var G__14853 = arguments.length;
switch (G__14853) {
case 3:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/present-value is DEPRECATED.  Use schema/present-value! instead."], null);
}),null)),null,(40),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),spec,value);
}));

(c3kit.apron.schema.present_value.cljs$lang$maxFixedArity = 3);

/**
 * Returns coerced entity or SchemaError if any coercion failed. Use error? to check result.
 *   Use Case: 'I want to change my data into the types specified by the schema.'
 */
c3kit.apron.schema.coerce = (function c3kit$apron$schema$coerce(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),schema,entity);
});
/**
 * Returns entity with all values true, or SchemaError when one or more invalid fields. Use error? to check result.
 *   Use Case: 'I want to make sure all the data is valid according to the schema.'
 */
c3kit.apron.schema.validate = (function c3kit$apron$schema$validate(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),schema,entity);
});
/**
 * Returns coerced entity or SchemaError upon any coercion or validation failure. Use error? to check result.
 *   Use Case: 'I want to coerce my data then validate the coerced data, all according to the schema.'
 *   Use Case: Data comes in from a web-form so strings have to be coerced into numbers, etc., then
 *          we need to validate that the data is good.
 */
c3kit.apron.schema.conform = (function c3kit$apron$schema$conform(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),schema,entity);
});
/**
 * Returns presented entity with FieldErrors where the process failed. Use error? to check result.
 */
c3kit.apron.schema.present = (function c3kit$apron$schema$present(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),schema,entity);
});
c3kit.apron.schema.as_map_or_nil = (function c3kit$apron$schema$as_map_or_nil(thing){
if(cljs.core.seq.call(null,thing)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,thing);
} else {
return null;
}
});
c3kit.apron.schema.error_map = (function c3kit$apron$schema$error_map(result){
if(c3kit.apron.schema.field_error_QMARK_.call(null,result)){
return result;
} else {
if(cljs.core.map_QMARK_.call(null,result)){
return c3kit.apron.schema.as_map_or_nil.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__14856){
var vec__14857 = p__14856;
var k = cljs.core.nth.call(null,vec__14857,(0),null);
var v = cljs.core.nth.call(null,vec__14857,(1),null);
var temp__5825__auto__ = c3kit.apron.schema.error_map.call(null,v);
if(cljs.core.truth_(temp__5825__auto__)){
var v__$1 = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,result)){
return c3kit.apron.schema.as_map_or_nil.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (k,v){
var temp__5825__auto__ = c3kit.apron.schema.error_map.call(null,v);
if(cljs.core.truth_(temp__5825__auto__)){
var v__$1 = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
return null;

}
}
}
});
/**
 * nil when there are no errors, otherwise a map {<field> <error message>}.
 */
c3kit.apron.schema.message_map = (function c3kit$apron$schema$message_map(result){
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
var temp__5825__auto__ = c3kit.apron.schema.error_map.call(null,result);
if(cljs.core.truth_(temp__5825__auto__)){
var errors = temp__5825__auto__;
return clojure.walk.postwalk.call(null,(function (v){
if(c3kit.apron.schema.field_error_QMARK_.call(null,v)){
return c3kit.apron.schema.error_message.call(null,v);
} else {
return v;
}
}),errors);
} else {
return null;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.error_message_map = (function c3kit$apron$schema$error_message_map(result){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/error-message-map is DEPRECATED.  Use schema/message-map instead."], null);
}),null)),null,(41),null);

return c3kit.apron.schema.message_map.call(null,result);
});
/**
 * seq of 'friendly' error messages; nil if none.
 */
c3kit.apron.schema.message_seq = (function c3kit$apron$schema$message_seq(result){
var temp__5825__auto__ = c3kit.apron.schema.message_map.call(null,result);
if(cljs.core.truth_(temp__5825__auto__)){
var errors = temp__5825__auto__;
var errors__$1 = errors;
var stack = cljs.core.List.EMPTY;
var path = cljs.core.List.EMPTY;
var result__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,errors__$1)){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result__$1;
} else {
var G__14866 = cljs.core.first.call(null,stack);
var G__14867 = cljs.core.rest.call(null,stack);
var G__14868 = cljs.core.rest.call(null,path);
var G__14869 = result__$1;
errors__$1 = G__14866;
stack = G__14867;
path = G__14868;
result__$1 = G__14869;
continue;
}
} else {
var vec__14863 = cljs.core.first.call(null,errors__$1);
var k = cljs.core.nth.call(null,vec__14863,(0),null);
var v = cljs.core.nth.call(null,vec__14863,(1),null);
var new_path = cljs.core.cons.call(null,((cljs.core.int_QMARK_.call(null,k))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(k):cljs.core.name.call(null,k)),path);
if(cljs.core.map_QMARK_.call(null,v)){
var G__14870 = v;
var G__14871 = cljs.core.conj.call(null,stack,cljs.core.rest.call(null,errors__$1));
var G__14872 = new_path;
var G__14873 = result__$1;
errors__$1 = G__14870;
stack = G__14871;
path = G__14872;
result__$1 = G__14873;
continue;
} else {
var value = [clojure.string.join.call(null,".",cljs.core.reverse.call(null,new_path))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
var G__14874 = cljs.core.rest.call(null,errors__$1);
var G__14875 = stack;
var G__14876 = path;
var G__14877 = cljs.core.conj.call(null,result__$1,value);
errors__$1 = G__14874;
stack = G__14875;
path = G__14876;
result__$1 = G__14877;
continue;
}
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.messages = (function c3kit$apron$schema$messages(result){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/messages is DEPRECATED.  Use schema/message-seq instead."], null);
}),null)),null,(42),null);

return c3kit.apron.schema.message_seq.call(null,result);
});
/**
 * Runs coerce on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.coerce_message_map = (function c3kit$apron$schema$coerce_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.coerce.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_errors = (function c3kit$apron$schema$coerce_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-errors is DEPRECATED.  Use schema/coerce-message-map instead."], null);
}),null)),null,(43),null);

return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.coerce.call(null,schema,entity));
});
/**
 * Runs validate on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.validate_message_map = (function c3kit$apron$schema$validate_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.validate.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validate_errors = (function c3kit$apron$schema$validate_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validate-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(44),null);

return c3kit.apron.schema.validate_message_map.call(null,schema,entity);
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validation_errors = (function c3kit$apron$schema$validation_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validation-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(45),null);

return c3kit.apron.schema.validate_message_map.call(null,schema,entity);
});
/**
 * Runs conform on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.conform_message_map = (function c3kit$apron$schema$conform_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.conform.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_errors = (function c3kit$apron$schema$conform_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-errors is DEPRECATED.  Use schema/conform-message-map instead."], null);
}),null)),null,(46),null);

return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.conform.call(null,schema,entity));
});
/**
 * Returns a coerced entity or throws an exception if there are errors.
 */
c3kit.apron.schema.coerce_BANG_ = (function c3kit$apron$schema$coerce_BANG_(schema,entity){
var result = c3kit.apron.schema.coerce.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Uncoercable entity",result);
} else {
return result;
}
});
/**
 * Returns a validated entity or throws an exception if there are errors.
 */
c3kit.apron.schema.validate_BANG_ = (function c3kit$apron$schema$validate_BANG_(schema,entity){
var result = c3kit.apron.schema.validate.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Invalid entity",result);
} else {
return result;
}
});
/**
 * Returns a conformed entity or throws an exception if there are errors.
 */
c3kit.apron.schema.conform_BANG_ = (function c3kit$apron$schema$conform_BANG_(schema,entity){
var result = c3kit.apron.schema.conform.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Unconformable entity",result);
} else {
return result;
}
});
/**
 * Returns a presented entity or throws an exception if there are errors.
 */
c3kit.apron.schema.present_BANG_ = (function c3kit$apron$schema$present_BANG_(schema,entity){
var result = c3kit.apron.schema.present.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Unpresentable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.validate__GT_validations = (function c3kit$apron$schema$validate__GT_validations(p__14878){
var map__14879 = p__14878;
var map__14879__$1 = cljs.core.__destructure_map.call(null,map__14879);
var spec = map__14879__$1;
var validate = cljs.core.get.call(null,map__14879__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(validate)){
return cljs.core.update.call(null,cljs.core.dissoc.call(null,spec,new cljs.core.Keyword(null,"validate","validate",-201300827)),new cljs.core.Keyword(null,"validations","validations",1347149461),c3kit.apron.corec.conjv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
} else {
return spec;
}
});
c3kit.apron.schema.merge_specs = (function c3kit$apron$schema$merge_specs(a,b){
var a__$1 = c3kit.apron.schema.validate__GT_validations.call(null,a);
var b__$1 = c3kit.apron.schema.validate__GT_validations.call(null,b);
var temp__5823__auto__ = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"validations","validations",1347149461).cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"validations","validations",1347149461).cljs$core$IFn$_invoke$arity$2(b__$1,cljs.core.PersistentVector.EMPTY)));
if(temp__5823__auto__){
var validations = temp__5823__auto__;
return cljs.core.assoc.call(null,cljs.core.merge.call(null,a__$1,b__$1),new cljs.core.Keyword(null,"validations","validations",1347149461),cljs.core.vec.call(null,validations));
} else {
return cljs.core.merge.call(null,a__$1,b__$1);
}
});
c3kit.apron.schema.merge_schemas = (function c3kit$apron$schema$merge_schemas(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14883 = arguments.length;
var i__5750__auto___14884 = (0);
while(true){
if((i__5750__auto___14884 < len__5749__auto___14883)){
args__5755__auto__.push((arguments[i__5750__auto___14884]));

var G__14885 = (i__5750__auto___14884 + (1));
i__5750__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
var entity_specs = cljs.core.apply.call(null,cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),schemas));
var attr_specs = cljs.core.apply.call(null,cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.call(null,(function (p1__14880_SHARP_){
return cljs.core.dissoc.call(null,p1__14880_SHARP_,new cljs.core.Keyword(null,"*","*",-1294732318));
}),schemas));
if(cljs.core.seq.call(null,entity_specs)){
return cljs.core.assoc.call(null,attr_specs,new cljs.core.Keyword(null,"*","*",-1294732318),entity_specs);
} else {
return attr_specs;
}
}));

(c3kit.apron.schema.merge_schemas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.schema.merge_schemas.cljs$lang$applyTo = (function (seq14881){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14881));
}));

c3kit.apron.schema.validate_type = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14882_SHARP_){
return cljs.core.contains_QMARK_.call(null,c3kit.apron.schema.valid_types,p1__14882_SHARP_);
}),new cljs.core.Keyword(null,"message","message",-406056002),"must be one of schema/valid-types"], null);
c3kit.apron.schema.process_spec_schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn or seq of ifn"], null);
c3kit.apron.schema.validation_schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.seq,new cljs.core.Keyword(null,"message","message",-406056002),"must not be empty"], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn or seq of ifn"], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
c3kit.apron.schema._spec_schema = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required,c3kit.apron.schema.validate_type], null)], null),new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"coerce","coerce",1917884504),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"present","present",-1224645465),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema.validation_schema,new cljs.core.Keyword(null,"message","message",-406056002),"must be schema/validation-schema"], null)], null)], null);
c3kit.apron.schema.spec_schema = cljs.core.assoc.call(null,c3kit.apron.schema._spec_schema,new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema._spec_schema,new cljs.core.Keyword(null,"message","message",-406056002),"must be schema/spec-schema"], null),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema._spec_schema], null)], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"message","message",-406056002),"must be a map"], null),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14886_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(p1__14886_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14886_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :seq"], null),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14887_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(p1__14887_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14887_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :one-of"], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14888_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(p1__14888_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14888_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :map"], null)], null));
c3kit.apron.schema.entity_spec_schema = cljs.core.assoc.call(null,c3kit.apron.schema.spec_schema,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14889_SHARP_){
return cljs.core.contains_QMARK_.call(null,c3kit.apron.schema.valid_types,p1__14889_SHARP_);
})),new cljs.core.Keyword(null,"message","message",-406056002),"must be one of schema/valid-types"], null));
c3kit.apron.schema.conform_preserving_extras_BANG_ = (function c3kit$apron$schema$conform_preserving_extras_BANG_(schema,spec){
var extra = cljs.core.apply.call(null,cljs.core.dissoc,spec,cljs.core.keys.call(null,schema));
var conformed = c3kit.apron.schema.conform_BANG_.call(null,schema,spec);
return cljs.core.merge.call(null,conformed,extra);
});
/**
 * Normalizes, coerces, and validates all the specs in the schema.  Any problems in the schema will throw an exception.
 *   Any extra fields in the spec (:value, :db, ...) will be preserved.
 */
c3kit.apron.schema.conform_schema_BANG_ = (function c3kit$apron$schema$conform_schema_BANG_(schema){
var schema__$1 = c3kit.apron.schema.normalize_schema.call(null,schema);
var field_schema = cljs.core.update_vals.call(null,cljs.core.dissoc.call(null,schema__$1,new cljs.core.Keyword(null,"*","*",-1294732318)),(function (p1__14890_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_.call(null,c3kit.apron.schema.spec_schema,p1__14890_SHARP_);
}));
var entity_schema = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return cljs.core.update_vals.call(null,s,(function (p1__14891_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_.call(null,c3kit.apron.schema.entity_spec_schema,p1__14891_SHARP_);
}));
} else {
return null;
}
})();
if(cljs.core.truth_(entity_schema)){
return cljs.core.assoc.call(null,field_schema,new cljs.core.Keyword(null,"*","*",-1294732318),entity_schema);
} else {
return field_schema;
}
});

//# sourceMappingURL=schema.js.map
