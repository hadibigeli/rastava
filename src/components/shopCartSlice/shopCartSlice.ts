import { createSlice } from "@reduxjs/toolkit";

export const shopCartSlice = createSlice({
  name: "shopCart",
  initialState: {
    items : [],
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    getProductsQuantity: (state, action) => {},
    addItemToCart: (state, action) => {},
    removeItemFormCart: (state, action) => {},
    deleteFromCart : (state , action) =>{} ,
    getTotalAmount: (state , action) =>{}
  },
});

export const {
  removeItemFormCart,
  addItemToCart,
  increment,
  deleteFromCart,
  decrement,
  incrementByAmount,
  getProductsQuantity,
  getTotalAmount
} = shopCartSlice.actions;

export default shopCartSlice.reducer;
