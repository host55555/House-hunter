import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getHouses, searchHouses } from '../../features/houseSlice'
import House from './House'
import * as Icons from 'react-bootstrap-icons'
import Spinner from '../spinner/Spinner'
import axios from 'axios'
         
const Houses = () => {
  /*const{houses, isLoading, isError,query} =useSelector((state)=>state.houses)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isError){
      console.log("some error occured!!")
    }
    if(query){
      dispatch(searchHouses(query))
    }else{
      dispatch(getHouses())
    }
    
    
  },[isError,dispatch,query])

  if(isLoading){
    return <Spinner/>
  }*/
  const URL = 'http://localhost:4000/api/house/all-houses'
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetchHouses()
  }, [])
  const fetchHouses = async () => {
    try {
      const response = await axios.get(URL)
      setHouses(response)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = async (e) => {
    let query = e.target.value
    if (query) {
      let result = await axios.get(`http://localhost:4000/api/house/search-houses/${query}`)
      if (result) {
        setHouses(result)
      }
    }else{
      fetchHouses()
    }

  }

  return (
    <div className='text-center mt-1 bg-slate-200'>
      <div className='grid grid-cols-1 justify-center items-center mt-1'>
        <h1 className='font-black md:text-3xl text-black'>All Houses</h1>
        <div className='flex p-2 rounded-lg w-72 md:w-[50%] text-black justify-center items-center'>
          <input type="text" placeholder='search houses by e.g, location, category...'
            onChange={handleSearch}
            className='text-sm text-black rounded-t-lg w-full p-1' />

        </div>

      </div>


      {houses && <House houses={houses} />}
    </div>
  )
}

export default Houses