import React from 'react';

import Header from '../Components/Header';
import DrinksIngredient from '../Components/DrinksIngredient';
import Footer from '../Components/Footer';

function DrinksIngredients() {
  return (
    <>
      <Header title="Explore Ingredients" />
      <DrinksIngredient />
      <Footer />
    </>
  );
}

export default DrinksIngredients;
