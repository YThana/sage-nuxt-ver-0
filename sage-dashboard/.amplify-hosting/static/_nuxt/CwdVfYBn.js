import{_ as De}from"./Dq_5Zrm7.js";import{h as Ue,_ as M,f as F,a1 as ue,g,o as m,i as A,c as N,n as h,w as j,D as w,$ as _,a0 as ee,E as B,P as Pe,a as de,a2 as Re,a3 as Ve,a4 as P,x as W,k as K,v as C,q as ce,s as He,W as ge,y as $,z as V,N as fe,O as S,G as E,t as We,r as q,A as Ke,b as te,a5 as Je,a6 as Ge,M as Qe,l as pe,a7 as Xe,m as Ye,F as Ze}from"./ByXIBUr9.js";import _e from"./eNAPwaVg.js";const re=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ne(e,n){n?n={...re,...n}:n=re;const a=ye(n);return a.dispatch(e),a.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function ye(e){let n="",a=new Map;const t=r=>{n+=r};return{toString(){return n},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let l="";const o=i.length;o<10?l="unknown:["+i+"]":l=i.slice(8,o-1),l=l.toLowerCase();let c=null;if((c=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](r):e.ignoreUnknown||this.unkown(r,l);else{let u=Object.keys(r);e.unorderedObjects&&(u=u.sort());let s=[];e.respectType!==!1&&!ae(r)&&(s=et),e.excludeKeys&&(u=u.filter(f=>!e.excludeKeys(f)),s=s.filter(f=>!e.excludeKeys(f))),t("object:"+(u.length+s.length)+":");const d=f=>{this.dispatch(f),t(":"),e.excludeValues||this.dispatch(r[f]),t(",")};for(const f of u)d(f);for(const f of s)d(f)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const c of r)this.dispatch(c);return}const l=new Map,o=r.map(c=>{const u=ye(e);u.dispatch(c);for(const[s,d]of u.getContext())l.set(s,d);return u.toString()});return a=l,o.sort(),this.array(o,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),ae(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const be="[native code] }",tt=be.length;function ae(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-tt)===be}function rt(e,n,a={}){return e===n||ne(e,a)===ne(n,a)}function ie(e){return typeof e=="function"?e():Ue(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const le=()=>{};function nt(e,n){function a(...t){return new Promise((r,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(r).catch(i)})}return a}function at(e,n={}){let a,t,r=le;const i=o=>{clearTimeout(o),r(),r=le};return o=>{const c=ie(e),u=ie(n.maxWait);return a&&i(a),c<=0||u!==void 0&&u<=0?(t&&(i(t),t=null),Promise.resolve(o())):new Promise((s,d)=>{r=n.rejectOnCancel?d:s,u&&!t&&(t=setTimeout(()=>{a&&i(a),t=null,s(o())},u)),a=setTimeout(()=>{t&&i(t),t=null,s(o())},c)})}}function it(e,n=200,a={}){return nt(at(n,a),e)}function lt(e,n){const a={...e};for(const t of n)delete a[t];return a}function ot(e,n,a){typeof n=="string"&&(n=n.split(".").map(r=>{const i=Number(r);return isNaN(i)?r:i}));let t=e;for(const r of n){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const J={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},st=e=>Object.keys(J).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),ut=F({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=ue();return{dynamic:g(()=>{var t,r;return e.dynamic||((r=(t=n.ui)==null?void 0:t.icons)==null?void 0:r.dynamic)})}}});function dt(e,n,a,t,r,i){const l=_e;return e.dynamic?(m(),A(l,{key:0,name:e.name},null,8,["name"])):(m(),N("span",{key:1,class:h(e.name)},null,2))}const D=M(ut,[["render",dt]]),ct=F({inheritAttrs:!1,props:{...J,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:r,isExactActive:i}){return e.exactQuery&&!rt(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),gt=["href","aria-disabled","role","rel","target","onClick"];function ft(e,n,a,t,r,i){const l=De;return e.to?(m(),A(l,B({key:1},e.$props,{custom:""}),{default:j(({route:o,href:c,target:u,rel:s,navigate:d,isActive:f,isExactActive:p,isExternal:y})=>[de("a",B(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:s,target:u,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(o,e._.provides[Re]||e.$route,{isActive:f,isExactActive:p}),onClick:b=>!y&&!e.disabled&&d(b)}),[w(e.$slots,"default",_(ee({isActive:e.active!==void 0?e.active:e.exact?p:f})))],16,gt)]),_:3},16)):(m(),A(Pe(e.as),B({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:j(()=>[w(e.$slots,"default",_(ee({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const ve=M(ct,[["render",ft]]),me=(e,n,a,t,r=!1)=>{const i=Ve(),l=ue(),o=g(()=>{var f;const u=P(n),s=P(a),d=P(t);return W((u==null?void 0:u.strategy)||((f=l.ui)==null?void 0:f.strategy),d?{wrapper:d}:{},u||{},r?ot(l.ui,e,{}):{},s||{})}),c=g(()=>lt(i,["class"]));return{ui:o,attrs:c}};function he({ui:e,props:n}){const a=ge();if(K("ButtonGroupContextConsumer",!0),C("ButtonGroupContextConsumer",!1))return{size:g(()=>n.size),rounded:g(()=>e.value.rounded)};let r=a.parent,i;for(;r&&!i;){if(r.type.name==="ButtonGroup"){i=C(`group-${r.uid}`);break}r=r.parent}const l=g(()=>i==null?void 0:i.value.children.indexOf(a));return ce(()=>{i==null||i.value.register(a)}),He(()=>{i==null||i.value.unregister(a)}),{size:g(()=>(i==null?void 0:i.value.size)||n.size),rounded:g(()=>!i||l.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:l.value===0?i.value.rounded.start:l.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const pt={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},U={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},Zt={wrapper:"relative inline-flex text-left rtl:text-right",container:"z-20 group",trigger:"inline-flex w-full",width:"w-48",height:"",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-700",base:"relative focus:outline-none overflow-y-auto scroll-py-1",divide:"divide-y divide-gray-200 dark:divide-gray-700",padding:"p-1",item:{base:"group flex items-center gap-1.5 w-full",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",active:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",inactive:"text-gray-700 dark:text-gray-200",disabled:"cursor-not-allowed opacity-50",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-500 dark:text-gray-400",inactive:"text-gray-400 dark:text-gray-500"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"truncate",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"},transition:{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},popper:{placement:"bottom-end",strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...U,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},G={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50",padding:{"2xs":"ps-[85px]",xs:"ps-[87px]",sm:"ps-[96px]",md:"ps-[98px]",lg:"ps-[100px]",xl:"ps-[109px]"}},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},oe={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...U,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...G});({...G});({...oe,option:{...oe.option},arrow:{...U}});({...U});const x=W($.ui.strategy,$.ui.button,pt),yt=F({components:{UIcon:D,ULink:ve},inheritAttrs:!1,props:{...J,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>x.default.size,validator(e){return Object.keys(x.size).includes(e)}},color:{type:String,default:()=>x.default.color,validator(e){return[...$.ui.colors,...Object.keys(x.color)].includes(e)}},variant:{type:String,default:()=>x.default.variant,validator(e){return[...Object.keys(x.variant),...Object.values(x.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>x.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:t}=me("button",V(e,"ui"),x),{size:r,rounded:i}=he({ui:a,props:e}),l=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),o=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=g(()=>e.square||!n.default&&!e.label),u=g(()=>{var I,O;const b=((O=(I=a.value.color)==null?void 0:I[e.color])==null?void 0:O[e.variant])||a.value.variant[e.variant];return fe(S(a.value.base,a.value.font,i.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[c.value?"square":"padding"][r.value],b==null?void 0:b.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),s=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),d=g(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),f=g(()=>S(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),p=g(()=>S(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!l.value&&a.value.icon.loading)),y=g(()=>st(e));return{ui:a,attrs:t,isLeading:l,isTrailing:o,isSquare:c,buttonClass:u,leadingIconName:s,trailingIconName:d,leadingIconClass:f,trailingIconClass:p,linkProps:y}}});function bt(e,n,a,t,r,i){const l=D,o=ve;return m(),A(o,B({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:j(()=>[w(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(m(),A(l,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):E("",!0)]),w(e.$slots,"default",{},()=>[e.label?(m(),N("span",{key:0,class:h([e.truncate?e.ui.truncate:""])},We(e.label),3)):E("",!0)]),w(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(m(),A(l,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):E("",!0)])]),_:3},16,["type","disabled","class"])}const vt=M(yt,[["render",bt]]),_t=F({__name:"button-sidebar",props:{size:{default:"default"},icon:{},label:{default:"Button"},to:{},active:{type:Boolean,default:!1},target:{default:"_self"},trailing:{type:Boolean,default:!1}},setup(e){const n={color:{primaryBlue:{solid:"shadow-none bg-primaryBlue-50 hover:bg-primaryGray-600 text-black hover:bg-primaryBlue-500 hover:text-white"}}};return(a,t)=>{const r=vt;return m(),A(r,{ui:n,to:a.to,icon:a.icon,size:a.size,label:a.label,class:h([a.active&&"bg-primaryBlue-500 text-white hover:bg-primaryBlue-500"]),color:"primaryBlue",target:a.target,trailing:a.trailing,truncate:""},{leading:j(()=>[w(a.$slots,"leading")]),trailing:j(()=>[w(a.$slots,"trailing")]),_:3},8,["to","icon","size","label","class","target","trailing"])}}}),mt=(e,n)=>{const a=C("form-events",void 0),t=C("form-group",void 0),r=C("form-inputs",void 0);t&&(e!=null&&e.id&&(t.inputId.value=e==null?void 0:e.id),r&&(r.value[t.name.value]=t.inputId.value));const i=q(!1);function l(s,d){a&&a.emit({type:s,path:d})}function o(){l("blur",t==null?void 0:t.name.value),i.value=!0}function c(){l("change",t==null?void 0:t.name.value)}const u=it(()=>{(i.value||t!=null&&t.eagerValidation.value)&&l("input",t==null?void 0:t.name.value)},300);return{inputId:g(()=>(e==null?void 0:e.id)??(t==null?void 0:t.inputId.value)),name:g(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:g(()=>{var d;const s=n.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??s??((d=n==null?void 0:n.default)==null?void 0:d.size)}),color:g(()=>{var s;return(s=t==null?void 0:t.error)!=null&&s.value?"red":e==null?void 0:e.color}),emitFormBlur:o,emitFormInput:u,emitFormChange:c}},k=W($.ui.strategy,$.ui.input,G),ht=F({components:{UIcon:D},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>k.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(k.size).includes(e)}},color:{type:String,default:()=>k.default.color,validator(e){return[...$.ui.colors,...Object.keys(k.color)].includes(e)}},variant:{type:String,default:()=>k.default.variant,validator(e){return[...Object.keys(k.variant),...Object.values(k.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:a}){const{ui:t,attrs:r}=me("input",V(e,"ui"),k,V(e,"class")),{size:i,rounded:l}=he({ui:t,props:e}),{emitFormBlur:o,emitFormInput:c,size:u,color:s,inputId:d,name:f}=mt(e,k),p=g(()=>i.value||u.value),y=q(Ke({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),b=q(null),I=()=>{var v;e.autofocus&&((v=b.value)==null||v.focus())},O=v=>{y.value.trim&&(v=v.trim()),(y.value.number||e.type==="number")&&(v=Je(v)),n("update:modelValue",v),c()},ze=v=>{y.value.lazy||O(v.target.value)},Ne=v=>{const z=v.target.value;n("change",z),y.value.lazy&&O(z),y.value.trim&&(v.target.value=z.trim())},Be=v=>{o(),n("blur",v)};ce(()=>{setTimeout(()=>{I()},e.autofocusDelay)});const Ee=g(()=>{var z,Z;const v=((Z=(z=t.value.color)==null?void 0:z[s.value])==null?void 0:Z[e.variant])||t.value.variant[e.variant];return fe(S(t.value.base,t.value.form,l.value,t.value.placeholder,e.type==="file"&&[t.value.file.base,t.value.file.padding[p.value]],t.value.size[p.value],e.padded?t.value.padding[p.value]:"p-0",v==null?void 0:v.replaceAll("{color}",s.value),(T.value||a.leading)&&t.value.leading.padding[p.value],(Y.value||a.trailing)&&t.value.trailing.padding[p.value]),e.inputClass)}),T=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),Y=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),je=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Fe=g(()=>e.loading&&!T.value?e.loadingIcon:e.trailingIcon||e.icon),Te=g(()=>S(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[p.value])),Le=g(()=>S(t.value.icon.base,s.value&&$.ui.colors.includes(s.value)&&t.value.icon.color.replaceAll("{color}",s.value),t.value.icon.size[p.value],e.loading&&t.value.icon.loading)),qe=g(()=>S(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[p.value])),Me=g(()=>S(t.value.icon.base,s.value&&$.ui.colors.includes(s.value)&&t.value.icon.color.replaceAll("{color}",s.value),t.value.icon.size[p.value],e.loading&&!T.value&&t.value.icon.loading));return{ui:t,attrs:r,name:f,inputId:d,input:b,isLeading:T,isTrailing:Y,inputClass:Ee,leadingIconName:je,leadingIconClass:Le,leadingWrapperIconClass:Te,trailingIconName:Fe,trailingIconClass:Me,trailingWrapperIconClass:qe,onInput:ze,onChange:Ne,onBlur:Be}}}),wt=["id","name","value","type","required","placeholder","disabled"];function xt(e,n,a,t,r,i){const l=D;return m(),N("div",{class:h(e.ui.wrapper)},[de("input",B({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...o)=>e.onInput&&e.onInput(...o)),onBlur:n[1]||(n[1]=(...o)=>e.onBlur&&e.onBlur(...o)),onChange:n[2]||(n[2]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,wt),w(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(m(),N("span",{key:0,class:h(e.leadingWrapperIconClass)},[w(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[te(l,{name:e.leadingIconName,class:h(e.leadingIconClass)},null,8,["name","class"])])],2)):E("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(m(),N("span",{key:1,class:h(e.trailingWrapperIconClass)},[w(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[te(l,{name:e.trailingIconName,class:h(e.trailingIconClass)},null,8,["name","class"])])],2)):E("",!0)],2)}const er=M(ht,[["render",xt]]),kt=Symbol.for("nuxt:client-only"),It="data-n-ids",St="-";function tr(e){var r,i,l,o,c,u;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const n=Ge(),a=ge();if(!a)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");n._id||(n._id=0),a._nuxtIdIndex||(a._nuxtIdIndex={}),(r=a._nuxtIdIndex)[e]||(r[e]=0);const t=e+St+a._nuxtIdIndex[e]++;if(n.payload.serverRendered&&n.isHydrating&&!C(kt,!1)){const s=((i=a.vnode.el)==null?void 0:i.nodeType)===8&&((o=(l=a.vnode.el)==null?void 0:l.nextElementSibling)!=null&&o.getAttribute)?(c=a.vnode.el)==null?void 0:c.nextElementSibling:a.vnode.el,d=JSON.parse(((u=s==null?void 0:s.getAttribute)==null?void 0:u.call(s,It))||"{}");if(d[t])return d[t]}return e+"_"+n._id++}let we=Symbol("headlessui.useid"),Ct=0;function rr(){return C(we,()=>`${++Ct}`)()}function nr(e){K(we,e)}function xe(e){var n;if(e==null||e.value==null)return null;let a=(n=e.value.$el)!=null?n:e.value;return a instanceof Node?a:null}function Q(e,n,...a){if(e in n){let r=n[e];return typeof r=="function"?r(...a):r}let t=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}var $t=Object.defineProperty,Ot=(e,n,a)=>n in e?$t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,se=(e,n,a)=>(Ot(e,typeof n!="symbol"?n+"":n,a),a);let At=class{constructor(){se(this,"current",this.detect()),se(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},X=new At;function ke(e){if(X.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=xe(e);if(n)return n.ownerDocument}return document}let H=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var zt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(zt||{}),Nt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Nt||{}),Bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Bt||{});function Ie(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(H)).sort((n,a)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER)))}var Se=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Se||{});function Ce(e,n=0){var a;return e===((a=ke(e))==null?void 0:a.body)?!1:Q(n,{0(){return e.matches(H)},1(){let t=e;for(;t!==null;){if(t.matches(H))return!0;t=t.parentElement}return!1}})}function ir(e){let n=ke(e);Qe(()=>{n&&!Ce(n.activeElement,0)&&jt(e)})}var Et=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Et||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function jt(e){e==null||e.focus({preventScroll:!0})}let Ft=["textarea","input"].join(",");function Tt(e){var n,a;return(a=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Ft))!=null?a:!1}function Lt(e,n=a=>a){return e.slice().sort((a,t)=>{let r=n(a),i=n(t);if(r===null||i===null)return 0;let l=r.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function lr(e,n){return qt(Ie(),n,{relativeTo:e})}function qt(e,n,{sorted:a=!0,relativeTo:t=null,skipElements:r=[]}={}){var i;let l=(i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?i:document,o=Array.isArray(e)?a?Lt(e):e:Ie(e);r.length>0&&o.length>1&&(o=o.filter(y=>!r.includes(y))),t=t??l.activeElement;let c=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,o.indexOf(t))-1;if(n&4)return Math.max(0,o.indexOf(t))+1;if(n&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=n&32?{preventScroll:!0}:{},d=0,f=o.length,p;do{if(d>=f||d+f<=0)return 0;let y=u+d;if(n&16)y=(y+f)%f;else{if(y<0)return 3;if(y>=f)return 1}p=o[y],p==null||p.focus(s),d+=c}while(p!==l.activeElement);return n&6&&Tt(p)&&p.select(),2}function Mt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dt(){return/Android/gi.test(window.navigator.userAgent)}function Ut(){return Mt()||Dt()}function L(e,n,a){X.isServer||pe(t=>{document.addEventListener(e,n,a),t(()=>document.removeEventListener(e,n,a))})}function Pt(e,n,a){X.isServer||pe(t=>{window.addEventListener(e,n,a),t(()=>window.removeEventListener(e,n,a))})}function or(e,n,a=g(()=>!0)){function t(i,l){if(!a.value||i.defaultPrevented)return;let o=l(i);if(o===null||!o.getRootNode().contains(o))return;let c=function u(s){return typeof s=="function"?u(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let u of c){if(u===null)continue;let s=u instanceof HTMLElement?u:xe(u);if(s!=null&&s.contains(o)||i.composed&&i.composedPath().includes(s))return}return!Ce(o,Se.Loose)&&o.tabIndex!==-1&&i.preventDefault(),n(i,o)}let r=q(null);L("pointerdown",i=>{var l,o;a.value&&(r.value=((o=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:o[0])||i.target)},!0),L("mousedown",i=>{var l,o;a.value&&(r.value=((o=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:o[0])||i.target)},!0),L("click",i=>{Ut()||r.value&&(t(i,()=>r.value),r.value=null)},!0),L("touchend",i=>t(i,()=>i.target instanceof HTMLElement?i.target:null),!0),Pt("blur",i=>t(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Rt=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Rt||{}),Vt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Vt||{});function sr({visible:e=!0,features:n=0,ourProps:a,theirProps:t,...r}){var i;let l=Oe(t,a),o=Object.assign(r,{props:l});if(e||n&2&&l.static)return R(o);if(n&1){let c=(i=l.unmount)==null||i?0:1;return Q(c,{0(){return null},1(){return R({...r,props:{...l,hidden:!0,style:{display:"none"}}})}})}return R(o)}function R({props:e,attrs:n,slots:a,slot:t,name:r}){var i,l;let{as:o,...c}=Ht(e,["unmount","static"]),u=(i=a.default)==null?void 0:i.call(a,t),s={};if(t){let d=!1,f=[];for(let[p,y]of Object.entries(t))typeof y=="boolean"&&(d=!0),y===!0&&f.push(p);d&&(s["data-headlessui-state"]=f.join(" "))}if(o==="template"){if(u=$e(u??[]),Object.keys(c).length>0||Object.keys(n).length>0){let[d,...f]=u??[];if(!Wt(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(n)).map(b=>b.trim()).filter((b,I,O)=>O.indexOf(b)===I).sort((b,I)=>b.localeCompare(I)).map(b=>`  - ${b}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(b=>`  - ${b}`).join(`
`)].join(`
`));let p=Oe((l=d.props)!=null?l:{},c,s),y=Xe(d,p,!0);for(let b in p)b.startsWith("on")&&(y.props||(y.props={}),y.props[b]=p[b]);return y}return Array.isArray(u)&&u.length===1?u[0]:u}return Ye(o,Object.assign({},c,s),{default:()=>u})}function $e(e){return e.flatMap(n=>n.type===Ze?$e(n.children):[n])}function Oe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},a={};for(let t of e)for(let r in t)r.startsWith("on")&&typeof t[r]=="function"?(a[r]!=null||(a[r]=[]),a[r].push(t[r])):n[r]=t[r];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(a).map(t=>[t,void 0])));for(let t in a)Object.assign(n,{[t](r,...i){let l=a[t];for(let o of l){if(r instanceof Event&&r.defaultPrevented)return;o(r,...i)}}});return n}function Ht(e,n=[]){let a=Object.assign({},e);for(let t of n)t in a&&delete a[t];return a}function Wt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ae=Symbol("Context");var Kt=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Kt||{});function ur(){return Jt()!==null}function Jt(){return C(Ae,null)}function dr(e){K(Ae,e)}var Gt=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Gt||{});export{sr as A,lr as B,ir as C,Zt as D,Ie as E,st as F,rr as I,zt as N,Lt as O,qt as P,jt as S,Nt as T,D as _,_t as a,vt as b,er as c,U as d,Kt as e,Ce as f,Rt as g,Se as h,ke as i,Gt as j,me as k,Jt as l,nr as m,tr as n,xe as o,Mt as p,Vt as q,X as r,ur as s,dr as t,Q as u,Ht as v,or as w,mt as x,Pt as y,ie as z};
