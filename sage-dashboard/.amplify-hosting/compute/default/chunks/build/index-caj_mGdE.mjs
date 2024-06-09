import { s, u as usePopper, _ as __nuxt_component_0$1 } from './base-layout-BFHzeL62.mjs';
import { i as i$2, o as o$1, E, u as u$1, t, d as i, w, e as w$2, h, A as A$1, I as I$1, l, N, P, f as N$1$1, g as useUI, j as l$1, k as arrow, m as o, n as useId, T as T$1, a as _sfc_main$1$1, _ as __nuxt_component_4$1 } from './Input-DoCQJjVJ.mjs';
import { defineComponent, ref, computed, provide, watchEffect, h as h$1, Fragment, onMounted, onUnmounted, shallowRef, toRef, watch, useSSRContext, inject, mergeProps, withCtx, createVNode, mergeModels, useModel, unref, isRef, createTextVNode, resolveComponent, renderSlot, openBlock, createBlock, Transition, createCommentVNode } from 'vue';
import { q as defu } from '../../index.mjs';
import { A, N as N$1, E as E$1, n, f, s as s$1, v, d, _ as _sfc_main$d, a as _sfc_main$2$1 } from './input-checkbox-DRRI4XzJ.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$c } from './the-button-CDqo36AP.mjs';
import './nuxt-link-Cs_hzKNb.mjs';
import 'tailwind-merge';
import './Icon-BlzFIon0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DmJTZe-0.mjs';
import '@vueuse/core';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const popover = {
  wrapper: "relative",
  container: "z-50 group",
  trigger: "inline-flex w-full",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  overlay: {
    base: "fixed inset-0 transition-opacity z-50",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enterActiveClass: "ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow
};
var Se = ((s2) => (s2[s2.Open = 0] = "Open", s2[s2.Closed = 1] = "Closed", s2))(Se || {});
let re = Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s2 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, U), s2;
  }
  return P2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s2, expose: h$2 }) {
  var u$1$1;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t$1 = ref(1), o$12 = ref(null), y = ref(null), v2 = ref(null), m = ref(null), b = computed(() => i$2(f2)), E$2 = computed(() => {
    var L, $;
    if (!o$1(o$12) || !o$1(m))
      return false;
    for (let x of (void 0).querySelectorAll("body > *"))
      if (Number(x == null ? void 0 : x.contains(o$1(o$12))) ^ Number(x == null ? void 0 : x.contains(o$1(m))))
        return true;
    let e = E(), r = e.indexOf(o$1(o$12)), l2 = (r + e.length - 1) % e.length, g = (r + 1) % e.length, G = e[l2], C = e[g];
    return !((L = o$1(m)) != null && L.contains(G)) && !(($ = o$1(m)) != null && $.contains(C));
  }), a = { popoverState: t$1, buttonId: ref(null), panelId: ref(null), panel: m, button: o$12, isPortalled: E$2, beforePanelSentinel: y, afterPanelSentinel: v2, togglePopover() {
    t$1.value = u$1(t$1.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t$1.value !== 1 && (t$1.value = 1);
  }, close(e) {
    a.closePopover();
    let r = (() => e ? e instanceof HTMLElement ? e : e.value instanceof HTMLElement ? o$1(e) : o$1(a.button) : o$1(a.button))();
    r == null || r.focus();
  } };
  provide(re, a), t(computed(() => u$1(t$1.value, { [0]: i.Open, [1]: i.Closed })));
  let S = { buttonId: a.buttonId, panelId: a.panelId, close() {
    a.closePopover();
  } }, c = ae(), I2 = c == null ? void 0 : c.registerPopover, [F, w$2$1] = A(), i$2$1 = N$1({ mainTreeNodeRef: c == null ? void 0 : c.mainTreeNodeRef, portals: F, defaultContainers: [o$12, m] });
  function p() {
    var e, r, l2, g;
    return (g = c == null ? void 0 : c.isFocusWithinPopoverGroup()) != null ? g : ((e = b.value) == null ? void 0 : e.activeElement) && (((r = o$1(o$12)) == null ? void 0 : r.contains(b.value.activeElement)) || ((l2 = o$1(m)) == null ? void 0 : l2.contains(b.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S)), E$1((u$1$1 = b.value) == null ? void 0 : u$1$1.defaultView, "focus", (e) => {
    var r, l2;
    e.target !== void 0 && e.target instanceof HTMLElement && t$1.value === 0 && (p() || o$12 && m && (i$2$1.contains(e.target) || (r = o$1(a.beforePanelSentinel)) != null && r.contains(e.target) || (l2 = o$1(a.afterPanelSentinel)) != null && l2.contains(e.target) || a.closePopover()));
  }, true), w(i$2$1.resolveContainers, (e, r) => {
    var l2;
    a.closePopover(), w$2(r, h.Loose) || (e.preventDefault(), (l2 = o$1(o$12)) == null || l2.focus());
  }, computed(() => t$1.value === 0)), () => {
    let e = { open: t$1.value === 0, close: a.close };
    return h$1(Fragment, [h$1(w$2$1, {}, () => A$1({ theirProps: { ...d2, ...s2 }, ourProps: { ref: f2 }, slot: e, slots: P2, attrs: s2, name: "Popover" })), h$1(i$2$1.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1, { attrs: P$1, slots: s$2, expose: h2 }) {
  var u$1$1;
  let f$1 = (u$1$1 = d$1.id) != null ? u$1$1 : `headlessui-popover-button-${I$1()}`, t2 = U("PopoverButton"), o$2 = computed(() => i$2(t2.button));
  h2({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = f$1;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let y = ae(), v2 = y == null ? void 0 : y.closeOthers, m = ge(), b = computed(() => m === null ? false : m.value === t2.panelId.value), E$12 = ref(null), a = `headlessui-focus-sentinel-${I$1()}`;
  b.value || watchEffect(() => {
    t2.button.value = o$1(E$12);
  });
  let S = s(computed(() => ({ as: d$1.as, type: P$1.type })), E$12);
  function c(e) {
    var r, l2, g, G, C;
    if (b.value) {
      if (t2.popoverState.value === 1)
        return;
      switch (e.key) {
        case o.Space:
        case o.Enter:
          e.preventDefault(), (l2 = (r = e.target).click) == null || l2.call(r), t2.closePopover(), (g = o$1(t2.button)) == null || g.focus();
          break;
      }
    } else
      switch (e.key) {
        case o.Space:
        case o.Enter:
          e.preventDefault(), e.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
          break;
        case o.Escape:
          if (t2.popoverState.value !== 0)
            return v2 == null ? void 0 : v2(t2.buttonId.value);
          if (!o$1(t2.button) || (G = o$2.value) != null && G.activeElement && !((C = o$1(t2.button)) != null && C.contains(o$2.value.activeElement)))
            return;
          e.preventDefault(), e.stopPropagation(), t2.closePopover();
          break;
      }
  }
  function I$1$1(e) {
    b.value || e.key === o.Space && e.preventDefault();
  }
  function F(e) {
    var r, l2;
    d$1.disabled || (b.value ? (t2.closePopover(), (r = o$1(t2.button)) == null || r.focus()) : (e.preventDefault(), e.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o$1(t2.button)) == null || l2.focus()));
  }
  function w2(e) {
    e.preventDefault(), e.stopPropagation();
  }
  let i$12 = n();
  function p() {
    let e = o$1(t2.panel);
    if (!e)
      return;
    function r() {
      u$1(i$12.value, { [d.Forwards]: () => P(e, N$1$1.First), [d.Backwards]: () => P(e, N$1$1.Last) }) === T$1.Error && P(E().filter((g) => g.dataset.headlessuiFocusGuard !== "true"), u$1(i$12.value, { [d.Forwards]: N$1$1.Next, [d.Backwards]: N$1$1.Previous }), { relativeTo: o$1(t2.button) });
    }
    r();
  }
  return () => {
    let e = t2.popoverState.value === 0, r = { open: e }, { ...l2 } = d$1, g = b.value ? { ref: E$12, type: S.value, onKeydown: c, onClick: F } : { ref: E$12, id: f$1, type: S.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$1(t2.panel) ? t2.panelId.value : void 0, disabled: d$1.disabled ? true : void 0, onKeydown: c, onKeyup: I$1$1, onClick: F, onMousedown: w2 };
    return h$1(Fragment, [A$1({ ourProps: g, theirProps: { ...P$1, ...l2 }, slot: r, attrs: P$1, slots: s$2, name: "PopoverButton" }), e && !b.value && t2.isPortalled.value && h$1(f, { id: a, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s2 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${I$1()}`, t2 = l(), o2 = computed(() => t2 !== null ? (t2.value & i.Open) === i.Open : h2.popoverState.value === 0);
  function y() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A$1({ ourProps: { id: f2, "aria-hidden": true, onClick: y }, theirProps: d2, slot: v2, attrs: P2, slots: s2, features: N.RenderStrategy | N.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1, { attrs: P$1, slots: s2, expose: h2 }) {
  var w2;
  let f$1 = (w2 = d$1.id) != null ? w2 : `headlessui-popover-panel-${I$1()}`, { focus: t2 } = d$1, o$2 = U("PopoverPanel"), y = computed(() => i$2(o$2.panel)), v2 = `headlessui-focus-sentinel-before-${I$1()}`, m = `headlessui-focus-sentinel-after-${I$1()}`;
  h2({ el: o$2.panel, $el: o$2.panel }), onMounted(() => {
    o$2.panelId.value = f$1;
  }), onUnmounted(() => {
    o$2.panelId.value = null;
  }), provide(ue, o$2.panelId), watchEffect(() => {
    var p, u2;
    if (!t2 || o$2.popoverState.value !== 0 || !o$2.panel)
      return;
    let i2 = (p = y.value) == null ? void 0 : p.activeElement;
    (u2 = o$1(o$2.panel)) != null && u2.contains(i2) || P(o$1(o$2.panel), N$1$1.First);
  });
  let b = l(), E$12 = computed(() => b !== null ? (b.value & i.Open) === i.Open : o$2.popoverState.value === 0);
  function a(i2) {
    var p, u2;
    switch (i2.key) {
      case o.Escape:
        if (o$2.popoverState.value !== 0 || !o$1(o$2.panel) || y.value && !((p = o$1(o$2.panel)) != null && p.contains(y.value.activeElement)))
          return;
        i2.preventDefault(), i2.stopPropagation(), o$2.closePopover(), (u2 = o$1(o$2.button)) == null || u2.focus();
        break;
    }
  }
  function S(i2) {
    var u2, e, r, l2, g;
    let p = i2.relatedTarget;
    p && o$1(o$2.panel) && ((u2 = o$1(o$2.panel)) != null && u2.contains(p) || (o$2.closePopover(), ((r = (e = o$1(o$2.beforePanelSentinel)) == null ? void 0 : e.contains) != null && r.call(e, p) || (g = (l2 = o$1(o$2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g.call(l2, p)) && p.focus({ preventScroll: true })));
  }
  let c = n();
  function I$1$1() {
    let i2 = o$1(o$2.panel);
    if (!i2)
      return;
    function p() {
      u$1(c.value, { [d.Forwards]: () => {
        var e;
        P(i2, N$1$1.First) === T$1.Error && ((e = o$1(o$2.afterPanelSentinel)) == null || e.focus());
      }, [d.Backwards]: () => {
        var u2;
        (u2 = o$1(o$2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p();
  }
  function F() {
    let i2 = o$1(o$2.panel);
    if (!i2)
      return;
    function p() {
      u$1(c.value, { [d.Forwards]: () => {
        let u2 = o$1(o$2.button), e = o$1(o$2.panel);
        if (!u2)
          return;
        let r = E(), l2 = r.indexOf(u2), g = r.slice(0, l2 + 1), C = [...r.slice(l2 + 1), ...g];
        for (let L of C.slice())
          if (L.dataset.headlessuiFocusGuard === "true" || e != null && e.contains(L)) {
            let $ = C.indexOf(L);
            $ !== -1 && C.splice($, 1);
          }
        P(C, N$1$1.First, { sorted: false });
      }, [d.Backwards]: () => {
        var e;
        P(i2, N$1$1.Previous) === T$1.Error && ((e = o$1(o$2.button)) == null || e.focus());
      } });
    }
    p();
  }
  return () => {
    let i2 = { open: o$2.popoverState.value === 0, close: o$2.close }, { focus: p, ...u2 } = d$1, e = { ref: o$2.panel, id: f$1, onKeydown: a, onFocusout: t2 && o$2.popoverState.value === 0 ? S : void 0, tabIndex: -1 };
    return A$1({ ourProps: e, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s2, default: (...r) => {
      var l2;
      return [h$1(Fragment, [E$12.value && o$2.isPortalled.value && h$1(f, { id: v2, ref: o$2.beforePanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I$1$1 }), (l2 = s2.default) == null ? void 0 : l2.call(s2, ...r), E$12.value && o$2.isPortalled.value && h$1(f, { id: m, ref: o$2.afterPanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F })])];
    } }, features: N.RenderStrategy | N.Static, visible: E$12.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s2, expose: h2 }) {
  let f2 = ref(null), t2 = shallowRef([]), o$12 = computed(() => i$2(f2)), y = v();
  h2({ el: f2, $el: f2 });
  function v$1(a) {
    let S = t2.value.indexOf(a);
    S !== -1 && t2.value.splice(S, 1);
  }
  function m(a) {
    return t2.value.push(a), () => {
      v$1(a);
    };
  }
  function b() {
    var c;
    let a = o$12.value;
    if (!a)
      return false;
    let S = a.activeElement;
    return (c = o$1(f2)) != null && c.contains(S) ? true : t2.value.some((I2) => {
      var F, w2;
      return ((F = a.getElementById(I2.buttonId.value)) == null ? void 0 : F.contains(S)) || ((w2 = a.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S));
    });
  }
  function E2(a) {
    for (let S of t2.value)
      S.buttonId.value !== a && S.close();
  }
  return provide(le, { registerPopover: m, unregisterPopover: v$1, isFocusWithinPopoverGroup: b, closeOthers: E2, mainTreeNodeRef: y.mainTreeNodeRef }), () => h$1(Fragment, [A$1({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s2, name: "PopoverGroup" }), h$1(y.MainTreeNode)]);
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
const _sfc_main$b = defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: Ge,
    HPopoverPanel: je
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: () => config.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config.default.closeDelay
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart() {
      if (!popoverApi.value) {
        return;
      }
      if (popoverApi.value.popoverState === 0) {
        popoverApi.value.closePopover();
      } else {
        popoverApi.value.togglePopover();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        popoverApi.value.togglePopover && popoverApi.value.togglePopover();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        popoverApi.value.closePopover && popoverApi.value.closePopover();
        closeTimeout = null;
      }, props.closeDelay);
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!popoverApi.value)
        return;
      if (oldValue === void 0 || newValue === oldValue)
        return;
      if (newValue) {
        popoverApi.value.popoverState = 0;
      } else {
        popoverApi.value.closePopover();
      }
    });
    watch(() => {
      var _a;
      return (_a = popoverApi.value) == null ? void 0 : _a.popoverState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue)
        return;
      emit("update:open", newValue === 0);
    });
    l$1(() => useId("$dcv2Y3vSTA"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.overlay) {
          _push2(`<template>`);
          if (open) {
            _push2(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</template>`);
        } else {
          _push2(`<!---->`);
        }
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          _ctx.overlay ? (openBlock(), createBlock(Transition, mergeProps({
            key: 0,
            appear: ""
          }, _ctx.ui.overlay.transition), {
            default: withCtx(() => [
              open ? (openBlock(), createBlock("div", {
                key: 0,
                class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
              }, null, 2)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040)) : createCommentVNode("", true),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HPopoverPanel, {
                    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "panel", {
                        open,
                        close
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])
              ]),
              _: 2
            }, 1040)
          ], 6)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "menu-switch-customer",
  __ssrInlineRender: true,
  setup(__props) {
    const popper = {
      placement: "right-end",
      scroll: true
    };
    const uiPopper = {
      rounded: "rounded-3xl",
      background: "bg-primaryBlue-100",
      trigger: "flex w-full",
      container: "z-50 group",
      ring: "ring ring-200",
      width: "w-[470px]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPopover = __nuxt_component_0;
      const _component_ButtonSidebar = _sfc_main$1$1;
      const _component_TheButton = _sfc_main$c;
      _push(ssrRenderComponent(_component_UPopover, mergeProps({
        ui: uiPopper,
        popper
      }, _attrs), {
        panel: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex max-h-[490px] flex-col gap-6 overflow-auto p-6"${_scopeId}><div class="flex flex-col gap-4"${_scopeId}><h3 class="font-bold uppercase text-primaryBlue-600"${_scopeId}>sc-johnson</h3><div class="flex gap-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-col gap-4"${_scopeId}><h3 class="font-bold uppercase text-primaryBlue-600"${_scopeId}> test customer [internal test case] </h3><div class="flex gap-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp Name 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Compressor 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-col gap-4"${_scopeId}><h3 class="font-bold uppercase text-primaryBlue-600"${_scopeId}>purdue</h3><div class="flex gap-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "C4000"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "C5000"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Shared"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-col gap-4"${_scopeId}><h3 class="font-bold uppercase text-primaryBlue-600"${_scopeId}>sc-johnson</h3><div class="flex gap-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "A"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "B"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "C"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "D"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-col gap-4"${_scopeId}><h3 class="font-bold uppercase text-primaryBlue-600"${_scopeId}>sc-johnson</h3><div class="flex gap-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "ghost",
              label: "Comp 4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex max-h-[490px] flex-col gap-6 overflow-auto p-6" }, [
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h3", { class: "font-bold uppercase text-primaryBlue-600" }, "sc-johnson"),
                  createVNode("div", { class: "flex gap-4 overflow-x-auto" }, [
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 1"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 2"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 3"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h3", { class: "font-bold uppercase text-primaryBlue-600" }, " test customer [internal test case] "),
                  createVNode("div", { class: "flex gap-4 overflow-x-auto" }, [
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp Name 1"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Compressor 1"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 1"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 2"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h3", { class: "font-bold uppercase text-primaryBlue-600" }, "purdue"),
                  createVNode("div", { class: "flex gap-4 overflow-x-auto" }, [
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "C4000"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "C5000"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Shared"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h3", { class: "font-bold uppercase text-primaryBlue-600" }, "sc-johnson"),
                  createVNode("div", { class: "flex gap-4 overflow-x-auto" }, [
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "A"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "B"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "C"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "D"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h3", { class: "font-bold uppercase text-primaryBlue-600" }, "sc-johnson"),
                  createVNode("div", { class: "flex gap-4 overflow-x-auto" }, [
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 1"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 2"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 3"
                    }),
                    createVNode(_component_TheButton, {
                      type: "ghost",
                      label: "Comp 4"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ButtonSidebar, {
              type: "gray",
              label: "Customers",
              icon: "i-heroicons-arrow-right"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ButtonSidebar, {
                type: "gray",
                label: "Customers",
                icon: "i-heroicons-arrow-right"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/menu-switch-index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-1 flex-col items-center justify-center rounded-2xl bg-primaryBlue-200 py-2 transition-all delay-200 ease-in-out hover:ring-1 hover:ring-primaryBlue-500" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`<div class="mt-4 text-sm font-bold text-primaryBlue-500">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/location-weather.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#408BFB",
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none"
  }, _attrs))}><path d="M12 9.25C11.1077 9.23562 10.2363 9.52003 9.52424 10.058C8.81222 10.596 8.30055 11.3566 8.07061 12.2188C7.84068 13.0811 7.90568 13.9955 8.25529 14.8165C8.6049 15.6376 9.21904 16.3182 10 16.75M12 3.25V5.25M6.6 18.65L5.2 20.05M4 13.25H2M6.6 7.85L5.2 6.45M20 14.7851V4.25C20 3.14543 19.1046 2.25 18 2.25C16.8954 2.25 16 3.14543 16 4.25V14.7851C14.8044 15.4767 14 16.7694 14 18.25C14 20.4591 15.7909 22.25 18 22.25C20.2091 22.25 22 20.4591 22 18.25C22 16.7694 21.1956 15.4767 20 14.7851Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/icons/location-weather/icon-temperature.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#408BFB",
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none"
  }, _attrs))}><path d="M9.50929 4.91667C9.8755 4.5075 10.4077 4.25 11 4.25C12.1046 4.25 13 5.14543 13 6.25C13 7.35457 12.1046 8.25 11 8.25H2.00002M12.5093 19.5833C12.8755 19.9925 13.4077 20.25 14 20.25C15.1046 20.25 16 19.3546 16 18.25C16 17.1454 15.1046 16.25 14 16.25H2.00002M16.7639 7.25C17.3132 6.63625 18.1115 6.25 19 6.25C20.6569 6.25 22 7.59315 22 9.25C22 10.9069 20.6569 12.25 19 12.25H2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/icons/location-weather/icon-wind.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#7774FF",
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none"
  }, _attrs))}><path d="M22 16.25C22 19.5637 19.3137 22.25 16 22.25C12.6863 22.25 10 19.5637 10 16.25C10 11.9363 16 2.25 16 2.25C16 2.25 22 11.9363 22 16.25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 9.25C8 10.9069 6.65685 12.25 5 12.25C3.34315 12.25 2 10.9069 2 9.25C2 7.09315 5 2.25 5 2.25C5 2.25 8 7.09315 8 9.25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/icons/location-weather/icon-humidity.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_InputSearch = _sfc_main$2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-shrink flex-col rounded-3xl border border-containerBorder px-6 shadow-container lg:w-1/2" }, _attrs))}><div id="header" class="mt-6 flex h-9 w-full flex-row justify-between"><div class="flex flex-row"><h1 class="flex items-center text-xl font-bold text-black">Numerical Tags</h1></div>`);
  _push(ssrRenderComponent(_component_InputSearch, null, null, _parent));
  _push(`</div><div class="my-6 space-y-2 overflow-auto" id="numericalTags">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/numerical-tags/numerical-tags-container.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-between py-2" }, _attrs))}><div class="flex flex-row"><div class="flex flex-col gap-2"><div class="flex h-[15px] w-[70px] bg-primaryGray-500"></div><h1 class="flex justify-center text-base font-medium text-black">6</h1></div><div class="ml-6 flex-col gap-2"><h1 class="flex text-base text-black">Capacity Control Position ZT-4003 (CNTRL)</h1><h2 class="flex text-[12px] text-[#55555560]"> a_c_4000_meters_capacity_side_cntrl </h2></div></div><div class="flex flex-row items-center justify-end gap-4"><h1 class="textbase flex font-medium text-black">6.5</h1><svg class="flex" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M9.5 6V13M6 9.5H13M18.25 9.5C18.25 14.3325 14.3325 18.25 9.5 18.25C4.66751 18.25 0.75 14.3325 0.75 9.5C0.75 4.66751 4.66751 0.75 9.5 0.75C14.3325 0.75 18.25 4.66751 18.25 9.5Z" stroke="#555555" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/numerical-tags/numerical-tags-data.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_InputSearch = _sfc_main$2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex w-full flex-col rounded-3xl border border-containerBorder px-6 shadow-container lg:w-1/2",
    id: "discrete-tags"
  }, _attrs))}><div id="header" class="mt-6 flex h-9 w-full flex-row justify-between"><h1 class="flex items-center text-xl font-bold text-black">Discrete Tags</h1>`);
  _push(ssrRenderComponent(_component_InputSearch, null, null, _parent));
  _push(`</div><div class="my-6 space-y-4 px-6"></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/discrete-tags/discrete-tags-container.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "selected-numerical-tag-data",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    tagName: {},
    tagId: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const checked = useModel(__props, "modelValue");
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputCheckbox = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-between gap-6" }, _attrs))}><div class="flex max-w-[300px] flex-col gap-2"><p class="truncate text-base text-primaryBlue-500">${ssrInterpolate(props.tagName)}</p><p class="truncate text-sm text-primaryGray-400">${ssrInterpolate(props.tagId)}</p></div><div>`);
      _push(ssrRenderComponent(_component_InputCheckbox, {
        modelValue: checked.value,
        "onUpdate:modelValue": ($event) => checked.value = $event
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/numerical-tags/menu-selected-numerical-tags/selected-numerical-tag-data.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "menu-selected-numerical-tags",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SelectedNumericalTagData = _sfc_main$2;
      const _component_TheButton = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-selectedNumericalTagMenu absolute bottom-6 right-6 z-50 flex w-[385px] flex-col gap-6 rounded-3xl bg-primaryBlue-50 p-6 ring-1 ring-primaryBlue-200" }, _attrs))}><div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_SelectedNumericalTagData, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        "tag-name": "Capacity Control Position ZT-4003 (CNTRL)",
        "tag-id": "a_c_4000_meters_capacity_side_cntrl"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SelectedNumericalTagData, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        "tag-name": "Capacity Control Position ZT-4003 (CNTRL)",
        "tag-id": "a_c_4000_meters_capacity_side_cntrl"
      }, null, _parent));
      _push(`</div><div class="flex w-full justify-between">`);
      _push(ssrRenderComponent(_component_TheButton, { label: "Open in New Window" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        label: "Unselect All",
        type: "dark"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/numerical-tags/menu-selected-numerical-tags/menu-selected-numerical-tags.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseLayout = __nuxt_component_0$1;
  const _component_MenuSwitchCustomer = _sfc_main$a;
  const _component_ButtonSidebar = _sfc_main$1$1;
  const _component_UIcon = __nuxt_component_4$1;
  const _component_LocationWeather = __nuxt_component_4;
  const _component_IconTemperature = __nuxt_component_5;
  const _component_IconWind = __nuxt_component_6;
  const _component_IconHumidity = __nuxt_component_7;
  const _component_NumericalTagsContainer = __nuxt_component_8;
  const _component_NumericalTagsData = __nuxt_component_9;
  const _component_DiscreteTagsContainer = __nuxt_component_10;
  const _component_MenuSelectedNumericalTags = _sfc_main$1;
  _push(ssrRenderComponent(_component_BaseLayout, _attrs, {
    "sidebar-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-1 flex-col gap-6"${_scopeId}><div class="flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_MenuSwitchCustomer, null, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col"${_scopeId}><h1 class="text-[12px] font-bold uppercase text-sidebarListTitle"${_scopeId}>Purdue</h1><div class="mt-2 flex flex-col gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          label: "c4000",
          active: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, { label: "c5000" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, { label: "shared" }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="flex flex-col"${_scopeId}><h1 class="text-[12px] font-bold uppercase text-sidebarListTitle"${_scopeId}> tags-groups </h1><div class="mt-2 flex flex-col gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          label: "tags-groups",
          active: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, { label: "Reset Groups" }, {
          trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex flex-1 items-end justify-end"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-backspace",
                class: "h-[18px] w-[18px]"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-1 items-end justify-end" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-backspace",
                    class: "h-[18px] w-[18px]"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="flex flex-col"${_scopeId}><h1 class="mb-2 text-[12px] font-bold uppercase text-sidebarListTitle"${_scopeId}> location weather </h1><div class="flex gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LocationWeather, null, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_IconTemperature, { class: "stroke-primaryBlue-500" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_IconTemperature, { class: "stroke-primaryBlue-500" })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 63.84 \xB0F `);
            } else {
              return [
                createTextVNode(" 63.84 \xB0F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LocationWeather, null, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_IconWind, { class: "stroke-primaryBlue-500" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_IconWind, { class: "stroke-primaryBlue-500" })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 2.57 m/s `);
            } else {
              return [
                createTextVNode(" 2.57 m/s ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LocationWeather, null, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_IconHumidity, { class: "stroke-primaryBlue-500" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_IconHumidity, { class: "stroke-primaryBlue-500" })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 94.0 % `);
            } else {
              return [
                createTextVNode(" 94.0 % ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="mt-6 flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          type: "primary",
          label: "Chat SCADA",
          icon: "i-heroicons-square-3-stack-3d",
          to: "/chat-home"
        }, {
          trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex h-4 items-center rounded-full bg-primaryBlue-400 px-2 text-xs font-normal text-primaryBlue-50"${_scopeId2}> Beta </div>`);
            } else {
              return [
                createVNode("div", { class: "flex h-4 items-center rounded-full bg-primaryBlue-400 px-2 text-xs font-normal text-primaryBlue-50" }, " Beta ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-1 flex-col gap-6" }, [
            createVNode("div", { class: "flex" }, [
              createVNode(_component_MenuSwitchCustomer)
            ]),
            createVNode("div", { class: "flex flex-col" }, [
              createVNode("h1", { class: "text-[12px] font-bold uppercase text-sidebarListTitle" }, "Purdue"),
              createVNode("div", { class: "mt-2 flex flex-col gap-2" }, [
                createVNode(_component_ButtonSidebar, {
                  label: "c4000",
                  active: ""
                }),
                createVNode(_component_ButtonSidebar, { label: "c5000" }),
                createVNode(_component_ButtonSidebar, { label: "shared" })
              ])
            ]),
            createVNode("div", { class: "flex flex-col" }, [
              createVNode("h1", { class: "text-[12px] font-bold uppercase text-sidebarListTitle" }, " tags-groups "),
              createVNode("div", { class: "mt-2 flex flex-col gap-2" }, [
                createVNode(_component_ButtonSidebar, {
                  label: "tags-groups",
                  active: ""
                }),
                createVNode(_component_ButtonSidebar, { label: "Reset Groups" }, {
                  trailing: withCtx(() => [
                    createVNode("div", { class: "flex flex-1 items-end justify-end" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-backspace",
                        class: "h-[18px] w-[18px]"
                      })
                    ])
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode("div", { class: "flex flex-col" }, [
              createVNode("h1", { class: "mb-2 text-[12px] font-bold uppercase text-sidebarListTitle" }, " location weather "),
              createVNode("div", { class: "flex gap-2" }, [
                createVNode(_component_LocationWeather, null, {
                  icon: withCtx(() => [
                    createVNode(_component_IconTemperature, { class: "stroke-primaryBlue-500" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 63.84 \xB0F ")
                  ]),
                  _: 1
                }),
                createVNode(_component_LocationWeather, null, {
                  icon: withCtx(() => [
                    createVNode(_component_IconWind, { class: "stroke-primaryBlue-500" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 2.57 m/s ")
                  ]),
                  _: 1
                }),
                createVNode(_component_LocationWeather, null, {
                  icon: withCtx(() => [
                    createVNode(_component_IconHumidity, { class: "stroke-primaryBlue-500" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 94.0 % ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createVNode("div", { class: "mt-6 flex flex-col" }, [
            createVNode(_component_ButtonSidebar, {
              type: "primary",
              label: "Chat SCADA",
              icon: "i-heroicons-square-3-stack-3d",
              to: "/chat-home"
            }, {
              trailing: withCtx(() => [
                createVNode("div", { class: "flex h-4 items-center rounded-full bg-primaryBlue-400 px-2 text-xs font-normal text-primaryBlue-50" }, " Beta ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    "main-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="m-6 flex flex-col gap-6 lg:flex-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NumericalTagsContainer, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NumericalTagsData, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NumericalTagsData, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NumericalTagsData),
                createVNode(_component_NumericalTagsData)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DiscreteTagsContainer, null, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_MenuSelectedNumericalTags, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "m-6 flex flex-col gap-6 lg:flex-row" }, [
            createVNode(_component_NumericalTagsContainer, null, {
              default: withCtx(() => [
                createVNode(_component_NumericalTagsData),
                createVNode(_component_NumericalTagsData)
              ]),
              _: 1
            }),
            createVNode(_component_DiscreteTagsContainer)
          ]),
          createVNode(_component_MenuSelectedNumericalTags)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-caj_mGdE.mjs.map
