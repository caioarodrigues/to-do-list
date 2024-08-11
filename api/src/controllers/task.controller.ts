import { Request, Response } from "express";
import Task from "../models/Task.model";

export default class TaskController {
  public async create(req: Request, res: Response) {
    try {
      const { title, description, dueDate } = req.body;
      const task = new Task(title, description, new Date(), new Date(dueDate));

      await task.create();
      return res.status(201).json(task);
    } catch (error) {
      console.error(`Error while trying to create a new task: ${error}`);

      return res
        .status(500)
        .json({ msg: "Error while trying to create a new task" });
    }
  }

  public async listAll(req: Request, res: Response) {
    const tasks = await Task.listAll();

    return res.json(tasks);
  }

  public async listById(req: Request, res: Response) {
    const { id } = req.params;
    const task = await Task.listById(id);

    return res.json(task);
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, dueDate, completed, createdAt } = req.body;
      const task = await Task.update(
        title,
        description,
        completed,
        dueDate,
        createdAt,
        id
      );

      return res.json(task);
    } catch (error) {
      console.error(`Error while trying to update a task: ${error}`);

      return res
        .status(500)
        .json({ msg: "Error while trying to update a task" });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await Task.delete(id);
  
      return res.json(task);
    } catch (error) {
      console.error(`Error while trying to delete a task: ${error}`);
  
      return res
        .status(500)
        .json({ msg: "Error while trying to delete a task" });
    }
  }
}
