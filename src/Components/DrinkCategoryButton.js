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

  const [withoutFilter, setWithoutFilter] = useState('');
  const [toggle, setToggle] = useState(false);
  const [validate, setValidate] = useState('');

  async function handleClick({ target }) {
    setWithoutFilter(drinkState);
    if (!toggle || validate !== target.value) {
      const { drinks } = await getDrinkCategoryFilter(target.value);
      setDrinkState(drinks);
      setToggle(!toggle);
      setValidate(target.value);
    } else if (toggle) {
      setDrinkState(withoutFilter);
      setToggle(!toggle);
    }
  }

  function AllCategories() {
    setDrinkState(withoutFilter);
  }

  useEffect(() => {
    getDrinkCategoryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;
  return (
    <>
      <section>
        { drinkCategory.map((category, index) => {
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
        })}
      </section>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ AllCategories }
      >
        All
      </button>
    </>
  );
}

export default DrinkCategoryButton;
