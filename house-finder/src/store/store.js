import {configureStore} from "@reduxjs/toolkit"
import houseReducer from '../features/houseSlice'

export const store = configureStore({
    reducer:{
        houses: houseReducer
    },
});