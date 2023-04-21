import React from 'react'

const Table = ({ houses }) => {
   

    return (
        <tbody>
            {
                houses?.data?.map((house, key) => {
                    return (
                        <tr className='bg-blue-900' key={house._id}>
                            <td className='p-3 text-sm text-white'>{house.owner}</td>
                            <td className='p-3 text-sm text-white'>{house.location}</td>
                            <td className='p-3 text-sm text-white'>{house.amount}</td>
                            <td className='p-3 text-sm text-white'>{house.category}</td>
                            <td className='p-3 text-sm text-white'>{house.quantity}</td>
                            <td className='p-3 text-sm text-white'>{house.desc}</td>
                            <td className='p-3 text-sm text-white'><button className='bg-green-600 rounded-md p-2'>Edit</button></td>
                            <td className='p-3 text-sm text-white'><button className='bg-red-500 rounded-md p-2' >Delete</button></td>
                            

                        </tr>
                    )
                })
            }

        </tbody>
    )
}

export default Table