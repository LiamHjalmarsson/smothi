import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice(
    {
        name: "ui",
        initialState: {
            searchIsVisible: false,
            notification: null 
        },
        reducers: {
            toggle(state) {
                state.searchIsVisible = !state.searchIsVisible
            } 
        }
    }
);

export const uiActions = uiSlice.actions;