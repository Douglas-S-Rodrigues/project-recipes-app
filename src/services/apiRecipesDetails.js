async function apiRecipesDetails(type, id) {
  const url = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default apiRecipesDetails;
