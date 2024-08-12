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
    <div>
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
