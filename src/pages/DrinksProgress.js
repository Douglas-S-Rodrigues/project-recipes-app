import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function DrinksProgress() {
  const { id } = useParams();
  const { drinksDetails, getApiDrinksDetails } = useContext(RecipesContext);
  const [check, setCheckedState] = useState(new Set());
  const [btnStatus, setBtnStatus] = useState(false);
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

  const handleOnChange = (itemKey) => {
    const newSelectedItems = new Set(check);
    if (!newSelectedItems.has(itemKey)) {
      newSelectedItems.add(itemKey);
    } else {
      newSelectedItems.delete(itemKey);
    }
    setCheckedState(newSelectedItems);
    buttonDisabled();
  };

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
      <h4 data-testid="recipe-category">{ drinksDetails.strCategory }</h4>
      <ul>
        <h3>Ingredients</h3>
        <div className="d-flex flex-column">
          { filterIngredients().map((strIngredient, index) => (
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
              { `${strIngredient} - ${filterMeasure()[index]}` }
            </label>
          ))}
        </div>
      </ul>
      <h4>Instruções</h4>
      <p data-testid="instructions">{ drinksDetails.strInstructions }</p>
      <button
        type="button"
        className="w-100 fixed-bottom p-2 btn btn-success start-recipe"
        data-testid="finish-recipe-btn"
        disabled={ btnStatus }
      >
        Finalizar receita
      </button>
    </div>
  );
}

export default DrinksProgress;
