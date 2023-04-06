<template>
  <h1>Create a ToDo for yourself</h1>
  <TodoForm class="container" />
</template>

<script lang="ts" setup>
import TodoForm from '@/components/forms/TodoForm.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/container.css';
h1 {
  font-size: 24px;
}
</style>
