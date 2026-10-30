import { Route,Routes } from "react-router-dom"
import Home from "../Page/Home"
import Product from "../Page/Product"
import Contact from "../Page/Contact"
import About from "../Page/About"
import Cart from "../Page/Cart"
export default function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/Product' element={<Product></Product>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/ContactUs' element={<Contact></Contact>}></Route>
            <Route path='/Cart' element={<Cart></Cart>}></Route>
        </Routes>
    )
}