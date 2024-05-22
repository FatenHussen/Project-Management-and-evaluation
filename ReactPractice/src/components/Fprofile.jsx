import React from 'react'
import Fdashbord from './Fdashboard/Fdashbord'
import './Style/Fprofile.css'
import { FaAddressCard } from "react-icons/fa";
import img22 from '../assets/vecteezy_illustration-isometric-concept-personal-account-security_5647961.jpg'
import img0 from '../assets/Approved-71.png'
import img111 from '../assets/vecteezy_isometric-style-illustration-of-login-to-website_6552114.jpg'
const Fprofile = () => {
  return (
    <div className='porfile--header'> 
        <div className='edit--admin'>
          <h2>أدخل معلوماتك</h2>
          <img  className='img--t' src={img111}/>
          
        </div> 
    </div>
  )
}

export default Fprofile