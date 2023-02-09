import React from 'react'
import * as Icons from 'react-bootstrap-icons'
const Navbar = () => {
  return (
    <header>
    <div  className='md:flex w-[100] items-center bg-black md: text-white
    justify-between py-[20px] md:px-[35px]'>
        {/**logo */}
        <h1 className="font-blac  text-2xl md:text-3xl m-5 flex  text-center
        ">House Finder {<Icons.Search className='m-2'/>}</h1>
        
        
        <ul className=" text-center md:flex md:bg-transparent ">
            <li className='text-xl m-2'><a href="#home">Home</a></li>
            <li className='text-xl m-2'><a href="#about">About Us</a></li>
            <li className='text-xl m-2'><a href="#sales">Contacts</a></li>
            <li className='text-xl m-2'><a href="#properties">Properties</a></li>
        </ul>
        
        <a href="#" className='text-xl bg-sky-600 rounded-xl hidden text-center'> Log In</a>
    </div>

</header>
  )
}

export default Navbar