import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Staff } from '../entities/staff';

interface AuthState {
    loggedIn: boolean,
    user?: Staff,
}

const initialState: AuthState = {
    loggedIn: false,
}

export const authSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        loggedIn: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.user = undefined;
        }
    }
});

export const { loggedIn, logout } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth.loggedIn;