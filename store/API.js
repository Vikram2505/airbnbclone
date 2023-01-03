import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
    }
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("airSecret")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("airSecret")).token
        }`;
      }
      return req;
})

export const getAllHomes = (formData) => API.post("/home/get-all-homes", formData);

export const registerHomeAPI = (formData) => API.post("/home/create-home", formData);

