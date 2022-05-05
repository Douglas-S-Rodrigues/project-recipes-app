import React, { useContext, useEffect, useState } from 'react';
import RecipesContext from '../context/RecipesContext';
import getFoodCategoryFilter from '../services/apiFoodCategoryFilter';

function FoodCategoryButton() {
  const {
    getFoodCategoryApi,
    foodCategory,
    setFoods,
    foods,
  } = useContext(RecipesContext);

  const [withoutFilter, setWithoutFilter] = useState('');
  const [toggle, setToggle] = useState(false);
  const [validate, setValidate] = useState('');

  async function handleClick({ target }) {
    setWithoutFilter(foods);
    if (!toggle || validate !== target.value) {
      const { meals } = await getFoodCategoryFilter(target.value);

      setFoods(meals);
      setToggle(!toggle);
      setValidate(target.value);
    } else if (toggle) {
      setFoods(withoutFilter);
      setToggle(!toggle);
    }
  }

  function AllCategories() {
    setFoods(withoutFilter);
  }

  useEffect(() => {
    getFoodCategoryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 5;

  return (
    <>
      <section>
        {foodCategory.map((category, index) => {
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

export default FoodCategoryButton;
