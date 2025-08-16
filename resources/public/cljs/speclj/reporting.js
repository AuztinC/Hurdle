// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.sum_by = (function speclj$reporting$sum_by(f,coll){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coll));
});
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return speclj.reporting.sum_by.call(null,(function (p1__6778_SHARP_){
return p1__6778_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__6779_SHARP_){
return p1__6779_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6800 = (function (reporter,message){
var x__5373__auto__ = (((reporter == null))?null:reporter);
var m__5374__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,reporter,message);
} else {
var m__5372__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6800.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6801 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6801.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6808 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6808.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6809 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6809.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6814 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6814.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6815 = (function (this$,results){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,results);
} else {
var m__5372__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6815.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6817 = (function (this$,exception){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,exception);
} else {
var m__5372__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6817.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,_reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6802 = cljs.core.seq.call(null,reporters);
var chunk__6803 = null;
var count__6804 = (0);
var i__6805 = (0);
while(true){
if((i__6805 < count__6804)){
var reporter = cljs.core._nth.call(null,chunk__6803,i__6805);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6823 = seq__6802;
var G__6824 = chunk__6803;
var G__6825 = count__6804;
var G__6826 = (i__6805 + (1));
seq__6802 = G__6823;
chunk__6803 = G__6824;
count__6804 = G__6825;
i__6805 = G__6826;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6802);
if(temp__5825__auto__){
var seq__6802__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6802__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6802__$1);
var G__6828 = cljs.core.chunk_rest.call(null,seq__6802__$1);
var G__6829 = c__5548__auto__;
var G__6830 = cljs.core.count.call(null,c__5548__auto__);
var G__6831 = (0);
seq__6802 = G__6828;
chunk__6803 = G__6829;
count__6804 = G__6830;
i__6805 = G__6831;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6802__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6832 = cljs.core.next.call(null,seq__6802__$1);
var G__6833 = null;
var G__6834 = (0);
var G__6835 = (0);
seq__6802 = G__6832;
chunk__6803 = G__6833;
count__6804 = G__6834;
i__6805 = G__6835;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6810 = cljs.core.seq.call(null,reporters);
var chunk__6811 = null;
var count__6812 = (0);
var i__6813 = (0);
while(true){
if((i__6813 < count__6812)){
var reporter = cljs.core._nth.call(null,chunk__6811,i__6813);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6836 = seq__6810;
var G__6837 = chunk__6811;
var G__6838 = count__6812;
var G__6839 = (i__6813 + (1));
seq__6810 = G__6836;
chunk__6811 = G__6837;
count__6812 = G__6838;
i__6813 = G__6839;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6810);
if(temp__5825__auto__){
var seq__6810__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6810__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6810__$1);
var G__6844 = cljs.core.chunk_rest.call(null,seq__6810__$1);
var G__6845 = c__5548__auto__;
var G__6846 = cljs.core.count.call(null,c__5548__auto__);
var G__6847 = (0);
seq__6810 = G__6844;
chunk__6811 = G__6845;
count__6812 = G__6846;
i__6813 = G__6847;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6810__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6849 = cljs.core.next.call(null,seq__6810__$1);
var G__6850 = null;
var G__6851 = (0);
var G__6852 = (0);
seq__6810 = G__6849;
chunk__6811 = G__6850;
count__6812 = G__6851;
i__6813 = G__6852;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6818 = cljs.core.seq.call(null,reporters);
var chunk__6819 = null;
var count__6820 = (0);
var i__6821 = (0);
while(true){
if((i__6821 < count__6820)){
var reporter = cljs.core._nth.call(null,chunk__6819,i__6821);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6854 = seq__6818;
var G__6855 = chunk__6819;
var G__6856 = count__6820;
var G__6857 = (i__6821 + (1));
seq__6818 = G__6854;
chunk__6819 = G__6855;
count__6820 = G__6856;
i__6821 = G__6857;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6818);
if(temp__5825__auto__){
var seq__6818__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6818__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6818__$1);
var G__6858 = cljs.core.chunk_rest.call(null,seq__6818__$1);
var G__6859 = c__5548__auto__;
var G__6860 = cljs.core.count.call(null,c__5548__auto__);
var G__6861 = (0);
seq__6818 = G__6858;
chunk__6819 = G__6859;
count__6820 = G__6860;
i__6821 = G__6861;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6818__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6863 = cljs.core.next.call(null,seq__6818__$1);
var G__6864 = null;
var G__6865 = (0);
var G__6866 = (0);
seq__6818 = G__6863;
chunk__6819 = G__6864;
count__6820 = G__6865;
i__6821 = G__6866;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6840 = cljs.core.seq.call(null,reporters);
var chunk__6841 = null;
var count__6842 = (0);
var i__6843 = (0);
while(true){
if((i__6843 < count__6842)){
var reporter = cljs.core._nth.call(null,chunk__6841,i__6843);
speclj.reporting.report_error.call(null,reporter,result);


var G__6867 = seq__6840;
var G__6868 = chunk__6841;
var G__6869 = count__6842;
var G__6870 = (i__6843 + (1));
seq__6840 = G__6867;
chunk__6841 = G__6868;
count__6842 = G__6869;
i__6843 = G__6870;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6840);
if(temp__5825__auto__){
var seq__6840__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6840__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6840__$1);
var G__6871 = cljs.core.chunk_rest.call(null,seq__6840__$1);
var G__6872 = c__5548__auto__;
var G__6873 = cljs.core.count.call(null,c__5548__auto__);
var G__6874 = (0);
seq__6840 = G__6871;
chunk__6841 = G__6872;
count__6842 = G__6873;
i__6843 = G__6874;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6840__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6875 = cljs.core.next.call(null,seq__6840__$1);
var G__6876 = null;
var G__6877 = (0);
var G__6878 = (0);
seq__6840 = G__6875;
chunk__6841 = G__6876;
count__6842 = G__6877;
i__6843 = G__6878;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6880 = speclj.platform.stack_trace.call(null,exception);
var elides_6881 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6880)){
var level_6882 = cljs.core.first.call(null,levels_6880);
if(speclj.platform.elide_level_QMARK_.call(null,level_6882)){
var G__6883 = cljs.core.rest.call(null,levels_6880);
var G__6884 = (elides_6881 + (1));
levels_6880 = G__6883;
elides_6881 = G__6884;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6881);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6882));

var G__6889 = cljs.core.rest.call(null,levels_6880);
var G__6890 = (0);
levels_6880 = G__6889;
elides_6881 = G__6890;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6881);
}
break;
}

var temp__5825__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,speclj.platform.error_str.call(null,exception));
} else {
cljs.core.println.call(null,speclj.platform.error_str.call(null,exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6885_6892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6886_6893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6887_6894 = true;
var _STAR_print_fn_STAR__temp_val__6888_6895 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6887_6894);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6888_6895);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6886_6893);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6885_6892);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6900 = arguments.length;
var i__5750__auto___6902 = (0);
while(true){
if((i__5750__auto___6902 < len__5749__auto___6900)){
args__5755__auto__.push((arguments[i__5750__auto___6902]));

var G__6903 = (i__5750__auto___6902 + (1));
i__5750__auto___6902 = G__6903;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6891_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6891_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6896){
var G__6897 = cljs.core.first.call(null,seq6896);
var seq6896__$1 = cljs.core.next.call(null,seq6896);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6897,seq6896__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6908 = arguments.length;
var i__5750__auto___6909 = (0);
while(true){
if((i__5750__auto___6909 < len__5749__auto___6908)){
args__5755__auto__.push((arguments[i__5750__auto___6909]));

var G__6910 = (i__5750__auto___6909 + (1));
i__5750__auto___6909 = G__6910;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6899){
var G__6901 = cljs.core.first.call(null,seq6899);
var seq6899__$1 = cljs.core.next.call(null,seq6899);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6901,seq6899__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6904 = cljs.core.seq.call(null,reporters);
var chunk__6905 = null;
var count__6906 = (0);
var i__6907 = (0);
while(true){
if((i__6907 < count__6906)){
var reporter = cljs.core._nth.call(null,chunk__6905,i__6907);
speclj.reporting.report_description.call(null,reporter,description);


var G__6915 = seq__6904;
var G__6916 = chunk__6905;
var G__6917 = count__6906;
var G__6918 = (i__6907 + (1));
seq__6904 = G__6915;
chunk__6905 = G__6916;
count__6906 = G__6917;
i__6907 = G__6918;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6904);
if(temp__5825__auto__){
var seq__6904__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6904__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6904__$1);
var G__6919 = cljs.core.chunk_rest.call(null,seq__6904__$1);
var G__6920 = c__5548__auto__;
var G__6921 = cljs.core.count.call(null,c__5548__auto__);
var G__6922 = (0);
seq__6904 = G__6919;
chunk__6905 = G__6920;
count__6906 = G__6921;
i__6907 = G__6922;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6904__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6923 = cljs.core.next.call(null,seq__6904__$1);
var G__6924 = null;
var G__6925 = (0);
var G__6926 = (0);
seq__6904 = G__6923;
chunk__6905 = G__6924;
count__6906 = G__6925;
i__6907 = G__6926;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6911 = cljs.core.seq.call(null,reporters);
var chunk__6912 = null;
var count__6913 = (0);
var i__6914 = (0);
while(true){
if((i__6914 < count__6913)){
var reporter = cljs.core._nth.call(null,chunk__6912,i__6914);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6931 = seq__6911;
var G__6932 = chunk__6912;
var G__6933 = count__6913;
var G__6934 = (i__6914 + (1));
seq__6911 = G__6931;
chunk__6912 = G__6932;
count__6913 = G__6933;
i__6914 = G__6934;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6911);
if(temp__5825__auto__){
var seq__6911__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6911__$1);
var G__6935 = cljs.core.chunk_rest.call(null,seq__6911__$1);
var G__6936 = c__5548__auto__;
var G__6937 = cljs.core.count.call(null,c__5548__auto__);
var G__6938 = (0);
seq__6911 = G__6935;
chunk__6912 = G__6936;
count__6913 = G__6937;
i__6914 = G__6938;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6911__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6939 = cljs.core.next.call(null,seq__6911__$1);
var G__6940 = null;
var G__6941 = (0);
var G__6942 = (0);
seq__6911 = G__6939;
chunk__6912 = G__6940;
count__6913 = G__6941;
i__6914 = G__6942;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6927 = cljs.core.seq.call(null,reporters);
var chunk__6928 = null;
var count__6929 = (0);
var i__6930 = (0);
while(true){
if((i__6930 < count__6929)){
var reporter = cljs.core._nth.call(null,chunk__6928,i__6930);
speclj.reporting.report_message.call(null,reporter,message);


var G__6949 = seq__6927;
var G__6950 = chunk__6928;
var G__6951 = count__6929;
var G__6952 = (i__6930 + (1));
seq__6927 = G__6949;
chunk__6928 = G__6950;
count__6929 = G__6951;
i__6930 = G__6952;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6927);
if(temp__5825__auto__){
var seq__6927__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6927__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6927__$1);
var G__6954 = cljs.core.chunk_rest.call(null,seq__6927__$1);
var G__6955 = c__5548__auto__;
var G__6956 = cljs.core.count.call(null,c__5548__auto__);
var G__6957 = (0);
seq__6927 = G__6954;
chunk__6928 = G__6955;
count__6929 = G__6956;
i__6930 = G__6957;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6927__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6959 = cljs.core.next.call(null,seq__6927__$1);
var G__6960 = null;
var G__6961 = (0);
var G__6962 = (0);
seq__6927 = G__6959;
chunk__6928 = G__6960;
count__6929 = G__6961;
i__6930 = G__6962;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6943 = cljs.core.seq.call(null,reporters);
var chunk__6944 = null;
var count__6945 = (0);
var i__6946 = (0);
while(true){
if((i__6946 < count__6945)){
var reporter = cljs.core._nth.call(null,chunk__6944,i__6946);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6963 = seq__6943;
var G__6964 = chunk__6944;
var G__6965 = count__6945;
var G__6966 = (i__6946 + (1));
seq__6943 = G__6963;
chunk__6944 = G__6964;
count__6945 = G__6965;
i__6946 = G__6966;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6943);
if(temp__5825__auto__){
var seq__6943__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6943__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6943__$1);
var G__6967 = cljs.core.chunk_rest.call(null,seq__6943__$1);
var G__6968 = c__5548__auto__;
var G__6969 = cljs.core.count.call(null,c__5548__auto__);
var G__6970 = (0);
seq__6943 = G__6967;
chunk__6944 = G__6968;
count__6945 = G__6969;
i__6946 = G__6970;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6943__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6971 = cljs.core.next.call(null,seq__6943__$1);
var G__6972 = null;
var G__6973 = (0);
var G__6974 = (0);
seq__6943 = G__6971;
chunk__6944 = G__6972;
count__6945 = G__6973;
i__6946 = G__6974;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
