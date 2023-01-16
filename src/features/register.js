import {createSlice} from '@reduxjs/toolkit'
export const registerSlice= createSlice({
    name: 'register',
    initialState: {value: {position:""}},
    reducers: {
        status: (state,action)=>{
            state.value=action.payload;
        }
    }   
},   
)
export const {status}= registerSlice.actions;
export default registerSlice.reducer;