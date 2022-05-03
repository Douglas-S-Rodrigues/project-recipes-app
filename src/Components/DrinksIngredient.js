import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

function DrinksIngredient() {
  const { drinkIngredients, getDrinkIngredientsApi } = useContext(RecipesContext);

  useEffect(() => {
    getDrinkIngredientsApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return drinkIngredients.map((drink, index) => {
    if (index < maxLength) {
      return (
        <div key={ index } data-testid={ `${index}-ingredient-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png` }
            alt={ drink.strIngredient1 }
            width="100"
            height="100"
          />
          <h6 data-testid={ `${index}-card-name` }>
            { drink.strIngredient1 }
          </h6>
        </div>
      );
    } return null;
  });
}

export default DrinksIngredient;
