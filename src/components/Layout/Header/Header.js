import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src='./logo.png' alt="HOMEHERO" />
      </div>
      <nav>
        <ul>
          <li><a href="#">For sale</a></li>
          <li><a href="#">To rent</a></li>
          <li><a href="#">House prices</a></li>
          <li><a href="#">Agent valuation</a></li>
          <li><a href="#">Instant valuation</a></li>
        </ul>
      </nav>
      <div className="right-side">
        <ul>
          <li><a href="#">My Home</a></li>
          <li><a href="#">Saved</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header