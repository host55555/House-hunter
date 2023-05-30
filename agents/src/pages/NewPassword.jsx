import { useState } from 'react'

function NewPassword() {
    const [email, setEmail] = useState('')
    const [otpCode, setOtpCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmpwd, setConfrmPwd] = useState('')
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <div className='flex justify-center m-3'>
            <form onSubmit={handleSubmit} className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
                <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}
                    className='border-b-[1px] my-5 border-black text-left w-full' />
                <input type="number" placeholder='OTP CODE' required onChange={(e) => setOtpCode(e.target.value)}
                    className='border-b-[1px] my-5 border-black text-left w-full' />
                     <input type="password" placeholder='new password' required onChange={(e) => setNewPassword(e.target.value)}
                    className='border-b-[1px] my-5 border-black text-left w-full' />
                     <input type="password" placeholder='confirm new password' required onChange={(e) => setConfrmPwd(e.target.value)}
                    className='border-b-[1px] my-5 border-black text-left w-full' />
                <button type='submit
        ' className='w-full bg-blue-600 text-2xl font-semibold p-2 rounded-md text-white'>Submit</button>
            </form>

        </div>
    )
}

export default NewPassword