import React, { useEffect,useState } from 'react'
import houses from '../../assets/houses'
import House from './House'


const Houses = () => {

  const [houses, setHouses]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:4000/house/')
    .then(res=>{
       return res.json();
    })
    .then(data =>{
      console.log(data)
      setHouses(data)
    })


  },[])

  return (
    <div className='text-center pt-72 md:pt-40'>
      <div className='md:flex justify-center mt-5'>
        <h1 className='font-black md:text-3xl m-2'>Available Houses</h1>
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