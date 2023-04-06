<template>
  <TheHeader />
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/general/TheHeader.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';

.main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
</style>
