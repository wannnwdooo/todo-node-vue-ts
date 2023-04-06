import TodoModel from "../models/todo.model.js";
import TodoDto from "../dtos/todo.dto.js";

class TodoService {
  async add(text) {
    const now = new Date();
    const todo = await TodoModel.create({
      done: false,
      text: text,
      expired: now.setMinutes(now.getMinutes() + 10),
    });
    return new TodoDto(todo);
  }

  async getAll() {
    return TodoModel.find();
  }

  async update(id, text, done) {
    return TodoModel.findOneAndUpdate(
      { _id: id },
      { text: text, done: done },
      { new: true }
    );
  }

  async remove(id) {
    return TodoModel.findOneAndDelete({ _id: id })
  }
}
export default new TodoService();
