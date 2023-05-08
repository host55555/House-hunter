import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Gallery from '../Gallery/Gallery'

const House = ({ houses }) => {
    const navigate = useNavigate()

    const [selectedHouse, setSelectedHouse] = useState(null)
    const handleHouseSelect = (house) => {
        navigate(`/house/${house._id}`)
    }

    return (
        <div>
            <div className='p-10 flex justify-center items-center '>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 justify-center items-center h-[60vh] overflow-y-scroll'>

                    

                    {
                        houses?.data?.map((house, key) => {
                            return (

                                <div key={house._id} className=' grid grid-cols-1 w-72 h-62 shadow-md shadow-black p-5 m-2 rounded-lg'>


                                    <div className='overflow-hidden h-52  my-3'>
                                        <img src={house.images[0]} className='h-52 w-full rounded-lg ' />
                                    </div>
                                    <div className=''>

                                        <div className='text-center  my-3 grid grid-cols-1'>
                                            <div>
                                                <h2 className='font-black'>Amount: {house.amount}</h2>
                                                <h4 className='font-semibold '>category: {house.category}</h4>
                                                <h5 className='font-bold'>Location: {house.location}</h5>
                                                <div className='grid grid-cols-2 gap-4'>
                                                    <h2 className='bg-red-700 text-white p-2 rounded-md'>No vacancy</h2>
                                                    <button className='bg-blue-500 text-white p-2  w-full rounded-md'
                                                        onClick={() => handleHouseSelect(house)}>View</button>


                                                </div>


                                            </div>

                                        </div>

                                    </div>




                                </div>


                            )

                        })
                    }




                </div>
            </div>


        </div>
    )
}

export default House