import axios from "axios";
// let API_URL = process.env.REACT_APP_ADMIN_API_Base_URL;
let API_URL = import.meta.env.REACT_APP_ADMIN_API_Base_URL;
const adminBaseApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    }
});

export default adminBaseApi