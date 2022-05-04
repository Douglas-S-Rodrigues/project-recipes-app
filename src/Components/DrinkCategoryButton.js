import React, { useContext, useEffect, useState } from 'react';
import RecipesContext from '../context/RecipesContext';
import getDrinkCategoryFilter from '../services/apiDrinkCategoryFilter';

function DrinkCategoryButton() {
  const {
    getDrinkCategoryApi,
    drinkCategory,
    setDrinkState,
    drinkState,
  } = useContext(RecipesContext);

  const [whitoutFilter, setWithoutFilter] = useState('');
  const [toggle, setToggle] = useState(false);

  async function handleClick({ target }) {
    setWithoutFilter(drinkState);
    if (!toggle) {
      const { drinks } = await getDrinkCategoryFilter(target.value);
      setDrinkState(drinks);
      setToggle(!toggle);
    } else if (toggle) {
      setDrinkState(whitoutFilter);
      setToggle(!toggle);
    }
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
