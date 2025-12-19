// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'
// import AppContextProvider from './context/AppContext.tsx'
// import DoctorContextProvider from './context/DoctorContext.tsx'
// import AdminContextProvider from './context/AdminContext.tsx'


// // createRoot(document.getElementById('root')!).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <DoctorContextProvider>
//       <AdminContextProvider>
//         <AppContextProvider>
//           <App />
//         </AppContextProvider>
//       </AdminContextProvider>
//     </DoctorContextProvider>
//   </BrowserRouter>,
// )
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
);