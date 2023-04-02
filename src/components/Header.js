import { MenuOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav className='nav-container'>
        <div className='menu'>
          <MenuOutlined className='menu-icon' />
        </div>

        <div className='logo'>
          <h1>Etravel</h1>
        </div>

        <div className="right">
          <ul>
            <li><Link href="/places">Places</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
