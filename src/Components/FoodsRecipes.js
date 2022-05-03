import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

function FoodsRecipes() {
  const { foods, getApiFoods } = useContext(RecipesContext);

  useEffect(() => {
    getApiFoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return foods.map((food, index) => {
    if (index < maxLength) {
      return (
        <a href={ `/foods/${food.idMeal}` }>
          <div key={ food.idMeal } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb }
              alt={ food.strMeal }
              width="100"
              height="100"
            />
            <h6 data-testid={ `${index}-card-name` }>
              { food.strMeal }
            </h6>
          </div>
        </a>
      );
    } return null;
  });
}

export default FoodsRecipes;
