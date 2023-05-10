import React, { useState } from 'react'

function Modal({ closeModal }) {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        duration: ''
    })
    const { fullName, phoneNumber, email, duration } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

    }

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
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder='Full Name' onChange={onChange} name='fullName' value={fullName} className='w-full text-center border-b-[1px] border-black rounded-b-lg mt-2 md:m-3' />
                        <input type="number" placeholder='Phone number' onChange={onChange} name='phoneNumber' value={phoneNumber} className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                        <input type="email" placeholder='Email' name='email' onChange={onChange} value={email} className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                        <input type="text" placeholder='Duration of stay' name='duration' onChange={onChange} value={duration} className='w-full text-center border-b-[1px] border-black rounded-b-lg  mt-2 md:m-3' />
                        <div className='flex justify-around items-center'>
                            <button onClick={() => closeModal(false)}
                                className='font-black  bg-red-600 p-2 text-white rounded-lg'>
                                Cancel
                            </button>
                            <button type='submit' className='font-black  bg-blue-600 p-2 text-white rounded-lg'>
                                Book
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default Modal