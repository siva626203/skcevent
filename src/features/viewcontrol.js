import React, { Fragment, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
export const ViewSlice=createSlice({
    name:"AdminControl",
    initialState:{value:{add:false,delete:false,edit:false}},
    reducers:{
        Add:(state,action)=>{
            state.value=action.payload
        },
        Delete:(state,action)=>{
            state.value=action.payload
        },
        Edit:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const [Add,Delete,Edit]=ViewSlice.actions;
export default ViewSlice.reducer;