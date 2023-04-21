import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import propertyService from './propertyService'


    const initialState={
        houses:[],
        isError: false,
        isLoading: false,
        isSuccess: false,
        message:''
    }
    //add new property

    export const addProperty = createAsyncThunk('house/add',async(houseData, thunkAPI)=>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await propertyService.addProperty(houseData,token)
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

     //create the slice
     export const propertySlice = createSlice({
        name:'property',
        initialState,
        reducers:{
            reset:(state)=> initialState
        },
        extraReducers: (builder)=>{
            builder
            //add property
            .addCase(addProperty.pending, (state)=>{
                state.isLoading= true
            })
            .addCase(addProperty.fulfilled, (state,action)=>{
                state.isLoading= false
                state.isSuccess=true
                state.houses.push(action.payload)
            })
            .addCase(addProperty.rejected, (state,action)=>{
                state.isLoading=false
                state.isSuccess=false
                state.message = action.payload
            })

        }
     })

     export const {reset} = propertySlice.actions
     export default propertySlice.reducer
