async function getApiFoodCategoryByNationalityFilter(nationality) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default getApiFoodCategoryByNationalityFilter;
