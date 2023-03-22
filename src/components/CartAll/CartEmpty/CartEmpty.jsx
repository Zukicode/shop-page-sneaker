import React from 'react';

//Styles
import styles from './CartEmpty.module.scss';

export const CartEmpty = () => {
  return (
    <div className={styles.cartIsEmpty}>
      <p>Your cart is empty.</p>
    </div>
  );
};
