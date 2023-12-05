import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import addressesSlice from './slices/addressesSlice'


const store = configureStore({
    reducer: {
        counter: counterSlice,
        addresses: addressesSlice
    }
})
export default store