import { NextFunction, Request, Response } from "express";
import TodoService from "../service/todo.service.js";
import ApiException from "../exceptions/api.exception.js";

class TodoController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { text } = req.body;
      if (!text) {
        return next(ApiException.BadRequest("Поле является обязательным"));
      }
      const todoData = await TodoService.add(text);

      return res.json(todoData);
    } catch (err) {
      next(err);
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { text, done } = req.body;
      if (!text)
        return next(ApiException.BadRequest("Поле является обязательным"));
      const updatedTodo = await TodoService.update(id, text, !!done);
      return res.json(updatedTodo);
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const removeTodo = await TodoService.remove(id);
      return res.json(removeTodo);
    } catch (err) {
      next(err);
    }
  }
}

export default new TodoController();
