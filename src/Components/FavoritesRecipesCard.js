import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { removeFavorites } from '../services/favoriteStorage';

const copy = require('clipboard-copy');

function FavoritesRecipesCard() {
  const [favorites, setFavorites] = useState([]);
  const [link, setLink] = useState(false);
  const [fav, setFav] = useState(true);
  const copyMsg = 'Link copied!';

  useEffect(() => {
    function getFavRecipesStorage() {
      const getFav = JSON.parse(localStorage.getItem('favoriteRecipes'));

      setFavorites(getFav);
    }
    getFavRecipesStorage();
  }, []);

  function recipeType(favorite) {
    if (favorite.type !== 'food') {
      return (`${favorite.alcoholicOrNot}`);
    } return (`${favorite.nationality} - ${favorite.category}`);
  }

  function getLinkToShare(type, id) {
    setLink(true);
    const url = `http://localhost:3000/${type}s/${id}`;
    copy(url);
  }

  const handleFavorite = () => {
    if (fav) {
      setFav(true);
      removeFavorites(id);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Foods
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      { favorites.map((favorite, index) => (
        <div key={ favorite.name }>
          <Link to={ `/${favorite.type}s/${favorite.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ favorite.image }
              alt={ favorite.name }
              width="100"
              height="100"
            />
            <p data-testid={ `${index}-horizontal-name` }>{ favorite.name }</p>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipeType(favorite)}
          </p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => getLinkToShare(favorite.type, favorite.id) }
          >
            <img
              src={ shareIcon }
              alt="share"
            />
            ...
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            onClick={ handleFavorite }
          >
            <img
              src={ blackHeartIcon }
              alt="favorite"
            />
            ...
          </button>
          <p>{link && copyMsg }</p>
        </div>
      ))}
    </div>
  );
}

export default FavoritesRecipesCard;
