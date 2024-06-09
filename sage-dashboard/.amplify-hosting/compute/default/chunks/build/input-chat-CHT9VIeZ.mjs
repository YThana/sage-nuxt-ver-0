import { c as __nuxt_component_1, b as __nuxt_component_2, _ as __nuxt_component_4 } from './Input-DoCQJjVJ.mjs';
import { defineComponent, useModel, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input-chat",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const value = useModel(__props, "modelValue");
    const uiInput = {
      wrapper: "relative",
      base: "relative",
      padding: {
        lg: "pl-4 pr-12"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UInput, mergeProps({
        ui: uiInput,
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        size: "lg",
        color: "primaryBlue",
        placeholder: "Enter your prompt here..."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute right-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "ghost",
              size: "md",
              class: "rounded-xl",
              square: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-microphone",
                    class: "h-[24px] w-[24px] text-primaryBlue-500"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-microphone",
                      class: "h-[24px] w-[24px] text-primaryBlue-500"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "absolute right-2" }, [
                createVNode(_component_UButton, {
                  variant: "ghost",
                  color: "ghost",
                  size: "md",
                  class: "rounded-xl",
                  square: true
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-microphone",
                      class: "h-[24px] w-[24px] text-primaryBlue-500"
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat-home/input-chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=input-chat-CHT9VIeZ.mjs.map
