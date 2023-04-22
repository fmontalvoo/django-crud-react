import { useEffect, useState } from "react";

import { getTasks } from "../services/tasks";

import { TaskItem } from "./TaskItem";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.info("Pagina cargada");

    const loadTasks = async () => {
      const { data } = await getTasks();
      setTasks(data);
      console.table(data);
    };

    loadTasks();
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </ul>
    </div>
  );
}
