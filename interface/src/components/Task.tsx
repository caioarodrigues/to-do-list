interface TaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string | null;
}

export const Task = ({
  id,
  title,
  description,
  completed,
  dueDate,
  createdAt,
  updatedAt,
}: TaskProps) => {
  return (
    <div className="bg-red-500" card-id={id}>
      <div>
        <h2>{title}</h2>
        <button aria-checked={completed}/>
      </div>
      <div>
        <p>{description}</p>
        <div>
          <p>Due date: {dueDate}</p>
        </div>
      </div>
      <div>
        <p>Created at: {createdAt}</p>
        {updatedAt && <p>Updated at: {updatedAt}</p>}
      </div>
    </div>
  );
};
