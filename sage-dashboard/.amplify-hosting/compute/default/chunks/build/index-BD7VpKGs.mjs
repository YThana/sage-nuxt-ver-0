import { _ as __nuxt_component_0 } from './base-layout-BFHzeL62.mjs';
import { _ as _sfc_main$1, a as _sfc_main$3 } from './input-password-Z_vJnq7s.mjs';
import { _ as _sfc_main$2 } from './the-button-CDqo36AP.mjs';
import { _ as __nuxt_component_4, a as _sfc_main$1$1 } from './Input-DoCQJjVJ.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
  const _component_InputText = _sfc_main$1;
  const _component_TheButton = _sfc_main$2;
  const _component_InputPassword = _sfc_main$3;
  const _component_UIcon = __nuxt_component_4;
  const _component_ButtonSidebar = _sfc_main$1$1;
  _push(ssrRenderComponent(_component_BaseLayout, _attrs, {
    "main-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex w-full md:my-6 md:justify-center"${_scopeId}><div class="flex w-full flex-col p-6 md:w-[672px] md:flex-row md:divide-x md:divide-primaryBlue-200 md:rounded-3xl md:border md:border-containerBorder md:bg-white md:shadow-mangeUserProfileMenuContainer lg:w-[784px]"${_scopeId}><div class="flex flex-col gap-6 md:w-1/2 md:pr-6"${_scopeId}><h1 class="flex h-10 text-xl font-bold text-black"${_scopeId}>Update Profile Name</h1><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputText, {
          placeholder: "Enter your profile name",
          label: "profile name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputText, {
          placeholder: "Enter your email",
          label: "email"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex md:justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TheButton, { label: "Update Profile " }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="mt-11 flex flex-col gap-6 md:mt-0 md:w-1/2 md:pl-6"${_scopeId}><h1 class="flex h-10 text-xl font-bold text-black"${_scopeId}>Update Password</h1><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputPassword, {
          placeholder: "Enter your old password",
          label: "old password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputPassword, {
          placeholder: "Enter your new password",
          label: "new password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InputPassword, {
          placeholder: "Enter your confirm password",
          label: "confirm password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex md:justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TheButton, { label: "Update Password" }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col gap-4 text-black"${_scopeId}><h1 class="flex text-[12px] font-bold uppercase"${_scopeId}> Password must contain </h1><div class="flex items-center text-base"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "mr-1 h-[20px] w-[20px] text-green-500"
        }, null, _parent2, _scopeId));
        _push2(` at least 8 characters long. </div><div class="flex items-center text-base"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-x-mark",
          class: "mr-1 h-[20px] w-[20px] text-red-500"
        }, null, _parent2, _scopeId));
        _push2(` both numeric and alphabetic characters. </div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex w-full md:my-6 md:justify-center" }, [
            createVNode("div", { class: "flex w-full flex-col p-6 md:w-[672px] md:flex-row md:divide-x md:divide-primaryBlue-200 md:rounded-3xl md:border md:border-containerBorder md:bg-white md:shadow-mangeUserProfileMenuContainer lg:w-[784px]" }, [
              createVNode("div", { class: "flex flex-col gap-6 md:w-1/2 md:pr-6" }, [
                createVNode("h1", { class: "flex h-10 text-xl font-bold text-black" }, "Update Profile Name"),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_InputText, {
                    placeholder: "Enter your profile name",
                    label: "profile name"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_InputText, {
                    placeholder: "Enter your email",
                    label: "email"
                  })
                ]),
                createVNode("div", { class: "flex md:justify-end" }, [
                  createVNode(_component_TheButton, { label: "Update Profile " })
                ])
              ]),
              createVNode("div", { class: "mt-11 flex flex-col gap-6 md:mt-0 md:w-1/2 md:pl-6" }, [
                createVNode("h1", { class: "flex h-10 text-xl font-bold text-black" }, "Update Password"),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_InputPassword, {
                    placeholder: "Enter your old password",
                    label: "old password"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_InputPassword, {
                    placeholder: "Enter your new password",
                    label: "new password"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_InputPassword, {
                    placeholder: "Enter your confirm password",
                    label: "confirm password"
                  })
                ]),
                createVNode("div", { class: "flex md:justify-end" }, [
                  createVNode(_component_TheButton, { label: "Update Password" })
                ]),
                createVNode("div", { class: "flex flex-col gap-4 text-black" }, [
                  createVNode("h1", { class: "flex text-[12px] font-bold uppercase" }, " Password must contain "),
                  createVNode("div", { class: "flex items-center text-base" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-check",
                      class: "mr-1 h-[20px] w-[20px] text-green-500"
                    }),
                    createTextVNode(" at least 8 characters long. ")
                  ]),
                  createVNode("div", { class: "flex items-center text-base" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-x-mark",
                      class: "mr-1 h-[20px] w-[20px] text-red-500"
                    }),
                    createTextVNode(" both numeric and alphabetic characters. ")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    "sidebar-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonSidebar, {
          type: "gray",
          label: "Customers",
          icon: "i-heroicons-arrow-right",
          to: "/home"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-6" }, [
            createVNode(_component_ButtonSidebar, {
              type: "gray",
              label: "Customers",
              icon: "i-heroicons-arrow-right",
              to: "/home"
            })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BD7VpKGs.mjs.map
