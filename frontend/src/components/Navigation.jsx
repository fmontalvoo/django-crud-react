import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <Link to="/tasks">
      <h1>Tasks App</h1>
    </Link>
    <Link to="/task-create">Create task</Link>
  </nav>
);
