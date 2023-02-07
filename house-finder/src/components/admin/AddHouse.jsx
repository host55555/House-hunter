import React,{useState} from 'react'
import axios from 'axios'
const AddHouse = () => {
    const url ='http://localhost:5000/add'
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [agent, setAgent] = useState("")
    const [price, setPrice] = useState("")
    const [filename,setFileName] = useState("")
    const [message, setMessage] = useState("")

    const onChangeFile=(e)=>{
        setFileName(e.target.files[0]);
    };
    const changeOnclick = (e)=>{
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("title",title);
        formData.append("desc",desc);
        formData.append("agent",agent);
        formData.append("price",price);
        formData.append("houseImage",filename);

        setTitle("");
        setDesc("");
        setAgent("");
        setPrice("");

        axios
            .post(`${url}`, formData)
            .then((res)=> {
                setMessage(res.data)
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err);
            });
    }
  return (
    <div className='m-5 p-5 border block justify-center bg-sky-500'>
        <h1 className='text-2xl font-black'>Add new house</h1>
        <span>{message}</span>
        <form onSubmit={changeOnclick} 
        encType="multipart/form-data" m-5>
            <input type="text" className='m-5 border'
            value={title} placeholder="title"
            onChange={(e) => setTitle(e.target.value)}/> <br/>
             <textarea type="text" className='m-5 border'
              value={desc} placeholder="description"
            onChange={(e)=> setDesc(e.target.value)}>
                </textarea> <br/>
             <input type="text" className='m-5 border'
             value={agent} placeholder="agent"
            onChange={(e)=> setAgent(e.target.value)}/> <br/>
             <input type="text" value={price} className='m-5 border'
              placeholder="price"
            onChange={(e)=> setPrice(e.target.value)}/> <br/>
            <input type="file" filename="houseImage" className='m-5 border'
            onChange={onChangeFile}/><br/>
        
            <button type='submit' className='bg-green-500 border border-red-600'> Post House</button>
        </form>
    </div>
  )
}

export default AddHouse