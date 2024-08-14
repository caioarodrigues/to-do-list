/* import { ITask } from "../../types";
import { useSideMenu } from "../../hooks/useSideMenu";
import { useTask } from "../../hooks/useTask";
import { render, screen, renderHook, act } from "@testing-library/react";

const task: ITask = {
  id: "1",
  title: "Task 1",
  description: "Description of task 1",
  completed: false,
  dueDate: "2024-09-30",
  createdAt: "2024-09-20",
  updatedAt: null,
};

it("Should create a new task", async () => {
  const { result: { current: { newTaskHandler }} } = renderHook(() => useSideMenu());
  
  expect(result.current.currentTask).toStrictEqual({
    title: "",
    description: "",
    dueDate: "",
  });
}); */