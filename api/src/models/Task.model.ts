import axios from "axios";
import config from "../config";

export default class Task {
  private readonly path = `http://localhost:${config.db_port}/tasks`;
  private title: string;
  private description: string;
  private completed: boolean;
  private createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;
  private dueDate: Date;

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
      .catch((error) => {
        console.error(`Error while trying to get all tasks: ${error}`);

        return [];
      });

    return response;
  }

  public static async listById(id: string): Promise<Task> {
    const task = await axios
      .get(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(`Error while trying to get task by id: ${error}`);

        return {};
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
  ): Promise<Task> {
    await axios
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
      });

    return new Task(title, description, new Date(), dueDate);
  }

  public static async delete(id: string): Promise<Task> {
    const task = await axios
      .get(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => data);

    await axios
      .delete(`http://localhost:${config.db_port}/tasks/${id}`)
      .then(({ data }) => {
        console.log(`Task deleted: ${data}`);
      });

    return task;
  }
}
