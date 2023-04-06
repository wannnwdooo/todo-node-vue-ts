<template>
  <ul>
    <TodoItem :data="item" v-for="item in store.getters['todo/allTodo']" class="todo-item" />
  </ul>
</template>

<script lang="ts" setup>
import TodoItem from '@/components/view/home/TodoItem.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(async () => {
  await store.dispatch('todo/getAllTodo')
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;

  .todo-item {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
