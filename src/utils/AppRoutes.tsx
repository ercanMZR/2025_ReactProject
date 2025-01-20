import { BrowserRouter,Router,Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => 
    <BrowserRouter>
        <Route path="/" element={<Login/>} />
        <Route path ="/register" element={<Register/>} />
    </BrowserRouter>

    export default AppRoutes;