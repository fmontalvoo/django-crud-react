import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createTask } from "../services/tasks";

export function TaskFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((formData) => {
    createTask(formData)
      .then((res) => {
        console.table(res.data);
        navigate("/tasks");
      })
      .catch(console.error);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name=""
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>*Title is required</span>}
        <textarea
          name=""
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        >
        </textarea>
        {errors.description && <span>*Description is required</span>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
