import React from 'react';

import Header from '../Components/Header';
import FavoritesRecipesCard from '../Components/FavoritesRecipesCard';

function FavoriteRecipes() {
  return (
    <>
      <Header title="Favorite Recipes" searchRender={ false } />
      <FavoritesRecipesCard />
    </>

  );
}

export default FavoriteRecipes;
