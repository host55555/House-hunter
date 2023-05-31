import axios from 'axios'

const API_URL = 'http://localhost:4000/api/agents/register'
const API_URL2=''
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
//fetch agents list
const registeredAgents = async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
}
const agentService = {
    registerAgent
}

export default agentService