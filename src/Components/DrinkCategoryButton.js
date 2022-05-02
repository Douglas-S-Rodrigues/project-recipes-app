import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

function DrinkCategoryButton() {
  const { getDrinkCategoryApi, drinkCategory } = useContext(RecipesContext);

  useEffect(() => {
    getDrinkCategoryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;

  return drinkCategory.map((category, index) => {
    if (index < maxLength) {
      return (
        <div>
          <button
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </button>
        </div>
      );
    } return null;
  });
}

export default DrinkCategoryButton;
