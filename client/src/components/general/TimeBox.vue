<template>
  <label class="time-box">
    <span class="time-box__item">{{ min }}</span>
    <span class="time-box__item">:</span>
    <span class="time-box__item">{{ sec }}</span>
  </label>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = defineProps<{ date: Date | string }>()
const emit = defineEmits(['expired'])

const min = ref<string | number>(0)
const sec = ref<string | number>(0)

const formNum = (num: number) => (num < 10 ? '0' + num : num)
const startTimer = () => {
  const timer = setInterval(() => {
    const startDate = new Date()
    const endDate = new Date(props.date)
    const diff = ref(Math.floor(endDate.getTime() - startDate.getTime()))

    if (diff.value < 0) {
      emit('expired')
      clearInterval(timer)
      return
    }

    min.value = formNum(Math.floor(diff.value / 60 / 1000))
    sec.value = formNum(Math.floor((diff.value / 1000) % 60))
  }, 1000)
}
onMounted(() => startTimer())
</script>

<style lang="scss" scoped>
.time-box {
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 80px;
  transition: 0.6s;
  background: rgba(7, 86, 160, 0.973);
  overflow-x: hidden;
  &__item {
    width: 100%;
    color: white;
    font-size: 18px;
  }
}
</style>
