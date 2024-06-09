import { a as i, b as _ } from './CKZDhox3.js';
import { _ as m } from './BAZ_lCSb.js';
import { _ as x, a as f } from './CwdVfYBn.js';
import { _ as p } from './DXM5CbQ9.js';
import { _ as h, i as u, w as c, o as b, a as e, b as o, d } from './ByXIBUr9.js';
import './Dq_5Zrm7.js';
import './eNAPwaVg.js';
import './qsMMcMsd.js';
const w = {},
	v = { class: 'flex w-full md:my-6 md:justify-center' },
	y = {
		class: 'flex w-full flex-col p-6 md:w-[672px] md:flex-row md:divide-x md:divide-primaryBlue-200 md:rounded-3xl md:border md:border-containerBorder md:bg-white md:shadow-mangeUserProfileMenuContainer lg:w-[784px]',
	},
	g = { class: 'flex flex-col gap-6 md:w-1/2 md:pr-6' },
	B = e('h1', { class: 'flex h-10 text-xl font-bold text-black' }, 'Update Profile Name', -1),
	k = { class: 'flex flex-col' },
	P = { class: 'flex flex-col' },
	U = { class: 'flex md:justify-end' },
	E = { class: 'mt-11 flex flex-col gap-6 md:mt-0 md:w-1/2 md:pl-6' },
	N = e('h1', { class: 'flex h-10 text-xl font-bold text-black' }, 'Update Password', -1),
	$ = { class: 'flex flex-col' },
	j = { class: 'flex flex-col' },
	C = { class: 'flex flex-col' },
	I = { class: 'flex md:justify-end' },
	T = { class: 'flex flex-col gap-4 text-black' },
	V = e('h1', { class: 'flex text-[12px] font-bold uppercase' }, ' Password must contain ', -1),
	L = { class: 'flex items-center text-base' },
	M = { class: 'flex items-center text-base' },
	S = { class: 'flex flex-col gap-6' };
function q(z, A) {
	const t = i,
		a = m,
		s = _,
		l = x,
		n = f,
		r = p;
	return (
		b(),
		u(r, null, {
			'main-area': c(() => [
				e('div', v, [
					e('div', y, [
						e('div', g, [
							B,
							e('div', k, [
								o(t, {
									placeholder: 'Enter your profile name',
									label: 'profile name',
								}),
							]),
							e('div', P, [
								o(t, { placeholder: 'Enter your email', label: 'email' }),
							]),
							e('div', U, [o(a, { label: 'Update Profile ' })]),
						]),
						e('div', E, [
							N,
							e('div', $, [
								o(s, {
									placeholder: 'Enter your old password',
									label: 'old password',
								}),
							]),
							e('div', j, [
								o(s, {
									placeholder: 'Enter your new password',
									label: 'new password',
								}),
							]),
							e('div', C, [
								o(s, {
									placeholder: 'Enter your confirm password',
									label: 'confirm password',
								}),
							]),
							e('div', I, [o(a, { label: 'Update Password' })]),
							e('div', T, [
								V,
								e('div', L, [
									o(l, {
										name: 'i-heroicons-check',
										class: 'mr-1 h-[20px] w-[20px] text-green-500',
									}),
									d(' at least 8 characters long. '),
								]),
								e('div', M, [
									o(l, {
										name: 'i-heroicons-x-mark',
										class: 'mr-1 h-[20px] w-[20px] text-red-500',
									}),
									d(' both numeric and alphabetic characters. '),
								]),
							]),
						]),
					]),
				]),
			]),
			'sidebar-area': c(() => [
				e('div', S, [
					o(n, {
						type: 'gray',
						label: 'Customers',
						icon: 'i-heroicons-arrow-right',
						to: '/home',
					}),
				]),
			]),
			'_': 1,
		})
	);
}
const R = h(w, [['render', q]]);
export { R as default };
