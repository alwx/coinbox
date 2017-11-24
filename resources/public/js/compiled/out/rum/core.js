// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__33718_SHARP_,p2__33717_SHARP_){
return p2__33717_SHARP_.call(null,p1__33718_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__33720_SHARP_,p2__33719_SHARP_){
return p2__33719_SHARP_.call(null,old_state,p1__33720_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__27261__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__33721_SHARP_){
return p1__33721_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__33723 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__33723,(0),null);
var next_state = cljs.core.nth.call(null,vec__33723,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__33722_SHARP_){
return p1__33722_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__33726__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__33726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33727__i = 0, G__33727__a = new Array(arguments.length -  0);
while (G__33727__i < G__33727__a.length) {G__33727__a[G__33727__i] = arguments[G__33727__i + 0]; ++G__33727__i;}
  args = new cljs.core.IndexedSeq(G__33727__a,0,null);
} 
return G__33726__delegate.call(this,args);};
G__33726.cljs$lang$maxFixedArity = 0;
G__33726.cljs$lang$applyTo = (function (arglist__33728){
var args = cljs.core.seq(arglist__33728);
return G__33726__delegate(args);
});
G__33726.cljs$core$IFn$_invoke$arity$variadic = G__33726__delegate;
return G__33726;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__33729__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__33729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33730__i = 0, G__33730__a = new Array(arguments.length -  0);
while (G__33730__i < G__33730__a.length) {G__33730__a[G__33730__i] = arguments[G__33730__i + 0]; ++G__33730__i;}
  args = new cljs.core.IndexedSeq(G__33730__a,0,null);
} 
return G__33729__delegate.call(this,args);};
G__33729.cljs$lang$maxFixedArity = 0;
G__33729.cljs$lang$applyTo = (function (arglist__33731){
var args = cljs.core.seq(arglist__33731);
return G__33729__delegate(args);
});
G__33729.cljs$core$IFn$_invoke$arity$variadic = G__33729__delegate;
return G__33729;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__33732__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__33732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33733__i = 0, G__33733__a = new Array(arguments.length -  0);
while (G__33733__i < G__33733__a.length) {G__33733__a[G__33733__i] = arguments[G__33733__i + 0]; ++G__33733__i;}
  args = new cljs.core.IndexedSeq(G__33733__a,0,null);
} 
return G__33732__delegate.call(this,args);};
G__33732.cljs$lang$maxFixedArity = 0;
G__33732.cljs$lang$applyTo = (function (arglist__33734){
var args = cljs.core.seq(arglist__33734);
return G__33732__delegate(args);
});
G__33732.cljs$core$IFn$_invoke$arity$variadic = G__33732__delegate;
return G__33732;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__27261__auto__ = (function (){var and__27249__auto__ = typeof window !== 'undefined';
if(and__27249__auto__){
var or__27261__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
var or__27261__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__27261__auto____$1)){
return or__27261__auto____$1;
} else {
var or__27261__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__27261__auto____$2)){
return or__27261__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__27249__auto__;
}
})();
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
return ((function (or__27261__auto__){
return (function (p1__33735_SHARP_){
return setTimeout(p1__33735_SHARP_,(16));
});
;})(or__27261__auto__))
}
})();
rum.core.batch = (function (){var or__27261__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__27261__auto__)){
return or__27261__auto__;
} else {
var or__27261__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__27261__auto____$1)){
return or__27261__auto____$1;
} else {
return ((function (or__27261__auto____$1,or__27261__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__27261__auto____$1,or__27261__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__33736 = cljs.core.seq.call(null,queue);
var chunk__33738 = null;
var count__33739 = (0);
var i__33740 = (0);
while(true){
if((i__33740 < count__33739)){
var comp = cljs.core._nth.call(null,chunk__33738,i__33740);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__33742 = seq__33736;
var G__33743 = chunk__33738;
var G__33744 = count__33739;
var G__33745 = (i__33740 + (1));
seq__33736 = G__33742;
chunk__33738 = G__33743;
count__33739 = G__33744;
i__33740 = G__33745;
continue;
} else {
var G__33746 = seq__33736;
var G__33747 = chunk__33738;
var G__33748 = count__33739;
var G__33749 = (i__33740 + (1));
seq__33736 = G__33746;
chunk__33738 = G__33747;
count__33739 = G__33748;
i__33740 = G__33749;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33736);
if(temp__4657__auto__){
var seq__33736__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33736__$1)){
var c__28100__auto__ = cljs.core.chunk_first.call(null,seq__33736__$1);
var G__33750 = cljs.core.chunk_rest.call(null,seq__33736__$1);
var G__33751 = c__28100__auto__;
var G__33752 = cljs.core.count.call(null,c__28100__auto__);
var G__33753 = (0);
seq__33736 = G__33750;
chunk__33738 = G__33751;
count__33739 = G__33752;
i__33740 = G__33753;
continue;
} else {
var comp = cljs.core.first.call(null,seq__33736__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__33754 = cljs.core.next.call(null,seq__33736__$1);
var G__33755 = null;
var G__33756 = (0);
var G__33757 = (0);
seq__33736 = G__33754;
chunk__33738 = G__33755;
count__33739 = G__33756;
i__33740 = G__33757;
continue;
} else {
var G__33758 = cljs.core.next.call(null,seq__33736__$1);
var G__33759 = null;
var G__33760 = (0);
var G__33761 = (0);
seq__33736 = G__33758;
chunk__33738 = G__33759;
count__33739 = G__33760;
i__33740 = G__33761;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__33763 = arguments.length;
switch (G__33763) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_33765 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__33766 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__33766,(0),null);
var next_state = cljs.core.nth.call(null,vec__33766,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__33769_33781 = cljs.core.seq.call(null,old_reactions);
var chunk__33770_33782 = null;
var count__33771_33783 = (0);
var i__33772_33784 = (0);
while(true){
if((i__33772_33784 < count__33771_33783)){
var ref_33785 = cljs.core._nth.call(null,chunk__33770_33782,i__33772_33784);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_33785)){
} else {
cljs.core.remove_watch.call(null,ref_33785,key);
}

var G__33786 = seq__33769_33781;
var G__33787 = chunk__33770_33782;
var G__33788 = count__33771_33783;
var G__33789 = (i__33772_33784 + (1));
seq__33769_33781 = G__33786;
chunk__33770_33782 = G__33787;
count__33771_33783 = G__33788;
i__33772_33784 = G__33789;
continue;
} else {
var temp__4657__auto___33790 = cljs.core.seq.call(null,seq__33769_33781);
if(temp__4657__auto___33790){
var seq__33769_33791__$1 = temp__4657__auto___33790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33769_33791__$1)){
var c__28100__auto___33792 = cljs.core.chunk_first.call(null,seq__33769_33791__$1);
var G__33793 = cljs.core.chunk_rest.call(null,seq__33769_33791__$1);
var G__33794 = c__28100__auto___33792;
var G__33795 = cljs.core.count.call(null,c__28100__auto___33792);
var G__33796 = (0);
seq__33769_33781 = G__33793;
chunk__33770_33782 = G__33794;
count__33771_33783 = G__33795;
i__33772_33784 = G__33796;
continue;
} else {
var ref_33797 = cljs.core.first.call(null,seq__33769_33791__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_33797)){
} else {
cljs.core.remove_watch.call(null,ref_33797,key);
}

var G__33798 = cljs.core.next.call(null,seq__33769_33791__$1);
var G__33799 = null;
var G__33800 = (0);
var G__33801 = (0);
seq__33769_33781 = G__33798;
chunk__33770_33782 = G__33799;
count__33771_33783 = G__33800;
i__33772_33784 = G__33801;
continue;
}
} else {
}
}
break;
}

var seq__33773_33802 = cljs.core.seq.call(null,new_reactions);
var chunk__33774_33803 = null;
var count__33775_33804 = (0);
var i__33776_33805 = (0);
while(true){
if((i__33776_33805 < count__33775_33804)){
var ref_33806 = cljs.core._nth.call(null,chunk__33774_33803,i__33776_33805);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_33806)){
} else {
cljs.core.add_watch.call(null,ref_33806,key,((function (seq__33773_33802,chunk__33774_33803,count__33775_33804,i__33776_33805,ref_33806,comp,old_reactions,vec__33766,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33765){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__33773_33802,chunk__33774_33803,count__33775_33804,i__33776_33805,ref_33806,comp,old_reactions,vec__33766,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33765))
);
}

var G__33807 = seq__33773_33802;
var G__33808 = chunk__33774_33803;
var G__33809 = count__33775_33804;
var G__33810 = (i__33776_33805 + (1));
seq__33773_33802 = G__33807;
chunk__33774_33803 = G__33808;
count__33775_33804 = G__33809;
i__33776_33805 = G__33810;
continue;
} else {
var temp__4657__auto___33811 = cljs.core.seq.call(null,seq__33773_33802);
if(temp__4657__auto___33811){
var seq__33773_33812__$1 = temp__4657__auto___33811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33773_33812__$1)){
var c__28100__auto___33813 = cljs.core.chunk_first.call(null,seq__33773_33812__$1);
var G__33814 = cljs.core.chunk_rest.call(null,seq__33773_33812__$1);
var G__33815 = c__28100__auto___33813;
var G__33816 = cljs.core.count.call(null,c__28100__auto___33813);
var G__33817 = (0);
seq__33773_33802 = G__33814;
chunk__33774_33803 = G__33815;
count__33775_33804 = G__33816;
i__33776_33805 = G__33817;
continue;
} else {
var ref_33818 = cljs.core.first.call(null,seq__33773_33812__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_33818)){
} else {
cljs.core.add_watch.call(null,ref_33818,key,((function (seq__33773_33802,chunk__33774_33803,count__33775_33804,i__33776_33805,ref_33818,seq__33773_33812__$1,temp__4657__auto___33811,comp,old_reactions,vec__33766,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33765){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__33773_33802,chunk__33774_33803,count__33775_33804,i__33776_33805,ref_33818,seq__33773_33812__$1,temp__4657__auto___33811,comp,old_reactions,vec__33766,dom,next_state,new_reactions,key,_STAR_reactions_STAR_33765))
);
}

var G__33819 = cljs.core.next.call(null,seq__33773_33812__$1);
var G__33820 = null;
var G__33821 = (0);
var G__33822 = (0);
seq__33773_33802 = G__33819;
chunk__33774_33803 = G__33820;
count__33775_33804 = G__33821;
i__33776_33805 = G__33822;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_33765;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_33823 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__33777_33824 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__33778_33825 = null;
var count__33779_33826 = (0);
var i__33780_33827 = (0);
while(true){
if((i__33780_33827 < count__33779_33826)){
var ref_33828 = cljs.core._nth.call(null,chunk__33778_33825,i__33780_33827);
cljs.core.remove_watch.call(null,ref_33828,key_33823);

var G__33829 = seq__33777_33824;
var G__33830 = chunk__33778_33825;
var G__33831 = count__33779_33826;
var G__33832 = (i__33780_33827 + (1));
seq__33777_33824 = G__33829;
chunk__33778_33825 = G__33830;
count__33779_33826 = G__33831;
i__33780_33827 = G__33832;
continue;
} else {
var temp__4657__auto___33833 = cljs.core.seq.call(null,seq__33777_33824);
if(temp__4657__auto___33833){
var seq__33777_33834__$1 = temp__4657__auto___33833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33777_33834__$1)){
var c__28100__auto___33835 = cljs.core.chunk_first.call(null,seq__33777_33834__$1);
var G__33836 = cljs.core.chunk_rest.call(null,seq__33777_33834__$1);
var G__33837 = c__28100__auto___33835;
var G__33838 = cljs.core.count.call(null,c__28100__auto___33835);
var G__33839 = (0);
seq__33777_33824 = G__33836;
chunk__33778_33825 = G__33837;
count__33779_33826 = G__33838;
i__33780_33827 = G__33839;
continue;
} else {
var ref_33840 = cljs.core.first.call(null,seq__33777_33834__$1);
cljs.core.remove_watch.call(null,ref_33840,key_33823);

var G__33841 = cljs.core.next.call(null,seq__33777_33834__$1);
var G__33842 = null;
var G__33843 = (0);
var G__33844 = (0);
seq__33777_33824 = G__33841;
chunk__33778_33825 = G__33842;
count__33779_33826 = G__33843;
i__33780_33827 = G__33844;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33851 = arguments.length;
var i__28433__auto___33852 = (0);
while(true){
if((i__28433__auto___33852 < len__28432__auto___33851)){
args__28439__auto__.push((arguments[i__28433__auto___33852]));

var G__33853 = (i__28433__auto___33852 + (1));
i__28433__auto___33852 = G__33853;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((2) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28440__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__33848){
var map__33849 = p__33848;
var map__33849__$1 = ((((!((map__33849 == null)))?((((map__33849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33849):map__33849);
var options = map__33849__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq33845){
var G__33846 = cljs.core.first.call(null,seq33845);
var seq33845__$1 = cljs.core.next.call(null,seq33845);
var G__33847 = cljs.core.first.call(null,seq33845__$1);
var seq33845__$2 = cljs.core.next.call(null,seq33845__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__33846,G__33847,seq33845__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__28439__auto__ = [];
var len__28432__auto___33857 = arguments.length;
var i__28433__auto___33858 = (0);
while(true){
if((i__28433__auto___33858 < len__28432__auto___33857)){
args__28439__auto__.push((arguments[i__28433__auto___33858]));

var G__33859 = (i__28433__auto___33858 + (1));
i__28433__auto___33858 = G__33859;
continue;
} else {
}
break;
}

var argseq__28440__auto__ = ((((2) < args__28439__auto__.length))?(new cljs.core.IndexedSeq(args__28439__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28440__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq33854){
var G__33855 = cljs.core.first.call(null,seq33854);
var seq33854__$1 = cljs.core.next.call(null,seq33854);
var G__33856 = cljs.core.first.call(null,seq33854__$1);
var seq33854__$2 = cljs.core.next.call(null,seq33854__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__33855,G__33856,seq33854__$2);
});


//# sourceMappingURL=core.js.map?rel=1511532874418
