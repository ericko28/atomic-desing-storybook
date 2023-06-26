<template>
  <div>
    <div class="flex justify-between gap-x-2 items-center">
      <Tabs @change-tab="changeTab" />
      <Button @click="clearCompleted"> Clear Completed </Button>
    </div>
    <div class="mt-4">
      <div
        v-if="!hasTasks"
        class="flex flex-col gap-y-1 items-center justify-center text-gray-500"
      >
        <Typography variant="h4">Add your first todo</Typography>
        <Typography variant="h6">No data in your list</Typography>
      </div>
      <div v-else>
        <Tasks
          :tasks="tasks"
          @complete-task="completeTask"
          @remove-task="removeTask"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodo } from '@/stores/todo'
import Tasks from '@/components/molecules/Tasks.vue'
import Typography from '@/components/atoms/Typography.vue'
import Button from '@/components/atoms/Button.vue'
import Tabs from '@/components/molecules/Tabs.vue'

const store = useTodo()

const tasks = computed(() => {
  if (tab.value === 'All') return store.tasks
  if (tab.value === 'Pending') return store.uncompletedTasks
  if (tab.value === 'Completed') return store.completedTasks
  return []
})
const tab = ref('All')
const hasTasks = computed(() => tasks.value.length > 0)

const completeTask = (taskId) => store.completeTask(taskId)

const changeTab = (state) => {
  tab.value = state
}

const clearCompleted = () => store.clearCompleted()
const removeTask = (taskId) => store.removeTask(taskId)
</script>
