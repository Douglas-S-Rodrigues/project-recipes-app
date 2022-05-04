import React from 'react';

import Header from '../Components/Header';
import FoodsIngredient from '../Components/FoodsIngredient';
import Footer from '../Components/Footer';

function FoodsIngredients() {
  return (
    <>
      <Header title="Explore Ingredients" searchRender={ false } />
      <FoodsIngredient />
      <Footer />
    </>
  );
}

export default FoodsIngredients;
