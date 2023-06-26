<template>
  <div class="flex gap-3 h-fit items-center">
    <Tab
      v-for="state in states"
      :key="state"
      :state="state"
      :is-active="activeState === state"
      @change-state="changeState"
    />
  </div>
</template>

<script setup lang="ts">
import Tab from '@/components/atoms/Tab.vue'

const states = ['All', 'Pending', 'Completed']
const activeState = ref('All')
const emit = defineEmits(['change-tab'])

const changeState = (state: string) => {
  activeState.value = state
  emit('change-tab', state)
}
</script>
