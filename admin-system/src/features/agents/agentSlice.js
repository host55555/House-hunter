import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import agentService from './agentService'


const initialState= {
    agents:[],
    isLoading:'',
    isError:'',
    isSuccess:'',
    message:null
}

export const registerAgent = createAsyncThunk('agents/register', async(userData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await agentService.registerAgent(userData,token)
    } catch (error) {
        const message = (
            error.response
            && error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()

        return thunkAPI.rejectWithValue(message)
        
    }
})
export const registeredAgents = createAsyncThunk('agents/get-agents',async(_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await agentService.registeredAgents(token)
    } catch (error) {
        
    }
})

export const agentsSlice = createSlice({
    name:'agents',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(registerAgent.pending,(state)=>{
            state.isLoading= true
        })
        .addCase(registerAgent.fulfilled,(state, action)=>{
            state.isLoading = false
            state.isSuccess= true
            state.agents.push(action.payload)
        })
        .addCase(registerAgent.rejected,(state,action)=>{
            state.isLoading= false
            state.isError=true
            state.message=action.payload
        })
        .addCase(registeredAgents.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(registeredAgents.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.agents=action.payload
        })
        .addCase(registeredAgents.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })
    }

})
export const {reset} = agentsSlice.actions
export default agentsSlice.reducer

