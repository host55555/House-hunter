import axios from 'axios'

const API_URL = 'http://localhost:4000/agents/register'
//register agents by admin
const registerAgent = async(userData, token)=>{
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }        
    }

    const response = await axios.post(API_URL,userData, config)

    return response.data
}
const agentService = {
    registerAgent
}

export default agentService