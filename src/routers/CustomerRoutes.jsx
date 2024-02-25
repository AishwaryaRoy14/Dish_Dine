import React from "react"
import{Route, Routes} from 'react-router-dom'
import HomePage from "../customer/pages/homepage/HomePage"
import Restaurant from "../customer/pages/homepage/Restaurant/Restaurant"
import Navbar from "../customer/component/Navbar/Navbar"
import Cart from "../customer/pages/homepage/Cart/Cart.jsx"
import Profile from "../customer/pages/homepage/Profile/Profile.jsx"


export const CustomerRoutes=() => {
    return(
        <div className="relative">
            <div className= 'sticky top-0 z-50'>
                <Navbar/>
            </div>
            <Routes>
           <Route path='/' element= {<HomePage/>}/>
           <Route path='/restaurant/:address/:title/:id' element= {<Restaurant/>}/>
           <Route path='/Cart' element= {<Cart/>}/>
           <Route path='/my-profile/*' element = {<Profile/>}/>
        </Routes>
        </div>
    )
}
export default CustomerRoutes