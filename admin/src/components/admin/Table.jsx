import React from 'react'

const Table = ({agents}) => {
    return (
        <tbody>
            {agents?.map((agent,key)=>{
                return(
                    <tr className='bg-blue-900' key={agent._id} >
                    <td className='p-3 text-sm text-white'>{agent.agency}</td>
                    <td className='p-3 text-sm text-white'>{agent.location}</td>
                    <td className='p-3 text-sm text-white'>{agent.address}</td>
                    <td className='p-3 text-sm text-white'>{agent.contacts}</td>
                    <td className='p-3 text-sm text-white'>{agent.email}</td>
                    <td className='p-1 text-sm text-white flex justify-evenly'>
                        <button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button>
                        <button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button>
                    </td>
    
                </tr>
    
                )
            })}
          

        </tbody>



    )
}

export default Table