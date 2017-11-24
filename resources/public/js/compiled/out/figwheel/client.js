// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36925 = arguments.length;
switch (G__36925) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36928 = arguments.length;
var i__28433__auto___36929 = (0);
while(true){
if((i__28433__auto___36929 < len__28432__auto___36928)){
args__28439__auto__.push((arguments[i__28433__auto___36929]));

var G__36930 = (i__28433__auto___36929 + (1));
i__28433__auto___36929 = G__36930;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36927){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36927));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28439__auto__ = [];
var len__28432__auto___36932 = arguments.length;
var i__28433__auto___36933 = (0);
while(true){
if((i__28433__auto___36933 < len__28432__auto___36932)){
args__28439__auto__.push((arguments[i__28433__auto___36933]));

var G__36934 = (i__28433__auto___36933 + (1));
i__28433__auto___36933 = G__36934;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36931){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36931));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36935){
var map__36936 = p__36935;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var message = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27261__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27249__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27249__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27249__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30639__auto___37015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___37015,ch){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___37015,ch){
return (function (state_36987){
var state_val_36988 = (state_36987[(1)]);
if((state_val_36988 === (7))){
var inst_36983 = (state_36987[(2)]);
var state_36987__$1 = state_36987;
var statearr_36989_37016 = state_36987__$1;
(statearr_36989_37016[(2)] = inst_36983);

(statearr_36989_37016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (1))){
var state_36987__$1 = state_36987;
var statearr_36990_37017 = state_36987__$1;
(statearr_36990_37017[(2)] = null);

(statearr_36990_37017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (4))){
var inst_36940 = (state_36987[(7)]);
var inst_36940__$1 = (state_36987[(2)]);
var state_36987__$1 = (function (){var statearr_36991 = state_36987;
(statearr_36991[(7)] = inst_36940__$1);

return statearr_36991;
})();
if(cljs.core.truth_(inst_36940__$1)){
var statearr_36992_37018 = state_36987__$1;
(statearr_36992_37018[(1)] = (5));

} else {
var statearr_36993_37019 = state_36987__$1;
(statearr_36993_37019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (15))){
var inst_36947 = (state_36987[(8)]);
var inst_36962 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36947);
var inst_36963 = cljs.core.first.call(null,inst_36962);
var inst_36964 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36963);
var inst_36965 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36964)].join('');
var inst_36966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36965);
var state_36987__$1 = state_36987;
var statearr_36994_37020 = state_36987__$1;
(statearr_36994_37020[(2)] = inst_36966);

(statearr_36994_37020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (13))){
var inst_36971 = (state_36987[(2)]);
var state_36987__$1 = state_36987;
var statearr_36995_37021 = state_36987__$1;
(statearr_36995_37021[(2)] = inst_36971);

(statearr_36995_37021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (6))){
var state_36987__$1 = state_36987;
var statearr_36996_37022 = state_36987__$1;
(statearr_36996_37022[(2)] = null);

(statearr_36996_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (17))){
var inst_36969 = (state_36987[(2)]);
var state_36987__$1 = state_36987;
var statearr_36997_37023 = state_36987__$1;
(statearr_36997_37023[(2)] = inst_36969);

(statearr_36997_37023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (3))){
var inst_36985 = (state_36987[(2)]);
var state_36987__$1 = state_36987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36987__$1,inst_36985);
} else {
if((state_val_36988 === (12))){
var inst_36946 = (state_36987[(9)]);
var inst_36960 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36946,opts);
var state_36987__$1 = state_36987;
if(cljs.core.truth_(inst_36960)){
var statearr_36998_37024 = state_36987__$1;
(statearr_36998_37024[(1)] = (15));

} else {
var statearr_36999_37025 = state_36987__$1;
(statearr_36999_37025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (2))){
var state_36987__$1 = state_36987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36987__$1,(4),ch);
} else {
if((state_val_36988 === (11))){
var inst_36947 = (state_36987[(8)]);
var inst_36952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36953 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36947);
var inst_36954 = cljs.core.async.timeout.call(null,(1000));
var inst_36955 = [inst_36953,inst_36954];
var inst_36956 = (new cljs.core.PersistentVector(null,2,(5),inst_36952,inst_36955,null));
var state_36987__$1 = state_36987;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36987__$1,(14),inst_36956);
} else {
if((state_val_36988 === (9))){
var inst_36947 = (state_36987[(8)]);
var inst_36973 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36974 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36947);
var inst_36975 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36974);
var inst_36976 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36975)].join('');
var inst_36977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36976);
var state_36987__$1 = (function (){var statearr_37000 = state_36987;
(statearr_37000[(10)] = inst_36973);

return statearr_37000;
})();
var statearr_37001_37026 = state_36987__$1;
(statearr_37001_37026[(2)] = inst_36977);

