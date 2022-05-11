import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import { getInProgressRecipes } from '../services/InProgressStorage';

function BtnFoodDetails({ arrayMeasure, id, arrayIngredients }) {
  const history = useHistory();
  const {
    inProgressMeals, setInProgressMeals, setMeasure, setIngredients,
  } = useContext(RecipesContext);

  const [validBtn, setValidBtn] = useState(false);

  useEffect(() => {
    const inProgressRecipes = getInProgressRecipes();
    if (inProgressRecipes.meals[id] && inProgressRecipes.meals[id] !== undefined) {
      setValidBtn(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setIngredients(arrayIngredients);
    setMeasure(arrayMeasure);
    setInProgressMeals({
      ...inProgressMeals,
      meals: { ...inProgressMeals.meals, [id]: [] },
    });
    history.push(`/foods/${id}/in-progress`);
  };

  return (
    <button
      type="button"
      className="w-100 fixed-bottom p-2 btn btn-success start-recipe"
      data-testid="start-recipe-btn"
      onClick={ handleClick }
    >
      { !validBtn ? 'Iniciar receita' : 'Continuar receita' }
    </button>
  );
}

BtnFoodDetails.propTypes = {
  id: PropTypes.string,
  arrayMeasure: PropTypes.arrayOf(PropTypes.string),
  arrayIngredients: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default BtnFoodDetails;
