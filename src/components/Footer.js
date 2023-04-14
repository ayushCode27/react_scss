import React from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router-dom';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@material-ui/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='carts'>
        <ul>
          <li>
            <Link to='#'>Most Asked Questions</Link>
          </li>
          <li>
            <Link to='#'>What we do ?</Link>
          </li>
          <li>
            <Link to='#'>History of company</Link>
          </li>
          <li>
            <Link to='#'>Our Clients</Link>
          </li>
          <li>
            <Link to='#'>Market Place</Link>
          </li>
        </ul>
        <form>
          <label>Your Name</label>
          <input type='text' required />
          <label>Your Email</label>
          <input type='email' required />
          <label>Message</label>
          <textarea></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>

      <div className='media'>
        <Link to='#'>
          <Facebook />
        </Link>
        <Link>
          <Instagram />
        </Link>
        <Link>
          <Twitter />
        </Link>
        <Link>
          <YouTube />
        </Link>
        <Link>
          <LinkedIn />
        </Link>
        <Link>
          <GitHub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
