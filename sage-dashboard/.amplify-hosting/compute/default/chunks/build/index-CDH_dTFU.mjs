import { _ as __nuxt_component_0 } from './base-layout-BFHzeL62.mjs';
import { a as _sfc_main$1, b as __nuxt_component_2, _ as __nuxt_component_4 } from './Input-DoCQJjVJ.mjs';
import { _ as _sfc_main$2 } from './input-chat-CHT9VIeZ.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseLayout = __nuxt_component_0;
  const _component_ButtonSidebar = _sfc_main$1;
  const _component_UButton = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_4;
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
          icon: "i-heroicons-plus",
          to: "/chat-home/chat"
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
                icon: "i-heroicons-plus",
                to: "/chat-home/chat"
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
        _push2(`<div class="mx-auto flex h-full w-full max-w-4xl flex-col px-6 py-6"${_scopeId}><div class="flex flex-1 flex-col gap-10 overflow-auto"${_scopeId}><h1 class="text-5xl font-semibold text-primaryBlue-800"${_scopeId}>Hello Anderson!</h1><div class="flex w-full gap-6"${_scopeId}><div class="flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4"${_scopeId}><h2 class="text-2xl font-semibold text-primaryBlue-600"${_scopeId}> Lorem Ipsum Lorem </h2><p class="text-primaryBlue-500"${_scopeId}> It is a long established fact that a reader will be distracted by the readable content of a </p><div class="flex justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          size: "default",
          color: "ghost",
          variant: "ghost",
          square: "",
          type: "ghost"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-long-right",
                class: "h-[24px] w-[24px] text-primaryBlue-700"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-long-right",
                  class: "h-[24px] w-[24px] text-primaryBlue-700"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4"${_scopeId}><h2 class="text-2xl font-semibold text-primaryBlue-600"${_scopeId}> Lorem Ipsum Lorem </h2><p class="text-primaryBlue-500"${_scopeId}> It is a long established fact that a reader will be distracted by the readable content of a </p><div class="flex justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          size: "default",
          color: "ghost",
          variant: "ghost",
          square: "",
          type: "ghost"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-long-right",
                class: "h-[24px] w-[24px] text-primaryBlue-700"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-long-right",
                  class: "h-[24px] w-[24px] text-primaryBlue-700"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4"${_scopeId}><h2 class="text-2xl font-semibold text-primaryBlue-600"${_scopeId}> Lorem Ipsum Lorem </h2><p class="text-primaryBlue-500"${_scopeId}> It is a long established fact that a reader will be distracted by the readable content of a </p><div class="flex justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          size: "default",
          color: "ghost",
          variant: "ghost",
          square: "",
          type: "ghost"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-long-right",
                class: "h-[24px] w-[24px] text-primaryBlue-700"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-long-right",
                  class: "h-[24px] w-[24px] text-primaryBlue-700"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="flex w-full items-center gap-4 rounded-2xl bg-primaryGray-50 p-4 text-primaryGray-500"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-exclamation-circle",
          class: "h-[48px] w-[48px] text-primaryGray-700"
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}> It is a long established fact that a reader will be distracted by the readable content of a pagt is a long established fact that a reader will be distracted by the readable content of a </p></div></div><div class="w-full pt-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputChat, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "mx-auto flex h-full w-full max-w-4xl flex-col px-6 py-6" }, [
            createVNode("div", { class: "flex flex-1 flex-col gap-10 overflow-auto" }, [
              createVNode("h1", { class: "text-5xl font-semibold text-primaryBlue-800" }, "Hello Anderson!"),
              createVNode("div", { class: "flex w-full gap-6" }, [
                createVNode("div", { class: "flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-primaryBlue-600" }, " Lorem Ipsum Lorem "),
                  createVNode("p", { class: "text-primaryBlue-500" }, " It is a long established fact that a reader will be distracted by the readable content of a "),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      size: "default",
                      color: "ghost",
                      variant: "ghost",
                      square: "",
                      type: "ghost"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-arrow-long-right",
                          class: "h-[24px] w-[24px] text-primaryBlue-700"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-primaryBlue-600" }, " Lorem Ipsum Lorem "),
                  createVNode("p", { class: "text-primaryBlue-500" }, " It is a long established fact that a reader will be distracted by the readable content of a "),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      size: "default",
                      color: "ghost",
                      variant: "ghost",
                      square: "",
                      type: "ghost"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-arrow-long-right",
                          class: "h-[24px] w-[24px] text-primaryBlue-700"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-primaryBlue-600" }, " Lorem Ipsum Lorem "),
                  createVNode("p", { class: "text-primaryBlue-500" }, " It is a long established fact that a reader will be distracted by the readable content of a "),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      size: "default",
                      color: "ghost",
                      variant: "ghost",
                      square: "",
                      type: "ghost"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-arrow-long-right",
                          class: "h-[24px] w-[24px] text-primaryBlue-700"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "flex w-full items-center gap-4 rounded-2xl bg-primaryGray-50 p-4 text-primaryGray-500" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-exclamation-circle",
                  class: "h-[48px] w-[48px] text-primaryGray-700"
                }),
                createVNode("p", null, " It is a long established fact that a reader will be distracted by the readable content of a pagt is a long established fact that a reader will be distracted by the readable content of a ")
              ])
            ]),
            createVNode("div", { class: "w-full pt-2" }, [
              createVNode(_component_InputChat)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat-scada/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CDH_dTFU.mjs.map
