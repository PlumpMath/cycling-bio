// Compiled by ClojureScript 0.0-2277
goog.provide('versal_gadget.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
versal_gadget.core.player = (new VersalPlayerAPI());
versal_gadget.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
versal_gadget.core.init = (function init(){versal_gadget.core.player.startListening();
return versal_gadget.core.player.on("attributesChanged",(function (attrs){console.log(attrs);
var cattrs = cljs.core.js__GT_clj.call(null,attrs);return cljs.core.swap_BANG_.call(null,versal_gadget.core.app_state,cattrs);
}));
});
versal_gadget.core.main_view = (function main_view(app,owner){if(typeof versal_gadget.core.t5776 !== 'undefined')
{} else
{
/**
* @constructor
*/
versal_gadget.core.t5776 = (function (owner,app,main_view,meta5777){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta5777 = meta5777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
versal_gadget.core.t5776.cljs$lang$type = true;
versal_gadget.core.t5776.cljs$lang$ctorStr = "versal-gadget.core/t5776";
versal_gadget.core.t5776.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"versal-gadget.core/t5776");
});
versal_gadget.core.t5776.prototype.om$core$IRender$ = true;
versal_gadget.core.t5776.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Main view"));
});
versal_gadget.core.t5776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5778){var self__ = this;
var _5778__$1 = this;return self__.meta5777;
});
versal_gadget.core.t5776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5778,meta5777__$1){var self__ = this;
var _5778__$1 = this;return (new versal_gadget.core.t5776(self__.owner,self__.app,self__.main_view,meta5777__$1));
});
versal_gadget.core.__GT_t5776 = (function __GT_t5776(owner__$1,app__$1,main_view__$1,meta5777){return (new versal_gadget.core.t5776(owner__$1,app__$1,main_view__$1,meta5777));
});
}
return (new versal_gadget.core.t5776(owner,app,main_view,null));
});
versal_gadget.core.setup_react = (function setup_react(){return om.core.root.call(null,versal_gadget.core.main_view,versal_gadget.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.querySelector("#app")], null));
});
versal_gadget.core.init.call(null);
versal_gadget.core.setup_react.call(null);

//# sourceMappingURL=core.js.map