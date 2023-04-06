import { NextFunction, Request, Response } from "express";
import TodoModel from "../models/todo.model.js";

class Scheduler {
  async removeExpiredTodos() {
    try {
      setTimeout(async function run() {
        const { deletedCount } = await TodoModel.deleteMany({
          expired: { $lte: new Date() },
        }).exec();
        console.log(
          deletedCount,
          "Logs since",
          new Date(),
          "have been cleared"
        );
        setTimeout(run, 60000);
      }, 60000);
    } catch (err) {
      throw new Error(err);
    }
  }
}
export default new Scheduler();
