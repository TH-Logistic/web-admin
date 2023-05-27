import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { CreateOrderChosenProductsInput, CreateOrderInputs, CreateOrderDetailInput } from '../pages/CreateOrderPage/Steps/CreateOrderPageTypes';
import { Route } from '../entities/route';

const initialState: CreateOrderInputs = {
}

export const createOrderSlice = createSlice({
    name: 'createOrderState',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<CreateOrderChosenProductsInput>) => {
            state.products = action.payload.products;
        },

        removeProducts: (state) => {
            state.products = undefined;
        },

        addRoute: (state, action: PayloadAction<Route>) => {
            state.route = action.payload;
        },

        removeRoute: (state) => {
            state.route = undefined;
        },

        addDetail: (state, action: PayloadAction<CreateOrderDetailInput>) => {
            state = { ...action.payload }
        },
        removeDetail: (state) => {
            state = {
                ...initialState,
                products: state.products,
                route: state.route
            };
        },

        clear: (state) => {
            state = initialState;
        }
    }
});

export const { addDetail, addProducts, addRoute, clear, removeDetail, removeProducts, removeRoute } = createOrderSlice.actions;

export const selectCreateOrderState = (state: RootState) => state.createOrderState;