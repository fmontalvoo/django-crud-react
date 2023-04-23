import { Link } from "react-router-dom";

import { deleteTask } from "../services/tasks";

export function TaskItem({ task }) {
  const onDeleteTask = (id) => {
    if (confirm("Are your sure?")) {
      deleteTask(id)
        .then(() => {
          location.reload();
          console.warn("Task deleted");
        })
        .catch(toast.error);
    }
  };

  return (
    <li className="bg-zinc-800 p-3 hover:bg-zinc-600">
      <div className="flex justify-between">
        <div>
          <Link to={{ pathname: `/update-task/${task.id}` }}>
            <h3 className="font-bold uppercase">{task.title}</h3>
          </Link>
          <p className="text-slate-400">{task.description}</p>
        </div>
        <div>
          <button
            className="bg-red-500 p-1 rounded-lg w-28 mt-2"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
