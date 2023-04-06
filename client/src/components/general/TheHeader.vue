<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
header {
  padding: 1rem 0;
  background: rgba(231, 234, 246, 0.6);
}
nav {
  display: flex;
  width: 100vw;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  a {
    display: inline-block;
    padding: 0 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: rgba(7, 86, 160, 0.6);

    &.router-link-exact-active {
      color: #113f67;

      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
