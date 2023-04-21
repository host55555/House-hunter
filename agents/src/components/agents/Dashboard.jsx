import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {getAllHouses, reset} from '../../features/property/propertySlice'
import { toast } from 'react-toastify'
import Property from './Property'


function Dashboard() {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const {houses,isLoading, isError,message} = useSelector((state)=> 
    state.property)
    useEffect(()=>{
        
        if(!user){
            navigate('/signin')
        }
        dispatch(getAllHouses())
       
    },[user,navigate,isError,dispatch])

    if(isLoading){
        toast.info("Loading...")
    }
  return (
    <div>
        <h1 className='font-black shadow-
         text-3xl shadow-black p-3'>Welcome {user?.agency} Dashboard</h1>
         <div className='p-2 shadow-sm shadow-black '>
            <table className='w-full mb-4'>
                <thead className='bg-gray-500 border-b-2 border-gray-400'>
                    <tr>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Owner</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Location</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Category</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Amount</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Quantity</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Status</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Images</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Description</th>
                        <th className='p-3 text-lg font-black border-[1px] border-black tracking-wide text-left'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {houses && <Property houses={houses}/>}
                </tbody>
            </table>

         </div>


    </div>
  )
}

export default Dashboard