(statearr_37001_37026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (5))){
var inst_36940 = (state_36987[(7)]);
var inst_36942 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36943 = (new cljs.core.PersistentArrayMap(null,2,inst_36942,null));
var inst_36944 = (new cljs.core.PersistentHashSet(null,inst_36943,null));
var inst_36945 = figwheel.client.focus_msgs.call(null,inst_36944,inst_36940);
var inst_36946 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36945);
var inst_36947 = cljs.core.first.call(null,inst_36945);
var inst_36948 = figwheel.client.autoload_QMARK_.call(null);
var state_36987__$1 = (function (){var statearr_37002 = state_36987;
(statearr_37002[(9)] = inst_36946);

(statearr_37002[(8)] = inst_36947);

return statearr_37002;
})();
if(cljs.core.truth_(inst_36948)){
var statearr_37003_37027 = state_36987__$1;
(statearr_37003_37027[(1)] = (8));

} else {
var statearr_37004_37028 = state_36987__$1;
(statearr_37004_37028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (14))){
var inst_36958 = (state_36987[(2)]);
var state_36987__$1 = state_36987;
var statearr_37005_37029 = state_36987__$1;
(statearr_37005_37029[(2)] = inst_36958);

(statearr_37005_37029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (16))){
var state_36987__$1 = state_36987;
var statearr_37006_37030 = state_36987__$1;
(statearr_37006_37030[(2)] = null);

(statearr_37006_37030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (10))){
var inst_36979 = (state_36987[(2)]);
var state_36987__$1 = (function (){var statearr_37007 = state_36987;
(statearr_37007[(11)] = inst_36979);

return statearr_37007;
})();
var statearr_37008_37031 = state_36987__$1;
(statearr_37008_37031[(2)] = null);

(statearr_37008_37031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36988 === (8))){
var inst_36946 = (state_36987[(9)]);
var inst_36950 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36946,opts);
var state_36987__$1 = state_36987;
if(cljs.core.truth_(inst_36950)){
var statearr_37009_37032 = state_36987__$1;
(statearr_37009_37032[(1)] = (11));

} else {
var statearr_37010_37033 = state_36987__$1;
(statearr_37010_37033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30639__auto___37015,ch))
;
return ((function (switch__30551__auto__,c__30639__auto___37015,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____0 = (function (){
var statearr_37011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37011[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__);

(statearr_37011[(1)] = (1));

return statearr_37011;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____1 = (function (state_36987){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_36987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37012){if((e37012 instanceof Object)){
var ex__30555__auto__ = e37012;
var statearr_37013_37034 = state_36987;
(statearr_37013_37034[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37035 = state_36987;
state_36987 = G__37035;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__ = function(state_36987){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____1.call(this,state_36987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30552__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___37015,ch))
})();
var state__30641__auto__ = (function (){var statearr_37014 = f__30640__auto__.call(null);
(statearr_37014[(6)] = c__30639__auto___37015);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___37015,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37036_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37036_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37038 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37038){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37037){if((e37037 instanceof Error)){
var e = e37037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37038], null));
} else {
var e = e37037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37038))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37039){
var map__37040 = p__37039;
var map__37040__$1 = ((((!((map__37040 == null)))?((((map__37040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37040):map__37040);
var opts = map__37040__$1;
var build_id = cljs.core.get.call(null,map__37040__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37040,map__37040__$1,opts,build_id){
return (function (p__37042){
var vec__37043 = p__37042;
var seq__37044 = cljs.core.seq.call(null,vec__37043);
var first__37045 = cljs.core.first.call(null,seq__37044);
var seq__37044__$1 = cljs.core.next.call(null,seq__37044);
var map__37046 = first__37045;
var map__37046__$1 = ((((!((map__37046 == null)))?((((map__37046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37046):map__37046);
var msg = map__37046__$1;
var msg_name = cljs.core.get.call(null,map__37046__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37044__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37043,seq__37044,first__37045,seq__37044__$1,map__37046,map__37046__$1,msg,msg_name,_,map__37040,map__37040__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37043,seq__37044,first__37045,seq__37044__$1,map__37046,map__37046__$1,msg,msg_name,_,map__37040,map__37040__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37040,map__37040__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37048){
var vec__37049 = p__37048;
var seq__37050 = cljs.core.seq.call(null,vec__37049);
var first__37051 = cljs.core.first.call(null,seq__37050);
var seq__37050__$1 = cljs.core.next.call(null,seq__37050);
var map__37052 = first__37051;
var map__37052__$1 = ((((!((map__37052 == null)))?((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37052):map__37052);
var msg = map__37052__$1;
var msg_name = cljs.core.get.call(null,map__37052__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37050__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37054){
var map__37055 = p__37054;
var map__37055__$1 = ((((!((map__37055 == null)))?((((map__37055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37055):map__37055);
var on_compile_warning = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37055,map__37055__$1,on_compile_warning,on_compile_fail){
return (function (p__37057){
var vec__37058 = p__37057;
var seq__37059 = cljs.core.seq.call(null,vec__37058);
var first__37060 = cljs.core.first.call(null,seq__37059);
var seq__37059__$1 = cljs.core.next.call(null,seq__37059);
var map__37061 = first__37060;
var map__37061__$1 = ((((!((map__37061 == null)))?((((map__37061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37061):map__37061);
var msg = map__37061__$1;
var msg_name = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37059__$1;
var pred__37063 = cljs.core._EQ_;
var expr__37064 = msg_name;
if(cljs.core.truth_(pred__37063.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37064))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37063.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37064))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37055,map__37055__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__,msg_hist,msg_names,msg){
return (function (state_37153){
var state_val_37154 = (state_37153[(1)]);
if((state_val_37154 === (7))){
var inst_37073 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37073)){
var statearr_37155_37202 = state_37153__$1;
(statearr_37155_37202[(1)] = (8));

} else {
var statearr_37156_37203 = state_37153__$1;
(statearr_37156_37203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (20))){
var inst_37147 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37157_37204 = state_37153__$1;
(statearr_37157_37204[(2)] = inst_37147);

(statearr_37157_37204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (27))){
var inst_37143 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37158_37205 = state_37153__$1;
(statearr_37158_37205[(2)] = inst_37143);

(statearr_37158_37205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (1))){
var inst_37066 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37066)){
var statearr_37159_37206 = state_37153__$1;
(statearr_37159_37206[(1)] = (2));

} else {
var statearr_37160_37207 = state_37153__$1;
(statearr_37160_37207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (24))){
var inst_37145 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37161_37208 = state_37153__$1;
(statearr_37161_37208[(2)] = inst_37145);

(statearr_37161_37208[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (4))){
var inst_37151 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37153__$1,inst_37151);
} else {
if((state_val_37154 === (15))){
var inst_37149 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37162_37209 = state_37153__$1;
(statearr_37162_37209[(2)] = inst_37149);

(statearr_37162_37209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (21))){
var inst_37102 = (state_37153[(2)]);
var inst_37103 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37104 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37103);
var state_37153__$1 = (function (){var statearr_37163 = state_37153;
(statearr_37163[(7)] = inst_37102);

return statearr_37163;
})();
var statearr_37164_37210 = state_37153__$1;
(statearr_37164_37210[(2)] = inst_37104);

(statearr_37164_37210[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (31))){
var inst_37132 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37132)){
var statearr_37165_37211 = state_37153__$1;
(statearr_37165_37211[(1)] = (34));

} else {
var statearr_37166_37212 = state_37153__$1;
(statearr_37166_37212[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (32))){
var inst_37141 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37167_37213 = state_37153__$1;
(statearr_37167_37213[(2)] = inst_37141);

(statearr_37167_37213[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (33))){
var inst_37128 = (state_37153[(2)]);
var inst_37129 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37130 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37129);
var state_37153__$1 = (function (){var statearr_37168 = state_37153;
(statearr_37168[(8)] = inst_37128);

return statearr_37168;
})();
var statearr_37169_37214 = state_37153__$1;
(statearr_37169_37214[(2)] = inst_37130);

(statearr_37169_37214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (13))){
var inst_37087 = figwheel.client.heads_up.clear.call(null);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(16),inst_37087);
} else {
if((state_val_37154 === (22))){
var inst_37108 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37109 = figwheel.client.heads_up.append_warning_message.call(null,inst_37108);
var state_37153__$1 = state_37153;
var statearr_37170_37215 = state_37153__$1;
(statearr_37170_37215[(2)] = inst_37109);

(statearr_37170_37215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (36))){
var inst_37139 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37171_37216 = state_37153__$1;
(statearr_37171_37216[(2)] = inst_37139);

(statearr_37171_37216[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (29))){
var inst_37119 = (state_37153[(2)]);
var inst_37120 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37121 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37120);
var state_37153__$1 = (function (){var statearr_37172 = state_37153;
(statearr_37172[(9)] = inst_37119);

return statearr_37172;
})();
var statearr_37173_37217 = state_37153__$1;
(statearr_37173_37217[(2)] = inst_37121);

(statearr_37173_37217[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (6))){
var inst_37068 = (state_37153[(10)]);
var state_37153__$1 = state_37153;
var statearr_37174_37218 = state_37153__$1;
(statearr_37174_37218[(2)] = inst_37068);

(statearr_37174_37218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (28))){
var inst_37115 = (state_37153[(2)]);
var inst_37116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37117 = figwheel.client.heads_up.display_warning.call(null,inst_37116);
var state_37153__$1 = (function (){var statearr_37175 = state_37153;
(statearr_37175[(11)] = inst_37115);

return statearr_37175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(29),inst_37117);
} else {
if((state_val_37154 === (25))){
var inst_37113 = figwheel.client.heads_up.clear.call(null);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(28),inst_37113);
} else {
if((state_val_37154 === (34))){
var inst_37134 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(37),inst_37134);
} else {
if((state_val_37154 === (17))){
var inst_37093 = (state_37153[(2)]);
var inst_37094 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37095 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37094);
var state_37153__$1 = (function (){var statearr_37176 = state_37153;
(statearr_37176[(12)] = inst_37093);

return statearr_37176;
})();
var statearr_37177_37219 = state_37153__$1;
(statearr_37177_37219[(2)] = inst_37095);

(statearr_37177_37219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (3))){
var inst_37085 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37085)){
var statearr_37178_37220 = state_37153__$1;
(statearr_37178_37220[(1)] = (13));

} else {
var statearr_37179_37221 = state_37153__$1;
(statearr_37179_37221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (12))){
var inst_37081 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37180_37222 = state_37153__$1;
(statearr_37180_37222[(2)] = inst_37081);

(statearr_37180_37222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (2))){
var inst_37068 = (state_37153[(10)]);
var inst_37068__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37153__$1 = (function (){var statearr_37181 = state_37153;
(statearr_37181[(10)] = inst_37068__$1);

return statearr_37181;
})();
if(cljs.core.truth_(inst_37068__$1)){
var statearr_37182_37223 = state_37153__$1;
(statearr_37182_37223[(1)] = (5));

} else {
var statearr_37183_37224 = state_37153__$1;
(statearr_37183_37224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (23))){
var inst_37111 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37111)){
var statearr_37184_37225 = state_37153__$1;
(statearr_37184_37225[(1)] = (25));

} else {
var statearr_37185_37226 = state_37153__$1;
(statearr_37185_37226[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (35))){
var state_37153__$1 = state_37153;
var statearr_37186_37227 = state_37153__$1;
(statearr_37186_37227[(2)] = null);

(statearr_37186_37227[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (19))){
var inst_37106 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37106)){
var statearr_37187_37228 = state_37153__$1;
(statearr_37187_37228[(1)] = (22));

} else {
var statearr_37188_37229 = state_37153__$1;
(statearr_37188_37229[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (11))){
var inst_37077 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37189_37230 = state_37153__$1;
(statearr_37189_37230[(2)] = inst_37077);

(statearr_37189_37230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (9))){
var inst_37079 = figwheel.client.heads_up.clear.call(null);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(12),inst_37079);
} else {
if((state_val_37154 === (5))){
var inst_37070 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37153__$1 = state_37153;
var statearr_37190_37231 = state_37153__$1;
(statearr_37190_37231[(2)] = inst_37070);

(statearr_37190_37231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (14))){
var inst_37097 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37097)){
var statearr_37191_37232 = state_37153__$1;
(statearr_37191_37232[(1)] = (18));

} else {
var statearr_37192_37233 = state_37153__$1;
(statearr_37192_37233[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (26))){
var inst_37123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37153__$1 = state_37153;
if(cljs.core.truth_(inst_37123)){
var statearr_37193_37234 = state_37153__$1;
(statearr_37193_37234[(1)] = (30));

} else {
var statearr_37194_37235 = state_37153__$1;
(statearr_37194_37235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (16))){
var inst_37089 = (state_37153[(2)]);
var inst_37090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37091 = figwheel.client.heads_up.display_exception.call(null,inst_37090);
var state_37153__$1 = (function (){var statearr_37195 = state_37153;
(statearr_37195[(13)] = inst_37089);

return statearr_37195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(17),inst_37091);
} else {
if((state_val_37154 === (30))){
var inst_37125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37126 = figwheel.client.heads_up.display_warning.call(null,inst_37125);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(33),inst_37126);
} else {
if((state_val_37154 === (10))){
var inst_37083 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37196_37236 = state_37153__$1;
(statearr_37196_37236[(2)] = inst_37083);

(statearr_37196_37236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (18))){
var inst_37099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37100 = figwheel.client.heads_up.display_exception.call(null,inst_37099);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(21),inst_37100);
} else {
if((state_val_37154 === (37))){
var inst_37136 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37197_37237 = state_37153__$1;
(statearr_37197_37237[(2)] = inst_37136);

(statearr_37197_37237[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (8))){
var inst_37075 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(11),inst_37075);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30639__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30551__auto__,c__30639__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____0 = (function (){
var statearr_37198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37198[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__);

(statearr_37198[(1)] = (1));

return statearr_37198;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____1 = (function (state_37153){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_37153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37199){if((e37199 instanceof Object)){
var ex__30555__auto__ = e37199;
var statearr_37200_37238 = state_37153;
(statearr_37200_37238[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37239 = state_37153;
state_37153 = G__37239;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__ = function(state_37153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____1.call(this,state_37153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__,msg_hist,msg_names,msg))
})();
var state__30641__auto__ = (function (){var statearr_37201 = f__30640__auto__.call(null);
(statearr_37201[(6)] = c__30639__auto__);

return statearr_37201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__,msg_hist,msg_names,msg))
);

return c__30639__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30639__auto___37268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto___37268,ch){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto___37268,ch){
return (function (state_37254){
var state_val_37255 = (state_37254[(1)]);
if((state_val_37255 === (1))){
var state_37254__$1 = state_37254;
var statearr_37256_37269 = state_37254__$1;
(statearr_37256_37269[(2)] = null);

(statearr_37256_37269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (2))){
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(4),ch);
} else {
if((state_val_37255 === (3))){
var inst_37252 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37254__$1,inst_37252);
} else {
if((state_val_37255 === (4))){
var inst_37242 = (state_37254[(7)]);
var inst_37242__$1 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37257 = state_37254;
(statearr_37257[(7)] = inst_37242__$1);

return statearr_37257;
})();
if(cljs.core.truth_(inst_37242__$1)){
var statearr_37258_37270 = state_37254__$1;
(statearr_37258_37270[(1)] = (5));

} else {
var statearr_37259_37271 = state_37254__$1;
(statearr_37259_37271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (5))){
var inst_37242 = (state_37254[(7)]);
var inst_37244 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37242);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(8),inst_37244);
} else {
if((state_val_37255 === (6))){
var state_37254__$1 = state_37254;
var statearr_37260_37272 = state_37254__$1;
(statearr_37260_37272[(2)] = null);

(statearr_37260_37272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (7))){
var inst_37250 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37261_37273 = state_37254__$1;
(statearr_37261_37273[(2)] = inst_37250);

(statearr_37261_37273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (8))){
var inst_37246 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37262 = state_37254;
(statearr_37262[(8)] = inst_37246);

return statearr_37262;
})();
var statearr_37263_37274 = state_37254__$1;
(statearr_37263_37274[(2)] = null);

(statearr_37263_37274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30639__auto___37268,ch))
;
return ((function (switch__30551__auto__,c__30639__auto___37268,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30552__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30552__auto____0 = (function (){
var statearr_37264 = [null,null,null,null,null,null,null,null,null];
(statearr_37264[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30552__auto__);

(statearr_37264[(1)] = (1));

return statearr_37264;
});
var figwheel$client$heads_up_plugin_$_state_machine__30552__auto____1 = (function (state_37254){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_37254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37265){if((e37265 instanceof Object)){
var ex__30555__auto__ = e37265;
var statearr_37266_37275 = state_37254;
(statearr_37266_37275[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_37254;
state_37254 = G__37276;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30552__auto__ = function(state_37254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30552__auto____1.call(this,state_37254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30552__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30552__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto___37268,ch))
})();
var state__30641__auto__ = (function (){var statearr_37267 = f__30640__auto__.call(null);
(statearr_37267[(6)] = c__30639__auto___37268);

return statearr_37267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto___37268,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_37282){
var state_val_37283 = (state_37282[(1)]);
if((state_val_37283 === (1))){
var inst_37277 = cljs.core.async.timeout.call(null,(3000));
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37282__$1,(2),inst_37277);
} else {
if((state_val_37283 === (2))){
var inst_37279 = (state_37282[(2)]);
var inst_37280 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37282__$1 = (function (){var statearr_37284 = state_37282;
(statearr_37284[(7)] = inst_37279);

return statearr_37284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37282__$1,inst_37280);
} else {
return null;
}
}
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____0 = (function (){
var statearr_37285 = [null,null,null,null,null,null,null,null];
(statearr_37285[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__);

(statearr_37285[(1)] = (1));

return statearr_37285;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____1 = (function (state_37282){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_37282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37286){if((e37286 instanceof Object)){
var ex__30555__auto__ = e37286;
var statearr_37287_37289 = state_37282;
(statearr_37287_37289[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37290 = state_37282;
state_37282 = G__37290;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__ = function(state_37282){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____1.call(this,state_37282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30552__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_37288 = f__30640__auto__.call(null);
(statearr_37288[(6)] = c__30639__auto__);

return statearr_37288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37297){
var state_val_37298 = (state_37297[(1)]);
if((state_val_37298 === (1))){
var inst_37291 = cljs.core.async.timeout.call(null,(2000));
var state_37297__$1 = state_37297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,(2),inst_37291);
} else {
if((state_val_37298 === (2))){
var inst_37293 = (state_37297[(2)]);
var inst_37294 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37295 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37294);
var state_37297__$1 = (function (){var statearr_37299 = state_37297;
(statearr_37299[(7)] = inst_37293);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37297__$1,inst_37295);
} else {
return null;
}
}
});})(c__30639__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____0 = (function (){
var statearr_37300 = [null,null,null,null,null,null,null,null];
(statearr_37300[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__);

(statearr_37300[(1)] = (1));

return statearr_37300;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____1 = (function (state_37297){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_37297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37301){if((e37301 instanceof Object)){
var ex__30555__auto__ = e37301;
var statearr_37302_37304 = state_37297;
(statearr_37302_37304[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37305 = state_37297;
state_37297 = G__37305;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__ = function(state_37297){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____1.call(this,state_37297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30641__auto__ = (function (){var statearr_37303 = f__30640__auto__.call(null);
(statearr_37303[(6)] = c__30639__auto__);

return statearr_37303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__,figwheel_version,temp__4657__auto__))
);

return c__30639__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37306){
var map__37307 = p__37306;
var map__37307__$1 = ((((!((map__37307 == null)))?((((map__37307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37307):map__37307);
var file = cljs.core.get.call(null,map__37307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37309 = "";
var G__37309__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37309),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37309);
var G__37309__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37309__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37309__$1);
if(cljs.core.truth_((function (){var and__27249__auto__ = line;
if(cljs.core.truth_(and__27249__auto__)){
return column;
} else {
return and__27249__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37309__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37309__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37310){
var map__37311 = p__37310;
var map__37311__$1 = ((((!((map__37311 == null)))?((((map__37311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37311):map__37311);
var ed = map__37311__$1;
var formatted_exception = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37313_37317 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37314_37318 = null;
var count__37315_37319 = (0);
var i__37316_37320 = (0);
while(true){
if((i__37316_37320 < count__37315_37319)){
var msg_37321 = cljs.core._nth.call(null,chunk__37314_37318,i__37316_37320);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37321);

var G__37322 = seq__37313_37317;
var G__37323 = chunk__37314_37318;
var G__37324 = count__37315_37319;
var G__37325 = (i__37316_37320 + (1));
seq__37313_37317 = G__37322;
chunk__37314_37318 = G__37323;
count__37315_37319 = G__37324;
i__37316_37320 = G__37325;
continue;
} else {
var temp__4657__auto___37326 = cljs.core.seq.call(null,seq__37313_37317);
if(temp__4657__auto___37326){
var seq__37313_37327__$1 = temp__4657__auto___37326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37313_37327__$1)){
var c__28100__auto___37328 = cljs.core.chunk_first.call(null,seq__37313_37327__$1);
var G__37329 = cljs.core.chunk_rest.call(null,seq__37313_37327__$1);
var G__37330 = c__28100__auto___37328;
var G__37331 = cljs.core.count.call(null,c__28100__auto___37328);
var G__37332 = (0);
seq__37313_37317 = G__37329;
chunk__37314_37318 = G__37330;
count__37315_37319 = G__37331;
i__37316_37320 = G__37332;
continue;
} else {
var msg_37333 = cljs.core.first.call(null,seq__37313_37327__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37333);

var G__37334 = cljs.core.next.call(null,seq__37313_37327__$1);
var G__37335 = null;
var G__37336 = (0);
var G__37337 = (0);
seq__37313_37317 = G__37334;
chunk__37314_37318 = G__37335;
count__37315_37319 = G__37336;
i__37316_37320 = G__37337;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37338){
var map__37339 = p__37338;
var map__37339__$1 = ((((!((map__37339 == null)))?((((map__37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);
var w = map__37339__$1;
var message = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27249__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27249__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27249__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37341 = cljs.core.seq.call(null,plugins);
var chunk__37342 = null;
var count__37343 = (0);
var i__37344 = (0);
while(true){
if((i__37344 < count__37343)){
var vec__37345 = cljs.core._nth.call(null,chunk__37342,i__37344);
var k = cljs.core.nth.call(null,vec__37345,(0),null);
var plugin = cljs.core.nth.call(null,vec__37345,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37351 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37341,chunk__37342,count__37343,i__37344,pl_37351,vec__37345,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37351.call(null,msg_hist);
});})(seq__37341,chunk__37342,count__37343,i__37344,pl_37351,vec__37345,k,plugin))
);
} else {
}

var G__37352 = seq__37341;
var G__37353 = chunk__37342;
var G__37354 = count__37343;
var G__37355 = (i__37344 + (1));
seq__37341 = G__37352;
chunk__37342 = G__37353;
count__37343 = G__37354;
i__37344 = G__37355;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37341);
if(temp__4657__auto__){
var seq__37341__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37341__$1)){
var c__28100__auto__ = cljs.core.chunk_first.call(null,seq__37341__$1);
var G__37356 = cljs.core.chunk_rest.call(null,seq__37341__$1);
var G__37357 = c__28100__auto__;
var G__37358 = cljs.core.count.call(null,c__28100__auto__);
var G__37359 = (0);
seq__37341 = G__37356;
chunk__37342 = G__37357;
count__37343 = G__37358;
i__37344 = G__37359;
continue;
} else {
var vec__37348 = cljs.core.first.call(null,seq__37341__$1);
var k = cljs.core.nth.call(null,vec__37348,(0),null);
var plugin = cljs.core.nth.call(null,vec__37348,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37360 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37341,chunk__37342,count__37343,i__37344,pl_37360,vec__37348,k,plugin,seq__37341__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37360.call(null,msg_hist);
});})(seq__37341,chunk__37342,count__37343,i__37344,pl_37360,vec__37348,k,plugin,seq__37341__$1,temp__4657__auto__))
);
} else {
}

var G__37361 = cljs.core.next.call(null,seq__37341__$1);
var G__37362 = null;
var G__37363 = (0);
var G__37364 = (0);
seq__37341 = G__37361;
chunk__37342 = G__37362;
count__37343 = G__37363;
i__37344 = G__37364;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37366 = arguments.length;
switch (G__37366) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37367_37372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37368_37373 = null;
var count__37369_37374 = (0);
var i__37370_37375 = (0);
while(true){
if((i__37370_37375 < count__37369_37374)){
var msg_37376 = cljs.core._nth.call(null,chunk__37368_37373,i__37370_37375);
figwheel.client.socket.handle_incoming_message.call(null,msg_37376);

var G__37377 = seq__37367_37372;
var G__37378 = chunk__37368_37373;
var G__37379 = count__37369_37374;
var G__37380 = (i__37370_37375 + (1));
seq__37367_37372 = G__37377;
chunk__37368_37373 = G__37378;
count__37369_37374 = G__37379;
i__37370_37375 = G__37380;
continue;
} else {
var temp__4657__auto___37381 = cljs.core.seq.call(null,seq__37367_37372);
if(temp__4657__auto___37381){
var seq__37367_37382__$1 = temp__4657__auto___37381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37367_37382__$1)){
var c__28100__auto___37383 = cljs.core.chunk_first.call(null,seq__37367_37382__$1);
var G__37384 = cljs.core.chunk_rest.call(null,seq__37367_37382__$1);
var G__37385 = c__28100__auto___37383;
var G__37386 = cljs.core.count.call(null,c__28100__auto___37383);
var G__37387 = (0);
seq__37367_37372 = G__37384;
chunk__37368_37373 = G__37385;
count__37369_37374 = G__37386;
i__37370_37375 = G__37387;
continue;
} else {
var msg_37388 = cljs.core.first.call(null,seq__37367_37382__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37388);

var G__37389 = cljs.core.next.call(null,seq__37367_37382__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37367_37372 = G__37389;
chunk__37368_37373 = G__37390;
count__37369_37374 = G__37391;
i__37370_37375 = G__37392;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28439__auto__ = [];
var len__28432__auto___37397 = arguments.length;
var i__28433__auto___37398 = (0);
while(true){
if((i__28433__auto___37398 < len__28432__auto___37397)){
args__28439__auto__.push((arguments[i__28433__auto___37398]));

var G__37399 = (i__28433__auto___37398 + (1));
i__28433__auto___37398 = G__37399;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37394){
var map__37395 = p__37394;
var map__37395__$1 = ((((!((map__37395 == null)))?((((map__37395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37395):map__37395);
var opts = map__37395__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37393){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37393));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37400){if((e37400 instanceof Error)){
var e = e37400;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37400;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37401){
var map__37402 = p__37401;
var map__37402__$1 = ((((!((map__37402 == null)))?((((map__37402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37402):map__37402);
var msg_name = cljs.core.get.call(null,map__37402__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511532881369
