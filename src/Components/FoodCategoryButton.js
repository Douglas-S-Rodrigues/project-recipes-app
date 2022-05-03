import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import getFoodCategoryFilter from '../services/apiFoodCategoryFilter';

function FoodCategoryButton() {
  const {
    getFoodCategoryApi,
    foodCategory,
    setFoods,
  } = useContext(RecipesContext);

  async function handleClick({ target }) {
    const { meals } = await getFoodCategoryFilter(target.value);
    setFoods(meals);
  }

  useEffect(() => {
    getFoodCategoryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;

  return foodCategory.map((category, index) => {
    if (index < maxLength) {
      return (
        <button
          key={ category.strCategory }
          type="button"
          value={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ (e) => handleClick(e) }
        >
          {category.strCategory}
        </button>
      );
    } return null;
  });
}

export default FoodCategoryButton;
