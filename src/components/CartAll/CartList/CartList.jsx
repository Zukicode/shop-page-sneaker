import React from 'react';
import { CartItem } from './CartItem/CartItem';

//Styles
import styles from './CartList.module.scss';

export const CartList = () => {
  return (
    <div className={styles.cartList}>
      <div className={styles.itemsList}>
        <CartItem />
      </div>

      <button className={styles.checkout}>Checkout</button>
    </div>
  );
};
