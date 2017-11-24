// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__27249__auto__ = v;
if(cljs.core.truth_(and__27249__auto__)){
return (v > (0));
} else {
return and__27249__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__33863_SHARP_,p2__33862_SHARP_){
var vec__33864 = clojure.string.split.call(null,p2__33862_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__33864,(0),null);
var v = cljs.core.nth.call(null,vec__33864,(1),null);
return cljs.core.assoc.call(null,p1__33863_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__33867_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__33867_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__33868){
var vec__33869 = p__33868;
var k = cljs.core.nth.call(null,vec__33869,(0),null);
var v = cljs.core.nth.call(null,vec__33869,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__33872_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__27249__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__27249__auto__){
var and__27249__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__27249__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__27249__auto____$1;
}
} else {
return and__27249__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__33873_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33873_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33880 = arguments.length;
var i__28433__auto___33881 = (0);
while(true){
if((i__28433__auto___33881 < len__28432__auto___33880)){
args__28439__auto__.push((arguments[i__28433__auto___33881]));

var G__33882 = (i__28433__auto___33881 + (1));
i__28433__auto___33881 = G__33882;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33876){
var vec__33877 = p__33876;
var default_headers = cljs.core.nth.call(null,vec__33877,(0),null);
return ((function (vec__33877,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__27261__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33877,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq33874){
var G__33875 = cljs.core.first.call(null,seq33874);
var seq33874__$1 = cljs.core.next.call(null,seq33874);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__33875,seq33874__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33889 = arguments.length;
var i__28433__auto___33890 = (0);
while(true){
if((i__28433__auto___33890 < len__28432__auto___33889)){
args__28439__auto__.push((arguments[i__28433__auto___33890]));

var G__33891 = (i__28433__auto___33890 + (1));
i__28433__auto___33890 = G__33891;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33885){
var vec__33886 = p__33885;
var accept = cljs.core.nth.call(null,vec__33886,(0),null);
return ((function (vec__33886,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__27261__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33886,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq33883){
var G__33884 = cljs.core.first.call(null,seq33883);
var seq33883__$1 = cljs.core.next.call(null,seq33883);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__33884,seq33883__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33898 = arguments.length;
var i__28433__auto___33899 = (0);
while(true){
if((i__28433__auto___33899 < len__28432__auto___33898)){
args__28439__auto__.push((arguments[i__28433__auto___33899]));

var G__33900 = (i__28433__auto___33899 + (1));
i__28433__auto___33899 = G__33900;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33894){
var vec__33895 = p__33894;
var content_type = cljs.core.nth.call(null,vec__33895,(0),null);
return ((function (vec__33895,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__27261__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__33895,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq33892){
var G__33893 = cljs.core.first.call(null,seq33892);
var seq33892__$1 = cljs.core.next.call(null,seq33892);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__33893,seq33892__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__33901 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var encoding = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__33905 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33905__$1 = ((((!((map__33905 == null)))?((((map__33905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33905):map__33905);
var decoding = cljs.core.get.call(null,map__33905__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__33905__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__33905,map__33905__$1,decoding,decoding_opts){
return (function (p1__33903_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__33903_SHARP_,decoding,decoding_opts);
});})(map__33905,map__33905__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__33905,map__33905__$1,decoding,decoding_opts,transit_decode){
return (function (p1__33904_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33904_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__33905,map__33905__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__33907_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33907_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__33908){
var map__33909 = p__33908;
var map__33909__$1 = ((((!((map__33909 == null)))?((((map__33909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33909):map__33909);
var req = map__33909__$1;
var query_params = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__33911){
var map__33912 = p__33911;
var map__33912__$1 = ((((!((map__33912 == null)))?((((map__33912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33912):map__33912);
var request = map__33912__$1;
var form_params = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__27249__auto__ = form_params;
if(cljs.core.truth_(and__27249__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__27249__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__33914_33924 = cljs.core.seq.call(null,params);
var chunk__33915_33925 = null;
var count__33916_33926 = (0);
var i__33917_33927 = (0);
while(true){
if((i__33917_33927 < count__33916_33926)){
var vec__33918_33928 = cljs.core._nth.call(null,chunk__33915_33925,i__33917_33927);
var k_33929 = cljs.core.nth.call(null,vec__33918_33928,(0),null);
var v_33930 = cljs.core.nth.call(null,vec__33918_33928,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33930)){
form_data.append(cljs.core.name.call(null,k_33929),cljs.core.first.call(null,v_33930),cljs.core.second.call(null,v_33930));
} else {
form_data.append(cljs.core.name.call(null,k_33929),v_33930);
}

var G__33931 = seq__33914_33924;
var G__33932 = chunk__33915_33925;
var G__33933 = count__33916_33926;
var G__33934 = (i__33917_33927 + (1));
seq__33914_33924 = G__33931;
chunk__33915_33925 = G__33932;
count__33916_33926 = G__33933;
i__33917_33927 = G__33934;
continue;
} else {
var temp__4657__auto___33935 = cljs.core.seq.call(null,seq__33914_33924);
if(temp__4657__auto___33935){
var seq__33914_33936__$1 = temp__4657__auto___33935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33914_33936__$1)){
var c__28100__auto___33937 = cljs.core.chunk_first.call(null,seq__33914_33936__$1);
var G__33938 = cljs.core.chunk_rest.call(null,seq__33914_33936__$1);
var G__33939 = c__28100__auto___33937;
var G__33940 = cljs.core.count.call(null,c__28100__auto___33937);
var G__33941 = (0);
seq__33914_33924 = G__33938;
chunk__33915_33925 = G__33939;
count__33916_33926 = G__33940;
i__33917_33927 = G__33941;
continue;
} else {
var vec__33921_33942 = cljs.core.first.call(null,seq__33914_33936__$1);
var k_33943 = cljs.core.nth.call(null,vec__33921_33942,(0),null);
var v_33944 = cljs.core.nth.call(null,vec__33921_33942,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33944)){
form_data.append(cljs.core.name.call(null,k_33943),cljs.core.first.call(null,v_33944),cljs.core.second.call(null,v_33944));
} else {
form_data.append(cljs.core.name.call(null,k_33943),v_33944);
}

var G__33945 = cljs.core.next.call(null,seq__33914_33936__$1);
var G__33946 = null;
var G__33947 = (0);
var G__33948 = (0);
seq__33914_33924 = G__33945;
chunk__33915_33925 = G__33946;
count__33916_33926 = G__33947;
i__33917_33927 = G__33948;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__33949){
var map__33950 = p__33949;
var map__33950__$1 = ((((!((map__33950 == null)))?((((map__33950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33950):map__33950);
var request = map__33950__$1;
var multipart_params = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__27249__auto__ = multipart_params;
if(cljs.core.truth_(and__27249__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__27249__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__33952_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__33952_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__33954){
var map__33955 = p__33954;
var map__33955__$1 = ((((!((map__33955 == null)))?((((map__33955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33955):map__33955);
var req = map__33955__$1;
var query_params = cljs.core.get.call(null,map__33955__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__33955,map__33955__$1,req,query_params){
return (function (p1__33953_SHARP_){
return cljs.core.merge.call(null,p1__33953_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__33955,map__33955__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33963 = arguments.length;
var i__28433__auto___33964 = (0);
while(true){
if((i__28433__auto___33964 < len__28432__auto___33963)){
args__28439__auto__.push((arguments[i__28433__auto___33964]));

var G__33965 = (i__28433__auto___33964 + (1));
i__28433__auto___33964 = G__33965;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33959){
var vec__33960 = p__33959;
var credentials = cljs.core.nth.call(null,vec__33960,(0),null);
return ((function (vec__33960,credentials){
return (function (req){
var credentials__$1 = (function (){var or__27261__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__33960,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq33957){
var G__33958 = cljs.core.first.call(null,seq33957);
var seq33957__$1 = cljs.core.next.call(null,seq33957);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__33958,seq33957__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33972 = arguments.length;
var i__28433__auto___33973 = (0);
while(true){
if((i__28433__auto___33973 < len__28432__auto___33972)){
args__28439__auto__.push((arguments[i__28433__auto___33973]));

var G__33974 = (i__28433__auto___33973 + (1));
i__28433__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33968){
var vec__33969 = p__33968;
var req = cljs.core.nth.call(null,vec__33969,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq33966){
var G__33967 = cljs.core.first.call(null,seq33966);
var seq33966__$1 = cljs.core.next.call(null,seq33966);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__33967,seq33966__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33981 = arguments.length;
var i__28433__auto___33982 = (0);
while(true){
if((i__28433__auto___33982 < len__28432__auto___33981)){
args__28439__auto__.push((arguments[i__28433__auto___33982]));

var G__33983 = (i__28433__auto___33982 + (1));
i__28433__auto___33982 = G__33983;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33977){
var vec__33978 = p__33977;
var req = cljs.core.nth.call(null,vec__33978,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq33975){
var G__33976 = cljs.core.first.call(null,seq33975);
var seq33975__$1 = cljs.core.next.call(null,seq33975);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__33976,seq33975__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33990 = arguments.length;
var i__28433__auto___33991 = (0);
while(true){
if((i__28433__auto___33991 < len__28432__auto___33990)){
args__28439__auto__.push((arguments[i__28433__auto___33991]));

var G__33992 = (i__28433__auto___33991 + (1));
i__28433__auto___33991 = G__33992;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33986){
var vec__33987 = p__33986;
var req = cljs.core.nth.call(null,vec__33987,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq33984){
var G__33985 = cljs.core.first.call(null,seq33984);
var seq33984__$1 = cljs.core.next.call(null,seq33984);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__33985,seq33984__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33999 = arguments.length;
var i__28433__auto___34000 = (0);
while(true){
if((i__28433__auto___34000 < len__28432__auto___33999)){
args__28439__auto__.push((arguments[i__28433__auto___34000]));

var G__34001 = (i__28433__auto___34000 + (1));
i__28433__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33995){
var vec__33996 = p__33995;
var req = cljs.core.nth.call(null,vec__33996,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq33993){
var G__33994 = cljs.core.first.call(null,seq33993);
var seq33993__$1 = cljs.core.next.call(null,seq33993);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__33994,seq33993__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__28439__auto__ = [];
var len__28432__auto___34008 = arguments.length;
var i__28433__auto___34009 = (0);
while(true){
if((i__28433__auto___34009 < len__28432__auto___34008)){
args__28439__auto__.push((arguments[i__28433__auto___34009]));

var G__34010 = (i__28433__auto___34009 + (1));
i__28433__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34004){
var vec__34005 = p__34004;
var req = cljs.core.nth.call(null,vec__34005,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq34002){
var G__34003 = cljs.core.first.call(null,seq34002);
var seq34002__$1 = cljs.core.next.call(null,seq34002);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__34003,seq34002__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__28439__auto__ = [];
var len__28432__auto___34017 = arguments.length;
var i__28433__auto___34018 = (0);
while(true){
if((i__28433__auto___34018 < len__28432__auto___34017)){
args__28439__auto__.push((arguments[i__28433__auto___34018]));

var G__34019 = (i__28433__auto___34018 + (1));
i__28433__auto___34018 = G__34019;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34013){
var vec__34014 = p__34013;
var req = cljs.core.nth.call(null,vec__34014,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq34011){
var G__34012 = cljs.core.first.call(null,seq34011);
var seq34011__$1 = cljs.core.next.call(null,seq34011);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__34012,seq34011__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__28439__auto__ = [];
var len__28432__auto___34026 = arguments.length;
var i__28433__auto___34027 = (0);
while(true){
if((i__28433__auto___34027 < len__28432__auto___34026)){
args__28439__auto__.push((arguments[i__28433__auto___34027]));

var G__34028 = (i__28433__auto___34027 + (1));
i__28433__auto___34027 = G__34028;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34022){
var vec__34023 = p__34022;
var req = cljs.core.nth.call(null,vec__34023,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq34020){
var G__34021 = cljs.core.first.call(null,seq34020);
var seq34020__$1 = cljs.core.next.call(null,seq34020);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__34021,seq34020__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__28439__auto__ = [];
var len__28432__auto___34035 = arguments.length;
var i__28433__auto___34036 = (0);
while(true){
if((i__28433__auto___34036 < len__28432__auto___34035)){
args__28439__auto__.push((arguments[i__28433__auto___34036]));

var G__34037 = (i__28433__auto___34036 + (1));
i__28433__auto___34036 = G__34037;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34031){
var vec__34032 = p__34031;
var req = cljs.core.nth.call(null,vec__34032,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq34029){
var G__34030 = cljs.core.first.call(null,seq34029);
var seq34029__$1 = cljs.core.next.call(null,seq34029);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__34030,seq34029__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__28439__auto__ = [];
var len__28432__auto___34044 = arguments.length;
var i__28433__auto___34045 = (0);
while(true){
if((i__28433__auto___34045 < len__28432__auto___34044)){
args__28439__auto__.push((arguments[i__28433__auto___34045]));

var G__34046 = (i__28433__auto___34045 + (1));
i__28433__auto___34045 = G__34046;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((1) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28440__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34040){
var vec__34041 = p__34040;
var req = cljs.core.nth.call(null,vec__34041,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq34038){
var G__34039 = cljs.core.first.call(null,seq34038);
var seq34038__$1 = cljs.core.next.call(null,seq34038);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__34039,seq34038__$1);
});


//# sourceMappingURL=client.js.map?rel=1511532874665
