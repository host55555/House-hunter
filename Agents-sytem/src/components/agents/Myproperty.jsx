import React,{useState,useEffect} from 'react'
import Table from '../Table'
const Myproperty = () => {
    const url ='https://media.istockphoto.com/id/1382394262/photo/new-york-facade.jpg?s=612x612&w=is&k=20&c=AWf26MG4w-TR4v3S2ou3_uvQm6_MNcFH07FFpsUj9wQ='
  const [houses, setHouses] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:4000/house/allhouses')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        setHouses(data);
    })
    
  },[])
  
    return (
    <div>
        <div>

        </div>
         <h1 className='m-2'>Agent Dashboard</h1>
        <div className='mx-2 px-6 text-center'>
            <table className='w-full m-3'>
                <thead className='bg-gray-50 border-b-2 border-gray-400'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Owner</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>  
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>  
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Quantity</th>                                  
                          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Deposit</th>
                            
                        </tr>
                </thead>
                {houses && <Table houses={houses}/>}
                
            </table>
           

        </div>
        
    </div>
  )
}

export default Myproperty