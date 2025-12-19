// // // import { AuthProvider } from './context/authContext';
// // // import Router from './routes';



// // // function App() {
// // //   return ( 
// // //     <AuthProvider>
// // //       <Router/>
// // //     </AuthProvider>
// // // );

// // // }

// // // export default App;

// // import { useContext } from 'react'
// // import { Route, Routes } from 'react-router-dom'
// // import { ToastContainer } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css'

// // import { AdminContext } from './context/AdminContext'
// // import { DoctorContext } from './context/DoctorContext'
// // import { AppContext } from './context/AppContext'

// // import Navbar from './component/Navbar'
// // import Sidebar from './component/SideBar'
// // import Footer from './component/Footer'

// // import Login from './pages/LoginPage'
// // // import ForgetPassword from './pages/ForgetPassword'

// // // Admin pages
// // import Dashboard from './pages/admin/AdminDashboard'
// // import AllApointment from './pages/admin/AllAppointments'
// // import AddDoctor from './pages/admin/AddDoctor'
// // import DoctorsList from './pages/admin/DoctorsList'

// // // Doctor pages
// // import DoctorDashboard from './pages/doctor/Dashboard'
// // import DoctorApointment from './pages/doctor/DoctorAppointment'
// // import DoctorProfile from './pages/doctor/DoctorProfile'

// // // User pages
// // import Home from './pages/Home'
// // import Doctor from './pages/Doctor'
// // import About from './pages/About'
// // // import Contact from './pages/Contact'
// // // import MyProfile from './pages/MyProfile'
// // import MyAppointment from './pages/MyAppointment'
// // import Appointment from './pages/Appointment'
// // // import ResetPassword from './pages/ResetPassword'

// // const App = () => {
// //   const aToken = useContext(AdminContext)?.aToken
// //   const dToken = useContext(DoctorContext)?.dToken
// //   const { token } = useContext(AppContext)

// //   const isAdmin = !!aToken   // value convert to boolean
// //   const isDoctor = !!dToken
// //   const isUser = !!token

// //   // Admin / Doctor Dashboard Layout
// //   if (isAdmin || isDoctor) {
// //     return (
// //       <div className='bg-[#F8F9FD]'>
// //         <ToastContainer />
// //         <Navbar />
// //         <div className='flex items-start'>
// //           <Sidebar />
// //           <Routes>
           

            
// //           </Routes>
// //         </div>
// //       </div>
// //     )
// //   }

// //   // Regular User Layout
// //   return (
// //     <div className='mx-4 sm:mx-[10%]'>
// //       <ToastContainer />
// //       <Navbar />
// //       <Routes>
// //         <Route path='/' element={<Home />} />
// //         <Route path='/doctors' element={<Doctor />} />
// //         <Route path='/doctors/:speciality' element={<Doctor />} />
// //         <Route path='/login' element={<Login />} />
// //         {/* <Route path='/login' element={<Login />} />
// //         <Route path='/forget-password' element={<ForgetPassword />} /> */}
// //         {/* <Route path='/reset-password/:token' element={<ResetPassword />} />
// //         <Route path='/about' element={<About />} />
// //         <Route path='/contact' element={<Contact />} /> */}
// //         <Route path='/my-appointments' element={<MyAppointment />} />
// //         {/* <Route path='/my-profile' element={<MyProfile />} /> */}
// //         <Route path='/appointment/:docId' element={<Appointment />} />
// //       </Routes>
// //       <Footer />
// //     </div>
// //   )
// // }

// // export default App
// import { useContext } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// import { AdminContext } from './context/AdminContext'
// import { DoctorContext } from './context/DoctorContext'
// import { AppContext } from './context/AppContext'

// import Navbar from './component/Navbar'
// import Sidebar from './component/SideBar'
// import Footer from './component/Footer'

// import Login from './pages/LoginPage'
// // import ForgetPassword from './pages/ForgetPassword'

// // Admin pages
// import Dashboard from './pages/admin/AdminDashboard'
// import AllApointment from './pages/admin/AllAppointments'
// import AddDoctor from './pages/admin/AddDoctor'
// import DoctorsList from './pages/admin/DoctorsList'

// // Doctor pages
// import DoctorDashboard from './pages/doctor/Dashboard'
// import DoctorApointment from './pages/doctor/DoctorAppointment'
// import DoctorProfile from './pages/doctor/DoctorProfile'

// // User pages
// import Home from './pages/Home'
// import Doctor from './pages/Doctor'
// import About from './pages/About'
// // import Contact from './pages/Contact'
// // import MyProfile from './pages/MyProfile'
// import MyAppointment from './pages/MyAppointment'
// import Appointment from './pages/Appointment'
// // import ResetPassword from './pages/ResetPassword'

// const App = () => {
//   const aToken = useContext(AdminContext)?.aToken
//   const dToken = useContext(DoctorContext)?.dToken
//   const { token } = useContext(AppContext)

//   const isAdmin = !!aToken   // value convert to boolean
//   const isDoctor = !!dToken
//   const isUser = !!token

//   // Admin / Doctor Dashboard Layout
//   if (isAdmin || isDoctor) {
//     return (
//       <div className='bg-[#F8F9FD]'>
//         <ToastContainer />
//         <Navbar />
//         <div className='flex items-start'>
//           <Sidebar />
//           <Routes>
//             {/* Admin Routes */}
//             {isAdmin && (
//               <>
//                 <Route path='/' element={<DoctorDashboard />} />
//                 <Route path='/admin-dashboard' element={<Dashboard />} />
//                 <Route path='/all-appointments' element={<AllApointment />} />
//                 <Route path='/add-doctor' element={<AddDoctor />} />
//                 <Route path='/doctor-list' element={<DoctorsList />} />
//               </>
//             )}

//             {/* Doctor Routes */}
//             {isDoctor && (
//               <>
//                 <Route path='/' element={<DoctorDashboard />} />
//                 <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
//                 <Route path='/doctor-appointments' element={<DoctorApointment />} />
//                 <Route path='/doctor-profile' element={<DoctorProfile />} />
//               </>
//             )}
//           </Routes>
//         </div>
//       </div>
//     )
//   }

//   // Regular User Layout
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <ToastContainer />
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/doctors' element={<Doctor />} />
//         <Route path='/doctors/:speciality' element={<Doctor />} />
//         <Route path='/login' element={<Login />} />
//         {/* <Route path='/forget-password' element={<ForgetPassword />} />
//         <Route path='/reset-password/:token' element={<ResetPassword />} /> */}
//         <Route path='/about' element={<About />} />
//         {/* <Route path='/contact' element={<Contact />} /> */}
//         <Route path='/my-appointments' element={<MyAppointment />} />
//         {/* <Route path='/my-profile' element={<MyProfile />} /> */}
//         <Route path='/appointment/:docId' element={<Appointment />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App
// import { AuthProvider } from './context/authContext';
// import Router from './routes';

// function App() {
//   return ( 
//     <AuthProvider>
//       <Router/>
//     </AuthProvider>
// );

// }

// export default App;

import './App.css';
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import Register from "./view/pages/SignUp/Register.tsx";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {AdminDefaultLayout} from "./view/common/DefaultLayout/AdminDefaultLayout.tsx";
function App() {

    return(
<BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminDefaultLayout />}></Route>
                <Route path="/*" element={<DefaultLayout />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={< Register/>}></Route>
            </Routes>
</BrowserRouter>

    );
}
export default App;