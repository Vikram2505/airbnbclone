import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
    // baseURL: "https://backend-airbnb-clone.vercel.app",
    headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    }
});

// API.interceptors.request.use((req) => {
//   console.log(req,'req');
//     if (localStorage?.getItem("airSecret")) {
//         req.headers?.Authorization = `Bearer ${
//           JSON.parse(localStorage.getItem("airSecret")).token
//         }`;
//       }
//       return req;
// })

export const getAllHomes = (formData) => API.post("/home/get-all-homes", formData);

export const registerHomeAPI = (formData) => API.post("/home/create-home", formData).catch((err)=> {
  console.log(err,'api err');
});

export const signIn = (formData) => API.post("/user/signin", formData);