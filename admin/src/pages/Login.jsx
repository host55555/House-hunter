import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/spinner/Spinner'

import { login, reset } from '../features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password, } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)
    useEffect(() => {
        if (isError) {
            toast.error(message)

        }
        if (isSuccess) {
            toast.success("Logged in successfully")
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess,dispatch,message,navigate])
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData ={
            username,
            password,
        }
        dispatch(login(userData))
        navigate('/')

    }
    if(isLoading){
        <Spinner/>

    }
    const changeRoute = () => {
        navigate('/signup')
    }
    return (
        <div className='flex justify-center m-3'>

            <form onSubmit={onSubmit} className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
                <h1 className='font-black text-2xl w-full flex  justify-center '> Admin Login</h1>
                <div className='border-t-2 mt-3 text-center'>

                    <input type="text"
                        placeholder=' username'
                        id='username'
                        name='username'
                        value={username}
                        onChange={onChange}
                        className='border-b-[1px] my-5 border-black text-left w-full' />
                    <input type="password"
                        placeholder=' password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        className='border-b-[1px] my-5 border-black text-left w-full' />
                </div>
                <button type='submit'
                    className='w-full bg-blue-600 text-2xl font-semibold p-2 rounded-md text-white'>
                    Login
                </button>
                <button onClick={changeRoute} className='text-blue-600 hover:text-rose-700'>Don't have an account? Sign up.</button>
            </form>
        </div>
    )
}

export default Login