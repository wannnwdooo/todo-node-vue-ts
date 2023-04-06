import express from "express";
import TodoController from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/todo", TodoController.getAll);
router.post("/todo", TodoController.add);
router.patch("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.remove);
export default router;
