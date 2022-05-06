export async function apiFoodRandom() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function apiDrinkRandom() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  const data = response.json();
  return data;
}
