import React from 'react'
import Map from '../maps/Map'
const House = ({ houses }) => {
    const apiKey = 'AIzaSyAxol9PIW-99Ie5kYEryAQXYntAo_urgmY'
    const center =  { lat: -0.42013, lng: 36.94759 };


    return (
        <div>
            <div className='p-10 '>
                <div className=' '>



                    {
                        houses.data.map((house, key) => {
                            return (

                                <div key={house._id } className='grid grid-cols-1 md:grid-cols-2 gap-10 shadow-md shadow-black p-3 my-5 bg-white'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 overflow-scroll md:overflow-hidden h-64 md:h-full '>
                                        <img src={house.images[0]} className='h-64 w-[400px] rounded-lg' />
                                        <img src={house.images[1]} className='h-64 w-[400px] rounded-lg'/>
                                        <img src={house.images[2]} className='h-64 w-[400px] rounded-lg'/>
                                        <img src={house.images[3]} className='h-64 w-[400px] rounded-lg'/>
                                    </div>
                                    <div className='text-left  my-3 grid grid-cols-1'> 
                                    <div>
                                        <h1 className='font-bold text-xl text-black'>House Details</h1>
                                    <h2 className='font-black border-b-[1px]'>Amount: {house.amount}</h2>
                                    <h4 className='font-semibold border-b-[1px]'>category: {house.category}</h4>
                                    <p className=' font-semibold border-b-[1px]'>Description: {house.desc}</p>
                                    <h5 className='font-bold border-b-[1px]'>Location: {house.location}</h5>
                                    <h2 className='bg-red-700 text-white p-3 rounded-md'>No vacancy</h2>                                    
                                    </div>  
                                    <div className='text-center p-5 shadow-sm shadow-black'>
                                        <h1 className='font-bold'>Directions</h1>
                                        <Map apiKey={apiKey} center={center}/>
                                        
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