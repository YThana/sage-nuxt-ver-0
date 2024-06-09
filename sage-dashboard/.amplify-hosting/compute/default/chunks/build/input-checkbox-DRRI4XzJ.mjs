import { defineComponent, watchEffect, ref, h, provide, computed, inject, onMounted, getCurrentInstance, watch, onUnmounted, Teleport, reactive, useSSRContext, toRef, mergeModels, useModel, mergeProps, withCtx, createVNode, withDirectives, vShow, unref } from 'vue';
import { A as A$1, q as c$1, y as w$1, i as i$2, o as o$1, g as useUI, v as useFormGroup, n as useId, c as __nuxt_component_1, b as __nuxt_component_2, _ as __nuxt_component_4 } from './Input-DoCQJjVJ.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from './server.mjs';

const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
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
var s$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t;
    let { features: e2, ...r } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t = r["aria-hidden"]) != null ? t : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$1({ ourProps: n2, theirProps: r, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
function E(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t(() => n2.removeEventListener(e2, o2, r));
  });
}
var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function N$1({ defaultContainers: o$1$1 = [], portals: i$1, mainTreeNodeRef: H } = {}) {
  let t = ref(null), r = i$2(t);
  function u2() {
    var l, f2, a;
    let n2 = [];
    for (let e2 of o$1$1)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i$1 != null && i$1.value)
      for (let e2 of i$1.value)
        n2.push(e2);
    for (let e2 of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t)) || e2.contains((a = (f2 = o$1(t)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l) => l.contains(n2));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return H != null ? null : h(f, { features: s$1.Hidden, ref: t });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h(f, { features: s$1.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s() {
  return inject(e, false);
}
let u = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function x(r) {
  let e2 = i$2(r);
  if (!e2) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t = e2.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t);
}
let _ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: e2, attrs: u2 }) {
  let t = ref(null), i$1 = computed(() => i$2(t)), l = s(), n2 = inject(C, null), o$1$1 = ref(l === true || n2 == null ? x(t.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l || n2 != null && (o$1$1.value = n2.resolveTarget());
  });
  let c2 = inject(m, null), v2 = false, H = getCurrentInstance();
  return watch(t, () => {
    if (v2 || !c2)
      return;
    let a = o$1(t);
    a && (onUnmounted(c2.register(a), H), v2 = true);
  }), onUnmounted(() => {
    var g, P;
    let a = (g = i$1.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
    a && o$1$1.value === a && o$1$1.value.children.length <= 0 && ((P = o$1$1.value.parentElement) == null || P.removeChild(o$1$1.value));
  }), () => {
    if (!d2.value || o$1$1.value === null)
      return null;
    let a = { ref: t, "data-headlessui-portal": "" };
    return h(Teleport, { to: o$1$1.value }, A$1({ ourProps: a, theirProps: r, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), m = Symbol("PortalParentContext");
function A() {
  let r = inject(m, null), e2 = ref([]);
  function u2(l) {
    return e2.value.push(l), r && r.register(l), () => t(l);
  }
  function t(l) {
    let n2 = e2.value.indexOf(l);
    n2 !== -1 && e2.value.splice(n2, 1), r && r.unregister(l);
  }
  let i2 = { register: u2, unregister: t, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l, { slots: n2 }) {
    return provide(m, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C = Symbol("PortalGroupContext"), N = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: e2, slots: u2 }) {
  let t = reactive({ resolveTarget() {
    return r.target;
  } });
  return provide(C, t), () => {
    let { target: i2, ...l } = r;
    return A$1({ theirProps: l, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "input-search",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    size: { default: "default" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const value = useModel(__props, "modelValue");
    const uiInput = {
      wrapper: "relative",
      base: "relative",
      padding: {
        default: "px-4",
        sm: "px-4"
      },
      leading: {
        padding: {
          default: "ps-10",
          sm: "ps-10"
        }
      },
      trailing: {
        padding: {
          default: "pe-6",
          sm: ""
        }
      },
      icon: {
        leading: {
          padding: {
            default: "px-4",
            sm: "px-4"
          }
        },
        trailing: {
          padding: {
            sm: "pl-1"
          },
          pointer: ""
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UInput, mergeProps({
        ui: uiInput,
        name: "value",
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        color: "primaryBlue",
        variant: "outline",
        size: _ctx.size,
        placeholder: "Search...",
        autocomplete: "off",
        icon: "i-heroicons-funnel"
      }, _attrs), {
        trailing: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              size: "sm",
              style: value.value !== "" ? null : { display: "none" },
              color: "primaryBlue",
              variant: "link",
              onClick: ($event) => value.value = "",
              square: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-x-mark-20-solid",
                    class: "h-[18px] w-[18px] text-primaryBlue-500"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-x-mark-20-solid",
                      class: "h-[18px] w-[18px] text-primaryBlue-500"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_component_UButton, {
                size: "sm",
                color: "primaryBlue",
                variant: "link",
                onClick: ($event) => value.value = "",
                square: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-x-mark-20-solid",
                    class: "h-[18px] w-[18px] text-primaryBlue-500"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]), [
                [vShow, value.value !== ""]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-search.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
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
    indeterminate: {
      type: Boolean,
      default: void 0
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
      default: ""
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
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = (_a = _inputId.value) != null ? _a : useId("$YWrWuPJ69t");
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.value);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
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
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input-checkbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const id = useId("$EpAKFw9uQW");
    const selected = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCheckbox = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
        modelValue: selected.value,
        "onUpdate:modelValue": ($event) => selected.value = $event,
        name: _ctx.label,
        label: _ctx.label,
        required: _ctx.required,
        disabled: _ctx.disabled,
        id: unref(id)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { A, E, N$1 as N, _sfc_main as _, _sfc_main$2 as a, _ as b, N as c, d, f, n, s$1 as s, u, v };
//# sourceMappingURL=input-checkbox-DRRI4XzJ.mjs.map
