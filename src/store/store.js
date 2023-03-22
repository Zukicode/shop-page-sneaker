import { configureStore } from '@reduxjs/toolkit';
import addToCart from './slices/addToCart';

export const store = configureStore({
  reducer: {
    cart: addToCart,
  },
});
