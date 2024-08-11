import TaskController from "../controllers/task.controller";
import { Router } from "express";

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get("/task/list-all", taskController.listAll);
taskRoutes.get("/task/:id", taskController.listById);
taskRoutes.post("/task", taskController.create);
taskRoutes.put("/task/:id", taskController.update);
taskRoutes.delete("/task/:id", taskController.delete);

export default taskRoutes;