import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function DrinksDetails() {
  const { id } = useParams();
  const { drinksDetails, getApiDrinksDetails } = useContext(RecipesContext);
  const details = Object.keys(drinksDetails);

  const filterIngredients = () => {
    const ingredientsFilter = [];
    details.forEach((ingredient) => {
      if (ingredient.includes('strIngredient') && drinksDetails[ingredient]) {
        ingredientsFilter.push(drinksDetails[ingredient]);
      }
    });
    return ingredientsFilter;
  };

  const filterMeasure = () => {
    const measureFilter = [];
    details.forEach((measure) => {
      if (measure.includes('strMeasure')) {
        measureFilter.push(drinksDetails[measure]);
      }
    });
    const newMeasureFilter = measureFilter.filter((measure) => measure !== ' ');
    return newMeasureFilter;
  };

  const arrayIngredients = filterIngredients();
  const arrayMeasure = filterMeasure();

  useEffect(() => {
    getApiDrinksDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img
        src={ drinksDetails.strDrinkThumb }
        alt={ drinksDetails.strDrink }
        data-testid="recipe-photo"
        width="200"
        heigth="200"
      />
      <h2 data-testid="recipe-title">{ drinksDetails.strDrink }</h2>
      <button type="button">
        <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      </button>
      <button type="button">
        <img src={ heartIcon } alt="heartIcon" data-testid="favorite-btn" />
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
      {/* <div data-testid={ `${index}-recomendation-card` }>
        Card da receita
      </div> */}
      <button type="button" data-testid="start-recipe-btn">
        Iniciar receita
      </button>
    </div>
  );
}

export default DrinksDetails;
