export function addInProgressRecipes(recipes) {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const newInProgress = { ...inProgress, ...recipes };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgress));
}

export function removeInProgressItem(ingredient, type, id) {
  const item = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const newItem = item.filter((i) => i[type][id] !== ingredient);
  localStorage.setItem('inProgressRecipes', JSON.stringify(newItem));
}

/* export const removeFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const newFavorites = favorites.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

export const getFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return favorites;
}; */
