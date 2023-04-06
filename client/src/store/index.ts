import { createStore } from 'vuex'
import todo from '@/store/module/todo'

export default createStore({
  modules: {
    todo
  }
})
