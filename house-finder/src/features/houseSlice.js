import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import houseService from './houseService'

const initialState ={
    houses: [],
    isError: false,
    isSuccess:false,
    isLoading: false
    
}
//get all houses
export const getHouses = createAsyncThunk('houses/getAll', async(_,thunkAPI)=>{
    try {

        return await houseService.getHouses()
        
    } catch (error) {
        console.log(error)
        
    }
})

 export const houseSlice = createSlice({
    name:'house',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder)=>{
        builder
        //get Houses
        .addCase(getHouses.pending, (state,action)=>{
            state.isLoading = true
        })
        .addCase(getHouses.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess=true
            state.houses= action.payload
        })
        .addCase(getHouses.rejected, (state,action)=>{
            state.isLoading = false
            state.isError= true
            
        })
    }
 })

 export const {reset} = houseSlice.actions
 export default houseSlice.reducer