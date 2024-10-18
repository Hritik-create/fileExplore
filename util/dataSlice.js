/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import fileData from "../components/fileData";

const dataSlice = createSlice({
    name:"data",
    initialState: {
        availability:false,
        fileData: {},
    },
    reducers:{
        addData: (state,action) => {
            // console.log('state payload',action.payload);
            

            let x = action.payload
            console.log('x',x)

            state.fileData=action.payload
            console.log('files',state.fileData)
            // console.log('loggin from store',state.fileData)
        },
        setAvailability: (state,action) => {
            console.log(action.payload.data);
            state.availability={...action.payload.data}
        }
    }
});

export const {addData,setAvailability} = dataSlice.actions;

export default dataSlice.reducer;