import React from 'react';
import FoodRecipes from '../Components/FoodRecipes';
import DrinksRecipes from '../Components/DrinksRecipes';

function Foods() {
  return (
    <div>
      <h1>Foods</h1>
      <FoodRecipes />
      <DrinksRecipes />
    </div>
  );
}

export default Foods;
