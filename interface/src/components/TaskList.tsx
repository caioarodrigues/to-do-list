import { Task } from "./Task";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="flex flex-col gap-2 w-full flex-1">
      <h2 className="text-4xl font-medium">List of all tasks</h2>
      {tasks.map(
        (
          { id, title, description, completed, dueDate, createdAt, updatedAt },
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
  );
};
