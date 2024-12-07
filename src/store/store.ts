import { configureStore } from '@reduxjs/toolkit';
import shopCartReducer from './shopCartSlice/shopCartSlice';

export const store = configureStore({
  reducer: {
    shopCart: shopCartReducer, 
  },
});

