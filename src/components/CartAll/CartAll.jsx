import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import styles from './CartAll.module.scss';
import { CartEmpty } from './CartEmpty/CartEmpty';
import { CartList } from './CartList/CartList';

export const CartAll = () => {
  const { product } = useSelector((state) => state.cart);

  return (
    <div className={styles.cartAll}>
      <div className={styles.header}>
        <h1>Cart</h1>
      </div>

      {product.inCart ? <CartList /> : <CartEmpty />}
    </div>
  );
};
