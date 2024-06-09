import { a as c, _ as n, b as d } from './CwdVfYBn.js';
import { _ } from './CXqWF9zO.js';
import { _ as p } from './DXM5CbQ9.js';
import { _ as h, i as m, w as s, o as x, a as e, b as t } from './ByXIBUr9.js';
import './Dq_5Zrm7.js';
import './eNAPwaVg.js';
import './qsMMcMsd.js';
const f = {},
	u = { class: 'flex flex-col gap-6' },
	b = { class: 'flex flex-col gap-2' },
	y = { class: 'flex flex-col gap-2' },
	g = e(
		'p',
		{ class: 'flex text-[12px] font-bold uppercase text-sidebarListTitle' },
		' recents ',
		-1,
	),
	w = { class: 'mx-auto flex h-full w-full max-w-4xl flex-col px-6 py-6' },
	B = { class: 'flex flex-1 flex-col gap-10 overflow-auto' },
	v = e('h1', { class: 'text-5xl font-semibold text-primaryBlue-800' }, 'Hello Anderson!', -1),
	L = { class: 'flex w-full gap-6' },
	I = { class: 'flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4' },
	q = e(
		'h2',
		{ class: 'text-2xl font-semibold text-primaryBlue-600' },
		' Lorem Ipsum Lorem ',
		-1,
	),
	j = e(
		'p',
		{ class: 'text-primaryBlue-500' },
		' It is a long established fact that a reader will be distracted by the readable content of a ',
		-1,
	),
	k = { class: 'flex justify-end' },
	z = { class: 'flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4' },
	C = e(
		'h2',
		{ class: 'text-2xl font-semibold text-primaryBlue-600' },
		' Lorem Ipsum Lorem ',
		-1,
	),
	G = e(
		'p',
		{ class: 'text-primaryBlue-500' },
		' It is a long established fact that a reader will be distracted by the readable content of a ',
		-1,
	),
	N = { class: 'flex justify-end' },
	U = { class: 'flex w-1/3 flex-col gap-4 rounded-2xl bg-primaryBlue-50 p-4' },
	V = e(
		'h2',
		{ class: 'text-2xl font-semibold text-primaryBlue-600' },
		' Lorem Ipsum Lorem ',
		-1,
	),
	$ = e(
		'p',
		{ class: 'text-primaryBlue-500' },
		' It is a long established fact that a reader will be distracted by the readable content of a ',
		-1,
	),
	A = { class: 'flex justify-end' },
	D = {
		class: 'flex w-full items-center gap-4 rounded-2xl bg-primaryGray-50 p-4 text-primaryGray-500',
	},
	H = e(
		'p',
		null,
		' It is a long established fact that a reader will be distracted by the readable content of a pagt is a long established fact that a reader will be distracted by the readable content of a ',
		-1,
	),
	S = { class: 'w-full pt-2' };
function T(E, F) {
	const o = c,
		a = n,
		l = d,
		r = _,
		i = p;
	return (
		x(),
		m(i, null, {
			'sidebar-area': s(() => [
				e('div', u, [
					e('div', b, [
						t(o, {
							type: 'primary',
							label: 'Dashboard',
							icon: 'i-heroicons-square-3-stack-3d',
							to: '/home',
						}),
						t(o, {
							type: 'gray',
							label: 'New Chat',
							icon: 'i-heroicons-plus',
							to: '/chat-home/chat',
						}),
					]),
					e('div', y, [
						g,
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
			'main-area': s(() => [
				e('div', w, [
					e('div', B, [
						v,
						e('div', L, [
							e('div', I, [
								q,
								j,
								e('div', k, [
									t(
										l,
										{
											size: 'default',
											color: 'ghost',
											variant: 'ghost',
											square: '',
											type: 'ghost',
										},
										{
											default: s(() => [
												t(a, {
													name: 'i-heroicons-arrow-long-right',
													class: 'h-[24px] w-[24px] text-primaryBlue-700',
												}),
											]),
											_: 1,
										},
									),
								]),
							]),
							e('div', z, [
								C,
								G,
								e('div', N, [
									t(
										l,
										{
											size: 'default',
											color: 'ghost',
											variant: 'ghost',
											square: '',
											type: 'ghost',
										},
										{
											default: s(() => [
												t(a, {
													name: 'i-heroicons-arrow-long-right',
													class: 'h-[24px] w-[24px] text-primaryBlue-700',
												}),
											]),
											_: 1,
										},
									),
								]),
							]),
							e('div', U, [
								V,
								$,
								e('div', A, [
									t(
										l,
										{
											size: 'default',
											color: 'ghost',
											variant: 'ghost',
											square: '',
											type: 'ghost',
										},
										{
											default: s(() => [
												t(a, {
													name: 'i-heroicons-arrow-long-right',
													class: 'h-[24px] w-[24px] text-primaryBlue-700',
												}),
											]),
											_: 1,
										},
									),
								]),
							]),
						]),
						e('div', D, [
							t(a, {
								name: 'i-heroicons-exclamation-circle',
								class: 'h-[48px] w-[48px] text-primaryGray-700',
							}),
							H,
						]),
					]),
					e('div', S, [t(r)]),
				]),
			]),
			'_': 1,
		})
	);
}
const W = h(f, [['render', T]]);
export { W as default };
