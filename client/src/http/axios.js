import axios from 'axios'

let authService = "http://localhost:5000/api";

let basicHost = axios.create({
    baseURL: authService
});

let authHost = axios.create({
    baseURL: authService
});

let auth_interceptor = (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

authHost.interceptors.request.use(auth_interceptor);

export {authHost, basicHost}

