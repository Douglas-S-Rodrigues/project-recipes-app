import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import getDrinkCategoryFilter from '../services/apiDrinkCategoryFilter';

function DrinkCategoryButton() {
  const {
    getDrinkCategoryApi,
    drinkCategory,
    setDrinkState,
  } = useContext(RecipesContext);

  async function handleClick({ target }) {
    const { drinks } = await getDrinkCategoryFilter(target.value);
    setDrinkState(drinks);
  }

  useEffect(() => {
    getDrinkCategoryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;

  return drinkCategory.map((category, index) => {
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

export default DrinkCategoryButton;
