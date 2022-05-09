import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getListFoodIngredients } from '../services/apiIngredients';
import RecipesContext from '../context/RecipesContext';

function FoodsIngredients() {
  const { foodIngredients, getFoodIngredientsApi, setFoods } = useContext(RecipesContext);
  const history = useHistory();

  async function handleClick(ingredient) {
    const { meals } = await getListFoodIngredients(ingredient);
    setFoods(meals);
    history.push('/foods');
    setFoods(meals);
  }

  useEffect(() => {
    getFoodIngredientsApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 12;

  return foodIngredients.map((food, index) => {
    if (index < maxLength) {
      return (
        <button
          type="button"
          key={ index }
          onClick={ () => handleClick(food.strIngredient) }
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
        </button>
      );
    } return null;
  });
}

export default FoodsIngredients;
