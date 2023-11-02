import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counteSlice";
import usersReduser from "../features/users/usersSlice";


const store = configureStore({
    reducer : {
        counter : counterReducer,
        users : usersReduser
    }
});
export default store  