import React from 'react'

const Left = () => {
  return (
    <div className='shadow-lg shadow-blue-700 p-5 m-3'>
    <div className='flex justify-evenly'>
        <div className='shadow-lg shadow-black m-5 '>
            <div className='bg-black text-white rounded-md'>
                <h1 className='text-white p-1'>Total properties</h1>
                <div className='bg-blue-700 mt-3 h-10'>
                    34
                </div>
            </div>
        </div>
        <div className='shadow-lg shadow-black m-5'>
            <div className='bg-black text-white rounded-md'>
                <h1 className='text-white p-1'>Booked Houses</h1>
                <div className='bg-blue-700 mt-3 h-10'>
                    0
                </div>
            </div>
        </div>
    </div>
    <div className='shadow-lg shadow-black m-3 '>
        <div className='bg-black text-white rounded-md'>
            <h1 className='text-white p-1'>Occupied houses</h1>
            <div className='bg-blue-700 mt-3 h-10'>
                8
            </div>
        </div>
    </div>



</div>

  )
}

export default Left