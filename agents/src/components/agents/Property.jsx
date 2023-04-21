import React from 'react'

function Property({ houses }) {
    return (
        <>

            {houses?.map((house, key) => {
                return (
                    <tr className='bg-gray-200' key={house._id}>
                        <td className='p-3 text-sm text-gray-700'>{house.owner}</td>
                        <td className='p-3 text-sm text-gray-700'>{house.location}</td>
                        <td className='p-3 text-sm text-gray-700'>{house.category}</td>
                        <td className='p-3 text-sm text-gray-700'>{house.amount}</td>
                        <td className='p-3 text-sm text-gray-700'>{house.quantity}</td>
                        <td className='p-3 text-sm text-gray-700'>Booked</td>
                        <td className='p-3 text-sm text-gray-700'><img src={house.images[1]}
                        className='h-16 w-16'/></td>
                        <td className='p-3 text-sm text-gray-700'>{house.desc}</td>
                        <td className='p-3 text-sm text-gray-700'>
                            <button className='bg-green-400 p-2 rounded-lg font-semibold m-1'>Edit</button>
                            <button className='bg-rose-600 p-2 rounded-lg font-semibold m-1'>Delete</button>
                        </td>
                    </tr>
                )
            })

            }
        </>


    )
}

export default Property