import React, { useState } from 'react';

//Styles
import styles from './Header.module.scss';

//Images
import logoImage from 'assets/logo.svg';
import profileImage from 'assets/image-avatar.png';
import mobileImage from 'assets/icon-menu.svg';

//Components
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { CartIcon } from 'components/CartIcon/CartIcon';
import { CartAll } from 'components/CartAll/CartAll';

//Redux
import { useSelector } from 'react-redux';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);

  const { product } = useSelector((state) => state.cart);

  const showMenu = () => setOpenMenu(true);
  const handleClickCart = () => setOpenCart(!openCart);

  const changeMenu = (selected) => setActiveMenu(selected);

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div onClick={showMenu} className={styles.mobileMenu}>
          <img src={mobileImage} alt="mobile-menu" />
        </div>

        <div className={styles.logo}>
          <img src={logoImage} alt="logo" />
        </div>

        <nav>
          <ul>
            <li onClick={() => changeMenu(1)} className={activeMenu === 1 ? styles.active : ''}>
              <a href="#">Collections</a>
            </li>
            <li onClick={() => changeMenu(2)} className={activeMenu === 2 ? styles.active : ''}>
              <a href="#">Men</a>
            </li>
            <li onClick={() => changeMenu(3)} className={activeMenu === 3 ? styles.active : ''}>
              <a href="#">Women</a>
            </li>
            <li onClick={() => changeMenu(4)} className={activeMenu === 4 ? styles.active : ''}>
              <a href="#">About</a>
            </li>
            <li onClick={() => changeMenu(5)} className={activeMenu === 5 ? styles.active : ''}>
              <a href="#">Contanct</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.cabinet}>
        <div onClick={handleClickCart} className={styles.cart}>
          <CartIcon />
          {product.inCart && <div className={styles.count}>{product.quantity}</div>}
        </div>

        <div className={styles.profile}>
          <img src={profileImage} alt="logo" />
        </div>

        {openCart && <CartAll />}
      </div>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};
