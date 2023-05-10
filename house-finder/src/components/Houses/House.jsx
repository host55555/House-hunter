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
            <div className='p-10 sm:flex justify-center items-center '>
                <div className='grid grid-cols-2 md:grid-cols-5  justify-around items-center h-[100vh] w-full overflow-scroll '>

                    

                    {
                        houses?.data?.map((house, key) => {
                            return (

                                <div key={house._id} className=' grid grid-cols-1 w-32 md:w-52 h-60 shadow-md bg-white shadow-black p-1 md:p-2 m-2 rounded-sm'>


                                    <div className='overflow-hidden h-32 '>
                                        <img src={house.images[0]} className=' h-full w-full rounded-sm ' />
                                    </div>
                                    <div className=''>

                                        <div className='text-center  my-3 grid grid-cols-1'>
                                            <div>
                                                <div className='grid grid-cols-2 gap-1'>
                                                <h2 className='text-[10px] text-black md:font-black w-full'>Price: KES. {house.amount}</h2>
                                                <h4 className=' text-[10px] text-black md:font-semibold w-full '> {house.category}</h4>                                                
                                                </div>
                                                <h5 className=' text-[10px] text-black md:font-bold w-full'>Location: {house.location}</h5>                                               
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <h2 className='bg-red-700 text-white p-1 text-[10px]  rounded-md'>No vacancy</h2>
                                                    <button className='bg-blue-500 text-white text-[10px] p-1  w-full rounded-md'
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