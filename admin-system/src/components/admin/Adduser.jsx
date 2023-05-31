import React, { useState } from 'react'

const Adduser = () => {
  const [agency, setAgency] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [contacts, setContacts] = useState('')
  const [email, setEmail] = useState('')
  const [ispending, setIspending] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const User = { agency, location, address, contacts, email,}
    setIspending(true);
    fetch('http://localhost:4000/agents/adduser', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(User)
    }).then(() => {
      setMessage('New User Added!!!');
      setIspending(false);
    }).catch((error)=>{
          setMessage('Could not add!!!')
    })


  }



  return (
    <div className='bg-slate-200 h-[100vh] flex justify-center items-center'>
          
      <form className='border border-gray-800 shadow-md shadow-black
        rounded-lg m-5  w-72 ' onSubmit={handleSubmit}>
          <h1 className='text-white bg-green-600 font-white'>{message}</h1>
        <h1 className='font-black '>New Agency</h1>
        <input type="text" placeholder='Agency name' required value={agency} onChange={(e) => setAgency(e.target.value)}
          className='border border-green-600 rounded-lg m-2 text-center' />

        <input type="text" placeholder='Agency location' required value={location} onChange={(e) => setLocation(e.target.value)}
          className='border border-green-600 rounded-lg m-2 text-center' />

        <input type="text" placeholder='Agency address' required value={address} onChange={(e) => setAddress(e.target.value)}
          className='border border-green-600 rounded-lg m-2 text-center' />

        <input type="text" placeholder='Agency contacts' required value={contacts} onChange={(e) => setContacts(e.target.value)}
          className='border border-green-600 rounded-lg m2 text-center' />

        <input type="email" placeholder='Agency email' required value={email} onChange={(e) => setEmail(e.target.value)}
          className='border border-green-600 rounded-lg m-2 text-center' />
       
        {!ispending && <button className='bg-emerald-500 w-32 rounded-lg m-3'>Add user </button>}
        {ispending && <button disabled className='bg-emerald-500 w-32 rounded-lg m-3'>Adding user... </button>}
      </form>

    </div> 
  )
}

export default Adduser