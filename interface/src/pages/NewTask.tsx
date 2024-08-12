import axios from "axios";
import { useState } from "react";

export const NewTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const newTaskHandler = () => {
    axios
      .post("http://localhost:3000/task", task)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex justify-between text-2xl items-center font-medium">
        <p onClick={() => (window.location.href = "/")}>X</p>
        <a className="bg-zinc-500 p-2 rounded-md" onClick={newTaskHandler}>
          Save
        </a>
      </div>

      <div>
        <input
          type="text"
          placeholder={"Add a title"}
          className="text-zinc-400 w-full p-2 rounded-md border-2 border-zinc-300 border-opacity-70"
          onKeyUp={(e) => setTask({ ...task, title: e.currentTarget.value })}
        />
        <textarea
          placeholder={"Add a description"}
          className="text-zinc-400 w-full p-2 rounded-md border-2 border-zinc-300 border-opacity-70"
          onKeyUp={(e) =>
            setTask({ ...task, description: e.currentTarget.value })
          }
        />

        <div className="flex w-full justify-between">
          <label htmlFor="date" className="text-xl">
            Set a due date
          </label>
          <input
            type="date"
            placeholder={"2021-01-01"}
            id="date"
            className="w-max text-zinc-400 p-2 rounded-sm"
            onChange={(e) =>
              setTask({ ...task, dueDate: e.currentTarget.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
