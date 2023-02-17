import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-slate-700'>
    <div className='md:flex justify-around items-center'>
        <h1 className='text-slate-100 font-black md:text-3xl m-5'>
          <Link to="/">
            House-Finder Admin
          </Link>
         
          </h1>
        <ul className='text-center md flex justify-around m-5'>
            
            <li className='text-white mx-5'>
            <Link to="account">Account</Link>
            </li>
            
        </ul>
    </div>

</div>
  )
}

export default Navbar