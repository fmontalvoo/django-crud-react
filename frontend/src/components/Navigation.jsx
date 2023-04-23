import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-around py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      </Link>
      <button
        onClick={() => navigate("/create-task")}
        className="bg-indigo-500 px-3 py-2 rounded-lg"
      >
        Create task
      </button>
    </nav>
  );
};
