import React from 'react';
import { Link } from 'react-router-dom';

function FavoritesRecipesCard() {
  return (
    <div>
      <div>
        <Link
          to={ `/drinks/${drink.idDrink}` }
          key={ drink.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            width="100"
            height="100"
          />
        </Link>
        <h6 data-testid={ `${index}-card-name` }>
          { drink.strDrink }
        </h6>
      </div>
    </div>
  );
}

export default FavoritesRecipesCard;
