import { Task } from "./Task";
import { ITask } from "../types";
import { useGlobalContext } from "../hooks/useGlobalContext";

interface TaskListProps {
  taskList: ITask[];
}

export const TaskList = ({ taskList }: TaskListProps) => {
  const { tasks, setTasks } = useGlobalContext();
  setTasks(taskList);
  
  const doneTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <div>
        <h2 className="text-4xl font-medium">
          List of all tasks
        </h2>
        <div
          className="flex flex-col gap-2 w-full md:flex-row md:flex-grow-0 md:flex-wrap
        md:grid md:grid-cols-4 pt-2"
        >
          {pendingTasks.map(
            (
              {
                id,
                title,
                description,
                completed,
                dueDate,
                createdAt,
                updatedAt,
              },
              index
            ) => (
              <Task
                key={index}
                id={id}
                title={title}
                description={description}
                completed={completed}
                dueDate={dueDate}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            )
          )}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-medium">Done tasks</h2>
        <div
          className="flex flex-col gap-2 w-full md:flex-row md:flex-grow-0 md:flex-wrap
        md:grid md:grid-cols-4 pt-2"
        >
          {doneTasks.map(
            (
              {
                id,
                title,
                description,
                completed,
                dueDate,
                createdAt,
                updatedAt,
              },
              index
            ) => (
              <Task
                key={index}
                id={id}
                title={title}
                description={description}
                completed={completed}
                dueDate={dueDate}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
