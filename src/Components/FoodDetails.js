import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function FoodsDetails() {
  const { id } = useParams();
  const { foodsDetails, getApiFoodsDetails } = useContext(RecipesContext);
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
      <p data-testid="instructions">{ foodsDetails.strInstructions }</p>
      <iframe
        src={ strYoutube() }
        title="video"
      />
      {/* <div data-testid={ `${index}-recomendation-card` }>
        Card da receita
      </div> */}
      <button type="button" data-testid="start-recipe-btn">
        Iniciar receita
      </button>
    </div>
  );
}

export default FoodsDetails;
