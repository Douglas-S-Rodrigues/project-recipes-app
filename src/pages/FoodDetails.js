/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { addFavorites, getFavorites,
  removeFavorites } from '../services/favoriteStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CardDrinks from '../Components/CardDrinks';
import '../Components/DetailsPage.css';

const copy = require('clipboard-copy');

function FoodsDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { foodsDetails, getApiFoodsDetails, setIngredients,
    filterMeasure, filterIngredients, setMeasure, setInProgress,
    inProgress,
  } = useContext(RecipesContext);

  const [favorite, setFavorite] = useState(false);
  const [detailFoods, setDetailFoods] = useState({});
  const [link, setLink] = useState(false);

  const arrayIngredients = filterIngredients();
  const arrayMeasure = filterMeasure();

  const copyMsg = 'Link copied!';

  function strYoutube() {
    if (typeof foodsDetails.strYoutube === 'string') {
      return foodsDetails.strYoutube.replace('watch?v=', 'embed/');
    }
  }

  const foods = () => {
    setDetailFoods({
      id,
      type: 'food',
      nationality: foodsDetails.strArea,
      category: foodsDetails.strCategory,
      alcoholicOrNot: '',
      name: foodsDetails.strMeal,
      image: foodsDetails.strMealThumb,
    });
  };

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
      removeFavorites(id);
    } else {
      setFavorite(true);
      addFavorites({ ...detailFoods });
    }
  };

  const handleClick = () => {
    setIngredients(arrayIngredients);
    setMeasure(arrayMeasure);
    setInProgress({
      ...inProgress,
      meals: { ...inProgress.meals, [id]: [] },
    });
    history.push(`/foods/${id}/in-progress`);
  };

  useEffect(() => {
    getApiFoodsDetails(id);
    foods();
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

      <button
        type="button"
        className="w-100 fixed-bottom p-2 btn btn-success start-recipe"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
      >
        Iniciar receita
      </button>

    </div>
  );
}

export default FoodsDetails;
