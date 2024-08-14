import { useSideMenu } from "../hooks/useSideMenu";

export const SideMenu = () => {
  const id = window.location.pathname.split("/")[2];
  const { currentTask, updateCurrentTaskHandler, newTaskHandler } =
    useSideMenu();

  return (
    <div
      className={`min-h-screen h-full bg-zinc-800 hidden md:flex p-2 flex-col gap-2
      border-r-2 border-zinc-500 relative col-span-3 ${
        id && "opacity-30 cursor-not-allowed"
      }`}
    >
      <a href="" className="text-2xl font-medium text-white">
        New task
      </a>
      <input
        type="text"
        placeholder="Title"
        className="p-2 rounded-md border-zinc-500 border-2 border-opacity-70 outline-none
        text-zinc-500"
        value={currentTask.title}
        onChange={(e) => updateCurrentTaskHandler("title", e.currentTarget.value)}
      />
      <textarea
        name=""
        id=""
        placeholder="Add a descrition"
        className="px-2 py-4 rounded-md border-zinc-500 border-2 border-opacity-70 
        outline-none text-zinc-500"
        value={currentTask.description}
        onChange={(e) => updateCurrentTaskHandler("description", e.currentTarget.value)}
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="">Set a due date</label>
        <input
          type="date"
          name=""
          id=""
          min={new Date().toISOString().split("T")[0]}
          className="p-2 rounded-md border-zinc-500 border-2 border-opacity-70 
          text-zinc-500 outline-none"
          value={currentTask.dueDate}
          onChange={(e) => updateCurrentTaskHandler("dueDate", e.currentTarget.value)}
        />
      </div>
      <span
        onClick={() => newTaskHandler(currentTask, id)}
        className={`outline-none p-2 rounded-md border-2 border-zinc-400 border-opacity-70
        bg-blue-500 md:hover:bg-blue-600 transition-colors delay-100
        ${id ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        Create
      </span>
    </div>
  );
};
