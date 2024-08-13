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
      className={`p-2 rounded-md border-2 border-zinc-300 border-opacity-70
      w-full flex flex-col gap-4 
      ${completedTask ? "bg-green-800" : "bg-zinc-500"}`}
      card-id={id}
    >
      <div className="flex flex-col gap-0">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="text-xl">{description}</p>
        <p className="text-md">Due date: {dueDate}</p>
      </div>
      <div>
        <p>Created at: {createdAt}</p>
        {updatedAt && <p>Updated at: {updatedAt}</p>}
        <div className="flex pt-2 items-center justify-between gap-4 w-full">
          <div className="flex flex-col items-center">
            <input
              type="checkbox"
              onClick={toggleCompletedTask}
              className="w-8 h-8 rounded-sm border border-black"
            />
            <p className="text-sm">done</p>
          </div>
          <div className="flex flex-col items-center">
            <BsEye
              className="text-3xl cursor-pointer"
              onClick={() => (window.location.href = `/task/${id}`)}
            />
            <p className="text-sm">view</p>
          </div>
          <div className="flex flex-col items-center">
            <BsPencil
              className="text-3xl cursor-pointer"
              onClick={() => (window.location.href = `/edit/${id}`)}
            />
            <p className="text-sm">edit</p>
          </div>
          <div className="flex flex-col items-center">
            <BsTrash
              className="text-3xl cursor-pointer"
              onClick={() => deleteTaskHandler(id)}
            />
            <p className="text-sm">delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};
