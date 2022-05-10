function tokenStorage(email) {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
  const user = JSON.stringify({
    email,
  });
  localStorage.setItem('user', user);
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
}

export default tokenStorage;
