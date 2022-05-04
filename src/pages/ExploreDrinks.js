import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExploreDrinks() {
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

export default ExploreDrinks;
