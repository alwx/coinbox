// Compiled by ClojureScript 1.9.946 {}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"amqp","amqp",-994422895),(5672),new cljs.core.Keyword(null,"http","http",382524695),(80),new cljs.core.Keyword(null,"https","https",-1983909665),(443),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),(3306),new cljs.core.Keyword(null,"postgresql","postgresql",-1568339962),(5432),new cljs.core.Keyword(null,"rabbitmq","rabbitmq",1046897371),(5672),new cljs.core.Keyword(null,"zookeeper","zookeeper",17281735),(2181)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?#]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_.call(null,s)){
return s;
} else {
if(!(clojure.string.blank_QMARK_.call(null,s))){
return clojure.string.split.call(null,s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex.call(null,s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.call(null,"utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(((v == null)) || (((cljs.core.map_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))) && (cljs.core.empty_QMARK_.call(null,v)))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29455 = arguments.length;
var i__28433__auto___29456 = (0);
while(true){
if((i__28433__auto___29456 < len__28432__auto___29455)){
args__28439__auto__.push((arguments[i__28433__auto___29456]));

var G__29457 = (i__28433__auto___29456 + (1));
i__28433__auto___29456 = G__29457;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29451){
var vec__29452 = p__29451;
var encoding = cljs.core.nth.call(null,vec__29452,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"*","%2A");
} else {
return null;
}
});

no.en.core.url_encode.cljs$lang$maxFixedArity = (1);

no.en.core.url_encode.cljs$lang$applyTo = (function (seq29449){
var G__29450 = cljs.core.first.call(null,seq29449);
var seq29449__$1 = cljs.core.next.call(null,seq29449);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__29450,seq29449__$1);
});

/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29464 = arguments.length;
var i__28433__auto___29465 = (0);
while(true){
if((i__28433__auto___29465 < len__28432__auto___29464)){
args__28439__auto__.push((arguments[i__28433__auto___29465]));

var G__29466 = (i__28433__auto___29465 + (1));
i__28433__auto___29465 = G__29466;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29460){
var vec__29461 = p__29460;
var encoding = cljs.core.nth.call(null,vec__29461,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

no.en.core.url_decode.cljs$lang$maxFixedArity = (1);

no.en.core.url_decode.cljs$lang$applyTo = (function (seq29458){
var G__29459 = cljs.core.first.call(null,seq29458);
var seq29458__$1 = cljs.core.next.call(null,seq29458);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__29459,seq29458__$1);
});

no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow.call(null,(1024),(4)),no.en.core.pow.call(null,(1024),(1)),no.en.core.pow.call(null,(1024),(3)),no.en.core.pow.call(null,(1024),(2)),no.en.core.pow.call(null,(1024),(8)),no.en.core.pow.call(null,(1024),(7)),no.en.core.pow.call(null,(1024),(6)),no.en.core.pow.call(null,(1024),(0)),no.en.core.pow.call(null,(1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__29467 = clojure.string.upper_case.call(null,unit);
switch (G__29467) {
default:
var G__29468 = unit;
switch (G__29468) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29468)].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var number = parse_fn.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
if(cljs.core.not.call(null,isNaN(number))){
return no.en.core.apply_unit.call(null,number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var number = cljs.reader.read_string.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
return cljs.core.long$.call(null,(cljs.core.long$.call(null,cljs.reader.read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,matches,(1)))].join(''))) * cljs.core.get.call(null,no.en.core.byte_scale,clojure.string.upper_case.call(null,(function (){var or__27261__auto__ = unit;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number.call(null,s,(function (p1__29471_SHARP_){
return parseInt(p1__29471_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number.call(null,s,(function (p1__29472_SHARP_){
return parseInt(p1__29472_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number.call(null,s,(function (p1__29473_SHARP_){
return parseFloat(p1__29473_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number.call(null,s,(function (p1__29474_SHARP_){
return parseFloat(p1__29474_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__29477_SHARP_){
return clojure.string.join.call(null,"=",p1__29477_SHARP_);
}),cljs.core.map.call(null,(function (p1__29476_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__29476_SHARP_))),no.en.core.url_encode.call(null,cljs.core.second.call(null,p1__29476_SHARP_))],null));
}),cljs.core.remove.call(null,(function (p1__29475_SHARP_){
return clojure.string.blank_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__29475_SHARP_))].join(''));
}),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.seq.call(null,m))))));
if(!(clojure.string.blank_QMARK_.call(null,params))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if(!(cljs.core.empty_QMARK_.call(null,m))){
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))),"://"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__29478 = m;
var map__29478__$1 = ((((!((map__29478 == null)))?((((map__29478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29478):map__29478);
var username = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''):null)),"@"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"server-name","server-name",-1012104295).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"server-port","server-port",663745648).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var port = temp__4655__auto__;
if(!(cljs.core._EQ_.call(null,port,no.en.core.port_number.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_.call(null,query_params))))?"/":new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_.call(null,query_params)))?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params.call(null,query_params))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))))?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
} else {
return null;
}
});
/**
 * Return the formatted `url` without password as a string.
 */
