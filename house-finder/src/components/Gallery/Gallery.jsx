import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import Map from '../maps/Map'

const Gallery = () => {
    const { id } = useParams()
   const[house, setHouse] =useState(null)
    const apiKey = 'AIzaSyAxol9PIW-99Ie5kYEryAQXYntAo_urgmY'
    const center = { lat: -0.42013, lng: 36.94759 };

   
    useEffect(() => {
        const fetchHouse = async ()=>{
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
        <div className='pt-72 md:pt-40 bg-slate-50'>
            <h1 className='text-2xl font-semibold text-black '>Overview</h1>

            {house && (<div>
                <div className='grid grid-col-1 md:grid-cols-2 gap-10 p-3 '>

                    <div>
                        <img src={house.images[0]} className='h-52 w-full rounded-lg ' alt='loading' />

                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <img src={house.images[0]} className='h-52 w-full rounded-lg ' alt='loading' />
                        </div>
                        <div>
                            <img src={house.images[1]} className='h-52 w-full rounded-lg ' alt='loading' />
                        </div>
                        <div>
                            <img src={house.images[2]} className='h-52 w-full rounded-lg ' alt='loading' />
                        </div>
                        <div>
                            <img src={house.images[3]} className='h-52 w-full rounded-lg ' alt='loading' />
                        </div>

                    </div>

                </div>
                <div className='bg-gray-700 text-white'>
                <div className='grid grid-col-1 md:grid-cols-2 gap-10 justify-around items-center p-3'>
                    <div className='m-5'>
                        <h1 className='font-black'>Description</h1>
                        <p className='p-3 '>{house.desc}</p>
                    </div>
                    <div>
                        <h1>Directions</h1>
                        <div className='text-center p-5 '>
                            <h1 className='font-bold'>Directions</h1>
                            <Map apiKey={apiKey} center={center} />

                        </div>
                    </div>



                </div>
            </div>

            </div>)}

          



        </div>
    )
}

export default Gallery