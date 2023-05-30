import axios from 'axios'

const API_URL = 'http://localhost:4000/api/agents/createAccount'
const APILOGIN = 'http://localhost:4000/api/agents/login'
const API_RESET = 'http://localhost:4000/api/agents/reset-password'

//create user account
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
//login user
const login = async (userData) => {
    const response = await axios.post(APILOGIN, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
//logout user
const logout = () => {
    localStorage.removeItem('user')
}
//send code for password reset via email
const sendCode = async (email) => {
    const response = await axios.post(API_RESET, email)
    return response.data
}

const authService = {
    register,
    login,
    logout,
    sendCode
}

export default authService
