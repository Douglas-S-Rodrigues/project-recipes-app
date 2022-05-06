import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function RecipesProgress() {
  const { ingredients, measure, foodsDetails } = useContext(RecipesContext);

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
        { ingredients.map((strIngredient, index) => (
          <li key={ index }>
            <label htmlFor={ index }>
              <input
                id={ index }
                onChange={ (event) => handleChange(event) }
                checked={ check }
                name={ index }
                type="checkbox"
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              />
              { `${strIngredient} - ${measure[index]}` }
            </label>
          </li>
        ))}
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">{ foodsDetails.strInstructions }</p>
      <button
        type="button"
        className="w-100 fixed-bottom p-2 btn btn-success start-recipe"
        data-testid="start-recipe-btn"
        /* disabled={ disabled } */
      >
        Finalizar receita
      </button>
    </div>
  );
}

export default RecipesProgress;
