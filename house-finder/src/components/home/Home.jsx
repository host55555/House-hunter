import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
const Home = () => {
    return (
        <div className="banner">
            <div className='text-center text-white pt-72  md:pt-52'>
                <h1 className='text-2x md:text-5xl font-extrabold m-3'>Hey Hunter!!</h1>
                <p className='md:text-2xl italic'> Let's find a place for you. We promise you will love it <span className='text-red-600'>❤</span>.</p>
                <div className='m-[70px]'>
                    <Link to='houses' className='text-black bg-white m-4 rounded-md p-2'><span></span>let's hunt</Link>
                    <Link to='about' className='text-black bg-white m-4 rounded-md p-2'><span></span>About us</Link>
                </div>
            </div>
        </div>
    )
}

export default Home