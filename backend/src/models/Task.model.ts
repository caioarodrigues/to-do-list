export default class Task {
  private id: number;
  private title: string;
  private description: string;
  private completed: boolean;
  private createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;
  private dueDate: Date;

  public constructor(
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    dueDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = createdAt;
    this.updatedAt = null;
    this.deletedAt = null;
    this.dueDate = dueDate;
  }
}