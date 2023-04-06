import axios from "axios";

const http = axios.create({ baseURL: import.meta.env.VITE_BACK_URL });

http.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    (res) => {
        return res;
    },
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};

export default httpService;
