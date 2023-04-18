import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getHouses } from '../../features/houseSlice'
import House from './House'


const Houses = () => {
  const{houses, isLoading, isError} =useSelector((state)=>state.houses)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isError){
      console.log("some error occured!!")
    }
    dispatch(getHouses())
  },[isError,dispatch])

  if(isLoading){
    return <p>Loading data please wait</p>
  }

  return (
    <div className='text-center mt-1'>
      <div className='md:flex justify-center mt-1'>
        <h1 className='font-black md:text-3xl '>Available Houses</h1>
        <p className='md:text-xl m-2'>filter by:</p>
        <select id="categories" className='border bg-slate-300 rounded-sm h-8 m-2'>
          <option value="all">All</option>
          <option value="bedsitters">bedsitters</option>
          <option value="singles">singles</option>
          <option value="family"> family house</option>
          <option value="guest"> guest house</option>
        </select>
      </div>
     

       {houses && <House houses={houses}/>}
    </div>
  )
}

export default Houses