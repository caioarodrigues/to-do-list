import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";
import axios from "axios";
import "./App.css";

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
    <>
      <div>
        <h1>Tasks</h1>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
