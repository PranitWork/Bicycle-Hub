import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: baseURL,
      headers: {
    "Content-Type": "application/json",
  },
});

export default instance;