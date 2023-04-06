<template>
  <section class="todo-form">
    <BaseInput v-model="input" type="textarea" placeholder="Write a ToDo" />
    <BaseButton @click="createTodo" text="Create" class="todo-form__button" />
  </section>
</template>

<script lang="ts" setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import { ref } from 'vue'
import store from '@/store'

const input = ref('')
const createTodo = () => {
  store.dispatch('todo/postTodo', { text: input.value }).then(() => (input.value = ''))
}
</script>

<style lang="scss" scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  &__button {
    margin-top: 2rem;
    margin-left: auto;
  }
}
</style>
