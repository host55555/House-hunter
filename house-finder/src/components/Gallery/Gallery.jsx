import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import Map from '../maps/Map'

const Gallery = () => {
    const { id } = useParams()
    const [house, setHouse] = useState(null)
    const apiKey = 'AIzaSyAxol9PIW-99Ie5kYEryAQXYntAo_urgmY'
    const center = { lat: -0.42013, lng: 36.94759 };


    useEffect(() => {
        const fetchHouse = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/house/house/${id}`)
                const data = await response.json()
                setHouse(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchHouse()
    }, [id])
    return (
        <div className=' pt-52 md:pt-20 bg-slate-50'>
            {house && (<h1 className='font-black text-black text-2xl mt-3'>{house.category.toUpperCase()}</h1>)}
            {house && (<div>
                <div className='md:flex justify-evenly items-center md:h-[400px] w-full'>

                    <div className='md:flex overflow-scroll md:overflow-x-scroll md:overflow-y-hidden w-full md:w-[50%] h-[400px] md:h-[390px] shadow-lg shadow-black rounded-md'>

                        <img src={house.images[0]} className='h-full w-full p-6 rounded-lg m-1' alt='loading' />
                        <img src={house.images[1]} className='h-full w-full p-6 rounded-lg m-1' alt='loading' />
                        <img src={house.images[2]} className='h-full w-full p-6 rounded-lg m-1' alt='loading' />
                        <img src={house.images[3]} className='h-full w-full p-6 rounded-lg m-1' alt='loading' />



                    </div>
                    <div>

                        <div className='text-center p-5 md:h-[390px] w-full'>
                            <h1 className='font-bold text-2xl text-black'>Directions</h1>
                            <Map apiKey={apiKey} center={center} className='w-full' />

                        </div>
                    </div>


                </div>

                <div className='mt-5 bg-sky-900'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-evenly items-center'>
                        <div>
                            <h1 className='font-black m-3 text-black'>DESCRIPTION</h1>
                            <p className='p-3 text-center md:text-left text-white '>{house.desc}</p>
                        </div>
                        <div>
                            <h2 className='font-bold m-3 text-black'>DETAILS</h2>
                            <div className='p-3 text-center md:text-left'>
                                <h4 className='font-semibold text-white'>Amount: Kes.{house.amount}</h4>
                                <h4 className='font-semibold text-white'>Location: {house.location}</h4>
                            </div>

                        </div>
                        <div className='mx-3'>
                            <h2 className='font-black text-black m-3'>STATUS</h2>
                            <h4 className='bg-green-500 font-bold text-2xl text-white rounded-md p-2'>Vacant</h4>
                            <button className='bg-sky-600  font-semibold text-white rounded-lg p-1 my-3 w-full'>Book</button>
                        </div>


                    </div>


                </div>





            </div>)}





        </div>
    )
}

export default Gallery