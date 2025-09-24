import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "../types/types";
import type { Product } from "../types/types";

const initialState: CartState = {
  cartItems: [] as Product[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity ?? 1) + 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const itemId = action.payload.id;
      const itemToUpdate = state.cartItems.find(
        (product) => product.id === itemId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = (itemToUpdate.quantity ?? 0) + 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<{id: number;}>) => {
      const itemId = action.payload.id;
      const itemToUpdate = state.cartItems.find(
        (product) => product.id === itemId
      );
      if (
        itemToUpdate &&
        typeof itemToUpdate.quantity === "number" &&
        itemToUpdate.quantity > 1
      ) {
        itemToUpdate.quantity -= 1;
      } else if (itemToUpdate && itemToUpdate.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const {addCartItem, removeCartItem, clearCart, increaseQuantity, decreaseQuantity,} = cartSlice.actions;
export default cartSlice.reducer;
