<template>
  <div
    class="bg-white w-full py-5 px-3 rounded-lg shadow-lg flex flex-col"
    :style="{ maxWidth }"
  >
    <slot name="head" />
    <slot name="body" />
    <slot name="actions" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    maxWidth?: string
  }>(),
  {
    maxWidth: '300px',
  },
)
</script>
