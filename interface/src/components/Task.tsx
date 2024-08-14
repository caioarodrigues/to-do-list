import { BsTrash, BsPencil, BsEye } from "react-icons/bs";
import { useTaskHandler } from "../hooks/useTaskHandler";

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
  const {
    toggleCompletedTaskHandler,
    deleteTaskHandler,
    goToEditTaskScreenHandler,
    goToViewTaskScreenHandler,
  } = useTaskHandler();
  const currentTask = {
    id,
    title,
    description,
    completed,
    dueDate,
    createdAt,
    updatedAt,
  };

  return (
    <div
      className={`p-2 md:p-1 rounded-md border-2 border-zinc-300 
      border-opacity-70 w-full flex flex-col gap-4 md:hover:bg-zinc-600 
      md:hover:border-zinc-400 ease-in transition-all md:justify-between
      ${completed ? "bg-green-800" : "bg-zinc-500"}`}
      card-id={id}
    >
      <div className="flex flex-col gap-0 overflow-hidden">
        <h2
          className="text-3xl font-medium md:text-xl border-b-2 border-b-white 
        border-opacity-30"
        >
          {title}
        </h2>
        <p className="text-xl md:text-md text-clip">{description}</p>
        <p className="text-md md:text-sm">Due date: {dueDate}</p>
      </div>
      <div>
        <p className="text-md md:text-sm">Created at: {createdAt}</p>
        {updatedAt && (
          <p className="text-md md:text-sm">Updated at: {updatedAt}</p>
        )}
        <div className="flex pt-2 items-center justify-between gap-4 w-full">
          <div className="flex flex-col items-center">
            <input
              type="checkbox"
              defaultChecked={completed}
              onClick={() => toggleCompletedTaskHandler(currentTask)}
              className="w-8 h-8 md:w-6 md:h-6 rounded-sm border border-black 
              cursor-pointer"
            />
            <p className="text-sm md:text-xs">done</p>
          </div>
          <div className="flex flex-col items-center">
            <BsEye
              className="text-3xl md:text-2xl cursor-pointer"
              onClick={() => goToViewTaskScreenHandler(id)}
            />
            <p className="text-sm md:text-xs">view</p>
          </div>
          <div className="flex flex-col items-center">
            <BsPencil
              className="text-3xl md:text-2xl cursor-pointer"
              onClick={() => goToEditTaskScreenHandler(id)}
            />
            <p className="text-sm md:text-xs">edit</p>
          </div>
          <div className="flex flex-col items-center">
            <BsTrash
              className="text-3xl md:text-2xl cursor-pointer"
              onClick={() => deleteTaskHandler(id)}
            />
            <p className="text-sm md:text-xs">delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};
