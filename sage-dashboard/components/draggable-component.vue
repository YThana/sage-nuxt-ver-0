<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from '@vueuse/core';

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
	initialValue: { x: 40, y: 40 },
});
</script>

<template>
	<div ref="el" :style="style" class="fixed z-50">
		<slot></slot>
	</div>
</template>
