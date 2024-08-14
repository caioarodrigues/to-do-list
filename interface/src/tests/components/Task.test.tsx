import { screen, render } from "@testing-library/react";
import { Task } from "../../components/Task";
import { ITask } from "../../types";

const task: ITask = {
  id: "1",
  title: "Task 1",
  description: "Description of task 1",
  completed: false,
  dueDate: "2021-09-30",
  createdAt: "2021-09-20",
  updatedAt: null,
};

it("Should render the task", () => {
  render(<Task {...task} />);

  const component = screen.getByTestId("task");

  expect(component).toBeInTheDocument();
});

it("sould render the title", () => {
  render(<Task {...task} />);
  const title = screen.getByTestId("title");
  expect(title.textContent).toBe(task.title);
});

it("sould render the description", () => {
  render(<Task {...task} />);
  const description = screen.getByTestId("description");
  expect(description.textContent).toBe(task.description);
});

it("sould render the due date", () => {
  render(<Task {...task} />);
  const dueDate = screen.getByTestId("due-date");
  expect(dueDate.textContent).toBe(`Due date: ${task.dueDate}`);
});

it("should render the created at date", () => {
  render(<Task {...task} />);
  const createdAt = screen.getByTestId("created-at");
  expect(createdAt.textContent).toBe(`Created at: ${task.createdAt}`);
});

it("should not render the updated at date", () => {
  render(<Task {...task} />);
  const updatedAt = screen.queryByTestId("updated-at");
  expect(updatedAt).toBeNull();
});

it("should render the updated at date", () => {
  const taskWithUpdate = { ...task, updatedAt: "2021-09-21" };
  render(<Task {...taskWithUpdate} />);
  const updatedAt = screen.getByTestId("updated-at");
  expect(updatedAt.textContent).toBe(`Updated at: ${taskWithUpdate.updatedAt}`);
});

it("should render the completed task button", () => {
  render(<Task {...task} />);
  const completedTaskButton = screen.getByTestId("completed-status");
  expect(completedTaskButton).toBeInTheDocument();
});

it("should render the delete task button", () => {
  render(<Task {...task} />);
  const deleteTaskButton = screen.getByTestId("delete-task");
  expect(deleteTaskButton).toBeInTheDocument();
});

it("should render the edit task button", () => {
  render(<Task {...task} />);
  const editTaskButton = screen.getByTestId("edit-task");
  expect(editTaskButton).toBeInTheDocument();
});

it("should render to the view task button", () => {
  render (<Task {...task} />);
  const viewTaskButton = screen.getByTestId("view-task");
  expect(viewTaskButton).toBeInTheDocument();
});
