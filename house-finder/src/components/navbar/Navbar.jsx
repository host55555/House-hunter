import React,{useState}from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getHouses } from '../../features/houseSlice'
const Navbar = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const handleSearch = (e)=>{
      e.preventDefault()
      dispatch(getHouses(query))
     
  }
  
  return (
    <header>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 absolute w-[100%] items-center bg-slate-600 md:bg-slate-800 text-white
    justify-center py-[15px] md:px-[25px] '>
        {/**logo */}
        <div className='text-center'>
          <Link to='/'>
            <h1 className="font-black text-2xl md:text-3xl m-2 flex  text-center  hover:text-pink-500
        ">
              House Hunter</h1>
          </Link>

        </div>

        <form onSubmit={handleSearch}className='flex p-2 rounded-lg w-72 md:w-full justify-center items-center'>
          <input type="text" placeholder='search houses'
          onChange={(e)=> setQuery(e.target.value)}
          value={query} className='text-sm text-black rounded-t-lg w-full p-1' />
          <button className='bg-blue-600 rounded-md ' type='submit'
          ><Icons.Search className='m-2' /></button>
        </form>
        <div className=''>
        <ul className=" text-center flex ">
          <li className='text-xl m-2 hover:text-pink-500'><Link to='/'>Home</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='about'>About</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='feedback'>Advertise</Link></li>
          <li className='text-xl m-2 hover:text-pink-500'><Link to='feedback'>Help?</Link></li>         
        </ul>

        </div>
       

        <a href="#" className='text-xl bg-sky-600 rounded-xl hidden text-center'> Log In</a>
      </div>

    </header>
  )
}

export default Navbar