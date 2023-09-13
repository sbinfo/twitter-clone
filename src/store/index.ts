import { configureStore } from '@reduxjs/toolkit'
import postSlice from './slices/postSlice'

export const store = configureStore({
    reducer: {
        postSlice
    }
})

// export types for custom hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


