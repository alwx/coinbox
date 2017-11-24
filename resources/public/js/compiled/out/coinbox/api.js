// Compiled by ClojureScript 1.9.946 {}
goog.provide('coinbox.api');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
coinbox.api.url = "https://sandbox.public.api.bunq.com/v1";
coinbox.api.public_key = "AAAAB3NzaC1yc2EAAAADAQABAAACAQCzhuwBJ34ZvhXX/aDn3X2pitA6DdLQw8WcxbytmBhoksnn9NaUf63DZtxk5DZVinINkmzeULrQJLRef/7qSIARhX5SvSkfkut5OF7WvpUtnke2pev0YZNjgh/cFuUYGFgs9C4HwVv4poJeYiBuUMsCNGJe8b0SK4eMndxLeTe3hr/OGgSxG4NHgckqiHxtly8paBd/ZwQaruQPrvYuGSdq84NWSUvFl5jgj3VHUAIr6KD5cLDiQxQNNlgwhzgQS6+giJNLLCRJZZiIycW3kn3r2RCmGA/sGgsmU/oKJY98ssT4jqR7FEjnuO3E3PRVbV95vRjza+WDQyu+NnyQJ5qT0EfSwdcO7SPJUdQiyjwQA6cFjIr9bxMg+EVwzqBsjkMJH7kdrF1eqb6naNHA8CjqI4tQPzdqwsAqwibTnQs4GUyZVndWdjAHzDMmmJQpuoJdEiypcX4qL4w6UWOoYaT2CoRfTy3gpjCmBXjUp4KM06NgS0QpDyp9X0w4iVf3J09LzngwQq6Gpx0ogPWW/6ETgP6dL8SFzwJwGjrR8MdOAKGeyzVCACBd54jBfHrtJXsvg5s63CH4phGa2zzntBEaqZG6D4b3Hyva0VMw95eIERz2mOX2lteftvBoAnoZ5hMu32ThJKPEW3i5CUrpxgnjTXooOHQtYe+g4AUG/3CQxw== alwxndr@gmail.com\n";
coinbox.api.installation = (function coinbox$api$installation(){
var c__30639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30639__auto__){
return (function (){
var f__30640__auto__ = (function (){var switch__30551__auto__ = ((function (c__30639__auto__){
return (function (state_37418){
var state_val_37419 = (state_37418[(1)]);
if((state_val_37419 === (1))){
var inst_37406 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(coinbox.api.url),"/installation"].join('');
var inst_37407 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_37408 = ["client_public_key"];
var inst_37409 = [coinbox.api.public_key];
var inst_37410 = cljs.core.PersistentHashMap.fromArrays(inst_37408,inst_37409);
var inst_37411 = [inst_37410];
var inst_37412 = cljs.core.PersistentHashMap.fromArrays(inst_37407,inst_37411);
var inst_37413 = cljs_http.client.post.call(null,inst_37406,inst_37412);
var state_37418__$1 = state_37418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37418__$1,(2),inst_37413);
} else {
if((state_val_37419 === (2))){
var inst_37415 = (state_37418[(2)]);
var inst_37416 = cljs.core.prn.call(null,inst_37415);
var state_37418__$1 = state_37418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37418__$1,inst_37416);
} else {
return null;
}
}
});})(c__30639__auto__))
;
return ((function (switch__30551__auto__,c__30639__auto__){
return (function() {
var coinbox$api$installation_$_state_machine__30552__auto__ = null;
var coinbox$api$installation_$_state_machine__30552__auto____0 = (function (){
var statearr_37420 = [null,null,null,null,null,null,null];
(statearr_37420[(0)] = coinbox$api$installation_$_state_machine__30552__auto__);

(statearr_37420[(1)] = (1));

return statearr_37420;
});
var coinbox$api$installation_$_state_machine__30552__auto____1 = (function (state_37418){
while(true){
var ret_value__30553__auto__ = (function (){try{while(true){
var result__30554__auto__ = switch__30551__auto__.call(null,state_37418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30554__auto__;
}
break;
}
}catch (e37421){if((e37421 instanceof Object)){
var ex__30555__auto__ = e37421;
var statearr_37422_37424 = state_37418;
(statearr_37422_37424[(5)] = ex__30555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37425 = state_37418;
state_37418 = G__37425;
continue;
} else {
return ret_value__30553__auto__;
}
break;
}
});
coinbox$api$installation_$_state_machine__30552__auto__ = function(state_37418){
switch(arguments.length){
case 0:
return coinbox$api$installation_$_state_machine__30552__auto____0.call(this);
case 1:
return coinbox$api$installation_$_state_machine__30552__auto____1.call(this,state_37418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
coinbox$api$installation_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$0 = coinbox$api$installation_$_state_machine__30552__auto____0;
coinbox$api$installation_$_state_machine__30552__auto__.cljs$core$IFn$_invoke$arity$1 = coinbox$api$installation_$_state_machine__30552__auto____1;
return coinbox$api$installation_$_state_machine__30552__auto__;
})()
;})(switch__30551__auto__,c__30639__auto__))
})();
var state__30641__auto__ = (function (){var statearr_37423 = f__30640__auto__.call(null);
(statearr_37423[(6)] = c__30639__auto__);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30641__auto__);
});})(c__30639__auto__))
);

return c__30639__auto__;
});

//# sourceMappingURL=api.js.map?rel=1511532881551
