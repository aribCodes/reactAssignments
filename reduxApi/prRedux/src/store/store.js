import todoReducer from "./slices/counter.slice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        counter: todoReducer
    }
    
})
  
export default store