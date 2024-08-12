import axios from "axios";
import { useState, useEffect } from "react";

interface Task {
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
}

export const EditTask = () => {
  const id = window.location.pathname.split("/")[2];
  const [task, setTask] = useState<Task>();
  const editTaskHandler = () => {
    axios
      .put(`http://localhost:3000/task/${id}`, task)
      .then(() => console.log("Task updated"))
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
    <div>
      <h1>Edit Task</h1>
      {task ? (
        <div className="text-zinc-400">
          <input
            type="text"
            placeholder={task.title}
            className="w-full p-2 rounded-md"
            onKeyUp={(e) => setTask({ ...task, title: e.currentTarget.value })}
          />
          <input
            type="text"
            placeholder={task.description}
            className="w-full p-2 rounded-md"
            onKeyUp={(e) =>
              setTask({ ...task, description: e.currentTarget.value })
            }
          />
          <div>
            <input
              type="checkbox"
              id="completed"
              onKeyUp={(e) =>
                setTask({ ...task, completed: e.currentTarget.value === "on" })
              }
            />
            <label htmlFor="completed">Completed?</label>
          </div>

          <div>
            <input
              type="date"
              id="due-date"
              placeholder={task.dueDate}
              onKeyUp={(e) =>
                setTask({ ...task, dueDate: e.currentTarget.value })
              }
            />
            <label htmlFor="due-date">Due date</label>
          </div>

          <button
            className="text-xl bg-zinc-500 p-1 rounded-md"
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
