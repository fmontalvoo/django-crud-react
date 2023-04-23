import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { deleteTask } from "../services/tasks";

export function TaskItem({ task }) {
  const onDeleteTask = (id) => {
    if (confirm("Are your sure?")) {
      deleteTask(id)
        .then(() => {
          location.reload();
          toast.success("Task deleted");
        })
        .catch(toast.error);
    }
  };

  return (
    <li>
      <div>
        <dl>
          <dt>
            <Link to={{ pathname: `/update-task/${task.id}` }}>
              <h3>{task.title}</h3>
            </Link>
          </dt>
          <dd>
            <p>{task.description}</p>
          </dd>
        </dl>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}
