import taskRoutes from "./task.routes";
import Router from "express";

const routes = Router();

routes.use(taskRoutes);

export default routes;