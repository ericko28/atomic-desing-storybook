import { ITask } from '@/types'

export const useTodo = defineStore('todoList', {
  state: () => ({
    tasks: [] as ITask[],
  }),

  getters: {
    completedTasks(): ITask[] {
      return this.tasks.filter((todo) => todo.completed)
    },
    uncompletedTasks(): ITask[] {
      return this.tasks.filter((todo) => !todo.completed)
    },
  },

  actions: {
    addTask(task: string) {
      this.tasks.push({
        id: Math.random(),
        title: task,
        completed: false,
      })
    },
    completeTask(id: string) {
      console.log('completeTask', id)
      this.todos = this.tasks.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    removeTask(id: string) {
      this.tasks = this.tasks.filter((todo) => todo.id !== id)
    },
    clearCompleted() {
      this.tasks = this.tasks.filter((todo) => !todo.completed)
    },
  },

  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodo, import.meta.hot))
}
