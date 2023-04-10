<template>
  <ul>
    <template v-if="todoItems.length">
      <TodoItem :data="item" :key="item._id" v-for="item in todoItems" class="todo-item" />
    </template>
    <li class="todo-title" v-else>This is empty</li>
  </ul>
</template>

<script lang="ts" setup>
import TodoItem from '@/components/view/home/TodoItem.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const todoItems = computed(() => store.getters['todo/allTodo'])

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
  .todo-title {
    display: flex;
    width: 100%;
    justify-content: center;
    color: #272727;
    font-weight: 700;
    font-size: 1.2rem;
  }
}
</style>
