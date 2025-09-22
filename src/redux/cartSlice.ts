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
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    //changeQuantity in cart
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

