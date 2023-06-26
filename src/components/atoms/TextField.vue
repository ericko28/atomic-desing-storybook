<template>
  <label
    :for="id"
    class="border border-gray-300 w-full py-2 px-3 rounded-md focus-within:border-blue-600 transition-colors duration-300 flex gap-2 items-center text-gray-400 focus-within:text-gray-500"
  >
    <slot name="before" />
    <input
      :id="id"
      class="outline-none w-full placeholder:text-gray-400 focus:placeholder-current"
      :placeholder="placeholder"
      :value="modelValue"
      :type="type"
      @input="onInput"
    />
  </label>
  <slot name="after" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder?: string
    modelValue: string
    type?: 'text' | 'password'
  }>(),
  {
    placeholder: '',
    type: 'text',
  },
)

const id = computed(() => {
  const instance = getCurrentInstance()
  const { uid } = instance
  return `text-field-${uid}`
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
}
</script>
