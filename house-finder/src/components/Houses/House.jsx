import React from 'react'
import { Link } from 'react-router-dom';
const House = ({ houses }) => {
    
  
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className=' grid grid-cols-1 md:grid-cols-4 gap-10 items-center  h-[100vh] overflow-y-scroll'>



                    {
                        houses.map((house, key) => {
                            return (
                               
                                    <div className='bg-slate-100 my-3 md:my-5 mx-4 md:mx-8 p-2 md:p-5 w-52 md:w-60   rounded-lg shadow-lg shadow-black hover:shadow-sky-400'   key={{/*houses._id*/ }}>
                                         <Link to='gallery'>
                                        <img src={house.image} />
                                        </Link>
                                        <h2 className='md:font-black'>Amount: {house.amount}</h2>
                                        <h4 className='text-xl md:font-semibold'>category: {house.category}</h4>
                                        <p className='m-2 text-sm'>{house.desc}</p>
                                        <h5 className='text-lg md:font-bold'>{house.location}</h5>                                      

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