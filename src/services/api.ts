// // import axios, { AxiosError } from "axios";
 
// // import { refreshTokens } from "./auth";

// // const api = axios.create({
// //     baseURL: "http://localhost:5000/api/v1"
// //     // baseURL:"https://rad72-deploy-be.vercel.app/api/v1"
// // })

// // const PUBLIC_ENDPOINTS = ["/auth/login","/auth/register"]

// // api.interceptors.request.use((config) => {
// //     const token = localStorage.getItem("accessToken")

// //     const isPublic = PUBLIC_ENDPOINTS.some((url) => config.url?.includes(url))

// //     if (!isPublic && token) {
// //         config.headers.Authorization = `Bearer ${token}`
// //     }

// //     return config
// // })

// // api.interceptors.response.use((response)=>{
// //     return response

// // },
// // async (error: AxiosError) => {
    
// //         const originalRequest:any = error.config

// //         if (error.response?.status === 401 && !PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url)) && originalRequest._retry) {
// //             originalRequest._retry = true
// //             // refresh token already called

// //         try{
// //             const refreshToken = localStorage.getItem("refreshToken")

// //             if (!refreshToken) {
// //                 throw new Error ("No refresh token available")
// //             }

// //             const data = await refreshTokens(refreshToken)
// //             localStorage.setItem("accessToken", data.accessToken)

// //             originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

// //             return axios(originalRequest)
// //         } catch (refreshError) {
// //             localStorage.removeItem("refreshToken")
// //             localStorage.removeItem("accessToken")
// //             window.location.href = "/login"
// //             console.error(refreshError)

// //             return Promise.reject(refreshError)
// //         }
// //     } 
// //     return Promise.reject(error)
// // })

// // export default api
// import axios, { AxiosError } from "axios";
// import { refreshTokens } from "./auth";

// const api = axios.create({
//     //baseURL: "http://localhost:5000/api/v1"
//      baseURL:'https://hand-spire-collective-backend.vercel.app/api/v1'
// });

// const PUBLIC_ENDPOINTS = ['/user/login', "/user/register", "/user/refresh"];

// let isRefreshing = false;
// let failedQueue: { resolve: (value: any) => void; reject: (reason?: any) => void; }[] = [];   // 401 errors queue , it hold errors since get a refresh token

// const processQueue = (error: any, token: string | null = null) => {
//     failedQueue.forEach(prom => {
//         if (error) {
//             prom.reject(error);
//         } else {
           
//             prom.resolve(token); 
//         }
//     });
//     failedQueue = [];
// };

// api.interceptors.response.use((response) => {
//     return response;
// },
//     async (error: AxiosError) => {
//         const originalRequest: any = error.config;
    
//         if (originalRequest._retry) {
//             return Promise.reject(error);
//         }

//         if (error.response?.status === 401 && 
//             !PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url))) {

//             if (isRefreshing) {
                
//                 return new Promise(function(resolve, reject) {
//                     failedQueue.push({ resolve, reject });
//                 }).then(token => {
//                     originalRequest.headers.token = token;
//                     return axios(originalRequest);
//                 }).catch(err => {
//                     return Promise.reject(err);
//                 });
//             }
            
//             originalRequest._retry = true;
//             isRefreshing = true;

//             const refreshToken = localStorage.getItem("refresh_token");

//             if (!refreshToken) {
                
//                 isRefreshing = false;
//                 localStorage.removeItem("refresh_token");
//                 localStorage.removeItem("token");
//                 window.location.href = "/login";
//                 return Promise.reject(new Error("No refresh token available"));
//             }

//             try {
               
//                 const { accessToken } = await refreshTokens(refreshToken);
//                 localStorage.setItem("token", accessToken); 
                
//                 originalRequest.headers.token = accessToken;
                
//                 processQueue(null, accessToken);
                
//                 isRefreshing = false;
                
//                 return api(originalRequest); 
//             } catch (refreshError: any) {
               
//                 processQueue(refreshError, null);
//                 isRefreshing = false;
//                 localStorage.removeItem("refresh_token");
//                 localStorage.removeItem("token");
//                 window.location.href = "/login";
//                 return Promise.reject(refreshError);
//             }
//         }

//         return Promise.reject(error);   // pass throught other error (without 401)
//     }
// );

// export default api;