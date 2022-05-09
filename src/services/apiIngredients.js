export async function getFoodIngredients() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function getDrinkIngredients() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function getListFoodIngredients(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function getListDrinkIngredients(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}
