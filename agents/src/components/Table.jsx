import React,{useState} from 'react'

const Table = ({ houses }) => {
    const[message, setMessage]= useState('')

   function handleClick(){
        fetch('http://localhost:4000/house/delete/:id')
        .then((res)=>{
            setMessage(res.data)
        })
    }

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
                            <td className='p-3 text-sm text-white'><button className='bg-green-600 rounded-md p-2'>Edit</button></td>
                            <td className='p-3 text-sm text-white'><button className='bg-red-500 rounded-md p-2' onClick={handleClick}>Delete</button></td>
                            

                        </tr>
                    )
                })
            }

        </tbody>
    )
}

export default Table