export const SideMenu = () => {
  return (
    <div className="w-1/3 h-screen bg-red-500 hidden md:flex p-2 flex-col gap-2">
      <a href="" className="text-2xl font-medium">
        New task
      </a>
      <input
        type="text"
        placeholder="Title"
        className="p-2 rounded-md border-zinc-500 border-2 border-opacity-70"
      />
      <textarea
        name=""
        id=""
        placeholder="Add a descrition"
        className="px-2 py-4 rounded-md border-zinc-500 border-2 border-opacity-70"
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="">Set a due date</label>
        <input
          type="date"
          name=""
          id=""
          className="p-2 rounded-md border-zinc-500 border-2 border-opacity-70 
          text-zinc-500"
        />
      </div>
      <a
        href=""
        className="bg-orange-500 p-2 rounded-md border-2 border-zinc-500 border-opacity-70"
      >
        Create
      </a>
    </div>
  );
};
