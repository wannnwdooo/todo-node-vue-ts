<template>
  <h1>This is an about page</h1>
  <TodoList class="container"/>
</template>


<script setup lang="ts">
import TodoList from '@/components/view/home/TodoList.vue'
</script>
<style lang="scss" scoped>
@import "@/assets/container.css";
h1 {
  font-size: 24px;
}
</style>