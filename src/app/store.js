import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counteSlice";


const store = configureStore({
    reducer : {
        counter : counterReducer
    }
});
export default store