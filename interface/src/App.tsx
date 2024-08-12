import { useState, useEffect } from "react";
import { Task } from "./components/Task";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/task/list-all")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <Task
        title="Learn React"
        description="Learn how to use React"
        completed={false}
      />
    </>
  );
}

export default App;
