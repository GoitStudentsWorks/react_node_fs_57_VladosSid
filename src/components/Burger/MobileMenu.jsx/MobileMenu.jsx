import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import Logo from 'components/Logo/Logo';
import { Ul } from '../../Navigation/Navigation.styled';
import { CrossIcon } from './MobileMenu.styled';
import { BackdropMobileMenu } from './MobileMenu.styled';
import styles from './MobileMenu.module.css';
import x from '../../../images/Header/x.svg';
import SwitcherBtn from './SwitcherBtn';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const burgerBtn = document.getElementById('burger-btn');
    if (!burgerBtn) {
      return;
    }
    burgerBtn.addEventListener('click', () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    });

    return burgerBtn.removeEventListener('click', () => setIsOpen(true));
  });

  const clickToggle = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className={isOpen === false ? styles.overlay : styles.active}>
      <BackdropMobileMenu>
        <div>
          <Logo onClick={() => clickToggle()} />
          <CrossIcon onClick={() => clickToggle()}>
            <img src={x} alt="cross" width={32} height={32} />
          </CrossIcon>
        </div>
        <nav>
          <Ul>
            <li onClick={() => clickToggle()}>
              <NavLink to="/categories/Lamb">Categories</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/add">Add recipes</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/my">My recipes</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/search">
                <AiOutlineSearch size={24} alt="search" />
                <p>Search</p>
              </NavLink>
            </li>
          </Ul>
          <SwitcherBtn />
        </nav>
      </BackdropMobileMenu>
    </div>
  );
};
export default MobileMenu;