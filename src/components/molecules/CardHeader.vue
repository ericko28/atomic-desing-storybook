<template>
  <form @submit.prevent="addTask" class="flex gap-x-2">
    <TextField v-model="task" placeholder="Add a new task">
      <template #before>
        <Icon name="ListTodo" />
      </template>
    </TextField>
    <Button @click="addTask">Add</Button>
  </form>
</template>

<script setup lang="ts">
import { useTodo } from '@/stores/todo'
import Button from '@/components/atoms/Button.vue'
import Icon from '@/components/atoms/Icon.vue'
import TextField from '@/components/atoms/TextField.vue'

const store = useTodo()
const task = ref('')

const addTask = () => {
  if (task.value === '') return

  store.addTask(task.value)
  task.value = ''
}
</script>
