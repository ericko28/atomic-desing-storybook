<template>
  <div class="flex flex-col gap-y-2">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @complete-task="completeTask"
      @remove-task="removeTask"
    />
  </div>
</template>

<script setup lang="ts">
import type { ITask } from '@/types'
import Task from '@/components/atoms/Task.vue'

defineProps<{
  tasks: ITask[]
}>()

const emit = defineEmits(['complete-task', 'remove-task'])

const completeTask = (taskId) => emit('complete-task', taskId)
const removeTask = (taskId) => emit('remove-task', taskId)
</script>
