import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExploreFoods() {
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

        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>

      </div>

      <Footer />
    </>
  );
}

export default ExploreFoods;
