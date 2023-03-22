import React from 'react';

//Style
import styles from './MobileMenu.module.scss';

//Images
import closeMenuImage from 'assets/icon-close.svg';

export const MobileMenu = ({ openMenu, setOpenMenu }) => {
  const closeMenu = () => setOpenMenu(false);

  return (
    <div className={openMenu ? `${styles.showMobileMenu} ${styles.active}` : styles.showMobileMenu}>
      <div className={openMenu ? `${styles.mobile} ${styles.active}` : styles.mobile}>
        <div onClick={closeMenu} className={styles.closeMenu}>
          <img src={closeMenuImage} alt="close-menu" />
        </div>

        <div className={styles.mobileList}>
          <nav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contanct</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
