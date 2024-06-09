import { _ as __nuxt_component_0 } from './base-layout-BFHzeL62.mjs';
import { _ as __nuxt_component_4, a as _sfc_main$1$1 } from './Input-DoCQJjVJ.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './input-chat-CHT9VIeZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-Cs_hzKNb.mjs';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'tailwind-merge';
import './Icon-BlzFIon0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DmJTZe-0.mjs';
import '@vueuse/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "chat-bubble",
  __ssrInlineRender: true,
  props: {
    query: {},
    answer: {},
    displayName: {}
  },
  setup(__props) {
    const props = __props;
    const displayNameFirstLetter = computed(() => {
      var _a;
      return (_a = props.displayName) == null ? void 0 : _a.charAt(0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6" }, _attrs))}><div class="flex flex-row"><div class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center ring-2 ring-primaryGray-100 rounded-2xl bg-primaryBlue-500 text-xl font-bold capitalize text-primaryGray-50">${ssrInterpolate(unref(displayNameFirstLetter))}</div><div class="${ssrRenderClass("rounded-b-[21px] rounded-tr-[21px] bg-primaryBlue-50 p-4")}"><div class="text-base text-black">${ssrInterpolate(_ctx.query)}</div></div></div><div class="flex flex-row"><div class="mr-4 flex h-10 w-10 flex-shrink-0 ring-2 ring-primaryGray-100 items-center justify-center rounded-2xl bg-primaryBlue-500">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-square-3-stack-3d",
        class: "h-[18px] w-[18px] text-white"
      }, null, _parent));
      _push(`</div><div class="rounded-b-[21px] rounded-tr-[21px] bg-primaryGray-50 p-4"><div class="text-base text-black">${ssrInterpolate(_ctx.answer)}</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat-home/chat-bubble.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseLayout = __nuxt_component_0;
  const _component_ButtonSidebar = _sfc_main$1$1;
  const _component_ChatBubble = _sfc_main$1;
  const _component_InputChat = _sfc_main$2;
  _push(ssrRenderComponent(_component_BaseLayout, _attrs, {
    "sidebar-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          type: "primary",
          label: "Dashboard",
          icon: "i-heroicons-square-3-stack-3d",
          to: "/home"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          type: "gray",
          label: "New Chat",
          icon: "i-heroicons-plus"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><p class="flex text-[12px] font-bold uppercase text-sidebarListTitle"${_scopeId}> recents </p>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          label: "Lorem ipsum dolor sit amet consectetur",
          icon: "i-heroicons-chat-bubble-bottom-center"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          label: "Lorem ipsum dolor sit amet consectetur",
          icon: "i-heroicons-chat-bubble-bottom-center"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          label: "Lorem ipsum dolor sit amet consectetur",
          icon: "i-heroicons-chat-bubble-bottom-center"
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-6" }, [
            createVNode("div", { class: "flex flex-col gap-2" }, [
              createVNode(_component_ButtonSidebar, {
                type: "primary",
                label: "Dashboard",
                icon: "i-heroicons-square-3-stack-3d",
                to: "/home"
              }),
              createVNode(_component_ButtonSidebar, {
                type: "gray",
                label: "New Chat",
                icon: "i-heroicons-plus"
              })
            ]),
            createVNode("div", { class: "flex flex-col gap-2" }, [
              createVNode("p", { class: "flex text-[12px] font-bold uppercase text-sidebarListTitle" }, " recents "),
              createVNode(_component_ButtonSidebar, {
                label: "Lorem ipsum dolor sit amet consectetur",
                icon: "i-heroicons-chat-bubble-bottom-center"
              }),
              createVNode(_component_ButtonSidebar, {
                label: "Lorem ipsum dolor sit amet consectetur",
                icon: "i-heroicons-chat-bubble-bottom-center"
              }),
              createVNode(_component_ButtonSidebar, {
                label: "Lorem ipsum dolor sit amet consectetur",
                icon: "i-heroicons-chat-bubble-bottom-center"
              })
            ])
          ])
        ];
      }
    }),
    "main-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex h-full w-full flex-col"${_scopeId}><div class="mx-auto flex h-screen max-w-4xl flex-col"${_scopeId}><div class="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-20 pt-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ChatBubble, {
          displayName: "antony",
          query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
          answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChatBubble, {
          displayName: "antony",
          query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
          answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChatBubble, {
          displayName: "antony",
          query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
          answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="px-6 pb-6 pt-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputChat, null, null, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex h-full w-full flex-col" }, [
            createVNode("div", { class: "mx-auto flex h-screen max-w-4xl flex-col" }, [
              createVNode("div", { class: "flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-20 pt-6" }, [
                createVNode(_component_ChatBubble, {
                  displayName: "antony",
                  query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
                  answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }),
                createVNode(_component_ChatBubble, {
                  displayName: "antony",
                  query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
                  answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }),
                createVNode(_component_ChatBubble, {
                  displayName: "antony",
                  query: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
                  answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                })
              ]),
              createVNode("div", { class: "px-6 pb-6 pt-2" }, [
                createVNode(_component_InputChat)
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat-scada/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { chat as default };
//# sourceMappingURL=chat-SvL3kzXF.mjs.map
