import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
            totalQuantity: 0,
            totalAmount: 0,
        },
        reducers: {
            addItemToCart(state, action) {
                const newItem = action.payload;
                const existingItem = state.items.find((item) => item.id === newItem.id);

                state.totalQuantity++;
                state.totalAmount += newItem.price;
                state.changed = true;

                if (!existingItem) {
                    state.items.push({
                        id: newItem.id,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                        title: newItem.title,
                        img: newItem.img
                    });
                } else {
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                }
            },
            removeItemFromCart(state, action) {
                const id = action.payload;
                const existingItem = state.items.find((item) => item.id === id);

                state.totalQuantity--;
                state.totalAmount -= existingItem.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }
            },
            removeItemsFromCart(state, action) {
                const id = action.payload;
                const existingItem = state.items.find((item) => item.id === id);

                if (existingItem) {
                    state.totalQuantity -= existingItem.quantity;
                    state.totalAmount -= existingItem.totalPrice;
                    state.items = state.items.filter((item) => item.id !== id);
                }
            },
            clearCart(state) {
                state.items = [];
                state.totalQuantity = 0;
                state.totalAmount = 0;
            }
        }
    }
);

export const cartActions = cartSlice.actions;