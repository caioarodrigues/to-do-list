import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";
import { FloatingButton } from "./components/FloatingButton";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/task/list-all")
      .then(({ data }) => setTasks(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-2 pt-14 w-full">
      <TaskList tasks={tasks} />
      <FloatingButton
        text="+"
        handler={() => (window.location.href = "/new")}
      />
    </div>
  );
}

export default App;
