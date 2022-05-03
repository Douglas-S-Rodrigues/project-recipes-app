import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';

function FoodCategoryButton() {
  const { getFoodCategoryApi, foodCategory } = useContext(RecipesContext);

  useEffect(() => {
    getFoodCategoryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;

  return foodCategory.map((category, index) => {
    if (index < maxLength) {
      return (
        <div key={ index }>
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

export default FoodCategoryButton;
