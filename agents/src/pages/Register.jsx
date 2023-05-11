import React, {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate, Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register,reset} from'../features/authentication/authSlice'


const Register = () => {
    const[formData, setFormData] = useState({
        agency:'',
        email:'',
        password:'',
        password2:''
    })
    const{agency, email,password,password2} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError,isSuccess, message}= useSelector(
        (state)=>state.auth)
        useEffect(()=>{
            if(isError){
                toast.error(message)
            }
            if(isSuccess || user){
                navigate('/')
                toast.success(message)
            }
            dispatch(reset())
        },[user, isError,isSuccess,message,navigate,dispatch])
   
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(password !== password2){
            toast.error('passwords do not match!!')
        }else{
            const userData = {
                agency,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }
    const changeRoute = ()=>{      
        navigate('/signin')
    }
  return (
    <div className='flex justify-center m-3'>

        <form onSubmit={onSubmit} className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
            <h1 className='font-black text-3xl w-full flex  justify-center '><FaUser/> Create Account</h1>
            <div className='border-t-2 mt-3 text-center'>
                <input type="text" 
                placeholder='Enter Your Agency Name' 
                 id='agency' 
                 name='agency'
                 value={agency}
                  onChange={onChange} 
                  className='border-b-[1px] my-5 border-black text-left w-full'/>
                <input type="email" 
                placeholder=' Enter Your Email' 
                id='email' 
                name='email'
                value={email} 
                onChange={onChange}
                className='border-b-[1px] my-5 border-black text-left w-full'/>
                <input type="password" 
                placeholder=' password'
                 id='password' 
                 name='password'
                 value={password} 
                 onChange={onChange}
                 className='border-b-[1px] my-5 border-black text-left w-full'/>
                <input type="password" 
                placeholder=' confirm password' 
                id='password2'
                name='password2' 
                value={password2} 
                onChange={onChange}
                className='border-b-[1px] my-5 border-black text-left w-full'/>
            </div>
            <button type='submit' 
            className='w-full bg-blue-600 text-2xl font-semibold p-2 rounded-md text-white'>
                submit
            </button>
            <button onClick={changeRoute} className='text-blue-600 hover:text-rose-700'>Already have an account? Login.</button>
        </form>
    </div>
  )
}
       
export default Register