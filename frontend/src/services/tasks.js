import axios from "axios";

const apiUrl = axios.create({
    baseURL: "http://localhost:8000/svc/api"
});

export const getTasks = async () => {
    return await apiUrl.get("/v1/tasks/");
}