import './App.css';
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import Register from "./view/pages/SignUp/Register.tsx";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {AdminDefaultLayout} from "./view/common/DefaultLayout/AdminDefaultLayout.tsx";
import Reports from "./view/common/SideBar/Reports.tsx";

function App() {

    return(
<BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminDefaultLayout />}></Route>
                <Route path="/*" element={<DefaultLayout />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={< Register/>}></Route>
                            <Route path="/admin/reports" element={<Reports />} />

            </Routes>
</BrowserRouter>

    );
}
export default App;