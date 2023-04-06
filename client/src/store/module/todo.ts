import {deleteTodo, getAllTodo, patchTodo, postTodo} from '@/services/todo.service'
import type {Commit} from 'vuex'
import type {AxiosResponse} from 'axios'

export interface CommitFunction {
  commit: Commit
}
interface State {
  todos: Todo[]
}
export interface Todo {
  done: boolean
  text: string
  expired: Date
  _id: string
}

const state = () => ({
  todos: Array<Todo>
})

const getters = {
  allTodo(state: State) {
    return state.todos
  }
}

const mutations = {
  GET_ALL_TODO(state: State, data: Todo[]) {
    state.todos = data
  },

  UPDATE_TODO(state: State, { data }: AxiosResponse) {
    state.todos = state.todos.map((todo) => {
      if (todo._id !== data.id) return todo
      return { ...todo, ...data }
    })
  },

  DELETE_TODO: (state: State, data: string) => {
    state.todos = state.todos.filter((todo) => todo._id !== data)
  }
}
const actions = {
  getAllTodo: async ({ commit }: CommitFunction) => {
    const res = await getAllTodo()
    commit('GET_ALL_TODO', res)
  },

  postTodo: async ({},data: Todo) => {
    return await postTodo(data)
  },

  patchTodo: async ({ commit }: CommitFunction, data: Todo) => {
    const response = await patchTodo(data)
    commit('UPDATE_TODO', { id: data._id, ...response })
  },

  deleteTodo: async ({ commit }: CommitFunction, id: string) => {
    await deleteTodo(id)
    commit('DELETE_TODO', id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
