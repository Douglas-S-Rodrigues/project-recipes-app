import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import './DetailsPage.css';

function CardDrinks() {
  const { drinkState, getApiDrinks } = useContext(RecipesContext);

  const maxLength = 6;

  useEffect(() => {
    getApiDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return drinkState.map((drink, index) => {
    if (index < maxLength) {
      return (
        <div
          className="scroll"
          key={ index }
          data-testid={ `${index}-recomendation-title` }
        >
          <Link
            to={ `/drinks/${drink.idDrink}` }
            key={ drink.idDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              className="img-recomendation"
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              width="100"
              height="100"
            />
            <h6 data-testid={ `${index}-card-name` }>
              { drink.strDrink }
            </h6>
          </Link>
        </div>
      );
    } return null;
  });
}

export default CardDrinks;
