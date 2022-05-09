import React from 'react';

import './Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="navbar fixed-bottom navbar-light bg-light" data-testid="footer">

      <a className="navbar-brand" href="/drinks">
        <div className="container-fluid">
          <img src={ drinkIcon } alt="Drink Icon" data-testid="drinks-bottom-btn" />
        </div>
      </a>

      <a href="/explore">
        <div className=".footer-icons">
          <img src={ exploreIcon } alt="Explore Icon" data-testid="explore-bottom-btn" />
        </div>
      </a>

      <a href="/foods">
        <div className=".footer-icons">
          <img src={ mealIcon } alt="Meal Icon" data-testid="food-bottom-btn" />
        </div>
      </a>

    </footer>
  );
}

export default Footer;
