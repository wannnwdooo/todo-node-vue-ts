<template>
  <button>{{ text }}</button>
</template>

<script lang="ts" setup>
defineProps({ text: String })
</script>

<style lang="scss" scoped>
  button{
    position: relative;
    background: rgba(7, 86, 160, 0.973);
    color: white;
    //width: 200px;
    //height: 60px;
    padding: 1rem 3rem;
    border: 0;
    font-size: 18px;
    border-radius: 4px;
    transition: .6s;
    //overflow: hidden;
    &:focus{
      outline: 0;
    }
    &:hover{
      background: #113f67;
      cursor: pointer;
      &:before{
        transform: translateX(300px)  skewX(-15deg);
        opacity: 0.6;
        transition: .7s;
      }
      &:after{
        transform: translateX(300px) skewX(-15deg);
        opacity: 1;
        transition: .7s;
      }
    }
    &:active {
      transform: scale(0.92);
      transition: all 0.3s ease;
    }
  }
</style>
