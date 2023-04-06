<template>
  <input
    v-if="type === 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ transparent: disabled }"
    :disabled="disabled"
  />
  <textarea
    v-else
    :rows="rows"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ transparent: disabled }"
    :disabled="disabled"
  />
</template>

<script lang="ts" setup>
defineProps({
  type: { type: String },
  placeholder: String,
  disabled: { value: Boolean, default: false },
  modelValue: [String, Number],
  rows: { value: String, default: 5 }
})
</script>

<style lang="scss" scoped>
input {
  border: none;
  border-radius: 0.4rem;
  padding: 1.5rem;
  font-size: 1.4rem;
  color: white;
  background: rgba(7, 86, 160, 0.973);
  transition: 0.6s;
  overflow: hidden;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #113f67;
  }
  &.transparent {
    border-color: transparent;
    background-color: transparent;
    padding: 0 2rem;
    color: #272727;
    &:hover {
      border-color: transparent;
    }
  }
  &.disabled {
    cursor: default;
    pointer-events: none;
  }
}
textarea {
  @extend input;
  resize: none;
}
</style>
