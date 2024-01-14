import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        items : [{name : 'hamid'},{name : 'maryam'}]
    },
    reducers : {
        addToCart : ()=>{

        }
    }
})

export const {addToCart} = authSlice.actions
export default authSlice.reducer