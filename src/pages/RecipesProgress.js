import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';
import recipeDoneStorage from '../services/recipeDoneStorage';
/* import { removeInProgressItem } from '../services/InProgressStorage'; */

function RecipesProgress() {
  const { id } = useParams();
  const {
    foodsDetails, ingredients, measure, inProgress, setInProgress,
  } = useContext(RecipesContext);
  const [check, setCheckedState] = useState(new Set());
  const [btnStatus, setBtnStatus] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState();

  const buttonDisabled = () => {
    const elements = document.getElementsByName('checkbox');
    let checkedCount = 0;
    elements.forEach((element) => {
      if (element.checked) {
        checkedCount += 1;
      }
      if (checkedCount === elements.length) {
        setBtnStatus(false);
      } else {
        setBtnStatus(true);
      }
    });
  };

  const handleClick = () => {
    setDoneRecipes({
      id,
      type: 'food',
      nationality: foodsDetails.strArea,
      category: foodsDetails.strCategory,
      alcoholicOrNot: '',
      name: foodsDetails.strMeal,
      image: foodsDetails.strMealThumb,
      doneDate: new Date().toLocaleString(),
      tags: [foodsDetails.strTags],
    });
    recipeDoneStorage(doneRecipes);
  };

  const handleOnChange = (index) => {
    const newSelectedItems = new Set(check);
    if (!newSelectedItems.has(index)) {
      newSelectedItems.add(index);
      setInProgress({
        ...inProgress,
        meals: {
          ...inProgress.meals, [id]: [...inProgress.meals[id], ingredients[index]] },
      });
    } else {
      newSelectedItems.delete(index);
      /* removeInProgressItem(ingredients[index], meals, [id]); */
    }
    setCheckedState(newSelectedItems);
    buttonDisabled();
  };

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
      <button type="button">
        <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      </button>
      <button type="button">
        <img src={ heartIcon } alt="heartIcon" data-testid="favorite-btn" />
      </button>
      <h4 data-testid="recipe-category">{ foodsDetails.strCategory }</h4>
      <ul>
        <h3>Ingredients</h3>
        <div className="d-flex flex-column">
          { ingredients.map((strIngredient, index) => (
            <label
              htmlFor={ strIngredient }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              className={ check.has(index) ? 'text-decoration-line-through' : '' }
            >
              <input
                id={ index }
                type="checkbox"
                name="checkbox"
                checked={ check.has(index) }
                onChange={ () => handleOnChange(index) }
              />
              { `${strIngredient} - ${measure[index]}` }
            </label>
          ))}
        </div>
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">{ foodsDetails.strInstructions }</p>
      <button
        type="button"
        className="w-100 fixed-bottom p-2 btn btn-success start-recipe"
        data-testid="finish-recipe-btn"
        disabled={ btnStatus }
        onClick={ handleClick }
      >
        Finalizar receita
      </button>
    </div>
  );
}

export default RecipesProgress;
