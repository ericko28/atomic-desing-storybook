<template>
  <button
    class=""
    :class="[variant, size]"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'clean'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    variant: 'primary',
    size: 'md',
  },
)

const variantsClasses = {
  clean: '',
  primary:
    'bg-blue-500 py-2 px-3 rounded-lg text-white hover:bg-blue-800 transition-colors duration-300 text-sm',
  secondary:
    'bg-purple-500 py-2 px-3 rounded-lg text-white hover:bg-blue-800 transition-colors duration-300 text-sm',
  danger:
    'bg-red-500 py-2 px-3 rounded-lg text-white hover:bg-blue-800 transition-colors duration-300 text-sm',
}

const sizesClasses = {
  sm: 'py-1 px-2 text-xs',
  md: 'py-2 px-3 text-sm',
  lg: 'py-3 px-4 text-base',
}

const variant = computed(() => variantsClasses[props.variant])
const size = computed(() => sizesClasses[props.size])
</script>
