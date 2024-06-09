import { _ as _sfc_main$9 } from './the-button-CDqo36AP.mjs';
import { i as i$2, A as A$2, S as S$1, o as o$1, I as I$1, l as l$2, d as i$1, u as u$1$1, w as w$2, N as N$3, s as s2, p as S, t as t$3, q as c$1, r as T$1, g as useUI, j as l$1$1, n as useId, v as useFormGroup, P, f as N$1$2, T as T$1$1, m as o$2, a as _sfc_main$1$1, x as t$1$1, b as __nuxt_component_2$1, _ as __nuxt_component_4, c as __nuxt_component_1$2 } from './Input-DoCQJjVJ.mjs';
import { defineComponent, ref, computed, onMounted, onUnmounted, h, Fragment, watchEffect, watch, unref, inject, provide, normalizeClass, toRef, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, nextTick, isRef, renderSlot, mergeModels, useModel, shallowRef, resolveComponent, openBlock, createBlock, createCommentVNode, resolveDynamicComponent } from 'vue';
import { n, f, s as s$1, E as E$1, A as A$3, N as N$1$1, u as u$2, b as _, c as N$2, d as d$2, _ as _sfc_main$b, a as _sfc_main$2$1 } from './input-checkbox-DRRI4XzJ.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as _sfc_main$1$2, a as _sfc_main$a, b as __nuxt_component_0$1 } from './input-password-Z_vJnq7s.mjs';
import './nuxt-link-Cs_hzKNb.mjs';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './Icon-BlzFIon0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DmJTZe-0.mjs';
import '@vueuse/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const radio = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-radio",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
let t$2 = [];
function t$1(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a2 = [], s2 = { addEventListener(e, t2, r, i2) {
    return e.addEventListener(t2, r, i2), s2.add(() => e.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e[0]();
    }), s2.add(() => {
      t2.current = false;
    });
  }, style(e, t2, r) {
    let i2 = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: r }), this.add(() => {
      Object.assign(e.style, { [t2]: i2 });
    });
  }, group(e) {
    let t2 = o();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return a2.push(e), () => {
      let t2 = a2.indexOf(e);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e of a2.splice(0))
      e();
  } };
  return s2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$1(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$1, slots: r, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$2(o2)), e = ref(false);
  onMounted(() => e.value = true), onUnmounted(() => e.value = false), $({ ownerDocument: i2 }, computed(() => e.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e.value && Boolean(t2.features & 8)));
  let f$1 = n();
  function a2(u2) {
    let T2 = o$1(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$1$1(f$1.value, { [d$2.Forwards]: () => {
        P(T2, N$1$2.First, { skipElements: [u2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(T2, N$1$2.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function H2(u2) {
    if (!e.value)
      return;
    let T2 = B(t2.containers);
    o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$1(T2, d2) || (s2.value ? P(o$1(o2), u$1$1(f$1.value, { [d$2.Forwards]: () => N$1$2.Next, [d$2.Backwards]: () => N$1$2.Previous }) | N$1$2.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$1.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$1, ...O }, slot: u2, attrs: n$1, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$1.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$2.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$1(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$2.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e, m2) => {
      if (e.every((a2, s2) => (m2 == null ? void 0 : m2[s2]) === a2) || !l2.value)
        return;
      let f2 = o$1(n2);
      f2 && t$1(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$1(r), s2 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s2) {
            o2.value = s2;
            return;
          }
        } else if (f2.contains(s2)) {
          o2.value = s2;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$1$2.First | N$1$2.NoScroll) === T$1$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e) => {
    if (!o2.value)
      return;
    let m2 = B(r);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e.target;
    a2 && a2 instanceof HTMLElement ? N$1(m2, a2) ? (l2.value = a2, S$1(a2)) : (e.preventDefault(), e.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$1(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$2(t2) {
  let e = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e.value = t2.getSnapshot();
  })), e;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e) {
    return n2.add(e), () => n2.delete(e);
  }, dispatch(e, ...s2) {
    let i2 = r[e].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e }) {
    var l2;
    let n2 = e.documentElement;
    o2 = ((l2 = e.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e, d: n2 }) {
    let t2 = e.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w$1() {
  return t$1$1() ? { before({ doc: r, d: n2, meta: c2 }) {
    function o$12(a2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a2 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e = t2.target.closest("a");
            if (!e)
              return;
            let { hash: f2 } = new URL(e.href), i2 = r.querySelector(f2);
            i2 && !o$12(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o$12(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && o$12(e.parentElement); )
              e = e.parentElement;
            n2.style(e, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o$12(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && e.dataset.headlessuiPortal !== "" && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth); )
              e = e.parentElement;
            e.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
      }, { passive: false }), n2.add(() => {
        var e;
        let t2 = (e = (void 0).scrollY) != null ? e : (void 0).pageYOffset;
        a2 !== t2 && (void 0).scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e, d: o2 }) {
    o2.style(e.documentElement, "overflow", "hidden");
  } };
}
function m$1(e) {
  let n2 = {};
  for (let t2 of e)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e, n2) {
  var o$12;
  let t2 = (o$12 = this.get(e)) != null ? o$12 : { doc: e, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e, t2), this;
}, POP(e, n2) {
  let t2 = this.get(e);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e, d: n2, meta: t2 }) {
  let o2 = { doc: e, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
a.subscribe(() => {
  let e = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e = t2.value ? i2.value.get(t2.value) : void 0;
    return e ? e.count > 0 : false;
  });
  return watch([t2, a$12], ([e, m2], [r], o2) => {
    if (!e || !m2)
      return;
    a.dispatch("PUSH", e, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e = o$1(d2);
    if (!e)
      return;
    o2(function() {
      var u2;
      if (!e)
        return;
      let r = (u2 = t.get(e)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e) : t.set(e, r - 1), r !== 1)
        return;
      let n2 = i.get(e);
      n2 && (n2["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n2["aria-hidden"]), e.inert = n2.inert, i.delete(e));
    });
    let l2 = (a2 = t.get(e)) != null ? a2 : 0;
    t.set(e, l2 + 1), l2 === 0 && (i.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = true);
  });
}
let u$1 = Symbol("StackContext");
var s = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(s || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e) : d2 === true && t2(1, o2, e);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e = ref([]);
  function r(n2) {
    return e.value.push(n2), () => {
      let i2 = e.value.indexOf(n2);
      i2 !== -1 && e.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r, slot: t2, name: o2, props: s2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s2 }) {
  var n2;
  let e = (n2 = t2.id) != null ? n2 : `headlessui-description-${I$1()}`, r = w();
  return onMounted(() => onUnmounted(r.register(e))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e };
    return A$2({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s2, name: i2 });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(e) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", We = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => true }, setup(e, { emit: i2, attrs: l2, slots: d2, expose: s$12 }) {
  var _$1, q;
  let n2 = (_$1 = e.id) != null ? _$1 : `headlessui-dialog-${I$1()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r = false, g2 = computed(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => e.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : e.open), m2 = ref(null), E$2 = computed(() => i$2(m2));
  if (s$12({ el: m2, $el: m2 }), !(e.open !== A || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? void 0 : e.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = A$3(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1$1({ portals: Q2, defaultContainers: [computed(() => {
    var t2;
    return (t2 = h$1.panelRef.value) != null ? t2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U.value ? false : k$1.value), le = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$2.value) == null ? void 0 : t2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$2.value) == null ? void 0 : t2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (t2, a2) => {
    if (a2 === "Dialog")
      return u$1$1(t2, { [s.Add]: () => D.value += 1, [s.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M = ref(null), h$1 = { titleId: M, panelRef: ref(null), dialogState: c2, setTitleId(t2) {
    M.value !== t2 && (M.value = t2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h$1);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (t2, a2) => {
    h$1.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((q = E$2.value) == null ? void 0 : q.defaultView, "keydown", (t2) => {
    ie.value && (t2.defaultPrevented || t2.key === o$2.Escape && (t2.preventDefault(), t2.stopPropagation(), h$1.close()));
  });
  let ue$1 = computed(() => !(U.value || c2.value !== 0 || N2));
  return d$1(E$2, ue$1, (t2) => {
    var a2;
    return { containers: [...(a2 = t2.containers) != null ? a2 : [], B2] };
  }), watchEffect((t2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$1(m2);
    if (!a2)
      return;
    let p = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x = L2.target.getBoundingClientRect();
        x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && h$1.close();
      }
    });
    p.observe(a2), t2(() => p.disconnect());
  }), () => {
    let { open: t2, initialFocus: a2, ...p } = e, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h(u$2, { force: true }, () => [h(_, () => h(N$2, { target: m2.value }, () => h(u$2, { force: false }, () => h(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$1$1(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(X, {}, () => A$2({ ourProps: f2, theirProps: { ...p, ...l2 }, slot: L2, attrs: l2, slots: d2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2 }) {
  var u2;
  let d2 = (u2 = e.id) != null ? u2 : `headlessui-dialog-overlay-${I$1()}`, s2 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s2.close());
  }
  return () => {
    let { ...r } = e;
    return A$2({ ourProps: { id: d2, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(e, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s2 = (r = e.id) != null ? r : `headlessui-dialog-backdrop-${I$1()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return d2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = e, D = { id: s2, ref: u2, "aria-hidden": true };
    return h(u$2, { force: true }, () => h(_, () => A$2({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s2 = (r = e.id) != null ? r : `headlessui-dialog-panel-${I$1()}`, n2 = T("DialogPanel");
  d2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = e, D = { id: s2, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2 }) {
  var n2;
  let d2 = (n2 = e.id) != null ? n2 : `headlessui-dialog-title-${I$1()}`, s2 = T("DialogTitle");
  return onMounted(() => {
    s2.setTitleId(d2), onUnmounted(() => s2.setTitleId(null));
  }), () => {
    let { ...u2 } = e;
    return A$2({ ourProps: { id: d2 }, theirProps: u2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e, t2) {
  let i2 = o();
  if (!e)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e), [l2, s2] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e, t2, i2, n2, a2, l$12) {
  let s2 = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a2), m(e, ...t2, ...i2), s2.nextFrame(() => {
    d(e, ...i2), m(e, ...n2), s2.add(F(e, (u2) => (d(e, ...n2, ...t2), m(e, ...a2), o$12(u2))));
  }), s2.add(() => d(e, ...t2, ...i2, ...n2, ...a2)), s2.add(() => o$12("cancelled")), s2.dispose;
}
function g(e = "") {
  return e.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(n2, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$1$1(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e == null || e()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s2$1, expose: h$1 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s2())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2$1);
  let d2 = ref(null), y2 = computed(() => e.unmount ? S.Unmount : S.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v.value ? "visible" : "hidden"), I$1$1 = { value: true }, c2 = I$1(), b = { value: false }, P2 = Q(() => {
    !b.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$1$1(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _2 = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I$1$1.value && !A2.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b.value = true, v.value && r(), v.value || f2(), o2(v.value ? L$1(p, j, M, X, _2, (V) => {
      b.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _2, (V) => {
      b.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E2, p) => {
      te(p), I$1$1.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$3(computed(() => u$1$1(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A2.value && v.value && c$1.isServer ? { class: normalizeClass([a2.class, U.class, ...j, ...M]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s2$1, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s2 }) {
  let h$1 = l$2(), n2 = computed(() => e.show === null && h$1 !== null ? (h$1.value & i$1.Open) === i$1.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$8 = defineComponent({
  components: {
    HDialog: We,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$3, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    l$1$1(() => useId("$HAJMhYDoe7"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "the-modal",
  __ssrInlineRender: true,
  props: {
    label: { default: "open" },
    fullScreen: { type: Boolean, default: false }
  },
  setup(__props) {
    const isOpen = ref(false);
    const uiModal = {
      rounded: "rounded-2xl",
      shadow: "shadow-main",
      width: "w-full sm:max-w-lg",
      ring: "ring-1 ring-containerBorder"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheButton = _sfc_main$9;
      const _component_UModal = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TheButton, {
        label: _ctx.label,
        onClick: ($event) => isOpen.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        ui: uiModal,
        fullscreen: _ctx.fullScreen
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="flex justify-end px-6 pb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheButton, {
              type: "secondary",
              label: "close",
              onClick: ($event) => isOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode("div", { class: "flex justify-end px-6 pb-6" }, [
                createVNode(_component_TheButton, {
                  type: "secondary",
                  label: "close",
                  onClick: ($event) => isOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-modal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$6 = defineComponent({
  components: {
    HDialog: We,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition,
        enterFrom: props.side === "left" ? ui.value.translate.left : ui.value.translate.right,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo: props.side === "left" ? ui.value.translate.left : ui.value.translate.right
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    l$1$1(() => useId("$zSEivjycv8"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$5 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$1);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "the-slideover",
  __ssrInlineRender: true,
  props: {
    label: { default: "open slideover" },
    preventClose: { type: Boolean, default: false }
  },
  setup(__props) {
    const isOpen = ref(false);
    const uiSlideover = {
      shadow: "shadow-main"
    };
    const uiCard = {
      body: { base: "flex-1", padding: "p-6" },
      ring: "",
      divide: "divide-none",
      header: {
        padding: "sm:px-6 pt-6 pb-0"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheButton = _sfc_main$9;
      const _component_USlideover = __nuxt_component_1;
      const _component_UCard = __nuxt_component_2;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UIcon = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TheButton, {
        label: _ctx.label,
        onClick: ($event) => isOpen.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "prevent-close": _ctx.preventClose,
        ui: uiSlideover
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, {
              class: "flex flex-1 flex-col",
              ui: uiCard
            }, {
              header: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-xl font-semibold leading-6 text-black"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    square: "",
                    size: "default",
                    variant: "ghost",
                    color: "primaryGray",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-heroicons-x-mark-20-solid",
                          class: "h-[24px] w-[24px]"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-x-mark-20-solid",
                            class: "h-[24px] w-[24px]"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-xl font-semibold leading-6 text-black" }, [
                        renderSlot(_ctx.$slots, "header")
                      ]),
                      createVNode(_component_UButton, {
                        square: "",
                        size: "default",
                        variant: "ghost",
                        color: "primaryGray",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-x-mark-20-solid",
                            class: "h-[24px] w-[24px]"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      renderSlot(_ctx.$slots, "body")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, {
                class: "flex flex-1 flex-col",
                ui: uiCard
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-xl font-semibold leading-6 text-black" }, [
                      renderSlot(_ctx.$slots, "header")
                    ]),
                    createVNode(_component_UButton, {
                      square: "",
                      size: "default",
                      variant: "ghost",
                      color: "primaryGray",
                      onClick: ($event) => isOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-x-mark-20-solid",
                          class: "h-[24px] w-[24px]"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    renderSlot(_ctx.$slots, "body")
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-slideover.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "input-number",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: { default: "Enter here..." },
    label: { default: "label" },
    name: { default: "label" },
    required: { type: Boolean, default: false },
    size: { default: "default" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const id = useId("$qBUY7VW4vP");
    const value = useModel(__props, "modelValue");
    const uiFormGroup = {
      label: {
        base: "block font-bold text-sm uppercase text-black ml-6"
      },
      error: "ml-6"
    };
    const uiInput = {
      padding: {
        default: "px-4",
        sm: "px-4"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_0$1;
      const _component_UInput = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UFormGroup, mergeProps({
        name: _ctx.name,
        label: _ctx.label,
        ui: uiFormGroup,
        required: _ctx.required,
        id: unref(id)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              ui: uiInput,
              type: "number",
              size: _ctx.size,
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              color: "primaryBlue",
              variant: "outline",
              placeholder: _ctx.placeholder
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                ui: uiInput,
                type: "number",
                size: _ctx.size,
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                color: "primaryBlue",
                variant: "outline",
                placeholder: _ctx.placeholder
              }, null, 8, ["size", "modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-number.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
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
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    var _a;
    const { ui, attrs } = useUI("radio", toRef(props, "ui"), config, toRef(props, "class"));
    const inputId = (_a = props.id) != null ? _a : useId("$9ml2Pv5YlC");
    const radioGroup = inject("radio-group", null);
    const { emitFormChange, color, name } = radioGroup != null ? radioGroup : useFormGroup(props, config);
    const pick = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        if (!radioGroup) {
          emitFormChange();
        }
      }
    });
    function onChange(event) {
      emit("change", event.target.value);
    }
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      pick,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: ssrLooseEqual(_ctx.pick, _ctx.value),
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    type: "radio",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.pick))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">${ssrInterpolate(_ctx.help)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Radio.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "input-radioGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean, default: false },
    options: {},
    required: { type: Boolean, default: false },
    direction: { default: "col" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const value = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_URadio = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [_ctx.direction === "row" ? "gap-8" : "flex-col gap-4", "flex"]
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(ssrRenderComponent(_component_URadio, mergeProps({
          key: option.value,
          modelValue: value.value,
          "onUpdate:modelValue": ($event) => value.value = $event
        }, option, { required: _ctx.required }), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-radio-group.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroupOptions = [
      {
        value: "email",
        label: "Email"
      },
      {
        value: "sms",
        label: "Phone (SMS)"
      },
      {
        value: "push",
        label: "Push notification"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheButton = _sfc_main$9;
      const _component_ButtonSidebar = _sfc_main$1$1;
      const _component_TheModal = _sfc_main$7;
      const _component_TheSlideover = _sfc_main$4;
      const _component_InputText = _sfc_main$1$2;
      const _component_InputPassword = _sfc_main$a;
      const _component_InputNumber = _sfc_main$3;
      const _component_InputRadioGroup = _sfc_main$1;
      const _component_InputCheckbox = _sfc_main$b;
      const _component_InputSearch = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-screen p-6" }, _attrs))}><div class="h-full w-full overflow-auto rounded-[1.75rem] p-6 shadow-main"><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><div class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-container"><h1 class="mb-7 flex text-xl font-bold text-black">Page Links</h1><div class="flex flex-col items-center justify-center gap-6">`);
      _push(ssrRenderComponent(_component_TheButton, {
        label: "Dashboard",
        to: "/home"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        label: "Chat Box",
        to: "/chat-home"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        label: "User Profile",
        to: "/user-profile"
      }, null, _parent));
      _push(`</div></div><div class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-container"><h1 class="mb-7 flex text-xl font-bold text-black">Buttons</h1><h2 class="mb-6 flex text-lg font-bold text-black">Primary Buttons</h2><div class="flex flex-col justify-center gap-4">`);
      _push(ssrRenderComponent(_component_TheButton, { block: "" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, { type: "secondary" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, { type: "dark" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, { type: "ghost" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, { icon: "i-heroicons-arrow-right" }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        icon: "i-heroicons-arrow-right",
        trailing: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheButton, {
        size: "sm",
        label: "small button"
      }, null, _parent));
      _push(`</div><h2 class="mb-6 mt-3 flex text-lg font-bold text-black">Sidebar Buttons</h2><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_ButtonSidebar, null, null, _parent));
      _push(`</div><h2 class="mb-6 mt-6 flex text-lg font-bold text-black">Modal Window</h2>`);
      _push(ssrRenderComponent(_component_TheModal, { label: "open modal window" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center text-2xl font-bold"${_scopeId}>The Heading</p><p class="mt-6 text-justify text-base"${_scopeId}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-center text-2xl font-bold" }, "The Heading"),
              createVNode("p", { class: "mt-6 text-justify text-base" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mb-6 mt-6 flex text-lg font-bold text-black">Slideover</h2>`);
      _push(ssrRenderComponent(_component_TheSlideover, { label: "open slideover" }, {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Slideover heading`);
          } else {
            return [
              createTextVNode("Slideover heading")
            ];
          }
        }),
        body: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `);
          } else {
            return [
              createTextVNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-container md:col-span-2 lg:col-span-1"><h1 class="mb-7 flex text-xl font-bold text-black">Input Fields</h1><div class="flex flex-col gap-5">`);
      _push(ssrRenderComponent(_component_InputText, {
        placeholder: "enter your name...",
        label: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputText, {
        placeholder: "enter your name...",
        label: " name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputText, {
        placeholder: "enter your email...",
        label: " email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputPassword, {
        placeholder: "enter your password...",
        label: "password"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputNumber, {
        placeholder: "enter number",
        label: "number"
      }, null, _parent));
      _push(`<div><h3 class="mb-2 text-center text-base font-bold">Radio Button</h3>`);
      _push(ssrRenderComponent(_component_InputRadioGroup, { options: radioGroupOptions }, null, _parent));
      _push(`</div><div><h3 class="mb-2 text-center text-base font-bold">Radio Button</h3>`);
      _push(ssrRenderComponent(_component_InputRadioGroup, {
        options: radioGroupOptions,
        direction: "row"
      }, null, _parent));
      _push(`</div><div><h3 class="mb-2 text-center text-base font-bold">Checkbox</h3>`);
      _push(ssrRenderComponent(_component_InputCheckbox, { label: "label" }, null, _parent));
      _push(`</div></div><h2 class="mb-2 mt-5 text-lg font-bold">search bar</h2>`);
      _push(ssrRenderComponent(_component_InputSearch, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Baj-Y3Ux.mjs.map
