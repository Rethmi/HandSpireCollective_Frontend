// import  axios from "axios";

// export  const backendApi = axios.create({
//     baseURL: 'http://localhost:5000/api'
// });

// backendApi.interceptors.request.use(
//     (config) => {
//      const token =   localStorage.getItem("token");
//      if(token){
//          config.headers.Authorization = `Bearer ${token}`;
//      }
//      return config;
//     }, (error) =>{
//         return Promise.reject((error))
//     }
// )
// frontend/src/api.ts
import axios from "axios";

export const backendApi = axios.create({
    //baseURL: 'http://localhost:5000/api'
    baseURL:'https://hand-spire-collective-backend.vercel.app/api'
});

backendApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},

    (error) => {
        return Promise.reject(error);
    }
);