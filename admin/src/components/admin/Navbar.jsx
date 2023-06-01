import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/signup')
  }
  return (
    <div className='bg-slate-700'>
      <div className='md:flex justify-around items-center'>
        <h1 className='text-slate-100 font-black md:text-3xl m-5'>
          <Link to="/">
            House-Finder Admin
          </Link>

        </h1>
        <ul className='text-center md flex justify-around m-5'>
          {user ? (
            <>

              <li className='text-white mx-5'>
                <Link to="account">Account</Link>
              </li>
              <li className='text-white mx-5'>
                <button onClick={onLogout}>Log out</button>
              </li>
            </>
          ):(
            <>
               <li className='text-white mx-5'>
                <Link to="login">Log in</Link>
              </li>
            </>
          )}


        </ul>
      </div>

    </div>
  )
}

export default Navbar