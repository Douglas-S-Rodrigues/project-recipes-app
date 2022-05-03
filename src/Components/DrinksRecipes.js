import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

function FoodsRecipes() {
  const { drinkState, getApiDrinks } = useContext(RecipesContext);

  useEffect(() => {
    getApiDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return drinkState.map((drink, index) => {
    if (index < maxLength) {
      return (
        <a href={ `/foods/${drink.idDrink}` }>
          <div key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
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
          </div>
        </a>
      );
    } return null;
  });
}

export default FoodsRecipes;
