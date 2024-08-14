import { useEffect } from "react";
import { TaskList } from "../components/TaskList";
import { FloatingButton } from "../components/FloatingButton";
import { useGlobalContext } from "../hooks/useGlobalContext";
import axios from "axios";

export const Index = () => {
  const { tasks, setTasks } = useGlobalContext();

  useEffect(() => {
    axios
      .get("http://localhost:3000/task/list-all")
      .then(({ data }) => setTasks(data))
      .catch((error) => {
        console.error(error);
      });
  }, [setTasks]);

  return (
    <div className="p-2 pt-14 md:pt-0 w-full">
      <TaskList taskList={tasks} />
      <FloatingButton
        text="+"
        handler={() => (window.location.href = "/new")}
      />
    </div>
  );
}