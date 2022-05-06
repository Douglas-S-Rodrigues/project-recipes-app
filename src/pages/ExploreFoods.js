import React, { useContext, useEffect } from 'react';

import RecipesContext from '../context/RecipesContext';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExploreFoods() {
  const { randomFood, getRandomRecipe } = useContext(RecipesContext);

  useEffect(() => {
    getRandomRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explore Foods" searchRender={ false } />

      <div>

        <a href="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </a>

        <a href="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </a>

        <a href={ `/foods/${randomFood.idMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </a>

      </div>

      <Footer />
    </>
  );
}

export default ExploreFoods;
