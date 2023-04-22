import axios from "axios";

const urlPath = "/v1/tasks/";
const apiUrl = axios.create({
    baseURL: "http://localhost:8000/svc/api"
});

export const getTasks = async () => await apiUrl.get(urlPath);

export const createTask = async (task) => await apiUrl.post(urlPath, task);