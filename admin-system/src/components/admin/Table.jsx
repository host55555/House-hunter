import React from 'react'

const Table = () => {
    return (
        <tbody>
            
                        <tr className='bg-blue-900' >
                            <td className='p-3 text-sm text-white'>example</td>
                            <td className='p-3 text-sm text-white'>example</td>
                            <td className='p-3 text-sm text-white'>example</td>
                            <td className='p-3 text-sm text-white'>example</td>
                            <td className='p-3 text-sm text-white'>example</td>
                            <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                            <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

                        </tr>
                    

        </tbody>



    )
}

export default Table