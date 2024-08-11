import TaskController from "../controllers/task.controller";
import { Router } from "express";

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get("/task", taskController.listAll);
taskRoutes.post("/task", taskController.create);

export default taskRoutes;