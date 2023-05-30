import {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {sendCode} from '../features/authentication/authSlice'
import Spinner from '../components/spinner/Spinner'
function PasswordReset() {
    const[email, setEmail]= useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isSuccess,isError,isLoading,message} = useSelector(
        (state)=> state.auth)
        useEffect(()=>{
            if(isError){
                toast.error(message)
            }
            if(isSuccess){
                toast.success(message)
                navigate('/new-password')
            }
        })
    function handleSubmit(e){
        e.preventDefault()
        dispatch(sendCode(email))
    }
    return (
        <div className='flex justify-center m-3'>
            <form onSubmit={handleSubmit}  className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
                <input type="email" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} 
                className='border-b-[1px] my-5 border-black text-left w-full'/>
                <button type='submit' 
                className='w-full bg-blue-600 
                text-2xl font-semibold p-2 rounded-md
                 text-white'>
                    send code
                </button>
            </form>

        </div>
    )
}

export default PasswordReset
