import axios from "axios";

const urlPath = "/v1/tasks";
const apiUrl = axios.create({
    baseURL: "http://localhost:8000/svc/api"
});

export const getTasks = async () => await apiUrl.get(`${urlPath}/`);

export const getTask = async (id) => await apiUrl.get(`${urlPath}/${id}/`);

export const createTask = async (task) => await apiUrl.post(`${urlPath}/`, task);

export const updateTask = async (id, task) => await apiUrl.put(`${urlPath}/${id}/`, task);

export const deleteTask = async (id) => await apiUrl.delete(`${urlPath}/${id}/`);