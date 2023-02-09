import React from 'react'
import houses from '../../assets/houses'
const Houses = () => {
 return(
    <div className=' block md:flex justify-evenly items-center '>
      {
        houses.map((house, key) =>{
          return(
            <div className='bg-slate-100 my-5 mx-8 p-5 w-60 
            rounded-lg shadow-lg shadow-black '>       
              <img src={ house.image} />
              <h2 className='font-black'>price: {house.price }</h2>
              <h4 className='text-xl font-semibold'>deposit: {house.deposit}</h4>
              <p className='m-2 text-sm'>{house.desc}</p>
              <h5 className='text-lg font-bold'>{house.location}</h5>

          
          </div>
          )
          
        })
      }
      

    </div>
  )
}

export default Houses