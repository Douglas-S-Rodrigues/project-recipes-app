import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header({ title, handleSearch, searchRender }) {
  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile');
  };

  if (searchRender) {
    return (
      <header>
        <div className="header">

          <button
            type="button"
            onClick={ handleProfile }
            data-testid="profile-top-btn"
            src={ profileIcon }
          >
            <img src={ profileIcon } alt="profileIcon" />
          </button>

          <h1 data-testid="page-title">{ title }</h1>

          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ handleSearch }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="searchIcon" />
          </button>

        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="header">

        <button
          type="button"
          onClick={ handleProfile }
          data-testid="profile-top-btn"
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="profileIcon" />
        </button>

        <h1 data-testid="page-title">{ title }</h1>

      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  handleSearch: PropTypes.func,
  searchRender: PropTypes.bool,
}.isRequired;

export default Header;
