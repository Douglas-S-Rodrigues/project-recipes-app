export function addRecipeDoneStorage(type, recipes) {
  const done = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const doneRecipe = [...done, recipes];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
}

export function getRecipeDoneStorage() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return recipesDone;
}
