import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function FoodNationalityRecipes() {
  const { foods, getApiFoods } = useContext(RecipesContext);

  useEffect(() => {
    getApiFoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return foods.map((food, index) => {
    if (index < maxLength) {
      return (
        <Link
          to={ `/foods/${food.idMeal}` }
          key={ food.idMeal }
          data-testid={ `${index}-recipe-card` }
        >
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
        </Link>
      );
    } return null;
  });
}

export default FoodNationalityRecipes;
