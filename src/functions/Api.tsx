import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
});

Api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }

    return config;
});

export default Api;