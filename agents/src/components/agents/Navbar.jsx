import React from 'react'
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/authentication/authSlice'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <div className='bg-slate-700'>
      <div className='md:flex justify-around items-center'>
        <h1 className='text-blue-500 font-black md:text-3xl m-5'>
          <Link to="/">House Finder Agents</Link></h1>
        <ul className='text-center md flex justify-around m-5'>
          {user ? (
            <>
              <li className='text-white mx-5 '>
                <Link to="houses">Properties</Link>
              </li>
              <li className='text-white mx-5'>
                <Link to="account"> Account</Link>
              </li>
              <li className='text-white mx-5'>
                <Link to='addhouse'> Add property</Link>
              </li>
              <li className='text-white mx-5'>
                <button onClick={onLogout} className='flex justify-center'> 
                   <FaSignOutAlt className='text-2xl mx-2'/> Sign out
                </button>
              </li>
            </>

          ) : (
            <li className='text-white  mx-5 '>
            <Link to='/signup' className='flex justify-center'> <FaUser className='mx-3'/> Sign up</Link>
            </li>
         )}
          </ul>

          
      </div>

    </div>
  )
}

export default Navbar