import React from 'react';
import FoodFilterByNationality from '../Components/FoodFilterByNationality';
import FoodNationalityRecipes from '../Components/FoodNationalityRecipes';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function FoodsNationalities() {
  return (
    <>
      <Header title="Explore Nationalities" searchRender />
      <div>
        <FoodFilterByNationality />
      </div>
      <FoodNationalityRecipes />

      <Footer />
    </>
  );
}

export default FoodsNationalities;
