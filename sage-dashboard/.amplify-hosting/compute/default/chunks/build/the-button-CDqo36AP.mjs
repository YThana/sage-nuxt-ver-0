import { b as __nuxt_component_2 } from './Input-DoCQJjVJ.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "the-button",
  __ssrInlineRender: true,
  props: {
    type: { default: "primary" },
    icon: {},
    label: { default: "Button" },
    to: {},
    size: { default: "default" },
    target: { default: "_self" },
    block: { type: Boolean, default: false },
    trailing: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const buttonColor = computed(() => {
      switch (props.type) {
        case "primary":
          return "primaryBlue";
        case "secondary":
          return "primaryGray";
        case "dark":
          return "dark";
        case "ghost":
          return "ghost";
        default:
          return "primaryBlue";
      }
    });
    const uiButton = computed(() => {
      switch (props.size) {
        case "default":
          return { base: "justify-center", font: "font-normal" };
        case "sm":
          return { base: "justify-center", font: "font-normal" };
        default:
          return { base: "justify-center" };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        ui: unref(uiButton),
        to: _ctx.to,
        icon: _ctx.icon,
        size: _ctx.size,
        label: _ctx.label,
        color: unref(buttonColor),
        target: _ctx.target,
        block: _ctx.block,
        trailing: _ctx.trailing
      }, _attrs), {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading")
            ];
          }
        }),
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "trailing", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "trailing")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/buttons/the-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=the-button-CDqo36AP.mjs.map
