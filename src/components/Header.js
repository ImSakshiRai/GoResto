import React from 'react';
import '../styles/Header.css'; 
import '../assets/theme_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
        <header>
      <nav>
        <div className="logo">
            <a href="#">
            <img src="https://goresto.modeltheme.com/wp-content/themes/goresto/images/theme_logo.png" alt="GoResto logo"/>
            </a>
       </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li>
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          <li><a href="#">
          <FontAwesomeIcon icon={faCartShopping} />
            </a></li>
          <li><a href="#">Sign Out</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
