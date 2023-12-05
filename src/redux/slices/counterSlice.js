import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increaseCount: (state) => {
            state.value += 1
        },
        decreaseCount: (x) => {
            x.value -= 1
        }
    }

})

export const { increaseCount, decreaseCount } = counterSlice.actions

export default counterSlice.reducer