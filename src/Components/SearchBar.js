import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
// import { useSearchBar } from '../context/RecipesContext';
// import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar() {
  const { searchItem } = useContext(RecipesContext);
  return (
    <form onSubmit={ searchItem } className="search-container">
      <input
        data-testid="search-input"
        type="text"
        className="search-input"
        id="searchinput"
        placeholder="Search"
      />
      <div className="search-buttons">
        <label htmlFor="ingredient">
          <input
            className="search-radio-btn"
            data-testid="ingredient-search-radio"
            type="radio"
            id="ingredient"
            name="searchType"
            value="i"
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            className="search-radio-btn"
            data-testid="name-search-radio"
            type="radio"
            id="name"
            name="searchType"
            value="s"
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            className="search-radio-btn"
            data-testid="first-letter-search-radio"
            type="radio"
            id="firstletter"
            name="searchType"
            value="f"
          />
          First Letter
        </label>
      </div>
      <button data-testid="exec-search-btn" type="submit"> Search </button>
    </form>
  );
}

// SearchBar.propTypes = {};

export default SearchBar;
