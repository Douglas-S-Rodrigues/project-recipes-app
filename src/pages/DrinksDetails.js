/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { addFavorites, getFavorites,
  removeFavorites } from '../services/favoriteStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardFoods from '../Components/CardFoods';
import '../Components/DetailsPage.css';
import BtnFoodDetails from './btnDrinksDetails';
import { getRecipeDoneStorage } from '../services/recipeDoneStorage';

const copy = require('clipboard-copy');

function DrinksDetails() {
  const { id } = useParams();
  const { drinksDetails, getApiDrinksDetails,
    filterIngredientsDrinks, filterMeasureDrinks } = useContext(RecipesContext);

  const [favorite, setFavorite] = useState(false);
  const [detailsDrinks, setDetailsDrinks] = useState({});
  const [link, setLink] = useState(false);
  const [btnValid, setBtnValid] = useState(false);

  const copyMsg = 'Link copied!';

  useEffect(() => {
    setDetailsDrinks({
      id,
      type: 'drink',
      nationality: '',
      category: drinksDetails.strCategory,
      alcoholicOrNot: drinksDetails.strAlcoholic,
      name: drinksDetails.strDrink,
      image: drinksDetails.strDrinkThumb,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinksDetails]);

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
    const drinks = getRecipeDoneStorage();
    const valid = drinks.some((item) => (item.id === id));
    setBtnValid(valid);
  }, []);

  useEffect(() => {
    getApiDrinksDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h4>Instru????es</h4>
      <p data-testid="instructions">{ drinksDetails.strInstructions }</p>
      <div
        className="d-flex flex-nowrap overflow-auto"
        style={ { gap: '10px' } }
      >
        <h4>Recomedadas</h4>
        <CardFoods />
      </div>
      {
        !btnValid
          ? (
            <BtnFoodDetails
              arrayIngredients={ arrayIngredients }
              arrayMeasure={ arrayMeasure }
              id={ id }
              type="cocktails"
            />)
          : ''
      }
    </div>
  );
}

export default DrinksDetails;
