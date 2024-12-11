import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {
    addProduct: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action);
      return action.payload;
    });
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
