<script setup>
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todo = ref('')

const store = useTodoListStore()

const error = ref('')

function addItemAndClear(item) {
  if (item.length === 0) {
    error.value = 'You forgot to add a todo!'
  }
  store.addTodo(item)
  todo.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <base-input
        v-model="todo"
        label="To Do List"
        type="text"
        placeholder="e.g. Walk dog"
        :error="error"
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
