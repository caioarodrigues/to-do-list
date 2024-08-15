import axios from "axios";
import { useState, useEffect } from "react";
import { ITask } from "../types";

type Task = Pick<ITask, "title" | "description" | "completed" | "dueDate">;

export const EditTask = () => {
  const id = window.location.pathname.split("/")[2];
  const [task, setTask] = useState<Task>({
    completed: false,
    description: "",
    dueDate: "",
    title: "",
  });
  const editTaskHandler = async () => {
    await axios
      .put(`http://localhost:3000/task/${id}`, task)
      .then(() => console.log("Task updated"))
      .then(() => (window.location.href = "/"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/task/${id}`)
      .then(({ data }) => setTask(data))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="pt-14 md:pt-0 w-full md:w-3/4">
      {task ? (
        <div className="text-zinc-400 flex flex-col gap-2">
          <h1 className="text-4xl text-white font-semibold">Edit Task</h1>
          <input
            type="text"
            value={task.title}
            className="w-full p-2 rounded-md outline-none"
            onChange={(e) => setTask({ ...task, title: e.currentTarget.value })}
          />
          <input
            type="text"
            value={task.description}
            className="w-full p-2 rounded-md outline-none"
            onChange={(e) =>
              setTask({ ...task, description: e.currentTarget.value })
            }
          />
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="completed"
              className="outline-none w-8 h-8 md:w-6 md:h-6 rounded-md"
              defaultChecked={task.completed}
              onChange={(e) =>
                setTask({ ...task, completed: e.currentTarget.value === "on" })
              }
            />
            <label htmlFor="completed" className="text-white">
              Completed?
            </label>
          </div>

          <div className="flex gap-2 items-center justify-between md:justify-start">
            <label htmlFor="due-date" className="text-white">
              Due date
            </label>
            <input
              type="date"
              id="due-date"
              value={task.dueDate}
              min={new Date().toISOString().split("T")[0]}
              className="p-1 rounded-sm outline-none"
              onChange={(e) =>
                setTask({ ...task, dueDate: e.currentTarget.value })
              }
            />
          </div>

          <button
            className="text-xl bg-blue-500 p-1 rounded-md text-white md:hover:bg-blue-600
            transition-colors ease-in"
            onClick={editTaskHandler}
          >
            Save
          </button>
        </div>
      ) : (
        <div>Fetching data from database...</div>
      )}
    </div>
  );
};
