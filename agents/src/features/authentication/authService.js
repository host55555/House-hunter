import axios from 'axios'

const API_URL = 'http://localhost:4000/api/agents/createAccount'
const APILOGIN='http://localhost:4000/api/agents/login'

//create user account
const register= async(userData)=>{
    const response = await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
//login user
const login = async (userData)=>{
    const response = await axios.post(APILOGIN,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
//logout user
const logout = ()=>{
    localStorage.removeItem('user')
}
const authService = {
    register,
    login,
    logout
}

export default authService
