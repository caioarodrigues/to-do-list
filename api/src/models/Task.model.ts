import axios from 'axios';
import config from '../config';

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
    await axios.post(this.path, {
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
      dueDate: this.dueDate,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt
    })
      .then(({ data }) => {
        console.log(`Task created: ${data}`);
      });

    return this;
  }

  public static async getAll(): Promise<Task[]> {
    const response = await axios.get(`http://localhost:${config.db_port}/task`)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(`Error while trying to get all tasks: ${error}`);

        return [];
      });

    return response;
  }
}