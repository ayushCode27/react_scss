import { MenuOutlined } from '@material-ui/icons';
import React from 'react';
// import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <div className='menu'>
          <MenuOutlined className='menu-icon' />
        </div>

        <div className='logo'>
          <h1>Etravel</h1>
        </div>

        <div className="right">
          <ul>
            <li><a href="/places">Places</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/signup">Collections</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
