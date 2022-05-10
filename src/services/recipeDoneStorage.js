export function addRecipeDoneStorage(type, recipes) {
  const done = JSON.parse(localStorage.getItem('doneRecipe')) || [];
  const doneRecipe = [...done, recipes];
  localStorage.setItem('doneRecipe', JSON.stringify(doneRecipe));
}

export function getRecipeDpneStorage() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipe'));
  return recipesDone;
}
