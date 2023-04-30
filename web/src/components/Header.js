import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdClose } from 'react-icons/md';
import clsx from 'clsx';
import HeaderStyles from '../styles/HeaderStyles';
import { menu } from '../constants/menu';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import Button from './buttons/Button';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };
  return (
    <HeaderStyles>
      <div className="header__wrapper">
        <div className="header__background"></div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className={clsx("nav__wrapper", isNavOpen && "open")}>
          <div className="mobileIcon">
            <Button to="/get-an-offer" tag={Link} className="header__cta">
              GET AN OFFER
            </Button>
            <ActionButton
              className="mobileMenuBtn"
              onClick={() => setIsNavOpen(true)}
              onKeyDown={() => setIsNavOpen(true)}
            >
              MENU
            </ActionButton>
          </div>
          {isNavOpen && (
            <div
              className="mobileNavBg"
              aria-label="close menu"
              role="button"
              tabIndex={0}
              onClick={() => setIsNavOpen(false)}
              onKeyDown={() => setIsNavOpen(false)}
            />
          )}
          <nav>
            <ActionButton
              className="mobileMenuCloseBtn"
              onClick={() => setIsNavOpen(!isNavOpen)}
              onKeyDown={() => setIsNavOpen(!isNavOpen)}
            >
              <MdClose />
            </ActionButton>
            <ul>
              {menu.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={handleNavItemClick}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button to="/get-an-offer" tag={Link} className="header__cta desktop">
          GET AN OFFER
        </Button>
      </div>
    </HeaderStyles>
  );
};

export default Header;
