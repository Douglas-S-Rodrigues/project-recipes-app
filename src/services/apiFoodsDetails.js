async function apiFoodsDetails(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default apiFoodsDetails;
