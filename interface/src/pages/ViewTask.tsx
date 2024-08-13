import { BsArrowLeftCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { ITask } from "../types";

type TaskType = Pick<
  ITask,
  "completed" | "createdAt" | "description" | "dueDate" | "title" | "updatedAt"
>;

export const ViewTask = () => {
  const [task, setTask] = useState<TaskType>();
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetch(`http://localhost:3000/task/${id}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="self-start w-full p-2">
      <h1 className="text-4xl font-bold mb-4">Task #{id}</h1>
      {task ? (
        <div className="text-zinc-400">
          <h2>
            Title:{" "}
            <span className="text-xl font-semibold mb-2">{task.title}</span>
          </h2>
          <p>
            Completed:{" "}
            <span className="text-xl font-medium mb-2">
              {task.completed ? "Yes" : "No"}
            </span>
          </p>
          <p>
            Description:{" "}
            <span className="text-xl font-medium mb-2">{task.description}</span>
          </p>
          <p>
            Due date:{" "}
            <span className="text-xl font-light mb-2">{task.dueDate}</span>
          </p>
          <p>
            Created at:{" "}
            <span className="text-xl font-light mb-2">{task.createdAt}</span>
          </p>
          <p>
            Updated at:{" "}
            <span className="text-xl font-light mb-2">{task.updatedAt}</span>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex gap-2 items-center py-2">
        <BsArrowLeftCircle
          className="text-4xl cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <p className="text-white font-normal">Back to initial page</p>
      </div>
    </div>
  );
};
