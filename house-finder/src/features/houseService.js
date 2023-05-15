import axios from 'axios'


//const get houses
const getHouse = async(query) =>{
    let endpoint =`http://localhost:4000/api/house/all-houses`

    if(query !== ''){
        endpoint += `?query=${query}`
    }
    const houses = await axios.get(endpoint)
     return houses

}


const houseService = {
    getHouse
    
}

export default houseService