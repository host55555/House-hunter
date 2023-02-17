import React from 'react'
import Left from './Left'
const Account = () => {
  return (
    <div className='bg-slate-300 p-10 m-10 h-[100vh]'>
        <h1 className='font-black m-5'> Welcome to the Admins account</h1>
    <div className='grid grid-cols-2 gap-32 mx-10'>
        <div className='align-center shadow-lg shadow-red-600 m-3'>
            <div className=' m-5 bg-black text-white rounded-md shadow-md shadow-black'>
                <h1 className='font-black m-5'> Welcome Admin</h1>
                <div className='bg-red-600  text-left p-1'>
                    <h2>House-Finder</h2>
                </div>
            </div>
            <div className='mx-16 bg-red-600 text-white rounded-md w-[100px]'>
                <button>Edit profile</button>
            </div>
            <div className='m-5 bg-black rounded-md text-white text-left p-1'>
                <h4>Location:</h4>
                <h4>Address:</h4>
                <h4>Contacts:</h4>
            </div>

        </div>

        <Left/>



    </div>

</div>
  )
}

export default Account