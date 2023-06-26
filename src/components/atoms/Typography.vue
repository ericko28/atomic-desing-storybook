<template>
  <component :is="variant" :class="variantStyle" class="w-fit">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  }>(),
  {
    variant: 'span',
  },
)
const variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  p: 'text-base',
  span: 'text-sm',
}
const variantStyle = computed(() => variants[props.variant])
</script>
