<template>
  <li class="todo-item" :class="{expired: isExpired}">
      <span v-if="isExpired" class="todo-item__expired">Expired</span>
    <div class="todo-item__control">
      <TimeBox :date="data.expired" @expired="isExpired = true" />
      <div class="todo-item__control-buttons">
        <BaseButton
          :text="trigger ? 'Edit' : 'Complete'"
          @click="togglePatchItem"
          class="todo-item__control-buttons-item"
        />
        <BaseButton @click="deleteItem" text="Delete" class="todo-item__control-buttons-item" />
      </div>
    </div>

    <div class="todo-item__text">
      <BaseCheckbox :id="data._id" :checked="data.done" @checkbox="changeCheckbox" class="todo-item__text-checkbox" />
      <BaseInput
        v-model="newData.text"
        :disabled="trigger"
        :placeholder="data.text"
        type="text"
        class="todo-item__text-input"
      />
    </div>
  </li>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import { ref } from 'vue'
import TimeBox from '@/components/general/TimeBox.vue'
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue'
import store from '@/store'

interface IProps {
  data: {
    done: boolean
    text: string
    expired: Date
    _id: string
  }
}

const props = defineProps<IProps>()
const newData = props.data
const trigger = ref(true)
const isExpired = ref(false)

const updateTodo = async () => {
  const payload = Object.assign({}, newData)
  await store.dispatch('todo/patchTodo', payload)
  trigger.value = true
}

const changeCheckbox = () => {
    newData.done = !newData.done
    updateTodo()
}
const togglePatchItem = () => {
  trigger.value ? (trigger.value = false) : updateTodo()
}
const deleteItem = () => {
  store.dispatch('todo/deleteTodo', props.data._id)
}

</script>

<style lang="scss" scoped>
.todo-item {
  background: rgba(255, 255, 255, 0.7);
  display: grid;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1.7rem;
  position: relative;

  &__expired {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 700;
    color: white;
    z-index: 3;
  }

  &.expired:after {
    left: 0; top: 0;
    width: 100%; height: 100%;
    position: absolute;
    content: "";
    background: red;
    opacity: 0.5;
    border-radius: 1.7rem;
    z-index: 2;
  }

  &__control {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    &-buttons {
      margin-left: auto;
      &-item {
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        &:last-child {
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__text {
    display: flex;
    justify-content: space-between;
    &-checkbox {
      margin: 0 0.5rem;
    }
    &-input {
      border-radius: 2rem;
      font-size: 1rem;
      width: 100%;
      padding: 0.7rem 1rem;
    }
  }
}
</style>
