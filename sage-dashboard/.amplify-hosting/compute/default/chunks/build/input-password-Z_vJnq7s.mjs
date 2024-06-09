import { g as useUI, n as useId, c as __nuxt_component_1, b as __nuxt_component_2, _ as __nuxt_component_4 } from './Input-DoCQJjVJ.mjs';
import { defineComponent, toRef, inject, computed, ref, provide, useSSRContext, mergeModels, useModel, mergeProps, unref, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from './server.mjs';

const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
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
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config.default.size];
    });
    const inputId = ref(useId("$K7dDJpdOWE"));
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error || _ctx.$slots.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "input-text",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: { default: "Enter here..." },
    label: { default: "label" },
    name: { default: "name" },
    required: { type: Boolean, default: false },
    size: { default: "default" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const id = useId("$dmhTTTDWF1");
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
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UFormGroup, mergeProps({
        name: _ctx.name,
        label: _ctx.label,
        ui: uiFormGroup,
        required: _ctx.required,
        id: unref(id)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              ui: uiInput,
              type: "text",
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
                type: "text",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-text.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input-password",
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
    const id = useId("$roUqbfpDf0");
    const value = useModel(__props, "modelValue");
    const showPassword = ref(false);
    const uiFormGroup = {
      label: {
        base: "block font-bold text-sm uppercase text-black ml-6"
      },
      error: "ml-6"
    };
    const uiInput = {
      wrapper: "relative",
      base: "relative",
      padding: {
        default: "pl-4 pr-10"
      }
    };
    const inputType = computed(() => {
      switch (showPassword.value) {
        case true:
          return "text";
        case false:
          return "password";
        default:
          return "password";
      }
    });
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UFormGroup, mergeProps({
        name: _ctx.name,
        label: _ctx.label,
        ui: uiFormGroup,
        required: _ctx.required,
        id: unref(id)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              ui: uiInput,
              type: unref(inputType),
              size: _ctx.size,
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              color: "primaryBlue",
              variant: "outline",
              placeholder: _ctx.placeholder
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute right-2 top-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "ghost",
                    color: "ghost",
                    size: "sm",
                    class: "rounded-xl",
                    square: true,
                    onClick: togglePasswordVisibility
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(showPassword)) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-eye",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-eye-slash",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(showPassword) ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "i-heroicons-eye",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          })) : (openBlock(), createBlock(_component_UIcon, {
                            key: 1,
                            name: "i-heroicons-eye-slash",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "absolute right-2 top-1.5" }, [
                      createVNode(_component_UButton, {
                        variant: "ghost",
                        color: "ghost",
                        size: "sm",
                        class: "rounded-xl",
                        square: true,
                        onClick: togglePasswordVisibility
                      }, {
                        default: withCtx(() => [
                          unref(showPassword) ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "i-heroicons-eye",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          })) : (openBlock(), createBlock(_component_UIcon, {
                            key: 1,
                            name: "i-heroicons-eye-slash",
                            class: "h-[18px] w-[18px] text-primaryBlue-500"
                          }))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                ui: uiInput,
                type: unref(inputType),
                size: _ctx.size,
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                color: "primaryBlue",
                variant: "outline",
                placeholder: _ctx.placeholder
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "absolute right-2 top-1.5" }, [
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "ghost",
                      size: "sm",
                      class: "rounded-xl",
                      square: true,
                      onClick: togglePasswordVisibility
                    }, {
                      default: withCtx(() => [
                        unref(showPassword) ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "i-heroicons-eye",
                          class: "h-[18px] w-[18px] text-primaryBlue-500"
                        })) : (openBlock(), createBlock(_component_UIcon, {
                          key: 1,
                          name: "i-heroicons-eye-slash",
                          class: "h-[18px] w-[18px] text-primaryBlue-500"
                        }))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["type", "size", "modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/inputs/input-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a, __nuxt_component_0 as b };
//# sourceMappingURL=input-password-Z_vJnq7s.mjs.map
