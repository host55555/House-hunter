import React from 'react'
import {Link } from 'react-router-dom'
const MyAgents = () => {


    
  return (
    <div>
    <div className='flex justify-center items-center'>
        <h1 className='m-2 text-lg font-black'>Admin Dashboard</h1>
        <button className='bg-emerald-600 text-xl h-11 text-white rounded-lg border-2
        m-4 border-red-300'>
            <Link to="adduser">Add Agent</Link>
            </button>
    </div>
    
    <div className='mx-2 px-6 text-center'>
        <table className='w-full m-3'>
            <thead className='bg-gray-50 border-b-2 border-gray-400'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Agent no.</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Agency name</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contacts</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Address</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Edit</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Delete</th>                            
                    </tr>
            </thead>
            <tbody>
            <tr className='bg-blue-900'>
                <td className='p-3 text-sm text-white'>1</td>
                <td className='p-3 text-sm text-white'>Samtech</td>
                <td className='p-3 text-sm text-white'>O734565672</td>
                <td className='p-3 text-sm text-white'>Nyeri</td>
                <td className='p-3 text-sm text-white'>Along Kimathi st.</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-emerald-200'>
                <td className='p-3 text-sm text-gray-700'>2</td>
                <td className='p-3 text-sm text-gray-700'>Mwalimu</td>
                <td className='p-3 text-sm text-gray-700'>0789449033</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri town</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-blue-900'>
                <td className='p-3 text-sm text-white'>1</td>
                <td className='p-3 text-sm text-white'>Samtech</td>
                <td className='p-3 text-sm text-white'>O734565672</td>
                <td className='p-3 text-sm text-white'>Nyeri</td>
                <td className='p-3 text-sm text-white'>Along Kimathi st.</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-emerald-200'>
                <td className='p-3 text-sm text-gray-700'>2</td>
                <td className='p-3 text-sm text-gray-700'>Mwalimu</td>
                <td className='p-3 text-sm text-gray-700'>0789449033</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri town</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-blue-900'>
                <td className='p-3 text-sm text-white'>1</td>
                <td className='p-3 text-sm text-white'>Samtech</td>
                <td className='p-3 text-sm text-white'>O734565672</td>
                <td className='p-3 text-sm text-white'>Nyeri</td>
                <td className='p-3 text-sm text-white'>Along Kimathi st.</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-emerald-200'>
                <td className='p-3 text-sm text-gray-700'>2</td>
                <td className='p-3 text-sm text-gray-700'>Mwalimu</td>
                <td className='p-3 text-sm text-gray-700'>0789449033</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri town</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-blue-900'>
                <td className='p-3 text-sm text-white'>1</td>
                <td className='p-3 text-sm text-white'>Samtech</td>
                <td className='p-3 text-sm text-white'>O734565672</td>
                <td className='p-3 text-sm text-white'>Nyeri</td>
                <td className='p-3 text-sm text-white'>Along Kimathi st.</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
            <tr className='bg-emerald-200'>
                <td className='p-3 text-sm text-gray-700'>2</td>
                <td className='p-3 text-sm text-gray-700'>Mwalimu</td>
                <td className='p-3 text-sm text-gray-700'>0789449033</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri</td>
                <td className='p-3 text-sm text-gray-700'>Nyeri town</td>
                <td className='p-2 text-sm text-white'><button className='bg-emerald-400 rounded-lg border-2 border-pink-500 w-14'>Edit</button></td>
                <td className='p-2 text-sm text-white'><button className='bg-red-600 rounded-lg border-2 border-pink-500 w-14'>Delete</button></td>

            </tr>
          
           
        </tbody>
        </table>
       

    </div>
    
</div>
  )
}

export default MyAgents