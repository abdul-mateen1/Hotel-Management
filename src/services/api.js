import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7189/api/",
    headers: {
        "Content-Type" : "application/json",
    },
});
api.interceptors.request.use(function (config){
    const token = localStorage.getItem("token");
    if(token) {
        config.headers.Authorization  =`Bearer ${token}`;
    }
    return config;
});
export default api;