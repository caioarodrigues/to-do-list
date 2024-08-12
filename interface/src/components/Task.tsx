import { useState } from "react";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string | null;
}

export const Task = ({
  id,
  title,
  description,
  completed,
  dueDate,
  createdAt,
  updatedAt,
}: TaskProps) => {
  const [completedTask, setCompletedTask] = useState(completed);
  const toggleCompletedTask = () => setCompletedTask(status => !status);

  return (
    <div
      className={`p-2 rounded-md border-2 border-zinc-300 border-opacity-70
      w-full ${completedTask ? "bg-green-800" : "bg-zinc-500"}`}
      card-id={id}
    >
      <div className="flex gap-2 justify-center items-center">
        <input
          type="checkbox"
          onClick={toggleCompletedTask}
          className="w-6 h-6 rounded-sm border border-black"
        />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div>
        <p>{description}</p>
        <div>
          <p>Due date: {dueDate}</p>
        </div>
      </div>
      <div>
        <p>Created at: {createdAt}</p>
        {updatedAt && <p>Updated at: {updatedAt}</p>}
      </div>
    </div>
  );
};
