import axios from "axios";
import config from "../config";

export default class Task {
  private readonly path = `http://localhost:${config.db_port}/tasks`;
  private title: string;
  private description: string;
  private completed: boolean;
  private createdAt: Date | string;
  private updatedAt: Date | string | null;
  private deletedAt: Date | string | null;
  private dueDate: Date | string;

  public constructor(
    title: string,
    description: string,
    createdAt: Date,
    dueDate: Date
  ) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = createdAt;
    this.updatedAt = null;
    this.deletedAt = null;
    this.dueDate = dueDate;
  }

  public async create(): Promise<Task> {
    await axios
      .post(this.path, {
        title: this.title,
        description: this.description,
        completed: this.completed,
        createdAt: this.createdAt,
        dueDate: this.dueDate,
        updatedAt: this.updatedAt,
        deletedAt: this.deletedAt,
      })
      .then(({ data }) => {
        console.log(`Task created: ${data}`);
      });

    return this;
  }

  public static async listAll(): Promise<Task[]> {
    const response = await axios
      .get(`http://localhost:${config.db_port}/tasks`)
      .then(({ data }) => data)
      .then((tasks) => {
        return tasks.map((task: Task) => {
          if (typeof task.dueDate === "string" && typeof task.createdAt === "string") {
            task.dueDate = task.dueDate.split("T")[0];
            task.createdAt = task.createdAt.split("T")[0];
          }

          if (task.updatedAt)
            task.updatedAt = task.updatedAt.toString().split("T")[0];

          return task;
        });
      })
      .catch((error) => {
        console.log(`Error while trying to get all tasks: ${error}`);

        return [];
      });

    return response;
  }

  public static async listById(id: string): Promise<Task> {
    const task = await axios
      .get(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => data || undefined)
      .then(task => {
        task.dueDate = task.dueDate.split("T")[0];
        task.createdAt = task.createdAt.split("T")[0];

        if (task.updatedAt) task.updatedAt = task.updatedAt.split("T")[0];

        return task;
      })
      .catch((error) => {
        console.log(`Error while trying to get task by id: ${error}`);
      });

    return task;
  }

  public static async update(
    title: string,
    description: string,
    completed: boolean,
    dueDate: Date,
    createdAt: Date,
    id: string
  ) {
    return await axios
      .put(`http://localhost:${config.db_port}/tasks/${id}`, {
        title,
        description,
        completed,
        dueDate,
        createdAt,
        updatedAt: new Date(),
      })
      .then(({ data }) => {
        console.log(`Task updated: ${data}`);

        return new Task(title, description, new Date(), dueDate);
      })
      .catch((error) => {
        console.log(`Error while trying to update task: ${error}`)
      });
  }

  public static async delete(id: string): Promise<Task> {
    const task = await axios
      .get(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => data)
      .catch((error) => {
        console.log(`Error while trying to get task by id: ${error}`);
      });

    await axios
      .delete(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => {
        console.log(`Task deleted: ${data}`);
      });

    return task;
  }
}
