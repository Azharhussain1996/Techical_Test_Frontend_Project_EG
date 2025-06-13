import axios from "axios";
// let API_URL = process.env.REACT_APP_ADMIN__API_URL;
let API_URL = import.meta.env.VITE_APP_ADMIN_API_URL;

const adminApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    }
});

export default adminApi