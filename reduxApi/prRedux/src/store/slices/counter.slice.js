import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:"light"
    },
    reducers:{
        darkTheme: (state) => {
            state.value = "dark"
        },
        blueTheme: (state) => {
            state.value = "blue"
        }
    }
})

export const { darkTheme, blueTheme } = counterSlice.actions;

export default counterSlice.reducer;