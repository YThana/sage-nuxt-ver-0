import{d as Ie,i as ne,o as s,E as ae,u as G,t as Fe,e as q,w as Ee,f as Ne,h as je,A as se,I as z,P as H,N as D,l as De,g as de,j as O,T as te,k as Le,m as Ae,n as Oe,a as xe,_ as He}from"./CwdVfYBn.js";import{_ as ye}from"./BAZ_lCSb.js";import{f as V,r as T,g as I,k as we,l as re,m as A,F as ie,q as ue,s as $e,v as ce,_ as E,x as Ve,y as fe,z as ve,A as Ge,B as _e,C as Y,o as S,i as J,w as k,b as a,n as U,D as R,a as n,T as me,E as Q,c as M,G as W,H as Re,I as Ue,J as ze,j as Ze,t as he,h as ge,K as be,d as X}from"./ByXIBUr9.js";import{A as Ke,N as We,E as qe,n as Ce,f as oe,s as le,d as L,_ as Pe,a as Je}from"./B61bDOOy.js";import{s as Ye,u as Qe,_ as Xe}from"./DXM5CbQ9.js";import"./Dq_5Zrm7.js";import"./eNAPwaVg.js";import"./qsMMcMsd.js";const et={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:Ie};var tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(tt||{});let ke=Symbol("PopoverContext");function pe(e){let r=ce(ke,null);if(r===null){let d=new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,pe),d}return r}let ot=Symbol("PopoverGroupContext");function Se(){return ce(ot,null)}let Be=Symbol("PopoverPanelContext");function lt(){return ce(Be,null)}let Te=V({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:r,attrs:d,expose:g}){var b;let x=T(null);g({el:x,$el:x});let t=T(1),o=T(null),c=T(null),_=T(null),m=T(null),$=I(()=>ne(x)),B=I(()=>{var l,u;if(!s(o)||!s(m))return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(s(o)))^Number(K==null?void 0:K.contains(s(m))))return!0;let i=ae(),P=i.indexOf(s(o)),F=(P+i.length-1)%i.length,j=(P+1)%i.length,Z=i[F],Me=i[j];return!((l=s(m))!=null&&l.contains(Z))&&!((u=s(m))!=null&&u.contains(Me))}),y={popoverState:t,buttonId:T(null),panelId:T(null),panel:m,button:o,isPortalled:B,beforePanelSentinel:c,afterPanelSentinel:_,togglePopover(){t.value=G(t.value,{0:1,1:0})},closePopover(){t.value!==1&&(t.value=1)},close(l){y.closePopover();let u=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?s(l):s(y.button):s(y.button);u==null||u.focus()}};we(ke,y),Fe(I(()=>G(t.value,{0:q.Open,1:q.Closed})));let N={buttonId:y.buttonId,panelId:y.panelId,close(){y.closePopover()}},f=Se(),w=f==null?void 0:f.registerPopover,[C,v]=Ke(),h=We({mainTreeNodeRef:f==null?void 0:f.mainTreeNodeRef,portals:C,defaultContainers:[o,m]});function p(){var l,u,i,P;return(P=f==null?void 0:f.isFocusWithinPopoverGroup())!=null?P:((l=$.value)==null?void 0:l.activeElement)&&(((u=s(o))==null?void 0:u.contains($.value.activeElement))||((i=s(m))==null?void 0:i.contains($.value.activeElement)))}return re(()=>w==null?void 0:w(N)),qe((b=$.value)==null?void 0:b.defaultView,"focus",l=>{var u,i;l.target!==window&&l.target instanceof HTMLElement&&t.value===0&&(p()||o&&m&&(h.contains(l.target)||(u=s(y.beforePanelSentinel))!=null&&u.contains(l.target)||(i=s(y.afterPanelSentinel))!=null&&i.contains(l.target)||y.closePopover()))},!0),Ee(h.resolveContainers,(l,u)=>{var i;y.closePopover(),Ne(u,je.Loose)||(l.preventDefault(),(i=s(o))==null||i.focus())},I(()=>t.value===0)),()=>{let l={open:t.value===0,close:y.close};return A(ie,[A(v,{},()=>se({theirProps:{...e,...d},ourProps:{ref:x},slot:l,slots:r,attrs:d,name:"Popover"})),A(h.MainTreeNode)])}}}),nt=V({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:r,slots:d,expose:g}){var b;let x=(b=e.id)!=null?b:`headlessui-popover-button-${z()}`,t=pe("PopoverButton"),o=I(()=>ne(t.button));g({el:t.button,$el:t.button}),ue(()=>{t.buttonId.value=x}),$e(()=>{t.buttonId.value=null});let c=Se(),_=c==null?void 0:c.closeOthers,m=lt(),$=I(()=>m===null?!1:m.value===t.panelId.value),B=T(null),y=`headlessui-focus-sentinel-${z()}`;$.value||re(()=>{t.button.value=s(B)});let N=Ye(I(()=>({as:e.as,type:r.type})),B);function f(l){var u,i,P,F,j;if($.value){if(t.popoverState.value===1)return;switch(l.key){case O.Space:case O.Enter:l.preventDefault(),(i=(u=l.target).click)==null||i.call(u),t.closePopover(),(P=s(t.button))==null||P.focus();break}}else switch(l.key){case O.Space:case O.Enter:l.preventDefault(),l.stopPropagation(),t.popoverState.value===1&&(_==null||_(t.buttonId.value)),t.togglePopover();break;case O.Escape:if(t.popoverState.value!==0)return _==null?void 0:_(t.buttonId.value);if(!s(t.button)||(F=o.value)!=null&&F.activeElement&&!((j=s(t.button))!=null&&j.contains(o.value.activeElement)))return;l.preventDefault(),l.stopPropagation(),t.closePopover();break}}function w(l){$.value||l.key===O.Space&&l.preventDefault()}function C(l){var u,i;e.disabled||($.value?(t.closePopover(),(u=s(t.button))==null||u.focus()):(l.preventDefault(),l.stopPropagation(),t.popoverState.value===1&&(_==null||_(t.buttonId.value)),t.togglePopover(),(i=s(t.button))==null||i.focus()))}function v(l){l.preventDefault(),l.stopPropagation()}let h=Ce();function p(){let l=s(t.panel);if(!l)return;function u(){G(h.value,{[L.Forwards]:()=>H(l,D.First),[L.Backwards]:()=>H(l,D.Last)})===te.Error&&H(ae().filter(i=>i.dataset.headlessuiFocusGuard!=="true"),G(h.value,{[L.Forwards]:D.Next,[L.Backwards]:D.Previous}),{relativeTo:s(t.button)})}u()}return()=>{let l=t.popoverState.value===0,u={open:l},{...i}=e,P=$.value?{ref:B,type:N.value,onKeydown:f,onClick:C}:{ref:B,id:x,type:N.value,"aria-expanded":t.popoverState.value===0,"aria-controls":s(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:f,onKeyup:w,onClick:C,onMousedown:v};return A(ie,[se({ourProps:P,theirProps:{...r,...i},slot:u,attrs:r,slots:d,name:"PopoverButton"}),l&&!$.value&&t.isPortalled.value&&A(oe,{id:y,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:p})])}}}),at=V({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:r,slots:d,expose:g}){var b;let x=(b=e.id)!=null?b:`headlessui-popover-panel-${z()}`,{focus:t}=e,o=pe("PopoverPanel"),c=I(()=>ne(o.panel)),_=`headlessui-focus-sentinel-before-${z()}`,m=`headlessui-focus-sentinel-after-${z()}`;g({el:o.panel,$el:o.panel}),ue(()=>{o.panelId.value=x}),$e(()=>{o.panelId.value=null}),we(Be,o.panelId),re(()=>{var v,h;if(!t||o.popoverState.value!==0||!o.panel)return;let p=(v=c.value)==null?void 0:v.activeElement;(h=s(o.panel))!=null&&h.contains(p)||H(s(o.panel),D.First)});let $=De(),B=I(()=>$!==null?($.value&q.Open)===q.Open:o.popoverState.value===0);function y(v){var h,p;switch(v.key){case O.Escape:if(o.popoverState.value!==0||!s(o.panel)||c.value&&!((h=s(o.panel))!=null&&h.contains(c.value.activeElement)))return;v.preventDefault(),v.stopPropagation(),o.closePopover(),(p=s(o.button))==null||p.focus();break}}function N(v){var h,p,l,u,i;let P=v.relatedTarget;P&&s(o.panel)&&((h=s(o.panel))!=null&&h.contains(P)||(o.closePopover(),((l=(p=s(o.beforePanelSentinel))==null?void 0:p.contains)!=null&&l.call(p,P)||(i=(u=s(o.afterPanelSentinel))==null?void 0:u.contains)!=null&&i.call(u,P))&&P.focus({preventScroll:!0})))}let f=Ce();function w(){let v=s(o.panel);if(!v)return;function h(){G(f.value,{[L.Forwards]:()=>{var p;H(v,D.First)===te.Error&&((p=s(o.afterPanelSentinel))==null||p.focus())},[L.Backwards]:()=>{var p;(p=s(o.button))==null||p.focus({preventScroll:!0})}})}h()}function C(){let v=s(o.panel);if(!v)return;function h(){G(f.value,{[L.Forwards]:()=>{let p=s(o.button),l=s(o.panel);if(!p)return;let u=ae(),i=u.indexOf(p),P=u.slice(0,i+1),F=[...u.slice(i+1),...P];for(let j of F.slice())if(j.dataset.headlessuiFocusGuard==="true"||l!=null&&l.contains(j)){let Z=F.indexOf(j);Z!==-1&&F.splice(Z,1)}H(F,D.First,{sorted:!1})},[L.Backwards]:()=>{var p;H(v,D.Previous)===te.Error&&((p=s(o.button))==null||p.focus())}})}h()}return()=>{let v={open:o.popoverState.value===0,close:o.close},{focus:h,...p}=e,l={ref:o.panel,id:x,onKeydown:y,onFocusout:t&&o.popoverState.value===0?N:void 0,tabIndex:-1};return se({ourProps:l,theirProps:{...r,...p},attrs:r,slot:v,slots:{...d,default:(...u)=>{var i;return[A(ie,[B.value&&o.isPortalled.value&&A(oe,{id:_,ref:o.beforePanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w}),(i=d.default)==null?void 0:i.call(d,...u),B.value&&o.isPortalled.value&&A(oe,{id:m,ref:o.afterPanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C})])]}},features:de.RenderStrategy|de.Static,visible:B.value,name:"PopoverPanel"})}}});const ee=Ve(fe.ui.strategy,fe.ui.popover,et),st=V({components:{HPopover:Te,HPopoverButton:nt,HPopoverPanel:at},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>ee.default.openDelay},closeDelay:{type:Number,default:()=>ee.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:r}){const{ui:d,attrs:g}=Le("popover",ve(e,"ui"),ee,ve(e,"class")),b=I(()=>Ge(e.mode==="hover"?{offsetDistance:0}:{},e.popper,d.value.popper)),[x,t]=Qe(b.value),o=T(null),c=T(null);let _=null,m=null;ue(()=>{var C,v;const f=(C=o.value)==null?void 0:C.$.provides;if(!f)return;const w=Object.getOwnPropertySymbols(f);c.value=w.length&&f[w[0]],e.open&&((v=c.value)==null||v.togglePopover())});const $=I(()=>{var v,h,p;if(e.mode!=="hover")return{};const f=((v=e.popper)==null?void 0:v.offsetDistance)||((h=d.value.popper)==null?void 0:h.offsetDistance)||8,w=(p=b.value.placement)==null?void 0:p.split("-")[0],C=`${f}px`;return w==="top"||w==="bottom"?{paddingTop:C,paddingBottom:C}:w==="left"||w==="right"?{paddingLeft:C,paddingRight:C}:{paddingTop:C,paddingBottom:C,paddingLeft:C,paddingRight:C}});function B(){c.value&&(c.value.popoverState===0?c.value.closePopover():c.value.togglePopover())}function y(){e.mode!=="hover"||!c.value||(m&&(clearTimeout(m),m=null),c.value.popoverState!==0&&(_=_||setTimeout(()=>{c.value.togglePopover&&c.value.togglePopover(),_=null},e.openDelay)))}function N(){e.mode!=="hover"||!c.value||(_&&(clearTimeout(_),_=null),c.value.popoverState!==1&&(m=m||setTimeout(()=>{c.value.closePopover&&c.value.closePopover(),m=null},e.closeDelay)))}return _e(()=>e.open,(f,w)=>{c.value&&(w===void 0||f===w||(f?c.value.popoverState=0:c.value.closePopover()))}),_e(()=>{var f;return(f=c.value)==null?void 0:f.popoverState},(f,w)=>{w===void 0||f===w||r("update:open",f===0)}),Ae(()=>Oe("$dcv2Y3vSTA")),{ui:d,attrs:g,popover:o,popper:b,trigger:x,container:t,containerStyle:$,onTouchStart:B,onMouseEnter:y,onMouseLeave:N}}}),rt=["disabled"];function it(e,r,d,g,b,x){const t=Y("HPopoverButton"),o=Y("HPopoverPanel"),c=Y("HPopover");return S(),J(c,Q({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:k(({open:_,close:m})=>[a(t,{ref:"trigger",as:"div",disabled:e.disabled,class:U(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:k(()=>[R(e.$slots,"default",{open:_,close:m},()=>[n("button",{disabled:e.disabled}," Open ",8,rt)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(S(),J(me,Q({key:0,appear:""},e.ui.overlay.transition),{default:k(()=>[_?(S(),M("div",{key:0,class:U([e.ui.overlay.base,e.ui.overlay.background])},null,2)):W("",!0)]),_:2},1040)):W("",!0),_?(S(),M("div",{key:1,ref:"container",class:U([e.ui.container,e.ui.width]),style:Re(e.containerStyle)},[a(me,Q({appear:""},e.ui.transition),{default:k(()=>[n("div",null,[e.popper.arrow?(S(),M("div",{key:0,"data-popper-arrow":"",class:U(Object.values(e.ui.arrow))},null,2)):W("",!0),a(o,{class:U([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:k(()=>[R(e.$slots,"panel",{open:_,close:m})]),_:2},1032,["class"])])]),_:2},1040)],6)):W("",!0)]),_:3},16,["class","onMouseleave"])}const ut=E(st,[["render",it]]),ct={class:"flex max-h-[490px] flex-col gap-6 overflow-auto p-6"},pt={class:"flex flex-col gap-4"},dt=n("h3",{class:"font-bold uppercase text-primaryBlue-600"},"sc-johnson",-1),ft={class:"flex gap-4 overflow-x-auto"},vt={class:"flex flex-col gap-4"},_t=n("h3",{class:"font-bold uppercase text-primaryBlue-600"}," test customer [internal test case] ",-1),mt={class:"flex gap-4 overflow-x-auto"},ht={class:"flex flex-col gap-4"},gt=n("h3",{class:"font-bold uppercase text-primaryBlue-600"},"purdue",-1),bt={class:"flex gap-4 overflow-x-auto"},xt={class:"flex flex-col gap-4"},yt=n("h3",{class:"font-bold uppercase text-primaryBlue-600"},"sc-johnson",-1),wt={class:"flex gap-4 overflow-x-auto"},$t={class:"flex flex-col gap-4"},Ct=n("h3",{class:"font-bold uppercase text-primaryBlue-600"},"sc-johnson",-1),Pt={class:"flex gap-4 overflow-x-auto"},kt=V({__name:"menu-switch-customer",setup(e){const r={placement:"right-end",scroll:!0},d={rounded:"rounded-3xl",background:"bg-primaryBlue-100",trigger:"flex w-full",container:"z-50 group",ring:"ring ring-200",width:"w-[470px]"};return(g,b)=>{const x=xe,t=ye,o=ut;return S(),J(o,{ui:d,popper:r},{panel:k(()=>[n("div",ct,[n("div",pt,[dt,n("div",ft,[a(t,{type:"ghost",label:"Comp 1"}),a(t,{type:"ghost",label:"Comp 2"}),a(t,{type:"ghost",label:"Comp 3"})])]),n("div",vt,[_t,n("div",mt,[a(t,{type:"ghost",label:"Comp Name 1"}),a(t,{type:"ghost",label:"Compressor 1"}),a(t,{type:"ghost",label:"Comp 1"}),a(t,{type:"ghost",label:"Comp 2"})])]),n("div",ht,[gt,n("div",bt,[a(t,{type:"ghost",label:"C4000"}),a(t,{type:"ghost",label:"C5000"}),a(t,{type:"ghost",label:"Shared"})])]),n("div",xt,[yt,n("div",wt,[a(t,{type:"ghost",label:"A"}),a(t,{type:"ghost",label:"B"}),a(t,{type:"ghost",label:"C"}),a(t,{type:"ghost",label:"D"})])]),n("div",$t,[Ct,n("div",Pt,[a(t,{type:"ghost",label:"Comp 1"}),a(t,{type:"ghost",label:"Comp 2"}),a(t,{type:"ghost",label:"Comp 3"}),a(t,{type:"ghost",label:"Comp 4"})])])])]),default:k(()=>[a(x,{type:"gray",label:"Customers",icon:"i-heroicons-arrow-right"})]),_:1})}}}),St={},Bt={xmlns:"http://www.w3.org/2000/svg",stroke:"#408BFB",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"},Tt=n("path",{d:"M12 9.25C11.1077 9.23562 10.2363 9.52003 9.52424 10.058C8.81222 10.596 8.30055 11.3566 8.07061 12.2188C7.84068 13.0811 7.90568 13.9955 8.25529 14.8165C8.6049 15.6376 9.21904 16.3182 10 16.75M12 3.25V5.25M6.6 18.65L5.2 20.05M4 13.25H2M6.6 7.85L5.2 6.45M20 14.7851V4.25C20 3.14543 19.1046 2.25 18 2.25C16.8954 2.25 16 3.14543 16 4.25V14.7851C14.8044 15.4767 14 16.7694 14 18.25C14 20.4591 15.7909 22.25 18 22.25C20.2091 22.25 22 20.4591 22 18.25C22 16.7694 21.1956 15.4767 20 14.7851Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Mt=[Tt];function It(e,r){return S(),M("svg",Bt,Mt)}const Ft=E(St,[["render",It]]),Et={},Nt={class:"flex w-full flex-1 flex-col items-center justify-center rounded-2xl bg-primaryBlue-200 py-2 transition-all delay-200 ease-in-out hover:ring-1 hover:ring-primaryBlue-500"},jt={class:"mt-4 text-sm font-bold text-primaryBlue-500"};function Dt(e,r){return S(),M("div",Nt,[R(e.$slots,"icon"),n("div",jt,[R(e.$slots,"default")])])}const Lt=E(Et,[["render",Dt]]),At={},Ot={xmlns:"http://www.w3.org/2000/svg",stroke:"#408BFB",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"},Ht=n("path",{d:"M9.50929 4.91667C9.8755 4.5075 10.4077 4.25 11 4.25C12.1046 4.25 13 5.14543 13 6.25C13 7.35457 12.1046 8.25 11 8.25H2.00002M12.5093 19.5833C12.8755 19.9925 13.4077 20.25 14 20.25C15.1046 20.25 16 19.3546 16 18.25C16 17.1454 15.1046 16.25 14 16.25H2.00002M16.7639 7.25C17.3132 6.63625 18.1115 6.25 19 6.25C20.6569 6.25 22 7.59315 22 9.25C22 10.9069 20.6569 12.25 19 12.25H2","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Vt=[Ht];function Gt(e,r){return S(),M("svg",Ot,Vt)}const Rt=E(At,[["render",Gt]]),Ut={},zt={xmlns:"http://www.w3.org/2000/svg",stroke:"#7774FF",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"},Zt=n("path",{d:"M22 16.25C22 19.5637 19.3137 22.25 16 22.25C12.6863 22.25 10 19.5637 10 16.25C10 11.9363 16 2.25 16 2.25C16 2.25 22 11.9363 22 16.25Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Kt=n("path",{d:"M8 9.25C8 10.9069 6.65685 12.25 5 12.25C3.34315 12.25 2 10.9069 2 9.25C2 7.09315 5 2.25 5 2.25C5 2.25 8 7.09315 8 9.25Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Wt=[Zt,Kt];function qt(e,r){return S(),M("svg",zt,Wt)}const Jt=E(Ut,[["render",qt]]),Yt={},Qt={class:"flex flex-row justify-between py-2"},Xt=Ue('<div class="flex flex-row"><div class="flex flex-col gap-2"><div class="flex h-[15px] w-[70px] bg-primaryGray-500"></div><h1 class="flex justify-center text-base font-medium text-black">6</h1></div><div class="ml-6 flex-col gap-2"><h1 class="flex text-base text-black">Capacity Control Position ZT-4003 (CNTRL)</h1><h2 class="flex text-[12px] text-[#55555560]"> a_c_4000_meters_capacity_side_cntrl </h2></div></div><div class="flex flex-row items-center justify-end gap-4"><h1 class="textbase flex font-medium text-black">6.5</h1><svg class="flex" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M9.5 6V13M6 9.5H13M18.25 9.5C18.25 14.3325 14.3325 18.25 9.5 18.25C4.66751 18.25 0.75 14.3325 0.75 9.5C0.75 4.66751 4.66751 0.75 9.5 0.75C14.3325 0.75 18.25 4.66751 18.25 9.5Z" stroke="#555555" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',2),eo=[Xt];function to(e,r){return S(),M("div",Qt,eo)}const oo=E(Yt,[["render",to]]),lo={},no={class:"flex w-full flex-shrink flex-col rounded-3xl border border-containerBorder px-6 shadow-container lg:w-1/2"},ao={id:"header",class:"mt-6 flex h-9 w-full flex-row justify-between"},so=n("div",{class:"flex flex-row"},[n("h1",{class:"flex items-center text-xl font-bold text-black"},"Numerical Tags")],-1),ro={class:"my-6 space-y-2 overflow-auto",id:"numericalTags"};function io(e,r){const d=Pe;return S(),M("div",no,[n("div",ao,[so,a(d)]),n("div",ro,[R(e.$slots,"default")])])}const uo=E(lo,[["render",io]]),co={},po={class:"flex w-full flex-col rounded-3xl border border-containerBorder px-6 shadow-container lg:w-1/2",id:"discrete-tags"},fo={id:"header",class:"mt-6 flex h-9 w-full flex-row justify-between"},vo=n("h1",{class:"flex items-center text-xl font-bold text-black"},"Discrete Tags",-1),_o=n("div",{class:"my-6 space-y-4 px-6"},null,-1);function mo(e,r){const d=Pe;return S(),M("div",po,[n("div",fo,[vo,a(d)]),_o,R(e.$slots,"default")])}const ho=E(co,[["render",mo]]),go={class:"flex w-full justify-between gap-6"},bo={class:"flex max-w-[300px] flex-col gap-2"},xo={class:"truncate text-base text-primaryBlue-500"},yo={class:"truncate text-sm text-primaryGray-400"},wo=V({__name:"selected-numerical-tag-data",props:ze({tagName:{},tagId:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=Ze(e,"modelValue"),d=e;return(g,b)=>{const x=Je;return S(),M("div",go,[n("div",bo,[n("p",xo,he(d.tagName),1),n("p",yo,he(d.tagId),1)]),n("div",null,[a(x,{modelValue:r.value,"onUpdate:modelValue":b[0]||(b[0]=t=>r.value=t)},null,8,["modelValue"])])])}}}),$o={class:"shadow-selectedNumericalTagMenu absolute bottom-6 right-6 z-50 flex w-[385px] flex-col gap-6 rounded-3xl bg-primaryBlue-50 p-6 ring-1 ring-primaryBlue-200"},Co={class:"flex flex-col gap-2"},Po={class:"flex w-full justify-between"},ko=V({__name:"menu-selected-numerical-tags",setup(e){const r=T(!0);return(d,g)=>{const b=wo,x=ye;return S(),M("div",$o,[n("div",Co,[a(b,{modelValue:ge(r),"onUpdate:modelValue":g[0]||(g[0]=t=>be(r)?r.value=t:null),"tag-name":"Capacity Control Position ZT-4003 (CNTRL)","tag-id":"a_c_4000_meters_capacity_side_cntrl"},null,8,["modelValue"]),a(b,{modelValue:ge(r),"onUpdate:modelValue":g[1]||(g[1]=t=>be(r)?r.value=t:null),"tag-name":"Capacity Control Position ZT-4003 (CNTRL)","tag-id":"a_c_4000_meters_capacity_side_cntrl"},null,8,["modelValue"])]),n("div",Po,[a(x,{label:"Open in New Window"}),a(x,{label:"Unselect All",type:"dark"})])])}}}),So={},Bo={class:"flex flex-1 flex-col gap-6"},To={class:"flex"},Mo={class:"flex flex-col"},Io=n("h1",{class:"text-[12px] font-bold uppercase text-sidebarListTitle"},"Purdue",-1),Fo={class:"mt-2 flex flex-col gap-2"},Eo={class:"flex flex-col"},No=n("h1",{class:"text-[12px] font-bold uppercase text-sidebarListTitle"}," tags-groups ",-1),jo={class:"mt-2 flex flex-col gap-2"},Do={class:"flex flex-1 items-end justify-end"},Lo={class:"flex flex-col"},Ao=n("h1",{class:"mb-2 text-[12px] font-bold uppercase text-sidebarListTitle"}," location weather ",-1),Oo={class:"flex gap-2"},Ho={class:"mt-6 flex flex-col"},Vo=n("div",{class:"flex h-4 items-center rounded-full bg-primaryBlue-400 px-2 text-xs font-normal text-primaryBlue-50"}," Beta ",-1),Go={class:"m-6 flex flex-col gap-6 lg:flex-row"};function Ro(e,r){const d=kt,g=xe,b=He,x=Ft,t=Lt,o=Rt,c=Jt,_=oo,m=uo,$=ho,B=ko,y=Xe;return S(),J(y,null,{"sidebar-area":k(()=>[n("div",Bo,[n("div",To,[a(d)]),n("div",Mo,[Io,n("div",Fo,[a(g,{label:"c4000",active:""}),a(g,{label:"c5000"}),a(g,{label:"shared"})])]),n("div",Eo,[No,n("div",jo,[a(g,{label:"tags-groups",active:""}),a(g,{label:"Reset Groups"},{trailing:k(()=>[n("div",Do,[a(b,{name:"i-heroicons-backspace",class:"h-[18px] w-[18px]"})])]),_:1})])]),n("div",Lo,[Ao,n("div",Oo,[a(t,null,{icon:k(()=>[a(x,{class:"stroke-primaryBlue-500"})]),default:k(()=>[X(" 63.84 °F ")]),_:1}),a(t,null,{icon:k(()=>[a(o,{class:"stroke-primaryBlue-500"})]),default:k(()=>[X(" 2.57 m/s ")]),_:1}),a(t,null,{icon:k(()=>[a(c,{class:"stroke-primaryBlue-500"})]),default:k(()=>[X(" 94.0 % ")]),_:1})])])]),n("div",Ho,[a(g,{type:"primary",label:"Chat SCADA",icon:"i-heroicons-square-3-stack-3d",to:"/chat-scada"},{trailing:k(()=>[Vo]),_:1})])]),"main-area":k(()=>[n("div",Go,[a(m,null,{default:k(()=>[a(_),a(_)]),_:1}),a($)]),a(B)]),_:1})}const Qo=E(So,[["render",Ro]]);export{Qo as default};