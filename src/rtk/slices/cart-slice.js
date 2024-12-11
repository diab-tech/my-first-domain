import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      console.log("findProduct", findProduct);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearAll: (state, action) => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  clearAll,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
