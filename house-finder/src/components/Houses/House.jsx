import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Gallery from '../Gallery/Gallery'
import Map from '../maps/Map'
const House = ({ houses }) => {
    const navigate = useNavigate()
    const apiKey = 'AIzaSyAxol9PIW-99Ie5kYEryAQXYntAo_urgmY'
    const center = { lat: -0.42013, lng: 36.94759 };
    const [selectedHouse, setSelectedHouse] = useState(null)
    const handleHouseSelect =(house)=>{
        navigate(`/house/${house._id}`)
    }

    return (
        <div>
            <div className='p-10 flex justify-center items-center '>
                <div className='grid grid-cols-2 gap-2 justify-center items-center '>



                    {
                        houses?.data?.map((house, key) => {
                            return (

                                <div key={house._id} className=' grid grid-cols-1 w-[500px] shadow-md shadow-black p-5 m-2 rounded-lg'>


                                    <div className='grid grid-cols-1 overflow-y-scroll h-52  my-3'>
                                        <img src={house.images[0]} className='h-52 w-full rounded-lg ' />
                                        <img src={house.images[1]} className='h-52 w-full  rounded-lg' />
                                        <img src={house.images[2]} className='h-52 w-full rounded-lg' />
                                        <img src={house.images[3]} className='h-52 w-full rounded-lg' />
                                    </div>
                                    <div className=' grid grid-cols-2 gap-2 shadow-sm shadow-black'>
                                        <div className='text-center p-5 '>
                                            <h1 className='font-bold'>Directions</h1>
                                            <Map apiKey={apiKey} center={center} />

                                        </div>
                                        <div className='text-left  my-3 grid grid-cols-1'>
                                            <div>
                                                <h1 className='font-bold text-xl text-black'>House Details</h1>
                                                <h2 className='font-black border-b-[1px]'>Amount: {house.amount}</h2>
                                                <h4 className='font-semibold border-b-[1px]'>category: {house.category}</h4>                                                
                                                <h5 className='font-bold border-b-[1px]'>Location: {house.location}</h5>
                                                <h2 className='bg-red-700 text-white p-3 rounded-md'>No vacancy</h2>
                                                <button className='bg-blue-500 text-white p-3 my-3 w-full rounded-md'
                                                onClick={()=> handleHouseSelect(house)}>View</button>

                                                {
                                                    selectedHouse && navigate('gallery')
                                                }
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