import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counterVlaue : 0
}

const counterSlice = createSlice({
    name : 'Counter' ,
    initialState ,
    reducers : {
        increment : (state) => {
            state.counterVlaue++
        },
        decrement : (state) => {
            state.counterVlaue--
        },
        incrementByAmount : (state , action) =>{
            state.counterVlaue += action.payload
        },
        decrementByAmount : (state , action) =>{
            state.counterVlaue -= action.payload
        },
    }
})

export default counterSlice.reducer
export const {increment , decrement , incrementByAmount , decrementByAmount} = counterSlice.actions;
export const selectCounter = (state) => state.counter.counterVlaue