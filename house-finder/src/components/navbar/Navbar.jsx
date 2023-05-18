import React,{useState}from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchHouses } from '../../features/houseSlice'
const Navbar = () => {
   return (
    <header>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 absolute w-[100%] items-center bg-slate-600 md:bg-slate-800 text-white
    justify-center py-[15px] md:px-[25px] '>
        {/**logo */}
        <div className='text-center'>
          <Link to='/'>
            <h1 className="font-black text-2xl md:text-3xl m-2 flex  text-center  hover:text-pink-500
        ">
              House Hunter</h1>
          </Link>

        </div>    
        <div className=''>
        <ul className=" text-center flex ">
          <li className='text-xl m-2 hover:text-pink-500'><Link to='/'>Home</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='about'>About</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='feedback'>Advertise</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='feedback'>Help?</Link></li>         
        </ul>

        </div>
       

        <a href="#" className='text-xl bg-sky-600 rounded-xl hidden text-center'> Log In</a>
      </div>

    </header>
  )
}

export default Navbar