import React from 'react'

const Table = ({ houses }) => {
    return (
        <tbody>
            {
                houses.map((house, key) => {
                    return (
                        <tr className='bg-blue-900'>
                            <td className='p-3 text-sm text-white'>{house.owner}</td>
                            <td className='p-3 text-sm text-white'>{house.location}</td>
                            <td className='p-3 text-sm text-white'>{house.price}</td>
                            <td className='p-3 text-sm text-white'>{house.category}</td>
                            <td className='p-3 text-sm text-white'>{house.quantity}</td>
                            <td className='p-3 text-sm text-white'>{house.deposit}</td>
                            

                        </tr>
                    )
                })
            }

        </tbody>
    )
}

export default Table