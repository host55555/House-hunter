import React from 'react'

const Adduser = () => {
  return (
    <div className='bg-slate-200 h-50 flex justify-center items-center'>
        
        <form className='border border-gray-800 shadow-md shadow-black
        rounded-lg m-5  w-56 '>
                <h1 className='font-black '>New Agency</h1>
                <input type="text" placeholder='Agency name' 
                className='border border-green-600 rounded-lg m-2 text-center'/>

                <input type="text" placeholder='Agency location' 
                className='border border-green-600 rounded-lg m-2 text-center'/>

                <input type="text" placeholder='Agency address'
                className='border border-green-600 rounded-lg m-2 text-center' />

                <input type="text" placeholder='Agency contacts'
                className='border border-green-600 rounded-lg m2 text-center' />

                <input type="email" placeholder='Agency email'
                className='border border-green-600 rounded-lg m-2 text-center' />
                <input type="submit" className='bg-emerald-500 w-32 rounded-lg m-3'/>
        </form>
        
    </div>
  )
}

export default Adduser