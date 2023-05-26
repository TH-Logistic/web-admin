import { configureStore } from '@reduxjs/toolkit';
import { apiStateSlice } from './api-state';
import { authSlice } from './auth-state';
import { createOrderSlice } from './create-order-state';

const store = configureStore({
    reducer: {
        apiState: apiStateSlice.reducer,
        auth: authSlice.reducer,
        createOrderState: createOrderSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;