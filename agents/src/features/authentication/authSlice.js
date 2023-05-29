import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
//get user from th localstorage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
     user: user ? user : null,
     isError:false,
     isSuccess: false,
     isLoading: false,
     message: ''
}

//register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI)=>{
     try {
          return await authService.register(user)

     } catch (error) {
          const message = (
               error.response
                && error.response.data && 
               error.response.data.message) || 
               error.message  ||
                error.toString()

               return thunkAPI.rejectWithValue(message)
          
     }
})
//login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI)=>{
     try {
          return await authService.login(user)

     } catch (error) {
          const message = (
               error.response && error.response.data && 
               error.response.data.message ) || error.message 
               || error.toString()

               return thunkAPI.rejectWithValue(message)
          
     }
})
//logout user
export const logout= createAsyncThunk('auth/logout',
async () =>{
     await authService.logout()
})
export const sendCode = createAsyncThunk('code/pass-reset',async(email, thunkAPI)=>{
     try{
          const response = await authService.sendCode(email)
          return response
     }catch(error){
          const message = (
               error.response && error.response.data && 
               error.response.data.message ) || error.message 
               || error.toString()

               return thunkAPI.rejectWithValue(message)
     }
})

export const authSlice = createSlice({
     name:'auth',
     initialState,
     reducers:{
          reset:(state) =>{
               state.isLoading=false
               state.isError= false
               state.isSuccess= false
               state.message=''
          },
     },
     extraReducers: (builder)=>{
          builder
          //register user
          .addCase(register.pending, (state)=>{
               state.isLoading = true
          })
          .addCase(register.fulfilled,(state,action)=>{
               state.isLoading=false
               state.isSuccess= true
               state.user=action.payload
               state.message='Sign up Successful'
          })
          .addCase(register.rejected,(state,action)=>{
               state.isLoading=false
               state.isSuccess=false
               state.message=action.payload
               state.user=null
               state.isError=true
          })
          //login
          .addCase(login.pending,(state)=>{
               state.isLoading=true
          })
          .addCase(login.fulfilled, (state,action)=>{
               state.isLoading=false
               state.isSuccess=true
               state.user=action.payload
          
          })
          .addCase(login.rejected,(state, action)=>{
               state.isLoading=false
               state.isSuccess=false
               state.message=action.payload
               state.user=null
               state.isError=true
          })
          //logout
          .addCase(logout.fulfilled, (state)=>{
               state.user=null
          })
          //send code
          .addCase(sendCode.pending,(state)=>{
               state.isLoading = true
          })
          .addCase(sendCode.fulfilled,(state,action)=>{
               state.isLoading= false
               state.isSuccess= true
               state.message=action.payload
          })
          .addCase(sendCode.rejected,(state,action)=>{
               state.isLoading=false
               state.isSuccess=false
               state.message=action.payload
               state.isError=true
          })
     }

})
export const {reset} = authSlice.actions

export default authSlice.reducer
