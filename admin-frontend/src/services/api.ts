import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";
import Cookies from "js-cookie";

const getBaseUrl = (): string  => {
  return import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
}
  
const api: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      Cookies.remove("token");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

interface LoginData {
  email: string;
  password: string;
}

export const loginAdmin = (data: LoginData) =>
  api.post("/admin/login", data);

export const getAdmin = () =>
  api.get(`/admin/me`);

export const getAllPyqs = () =>
  api.get("/pyq/all");

export const getPyq = (id: string) =>
  api.get(`/pyq/get/${id}`);

export const createPyq = (data: FormData) =>
  api.post("/pyq/new", data);

export const deletePyq = (id: string) => 
  api.get(`/pyq/delete/${id}`);