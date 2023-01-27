import React from 'react'
import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogin = () =>{
    navigate("/login")
  }
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <Link to ="/"><span className='logo'>
                Bookings.com
            </span></Link>
            <div className='navitems'>
                <button class="button is-light navbutton is-small">Register</button>
                <button class="button is-light navbutton is-small" onClick ={handleLogin}>Login</button>      
            </div>
        </div>
    </div>
  )
}

export default Navbar