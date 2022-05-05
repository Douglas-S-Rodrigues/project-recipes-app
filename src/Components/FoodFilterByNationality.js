/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import RecipesContext from '../context/RecipesContext';
import getApiFoodCategoryByNationalityFilter from
'../services/apiFoodCategoryByNationalityFilter';

function FoodFilterByNationality() {
  const {
    nationalities,
    getFoodCategoryApiByNationality,
    setFoods,
    foods,
  } = useContext(RecipesContext);

  const [withoutFilter, setWithoutFilter] = useState('');
  const arr = [{ strArea: 'All' }, ...nationalities];

  async function handleChange({ target }) {
    setWithoutFilter(foods);
    if (target.value !== 'All') {
      const { meals } = await getApiFoodCategoryByNationalityFilter(target.value);
      setFoods(meals);
    } else if (target.value === 'All') {
      setFoods(withoutFilter);
    }
  }

  useEffect(() => {
    getFoodCategoryApiByNationality();
  }, []);

  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      onChange={ (e) => handleChange(e) }
    >
      {arr.map(({ strArea }) => (
        <option
          key={ strArea }
          data-testid={ `${strArea}-option` }
          value={ strArea }
        >
          { strArea }
        </option>
      ))}
    </select>
  );
}

export default FoodFilterByNationality;
