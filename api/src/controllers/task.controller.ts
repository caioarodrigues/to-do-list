import { Request, Response } from "express";
import Task from "../models/Task.model";

export default class TaskController {
  public async create (req: Request, res: Response) {
    try {
      const { title, description, dueDate } = req.body;
      const task = new Task(title, description, new Date(), new Date(dueDate));
      
      await task.create();
      return res.status(201).json(task);
    } catch (error) {
      console.error(`Error while trying to create a new task: ${error}`);

      return res.status(500).json({ msg: "Error while trying to create a new task" });
    }
  }

  public async listAll (req: Request, res: Response) {
    const tasks = await Task.getAll();

    return res.json(tasks);
  }
}