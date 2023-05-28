import axios from 'axios'
const APIURL = '/api/house/all-houses'

//const get houses
const getHouse = async() =>{
    const response = await axios.get(APIURL)

    return response
   

}
const searchHouses = async (query) =>{
    const response = await axios.get(`/api/house/search-houses/${query}`)
    return response
}

const houseService = {
    getHouse,
    searchHouses
        
}

export default houseService