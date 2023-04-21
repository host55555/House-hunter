import axios from 'axios'

const API_URL1 = 'http://localhost:4000/api/house/addhouse'

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

const propertyService={
    addProperty
}
export default propertyService