import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to='/places'>Places</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/signup'>Collections</Link>
            </li>
            <li>
              <Link to='/sponsors'>Sponsors</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={openMenu ? 'slider active' : 'slider'}>
        <ul onClick={toggleMenu} className='ul-menu'>
          {menuData.map((item, idx) => (
            <div className='container' key={idx}>
              <li className={item.className}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
