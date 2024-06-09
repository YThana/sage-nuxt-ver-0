<script setup lang="ts">
import type { InputSize } from '#ui/types';

interface Props {
	placeholder?: string;
	label?: string;
	name?: string;
	required?: boolean;
	size?: InputSize;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: 'Enter here...',
	required: false,
	size: 'default',
});

const id: string = useId();
const value = defineModel<any>();
const showPassword = ref<boolean>(false);

const inputType = computed(() => {
	switch (showPassword.value) {
		case true:
			return 'text';
		case false:
			return 'password';
		default:
			return 'password';
	}
});

const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>

<template>
	<UFormGroup :name :label :required :id>
		<UInput
			:type="inputType"
			:size
			v-model="value"
			color="primary"
			variant="outline"
			:placeholder>
			<template #trailing>
				<UButton
					variant="ghost"
					color="ghost"
					size="sm"
					class="rounded-xl"
					:square="true"
					@click="togglePasswordVisibility">
					<UIcon
						v-if="showPassword"
						name="i-heroicons-eye"
						class="h-[18px] w-[18px] text-primaryColor-500" />
					<UIcon
						v-else
						name="i-heroicons-eye-slash"
						class="h-[18px] w-[18px] text-primaryColor-500" />
				</UButton>
			</template>
		</UInput>
	</UFormGroup>
</template>
