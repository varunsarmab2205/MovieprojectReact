import axios from "axios";

const api = axios.create({
  baseURL: "https://moviebackend-negq.onrender.com"
});

export default api;