no.en.core.public_url = (function no$en$core$public_url(url){
return no.en.core.format_url.call(null,cljs.core.dissoc.call(null,url,new cljs.core.Keyword(null,"password","password",417022471)));
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double.call(null,clojure.string.replace.call(null,s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace.call(null,cljs.core.name.call(null,s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
return cljs.core.nth.call(null,matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__29482_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,no.en.core.url_decode.call(null,cljs.core.first.call(null,p1__29482_SHARP_))),no.en.core.url_decode.call(null,cljs.core.second.call(null,p1__29482_SHARP_))],null));
}),cljs.core.filter.call(null,(function (p1__29481_SHARP_){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,p1__29481_SHARP_));
}),cljs.core.map.call(null,(function (p1__29480_SHARP_){
return clojure.string.split.call(null,p1__29480_SHARP_,/=/);
}),clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/)))));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__4655__auto__ = cljs.core.re_matches.call(null,no.en.core.url_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var scheme = cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(1)));
return no.en.core.compact_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"scheme","scheme",90199613)],[cljs.core.nth.call(null,matches,(4)),cljs.core.nth.call(null,matches,(14)),cljs.core.nth.call(null,matches,(3)),(function (){var or__27261__auto__ = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,(8)));
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return no.en.core.port_number.call(null,scheme);
}
})(),no.en.core.parse_query_params.call(null,cljs.core.nth.call(null,matches,(12))),cljs.core.nth.call(null,matches,(10)),cljs.core.nth.call(null,matches,(6)),cljs.core.nth.call(null,matches,(12)),scheme]));
} else {
return null;
}
});
var ret__28472__auto___29487 = (function (){
no.en.core.prog1 = (function no$en$core$prog1(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29488 = arguments.length;
var i__28433__auto___29489 = (0);
while(true){
if((i__28433__auto___29489 < len__28432__auto___29488)){
args__28439__auto__.push((arguments[i__28433__auto___29489]));

var G__29490 = (i__28433__auto___29489 + (1));
i__28433__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((2) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((2)),(0),null)):null);
return no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28440__auto__);
});

no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28123__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__29483__auto__","result__29483__auto__",643856435,null)),(function (){var x__28123__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28123__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28123__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__29483__auto__","result__29483__auto__",643856435,null)))));
});

no.en.core.prog1.cljs$lang$maxFixedArity = (2);

no.en.core.prog1.cljs$lang$applyTo = (function (seq29484){
var G__29485 = cljs.core.first.call(null,seq29484);
var seq29484__$1 = cljs.core.next.call(null,seq29484);
var G__29486 = cljs.core.first.call(null,seq29484__$1);
var seq29484__$2 = cljs.core.next.call(null,seq29484__$1);
return no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic(G__29485,G__29486,seq29484__$2);
});

return null;
})()
;
no.en.core.prog1.cljs$lang$macro = true;

/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__4655__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thunk.call(null)], null);
}catch (e29491){if((e29491 instanceof Error)){
var e = e29491;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e29491;

}
}})();
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return result.call(null,(0));
} else {
var G__29492 = (n__$1 - (1));
n__$1 = G__29492;
continue;
}
break;
}
});
var ret__28472__auto___29497 = (function (){
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29498 = arguments.length;
var i__28433__auto___29499 = (0);
while(true){
if((i__28433__auto___29499 < len__28432__auto___29498)){
args__28439__auto__.push((arguments[i__28433__auto___29499]));

var G__29500 = (i__28433__auto___29499 + (1));
i__28433__auto___29499 = G__29500;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((3) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((3)),(0),null)):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28440__auto__);
});

no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("no.en.core","with-retries*","no.en.core/with-retries*",172357687,null)),(function (){var x__28123__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28123__auto__);
})(),(function (){var x__28123__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28123__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28123__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28123__auto__);
})())));
});

no.en.core.with_retries.cljs$lang$maxFixedArity = (3);

no.en.core.with_retries.cljs$lang$applyTo = (function (seq29493){
var G__29494 = cljs.core.first.call(null,seq29493);
var seq29493__$1 = cljs.core.next.call(null,seq29493);
var G__29495 = cljs.core.first.call(null,seq29493__$1);
var seq29493__$2 = cljs.core.next.call(null,seq29493__$1);
var G__29496 = cljs.core.first.call(null,seq29493__$2);
var seq29493__$3 = cljs.core.next.call(null,seq29493__$2);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic(G__29494,G__29495,G__29496,seq29493__$3);
});

return null;
})()
;
no.en.core.with_retries.cljs$lang$macro = true;

no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(cljs.core.truth_(no.en.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29503 = arguments.length;
var i__28433__auto___29504 = (0);
while(true){
if((i__28433__auto___29504 < len__28432__auto___29503)){
args__28439__auto__.push((arguments[i__28433__auto___29504]));

var G__29505 = (i__28433__auto___29504 + (1));
i__28433__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((0) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((0)),(0),null)):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__28440__auto__);
});

no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

no.en.core.deep_merge.cljs$lang$maxFixedArity = (0);

no.en.core.deep_merge.cljs$lang$applyTo = (function (seq29502){
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29502));
});

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__28439__auto__ = [];
var len__28432__auto___29508 = arguments.length;
var i__28433__auto___29509 = (0);
while(true){
if((i__28433__auto___29509 < len__28432__auto___29508)){
args__28439__auto__.push((arguments[i__28433__auto___29509]));

var G__29510 = (i__28433__auto___29509 + (1));
i__28433__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__29511__i = 0, G__29511__a = new Array(arguments.length -  0);
while (G__29511__i < G__29511__a.length) {G__29511__a[G__29511__i] = arguments[G__29511__i + 0]; ++G__29511__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__29511__a,0,null);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__29512){
var maps__$1 = cljs.core.seq(arglist__29512);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
});

no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1);

no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq29506){
var G__29507 = cljs.core.first.call(null,seq29506);
var seq29506__$1 = cljs.core.next.call(null,seq29506);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__29507,seq29506__$1);
});


//# sourceMappingURL=core.js.map?rel=1511532871300
