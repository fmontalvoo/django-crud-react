import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/create-task" element={<TaskFormPage />} />
        <Route path="/update-task/:id" element={<TaskFormPage />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
