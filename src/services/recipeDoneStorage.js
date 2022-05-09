function recipeDoneStorage(recipes) {
  const done = JSON.parse(localStorage.getItem('doneRecipe')) || [];
  const doneRecipe = JSON.stringify([
    ...done, recipes,
  ]);
  localStorage.setItem('doneRecipe', doneRecipe);
}

export default recipeDoneStorage;
