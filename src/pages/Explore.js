import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Explore() {
  return (
    <>
      <Header title="Explore" />

      <div>

        <a href="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </a>

        <a href="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </a>

      </div>

      <Footer />
    </>
  );
}

export default Explore;
