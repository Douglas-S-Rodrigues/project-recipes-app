import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import './DetailsPage.css';

function CardFoods() {
  const { foods, getApiFoods } = useContext(RecipesContext);

  const maxLength = 6;

  useEffect(() => {
    getApiFoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return foods.map((food, index) => {
    if (index < maxLength) {
      return (
        <div
          className="scroll"
          key={ index }
          data-testid={ `${index}-recomendation-title` }
        >
          <Link
            to={ `/foods/${food.idMeal}` }
            key={ food.idMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              className="img-recomendation"
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
        </div>
      );
    } return null;
  });
}

export default CardFoods;
