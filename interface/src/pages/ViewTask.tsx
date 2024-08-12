import { useState, useEffect } from "react";

interface Task {
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export const ViewTask = () => {
  const [task, setTask] = useState<Task>();
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetch(`http://localhost:3000/task/${id}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Task</h1>
      {task ? (
        <div className="text-zinc-400">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due date: {task.dueDate}</p>
          <p>Created at: {task.createdAt}</p>
          <p>Updated at: {task.updatedAt}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};