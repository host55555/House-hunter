import axios from 'axios'

const API_URL1 = 'http://localhost:4000/api/house/addhouse'
const API_URL2 = 'http://localhost:4000/api/house/myproperties'
//add house
const addProperty = async (houseData, token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL1, houseData,config)

    return response.data
}
//get agents properties 
const getAllHouses = async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL2, config)

    return response.data
}

const propertyService={
    addProperty,
    getAllHouses
}
export default propertyService