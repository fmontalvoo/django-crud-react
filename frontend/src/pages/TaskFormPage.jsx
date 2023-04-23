import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { createTask, getTask, updateTask } from "../services/tasks";

export function TaskFormPage() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const {
          data: { title, description },
        } = await getTask(id);

        setValue("title", title);
        setValue("description", description);
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit((formData) => {
    let promise = undefined;

    if (id) {
      promise = updateTask(id, formData);
    } else {
      promise = createTask(formData);
    }

    promise
      .then((res) => {
        console.table(res.data);
        toast.success("Task saved");
        navigate("/tasks");
      })
      .catch(toast.error);
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>*Title is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        >
        </textarea>
        {errors.description && <span>*Description is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
