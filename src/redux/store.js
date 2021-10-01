import { configureStore } from "@reduxjs/toolkit";
import classListReducer from './classListSlice'

export default configureStore({
    reducer: {
        classList: classListReducer,
    }
})
