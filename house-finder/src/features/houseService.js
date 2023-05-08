import axios from 'axios'
const API_URL ='http://localhost:4000/api/house/allhouses'

//const get houses
const getHouses = async() =>{
    const houses = await axios.get(API_URL)
     return houses

}


const houseService = {
    getHouses
    
}

export default houseService