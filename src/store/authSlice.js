import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        register(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user
        }
    }
});