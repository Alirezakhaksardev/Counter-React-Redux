import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    Loading : false ,
    users : [],
    errors : ""
}

const fetchUsers = createAsyncThunk("users/fetchUsers" , () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data)
})

const usersSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending , (state) => {
            state.Loading = true
        });
        builder.addCase(fetchUsers.fulfilled , (state , action) => {
            state.Loading = false
            state.users = action.payload 
            state.errors = ""
        })
        builder.addCase(fetchUsers.rejected , (state , action) => {
            state.Loading = false;
            state.users = [];
            state.errors = action.error.message
        });
    }
});

export default usersSlice.reducer
export {fetchUsers} 
export const {userSelector} = state => state.users