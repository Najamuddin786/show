import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Login from "../Pages/Login"
import SingUp from "../Pages/SingUp"
import Income from "../Pages/Income"
import User from "../Pages/User"


export default function AllRoutes(){

    return <>
 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/singup" element={<SingUp/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/income" element={<Income/>}/>
            <Route path="/user" element={<User/>}/>
            

            {/* <Route path="/home" element={<Home/>}/> */}
        </Routes>
   
        
    </>
}