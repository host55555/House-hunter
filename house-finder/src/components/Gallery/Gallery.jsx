import React from 'react'

const Gallery = () => {
    const url = 'https://victormatara.com/wp-content/uploads/2017/11/List-Of-Cheapest-Places-to-Rent-in-Nairobi-if-you-Earn-Below-15000--1200x900.jpg'
  return (
    <div className='pt-72 md:pt-40 bg-slate-50'>
        <h1 className='text-2xl font-semibold text-black '>Overview</h1>
        <div className='grid grid-col-1 md:grid-cols-2 gap-10 p-3 '>

            <div>
                <img src={url} alt="" />

            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <img src="https://victormatara.com/wp-content/uploads/2017/11/List-Of-Cheapest-Places-to-Rent-in-Nairobi-if-you-Earn-Below-15000--1200x900.jpg" alt="" />
                </div>
                <div>
                    <img src="https://victormatara.com/wp-content/uploads/2017/11/List-Of-Cheapest-Places-to-Rent-in-Nairobi-if-you-Earn-Below-15000--1200x900.jpg" alt="" />
                </div>
                <div>
                    <img src="https://victormatara.com/wp-content/uploads/2017/11/List-Of-Cheapest-Places-to-Rent-in-Nairobi-if-you-Earn-Below-15000--1200x900.jpg" alt="" />
                </div>
                <div>
                    <img src="https://victormatara.com/wp-content/uploads/2017/11/List-Of-Cheapest-Places-to-Rent-in-Nairobi-if-you-Earn-Below-15000--1200x900.jpg" alt="" />
                </div>

            </div>          

        </div>
        <div className='bg-gray-700 text-white'>
                <div className='grid grid-col-1 md:grid-cols-2 gap-10 justify-around items-center p-3'>
                    <div className='m-5'>
                        <h1 className='font-black'>Description</h1>
                        <p className='p-3 '>
                            New Bedsitters, fully furnished with water and electricity included in the rent 
                            Free wifi is also provided. The enviroment is clean with 24hrs surveillance for 
                            security purposes. Acces to the premises is controlled to regulate visitors who are 
                            coming and going for security reasons.

                        </p>
                    </div>
                    <div>
                        <h1>Directions</h1>
                        <p>

                        </p>
                    </div>



                </div>
            </div>
        


    </div>
  )
}

export default Gallery