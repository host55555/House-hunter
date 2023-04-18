import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
    <div  className='md:flex w-[100] items-center bg-black md: text-white
    justify-between py-[15px] md:px-[25px]'>
        {/**logo */}
        <Link to='/'>
        <h1 className="font-black text-2xl md:text-3xl m-2 flex  text-center  hover:text-pink-500
        ">
          House Hunter{<Icons.Search className='m-2 hidden md:visible'/>}</h1>
          </Link>
        
        
        <ul className=" text-center md:flex md:bg-transparent ">
            <li className='text-xl m-2 hover:text-pink-500'><Link to='/'>Home</Link></li>
            <li className='text-xl m-2 hover:text-pink-500'><Link to='about'>About</Link></li>
            <li className='text-xl m-2 hover:text-pink-500'><Link to='feedback'>Advertise</Link></li>
        </ul>
        
        <a href="#" className='text-xl bg-sky-600 rounded-xl hidden text-center'> Log In</a>
    </div>

</header>
  )
}

export default Navbar