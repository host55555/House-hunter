import { useState } from 'react'

function AddProperty() {

    const [formData, setFormData] = useState({})
    const [file, setFile] = useState(null)

    const onChange=(e)=>{
        setFormData(
            {...formData, [e.target.name]: e.target.value})

    };
    const handleFileChange = (e)=>{
        setFile(e.target.files)
    };
    
    return (
        <div>
            <div className='flex justify-center m-3'>

                <form onSubmit={onSubmit} className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
                    <h1 className='font-black text-3xl w-full flex  justify-center '><FaUser /> Create Account</h1>
                    <div className='border-t-2 mt-3 text-center'>
                        <input type="text"
                            placeholder='property owner'
                            id='owner'
                            name='owner'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <textarea
                            placeholder=' property descrition'
                            id='desc'
                            name='desc'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <input type="currency"
                            placeholder='charges/rent/fee'
                            id='amount'
                            name='amount'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <input type="number"
                            placeholder='number of properties'
                            id='quantity'
                            name='quantity'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <input type="text"
                            placeholder='property category'
                            id='category'
                            name='category'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <input type="text"
                            placeholder='location'
                            id='location'
                            name='location'
                            onChange={onChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />
                        <input type="file"
                            placeholder='property category'
                            id='images'
                            name='images'
                            onChange={handleFileChange}
                            className='border-b-[1px] my-5 border-black text-left w-full' />



                    </div>
                    <button type='submit'
                        className='w-full bg-blue-600 text-2xl font-semibold p-2 rounded-md text-white'>
                        submit
                    </button>

                </form>
            </div>
        </div>
            )
}
export default AddProperty

