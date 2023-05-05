import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
export enum ApiStatus {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR
}
interface ApiState {
    value: ApiStatus;
}

const initialState: ApiState = {
    value: ApiStatus.IDLE,
}

export const apiStateSlice = createSlice({
    name: 'apiState',
    initialState,
    reducers: {
        success: (state) => {
            state.value = ApiStatus.SUCCESS;
        },
        loading: (state) => {
            state.value = ApiStatus.LOADING;
        },
        error: (state) => {
            state.value = ApiStatus.ERROR;
        },
        idle: (state) => {
            state.value = ApiStatus.IDLE;
        }

    }
});

export const { success, loading, error, idle } = apiStateSlice.actions;

export const selectApiState = (state: RootState) => state.apiState.value;