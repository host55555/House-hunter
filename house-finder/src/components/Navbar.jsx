import React from 'react'
import './style.css'
import * as Icons from 'react-bootstrap-icons'
const Navbar = () => {
  return (
    <header>
    <div  className='md: flex w-[100] items-center justify-between py-[20px] px=[35px]'>
        {/**logo */}
        <h1 className="logo">House Finder {<Icons.Search/>}</h1>
        
        <input type="checkbox" name="" id="menu"/>
        <label for="menu" /*<i class='bx bx-menu' id="menu-icon"></i>*/></label>
        {/**navigation links */}
        <ul className="navbar">
            <li><a href="#home">home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#sales">sales</a></li>
            <li><a href="#properties">properties</a></li>
        </ul>
        {/**login button */}
        <a href="#" className="btn">Log In</a>
    </div>

</header>
  )
}

export default Navbar