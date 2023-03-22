import React from 'react';

//Styles
import styles from './CartItem.module.scss';

//Images
import itemTempImage from 'assets/image-product-1-thumbnail.jpg';
import deleteIcon from 'assets/icon-delete.svg';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from 'store/slices/addToCart';

export const CartItem = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);

  const deleteProduct = () => dispatch(deleteProductFromCart());

  return (
    <div className={styles.item}>
      <img
        className={styles.thumbail}
        src={itemTempImage}
        alt="item"
        width={'50px'}
        height={'50px'}
      />
      <div className={styles.description}>
        <p className={styles.name}>Fall Limited Edition Sneakers</p>

        <div className={styles.price}>
          <p className={styles.priceOne}>
            ${product.price.activePrice} x {product.quantity}
          </p>
          <p className={styles.priceAll}>${product.price.activePrice * product.quantity}</p>
        </div>
      </div>

      <div className={styles.delete} onClick={deleteProduct}>
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
};
