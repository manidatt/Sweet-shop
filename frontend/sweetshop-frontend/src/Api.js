// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:8080/api", // your Spring Boot backend URL
// // });

// // // Attach JWT token if available
// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     req.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return req;
// // });

// // export default API;
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api",
// });

// // ✅ Add token to every request if available
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found in localStorage");
  }
  return config;
});

export default API;

