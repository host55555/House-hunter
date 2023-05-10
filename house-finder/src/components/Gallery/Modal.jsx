import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className='w-full h-[100vh]  fixed flex justify-center items-center opacity-15 bg-slate-300  top-10 '>
            <div className=' mt-10 md:p-5 shadow-md shadow-black bg-white w-[90%] md:w-[60%] h-[50%] md:h-[60%] rounded-md'>
                <div className='flex justify-end items-end'>
                    <button onClick={() => closeModal(false)}
                        className=' font-black  md:bg-red-600 p-1 md:text-white rounded-lg'>
                        X
                    </button>
                </div>
                <h1 className='font-black text-black md:text-2xl'>Welcome To Our Booking Portal.</h1>
                <p className='text-blue-500 font-medium'>Please Enter Your Details To Book.</p>
                <div className=' p-3'>
                    <form >
                        <input type="text" placeholder='Full Name' className='w-full text-center border-b-[1px] border-black rounded-b-lg mt-2 md:m-3' />
                        <input type="number" placeholder='Phone number' className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                        <input type="email" placeholder='Email' className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                        <input type="text" placeholder='Duration of stay' className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                    </form>
                </div>
                <div className='flex justify-around items-center'>
                    <button onClick={() => closeModal(false)}
                        className='font-black  bg-red-600 p-2 text-white rounded-lg'>
                        Cancel
                    </button>
                    <button className='font-black  bg-blue-600 p-2 text-white rounded-lg'>
                        Book
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Modal