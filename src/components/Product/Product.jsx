import React, { useState } from 'react';

//Styles
import styles from './Product.module.scss';

//Images
import plusIcon from 'assets/icon-plus.svg';
import minusIcon from 'assets/icon-minus.svg';

import imageProduct1 from 'assets/image-product-1.jpg';
import imageProduct2 from 'assets/image-product-2.jpg';
import imageProduct3 from 'assets/image-product-3.jpg';
import imageProduct4 from 'assets/image-product-4.jpg';

import { CartIcon } from 'components/CartIcon/CartIcon';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  decrement,
  decrementProduct,
  increment,
  incrementProduct,
} from 'store/slices/addToCart';

const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

export const Product = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { product } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const changeImage = (active) => setActiveImage(active);

  const newProduct = () => dispatch(addProduct());

  return (
    <div className={styles.product}>
      <div className={styles.images}>
        <div className={styles.generalImage}>
          <img src={images[activeImage]} alt="product" />
        </div>
        <div className={styles.otherImage}>
          {images.map((img, i) => (
            <img
              onClick={() => changeImage(i)}
              key={i}
              src={img}
              className={activeImage === i ? styles.active : ''}
              alt="non-active"
            />
          ))}
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.title}>
          <h1 className={styles.miniTitle}>sneaker company</h1>
          <h1 className={styles.activeTitle}>{product.title}</h1>
        </div>

        <div className={styles.details}>
          <p>{product.description}</p>
        </div>

        <div className={styles.price}>
          <div className={styles.generalPrice}>
            <h1 className={styles.activePrice}>${product.price.activePrice}</h1>
            <div className={styles.discount}>{product.price.discount}%</div>
          </div>

          <p className={styles.previousPrice}>${product.price.generalPrice}</p>
        </div>

        <div className={styles.buy}>
          <div className={styles.count}>
            <button onClick={() => dispatch(decrement())}>
              <img style={{ marginBottom: '1px' }} src={minusIcon} alt="minus" />
            </button>
            <p>{product.quantity}</p>
            <button onClick={() => dispatch(increment())}>
              <img src={plusIcon} alt="plus" />
            </button>
          </div>

          <button onClick={newProduct} className={styles.addToCart}>
            <CartIcon />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
