import httpService from '@/services/http.service'
import axios from 'axios'
import type {Todo} from "@/store/module/todo";

const getAllTodo = async () => {
  try {
    const { data } = await httpService.get(`/todo`)
    return data
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const error = await err.response.data.message
      throw new Error(error)
    }
  }
}

const postTodo = async (data: Todo) => {
  try {
    return await httpService.post(`/todo`, data)
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const error = await err.response.data.message
      throw new Error(error)
    }
  }
}

const patchTodo = async (data: Todo) => {
  try {
    return await httpService.patch(`/todo/${data._id}`, data)
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const error = await err.response.data.message
      throw new Error(error)
    }
  }
}

const deleteTodo = async (id: string) => {
  try {
    await httpService.delete(`/todo/${id}`)
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const error = await err.response.data.message
      throw new Error(error)
    }
  }
}
export { getAllTodo, postTodo, patchTodo, deleteTodo }
