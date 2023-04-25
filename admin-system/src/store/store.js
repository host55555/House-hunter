import {configureStore} from '@reduxjs/toolkit'
import  authReducer from '../features/auth/authSlice'
import agentsReducer from '../features/agents/agentSlice'
export const store = configureStore({
    reducer:{
        auth:authReducer,
        agents:agentsReducer
    }
})