import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Houses from '../Houses/Houses'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import '../style.css'
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slide = [

        {
            url: "https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501"

        },
        {
            url: "https://cdn.luxe.digital/media/20230123162705/most-expensive-houses-in-the-world-reviews-luxe-digital.jpg"

        }, {
            url: "https://cdn.thecoolist.com/wp-content/uploads/2022/01/Types-of-Houses.png"


        }, {
            url: "https://cdn.luxe.digital/media/20230123162705/most-expensive-houses-in-the-world-reviews-luxe-digital.jpg"

        }

    ]
    const prevSlide = () => {
        const isFirsttSlide = currentIndex === 0
        const newIndex = isFirsttSlide ? slide.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slide.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }



    return (
        <div>

            <div className="max-w-[1400px] md:h-[700px] m-auto  relative group bg-white">
                <div style={{ backgroundImage: `url(${slide[currentIndex].url})` }} className='w-full h-full bg-
                             bg-cover bg-no-repeat duration-500'>

                </div>
                {/**Left arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  translate-y-[-50%] left-5 text-2xl
                        rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />

                </div>
                {/**center text */}
                <div className=' absolute top-[50%] -translate-x-0  translate-y-[-50%] left-[30%] shadow-lg shadow-white text-2xl
                        rounded-full p-2 bg-white/60 text-white cursor-pointer'>
                    <center>
                        <h1 className='text-3xl font-black text-emerald-600 m-3 p-3'>Welcome to House Hunter platform.</h1>
                        <p className='text-red-500'>Find your preferred living place here</p>

                    </center>


                </div>
                {/**Right arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  translate-y-[-50%] right-5 text-2xl
                        rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

            </div>







            <Houses />

        </div>

    )
}

export default Home