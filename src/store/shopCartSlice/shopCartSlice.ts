import { createSlice } from "@reduxjs/toolkit";
import { shopCartProductsTypes } from "../../types/typesFiles";

const initialState = {
  items: [] as shopCartProductsTypes[],
  totalQuantity: 0 as Number,
  productSelected: [] as shopCartProductsTypes[] | undefined,
  totalPrice : 0  as Number | null,   
};

export const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      const newItems = action.payload.map((item: any) => ({
        ...item,
        quantity: 0,
      }));
      state.items = newItems;
    },

    getProductsQuantity: (state) => {
      const product = state.items.filter(
        (item: shopCartProductsTypes) => item.quantity !== 0
      );

      if (product.length !== 0) {
        state.productSelected = [...(state.productSelected || []), ...product];
      } else {
        state.productSelected = undefined;
      }

      console.log("Product Selected:", state.productSelected);
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
    getTotalAmount: (state) => {
      const totalQuantity = state.productSelected?.reduce((total, item) => {
        return item.quantity !== 0 ? total + item.quantity : total;
      }, 0);

      state.totalQuantity = totalQuantity || 0;
    },
    deleteFromShopCart: (state) => {
      state.productSelected = [];
    },
    getTotalPrice: (state) => {
      const totalPrice = state.productSelected?.reduce((total, item) => {
        return total + (item?.price ?? 0) * (item?.quantity ?? 0);
      }, 0);
    },
  },
});

export const {
  setItems,
  getProductsQuantity,
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
  getTotalAmount,
  deleteFromShopCart,
} = shopCartSlice.actions;

export default shopCartSlice.reducer;
