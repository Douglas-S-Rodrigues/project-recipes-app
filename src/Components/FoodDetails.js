/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';
import CardDrinks from './CardDrinks';
import './DetailsPage.css';

function FoodsDetails() {
  const { id } = useParams();
  const history = useHistory();
  const {
    foodsDetails,
    getApiFoodsDetails,
  } = useContext(RecipesContext);
  const details = Object.keys(foodsDetails);

  const filterIngredients = () => {
    const ingredientsFilter = [];
    details.forEach((ingredient) => {
      if (ingredient.includes('strIngredient') && foodsDetails[ingredient]) {
        ingredientsFilter.push(foodsDetails[ingredient]);
      }
    });
    return ingredientsFilter;
  };

  const filterMeasure = () => {
    const measureFilter = [];
    details.forEach((measure) => {
      if (measure.includes('strMeasure')) {
        measureFilter.push(foodsDetails[measure]);
      }
    });
    const newMeasureFilter = measureFilter.filter((measure) => measure !== ' ');
    return newMeasureFilter;
  };

  const arrayIngredients = filterIngredients();
  const arrayMeasure = filterMeasure();

  function strYoutube() {
    if (typeof foodsDetails.strYoutube === 'string') {
      return foodsDetails.strYoutube.replace('watch?v=', 'embed/');
    }
  }

  useEffect(() => {
    getApiFoodsDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (ingredient, measure) => {
    history.push({
      pathname: `/progress/${id}`,
      state: { arrayIn: ingredient },
      state1: { arrayMe: measure },
    });
  };

  return (
    <div>
      <img
        src={ foodsDetails.strMealThumb }
        alt={ foodsDetails.strMeal }
        data-testid="recipe-photo"
        width="200"
        heigth="200"
      />
      <h2 data-testid="recipe-title">{ foodsDetails.strMeal }</h2>
      <button type="button">
        <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      </button>
      <button type="button">
        <img src={ heartIcon } alt="heartIcon" data-testid="favorite-btn" />
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
        onClick={ (e) => handleClick(e.arrayIngredients, e.arrayMeasure) }
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default FoodsDetails;
