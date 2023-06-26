<template>
  <div class="flex items-center justify-between gap-2">
    <label class="flex gap-x-2 items-center select-none" :for="task.id">
      <CheckBox
        :id="task.id"
        :checked="task.completed"
        @change-check="completeTask"
      />
      <Typography
        :class="{ 'line-through': task.completed }"
        class="first-letter:uppercase text-gray-500"
        variant="p"
      >
        {{ task.title }}
      </Typography>
    </label>
    <Button variant="clean" @click="removeTask">
      <Icon name="Trash2" :size="20" class="text-red-500" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { ITask } from '@/types'
import Button from '@/components/atoms/Button.vue'
import Icon from '@/components/atoms/Icon.vue'
import CheckBox from '@/components/atoms/CheckBox.vue'
import Typography from '@/components/atoms/Typography.vue'

const props = defineProps<{
  task: ITask
}>()

const emit = defineEmits<{
  (e: 'complete-task', taskId: string): void
  (e: 'remove-task', taskId: string): void
}>()

const completeTask = () => {
  emit('complete-task', props.task.id)
}

const removeTask = () => {
  emit('remove-task', props.task.id)
}
</script>
