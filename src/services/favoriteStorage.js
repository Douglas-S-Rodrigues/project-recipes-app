export const addFavorites = (recipe) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const newFavorites = [...favorites, recipe];
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

export const removeFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const newFavorites = favorites.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

export const getFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return favorites;
};
