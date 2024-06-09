import { _ as m, a as p } from './CwdVfYBn.js';
import {
	f as h,
	g as u,
	o as d,
	c as b,
	a as e,
	t as i,
	h as _,
	b as t,
	n as f,
	_ as y,
	i as x,
	w as c,
} from './ByXIBUr9.js';
import { _ as g } from './CXqWF9zO.js';
import { _ as v } from './DXM5CbQ9.js';
import './Dq_5Zrm7.js';
import './eNAPwaVg.js';
import './qsMMcMsd.js';
const w = { class: 'flex flex-col gap-6' },
	k = { class: 'flex flex-row' },
	L = {
		class: 'mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center ring-2 ring-primaryGray-100 rounded-2xl bg-primaryBlue-500 text-xl font-bold capitalize text-primaryGray-50',
	},
	I = { class: f('rounded-b-[21px] rounded-tr-[21px] bg-primaryBlue-50 p-4') },
	$ = { class: 'text-base text-black' },
	B = { class: 'flex flex-row' },
	C = {
		class: 'mr-4 flex h-10 w-10 flex-shrink-0 ring-2 ring-primaryGray-100 items-center justify-center rounded-2xl bg-primaryBlue-500',
	},
	N = { class: 'rounded-b-[21px] rounded-tr-[21px] bg-primaryGray-50 p-4' },
	q = { class: 'text-base text-black' },
	j = h({
		__name: 'chat-bubble',
		props: { query: {}, answer: {}, displayName: {} },
		setup(n) {
			const r = n,
				o = u(() => {
					var s;
					return (s = r.displayName) == null ? void 0 : s.charAt(0);
				});
			return (s, l) => {
				const a = m;
				return (
					d(),
					b('div', w, [
						e('div', k, [
							e('div', L, i(_(o)), 1),
							e('div', I, [e('div', $, i(s.query), 1)]),
						]),
						e('div', B, [
							e('div', C, [
								t(a, {
									name: 'i-heroicons-square-3-stack-3d',
									class: 'h-[18px] w-[18px] text-white',
								}),
							]),
							e('div', N, [e('div', q, i(s.answer), 1)]),
						]),
					])
				);
			};
		},
	}),
	V = {},
	E = { class: 'flex flex-col gap-6' },
	G = { class: 'flex flex-col gap-2' },
	T = { class: 'flex flex-col gap-2' },
	M = e(
		'p',
		{ class: 'flex text-[12px] font-bold uppercase text-sidebarListTitle' },
		' recents ',
		-1,
	),
	z = { class: 'flex h-full w-full flex-col' },
	D = { class: 'mx-auto flex h-screen max-w-4xl flex-col' },
	S = { class: 'flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-20 pt-6' },
	A = { class: 'px-6 pb-6 pt-2' };
function F(n, r) {
	const o = p,
		s = j,
		l = g,
		a = v;
	return (
		d(),
		x(a, null, {
			'sidebar-area': c(() => [
				e('div', E, [
					e('div', G, [
						t(o, {
							type: 'primary',
							label: 'Dashboard',
							icon: 'i-heroicons-square-3-stack-3d',
							to: '/home',
						}),
						t(o, { type: 'gray', label: 'New Chat', icon: 'i-heroicons-plus' }),
					]),
					e('div', T, [
						M,
						t(o, {
							label: 'Lorem ipsum dolor sit amet consectetur',
							icon: 'i-heroicons-chat-bubble-bottom-center',
						}),
						t(o, {
							label: 'Lorem ipsum dolor sit amet consectetur',
							icon: 'i-heroicons-chat-bubble-bottom-center',
						}),
						t(o, {
							label: 'Lorem ipsum dolor sit amet consectetur',
							icon: 'i-heroicons-chat-bubble-bottom-center',
						}),
					]),
				]),
			]),
			'main-area': c(() => [
				e('div', z, [
					e('div', D, [
						e('div', S, [
							t(s, {
								displayName: 'antony',
								query: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
								answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
							}),
							t(s, {
								displayName: 'antony',
								query: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
								answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
							}),
							t(s, {
								displayName: 'antony',
								query: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
								answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
							}),
						]),
						e('div', A, [t(l)]),
					]),
				]),
			]),
			'_': 1,
		})
	);
}
const R = y(V, [['render', F]]);
export { R as default };
