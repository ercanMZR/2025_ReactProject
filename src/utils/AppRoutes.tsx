import { BrowserRouter,Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Products from "../pages/Products";
import Login from "../pages/Login";

const AppRoutes = () => 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
        <Route path ="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        </Routes>
    </BrowserRouter>

    export default AppRoutes;