import Task from "../../models/Task.model";

describe("Task", () => {
  describe("create", () => {
    it("should create a new task", async () => {
      const task = new Task(
        "Task 1",
        "Description of task 1",
        new Date("2024-09-30"),
        new Date("2024-09-20")
      );
      const response = await task.create();

      expect(response).toBeInstanceOf(Task);
    });
  });

  describe("listAll", () => {
    it("should return an array of tasks", async () => {
      const tasks = await Task.listAll();

      expect(tasks).toBeInstanceOf(Array);
    });
  });

  describe("listById", () => {
    it("should return a task with the specified id", async () => {
      const id = '30ba';
      const task = await Task.listById(id);

      expect(task).not.toBe(undefined);
    });

    it("should return undefined if id is not found", async () => {
      const id = 'sss';
      const task = await Task.listById(id);

      expect(task).toBe(undefined);
    });
  });

  describe("update", () => {
    it("should update a task with the specified id", async () => {
      const id = '30ba';
      const task = await Task.update(
        "Task 1",
        "Description of task 1",
        false,
        new Date("2024-09-30"),
        new Date("2024-09-20"),
        id
      );

      expect(task).not.toBe(undefined);
    });

    it("should throw an error if id is not found", async () => {
      const id = 'sss';
      const task = await Task.update(
        "Task 1",
        "Description of task 1",
        false,
        new Date("2024-09-30"),
        new Date("2024-09-20"),
        id
      );

      expect(task).toBe(undefined);
    });
  });

  describe("delete", () => {
    it("should return undefined if id is not found", async () => {
      const id = 'sss';
      const task = await Task.delete(id);

      expect(task).toBe(undefined);
    });
  });
});
