import React from 'react'
import houses from '../../assets/houses'


const Houses = () => {
  

  return (
    <div className='text-center '>
      <div className='md:flex justify-center mt-5'>
        <h1 className='font-black md:text-3xl m-2'>Available Houses</h1>
        <p className='md:text-xl m-2'>filter by:</p>
        <select id="categories" className='border bg-slate-300 rounded-sm h-8 m-2'>
          <option value="all">All</option>
          <option value="bedsitters">bedsitters</option>
          <option value="singles">singles</option>
          <option value="family"> family house</option>
          <option value="guest"> guest house</option>
        </select>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-4 gap-5  justify-center items-center  h-[100vh] overflow-scroll'>

        {
          houses.map((house, key) => {
            return (
              <div className='bg-slate-100 my-5 mx-8 p-5 w-60 
            rounded-lg shadow-lg shadow-black '>
                <img src={house.image} />
                <h2 className='font-black'>price: {house.price}</h2>
                <h4 className='text-xl font-semibold'>deposit: {house.deposit}</h4>
                <p className='m-2 text-sm'>{house.desc}</p>
                <h5 className='text-lg font-bold'>{house.location}</h5>

              </div>
            )

          })
        }

        


      </div>
    </div>
  )
}

export default Houses