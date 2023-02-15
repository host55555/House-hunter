import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-slate-700'>
        <div className='md:flex justify-around items-center'>
            <h1 className='text-blue-500 font-black md:text-3xl m-5'>
              <Link to="/">House Finder Agents</Link></h1>
            <ul className='text-center md flex justify-around m-5'>
                <li className='text-white mx-5 '>
                  <Link to="houses">My houses</Link> </li>
                <li className='text-white mx-5'>
                  <Link to=""></Link> Account</li>
                <li className='text-white mx-5'>Add house</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar