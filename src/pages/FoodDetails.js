/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams /* useHistory */ } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { addFavorites, getFavorites,
  removeFavorites } from '../services/favoriteStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardDrinks from '../Components/CardDrinks';
import '../Components/DetailsPage.css';
import BtnFoodDetails from '../Components/btnFoodDetails';
import { getRecipeDoneStorage } from '../services/recipeDoneStorage';

const copy = require('clipboard-copy');

function FoodsDetails() {
  const { id } = useParams();
  const { foodsDetails, getApiFoodsDetails,
    filterMeasure, filterIngredients,
  } = useContext(RecipesContext);

  const [favorite, setFavorite] = useState(false);
  const [detailFoods, setDetailFoods] = useState({});
  const [link, setLink] = useState(false);
  const [btnValid, setBtnValid] = useState(false);

  const arrayIngredients = filterIngredients();
  const arrayMeasure = filterMeasure();

  const copyMsg = 'Link copied!';

  function strYoutube() {
    if (typeof foodsDetails.strYoutube === 'string') {
      return foodsDetails.strYoutube.replace('watch?v=', 'embed/');
    }
  }

  useEffect(() => {
    setDetailFoods({
      id,
      type: 'food',
      nationality: foodsDetails.strArea,
      category: foodsDetails.strCategory,
      alcoholicOrNot: '',
      name: foodsDetails.strMeal,
      image: foodsDetails.strMealThumb,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foodsDetails]);

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
      removeFavorites(id);
    } else {
      setFavorite(true);
      addFavorites({ ...detailFoods });
    }
  };

  useEffect(() => {
    const recipe = getRecipeDoneStorage();
    const valid = recipe.some((item) => (item.id === id));
    setBtnValid(valid);
  }, []);

  useEffect(() => {
    getApiFoodsDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const favorites = getFavorites() || [];
    favorites.forEach((item) => {
      if (item.id === id) setFavorite(true);
    });
  }, [id]);

  function getLinkToShare() {
    setLink(true);
    const url = `http://localhost:3000/foods/${id}`;
    console.log(url);
    copy(url);
  }

  return (
    <div>

      <img
        src={ foodsDetails.strMealThumb }
        alt={ foodsDetails.strMeal }
        data-testid="recipe-photo"
        width="200"
        height="200"
      />

      <h2 data-testid="recipe-title">{ foodsDetails.strMeal }</h2>
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

      <h4 data-testid="recipe-category">{ foodsDetails.strCategory }</h4>

      <ul>

        <h3>Ingredients</h3>

        { arrayIngredients.map((strIngredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${strIngredient} - ${arrayMeasure[index]}` }
          </li>
        ))}

      </ul>

      <h4>Instruções</h4>
      <p data-testid="instructions">{ foodsDetails.strInstructions }</p>
      <iframe
        src={ strYoutube() }
        title="video"
        data-testid="video"
      />

      <div
        className="d-flex flex-nowrap overflow-auto"
        style={ { gap: '10px' } }
      >
        <h4>Recomedadas</h4>
        <CardDrinks />
      </div>
      { !btnValid
        ? (
          <BtnFoodDetails
            arrayIngredients={ arrayIngredients }
            arrayMeasure={ arrayMeasure }
            id={ id }
            type="meals"
          />)
        : ''}
    </div>
  );
}

export default FoodsDetails;
