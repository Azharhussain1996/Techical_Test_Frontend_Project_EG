import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_APP_API_URL;
const designApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default designApi;