import React from 'react'

const Myproperty = () => {
    const url ='https://media.istockphoto.com/id/1382394262/photo/new-york-facade.jpg?s=612x612&w=is&k=20&c=AWf26MG4w-TR4v3S2ou3_uvQm6_MNcFH07FFpsUj9wQ='
  return (
    <div>
        <div>

        </div>
         <h1 className='m-2'>Agent Dashboard</h1>
        <div className='mx-2 px-6 text-center'>
            <table className='w-full m-3'>
                <thead className='bg-gray-50 border-b-2 border-gray-400'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>House No.</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Owner</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Quantity</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Images</th>
                        </tr>
                </thead>
                <tbody>
                <tr className='bg-blue-900'>
                    <td className='p-3 text-sm text-white'>1</td>
                    <td className='p-3 text-sm text-white'>JM. Kamau</td>
                    <td className='p-3 text-sm text-white'>4</td>
                    <td className='p-3 text-sm text-white'>Booked</td>
                    <td className='p-3 text-sm text-white'>4000</td>
                    <td className='p-3 text-sm text-white'>Skuta</td>
                    <td className='p-3 text-sm text-white'><img src={url} alt="" className='w-20'/></td>

                </tr>
                <tr className='bg-emerald-200'>
                    <td className='p-3 text-sm text-gray-700'>2</td>
                    <td className='p-3 text-sm text-gray-700'>JM. Kamau</td>
                    <td className='p-3 text-sm text-gray-700'>4</td>
                    <td className='p-3 text-sm text-gray-700'>Booked</td>
                    <td className='p-3 text-sm text-gray-700'>4000</td>
                    <td className='p-3 text-sm text-gray-700 overf'>Skuta</td>
                    <td className='p-3 text-sm text-gray-700'><img src={url} alt="" className='w-20'/></td>

                </tr>
                <tr className='bg-blue-900'>
                    <td className='p-3 text-sm text-white'>3</td>
                    <td className='p-3 text-sm text-white'>JM. Kamau</td>
                    <td className='p-3 text-sm text-white'>4</td>
                    <td className='p-3 text-sm text-white'>Booked</td>
                    <td className='p-3 text-sm text-white'>4000</td>
                    <td className='p-3 text-sm text-white'>Skuta</td>
                    <td className='p-3 text-sm text-white'><img src={url} alt="" className='w-20'/></td>

                </tr>
               
                <tr className='bg-emerald-200'>
                    <td className='p-3 text-sm text-gray-700'>4</td>
                    <td className='p-3 text-sm text-gray-700'>JM. Kamau</td>
                    <td className='p-3 text-sm text-gray-700'>4</td>
                    <td className='p-3 text-sm text-gray-700'>Booked</td>
                    <td className='p-3 text-sm text-gray-700'>4000</td>
                    <td className='p-3 text-sm text-gray-700 overf'>Skuta</td>
                    <td className='p-3 text-sm text-gray-700'><img src={url} alt="" className='w-20'/></td>

                </tr>
            </tbody>
            </table>
           

        </div>
        
    </div>
  )
}

export default Myproperty