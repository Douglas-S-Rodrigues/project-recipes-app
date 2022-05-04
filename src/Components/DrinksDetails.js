import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import heartIcon from '../images/whiteHeartIcon.svg';

function DrinksDetails() {
  const { id } = useParams();
  const { drinksDetails, getApiDrinksDetails } = useContext(RecipesContext);

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
      {/* <ul>
        <li data-testid={ `${index}-ingredient-name-and-measure` }>ingredients</li>
      </ul> */}
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
