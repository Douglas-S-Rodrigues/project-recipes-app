async function getDrinkCategoryFilter(category) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default getDrinkCategoryFilter;
