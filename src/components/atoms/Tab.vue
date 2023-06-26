<template>
  <button
    class="select-none border-b-2 border-transparent cursor-pointer text-gray-500 hover:text-blue-400"
    :class="{
      '!border-blue-500 !text-blue-500 !cursor-default': isActive,
    }"
    @click="$emit('changeState', state)"
  >
    <Typography>{{ state }}</Typography>
  </button>
</template>

<script setup lang="ts">
import Typography from '@/components/atoms/Typography.vue'

withDefaults(
  defineProps<{
    state: string
    isActive?: boolean
  }>(),
  {
    isActive: false,
  },
)

defineEmits<{
  (e: 'changeState', state: string): void
}>()
</script>
