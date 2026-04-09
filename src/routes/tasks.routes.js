import { Router } from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/10", getTask);

router.post("/tasks", createTask);

router.delete("/tasks", deleteTask);

router.put("/tasks", updateTask);

export default router;
