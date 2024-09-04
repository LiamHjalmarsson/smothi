import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui-slice";
import { cartSlice } from "./cart-slice";
import { authSlice } from "./authSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
    }
});