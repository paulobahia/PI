import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7125/",
});

export default api;