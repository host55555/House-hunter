import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
//get user from th localstorage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
     user: user ? user: null,
     isError:false,
     isSuccess: false,
     isLoading: false,
     message: ''
}