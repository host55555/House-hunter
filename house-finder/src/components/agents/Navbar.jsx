import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-700'>
        <div className='md:flex justify-around items-center'>
            <h1 className='text-blue-500 font-black md:text-3xl m-5'>House Finder Agents</h1>
            <ul className='text-center md flex justify-around m-5'>
                <li className='text-white mx-5 '>My houses</li>
                <li className='text-white mx-5'>Account</li>
                <li className='text-white mx-5'>Add house</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar