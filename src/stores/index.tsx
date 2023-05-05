import { configureStore } from '@reduxjs/toolkit';
import { apiStateSlice } from './api-state';

const store = configureStore({
    reducer: {
        apiState: apiStateSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;