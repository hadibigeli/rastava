import { createSlice } from "@reduxjs/toolkit";
import { ProductsTypes, shopCartProductsTypes } from "../../types/typesFiles";

const initialState = {
  items: [] as shopCartProductsTypes[],
  productById: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    quantity: 0,
  } as shopCartProductsTypes | undefined,
};

export const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      if (state.items.length === 0) {
        const newItems = action.payload.map((item: any) => ({
          ...item,
          quantity: 0,
        }));
        state.items = newItems;
      }
    },

    getProductsQuantity: (state, action) => {
      console.log(action.payload);

      const product = action.payload.find((item: any) => item.id === 1);
      if (product) {
        state.productById = product;
      } else {
        state.productById = undefined;
      }
    },

    addItemToCart: (state, action) => {
      const id = action.payload;
      console.log(id);

      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      console.log(state.items);
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      console.log(id);

      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      console.log(state.items);
    },

    deleteFromCart: (state, action) => {
      const id = action.payload;
      console.log(id);
      
      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity: 0 } : item
      );
      console.log(state.items);

    },
    getTotalAmount: (state, action) => {},
  },
});

export const {
  setItems,
  getProductsQuantity,
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
  getTotalAmount,
} = shopCartSlice.actions;

export default shopCartSlice.reducer;
