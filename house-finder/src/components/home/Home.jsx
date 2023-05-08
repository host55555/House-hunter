import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Houses from '../Houses/Houses'
import '../style.css'
const Home = () => {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('houses')
    }
    return (
        <div>
            <div className="banner">
                <div className='text-center text-white pt-72  md:pt-52'>
                    <h1 className='text-2x md:text-5xl font-extrabold m-3'>Hey Hunter!!</h1>
                    <p className='md:text-2xl italic'> Let's find a place for you. We promise you will love it <span className='text-red-600'>❤</span>.</p>
                    <div className='m-[70px]'>
                        <button onClick={handleClick} className='text-black bg-white m-2 md:m-4 rounded-md p-1 md:p-2 hover:bg-sky-500'><span></span>let's hunt</button>
                        <Link to='about' className='text-black bg-white m-2 md:m-4 rounded-md p-1 md:p-2 hover:bg-sky-500'><span></span>About us</Link>
                    </div>
                </div>
            </div>
            <Houses/>

        </div>

    )
}

export default Home