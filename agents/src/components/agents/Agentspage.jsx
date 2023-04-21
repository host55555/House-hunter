import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {toast} from 'react-toastify'
import Table from './Table'

import { myHouses} from '../../features/property/propertySlice'
const Agentspage = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const {user} = useSelector((state)=>state.auth)
  const {houses, isLoading, isError} = useSelector((state)=>
  state.houses)

  useEffect(()=>{
    if(isError){
      toast.error('an Error occured!!')
    }
    if(!user){
      navigate('/login')
    }

    dispatch(myHouses())
  },[user,navigate,houses,isError,dispatch])

  if(isLoading){
    toast.message('Loading...')
  }
  return (
    <div>
    

    
     <h1 className='m-2'>Agent Dashboard</h1>
    <div className='mx-2 px-6 text-center'>
        <table className='w-full m-3'>
            <thead className='bg-gray-50 border-b-2 border-gray-400'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Owner</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>  
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>  
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Quantity</th>                                  
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>

                        
                    </tr>
            </thead>
            {houses && <Table houses={houses}/>}
            
        </table>
       

    </div>
    
</div>
  )
}

export default Agentspage