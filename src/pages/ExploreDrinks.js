import React, { useContext, useEffect } from 'react';

import RecipesContext from '../context/RecipesContext';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExploreDrinks() {
  const { randomDrink, getRandomDrink } = useContext(RecipesContext);

  useEffect(() => {
    getRandomDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explore Drinks" searchRender={ false } />

      <div>

        <a href="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </a>

        <a href={ `/drinks/${randomDrink.idDrink}` }>
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

export default ExploreDrinks;
