import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './styles/Header.scss';
import { menuData } from '../Data';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='header'>
      <nav className='nav-container'>
        <div className='menu'>
          <MenuOutlined className='menu-icon' onClick={toggleMenu} />
        </div>

        <div className='logo'>
          <h1>Etravel</h1>
        </div>

        <div className='right'>
          <ul>
            <li>
              <a href='/places'>Places</a>
            </li>
            <li>
              <a href='/pricing'>Pricing</a>
            </li>
            <li>
              <a href='/signup'>Collections</a>
            </li>
            <li>
              <a href='/sponsors'>Sponsors</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={openMenu ? 'slider active' : 'slider'}>
        <ul onClick={toggleMenu} className='ul-menu'>
          {menuData.map((item, idx) => (
            <div className='container' key={idx}>
              <li className={item.className}>
                <a href={item.path}>{item.text}</a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
