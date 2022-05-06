function recipeDoneStorage(recipes) {
  const doneRecipe = JSON.stringify([{
    ...recipes, recipes,
  }]);
  localStorage.setItem('doneRecipe', doneRecipe);
}
export default recipeDoneStorage;
