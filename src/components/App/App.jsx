import React from 'react';

//Styles
import styles from './App.module.scss';

//Components
import { Header } from 'components/Header/Header';
import { Product } from 'components/Product/Product';

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Product />
    </div>
  );
};
