import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function DrinksRecipes() {
  const { drinkState, getApiDrinks } = useContext(RecipesContext);

  useEffect(() => {
    getApiDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return drinkState.map((drink, index) => {
    if (index < maxLength) {
      return (
        <Link
          to={ `/drinks/${drink.idDrink}` }
          key={ drink.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            width="100"
            height="100"
          />
          <h6 data-testid={ `${index}-card-name` }>
            { drink.strDrink }
          </h6>
        </Link>
      );
    } return null;
  });
}

export default DrinksRecipes;
