async function getFoodCategoryFilter(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default getFoodCategoryFilter;
