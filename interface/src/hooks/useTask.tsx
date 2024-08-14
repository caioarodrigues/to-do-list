import { useGlobalContext } from "../hooks/useGlobalContext";
import { ITask } from "../types";
import axios from "axios";

export const useTask = () => {
  const { tasks, setTasks } = useGlobalContext();

  const toggleCompletedTaskHandler = (currentTask: ITask) => {
    const { id } = currentTask;
    currentTask.completed = !currentTask.completed;

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    return axios
      .put(`http://localhost:3000/task/${id}`, currentTask)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const deleteTaskHandler = (id: string) => {
    return axios
      .delete(`http://localhost:3000/task/${id}`)
      .then((response) => console.log(response))
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) =>
        alert(`An error occurred while trying to delete this task: ${error}`)
      );
  };

  const goToViewTaskScreenHandler = (id: string) => (window.location.href = `/task/${id}`);
  const goToEditTaskScreenHandler = (id: string) => (window.location.href = `/edit/${id}`);

  return {
    toggleCompletedTaskHandler,
    deleteTaskHandler,
    goToViewTaskScreenHandler,
    goToEditTaskScreenHandler,
  };
};
