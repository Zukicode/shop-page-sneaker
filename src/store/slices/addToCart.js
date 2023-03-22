import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {
    id: 1,
    title: 'Nike Air Force',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sed? Error explicabo cum, sapiente optio ducimus obcaecati molestiae vel veritatis?',
    price: {
      generalPrice: '200.00',
      discount: 50,
      activePrice: '100.00',
    },
    quantity: 1,
    inCart: false,
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct(state) {
      state.product = { ...state.product, inCart: true };
    },

    increment(state) {
      state.product = { ...state.product, quantity: state.product.quantity + 1 };
    },

    decrement(state) {
      if (state.product.quantity <= 1) return;
      state.product = { ...state.product, quantity: state.product.quantity - 1 };
    },

    deleteProductFromCart(state) {
      state.product = { ...state.product, inCart: false };
    },
  },
});

export const { addProduct, increment, decrement, deleteProductFromCart } = counterSlice.actions;

export default counterSlice.reducer;
