export function addInProgressRecipes(recipes, type) {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const newInProgress = {
    ...inProgress, [type]: { ...inProgress[type], ...recipes[type] } };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgress));
}

export function removeInProgressItem(id, type) {
  const itens = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const newItem = Object.keys(itens[type]).filter((item) => item.id !== id);
  delete newItem.meals.id;
  localStorage.setItem('inProgressRecipes', JSON.stringify(newItem));
}

export const getInProgressRecipes = () => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {}, meals: {},
  };
  return inProgressRecipes;
};
