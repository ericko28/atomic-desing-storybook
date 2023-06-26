<template>
  <input
    :id="id"
    type="checkbox"
    :checked="checked"
    @change="$emit('changeCheck')"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    checked?: boolean
  }>(),
  {
    checked: false,
  },
)

defineEmits(['changeCheck'])
</script>
