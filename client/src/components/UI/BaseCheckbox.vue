<template>
  <div class="base-checkbox" >
    <input :checked="checked" type="checkbox" :id="id" class="base-checkbox__checkbox" @click="$emit('checkbox')"/>
    <label :for="id" class="base-checkbox__fake"></label>
  </div>
</template>

<script lang="ts" setup>
defineProps<{id: string, checked: boolean}>()
</script>

<style lang="scss" scoped>
.base-checkbox {
  position: relative;
  height: 28px;
  width: 28px;
  &__fake {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
    &:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
    }
  }
  &__checkbox[type='checkbox'] {
    visibility: hidden;
  }
  &__checkbox[type='checkbox']:checked + .base-checkbox__fake {
    background-color: rgba(7, 86, 160, 0.973);
    border-color: rgba(7, 86, 160, 0.973);
  }
  &__checkbox[type='checkbox']:checked + .base-checkbox__fake:after {
    opacity: 1;
  }
}
</style>
