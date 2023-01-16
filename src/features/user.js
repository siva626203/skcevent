import {createSlice} from '@reduxjs/toolkit'
export const userSlice= createSlice({
    name: 'user',
    initialState: {value: {username:null,status:null}},
    reducers: {
        login: (state,action)=>{
            state.value=action.payload
        },
        logout: (state)=>{
            state.value={username:null,status:null}
        }
    }   
},   
)
export const {logout,login}= userSlice.actions;
export default userSlice.reducer;