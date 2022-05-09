import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import RecipesContext from '../context/RecipesContext';

function FoodsIngredients() {
  const { foodIngredients, getFoodIngredientsApi } = useContext(RecipesContext);

  useEffect(() => {
    getFoodIngredientsApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return foodIngredients.map((food, index) => {
    if (index < maxLength) {
      return (
        <Link
          key={ index }
          to="/foods"
        >
          <div key={ food.idIngredient } data-testid={ `${index}-ingredient-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${food.strIngredient}-Small.png` }
              alt={ food.strIngredient }
              width="100"
              height="100"
            />
            <h6 data-testid={ `${index}-card-name` }>
              { food.strIngredient }
            </h6>
          </div>
        </Link>
      );
    } return null;
  });
}

export default FoodsIngredients;
