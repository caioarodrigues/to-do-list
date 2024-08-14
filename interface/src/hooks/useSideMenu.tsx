import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ITask } from "../types";

type Task = Pick<ITask, "title" | "description" | "dueDate">;

export const useSideMenu = () => {
  const [currentTask, setCurrentTask] = useState<Task>({
    title: "",
    description: "",
    dueDate: "",
  });
  const { tasks, setTasks } = useGlobalContext();

  const updateCurrentTaskHandler = (field: string, value: string) => {
    setCurrentTask({ ...currentTask, [field]: value });
  };

  const cleanCurrentTaskHandler = () => {
    setCurrentTask({ title: "", description: "", dueDate: "" });
  };

  const newTaskHandler = (task: Task, id?: string) => {
    const emptyFields = Object.values(task).some((field) => field === "");

    if (id) return;
    if (emptyFields) return alert("Please fill all the fields");

    cleanCurrentTaskHandler();
    axios
      .post("http://localhost:3000/task", task)
      .then((response) => {
        const { data } = response;
        console.log(response);

        data.dueDate = data.dueDate.split("T")[0];
        data.createdAt = data.createdAt.split("T")[0];

        if (data.updatedAt) data.updatedAt = data.updatedAt.split("T")[0];

        return data;
      })
      .then((data) => setTasks([...tasks, data]))
      .catch((error) => console.error(error));
  };

  return {
    currentTask,
    updateCurrentTaskHandler,
    newTaskHandler,
  };
};
