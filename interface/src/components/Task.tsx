import { useState } from "react";
import { BsTrash, BsPencil, BsEye } from "react-icons/bs";
import axios from "axios";

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
  const toggleCompletedTask = () => setCompletedTask((status) => !status);
  const deleteTaskHandler = (id: string) => {
    return axios
      .delete(`http://localhost:3000/task/${id}`)
      .then((response) => console.log(response))
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  return (
    <div
      className={`py-2 px-4 rounded-md border-2 border-zinc-300 border-opacity-70
      w-full ${completedTask ? "bg-green-800" : "bg-zinc-500"}`}
      card-id={id}
    >
      <div className="flex gap-2">
        <div className="flex gap-2 w-full">
          <BsEye
            className="text-2xl cursor-pointer"
            onClick={() => (window.location.href = `/task/${id}`)}
          />
          <BsPencil
            className="text-2xl cursor-pointer"
            onClick={() => (window.location.href = `/edit/${id}`)}
          />
          <BsTrash
            className="text-2xl cursor-pointer"
            onClick={() => deleteTaskHandler(id)}
          />
          <input
            type="checkbox"
            onClick={toggleCompletedTask}
            className="w-6 h-6 rounded-sm border border-black"
          />
        </div>
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
