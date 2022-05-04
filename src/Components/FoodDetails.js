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
      if (measure.includes('strMeasure') && foodsDetails[measure]) {
        measureFilter.push(foodsDetails[measure]);
      }
    });
    const a = measureFilter.filter((measure) => measure.includes(' '));
    return a;
  };

  useEffect(() => {
    console.log(filterIngredients());
    console.log(filterMeasure());
  }, [details]);

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
      <h5 data-testid="recipe-category">{ foodsDetails.strCategory }</h5>
      <ul>
        Ingredients
        {
          details.map(({ strMeasure1, strIngredient1, index }) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${strIngredient1} - ${strMeasure1}` }
            </li>
          ))
        }
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">{ foodsDetails.strInstructions }</p>
      <iframe
        src={ foodsDetails.strYoutube }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
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
