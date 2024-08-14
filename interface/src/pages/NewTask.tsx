import axios from "axios";
import { useState } from "react";

export const NewTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const newTaskHandler = () => {
    const emptyFields = Object.values(task).some((field) => field === "");

    if (emptyFields) return alert("Please fill all the fields");

    axios
      .post("http://localhost:3000/task", task)
      .then((response) => {
        console.log(response);
        setTask({ title: "", description: "", dueDate: "" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full pt-14">
      <h2 className="text-4xl text-center">New task</h2>
      <div>
        <div className="flex flex-col relative gap-2 flex-1">
          <input
            type="text"
            placeholder={"Add a title"}
            className="text-zinc-600 w-full p-2 rounded-md border-2 border-zinc-300 
            border-opacity-70 outline-none"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.currentTarget.value })}
          />
          <textarea
            placeholder={"Add a description"}
            className="text-zinc-600 w-full p-2 rounded-md border-2 border-zinc-300 
            border-opacity-70 outline-none"
            value={task.description}
            onChange={(e) =>
              setTask({ ...task, description: e.currentTarget.value })
            }
          />

          <div className="flex w-full justify-between items-center py-4">
            <label htmlFor="date" className="text-xl">
              Set a due date
            </label>
            <input
              type="date"
              placeholder={"2021-01-01"}
              id="date"
              className="w-max text-zinc-400 p-2 rounded-sm"
              min={new Date().toISOString().split("T")[0]}
              value={task.dueDate.split("T")[0]}
              onChange={(e) => {
                const dueDate = new Date(e.currentTarget.value);

                setTask({ ...task, dueDate: dueDate.toISOString() });
              }}
            />
          </div>

          <p
            className="cursor-pointer p-2 text-xl bg-zinc-500 text-white rounded-md"
            onClick={newTaskHandler}
          >
            Save task
          </p>
        </div>
      </div>
    </div>
  );
};
