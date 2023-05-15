import axios from 'axios'


//const get houses
const getHouses = async(query) =>{
    let endpoint =`http://localhost:4000/api/house/all-houses`

    if(query !== ''){
        endpoint += `?query=${query}`
    }
    const houses = await axios.get(endpoint)
     return houses

}


const houseService = {
    getHouses
    
}

export default houseService