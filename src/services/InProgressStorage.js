export function addInProgressRecipes(recipes, type) {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const newInProgress = {
    ...inProgress, [type]: { ...inProgress[type], ...recipes[type] } };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgress));
}

export function removeInProgressItem(id, type) {
  const newItem = JSON.parse(localStorage.getItem('inProgressRecipes'));
  delete newItem[type][id];
  localStorage.setItem('inProgressRecipes', JSON.stringify(newItem));
}

export const getInProgressRecipes = () => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {}, meals: {},
  };
  return inProgressRecipes;
};
