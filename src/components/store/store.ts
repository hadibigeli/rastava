import { configureStore } from '@reduxjs/toolkit';
import shopCartReducer from '../shopCartSlice/shopCartSlice';

export const store = configureStore({
  reducer: {
    shopCart: shopCartReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;