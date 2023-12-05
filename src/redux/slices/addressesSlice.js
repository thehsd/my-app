import { createSlice } from '@reduxjs/toolkit'

const initialState = { addresses: [] }

const addressesSilce = createSlice({
    name: 'addresses',
    initialState,
    reducers: {
        addAddress: (state, { payload }) => {
            console.log(" payload : ", payload)
            state.addresses.push(payload)
        }
    }
})
export const { addAddress: addAddressAction } = addressesSilce.actions


export default addressesSilce.reducer