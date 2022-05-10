import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { addFavorites, getFavorites,
  removeFavorites } from '../services/favoriteStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardFoods from '../Components/CardFoods';
import '../Components/DetailsPage.css';

const copy = require('clipboard-copy');

function DrinksDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { drinksDetails, getApiDrinksDetails,
    filterIngredientsDrinks, filterMeasureDrinks } = useContext(RecipesContext);
  const [favorite, setFavorite] = useState(false);
  const [detailsDrinks, setDetailsDrinks] = useState({});
  const [link, setLink] = useState(false);

  const copyMsg = 'Link copied!';

  const drinks = () => {
    setDetailsDrinks({
      id,
      type: 'drink',
      nationality: '',
      category: '',
      alcoholicOrNot: drinksDetails.strAlcoholic,
      name: drinksDetails.strDrink,
      image: drinksDetails.strDrinkThumb,
    });
  };

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
      removeFavorites(id);
    } else {
      setFavorite(true);
      addFavorites({ ...detailsDrinks });
    }
  };

  useEffect(() => {
    const favorites = getFavorites() || [];
    favorites.forEach((item) => {
      if (item.id === id) setFavorite(true);
    });
  }, [id]);

  const arrayIngredients = filterIngredientsDrinks();
  const arrayMeasure = filterMeasureDrinks();

  useEffect(() => {
    getApiDrinksDetails(id);
    drinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    history.push(`/drinks/${id}/in-progress`);
  };

  function getLinkToShare() {
    setLink(true);
    const url = `http://localhost:3000/drinks/${id}`;
    console.log(url);
    copy(url);
  }

  return (
    <div>
      <img
        src={ drinksDetails.strDrinkThumb }
        alt={ drinksDetails.strDrink }
        data-testid="recipe-photo"
        width="200"
        height="200"
      />
      <h2 data-testid="recipe-title">{ drinksDetails.strDrink }</h2>
      <p>{ link && copyMsg }</p>
      <button
        type="button"
        data-testid="share-btn"
        src={ shareIcon }
        onClick={ getLinkToShare }
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        type="button"
        onClick={ handleFavorite }
        data-testid="favorite-btn"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          alt={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }
        />
      </button>
      <h5 data-testid="recipe-category">{ drinksDetails.strAlcoholic }</h5>
      <ul>
        <h3>Ingredients</h3>
        {
          arrayIngredients.map((strIngredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${strIngredient} - ${arrayMeasure[index]}` }
            </li>
          ))
        }
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">{ drinksDetails.strInstructions }</p>
      <div
        className="d-flex flex-nowrap overflow-auto"
        style={ { gap: '10px' } }
      >
        <h4>Recomedadas</h4>
        <CardFoods />
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
        className="w-100 fixed-bottom p-2 btn btn-success"
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default DrinksDetails;
