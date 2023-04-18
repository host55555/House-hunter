import React, { useState } from 'react'
import axios from 'axios'

const AddHouse = () => {
 
  const [owner, setOwner] = useState("")
  const [desc, setDesc] = useState("")
  const [agent, setAgent] = useState("")
  const [price, setPrice] = useState("")
  const [deposit, setDeposit] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [filename, setFileName] = useState("")
  const [message, setMessage] = useState("")

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  const changeOnclick = (e) => {
    e.preventDefault();



    const formData = new FormData();

    formData.append("owner", owner);
    formData.append("desc", desc);
    formData.append("agent", agent);
    formData.append("price", price);
    formData.append("deposit", deposit);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("location", location);
    formData.append("houseImage", filename);


    axios.post('http://localhost:4000/house/addhouse', formData,{

    })
      .then((res) => {
        setMessage(res.data);

      })
      .catch((err) => {
        console.log(err);
      });



  }


  return (
    <div className='m-5 p-5  flex justify-center'>

      <span>{message}</span>
      <form onSubmit={changeOnclick} className=" border border-pink-700 rounded-xl shadow-md
         shadow-pink-700 w-56 "
        encType="multipart/form-data" >
        <h1 className='text-2xl font-black'>Add new house</h1>
        <input type="text" className='border border-green-600 rounded-lg m-2 text-center'
          value={owner} placeholder="owner"
          onChange={(e) => setOwner(e.target.value)} /> <br />
        <textarea type="text" className='border border-green-600 rounded-lg m-2 text-center'
          value={desc} placeholder="description"
          onChange={(e) => setDesc(e.target.value)} />
        <br />
        <input type="text" className='border border-green-600 rounded-lg m-2 text-center'
          value={agent} placeholder="agent"
          onChange={(e) => setAgent(e.target.value)} /> <br />
           <input type="text" className='border border-green-600 rounded-lg m-2 text-center'
          value={location} placeholder="Location"
          onChange={(e) => setLocation(e.target.value)} /> <br />
        <input type="text" value={price} className='border border-green-600 rounded-lg m-2 text-center'
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)} /> <br />
           <input type="text" value={category} className='border border-green-600 rounded-lg m-2 text-center'
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)} /> <br />
        <input type="number" className='border border-green-600 rounded-lg m-2 text-center'
          placeholder="Deposit" onChange={(e) => setDeposit(e.target.value)} />
           <input type="number" className='border border-green-600 rounded-lg m-2 text-center'
          placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />

        <input type="file" filename="houseImage" className='border border-green-600 rounded-lg m-2 w-52 text-center'
          onChange={onChangeFile} /><br />

        <button type='submit' className='bg-emerald-500 w-32 rounded-lg m-3'> Post House</button>
      </form>
    </div>
  )
}

export default AddHouse