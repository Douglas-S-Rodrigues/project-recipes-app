import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header({ title }) {
  const [disableInput, setDisableInput] = useState(false);
  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => {
    if (!disableInput) {
      setDisableInput(true);
    } else {
      setDisableInput(false);
    }
  };

  return (
    <header>
      <div className="header">
        <button
          type="button"
          onClick={ handleProfile }
          data-testid="profile-top-btn"
        >
          <img src={ profileIcon } alt="profileIcon" />
        </button>
        <h1 data-testid="page-title">{ title }</h1>
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ handleSearch }
        >
          <img src={ searchIcon } alt="searchIcon" />
        </button>
      </div>
      { disableInput
        && <input
          type="text"
          placeholder="Buscar"
          className="input"
          data-testid="search-input"
        />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
